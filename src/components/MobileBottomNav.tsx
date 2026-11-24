'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Zap, Scale, Smartphone, BookOpen, Volume2, VolumeX } from 'lucide-react';
import { soundEffects } from '@/utils/soundEffects';

export const MobileBottomNav = () => {
  const pathname = usePathname();
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    setSoundEnabled(soundEffects.isEnabled());
  }, []);

  const handleToggleSound = () => {
    const nextState = soundEffects.toggleSound();
    setSoundEnabled(nextState);
  };

  const navItems = [
    { label: 'FPS Check', href: '/fps-checker', icon: Zap },
    { label: 'Devices', href: '/devices', icon: Smartphone },
    { label: 'Compare', href: '/compare', icon: Scale },
    { label: 'Guides', href: '/guides', icon: BookOpen }
  ];

  return (
    <nav
      aria-label="Mobile quick navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#ffffff] px-4 py-1.5"
    >
      <div className="grid grid-cols-5 items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => soundEffects.playClick()}
              className={`flex flex-col items-center justify-center py-1.5 rounded-md transition-colors duration-150 ${
                isActive ? 'text-[#1f2de6] font-semibold' : 'text-[#525866] hover:text-[#0b0c0e]'
              }`}
            >
              <Icon className="w-5 h-5 stroke-[1.9]" />
              <span className="text-[13px] leading-tight mt-0.5">{item.label}</span>
            </Link>
          );
        })}

        <button
          type="button"
          onClick={handleToggleSound}
          className="flex flex-col items-center justify-center py-1.5 text-[#525866] hover:text-[#0b0c0e] transition-colors duration-150 cursor-pointer"
          aria-label="Toggle Sound Effects"
        >
          {soundEnabled ? <Volume2 className="w-5 h-5 text-[#0b0c0e]" /> : <VolumeX className="w-5 h-5" />}
          <span className="text-[13px] leading-tight mt-0.5">
            {soundEnabled ? 'Sound' : 'Muted'}
          </span>
        </button>
      </div>
    </nav>
  );
};
