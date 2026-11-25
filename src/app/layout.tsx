import type { Metadata, Viewport } from 'next';
import { Suspense } from 'react';
import Script from 'next/script';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MobileBottomNav } from '@/components/MobileBottomNav';
import { MotionObserver } from '@/components/MotionObserver';
import { TelemetryTracker } from '@/components/TelemetryTracker';
import { GoogleAnalyticsTracker } from '@/components/GoogleAnalyticsTracker';
import {
  getAdSenseClientId,
  getGaMeasurementId,
  getGoogleSiteVerification,
  getGoogleTagId,
  getSiteUrl
} from '@/lib/siteConfig';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-jakarta'
});

const siteUrl = getSiteUrl();
const adSenseClientId = getAdSenseClientId();
const gaMeasurementId = getGaMeasurementId();
const googleVerification = getGoogleSiteVerification();
const googleTagId = getGoogleTagId();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'PUBGFrames — Check Your Phone’s PUBG Frame Rate',
    template: '%s | PUBGFrames'
  },
  description:
    'Look up verified PUBG Mobile frame rates, graphics presets, thermal heat behavior, and gyroscope hardware ratings across 1,630+ smartphones and tablets.',
  keywords: [
    'PUBG FPS Checker',
    'PUBG Mobile FPS Calculator',
    'PUBG FPS for My Phone',
    'PUBG Mobile Supported Devices',
    'PUBG 90 FPS Phones',
    'PUBG 120 FPS Phones',
    'PUBG Mobile Benchmark',
    'Snapdragon vs Dimensity PUBG'
  ],
  authors: [{ name: 'PUBGFrames Hardware Lab' }],
  creator: 'PUBGFrames',
  publisher: 'PUBGFrames',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'PUBGFrames',
    title: 'PUBGFrames — Check Your Phone’s PUBG Frame Rate',
    description:
      'Verified PUBG Mobile FPS limits, graphics modes, and thermal comparisons across 1,630+ phones.',
    images: [
      {
        url: '/hero-reference.jpg',
        width: 1200,
        height: 630,
        alt: 'PUBGFrames PUBG Mobile FPS Estimator'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PUBGFrames — Check Your Phone’s PUBG Frame Rate',
    description:
      'Verified FPS limits, graphics modes, and thermal comparisons for PUBG Mobile.',
    images: ['/hero-reference.jpg']
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [{ url: '/icon.svg', sizes: '180x180', type: 'image/svg+xml' }],
    shortcut: ['/icon.svg']
  },
  ...(googleVerification
    ? {
        verification: {
          google: googleVerification
        }
      }
    : {}),
  ...(adSenseClientId
    ? {
        other: {
          'google-adsense-account': adSenseClientId
        }
      }
    : {}),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export const viewport: Viewport = {
  themeColor: '#eef0f3',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'PUBGFrames',
        description:
          'PUBG Mobile frame rate and smartphone gaming hardware database for 1,630+ phones and tablets',
        publisher: {
          '@type': 'Organization',
          '@id': `${siteUrl}/#organization`,
          name: 'PUBGFrames',
          url: siteUrl,
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/icon.svg`,
            width: 512,
            height: 512
          }
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${siteUrl}/devices?q={search_term_string}`
          },
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'WebApplication',
        '@id': `${siteUrl}/#webapp`,
        name: 'PUBGFrames FPS Checker',
        url: siteUrl,
        applicationCategory: 'GameApplication',
        operatingSystem: 'Android, iOS',
        description:
          'Smartphone gaming performance lookup and PUBG Mobile frame rate calculator.',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        }
      }
    ]
  };

  return (
    <html lang="en" className={jakarta.variable}>
      <head>
        {(googleTagId || gaMeasurementId) && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtm.js?id=${googleTagId || gaMeasurementId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: [
                  'window.dataLayer = window.dataLayer || [];',
                  'function gtag(){dataLayer.push(arguments);}',
                  "gtag('js', new Date());",
                  gaMeasurementId
                    ? `gtag('config', '${gaMeasurementId}', { anonymize_ip: true });`
                    : ''
                ]
                  .filter(Boolean)
                  .join('\n')
              }}
            />
          </>
        )}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-[#eef0f3] text-[#0b0c0e] antialiased min-h-dvh flex flex-col font-sans selection:bg-[#1f2de6] selection:text-white">
        {adSenseClientId && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adSenseClientId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
        <Suspense fallback={null}>
          <GoogleAnalyticsTracker
            gaId={gaMeasurementId}
            hasGoogleTag={Boolean(googleTagId || gaMeasurementId)}
          />
        </Suspense>
        <TelemetryTracker />
        <MotionObserver />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}
