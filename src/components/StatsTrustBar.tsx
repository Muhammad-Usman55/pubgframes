import React from 'react';
import Image from 'next/image';
import { Users, Star, Zap, Globe2 } from 'lucide-react';

export const StatsTrustBar = () => {
  const stats = [
    {
      label: 'Happy Gamers',
      value: '1M+',
      icon: Users,
    },
    {
      label: 'User Rating',
      value: '4.8/5',
      icon: Star,
    },
    {
      label: 'Ultra Fast',
      value: '10ms',
      icon: Zap,
    },
    {
      label: 'Global Support',
      value: '120+ Countries',
      icon: Globe2,
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Container with dark card and diagonal golden banner accent */}
      <div className="relative rounded-3xl bg-[#13181D] border border-white/5 overflow-hidden shadow-2xl flex flex-col lg:flex-row items-stretch">
        
        {/* Left Side: 4 Stats metrics in 2x2 grid on mobile */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 p-5 sm:p-8 items-center">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FFD400]/10 border border-[#FFD400]/20 flex items-center justify-center text-[#FFD400] shrink-0">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FFD400]/20" />
                </div>
                <div>
                  <div className="text-lg sm:text-2xl font-black text-white tracking-tight leading-none">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-400 font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side: Diagonal cut banner "Play Better. Aim Higher." with golden helmet */}
        <div className="relative lg:w-80 bg-gradient-to-r from-[#FFD400] to-[#E6BE00] text-black px-6 py-5 sm:py-6 flex items-center justify-between overflow-hidden">
          {/* Diagonal clip path on desktop */}
          <div className="hidden lg:block absolute -left-6 top-0 bottom-0 w-12 bg-[#13181D] transform -skew-x-12 z-10" />

          <div className="relative z-20">
            <div className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight leading-tight uppercase font-sans">
              Play Better.<br />
              Aim Higher.
            </div>
            <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-black/75 mt-0.5">
              Powered by PUBGFrames
            </div>
          </div>

          {/* Golden Level 3 PUBG Helmet silhouette */}
          <div className="relative z-20 w-14 h-14 sm:w-18 sm:h-18 shrink-0">
            <Image
              src="/gameplay/helmet-level3.svg"
              alt="PUBG Level 3 Helmet"
              width={72}
              height={72}
              className="object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)] filter contrast-125"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
