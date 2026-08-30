/**
 * PATCH /api/admin/sessions/[id]/formateur
 * Assigne (ou retire) un formateur à une session virtuelle.
 * Déclenche l'email de notification au formateur.
 */
import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/require-admin";
import { createAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";

const SITE_URL   = process.env.NEXT_PUBLIC_SITE_URL ?? "https://prevensia-formation.fr";
const FROM_EMAIL = "PREVENSIA <contact@prevensia-formation.fr>";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = await requireAdmin();
  if ("error" in auth) return auth.error;
  const { id: sessionId } = await params;
  const { formateur_id } = await request.json();

  const admin = createAdminClient();
  if (!admin) return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });

  // Mettre à jour la session
  const { data: session, error: sessionErr } = await admin
    .from("virtual_sessions")
    .update({ formateur_id: formateur_id ?? null })
    .eq("id", sessionId)
    .select("*, formateur:formateurs(id, prenom, nom, email)")
    .single();

  if (sessionErr) return NextResponse.json({ error: sessionErr.message }, { status: 500 });

  // Email de notification au formateur si assigné
  if (formateur_id && session) {
    const formateur = Array.isArray(session.formateur) ? session.formateur[0] : session.formateur;
    const resendKey = process.env.RESEND_API_KEY?.trim();
    if (resendKey && formateur?.email) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);

      const dateStr = new Date(`${session.date}T${session.start_time}`).toLocaleDateString("fr-FR", {
        weekday: "long", day: "numeric", month: "long", year: "numeric",
      });

      await resend.emails.send({
        from: FROM_EMAIL,
        to: [formateur.email],
        subject: `📅 Session assignée — ${session.formation} · ${dateStr}`,
        html: `
          <p>Bonjour ${formateur.prenom},</p>
          <p>Une nouvelle session vous a été assignée :</p>
          <table style="border-collapse:collapse;width:100%;font-size:14px;margin:16px 0;">
            <tr><td style="padding:6px 12px;font-weight:700;background:#f1f5f9;">Formation</td><td style="padding:6px 12px;">${session.formation}</td></tr>
            <tr><td style="padding:6px 12px;font-weight:700;background:#f1f5f9;">Date</td><td style="padding:6px 12px;">${dateStr}</td></tr>
            <tr><td style="padding:6px 12px;font-weight:700;background:#f1f5f9;">Horaires</td><td style="padding:6px 12px;">${session.start_time} – ${session.end_time}</td></tr>
            <tr><td style="padding:6px 12px;font-weight:700;background:#f1f5f9;">Format</td><td style="padding:6px 12px;">${session.format === "virtual" ? "Classe virtuelle" : "Présentiel"}</td></tr>
            ${session.meeting_url ? `<tr><td style="padding:6px 12px;font-weight:700;background:#f1f5f9;">Lien</td><td style="padding:6px 12px;"><a href="${session.meeting_url}">${session.meeting_url}</a></td></tr>` : ""}
            ${session.note ? `<tr><td style="padding:6px 12px;font-weight:700;background:#f1f5f9;">Note</td><td style="padding:6px 12px;">${session.note}</td></tr>` : ""}
          </table>
          <a href="${SITE_URL}/formateur/dashboard" style="display:inline-block;background:#b91c1c;color:#fff;padding:12px 24px;border-radius:8px;font-weight:700;text-decoration:none;">
            Voir ma session →
          </a>
          <p style="margin-top:20px;font-size:12px;color:#64748b;">PREVENSIA FORMATION · contact@prevensia-formation.fr</p>
        `,
      });
    }
  }

  return NextResponse.json({ success: true, session });
}
