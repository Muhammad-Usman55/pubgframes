'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Eye, Zap, SlidersHorizontal, ArrowUpRight, Check, Award, Layers } from 'lucide-react';
import Link from 'next/link';
import { soundEffects } from '@/utils/soundEffects';

export const GraphicsComparisonSection = () => {
  const [selectedMode, setSelectedMode] = useState<'Smooth' | 'Balanced' | 'HD' | 'Ultra HD'>('Smooth');
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0-100 for split view
  const isDragging = useRef(false);

  const modes = [
    {
      id: 'Smooth' as const,
      name: 'Smooth',
      badgeColor: '#39F56A',
      badgeBg: 'rgba(57, 245, 106, 0.15)',
      fpsTag: '120 FPS',
      fpsBadgeBg: 'bg-[#101518]/90 text-[#39F56A] border border-[#39F56A]/50',
      image: '/gameplay/smooth-real.jpg',
      tagline: 'Esports Tournament Standard • Sub-10ms Latency',
      resolution: 'Native Display Res',
      frametime: '8.3ms Frametime',
      battery: '-14% Battery / Hr',
      description: 'Disables grass shadows, motion blur, and ambient post-processing. Favored by 99% of competitive esports players for maximum target visibility and peak 120 FPS fluidity.'
    },
    {
      id: 'Balanced' as const,
      name: 'Balanced',
      badgeColor: '#38BDF8',
      badgeBg: 'rgba(56, 189, 248, 0.15)',
      fpsTag: '90 FPS',
      fpsBadgeBg: 'bg-[#101518]/90 text-[#38BDF8] border border-[#38BDF8]/50',
      image: '/gameplay/balanced-real.jpg',
      tagline: 'Refined Visuals with Stable Frame Delivery',
      resolution: 'Balanced 1080p',
      frametime: '11.1ms Frametime',
      battery: '-18% Battery / Hr',
      description: 'Introduces realistic soft ambient shadows and vehicle specular highlights without overburdening the mobile GPU. Ideal for prolonged classic ranked matches.'
    },
    {
      id: 'HD' as const,
      name: 'HD / HDR',
      badgeColor: '#A855F7',
      badgeBg: 'rgba(168, 85, 247, 0.15)',
      fpsTag: '60 FPS',
      fpsBadgeBg: 'bg-[#101518]/90 text-[#A855F7] border border-[#A855F7]/50',
      image: '/gameplay/hd-real.jpg',
      tagline: 'Vibrant HDR Color Grading & Water Reflections',
      resolution: 'High Res 1.5K',
      frametime: '16.6ms Frametime',
      battery: '-22% Battery / Hr',
      description: 'Rich dynamic range with real-time sunlight flare, weapon skin reflections, and realistic water ripples. Demands capable flagship chipsets to avoid thermal throttling.'
    },
    {
      id: 'Ultra HD' as const,
      name: 'Ultra HD 4K',
      badgeColor: '#FFD400',
      badgeBg: 'rgba(255, 212, 0, 0.15)',
      fpsTag: '45-60 FPS',
      fpsBadgeBg: 'bg-[#101518]/90 text-[#FFD400] border border-[#FFD400]/50',
      image: '/gameplay/ultrahd-real.jpg',
      tagline: 'Extreme 4K Resource Pack & Cinematic Atmosphere',
      resolution: '4K Ultra HD Pack',
      frametime: '22.2ms Frametime',
      battery: '-28% Battery / Hr',
      description: 'Hyper-detailed terrain textures, volumetric smoke grenade plumes, and ray-traced shadows. Delivers maximum visual spectacle at the cost of higher battery draw.'
    }
  ];

  const handleSliderMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Section Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-400">
          <Layers className="w-3.5 h-3.5 text-[#39F56A]" />
          <span>Interactive Telemetry & Graphics Analysis</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          PUBG Graphics Presets & FPS Comparison
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400">
          Compare visual fidelity vs. competitive frame latency. Drag the interactive split-slider to inspect tournament Smooth mode against cinematic Ultra HD 4K.
        </p>
      </div>

      {/* 1. Interactive Split-Screen Visual Comparison Slider */}
      <div className="relative rounded-3xl bg-[#0B0F14] border border-white/[0.1] p-4 sm:p-6 shadow-2xl overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#39F56A] bg-[#39F56A]/10 px-3 py-1 rounded-full border border-[#39F56A]/30">
              Interactive Live Split
            </span>
            <span className="text-xs text-zinc-400 hidden sm:inline">
              Drag horizontal handle to inspect clarity
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-1.5 text-[#39F56A]">
              <span className="w-2 h-2 rounded-full bg-[#39F56A]" />
              <span>Left: Smooth 120 FPS</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#FFD400]">
              <span className="w-2 h-2 rounded-full bg-[#FFD400]" />
              <span>Right: Ultra HD 4K</span>
            </div>
          </div>
        </div>

        {/* The Split View Canvas */}
        <div
          className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden mt-4 cursor-ew-resize select-none bg-black border border-white/10 shadow-inner"
          onMouseDown={(e) => {
            isDragging.current = true;
            handleSliderMove(e.clientX, e.currentTarget.getBoundingClientRect());
          }}
          onMouseMove={(e) => {
            if (isDragging.current) {
              handleSliderMove(e.clientX, e.currentTarget.getBoundingClientRect());
            }
          }}
          onMouseUp={() => { isDragging.current = false; }}
          onMouseLeave={() => { isDragging.current = false; }}
          onTouchMove={(e) => {
            if (e.touches[0]) {
              handleSliderMove(e.touches[0].clientX, e.currentTarget.getBoundingClientRect());
            }
          }}
        >
          {/* Base: Ultra HD 4K Image (Right Side) */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/gameplay/ultrahd-real.jpg"
              alt="Ultra HD 4K PUBG Mobile gameplay"
              fill
              className="object-cover"
              priority
            />
            {/* Top Right Label */}
            <div className="absolute top-4 right-4 px-3 py-1.5 rounded-xl bg-black/85 backdrop-blur-md border border-[#FFD400]/40 text-right shadow-lg">
              <div className="text-[10px] font-mono font-bold text-[#FFD400] uppercase">Cinematic Mode</div>
              <div className="text-xs font-black text-white">Ultra HD • 45-60 FPS</div>
            </div>
          </div>

          {/* Top Layer: Smooth 120 FPS Image clipped to slider position (Left Side) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="relative w-full h-full min-w-[300px]" style={{ width: '100cqw' }}>
              <Image
                src="/gameplay/smooth-real.jpg"
                alt="Smooth 120 FPS PUBG Mobile gameplay"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Top Left Label */}
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-black/85 backdrop-blur-md border border-[#39F56A]/40 text-left shadow-lg">
              <div className="text-[10px] font-mono font-bold text-[#39F56A] uppercase">Esports Preset</div>
              <div className="text-xs font-black text-white">Smooth • 120 FPS</div>
            </div>
          </div>

          {/* Split Vertical Line Divider */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Draggable Circular Knob */}
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-black/90 border-2 border-white shadow-[0_0_20px_rgba(0,0,0,0.8)] flex items-center justify-center pointer-events-auto cursor-ew-resize">
              <SlidersHorizontal className="w-3.5 h-3.5 text-white" />
            </div>
          </div>

          {/* Bottom Hint */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300 pointer-events-none">
            Slide to compare textures &amp; foliage
          </div>
        </div>
      </div>

      {/* 2. 4 Graphics Preset Cards with High-Res Showcase */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {modes.map((mode) => {
          const isSelected = selectedMode === mode.id;

          return (
            <div
              key={mode.id}
              onClick={() => {
                soundEffects.playClick();
                setSelectedMode(mode.id);
              }}
              className={`rounded-2xl bg-[#0B0F14] border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col cursor-pointer ${
                isSelected
                  ? 'border-[#FFD400] shadow-[0_0_25px_rgba(255,212,0,0.2)]'
                  : 'border-white/[0.08] hover:border-white/20'
              }`}
            >
              {/* High-Res Image Box */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black group">
                <Image
                  src={mode.image}
                  alt={`PUBG Mobile ${mode.name} graphics preview`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Top Left Mode Badge */}
                <div
                  className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md text-[11px] font-bold flex items-center gap-1.5 backdrop-blur-md shadow-md"
                  style={{ backgroundColor: mode.badgeBg, color: mode.badgeColor, border: `1px solid ${mode.badgeColor}40` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: mode.badgeColor }} />
                  <span>{mode.name}</span>
                </div>

                {/* Top Right FPS Badge */}
                <div className={`absolute top-2.5 right-2.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-black backdrop-blur-md shadow-md ${mode.fpsBadgeBg}`}>
                  {mode.fpsTag}
                </div>

                {/* Active Indicator */}
                {isSelected && (
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-[#FFD400] text-black text-[9px] font-mono font-black uppercase tracking-wider shadow">
                    Active
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Card Content & Telemetry Metrics */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#FFD400] transition-colors leading-snug">
                    {mode.tagline}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                    {mode.description}
                  </p>
                </div>

                {/* Micro Hardware Metrics */}
                <div className="pt-3 border-t border-white/[0.06] space-y-1.5 text-[11px] font-mono">
                  <div className="flex items-center justify-between text-zinc-400">
                    <span>Frame Pacing:</span>
                    <strong className="text-white">{mode.frametime}</strong>
                  </div>
                  <div className="flex items-center justify-between text-zinc-400">
                    <span>Drain Rate:</span>
                    <strong className="text-zinc-300">{mode.battery}</strong>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Action Footer */}
      <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <a
          href="#fps-calculator"
          onClick={() => soundEffects.playClick()}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FFD400] text-black text-xs font-black hover:bg-[#FFE033] transition-all shadow-md w-full sm:w-auto justify-center"
        >
          <Zap className="w-4 h-4 fill-black" />
          <span>Test {selectedMode} Mode on Your Smartphone</span>
        </a>

        <Link
          href="/guides/best-smartphones-for-pubg-mobile"
          onClick={() => soundEffects.playClick()}
          className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl bg-[#121820] border border-white/[0.08] text-xs font-semibold text-zinc-300 hover:text-white transition-all w-full sm:w-auto justify-center"
        >
          <span>View 120 FPS Smartphone Rankings</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
};
