import { createClient, SupabaseClient } from '@supabase/supabase-js';

function cleanEnvValue(raw: string | undefined): string {
  if (!raw) return '';
  return raw.trim().replace(/^['"]|['"]$/g, '').trim();
}

function readRuntimeEnv(...names: string[]): { value: string; source: string | null } {
  const env = process.env;
  for (const name of names) {
    const cleaned = cleanEnvValue(env[name]);
    if (cleaned) {
      return { value: cleaned, source: name };
    }
  }
  return { value: '', source: null };
}

function normalizeSupabaseUrl(raw: string): { url: string; valid: boolean; error?: string } {
  if (!raw) {
    return { url: '', valid: false, error: 'Missing SUPABASE_URL / NEXT_PUBLIC_SUPABASE_URL' };
  }
  const normalized = raw.replace(/\/+$/, '');
  try {
    const parsed = new URL(normalized);
    if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') {
      return {
        url: '',
        valid: false,
        error: 'Supabase URL must start with https:// (e.g. https://your-project.supabase.co)'
      };
    }
    return { url: normalized, valid: true };
  } catch {
    return {
      url: '',
      valid: false,
      error: 'Malformed Supabase URL format (check for extra quotes or spaces)'
    };
  }
}

export interface AdminDatabaseDiagnostics {
  hasUrl: boolean;
  urlValid: boolean;
  urlSource: string | null;
  hasServiceKey: boolean;
  keySource: string | null;
  configError?: string;
}

export function getAdminDatabaseDiagnostics(): AdminDatabaseDiagnostics {
  const urlEnv = readRuntimeEnv('SUPABASE_URL', 'NEXT_PUBLIC_SUPABASE_URL', 'SUPABASE_PROJECT_URL');
  const keyEnv = readRuntimeEnv('SUPABASE_SERVICE_ROLE_KEY', 'SUPABASE_SECRET_KEY', 'SUPABASE_SERVICE_KEY');
  const parsedUrl = normalizeSupabaseUrl(urlEnv.value);

  let configError: string | undefined;
  if (!urlEnv.value) {
    configError = 'Set NEXT_PUBLIC_SUPABASE_URL (or SUPABASE_URL) in your hosting Environment Variables.';
  } else if (!parsedUrl.valid) {
    configError = parsedUrl.error;
  } else if (!keyEnv.value) {
    configError =
      'Set SUPABASE_SERVICE_ROLE_KEY or SUPABASE_SECRET_KEY in your hosting Environment Variables.';
  }

  return {
    hasUrl: Boolean(urlEnv.value),
    urlValid: parsedUrl.valid,
    urlSource: urlEnv.source,
    hasServiceKey: Boolean(keyEnv.value),
    keySource: keyEnv.source,
    configError
  };
}

/**
 * Privileged Supabase Admin Client (Server-only).
 * Always reads runtime process.env dynamically so hosting envs added after build
 * or injected at runtime work cleanly without throwing synchronous errors.
 */
export const createAdminClient = (): SupabaseClient | null => {
  const urlEnv = readRuntimeEnv('SUPABASE_URL', 'NEXT_PUBLIC_SUPABASE_URL', 'SUPABASE_PROJECT_URL');
  const keyEnv = readRuntimeEnv('SUPABASE_SERVICE_ROLE_KEY', 'SUPABASE_SECRET_KEY', 'SUPABASE_SERVICE_KEY');
  const parsedUrl = normalizeSupabaseUrl(urlEnv.value);

  if (!parsedUrl.valid || !keyEnv.value) {
    return null;
  }

  try {
    return createClient(parsedUrl.url, keyEnv.value, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    });
  } catch (err) {
    console.warn('Failed to create Supabase admin client:', err instanceof Error ? err.message : err);
    return null;
  }
};

export const hasAdminDatabaseConfig = (): boolean => {
  const diag = getAdminDatabaseDiagnostics();
  return diag.urlValid && diag.hasServiceKey;
};
