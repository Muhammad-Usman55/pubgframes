'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';
import { soundEffects } from '@/utils/soundEffects';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundActive, setSoundActive] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setSoundActive(soundEffects.isEnabled());
  }, []);

  const handleToggleSound = () => {
    const newState = soundEffects.toggleSound();
    setSoundActive(newState);
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'FPS Checker', href: '/fps-checker' },
    { label: 'Devices', href: '/devices' },
    { label: 'Compare', href: '/compare' },
    { label: 'Guides', href: '/guides' }
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="relative z-40 w-full bg-[#eef0f3]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Wordmark */}
        <Link
          href="/"
          onClick={() => soundEffects.playClick()}
          className="flex items-center gap-2.5 shrink-0"
        >
          <svg viewBox="0 0 36 36" className="w-7 h-7" fill="none" aria-hidden="true">
            <rect x="2" y="2" width="32" height="32" rx="6" fill="#0b0c0e" />
            <path d="M10 14v-4h4M22 10h4v4M10 22v4h4M22 26h4v-4" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
            <circle cx="18" cy="18" r="3" fill="#1f2de6" />
          </svg>
          <span className="text-xl font-semibold tracking-[-0.02em] text-[#0b0c0e]">
            PUBGFrames
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => soundEffects.playClick()}
                className={`px-3.5 py-2 rounded-md text-base font-medium whitespace-nowrap transition-colors duration-150 ${
                  active
                    ? 'bg-[#e2e5ea] text-[#0b0c0e]'
                    : 'text-[#3d4350] hover:text-[#0b0c0e] hover:bg-[#e2e5ea]/60'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button
            onClick={handleToggleSound}
            title={soundActive ? 'Click sounds on' : 'Click sounds muted'}
            aria-label="Toggle interface sound effects"
            className="w-9 h-9 rounded-md bg-[#e2e5ea] hover:bg-[#d5d9e0] text-[#0b0c0e] flex items-center justify-center transition-colors duration-150 cursor-pointer"
          >
            {soundActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-[#3d4350]" />}
          </button>

          <Link
            href="/fps-checker"
            onClick={() => soundEffects.playClick()}
            className="inline-flex items-center justify-center whitespace-nowrap bg-[#1f2de6] hover:bg-[#1723bf] text-white font-medium text-base px-4 py-2 rounded-md transition-colors duration-150 active:scale-[0.98]"
          >
            Check FPS
          </Link>
        </div>

        {/* Mobile & Tablet Controls */}
        <div className="flex lg:hidden items-center gap-2 shrink-0">
          <button
            onClick={handleToggleSound}
            title={soundActive ? 'Click sounds on' : 'Click sounds muted'}
            aria-label="Toggle interface sound effects"
            className="p-2 rounded-md bg-[#e2e5ea] text-[#0b0c0e] cursor-pointer"
          >
            {soundActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-[#3d4350]" />}
          </button>
          <Link
            href="/fps-checker"
            onClick={() => soundEffects.playClick()}
            className="inline-flex items-center justify-center whitespace-nowrap bg-[#1f2de6] text-white font-medium text-sm px-3.5 py-2 rounded-md"
          >
            Check FPS
          </Link>
          <button
            onClick={() => {
              soundEffects.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 rounded-md bg-[#e2e5ea] text-[#0b0c0e] cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#ffffff] px-4 sm:px-8 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => {
                  soundEffects.playClick();
                  setMobileMenuOpen(false);
                }}
                className={`block px-4 py-3 rounded-md text-base font-medium transition-colors duration-150 ${
                  active
                    ? 'bg-[#e2e5ea] text-[#0b0c0e]'
                    : 'text-[#3d4350] hover:bg-[#eef0f3] hover:text-[#0b0c0e]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/about"
            onClick={() => {
              soundEffects.playClick();
              setMobileMenuOpen(false);
            }}
            className="block px-4 py-3 rounded-md text-base font-medium text-[#3d4350] hover:bg-[#eef0f3] hover:text-[#0b0c0e]"
          >
            About & Methodology
          </Link>
        </div>
      )}
    </header>
  );
};
