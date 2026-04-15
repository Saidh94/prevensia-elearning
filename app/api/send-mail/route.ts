import { NextResponse } from "next/server";
import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY?.trim();

if (!apiKey) {
  throw new Error("RESEND_API_KEY manquante dans Vercel");
}

const resend = new Resend(apiKey);

const FROM_EMAIL = "PREVENSIA <contact@prevensia-formation.fr>";
const ADMIN_EMAIL = "prevensia.formation@outlook.fr";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const type = String(body?.type ?? "").trim();

    const firstName = String(body?.firstName ?? body?.prenom ?? "").trim();
    const lastName = String(body?.lastName ?? body?.nom ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const phone = String(body?.phone ?? body?.telephone ?? "").trim();
    const company = String(body?.company ?? body?.entreprise ?? "").trim();
    const sessionId = String(body?.sessionId ?? "").trim();
    const formation = String(body?.formation ?? "").trim();
    const categorie = String(body?.categorie ?? "").trim();
    const dateSession = String(body?.dateSession ?? body?.date ?? "").trim();
    const format = String(body?.format ?? "").trim();

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        {
          success: false,
          error: "Champs obligatoires manquants.",
          received: {
            type,
            firstName,
            lastName,
            email,
            phone,
            company,
            sessionId,
            formation,
            categorie,
            dateSession,
            format,
          },
        },
        { status: 400 }
      );
    }

    const adminSubject = `Nouvelle inscription - ${formation || "Formation"}`;

    const adminHtml = `
      <h2>Nouvelle demande d'inscription</h2>
      <p><strong>Type :</strong> ${type || "Non renseigné"}</p>
      <p><strong>Nom :</strong> ${lastName}</p>
      <p><strong>Prénom :</strong> ${firstName}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
      <p><strong>Entreprise :</strong> ${company || "Non renseignée"}</p>
      <p><strong>Catégorie :</strong> ${categorie || "Non renseignée"}</p>
      <p><strong>Formation :</strong> ${formation || "Non renseignée"}</p>
      <p><strong>Date de session :</strong> ${dateSession || "Non renseignée"}</p>
      <p><strong>Format :</strong> ${format || "Non renseigné"}</p>
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
      <p>
        Nous avons bien reçu votre demande d'inscription${
          formation ? ` pour la formation <strong>${formation}</strong>` : ""
        }.
      </p>
      ${
        dateSession
          ? `<p><strong>Date de session :</strong> ${dateSession}</p>`
          : ""
      }
      ${
        format
          ? `<p><strong>Format :</strong> ${format}</p>`
          : ""
      }
      <p>Nous reviendrons vers vous rapidement.</p>
      <p>Cordialement,<br />PREVENSIA FORMATION</p>
    `;

    const userResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: [email],
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