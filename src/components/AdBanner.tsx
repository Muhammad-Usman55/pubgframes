'use client';

import React, { useEffect } from 'react';
import { getAdSenseClientId } from '@/lib/siteConfig';

interface AdBannerProps {
  slot?: string;
  format?: 'leaderboard' | 'rectangle' | 'in-feed' | 'horizontal-strip';
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

export const AdBanner: React.FC<AdBannerProps> = ({
  slot = '',
  format = 'leaderboard',
  className = ''
}) => {
  const adsenseClientId = getAdSenseClientId();
  const isProductionAd = Boolean(adsenseClientId && slot && /^\d+$/.test(slot));

  useEffect(() => {
    if (isProductionAd && typeof window !== 'undefined') {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {
        // AdSense script still initializing
      }
    }
  }, [isProductionAd]);

  if (!isProductionAd || !adsenseClientId) {
    return null;
  }

  const formatStyles = {
    leaderboard: 'min-h-[90px] w-full my-4',
    rectangle: 'min-h-[250px] w-full max-w-sm mx-auto my-4',
    'in-feed': 'min-h-[200px] w-full my-4',
    'horizontal-strip': 'min-h-[70px] w-full my-4'
  }[format];

  return (
    <aside
      aria-label="Advertisement"
      className={`relative w-full overflow-hidden flex items-center justify-center ${formatStyles} ${className}`}
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%' }}
        data-ad-client={adsenseClientId}
        data-ad-slot={slot}
        data-ad-format={format === 'rectangle' ? 'rectangle' : 'auto'}
        data-full-width-responsive="true"
      />
    </aside>
  );
};
