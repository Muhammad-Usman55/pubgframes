import { NextResponse } from 'next/server';
import { getVerifiedAdminSession } from '@/lib/adminServerAuth';

const NO_STORE = { 'Cache-Control': 'no-store, max-age=0' };

export async function GET() {
  const session = await getVerifiedAdminSession();
  if (!session) {
    return NextResponse.json({ authenticated: false }, { status: 401, headers: NO_STORE });
  }
  return NextResponse.json(
    {
      authenticated: true,
      user: { email: session.email, role: session.role }
    },
    { headers: NO_STORE }
  );
}
