import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

function cleanVal(raw: string | undefined): string {
  if (!raw) return '';
  return raw.trim().replace(/^['"]|['"]$/g, '').trim().replace(/\/+$/, '');
}

function getServerSupabaseConfig() {
  const env = process.env;
  const url =
    cleanVal(env['SUPABASE_URL']) ||
    cleanVal(env['NEXT_PUBLIC_SUPABASE_URL']) ||
    'https://irsndncadjwtztrltnyt.supabase.co';

  const key =
    cleanVal(env['NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY']) ||
    cleanVal(env['NEXT_PUBLIC_SUPABASE_ANON_KEY']) ||
    cleanVal(env['SUPABASE_PUBLISHABLE_KEY']) ||
    cleanVal(env['SUPABASE_ANON_KEY']) ||
    'sb_publishable_C1qme69-nympPwPLrhbKHA_GTdpKLn9';

  return { url, key };
}

export const createClient = (cookieStore: Awaited<ReturnType<typeof cookies>>) => {
  const { url, key } = getServerSupabaseConfig();
  return createServerClient(url, key, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        } catch {
          // The `setAll` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      }
    }
  });
};
