import React from 'react';
import Link from 'next/link';
import { TrendingUp, Scale, Lightbulb, Smartphone, ChevronRight } from 'lucide-react';

export const FeatureCards = () => {
  const features = [
    {
      title: 'FPS Checker',
      description: 'Check real-time FPS',
      icon: TrendingUp,
      iconColor: '#39F56A',
      iconBg: 'rgba(57, 245, 106, 0.12)',
      borderColor: 'hover:border-[#39F56A]/40',
      href: '#fps-calculator'
    },
    {
      title: 'Compare Modes',
      description: 'HD, Smooth, Ultra & more',
      icon: Scale,
      iconColor: '#A855F7',
      iconBg: 'rgba(168, 85, 247, 0.12)',
      borderColor: 'hover:border-[#A855F7]/40',
      href: '/compare'
    },
    {
      title: 'Performance Tips',
      description: 'Get expert tips to boost FPS',
      icon: Lightbulb,
      iconColor: '#28A9FF',
      iconBg: 'rgba(40, 169, 255, 0.12)',
      borderColor: 'hover:border-[#28A9FF]/40',
      href: '/guides'
    },
    {
      title: 'Device Support',
      description: 'Works on all Android devices',
      icon: Smartphone,
      iconColor: '#FF9A24',
      iconBg: 'rgba(255, 154, 36, 0.12)',
      borderColor: 'hover:border-[#FF9A24]/40',
      href: '/devices'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Link
              key={idx}
              href={item.href}
              className={`group flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#171D21] border border-white/5 ${item.borderColor} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
            >
              <div className="flex items-center gap-3.5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: item.iconBg, color: item.iconColor }}
                >
                  <Icon className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5">{item.description}</p>
                </div>
              </div>

              <div className="w-7 h-7 rounded-full bg-[#101518] flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
