import { NextRequest, NextResponse } from 'next/server';
import { sendGa4MeasurementEvent } from '@/lib/gaMeasurementProtocol';
import { createAdminClient } from '@/utils/supabase/admin';

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      type?: 'pageview' | 'search';
      path?: string;
      deviceType?: string;
      country?: string;
      referrer?: string;
      query?: string;
      resultCount?: number;
      selectedDeviceId?: string;
    };

    const sb = createAdminClient();

    if (body.type === 'pageview' && body.path) {
      if (body.path.startsWith('/admin') || body.path.startsWith('/api')) {
        return NextResponse.json({ ok: true, persisted: 'skipped' });
      }
      if (!sb) {
        return NextResponse.json({ ok: true, persisted: 'none' });
      }
      const { error } = await sb.from('analytics_page_views').insert({
        path: body.path.slice(0, 240),
        device_type: body.deviceType || 'mobile',
        country: body.country || 'Global',
        referrer: (body.referrer || '').slice(0, 300),
        user_agent: (request.headers.get('user-agent') || '').slice(0, 200)
      });
      return NextResponse.json({ ok: true, persisted: error ? 'table_pending' : 'supabase' });
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
