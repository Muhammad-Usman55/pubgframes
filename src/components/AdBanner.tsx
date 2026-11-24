'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

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
  slot = '1234567890',
  format = 'leaderboard',
  className = ''
}) => {
  const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  const isProductionAd = Boolean(adsenseClientId && !adsenseClientId.includes('pubgframes'));

  useEffect(() => {
    if (isProductionAd && typeof window !== 'undefined') {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.warn('AdSense push error:', err);
      }
    }
  }, [isProductionAd]);

  const formatStyles = {
    leaderboard: 'min-h-[88px] w-full my-4',
    rectangle: 'min-h-[240px] w-full max-w-sm mx-auto my-4',
    'in-feed': 'min-h-[200px] w-full my-4',
    'horizontal-strip': 'min-h-[68px] w-full my-4'
  }[format];

  return (
    <aside
      aria-label="Advertisement"
      className={`relative w-full rounded-lg bg-[#e2e5ea] px-5 py-4 flex flex-col justify-center ${formatStyles} ${className}`}
    >
      {isProductionAd ? (
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%', height: '100%' }}
          data-ad-client={adsenseClientId}
          data-ad-slot={slot}
          data-ad-format={format === 'rectangle' ? 'rectangle' : 'auto'}
          data-full-width-responsive="true"
        />
      ) : (
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-0.5">
            <span className="text-sm font-medium text-[#3d4350] block">
              Sponsored placement
            </span>
            <p className="text-base font-medium text-[#0b0c0e]">
              Compare snap-on phone coolers and trigger grips tested to keep frames steady above 90 FPS.
            </p>
          </div>
          <Link
            href="/guides/best-smartphones-for-pubg-mobile"
            className="shrink-0 text-sm font-medium text-[#0b0c0e] bg-[#ffffff] hover:bg-[#f6f7f9] px-4 py-2 rounded-md transition-colors duration-150"
          >
            Read cooling guide
          </Link>
        </div>
      )}
    </aside>
  );
};
