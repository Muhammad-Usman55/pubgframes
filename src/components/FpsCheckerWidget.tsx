'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  Smartphone,
  Gamepad2,
  Search,
  Zap,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Info,
  ShieldCheck,
  Thermometer,
  BatteryCharging,
  Sliders,
  ExternalLink,
  Share2,
  Copy,
  Clock,
  Flame,
  Check
} from 'lucide-react';
import { ALL_BRANDS, DEVICES_DATA, calculateFps, getThermalThrottledFps } from '@/data/devices';
import { DeviceInfo, GraphicsTier } from '@/types/device';
import { FpsGauge } from './FpsGauge';
import { soundEffects } from '@/utils/soundEffects';
import Link from 'next/link';

export const FpsCheckerWidget = () => {
  // Default to POCO X6 Pro
  const [selectedDevice, setSelectedDevice] = useState<DeviceInfo>(DEVICES_DATA[0]);
  const [selectedGraphics, setSelectedGraphics] = useState<GraphicsTier>('Smooth');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedBrandFilter, setSelectedBrandFilter] = useState<string>('All');
  
  // Interactive scanning simulation
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [showDetailedReport, setShowDetailedReport] = useState(true);
  
  // Interactive Thermal Throttling Simulator (Minutes Played)
  const [gamingMinutes, setGamingMinutes] = useState(0);
  const [copied, setCopied] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<NodeJS.Timeout[]>([]);

  // Close dropdown on outside click and cleanup all pending async timers on unmount
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
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

  // Base calculation result
  const baseFpsResult = useMemo(() => {
    return calculateFps(selectedDevice, selectedGraphics);
  }, [selectedDevice, selectedGraphics]);

  // Thermal throttle calculation based on slider
  const thermalState = useMemo(() => {
    return getThermalThrottledFps(
      baseFpsResult.estimatedFps,
      baseFpsResult.setting.thermalRisk,
      gamingMinutes
    );
  }, [baseFpsResult.estimatedFps, baseFpsResult.setting.thermalRisk, gamingMinutes]);

  const currentDisplayFps = baseFpsResult.setting.supported ? thermalState.throttledFps : 0;

  // Sound & Scanning trigger
  const handleCheckFps = () => {
    soundEffects.playScan();
    setIsAnalyzing(true);
    setScanStep(1);

    const t1 = setTimeout(() => {
      setScanStep(2);
    }, 250);

    const t2 = setTimeout(() => {
      setScanStep(3);
    }, 500);

    const t3 = setTimeout(() => {
      setIsAnalyzing(false);
      setShowDetailedReport(true);
      soundEffects.playSuccess();
    }, 750);

    timersRef.current.push(t1, t2, t3);
  };

  const handleCopySummary = () => {
    soundEffects.playClick();
    const text = `🎮 PUBGFrames Report for ${selectedDevice.brand} ${selectedDevice.model}:
Graphics Mode: ${selectedGraphics}
Estimated FPS: ${currentDisplayFps} FPS (${baseFpsResult.setting.stabilityScore}% Stability)
Chipset: ${selectedDevice.chipset}
Check your PUBG FPS free on: https://pubgframes.com`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      const t4 = setTimeout(() => setCopied(false), 2500);
      timersRef.current.push(t4);
    }
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
          
          {/* Left Column: Heading & Selected Device Info */}
          <div className="lg:col-span-4 space-y-4 relative">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#39F56A]/10 border border-[#39F56A]/30 text-[#39F56A] text-xs font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#39F56A] animate-ping" />
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
              <div className="p-3.5 rounded-xl bg-[#171D21] border border-white/10 text-xs space-y-1.5">
                <div className="text-gray-400 font-semibold flex items-center justify-between">
                  <span>Selected Hardware:</span>
                  <span className={`font-mono font-bold ${selectedDevice.maxSupportedFps === 0 ? 'text-red-400' : 'text-[#39F56A]'}`}>
                    {selectedDevice.maxSupportedFps === 0 ? 'UNSUPPORTED' : `${selectedDevice.maxSupportedFps} FPS Max`}
                  </span>
                </div>
                <div className="font-extrabold text-white text-sm">
                  {selectedDevice.brand} {selectedDevice.model}
                </div>
                <div className="text-gray-400 text-[11px] font-mono truncate">
                  {selectedDevice.chipset} • {selectedDevice.gpu}
                </div>
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
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                <span>Select Smartphone</span>
                <span className="text-[11px] text-[#FFD400] font-normal">{DEVICES_DATA.length}+ Verified Devices</span>
              </label>
              
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  setIsDropdownOpen(!isDropdownOpen);
                }}
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
                      placeholder="Search phone or chipset (e.g. S24, POCO, iPhone)..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#39F56A]"
                      autoFocus
                    />
                  </div>

                  {/* Brand Filter Pills */}
                  <div className="flex gap-1.5 overflow-x-auto pb-2 mb-2 scrollbar-none text-[11px]">
                    <button
                      onClick={() => {
                        soundEffects.playClick();
                        setSelectedBrandFilter('All');
                      }}
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
                        onClick={() => {
                          soundEffects.playClick();
                          setSelectedBrandFilter(brand);
                        }}
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
                          soundEffects.playClick();
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
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                          device.maxSupportedFps === 0
                            ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                            : 'bg-black/40 text-[#FFD400]'
                        }`}>
                          {device.maxSupportedFps === 0 ? 'UNSUPPORTED' : `${device.maxSupportedFps} FPS`}
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
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                <span>Select Graphics Mode</span>
                <span className="text-[11px] text-gray-400">Affects Texture & Shader Load</span>
              </label>

              <div className="grid grid-cols-5 gap-1.5">
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
              disabled={isAnalyzing}
              onClick={handleCheckFps}
              className={`w-full flex items-center justify-center gap-2 font-black text-base py-3.5 rounded-xl shadow-[0_0_25px_rgba(57,245,106,0.35)] hover:shadow-[0_0_35px_rgba(57,245,106,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ${
                isAnalyzing ? 'bg-[#39F56A]/70 text-black' : 'bg-[#39F56A] hover:bg-[#34e060] text-black'
              }`}
            >
              {isAnalyzing ? (
                <>
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  <span>
                    {scanStep === 1 && 'Scanning Chipset & GPU...'}
                    {scanStep === 2 && 'Querying In-Game Whitelist...'}
                    {scanStep === 3 && 'Synthesizing FPS Telemetry...'}
                  </span>
                </>
              ) : (
                <>
                  <Search className="w-5 h-5 stroke-[2.5]" />
                  <span>Check FPS Now</span>
                </>
              )}
            </button>
          </div>

          {/* Right Column: Animated Gauge Meter */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center text-center p-4 rounded-2xl bg-[#080B0D]/70 border border-white/5">
            <h4 className="text-sm font-extrabold text-[#39F56A] tracking-tight mb-2">
              Get Your FPS Result in Seconds!
            </h4>

            {/* Custom Semicircular Gauge Meter */}
            <FpsGauge
              fps={currentDisplayFps}
              isUnsupported={!baseFpsResult.setting.supported || selectedDevice.maxSupportedFps === 0}
              size={200}
            />

            <div className="mt-2 text-xs font-semibold text-gray-300">
              {selectedDevice.maxSupportedFps === 0
                ? 'Hardware Insufficient (PUBG Unsupported)'
                : baseFpsResult.setting.supported
                ? gamingMinutes > 0 && thermalState.throttlingPercent > 0
                  ? `Throttled by ${thermalState.throttlingPercent}% (${thermalState.temperature}°C)`
                  : baseFpsResult.statusDescription
                : 'Locked by PUBG Client'}
            </div>

            {/* Quick Share / Copy action */}
            <div className="flex items-center gap-2 mt-3">
              <button
                onClick={handleCopySummary}
                className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 flex items-center gap-1.5"
              >
                {copied ? <Check className="w-3 h-3 text-[#39F56A]" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Detailed Performance Breakdown Panel */}
        {showDetailedReport && (
          <div className="mt-8 pt-8 border-t border-white/10 space-y-6 animate-in fade-in duration-300">
            
            {/* Top Bar: Phone Title & Action Buttons */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#39F56A] uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Benchmark Telemetry</span>
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                  {selectedDevice.brand} {selectedDevice.model} • {selectedGraphics} Preset
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href={`/devices/${selectedDevice.brandSlug}/${selectedDevice.slug}`}
                  onClick={() => soundEffects.playClick()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#171D21] border border-white/10 text-xs font-semibold text-white hover:border-[#FFD400]"
                >
                  <span>Full Device Specs</span>
                  <ExternalLink className="w-3 h-3 text-[#FFD400]" />
                </Link>
                <Link
                  href={`/compare?phone1=${selectedDevice.id}`}
                  onClick={() => soundEffects.playClick()}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FFD400] text-black text-xs font-extrabold hover:bg-yellow-400"
                >
                  <span>Compare Phone</span>
                </Link>
              </div>
            </div>

            {/* Unsupported / Hardware Insufficient Notice */}
            {(selectedDevice.maxSupportedFps === 0 || selectedDevice.isUnsupportedHardware) && (
              <div className="p-4 sm:p-5 rounded-2xl bg-red-950/40 border border-red-500/40 flex items-start gap-3.5">
                <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-sm font-extrabold text-red-400 uppercase tracking-wider">
                    CRITICAL: Unsupported Hardware — PUBG Mobile Cannot Run
                  </h4>
                  <p className="text-xs text-gray-200 leading-relaxed">
                    <strong>{selectedDevice.brand} {selectedDevice.model}</strong> does not meet the minimum hardware and architecture requirements (ARMv8 64-bit OS &amp; 3GB+ RAM). The game client will fail to boot, freeze on the Tencent/Krafton splash screen, or crash during match initialization.
                  </p>
                  <p className="text-[11px] text-gray-400">
                    Recommendation: Use a device with at least 40–60 FPS capability (such as Galaxy A15, A25, or A55) for playable frame rates.
                  </p>
                </div>
              </div>
            )}

            {/* Real-Time Thermal Throttling Simulator Slider */}
            {baseFpsResult.setting.supported && (
              <div className="p-4 sm:p-5 rounded-2xl bg-[#171D21] border border-white/5 space-y-3">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Flame className={`w-4 h-4 ${gamingMinutes > 25 ? 'text-red-500 animate-pulse' : 'text-yellow-400'}`} />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Thermal Throttling Time Simulator
                    </span>
                  </div>
                  <div className="text-xs font-mono text-gray-300 flex items-center gap-3">
                    <span>Session: <strong className="text-[#FFD400]">{gamingMinutes} mins</strong></span>
                    <span>Battery Temp: <strong className={thermalState.temperature > 42 ? 'text-red-400' : 'text-green-400'}>{thermalState.temperature}°C</strong></span>
                  </div>
                </div>

                <div className="space-y-1">
                  <input
                    type="range"
                    min="0"
                    max="60"
                    step="5"
                    value={gamingMinutes}
                    onChange={(e) => {
                      setGamingMinutes(parseInt(e.target.value));
                    }}
                    className="w-full h-2 bg-black/60 rounded-lg appearance-none cursor-pointer accent-[#39F56A]"
                  />
                  <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                    <span>0m (Cold / Lobby)</span>
                    <span>15m (Drop / Early)</span>
                    <span>30m (Mid-Game Fights)</span>
                    <span>45m (Final Zones)</span>
                    <span>60m (Back-to-back Scrims)</span>
                  </div>
                </div>

                <p className="text-[11px] text-gray-400 leading-normal">
                  Drag the slider to preview how device heating impacts your frame rate over long competitive sessions.
                  {thermalState.throttlingPercent > 0 ? (
                    <span className="text-yellow-300 ml-1">
                      Frame rate dips to ~{thermalState.throttledFps} FPS due to SoC thermal protection.
                    </span>
                  ) : (
                    <span className="text-green-400 ml-1">
                      Cooling system maintains full performance without significant throttling.
                    </span>
                  )}
                </p>
              </div>
            )}

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-[#171D21] border border-white/5">
                <div className="text-xs text-gray-400">Frame Range</div>
                <div className="text-lg font-black text-white mt-1">
                  {baseFpsResult.setting.supported ? `${baseFpsResult.fpsRange[0]} - ${baseFpsResult.fpsRange[1]} FPS` : 'N/A'}
                </div>
                <div className="text-[11px] text-gray-500 mt-0.5">Combat & vehicle stress</div>
              </div>

              <div className="p-4 rounded-xl bg-[#171D21] border border-white/5">
                <div className="text-xs text-gray-400">Frame Stability</div>
                <div className="text-lg font-black text-[#39F56A] mt-1">
                  {baseFpsResult.setting.supported ? `${baseFpsResult.stability}%` : '0%'}
                </div>
                <div className="text-[11px] text-gray-500 mt-0.5">Frame-time consistency</div>
              </div>

              <div className="p-4 rounded-xl bg-[#171D21] border border-white/5">
                <div className="text-xs text-gray-400">Thermal Profile</div>
                <div className={`text-lg font-black mt-1 ${
                  baseFpsResult.setting.thermalRisk === 'Low'
                    ? 'text-green-400'
                    : baseFpsResult.setting.thermalRisk === 'Moderate'
                    ? 'text-yellow-400'
                    : 'text-red-400'
                }`}>
                  {baseFpsResult.setting.thermalRisk} Risk
                </div>
                <div className="text-[11px] text-gray-500 mt-0.5">30m tournament test</div>
              </div>

              <div className="p-4 rounded-xl bg-[#171D21] border border-white/5">
                <div className="text-xs text-gray-400">Battery Consumption</div>
                <div className="text-lg font-black text-cyan-400 mt-1">
                  {baseFpsResult.setting.supported ? `~${baseFpsResult.setting.batteryDrainPerHour}% / hr` : 'N/A'}
                </div>
                <div className="text-[11px] text-gray-500 mt-0.5">Average cellular load</div>
              </div>
            </div>

            {/* Recommendation & Transparent Source Note */}
            <div className="p-4 rounded-xl bg-[#171D21]/80 border border-white/5 space-y-3">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#39F56A] shrink-0 mt-0.5" />
                <div className="text-xs text-gray-300">
                  <strong className="text-white">Pro Recommendation:</strong> {baseFpsResult.recommendation}
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-white/5">
                <Info className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <div className="text-[11px] text-gray-400">
                  <strong className="text-gray-300">Benchmark Source:</strong> {baseFpsResult.benchmarkSource}. Values represent verified technical estimates. Actual performance may vary with game updates, background tasks, and ambient temperatures.
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
