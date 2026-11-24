'use client';

import { useState } from 'react';
import Link from 'next/link';
import { formatDeviceName } from '@/utils/formatDeviceName';
import { soundEffects } from '@/utils/soundEffects';

interface LeaderboardDevice {
  rank: number;
  model: string;
  brand: string;
  chipset: string;
  fpsMode: string;
  testedFps: number;
  stability: number;
  tempDelta: string;
  coolingTech: string;
  slug: string;
  brandSlug: string;
}

const LEADERBOARD_DATA: LeaderboardDevice[] = [
  {
    rank: 1,
    model: 'Galaxy S24 Ultra',
    brand: 'Samsung',
    chipset: 'Snapdragon 8 Gen 3 for Galaxy',
    fpsMode: 'Smooth · 120 FPS',
    testedFps: 120,
    stability: 98,
    tempDelta: '+7.2°C',
    coolingTech: '1.9x Vapor Chamber',
    slug: 'galaxy-s24-ultra',
    brandSlug: 'samsung'
  },
  {
    rank: 2,
    model: 'ROG Phone 9 Pro',
    brand: 'ASUS',
    chipset: 'Snapdragon 8 Elite',
    fpsMode: 'Smooth · 120 FPS',
    testedFps: 120,
    stability: 99,
    tempDelta: '+6.1°C',
    coolingTech: 'GameCool 9 SoC',
    slug: 'asus-rog-phone-9-pro',
    brandSlug: 'asus'
  },
  {
    rank: 3,
    model: 'iPhone 16 Pro Max',
    brand: 'Apple',
    chipset: 'Apple A18 Pro',
    fpsMode: 'Smooth · 120 FPS',
    testedFps: 120,
    stability: 99,
    tempDelta: '+6.8°C',
    coolingTech: 'Graphene Thermal Sheet',
    slug: 'iphone-16-pro-max',
    brandSlug: 'apple'
  },
  {
    rank: 4,
    model: 'POCO F6 Pro',
    brand: 'POCO',
    chipset: 'Snapdragon 8 Gen 2',
    fpsMode: 'Smooth · 120 FPS',
    testedFps: 118,
    stability: 96,
    tempDelta: '+8.4°C',
    coolingTech: 'LiquidCool 4.0',
    slug: 'poco-f6-pro',
    brandSlug: 'poco'
  },
  {
    rank: 5,
    model: 'iQOO 13 5G',
    brand: 'iQOO',
    chipset: 'Snapdragon 8 Elite + Q2',
    fpsMode: 'Smooth · 120 FPS',
    testedFps: 120,
    stability: 99,
    tempDelta: '+6.7°C',
    coolingTech: '7K Vapor Chamber',
    slug: 'iqoo-13-5g',
    brandSlug: 'iqoo'
  },
  {
    rank: 6,
    model: 'POCO X6 Pro 5G',
    brand: 'POCO',
    chipset: 'Dimensity 8300 Ultra',
    fpsMode: 'Smooth · 90 FPS',
    testedFps: 90,
    stability: 94,
    tempDelta: '+9.1°C',
    coolingTech: '5000mm² LiquidCool',
    slug: 'poco-x6-pro-5g',
    brandSlug: 'poco'
  },
  {
    rank: 7,
    model: 'Infinix GT 20 Pro',
    brand: 'Infinix',
    chipset: 'Dimensity 8200 Ultimate',
    fpsMode: 'Smooth · 120 FPS',
    testedFps: 114,
    stability: 93,
    tempDelta: '+8.8°C',
    coolingTech: 'PCM Graphite + VC',
    slug: 'infinix-gt-20-pro-5g',
    brandSlug: 'infinix'
  },
  {
    rank: 8,
    model: 'OnePlus 12R',
    brand: 'OnePlus',
    chipset: 'Snapdragon 8 Gen 2',
    fpsMode: 'Smooth · 90 FPS',
    testedFps: 90,
    stability: 98,
    tempDelta: '+6.1°C',
    coolingTech: 'Cryo-velocity VC',
    slug: 'oneplus-12r',
    brandSlug: 'oneplus'
  }
];

