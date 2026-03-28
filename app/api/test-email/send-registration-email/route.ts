import { Resend } from "resend";

const resend = new Resend("re_2AJt4df5_FgwVaHU75q1uN5cejUnZ57uC");

export async function POST(request: Request) {
  try {
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
    console.error(error);
    return Response.json({ success: false, error });
  }
}