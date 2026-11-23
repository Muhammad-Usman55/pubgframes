import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { GUIDES_DATA, getGuideBySlug } from '@/data/guides';
import { BookOpen, Clock, Calendar, ChevronRight, Zap, ShieldCheck, ArrowLeft, Share2 } from 'lucide-react';

interface GuideArticleProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return GUIDES_DATA.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: GuideArticleProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return { title: 'Guide Not Found' };

  return {
    title: `${guide.title} — PUBGFrames`,
    description: guide.excerpt,
    openGraph: {
      title: guide.title,
      description: guide.excerpt,
      type: 'article',
      publishedTime: guide.publishedDate
    }
  };
}

export default async function GuideDetailPage({ params }: GuideArticleProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.excerpt,
    datePublished: guide.publishedDate,
    author: {
      '@type': 'Person',
      name: guide.author.name,
      jobTitle: guide.author.role
    },
    publisher: {
      '@type': 'Organization',
      name: 'PUBGFrames'
    }
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-gray-400">
        <Link href="/" className="hover:text-white">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/guides" className="hover:text-white">Guides</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-[#FFD400] font-bold truncate">{guide.title}</span>
      </nav>

      {/* Article Header */}
      <header className="space-y-4 pb-6 border-b border-white/10">
        <div className="flex items-center gap-3 text-xs">
          <span className="px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] font-bold">
            {guide.category}
          </span>
          <span className="text-gray-400 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {guide.readTime}
          </span>
          <span className="text-gray-400 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {guide.publishedDate}
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
          {guide.title}
        </h1>

        <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
          {guide.subtitle}
        </p>

        {/* Author byline */}
        <div className="pt-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#171D21] border border-white/10 flex items-center justify-center font-bold text-[#FFD400] text-xs">
              {guide.author.name.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <div className="text-xs font-bold text-white">{guide.author.name}</div>
              <div className="text-[11px] text-gray-400">{guide.author.role}</div>
            </div>
          </div>
        </div>
      </header>

      {/* Article Body Content */}
      <div className="space-y-8 text-gray-200 leading-relaxed text-sm sm:text-base">
        {guide.content.map((section, idx) => (
          <section key={idx} className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {section.sectionTitle}
            </h2>

            {section.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="text-gray-300 leading-relaxed">
                {p}
              </p>
            ))}

            {section.bulletPoints && section.bulletPoints.length > 0 && (
              <ul className="space-y-2 p-4 rounded-xl bg-[#171D21] border border-white/5 text-xs sm:text-sm">
                {section.bulletPoints.map((bp, bpIdx) => (
                  <li key={bpIdx} className="flex items-start gap-2.5">
                    <span className="text-[#39F56A] font-bold">✓</span>
                    <span>{bp}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.proTip && (
              <div className="p-4 rounded-xl bg-[#FFD400]/10 border border-[#FFD400]/30 text-xs sm:text-sm text-yellow-200 space-y-1">
                <div className="font-extrabold text-[#FFD400] uppercase tracking-wide flex items-center gap-1.5 text-xs">
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  <span>Pro Tip from PUBGFrames Lab</span>
                </div>
                <p className="leading-relaxed">{section.proTip}</p>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Bottom CTA Box */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#171D21] border border-[#FFD400]/30 space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-black text-white">Wondering how your device performs?</h3>
            <p className="text-xs text-gray-400 mt-0.5">
              Run our verified benchmark calculator on your exact smartphone model.
            </p>
          </div>
          <Link
            href="/fps-checker"
            className="px-6 py-3 rounded-full bg-[#FFD400] text-black font-extrabold text-xs hover:bg-yellow-400 whitespace-nowrap"
          >
            Check My FPS Now →
          </Link>
        </div>
      </div>
    </article>
  );
}
