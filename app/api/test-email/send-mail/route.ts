import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { success: false, error: "RESEND_API_KEY manquante" },
        { status: 500 }
      );
    }

    const body = await request.json();

    const {
      participantEmail,
      participantName,
      formationTitle,
      sessionDate,
      company,
    } = body;

    const participantEmailResponse = await resend.emails.send({
      from: "PREVENSIA <onboarding@resend.dev>",
      to: [participantEmail],
      subject: `Confirmation d'inscription - ${formationTitle}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Confirmation d'inscription</h2>
          <p>Bonjour ${participantName},</p>
          <p>Votre inscription a bien été enregistrée.</p>
          <p><strong>Formation :</strong> ${formationTitle}</p>
          <p><strong>Date :</strong> ${sessionDate}</p>
          <p>Notre équipe peut vous contacter prochainement pour valider votre parcours.</p>
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
    console.error("Erreur envoi email :", error);
    return Response.json(
      { success: false, error: "Erreur lors de l'envoi des emails." },
      { status: 500 }
    );
  }
}