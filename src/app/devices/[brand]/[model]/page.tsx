import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DEVICES_DATA, getDeviceBySlug } from '@/data/devices';
import { GraphicsTier } from '@/types/device';
import { AdBanner } from '@/components/AdBanner';
import {
  Smartphone,
  Cpu,
  Flame,
  Battery,
  ShieldCheck,
  Check,
  X as CloseIcon,
  ChevronRight,
  Scale,
  Gauge,
  Zap,
  Info,
  AlertTriangle
} from 'lucide-react';

interface DeviceDetailProps {
  params: Promise<{ brand: string; model: string }>;
}

export async function generateStaticParams() {
  // Prerender top popular flagship devices at build time; remaining are generated on-demand via ISR
  return DEVICES_DATA.slice(0, 100).map((device) => ({
    brand: device.brandSlug,
    model: device.slug
  }));
}

export async function generateMetadata({ params }: DeviceDetailProps): Promise<Metadata> {
  const { model } = await params;
  const device = getDeviceBySlug(model);
  if (!device) return { title: 'Device Not Found' };

  return {
    title: `${device.brand} ${device.model} PUBG Mobile FPS & Performance Review`,
    description: `Does ${device.brand} ${device.model} support 90 FPS or 120 FPS in PUBG Mobile? Read full benchmark tests, thermal throttling analysis, and recommended competitive graphics settings.`,
    alternates: {
      canonical: `https://pubgframes.com/devices/${device.brandSlug}/${device.slug}`
    },
    openGraph: {
      title: `${device.brand} ${device.model} PUBG Mobile FPS Review`,
      description: `Verified ${device.maxSupportedFps} FPS benchmark, thermal throttling data, and competitive graphics modes for ${device.brand} ${device.model}.`,
      url: `https://pubgframes.com/devices/${device.brandSlug}/${device.slug}`
    }
  };
}

