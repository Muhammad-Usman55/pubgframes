'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Smartphone, Search, ShieldCheck, AlertTriangle, Copy, Check, ArrowUpRight, Flame, X } from 'lucide-react';
import { ALL_BRANDS, DEVICES_DATA, calculateFps, getThermalThrottledFps } from '@/data/devices';
import { searchDevicesWithFuzzy } from '@/utils/fuzzySearch';
import { formatDeviceName } from '@/utils/formatDeviceName';
import { DeviceInfo, GraphicsTier } from '@/types/device';
import { FpsGauge } from './FpsGauge';
import { soundEffects } from '@/utils/soundEffects';

export const FpsCheckerWidget = () => {
  const [selectedDevice, setSelectedDevice] = useState<DeviceInfo>(DEVICES_DATA[0]);
  const [selectedGraphics, setSelectedGraphics] = useState<GraphicsTier>('Smooth');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedBrandFilter, setSelectedBrandFilter] = useState<string>('All');
  const [gamingMinutes, setGamingMinutes] = useState<number>(0);
  const [copied, setCopied] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    };
  }, []);

  const filteredDevices = useMemo(() => {
    return searchDevicesWithFuzzy(DEVICES_DATA, searchQuery, {
      brandFilter: selectedBrandFilter,
      limit: 120
    });
  }, [selectedBrandFilter, searchQuery]);

  const baseFpsResult = useMemo(() => {
    return calculateFps(selectedDevice, selectedGraphics);
  }, [selectedDevice, selectedGraphics]);

  const thermalState = useMemo(() => {
    return getThermalThrottledFps(
      baseFpsResult.estimatedFps,
      baseFpsResult.setting.thermalRisk,
      gamingMinutes
    );
  }, [baseFpsResult.estimatedFps, baseFpsResult.setting.thermalRisk, gamingMinutes]);

  const currentDisplayFps = baseFpsResult.setting.supported ? thermalState.throttledFps : 0;

  const quickPickSlugs = [
    'galaxy-s24-ultra',
    'iphone-16-pro-max',
    'poco-x6-pro-5g',
    'redmi-note-12',
    'infinix-gt-20-pro'
  ];

  const quickPicks = useMemo(() => {
    return quickPickSlugs
      .map((s) => DEVICES_DATA.find((d) => d.slug === s))
      .filter((d): d is DeviceInfo => Boolean(d));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectedFullName = formatDeviceName(selectedDevice.brand, selectedDevice.model);

  const handleCopySummary = () => {
    soundEffects.playClick();
    const text = `PUBGFrames Summary for ${selectedFullName}
Graphics Mode: ${selectedGraphics}
Estimated FPS: ${currentDisplayFps} FPS (${baseFpsResult.setting.stabilityScore}% Stability)
Chipset: ${selectedDevice.chipset}
Check yours at https://pubgframes.com`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
      copyTimerRef.current = setTimeout(() => setCopied(false), 2200);
    }
  };

  const graphicsModes: GraphicsTier[] = ['Smooth', 'Balanced', 'HD', 'HDR', 'Ultra HD'];

  return (
    <section id="fps-calculator" className="max-w-[1440px] mx-auto px-4 sm:px-8 py-4 sm:py-6 scroll-mt-12">
      <div className="rounded-lg bg-[#ffffff] p-4 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">
        {/* Top Row: Heading & Quick Picks */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-1 sm:pb-2">
          <div className="space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] text-[#0b0c0e]">
              Check PUBG FPS on your mobile
            </h2>
            <p className="text-[15px] text-[#525866]">
              Type any model name (partial names or typos work) and switch graphics modes for instant results.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 reveal-on-scroll">
            <span className="text-sm font-medium text-[#3d4350] mr-1">Popular:</span>
            {quickPicks.map((dev) => (
              <button
                key={dev.id}
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  setSelectedDevice(dev);
                  setGamingMinutes(0);
                }}
                className={`px-2.5 sm:px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-150 cursor-pointer ${
                  selectedDevice.id === dev.id
                    ? 'bg-[#1f2de6] text-white'
                    : 'bg-[#eef0f3] text-[#0b0c0e] hover:bg-[#e2e5ea]'
                }`}
              >
                {dev.model}
              </button>
            ))}
          </div>
        </div>

        {/* Main Interactive Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left / Middle Controls */}
          <div data-ui="fps-controls" className="lg:col-span-7 space-y-6">
            {/* Phone Search & Selector */}
            <div className="relative" ref={dropdownRef}>
              <label
                htmlFor="device-picker-trigger"
                className="block text-sm font-medium text-[#0b0c0e] mb-2"
              >
                Phone or tablet model ({DEVICES_DATA.length.toLocaleString()} devices)
              </label>

              <button
                id="device-picker-trigger"
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  setIsDropdownOpen(!isDropdownOpen);
                }}
                className="w-full flex items-center justify-between p-3.5 rounded-md bg-[#eef0f3] hover:bg-[#e2e5ea] text-left transition-colors duration-150 cursor-pointer"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <Smartphone className="w-5 h-5 text-[#1f2de6] shrink-0" />
                  <div className="truncate">
                    <div className="text-base font-semibold text-[#0b0c0e] truncate">
                      {selectedFullName}
                    </div>
                    <div className="text-sm text-[#3d4350] truncate">
                      {selectedDevice.chipset} &middot; {selectedDevice.displayRefreshRate}Hz Display
                    </div>
                  </div>
                </div>
                <span className="text-[#0b0c0e] text-sm font-medium ml-3 shrink-0">
                  {isDropdownOpen ? 'Close' : 'Change'}
                </span>
              </button>

              {/* Search Dropdown Panel (floating overlay menu) */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 z-50 bg-[#ffffff] rounded-lg shadow-xl p-3 max-h-96 overflow-y-auto ring-1 ring-[#c5cbd4]"> {/* taste-skill-ignore */}
                  <div className="relative mb-3">
                    <Search className="w-4 h-4 text-[#525866] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Type any model or typo (e.g. note 12, s24)..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-9 py-2.5 text-base rounded-md bg-[#eef0f3] text-[#0b0c0e] placeholder-[#3d4350] focus:outline-none"
                      autoFocus
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery('')}
                        aria-label="Clear search query"
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#3d4350] hover:text-[#0b0c0e] p-1 cursor-pointer"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {/* Brand Filter Bar */}
                  <div className="flex gap-1.5 overflow-x-auto pb-2 mb-2 no-scrollbar">
                    <button
                      type="button"
                      onClick={() => {
                        soundEffects.playClick();
                        setSelectedBrandFilter('All');
                      }}
                      className={`px-3 py-1 rounded-md whitespace-nowrap text-[13px] font-medium cursor-pointer ${selectedBrandFilter === 'All'
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
                          soundEffects.playClick();
                          setSelectedBrandFilter(brand);
                        }}
                        className={`px-3 py-1 rounded-md whitespace-nowrap text-[13px] font-medium cursor-pointer ${selectedBrandFilter === brand
                          ? 'bg-[#0b0c0e] text-white'
                          : 'bg-[#eef0f3] text-[#525866] hover:text-[#0b0c0e]'
                          }`}
                      >
                        {brand}
                      </button>
                    ))}
                  </div>

                  {/* Matching Results */}
                  <div className="space-y-1">
                    {filteredDevices.map((device) => (
                      <button
                        key={device.id}
                        type="button"
                        onClick={() => {
                          soundEffects.playClick();
                          setSelectedDevice(device);
                          setIsDropdownOpen(false);
                          setSearchQuery('');
                        }}
                        className={`w-full flex items-center justify-between p-2.5 rounded-md text-left text-sm transition-colors duration-150 cursor-pointer ${selectedDevice.id === device.id
                          ? 'bg-[#1f2de6]/10 text-[#0b0c0e]'
                          : 'hover:bg-[#eef0f3] text-[#0b0c0e]'
                          }`}
                      >
                        <div className="truncate">
                          <div className="font-medium text-[#0b0c0e] truncate">
                            {formatDeviceName(device.brand, device.model)}
                          </div>
                          <div className="text-sm text-[#3d4350] truncate">{device.chipset}</div>
                        </div>
                        <span
                          className={`text-sm font-semibold tabular-nums px-2 py-0.5 rounded ml-2 shrink-0 ${device.maxSupportedFps === 0
                            ? 'bg-[#fee2e2] text-[#b91c1c]'
                            : 'bg-[#e2e5ea] text-[#0b0c0e]'
                            }`}
                        >
                          {device.maxSupportedFps === 0 ? 'Unsupported' : `${device.maxSupportedFps} FPS`}
                        </span>
                      </button>
                    ))}
                    {filteredDevices.length === 0 && (
                      <div className="p-4 text-center text-sm text-[#3d4350]">
                        No phones matched &ldquo;{searchQuery}&rdquo;. Try checking the model number or clearing brand filter.
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Graphics Mode Segmented Selector */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-[#0b0c0e]">Graphics preset</span>
                <span className="text-sm text-[#3d4350]">Select preset to see FPS cap</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {graphicsModes.map((mode) => {
                  const isSupported = selectedDevice.graphicsModes[mode]?.supported;
                  const isSelected = selectedGraphics === mode;
                  return (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => {
                        soundEffects.playClick();
                        setSelectedGraphics(mode);
                      }}
                      className={`py-2.5 px-3 rounded-md text-left last:col-span-2 sm:last:col-span-1 transition-colors duration-150 cursor-pointer ${
                        isSelected
                          ? 'bg-[#1f2de6] text-white'
                          : isSupported
                          ? 'bg-[#eef0f3] text-[#0b0c0e] hover:bg-[#e2e5ea]'
                          : 'bg-[#f6f7f9] text-[#3d4350] opacity-75'
                        }`}
                    >
                      <div className="text-base font-medium leading-tight">{mode}</div>
                      <div
                        className={`text-sm tabular-nums mt-0.5 ${isSelected
                          ? 'text-white/90'
                          : isSupported
                            ? 'text-[#3d4350]'
                            : 'text-[#b91c1c]'
                          }`}
                      >
                        {isSupported
                          ? `${selectedDevice.graphicsModes[mode].estimatedFps} FPS`
                          : 'Locked'}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Match Duration / Heat Simulator Slider */}
            {baseFpsResult.setting.supported && (
              <div className="p-4 rounded-md bg-[#eef0f3] space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-[#0b0c0e]">
                    <Flame className="w-4 h-4 text-[#b45309]" />
                    <span>Heat and throttling after continuous play</span>
                  </div>
                  <div className="text-sm tabular-nums text-[#0b0c0e]">
                    <strong>{gamingMinutes} mins</strong> &middot;{' '}
                    <span className={thermalState.temperature > 42 ? 'text-[#b91c1c] font-semibold' : 'text-[#166534] font-semibold'}>
                      {thermalState.temperature}°C est.
                    </span>
                  </div>
                </div>

                <input
                  type="range"
                  min="0"
                  max="60"
                  step="5"
                  aria-label="Continuous play minutes"
                  value={gamingMinutes}
                  onChange={(e) => setGamingMinutes(parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-[#d6dbe3] rounded-lg appearance-none cursor-pointer accent-[#1f2de6]"
                />

                <div className="flex justify-between text-sm text-[#3d4350] tabular-nums">
                  <span>0m</span>
                  <span>15m</span>
                  <span>30m</span>
                  <span>45m</span>
                  <span>60m</span>
                </div>
              </div>
            )}
          </div>

          {/* Right Panel: Instant Live Readout */}
          <div data-ui="fps-readout" className="lg:col-span-5 rounded-lg bg-[#eef0f3] p-5 sm:p-6 space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-[#3d4350]">Estimated live framerate</span>
              <button
                type="button"
                onClick={handleCopySummary}
                className="text-sm font-medium text-[#0b0c0e] bg-[#ffffff] hover:bg-[#e2e5ea] px-3 py-1.5 rounded-md inline-flex items-center gap-1.5 transition-colors duration-150 cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#166534]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy summary'}</span>
              </button>
            </div>

            <FpsGauge
              fps={currentDisplayFps}
              isUnsupported={!baseFpsResult.setting.supported || selectedDevice.maxSupportedFps === 0}
              label={`${selectedGraphics} FPS`}
            />

            <div className="text-center text-base font-medium text-[#0b0c0e]">
              {selectedDevice.maxSupportedFps === 0
                ? 'Insufficient hardware (Game unsupported)'
                : baseFpsResult.setting.supported
                  ? gamingMinutes > 0 && thermalState.throttlingPercent > 0
                    ? `Heat throttling drops FPS by ${thermalState.throttlingPercent}% at ${gamingMinutes}m`
                    : baseFpsResult.statusDescription
                  : 'Locked by PUBG Mobile client for this chipset'}
            </div>

            {/* 4 Key Live Numbers */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-md bg-[#ffffff]">
                <div className="text-sm text-[#3d4350]">Combat range</div>
                <div className="text-base font-semibold text-[#0b0c0e] tabular-nums mt-0.5">
                  {baseFpsResult.setting.supported
                    ? `${baseFpsResult.fpsRange[0]}–${baseFpsResult.fpsRange[1]} FPS`
                    : 'N/A'}
                </div>
              </div>
              <div className="p-3.5 rounded-md bg-[#ffffff]">
                <div className="text-sm text-[#3d4350]">Stability</div>
                <div className="text-base font-semibold text-[#166534] tabular-nums mt-0.5">
                  {baseFpsResult.setting.supported ? `${baseFpsResult.stability}%` : '0%'}
                </div>
              </div>
              <div className="p-3.5 rounded-md bg-[#ffffff]">
                <div className="text-sm text-[#3d4350]">Thermal risk</div>
                <div
                  className={`text-base font-semibold mt-0.5 ${baseFpsResult.setting.thermalRisk === 'Low'
                    ? 'text-[#166534]'
                    : baseFpsResult.setting.thermalRisk === 'Moderate'
                      ? 'text-[#b45309]'
                      : 'text-[#b91c1c]'
                    }`}
                >
                  {baseFpsResult.setting.thermalRisk}
                </div>
              </div>
              <div className="p-3.5 rounded-md bg-[#ffffff]">
                <div className="text-sm text-[#3d4350]">Battery draw</div>
                <div className="text-base font-semibold text-[#0b0c0e] tabular-nums mt-0.5">
                  {baseFpsResult.setting.supported
                    ? `~${baseFpsResult.setting.batteryDrainPerHour}% / hr`
                    : 'N/A'}
                </div>
              </div>
            </div>

            {/* Hardware Alerts / Recommendation */}
            {(selectedDevice.maxSupportedFps === 0 || selectedDevice.isUnsupportedHardware) ? (
              <div className="p-3.5 rounded-md bg-[#fee2e2] text-[#991b1b] text-base flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 shrink-0 mt-1" />
                <div>
                  <strong>Unsupported Device:</strong> Does not meet the 64-bit ARMv8 / 3GB+ RAM baseline needed to boot PUBG Mobile reliably.
                </div>
              </div>
            ) : (
              <div className="p-3.5 rounded-md bg-[#ffffff] text-base text-[#0b0c0e] flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#166534] shrink-0 mt-1" />
                <div>
                  <strong className="font-semibold">Tip:</strong> {baseFpsResult.recommendation}
                </div>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
              <Link
                href={`/devices/${selectedDevice.brandSlug}/${selectedDevice.slug}`}
                onClick={() => soundEffects.playClick()}
                className="text-base font-medium text-[#1f2de6] hover:underline inline-flex items-center gap-1"
              >
                <span>Open full hardware review</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href={`/compare?phone1=${selectedDevice.id}`}
                onClick={() => soundEffects.playClick()}
                className="text-sm font-medium text-[#0b0c0e] bg-[#ffffff] hover:bg-[#e2e5ea] px-3.5 py-2 rounded-md transition-colors duration-150"
              >
                Compare against another phone
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
