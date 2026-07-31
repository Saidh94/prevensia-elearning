import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import Link from "next/link";
import FacturesFormateursClient from "./FacturesFormateursClient";

export const metadata = {
  title: "Factures formateurs | Admin PREVENSIA",
  robots: { index: false },
};

export default async function FacturesFormateursPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/connexion-admin");

  const { data: profile } = await supabase
    .from("profiles").select("role").eq("id", user.id).maybeSingle();
  if (profile?.role !== "admin") redirect("/dashboard");

  const admin = createAdminClient();
  if (!admin) return <div>Erreur serveur</div>;

  const { data: factures } = await admin
    .from("factures_formateurs")
    .select(`
      *,
      formateur:formateurs(id, prenom, nom, email),
      session:virtual_sessions(formation, date)
    `)
    .order("created_at", { ascending: false });

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* En-tête */}
        <div className="mb-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-red-700">Administration</p>
              <h1 className="mt-2 text-3xl font-bold text-slate-900">Factures formateurs</h1>
              <p className="mt-1 text-sm text-slate-500">
                Gérez les factures déposées par vos formateurs sous-traitants
              </p>
            </div>
            <div className="flex gap-2">
              <Link href="/admin/formateurs"
                className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                👤 Formateurs
              </Link>
              <Link href="/admin"
                className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                ← Admin
              </Link>
            </div>
          </div>
        </div>

        <FacturesFormateursClient initialFactures={factures ?? []} />
      </div>
    </main>
  );
}
