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
    {
      label: 'FPS Check',
      href: '/fps-checker',
      icon: Zap,
      activeColor: 'text-[#FFD400]',
      activeBg: 'bg-[#FFD400]/15'
    },
    {
      label: 'Compare',
      href: '/compare',
      icon: Scale,
      activeColor: 'text-[#A855F7]',
      activeBg: 'bg-[#A855F7]/15'
    },
    {
      label: 'Devices',
      href: '/devices',
      icon: Smartphone,
      activeColor: 'text-[#39F56A]',
      activeBg: 'bg-[#39F56A]/15'
    },
    {
      label: 'Guides',
      href: '/guides',
      icon: BookOpen,
      activeColor: 'text-[#28A9FF]',
      activeBg: 'bg-[#28A9FF]/15'
    }
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0A0E12]/95 backdrop-blur-xl border-t border-white/10 px-3 py-2 shadow-[0_-10px_25px_rgba(0,0,0,0.8)]">
      <div className="grid grid-cols-5 items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => soundEffects.playClick()}
              className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all ${
                isActive ? `${item.activeColor}` : 'text-gray-400 hover:text-white'
              }`}
            >
              <div className={`p-1.5 rounded-lg transition-transform ${isActive ? `${item.activeBg} scale-110` : ''}`}>
                <Icon className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-[10px] font-bold mt-0.5 tracking-tight">{item.label}</span>
            </Link>
          );
        })}

        {/* Sound FX Toggle on Mobile */}
        <button
          onClick={handleToggleSound}
          className="flex flex-col items-center justify-center py-1 text-gray-400 hover:text-[#FFD400] transition-colors"
          aria-label="Toggle Sound Effects"
        >
          <div className="p-1.5 rounded-lg text-gray-400 hover:text-[#FFD400]">
            {soundEnabled ? <Volume2 className="w-5 h-5 text-[#39F56A]" /> : <VolumeX className="w-5 h-5 text-gray-500" />}
          </div>
          <span className="text-[10px] font-bold mt-0.5 tracking-tight">
            {soundEnabled ? 'FX: ON' : 'FX: OFF'}
          </span>
        </button>
      </div>
    </div>
  );
};
