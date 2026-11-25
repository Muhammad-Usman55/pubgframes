import { NextRequest, NextResponse } from 'next/server';
import {
  ADMIN_COOKIE_NAME,
  ADMIN_NO_STORE_HEADERS,
  ADMIN_SESSION_TTL_SECONDS,
  isHttpsRequest,
  signAdminSessionToken,
  verifySuperuserCredentials
} from '@/lib/adminServerAuth';

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { email?: string; password?: string };
    const result = await verifySuperuserCredentials(body.email || '', body.password || '');

    if (!result.ok || !result.email) {
      return NextResponse.json(
        { authenticated: false, error: result.error || 'Authentication failed' },
        { status: 401, headers: ADMIN_NO_STORE_HEADERS }
      );
    }

    const token = signAdminSessionToken(result.email, request.headers.get('user-agent'));
    const response = NextResponse.json(
      {
        authenticated: true,
        user: { email: result.email, role: 'super_admin' }
      },
      { headers: ADMIN_NO_STORE_HEADERS }
    );

    response.cookies.set(ADMIN_COOKIE_NAME, token, {
      httpOnly: true,
      sameSite: 'lax',
      secure: isHttpsRequest(request),
      path: '/',
      maxAge: ADMIN_SESSION_TTL_SECONDS
    });

    return response;
  } catch {
    return NextResponse.json(
      { authenticated: false, error: 'Invalid login payload' },
      { status: 400, headers: ADMIN_NO_STORE_HEADERS }
    );
  }
}
