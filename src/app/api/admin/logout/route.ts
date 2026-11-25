import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_COOKIE_NAME } from '@/lib/adminServerAuth';

export async function POST(request: NextRequest) {
  const forwardedProto = request.headers.get('x-forwarded-proto') || '';
  const isHttps =
    forwardedProto.split(',')[0].trim().toLowerCase() === 'https' ||
    request.nextUrl.protocol === 'https:';

  const response = NextResponse.json(
    { authenticated: false },
    { headers: { 'Cache-Control': 'no-store, max-age=0' } }
  );
  response.cookies.set(ADMIN_COOKIE_NAME, '', {
    httpOnly: true,
    sameSite: 'lax',
    secure: isHttps,
    path: '/',
    maxAge: 0
  });
  return response;
}
