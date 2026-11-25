import { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/siteConfig';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin', '/todos']
    },
    sitemap: [
      `${siteUrl}/sitemap.xml`,
      `${siteUrl}/devices/sitemap.xml`,
      `${siteUrl}/guides/sitemap.xml`
    ]
  };
}
