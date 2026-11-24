import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy — PUBGFrames',
  description:
    'Learn how PUBGFrames and Google AdSense partners use browser cookies, how analytics telemetry works, and how to control cookie preferences.'
};

export default function CookiePolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-8">
      <div className="space-y-2">
        <h1 className="text-[32px] sm:text-[42px] font-semibold tracking-[-0.025em] text-[#0b0c0e]">
          Cookie Policy
        </h1>
        <p className="text-[14px] text-[#525866]">Last Updated: November 2026</p>
      </div>

      <div className="p-6 sm:p-8 rounded-lg bg-[#ffffff] border border-[#e2e5ea] space-y-6 text-[15px] text-[#272b33] leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-[#0b0c0e]">1. What cookies and storage we use</h2>
          <p>
            Cookies are small text files stored in your web browser to preserve interface preferences, deliver relevant advertising, and protect secure sessions. PUBGFrames uses minimal local storage for interface controls (such as optional button sound toggle) and does not store game passwords or payment credentials.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-[#0b0c0e]">2. Advertising cookies (Google AdSense)</h2>
          <p>
            Where Google AdSense is enabled, Google and third-party ad networks place cookies to limit repetitive ad frequency, measure ad performance, and show ads aligned with your general interests. You can adjust or opt out of personalized Google ad cookies anytime at{' '}
            <a
              href="https://adssettings.google.com/"
              target="_blank"
              rel="noreferrer"
              className="text-[#1f2de6] hover:underline font-medium"
            >
              adssettings.google.com
            </a>.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-[#0b0c0e]">3. Managing or blocking cookies</h2>
          <p>
            You can clear or block cookies through your browser settings (Chrome, Safari, Firefox, Edge, or Android/iOS mobile browsers). Disabling advertising cookies will not block access to any PUBGFrames FPS lookup tools, device comparison charts, or performance guides.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-[#0b0c0e]">4. Related policies</h2>
          <p>
            For full details on data handling and GDPR/CCPA rights, please read our{' '}
            <Link href="/privacy-policy" className="text-[#1f2de6] hover:underline font-medium">
              Privacy Policy
            </Link>{' '}
            or reach out via our{' '}
            <Link href="/contact" className="text-[#1f2de6] hover:underline font-medium">
              Contact page
            </Link>.
          </p>
        </section>
      </div>
    </div>
  );
}
