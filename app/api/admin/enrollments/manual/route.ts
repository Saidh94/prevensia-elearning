import { requireAdmin } from "@/lib/auth/require-admin";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { COMPANY } from "@/lib/company";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    // ── Auth check ─────────────────────────────────────────────────────────
    const supabase = await createClient();
    const auth = await requireAdmin();
    if ("error" in auth) return auth.error;


    const adminClient = createAdminClient();
    if (!adminClient) {
      return NextResponse.json({ error: "Client admin indisponible" }, { status: 500 });
    }

    // ── Body ───────────────────────────────────────────────────────────────
    const body = await req.json();
    const {
      userId,
      formationLabel,
      status,
      paymentStatus,
      accessStart,
      accessEnd,
    } = body as {
      userId: string;
      formationLabel: string;
      status: string;
      paymentStatus: string | null;
      accessStart: string;
      accessEnd: string;
    };

    if (!userId || !formationLabel || !status) {
      return NextResponse.json({ error: "Champs obligatoires manquants" }, { status: 400 });
    }

    // ── Cherche la formation par titre (LIKE) ──────────────────────────────
    const { data: formations } = await adminClient
      .from("formations")
      .select("id, title")
      .ilike("title", `%${formationLabel}%`)
      .limit(1);

    const formationId = formations && formations.length > 0 ? formations[0].id : null;

    // ── Insertion inscription ──────────────────────────────────────────────
    const insertPayload: Record<string, unknown> = {
      user_id: userId,
      status,
      payment_status: paymentStatus ?? null,
      access_start: accessStart ? new Date(accessStart).toISOString() : null,
      access_end: accessEnd ? new Date(accessEnd).toISOString() : null,
    };

    if (formationId) {
      insertPayload.formation_id = formationId;
    }

    const { data: enrollment, error: insertError } = await adminClient
      .from("enrollments")
      .insert(insertPayload)
      .select("id")
      .single();

    if (insertError) {
      console.error("[Enrollment Manual] Erreur insert :", insertError);
      return NextResponse.json({ error: insertError.message }, { status: 500 });
    }

    // ── Envoi email de confirmation à l'apprenant ──────────────────────────
    try {
      const { data: learnerProfile } = await adminClient
        .from("profiles")
        .select("email, first_name")
        .eq("id", userId)
        .maybeSingle();

      if (learnerProfile?.email && process.env.RESEND_API_KEY) {
        const resend = new Resend(process.env.RESEND_API_KEY);

        const startLabel = accessStart
          ? new Date(accessStart).toLocaleDateString("fr-FR")
          : null;
        const endLabel = accessEnd
          ? new Date(accessEnd).toLocaleDateString("fr-FR")
          : null;

        const dateBlock =
          startLabel && endLabel
            ? `<p style="margin:0 0 8px">Période d'accès : du <strong>${startLabel}</strong> au <strong>${endLabel}</strong>.</p>`
            : "";

        await resend.emails.send({
          from: "PREVENSIA Formation <contact@prevensia-formation.fr>",
          to: [learnerProfile.email],
          subject: "Votre inscription a été confirmée — PREVENSIA FORMATION",
          html: `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.08)">
        <tr><td style="background:#0f172a;padding:28px 32px">
          <p style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:.5px">PREVENSIA FORMATION</p>
        </td></tr>
        <tr><td style="padding:32px">
          <p style="margin:0 0 16px;font-size:16px;color:#1e293b">Bonjour ${learnerProfile.first_name || ""},</p>
          <p style="margin:0 0 16px;font-size:15px;color:#334155">
            Votre inscription à la formation <strong>${formationLabel}</strong> a bien été enregistrée.
          </p>
          <p style="margin:0 0 16px;font-size:15px;color:#334155">
            Vous pouvez dès maintenant accéder à votre espace apprenant :
          </p>
          <p style="margin:0 0 24px;text-align:center">
            <a href="https://prevensia-formation.fr/dashboard"
               style="display:inline-block;background:#0f172a;color:#ffffff;text-decoration:none;font-size:15px;font-weight:600;padding:14px 32px;border-radius:8px">
              Accéder à mon espace
            </a>
          </p>
          ${dateBlock}
          <p style="margin:24px 0 0;font-size:14px;color:#64748b">
            Pour toute question, n'hésitez pas à nous contacter.
          </p>
        </td></tr>
        <tr><td style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:20px 32px">
          <p style="margin:0;font-size:12px;color:#94a3b8;line-height:1.6">
            PREVENSIA FORMATION<br>
            ${COMPANY.addressShort}<br>
            Tél. : 01 89 62 94 92
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
        });
      }
    } catch (emailError) {
      console.error("[Enrollment Manual] Erreur envoi email :", emailError);
    }

    return NextResponse.json({ success: true, enrollmentId: enrollment?.id });
  } catch (error) {
    console.error("[Enrollment Manual] Erreur :", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
