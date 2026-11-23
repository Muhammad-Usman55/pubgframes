'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Zap, Play, Check, Sparkles, Smartphone, ShieldCheck, Flame } from 'lucide-react';
import { DemoModal } from './DemoModal';
import { soundEffects } from '@/utils/soundEffects';

export const Hero = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-16 lg:pb-20">
      {/* Background radial glows matching the mockups */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 sm:w-96 sm:h-96 bg-[#FFD400]/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-[#39F56A]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#13181D] border border-white/10 text-xs font-semibold text-gray-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#39F56A] shadow-[0_0_8px_#39F56A] animate-pulse" />
              <span>Real-Time FPS • Better Gaming</span>
            </div>

            {/* Main Headline (Mobile & Desktop Responsive) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
              Check Your <br />
              PUBG <span className="text-[#FFD400] drop-shadow-[0_0_25px_rgba(255,212,0,0.35)]">FPS</span> <br />
              Like Never Before!
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              PUBGFrames helps you check, compare and improve your PUBG Mobile performance on any device. Know your FPS. Play smoother!
            </p>

            {/* CTA Buttons (Mobile Full Width, Desktop Row) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#fps-calculator"
                onClick={() => soundEffects.playClick()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FFD400] hover:bg-[#FFE033] text-black font-black text-sm sm:text-base px-7 py-4 rounded-full shadow-[0_0_25px_rgba(255,212,0,0.4)] hover:shadow-[0_0_35px_rgba(255,212,0,0.6)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Zap className="w-5 h-5 fill-black stroke-black shrink-0" />
                <span>Check Your FPS Free</span>
                <span className="text-lg">→</span>
              </a>

              <button
                onClick={() => {
                  soundEffects.playClick();
                  setDemoOpen(true);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#13181D] hover:bg-[#1A2127] text-white font-bold text-sm px-6 py-4 rounded-full border border-white/10 hover:border-white/20 transition-all cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 fill-white ml-0.5" />
                </div>
                <span>Watch Demo</span>
              </button>
            </div>

            {/* 3 Green Checkmarks */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-3 text-xs font-semibold text-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#39F56A]/20 flex items-center justify-center text-[#39F56A]">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Fast & Accurate</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#39F56A]/20 flex items-center justify-center text-[#39F56A]">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Mobile Friendly</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#39F56A]/20 flex items-center justify-center text-[#39F56A]">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>100% Free</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Real Game Art & Live Phone Mockup */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-4 lg:pt-0">
            {/* Ambient golden aura behind the character & phone */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD400]/25 via-transparent to-[#39F56A]/20 blur-3xl opacity-75" />

            <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-[4/3.8] sm:aspect-[4/4.2] flex items-center justify-center">
              
              {/* Real PUBG Soldier Artwork from design mockup */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_40px_rgba(255,212,0,0.25)] group">
                <Image
                  src="/gameplay/hero-art.jpg"
                  alt="PUBG Mobile Soldier and Phone FPS Mockup"
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-700"
                  priority
                />

                {/* Live FPS HUD Badge on the phone in the artwork */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-black/90 backdrop-blur-md border border-[#39F56A]/60 flex items-center gap-2 shadow-[0_0_20px_rgba(57,245,106,0.5)]">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#39F56A] animate-ping" />
                  <div className="text-[11px] font-mono font-black text-white">
                    FPS <span className="text-[#39F56A] text-base">90</span>
                  </div>
                </div>

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070A0D]/90 via-transparent to-transparent pointer-events-none" />

                {/* Bottom floating badge */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-[#0E1216]/95 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#FFD400]/20 flex items-center justify-center text-[#FFD400]">
                      <Zap className="w-4 h-4 fill-current" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold text-gray-400">Competitive Preset</div>
                      <div className="text-xs font-black text-white">Smooth + 90 FPS Extreme</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#39F56A]/10 text-[#39F56A] border border-[#39F56A]/20">
                    VERIFIED
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
};
