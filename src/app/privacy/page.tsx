import { Metadata } from 'next';
import { PrivacyPolicyContent } from '@/components/PrivacyPolicyContent';
import { getSiteUrl } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Privacy Policy — PUBGFrames',
  description:
    'PUBGFrames Privacy Policy covering Google AdSense cookies, analytics telemetry, GDPR/CCPA rights, and data protection standards.',
  alternates: {
    canonical: `${getSiteUrl()}/privacy-policy`
  }
};

export default function PrivacyPage() {
  return <PrivacyPolicyContent />;
}
