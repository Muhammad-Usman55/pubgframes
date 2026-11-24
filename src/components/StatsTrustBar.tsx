import React from 'react';
import Image from 'next/image';
import { DEVICES_DATA } from '@/data/devices';

export const StatsTrustBar = () => {
  const verifiedMetrics = [
    {
      figure: DEVICES_DATA.length.toLocaleString(),
      label: 'Phones & tablets verified',
      detail: 'From flagship gaming beasts to budget daily phones'
    },
    {
      figure: '5',
      label: 'In-game graphics presets',
      detail: 'Smooth, Balanced, HD, HDR & Ultra HD mapped per chipset'
    },
    {
      figure: '0%',
      label: 'Account ban risk',
      detail: 'Reference telemetry only. No config edits or third-party tools'
    },
    {
      figure: '<15 ms',
      label: 'Target frame pacing',
      detail: 'Benchmarked across 30-minute Erangel & scrim loads'
    }
  ];

  return (
    <section className="w-full bg-[#111317] text-[#eef0f3] py-10 sm:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Ledger Figures */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            <h2 className="reveal-on-scroll text-[28px] sm:text-[36px] font-semibold tracking-[-0.025em] text-white leading-tight max-w-[24ch]">
              Measured across {DEVICES_DATA.length.toLocaleString()} smartphones and tablets.
            </h2>

            <div className="grid grid-cols-2 gap-x-5 sm:gap-x-8 gap-y-6">
              {verifiedMetrics.map((stat, idx) => (
                <div
                  key={idx}
                  className="reveal-on-scroll space-y-1"
                  style={{ transitionDelay: `${idx * 70}ms` }}
                >
                  <div className="text-[28px] sm:text-[36px] font-semibold text-white tabular-nums leading-none">
                    {stat.figure}
                  </div>
                  <div className="text-sm sm:text-base font-medium text-white pt-1">
                    {stat.label}
                  </div>
                  <p className="text-sm sm:text-base text-[#c5cbd4]">
                    {stat.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Clean Level 3 Spetsnaz Artwork */}
          <div className="lg:col-span-4 reveal-on-scroll">
            <figure className="relative w-full aspect-[4/3] lg:aspect-square rounded-lg overflow-hidden bg-[#1a1d24]">
              <Image
                src="/gameplay/helmet-crop.jpg"
                alt="PUBG Mobile Level 3 Spetsnaz Helmet"
                fill
                className="object-cover"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
