import React from 'react';
import { Metadata } from 'next';
import { FpsCheckerWidget } from '@/components/FpsCheckerWidget';
import { GraphicsComparisonSection } from '@/components/GraphicsComparisonSection';
import { ShieldCheck, Flame, Cpu, Gauge, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PUBG Mobile FPS Checker & Calculator (60, 90, 120 FPS)',
  description:
    'Calculate and test estimated PUBG Mobile frame rates for any smartphone. Check thermal throttling, battery drain, and verified graphics capabilities.',
  keywords: ['PUBG FPS Calculator', 'PUBG Mobile FPS Checker', 'Test PUBG FPS', 'Can my phone run 90 FPS PUBG']
};

export default function FpsCheckerPage() {
  return (
    <div className="py-8 space-y-12">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-bold">
          <Zap className="w-3.5 h-3.5 fill-current" />
          <span>PUBGFrames Engine v3.4</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          PUBG Mobile <span className="text-[#39F56A]">FPS Checker</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
          Select your smartphone and graphics preset to calculate real-world frame rates, thermal throttling behavior, and competitive stability.
        </p>
      </div>

      {/* Main Interactive Widget */}
      <FpsCheckerWidget />

      {/* Deep-dive analysis guide cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#171D21] border border-white/5 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#39F56A]/10 text-[#39F56A] flex items-center justify-center">
              <Gauge className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">How We Estimate FPS</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Our calculations combine hardware compute capacity (GPU FLOPS, memory bandwidth) with thousands of verified community telemetry logs collected under actual Erangel and Livik tournament conditions.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#171D21] border border-white/5 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF9A24]/10 text-[#FF9A24] flex items-center justify-center">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Thermal Throttling Protection</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Extended play sessions heat smartphone processors to 44°C+, triggering automatic clock speed reductions. We highlight thermal risks so you know whether a magnetic cooler is recommended.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#171D21] border border-white/5 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#28A9FF]/10 text-[#28A9FF] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Zero Fake Numbers</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              If a graphics mode is not officially enabled in the game client for your chipset, we clearly label it as &ldquo;Unsupported / Locked&rdquo; instead of inventing misleading numbers.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison visual */}
      <GraphicsComparisonSection />
    </div>
  );
}
