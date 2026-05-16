import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";
import { generateDevisPdf } from "@/lib/pdf/generate-devis";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    // ── Auth check ─────────────────────────────────────────────────────────
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();
    if (authError || !user) {
      return NextResponse.json({ error: "Non authentifie" }, { status: 401 });
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .maybeSingle();

    if (profile?.role !== "admin") {
      return NextResponse.json({ error: "Acces refuse" }, { status: 403 });
    }

    const adminClient = createAdminClient();
    if (!adminClient) {
      return NextResponse.json({ error: "Client admin indisponible" }, { status: 500 });
    }

    // ── Body ───────────────────────────────────────────────────────────────
    const body = await req.json();
    const {
      clientName,
      clientEmail,
      clientCompany,
      formationLabel,
      montantHT,
      tvaRate = 0,
      notes,
      validiteJours = 30,
    } = body as {
      clientName: string;
      clientEmail: string;
      clientCompany?: string;
      formationLabel: string;
      montantHT: number;
      tvaRate?: number;
      notes?: string;
      validiteJours?: number;
    };

    if (!clientName || !clientEmail || !formationLabel || montantHT == null) {
      return NextResponse.json({ error: "Champs obligatoires manquants" }, { status: 400 });
    }

    // ── Numéro auto ────────────────────────────────────────────────────────
    const year = new Date().getFullYear();
    const { count } = await adminClient
      .from("devis")
      .select("*", { count: "exact", head: true });
    const padded = String((count ?? 0) + 1).padStart(3, "0");
    const numero = `DEV-${year}-${padded}`;

    // ── Montant TTC ────────────────────────────────────────────────────────
    const montantTTC =
      tvaRate === 0
        ? montantHT
        : +(montantHT * (1 + tvaRate / 100)).toFixed(2);

    // ── Date ───────────────────────────────────────────────────────────────
    const today = new Date();
    const date = today.toLocaleDateString("fr-FR");

    // ── Génération PDF ─────────────────────────────────────────────────────
    const pdfBytes = await generateDevisPdf({
      numero,
      date,
      validiteJours,
      clientName,
      clientEmail,
      clientCompany,
      formationLabel,
      montantHT,
      tvaRate,
      montantTTC,
      notes,
    });

    // ── Sauvegarde BDD ─────────────────────────────────────────────────────
    await adminClient.from("devis").insert({
      numero,
      client_name: clientName,
      client_email: clientEmail,
      client_company: clientCompany ?? null,
      formation_label: formationLabel,
      montant_ht: montantHT,
      tva_rate: tvaRate,
      montant_ttc: montantTTC,
      validite_jours: validiteJours,
      notes: notes ?? null,
      statut: "envoye",
      created_by: user.id,
    });

    // ── Réponse PDF ────────────────────────────────────────────────────────
    return new NextResponse(Buffer.from(pdfBytes), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="devis-${numero}.pdf"`,
      },
    });
  } catch (error) {
    console.error("[Admin Devis] Erreur :", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
