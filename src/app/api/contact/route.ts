import { NextRequest, NextResponse } from 'next/server';
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

    const sb = createAdminClient();
    if (!sb) {
      return NextResponse.json({ ok: true, persisted: 'none' });
    }

    const { error } = await sb.from('contact_messages').insert({
      name: name.slice(0, 120),
      email: email.slice(0, 160),
      topic: (body.topic || 'Benchmark Submission').slice(0, 80),
      device_model: (body.deviceModel || '').slice(0, 120),
      message: message.slice(0, 2000)
    });

    if (error) {
      return NextResponse.json({ ok: true, persisted: 'table_pending' });
    }

    return NextResponse.json({ ok: true, persisted: 'supabase' });
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }
}
