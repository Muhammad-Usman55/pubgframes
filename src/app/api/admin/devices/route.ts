import { NextRequest, NextResponse } from 'next/server';
import { getVerifiedAdminSession } from '@/lib/adminServerAuth';
import { createAdminClient } from '@/utils/supabase/admin';
import { DeviceInfo } from '@/types/device';

interface DbDeviceRow {
  id: string;
  brand: string;
  model: string;
  slug: string;
  brand_slug: string;
  release_year: number | null;
  chipset: string;
  gpu: string;
  ram_options: string[] | null;
  display_refresh_rate: number | null;
  screen_size: string | null;
  battery_capacity: number | null;
  antutu_score: number | null;
  gyroscope: DeviceInfo['gyroscope'] | null;
  cooling_system: string | null;
  pubg_official_partner: boolean | null;
  max_supported_fps: DeviceInfo['maxSupportedFps'] | null;
  overall_gaming_rating: number | null;
  popularity_rank: number | null;
  benchmark_date: string | null;
  benchmark_source: string | null;
  graphics_modes: DeviceInfo['graphicsModes'];
  pros: string[] | null;
  cons: string[] | null;
  verdict: string | null;
  is_unsupported_hardware: boolean | null;
}

function rowToDevice(row: DbDeviceRow): DeviceInfo {
  return {
    id: row.id,
    brand: row.brand,
    model: row.model,
    slug: row.slug,
    brandSlug: row.brand_slug,
    releaseYear: row.release_year || 2025,
    chipset: row.chipset,
    gpu: row.gpu,
    ramOptions: Array.isArray(row.ram_options) ? row.ram_options : [],
    displayRefreshRate: row.display_refresh_rate || 60,
    screenSize: row.screen_size || '',
    batteryCapacity: row.battery_capacity || 5000,
    antutuScore: row.antutu_score || undefined,
    gyroscope: row.gyroscope || 'Hardware Gyro',
    coolingSystem: row.cooling_system || '',
    pubgOfficialPartner: Boolean(row.pubg_official_partner),
    maxSupportedFps: (row.max_supported_fps ?? 60) as DeviceInfo['maxSupportedFps'],
    overallGamingRating: Number(row.overall_gaming_rating ?? 8.0),
    popularityRank: row.popularity_rank || 100,
    benchmarkDate: row.benchmark_date || new Date().toISOString().split('T')[0],
    benchmarkSource: row.benchmark_source || 'PUBGFrames Admin Verified Benchmark',
    graphicsModes: row.graphics_modes,
    pros: Array.isArray(row.pros) ? row.pros : [],
    cons: Array.isArray(row.cons) ? row.cons : [],
    verdict: row.verdict || '',
    isUnsupportedHardware: Boolean(row.is_unsupported_hardware)
  };
}

function deviceToRow(d: DeviceInfo) {
  return {
    id: d.id,
    brand: d.brand,
    model: d.model,
    slug: d.slug,
    brand_slug: d.brandSlug,
    release_year: d.releaseYear,
    chipset: d.chipset,
    gpu: d.gpu,
    ram_options: d.ramOptions,
    display_refresh_rate: d.displayRefreshRate,
    screen_size: d.screenSize,
    battery_capacity: d.batteryCapacity,
    antutu_score: d.antutuScore ?? null,
    gyroscope: d.gyroscope,
    cooling_system: d.coolingSystem,
    pubg_official_partner: Boolean(d.pubgOfficialPartner),
    max_supported_fps: d.maxSupportedFps,
    overall_gaming_rating: d.overallGamingRating,
    popularity_rank: d.popularityRank,
    benchmark_date: d.benchmarkDate,
    benchmark_source: d.benchmarkSource,
    graphics_modes: d.graphicsModes,
    pros: d.pros,
    cons: d.cons,
    verdict: d.verdict,
    is_unsupported_hardware: Boolean(d.isUnsupportedHardware),
    updated_at: new Date().toISOString()
  };
}

export async function GET() {
  const session = await getVerifiedAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const sb = createAdminClient();
  if (!sb) {
    return NextResponse.json({ devices: [], tableReady: false });
  }

  const { data, error } = await sb
    .from('devices')
    .select('*')
    .order('updated_at', { ascending: false });

  if (error) {
    return NextResponse.json({ devices: [], tableReady: false, error: error.message });
  }

  return NextResponse.json({
    devices: (data as DbDeviceRow[]).map(rowToDevice),
    tableReady: true
  });
}

export async function POST(request: NextRequest) {
  const session = await getVerifiedAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const sb = createAdminClient();
  if (!sb) {
    return NextResponse.json({ ok: false, persisted: 'none', error: 'Supabase not configured' });
  }

  try {
    const payload = (await request.json()) as { device?: DeviceInfo; devices?: DeviceInfo[] };
    const list = payload.devices || (payload.device ? [payload.device] : []);
    if (list.length === 0) {
      return NextResponse.json({ error: 'No device payload supplied' }, { status: 400 });
    }

    const rows = list.map(deviceToRow);
    const { error } = await sb.from('devices').upsert(rows, { onConflict: 'id' });

    if (error) {
      return NextResponse.json({ ok: false, persisted: 'table_pending', error: error.message });
    }

    return NextResponse.json({ ok: true, persisted: 'supabase', count: rows.length });
  } catch {
    return NextResponse.json({ error: 'Invalid device payload' }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  const session = await getVerifiedAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const id = request.nextUrl.searchParams.get('id');
  if (!id) {
    return NextResponse.json({ error: 'Missing device id' }, { status: 400 });
  }

  const sb = createAdminClient();
  if (!sb) {
    return NextResponse.json({ ok: false, persisted: 'none' });
  }

  const { error } = await sb.from('devices').delete().eq('id', id);
  if (error) {
    return NextResponse.json({ ok: false, persisted: 'table_pending', error: error.message });
  }

  return NextResponse.json({ ok: true, persisted: 'supabase' });
}
