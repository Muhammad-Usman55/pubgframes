import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MobileBottomNav } from '@/components/MobileBottomNav';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pubgframes.com'),
  title: {
    default: 'PUBGFrames — Check Your PUBG FPS. Play Better.',
    template: '%s | PUBGFrames'
  },
  description:
    'Discover how your smartphone performs in PUBG Mobile. Select your device, choose your graphics settings (Smooth, Balanced, HD, Ultra HD), and explore verified estimated gaming FPS.',
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
  authors: [{ name: 'PUBGFrames Gaming Labs' }],
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
    title: 'PUBGFrames — Check Your PUBG FPS Like Never Before!',
    description:
      'Check real-time FPS estimates, compare graphics modes, and find the best gaming phones for PUBG Mobile.',
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
    title: 'PUBGFrames — Check Your PUBG FPS. Play Better.',
    description:
      'Check real-time FPS estimates, compare graphics modes, and find the best gaming phones for PUBG Mobile.',
    images: ['/hero-reference.jpg']
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
  themeColor: '#080B0D',
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
    '@type': 'WebApplication',
    name: 'PUBGFrames',
    url: 'https://pubgframes.com',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Android, iOS',
    description:
      'Smartphone gaming performance information platform and FPS estimator for PUBG Mobile players.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    }
  };

  return (
    <html lang="en" className={`dark scroll-smooth ${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-[#080B0D] tactical-grid-bg text-gray-100 antialiased min-h-screen flex flex-col font-sans selection:bg-[#FFD400] selection:text-black">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}
