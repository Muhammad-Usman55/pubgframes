'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { DEVICES_DATA, ALL_BRANDS } from '@/data/devices';
import { scoreDeviceRelevance } from '@/utils/fuzzySearch';
import { formatDeviceName } from '@/utils/formatDeviceName';
import { Search } from 'lucide-react';
import { AdBanner } from '@/components/AdBanner';

export default function DevicesCatalogPage() {
  const [search, setSearch] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedFpsFilter, setSelectedFpsFilter] = useState<'All' | '120' | '90' | '60' | '40' | 'Unsupported'>('All');
  const [onlyGamingPhones, setOnlyGamingPhones] = useState(false);
  const [sortBy, setSortBy] = useState<'popularity' | 'name' | 'fps'>('popularity');
  const [visibleCount, setVisibleCount] = useState(48);

  const filteredDevices = useMemo(() => {
    const cleanSearch = search.trim();

    return DEVICES_DATA
      .map((device) => {
        const matchBrand = selectedBrand === 'All' || device.brand === selectedBrand;
        const matchFps =
          selectedFpsFilter === 'All'
            ? true
            : selectedFpsFilter === 'Unsupported'
            ? device.maxSupportedFps === 0 || device.isUnsupportedHardware
            : device.maxSupportedFps.toString() === selectedFpsFilter;

        const isGaming =
          device.brand === 'Black Shark' ||
          device.brand === 'iQOO' ||
          device.brand === 'Razer' ||
          device.model.toLowerCase().includes('rog') ||
          device.model.toLowerCase().includes('redmagic') ||
          device.model.toLowerCase().includes('legion') ||
          device.model.toLowerCase().includes('gaming') ||
          device.coolingSystem.toLowerCase().includes('fan') ||
          device.coolingSystem.toLowerCase().includes('gamecool') ||
          device.model.toLowerCase().includes('gt 20 pro') ||
          device.model.toLowerCase().includes('gt 10 pro') ||
          device.model.toLowerCase().includes('f4 gt');

        const matchGaming = !onlyGamingPhones || isGaming;
        if (!matchBrand || !matchFps || !matchGaming) return null;

        const score = cleanSearch ? scoreDeviceRelevance(device, cleanSearch) : 100;
        if (score === 0) return null;

        return { device, score };
      })
      .filter((item): item is { device: (typeof DEVICES_DATA)[0]; score: number } => item !== null)
      .sort((a, b) => {
        if (cleanSearch && b.score !== a.score) {
          return b.score - a.score;
        }
        if (sortBy === 'popularity') return a.device.popularityRank - b.device.popularityRank;
        if (sortBy === 'fps') return b.device.maxSupportedFps - a.device.maxSupportedFps;
        return a.device.model.localeCompare(b.device.model);
      })
      .map((item) => item.device);
  }, [search, selectedBrand, selectedFpsFilter, onlyGamingPhones, sortBy]);

  const displayedDevices = filteredDevices.slice(0, visibleCount);

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div className="space-y-2 max-w-[56ch]">
        <h1 className="text-[32px] sm:text-[48px] font-semibold tracking-[-0.025em] text-[#0b0c0e] leading-tight">
          Smartphone Gaming Performance Database
        </h1>
        <p className="text-[16px] sm:text-[18px] text-[#525866] leading-relaxed">
          Search across {DEVICES_DATA.length.toLocaleString()} smartphones and tablets for tested PUBG Mobile frame caps, chipset details, and thermal behavior.
        </p>
      </div>

      {/* Controls & Filter Bar */}
      <div data-ui="device-filters" className="p-5 sm:p-6 rounded-lg bg-[#ffffff] border border-[#d6dbe3] space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 justify-between">
          <div className="relative w-full sm:max-w-lg">
            <Search className="w-4 h-4 text-[#525866] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search phone or chipset (e.g. note 12, edmi note 12, s24, poco x6)..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setVisibleCount(48);
              }}
              className="w-full pl-10 pr-4 py-2.5 rounded-md bg-[#f6f7f9] border border-[#d6dbe3] text-[15px] text-[#0b0c0e] placeholder-[#6b7280] focus:outline-none focus:border-[#1f2de6]"
            />
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-3 text-[14px]">
            <span className="text-[#525866] tabular-nums">
              Showing {displayedDevices.length} of {filteredDevices.length.toLocaleString()}
            </span>
            <select
              aria-label="Sort devices"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'popularity' | 'name' | 'fps')}
              className="px-3 py-2 rounded-md bg-[#f6f7f9] border border-[#d6dbe3] text-[#0b0c0e] font-medium focus:outline-none focus:border-[#1f2de6]"
            >
              <option value="popularity">Most popular</option>
              <option value="fps">Highest FPS</option>
              <option value="name">Alphabetical (A–Z)</option>
            </select>
          </div>
        </div>

        {/* Brand Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-[14px]">
          <button
            type="button"
            onClick={() => {
              setSelectedBrand('All');
              setVisibleCount(48);
            }}
            className={`px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-colors duration-150 cursor-pointer ${
              selectedBrand === 'All'
                ? 'bg-[#0b0c0e] text-white'
                : 'bg-[#eef0f3] text-[#525866] hover:text-[#0b0c0e]'
            }`}
          >
            All brands
          </button>
          {ALL_BRANDS.map((brand) => (
            <button
              key={brand}
              type="button"
              onClick={() => {
                setSelectedBrand(brand);
                setVisibleCount(48);
              }}
              className={`px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-colors duration-150 cursor-pointer ${
                selectedBrand === brand
                  ? 'bg-[#0b0c0e] text-white'
                  : 'bg-[#eef0f3] text-[#525866] hover:text-[#0b0c0e]'
              }`}
            >
              {brand}
            </button>
          ))}
        </div>

        {/* FPS Tier & Gaming Phone Toggles */}
        <div className="flex flex-wrap items-center gap-2 pt-3 text-[13px]">
          <button
            type="button"
            onClick={() => {
              setOnlyGamingPhones(!onlyGamingPhones);
              setVisibleCount(48);
            }}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors duration-150 cursor-pointer ${
              onlyGamingPhones
                ? 'bg-[#1f2de6] text-white'
                : 'bg-[#eef0f3] text-[#0b0c0e] hover:bg-[#e2e5ea]'
            }`}
          >
            Dedicated gaming phones only
          </button>

          <span className="text-[#525866] ml-2">Max FPS:</span>
          {(['All', '120', '90', '60', '40', 'Unsupported'] as const).map((fps) => (
            <button
              key={fps}
              type="button"
              onClick={() => {
                setSelectedFpsFilter(fps);
                setVisibleCount(48);
              }}
              className={`px-3 py-1.5 rounded-md font-medium tabular-nums transition-colors duration-150 cursor-pointer ${
                selectedFpsFilter === fps
                  ? fps === 'Unsupported'
                    ? 'bg-[#b91c1c] text-white'
                    : 'bg-[#1f2de6] text-white'
                  : 'bg-[#eef0f3] text-[#525866] hover:text-[#0b0c0e]'
              }`}
            >
              {fps === 'All' ? 'Any' : fps === 'Unsupported' ? 'Unsupported' : `${fps} FPS`}
            </button>
          ))}
        </div>
      </div>

      {/* Advertisement */}
      <AdBanner format="leaderboard" slot="pubgframes_devices_catalog" />

      {/* Device Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {displayedDevices.map((device) => {
          const fps = device.maxSupportedFps;
          const isUnsupported = fps === 0 || device.isUnsupportedHardware;

          return (
            <div
              key={device.id}
              className="p-5 rounded-lg bg-[#ffffff] border border-[#e2e5ea] hover:border-[#c5cbd4] transition-colors duration-150 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[13px] font-medium text-[#525866]">
                    {device.brand}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded text-[13px] font-semibold tabular-nums ${
                      isUnsupported
                        ? 'bg-[#fee2e2] text-[#b91c1c]'
                        : fps >= 120
                        ? 'bg-[#e0e7ff] text-[#1f2de6]'
                        : fps >= 90
                        ? 'bg-[#dcfce7] text-[#15803d]'
                        : 'bg-[#eef0f3] text-[#0b0c0e]'
                    }`}
                  >
                    {isUnsupported ? 'Unsupported' : `${fps} FPS max`}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#0b0c0e] leading-snug">
                    <Link href={`/devices/${device.brandSlug}/${device.slug}`} className="hover:text-[#1f2de6]">
                      {formatDeviceName(device.brand, device.model)}
                    </Link>
                  </h3>
                  <p className="text-[14px] text-[#525866] mt-0.5 truncate">
                    {device.chipset}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 text-[13px] tabular-nums">
                  <div className="p-2.5 rounded bg-[#f6f7f9]">
                    <span className="text-[#525866] block">Refresh rate</span>
                    <span className="text-[#0b0c0e] font-medium">{device.displayRefreshRate} Hz</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#f6f7f9]">
                    <span className="text-[#525866] block">Smooth FPS</span>
                    <span className="text-[#0b0c0e] font-medium">
                      {isUnsupported ? '0 FPS' : `${device.graphicsModes.Smooth.estimatedFps} FPS (${device.graphicsModes.Smooth.stabilityScore}%)`}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 flex items-center justify-between text-[14px]">
                <Link
                  href={`/compare?phone1=${device.id}`}
                  className="text-[#525866] hover:text-[#0b0c0e] font-medium"
                >
                  Compare
                </Link>

                <Link
                  href={`/devices/${device.brandSlug}/${device.slug}`}
                  className="text-[#1f2de6] font-medium hover:underline"
                >
                  View specs
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      {filteredDevices.length > visibleCount && (
        <div className="text-center pt-4">
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => prev + 48)}
            className="px-6 py-3 rounded-md bg-[#ffffff] border border-[#d6dbe3] hover:border-[#0b0c0e] text-[#0b0c0e] font-medium text-[15px] transition-colors duration-150 cursor-pointer"
          >
            Show {Math.min(48, filteredDevices.length - visibleCount)} more devices ({filteredDevices.length - visibleCount} remaining)
          </button>
        </div>
      )}

      {filteredDevices.length === 0 && (
        <div className="text-center py-16 bg-[#ffffff] rounded-lg border border-[#e2e5ea] space-y-4">
          <p className="text-[#525866] text-base">No phones matched your current search or filters.</p>
          <button
            type="button"
            onClick={() => {
              setSearch('');
              setSelectedBrand('All');
              setSelectedFpsFilter('All');
              setOnlyGamingPhones(false);
            }}
            className="px-5 py-2.5 rounded-md bg-[#1f2de6] text-white font-medium text-sm cursor-pointer"
          >
            Reset all filters
          </button>
        </div>
      )}
    </div>
  );
}
