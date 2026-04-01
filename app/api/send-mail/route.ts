import { NextResponse } from "next/server";
import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY?.trim();

if (!apiKey) {
  throw new Error("RESEND_API_KEY manquante dans Vercel");
}

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
        {
          success: false,
          error: "Champs obligatoires manquants.",
          received: { firstName, lastName, email, phone, company, sessionId, formation },
        },
        { status: 400 }
      );
    }

    const cleanEmail = String(email).trim();

    const adminSubject = `Nouvelle inscription - ${formation || "Formation"}`;
    const adminHtml = `
      <h2>Nouvelle demande d'inscription</h2>
      <p><strong>Nom :</strong> ${lastName}</p>
      <p><strong>Prénom :</strong> ${firstName}</p>
      <p><strong>Email :</strong> ${cleanEmail}</p>
      <p><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
      <p><strong>Société :</strong> ${company || "Non renseignée"}</p>
      <p><strong>Formation :</strong> ${formation || "Non renseignée"}</p>
      <p><strong>ID session :</strong> ${sessionId || "Non renseigné"}</p>
    `;

    const adminResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: [ADMIN_EMAIL],
      subject: adminSubject,
      html: adminHtml,
    });

    if (adminResult.error) {
      return NextResponse.json(
        {
          success: false,
          step: "admin",
          error: adminResult.error.message,
        },
        { status: 500 }
      );
    }

    const userSubject = "Confirmation de votre demande d'inscription";
    const userHtml = `
      <p>Bonjour ${firstName},</p>
      <p>Nous avons bien reçu votre demande d'inscription${
        formation ? ` pour la formation <strong>${formation}</strong>` : ""
      }.</p>
      <p>Nous reviendrons vers vous rapidement.</p>
      <p>Cordialement,<br />PREVENSIA FORMATION</p>
    `;

    const userResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: [cleanEmail],
      subject: userSubject,
      html: userHtml,
    });

    if (userResult.error) {
      return NextResponse.json(
        {
          success: false,
          step: "user",
          error: userResult.error.message,
          adminSent: true,
          adminMessageId: adminResult.data?.id ?? null,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      adminMessageId: adminResult.data?.id ?? null,
      userMessageId: userResult.data?.id ?? null,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Erreur inconnue",
      },
      { status: 500 }
    );
  }
}