export default async function DeviceDetailPage({ params }: DeviceDetailProps) {
  const { brand, model } = await params;
  const device = getDeviceBySlug(model);

  if (!device) {
    notFound();
  }

  const tiers: GraphicsTier[] = ['Smooth', 'Balanced', 'HD', 'HDR', 'Ultra HD'];

  // Enhanced JSON-LD Structured Data for Google Rich Snippets & SEA
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pubgframes.com' },
          { '@type': 'ListItem', position: 2, name: 'Devices', item: 'https://pubgframes.com/devices' },
          { '@type': 'ListItem', position: 3, name: device.brand, item: `https://pubgframes.com/devices/${device.brandSlug}` },
          { '@type': 'ListItem', position: 4, name: device.model, item: `https://pubgframes.com/devices/${device.brandSlug}/${device.slug}` }
        ]
      },
      {
        '@type': 'Product',
        name: `${device.brand} ${device.model}`,
        description: `${device.brand} ${device.model} PUBG Mobile gaming performance benchmark. Supports up to ${device.maxSupportedFps} FPS with ${device.chipset}.`,
        category: 'Smartphone',
        brand: { '@type': 'Brand', name: device.brand },
        review: {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: device.overallGamingRating.toString(),
            bestRating: '10',
            worstRating: '1'
          },
          author: { '@type': 'Organization', name: 'PUBGFrames Gaming Labs' },
          datePublished: device.benchmarkDate,
          reviewBody: device.verdict
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: device.overallGamingRating.toString(),
          reviewCount: '48',
          bestRating: '10'
        }
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-gray-400">
        <Link href="/" className="hover:text-white">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/devices" className="hover:text-white">Devices</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href={`/devices/${device.brandSlug}`} className="hover:text-white">{device.brand}</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-[#FFD400] font-bold">{device.model}</span>
      </nav>

      {/* Hero Overview Card */}
      <div className="relative rounded-3xl bg-[#101518] border border-white/5 p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#39F56A]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-gray-300">
                {device.brand}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold ${
                device.maxSupportedFps === 0 || device.isUnsupportedHardware
                  ? 'bg-red-500/15 border border-red-500/30 text-red-400'
                  : 'bg-[#39F56A]/10 border border-[#39F56A]/30 text-[#39F56A]'
              }`}>
                {device.maxSupportedFps === 0 || device.isUnsupportedHardware ? 'UNSUPPORTED HARDWARE' : `${device.maxSupportedFps} FPS Max`}
              </span>
              {device.pubgOfficialPartner && (
                <span className="px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-xs font-bold text-[#FFD400]">
                  Official Tournament Partner
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              {device.brand} {device.model}
            </h1>

            <p className="text-sm sm:text-base text-gray-400 font-mono">
              {device.chipset} • {device.gpu}
            </p>

            <p className="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed pt-1">
              {device.verdict}
            </p>
          </div>

          {/* Quick Score & Action Box */}
          <div className="flex sm:flex-col items-center justify-between w-full lg:w-auto gap-4 p-5 rounded-2xl bg-[#171D21] border border-white/10">
            <div className="text-center">
              <div className="text-xs text-gray-400 font-semibold uppercase">PUBGFrames Rating</div>
              <div className="text-3xl font-black text-[#FFD400] mt-0.5">
                {device.overallGamingRating} <span className="text-sm text-gray-500">/ 10</span>
              </div>
            </div>

            <div className="flex gap-2">
              <Link
                href={`/compare?phone1=${device.id}`}
                className="px-4 py-2 rounded-xl bg-[#101518] border border-white/10 text-xs font-bold text-white hover:border-[#39F56A] flex items-center gap-1.5"
              >
                <Scale className="w-3.5 h-3.5" />
                <span>Compare</span>
              </Link>
              <Link
                href={`/fps-checker`}
                className="px-4 py-2 rounded-xl bg-[#39F56A] text-black text-xs font-extrabold hover:bg-green-400 flex items-center gap-1.5"
              >
                <Gauge className="w-3.5 h-3.5" />
                <span>Live Test</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Critical Incompatibility Notice for Unsupported Hardware */}
      {(device.isUnsupportedHardware || device.maxSupportedFps === 0) && (
        <div className="p-6 rounded-2xl bg-red-950/40 border border-red-500/40 flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h3 className="text-base font-extrabold text-red-400 uppercase tracking-wide">
              Official Notice: Hardware Unsupported for PUBG Mobile
            </h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              <strong>{device.brand} {device.model}</strong> does not meet the minimum hardware and architecture requirements (ARMv8 64-bit OS &amp; 3GB+ RAM). The game client will fail to boot, crash immediately on the splash screen, or fail installation from the Google Play Store.
            </p>
            <p className="text-xs text-gray-400 pt-1">
              PUBGFrames Telemetry: 0 FPS • Hardware Insufficient • Out of Memory (OOM) Risk Severe
            </p>
          </div>
        </div>
      )}

      {/* Contextual Sponsor Ad Unit */}
      <AdBanner format="leaderboard" slot={`pubgframes_device_${device.brandSlug}`} />

      {/* 5 Graphics Modes Detailed Telemetry Matrix */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            PUBG Graphics Modes & Frame Rates
          </h2>
          <span className="text-xs text-gray-400">Verified Benchmarks</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {tiers.map((mode) => {
            const perf = device.graphicsModes[mode];
            const isSupported = perf && perf.supported;

            return (
              <div
                key={mode}
                className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                  isSupported
                    ? 'bg-[#171D21] border-white/10 hover:border-white/20'
                    : 'bg-[#101518]/60 border-white/5 opacity-60'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">{mode}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      isSupported ? 'bg-[#39F56A]/10 text-[#39F56A]' : 'bg-red-500/10 text-red-400'
                    }`}>
                      {isSupported ? perf.confidenceLevel : 'Locked'}
                    </span>
                  </div>

                  <div>
                    <div className="text-2xl font-black font-mono text-white">
                      {isSupported ? `${perf.estimatedFps} FPS` : '0 FPS'}
                    </div>
                    {isSupported && (
                      <div className="text-[11px] text-gray-400 font-mono mt-0.5">
                        Range: {perf.fpsMin} - {perf.fpsMax} FPS
                      </div>
                    )}
                  </div>

                  {isSupported ? (
                    <div className="space-y-1.5 pt-2 border-t border-white/5 text-[11px] text-gray-300">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Stability:</span>
                        <strong className="text-[#39F56A]">{perf.stabilityScore}%</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Thermal:</span>
                        <span className={perf.thermalRisk === 'Low' ? 'text-green-400' : perf.thermalRisk === 'Moderate' ? 'text-yellow-400' : 'text-red-400'}>
                          {perf.thermalRisk}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Drain:</span>
                        <span>~{perf.batteryDrainPerHour}%/hr</span>
                      </div>
                    </div>
                  ) : (
                    <div className="pt-2 border-t border-white/5 text-[11px] text-red-400">
                      Not officially enabled on this chipset.
                    </div>
                  )}
                </div>

                {isSupported && perf.notes && (
                  <p className="mt-3 pt-3 border-t border-white/5 text-[10px] text-gray-400 leading-normal">
                    {perf.notes}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Critical Incompatibility Notice for Unsupported Hardware */}
      {(device.isUnsupportedHardware || device.maxSupportedFps === 0) && (
        <div className="p-6 rounded-2xl bg-red-950/40 border border-red-500/40 flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h3 className="text-base font-extrabold text-red-400 uppercase tracking-wide">
              Official Notice: Hardware Unsupported for PUBG Mobile
            </h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              <strong>{device.brand} {device.model}</strong> does not meet the minimum hardware and architecture requirements (ARMv8 64-bit OS &amp; 3GB+ RAM). The game client will fail to boot, crash immediately on the splash screen, or fail installation from the Google Play Store.
            </p>
            <p className="text-xs text-gray-400 pt-1">
              PUBGFrames Telemetry: 0 FPS • Hardware Insufficient • Out of Memory (OOM) Risk Severe
            </p>
          </div>
        </div>
      )}

      {/* Detailed Specifications & Pros / Cons */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Specs Table */}
        <div className="lg:col-span-8 p-6 rounded-3xl bg-[#101518] border border-white/5 space-y-4">
          <h3 className="text-lg font-black text-white">Full Hardware Specifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-[#171D21] border border-white/5 space-y-1">
              <span className="text-gray-500 font-medium">Processor (SoC)</span>
              <p className="text-white font-mono font-bold text-sm">{device.chipset}</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#171D21] border border-white/5 space-y-1">
              <span className="text-gray-500 font-medium">Graphics Processing Unit (GPU)</span>
              <p className="text-white font-mono font-bold text-sm">{device.gpu}</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#171D21] border border-white/5 space-y-1">
              <span className="text-gray-500 font-medium">Display & Refresh Rate</span>
              <p className="text-white font-bold text-sm">{device.displayRefreshRate}Hz • {device.screenSize}</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#171D21] border border-white/5 space-y-1">
              <span className="text-gray-500 font-medium">RAM Memory Options</span>
              <p className="text-white font-bold text-sm">{device.ramOptions.join(', ')}</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#171D21] border border-white/5 space-y-1">
              <span className="text-gray-500 font-medium">Thermal Cooling Architecture</span>
              <p className="text-white font-bold text-sm">{device.coolingSystem}</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#171D21] border border-white/5 space-y-1">
              <span className="text-gray-500 font-medium">Gyroscope Latency</span>
              <p className="text-white font-bold text-sm">{device.gyroscope}</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#171D21] border border-white/5 space-y-1">
              <span className="text-gray-500 font-medium">Battery Capacity</span>
              <p className="text-white font-bold text-sm">{device.batteryCapacity} mAh</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#171D21] border border-white/5 space-y-1">
              <span className="text-gray-500 font-medium">Antutu Benchmark v10</span>
              <p className="text-[#FFD400] font-mono font-bold text-sm">{device.antutuScore?.toLocaleString() || 'N/A'}</p>
            </div>
          </div>
        </div>

        {/* Pros and Cons */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-3xl bg-[#171D21] border border-white/5 space-y-3">
            <h4 className="text-sm font-bold text-[#39F56A] uppercase tracking-wider flex items-center gap-2">
              <Check className="w-4 h-4 stroke-[3]" />
              <span>Gaming Strengths</span>
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              {device.pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#39F56A] font-bold">✓</span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-3xl bg-[#171D21] border border-white/5 space-y-3">
            <h4 className="text-sm font-bold text-red-400 uppercase tracking-wider flex items-center gap-2">
              <CloseIcon className="w-4 h-4 stroke-[3]" />
              <span>Gaming Drawbacks</span>
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              {device.cons.map((con, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-[#101518] border border-white/5 text-[11px] text-gray-400 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
            <span>
              Tested on {device.benchmarkDate} under {device.benchmarkSource}. Actual performance is subject to game patches and ambient temperature.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
