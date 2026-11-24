'use client';

import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ShieldCheck, Lock, Mail, ArrowRight, AlertCircle, Eye, EyeOff, ArrowLeft } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let active = true;
    fetch('/api/admin/session', { cache: 'no-store' })
      .then((res) => {
        if (res.ok && active) {
          router.replace('/admin');
        }
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [router]);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          password
        })
      });

      const data = (await res.json()) as { authenticated?: boolean; error?: string };

      if (!res.ok || !data.authenticated) {
        setError(data.error || 'Invalid email or security password.');
        setLoading(false);
        return;
      }

      router.replace('/admin');
      router.refresh();
    } catch {
      setError('Unable to reach authentication service. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[82vh] bg-[#eef0f3] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-[420px] space-y-6">
        <div className="space-y-2 text-center">
          <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-[#111317] text-white mx-auto">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h1 className="text-[28px] font-semibold tracking-[-0.025em] text-[#0b0c0e] leading-tight">
            Admin sign in
          </h1>
          <p className="text-[15px] text-[#3d4350]">
            Manage the device catalog, view real traffic, and monitor Supabase sync.
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-xl bg-[#ffffff] shadow-sm space-y-6">
          {error && (
            <div
              role="alert"
              className="p-3.5 rounded-lg bg-[#fee2e2] text-[#991b1b] text-[15px] flex items-start gap-2.5"
            >
              <AlertCircle className="w-4 h-4 shrink-0 mt-1" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="admin-email" className="block text-[15px] font-medium text-[#0b0c0e]">
                Superuser email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#525866] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="admin-email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="admin@pubgframes.internal"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-md bg-[#eef0f3] text-base text-[#0b0c0e] placeholder-[#525866] focus:outline-none focus:ring-2 focus:ring-[#1f2de6] focus:bg-[#ffffff] transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="admin-password" className="block text-[15px] font-medium text-[#0b0c0e]">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#525866] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="admin-password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-11 py-2.5 rounded-md bg-[#eef0f3] text-base text-[#0b0c0e] placeholder-[#525866] focus:outline-none focus:ring-2 focus:ring-[#1f2de6] focus:bg-[#ffffff] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded text-[#525866] hover:text-[#0b0c0e] cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-md bg-[#1f2de6] hover:bg-[#1723bf] text-white font-medium text-base inline-flex items-center justify-center gap-2 transition-colors duration-150 disabled:opacity-60 cursor-pointer"
            >
              <span>{loading ? 'Signing in...' : 'Sign in'}</span>
              {!loading && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>

          <div className="p-3.5 rounded-lg bg-[#eef0f3] text-[15px] text-[#3d4350] leading-relaxed">
            Restricted to the designated superuser account. Sessions are verified server-side via signed cookies and expire automatically.
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#3d4350] hover:text-[#0b0c0e] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to PUBGFrames</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
