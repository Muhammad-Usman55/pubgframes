const rawAdSenseId = (process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || '').trim();

export function getAdSenseClientId(): string | null {
  return /^ca-pub-\d{10,20}$/.test(rawAdSenseId) ? rawAdSenseId : null;
}

export function getSiteUrl(): string {
  const configured = (process.env.NEXT_PUBLIC_SITE_URL || '').trim().replace(/\/$/, '');
  if (configured && !configured.includes('localhost')) {
    return configured;
  }

  const vercelProd = (process.env.VERCEL_PROJECT_PRODUCTION_URL || '').trim();
  if (vercelProd) {
    return `https://${vercelProd}`;
  }

  const vercelPreview = (process.env.VERCEL_URL || '').trim();
  if (vercelPreview) {
    return `https://${vercelPreview}`;
  }

  return 'https://pubgframes.com';
}
