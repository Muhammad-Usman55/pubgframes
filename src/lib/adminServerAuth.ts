import crypto from 'crypto';
import { cookies } from 'next/headers';
import { createClient } from '@supabase/supabase-js';
import { createAdminClient } from '@/utils/supabase/admin';

export const ADMIN_COOKIE_NAME = 'pf_admin_session';
const SESSION_TTL_MS = 2 * 60 * 60 * 1000;

export interface VerifiedAdminSession {
  email: string;
  role: 'super_admin';
  exp: number;
}

export function getSingleSuperuserEmail(): string {
  return (process.env.ADMIN_EMAIL || 'usmanshahidhnd2108@gmail.com').trim().toLowerCase();
}

function getSigningSecret(): string {
  return (
    process.env.ADMIN_SESSION_SECRET ||
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_SECRET_KEY ||
    process.env.ADMIN_PASSWORD ||
    'pubgframes-local-dev-secret-change-in-prod'
  );
}

function safeEqualString(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

export function signAdminSessionToken(email: string): string {
  const payload: VerifiedAdminSession = {
    email: email.trim().toLowerCase(),
    role: 'super_admin',
    exp: Date.now() + SESSION_TTL_MS
  };
  const encodedPayload = Buffer.from(JSON.stringify(payload), 'utf8').toString('base64url');
  const signature = crypto
    .createHmac('sha256', getSigningSecret())
    .update(encodedPayload)
    .digest('base64url');
  return `${encodedPayload}.${signature}`;
}

export function verifyAdminSessionToken(token: string | undefined): VerifiedAdminSession | null {
  if (!token) return null;
  const parts = token.split('.');
  if (parts.length !== 2) return null;

  const [encodedPayload, signature] = parts;
  const expectedSig = crypto
    .createHmac('sha256', getSigningSecret())
    .update(encodedPayload)
    .digest('base64url');

  if (!safeEqualString(signature, expectedSig)) {
    return null;
  }

  try {
    const parsed = JSON.parse(Buffer.from(encodedPayload, 'base64url').toString('utf8')) as VerifiedAdminSession;
    if (!parsed?.email || parsed.role !== 'super_admin' || !parsed.exp) return null;
    if (Date.now() > parsed.exp) return null;
    if (parsed.email.trim().toLowerCase() !== getSingleSuperuserEmail()) return null;
    return parsed;
  } catch {
    return null;
  }
}

export async function getVerifiedAdminSession(): Promise<VerifiedAdminSession | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  return verifyAdminSessionToken(token);
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

  const supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').trim();
  const supabaseAnon = (
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    ''
  ).trim();

  if (supabaseUrl && supabaseAnon) {
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

      if (error && !error.message.toLowerCase().includes('fetch')) {
        return { ok: false, error: 'Invalid email or security password.' };
      }
    } catch {
      // Fall through to env check only on network outage
    }
  }

  const expectedPassword = process.env.ADMIN_PASSWORD || '@oZhQ95XP';
  if (safeEqualString(passwordInput, expectedPassword)) {
    return { ok: true, email: allowedEmail };
  }

  return { ok: false, error: 'Invalid email or security password.' };
}
