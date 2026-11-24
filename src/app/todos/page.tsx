import { Suspense } from 'react';
import type { Metadata } from 'next';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { Database, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Supabase Connection Check — PUBGFrames',
  robots: {
    index: false,
    follow: false
  }
};

interface TodoItem {
  id: string | number;
  name?: string;
  title?: string;
  [key: string]: unknown;
}

async function TodosList() {
  let todos: TodoItem[] | null = null;
  let error: { message: string } | null = null;

  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    const res = await supabase.from('todos').select('*');
    todos = (res.data as TodoItem[] | null) ?? null;
    if (res.error) {
      error = res.error;
    }
  } catch (err: unknown) {
    error = {
      message: err instanceof Error ? err.message : 'Database connection unreachable during build'
    };
  }

  if (error) {
    return (
      <div className="p-4 rounded-md bg-[#fef3c7] text-[#92400e] text-[14px] flex items-start gap-3">
        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold">Database status notice</p>
          <p className="mt-1">{error.message || 'Table todos not yet created in Supabase or RLS enabled.'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-[14px] font-medium text-[#15803d]">
        <CheckCircle2 className="w-4 h-4" />
        <span>Connected to Supabase ({todos?.length ?? 0} entries)</span>
      </div>
      {todos && todos.length > 0 ? (
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li key={todo.id} className="p-3 rounded bg-[#f6f7f9] border border-[#e2e5ea] text-[15px] text-[#0b0c0e]">
              {todo.name || todo.title || JSON.stringify(todo)}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-[14px] text-[#525866]">No todos entries yet.</p>
      )}
    </div>
  );
}

export default function TodosPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-8 py-12 space-y-6">
      <div className="p-6 sm:p-8 rounded-lg bg-[#ffffff] border border-[#e2e5ea] space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-[#eef0f3] flex items-center justify-center text-[#1f2de6]">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-[#0b0c0e]">Supabase Live Connection</h1>
            <p className="text-[14px] text-[#525866]">Server Component query via @supabase/ssr</p>
          </div>
        </div>

        <Suspense
          fallback={
            <div className="flex items-center gap-2 text-[14px] text-[#525866] py-4">
              <Loader2 className="w-4 h-4 animate-spin text-[#1f2de6]" />
              <span>Connecting to Supabase...</span>
            </div>
          }
        >
          <TodosList />
        </Suspense>

        <div className="pt-2">
          <Link href="/" className="text-[14px] font-medium text-[#1f2de6] hover:underline">
            Return to PUBGFrames
          </Link>
        </div>
      </div>
    </div>
  );
}
