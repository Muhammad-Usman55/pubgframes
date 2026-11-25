import { NextRequest, NextResponse } from 'next/server';
import {
  ADMIN_COOKIE_NAME,
  ADMIN_NO_STORE_HEADERS,
  isHttpsRequest
} from '@/lib/adminServerAuth';

export async function POST(request: NextRequest) {
  const response = NextResponse.json(
    { authenticated: false },
    { headers: ADMIN_NO_STORE_HEADERS }
  );
  response.cookies.set(ADMIN_COOKIE_NAME, '', {
    httpOnly: true,
    sameSite: 'lax',
    secure: isHttpsRequest(request),
    path: '/',
    maxAge: 0
  });
  return response;
}
