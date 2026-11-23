'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Eye, Zap, Shield, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export const GraphicsComparisonSection = () => {
  const [activeTab, setActiveTab] = useState<'Smooth' | 'Balanced' | 'HD' | 'Ultra HD'>('Smooth');

  const modes = [
    {
      id: 'Smooth',
      name: 'Smooth',
      badgeColor: '#39F56A',
      badgeBg: 'rgba(57, 245, 106, 0.15)',
      fpsTag: '60 - 120 FPS',
      fpsBadgeBg: 'bg-[#101518]/90 text-white border border-[#39F56A]/50',
      image: '/gameplay/smooth.svg',
      tagline: 'Lowest Latency & Maximum Frame Rate',
      description: 'Disables grass shadows and complex post-processing. Highly favored by 99% of competitive tournament players for maximum clarity and sub-10ms touch response.'
    },
    {
      id: 'Balanced',
      name: 'Balanced',
      badgeColor: '#28A9FF',
      badgeBg: 'rgba(40, 169, 255, 0.15)',
      fpsTag: '60 - 90 FPS',
      fpsBadgeBg: 'bg-[#101518]/90 text-white border border-[#28A9FF]/50',
      image: '/gameplay/balanced.svg',
      tagline: 'Refined Visuals with Stable Frame Rates',
      description: 'Adds ambient environmental shadows and subtle anti-aliasing without heavily dragging down the GPU. Ideal for mid-range and casual classic games.'
    },
    {
      id: 'HD',
      name: 'HD',
      badgeColor: '#A855F7',
      badgeBg: 'rgba(168, 85, 247, 0.15)',
      fpsTag: '60 - 90 FPS',
      fpsBadgeBg: 'bg-[#101518]/90 text-white border border-[#A855F7]/50',
      image: '/gameplay/hd.svg',
      tagline: 'High Resolution Textures & HDR Depth',
      description: 'Crisp textures, realistic sunlight reflections, and vivid colors. Requires flagships with large vapor chambers to avoid thermal throttling after 20 minutes.'
    },
    {
      id: 'Ultra HD',
      name: 'Ultra HD',
      badgeColor: '#FF9A24',
      badgeBg: 'rgba(255, 154, 36, 0.15)',
      fpsTag: '40 - 60 FPS',
      fpsBadgeBg: 'bg-[#101518]/90 text-white border border-[#FF9A24]/50',
      image: '/gameplay/ultrahd.svg',
      tagline: '4K Textures & Extreme Cinematic Fidelity',
      description: 'Extreme dynamic lighting and 4K resource pack. Demands maximum thermal and battery bandwidth, usually locked to 40 or 60 FPS by the PUBG client.'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Section Header */}
      <div className="text-center space-y-2 mb-10">
        <div className="flex items-center justify-center gap-2">
          <div className="w-12 h-px bg-yellow-500/40" />
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            FPS in Different Settings
          </h2>
          <div className="w-12 h-px bg-yellow-500/40" />
        </div>
        <p className="text-xs sm:text-sm text-gray-400">
          See how different graphics modes affect your FPS
        </p>
      </div>

      {/* 4 Cards Grid matching the mockup */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {modes.map((mode) => {
          return (
            <div
              key={mode.id}
              className="group rounded-2xl bg-[#171D21] border border-white/5 hover:border-white/20 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col"
            >
              {/* Gameplay preview image box */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <Image
                  src={mode.image}
                  alt={`PUBG Mobile ${mode.name} graphics preview`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Top left Mode Pill */}
                <div
                  className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold flex items-center gap-1.5 backdrop-blur-md shadow-md"
                  style={{ backgroundColor: mode.badgeBg, color: mode.badgeColor, border: `1px solid ${mode.badgeColor}40` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: mode.badgeColor }} />
                  <span>{mode.name}</span>
                </div>

                {/* Top right FPS Pill */}
                <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-md text-[11px] font-mono font-black backdrop-blur-md shadow-md ${mode.fpsBadgeBg}`}>
                  {mode.fpsTag}
                </div>

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#171D21] via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Card content */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#FFD400] transition-colors">
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

      <div className="mt-8 text-center">
        <Link
          href="/guides/understanding-smooth-vs-hd-graphics"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFD400] hover:underline"
        >
          <span>Read our deep-dive analysis: Why Pros Never Play on HD Graphics</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
};
