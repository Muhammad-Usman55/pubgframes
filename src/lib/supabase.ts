import { createClient, SupabaseClient } from '@supabase/supabase-js';

export function getSupabaseCredentials() {
  const envUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').trim();
  const envKey = (
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    ''
  ).trim();

  if (envUrl && envKey) {
    return { url: envUrl, key: envKey, source: 'env' as const };
  }

  return { url: '', key: '', source: 'none' as const };
}

let supabaseInstance: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  const { url, key } = getSupabaseCredentials();
  if (!url || !key) return null;

  if (!supabaseInstance) {
    try {
      supabaseInstance = createClient(url, key);
    } catch (e) {
      console.warn('Failed to initialize Supabase client:', e);
      return null;
    }
  }
  return supabaseInstance;
}

export function isSupabaseConnected(): boolean {
  const { url, key } = getSupabaseCredentials();
  return Boolean(url && key);
}
