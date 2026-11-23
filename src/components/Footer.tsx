import React from 'react';
import Link from 'next/link';
import { Send, ShieldAlert, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#080B0D] border-t border-white/5 pt-14 pb-12 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-white/5">
          {/* Brand Column */}
          <div className="space-y-3.5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative w-7 h-7 flex items-center justify-center">
                <div className="absolute inset-0 border-2 border-[#FFD400] rounded-sm" />
                <div className="w-2 h-2 bg-[#FFD400] rounded-xs" />
              </div>
              <span className="text-xl font-black text-white">
                PUBG<span className="text-[#FFD400]">Frames</span>
              </span>
            </Link>
            <p className="text-xs leading-relaxed text-gray-400">
              The premier smartphone gaming performance platform for PUBG Mobile players. Check verified device benchmarks, test graphics settings, and play smoother.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-[#171D21] border border-white/10 flex items-center justify-center text-gray-300 hover:text-red-500 hover:border-red-500/40 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              {/* Discord */}
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Discord"
                className="w-8 h-8 rounded-full bg-[#171D21] border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#5865F2] hover:border-[#5865F2]/40 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
              {/* X */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X Twitter"
                className="w-8 h-8 rounded-full bg-[#171D21] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-white/40 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Telegram */}
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="w-8 h-8 rounded-full bg-[#171D21] border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#28A9FF] hover:border-[#28A9FF]/40 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">Platform</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-[#FFD400] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/fps-checker" className="hover:text-[#FFD400] transition-colors">
                  FPS Checker
                </Link>
              </li>
              <li>
                <Link href="/devices" className="hover:text-[#FFD400] transition-colors">
                  Smartphone Database
                </Link>
              </li>
              <li>
                <Link href="/compare" className="hover:text-[#FFD400] transition-colors">
                  Device Comparison
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-[#FFD400] transition-colors">
                  Performance Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Flagships */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">Verified Benchmarks</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/devices/samsung/galaxy-s24-ultra" className="hover:text-[#39F56A] transition-colors">
                  Samsung S24 Ultra (120 FPS)
                </Link>
              </li>
              <li>
                <Link href="/devices/apple/iphone-16-pro-max" className="hover:text-[#39F56A] transition-colors">
                  iPhone 16 Pro Max (120 FPS)
                </Link>
              </li>
              <li>
                <Link href="/devices/poco/poco-x6-pro-5g" className="hover:text-[#39F56A] transition-colors">
                  POCO X6 Pro 5G (90 FPS)
                </Link>
              </li>
              <li>
                <Link href="/devices/infinix/infinix-gt-20-pro" className="hover:text-[#39F56A] transition-colors">
                  Infinix GT 20 Pro (120 FPS)
                </Link>
              </li>
              <li>
                <Link href="/devices/iqoo/iqoo-12-5g" className="hover:text-[#39F56A] transition-colors">
                  iQOO 12 5G (120 FPS)
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">Transparency</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-[#FFD400] transition-colors">
                  About PUBGFrames
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FFD400] transition-colors">
                  Contact Telemetry Lab
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-[#FFD400] transition-colors">
                  Fair Use Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#FFD400] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#FFD400] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Independent Platform Disclaimer */}
        <div className="my-6 p-4 rounded-xl bg-[#101518] border border-white/5 flex items-start gap-3 text-[11px] text-gray-500">
          <ShieldAlert className="w-4 h-4 text-yellow-500/80 shrink-0 mt-0.5" />
          <p>
            <strong className="text-gray-400">Independent Telemetry Notice:</strong> PUBGFrames is an independent community and performance information portal. PUBGFrames is not affiliated with, endorsed, sponsored, or specifically approved by PUBG Mobile, Krafton, Inc., Tencent Games, Proxima Beta Pte. Limited, or Level Infinite. PUBG Mobile and PLAYERUNKNOWN’S BATTLEGROUNDS are registered trademarks of Krafton, Inc. All smartphone trademarks belong to their respective manufacturers.
          </p>
        </div>

        {/* Bottom copyright row */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-3">
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/fps-checker" className="hover:text-gray-300">FPS Checker</Link>
            <Link href="/devices" className="hover:text-gray-300">Devices</Link>
            <Link href="/compare" className="hover:text-gray-300">Compare</Link>
            <Link href="/guides" className="hover:text-gray-300">Guides</Link>
            <Link href="/contact" className="hover:text-gray-300">Contact</Link>
          </div>
          <p>© 2026 PUBGFrames. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
