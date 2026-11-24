import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MobileBottomNav } from '@/components/MobileBottomNav';
import { MotionObserver } from '@/components/MotionObserver';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-jakarta'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pubgframes.com'),
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
    url: 'https://pubgframes.com',
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
    apple: [
      { url: '/icon.svg', sizes: '180x180', type: 'image/svg+xml' }
    ],
    shortcut: ['/icon.svg']
  },
  other: {
    'google-adsense-account': process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-pubgframes'
  },
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
        '@id': 'https://pubgframes.com/#website',
        url: 'https://pubgframes.com',
        name: 'PUBGFrames',
        description: 'PUBG Mobile frame rate and smartphone gaming hardware database for 1,630+ phones and tablets',
        publisher: {
          '@type': 'Organization',
          '@id': 'https://pubgframes.com/#organization',
          name: 'PUBGFrames',
          url: 'https://pubgframes.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://pubgframes.com/icon.svg',
            width: 512,
            height: 512
          }
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://pubgframes.com/devices?q={search_term_string}'
          },
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'WebApplication',
        '@id': 'https://pubgframes.com/#webapp',
        name: 'PUBGFrames FPS Checker',
        url: 'https://pubgframes.com',
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
    <html lang="en" className={`scroll-smooth ${jakarta.variable}`}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,600,700&display=swap" rel="stylesheet" />
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
        <MotionObserver />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}
