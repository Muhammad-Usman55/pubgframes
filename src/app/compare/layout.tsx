import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compare PUBG Mobile FPS & Gaming Specs Side by Side',
  description:
    'Compare any two smartphones or tablets head-to-head across PUBG Mobile Smooth, Balanced, HD, HDR, and Ultra HD frame rates, processors, cooling, and battery draw.',
  alternates: {
    canonical: '/compare'
  }
};

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
