import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-[#111317] text-[#eef0f3] pt-10 pb-8 sm:pt-14 sm:pb-12 mt-10 sm:mt-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-8 sm:space-y-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Brand summary */}
          <div className="col-span-2 lg:col-span-5 space-y-3 sm:space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <svg viewBox="0 0 36 36" className="w-7 h-7" fill="none" aria-hidden="true">
                <rect x="2" y="2" width="32" height="32" rx="6" fill="#ffffff" />
                <path d="M10 14v-4h4M22 10h4v4M10 22v4h4M22 26h4v-4" stroke="#111317" strokeWidth="2.2" strokeLinecap="round" />
                <circle cx="18" cy="18" r="3" fill="#1f2de6" />
              </svg>
              <span className="text-xl font-semibold tracking-[-0.02em] text-white">
                PUBGFrames
              </span>
            </Link>
            <p className="text-sm sm:text-base text-[#c5cbd4] leading-relaxed max-w-[44ch]">
              An independent mobile gaming performance reference. Look up realistic frame rates, thermal endurance, and gyroscope specifications before buying a phone or jumping into ranked matches.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="col-span-1 lg:col-span-2 space-y-2.5 sm:space-y-3">
            <h4 className="text-sm sm:text-base font-semibold text-white">Tools</h4>
            <ul className="space-y-2 text-sm sm:text-base text-[#c5cbd4]">
              <li><Link href="/fps-checker" className="hover:text-white transition-colors duration-150">FPS Checker</Link></li>
              <li><Link href="/devices" className="hover:text-white transition-colors duration-150">All Devices</Link></li>
              <li><Link href="/compare" className="hover:text-white transition-colors duration-150">Compare Phones</Link></li>
              <li><Link href="/guides" className="hover:text-white transition-colors duration-150">Guides</Link></li>
            </ul>
          </div>

          {/* Info & Legal */}
          <div className="col-span-1 lg:col-span-2 lg:order-last space-y-2.5 sm:space-y-3">
            <h4 className="text-sm sm:text-base font-semibold text-white">Information</h4>
            <ul className="space-y-2 text-sm sm:text-base text-[#c5cbd4]">
              <li><Link href="/about" className="hover:text-white transition-colors duration-150">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors duration-150">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors duration-150">Privacy Policy</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-white transition-colors duration-150">Cookie Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors duration-150">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="hover:text-white transition-colors duration-150">Disclaimer</Link></li>
            </ul>
          </div>

          {/* Popular Flagships */}
          <div className="col-span-2 lg:col-span-3 space-y-2.5 sm:space-y-3">
            <h4 className="text-sm sm:text-base font-semibold text-white">Popular Benchmarks</h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-2 text-sm sm:text-base text-[#c5cbd4]">
              <li><Link href="/devices/samsung/galaxy-s24-ultra" className="hover:text-white transition-colors duration-150">Galaxy S24 Ultra</Link></li>
              <li><Link href="/devices/apple/iphone-16-pro-max" className="hover:text-white transition-colors duration-150">iPhone 16 Pro Max</Link></li>
              <li><Link href="/devices/poco/poco-x6-pro-5g" className="hover:text-white transition-colors duration-150">POCO X6 Pro 5G</Link></li>
              <li><Link href="/devices/redmi/redmi-note-12" className="hover:text-white transition-colors duration-150">Redmi Note 12</Link></li>
              <li><Link href="/devices/iqoo/iqoo-13-5g" className="hover:text-white transition-colors duration-150">iQOO 13 5G</Link></li>
            </ul>
          </div>
        </div>

        {/* Independent Platform Notice */}
        <div className="p-5 rounded-lg bg-[#1a1d24] text-base text-[#c5cbd4] leading-relaxed">
          <p className="max-w-none">
            <strong className="text-white font-medium">Independent Reference Notice:</strong> PUBGFrames is an independent performance reference site and is not affiliated with, endorsed by, or connected to Krafton, Inc., Tencent Games, or Level Infinite. PUBG Mobile is a trademark of Krafton, Inc. All device trademarks belong to their respective manufacturers.
          </p>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-[#c5cbd4]">
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/devices" className="hover:text-white transition-colors duration-150">Database</Link>
            <Link href="/compare" className="hover:text-white transition-colors duration-150">Compare</Link>
            <Link href="/guides" className="hover:text-white transition-colors duration-150">Performance Guides</Link>
            <Link href="/contact" className="hover:text-white transition-colors duration-150">Submit Benchmark</Link>
          </div>
          <p>© 2026 PUBGFrames</p>
        </div>
      </div>
    </footer>
  );
};
