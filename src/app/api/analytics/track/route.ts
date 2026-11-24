import { NextRequest, NextResponse } from 'next/server';
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
    if (!sb) {
      return NextResponse.json({ ok: true, persisted: 'none' });
    }

    if (body.type === 'pageview' && body.path) {
      if (body.path.startsWith('/admin') || body.path.startsWith('/api')) {
        return NextResponse.json({ ok: true, persisted: 'skipped' });
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
      const { error } = await sb.from('search_queries').insert({
        query: body.query.trim().toLowerCase().slice(0, 120),
        result_count: typeof body.resultCount === 'number' ? body.resultCount : 0,
        selected_device_id: body.selectedDeviceId || null
      });
      return NextResponse.json({ ok: true, persisted: error ? 'table_pending' : 'supabase' });
    }

    return NextResponse.json({ ok: false }, { status: 400 });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
