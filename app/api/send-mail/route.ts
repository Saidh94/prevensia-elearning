import { NextResponse } from "next/server";
import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
const resend = new Resend(apiKey);

const FROM_EMAIL = "PREVENSIA <onboarding@resend.dev>";
const ADMIN_EMAIL = "prevensia.formation@outlook.fr";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      sessionId,
      formation,
    } = body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { success: false, error: "Champs obligatoires manquants." },
        { status: 400 }
      );
    }

    const adminSubject = `Nouvelle inscription - ${formation || "Formation"}`;

    const adminHtml = `
      <h2>Nouvelle demande d'inscription</h2>
      <p><strong>Nom :</strong> ${lastName}</p>
      <p><strong>Prénom :</strong> ${firstName}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
      <p><strong>Société :</strong> ${company || "Non renseignée"}</p>
      <p><strong>Formation :</strong> ${formation || "Non renseignée"}</p>
      <p><strong>ID session :</strong> ${sessionId || "Non renseigné"}</p>
    `;

    await resend.emails.send({
      from: FROM_EMAIL,
      to: [ADMIN_EMAIL],
      replyTo: email,
      subject: adminSubject,
      html: adminHtml,
    });

    const userSubject = "Confirmation de votre demande d'inscription";

    const userHtml = `
      <p>Bonjour ${firstName},</p>
      <p>Nous avons bien reçu votre demande d'inscription${
        formation ? ` pour la formation <strong>${formation}</strong>` : ""
      }.</p>
      <p>Nous reviendrons vers vous rapidement.</p>
      <p>Cordialement,<br />PREVENSIA FORMATION</p>
    `;

    await resend.emails.send({
      from: FROM_EMAIL,
      to: [email],
      subject: userSubject,
      html: userHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur envoi email :", error);

    return NextResponse.json(
      { success: false, error: "Erreur lors de l'envoi des emails." },
      { status: 500 }
    );
  }
}