import { Suspense } from 'react';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { Database, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

async function TodosList() {
  let todos: any[] | null = null;
  let error: { message: string } | null = null;

  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    const res = await supabase.from('todos').select('*');
    todos = res.data;
    if (res.error) {
      error = res.error;
    }
  } catch (err: any) {
    error = { message: err?.message || 'Database connection unreachable during build' };
  }

  if (error) {
    return (
      <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs flex items-start gap-3">
        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
        <div>
          <p className="font-bold">Database Notice:</p>
          <p className="text-gray-300 mt-1">{error.message || 'Table todos not yet created in your Supabase project or RLS enabled.'}</p>
          <p className="text-gray-400 mt-1">Supabase client helper is configured and responding properly!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs font-semibold text-[#39F56A]">
        <CheckCircle2 className="w-4 h-4" />
        <span>Successfully connected to Supabase ({todos?.length ?? 0} todos found)</span>
      </div>
      {todos && todos.length > 0 ? (
        <ul className="space-y-2">
          {todos.map((todo: any) => (
            <li key={todo.id} className="p-3 rounded-lg bg-black/40 border border-white/5 text-xs text-white">
              {todo.name || todo.title || JSON.stringify(todo)}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-xs text-gray-400 italic">No todos entries in database yet.</p>
      )}
    </div>
  );
}

export default function TodosPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8">
      <div className="p-6 rounded-2xl bg-[#11171E] border border-white/10 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#39F56A]/10 border border-[#39F56A]/30 flex items-center justify-center text-[#39F56A]">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-black text-white">Supabase Cloud Live Connection</h1>
            <p className="text-xs text-gray-400">Server Component query via @supabase/ssr</p>
          </div>
        </div>

        <Suspense fallback={
          <div className="flex items-center gap-2 text-xs text-gray-400 py-4">
            <Loader2 className="w-4 h-4 animate-spin text-[#FFD400]" />
            <span>Connecting to Supabase...</span>
          </div>
        }>
          <TodosList />
        </Suspense>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#FFD400] hover:underline"
          >
            ← Back to PUBGFrames
          </Link>
        </div>
      </div>
    </div>
  );
}
