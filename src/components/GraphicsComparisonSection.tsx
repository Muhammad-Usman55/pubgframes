'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Eye, Zap, Shield, ArrowUpRight, Check, SlidersHorizontal } from 'lucide-react';
import Link from 'next/link';
import { soundEffects } from '@/utils/soundEffects';

export const GraphicsComparisonSection = () => {
  const [selectedMode, setSelectedMode] = useState<'Smooth' | 'Balanced' | 'HD' | 'Ultra HD'>('Smooth');

  const modes = [
    {
      id: 'Smooth' as const,
      name: 'Smooth',
      badgeColor: '#39F56A',
      badgeBg: 'rgba(57, 245, 106, 0.15)',
      fpsTag: '60 FPS',
      fpsBadgeBg: 'bg-[#101518]/90 text-white border border-[#39F56A]/50',
      image: '/gameplay/smooth-real.jpg',
      tagline: 'Lowest Latency & Maximum Frame Rate',
      resolution: 'Native Display Res',
      description: 'Disables grass shadows and complex post-processing. Highly favored by 99% of competitive tournament players for maximum clarity and sub-10ms touch response.'
    },
    {
      id: 'Balanced' as const,
      name: 'Balanced',
      badgeColor: '#28A9FF',
      badgeBg: 'rgba(40, 169, 255, 0.15)',
      fpsTag: '75 FPS',
      fpsBadgeBg: 'bg-[#101518]/90 text-white border border-[#28A9FF]/50',
      image: '/gameplay/balanced-real.jpg',
      tagline: 'Refined Visuals with Stable Frame Rates',
      resolution: 'Balanced 1080p',
      description: 'Adds ambient environmental shadows and subtle anti-aliasing without heavily dragging down the GPU. Ideal for mid-range and casual classic games.'
    },
    {
      id: 'HD' as const,
      name: 'HD',
      badgeColor: '#A855F7',
      badgeBg: 'rgba(168, 85, 247, 0.15)',
      fpsTag: '90 FPS',
      fpsBadgeBg: 'bg-[#101518]/90 text-white border border-[#A855F7]/50',
      image: '/gameplay/hd-real.jpg',
      tagline: 'High Resolution Textures & HDR Depth',
      resolution: 'High Res 1.5K',
      description: 'Crisp textures, realistic sunlight reflections, and vivid colors. Requires flagships with large vapor chambers to avoid thermal throttling after 20 minutes.'
    },
    {
      id: 'Ultra HD' as const,
      name: 'Ultra HD',
      badgeColor: '#FF9A24',
      badgeBg: 'rgba(255, 154, 36, 0.15)',
      fpsTag: '45 FPS',
      fpsBadgeBg: 'bg-[#101518]/90 text-white border border-[#FF9A24]/50',
      image: '/gameplay/ultrahd-real.jpg',
      tagline: '4K Textures & Extreme Cinematic Fidelity',
      resolution: '4K Ultra HD Pack',
      description: 'Extreme dynamic lighting and 4K resource pack. Demands maximum thermal and battery bandwidth, usually locked to 40 or 60 FPS by the PUBG client.'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* Section Header */}
      <div className="text-center space-y-2 mb-8 sm:mb-10">
        <div className="flex items-center justify-center gap-2">
          <div className="w-10 sm:w-14 h-px bg-yellow-500/40" />
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            FPS in Different Settings
          </h2>
          <div className="w-10 sm:w-14 h-px bg-yellow-500/40" />
        </div>
        <p className="text-xs sm:text-sm text-gray-400">
          See how different graphics modes affect your FPS • Swipe on mobile to compare
        </p>
      </div>

      {/* Mobile Swipeable Snap Carousel / Desktop 4 Columns Grid */}
      <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
        {modes.map((mode) => {
          const isSelected = selectedMode === mode.id;

          return (
            <div
              key={mode.id}
              onClick={() => {
                soundEffects.playClick();
                setSelectedMode(mode.id);
              }}
              className={`shrink-0 w-[270px] sm:w-auto snap-center rounded-2xl bg-[#13181D] border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col cursor-pointer ${
                isSelected
                  ? 'border-[#FFD400] shadow-[0_0_20px_rgba(255,212,0,0.25)]'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {/* Gameplay preview image box with real gameplay screenshot */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <Image
                  src={mode.image}
                  alt={`PUBG Mobile ${mode.name} graphics preview`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Top left Mode Pill matching the mockup */}
                <div
                  className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md text-[11px] font-bold flex items-center gap-1.5 backdrop-blur-md shadow-md"
                  style={{ backgroundColor: mode.badgeBg, color: mode.badgeColor, border: `1px solid ${mode.badgeColor}40` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: mode.badgeColor }} />
                  <span>{mode.name}</span>
                </div>

                {/* Top right FPS Pill matching the mockup */}
                <div className={`absolute top-2.5 right-2.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-black backdrop-blur-md shadow-md ${mode.fpsBadgeBg}`}>
                  {mode.fpsTag}
                </div>

                {/* Active indicator */}
                {isSelected && (
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-[#FFD400] text-black text-[10px] font-black uppercase tracking-wider shadow">
                    Active
                  </div>
                )}

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#13181D] via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Card content */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#FFD400] transition-colors leading-snug">
                    {mode.tagline}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                    {mode.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-gray-400">Competitive Pick:</span>
                  <span className={mode.name === 'Smooth' ? 'text-[#39F56A] font-bold' : 'text-gray-400'}>
                    {mode.name === 'Smooth' ? '★ Recommended' : 'Casual Play'}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center flex flex-col sm:flex-row items-center justify-center gap-3">
        <a
          href="#fps-calculator"
          onClick={() => soundEffects.playClick()}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#13181D] border border-[#39F56A]/40 text-[#39F56A] text-xs font-bold hover:bg-[#39F56A]/10 transition-colors w-full sm:w-auto justify-center"
        >
          <Zap className="w-3.5 h-3.5" />
          <span>Test {selectedMode} Mode on Your Mobile Above</span>
        </a>

        <Link
          href="/guides/understanding-smooth-vs-hd-graphics"
          onClick={() => soundEffects.playClick()}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFD400] hover:underline"
        >
          <span>Why Pros Never Play on HD Graphics</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
};
