import { DEVICES_DATA } from '@/data/devices';

export interface TrafficDay {
  day: string;
  visitors: number;
  views: number;
  searches: number;
}

export interface GeoVisitor {
  country: string;
  percentage: number;
  visits: number;
}

export interface TopSearchItem {
  name: string;
  count: number;
  brand: string;
  fps: number | null;
}

export interface RealAnalyticsData {
  uniqueVisitors: number;
  todayVisitors: number;
  totalViews: number;
  todayViews: number;
  activeVisitors: number;
  totalSearches: number;
  topSearched: TopSearchItem[];
  geoDistribution: GeoVisitor[];
  trafficHistory: TrafficDay[];
}

export interface RawPageViewEvent {
  path: string;
  timestamp: number | string;
  country?: string;
  visitorId?: string;
  device_type?: string;
  user_agent?: string;
}

export interface RawSearchEvent {
  query: string;
  timestamp: number | string;
}

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const;

function getLastSevenDayKeys(nowMs: number): Array<{ dateKey: string; label: string }> {
  const days: Array<{ dateKey: string; label: string }> = [];
  for (let offset = 6; offset >= 0; offset--) {
    const dt = new Date(nowMs - offset * 24 * 60 * 60 * 1000);
    days.push({
      dateKey: dt.toISOString().split('T')[0],
      label: DAY_NAMES[dt.getUTCDay()]
    });
  }
  return days;
}

export const EMPTY_ANALYTICS: RealAnalyticsData = {
  uniqueVisitors: 0,
  todayVisitors: 0,
  totalViews: 0,
  todayViews: 0,
  activeVisitors: 0,
  totalSearches: 0,
  topSearched: [],
  geoDistribution: [],
  trafficHistory: [
    { day: 'Mon', visitors: 0, views: 0, searches: 0 },
    { day: 'Tue', visitors: 0, views: 0, searches: 0 },
    { day: 'Wed', visitors: 0, views: 0, searches: 0 },
    { day: 'Thu', visitors: 0, views: 0, searches: 0 },
    { day: 'Fri', visitors: 0, views: 0, searches: 0 },
    { day: 'Sat', visitors: 0, views: 0, searches: 0 },
    { day: 'Sun', visitors: 0, views: 0, searches: 0 }
  ]
};

const STORAGE_KEY = 'pubgframes_real_analytics_v2';
const VISITOR_ID_KEY = 'pubgframes_visitor_id';
const VISITOR_COOKIE_NAME = 'pf_vid';
const SESSION_SEEN_PATHS_KEY = 'pubgframes_session_paths_v1';
const PATH_DEDUP_WINDOW_MS = 30 * 60 * 1000;

function toEpochMs(ts: number | string): number {
  if (typeof ts === 'number') return ts;
  const parsed = Date.parse(ts);
  return Number.isNaN(parsed) ? Date.now() : parsed;
}

/**
 * Extracts a stable anonymous visitor key from explicit visitorId, our zero-migration
 * `pf_vid:<id>|...` user_agent prefix, or a composite fallback for older historical rows.
 */
function extractVisitorKey(event: RawPageViewEvent, dateKey: string): string {
  if (event.visitorId && event.visitorId.trim()) {
    return `vid:${event.visitorId.trim()}`;
  }

  const ua = (event.user_agent || '').trim();
  const prefixed = ua.match(/^pf_vid:([a-zA-Z0-9_-]{8,48})(?:\||$)/);
  if (prefixed?.[1]) {
    return `vid:${prefixed[1]}`;
  }

  const country = (event.country || 'Unknown').trim();
  const deviceType = (event.device_type || 'unknown').trim();
  const uaSig = ua.slice(0, 120) || 'anonymous';
  return `legacy:${dateKey}:${country}:${deviceType}:${uaSig}`;
}

/**
 * Pure aggregator used by both Supabase server analytics API and local fallback.
 * Deduplicates visitors across pages and refreshes while preserving view counts.
 */
