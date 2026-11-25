import { NextRequest, NextResponse } from 'next/server';
import {
  ADMIN_NO_STORE_HEADERS,
  verifyRequestAdminSession
} from '@/lib/adminServerAuth';
import {
  getGa4ApiSecret,
  isGa4MeasurementProtocolConfigured
} from '@/lib/gaMeasurementProtocol';
import { createAdminClient, getAdminDatabaseDiagnostics } from '@/utils/supabase/admin';
import { aggregateAnalyticsEvents, EMPTY_ANALYTICS } from '@/lib/analytics';
import {
  getAdSenseClientId,
  getGaMeasurementId,
  getGoogleSiteVerification,
  getGoogleTagId
} from '@/lib/siteConfig';

const REQUIRED_TABLES = [
  'devices',
  'analytics_page_views',
  'search_queries',
  'contact_messages',
  'admin_users',
  'todos'
] as const;

export async function GET(request: NextRequest) {
  const session = verifyRequestAdminSession(request);
  if (!session) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401, headers: ADMIN_NO_STORE_HEADERS }
    );
  }

  const googleIntegrations = {
    searchConsoleConfigured: Boolean(getGoogleSiteVerification()),
    ga4Configured: Boolean(getGaMeasurementId() || getGoogleTagId()),
    ga4ApiSecretConfigured: Boolean(getGa4ApiSecret()),
    measurementProtocolConfigured: isGa4MeasurementProtocolConfigured(),
    adSenseConfigured: Boolean(getAdSenseClientId())
  };

  const baseDiagnostics = getAdminDatabaseDiagnostics();
  const sb = createAdminClient();
  if (!sb) {
    return NextResponse.json(
      {
        supabaseConfigured: false,
        tablesReady: false,
        diagnostics: baseDiagnostics,
        tablesStatus: REQUIRED_TABLES.map((name) => ({ name, ready: false, count: 0 })),
        analytics: EMPTY_ANALYTICS,
        messages: [],
        adminUsers: [{ email: session.email, role: session.role }],
        googleIntegrations
      },
      { headers: ADMIN_NO_STORE_HEADERS }
    );
  }

  try {
    const tablesStatus = await Promise.all(
      REQUIRED_TABLES.map(async (name) => {
        try {
          const { count, error, status } = await sb
            .from(name)
            .select('*', { count: 'exact' })
            .limit(1);
          const ready = !error && status >= 200 && status < 300;
          return {
            name,
            ready,
            count: ready && typeof count === 'number' ? count : 0,
            error: error?.message
          };
        } catch (err) {
          return {
            name,
            ready: false,
            count: 0,
            error: err instanceof Error ? err.message : 'Network error reaching Supabase'
          };
        }
      })
    );

    const firstError = tablesStatus.find((t) => t.error)?.error;
    const viewsTableReady = tablesStatus.find((t) => t.name === 'analytics_page_views')?.ready;
    const searchesTableReady = tablesStatus.find((t) => t.name === 'search_queries')?.ready;
    const messagesTableReady = tablesStatus.find((t) => t.name === 'contact_messages')?.ready;
    const adminUsersTableReady = tablesStatus.find((t) => t.name === 'admin_users')?.ready;

    const [viewsRes, searchesRes, messagesRes, adminUsersRes] = await Promise.all([
      viewsTableReady
        ? sb
            .from('analytics_page_views')
            .select('path, country, device_type, user_agent, timestamp')
            .order('timestamp', { ascending: false })
            .limit(2000)
        : Promise.resolve({ data: [], error: null }),
      searchesTableReady
        ? sb
            .from('search_queries')
            .select('query, timestamp')
            .order('timestamp', { ascending: false })
            .limit(2000)
        : Promise.resolve({ data: [], error: null }),
      messagesTableReady
        ? sb
            .from('contact_messages')
            .select('id, name, email, topic, device_model, message, status, created_at')
            .order('created_at', { ascending: false })
            .limit(100)
        : Promise.resolve({ data: [], error: null }),
      adminUsersTableReady
        ? sb.from('admin_users').select('id, email, role, created_at')
        : Promise.resolve({ data: [], error: null })
    ]);

    const analytics = aggregateAnalyticsEvents(viewsRes.data || [], searchesRes.data || []);

    return NextResponse.json(
      {
        supabaseConfigured: true,
        tablesReady: tablesStatus.every((t) => t.ready),
        diagnostics: {
          ...baseDiagnostics,
          connectionError: firstError
        },
        tablesStatus,
        analytics,
        messages: messagesRes.data || [],
        adminUsers:
          adminUsersRes.data && adminUsersRes.data.length > 0
            ? adminUsersRes.data
            : [{ email: session.email, role: session.role }],
        googleIntegrations
      },
      { headers: ADMIN_NO_STORE_HEADERS }
    );
  } catch (err) {
    const connectionError = err instanceof Error ? err.message : 'Unable to reach Supabase host';
    return NextResponse.json(
      {
        supabaseConfigured: true,
        tablesReady: false,
        diagnostics: {
          ...baseDiagnostics,
          connectionError
        },
        tablesStatus: REQUIRED_TABLES.map((name) => ({
          name,
          ready: false,
          count: 0,
          error: connectionError
        })),
        analytics: EMPTY_ANALYTICS,
        messages: [],
        adminUsers: [{ email: session.email, role: session.role }],
        googleIntegrations
      },
      { headers: ADMIN_NO_STORE_HEADERS }
    );
  }
}

export async function DELETE(request: NextRequest) {
  const session = verifyRequestAdminSession(request);
  if (!session) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401, headers: ADMIN_NO_STORE_HEADERS }
    );
  }

  const sb = createAdminClient();
  if (sb) {
    try {
      await sb
        .from('analytics_page_views')
        .delete()
        .neq('id', '00000000-0000-0000-0000-000000000000');
      await sb
        .from('search_queries')
        .delete()
        .neq('id', '00000000-0000-0000-0000-000000000000');
    } catch {
      return NextResponse.json({ ok: false }, { status: 502, headers: ADMIN_NO_STORE_HEADERS });
    }
  }

  return NextResponse.json({ ok: true }, { headers: ADMIN_NO_STORE_HEADERS });
}
