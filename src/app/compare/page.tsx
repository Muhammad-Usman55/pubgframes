'use client';

import { useState, useMemo, Suspense, useRef, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { DEVICES_DATA, ALL_BRANDS } from '@/data/devices';
import { searchDevicesWithFuzzy } from '@/utils/fuzzySearch';
import { formatDeviceName } from '@/utils/formatDeviceName';
import { trackSearchQuery } from '@/lib/analytics';
import { DeviceInfo, GraphicsTier } from '@/types/device';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { ArrowLeftRight, Share2, Check, Search, Smartphone, X } from 'lucide-react';
import { soundEffects } from '@/utils/soundEffects';
import Link from 'next/link';
import { AdBanner } from '@/components/AdBanner';

const GRAPHICS_TIERS: GraphicsTier[] = ['Smooth', 'Balanced', 'HD', 'HDR', 'Ultra HD'];

function SearchableDeviceSelect({
  label,
  selected,
  onSelect,
  accentColor,
  inputId
}: {
  label: string;
  selected: DeviceInfo;
  onSelect: (d: DeviceInfo) => void;
  accentColor: string;
  inputId: string;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [brandFilter, setBrandFilter] = useState('All');
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const matches = useMemo(
    () => searchDevicesWithFuzzy(DEVICES_DATA, query, { brandFilter, limit: 120 }),
    [query, brandFilter]
  );

  return (
    <div ref={ref} data-ui="compare-picker" className="relative p-4 sm:p-5 rounded-lg bg-[#ffffff] space-y-3">
      <div className="flex items-center justify-between gap-2">
        <label htmlFor={inputId} className="text-sm font-semibold" style={{ color: accentColor }}>
          {label} ({DEVICES_DATA.length.toLocaleString()} devices)
        </label>
        <span className="text-sm font-semibold tabular-nums px-2.5 py-0.5 rounded bg-[#eef0f3] text-[#0b0c0e]">
          {selected.maxSupportedFps === 0 ? 'Unsupported' : `${selected.maxSupportedFps} FPS Max`}
        </span>
      </div>

      {/* Direct Search Input ABOVE Selected Device */}
      <div className="relative">
        <Search className="w-4 h-4 text-[#3d4350] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          ref={inputRef}
          id={inputId}
          type="text"
          placeholder={`Search ${label.toLowerCase()} (e.g. note 12, s24, poco)...`}
          value={query}
          onFocus={() => setOpen(true)}
          onClick={() => setOpen(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          className="w-full pl-10 pr-10 py-2.5 text-base rounded-md bg-[#eef0f3] text-[#0b0c0e] placeholder-[#3d4350] focus:outline-none focus:ring-2 focus:ring-[#1f2de6]"
          autoComplete="off"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              inputRef.current?.focus();
            }}
            aria-label={`Clear ${label} search`}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#3d4350] hover:text-[#0b0c0e] p-1 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        {/* Live Dropdown below Search Input */}
        {open && (
          <div className="absolute left-0 right-0 top-full mt-2 z-50 bg-[#ffffff] rounded-lg shadow-xl p-3 max-h-80 overflow-y-auto ring-1 ring-[#c5cbd4]"> {/* taste-skill-ignore */}
            <div className="flex items-center justify-between gap-2 pb-2 mb-2">
              <span className="text-sm font-medium text-[#3d4350]">
                {query.trim()
                  ? `${matches.length} matching phone${matches.length === 1 ? '' : 's'}`
                  : 'Filter by brand or select a phone'}
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-[#0b0c0e] hover:text-[#1f2de6] px-2 py-0.5 rounded cursor-pointer"
              >
                Close
              </button>
            </div>

            <div className="flex gap-1.5 overflow-x-auto pb-2 mb-2 no-scrollbar">
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  setBrandFilter('All');
                }}
                className={`px-2.5 py-1 rounded-md whitespace-nowrap text-sm font-medium cursor-pointer ${brandFilter === 'All'
                  ? 'bg-[#0b0c0e] text-white'
                  : 'bg-[#eef0f3] text-[#3d4350] hover:text-[#0b0c0e]'
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
                    setBrandFilter(brand);
                  }}
                  className={`px-2.5 py-1 rounded-md whitespace-nowrap text-sm font-medium cursor-pointer ${brandFilter === brand
                    ? 'bg-[#0b0c0e] text-white'
                    : 'bg-[#eef0f3] text-[#3d4350] hover:text-[#0b0c0e]'
                    }`}
                >
                  {brand}
                </button>
              ))}
            </div>

            <div className="space-y-1">
              {matches.map((d) => (
                <button
                  key={`${d.id}-${d.slug}`}
                  type="button"
                  onClick={() => {
                    soundEffects.playClick();
                    trackSearchQuery(formatDeviceName(d.brand, d.model), matches.length, d.id);
                    onSelect(d);
                    setOpen(false);
                    setQuery('');
                  }}
                  className={`w-full flex items-center justify-between p-2 rounded text-left text-sm cursor-pointer ${selected.id === d.id
                    ? 'bg-[#1f2de6]/10 text-[#0b0c0e]'
                    : 'hover:bg-[#eef0f3] text-[#0b0c0e]'
                    }`}
                >
                  <div className="truncate">
                    <div className="font-medium text-[#0b0c0e] truncate">
                      {formatDeviceName(d.brand, d.model)}
                    </div>
                    <div className="text-sm text-[#3d4350] truncate">{d.chipset}</div>
                  </div>
                  <span
                    className={`text-sm font-medium tabular-nums px-2 py-0.5 rounded ml-2 shrink-0 ${d.maxSupportedFps === 0
                      ? 'bg-[#fee2e2] text-[#b91c1c]'
                      : 'bg-[#e2e5ea] text-[#0b0c0e]'
                      }`}
                  >
                    {d.maxSupportedFps === 0 ? 'Unsupported' : `${d.maxSupportedFps} FPS`}
                  </span>
                </button>
              ))}
              {matches.length === 0 && (
                <div className="p-4 text-center text-sm text-[#3d4350]">
                  No phones matched &ldquo;{query}&rdquo;. Try checking the model name or clearing brand filter.
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Currently Selected Device Card BELOW Search Input */}
      <div
        onClick={() => {
          setOpen(!open);
          inputRef.current?.focus();
        }}
        className="w-full p-3 rounded-md bg-[#eef0f3] hover:bg-[#e2e5ea] text-left flex items-center justify-between transition-colors duration-150 cursor-pointer"
      >
        <div className="flex items-center gap-2.5 overflow-hidden">
          <Smartphone className="w-4 h-4 shrink-0" style={{ color: accentColor }} />
          <div className="truncate">
            <div className="text-base font-semibold text-[#0b0c0e] truncate">
              {formatDeviceName(selected.brand, selected.model)}
            </div>
            <div className="text-sm text-[#3d4350] truncate">
              {selected.chipset} &middot; {selected.displayRefreshRate}Hz
            </div>
          </div>
        </div>
        <span className="text-sm font-medium text-[#1f2de6] ml-3 shrink-0 px-2.5 py-1 rounded bg-[#ffffff]">
          {open ? 'Close' : 'Browse'}
        </span>
      </div>
    </div>
  );
}

function CompareContent() {
  const searchParams = useSearchParams();
  const phone1Param = searchParams.get('phone1');
  const phone2Param = searchParams.get('phone2');

  const initialPhone1 =
    DEVICES_DATA.find((d) => d.id === phone1Param || d.slug === phone1Param) || DEVICES_DATA[0];
  const initialPhone2 =
    DEVICES_DATA.find((d) => d.id === phone2Param || d.slug === phone2Param) || DEVICES_DATA[1];

  const [deviceA, setDeviceA] = useState<DeviceInfo>(initialPhone1);
  const [deviceB, setDeviceB] = useState<DeviceInfo>(initialPhone2);
  const [copiedLink, setCopiedLink] = useState(false);
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    };
  }, []);

  const handleSwap = () => {
    soundEffects.playClick();
    setDeviceA(deviceB);
    setDeviceB(deviceA);
  };

  const handleShare = () => {
    soundEffects.playClick();
    const url = `${window.location.origin}/compare?phone1=${deviceA.id}&phone2=${deviceB.id}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopiedLink(true);
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
      copyTimerRef.current = setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const chartData = useMemo(() => {
    return GRAPHICS_TIERS.map((tier) => {
      const fpsA = deviceA.graphicsModes[tier]?.supported ? deviceA.graphicsModes[tier].estimatedFps : 0;
      const fpsB = deviceB.graphicsModes[tier]?.supported ? deviceB.graphicsModes[tier].estimatedFps : 0;
      return {
        mode: tier,
        deviceA: fpsA,
        deviceB: fpsB
      };
    });
  }, [deviceA, deviceB]);

  const presetBattles = [
    { name: 'Flagship 120 FPS Showdown', p1: 'samsung-galaxy-s24-ultra', p2: 'apple-iphone-16-pro-max' },
    { name: 'Budget 90 FPS Titans', p1: 'poco-x6-pro', p2: 'infinix-gt-20-pro' },
    { name: 'Snapdragon vs Dimensity', p1: 'poco-f6-pro', p2: 'poco-x6-pro' }
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-8">
      <div className="space-y-3">
        <h1 className="text-[32px] sm:text-[48px] font-semibold tracking-[-0.025em] text-[#0b0c0e] leading-tight">
          Compare PUBG Mobile Gaming Performance
        </h1>
        <p className="text-base sm:text-xl text-[#3d4350] max-w-[54ch]">
          Put any two smartphones or tablets side by side across graphics presets, chipsets, thermal stability, and battery draw.
        </p>

        <div className="flex flex-wrap items-center gap-2 pt-2 text-sm">
          <span className="text-[#3d4350] font-medium mr-1">Quick matchups:</span>
          {presetBattles.map((battle, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                soundEffects.playClick();
                const d1 = DEVICES_DATA.find((d) => d.id === battle.p1);
                const d2 = DEVICES_DATA.find((d) => d.id === battle.p2);
                if (d1) setDeviceA(d1);
                if (d2) setDeviceB(d2);
              }}
              className="px-3 py-1.5 rounded-md bg-[#e2e5ea] hover:bg-[#d5d9e0] text-[#0b0c0e] font-medium transition-colors duration-150 cursor-pointer"
            >
              {battle.name}
            </button>
          ))}
        </div>
      </div>

      {/* Device Pickers */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SearchableDeviceSelect
            label="Device 1"
            inputId="compare-search-1"
            selected={deviceA}
            onSelect={setDeviceA}
            accentColor="#1f2de6"
          />
          <SearchableDeviceSelect
            label="Device 2"
            inputId="compare-search-2"
            selected={deviceB}
            onSelect={setDeviceB}
            accentColor="#166534"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleSwap}
            className="px-4 py-2 rounded-md bg-[#ffffff] hover:bg-[#e2e5ea] text-sm font-medium text-[#0b0c0e] inline-flex items-center gap-2 transition-colors duration-150 cursor-pointer"
          >
            <ArrowLeftRight className="w-4 h-4" />
            <span>Swap devices</span>
          </button>

          <button
            type="button"
            onClick={handleShare}
            className="px-4 py-2 rounded-md bg-[#ffffff] hover:bg-[#e2e5ea] text-sm font-medium text-[#0b0c0e] inline-flex items-center gap-2 transition-colors duration-150 cursor-pointer"
          >
            {copiedLink ? <Check className="w-4 h-4 text-[#166534]" /> : <Share2 className="w-4 h-4" />}
            <span>{copiedLink ? 'Comparison link copied' : 'Share comparison link'}</span>
          </button>
        </div>
      </div>

      {/* FPS Bar Chart */}
      <div className="p-4 sm:p-6 rounded-lg bg-[#ffffff] space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-[#0b0c0e]">FPS by graphics preset</h2>
          <span className="text-sm text-[#3d4350]">Higher is smoother</span>
        </div>

        <div className="h-60 sm:h-72 w-full pt-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 10, right: 10, left: -16, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e5ea" />
              <XAxis dataKey="mode" interval={0} stroke="#3d4350" tick={{ fill: '#3d4350', fontSize: 13 }} />
              <YAxis stroke="#3d4350" tick={{ fill: '#3d4350', fontSize: 13 }} domain={[0, 120]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #d6dbe3',
                  borderRadius: '6px',
                  color: '#0b0c0e',
                  fontSize: '13px'
                }}
              />
              <Legend wrapperStyle={{ fontSize: '13px', paddingTop: '10px' }} />
              <Bar
                dataKey="deviceA"
                name={formatDeviceName(deviceA.brand, deviceA.model)}
                fill="#1f2de6"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="deviceB"
                name={formatDeviceName(deviceB.brand, deviceB.model)}
                fill="#166534"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="space-y-2">
        <p className="sm:hidden text-sm font-medium text-[#3d4350]">
          Swipe table sideways to compare full specs &rarr;
        </p>
        <div className="rounded-lg bg-[#ffffff] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[540px] text-left text-base">
              <thead>
                <tr className="bg-[#e2e5ea]/60">
                  <th className="p-4 text-[#3d4350] font-medium w-1/3">Specification</th>
                  <th className="p-4 text-[#1f2de6] font-semibold w-1/3">{formatDeviceName(deviceA.brand, deviceA.model)}</th>
                  <th className="p-4 text-[#166534] font-semibold w-1/3">{formatDeviceName(deviceB.brand, deviceB.model)}</th>
                </tr>
              </thead>
              <tbody className="tabular-nums">
                <tr>
                  <td className="p-4 text-[#3d4350]">Processor</td>
                  <td className="p-4 text-[#0b0c0e] font-medium">{deviceA.chipset}</td>
                  <td className="p-4 text-[#0b0c0e] font-medium">{deviceB.chipset}</td>
                </tr>
                <tr>
                  <td className="p-4 text-[#3d4350]">GPU</td>
                  <td className="p-4 text-[#0b0c0e]">{deviceA.gpu}</td>
                  <td className="p-4 text-[#0b0c0e]">{deviceB.gpu}</td>
                </tr>
                <tr>
                  <td className="p-4 text-[#3d4350]">Max supported FPS</td>
                  <td className="p-4 font-semibold text-[#1f2de6]">{deviceA.maxSupportedFps === 0 ? 'Unsupported' : `${deviceA.maxSupportedFps} FPS`}</td>
                  <td className="p-4 font-semibold text-[#166534]">{deviceB.maxSupportedFps === 0 ? 'Unsupported' : `${deviceB.maxSupportedFps} FPS`}</td>
                </tr>
                <tr>
                  <td className="p-4 text-[#3d4350]">Display</td>
                  <td className="p-4 text-[#0b0c0e]">{deviceA.displayRefreshRate} Hz ({deviceA.screenSize})</td>
                  <td className="p-4 text-[#0b0c0e]">{deviceB.displayRefreshRate} Hz ({deviceB.screenSize})</td>
                </tr>
                <tr>
                  <td className="p-4 text-[#3d4350]">AnTuTu score</td>
                  <td className="p-4 text-[#0b0c0e]">{deviceA.antutuScore?.toLocaleString() || 'N/A'}</td>
                  <td className="p-4 text-[#0b0c0e]">{deviceB.antutuScore?.toLocaleString() || 'N/A'}</td>
                </tr>
                <tr>
                  <td className="p-4 text-[#3d4350]">Smooth FPS & stability</td>
                  <td className="p-4 font-medium text-[#0b0c0e]">
                    {deviceA.graphicsModes.Smooth.supported ? `${deviceA.graphicsModes.Smooth.estimatedFps} FPS (${deviceA.graphicsModes.Smooth.stabilityScore}%)` : 'Unsupported'}
                  </td>
                  <td className="p-4 font-medium text-[#0b0c0e]">
                    {deviceB.graphicsModes.Smooth.supported ? `${deviceB.graphicsModes.Smooth.estimatedFps} FPS (${deviceB.graphicsModes.Smooth.stabilityScore}%)` : 'Unsupported'}
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-[#3d4350]">Cooling hardware</td>
                  <td className="p-4 text-[#3d4350]">{deviceA.coolingSystem}</td>
                  <td className="p-4 text-[#3d4350]">{deviceB.coolingSystem}</td>
                </tr>
                <tr>
                  <td className="p-4 text-[#3d4350]">Gyroscope</td>
                  <td className="p-4 text-[#0b0c0e]">{deviceA.gyroscope}</td>
                  <td className="p-4 text-[#0b0c0e]">{deviceB.gyroscope}</td>
                </tr>
                <tr>
                  <td className="p-4 text-[#3d4350]">Battery & drain</td>
                  <td className="p-4 text-[#0b0c0e]">{deviceA.batteryCapacity} mAh (~{deviceA.graphicsModes.Smooth.batteryDrainPerHour}%/hr)</td>
                  <td className="p-4 text-[#0b0c0e]">{deviceB.batteryCapacity} mAh (~{deviceB.graphicsModes.Smooth.batteryDrainPerHour}%/hr)</td>
                </tr>
                <tr>
                  <td className="p-4 text-[#3d4350]">Gaming score</td>
                  <td className="p-4 font-semibold text-[#1f2de6]">{deviceA.overallGamingRating} / 10</td>
                  <td className="p-4 font-semibold text-[#166534]">{deviceB.overallGamingRating} / 10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Verdict */}
      <div className="p-5 sm:p-8 rounded-lg bg-[#e2e5ea] space-y-3">
        <h3 className="text-xl font-semibold text-[#0b0c0e]">Comparison summary</h3>
        <p className="text-base text-[#0b0c0e] leading-relaxed">
          {deviceA.overallGamingRating > deviceB.overallGamingRating
            ? `${formatDeviceName(deviceA.brand, deviceA.model)} leads with ${deviceA.maxSupportedFps} FPS support and stronger sustained performance (${deviceA.overallGamingRating}/10 vs ${deviceB.overallGamingRating}/10). ${deviceA.verdict}`
            : deviceB.overallGamingRating > deviceA.overallGamingRating
              ? `${formatDeviceName(deviceB.brand, deviceB.model)} takes the win with ${deviceB.maxSupportedFps} FPS capability and better sustained stability (${deviceB.overallGamingRating}/10 vs ${deviceA.overallGamingRating}/10). ${deviceB.verdict}`
              : `Both devices are closely matched with an identical ${deviceA.overallGamingRating}/10 rating. Pick based on display size, ergonomics, and battery capacity.`}
        </p>

        <div className="flex flex-wrap gap-5 pt-2 text-sm">
          <Link href={`/devices/${deviceA.brandSlug}/${deviceA.slug}`} className="font-medium text-[#1f2de6] hover:underline">
            Read {formatDeviceName(deviceA.brand, deviceA.model)} review
          </Link>
          <Link href={`/devices/${deviceB.brandSlug}/${deviceB.slug}`} className="font-medium text-[#14532d] hover:underline">
            Read {formatDeviceName(deviceB.brand, deviceB.model)} review
          </Link>
        </div>
      </div>

      <AdBanner format="leaderboard" slot="pubgframes_compare_bottom" />
    </div>
  );
}

export default function ComparePage() {
  return (
    <Suspense fallback={<div className="max-w-[1440px] mx-auto p-12 text-center text-[#525866]">Loading comparison...</div>}>
      <CompareContent />
    </Suspense>
  );
}