export function aggregateAnalyticsEvents(
  views: RawPageViewEvent[],
  searches: RawSearchEvent[]
): RealAnalyticsData {
  const nowMs = Date.now();
  const todayStr = new Date(nowMs).toISOString().split('T')[0];
  const fifteenMinsAgo = nowMs - 15 * 60 * 1000;

  let todayViews = 0;
  const allVisitorSet = new Set<string>();
  const todayVisitorSet = new Set<string>();
  const activeVisitorSet = new Set<string>();
  const countryVisitorSets: Record<string, Set<string>> = {};

  const last7Days = getLastSevenDayKeys(nowMs);
  const dayBuckets = new Map<
    string,
    { label: string; visitorSet: Set<string>; views: number; searches: number }
  >(
    last7Days.map((d) => [
      d.dateKey,
      { label: d.label, visitorSet: new Set<string>(), views: 0, searches: 0 }
    ])
  );

  for (const v of views) {
    const ms = toEpochMs(v.timestamp);
    const dateStr = new Date(ms).toISOString().split('T')[0];
    const visitorKey = extractVisitorKey(v, dateStr);

    allVisitorSet.add(visitorKey);
    if (dateStr === todayStr) {
      todayViews++;
      todayVisitorSet.add(visitorKey);
    }
    if (ms > fifteenMinsAgo) {
      activeVisitorSet.add(visitorKey);
    }

    const country = v.country || 'Unknown';
    if (!countryVisitorSets[country]) {
      countryVisitorSets[country] = new Set<string>();
    }
    countryVisitorSets[country].add(visitorKey);

    const bucket = dayBuckets.get(dateStr);
    if (bucket) {
      bucket.views++;
      bucket.visitorSet.add(visitorKey);
    }
  }

  const searchCounts: Record<string, number> = {};
  for (const s of searches) {
    const q = (s.query || '').trim().toLowerCase();
    if (!q) continue;
    searchCounts[q] = (searchCounts[q] || 0) + 1;

    const ms = toEpochMs(s.timestamp);
    const dateStr = new Date(ms).toISOString().split('T')[0];
    const bucket = dayBuckets.get(dateStr);
    if (bucket) bucket.searches++;
  }

  const topSearched: TopSearchItem[] = Object.entries(searchCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([name, count]) => {
      const matched = DEVICES_DATA.find(
        (d) =>
          `${d.brand} ${d.model}`.toLowerCase().includes(name) ||
          d.model.toLowerCase().includes(name) ||
          d.slug.toLowerCase() === name
      );
      return {
        name,
        count,
        brand: matched?.brand || 'Search Query',
        fps: matched ? matched.maxSupportedFps : null
      };
    });

  const uniqueVisitors = allVisitorSet.size;
  const geoDistribution: GeoVisitor[] = Object.entries(countryVisitorSets)
    .map(([country, visitorSet]) => ({
      country,
      visits: visitorSet.size,
      percentage: uniqueVisitors > 0 ? Math.round((visitorSet.size / uniqueVisitors) * 100) : 0
    }))
    .sort((a, b) => b.visits - a.visits);

  const trafficHistory: TrafficDay[] = last7Days.map(({ dateKey, label }) => {
    const bucket = dayBuckets.get(dateKey);
    return {
      day: label,
      visitors: bucket ? bucket.visitorSet.size : 0,
      views: bucket ? bucket.views : 0,
      searches: bucket ? bucket.searches : 0
    };
  });

  return {
    uniqueVisitors,
    todayVisitors: todayVisitorSet.size,
    totalViews: views.length,
    todayViews,
    activeVisitors: activeVisitorSet.size,
    totalSearches: searches.length,
    topSearched,
    geoDistribution,
    trafficHistory
  };
}

function detectVisitorRegion(): string {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    if (tz.includes('Karachi')) return 'Pakistan';
    if (tz.includes('Kolkata') || tz.includes('Calcutta')) return 'India';
    if (tz.includes('Tehran')) return 'Iran';
    if (tz.includes('Riyadh')) return 'Saudi Arabia';
    if (tz.includes('Dubai')) return 'United Arab Emirates';
    if (tz.includes('Dhaka')) return 'Bangladesh';
    if (tz.includes('London')) return 'United Kingdom';
    if (tz.includes('America/')) return 'North America';
    if (tz.includes('Europe/')) return 'Europe';
    if (tz.includes('Asia/')) return 'Asia';
  } catch {
    // ignore locale issues
  }
  return 'Global';
}

function readVisitorCookie(): string {
  if (typeof document === 'undefined') return '';
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${VISITOR_COOKIE_NAME}=([^;]+)`));
  return match?.[1] ? decodeURIComponent(match[1]) : '';
}

function persistVisitorCookie(id: string) {
  if (typeof document === 'undefined') return;
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${VISITOR_COOKIE_NAME}=${encodeURIComponent(id)}; Max-Age=31536000; Path=/; SameSite=Lax${secure}`;
}

