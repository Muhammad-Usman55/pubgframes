import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').trim();
const serviceRoleKey = (
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.SUPABASE_SECRET_KEY ||
  ''
).trim();

/**
 * Privileged Supabase Admin Client (Server-only).
 * Returns null cleanly when server credentials are not configured yet.
 */
export const createAdminClient = (): SupabaseClient | null => {
  if (!supabaseUrl || !serviceRoleKey) {
    return null;
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
};

export const hasAdminDatabaseConfig = (): boolean => {
  return Boolean(supabaseUrl && serviceRoleKey);
};
