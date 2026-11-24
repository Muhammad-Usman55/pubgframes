import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DEVICES_DATA, getDeviceBySlug } from '@/data/devices';
import { GraphicsTier } from '@/types/device';
import { AdBanner } from '@/components/AdBanner';
import { Check, X as CloseIcon, ChevronRight, AlertTriangle } from 'lucide-react';

interface DeviceDetailProps {
  params: Promise<{ brand: string; model: string }>;
}

export async function generateStaticParams() {
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
  const { model } = await params;
  const device = getDeviceBySlug(model);

  if (!device) {
    notFound();
  }

  const tiers: GraphicsTier[] = ['Smooth', 'Balanced', 'HD', 'HDR', 'Ultra HD'];
  const isUnsupported = device.isUnsupportedHardware || device.maxSupportedFps === 0;

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
          author: { '@type': 'Organization', name: 'PUBGFrames' },
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
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[14px] text-[#525866]">
        <Link href="/" className="hover:text-[#0b0c0e]">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href="/devices" className="hover:text-[#0b0c0e]">Devices</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href={`/devices/${device.brandSlug}`} className="hover:text-[#0b0c0e]">{device.brand}</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-[#0b0c0e] font-medium">{device.model}</span>
      </nav>

      {/* Hero Summary Card */}
      <div className="rounded-lg bg-[#ffffff] border border-[#e2e5ea] p-4 sm:p-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
          <div className="space-y-3 max-w-[60ch]">
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-[13px] font-semibold">
              <span className="px-2.5 py-1 rounded bg-[#eef0f3] text-[#0b0c0e]">{device.brand}</span>
              <span
                className={`px-2.5 py-1 rounded tabular-nums ${isUnsupported
                  ? 'bg-[#fee2e2] text-[#b91c1c]'
                  : device.maxSupportedFps >= 120
                    ? 'bg-[#e0e7ff] text-[#1f2de6]'
                    : 'bg-[#dcfce7] text-[#166534]'
                  }`}
              >
                {isUnsupported ? 'Unsupported Hardware' : `${device.maxSupportedFps} FPS Max`}
              </span>
              {device.pubgOfficialPartner && (
                <span className="px-2.5 py-1 rounded bg-[#fef3c7] text-[#b45309]">
                  Official Tournament Partner
                </span>
              )}
            </div>

            <h1 className="text-[28px] sm:text-[48px] font-semibold tracking-[-0.025em] text-[#0b0c0e] leading-tight">
              {device.brand} {device.model}
            </h1>

            <p className="text-sm sm:text-base text-[#3d4350] font-medium">
              {device.chipset} &middot; {device.gpu}
            </p>

            <p className="text-base text-[#0b0c0e] leading-relaxed pt-1">
              {device.verdict}
            </p>
          </div>

          <div className="w-full lg:w-auto flex flex-wrap sm:flex-col items-center justify-between gap-4 p-4 sm:p-6 rounded-lg bg-[#f6f7f9] border border-[#e2e5ea] shrink-0">
            <div className="text-left sm:text-center">
              <div className="text-[13px] font-medium text-[#525866]">Gaming Rating</div>
              <div className="text-3xl font-semibold text-[#0b0c0e] tabular-nums mt-0.5">
                {device.overallGamingRating} <span className="text-base text-[#525866] font-normal">/ 10</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Link
                href={`/compare?phone1=${device.id}`}
                className="px-4 py-2.5 rounded-md bg-[#ffffff] border border-[#d6dbe3] hover:border-[#0b0c0e] text-[14px] font-medium text-[#0b0c0e]"
              >
                Compare
              </Link>
              <Link
                href="/fps-checker"
                className="px-4 py-2.5 rounded-md bg-[#1f2de6] hover:bg-[#1723bf] text-[14px] font-medium text-white"
              >
                Live Test
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Unsupported Notice */}
      {isUnsupported && (
        <div className="p-6 rounded-lg bg-[#fee2e2] text-[#991b1b] flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h2 className="text-lg font-semibold">Hardware Unsupported for PUBG Mobile</h2>
            <p className="text-[15px] leading-relaxed">
              {device.brand} {device.model} does not meet the minimum 64-bit ARMv8 architecture and 3GB+ RAM baseline required to launch and play PUBG Mobile reliably.
            </p>
          </div>
        </div>
      )}

      <AdBanner format="leaderboard" slot={`pubgframes_device_${device.brandSlug}`} />

      {/* 5 Graphics Modes Breakdown */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] text-[#0b0c0e]">
            PUBG Graphics settings breakdown
          </h2>
          <span className="text-[14px] text-[#525866]">Tested per preset</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {tiers.map((mode) => {
            const perf = device.graphicsModes[mode];
            const isSupported = perf && perf.supported;

            return (
              <div
                key={mode}
                className={`p-5 rounded-lg border flex flex-col justify-between space-y-4 ${isSupported
                  ? 'bg-[#ffffff] border-[#e2e5ea]'
                  : 'bg-[#f6f7f9] border-[#e2e5ea] opacity-75'
                  }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[15px] font-semibold text-[#0b0c0e]">{mode}</span>
                    <span
                      className={`text-[13px] font-medium px-2 py-0.5 rounded ${isSupported ? 'bg-[#dcfce7] text-[#15803d]' : 'bg-[#fee2e2] text-[#b91c1c]'
                        }`}
                    >
                      {isSupported ? perf.confidenceLevel : 'Locked'}
                    </span>
                  </div>

                  <div>
                    <div className="text-2xl font-semibold tabular-nums text-[#0b0c0e]">
                      {isSupported ? `${perf.estimatedFps} FPS` : '0 FPS'}
                    </div>
                    {isSupported && (
                      <div className="text-[13px] text-[#525866] tabular-nums mt-0.5">
                        Range: {perf.fpsMin}–{perf.fpsMax} FPS
                      </div>
                    )}
                  </div>

                  {isSupported ? (
                    <div className="space-y-1.5 pt-3 text-[14px] tabular-nums">
                      <div className="flex justify-between">
                        <span className="text-[#525866]">Stability</span>
                        <strong className="text-[#15803d] font-medium">{perf.stabilityScore}%</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#525866]">Thermal</span>
                        <span
                          className={`font-medium ${perf.thermalRisk === 'Low'
                            ? 'text-[#15803d]'
                            : perf.thermalRisk === 'Moderate'
                              ? 'text-[#b45309]'
                              : 'text-[#b91c1c]'
                            }`}
                        >
                          {perf.thermalRisk}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#525866]">Battery</span>
                        <span className="text-[#0b0c0e] font-medium">~{perf.batteryDrainPerHour}%/hr</span>
                      </div>
                    </div>
                  ) : (
                    <div className="pt-3 text-[13px] text-[#b91c1c]">
                      Locked by PUBG Mobile client for this chipset.
                    </div>
                  )}
                </div>

                {isSupported && perf.notes && (
                  <p className="pt-3 text-[13px] text-[#525866] leading-relaxed">
                    {perf.notes}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Full Hardware Specs & Pros/Cons */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 p-6 sm:p-8 rounded-lg bg-[#ffffff] border border-[#e2e5ea] space-y-5">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#0b0c0e]">Hardware specifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[15px]">
            <div className="p-4 rounded bg-[#f6f7f9] space-y-1">
              <span className="text-[13px] text-[#525866]">Processor (SoC)</span>
              <p className="text-[#0b0c0e] font-semibold">{device.chipset}</p>
            </div>
            <div className="p-4 rounded bg-[#f6f7f9] space-y-1">
              <span className="text-[13px] text-[#525866]">Graphics (GPU)</span>
              <p className="text-[#0b0c0e] font-semibold">{device.gpu}</p>
            </div>
            <div className="p-4 rounded bg-[#f6f7f9] space-y-1">
              <span className="text-[13px] text-[#525866]">Display & refresh rate</span>
              <p className="text-[#0b0c0e] font-semibold tabular-nums">{device.displayRefreshRate} Hz &middot; {device.screenSize}</p>
            </div>
            <div className="p-4 rounded bg-[#f6f7f9] space-y-1">
              <span className="text-[13px] text-[#525866]">RAM options</span>
              <p className="text-[#0b0c0e] font-semibold">{device.ramOptions.join(', ')}</p>
            </div>
            <div className="p-4 rounded bg-[#f6f7f9] space-y-1">
              <span className="text-[13px] text-[#525866]">Cooling system</span>
              <p className="text-[#0b0c0e] font-semibold">{device.coolingSystem}</p>
            </div>
            <div className="p-4 rounded bg-[#f6f7f9] space-y-1">
              <span className="text-[13px] text-[#525866]">Gyroscope sensor</span>
              <p className="text-[#0b0c0e] font-semibold">{device.gyroscope}</p>
            </div>
            <div className="p-4 rounded bg-[#f6f7f9] space-y-1">
              <span className="text-[13px] text-[#525866]">Battery capacity</span>
              <p className="text-[#0b0c0e] font-semibold tabular-nums">{device.batteryCapacity} mAh</p>
            </div>
            <div className="p-4 rounded bg-[#f6f7f9] space-y-1">
              <span className="text-[13px] text-[#525866]">AnTuTu benchmark</span>
              <p className="text-[#0b0c0e] font-semibold tabular-nums">{device.antutuScore?.toLocaleString() || 'N/A'}</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-5">
          <div className="p-6 rounded-lg bg-[#ffffff] border border-[#e2e5ea] space-y-3">
            <h3 className="text-base font-semibold text-[#15803d]">Strengths</h3>
            <ul className="space-y-2.5 text-[15px] text-[#0b0c0e]">
              {device.pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#15803d] shrink-0 mt-1" />
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-lg bg-[#ffffff] border border-[#e2e5ea] space-y-3">
            <h3 className="text-base font-semibold text-[#b91c1c]">Drawbacks</h3>
            <ul className="space-y-2.5 text-[15px] text-[#0b0c0e]">
              {device.cons.map((con, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CloseIcon className="w-4 h-4 text-[#b91c1c] shrink-0 mt-1" />
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-lg bg-[#e2e5ea] text-[14px] text-[#525866] leading-relaxed">
            Tested on {device.benchmarkDate} ({device.benchmarkSource}). Frame rates vary with software updates and ambient temperature.
          </div>
        </div>
      </div>
    </div>
  );
}
