import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DEVICES_DATA, getDevicesByBrand } from '@/data/devices';
import { ChevronRight } from 'lucide-react';

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
    description: `Complete list of ${brandName} smartphones tested for PUBG Mobile gaming performance. Check real-world FPS, thermal stability, and recommended graphics modes.`,
    alternates: {
      canonical: `/devices/${brand}`
    }
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
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-8">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[14px] text-[#525866]">
        <Link href="/" className="hover:text-[#0b0c0e]">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href="/devices" className="hover:text-[#0b0c0e]">Devices</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-[#0b0c0e] font-medium">{brandName}</span>
      </nav>

      <div className="p-6 sm:p-10 rounded-lg bg-[#ffffff] border border-[#e2e5ea] space-y-3">
        <p className="text-[14px] font-medium text-[#1f2de6] tabular-nums">
          {devices.length} verified devices
        </p>
        <h1 className="text-[32px] sm:text-[44px] font-semibold tracking-[-0.025em] text-[#0b0c0e] leading-tight">
          {brandName} phones for PUBG Mobile
        </h1>
        <p className="text-[16px] text-[#525866] max-w-[54ch] leading-relaxed">
          Frame rate limits, display refresh rates, cooling hardware, and graphics preset support across every tested {brandName} model.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {devices.map((device) => {
          const isUnsupported = device.maxSupportedFps === 0 || device.isUnsupportedHardware;
          return (
            <div
              key={device.id}
              className="p-5 rounded-lg bg-[#ffffff] border border-[#e2e5ea] hover:border-[#c5cbd4] transition-colors duration-150 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[13px] font-medium text-[#525866]">{device.brand}</span>
                  <span
                    className={`px-2.5 py-0.5 rounded text-[13px] font-semibold tabular-nums ${
                      isUnsupported
                        ? 'bg-[#fee2e2] text-[#b91c1c]'
                        : device.maxSupportedFps >= 120
                        ? 'bg-[#e0e7ff] text-[#1f2de6]'
                        : device.maxSupportedFps >= 90
                        ? 'bg-[#dcfce7] text-[#15803d]'
                        : 'bg-[#eef0f3] text-[#0b0c0e]'
                    }`}
                  >
                    {isUnsupported ? 'Unsupported' : `${device.maxSupportedFps} FPS max`}
                  </span>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-[#0b0c0e] leading-snug">
                    <Link href={`/devices/${device.brandSlug}/${device.slug}`} className="hover:text-[#1f2de6]">
                      {device.model}
                    </Link>
                  </h2>
                  <p className="text-[14px] text-[#525866] mt-0.5 truncate">{device.chipset}</p>
                </div>

                <div className="text-[14px] text-[#525866] space-y-1 pt-2 tabular-nums">
                  {isUnsupported ? (
                    <div className="text-[#b91c1c] font-medium">Insufficient RAM or CPU architecture</div>
                  ) : (
                    <div>
                      Smooth preset:{' '}
                      <strong className="text-[#0b0c0e] font-medium">
                        {device.graphicsModes.Smooth.estimatedFps} FPS
                      </strong>{' '}
                      ({device.graphicsModes.Smooth.stabilityScore}% stability)
                    </div>
                  )}
                  <div>Display: {device.displayRefreshRate} Hz</div>
                  <div className="truncate">Cooling: {device.coolingSystem}</div>
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
                  Full specs
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
