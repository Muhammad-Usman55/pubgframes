import { NextRequest, NextResponse } from 'next/server';
import {
  ADMIN_COOKIE_NAME,
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
        { status: 401 }
      );
    }

    const token = signAdminSessionToken(result.email);
    const response = NextResponse.json({
      authenticated: true,
      user: { email: result.email, role: 'super_admin' }
    });

    response.cookies.set(ADMIN_COOKIE_NAME, token, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 2
    });

    return response;
  } catch {
    return NextResponse.json(
      { authenticated: false, error: 'Invalid login payload' },
      { status: 400 }
    );
  }
}
