import { MetadataRoute } from 'next';
import { DEVICES_DATA } from '@/data/devices';
import { GUIDES_DATA } from '@/data/guides';

const CATALOG_LAST_MODIFIED = new Date('2026-11-25T00:00:00.000Z');

export function getCoreSitemapEntries(baseUrl: string): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: CATALOG_LAST_MODIFIED,
      changeFrequency: 'daily',
      priority: 1.0
    },
    {
      url: `${baseUrl}/fps-checker`,
      lastModified: CATALOG_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/compare`,
      lastModified: CATALOG_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/devices`,
      lastModified: CATALOG_LAST_MODIFIED,
      changeFrequency: 'daily',
      priority: 0.8
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: CATALOG_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/about`,
      lastModified: CATALOG_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.5
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: CATALOG_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: CATALOG_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.3
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: CATALOG_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.4
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: CATALOG_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.4
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: CATALOG_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.4
    }
  ];
}

export function getDevicesSitemapEntries(baseUrl: string): MetadataRoute.Sitemap {
  const brandRoutes: MetadataRoute.Sitemap = Array.from(
    new Set(DEVICES_DATA.map((d) => d.brandSlug))
  ).map((brandSlug) => ({
    url: `${baseUrl}/devices/${brandSlug}`,
    lastModified: CATALOG_LAST_MODIFIED,
    changeFrequency: 'weekly',
    priority: 0.7
  }));

  const deviceRoutes: MetadataRoute.Sitemap = DEVICES_DATA.map((d) => {
    const parsedDate = new Date(d.benchmarkDate);
    return {
      url: `${baseUrl}/devices/${d.brandSlug}/${d.slug}`,
      lastModified: Number.isNaN(parsedDate.getTime()) ? CATALOG_LAST_MODIFIED : parsedDate,
      changeFrequency: 'weekly',
      priority: 0.8
    };
  });

  return [...brandRoutes, ...deviceRoutes];
}

export function getGuidesSitemapEntries(baseUrl: string): MetadataRoute.Sitemap {
  return GUIDES_DATA.map((g) => {
    const parsedDate = new Date(g.publishedDate);
    return {
      url: `${baseUrl}/guides/${g.slug}`,
      lastModified: Number.isNaN(parsedDate.getTime()) ? CATALOG_LAST_MODIFIED : parsedDate,
      changeFrequency: 'monthly',
      priority: 0.7
    };
  });
}

export function getAllSitemapEntries(baseUrl: string): MetadataRoute.Sitemap {
  return [
    ...getCoreSitemapEntries(baseUrl),
    ...getDevicesSitemapEntries(baseUrl),
    ...getGuidesSitemapEntries(baseUrl)
  ];
}
