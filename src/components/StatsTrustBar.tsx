import React from 'react';
import Image from 'next/image';
import { Smartphone, ShieldCheck, Gauge, Award, CheckCircle2 } from 'lucide-react';

export const StatsTrustBar = () => {
  const verifiedMetrics = [
    {
      label: 'Global Database',
      value: '628+ Phones',
      subtext: 'Flagships to Budget Devices',
      icon: Smartphone,
      accent: '#FFD400'
    },
    {
      label: 'Graphics Modes',
      value: '5 Presets',
      subtext: 'Smooth to Ultra HD Pack',
      icon: Gauge,
      accent: '#39F56A'
    },
    {
      label: 'Zero Ban Risk',
      value: '100% Safe',
      subtext: 'No GFX Tools or Modified APKs',
      icon: ShieldCheck,
      accent: '#38BDF8'
    },
    {
      label: 'Frame-Time Telemetry',
      value: 'Sub-15ms',
      subtext: '99th Percentile Frame Pacing',
      icon: Award,
      accent: '#A855F7'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div className="relative rounded-3xl bg-[#0B0F14] border border-white/[0.1] overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Left Side: 4 Verified Metrics in 2x2 grid */}
          <div className="lg:col-span-8 p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#39F56A] shadow-[0_0_8px_#39F56A]" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-bold">
                PUBGFrames Verification Standards
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {verifiedMetrics.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="flex flex-col gap-2">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${stat.accent}15`, border: `1px solid ${stat.accent}30` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: stat.accent }} />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-black text-white tracking-tight leading-none">
                        {stat.value}
                      </div>
                      <div className="text-xs text-zinc-200 font-bold mt-1">
                        {stat.label}
                      </div>
                      <div className="text-[10px] text-zinc-400 font-mono mt-0.5">
                        {stat.subtext}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-zinc-400 border-t border-white/[0.06]">
              <div className="flex items-center gap-1.5 text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-[#39F56A]" />
                <span>Zero Account Ban Risk Guaranteed</span>
              </div>
              <div className="flex items-center gap-1.5 text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-[#39F56A]" />
                <span>Independent Hardware Telemetry Lab</span>
              </div>
            </div>
          </div>

          {/* Right Side: 4K Level 3 Spetsnaz Helmet Artwork */}
          <div className="lg:col-span-4 relative h-64 sm:h-72 lg:h-full min-h-[220px] bg-gradient-to-l from-black/80 via-transparent to-transparent flex items-center justify-center p-4">
            <div className="relative w-full h-full max-w-[280px] rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl group">
              <Image
                src="/gameplay/helmet-crop.jpg"
                alt="PUBG Level 3 Golden Spetsnaz Helmet"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-3 left-3 right-3 text-center">
                <div className="inline-block px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#FFD400]/40 text-[10px] font-mono font-bold text-[#FFD400]">
                  Level 3 Esports Grade
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
