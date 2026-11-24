import React from 'react';
import { Metadata } from 'next';
import { FpsCheckerWidget } from '@/components/FpsCheckerWidget';
import { GraphicsComparisonSection } from '@/components/GraphicsComparisonSection';

export const metadata: Metadata = {
  title: 'PUBG Mobile FPS Checker & Calculator (60, 90, 120 FPS)',
  description:
    'Calculate and test estimated PUBG Mobile frame rates for any smartphone. Check thermal throttling, battery drain, and verified graphics capabilities.',
  keywords: ['PUBG FPS Calculator', 'PUBG Mobile FPS Checker', 'Test PUBG FPS', 'Can my phone run 90 FPS PUBG']
};

export default function FpsCheckerPage() {
  return (
    <div className="py-8 sm:py-12 space-y-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-3">
        <h1 className="text-[32px] sm:text-[48px] font-semibold tracking-[-0.025em] text-[#0b0c0e] leading-tight">
          PUBG Mobile FPS Checker
        </h1>
        <p className="text-[16px] sm:text-[18px] text-[#525866] max-w-[54ch]">
          Pick your phone and choose a graphics preset to inspect frame caps, heat buildup, and battery consumption.
        </p>
      </div>

      <FpsCheckerWidget />

      <section className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-[#ffffff] border border-[#e2e5ea] space-y-2">
            <h3 className="text-lg font-semibold text-[#0b0c0e]">How FPS estimates work</h3>
            <p className="text-[15px] text-[#525866] leading-relaxed">
              Figures combine SoC graphics capability and memory bandwidth with verified client caps across Erangel and Livik classic matches.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-[#ffffff] border border-[#e2e5ea] space-y-2">
            <h3 className="text-lg font-semibold text-[#0b0c0e]">Heat and throttling</h3>
            <p className="text-[15px] text-[#525866] leading-relaxed">
              Long ranked sessions heat phone processors past 43°C, triggering automatic frame drops. Use the play-duration slider to check thermal endurance.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-[#ffffff] border border-[#e2e5ea] space-y-2">
            <h3 className="text-lg font-semibold text-[#0b0c0e]">Honest lock labels</h3>
            <p className="text-[15px] text-[#525866] leading-relaxed">
              If PUBG Mobile restricts a graphics tier or disables a game mode on older hardware, it is marked locked or unsupported instead of padded.
            </p>
          </div>
        </div>
      </section>

      <GraphicsComparisonSection />
    </div>
  );
}
