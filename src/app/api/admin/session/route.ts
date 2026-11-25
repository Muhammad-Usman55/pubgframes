import { NextRequest, NextResponse } from 'next/server';
import {
  ADMIN_NO_STORE_HEADERS,
  verifyRequestAdminSession
} from '@/lib/adminServerAuth';

export async function GET(request: NextRequest) {
  const session = verifyRequestAdminSession(request);
  if (!session) {
    return NextResponse.json(
      { authenticated: false },
      { status: 401, headers: ADMIN_NO_STORE_HEADERS }
    );
  }
  return NextResponse.json(
    {
      authenticated: true,
      user: { email: session.email, role: session.role }
    },
    { headers: ADMIN_NO_STORE_HEADERS }
  );
}
