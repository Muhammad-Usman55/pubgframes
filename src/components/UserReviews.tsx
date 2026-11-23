'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Trophy, ShieldCheck, Flame, Gauge, ArrowUpRight, Zap, Filter } from 'lucide-react';
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
  tier: 'S-Tier' | 'A-Tier' | 'B-Tier';
}

const LEADERBOARD_DATA: LeaderboardDevice[] = [
  {
    rank: 1,
    model: 'Galaxy S24 Ultra',
    brand: 'Samsung',
    chipset: 'Snapdragon 8 Gen 3 for Galaxy',
    fpsMode: 'Smooth + 120 FPS',
    testedFps: 120,
    stability: 98,
    tempDelta: '+7.2°C',
    coolingTech: '1.9x Vapor Chamber',
    slug: 'galaxy-s24-ultra',
    brandSlug: 'samsung',
    tier: 'S-Tier'
  },
  {
    rank: 2,
    model: 'ROG Phone 8 Pro',
    brand: 'ASUS',
    chipset: 'Snapdragon 8 Gen 3',
    fpsMode: 'Smooth + 120 FPS',
    testedFps: 120,
    stability: 99,
    tempDelta: '+6.5°C',
    coolingTech: 'GameCool 8 360° SoC',
    slug: 'rog-phone-8-pro',
    brandSlug: 'asus',
    tier: 'S-Tier'
  },
  {
    rank: 3,
    model: 'iPhone 16 Pro Max',
    brand: 'Apple',
    chipset: 'Apple A18 Pro (3nm)',
    fpsMode: 'Smooth + 120 FPS',
    testedFps: 120,
    stability: 99,
    tempDelta: '+6.8°C',
    coolingTech: 'Graphene Thermal Sheet',
    slug: 'iphone-16-pro-max',
    brandSlug: 'apple',
    tier: 'S-Tier'
  },
  {
    rank: 4,
    model: 'POCO F6 Pro',
    brand: 'POCO',
    chipset: 'Snapdragon 8 Gen 2',
    fpsMode: 'Smooth + 120 FPS',
    testedFps: 118,
    stability: 96,
    tempDelta: '+8.4°C',
    coolingTech: 'LiquidCool 4.0 Iceloop',
    slug: 'poco-f6-pro',
    brandSlug: 'poco',
    tier: 'S-Tier'
  },
  {
    rank: 5,
    model: 'iQOO 12 5G',
    brand: 'iQOO',
    chipset: 'Snapdragon 8 Gen 3 + Q1',
    fpsMode: 'Smooth + 120 FPS',
    testedFps: 120,
    stability: 99,
    tempDelta: '+7.0°C',
    coolingTech: '6K Four-Zone VC',
    slug: 'iqoo-12-5g',
    brandSlug: 'iqoo',
    tier: 'S-Tier'
  },
  {
    rank: 6,
    model: 'POCO X6 Pro 5G',
    brand: 'POCO',
    chipset: 'Dimensity 8300 Ultra',
    fpsMode: 'Smooth + 90 FPS',
    testedFps: 90,
    stability: 94,
    tempDelta: '+9.1°C',
    coolingTech: '5000mm² LiquidCool 2.0',
    slug: 'poco-x6-pro-5g',
    brandSlug: 'poco',
    tier: 'A-Tier'
  },
  {
    rank: 7,
    model: 'Infinix GT 20 Pro',
    brand: 'Infinix',
    chipset: 'Dimensity 8200 Ultimate + Pixelworks',
    fpsMode: 'Smooth + 120 FPS',
    testedFps: 114,
    stability: 93,
    tempDelta: '+8.8°C',
    coolingTech: 'PCM Graphite + VC',
    slug: 'infinix-gt-20-pro',
    brandSlug: 'infinix',
    tier: 'A-Tier'
  },
  {
    rank: 8,
    model: 'OnePlus 12R',
    brand: 'OnePlus',
    chipset: 'Snapdragon 8 Gen 2',
    fpsMode: 'Smooth + 90 FPS',
    testedFps: 90,
    stability: 98,
    tempDelta: '+6.1°C',
    coolingTech: 'Dual Cryo-velocity VC',
    slug: 'oneplus-12r',
    brandSlug: 'oneplus',
    tier: 'A-Tier'
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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#39F56A]/10 border border-[#39F56A]/20 text-[#39F56A] text-xs font-bold uppercase tracking-wider mb-2">
            <Trophy className="w-3.5 h-3.5" />
            <span>Lab Telemetry Leaderboard</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Competitive Device Power Ranking
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Real hardware frame-time consistency and thermal endurance measured in 30-minute scrim sessions.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 bg-[#171D21] p-1 rounded-xl border border-white/5 text-xs">
          <button
            onClick={() => {
              soundEffects.playClick();
              setFilterTier('All');
            }}
            className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${
              filterTier === 'All' ? 'bg-[#FFD400] text-black' : 'text-gray-400 hover:text-white'
            }`}
          >
            All Ranks
          </button>
          <button
            onClick={() => {
              soundEffects.playClick();
              setFilterTier('120');
            }}
            className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${
              filterTier === '120' ? 'bg-[#39F56A] text-black' : 'text-gray-400 hover:text-white'
            }`}
          >
            120 FPS
          </button>
          <button
            onClick={() => {
              soundEffects.playClick();
              setFilterTier('90');
            }}
            className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${
              filterTier === '90' ? 'bg-[#28A9FF] text-black' : 'text-gray-400 hover:text-white'
            }`}
          >
            90 FPS
          </button>
        </div>
      </div>

      {/* Desktop / Tablet Data-Dense Table & Mobile Friendly Cards */}
      <div className="rounded-2xl bg-[#171D21] border border-white/10 overflow-hidden shadow-xl">
        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-[#101518]/70 text-gray-400 uppercase tracking-wider text-[11px] font-bold">
                <th className="py-3.5 px-4 w-12 text-center">Rank</th>
                <th className="py-3.5 px-4">Device & Chipset</th>
                <th className="py-3.5 px-4">Preset Mode</th>
                <th className="py-3.5 px-4">Measured FPS</th>
                <th className="py-3.5 px-4">Stability</th>
                <th className="py-3.5 px-4">30m Temp Rise</th>
                <th className="py-3.5 px-4">Tier</th>
                <th className="py-3.5 px-4 text-right">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-medium">
              {filtered.map((device) => (
                <tr key={device.model} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3.5 px-4 text-center">
                    <span className={`w-6 h-6 rounded-full inline-flex items-center justify-center font-black text-xs ${
                      device.rank === 1
                        ? 'bg-[#FFD400] text-black'
                        : device.rank <= 3
                        ? 'bg-[#39F56A]/20 text-[#39F56A] border border-[#39F56A]/40'
                        : 'text-gray-400 bg-white/5'
                    }`}>
                      {device.rank}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-white text-sm">{device.brand} {device.model}</div>
                    <div className="text-[11px] text-gray-400 font-mono">{device.chipset}</div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="text-gray-300 font-mono text-xs">{device.fpsMode}</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="font-mono font-black text-[#39F56A] text-sm">{device.testedFps} FPS</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-white">{device.stability}%</span>
                      <div className="w-16 h-1.5 bg-black/40 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#39F56A] rounded-full"
                          style={{ width: `${device.stability}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="font-mono text-yellow-400 text-xs">{device.tempDelta}</span>
                    <span className="text-[10px] text-gray-500 block truncate">{device.coolingTech}</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2 py-0.5 rounded text-[11px] font-black uppercase tracking-wider ${
                      device.tier === 'S-Tier'
                        ? 'bg-[#FFD400]/15 text-[#FFD400] border border-[#FFD400]/30'
                        : 'bg-[#39F56A]/15 text-[#39F56A] border border-[#39F56A]/30'
                    }`}>
                      {device.tier}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <Link
                      href={`/devices/${device.brandSlug}/${device.slug}`}
                      className="text-[#FFD400] hover:underline font-bold inline-flex items-center gap-1 text-xs"
                    >
                      <span>Specs</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View: High density stacked cards */}
        <div className="md:hidden divide-y divide-white/5">
          {filtered.map((device) => (
            <div key={device.model} className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className={`w-6 h-6 rounded-full inline-flex items-center justify-center font-black text-xs ${
                    device.rank === 1 ? 'bg-[#FFD400] text-black' : 'bg-white/10 text-gray-300'
                  }`}>
                    {device.rank}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">{device.brand} {device.model}</h4>
                    <span className="text-[10px] text-gray-400 font-mono">{device.chipset}</span>
                  </div>
                </div>

                <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                  device.tier === 'S-Tier'
                    ? 'bg-[#FFD400]/15 text-[#FFD400] border border-[#FFD400]/30'
                    : 'bg-[#39F56A]/15 text-[#39F56A]'
                }`}>
                  {device.tier}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 bg-[#101518] p-2.5 rounded-xl text-center text-xs">
                <div>
                  <span className="text-[10px] text-gray-400 block">Measured</span>
                  <strong className="text-[#39F56A] font-mono text-sm">{device.testedFps} FPS</strong>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block">Stability</span>
                  <strong className="text-white font-mono text-sm">{device.stability}%</strong>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block">30m Temp</span>
                  <strong className="text-yellow-400 font-mono text-sm">{device.tempDelta}</strong>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1 text-xs">
                <span className="text-[11px] text-gray-400 font-mono">{device.fpsMode}</span>
                <Link
                  href={`/devices/${device.brandSlug}/${device.slug}`}
                  className="text-[#FFD400] font-bold flex items-center gap-1 hover:underline text-xs"
                >
                  <span>Full Telemetry</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
