import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — PUBGFrames',
  description: 'PUBGFrames user privacy policy, data protection standards, and zero tracking pledge.'
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-8">
      <div className="space-y-2">
        <h1 className="text-[32px] sm:text-[42px] font-semibold tracking-[-0.025em] text-[#0b0c0e]">
          Privacy Policy
        </h1>
        <p className="text-[14px] text-[#525866]">Effective Date: February 2026</p>
      </div>

      <div className="p-6 sm:p-8 rounded-lg bg-[#ffffff] border border-[#e2e5ea] space-y-6 text-[15px] text-[#272b33] leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-[#0b0c0e]">1. Zero in-game credentials collected</h2>
          <p>
            PUBGFrames is an informational benchmark reference. We never request, access, store, or transmit your PUBG Mobile player ID, password, or third-party game login.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-[#0b0c0e]">2. Local device lookups</h2>
          <p>
            Searching smartphones and simulating graphics presets runs locally in your browser. We do not sell device lookup activity to external brokers.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-[#0b0c0e]">3. Cookies and analytics</h2>
          <p>
            Minimal privacy-friendly metrics are used to track uptime and Core Web Vitals performance.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-[#0b0c0e]">4. Privacy questions</h2>
          <p>
            Reach us via our{' '}
            <Link href="/contact" className="text-[#1f2de6] hover:underline">
              Contact page
            </Link>{' '}
            or email <strong className="font-medium text-[#0b0c0e]">privacy@pubgframes.com</strong>.
          </p>
        </section>
      </div>
    </div>
  );
}
