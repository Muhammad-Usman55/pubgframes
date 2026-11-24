'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SlidersHorizontal } from 'lucide-react';
import { soundEffects } from '@/utils/soundEffects';

export const GraphicsComparisonSection = () => {
  const [selectedMode, setSelectedMode] = useState<'Smooth' | 'Balanced' | 'HD' | 'Ultra HD'>('Smooth');
  const [sliderPosition, setSliderPosition] = useState(50);
  const isDragging = useRef(false);

  const modes = [
    {
      id: 'Smooth' as const,
      name: 'Smooth',
      fpsTag: 'Up to 120 FPS',
      image: '/gameplay/smooth-real.jpg',
      tagline: 'Tournament standard clarity',
      frametime: '8.3 ms frame pacing',
      battery: '~14% battery / hr',
      description: 'Turns off grass shadows and ambient blur so enemies stand out cleanly and your screen refreshes as fast as possible.'
    },
    {
      id: 'Balanced' as const,
      name: 'Balanced',
      fpsTag: 'Up to 90 FPS',
      image: '/gameplay/balanced-real.jpg',
      tagline: 'Soft shadows without heavy GPU strain',
      frametime: '11.1 ms frame pacing',
      battery: '~18% battery / hr',
      description: 'Adds grounded ambient shading and crisp building contrast while holding steady 60 to 90 FPS across longer classic matches.'
    },
    {
      id: 'HD' as const,
      name: 'HD / HDR',
      fpsTag: 'Up to 60 FPS',
      image: '/gameplay/hd-real.jpg',
      tagline: 'Richer colors and water reflections',
      frametime: '16.6 ms frame pacing',
      battery: '~22% battery / hr',
      description: 'Brings out dynamic sun glare, shiny weapon finishes, and deeper textures. Requires a capable midrange or flagship processor.'
    },
    {
      id: 'Ultra HD' as const,
      name: 'Ultra HD 4K',
      fpsTag: '40–60 FPS',
      image: '/gameplay/ultrahd-real.jpg',
      tagline: 'High-detail terrain pack',
      frametime: '22.2 ms frame pacing',
      battery: '~28% battery / hr',
      description: 'Maximum foliage detail, heavy smoke volume, and dense ground textures built for showcasing flagship hardware.'
    }
  ];

  const activePreset = modes.find((m) => m.id === selectedMode) || modes[0];

  const handleSliderMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const percent = Math.max(8, Math.min(92, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-8 sm:py-20 space-y-6 sm:space-y-10">
      {/* Header Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-end reveal-on-scroll">
        <div className="lg:col-span-7 space-y-2">
          <h2 className="text-[28px] sm:text-[36px] font-semibold tracking-[-0.025em] text-[#0b0c0e] leading-tight">
            Graphics presets vs. frame rate
          </h2>
        </div>
        <div className="lg:col-span-5">
          <p className="text-base text-[#0b0c0e] leading-relaxed max-w-none">
            Drag the divider below to see what turning up textures and shadows costs in frame time and battery life.
          </p>
        </div>
      </div>

      {/* Interactive Split-Screen Slider */}
      <div className="rounded-lg bg-[#ffffff] p-4 sm:p-6 space-y-3 sm:space-y-4 reveal-on-scroll">
        <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4 text-sm sm:text-base text-[#3d4350]">
          <span>Left: <strong className="text-[#0b0c0e] font-medium">Smooth (120 FPS)</strong></span>
          <span>Right: <strong className="text-[#0b0c0e] font-medium">Ultra HD (45–60 FPS)</strong></span>
        </div>

        <div
          style={{ containerType: 'inline-size' }}
          className="relative w-full aspect-[16/10] sm:aspect-[21/9] rounded-md overflow-hidden cursor-ew-resize select-none touch-none bg-[#111317]"
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
          onTouchStart={(e) => {
            if (e.touches[0]) {
              handleSliderMove(e.touches[0].clientX, e.currentTarget.getBoundingClientRect());
            }
          }}
          onTouchMove={(e) => {
            if (e.touches[0]) {
              handleSliderMove(e.touches[0].clientX, e.currentTarget.getBoundingClientRect());
            }
          }}
        >
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/gameplay/ultrahd-real.jpg"
              alt="Ultra HD 4K PUBG Mobile visual comparison"
              fill
              className="object-cover"
            />
            <div className="hidden sm:block absolute top-3 right-3 px-3 py-1.5 rounded-md bg-[#111317] text-white text-sm font-medium">
              Ultra HD &middot; 45–60 FPS
            </div>
          </div>

          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="relative w-full h-full" style={{ width: '100cqw' }}>
              <Image
                src="/gameplay/smooth-real.jpg"
                alt="Smooth 120 FPS PUBG Mobile visual comparison"
                fill
                className="object-cover"
              />
            </div>
            <div className="hidden sm:block absolute top-3 left-3 px-3 py-1.5 rounded-md bg-[#111317] text-white text-sm font-medium">
              Smooth &middot; 120 FPS
            </div>
          </div>

          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#111317] border-2 border-white flex items-center justify-center pointer-events-auto cursor-ew-resize">
              <SlidersHorizontal className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* 2-Part Interactive Preset Switcher & Large Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start reveal-on-scroll">
        {/* Left Preset Rows (editorial open rows — separated by space and left indicator) */}
        <div className="lg:col-span-5 space-y-2">
          {modes.map((mode) => {
            const isSelected = selectedMode === mode.id;
            return (
              <button
                key={mode.id}
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  setSelectedMode(mode.id);
                }}
                className={`w-full text-left py-4 px-5 rounded-lg transition-colors duration-150 cursor-pointer flex items-center justify-between gap-4 ${
                  isSelected
                    ? 'bg-[#ffffff] border-l-4 border-[#1f2de6]'
                    : 'bg-transparent hover:bg-[#ffffff]/70'
                }`}
              >
                <div className="space-y-0.5">
                  <div className="text-xl font-semibold text-[#0b0c0e]">{mode.name}</div>
                  <div className="text-base text-[#3d4350]">{mode.tagline}</div>
                </div>
                <span
                  className={`text-sm font-semibold tabular-nums px-3 py-1 rounded-md shrink-0 ${
                    isSelected ? 'bg-[#1f2de6] text-white' : 'bg-[#e2e5ea] text-[#0b0c0e]'
                  }`}
                >
                  {mode.fpsTag}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Showcase Frame */}
        <div className="lg:col-span-7 rounded-lg bg-[#ffffff] overflow-hidden">
          <figure className="relative w-full aspect-[16/9] bg-[#111317]">
            <Image
              src={activePreset.image}
              alt={`PUBG Mobile ${activePreset.name} preset screen`}
              fill
              className="object-cover"
            />
          </figure>
          <div className="p-6 sm:p-8 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-xl font-semibold text-[#0b0c0e]">{activePreset.name} preset details</h3>
              <span className="text-base font-semibold text-[#1f2de6] tabular-nums">{activePreset.fpsTag}</span>
            </div>

            <p className="text-base text-[#0b0c0e] leading-relaxed">
              {activePreset.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-base text-[#3d4350] tabular-nums">
              <span>Frame pacing: <strong className="text-[#0b0c0e] font-medium">{activePreset.frametime}</strong></span>
              <span>Battery load: <strong className="text-[#0b0c0e] font-medium">{activePreset.battery}</strong></span>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#fps-calculator"
                onClick={() => soundEffects.playClick()}
                className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-[#1f2de6] hover:bg-[#1723bf] text-white text-base font-medium transition-colors duration-150"
              >
                Test {activePreset.name} on your phone
              </a>
              <Link
                href="/guides/best-smartphones-for-pubg-mobile"
                onClick={() => soundEffects.playClick()}
                className="text-base font-medium text-[#0b0c0e] underline underline-offset-4 decoration-[#0b0c0e]/30 hover:decoration-[#1f2de6] transition-colors duration-150"
              >
                See 120 FPS device rankings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
