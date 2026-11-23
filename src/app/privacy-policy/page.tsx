import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Lock, EyeOff } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy — PUBGFrames',
  description: 'PUBGFrames user privacy policy, data protection standards, and zero tracking pledge.'
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#39F56A]/10 border border-[#39F56A]/20 text-[#39F56A] text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Privacy & Security</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white">Privacy Policy</h1>
        <p className="text-xs sm:text-sm text-gray-400">Effective Date: February 2026</p>
      </div>

      <div className="p-6 rounded-2xl bg-[#171D21] border border-white/10 space-y-6 text-xs sm:text-sm text-gray-300 leading-relaxed shadow-xl">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#FFD400]" />
            <span>1. Zero In-Game Credentials Collected</span>
          </h2>
          <p>
            PUBGFrames is strictly an informational and benchmark calculation utility. We <strong>never request, access, store, or transmit</strong> your PUBG Mobile player ID, password, Facebook/Twitter/Google game login, or any in-game credentials.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <EyeOff className="w-4 h-4 text-[#39F56A]" />
            <span>2. Local Processing of Device Queries</span>
          </h2>
          <p>
            When you select or search a smartphone model and choose a graphics preset in our FPS calculator, the calculation runs locally in your browser. We do not maintain user tracking profiles or sell device lookup data to third-party advertising networks.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">3. Cookies and Analytics</h2>
          <p>
            We use minimal, privacy-friendly telemetry strictly to measure website uptime, Core Web Vitals, and page loading speed across mobile and desktop networks. No cross-site ad tracking cookies are employed.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">4. Contacting Us Regarding Privacy</h2>
          <p>
            For any inquiries regarding data protection standards on PUBGFrames, you may reach out directly via our <Link href="/contact" className="text-[#FFD400] underline">Contact Page</Link> or email <span className="font-mono text-white">privacy@pubgframes.com</span>.
          </p>
        </section>
      </div>
    </div>
  );
}
