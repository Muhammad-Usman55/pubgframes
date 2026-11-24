'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Shield, Lock, Mail, ArrowRight, Zap, CheckCircle2, AlertCircle } from 'lucide-react';
import { getSupabase } from '@/lib/supabase';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const supabase = getSupabase();
      if (supabase) {
        // Try Supabase Auth first
        const { error: sbError } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password
        });
        if (sbError) {
          // Check authorized admin credentials fallback
          if (email.trim().toLowerCase() === 'usmanshahidhnd2108@gmail.com' && password === '@oZhQ95XP') {
            localStorage.setItem('pubgframes_admin_auth', 'true');
            localStorage.setItem('pubgframes_admin_user', email.trim().toLowerCase());
            router.push('/admin');
            return;
          }
          setError(sbError.message);
          setLoading(false);
          return;
        }
        localStorage.setItem('pubgframes_admin_auth', 'true');
        localStorage.setItem('pubgframes_admin_user', email.trim().toLowerCase());
        router.push('/admin');
        return;
      }

      // Local / Offline fallback mode with designated credentials
      if (email.trim().toLowerCase() === 'usmanshahidhnd2108@gmail.com' && password === '@oZhQ95XP') {
        localStorage.setItem('pubgframes_admin_auth', 'true');
        localStorage.setItem('pubgframes_admin_user', email.trim().toLowerCase());
        router.push('/admin');
      } else {
        setError('Invalid admin credentials. Please enter authorized admin email and password.');
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const fillDemoCredentials = () => {
    setEmail('usmanshahidhnd2108@gmail.com');
    setPassword('@oZhQ95XP');
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        {/* Brand Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] mx-auto shadow-lg shadow-[#FFD400]/5">
            <Shield className="w-7 h-7" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            PUBGFrames <span className="text-[#FFD400]">Admin Console</span>
          </h1>
          <p className="text-xs sm:text-sm text-gray-400">
            Sign in to manage smartphones database, view live visitor analytics, and configure Supabase.
          </p>
        </div>

        {/* Login Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#101518] border border-white/10 shadow-2xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD400]/5 rounded-full blur-3xl -z-10" />

          {error && (
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                Admin Email or Username
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="usmanshahidhnd2108@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#FFD400] transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                Security Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#FFD400] transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-4 rounded-xl bg-[#FFD400] hover:bg-[#ffe033] text-black font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#FFD400]/20 transition-all active:scale-[0.98] disabled:opacity-50 cursor-pointer"
            >
              {loading ? (
                <span>Authenticating...</span>
              ) : (
                <>
                  <span>Sign In to Control Center</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* One-Click Demo Helper */}
          <div className="pt-4 border-t border-white/5 space-y-3">
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>Quick Test Access:</span>
              <button
                type="button"
                onClick={fillDemoCredentials}
                className="text-[#39F56A] hover:underline font-bold inline-flex items-center gap-1 cursor-pointer"
              >
                <Zap className="w-3 h-3" /> Auto-fill Admin Credentials
              </button>
            </div>
            <div className="p-2.5 rounded-lg bg-black/30 border border-white/5 text-[11px] text-gray-400 space-y-1">
              <div><strong className="text-gray-300">Authorized Admin:</strong> usmanshahidhnd2108@gmail.com</div>
              <div><strong className="text-gray-300">Security Key:</strong> @oZhQ95XP</div>
            </div>
          </div>
        </div>

        {/* Back to Site */}
        <div className="text-center">
          <Link
            href="/"
            className="text-xs text-gray-400 hover:text-white transition-colors"
          >
            ← Return to PUBGFrames Public Website
          </Link>
        </div>
      </div>
    </div>
  );
}
