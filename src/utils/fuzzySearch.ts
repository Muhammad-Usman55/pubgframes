import { DeviceInfo } from '@/types/device';

/**
 * Fast Levenshtein distance calculation for typo tolerance
 */
export function levenshteinDistance(a: string, b: string): number {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;

  // Single-row space optimization
  const row = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let prev = i;
    for (let j = 1; j <= b.length; j++) {
      const val = a[i - 1] === b[j - 1] ? row[j - 1] : Math.min(row[j - 1], prev, row[j]) + 1;
      row[j - 1] = prev;
      prev = val;
    }
    row[b.length] = prev;
  }
  return row[b.length];
}

/**
 * Check if a query token fuzzy-matches any target word, prefix, or substring
 */
function tokenFuzzyMatches(
  term: string,
  words: string[],
  targetFullText: string
): { match: boolean; penalty: number } {
  // 1. Exact match with any word
  if (words.some((w) => w === term)) {
    return { match: true, penalty: 0 };
  }

  // 2. Word starts with term (e.g. "sam" starts "samsung", "not" starts "note")
  for (const w of words) {
    if (w.startsWith(term)) {
      return { match: true, penalty: (w.length - term.length) * 1.5 };
    }
  }

  // 3. Substring of any word (e.g., "edmi" in "redmi", "alaxy" in "galaxy")
  for (const w of words) {
    if (w.includes(term)) {
      return { match: true, penalty: (w.length - term.length) * 2 };
    }
    if (term.includes(w) && w.length >= 3) {
      return { match: true, penalty: (term.length - w.length) * 2 };
    }
  }

  // 4. Substring in target full text without spaces (e.g., "note12" in "redminote12")
  const compactTarget = targetFullText.replace(/[\s\-_]/g, '');
  const compactTerm = term.replace(/[\s\-_]/g, '');
  if (compactTarget.includes(compactTerm)) {
    return { match: true, penalty: 5 };
  }

  // 5. Levenshtein typo distance for words
  // Allow distance 1 for length 3-4, distance 2 for length >= 5
  const maxDist = term.length <= 4 ? 1 : 2;
  let bestDist = 999;
  for (const w of words) {
    if (Math.abs(w.length - term.length) <= maxDist) {
      const dist = levenshteinDistance(term, w);
      if (dist <= maxDist && dist < bestDist) {
        bestDist = dist;
      }
    }
  }

  if (bestDist <= maxDist) {
    return { match: true, penalty: bestDist * 15 };
  }

  return { match: false, penalty: 999 };
}

/**
 * Score a device's relevance against a user search query.
 * Higher score = higher ranking relevance.
 * Returns 0 if no relative match found.
 */
export function scoreDeviceRelevance(device: DeviceInfo, query: string): number {
  const cleanQuery = query.trim().toLowerCase();
  if (!cleanQuery) return 100;

  const brand = device.brand.toLowerCase();
  const model = device.model.toLowerCase();
  const chipset = (device.chipset || '').toLowerCase();
  const slug = (device.slug || '').toLowerCase();
  const gpu = (device.gpu || '').toLowerCase();

  // Xiaomi ecosystem tags
  const isXiaomiEcosystem =
    device.brandSlug === 'xiaomi' ||
    device.brandSlug === 'redmi' ||
    device.brandSlug === 'poco' ||
    device.brandSlug === 'black-shark';
  const ecoTags = isXiaomiEcosystem ? 'xiaomi mi redmi poco black shark ecosystem' : '';

  const fullText = `${brand} ${model} ${chipset} ${slug} ${gpu} ${ecoTags}`;
  const words = fullText.split(/[\s\-_/()]+/).filter(Boolean);

  // Exact model match
  if (model === cleanQuery) return 1000;
  // Model starts with query verbatim
  if (model.startsWith(cleanQuery)) return 900;
  // Model contains query verbatim (e.g. user typed "note 12" -> "redmi note 12")
  if (model.includes(cleanQuery)) return 850;
  // Full text contains query verbatim
  if (fullText.includes(cleanQuery)) return 800;

  // Compact matching (e.g. "note12" -> "note 12", "s24ultra" -> "s24 ultra")
  const compactQuery = cleanQuery.replace(/[\s\-_]/g, '');
  const compactModel = model.replace(/[\s\-_]/g, '');
  if (compactModel.includes(compactQuery)) return 750;

  // Multi-term fuzzy matching
  const terms = cleanQuery.split(/[\s\-_]+/).filter(Boolean);
  if (terms.length === 0) return 0;

  let totalPenalty = 0;
  let matchedTerms = 0;

  for (const term of terms) {
    const res = tokenFuzzyMatches(term, words, fullText);
    if (res.match) {
      matchedTerms++;
      totalPenalty += res.penalty;
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

  // Filter by brand first if provided
  let pool = devices;
  if (options?.brandFilter && options.brandFilter !== 'All') {
    pool = pool.filter(
      (d) =>
        d.brand.toLowerCase() === options.brandFilter!.toLowerCase() ||
        d.brandSlug.toLowerCase() === options.brandFilter!.toLowerCase()
    );
  }

  if (!cleanQuery) {
    return pool;
  }

  const minScore = options?.minScore ?? 1;

  // Score each device
  const scored = pool
    .map((device) => {
      const score = scoreDeviceRelevance(device, cleanQuery);
      return { device, score };
    })
    .filter((item) => item.score >= minScore);

  // Sort primarily by relevance score descending, then by popularity rank ascending
  scored.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return a.device.popularityRank - b.device.popularityRank;
  });

  const results = scored.map((item) => item.device);

  if (options?.limit && options.limit > 0) {
    return results.slice(0, options.limit);
  }

  return results;
}
