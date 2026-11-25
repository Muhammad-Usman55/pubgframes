function readConfigEnv(name: string): string {
  if (typeof process === 'undefined' || !process.env) return '';
  const val = process.env[name];
  return typeof val === 'string' ? val.trim().replace(/^['"]|['"]$/g, '').trim() : '';
}

export function getAdSenseClientId(): string | null {
  const rawAdSenseId =
    (process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || '').trim().replace(/^['"]|['"]$/g, '') ||
    readConfigEnv('NEXT_PUBLIC_ADSENSE_CLIENT_ID');
  return /^ca-pub-\d{10,20}$/.test(rawAdSenseId) ? rawAdSenseId : null;
}

const DEFAULT_GA_MEASUREMENT_ID = 'G-FEZB4X2HVC';
const DEFAULT_GOOGLE_SITE_VERIFICATION = '1_eR-BQXU2XK2n7seIS1-BRwE6GLcvwSDC5us33FzOc';
const DEFAULT_GOOGLE_TAG_ID = 'GTM-M75M9WZM';

export function getGaMeasurementId(): string | null {
  const rawGaId =
    (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '').trim().replace(/^['"]|['"]$/g, '') ||
    readConfigEnv('NEXT_PUBLIC_GA_MEASUREMENT_ID');
  return /^G-[A-Z0-9]{6,16}$/i.test(rawGaId) ? rawGaId : DEFAULT_GA_MEASUREMENT_ID;
}

export function getGoogleSiteVerification(): string | null {
  const rawGoogleVerification =
    (process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '').trim().replace(/^['"]|['"]$/g, '') ||
    readConfigEnv('NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION');
  if (rawGoogleVerification.length >= 10) {
    return rawGoogleVerification;
  }
  return DEFAULT_GOOGLE_SITE_VERIFICATION;
}

export function getGoogleTagId(): string | null {
  const rawGoogleTagId =
    (process.env.NEXT_PUBLIC_GOOGLE_TAG_ID || '').trim().replace(/^['"]|['"]$/g, '') ||
    readConfigEnv('NEXT_PUBLIC_GOOGLE_TAG_ID');
  if (/^(GTM|G|GT)-[A-Z0-9]{4,20}$/i.test(rawGoogleTagId)) {
    return rawGoogleTagId;
  }
  return DEFAULT_GOOGLE_TAG_ID;
}

export function getSiteUrl(): string {
  const configured = (
    (process.env.NEXT_PUBLIC_SITE_URL || '').trim() || readConfigEnv('NEXT_PUBLIC_SITE_URL')
  )
    .replace(/^['"]|['"]$/g, '')
    .replace(/\/$/, '');

  if (configured && !configured.includes('localhost')) {
    return configured;
  }

  const vercelProd = readConfigEnv('VERCEL_PROJECT_PRODUCTION_URL');
  if (vercelProd) {
    return `https://${vercelProd}`;
  }

  const vercelPreview = readConfigEnv('VERCEL_URL');
  if (vercelPreview) {
    return `https://${vercelPreview}`;
  }

  return 'https://pubgframes.vercel.app';
}
