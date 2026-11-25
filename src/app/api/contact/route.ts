import { NextRequest, NextResponse } from 'next/server';
import { sendGa4MeasurementEvent } from '@/lib/gaMeasurementProtocol';
import { getSiteUrl } from '@/lib/siteConfig';
import { createAdminClient } from '@/utils/supabase/admin';

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      topic?: string;
      deviceModel?: string;
      message?: string;
    };

    const name = (body.name || '').trim();
    const email = (body.email || '').trim();
    const message = (body.message || '').trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Please complete your name, email address, and message.' },
        { status: 400 }
      );
    }

    const topic = (body.topic || 'Benchmark Submission').slice(0, 80);
    const deviceModel = (body.deviceModel || '').slice(0, 120);

    const sb = createAdminClient();
    let persisted: 'none' | 'table_pending' | 'supabase' = 'none';

    if (sb) {
      const { error } = await sb.from('contact_messages').insert({
        name: name.slice(0, 120),
        email: email.slice(0, 160),
        topic,
        device_model: deviceModel,
        message: message.slice(0, 2000)
      });
      persisted = error ? 'table_pending' : 'supabase';
    }

    void sendGa4MeasurementEvent({
      eventName: 'generate_lead',
      request,
      params: {
        page_location: `${getSiteUrl()}/contact`,
        topic,
        device_model: deviceModel || undefined,
        persisted
      }
    });

    return NextResponse.json({ ok: true, persisted });
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }
}
