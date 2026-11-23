'use client';

import React, { useEffect } from 'react';
import { Shield, Sparkles, ExternalLink, Zap } from 'lucide-react';

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

  // Height and structure configuration by format to guarantee 0 CLS (Cumulative Layout Shift)
  const formatStyles = {
    leaderboard: 'min-h-[90px] sm:min-h-[105px] max-w-5xl mx-auto my-6',
    rectangle: 'min-h-[250px] sm:min-h-[280px] w-full max-w-sm mx-auto my-4',
    'in-feed': 'min-h-[220px] w-full my-4',
    'horizontal-strip': 'min-h-[60px] sm:min-h-[75px] w-full my-4'
  }[format];

  return (
    <aside
      aria-label="Advertisement"
      className={`relative w-full rounded-2xl bg-[#0B0E12] border border-white/[0.07] overflow-hidden transition-all text-center flex flex-col justify-center items-center p-3 sm:p-4 ${formatStyles} ${className}`}
    >
      {/* Ad Disclosure Label compliant with Google AdSense Policies */}
      <div className="absolute top-2 right-3 flex items-center gap-1.5 text-[9px] uppercase tracking-widest text-zinc-500 font-mono select-none">
        <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
        <span>Advertisement</span>
      </div>

      {isProductionAd ? (
        // Real Google AdSense Tag
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%', height: '100%' }}
          data-ad-client={adsenseClientId}
          data-ad-slot={slot}
          data-ad-format={format === 'rectangle' ? 'rectangle' : 'auto'}
          data-full-width-responsive="true"
        />
      ) : (
        // High-end Esports Tech Sponsor Placeholder (Anti-Slop, fits design system)
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 px-2 sm:px-6">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFD400]/20 to-[#39F56A]/10 border border-[#FFD400]/30 flex items-center justify-center text-[#FFD400] shrink-0">
              <Zap className="w-5 h-5 fill-[#FFD400]/20" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#FFD400] bg-[#FFD400]/10 px-2 py-0.5 rounded-full border border-[#FFD400]/20">
                  Esports Partner
                </span>
                <span className="text-[11px] text-zinc-500 font-mono">Verified Safe</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-white tracking-tight mt-0.5">
                Pro Magnetic Phone Coolers & 200Hz Triggers for 90/120 FPS Gaming
              </p>
              <p className="text-[11px] text-zinc-400 hidden sm:block">
                Keep device temperatures below 38°C to prevent thermal frame drops in tournament classic matches.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <span className="text-xs font-bold text-black bg-[#FFD400] hover:bg-[#FFE033] px-4 py-2 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm">
              <span>Explore Gear</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      )}
    </aside>
  );
};
