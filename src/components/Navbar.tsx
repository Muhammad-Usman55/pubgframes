'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Sun, Sparkles, Smartphone, Gauge, GitCompare, BookOpen, Info } from 'lucide-react';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'FPS Checker', href: '/fps-checker' },
    { label: 'Compare', href: '/compare' },
    { label: 'Devices', href: '/devices' },
    { label: 'Guides', href: '/guides' },
    { label: 'About', href: '/about' }
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#080B0D]/90 backdrop-blur-md border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 flex items-center justify-center">
            {/* Corner brackets icon in yellow */}
            <div className="absolute inset-0 border-2 border-[#FFD400] rounded-sm pointer-events-none group-hover:scale-105 transition-transform" />
            <div className="w-2.5 h-2.5 bg-[#FFD400] rounded-xs" />
          </div>
          <span className="text-xl md:text-2xl font-black tracking-tight text-white flex items-center">
            PUBG<span className="text-[#FFD400]">Frames</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  active
                    ? 'bg-[#FFD400] text-black shadow-[0_0_15px_rgba(255,212,0,0.3)]'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            title="Performance Mode"
            className="w-9 h-9 rounded-full bg-[#171D21] border border-white/10 flex items-center justify-center text-yellow-400 hover:text-yellow-300 transition-colors"
          >
            <Sun className="w-4 h-4" />
          </button>

          <Link
            href="/fps-checker"
            className="inline-flex items-center gap-2 bg-[#FFD400] hover:bg-[#FFE033] text-black font-extrabold text-sm px-5 py-2.5 rounded-full shadow-[0_0_20px_rgba(255,212,0,0.35)] hover:shadow-[0_0_25px_rgba(255,212,0,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Try Now</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <Link
            href="/fps-checker"
            className="bg-[#FFD400] text-black font-bold text-xs px-3.5 py-1.5 rounded-full"
          >
            Try Now
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#171D21] border border-white/10 text-gray-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#101518] border-b border-white/10 px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between ${
                    active
                      ? 'bg-[#FFD400] text-black'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {active && <span className="w-2 h-2 rounded-full bg-black" />}
                </Link>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="/fps-checker"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#FFD400] text-black font-extrabold py-3 rounded-xl shadow-lg"
            >
              <span>Check FPS Free</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
