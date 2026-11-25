import { createServerClient } from '@supabase/ssr';
import { type NextRequest, NextResponse } from 'next/server';

function cleanVal(raw: string | undefined): string {
  if (!raw) return '';
  return raw.trim().replace(/^['"]|['"]$/g, '').trim().replace(/\/+$/, '');
}

export const createClient = (request: NextRequest) => {
  const env = process.env;
  const supabaseUrl =
    cleanVal(env['SUPABASE_URL']) ||
    cleanVal(env['NEXT_PUBLIC_SUPABASE_URL']) ||
    'https://irsndncadjwtztrltnyt.supabase.co';

  const supabaseKey =
    cleanVal(env['NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY']) ||
    cleanVal(env['NEXT_PUBLIC_SUPABASE_ANON_KEY']) ||
    cleanVal(env['SUPABASE_PUBLISHABLE_KEY']) ||
    cleanVal(env['SUPABASE_ANON_KEY']) ||
    'sb_publishable_C1qme69-nympPwPLrhbKHA_GTdpKLn9';

  let supabaseResponse = NextResponse.next({
    request: {
      headers: request.headers
    }
  });

  createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        supabaseResponse = NextResponse.next({
          request
        });
        cookiesToSet.forEach(({ name, value, options }) =>
          supabaseResponse.cookies.set(name, value, options)
        );
      }
    }
  });

  return supabaseResponse;
};
