import { Suspense } from 'react';
import { redirect } from 'next/navigation';
import AdminDashboardClient from '@/components/AdminDashboardClient';
import { getVerifiedAdminSession } from '@/lib/adminServerAuth';

async function AuthenticatedAdminGate() {
  const session = await getVerifiedAdminSession();
  if (!session) {
    redirect('/admin/login');
  }

  return <AdminDashboardClient initialAdminEmail={session.email} />;
}

export default function AdminDashboardPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[70vh] bg-[#eef0f3] flex items-center justify-center text-sm text-[#525866]">
          Verifying admin session...
        </div>
      }
    >
      <AuthenticatedAdminGate />
    </Suspense>
  );
}
