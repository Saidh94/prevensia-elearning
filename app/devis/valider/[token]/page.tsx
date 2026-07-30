import { notFound, redirect } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";
import DevisValidationClient from "./DevisValidationClient";

type Formation = {
  label: string;
  priceHT: number | null;
  priceNote: string;
  perPerson: boolean;
  qty: number;
};

type DevisRow = {
  id: string;
  token: string;
  status: string;
  contact_name: string | null;
  company_name: string | null;
  email: string;
  phone: string | null;
  participants: number;
  formations: Formation[];
  total_ht: number;
  tva_rate: number;
  has_quote: boolean;
  notes: string | null;
  created_at: string;
};

export default async function DevisValidationPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  const admin = createAdminClient();
  if (!admin) notFound();

  const { data: devis, error } = await admin
    .from("devis")
    .select("*")
    .eq("token", token)
    .single<DevisRow>();

  if (error || !devis) notFound();

  // Déjà provisionné → rediriger vers l'espace employeur
  if (devis.status === "provisioned") {
    redirect("/employeur/dashboard");
  }

  return <DevisValidationClient devis={devis} />;
}