export function getOrCreateVisitorId(): string {
  if (typeof window === 'undefined') return '';
  try {
    const existing = localStorage.getItem(VISITOR_ID_KEY) || readVisitorCookie();
    if (existing && /^[a-zA-Z0-9_-]{8,48}$/.test(existing)) {
      localStorage.setItem(VISITOR_ID_KEY, existing);
      persistVisitorCookie(existing);
      return existing;
    }

    const generated =
      typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
        ? crypto.randomUUID().replace(/-/g, '').slice(0, 20)
        : `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 12)}`;

    localStorage.setItem(VISITOR_ID_KEY, generated);
    persistVisitorCookie(generated);
    return generated;
  } catch {
    return readVisitorCookie();
  }
}

function shouldRecordPathInSession(path: string): boolean {
  if (typeof window === 'undefined') return true;
  try {
    const raw = sessionStorage.getItem(SESSION_SEEN_PATHS_KEY);
    const seen = raw ? (JSON.parse(raw) as Record<string, number>) : {};
    const now = Date.now();
    const lastSeen = seen[path];
    if (typeof lastSeen === 'number' && now - lastSeen < PATH_DEDUP_WINDOW_MS) {
      return false;
    }
    seen[path] = now;
    sessionStorage.setItem(SESSION_SEEN_PATHS_KEY, JSON.stringify(seen));
    return true;
  } catch {
    return true;
  }
}

interface StoredBrowserAnalytics {
  views: RawPageViewEvent[];
  searches: RawSearchEvent[];
}

function readBrowserStore(): StoredBrowserAnalytics {
  if (typeof window === 'undefined') return { views: [], searches: [] };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as StoredBrowserAnalytics;
  } catch {
    // ignore storage errors
  }
  return { views: [], searches: [] };
}

function writeBrowserStore(data: StoredBrowserAnalytics) {
  if (typeof window === 'undefined') return;
  try {
    if (data.views.length > 1000) data.views = data.views.slice(-1000);
    if (data.searches.length > 1000) data.searches = data.searches.slice(-1000);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // ignore storage errors
  }
}

export function getBrowserFallbackAnalytics(): RealAnalyticsData {
  const store = readBrowserStore();
  return aggregateAnalyticsEvents(store.views, store.searches);
}

export function clearBrowserFallbackAnalytics() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
  try {
    sessionStorage.removeItem(SESSION_SEEN_PATHS_KEY);
  } catch {
    // ignore storage errors
  }
}

export function trackPageView(path: string) {
  if (typeof window === 'undefined' || !path || path.startsWith('/admin')) return;

  const visitorId = getOrCreateVisitorId();
  if (!shouldRecordPathInSession(path)) {
    return;
  }

  const country = detectVisitorRegion();
  const deviceType = window.innerWidth < 768 ? 'mobile' : window.innerWidth < 1024 ? 'tablet' : 'desktop';

  const store = readBrowserStore();
  store.views.push({ path, timestamp: Date.now(), country, visitorId });
  writeBrowserStore(store);

  fetch('/api/analytics/track', {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      type: 'pageview',
      path,
      visitorId,
      deviceType,
      country,
      referrer: document.referrer || ''
    }),
    keepalive: true
  }).catch(() => {});
}

export function trackSearchQuery(query: string, resultCount = 0, selectedDeviceId?: string) {
  if (typeof window === 'undefined') return;
  const clean = query.trim();
  if (clean.length < 2) return;

  const store = readBrowserStore();
  store.searches.push({ query: clean.toLowerCase(), timestamp: Date.now() });
  writeBrowserStore(store);

  fetch('/api/analytics/track', {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      type: 'search',
      query: clean.toLowerCase(),
      resultCount,
      selectedDeviceId
    }),
    keepalive: true
  }).catch(() => {});

  const w = window as Window & { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag === 'function') {
    w.gtag('event', 'search', {
      search_term: clean.toLowerCase(),
      results_count: resultCount
    });
    if (selectedDeviceId) {
      w.gtag('event', 'select_content', {
        content_type: 'device',
        item_id: selectedDeviceId
      });
    }
  }
}
