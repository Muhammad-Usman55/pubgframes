import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Smartphones & Tablets PUBG FPS Database',
  description:
    'Browse 1,630+ smartphones and tablets tested for PUBG Mobile 30, 40, 60, 90, and 120 FPS performance, chipsets, gyroscope hardware, and cooling stability.',
  alternates: {
    canonical: '/devices'
  }
};

export default function DevicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
