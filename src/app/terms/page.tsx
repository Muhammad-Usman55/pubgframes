import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service — PUBGFrames',
  description:
    'Terms of Service governing access to PUBGFrames smartphone benchmark tools, guides, intellectual property, and acceptable use.',
  alternates: {
    canonical: '/terms'
  }
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-8">
      <div className="space-y-2">
        <h1 className="text-[32px] sm:text-[42px] font-semibold tracking-[-0.025em] text-[#0b0c0e]">
          Terms of Service
        </h1>
        <p className="text-[14px] text-[#525866]">Effective Date: November 2026</p>
      </div>

      <div className="p-6 sm:p-8 rounded-lg bg-[#ffffff] border border-[#e2e5ea] space-y-6 text-[15px] text-[#272b33] leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-[#0b0c0e]">1. Acceptance of terms</h2>
          <p>
            By visiting or using PUBGFrames, you agree to comply with these Terms of Service and all applicable laws. If you do not agree with these terms, please discontinue use of the site.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-[#0b0c0e]">2. Informational &amp; benchmark purpose</h2>
          <p>
            All smartphone FPS ratings, thermal throttling estimates, battery consumption figures, and hardware comparisons on PUBGFrames are published for educational and reference use before purchasing a device or adjusting official in-game graphics presets. Actual frame rates depend on ambient temperature, OS firmware, battery health, and game patches.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-[#0b0c0e]">3. Fair play policy (No GFX tools or APK edits)</h2>
          <p>
            PUBGFrames does not host, sell, distribute, or recommend unauthorized GFX tools, modified APK clients, UserCustom config edits, or third-party scripts that breach Krafton&apos;s or Tencent Games&apos; Terms of Service. All tuning advice strictly uses official Android/iOS OS settings and native in-game options.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-[#0b0c0e]">4. Intellectual property &amp; trademarks</h2>
          <p>
            Original guides, structured benchmark matrices, site layout, and software on PUBGFrames are owned by PUBGFrames and may not be scraped, mirrored, or republished commercially without written permission. Device names, chipset brands, and &ldquo;PUBG Mobile&rdquo; trademarks belong to their respective owners and are referenced strictly for identification.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-[#0b0c0e]">5. Advertising &amp; external links</h2>
          <p>
            PUBGFrames may display third-party advertisements (including Google AdSense) and link to external reference sites. We are not responsible for the content, privacy practices, or availability of third-party websites.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-[#0b0c0e]">6. Limitation of liability</h2>
          <p>
            PUBGFrames is provided &ldquo;as is&rdquo; without warranties of any kind. In no event shall PUBGFrames be liable for hardware buying decisions, match outcomes, or indirect damages arising from use of the site. For corrections or legal inquiries, please contact us via our{' '}
            <Link href="/contact" className="text-[#1f2de6] hover:underline font-medium">
              Contact page
            </Link>.
          </p>
        </section>
      </div>
    </div>
  );
}
