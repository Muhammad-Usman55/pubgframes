'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Smartphone, Gamepad2, Search, Zap, CheckCircle2, AlertTriangle, ArrowRight, Info, ShieldCheck, Thermometer, BatteryCharging, Sliders, ExternalLink } from 'lucide-react';
import { ALL_BRANDS, DEVICES_DATA, calculateFps } from '@/data/devices';
import { DeviceInfo, GraphicsTier } from '@/types/device';
import { FpsGauge } from './FpsGauge';
import Link from 'next/link';

export const FpsCheckerWidget = () => {
  // Default to POCO X6 Pro (widely popular budget 90 FPS phone)
  const [selectedDevice, setSelectedDevice] = useState<DeviceInfo>(DEVICES_DATA[0]);
  const [selectedGraphics, setSelectedGraphics] = useState<GraphicsTier>('Smooth');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedBrandFilter, setSelectedBrandFilter] = useState<string>('All');
  const [showDetailedReport, setShowDetailedReport] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredDevices = useMemo(() => {
    return DEVICES_DATA.filter((device) => {
      const matchesBrand = selectedBrandFilter === 'All' || device.brand === selectedBrandFilter;
      const matchesSearch =
        device.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        device.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        device.chipset.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesBrand && matchesSearch;
    });
  }, [selectedBrandFilter, searchQuery]);

  const fpsResult = useMemo(() => {
    return calculateFps(selectedDevice, selectedGraphics);
  }, [selectedDevice, selectedGraphics]);

  const handleCheckFps = () => {
    setShowDetailedReport(true);
  };

  const graphicsModes: GraphicsTier[] = ['Smooth', 'Balanced', 'HD', 'HDR', 'Ultra HD'];

  return (
    <section id="fps-calculator" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 scroll-mt-24">
      {/* Outer Card with Neon Green Glow Border */}
      <div className="relative rounded-3xl bg-[#101518] border border-[#39F56A]/25 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(57,245,106,0.1)] p-6 sm:p-8 lg:p-10 overflow-hidden">
        
        {/* Subtle background glow */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#39F56A]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#FFD400]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Heading & Doodle Arrow */}
          <div className="lg:col-span-4 space-y-4 relative">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#39F56A]/10 border border-[#39F56A]/30 text-[#39F56A] text-xs font-bold tracking-wide">
              <span>Try It Now</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              Check PUBG FPS <br />
              on Your Mobile
            </h2>

            <p className="text-sm text-gray-400 leading-relaxed">
              Enter your device details and find out how well it runs PUBG.
            </p>

            {/* Chipset preview badge for selected phone */}
            <div className="pt-2 hidden sm:block">
              <div className="p-3 rounded-xl bg-[#171D21] border border-white/5 text-xs space-y-1">
                <div className="text-gray-400">Selected Device:</div>
                <div className="font-bold text-white flex items-center justify-between">
                  <span>{selectedDevice.brand} {selectedDevice.model}</span>
                  <span className="text-[#39F56A] font-mono">{selectedDevice.maxSupportedFps} FPS Max</span>
                </div>
                <div className="text-gray-400 text-[11px] font-mono">{selectedDevice.chipset}</div>
              </div>
            </div>

            {/* Hand-drawn style curving arrow SVG pointing to the inputs */}
            <div className="hidden lg:block absolute -right-6 bottom-4 w-16 h-12 text-[#39F56A] opacity-80 pointer-events-none">
              <svg viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M10 45 C 35 50, 70 45, 85 20" />
                <path d="M72 15 L 87 20 L 82 35" />
              </svg>
            </div>
          </div>

          {/* Middle Column: Inputs & Button */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Step 1: Select Smartphone Dropdown / Search */}
            <div className="relative" ref={dropdownRef}>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                Select Smartphone
              </label>
              
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#171D21] border border-white/10 hover:border-[#39F56A]/50 text-left transition-colors focus:outline-none focus:border-[#39F56A]"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-8 h-8 rounded-lg bg-black/40 flex items-center justify-center text-gray-300 shrink-0">
                    <Smartphone className="w-4 h-4 text-[#FFD400]" />
                  </div>
                  <div className="truncate">
                    <div className="text-sm font-bold text-white truncate">
                      {selectedDevice.brand} {selectedDevice.model}
                    </div>
                    <div className="text-[11px] text-gray-400 font-mono truncate">
                      {selectedDevice.chipset}
                    </div>
                  </div>
                </div>
                <span className="text-gray-400 text-xs ml-2">▼</span>
              </button>

              {/* Autocomplete Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 z-50 bg-[#171D21] border border-white/15 rounded-2xl shadow-2xl p-3 max-h-80 overflow-y-auto">
                  {/* Search input inside dropdown */}
                  <div className="relative mb-3">
                    <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search phone (e.g. S24, POCO, iPhone)..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#39F56A]"
                      autoFocus
                    />
                  </div>

                  {/* Brand Filter Pills */}
                  <div className="flex gap-1.5 overflow-x-auto pb-2 mb-2 scrollbar-none text-[11px]">
                    <button
                      onClick={() => setSelectedBrandFilter('All')}
                      className={`px-2.5 py-1 rounded-full whitespace-nowrap font-medium ${
                        selectedBrandFilter === 'All'
                          ? 'bg-[#39F56A] text-black font-bold'
                          : 'bg-black/40 text-gray-400 hover:text-white'
                      }`}
                    >
                      All
                    </button>
                    {ALL_BRANDS.map((brand) => (
                      <button
                        key={brand}
                        onClick={() => setSelectedBrandFilter(brand)}
                        className={`px-2.5 py-1 rounded-full whitespace-nowrap font-medium ${
                          selectedBrandFilter === brand
                            ? 'bg-[#39F56A] text-black font-bold'
                            : 'bg-black/40 text-gray-400 hover:text-white'
                        }`}
                      >
                        {brand}
                      </button>
                    ))}
                  </div>

                  {/* Devices List */}
                  <div className="space-y-1">
                    {filteredDevices.map((device) => (
                      <button
                        key={device.id}
                        type="button"
                        onClick={() => {
                          setSelectedDevice(device);
                          setIsDropdownOpen(false);
                          setSearchQuery('');
                        }}
                        className={`w-full flex items-center justify-between p-2.5 rounded-lg text-left text-xs transition-colors ${
                          selectedDevice.id === device.id
                            ? 'bg-[#39F56A]/15 border border-[#39F56A]/40 text-white'
                            : 'hover:bg-white/5 text-gray-300'
                        }`}
                      >
                        <div>
                          <div className="font-bold text-white">{device.brand} {device.model}</div>
                          <div className="text-[10px] text-gray-400 font-mono">{device.chipset}</div>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-[#FFD400] font-bold">
                          {device.maxSupportedFps} FPS
                        </span>
                      </button>
                    ))}
                    {filteredDevices.length === 0 && (
                      <div className="p-4 text-center text-xs text-gray-400">
                        No smartphones found matching &quot;{searchQuery}&quot;
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Step 2: Select Graphics Mode */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                Select Graphics Mode
              </label>

              <div className="grid grid-cols-5 gap-1.5">
                {graphicsModes.map((mode) => {
                  const isSupported = selectedDevice.graphicsModes[mode]?.supported;
                  const isSelected = selectedGraphics === mode;
                  return (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => setSelectedGraphics(mode)}
                      className={`py-2 px-1 rounded-xl text-center transition-all ${
                        isSelected
                          ? 'bg-[#171D21] border-2 border-[#39F56A] text-white shadow-[0_0_15px_rgba(57,245,106,0.25)]'
                          : isSupported
                          ? 'bg-[#171D21] border border-white/5 text-gray-300 hover:bg-white/5'
                          : 'bg-[#171D21]/50 border border-white/5 text-gray-500 opacity-60'
                      }`}
                    >
                      <div className="text-[11px] font-bold leading-tight">{mode}</div>
                      <div className="text-[9px] font-mono mt-0.5">
                        {isSupported ? (
                          <span className={isSelected ? 'text-[#39F56A] font-bold' : 'text-gray-400'}>
                            {selectedDevice.graphicsModes[mode].estimatedFps} FPS
                          </span>
                        ) : (
                          <span className="text-red-400">Locked</span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Check FPS Now Button */}
            <button
              type="button"
              onClick={handleCheckFps}
              className="w-full flex items-center justify-center gap-2 bg-[#39F56A] hover:bg-[#34e060] text-black font-black text-base py-3.5 rounded-xl shadow-[0_0_25px_rgba(57,245,106,0.35)] hover:shadow-[0_0_35px_rgba(57,245,106,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Search className="w-5 h-5 stroke-[2.5]" />
              <span>Check FPS Now</span>
            </button>
          </div>

          {/* Right Column: Animated Gauge Meter */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center text-center p-4 rounded-2xl bg-[#080B0D]/70 border border-white/5">
            <h4 className="text-sm font-extrabold text-[#39F56A] tracking-tight mb-2">
              Get Your FPS Result in Seconds!
            </h4>

            {/* Custom Semicircular Gauge Meter */}
            <FpsGauge
              fps={fpsResult.estimatedFps}
              isUnsupported={!fpsResult.setting.supported}
              size={200}
            />

            <div className="mt-2 text-xs font-semibold text-gray-300">
              {fpsResult.statusDescription}
            </div>

            <button
              onClick={() => setShowDetailedReport(!showDetailedReport)}
              className="mt-3 text-xs font-bold text-[#FFD400] hover:underline flex items-center gap-1"
            >
              <span>{showDetailedReport ? 'Hide Diagnostics' : 'View Full Diagnostics'}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

        </div>

        {/* Detailed Performance Breakdown Panel (Expanded) */}
        {showDetailedReport && (
          <div className="mt-8 pt-8 border-t border-white/10 animate-in fade-in duration-300">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-bold text-[#39F56A] uppercase tracking-wider">
                  Verified Performance Benchmark
                </span>
                <h3 className="text-xl font-black text-white mt-0.5">
                  {selectedDevice.brand} {selectedDevice.model} • {selectedGraphics} Mode
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href={`/devices/${selectedDevice.brandSlug}/${selectedDevice.slug}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#171D21] border border-white/10 text-xs font-semibold text-white hover:border-[#FFD400]"
                >
                  <span>Full Device Specs</span>
                  <ExternalLink className="w-3 h-3 text-[#FFD400]" />
                </Link>
                <Link
                  href={`/compare?phone1=${selectedDevice.id}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFD400] text-black text-xs font-bold hover:bg-yellow-400"
                >
                  <span>Compare Phone</span>
                </Link>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-[#171D21] border border-white/5">
                <div className="text-xs text-gray-400">Frame Range</div>
                <div className="text-lg font-black text-white mt-1">
                  {fpsResult.setting.supported ? `${fpsResult.fpsRange[0]} - ${fpsResult.fpsRange[1]} FPS` : 'N/A'}
                </div>
                <div className="text-[11px] text-gray-500 mt-0.5">Hot-drop & vehicle load</div>
              </div>

              <div className="p-4 rounded-xl bg-[#171D21] border border-white/5">
                <div className="text-xs text-gray-400">Frame Stability</div>
                <div className="text-lg font-black text-[#39F56A] mt-1">
                  {fpsResult.setting.supported ? `${fpsResult.stability}%` : '0%'}
                </div>
                <div className="text-[11px] text-gray-500 mt-0.5">Consistency score</div>
              </div>

              <div className="p-4 rounded-xl bg-[#171D21] border border-white/5">
                <div className="text-xs text-gray-400">Thermal Throttling</div>
                <div className={`text-lg font-black mt-1 ${
                  fpsResult.setting.thermalRisk === 'Low'
                    ? 'text-green-400'
                    : fpsResult.setting.thermalRisk === 'Moderate'
                    ? 'text-yellow-400'
                    : 'text-red-400'
                }`}>
                  {fpsResult.setting.thermalRisk}
                </div>
                <div className="text-[11px] text-gray-500 mt-0.5">Over 30m match</div>
              </div>

              <div className="p-4 rounded-xl bg-[#171D21] border border-white/5">
                <div className="text-xs text-gray-400">Battery Consumption</div>
                <div className="text-lg font-black text-cyan-400 mt-1">
                  {fpsResult.setting.supported ? `~${fpsResult.setting.batteryDrainPerHour}% / hr` : 'N/A'}
                </div>
                <div className="text-[11px] text-gray-500 mt-0.5">50% screen brightness</div>
              </div>
            </div>

            {/* Recommendation & Transparent Source Note */}
            <div className="p-4 rounded-xl bg-[#171D21]/80 border border-white/5 space-y-3">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#39F56A] shrink-0 mt-0.5" />
                <div className="text-xs text-gray-300">
                  <strong className="text-white">Pro Recommendation:</strong> {fpsResult.recommendation}
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-white/5">
                <Info className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <div className="text-[11px] text-gray-400">
                  <strong className="text-gray-300">Benchmark Source:</strong> {fpsResult.benchmarkSource}. FPS values are estimates based on available device specifications and benchmark information. Actual performance may vary depending on game version, ambient room temperature, and battery charge level.
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
