import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import ProvisionForm from "./ProvisionForm";

export const metadata = { title: "Provisioning rapide — Admin PREVENSIA" };

export default async function ProvisionRapidePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/connexion-admin");

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle<{ role: string | null }>();

  if (profile?.role !== "admin") redirect("/dashboard");

  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-2xl">
        {/* En-tête */}
        <a
          href="/admin"
          className="mb-6 inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800"
        >
          ← Retour admin
        </a>
        <h1 className="mb-2 text-2xl font-bold text-slate-900">
          Provisioning rapide
        </h1>
        <p className="mb-8 text-slate-600">
          Crée le compte apprenant, l&apos;inscription (statut payé) et active l&apos;accès immédiatement.
          Un email de bienvenue avec les identifiants est envoyé automatiquement.
        </p>

        {/* Pré-remplissage Anthony OTHILY — à supprimer après usage */}
        <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
          <strong>Dossier en attente :</strong> Anthony OTHILY — ALCADIA —{" "}
          anthony.othily@alcadia.fr — H0B0/H0V — Facture à émettre.
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <ProvisionForm />
        </div>
      </div>
    </main>
  );
}
