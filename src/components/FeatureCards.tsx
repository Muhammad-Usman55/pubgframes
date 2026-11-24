'use client';

import React from 'react';
import Link from 'next/link';
import { DEVICES_DATA } from '@/data/devices';
import { soundEffects } from '@/utils/soundEffects';

export const FeatureCards = () => {
  const pillars = [
    {
      title: 'Frame caps across presets',
      detail: 'Smooth, Balanced, HD, HDR & Ultra HD presets audited per processor whitelist.',
      href: '/fps-checker',
      linkLabel: 'Open FPS calculator'
    },
    {
      title: '30-minute heat telemetry',
      detail: 'Real cooling behavior and hourly cellular battery draw during hot-drops.',
      href: '/devices',
      linkLabel: 'Explore thermal ratings'
    },
    {
      title: 'Gyroscope sensor check',
      detail: 'Spot fast hardware MEMS gyroscopes vs delayed software emulation.',
      href: '/devices',
      linkLabel: 'Check your sensor'
    },
    {
      title: 'Side-by-side comparison',
      detail: `Put any two of our ${DEVICES_DATA.length.toLocaleString()} phones head-to-head on FPS and specs.`,
      href: '/compare',
      linkLabel: 'Compare phones'
    }
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4 space-y-2.5 reveal-on-scroll">
          <h2 className="text-[28px] sm:text-[36px] font-semibold tracking-[-0.025em] text-[#0b0c0e] leading-tight">
            What every benchmark covers
          </h2>
          <p className="text-base text-[#0b0c0e] leading-relaxed">
            Simple, honest numbers measured against what actually affects your final-zone fights.
          </p>
        </div>

        <div className="lg:col-span-8 space-y-8">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="reveal-on-scroll flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              style={{ transitionDelay: `${idx * 70}ms` }}
            >
              <div className="space-y-1 max-w-[50ch]">
                <h3 className="text-xl font-semibold text-[#0b0c0e] tracking-tight">
                  {item.title}
                </h3>
                <p className="text-base text-[#3d4350] leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <Link
                href={item.href}
                onClick={() => soundEffects.playClick()}
                className="text-base font-medium text-[#1f2de6] hover:underline shrink-0"
              >
                {item.linkLabel}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
