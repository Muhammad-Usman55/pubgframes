import { MetadataRoute } from 'next';
import { DEVICES_DATA } from '@/data/devices';
import { GUIDES_DATA } from '@/data/guides';

export const CATALOG_LAST_MODIFIED_DATE = '2026-11-25';
const CATALOG_LAST_MODIFIED = new Date(`${CATALOG_LAST_MODIFIED_DATE}T00:00:00.000Z`);

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function formatW3cDate(value?: string | Date): string {
  if (!value) return CATALOG_LAST_MODIFIED_DATE;
  const parsed = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(parsed.getTime())) return CATALOG_LAST_MODIFIED_DATE;
  const maxAllowed = CATALOG_LAST_MODIFIED.getTime();
  const safeDate = parsed.getTime() > maxAllowed ? CATALOG_LAST_MODIFIED : parsed;
  return safeDate.toISOString().slice(0, 10);
}

export function getCoreSitemapEntries(baseUrl: string): MetadataRoute.Sitemap {
  const cleanBase = baseUrl.replace(/\/+$/, '');
  return [
    {
      url: `${cleanBase}/`,
      lastModified: CATALOG_LAST_MODIFIED,
      changeFrequency: 'daily',
      priority: 1.0
    },
    {
      url: `${cleanBase}/fps-checker`,
      lastModified: CATALOG_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: `${cleanBase}/compare`,
      lastModified: CATALOG_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: `${cleanBase}/devices`,
      lastModified: CATALOG_LAST_MODIFIED,
      changeFrequency: 'daily',
      priority: 0.8
    },
    {
      url: `${cleanBase}/guides`,
      lastModified: CATALOG_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.8
    },
    {
      url: `${cleanBase}/about`,
      lastModified: CATALOG_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.5
    },
    {
      url: `${cleanBase}/contact`,
      lastModified: CATALOG_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${cleanBase}/disclaimer`,
      lastModified: CATALOG_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.3
    },
    {
      url: `${cleanBase}/privacy-policy`,
      lastModified: CATALOG_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.4
    },
    {
      url: `${cleanBase}/cookie-policy`,
      lastModified: CATALOG_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.4
    },
    {
      url: `${cleanBase}/terms`,
      lastModified: CATALOG_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.4
    }
  ];
}

export function getDevicesSitemapEntries(baseUrl: string): MetadataRoute.Sitemap {
  const cleanBase = baseUrl.replace(/\/+$/, '');
  const brandSlugs = Array.from(
    new Set(
      DEVICES_DATA.map((d) => d.brandSlug?.trim()).filter(
        (slug): slug is string => Boolean(slug && /^[a-z0-9-]+$/i.test(slug))
      )
    )
  ).sort();

  const brandRoutes: MetadataRoute.Sitemap = brandSlugs.map((brandSlug) => ({
    url: `${cleanBase}/devices/${brandSlug}`,
    lastModified: CATALOG_LAST_MODIFIED,
    changeFrequency: 'weekly',
    priority: 0.7
  }));

  const seenDeviceUrls = new Set<string>();
  const deviceRoutes: MetadataRoute.Sitemap = [];
  for (const d of DEVICES_DATA) {
    const brandSlug = d.brandSlug?.trim();
    const modelSlug = d.slug?.trim();
    if (!brandSlug || !modelSlug) continue;
    if (!/^[a-z0-9-]+$/i.test(brandSlug) || !/^[a-z0-9-]+$/i.test(modelSlug)) continue;

    const url = `${cleanBase}/devices/${brandSlug}/${modelSlug}`;
    if (seenDeviceUrls.has(url)) continue;
    seenDeviceUrls.add(url);

    const parsedDate = new Date(d.benchmarkDate);
    deviceRoutes.push({
      url,
      lastModified: Number.isNaN(parsedDate.getTime()) ? CATALOG_LAST_MODIFIED : parsedDate,
      changeFrequency: 'weekly',
      priority: 0.8
    });
  }

  return [...brandRoutes, ...deviceRoutes];
}

export function getGuidesSitemapEntries(baseUrl: string): MetadataRoute.Sitemap {
  const cleanBase = baseUrl.replace(/\/+$/, '');
  return GUIDES_DATA.map((g) => {
    const parsedDate = new Date(g.publishedDate);
    return {
      url: `${cleanBase}/guides/${g.slug}`,
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

export function buildUrlsetXml(entries: MetadataRoute.Sitemap): string {
  const urls = entries
    .map((entry) => {
      const lastmod = formatW3cDate(entry.lastModified);
      const priority = typeof entry.priority === 'number' ? entry.priority.toFixed(1) : '0.5';
      const changefreq = entry.changeFrequency ? `\n    <changefreq>${entry.changeFrequency}</changefreq>` : '';
      return `  <url>\n    <loc>${escapeXml(entry.url)}</loc>\n    <lastmod>${lastmod}</lastmod>${changefreq}\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function buildSitemapIndexXml(sitemaps: Array<{ url: string; lastModified?: string | Date }>): string {
  const items = sitemaps
    .map(
      (item) =>
        `  <sitemap>\n    <loc>${escapeXml(item.url)}</loc>\n    <lastmod>${formatW3cDate(item.lastModified)}</lastmod>\n  </sitemap>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</sitemapindex>\n`;
}
