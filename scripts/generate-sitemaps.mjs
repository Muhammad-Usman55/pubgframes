import fs from 'node:fs';
import path from 'node:path';
import Module from 'node:module';
import { createRequire } from 'node:module';
import ts from 'typescript';

const require = createRequire(import.meta.url);
const projectRoot = process.cwd();
const srcRoot = path.join(projectRoot, 'src');

const originalResolveFilename = Module._resolveFilename;
Module._resolveFilename = function (request, parent, isMain, options) {
  if (typeof request === 'string' && request.startsWith('@/')) {
    const resolvedAlias = path.join(srcRoot, request.slice(2));
    return originalResolveFilename.call(this, resolvedAlias, parent, isMain, options);
  }
  return originalResolveFilename.call(this, request, parent, isMain, options);
};

require.extensions['.ts'] = function (mod, filename) {
  const source = fs.readFileSync(filename, 'utf8');
  const transpiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      esModuleInterop: true,
      moduleResolution: ts.ModuleResolutionKind.Node10
    },
    fileName: filename
  });
  return mod._compile(transpiled.outputText, filename);
};

const { getSiteUrl } = require(path.join(srcRoot, 'lib', 'siteConfig.ts'));
const {
  CATALOG_LAST_MODIFIED_DATE,
  getCoreSitemapEntries,
  getDevicesSitemapEntries,
  getGuidesSitemapEntries,
  getAllSitemapEntries,
  buildUrlsetXml,
  buildSitemapIndexXml
} = require(path.join(srcRoot, 'lib', 'sitemapData.ts'));

const baseUrl = getSiteUrl();
const coreEntries = getCoreSitemapEntries(baseUrl);
const devicesCatalogEntries = [
  {
    url: `${baseUrl}/devices`,
    lastModified: new Date(`${CATALOG_LAST_MODIFIED_DATE}T00:00:00.000Z`),
    changeFrequency: 'daily',
    priority: 0.8
  },
  ...getDevicesSitemapEntries(baseUrl)
];
const guidesCatalogEntries = [
  {
    url: `${baseUrl}/guides`,
    lastModified: new Date(`${CATALOG_LAST_MODIFIED_DATE}T00:00:00.000Z`),
    changeFrequency: 'weekly',
    priority: 0.8
  },
  ...getGuidesSitemapEntries(baseUrl)
];
const allEntries = getAllSitemapEntries(baseUrl);

function writePublicFile(relativePath, contents) {
  const fullPath = path.join(projectRoot, 'public', relativePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, contents, 'utf8');
}

writePublicFile('sitemap.xml', buildUrlsetXml(allEntries));
writePublicFile('sitemap-core.xml', buildUrlsetXml(coreEntries));
writePublicFile('devices/sitemap.xml', buildUrlsetXml(devicesCatalogEntries));
writePublicFile('guides/sitemap.xml', buildUrlsetXml(guidesCatalogEntries));
writePublicFile(
  'sitemap-index.xml',
  buildSitemapIndexXml([
    { url: `${baseUrl}/sitemap-core.xml`, lastModified: CATALOG_LAST_MODIFIED_DATE },
    { url: `${baseUrl}/devices/sitemap.xml`, lastModified: CATALOG_LAST_MODIFIED_DATE },
    { url: `${baseUrl}/guides/sitemap.xml`, lastModified: CATALOG_LAST_MODIFIED_DATE }
  ])
);

const robotsTxt = [
  'User-agent: *',
  'Allow: /',
  'Disallow: /api/',
  'Disallow: /admin',
  'Disallow: /todos',
  '',
  `Sitemap: ${baseUrl}/sitemap.xml`,
  ''
].join('\n');

writePublicFile('robots.txt', robotsTxt);

console.log(
  `Generated static sitemaps for ${baseUrl}: total=${allEntries.length}, core=${coreEntries.length}, devices=${devicesCatalogEntries.length}, guides=${guidesCatalogEntries.length}`
);
