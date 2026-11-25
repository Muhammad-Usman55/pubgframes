import crypto from 'crypto';
import type { NextRequest } from 'next/server';

export const ADMIN_COOKIE_NAME = 'pf_admin_session';
export const ADMIN_SESSION_TTL_SECONDS = 2 * 60 * 60;
const SESSION_TTL_MS = ADMIN_SESSION_TTL_SECONDS * 1000;

export const ADMIN_NO_STORE_HEADERS: Record<string, string> = {
  'Cache-Control': 'private, no-store, no-cache, must-revalidate, max-age=0',
  'CDN-Cache-Control': 'no-store',
  'Cloudflare-CDN-Cache-Control': 'no-store',
  'Surrogate-Control': 'no-store',
  Pragma: 'no-cache',
  Expires: '0',
  Vary: 'Cookie, User-Agent'
};

export interface VerifiedAdminSession {
  email: string;
  role: 'super_admin';
  exp: number;
  ua: string;
}

export function readServerEnv(...names: string[]): string {
  const env = process.env;
  for (const name of names) {
    const raw = env[name];
    if (typeof raw === 'string') {
      const cleaned = raw.trim().replace(/^['"]|['"]$/g, '').trim();
      if (cleaned) return cleaned;
    }
  }
  return '';
}

export function getSingleSuperuserEmail(): string {
  return (readServerEnv('ADMIN_EMAIL') || 'usmanshahidhnd2108@gmail.com').toLowerCase();
}

function getSigningSecret(): string {
  return (
    readServerEnv(
      'ADMIN_SESSION_SECRET',
      'SUPABASE_SERVICE_ROLE_KEY',
      'SUPABASE_SECRET_KEY',
      'ADMIN_PASSWORD'
    ) || 'pubgframes-local-dev-secret-change-in-prod'
  );
}

export function safeEqualString(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

/**
 * Hashes normalized request User-Agent with the signing secret so an intercepted
 * or synced session cookie cannot be replayed from a different device/browser.
 */
export function computeUserAgentHash(userAgent?: string | null): string {
  const normalized = (userAgent || '').trim().slice(0, 512);
  return crypto
    .createHmac('sha256', getSigningSecret())
    .update(normalized)
    .digest('base64url')
    .slice(0, 32);
}

export function signAdminSessionToken(email: string, userAgent?: string | null): string {
  const payload: VerifiedAdminSession = {
    email: email.trim().toLowerCase(),
    role: 'super_admin',
    exp: Date.now() + SESSION_TTL_MS,
    ua: computeUserAgentHash(userAgent)
  };
  const encodedPayload = Buffer.from(JSON.stringify(payload), 'utf8').toString('base64url');
  const signature = crypto
    .createHmac('sha256', getSigningSecret())
    .update(encodedPayload)
    .digest('base64url');
  return `${encodedPayload}.${signature}`;
}

export function verifyAdminSessionToken(
  token: string | undefined,
  expectedUserAgent?: string | null
): VerifiedAdminSession | null {
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
    const parsed = JSON.parse(Buffer.from(encodedPayload, 'base64url').toString('utf8')) as Partial<VerifiedAdminSession>;
    if (!parsed?.email || parsed.role !== 'super_admin' || !parsed.exp || !parsed.ua) return null;
    if (Date.now() > parsed.exp) return null;
    if (parsed.email.trim().toLowerCase() !== getSingleSuperuserEmail()) return null;

    const expectedUaHash = computeUserAgentHash(expectedUserAgent);
    if (!safeEqualString(parsed.ua, expectedUaHash)) {
      return null;
    }

    return parsed as VerifiedAdminSession;
  } catch {
    return null;
  }
}

export function verifyRequestAdminSession(request: NextRequest): VerifiedAdminSession | null {
  const token = request.cookies.get(ADMIN_COOKIE_NAME)?.value;
  const userAgent = request.headers.get('user-agent');
  return verifyAdminSessionToken(token, userAgent);
}

export function isHttpsRequest(request: NextRequest): boolean {
  const forwardedProto = request.headers.get('x-forwarded-proto') || '';
  const firstProto = forwardedProto.split(',')[0].trim().toLowerCase();
  return firstProto === 'https' || request.nextUrl.protocol === 'https:';
}
