import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { AdminInterviewSlotsClient } from "./AdminInterviewSlotsClient";

export const metadata = {
  title: "Gestion des entretiens | Admin PREVENSIA",
  robots: { index: false },
};

export default async function AdminEntretiensPage() {
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

  // Créneaux existants
  const { data: slots } = await supabase
    .from("interview_slots")
    .select(`
      *,
      interview_bookings(
        id,
        status,
        zoom_join_url,
        profiles!inner(first_name, last_name, email)
      )
    `)
    .order("date", { ascending: true })
    .order("start_time", { ascending: true });

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* En-tête */}
        <div className="mb-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-red-700">
                Administration
              </p>
              <h1 className="mt-2 text-3xl font-bold text-slate-900">
                Entretiens de validation
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                Créez des créneaux disponibles — les apprenants les réservent et reçoivent le lien Zoom automatiquement.
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
                href="/admin/calendrier-global"
                className="inline-flex items-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                📅 Calendrier
              </Link>
            </div>
          </div>
        </div>

        <AdminInterviewSlotsClient initialSlots={slots ?? []} />
      </div>
    </main>
  );
}
