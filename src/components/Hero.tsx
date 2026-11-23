'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Zap, Play, Check, Sparkles, Smartphone, ShieldCheck } from 'lucide-react';
import { DemoModal } from './DemoModal';
import { soundEffects } from '@/utils/soundEffects';

export const Hero = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
      {/* Background radial glows matching the mockups */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#FFD400]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#39F56A]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#171D21] border border-white/10 text-xs font-semibold text-gray-300">
              <span className="w-2 h-2 rounded-full bg-[#39F56A] shadow-[0_0_8px_#39F56A] animate-pulse" />
              <span>Real-Time FPS • Better Gaming</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
              Check Your <br />
              PUBG <span className="text-[#FFD400] drop-shadow-[0_0_25px_rgba(255,212,0,0.4)]">FPS</span> <br />
              Like Never Before!
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-400 max-w-xl font-normal leading-relaxed">
              PUBGFrames helps you check, compare and improve your PUBG Mobile performance on any device. Know your FPS. Play smoother!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#fps-calculator"
                onClick={() => soundEffects.playClick()}
                className="inline-flex items-center gap-2.5 bg-[#FFD400] hover:bg-[#FFE033] text-black font-black text-base px-7 py-3.5 rounded-full shadow-[0_0_25px_rgba(255,212,0,0.4)] hover:shadow-[0_0_35px_rgba(255,212,0,0.6)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Zap className="w-5 h-5 fill-black stroke-black" />
                <span>Check Your FPS Free</span>
                <span className="text-lg">→</span>
              </a>

              <button
                onClick={() => {
                  soundEffects.playClick();
                  setDemoOpen(true);
                }}
                className="inline-flex items-center gap-2.5 bg-[#171D21] hover:bg-[#1F262B] text-white font-bold text-sm px-6 py-3.5 rounded-full border border-white/10 hover:border-white/20 transition-all cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                  <Play className="w-3 h-3 fill-white ml-0.5" />
                </div>
                <span>Watch Demo</span>
              </button>
            </div>

            {/* 3 Green Checkmarks */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-semibold text-gray-300">
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

          {/* Right Column: Hero Visual Mockup */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient golden aura behind the character & phone */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD400]/20 via-transparent to-[#39F56A]/20 blur-3xl opacity-70" />

            <div className="relative w-full max-w-[460px] aspect-[4/5] flex items-center justify-center">
              
              {/* Soldier Character Illustration Backdrop */}
              <div className="absolute top-0 right-4 w-72 h-88 opacity-90 pointer-events-none z-0">
                <Image
                  src="/gameplay/pubg-soldier.svg"
                  alt="PUBG Mobile Character"
                  width={340}
                  height={420}
                  className="object-contain drop-shadow-[0_10px_30px_rgba(255,212,0,0.25)]"
                  priority
                />
              </div>

              {/* 3D-angled Gaming Smartphone Frame */}
              <div className="relative z-10 w-[340px] sm:w-[380px] rounded-[32px] p-2.5 bg-gradient-to-b from-[#2C343B] via-[#151A1E] to-[#0A0D0F] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(255,212,0,0.2)] border border-white/20 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                
                {/* Phone screen bezel */}
                <div className="relative rounded-[24px] overflow-hidden bg-black aspect-[16/9] border border-white/10">
                  <Image
                    src="/gameplay/phone-screen.svg"
                    alt="PUBG Mobile Live 90 FPS Screen"
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Pulsing Live FPS Pill in top-left */}
                  <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-black/85 backdrop-blur-md border border-[#39F56A]/50 flex items-center gap-2 shadow-[0_0_15px_rgba(57,245,106,0.4)]">
                    <div className="w-2 h-2 rounded-full bg-[#39F56A] animate-ping" />
                    <div className="text-[10px] font-mono font-black text-white">
                      FPS <span className="text-[#39F56A] text-sm">90</span>
                    </div>
                  </div>

                  {/* Anti-glare glass sheen */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 pointer-events-none" />
                </div>

                {/* Speaker slit & camera hole */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-black rounded-full" />
              </div>

              {/* Decorative floating badge */}
              <a
                href="#fps-calculator"
                onClick={() => soundEffects.playClick()}
                className="absolute -bottom-2 -left-4 z-20 px-4 py-2.5 rounded-xl bg-[#171D21]/95 backdrop-blur-md border border-[#FFD400]/30 shadow-2xl flex items-center gap-3 hover:scale-105 transition-transform"
              >
                <div className="w-8 h-8 rounded-lg bg-[#FFD400]/20 flex items-center justify-center text-[#FFD400]">
                  <Zap className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-gray-400">Optimal Mode</div>
                  <div className="text-xs font-black text-white">Smooth + 90 FPS</div>
                </div>
              </a>

            </div>
          </div>

        </div>
      </div>

      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
};
