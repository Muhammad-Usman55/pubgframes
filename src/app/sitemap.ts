import { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/siteConfig';
import { getAllSitemapEntries } from '@/lib/sitemapData';

export default function sitemap(): MetadataRoute.Sitemap {
  return getAllSitemapEntries(getSiteUrl());
}
