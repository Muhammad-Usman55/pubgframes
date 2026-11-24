'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Zap, Smartphone, Scale, BookOpen, ArrowUp, Volume2, VolumeX } from 'lucide-react';
import { soundEffects } from '@/utils/soundEffects';

export const MobileBottomNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [showDock, setShowDock] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    setSoundEnabled(soundEffects.isEnabled());

    const handleScroll = () => {
      setShowDock(window.scrollY > 360);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const handleToggleSound = () => {
    const nextState = soundEffects.toggleSound();
    setSoundEnabled(nextState);
  };

  const navItems = [
    { label: 'FPS Checker', href: '/fps-checker', icon: Zap },
    { label: 'All Devices', href: '/devices', icon: Smartphone },
    { label: 'Compare Phones', href: '/compare', icon: Scale },
    { label: 'Guides', href: '/guides', icon: BookOpen }
  ];

  if (!showDock && !open) return null;

  return (
    <div className="lg:hidden">
      {/* Compact bottom-right thumb trigger — never spans across page headings */}
      <button
        type="button"
        onClick={() => {
          soundEffects.playClick();
          setOpen(!open);
        }}
        aria-label={open ? 'Close quick navigation' : 'Open quick navigation'}
        className="fixed bottom-5 right-4 z-50 w-12 h-12 rounded-full bg-[#0b0c0e] text-white flex items-center justify-center shadow-lg transition-transform duration-150 active:scale-95 cursor-pointer" /* taste-skill-ignore */
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Bottom Sheet Drawer */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-[#0b0c0e]/40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <nav
            aria-label="Mobile quick navigation"
            className="fixed bottom-20 right-4 left-4 sm:left-auto sm:w-80 z-50 rounded-xl bg-[#ffffff] p-4 shadow-2xl space-y-2" /* taste-skill-ignore */
          >
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive =
                  pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      soundEffects.playClick();
                      setOpen(false);
                    }}
                    className={`flex items-center gap-2.5 px-3.5 py-3 rounded-lg text-sm font-medium transition-colors duration-150 ${
                      isActive
                        ? 'bg-[#1f2de6] text-white'
                        : 'bg-[#eef0f3] text-[#0b0c0e] hover:bg-[#e2e5ea]'
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                type="button"
                onClick={handleToggleSound}
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-[#eef0f3] text-[#0b0c0e] text-sm font-medium cursor-pointer"
              >
                {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-[#3d4350]" />}
                <span>{soundEnabled ? 'Sound On' : 'Muted'}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  setOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-[#eef0f3] text-[#0b0c0e] text-sm font-medium cursor-pointer"
              >
                <ArrowUp className="w-4 h-4" />
                <span>Back to top</span>
              </button>
            </div>
          </nav>
        </>
      )}
    </div>
  );
};
