/**
 * GET /api/cron/rappel-formateurs
 * Cron Vercel à déclencher chaque jour à 08h00.
 * Envoie un email de rappel aux formateurs qui ont une session le lendemain.
 *
 * Vercel cron.json :
 * { "crons": [{ "path": "/api/cron/rappel-formateurs", "schedule": "0 6 * * *" }] }
 */
import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";

const FROM_EMAIL  = "PREVENSIA <contact@prevensia-formation.fr>";
const SITE_URL    = process.env.NEXT_PUBLIC_SITE_URL ?? "https://prevensia-formation.fr";

export async function GET(request: Request) {
  // Vérification CRON_SECRET
  const auth = request.headers.get("authorization");
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const admin = createAdminClient();
  if (!admin) return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });

  const resendKey = process.env.RESEND_API_KEY?.trim();
  if (!resendKey) return NextResponse.json({ skipped: "No RESEND_API_KEY" });

  const { Resend } = await import("resend");
  const resend = new Resend(resendKey);

  // Sessions de demain avec formateur assigné
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split("T")[0];

  const { data: sessions } = await admin
    .from("virtual_sessions")
    .select("id, formation, date, start_time, end_time, format, meeting_url, note, seats, formateur:formateurs(id, prenom, nom, email)")
    .eq("date", tomorrowStr)
    .not("formateur_id", "is", null);

  if (!sessions || sessions.length === 0) {
    return NextResponse.json({ sent: 0, date: tomorrowStr });
  }

  let sent = 0;
  for (const session of sessions) {
    const formateur = Array.isArray(session.formateur) ? session.formateur[0] : session.formateur;
    if (!formateur?.email) continue;

    // Compter les inscrits
    const { count } = await admin
      .from("interview_bookings")
      .select("*", { count: "exact", head: true })
      .eq("slot_id", session.id)
      .eq("status", "confirmed");

    const dateStr = new Date(`${session.date}T${session.start_time}`).toLocaleDateString("fr-FR", {
      weekday: "long", day: "numeric", month: "long",
    });

    await resend.emails.send({
      from: FROM_EMAIL,
      to: [formateur.email],
      subject: `⏰ Rappel — Session demain : ${session.formation}`,
      html: `
        <p>Bonjour ${formateur.prenom},</p>
        <p>Rappel : vous animez une session <strong>${session.formation}</strong> <strong>demain ${dateStr}</strong> de ${session.start_time} à ${session.end_time}.</p>
        ${count ? `<p><strong>${count} stagiaire${count > 1 ? "s" : ""} inscrit${count > 1 ? "s" : ""}</strong></p>` : ""}
        ${session.meeting_url
          ? `<p><a href="${session.meeting_url}" style="display:inline-block;background:#b91c1c;color:#fff;padding:10px 20px;border-radius:8px;font-weight:700;text-decoration:none;">🎥 Lien de la classe virtuelle →</a></p>`
          : ""}
        ${session.note ? `<p><strong>Note :</strong> ${session.note}</p>` : ""}
        <p>
          <a href="${SITE_URL}/formateur/dashboard" style="display:inline-block;background:#0f172a;color:#fff;padding:10px 20px;border-radius:8px;font-weight:700;text-decoration:none;margin-top:8px;">
            Voir ma session →
          </a>
        </p>
        <p style="margin-top:20px;font-size:12px;color:#64748b;">PREVENSIA FORMATION · contact@prevensia-formation.fr</p>
      `,
    });
    sent++;
  }

  return NextResponse.json({ sent, date: tomorrowStr });
}
