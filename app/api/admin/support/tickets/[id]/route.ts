import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .maybeSingle<{ role: string | null }>();

    if (profile?.role !== "admin") {
      return NextResponse.json({ error: "Accès refusé" }, { status: 403 });
    }

    const adminClient = createAdminClient();
    if (!adminClient) {
      return NextResponse.json({ error: "Client admin indisponible" }, { status: 500 });
    }

    const body = await req.json() as { action: string; [key: string]: string };
    const { action } = body;

    // ── Action "status" ──────────────────────────────────────────────────────
    if (action === "status") {
      const { status } = body;
      const { error } = await adminClient
        .from("support_tickets")
        .update({ status })
        .eq("id", id);

      if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
      return NextResponse.json({ success: true });
    }

    // ── Action "note" ────────────────────────────────────────────────────────
    if (action === "note") {
      const { note } = body;
      const { error } = await adminClient
        .from("support_tickets")
        .update({ admin_note: note, updated_at: new Date().toISOString() })
        .eq("id", id);

      if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
      return NextResponse.json({ success: true });
    }

    // ── Action "reply" ───────────────────────────────────────────────────────
    if (action === "reply") {
      const { email, message, issueLabel } = body;

      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "PREVENSIA Support <contact@prevensia-formation.fr>",
        to: email,
        subject: `Réponse à votre demande — ${issueLabel} — PREVENSIA FORMATION`,
        html: `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;max-width:600px;width:100%;">
          <!-- Header -->
          <tr>
            <td style="background:#0f172a;padding:28px 36px;">
              <p style="margin:0;font-size:20px;font-weight:700;color:#ffffff;letter-spacing:-0.3px;">PREVENSIA FORMATION</p>
              <p style="margin:4px 0 0;font-size:13px;color:#94a3b8;">Service Support</p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:36px;">
              <p style="margin:0 0 20px;font-size:15px;color:#1e293b;">Bonjour,</p>
              <p style="margin:0 0 20px;font-size:15px;color:#1e293b;">
                Suite à votre demande concernant <strong>${issueLabel}</strong>, voici notre réponse :
              </p>
              <blockquote style="margin:0 0 24px;padding:16px 20px;background:#f8fafc;border-left:4px solid #dc2626;border-radius:0 8px 8px 0;">
                <p style="margin:0;font-size:14px;color:#334155;line-height:1.7;white-space:pre-wrap;">${message}</p>
              </blockquote>
              <p style="margin:0 0 8px;font-size:14px;color:#64748b;">
                Si vous avez d'autres questions, n'hésitez pas à nous contacter.
              </p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background:#f1f5f9;padding:20px 36px;border-top:1px solid #e2e8f0;">
              <p style="margin:0;font-size:12px;color:#64748b;line-height:1.8;">
                L'équipe PREVENSIA FORMATION<br/>
                01 89 62 94 92 — contact@prevensia-formation.fr<br/>
                33, avenue Philippe Auguste, 75011 Paris
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
        `.trim(),
      });

      // Mettre à jour le statut à "in_progress" si actuellement "open"
      const { data: ticket } = await adminClient
        .from("support_tickets")
        .select("status")
        .eq("id", id)
        .maybeSingle<{ status: string }>();

      if (ticket?.status === "open") {
        await adminClient
          .from("support_tickets")
          .update({ status: "in_progress", updated_at: new Date().toISOString() })
          .eq("id", id);
      }

      return NextResponse.json({ success: true });
    }

    // ── Action "reset_password" ──────────────────────────────────────────────
    if (action === "reset_password") {
      const { email } = body;
      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://prevensia-formation.fr";

      await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${siteUrl}/connexion?reset=1`,
      });

      // Mettre à jour le statut à "in_progress" si actuellement "open"
      const { data: ticket } = await adminClient
        .from("support_tickets")
        .select("status")
        .eq("id", id)
        .maybeSingle<{ status: string }>();

      if (ticket?.status === "open") {
        await adminClient
          .from("support_tickets")
          .update({ status: "in_progress", updated_at: new Date().toISOString() })
          .eq("id", id);
      }

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Action invalide" }, { status: 400 });
  } catch (err) {
    console.error("[Admin support tickets PATCH]", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
