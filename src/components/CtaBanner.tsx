'use client';

import React from 'react';
import Link from 'next/link';
import { Trophy, ArrowRight, Sparkles } from 'lucide-react';
import { soundEffects } from '@/utils/soundEffects';

export const CtaBanner = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div className="relative rounded-3xl bg-gradient-to-r from-[#13181D] via-[#1A2228] to-[#13181D] border border-[#FFD400]/30 shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_35px_rgba(255,212,0,0.15)] p-6 sm:p-8 lg:p-10 overflow-hidden">
        
        {/* Glow corner */}
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#FFD400]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4 sm:gap-6 flex-col md:flex-row">
            {/* Golden Trophy Icon */}
            <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-2xl bg-[#FFD400]/15 border border-[#FFD400]/40 flex items-center justify-center text-[#FFD400] shrink-0 shadow-[0_0_20px_rgba(255,212,0,0.25)]">
              <Trophy className="w-7 h-7 sm:w-8 sm:h-8 fill-[#FFD400]/30" />
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                Ready to Check Your PUBG FPS?
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-xl">
                Join millions of gamers and take your performance to the next level. Accurate estimates, no downloads required.
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <Link
              href="/fps-checker"
              onClick={() => soundEffects.playClick()}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#FFD400] hover:bg-[#FFE033] text-black font-extrabold text-sm sm:text-base px-8 py-4 rounded-full shadow-[0_0_25px_rgba(255,212,0,0.35)] hover:shadow-[0_0_35px_rgba(255,212,0,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Start Now Free</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
