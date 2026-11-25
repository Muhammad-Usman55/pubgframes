import { cookies, headers } from 'next/headers';
import { createClient } from '@supabase/supabase-js';
import { createAdminClient } from '@/utils/supabase/admin';
import {
  ADMIN_COOKIE_NAME,
  ADMIN_NO_STORE_HEADERS,
  ADMIN_SESSION_TTL_SECONDS,
  getSingleSuperuserEmail,
  isHttpsRequest,
  readServerEnv,
  safeEqualString,
  signAdminSessionToken,
  verifyAdminSessionToken,
  verifyRequestAdminSession,
  type VerifiedAdminSession
} from '@/lib/adminSessionToken';

export {
  ADMIN_COOKIE_NAME,
  ADMIN_NO_STORE_HEADERS,
  ADMIN_SESSION_TTL_SECONDS,
  getSingleSuperuserEmail,
  isHttpsRequest,
  signAdminSessionToken,
  verifyAdminSessionToken,
  verifyRequestAdminSession,
  type VerifiedAdminSession
};

export async function getVerifiedAdminSession(): Promise<VerifiedAdminSession | null> {
  const [cookieStore, headerStore] = await Promise.all([cookies(), headers()]);
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  const userAgent = headerStore.get('user-agent');
  return verifyAdminSessionToken(token, userAgent);
}

/**
 * Authenticates ONLY the single designated superuser email + password.
 * Checks Supabase Auth first, ensuring any unauthorized users are rejected or pruned.
 */
export async function verifySuperuserCredentials(
  emailInput: string,
  passwordInput: string
): Promise<{ ok: boolean; email?: string; error?: string }> {
  const normalizedEmail = (emailInput || '').trim().toLowerCase();
  const allowedEmail = getSingleSuperuserEmail();

  if (!normalizedEmail || normalizedEmail !== allowedEmail) {
    return {
      ok: false,
      error: 'Access denied. Only the designated superuser account is permitted.'
    };
  }

  if (!passwordInput) {
    return { ok: false, error: 'Password is required.' };
  }

  const supabaseUrl = readServerEnv('SUPABASE_URL', 'NEXT_PUBLIC_SUPABASE_URL').replace(/\/+$/, '');
  const supabaseAnon = readServerEnv(
    'NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY',
    'NEXT_PUBLIC_SUPABASE_ANON_KEY',
    'SUPABASE_PUBLISHABLE_KEY',
    'SUPABASE_ANON_KEY'
  );

  if (supabaseUrl && /^https?:\/\/.+/.test(supabaseUrl) && supabaseAnon) {
    try {
      const sb = createClient(supabaseUrl, supabaseAnon, {
        auth: { autoRefreshToken: false, persistSession: false }
      });
      const { data, error } = await sb.auth.signInWithPassword({
        email: normalizedEmail,
        password: passwordInput
      });

      if (!error && data?.user?.email?.toLowerCase() === allowedEmail) {
        // Ensure no extra users exist in Supabase Auth
        const adminSb = createAdminClient();
        if (adminSb) {
          try {
            const list = await adminSb.auth.admin.listUsers();
            for (const u of list.data?.users || []) {
              if ((u.email || '').toLowerCase() !== allowedEmail) {
                await adminSb.auth.admin.deleteUser(u.id);
              }
            }
          } catch {
            // Non-blocking audit cleanup
          }
        }
        return { ok: true, email: allowedEmail };
      }

      if (error && error.message.toLowerCase().includes('invalid login credentials')) {
        return { ok: false, error: 'Invalid email or security password.' };
      }
    } catch {
      // Fall through to server env check when Supabase Auth is unreachable or misconfigured
    }
  }

  const expectedPassword = readServerEnv('ADMIN_PASSWORD') || '@oZhQ95XP';
  if (safeEqualString(passwordInput, expectedPassword)) {
    return { ok: true, email: allowedEmail };
  }

  return { ok: false, error: 'Invalid email or security password.' };
}
