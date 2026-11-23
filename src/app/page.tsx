import React from 'react';
import { Hero } from '@/components/Hero';
import { FeatureCards } from '@/components/FeatureCards';
import { FpsCheckerWidget } from '@/components/FpsCheckerWidget';
import { GraphicsComparisonSection } from '@/components/GraphicsComparisonSection';
import { StatsTrustBar } from '@/components/StatsTrustBar';
import { UserReviews } from '@/components/UserReviews';
import { CtaBanner } from '@/components/CtaBanner';
import { AdBanner } from '@/components/AdBanner';

export default function HomePage() {
  return (
    <div className="space-y-4">
      {/* 1. Hero Section matching mockup */}
      <Hero />

      {/* High-visibility Google AdSlot (Top Leaderboard) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdBanner format="leaderboard" slot="pubgframes_home_top" />
      </div>

      {/* 2. 4 Feature Cards row */}
      <FeatureCards />

      {/* 3. Main FPS Checker (Most important feature) */}
      <FpsCheckerWidget />

      {/* 4. FPS in Different Settings Section */}
      <GraphicsComparisonSection />

      {/* Mid-Page Sponsor / In-feed Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdBanner format="horizontal-strip" slot="pubgframes_home_mid" />
      </div>

      {/* 5. Trust / Statistics Bar with Golden PUBG Level 3 Helmet */}
      <StatsTrustBar />

      {/* 6. Leaderboard & Telemetry Benchmarks */}
      <UserReviews />

      {/* 7. Ready to Check Your PUBG FPS CTA Banner */}
      <CtaBanner />
    </div>
  );
}
