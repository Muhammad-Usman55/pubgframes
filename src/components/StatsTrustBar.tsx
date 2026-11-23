import React from 'react';
import { Smartphone, ShieldCheck, Gauge, Award } from 'lucide-react';

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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="rounded-2xl bg-[#0C1014] border border-white/[0.08] p-5 sm:p-6 shadow-xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-center">
          {verifiedMetrics.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex items-start gap-3.5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${stat.accent}12`, border: `1px solid ${stat.accent}25` }}
                >
                  <Icon className="w-5 h-5" style={{ color: stat.accent }} />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-black text-white tracking-tight leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-300 font-bold mt-1">
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
      </div>
    </section>
  );
};
