'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Zap, Play, Check, ShieldCheck, Flame, Smartphone, Gauge, ArrowRight } from 'lucide-react';
import { DemoModal } from './DemoModal';
import { soundEffects } from '@/utils/soundEffects';

export const Hero = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  const quickBrands = [
    { name: 'Apple', slug: 'apple', fps: '120 FPS' },
    { name: 'Samsung', slug: 'samsung', fps: '120 FPS' },
    { name: 'POCO', slug: 'poco', fps: '90 FPS' },
    { name: 'Xiaomi', slug: 'xiaomi', fps: '120 FPS' },
    { name: 'Infinix', slug: 'infinix', fps: '90 FPS' },
    { name: 'Vivo', slug: 'vivo', fps: '120 FPS' },
    { name: 'Motorola', slug: 'motorola', fps: '90 FPS' },
    { name: 'Realme', slug: 'realme', fps: '120 FPS' }
  ];

  return (
    <section className="relative overflow-hidden pt-4 pb-10 sm:pt-8 sm:pb-14 lg:pt-12 lg:pb-16 border-b border-white/[0.05]">
      {/* Subtle architectural grid backdrop with no garish blur blobs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Authentic Hardware Lab Editorial */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            
            {/* Telemetry Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0E1318] border border-white/10 text-xs font-mono text-zinc-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#39F56A] shadow-[0_0_8px_#39F56A] animate-pulse" />
              <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">
                PUBG Mobile v3.5 Telemetry Active • <strong className="text-white">628+ Devices</strong>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
              Check Your <br />
              PUBG <span className="text-[#FFD400] drop-shadow-[0_0_25px_rgba(255,212,0,0.35)]">FPS</span> <br />
              Like Never Before!
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-zinc-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Find verified frame rates, thermal throttling indexes, gyroscope latency, and recommended esports graphics settings for your smartphone. 100% ban-safe lab telemetry.
            </p>

            {/* Quick Brand Jump Bar */}
            <div className="pt-1">
              <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-2">
                Quick Jump by Brand:
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2">
                {quickBrands.map((b) => (
                  <Link
                    key={b.slug}
                    href={`/devices/${b.slug}`}
                    onClick={() => soundEffects.playClick()}
                    className="group inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#11171E] hover:bg-[#1A222C] border border-white/[0.08] hover:border-[#FFD400]/40 transition-all text-xs text-zinc-300 hover:text-white"
                  >
                    <span className="font-semibold">{b.name}</span>
                    <span className="text-[10px] font-mono text-[#39F56A]">{b.fps}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#fps-calculator"
                onClick={() => soundEffects.playClick()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FFD400] hover:bg-[#FFE033] text-black font-black text-sm sm:text-base px-7 py-3.5 rounded-full shadow-[0_0_20px_rgba(255,212,0,0.35)] hover:shadow-[0_0_30px_rgba(255,212,0,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Zap className="w-4 h-4 fill-black stroke-black shrink-0" />
                <span>Calculate Your Phone FPS</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </a>

              <button
                onClick={() => {
                  soundEffects.playClick();
                  setDemoOpen(true);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#11171E] hover:bg-[#18212A] text-white font-bold text-sm px-6 py-3.5 rounded-full border border-white/10 hover:border-white/20 transition-all cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 fill-white ml-0.5" />
                </div>
                <span>Interactive Demo</span>
              </button>
            </div>

            {/* Hardware Verified Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 text-left">
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#0C1014] border border-white/[0.05]">
                <ShieldCheck className="w-4 h-4 text-[#39F56A] shrink-0" />
                <div className="text-[11px] leading-tight text-zinc-300">
                  <strong className="block text-white font-bold">100% Ban Safe</strong>
                  No GFX Tools or APKs
                </div>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#0C1014] border border-white/[0.05]">
                <Gauge className="w-4 h-4 text-[#FFD400] shrink-0" />
                <div className="text-[11px] leading-tight text-zinc-300">
                  <strong className="block text-white font-bold">Real Telemetry</strong>
                  Sub-15ms frametimes
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-2.5 p-2 rounded-xl bg-[#0C1014] border border-white/[0.05]">
                <Flame className="w-4 h-4 text-orange-400 shrink-0" />
                <div className="text-[11px] leading-tight text-zinc-300">
                  <strong className="block text-white font-bold">Thermals Tested</strong>
                  30-min classic match data
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Real Game Art & Live Telemetry Mockup */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-2 lg:pt-0">
            <div className="relative w-full max-w-[340px] sm:max-w-[390px] aspect-[4/3.9] sm:aspect-[4/4.2] flex items-center justify-center">
              
              {/* Crisp Framed Display with Micro Border */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/[0.12] shadow-[0_20px_50px_rgba(0,0,0,0.85)] group bg-[#0A0D11]">
                <Image
                  src="/gameplay/hero-art.jpg"
                  alt="PUBG Mobile Soldier and Phone FPS Mockup"
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-700"
                  priority
                />

                {/* Live FPS HUD Badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-black/90 backdrop-blur-md border border-[#39F56A]/60 flex items-center gap-2 shadow-[0_0_20px_rgba(57,245,106,0.5)]">
                  <div className="w-2 h-2 rounded-full bg-[#39F56A] animate-ping" />
                  <div className="text-[11px] font-mono font-black text-white">
                    FPS <span className="text-[#39F56A] text-sm font-black">90</span>
                  </div>
                </div>

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070A0D]/95 via-transparent to-transparent pointer-events-none" />

                {/* Bottom floating telemetry card */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#0D1217]/95 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#FFD400]/20 flex items-center justify-center text-[#FFD400]">
                      <Zap className="w-4 h-4 fill-current" />
                    </div>
                    <div>
                      <div className="text-[9px] uppercase font-mono font-bold text-zinc-400">Competitive Preset</div>
                      <div className="text-xs font-black text-white">Smooth + 90 FPS Extreme</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-[#39F56A]/10 text-[#39F56A] border border-[#39F56A]/20">
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
