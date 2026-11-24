import Link from 'next/link';

export function PrivacyPolicyContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-8">
      <div className="space-y-2">
        <h1 className="text-[32px] sm:text-[42px] font-semibold tracking-[-0.025em] text-[#0b0c0e]">
          Privacy Policy
        </h1>
        <p className="text-[14px] text-[#525866]">Last Updated: November 2026</p>
      </div>

      <div className="p-6 sm:p-8 rounded-lg bg-[#ffffff] border border-[#e2e5ea] space-y-6 text-[15px] text-[#272b33] leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-[#0b0c0e]">1. Information we collect &amp; zero game credentials</h2>
          <p>
            PUBGFrames operates as an informational smartphone gaming performance reference. We never ask for, access, store, or process your PUBG Mobile Player ID, account password, payment information, or third-party game logins.
          </p>
          <p>
            When you use our benchmark submission or contact form, we store only the details you voluntarily provide (name, email address, device model, and message) solely to review your request and respond.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-[#0b0c0e]">2. Google AdSense &amp; third-party advertising cookies</h2>
          <p>
            PUBGFrames may display advertisements served by Google AdSense and its certified ad-technology partners. Third-party vendors, including Google, use cookies (such as the DoubleClick DART cookie) to serve ads based on a visitor&apos;s prior visits to PUBGFrames or other websites across the Internet.
          </p>
          <p>
            Google&apos;s use of advertising cookies enables Google and its partners to serve personalized ads to visitors based on their browsing history. You may opt out of personalized advertising at any time by visiting{' '}
            <a
              href="https://adssettings.google.com/"
              target="_blank"
              rel="noreferrer"
              className="text-[#1f2de6] hover:underline font-medium"
            >
              Google Ads Settings
            </a>{' '}
            or by opting out of third-party vendors&apos; use of cookies via{' '}
            <a
              href="https://www.aboutads.info/choices/"
              target="_blank"
              rel="noreferrer"
              className="text-[#1f2de6] hover:underline font-medium"
            >
              aboutads.info/choices
            </a>.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-[#0b0c0e]">3. Log data &amp; aggregated analytics</h2>
          <p>
            To keep pages fast and maintain device coverage accuracy, PUBGFrames records non-personal aggregated telemetry such as visited page paths, coarse country region, device viewport class (mobile or desktop), and searched smartphone model terms. We do not sell personal user data to third-party data brokers.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-[#0b0c0e]">4. Your GDPR &amp; CCPA privacy rights</h2>
          <p>
            Depending on your jurisdiction (including the European Economic Area under GDPR and California under CCPA/CPRA), you have the right to request access to, correction of, or deletion of personal contact inquiries you have submitted, as well as the right to decline non-essential advertising cookies through our{' '}
            <Link href="/cookie-policy" className="text-[#1f2de6] hover:underline font-medium">
              Cookie Policy
            </Link>{' '}
            guidance.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-[#0b0c0e]">5. Children&apos;s privacy</h2>
          <p>
            PUBGFrames does not knowingly collect personally identifiable information from children under the age of 13. If you believe a child has submitted personal details through our contact form, please notify us immediately so we can delete those records.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-[#0b0c0e]">6. Privacy questions &amp; data requests</h2>
          <p>
            Reach our team through our{' '}
            <Link href="/contact" className="text-[#1f2de6] hover:underline font-medium">
              Contact page
            </Link>{' '}
            or email{' '}
            <a href="mailto:privacy@pubgframes.com" className="font-medium text-[#0b0c0e] hover:underline">
              privacy@pubgframes.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
