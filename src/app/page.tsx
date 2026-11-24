import React from 'react';
import { Hero } from '@/components/Hero';
import { FpsCheckerWidget } from '@/components/FpsCheckerWidget';
import { FeatureCards } from '@/components/FeatureCards';
import { GraphicsComparisonSection } from '@/components/GraphicsComparisonSection';
import { StatsTrustBar } from '@/components/StatsTrustBar';
import { UserReviews } from '@/components/UserReviews';
import { CtaBanner } from '@/components/CtaBanner';
import { AdBanner } from '@/components/AdBanner';

export default function HomePage() {
  return (
    <div className="space-y-4">
      {/* Hero with clear value & immediate path */}
      <Hero />

      {/* Main Working Product Fragment right up front */}
      <FpsCheckerWidget />

      {/* Top Advertisement Slot */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <AdBanner format="leaderboard" slot="pubgframes_home_top" />
      </div>

      {/* Inverted High-Contrast Telemetry Chapter */}
      <StatsTrustBar />

      {/* Visual Split-Slider & Preset Comparison */}
      <GraphicsComparisonSection />

      {/* Specification & Audit Overview */}
      <FeatureCards />

      {/* Mid-Page Advertisement Slot */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <AdBanner format="horizontal-strip" slot="pubgframes_home_mid" />
      </div>

      {/* Verified Performance Leaderboard */}
      <UserReviews />

      {/* Cobalt Call to Action */}
      <CtaBanner />
    </div>
  );
}
