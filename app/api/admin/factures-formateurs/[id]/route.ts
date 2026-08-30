/**
 * PATCH /api/admin/factures-formateurs/[id]
 * Met à jour le statut d'une facture formateur + notifie le formateur
 */
import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/require-admin";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";

const FROM_EMAIL = "PREVENSIA <contact@prevensia-formation.fr>";
const SITE_URL   = process.env.NEXT_PUBLIC_SITE_URL ?? "https://prevensia-formation.fr";

const STATUT_LABELS: Record<string, string> = {
  validee:  "✅ Validée",
  payee:    "💳 Payée",
  rejetee:  "❌ Rejetée",
};

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const supabase = await createClient();
    const auth = await requireAdmin();
    if ("error" in auth) return auth.error;
    const { userId } = auth;


    const admin = createAdminClient();
    if (!admin) return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });

    const body = await request.json() as { statut: string; note_admin?: string };
    const { statut, note_admin } = body;

    if (!["validee", "payee", "rejetee", "en_attente"].includes(statut)) {
      return NextResponse.json({ error: "Statut invalide" }, { status: 400 });
    }

    const updatePayload: Record<string, unknown> = {
      statut,
      note_admin: note_admin ?? null,
      updated_at: new Date().toISOString(),
    };
    if (statut === "payee") updatePayload.paid_at = new Date().toISOString();

    const { data: facture, error } = await admin
      .from("factures_formateurs")
      .update(updatePayload)
      .eq("id", id)
      .select("*, formateur:formateurs(prenom, nom, email), session:virtual_sessions(formation, date)")
      .single();

    if (error) throw error;

    // Email de notification au formateur
    const resendKey = process.env.RESEND_API_KEY?.trim();
    const fmt = Array.isArray(facture.formateur) ? facture.formateur[0] : facture.formateur;

    if (resendKey && fmt?.email && statut !== "en_attente") {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);

      await resend.emails.send({
        from: FROM_EMAIL,
        to:   [fmt.email],
        subject: `${STATUT_LABELS[statut] ?? statut} — Votre facture ${facture.periode}`,
        html: `
          <p>Bonjour ${fmt.prenom},</p>
          <p>Votre facture de <strong>${facture.periode}</strong> (${facture.montant_ht.toFixed(2)} € HT) a été <strong>${STATUT_LABELS[statut] ?? statut}</strong>.</p>
          ${note_admin ? `<p><strong>Note de l'équipe :</strong> ${note_admin}</p>` : ""}
          ${statut === "payee" ? `<p>Le paiement a été effectué le <strong>${new Date().toLocaleDateString("fr-FR")}</strong>.</p>` : ""}
          <p><a href="${SITE_URL}/formateur/dashboard" style="display:inline-block;background:#0f172a;color:#fff;padding:10px 20px;border-radius:8px;font-weight:700;text-decoration:none;">Voir mes factures →</a></p>
          <p style="font-size:12px;color:#64748b;margin-top:20px;">PREVENSIA FORMATION · contact@prevensia-formation.fr</p>
        `,
      });
    }

    return NextResponse.json({ success: true, facture });
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : "Erreur" }, { status: 500 });
  }
}
