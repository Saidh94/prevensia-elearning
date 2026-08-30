import { createAdminClient } from "@/lib/supabase/admin";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { COMPANY } from "@/lib/company";

export const runtime = "nodejs";

const ISSUE_LABELS: Record<string, string> = {
  no_access_course:   "Pas d'accès à mon cours",
  pdf_not_generated:  "Attestation PDF non générée",
  no_account_access:  "Pas d'accès à mon compte",
  broken_link:        "Lien qui ne fonctionne pas",
  other:              "Autre problème",
};

export async function POST(request: Request) {
  try {
    const body = await request.json() as {
      userEmail?: string;
      userName?: string;
      issueType?: string;
      message?: string;
    };

    const userEmail = (body.userEmail ?? "").trim();
    const userName  = (body.userName  ?? "").trim();
    const issueType = (body.issueType ?? "").trim();
    const message   = (body.message   ?? "").trim();

    if (!userEmail || !issueType) {
      return NextResponse.json({ error: "Email et type de problème requis." }, { status: 400 });
    }

    // Enregistrement du ticket en base
    const adminClient = createAdminClient();
    if (adminClient) {
      await adminClient.from("support_tickets").insert({
        user_email: userEmail,
        user_name:  userName || null,
        issue_type: issueType,
        message:    message  || null,
        status:     "open",
      });
    }

    const issueLabel = ISSUE_LABELS[issueType] ?? issueType;
    const resendKey  = process.env.RESEND_API_KEY;

    if (resendKey) {
      const resend = new Resend(resendKey);

      // Email à l'admin
      await resend.emails.send({
        from:    "PREVENSIA Support <contact@prevensia-formation.fr>",
        to:      ["contact@prevensia-formation.fr"],
        subject: `[Support] ${issueLabel} — ${userName || userEmail}`,
        html: `
          <h2>Nouveau ticket de support</h2>
          <p><strong>Problème :</strong> ${issueLabel}</p>
          <p><strong>Nom :</strong> ${userName || "Non renseigné"}</p>
          <p><strong>Email :</strong> ${userEmail}</p>
          <p><strong>Message :</strong></p>
          <blockquote style="border-left:3px solid #ccc;padding-left:12px;color:#444">
            ${message || "(Aucun message)"}
          </blockquote>
          <hr/>
          <p><a href="https://prevensia-formation.fr/admin/support">Voir le dashboard support</a></p>
        `,
      });

      // Accusé de réception à l'utilisateur
      await resend.emails.send({
        from:    "PREVENSIA Formation <contact@prevensia-formation.fr>",
        to:      [userEmail],
        subject: "Votre demande de support a bien été reçue — PREVENSIA FORMATION",
        html: `
          <p>Bonjour ${userName || ""},</p>
          <p>Nous avons bien reçu votre demande concernant : <strong>${issueLabel}</strong>.</p>
          <p>Notre équipe vous répondra dans les meilleurs délais (généralement sous 24h ouvrées).</p>
          <p>Si votre problème est urgent, vous pouvez nous appeler au <strong>01 89 62 94 92</strong>.</p>
          <br/>
          <p>Cordialement,<br/>L'équipe PREVENSIA FORMATION<br/>${COMPANY.addressShort}</p>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Support Ticket] Erreur :", error);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
