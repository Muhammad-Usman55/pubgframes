import { DeviceInfo } from '@/types/device';

interface IndexedDevice {
  model: string;
  compactModel: string;
  fullText: string;
  compactFullText: string;
  words: string[];
  wordSet: Set<string>;
}

const deviceIndexCache = new WeakMap<DeviceInfo, IndexedDevice>();
const brandBucketCache = new WeakMap<DeviceInfo[], Map<string, DeviceInfo[]>>();
const LEV_SCRATCH = new Int32Array(256);

function getIndexedDevice(device: DeviceInfo): IndexedDevice {
  const cached = deviceIndexCache.get(device);
  if (cached) return cached;

  const brand = device.brand.toLowerCase();
  const model = device.model.toLowerCase();
  const chipset = (device.chipset || '').toLowerCase();
  const slug = (device.slug || '').toLowerCase();
  const gpu = (device.gpu || '').toLowerCase();

  const isXiaomiEcosystem =
    device.brandSlug === 'xiaomi' ||
    device.brandSlug === 'redmi' ||
    device.brandSlug === 'poco' ||
    device.brandSlug === 'black-shark';
  const ecoTags = isXiaomiEcosystem ? 'xiaomi mi redmi poco black shark ecosystem' : '';

  const fullText = `${brand} ${model} ${chipset} ${slug} ${gpu} ${ecoTags}`;
  const rawWords = fullText.split(/[\s\-_/()]+/);
  const wordSet = new Set<string>();
  for (let i = 0; i < rawWords.length; i++) {
    const w = rawWords[i];
    if (w) wordSet.add(w);
  }

  const indexed: IndexedDevice = {
    model,
    compactModel: model.replace(/[\s\-_]/g, ''),
    fullText,
    compactFullText: fullText.replace(/[\s\-_]/g, ''),
    words: Array.from(wordSet),
    wordSet
  };

  deviceIndexCache.set(device, indexed);
  return indexed;
}

function getBrandBucketMap(devices: DeviceInfo[]): Map<string, DeviceInfo[]> {
  const cached = brandBucketCache.get(devices);
  if (cached) return cached;

  const sets = new Map<string, Set<DeviceInfo>>();
  for (let i = 0; i < devices.length; i++) {
    const d = devices[i];
    const bKey = d.brand.toLowerCase();
    const sKey = d.brandSlug.toLowerCase();

    let bSet = sets.get(bKey);
    if (!bSet) {
      bSet = new Set<DeviceInfo>();
      sets.set(bKey, bSet);
    }
    bSet.add(d);

    if (sKey !== bKey) {
      let sSet = sets.get(sKey);
      if (!sSet) {
        sSet = new Set<DeviceInfo>();
        sets.set(sKey, sSet);
      }
      sSet.add(d);
    }
  }

  const map = new Map<string, DeviceInfo[]>();
  sets.forEach((set, key) => {
    map.set(key, Array.from(set));
  });
  brandBucketCache.set(devices, map);
  return map;
}

/**
 * Warm up the in-memory fuzzy search index once per device array.
 */
export function prewarmDeviceSearchIndex(devices: DeviceInfo[]): void {
  getBrandBucketMap(devices);
  for (let i = 0; i < devices.length; i++) {
    getIndexedDevice(devices[i]);
  }
}

/**
 * Fast Levenshtein distance calculation for typo tolerance using reusable typed-array scratchpad
 */
export function levenshteinDistance(a: string, b: string): number {
  if (a === b) return 0;
  const aLen = a.length;
  const bLen = b.length;
  if (!aLen) return bLen;
  if (!bLen) return aLen;

  const row = bLen + 1 <= LEV_SCRATCH.length ? LEV_SCRATCH : new Int32Array(bLen + 1);
  for (let i = 0; i <= bLen; i++) {
    row[i] = i;
  }

  for (let i = 1; i <= aLen; i++) {
    let prev = i;
    const aChar = a.charCodeAt(i - 1);
    for (let j = 1; j <= bLen; j++) {
      const val =
        aChar === b.charCodeAt(j - 1)
          ? row[j - 1]
          : Math.min(row[j - 1], prev, row[j]) + 1;
      row[j - 1] = prev;
      prev = val;
    }
    row[bLen] = prev;
  }
  return row[bLen];
}

/**
 * Check if a pre-cleaned query token fuzzy-matches any target word, prefix, or substring
 */
