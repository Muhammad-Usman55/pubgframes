import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DEVICES_DATA, ALL_BRANDS, getDevicesByBrand } from '@/data/devices';
import { Smartphone, ArrowUpRight, Scale, ChevronRight } from 'lucide-react';

interface BrandPageProps {
  params: Promise<{ brand: string }>;
}

export async function generateStaticParams() {
  const brands = Array.from(new Set(DEVICES_DATA.map((d) => d.brandSlug)));
  return brands.map((brand) => ({ brand }));
}

export async function generateMetadata({ params }: BrandPageProps): Promise<Metadata> {
  const { brand } = await params;
  const brandDevices = getDevicesByBrand(brand);
  const brandName = brandDevices.length > 0 ? brandDevices[0].brand : brand.toUpperCase();

  return {
    title: `Best ${brandName} Phones for PUBG Mobile (60, 90 & 120 FPS)`,
    description: `Complete list of ${brandName} smartphones tested for PUBG Mobile gaming performance. Check real-world FPS, thermal stability, and recommended graphics modes.`
  };
}

export default async function BrandCatalogPage({ params }: BrandPageProps) {
  const { brand } = await params;
  const devices = getDevicesByBrand(brand);

  if (devices.length === 0) {
    notFound();
  }

  const brandName = devices[0].brand;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-gray-400">
        <Link href="/" className="hover:text-white">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/devices" className="hover:text-white">Devices</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-[#FFD400] font-bold">{brandName}</span>
      </nav>

      {/* Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#101518] border border-white/5 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD400]/10 text-[#FFD400] text-xs font-bold">
          <Smartphone className="w-3.5 h-3.5" />
          <span>{devices.length} Devices Verified</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          {brandName} Smartphones for <span className="text-[#39F56A]">PUBG Mobile</span>
        </h1>
        <p className="text-xs sm:text-sm text-gray-400 max-w-2xl">
          Verified frame rate benchmarks and graphics support specifications for all tested {brandName} smartphones.
        </p>
      </div>

      {/* Device Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {devices.map((device) => (
          <div
            key={device.id}
            className="p-5 rounded-2xl bg-[#171D21] border border-white/5 hover:border-white/15 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400 font-bold uppercase">{device.brand}</span>
                <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-[#39F56A]/10 text-[#39F56A] border border-[#39F56A]/20">
                  {device.maxSupportedFps} FPS Max
                </span>
              </div>

              <div>
                <h3 className="text-lg font-black text-white">{device.model}</h3>
                <p className="text-xs text-gray-400 font-mono mt-0.5">{device.chipset}</p>
              </div>

              <div className="text-xs text-gray-300 space-y-1 pt-2 border-t border-white/5">
                <div>Smooth: <strong className="text-white">{device.graphicsModes.Smooth.estimatedFps} FPS</strong> ({device.graphicsModes.Smooth.stabilityScore}% stability)</div>
                <div>Display: <span className="text-gray-400">{device.displayRefreshRate}Hz {device.screenSize}</span></div>
                <div>Cooling: <span className="text-gray-400">{device.coolingSystem}</span></div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
              <Link
                href={`/compare?phone1=${device.id}`}
                className="text-gray-400 hover:text-white flex items-center gap-1 font-semibold"
              >
                <Scale className="w-3.5 h-3.5" />
                <span>Compare</span>
              </Link>
              <Link
                href={`/devices/${device.brandSlug}/${device.slug}`}
                className="text-[#FFD400] font-bold hover:underline flex items-center gap-1"
              >
                <span>Full Telemetry</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
