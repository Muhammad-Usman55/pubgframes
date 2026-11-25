import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp']
  },
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css'
      }
    }
  },
  async headers() {
    const xmlHeaders = [
      { key: 'Content-Type', value: 'application/xml; charset=utf-8' },
      { key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=86400' }
    ];
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' }
        ]
      },
      ...['/sitemap.xml', '/sitemap-index.xml', '/sitemap-core.xml', '/devices/sitemap.xml', '/guides/sitemap.xml'].map(
        (source) => ({ source, headers: xmlHeaders })
      ),
      {
        source: '/robots.txt',
        headers: [
          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=86400' }
        ]
      }
    ];
  }
};

export default nextConfig;
