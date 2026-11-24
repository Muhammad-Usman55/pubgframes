import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Benchmark Submissions',
  description:
    'Submit new smartphone PUBG Mobile FPS test findings, report outdated data, or contact the PUBGFrames lab and editorial team.',
  alternates: {
    canonical: '/contact'
  }
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
