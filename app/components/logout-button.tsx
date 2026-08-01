"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LogoutButton() {
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace("/connexion");
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      className="inline-flex items-center rounded-lg border border-white/20 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
    >
      Déconnexion
    </button>
  );
}