import { DEVICES_DATA } from '@/data/devices';

export interface TrafficDay {
  day: string;
  visitors: number;
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
}

export interface RawSearchEvent {
  query: string;
  timestamp: number | string;
}

export const EMPTY_ANALYTICS: RealAnalyticsData = {
  totalViews: 0,
  todayViews: 0,
  activeVisitors: 0,
  totalSearches: 0,
  topSearched: [],
  geoDistribution: [],
  trafficHistory: [
    { day: 'Mon', visitors: 0, searches: 0 },
    { day: 'Tue', visitors: 0, searches: 0 },
    { day: 'Wed', visitors: 0, searches: 0 },
    { day: 'Thu', visitors: 0, searches: 0 },
    { day: 'Fri', visitors: 0, searches: 0 },
    { day: 'Sat', visitors: 0, searches: 0 },
    { day: 'Sun', visitors: 0, searches: 0 }
  ]
};

const STORAGE_KEY = 'pubgframes_real_analytics_v2';

function toEpochMs(ts: number | string): number {
  if (typeof ts === 'number') return ts;
  const parsed = Date.parse(ts);
  return Number.isNaN(parsed) ? Date.now() : parsed;
}

/**
 * Pure aggregator used by both Supabase server analytics API and local fallback.
 * Computes metrics exclusively from real recorded events.
 */
export function aggregateAnalyticsEvents(
  views: RawPageViewEvent[],
  searches: RawSearchEvent[]
): RealAnalyticsData {
  const todayStr = new Date().toISOString().split('T')[0];
  const fifteenMinsAgo = Date.now() - 15 * 60 * 1000;

  let todayViews = 0;
  let activeVisitors = 0;
  const countryCounts: Record<string, number> = {};
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayCounts: Record<string, { visitors: number; searches: number }> = {
    Mon: { visitors: 0, searches: 0 },
    Tue: { visitors: 0, searches: 0 },
    Wed: { visitors: 0, searches: 0 },
    Thu: { visitors: 0, searches: 0 },
    Fri: { visitors: 0, searches: 0 },
    Sat: { visitors: 0, searches: 0 },
    Sun: { visitors: 0, searches: 0 }
  };

  for (const v of views) {
    const ms = toEpochMs(v.timestamp);
    const dateStr = new Date(ms).toISOString().split('T')[0];
    if (dateStr === todayStr) todayViews++;
    if (ms > fifteenMinsAgo) activeVisitors++;

    const country = v.country || 'Unknown';
    countryCounts[country] = (countryCounts[country] || 0) + 1;

    const day = dayNames[new Date(ms).getDay()];
    if (dayCounts[day]) dayCounts[day].visitors++;
  }

  const searchCounts: Record<string, number> = {};
  for (const s of searches) {
    const q = (s.query || '').trim().toLowerCase();
    if (!q) continue;
    searchCounts[q] = (searchCounts[q] || 0) + 1;

    const ms = toEpochMs(s.timestamp);
    const day = dayNames[new Date(ms).getDay()];
    if (dayCounts[day]) dayCounts[day].searches++;
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

  const totalViews = views.length;
  const geoDistribution: GeoVisitor[] = Object.entries(countryCounts)
    .map(([country, visits]) => ({
      country,
      visits,
      percentage: totalViews > 0 ? Math.round((visits / totalViews) * 100) : 0
    }))
    .sort((a, b) => b.visits - a.visits);

  const trafficHistory: TrafficDay[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(
    (day) => ({
      day,
      visitors: dayCounts[day]?.visitors || 0,
      searches: dayCounts[day]?.searches || 0
    })
  );

  return {
    totalViews,
    todayViews,
    activeVisitors,
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
}

export function trackPageView(path: string) {
  if (typeof window === 'undefined' || !path || path.startsWith('/admin')) return;

  const country = detectVisitorRegion();
  const deviceType = window.innerWidth < 768 ? 'mobile' : window.innerWidth < 1024 ? 'tablet' : 'desktop';

  const store = readBrowserStore();
  store.views.push({ path, timestamp: Date.now(), country });
  writeBrowserStore(store);

  fetch('/api/analytics/track', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      type: 'pageview',
      path,
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
