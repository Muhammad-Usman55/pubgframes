import { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/siteConfig';
import { getDevicesSitemapEntries } from '@/lib/sitemapData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  return [
    {
      url: `${baseUrl}/devices`,
      lastModified: new Date('2026-11-25T00:00:00.000Z'),
      changeFrequency: 'daily',
      priority: 0.8
    },
    ...getDevicesSitemapEntries(baseUrl)
  ];
}
