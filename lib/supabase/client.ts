import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,      // ← ligne 5 : https://bxehueviorgltkbsykrl.supabase.co
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!  // ← ligne 6 : re_2AJt4df5_FgwVaHU75q1uN5cejUnZ57uC
  );
}