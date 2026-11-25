import { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/siteConfig';
import { getGuidesSitemapEntries } from '@/lib/sitemapData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  return [
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date('2026-11-25T00:00:00.000Z'),
      changeFrequency: 'weekly',
      priority: 0.8
    },
    ...getGuidesSitemapEntries(baseUrl)
  ];
}
