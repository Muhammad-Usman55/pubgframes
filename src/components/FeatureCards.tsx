'use client';

import React from 'react';
import Link from 'next/link';
import { Gauge, Flame, Smartphone, GitCompare, ArrowRight } from 'lucide-react';
import { soundEffects } from '@/utils/soundEffects';

export const FeatureCards = () => {
  const pillars = [
    {
      title: 'Esports Graphics Matrix',
      subtitle: 'Native 120 / 90 FPS Tiers',
      metric: '5 Graphics Presets',
      description: 'Tested configurations across Smooth, Balanced, HD, HDR & Ultra HD with verified frame caps.',
      icon: Gauge,
      accent: '#FFD400',
      href: '/fps-checker'
    },
    {
      title: 'Thermal & Drain Telemetry',
      subtitle: '30-Min Classic Match Data',
      metric: '±0.35°C / min',
      description: 'Real heat dissipation deltas, vapor chamber performance, and hourly battery drain under load.',
      icon: Flame,
      accent: '#F97316',
      href: '/devices'
    },
    {
      title: 'Hardware Gyroscope Audit',
      subtitle: 'Sensor Sampling Latency',
      metric: '200Hz+ Hardware',
      description: 'Dedicated hardware MEMS gyroscope testing vs laggy software emulation sensors.',
      icon: Smartphone,
      accent: '#39F56A',
      href: '/devices'
    },
    {
      title: 'Head-to-Head Comparison',
      subtitle: 'Chipset vs Chipset',
      metric: '628+ Devices',
      description: 'Direct comparison of Dimensity vs Snapdragon vs Apple Silicon in competitive PUBG Mobile.',
      icon: GitCompare,
      accent: '#38BDF8',
      href: '/compare'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
        {pillars.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Link
              key={idx}
              href={item.href}
              onClick={() => soundEffects.playClick()}
              className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-[#0C1014] hover:bg-[#11171E] border border-white/[0.07] hover:border-white/[0.18] transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
                    style={{ backgroundColor: `${item.accent}15`, border: `1px solid ${item.accent}30` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: item.accent }} />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 bg-white/[0.03] px-2 py-0.5 rounded border border-white/[0.05]">
                    {item.metric}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-[#FFD400] transition-colors">
                  {item.title}
                </h3>
                <div className="text-[11px] font-mono text-zinc-400 mt-0.5 font-medium">
                  {item.subtitle}
                </div>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors">
                <span>View Benchmarks</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
