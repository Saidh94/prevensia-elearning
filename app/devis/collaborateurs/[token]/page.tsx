import { notFound } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";
import CollaborateursForm from "./CollaborateursForm";

export default async function CollaborateursPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  const admin = createAdminClient();
  if (!admin) notFound();

  const { data: devis, error } = await admin
    .from("devis")
    .select("id, token, status, contact_name, company_name, email, participants, formations, total_ht, tva_rate, has_quote")
    .eq("token", token)
    .single();

  if (error || !devis) notFound();

  // Seul un devis validé (ou déjà provisionné) peut accéder à cette page
  if (devis.status === "sent") {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="max-w-md text-center space-y-3">
          <div className="text-5xl">⏳</div>
          <h1 className="text-xl font-bold text-slate-900">Devis non encore validé</h1>
          <p className="text-sm text-slate-500">
            Veuillez d&apos;abord valider votre devis avant de renseigner les collaborateurs.
          </p>
          <a href={`/devis/valider/${token}`}
            className="inline-block mt-4 rounded-xl bg-red-700 px-5 py-3 text-sm font-semibold text-white">
            ← Retour au devis
          </a>
        </div>
      </div>
    );
  }

  return <CollaborateursForm devis={devis} />;
}
