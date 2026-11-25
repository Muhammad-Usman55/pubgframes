import { NextRequest, NextResponse } from 'next/server';
import {
  ADMIN_COOKIE_NAME,
  ADMIN_NO_STORE_HEADERS,
  isHttpsRequest,
  verifyRequestAdminSession
} from '@/lib/adminSessionToken';

function applyNoStoreHeaders(response: NextResponse): NextResponse {
  for (const [key, value] of Object.entries(ADMIN_NO_STORE_HEADERS)) {
    response.headers.set(key, value);
  }
  return response;
}

function clearStaleSessionCookie(request: NextRequest, response: NextResponse): void {
  if (!request.cookies.has(ADMIN_COOKIE_NAME)) return;
  response.cookies.set(ADMIN_COOKIE_NAME, '', {
    httpOnly: true,
    sameSite: 'lax',
    secure: isHttpsRequest(request),
    path: '/',
    maxAge: 0
  });
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/api/admin/login' || pathname === '/api/admin/logout') {
    return applyNoStoreHeaders(NextResponse.next());
  }

  if (pathname === '/admin/login' || pathname.startsWith('/admin/login/')) {
    return applyNoStoreHeaders(NextResponse.next());
  }

  const session = verifyRequestAdminSession(request);

  if (pathname.startsWith('/api/admin')) {
    if (!session) {
      const body =
        pathname === '/api/admin/session' ? { authenticated: false } : { error: 'Unauthorized' };
      const res = applyNoStoreHeaders(NextResponse.json(body, { status: 401 }));
      clearStaleSessionCookie(request, res);
      return res;
    }
    return applyNoStoreHeaders(NextResponse.next());
  }

  if (!session) {
    const loginUrl = new URL('/admin/login', request.url);
    const res = applyNoStoreHeaders(NextResponse.redirect(loginUrl, 307));
    clearStaleSessionCookie(request, res);
    return res;
  }

  return applyNoStoreHeaders(NextResponse.next());
}

export const config = {
  matcher: ['/admin', '/admin/:path*', '/api/admin/:path*']
};
