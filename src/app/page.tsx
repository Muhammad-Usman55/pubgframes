import React from 'react';
import { Hero } from '@/components/Hero';
import { FeatureCards } from '@/components/FeatureCards';
import { FpsCheckerWidget } from '@/components/FpsCheckerWidget';
import { GraphicsComparisonSection } from '@/components/GraphicsComparisonSection';
import { StatsTrustBar } from '@/components/StatsTrustBar';
import { UserReviews } from '@/components/UserReviews';
import { CtaBanner } from '@/components/CtaBanner';

export default function HomePage() {
  return (
    <div className="space-y-4">
      {/* 1. Hero Section matching mockup */}
      <Hero />

      {/* 2. 4 Feature Cards row */}
      <FeatureCards />

      {/* 3. Main FPS Checker (Most important feature) */}
      <FpsCheckerWidget />

      {/* 4. FPS in Different Settings Section */}
      <GraphicsComparisonSection />

      {/* 5. Trust / Statistics Bar with Golden PUBG Level 3 Helmet */}
      <StatsTrustBar />

      {/* 6. What Our Users Say */}
      <UserReviews />

      {/* 7. Ready to Check Your PUBG FPS CTA Banner */}
      <CtaBanner />
    </div>
  );
}
