'use client';

import React from 'react';
import Link from 'next/link';
import { Trophy, ArrowRight, Zap, Shield } from 'lucide-react';
import { soundEffects } from '@/utils/soundEffects';

export const CtaBanner = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="relative rounded-2xl bg-[#0C1014] border border-white/[0.1] p-6 sm:p-8 lg:p-10 overflow-hidden shadow-2xl">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4 sm:gap-6 flex-col md:flex-row">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#FFD400]/10 border border-[#FFD400]/30 flex items-center justify-center text-[#FFD400] shrink-0">
              <Zap className="w-6 h-6 fill-[#FFD400]/20" />
            </div>

            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#39F56A] font-bold">
                Instant Online Tool • No Installation
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight mt-0.5">
                Ready to Check Your PUBG FPS?
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl">
                Explore real frame rates and thermal analysis for 628+ devices. Optimized for tournament players and casual gamers alike.
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <Link
              href="/fps-checker"
              onClick={() => soundEffects.playClick()}
              className="inline-flex items-center justify-center gap-2 bg-[#FFD400] hover:bg-[#FFE033] text-black font-extrabold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md"
            >
              <span>Launch FPS Calculator</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </Link>
            <Link
              href="/devices"
              onClick={() => soundEffects.playClick()}
              className="inline-flex items-center justify-center gap-2 bg-[#141A22] hover:bg-[#1A222C] text-zinc-200 font-semibold text-sm px-5 py-3.5 rounded-xl border border-white/[0.08] transition-all"
            >
              <span>Browse All Devices</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
