import { createBrowserClient } from '@supabase/ssr';

function cleanVal(raw: string | undefined): string {
  if (!raw) return '';
  return raw.trim().replace(/^['"]|['"]$/g, '').trim().replace(/\/+$/, '');
}

const supabaseUrl =
  cleanVal(process.env.NEXT_PUBLIC_SUPABASE_URL) ||
  'https://irsndncadjwtztrltnyt.supabase.co';

const supabaseKey =
  cleanVal(process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY) ||
  cleanVal(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) ||
  'sb_publishable_C1qme69-nympPwPLrhbKHA_GTdpKLn9';

export const createClient = () => createBrowserClient(supabaseUrl, supabaseKey);