export const UserReviews = () => {
  const [filterTier, setFilterTier] = useState<'All' | '120' | '90'>('All');

  const filtered = LEADERBOARD_DATA.filter((item) => {
    if (filterTier === '120') return item.fpsMode.includes('120');
    if (filterTier === '90') return item.fpsMode.includes('90');
    return true;
  });

  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12 sm:py-16 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 reveal-on-scroll">
        <div className="space-y-1.5">
          <h2 className="text-[28px] sm:text-[36px] font-semibold tracking-[-0.025em] text-[#0b0c0e] leading-tight">
            Competitive performance ranking
          </h2>
          <p className="text-base text-[#0b0c0e]">
            Sustained frame delivery and temperature rise over 30-minute classic sessions.
          </p>
        </div>

        <div className="inline-flex items-center gap-1 bg-[#e2e5ea] p-1 rounded-md text-sm">
          <button
            type="button"
            onClick={() => {
              soundEffects.playClick();
              setFilterTier('All');
            }}
            className={`px-3.5 py-1.5 rounded font-medium transition-colors duration-150 cursor-pointer ${
              filterTier === 'All' ? 'bg-[#ffffff] text-[#0b0c0e]' : 'text-[#3d4350] hover:text-[#0b0c0e]'
            }`}
          >
            All ranks
          </button>
          <button
            type="button"
            onClick={() => {
              soundEffects.playClick();
              setFilterTier('120');
            }}
            className={`px-3.5 py-1.5 rounded font-medium transition-colors duration-150 cursor-pointer ${
              filterTier === '120' ? 'bg-[#ffffff] text-[#0b0c0e]' : 'text-[#3d4350] hover:text-[#0b0c0e]'
            }`}
          >
            120 FPS
          </button>
          <button
            type="button"
            onClick={() => {
              soundEffects.playClick();
              setFilterTier('90');
            }}
            className={`px-3.5 py-1.5 rounded font-medium transition-colors duration-150 cursor-pointer ${
              filterTier === '90' ? 'bg-[#ffffff] text-[#0b0c0e]' : 'text-[#3d4350] hover:text-[#0b0c0e]'
            }`}
          >
            90 FPS
          </button>
        </div>
      </div>

      {/* Clean Data Table */}
      <div className="rounded-lg bg-[#ffffff] overflow-hidden reveal-on-scroll">
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left text-base">
            <thead>
              <tr className="bg-[#e2e5ea]/60 text-[#0b0c0e] text-sm font-medium">
                <th className="py-4 px-5 w-16">#</th>
                <th className="py-4 px-5">Device & Processor</th>
                <th className="py-4 px-5">Preset Mode</th>
                <th className="py-4 px-5 text-right">Measured FPS</th>
                <th className="py-4 px-5 text-right">Stability</th>
                <th className="py-4 px-5 text-right">30m Temp Rise</th>
                <th className="py-4 px-5 text-right">Review</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((device) => (
                <tr key={device.model} className="even:bg-[#f6f7f9] hover:bg-[#eef0f3] transition-colors duration-150">
                  <td className="py-4 px-5 tabular-nums font-medium text-[#3d4350]">
                    {device.rank}
                  </td>
                  <td className="py-4 px-5">
                    <div className="font-semibold text-[#0b0c0e]">{formatDeviceName(device.brand, device.model)}</div>
                    <div className="text-sm text-[#3d4350]">{device.chipset}</div>
                  </td>
                  <td className="py-4 px-5 text-[#3d4350] text-base">{device.fpsMode}</td>
                  <td className="py-4 px-5 text-right tabular-nums font-semibold text-[#166534]">
                    {device.testedFps} FPS
                  </td>
                  <td className="py-4 px-5 text-right tabular-nums font-medium text-[#0b0c0e]">
                    {device.stability}%
                  </td>
                  <td className="py-4 px-5 text-right tabular-nums text-[#3d4350]">
                    <span className="text-[#0b0c0e] font-medium">{device.tempDelta}</span>
                    <span className="block text-sm">{device.coolingTech}</span>
                  </td>
                  <td className="py-4 px-5 text-right">
                    <Link
                      href={`/devices/${device.brandSlug}/${device.slug}`}
                      className="text-[#1f2de6] font-medium hover:underline text-base"
                    >
                      Specs
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Stacked List */}
        <div className="md:hidden">
          {filtered.map((device) => (
            <div key={device.model} className="p-4 even:bg-[#f6f7f9] space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-sm text-[#3d4350] font-medium mr-2 tabular-nums">#{device.rank}</span>
                  <span className="text-base font-semibold text-[#0b0c0e]">{formatDeviceName(device.brand, device.model)}</span>
                  <p className="text-sm text-[#3d4350] mt-0.5">{device.chipset}</p>
                </div>
                <span className="text-base font-semibold tabular-nums text-[#166534] shrink-0">
                  {device.testedFps} FPS
                </span>
              </div>
              <div className="flex items-center justify-between text-sm text-[#3d4350] pt-1">
                <span className="tabular-nums">Stability: {device.stability}% &middot; {device.tempDelta}</span>
                <Link
                  href={`/devices/${device.brandSlug}/${device.slug}`}
                  className="text-[#1f2de6] font-medium"
                >
                  Open specs
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