function tokenFuzzyMatches(
  term: string,
  compactTerm: string,
  idx: IndexedDevice
): { match: boolean; penalty: number } {
  // 1. Exact match with any word
  if (idx.wordSet.has(term)) {
    return { match: true, penalty: 0 };
  }

  const words = idx.words;

  // 2. Word starts with term (e.g. "sam" starts "samsung", "not" starts "note")
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    if (w.startsWith(term)) {
      return { match: true, penalty: (w.length - term.length) * 1.5 };
    }
  }

  // 3. Substring of any word (e.g., "edmi" in "redmi", "alaxy" in "galaxy")
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    if (w.includes(term)) {
      return { match: true, penalty: (w.length - term.length) * 2 };
    }
    if (w.length >= 3 && term.includes(w)) {
      return { match: true, penalty: (term.length - w.length) * 2 };
    }
  }

  // 4. Substring in target full text without spaces (e.g., "note12" in "redminote12")
  if (idx.compactFullText.includes(compactTerm)) {
    return { match: true, penalty: 5 };
  }

  // 5. Levenshtein typo distance for words
  // Allow distance 1 for length 3-4, distance 2 for length >= 5
  const termLen = term.length;
  const maxDist = termLen <= 4 ? 1 : 2;
  let bestDist = 999;

  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    const diff = w.length - termLen;
    if (diff >= -maxDist && diff <= maxDist) {
      const dist = levenshteinDistance(term, w);
      if (dist <= maxDist && dist < bestDist) {
        bestDist = dist;
        if (bestDist === 1) break;
      }
    }
  }

  if (bestDist <= maxDist) {
    return { match: true, penalty: bestDist * 15 };
  }

  return { match: false, penalty: 999 };
}

function scoreIndexedRelevance(
  idx: IndexedDevice,
  cleanQuery: string,
  compactQuery: string,
  terms: string[],
  compactTerms: string[]
): number {
  const { model, compactModel, fullText } = idx;

  // Exact model match
  if (model === cleanQuery) return 1000;
  // Model starts with query verbatim
  if (model.startsWith(cleanQuery)) return 900;
  // Model contains query verbatim (e.g. user typed "note 12" -> "redmi note 12")
  if (model.includes(cleanQuery)) return 850;
  // Full text contains query verbatim
  if (fullText.includes(cleanQuery)) return 800;

  // Compact matching (e.g. "note12" -> "note 12", "s24ultra" -> "s24 ultra")
  if (compactModel.includes(compactQuery)) return 750;

  if (terms.length === 0) return 0;

  let totalPenalty = 0;
  let matchedTerms = 0;

  for (let i = 0; i < terms.length; i++) {
    const res = tokenFuzzyMatches(terms[i], compactTerms[i], idx);
    if (res.match) {
      matchedTerms++;
      totalPenalty += res.penalty;
    } else if (terms.length < 3 || i - matchedTerms >= 1) {
      // Early bail-out when impossible to satisfy N or N-1 threshold
      return 0;
    }
  }

  // All query terms matched (exact word, substring, or typo)
  if (matchedTerms === terms.length) {
    return Math.max(100, 600 - totalPenalty);
  }

  // For longer queries (3+ words), allow N-1 matching with penalty
  if (terms.length >= 3 && matchedTerms >= terms.length - 1) {
    return Math.max(50, 300 - totalPenalty);
  }

  return 0;
}

/**
 * Score a device's relevance against a user search query.
 * Higher score = higher ranking relevance.
 * Returns 0 if no relative match found.
 */
export function scoreDeviceRelevance(device: DeviceInfo, query: string): number {
  const cleanQuery = query.trim().toLowerCase();
  if (!cleanQuery) return 100;

  const idx = getIndexedDevice(device);
  const compactQuery = cleanQuery.replace(/[\s\-_]/g, '');
  const terms = cleanQuery.split(/[\s\-_]+/).filter(Boolean);
  const compactTerms = terms.map((t) => t.replace(/[\s\-_]/g, ''));

  return scoreIndexedRelevance(idx, cleanQuery, compactQuery, terms, compactTerms);
}

export interface FuzzySearchOptions {
  brandFilter?: string;
  minScore?: number;
  limit?: number;
}

/**
 * Perform intelligent relative and typo-tolerant search across devices
 */
export function searchDevicesWithFuzzy(
  devices: DeviceInfo[],
  query: string,
  options?: FuzzySearchOptions
): DeviceInfo[] {
  const cleanQuery = query.trim().toLowerCase();

  // O(1) brand bucket lookup
  let pool = devices;
  if (options?.brandFilter && options.brandFilter !== 'All') {
    pool = getBrandBucketMap(devices).get(options.brandFilter.toLowerCase()) || [];
  }

  if (!cleanQuery) {
    if (options?.limit && options.limit > 0) {
      return pool.slice(0, options.limit);
    }
    return pool;
  }

  const minScore = options?.minScore ?? 1;
  const compactQuery = cleanQuery.replace(/[\s\-_]/g, '');
  const terms = cleanQuery.split(/[\s\-_]+/).filter(Boolean);
  const compactTerms = terms.map((t) => t.replace(/[\s\-_]/g, ''));

  const scored: Array<{ device: DeviceInfo; score: number }> = [];
  for (let i = 0; i < pool.length; i++) {
    const device = pool[i];
    const score = scoreIndexedRelevance(
      getIndexedDevice(device),
      cleanQuery,
      compactQuery,
      terms,
      compactTerms
    );
    if (score >= minScore) {
      scored.push({ device, score });
    }
  }

  // Sort primarily by relevance score descending, then by popularity rank ascending
  scored.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return a.device.popularityRank - b.device.popularityRank;
  });

  const limit = options?.limit && options.limit > 0 ? Math.min(options.limit, scored.length) : scored.length;
  const results = new Array<DeviceInfo>(limit);
  for (let i = 0; i < limit; i++) {
    results[i] = scored[i].device;
  }

  return results;
}
