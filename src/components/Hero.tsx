'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { DEVICES_DATA } from '@/data/devices';
import { soundEffects } from '@/utils/soundEffects';

export const Hero = () => {
  const quickBrands = [
    { name: 'Samsung', slug: 'samsung' },
    { name: 'Apple', slug: 'apple' },
    { name: 'Xiaomi', slug: 'xiaomi' },
    { name: 'Redmi', slug: 'redmi' },
    { name: 'POCO', slug: 'poco' },
    { name: 'vivo', slug: 'vivo' },
    { name: 'iQOO', slug: 'iqoo' },
    { name: 'OnePlus', slug: 'oneplus' },
    { name: 'OPPO', slug: 'oppo' },
    { name: 'ASUS', slug: 'asus' }
  ];

  const totalCount = DEVICES_DATA.length.toLocaleString();

  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 pt-4 pb-8 sm:pt-12 sm:pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
        {/* Left Column */}
        <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-left">
          <h1
            className="text-[34px] sm:text-[52px] lg:text-[64px] font-medium tracking-[-0.03em] text-[#0b0c0e] leading-[1.06] sm:leading-[1.04] max-w-[16ch] animate-hero-line"
          >
            Check Your Phone’s<br />
            PUBG Frame Rate
          </h1>

          <p
            className="text-base sm:text-xl text-[#0b0c0e] leading-[1.45] max-w-[44ch] animate-hero-line"
            style={{ animationDelay: '90ms' }}
          >
            Look up tested FPS limits, graphics presets, gyroscope support, and heat behavior for {totalCount} smartphones and tablets before you play.
          </p>

          <div
            className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 animate-hero-line"
            style={{ animationDelay: '160ms' }}
          >
            <a
              href="#fps-calculator"
              onClick={() => soundEffects.playClick()}
              className="inline-flex items-center justify-center bg-[#1f2de6] hover:bg-[#1723bf] text-white font-medium text-base px-5 py-3 sm:px-6 sm:py-3.5 rounded-md transition-colors duration-150 active:scale-[0.98]"
            >
              Check your phone
            </a>
            <Link
              href="/devices"
              onClick={() => soundEffects.playClick()}
              className="inline-flex items-center justify-center text-[#0b0c0e] font-medium text-base px-2 sm:px-3 py-3 underline underline-offset-4 decoration-[#0b0c0e]/30 hover:decoration-[#1f2de6] transition-colors duration-150"
            >
              Browse all {totalCount} devices
            </Link>
          </div>

          <div
            className="pt-2 sm:pt-4 space-y-2 animate-hero-line"
            style={{ animationDelay: '220ms' }}
          >
            <p className="text-sm font-medium text-[#3d4350]">
              Jump straight to a brand
            </p>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {quickBrands.map((b) => (
                <Link
                  key={b.slug}
                  href={`/devices/${b.slug}`}
                  onClick={() => soundEffects.playClick()}
                  className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md bg-[#e2e5ea] hover:bg-[#d4d8df] text-sm sm:text-base font-medium text-[#0b0c0e] transition-colors duration-150"
                >
                  {b.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-6 space-y-3">
          <figure className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-[#111317]">
            <Image
              src="/gameplay/hero-art.jpg"
              alt="PUBG Mobile competitive gameplay tested on smartphone hardware"
              fill
              className="object-cover animate-hero-drift"
              priority
            />
          </figure>
          <p className="text-base text-[#3d4350] max-w-none">
            Tested across Smooth, Balanced, HD, HDR, and Ultra HD presets. No GFX tools or account logins needed.
          </p>
        </div>
      </div>
    </section>
  );
};
