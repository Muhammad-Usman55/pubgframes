import crypto from 'node:crypto';
import { NextRequest, NextResponse } from 'next/server';
import { sendGa4MeasurementEvent } from '@/lib/gaMeasurementProtocol';
import { getSiteUrl } from '@/lib/siteConfig';
import { createAdminClient } from '@/utils/supabase/admin';

const VISITOR_COOKIE_NAME = 'pf_vid';
const PATH_DEDUP_WINDOW_MS = 30 * 60 * 1000;
const BOT_UA_PATTERN = /bot|crawler|spider|slurp|headless|lighthouse|bingpreview|googleother/i;

function resolveServerVisitorId(request: NextRequest, bodyVisitorId?: string): string {
  const fromBody = (bodyVisitorId || '').trim();
  if (/^[a-zA-Z0-9_-]{8,48}$/.test(fromBody)) {
    return fromBody;
  }

  const fromCookie = (request.cookies.get(VISITOR_COOKIE_NAME)?.value || '').trim();
  if (/^[a-zA-Z0-9_-]{8,48}$/.test(fromCookie)) {
    return fromCookie;
  }

  const forwarded = request.headers.get('x-forwarded-for') || '';
  const clientIp = forwarded.split(',')[0].trim() || request.headers.get('x-real-ip') || 'unknown';
  const rawUa = request.headers.get('user-agent') || 'unknown';
  return crypto
    .createHash('sha256')
    .update(`${clientIp}|${rawUa}`)
    .digest('hex')
    .slice(0, 20);
}

function attachVisitorCookie(request: NextRequest, response: NextResponse, visitorId: string): void {
  const proto = (request.headers.get('x-forwarded-proto') || '').split(',')[0].trim().toLowerCase();
  const isHttps = proto === 'https' || request.nextUrl.protocol === 'https:';
  response.cookies.set(VISITOR_COOKIE_NAME, visitorId, {
    httpOnly: false,
    sameSite: 'lax',
    secure: isHttps,
    path: '/',
    maxAge: 60 * 60 * 24 * 365
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      type?: 'pageview' | 'search';
      path?: string;
      visitorId?: string;
      deviceType?: string;
      country?: string;
      referrer?: string;
      query?: string;
      resultCount?: number;
      selectedDeviceId?: string;
    };

    const sb = createAdminClient();

    if (body.type === 'pageview' && body.path) {
      const cleanPath = body.path.slice(0, 240);
      if (cleanPath.startsWith('/admin') || cleanPath.startsWith('/api')) {
        return NextResponse.json({ ok: true, persisted: 'skipped' });
      }

      const rawUa = (request.headers.get('user-agent') || '').trim();
      if (BOT_UA_PATTERN.test(rawUa)) {
        return NextResponse.json({ ok: true, persisted: 'bot_skipped' });
      }

      const visitorId = resolveServerVisitorId(request, body.visitorId);
      const taggedUserAgent = `pf_vid:${visitorId}|${rawUa}`.slice(0, 200);

      if (!sb) {
        const res = NextResponse.json({ ok: true, persisted: 'none' });
        attachVisitorCookie(request, res, visitorId);
        return res;
      }

      const cutoffIso = new Date(Date.now() - PATH_DEDUP_WINDOW_MS).toISOString();
      const { data: recentRows } = await sb
        .from('analytics_page_views')
        .select('id')
        .eq('path', cleanPath)
        .like('user_agent', `pf_vid:${visitorId}|%`)
        .gte('timestamp', cutoffIso)
        .limit(1);

      if (recentRows && recentRows.length > 0) {
        const res = NextResponse.json({ ok: true, persisted: 'deduplicated' });
        attachVisitorCookie(request, res, visitorId);
        return res;
      }

      const { error } = await sb.from('analytics_page_views').insert({
        path: cleanPath,
        device_type: body.deviceType || 'mobile',
        country: body.country || 'Global',
        referrer: (body.referrer || '').slice(0, 300),
        user_agent: taggedUserAgent
      });

      const res = NextResponse.json({ ok: true, persisted: error ? 'table_pending' : 'supabase' });
      attachVisitorCookie(request, res, visitorId);
      return res;
    }

    if (body.type === 'search' && body.query?.trim()) {
      const normalizedQuery = body.query.trim().toLowerCase().slice(0, 120);
      const resultCount = typeof body.resultCount === 'number' ? body.resultCount : 0;

      let persisted: 'none' | 'table_pending' | 'supabase' = 'none';
      if (sb) {
        const { error } = await sb.from('search_queries').insert({
          query: normalizedQuery,
          result_count: resultCount,
          selected_device_id: body.selectedDeviceId || null
        });
        persisted = error ? 'table_pending' : 'supabase';
      }

      void sendGa4MeasurementEvent({
        eventName: 'fps_catalog_search',
        request,
        params: {
          page_location: request.headers.get('referer') || `${getSiteUrl()}/devices`,
          search_term: normalizedQuery,
          result_count: resultCount,
          selected_device_id: body.selectedDeviceId || undefined
        }
      });

      return NextResponse.json({ ok: true, persisted });
    }

    return NextResponse.json({ ok: false }, { status: 400 });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
