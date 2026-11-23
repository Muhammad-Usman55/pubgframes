import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { GUIDES_DATA } from '@/data/guides';
import { BookOpen, Clock, Calendar, ArrowUpRight, Flame, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'PUBG Mobile Gaming Performance Guides & FPS Tutorials',
  description:
    'Learn how to maximize PUBG Mobile frame rates, configure optimal competitive graphics settings, eliminate thermal throttling, and choose the best gaming phones.'
};

export default function GuidesPage() {
  const featuredGuide = GUIDES_DATA.find((g) => g.featured) || GUIDES_DATA[0];
  const regularGuides = GUIDES_DATA.filter((g) => g.id !== featuredGuide.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-bold">
          <BookOpen className="w-3.5 h-3.5" />
          <span>PUBGFrames Academy & Guides</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Smartphone Gaming <span className="text-[#FFD400]">Guides & Optimization</span>
        </h1>
        <p className="text-xs sm:text-sm text-gray-400 max-w-2xl">
          Actionable, verified guides to eliminate lag, unlock maximum frame rates, and choose the ultimate competitive gaming gear.
        </p>
      </div>

      {/* Featured Article Card */}
      {featuredGuide && (
        <div className="relative rounded-3xl bg-gradient-to-r from-[#171D21] via-[#1C2329] to-[#171D21] border border-[#FFD400]/30 p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD400]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="flex items-center gap-3 text-xs">
              <span className="px-3 py-1 rounded-full bg-[#FFD400] text-black font-extrabold uppercase tracking-wide text-[11px]">
                Featured Guide
              </span>
              <span className="text-gray-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {featuredGuide.readTime}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white group-hover:text-[#FFD400] transition-colors leading-tight">
              <Link href={`/guides/${featuredGuide.slug}`}>
                {featuredGuide.title}
              </Link>
            </h2>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {featuredGuide.excerpt}
            </p>

            <div className="pt-2 flex items-center justify-between">
              <div className="text-xs text-gray-400">
                By <strong className="text-white">{featuredGuide.author.name}</strong> • {featuredGuide.author.role}
              </div>

              <Link
                href={`/guides/${featuredGuide.slug}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FFD400] text-black font-extrabold text-xs hover:bg-yellow-400"
              >
                <span>Read Full Guide</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Guides Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {regularGuides.map((guide) => (
          <div
            key={guide.id}
            className="group p-6 rounded-2xl bg-[#171D21] border border-white/5 hover:border-white/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-gray-300 font-semibold text-[11px]">
                  {guide.category}
                </span>
                <span className="text-gray-500 text-[11px] flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {guide.readTime}
                </span>
              </div>

              <h3 className="text-lg font-black text-white group-hover:text-[#FFD400] transition-colors leading-snug">
                <Link href={`/guides/${guide.slug}`}>
                  {guide.title}
                </Link>
              </h3>

              <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                {guide.excerpt}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-gray-500">{guide.author.name}</span>
              <Link
                href={`/guides/${guide.slug}`}
                className="text-[#FFD400] font-bold flex items-center gap-1 group-hover:underline"
              >
                <span>Read Article</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
