import crypto from 'node:crypto';
import type { NextRequest } from 'next/server';
import { readServerEnv } from '@/lib/adminSessionToken';
import { getGaMeasurementId } from '@/lib/siteConfig';

const GA4_COLLECT_ENDPOINT = 'https://www.google-analytics.com/mp/collect';

export interface Ga4ServerEventOptions {
  eventName: string;
  params?: Record<string, string | number | boolean | undefined>;
  request?: NextRequest;
  clientId?: string;
}

export interface Ga4SendResult {
  sent: boolean;
  reason?: 'missing_measurement_id' | 'missing_api_secret' | 'invalid_event_name' | 'request_failed';
  status?: number;
}

export function getServerGaMeasurementId(): string | null {
  const fromServerEnv = readServerEnv('GA_MEASUREMENT_ID', 'GA4_MEASUREMENT_ID');
  if (/^G-[A-Z0-9]{6,16}$/i.test(fromServerEnv)) {
    return fromServerEnv;
  }
  return getGaMeasurementId();
}

export function getGa4ApiSecret(): string {
  return readServerEnv('GA4_API_SECRET', 'GA_MEASUREMENT_PROTOCOL_SECRET');
}

export function isGa4MeasurementProtocolConfigured(): boolean {
  return Boolean(getServerGaMeasurementId() && getGa4ApiSecret());
}

/**
 * Extracts GA4 `client_id` from the browser `_ga` cookie (`GA1.1.<x>.<y>`)
 * when available, otherwise derives a stable anonymous fallback id.
 */
export function resolveGa4ClientId(request?: NextRequest, explicitClientId?: string): string {
  if (explicitClientId && /^\d+\.\d+$/.test(explicitClientId.trim())) {
    return explicitClientId.trim();
  }

  const gaCookie = request?.cookies.get('_ga')?.value || '';
  const match = gaCookie.match(/^GA\d+\.\d+\.(\d+\.\d+)$/);
  if (match?.[1]) {
    return match[1];
  }

  const ua = request?.headers.get('user-agent') || 'pubgframes-server';
  const digest = crypto.createHash('sha256').update(ua).digest();
  const partA = digest.readUInt32BE(0) || 1000000001;
  const partB = digest.readUInt32BE(4) || 1700000001;
  return `${partA}.${partB}`;
}

function sanitizeParams(
  params?: Record<string, string | number | boolean | undefined>
): Record<string, string | number> {
  const clean: Record<string, string | number> = {
    engagement_time_msec: 1
  };
  if (!params) return clean;

  for (const [rawKey, value] of Object.entries(params)) {
    const key = rawKey.toLowerCase().replace(/[^a-z0-9_]/g, '_').slice(0, 40);
    if (!key || value === undefined) continue;
    if (typeof value === 'number') {
      if (Number.isFinite(value)) clean[key] = value;
    } else if (typeof value === 'boolean') {
      clean[key] = value ? 'true' : 'false';
    } else {
      const trimmed = String(value).trim().slice(0, 100);
      if (trimmed) clean[key] = trimmed;
    }
  }
  return clean;
}

/**
 * Sends a server-side event to Google Analytics 4 via Measurement Protocol.
 * Fails open so user-facing API responses never block or error if GA4 is unconfigured.
 */
export async function sendGa4MeasurementEvent(
  options: Ga4ServerEventOptions
): Promise<Ga4SendResult> {
  const measurementId = getServerGaMeasurementId();
  if (!measurementId) {
    return { sent: false, reason: 'missing_measurement_id' };
  }

  const apiSecret = getGa4ApiSecret();
  if (!apiSecret) {
    return { sent: false, reason: 'missing_api_secret' };
  }

  const eventName = options.eventName.trim().toLowerCase().replace(/[^a-z0-9_]/g, '_');
  if (!/^[a-z][a-z0-9_]{0,39}$/.test(eventName)) {
    return { sent: false, reason: 'invalid_event_name' };
  }

  const endpoint = `${GA4_COLLECT_ENDPOINT}?measurement_id=${encodeURIComponent(
    measurementId
  )}&api_secret=${encodeURIComponent(apiSecret)}`;

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: resolveGa4ClientId(options.request, options.clientId),
        non_personalized_ads: true,
        events: [
          {
            name: eventName,
            params: sanitizeParams(options.params)
          }
        ]
      }),
      signal: AbortSignal.timeout(3000)
    });

    return {
      sent: res.ok,
      status: res.status
    };
  } catch {
    return { sent: false, reason: 'request_failed' };
  }
}
