import { NextRequest, NextResponse } from "next/server";
import { randomBytes } from "node:crypto";
import { Resend } from "resend";
import { requireAdmin } from "@/lib/auth/require-admin";
import { createAdminClient } from "@/lib/supabase/admin";
import { COMPANY } from "@/lib/company";

export const runtime = "nodejs";

// ── Helpers ───────────────────────────────────────────────────────────────────

function generateTemporaryPassword() {
  return `Prevensia-${randomBytes(5).toString("hex")}-A1`;
}

type ProfileRecord = {
  id: string;
  email: string | null;
  first_name: string | null;
  last_name: string | null;
};

// ── POST /api/admin/provision-direct ─────────────────────────────────────────
// Crée (ou réutilise) un compte apprenant, crée l'enrollment (payé),
// active l'accès 30 j et envoie l'email de bienvenue.

export async function POST(req: NextRequest) {
  try {
    // Auth admin obligatoire
    const auth = await requireAdmin();
    if ("error" in auth) return auth.error;

    const adminClient = createAdminClient();
    if (!adminClient) {
      return NextResponse.json({ error: "Client admin indisponible" }, { status: 500 });
    }

    const body = await req.json() as {
      email: string;
      firstName: string;
      lastName: string;
      phone?: string;
      company?: string;
      formationSlug: string;
      durationDays?: number;
    };

    const { email, firstName, lastName, phone = "", company = "", formationSlug, durationDays = 30 } = body;

    if (!email || !firstName || !lastName || !formationSlug) {
      return NextResponse.json({ error: "Champs obligatoires manquants (email, prénom, nom, formationSlug)" }, { status: 400 });
    }

    // ── 1. Compte utilisateur ─────────────────────────────────────────────────
    const { data: existingProfile } = await adminClient
      .from("profiles")
      .select("id, email, first_name, last_name")
      .eq("email", email)
      .maybeSingle<ProfileRecord>();

    let userId: string;
    let temporaryPassword: string | null = null;
    let accountState: "created" | "existing";

    if (existingProfile) {
      userId = existingProfile.id;
      accountState = "existing";
      // Mise à jour partielle du profil
      await adminClient.from("profiles").upsert({
        id: userId,
        email,
        first_name: firstName || existingProfile.first_name || null,
        last_name: lastName || existingProfile.last_name || null,
        phone: phone || null,
        company: company || null,
        role: "learner",
      }, { onConflict: "id" });
    } else {
      temporaryPassword = generateTemporaryPassword();
      const { data, error } = await adminClient.auth.admin.createUser({
        email,
        password: temporaryPassword,
        email_confirm: true,
        user_metadata: {
          first_name: firstName,
          last_name: lastName,
          must_change_password: true,
          onboarding_source: "admin_provision",
        },
      });
      if (error || !data.user) {
        return NextResponse.json({ error: error?.message ?? "Création du compte impossible" }, { status: 500 });
      }
      userId = data.user.id;
      accountState = "created";
      await adminClient.from("profiles").upsert({
        id: userId,
        email,
        first_name: firstName || null,
        last_name: lastName || null,
        phone: phone || null,
        company: company || null,
        role: "learner",
      }, { onConflict: "id" });
    }

    // ── 2. Formation ──────────────────────────────────────────────────────────
    const { data: formations } = await adminClient
      .from("formations")
      .select("id, title, slug")
      .ilike("slug", `%${formationSlug}%`)
      .limit(3);

    const formation = formations?.[0];
    if (!formation) {
      return NextResponse.json({ error: `Formation introuvable pour le slug : ${formationSlug}` }, { status: 404 });
    }

    // ── 3. Enrollment ─────────────────────────────────────────────────────────
    // Vérifier si enrollment actif déjà présent
    const { data: existingEnrollments } = await adminClient
      .from("enrollments")
      .select("id, status")
      .eq("user_id", userId)
      .eq("formation_id", formation.id)
      .in("status", ["not_started", "in_progress", "pending_interview", "quiz_passed"])
      .limit(1);

    let enrollmentId: string;
    let enrollmentState: "created" | "existing";

    if (existingEnrollments && existingEnrollments.length > 0) {
      enrollmentId = existingEnrollments[0].id;
      enrollmentState = "existing";
    } else {
      const start = new Date();
      const end = new Date();
      end.setDate(start.getDate() + durationDays);

      const { data: newEnrollment, error: insertError } = await adminClient
        .from("enrollments")
        .insert({
          user_id: userId,
          formation_id: formation.id,
          status: "in_progress",
          payment_status: "paid",
          company_name: company || null,
          access_start: start.toISOString(),
          access_end: end.toISOString(),
        })
        .select("id")
        .single();

      if (insertError || !newEnrollment) {
        return NextResponse.json({ error: insertError?.message ?? "Création inscription impossible" }, { status: 500 });
      }
      enrollmentId = newEnrollment.id;
      enrollmentState = "created";
    }

    // ── 4. Email de bienvenue ─────────────────────────────────────────────────
    try {
      const resendKey = process.env.RESEND_API_KEY?.trim();
      if (resendKey) {
        const resend = new Resend(resendKey);
        const loginUrl = `https://prevensia-formation.fr/connexion`;
        const credentialBlock = temporaryPassword
          ? `<p style="margin:0 0 12px"><strong>Identifiant :</strong> ${email}<br><strong>Mot de passe temporaire :</strong> ${temporaryPassword}</p>
             <p style="margin:0 0 16px;font-size:13px;color:#64748b">Vous serez invité à changer ce mot de passe dès votre première connexion.</p>`
          : `<p style="margin:0 0 16px">Connectez-vous avec vos identifiants habituels.</p>`;

        await resend.emails.send({
          from: "PREVENSIA Formation <contact@prevensia-formation.fr>",
          to: [email],
          subject: `Votre accès à la formation ${formation.title} — PREVENSIA FORMATION`,
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
          <p style="margin:0 0 16px;font-size:16px;color:#1e293b">Bonjour ${firstName},</p>
          <p style="margin:0 0 16px;font-size:15px;color:#334155">
            Votre accès à la formation <strong>${formation.title}</strong> a été activé. Vous pouvez démarrer votre parcours dès maintenant.
          </p>
          ${credentialBlock}
          <p style="margin:0 0 24px;text-align:center">
            <a href="${loginUrl}"
               style="display:inline-block;background:#0f172a;color:#ffffff;text-decoration:none;font-size:15px;font-weight:600;padding:14px 32px;border-radius:8px">
              Accéder à mon espace de formation
            </a>
          </p>
          <p style="margin:24px 0 0;font-size:14px;color:#64748b">
            Pour toute question, contactez-nous à <a href="mailto:${COMPANY.email}" style="color:#3b82f6">${COMPANY.email}</a> ou au ${COMPANY.phone}.
          </p>
        </td></tr>
        <tr><td style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:20px 32px">
          <p style="margin:0;font-size:12px;color:#94a3b8;line-height:1.6">
            ${COMPANY.name}<br>${COMPANY.addressShort}
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
      console.error("[ProvisionDirect] Erreur email :", emailError);
      // Non bloquant
    }

    return NextResponse.json({
      ok: true,
      userId,
      enrollmentId,
      accountState,
      enrollmentState,
      formation: { id: formation.id, title: formation.title, slug: formation.slug },
      emailSent: true,
      temporaryPassword: temporaryPassword ?? null,
    });
  } catch (err) {
    console.error("[ProvisionDirect] Erreur :", err);
    return NextResponse.json({ error: err instanceof Error ? err.message : "Erreur serveur" }, { status: 500 });
  }
}
