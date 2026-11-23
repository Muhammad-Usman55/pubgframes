'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { DEVICES_DATA, ALL_BRANDS } from '@/data/devices';
import { Smartphone, Search, Zap, SlidersHorizontal, ArrowUpRight, Scale, CheckCircle2 } from 'lucide-react';

export default function DevicesCatalogPage() {
  const [search, setSearch] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedFpsFilter, setSelectedFpsFilter] = useState<'All' | '120' | '90' | '60' | '40' | 'Unsupported'>('All');
  const [sortBy, setSortBy] = useState<'popularity' | 'name' | 'fps'>('popularity');

  const filteredDevices = useMemo(() => {
    const searchTerms = search.trim().toLowerCase().split(/\s+/).filter(Boolean);

    return DEVICES_DATA.filter((device) => {
      const matchBrand = selectedBrand === 'All' || device.brand === selectedBrand;
      const matchFps =
        selectedFpsFilter === 'All'
          ? true
          : selectedFpsFilter === 'Unsupported'
          ? device.maxSupportedFps === 0 || device.isUnsupportedHardware
          : device.maxSupportedFps.toString() === selectedFpsFilter;
      const fullText = `${device.brand} ${device.model} ${device.chipset} ${device.slug}`.toLowerCase();
      const matchSearch =
        searchTerms.length === 0 || searchTerms.every((term) => fullText.includes(term));
      return matchBrand && matchFps && matchSearch;
    }).sort((a, b) => {
      if (sortBy === 'popularity') return a.popularityRank - b.popularityRank;
      if (sortBy === 'fps') return b.maxSupportedFps - a.maxSupportedFps;
      return a.model.localeCompare(b.model);
    });
  }, [search, selectedBrand, selectedFpsFilter, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#39F56A]/10 border border-[#39F56A]/30 text-[#39F56A] text-xs font-bold">
          <Smartphone className="w-3.5 h-3.5" />
          <span>PUBG Mobile Device Database</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Explore Smartphone <span className="text-[#39F56A]">Gaming Performance</span>
        </h1>
        <p className="text-xs sm:text-sm text-gray-400 max-w-2xl">
          Browse verified PUBG Mobile frame rate benchmarks, chipset specifications, and thermal endurance ratings for popular smartphones.
        </p>
      </div>

      {/* Controls & Filter Bar */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#101518] border border-white/5 space-y-4">
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
          {/* Search box */}
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search phone or chipset (e.g. Snapdragon, Dimensity, S24)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#39F56A]"
            />
          </div>

          {/* Sort selector */}
          <div className="w-full sm:w-auto flex items-center justify-between sm:justify-start gap-3 text-xs">
            <span className="text-gray-400 font-semibold">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="p-2 rounded-lg bg-black/40 border border-white/10 text-white font-bold focus:outline-none"
            >
              <option value="popularity">Popularity / Rank</option>
              <option value="fps">Highest Max FPS</option>
              <option value="name">Alphabetical</option>
            </select>
          </div>
        </div>

        {/* Brand filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
          <button
            onClick={() => setSelectedBrand('All')}
            className={`px-3 py-1.5 rounded-full font-bold whitespace-nowrap transition-colors ${
              selectedBrand === 'All' ? 'bg-[#FFD400] text-black' : 'bg-[#171D21] text-gray-400 hover:text-white'
            }`}
          >
            All Brands
          </button>
          {ALL_BRANDS.map((brand) => (
            <button
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`px-3 py-1.5 rounded-full font-bold whitespace-nowrap transition-colors ${
                selectedBrand === brand ? 'bg-[#FFD400] text-black' : 'bg-[#171D21] text-gray-400 hover:text-white'
              }`}
            >
              {brand}
            </button>
          ))}
        </div>

        {/* FPS Tier Filter Pills */}
        <div className="flex items-center gap-2 text-xs pt-1 border-t border-white/5 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-gray-400 font-semibold text-[11px] uppercase mr-1 shrink-0">FPS Tier:</span>
          {['All', '120', '90', '60', '40', 'Unsupported'].map((fps) => (
            <button
              key={fps}
              onClick={() => setSelectedFpsFilter(fps as any)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-bold transition-colors shrink-0 ${
                selectedFpsFilter === fps
                  ? fps === 'Unsupported' ? 'bg-red-500 text-white' : 'bg-[#39F56A] text-black'
                  : 'bg-black/30 text-gray-400 hover:text-white'
              }`}
            >
              {fps === 'All' ? 'All Tiers' : fps === 'Unsupported' ? 'Unsupported (0 FPS)' : `${fps} FPS`}
            </button>
          ))}
        </div>
      </div>

      {/* Device Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDevices.map((device) => {
          const fps = device.maxSupportedFps;
          const isUnsupported = fps === 0 || device.isUnsupportedHardware;

          return (
            <div
              key={device.id}
              className={`group p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between ${
                isUnsupported ? 'bg-[#141012] border-red-900/30 hover:border-red-500/40' : 'bg-[#171D21] border-white/5 hover:border-white/15'
              }`}
            >
              <div className="space-y-4">
                {/* Brand and Max FPS Pill */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    {device.brand}
                  </span>
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-mono font-black ${
                    isUnsupported
                      ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                      : fps === 120
                      ? 'bg-blue-500/15 text-[#28A9FF] border border-[#28A9FF]/30'
                      : fps === 90
                      ? 'bg-green-500/15 text-[#39F56A] border border-[#39F56A]/30'
                      : 'bg-yellow-500/15 text-[#FFD400] border border-[#FFD400]/30'
                  }`}>
                    {isUnsupported ? 'UNSUPPORTED' : `${fps} FPS Max`}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-lg font-black text-white group-hover:text-[#FFD400] transition-colors">
                    {device.model}
                  </h3>
                  <p className="text-xs text-gray-400 font-mono mt-0.5 truncate">
                    {device.chipset}
                  </p>
                </div>

                {/* Key Specs Pills */}
                <div className="grid grid-cols-2 gap-2 text-[11px] font-medium text-gray-300">
                  <div className="p-2 rounded-lg bg-[#101518] border border-white/5 truncate">
                    <span className="text-gray-500 block text-[10px]">Display</span>
                    {device.displayRefreshRate}Hz {device.screenSize.split(' ')[0]}
                  </div>
                  <div className="p-2 rounded-lg bg-[#101518] border border-white/5 truncate">
                    <span className="text-gray-500 block text-[10px]">Gaming Score</span>
                    <span className="text-[#FFD400] font-bold">{device.overallGamingRating} / 10</span>
                  </div>
                </div>

                {/* Graphics presets mini-badges */}
                <div className="space-y-1.5 pt-1">
                  <div className="text-[11px] text-gray-400 flex items-center justify-between">
                    <span>Smooth FPS:</span>
                    <strong className="text-white font-mono">{device.graphicsModes.Smooth.estimatedFps} FPS</strong>
                  </div>
                  <div className="text-[11px] text-gray-400 flex items-center justify-between">
                    <span>Stability Score:</span>
                    <strong className="text-[#39F56A] font-mono">{device.graphicsModes.Smooth.stabilityScore}%</strong>
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <Link
                  href={`/compare?phone1=${device.id}`}
                  className="text-gray-400 hover:text-white flex items-center gap-1 font-semibold"
                >
                  <Scale className="w-3.5 h-3.5" />
                  <span>Compare</span>
                </Link>

                <Link
                  href={`/devices/${device.brandSlug}/${device.slug}`}
                  className="text-[#FFD400] hover:text-yellow-300 font-bold flex items-center gap-1"
                >
                  <span>Detailed Specs</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {filteredDevices.length === 0 && (
        <div className="text-center py-16 bg-[#101518] rounded-3xl border border-white/5 space-y-3">
          <p className="text-gray-400 text-sm">No devices found matching your current filters.</p>
          <button
            onClick={() => {
              setSearch('');
              setSelectedBrand('All');
              setSelectedFpsFilter('All');
            }}
            className="px-4 py-2 rounded-xl bg-[#FFD400] text-black font-bold text-xs"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
