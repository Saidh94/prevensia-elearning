import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return Response.json(
        { success: false, error: "RESEND_API_KEY manquante" },
        { status: 500 }
      );
    }

    // ✅ Initialisation ICI, pas en dehors
    const resend = new Resend(apiKey);

    const body = await req.json();
    const { participantEmail, participantName, formationTitle, sessionDate, company } = body;

    const participantEmailResponse = await resend.emails.send({
      from: "PREVENSIA <onboarding@resend.dev>",
      to: [participantEmail],  // ✅ email du participant (corrigé aussi)
      subject: `Confirmation d'inscription - ${formationTitle}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Confirmation d'inscription</h2>
          <p>Bonjour ${participantName},</p>
          <p>Votre inscription a bien été enregistrée.</p>
          <p><strong>Formation :</strong> ${formationTitle}</p>
          <p><strong>Date :</strong> ${sessionDate}</p>
          <p>Cordialement,<br />PREVENSIA FORMATION</p>
        </div>
      `,
    });

    const adminEmailResponse = await resend.emails.send({
      from: "PREVENSIA <onboarding@resend.dev>",
      to: ["prevensia.formation@outlook.fr"],
      subject: `Nouvelle inscription - ${formationTitle}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Nouvelle inscription reçue</h2>
          <p><strong>Nom :</strong> ${participantName}</p>
          <p><strong>Email :</strong> ${participantEmail}</p>
          <p><strong>Entreprise :</strong> ${company || "Non renseignée"}</p>
          <p><strong>Formation :</strong> ${formationTitle}</p>
          <p><strong>Date :</strong> ${sessionDate}</p>
        </div>
      `,
    });

    return Response.json({
      success: true,
      participantEmailResponse,
      adminEmailResponse,
    });

  } catch (error) {
    console.error("ERREUR EMAIL :", error);
    return Response.json(
      {
        success: false,
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return Response.json({ ok: true, route: "/api/send-mail" });
}