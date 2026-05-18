import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { AdminCalendarClient } from "./AdminCalendarClient";
import Link from "next/link";

export const metadata = {
  title: "Calendrier global | Admin PREVENSIA",
  robots: { index: false },
};

export default async function AdminCalendrierGlobalPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/connexion");

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle();

  if (profile?.role !== "admin") redirect("/");

  // Sessions virtuelles (Supabase)
  const { data: virtualSessions } = await supabase
    .from("virtual_sessions")
    .select("*")
    .order("date", { ascending: true });

  // Inscriptions pending_interview (avec formation)
  const { data: pendingInterviews } = await supabase
    .from("enrollments")
    .select(`
      id,
      status,
      profiles!inner(first_name, last_name, email),
      formations!inner(title)
    `)
    .eq("status", "pending_interview");

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* En-tête */}
        <div className="mb-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-red-700">
                Administration
              </p>
              <h1 className="mt-2 text-3xl font-bold text-slate-900">
                Calendrier global
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                Vue unifiée — entretiens de validation, sessions virtuelles et présentiel
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/admin"
                className="inline-flex items-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                ← Admin
              </Link>
              <Link
                href="/admin/calendrier"
                className="inline-flex items-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Gérer les sessions
              </Link>
            </div>
          </div>

          {/* Légende */}
          <div className="mt-4 flex flex-wrap gap-4 border-t border-slate-100 pt-4">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="inline-block h-3 w-3 rounded-full bg-emerald-500"></span>
              Entretiens de validation (H0B0 / ATEX)
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="inline-block h-3 w-3 rounded-full bg-blue-500"></span>
              Sessions virtuelles (BS/BE, B1/B2)
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="inline-block h-3 w-3 rounded-full bg-orange-500"></span>
              Sessions présentiel (planning)
            </div>
          </div>
        </div>

        {/* Alertes — inscriptions en attente d'entretien */}
        {pendingInterviews && pendingInterviews.length > 0 && (
          <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-800">
              ⚠ {pendingInterviews.length} apprenant{pendingInterviews.length > 1 ? "s" : ""} en attente d&apos;entretien de validation
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {(pendingInterviews as unknown as {
                id: string;
                profiles: { first_name: string | null; last_name: string | null };
                formations: { title: string | null };
              }[]).map((e) => (
                <span
                  key={e.id}
                  className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800"
                >
                  {[e.profiles?.first_name, e.profiles?.last_name].filter(Boolean).join(" ") || "Apprenant"} — {e.formations?.title ?? "Formation"}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Calendrier FullCalendar */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <AdminCalendarClient
            virtualSessions={virtualSessions ?? []}
          />
        </div>
      </div>
    </main>
  );
}
