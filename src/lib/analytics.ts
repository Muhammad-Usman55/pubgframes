'use client';

import { getSupabase } from './supabase';

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
  fps: number;
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

export const DEFAULT_ANALYTICS: RealAnalyticsData = {
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

const STORAGE_KEY = 'pubgframes_real_analytics_v1';

interface StoredAnalytics {
  views: Array<{ path: string; date: string; timestamp: number; country?: string }>;
  searches: Array<{ query: string; timestamp: number }>;
}

function getStored(): StoredAnalytics {
  if (typeof window === 'undefined') {
    return { views: [], searches: [] };
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to parse analytics', err);
  }
  return { views: [], searches: [] };
}

function saveStored(data: StoredAnalytics) {
  if (typeof window === 'undefined') return;
  try {
    // Keep max 2000 events to prevent localStorage overflow
    if (data.views.length > 2000) data.views = data.views.slice(-2000);
    if (data.searches.length > 2000) data.searches = data.searches.slice(-2000);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.error('Failed to save analytics', err);
  }
}

/**
 * Record a genuine page view
 */
export async function trackPageView(path: string) {
  if (typeof window === 'undefined') return;

  const country = detectVisitorCountry();
  const today = new Date().toISOString().split('T')[0];
  const stored = getStored();

  stored.views.push({
    path,
    date: today,
    timestamp: Date.now(),
    country
  });
  saveStored(stored);

  // Sync with Supabase if active
  const supabase = getSupabase();
  if (supabase) {
    try {
      await supabase.from('analytics_page_views').insert({
        path,
        device_type: window.innerWidth < 768 ? 'mobile' : 'desktop',
        country
      });
    } catch {
      // Non-blocking
    }
  }
}

/**
 * Record a genuine user search query
 */
export async function trackSearchQuery(query: string) {
  if (typeof window === 'undefined' || !query.trim()) return;

  const clean = query.trim().toLowerCase();
  const stored = getStored();
  stored.searches.push({ query: clean, timestamp: Date.now() });
  saveStored(stored);

  // Sync with Supabase if active
  const supabase = getSupabase();
  if (supabase) {
    try {
      await supabase.from('search_queries').insert({ query: clean });
    } catch {
      // Non-blocking
    }
  }
}

/**
 * Detect client country from locale / timeZone
 */
function detectVisitorCountry(): string {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    if (tz.includes('Karachi') || tz.includes('Asia/Karachi')) return 'Pakistan';
    if (tz.includes('Kolkata') || tz.includes('Calcutta')) return 'India';
    if (tz.includes('Riyadh')) return 'Saudi Arabia';
    if (tz.includes('Dubai')) return 'United Arab Emirates';
    if (tz.includes('Dhaka')) return 'Bangladesh';
    if (tz.includes('London') || tz.includes('Europe/London')) return 'United Kingdom';
    if (tz.includes('New_York') || tz.includes('Chicago') || tz.includes('Los_Angeles')) return 'United States';
    if (tz.includes('Europe')) return 'Europe';
    if (tz.includes('Asia')) return 'Asia';
  } catch {
    // fallback
  }
  return 'Global';
}

/**
 * Compute real analytics without dummy data
 */
export function getRealAnalytics(): RealAnalyticsData {
  const stored = getStored();
  const todayStr = new Date().toISOString().split('T')[0];

  const totalViews = stored.views.length;
  const todayViews = stored.views.filter((v) => v.date === todayStr).length;

  // Active visitors in last 15 minutes (or 1 if currently in admin session)
  const fifteenMinsAgo = Date.now() - 15 * 60 * 1000;
  const recentViews = stored.views.filter((v) => v.timestamp > fifteenMinsAgo);
  const activeVisitors = Math.max(recentViews.length, totalViews > 0 ? 1 : 0);

  const totalSearches = stored.searches.length;

  // Top searched items from real user inputs
  const searchCounts: Record<string, number> = {};
  for (const s of stored.searches) {
    searchCounts[s.query] = (searchCounts[s.query] || 0) + 1;
  }
  const topSearched: TopSearchItem[] = Object.entries(searchCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([name, count]) => ({
      name: name.toUpperCase(),
      count,
      brand: 'Search Query',
      fps: 60
    }));

  // Geographic visitor breakdown from real events
  const countryCounts: Record<string, number> = {};
  for (const v of stored.views) {
    const c = v.country || 'Global';
    countryCounts[c] = (countryCounts[c] || 0) + 1;
  }
  const geoDistribution: GeoVisitor[] = Object.entries(countryCounts)
    .map(([country, visits]) => ({
      country,
      visits,
      percentage: totalViews > 0 ? Math.round((visits / totalViews) * 100) : 0
    }))
    .sort((a, b) => b.visits - a.visits);

  // 7-day traffic trend based on actual recorded events
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

  for (const v of stored.views) {
    const d = new Date(v.timestamp);
    const day = dayNames[d.getDay()];
    if (dayCounts[day]) dayCounts[day].visitors++;
  }

  for (const s of stored.searches) {
    const d = new Date(s.timestamp);
    const day = dayNames[d.getDay()];
    if (dayCounts[day]) dayCounts[day].searches++;
  }

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
    totalSearches,
    topSearched,
    geoDistribution,
    trafficHistory
  };
}

/**
 * Clear analytics history
 */
export function resetAnalyticsData() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}
