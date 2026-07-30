import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const FROM_EMAIL  = "PREVENSIA <contact@prevensia-formation.fr>";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "contact@prevensia-formation.fr";

export async function POST(request: Request) {
  try {
    // Vérifier que l'employeur est connecté
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    const body = await request.json();
    const { companyName, collaborateurs, message } = body as {
      companyName: string;
      collaborateurs: { fullName: string; email: string }[];
      message: string;
    };

    if (!collaborateurs || collaborateurs.length === 0) {
      return NextResponse.json({ error: "Aucun collaborateur sélectionné" }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY?.trim();
    if (!resendKey) {
      console.warn("[demande-classe-virtuelle] RESEND_API_KEY manquante");
      return NextResponse.json({ success: true });
    }

    const resend = new Resend(resendKey);

    const collabList = collaborateurs
      .map((c) => `<li><strong>${c.fullName}</strong> — ${c.email}</li>`)
      .join("");

    // Email à l'admin
    await resend.emails.send({
      from: FROM_EMAIL,
      to: [ADMIN_EMAIL],
      subject: `📅 Demande classe virtuelle — ${companyName} (${collaborateurs.length} participant${collaborateurs.length > 1 ? "s" : ""})`,
      html: `
        <h2>Demande de classe virtuelle</h2>
        <p><strong>Entreprise :</strong> ${companyName}</p>
        <p><strong>Demandeur :</strong> ${user.email}</p>
        <p><strong>Participants (${collaborateurs.length}) :</strong></p>
        <ul>${collabList}</ul>
        ${message ? `<p><strong>Message :</strong><br/>${message.replace(/\n/g, "<br/>")}</p>` : ""}
        <hr/>
        <p style="font-size:12px;color:#64748b;">
          Répondre directement à ${user.email} pour confirmer la date.
        </p>
      `,
      replyTo: user.email ?? undefined,
    });

    // Email de confirmation à l'employeur
    await resend.emails.send({
      from: FROM_EMAIL,
      to: [user.email!],
      subject: "Votre demande de classe virtuelle a été envoyée",
      html: `
        <p>Bonjour,</p>
        <p>Votre demande de classe virtuelle pour <strong>${collaborateurs.length} collaborateur${collaborateurs.length > 1 ? "s" : ""}</strong> a bien été transmise à notre équipe.</p>
        <p>Nous vous contacterons sous <strong>24h ouvrées</strong> pour proposer une date.</p>
        <p><strong>Participants :</strong></p>
        <ul>${collabList}</ul>
        <hr style="margin:24px 0;border:none;border-top:1px solid #e2e8f0;"/>
        <p style="font-size:12px;color:#64748b;">PREVENSIA FORMATION · contact@prevensia-formation.fr · 01 89 62 94 92</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Erreur inconnue";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
