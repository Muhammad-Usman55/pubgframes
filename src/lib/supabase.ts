import { createClient, SupabaseClient } from '@supabase/supabase-js';

function cleanVal(raw: string | undefined): string {
  if (!raw) return '';
  return raw.trim().replace(/^['"]|['"]$/g, '').trim().replace(/\/+$/, '');
}

export function getSupabaseCredentials() {
  const env: Record<string, string | undefined> =
    typeof process !== 'undefined' && process.env ? process.env : {};
  const rawUrl = cleanVal(
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
      (typeof window === 'undefined' ? env['SUPABASE_URL'] || env['NEXT_PUBLIC_SUPABASE_URL'] : '')
  );
  const rawKey = cleanVal(
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
      (typeof window === 'undefined'
        ? env['NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY'] ||
          env['NEXT_PUBLIC_SUPABASE_ANON_KEY'] ||
          env['SUPABASE_PUBLISHABLE_KEY'] ||
          env['SUPABASE_ANON_KEY']
        : '')
  );

  if (rawUrl && /^https?:\/\/.+/.test(rawUrl) && rawKey) {
    return { url: rawUrl, key: rawKey, source: 'env' as const };
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
