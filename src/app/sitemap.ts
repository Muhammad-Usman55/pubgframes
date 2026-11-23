import { MetadataRoute } from 'next';
import { DEVICES_DATA, ALL_BRANDS } from '@/data/devices';
import { GUIDES_DATA } from '@/data/guides';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pubgframes.com';

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0
    },
    {
      url: `${baseUrl}/fps-checker`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/compare`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/devices`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3
    }
  ];

  const brandRoutes: MetadataRoute.Sitemap = Array.from(
    new Set(DEVICES_DATA.map((d) => d.brandSlug))
  ).map((brandSlug) => ({
    url: `${baseUrl}/devices/${brandSlug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7
  }));

  const deviceRoutes: MetadataRoute.Sitemap = DEVICES_DATA.map((d) => ({
    url: `${baseUrl}/devices/${d.brandSlug}/${d.slug}`,
    lastModified: new Date(d.benchmarkDate),
    changeFrequency: 'weekly',
    priority: 0.8
  }));

  const guideRoutes: MetadataRoute.Sitemap = GUIDES_DATA.map((g) => ({
    url: `${baseUrl}/guides/${g.slug}`,
    lastModified: new Date(g.publishedDate),
    changeFrequency: 'monthly',
    priority: 0.7
  }));

  return [...staticRoutes, ...brandRoutes, ...deviceRoutes, ...guideRoutes];
}
