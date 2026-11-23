import React from 'react';
import Image from 'next/image';
import { Smartphone, ShieldCheck, Gauge, Award } from 'lucide-react';

export const StatsTrustBar = () => {
  const verifiedMetrics = [
    {
      label: 'Verified Devices',
      value: '18+ Phones',
      subtext: 'Flagships & Mid-Rangers',
      icon: Smartphone,
    },
    {
      label: 'Graphics Modes',
      value: '5 Presets',
      subtext: 'Smooth to Ultra HD',
      icon: Gauge,
    },
    {
      label: 'Zero Ban Risk',
      value: '100% Safe',
      subtext: 'No GFX Tools or APK Mods',
      icon: ShieldCheck,
    },
    {
      label: 'Frame-Time Telemetry',
      value: 'Sub-15ms',
      subtext: '99th Percentile Latency',
      icon: Award,
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Container with dark card and diagonal golden banner accent */}
      <div className="relative rounded-2xl bg-[#171D21] border border-white/10 overflow-hidden shadow-xl flex flex-col lg:flex-row items-stretch">
        
        {/* Left Side: 4 Verified metrics in 2x2 grid on mobile */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 sm:p-6 items-center">
          {verifiedMetrics.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FFD400]/10 border border-[#FFD400]/20 flex items-center justify-center text-[#FFD400] shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 fill-[#FFD400]/20" />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-black text-white tracking-tight leading-none">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-gray-300 font-bold mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-gray-500 font-mono mt-0.5">
                    {stat.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side: Diagonal cut banner "Play Better. Aim Higher." with golden helmet */}
        <div className="relative lg:w-72 bg-gradient-to-r from-[#FFD400] to-[#E6BE00] text-black px-6 py-5 flex items-center justify-between overflow-hidden">
          <div className="hidden lg:block absolute -left-5 top-0 bottom-0 w-10 bg-[#171D21] transform -skew-x-12 z-10" />

          <div className="relative z-20">
            <div className="text-xl sm:text-2xl font-black tracking-tight leading-tight uppercase font-sans">
              Play Better.<br />
              Aim Higher.
            </div>
            <div className="text-[10px] font-extrabold uppercase tracking-wider text-black/75 mt-0.5 font-mono">
              PUBGFrames Labs
            </div>
          </div>

          {/* Golden Level 3 PUBG Helmet silhouette */}
          <div className="relative z-20 w-12 h-12 sm:w-14 sm:h-14 shrink-0">
            <Image
              src="/gameplay/helmet-level3.svg"
              alt="PUBG Level 3 Helmet"
              width={56}
              height={56}
              className="object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] filter contrast-125"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
