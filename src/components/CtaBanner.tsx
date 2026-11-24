'use client';

import React from 'react';
import Link from 'next/link';
import { DEVICES_DATA } from '@/data/devices';
import { soundEffects } from '@/utils/soundEffects';

export const CtaBanner = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-8 sm:py-12 reveal-on-scroll">
      <div className="rounded-lg bg-[#1f2de6] text-white p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="space-y-3 max-w-[46ch]">
          <h2 className="text-[28px] sm:text-[36px] font-semibold tracking-[-0.025em] text-white leading-[1.1]">
            Ready to test your phone’s FPS?
          </h2>
          <p className="text-base text-white/95 leading-relaxed">
            Pick your device from {DEVICES_DATA.length.toLocaleString()} smartphones and tablets to check real FPS limits, heat risk, and gyroscope accuracy.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 shrink-0">
          <Link
            href="/fps-checker"
            onClick={() => soundEffects.playClick()}
            className="inline-flex items-center justify-center bg-[#ffffff] hover:bg-[#eef0f3] text-[#0b0c0e] font-semibold text-base px-6 py-3.5 rounded-md transition-colors duration-150 active:scale-[0.98]"
          >
            Launch FPS Checker
          </Link>
          <Link
            href="/devices"
            onClick={() => soundEffects.playClick()}
            className="text-white font-medium text-base px-3 py-3 underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors duration-150"
          >
            Browse devices
          </Link>
        </div>
      </div>
    </section>
  );
};
