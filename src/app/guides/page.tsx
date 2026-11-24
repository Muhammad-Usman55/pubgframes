import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { GUIDES_DATA } from '@/data/guides';
import { Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'PUBG Mobile Gaming Performance Guides & FPS Tutorials',
  description:
    'Learn how to maximize PUBG Mobile frame rates, configure optimal competitive graphics settings, reduce thermal throttling, and choose capable gaming phones.'
};

export default function GuidesPage() {
  const featuredGuide = GUIDES_DATA.find((g) => g.featured) || GUIDES_DATA[0];
  const regularGuides = GUIDES_DATA.filter((g) => g.id !== featuredGuide.id);

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-10">
      <div className="space-y-2 max-w-[54ch]">
        <h1 className="text-[32px] sm:text-[48px] font-semibold tracking-[-0.025em] text-[#0b0c0e] leading-tight">
          Guides & Optimization
        </h1>
        <p className="text-[16px] sm:text-[18px] text-[#525866] leading-relaxed">
          Practical guides to reducing frame drops, understanding thermal throttling, and picking the best phone for PUBG Mobile.
        </p>
      </div>

      {featuredGuide && (
        <div className="rounded-lg bg-[#ffffff] border border-[#e2e5ea] p-6 sm:p-10 space-y-5">
          <div className="flex flex-wrap items-center gap-3 text-[13px] text-[#525866]">
            <span className="px-2.5 py-1 rounded bg-[#1f2de6] text-white font-medium">
              Featured guide
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {featuredGuide.readTime}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-semibold tracking-[-0.02em] text-[#0b0c0e] leading-tight max-w-[34ch]">
            <Link href={`/guides/${featuredGuide.slug}`} className="hover:text-[#1f2de6] transition-colors duration-150">
              {featuredGuide.title}
            </Link>
          </h2>

          <p className="text-[16px] text-[#525866] leading-relaxed max-w-[60ch]">
            {featuredGuide.excerpt}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
            <div className="text-[14px] text-[#525866]">
              By <strong className="text-[#0b0c0e] font-medium">{featuredGuide.author.name}</strong> &middot; {featuredGuide.author.role}
            </div>

            <Link
              href={`/guides/${featuredGuide.slug}`}
              className="px-5 py-2.5 rounded-md bg-[#1f2de6] hover:bg-[#1723bf] text-white font-medium text-[15px] transition-colors duration-150"
            >
              Read guide
            </Link>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {regularGuides.map((guide) => (
          <article
            key={guide.id}
            className="p-6 rounded-lg bg-[#ffffff] border border-[#e2e5ea] hover:border-[#c5cbd4] transition-colors duration-150 flex flex-col justify-between space-y-5"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[13px] text-[#525866]">
                <span className="px-2.5 py-0.5 rounded bg-[#eef0f3] text-[#0b0c0e] font-medium">
                  {guide.category}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {guide.readTime}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-[#0b0c0e] leading-snug">
                <Link href={`/guides/${guide.slug}`} className="hover:text-[#1f2de6]">
                  {guide.title}
                </Link>
              </h3>

              <p className="text-[15px] text-[#525866] leading-relaxed line-clamp-3">
                {guide.excerpt}
              </p>
            </div>

            <div className="pt-4 flex items-center justify-between text-[14px]">
              <span className="text-[#525866]">{guide.author.name}</span>
              <Link href={`/guides/${guide.slug}`} className="text-[#1f2de6] font-medium hover:underline">
                Read article
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
