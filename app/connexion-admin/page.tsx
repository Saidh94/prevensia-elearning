import type { Metadata } from "next";
import { Suspense } from "react";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import AdminLoginForm from "./admin-login-form";

export const metadata: Metadata = {
  title: "Accès administration — PREVENSIA",
  robots: { index: false, follow: false, noarchive: true },
};

export default async function ConnexionAdminPage() {
  // Si déjà connecté en admin → aller directement au dashboard admin
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .maybeSingle<{ role: string | null }>();

    if (profile?.role === "admin") {
      redirect("/admin");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-sm">

        {/* Logo / marque */}
        <div className="mb-8 text-center">
          <span className="inline-block rounded-lg bg-red-700 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white">
            Prévensia
          </span>
          <p className="mt-3 text-lg font-bold text-white">Espace administration</p>
          <p className="mt-1 text-xs text-slate-500">Accès réservé aux administrateurs</p>
        </div>

        {/* Formulaire */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
          <Suspense
            fallback={
              <div className="space-y-4">
                <div className="h-11 rounded-xl bg-slate-800 animate-pulse" />
                <div className="h-11 rounded-xl bg-slate-800 animate-pulse" />
                <div className="h-11 rounded-xl bg-slate-800 animate-pulse" />
              </div>
            }
          >
            <AdminLoginForm />
          </Suspense>
        </div>

        {/* Lien retour discret */}
        <p className="mt-6 text-center text-xs text-slate-600">
          <a href="/" className="transition hover:text-slate-400">
            ← Retour au site
          </a>
        </p>
      </div>
    </main>
  );
}
