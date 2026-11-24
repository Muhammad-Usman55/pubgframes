import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { GUIDES_DATA, getGuideBySlug } from '@/data/guides';
import { Clock, Calendar, ChevronRight, Check } from 'lucide-react';

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
    <article className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[14px] text-[#525866]">
        <Link href="/" className="hover:text-[#0b0c0e]">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href="/guides" className="hover:text-[#0b0c0e]">Guides</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-[#0b0c0e] font-medium truncate">{guide.title}</span>
      </nav>

      <header className="space-y-4 pb-6">
        <div className="flex flex-wrap items-center gap-3 text-[13px] text-[#525866]">
          <span className="px-2.5 py-1 rounded bg-[#e2e5ea] text-[#0b0c0e] font-medium">
            {guide.category}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {guide.readTime}
          </span>
          <span className="inline-flex items-center gap-1.5 tabular-nums">
            <Calendar className="w-3.5 h-3.5" />
            {guide.publishedDate}
          </span>
        </div>

        <h1 className="text-[30px] sm:text-[42px] font-semibold tracking-[-0.025em] text-[#0b0c0e] leading-tight">
          {guide.title}
        </h1>

        <p className="text-[17px] text-[#525866] leading-relaxed">
          {guide.subtitle}
        </p>

        <div className="pt-2 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#111317] text-white flex items-center justify-center font-medium text-xs">
            {guide.author.name.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <div className="text-[14px] font-semibold text-[#0b0c0e]">{guide.author.name}</div>
            <div className="text-[13px] text-[#525866]">{guide.author.role}</div>
          </div>
        </div>
      </header>

      <div className="space-y-8 text-[#0b0c0e] leading-relaxed text-[16px] sm:text-[17px]">
        {guide.content.map((section, idx) => (
          <section key={idx} className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-[#0b0c0e]">
              {section.sectionTitle}
            </h2>

            {section.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="text-[#272b33] leading-relaxed">
                {p}
              </p>
            ))}

            {section.bulletPoints && section.bulletPoints.length > 0 && (
              <ul className="space-y-2.5 p-5 rounded-lg bg-[#ffffff] border border-[#e2e5ea] text-[15px]">
                {section.bulletPoints.map((bp, bpIdx) => (
                  <li key={bpIdx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#15803d] shrink-0 mt-1" />
                    <span>{bp}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.proTip && (
              <div className="p-5 rounded-lg bg-[#e2e5ea] text-[15px] text-[#0b0c0e] space-y-1">
                <div className="font-semibold text-[#1f2de6]">Lab Note</div>
                <p className="leading-relaxed">{section.proTip}</p>
              </div>
            )}
          </section>
        ))}
      </div>

      <div className="p-6 sm:p-8 rounded-lg bg-[#111317] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">Check your phone’s FPS</h3>
          <p className="text-[14px] text-[#a6aebc] mt-1">
            Look up frame rate limits and heat ratings for your exact device model.
          </p>
        </div>
        <Link
          href="/fps-checker"
          className="px-5 py-3 rounded-md bg-[#1f2de6] hover:bg-[#1723bf] text-white font-medium text-[15px] shrink-0"
        >
          Open FPS Checker
        </Link>
      </div>
    </article>
  );
}
