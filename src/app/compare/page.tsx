'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { DEVICES_DATA } from '@/data/devices';
import { DeviceInfo, GraphicsTier } from '@/types/device';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { Scale, Zap, Check, X as CloseIcon, Flame, Cpu, Gauge, Smartphone, Trophy, ArrowLeftRight, Share2, Copy } from 'lucide-react';
import { soundEffects } from '@/utils/soundEffects';
import Link from 'next/link';

function CompareContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const phone1Param = searchParams.get('phone1');
  const phone2Param = searchParams.get('phone2');

  const initialPhone1 = DEVICES_DATA.find((d) => d.id === phone1Param) || DEVICES_DATA[0]; // POCO X6 Pro
  const initialPhone2 = DEVICES_DATA.find((d) => d.id === phone2Param) || DEVICES_DATA[1]; // POCO F6 Pro

  const [deviceA, setDeviceA] = useState<DeviceInfo>(initialPhone1);
  const [deviceB, setDeviceB] = useState<DeviceInfo>(initialPhone2);
  const [copiedLink, setCopiedLink] = useState(false);

  const tiers: GraphicsTier[] = ['Smooth', 'Balanced', 'HD', 'HDR', 'Ultra HD'];

  // Swap devices function
  const handleSwap = () => {
    soundEffects.playClick();
    const temp = deviceA;
    setDeviceA(deviceB);
    setDeviceB(temp);
  };

  // Copy shareable link
  const handleShare = () => {
    soundEffects.playClick();
    const url = `${window.location.origin}/compare?phone1=${deviceA.id}&phone2=${deviceB.id}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  // Data for Recharts Bar Chart
  const chartData = useMemo(() => {
    return tiers.map((tier) => {
      const fpsA = deviceA.graphicsModes[tier]?.supported ? deviceA.graphicsModes[tier].estimatedFps : 0;
      const fpsB = deviceB.graphicsModes[tier]?.supported ? deviceB.graphicsModes[tier].estimatedFps : 0;
      return {
        mode: tier,
        [deviceA.model]: fpsA,
        [deviceB.model]: fpsB
      };
    });
  }, [deviceA, deviceB]);

  const presetBattles = [
    {
      name: 'Flagship 120 FPS Showdown',
      p1: 'samsung-galaxy-s24-ultra',
      p2: 'apple-iphone-16-pro-max'
    },
    {
      name: 'Budget 90 FPS Titans',
      p1: 'poco-x6-pro',
      p2: 'infinix-gt-20-pro'
    },
    {
      name: 'Snapdragon vs Dimensity',
      p1: 'poco-f6-pro',
      p2: 'poco-x6-pro'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A855F7]/10 border border-[#A855F7]/30 text-[#A855F7] text-xs font-bold">
          <Scale className="w-3.5 h-3.5" />
          <span>Head-to-Head Comparison</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Compare PUBG Mobile <span className="text-[#FFD400]">Gaming Performance</span>
        </h1>
        <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">
          Compare chipsets, display refresh rates, thermal behavior, and verified FPS across all graphics tiers.
        </p>

        {/* Quick presets pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs">
          <span className="text-gray-500 font-semibold text-[11px] uppercase mr-1">Popular Battles:</span>
          {presetBattles.map((battle, idx) => (
            <button
              key={idx}
              onClick={() => {
                soundEffects.playClick();
                const d1 = DEVICES_DATA.find((d) => d.id === battle.p1);
                const d2 = DEVICES_DATA.find((d) => d.id === battle.p2);
                if (d1) setDeviceA(d1);
                if (d2) setDeviceB(d2);
              }}
              className="px-3 py-1 rounded-full bg-[#171D21] border border-white/10 hover:border-[#FFD400] text-gray-300 hover:text-white transition-colors"
            >
              {battle.name}
            </button>
          ))}
        </div>
      </div>

      {/* Selectors Row with Swap & Share */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          
          {/* Device A Selector */}
          <div className="p-5 rounded-2xl bg-[#171D21] border border-[#FFD400]/30 shadow-xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#FFD400] uppercase tracking-wider">Device 1</span>
              <span className="text-xs font-mono font-bold text-white px-2 py-0.5 rounded bg-black/40">
                {deviceA.maxSupportedFps} FPS Max
              </span>
            </div>

            <select
              value={deviceA.id}
              onChange={(e) => {
                soundEffects.playClick();
                const found = DEVICES_DATA.find((d) => d.id === e.target.value);
                if (found) setDeviceA(found);
              }}
              className="w-full p-3 rounded-xl bg-black/50 border border-white/10 text-white font-bold text-sm focus:outline-none focus:border-[#FFD400]"
            >
              {DEVICES_DATA.map((d) => (
                <option key={d.id} value={d.id} className="bg-[#171D21]">
                  {d.brand} {d.model} ({d.chipset})
                </option>
              ))}
            </select>
          </div>

          {/* Device B Selector */}
          <div className="p-5 rounded-2xl bg-[#171D21] border border-[#39F56A]/30 shadow-xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#39F56A] uppercase tracking-wider">Device 2</span>
              <span className="text-xs font-mono font-bold text-white px-2 py-0.5 rounded bg-black/40">
                {deviceB.maxSupportedFps} FPS Max
              </span>
            </div>

            <select
              value={deviceB.id}
              onChange={(e) => {
                soundEffects.playClick();
                const found = DEVICES_DATA.find((d) => d.id === e.target.value);
                if (found) setDeviceB(found);
              }}
              className="w-full p-3 rounded-xl bg-black/50 border border-white/10 text-white font-bold text-sm focus:outline-none focus:border-[#39F56A]"
            >
              {DEVICES_DATA.map((d) => (
                <option key={d.id} value={d.id} className="bg-[#171D21]">
                  {d.brand} {d.model} ({d.chipset})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Swap & Share Buttons Bar */}
        <div className="flex items-center justify-center gap-3 mt-4">
          <button
            onClick={handleSwap}
            className="px-4 py-2 rounded-xl bg-[#101518] border border-white/10 hover:border-white/30 text-xs font-bold text-white flex items-center gap-1.5 shadow-lg"
          >
            <ArrowLeftRight className="w-3.5 h-3.5 text-[#FFD400]" />
            <span>Swap Devices</span>
          </button>

          <button
            onClick={handleShare}
            className="px-4 py-2 rounded-xl bg-[#101518] border border-white/10 hover:border-white/30 text-xs font-bold text-gray-300 hover:text-white flex items-center gap-1.5 shadow-lg"
          >
            {copiedLink ? <Check className="w-3.5 h-3.5 text-[#39F56A]" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copiedLink ? 'Link Copied!' : 'Share Comparison'}</span>
          </button>
        </div>
      </div>

      {/* Visual Recharts Bar Chart */}
      <div className="p-6 rounded-3xl bg-[#101518] border border-white/5 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Gauge className="w-4 h-4 text-[#FFD400]" />
            <span>FPS Comparison Across Graphics Modes</span>
          </h3>
          <span className="text-xs text-gray-400">Higher is better</span>
        </div>

        <div className="h-72 w-full pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#222B32" />
              <XAxis dataKey="mode" stroke="#88929A" tick={{ fill: '#88929A', fontSize: 12 }} />
              <YAxis stroke="#88929A" tick={{ fill: '#88929A', fontSize: 12 }} domain={[0, 130]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#171D21',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                  color: '#fff',
                  fontSize: '12px'
                }}
              />
              <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
              <Bar dataKey={deviceA.model} fill="#FFD400" radius={[6, 6, 0, 0]} />
              <Bar dataKey={deviceB.model} fill="#39F56A" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Side-by-side Specifications & Performance Comparison Table */}
      <div className="rounded-3xl bg-[#101518] border border-white/5 overflow-hidden shadow-xl">
        <div className="p-5 border-b border-white/10 bg-[#171D21]/50 flex items-center justify-between">
          <h3 className="text-lg font-black text-white">Full Hardware & Gaming Telemetry</h3>
          <span className="text-xs text-gray-400">Lab Verified Data</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/5 bg-[#171D21]/30">
                <th className="p-4 text-gray-400 font-bold uppercase tracking-wider w-1/3">Feature</th>
                <th className="p-4 text-[#FFD400] font-black w-1/3">{deviceA.brand} {deviceA.model}</th>
                <th className="p-4 text-[#39F56A] font-black w-1/3">{deviceB.brand} {deviceB.model}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-medium">
              <tr>
                <td className="p-4 text-gray-400">Processor / Chipset</td>
                <td className="p-4 text-white font-mono">{deviceA.chipset}</td>
                <td className="p-4 text-white font-mono">{deviceB.chipset}</td>
              </tr>
              <tr>
                <td className="p-4 text-gray-400">Graphics Core (GPU)</td>
                <td className="p-4 text-white font-mono">{deviceA.gpu}</td>
                <td className="p-4 text-white font-mono">{deviceB.gpu}</td>
              </tr>
              <tr>
                <td className="p-4 text-gray-400">Peak Supported FPS</td>
                <td className="p-4 text-[#FFD400] font-black text-base">{deviceA.maxSupportedFps} FPS</td>
                <td className="p-4 text-[#39F56A] font-black text-base">{deviceB.maxSupportedFps} FPS</td>
              </tr>
              <tr>
                <td className="p-4 text-gray-400">Display Refresh Rate</td>
                <td className="p-4 text-white">{deviceA.displayRefreshRate} Hz ({deviceA.screenSize})</td>
                <td className="p-4 text-white">{deviceB.displayRefreshRate} Hz ({deviceB.screenSize})</td>
              </tr>
              <tr>
                <td className="p-4 text-gray-400">Antutu Benchmark (v10)</td>
                <td className="p-4 text-white font-mono">{deviceA.antutuScore?.toLocaleString() || 'N/A'}</td>
                <td className="p-4 text-white font-mono">{deviceB.antutuScore?.toLocaleString() || 'N/A'}</td>
              </tr>
              <tr>
                <td className="p-4 text-gray-400">Smooth Mode FPS</td>
                <td className="p-4 font-bold text-white">
                  {deviceA.graphicsModes.Smooth.supported ? `${deviceA.graphicsModes.Smooth.estimatedFps} FPS (${deviceA.graphicsModes.Smooth.stabilityScore}% stability)` : 'Unsupported'}
                </td>
                <td className="p-4 font-bold text-white">
                  {deviceB.graphicsModes.Smooth.supported ? `${deviceB.graphicsModes.Smooth.estimatedFps} FPS (${deviceB.graphicsModes.Smooth.stabilityScore}% stability)` : 'Unsupported'}
                </td>
              </tr>
              <tr>
                <td className="p-4 text-gray-400">HD Graphics Mode</td>
                <td className="p-4 text-white">
                  {deviceA.graphicsModes.HD.supported ? `${deviceA.graphicsModes.HD.estimatedFps} FPS` : 'Unsupported'}
                </td>
                <td className="p-4 text-white">
                  {deviceB.graphicsModes.HD.supported ? `${deviceB.graphicsModes.HD.estimatedFps} FPS` : 'Unsupported'}
                </td>
              </tr>
              <tr>
                <td className="p-4 text-gray-400">Ultra HD Graphics Mode</td>
                <td className="p-4 text-white">
                  {deviceA.graphicsModes['Ultra HD'].supported ? `${deviceA.graphicsModes['Ultra HD'].estimatedFps} FPS` : 'Locked / Unavailable'}
                </td>
                <td className="p-4 text-white">
                  {deviceB.graphicsModes['Ultra HD'].supported ? `${deviceB.graphicsModes['Ultra HD'].estimatedFps} FPS` : 'Locked / Unavailable'}
                </td>
              </tr>
              <tr>
                <td className="p-4 text-gray-400">Cooling Hardware</td>
                <td className="p-4 text-gray-300">{deviceA.coolingSystem}</td>
                <td className="p-4 text-gray-300">{deviceB.coolingSystem}</td>
              </tr>
              <tr>
                <td className="p-4 text-gray-400">Gyroscope Latency</td>
                <td className="p-4 text-white">{deviceA.gyroscope}</td>
                <td className="p-4 text-white">{deviceB.gyroscope}</td>
              </tr>
              <tr>
                <td className="p-4 text-gray-400">Battery & Endurance</td>
                <td className="p-4 text-white">{deviceA.batteryCapacity} mAh (~{deviceA.graphicsModes.Smooth.batteryDrainPerHour}% / hr)</td>
                <td className="p-4 text-white">{deviceB.batteryCapacity} mAh (~{deviceB.graphicsModes.Smooth.batteryDrainPerHour}% / hr)</td>
              </tr>
              <tr>
                <td className="p-4 text-gray-400">Gaming Rating</td>
                <td className="p-4 text-[#FFD400] font-black">{deviceA.overallGamingRating} / 10</td>
                <td className="p-4 text-[#39F56A] font-black">{deviceB.overallGamingRating} / 10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Comparative Verdict Card */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-[#171D21] via-[#1F262B] to-[#171D21] border border-white/10 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#FFD400]/20 flex items-center justify-center text-[#FFD400]">
            <Trophy className="w-5 h-5 fill-current" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">PUBGFrames Comparative Verdict</h3>
            <p className="text-xs text-gray-400">Which device should you pick for competitive gaming?</p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
          {deviceA.overallGamingRating > deviceB.overallGamingRating
            ? `${deviceA.brand} ${deviceA.model} takes the lead with superior ${deviceA.maxSupportedFps} FPS capability and stronger sustained performance (${deviceA.overallGamingRating}/10 vs ${deviceB.overallGamingRating}/10). ${deviceA.verdict}`
            : deviceB.overallGamingRating > deviceA.overallGamingRating
            ? `${deviceB.brand} ${deviceB.model} wins this showdown with top-tier ${deviceB.maxSupportedFps} FPS execution and better thermal stability (${deviceB.overallGamingRating}/10 vs ${deviceA.overallGamingRating}/10). ${deviceB.verdict}`
            : `Both devices are evenly matched in overall gaming performance score (${deviceA.overallGamingRating}/10). Consider your preference in operating system and battery capacity.`}
        </p>

        <div className="flex gap-4 pt-2">
          <Link
            href={`/devices/${deviceA.brandSlug}/${deviceA.slug}`}
            onClick={() => soundEffects.playClick()}
            className="text-xs font-bold text-[#FFD400] hover:underline"
          >
            View {deviceA.model} Full Review →
          </Link>
          <Link
            href={`/devices/${deviceB.brandSlug}/${deviceB.slug}`}
            onClick={() => soundEffects.playClick()}
            className="text-xs font-bold text-[#39F56A] hover:underline"
          >
            View {deviceB.model} Full Review →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ComparePage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto p-12 text-center text-gray-400">Loading comparison...</div>}>
      <CompareContent />
    </Suspense>
  );
}
