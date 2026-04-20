import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { Resend } from "resend";
import {
  getModuleSlugCandidates,
  resolveModuleSlug,
} from "@/lib/supabase/elearning/module-registry";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(req: Request) {
  try {
    const supabase = await createClient();

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    const body = await req.json().catch(() => null);

    const requestedFormationSlug =
      typeof body?.formationSlug === "string" ? body.formationSlug.trim() : "";
    const formationSlug =
      resolveModuleSlug(requestedFormationSlug) ??
      requestedFormationSlug.toLowerCase();
    const passed = Boolean(body?.passed);
    const score = Number(body?.score ?? 0);
    const total = Number(body?.total ?? 0);
    const passingScore = Number(body?.passingScore ?? 0);
    if (!formationSlug) {
      return NextResponse.json(
        { error: "formationSlug manquant" },
        { status: 400 }
      );
    }

    const safeScore = Number.isFinite(score) ? score : 0;
    const safeTotal = Number.isFinite(total) ? total : 0;
    const safePassingScore = Number.isFinite(passingScore) ? passingScore : 0;
    const scorePercent =
      safeTotal > 0 ? Math.round((safeScore / safeTotal) * 100) : 0;

    const { data: formations, error: formationError } = await supabase
      .from("formations")
      .select("id, slug, title")
      .in("slug", getModuleSlugCandidates(formationSlug))
      .limit(1);

    const formation = formations?.[0] ?? null;

    if (formationError || !formation) {
      return NextResponse.json(
        { error: "Formation introuvable" },
        { status: 404 }
      );
    }

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("first_name, last_name, company")
      .eq("id", user.id)
      .maybeSingle();

    if (profileError) {
      console.error("Erreur lecture profil quiz submit :", profileError);
    }

    const { data: enrollment, error: enrollmentError } = await supabase
      .from("enrollments")
      .select(`
        id,
        company_name,
        manager_email,
        ordered_by_employer,
        status
      `)
      .eq("user_id", user.id)
      .eq("formation_id", formation.id)
      .maybeSingle();

    if (enrollmentError || !enrollment) {
      return NextResponse.json(
        { error: "Inscription introuvable pour cette formation." },
        { status: 404 }
      );
    }

    if (passed) {
      const { error: updateError } = await supabase
        .from("enrollments")
        .update({
          status: "pending_interview",
          completion_percent: 100,
        })
        .eq("id", enrollment.id);

      if (updateError) {
        return NextResponse.json(
          { error: `Erreur mise à jour inscription: ${updateError.message}` },
          { status: 500 }
        );
      }

      const orderedByEmployer = Boolean(enrollment.ordered_by_employer);
      const managerEmail = enrollment.manager_email?.trim() ?? "";

      if (orderedByEmployer && managerEmail) {
        if (!resend) {
          console.error(
            "RESEND_API_KEY manquante : mail employeur non envoyé."
          );
        } else {
          const learnerFullName =
            [profile?.first_name?.trim(), profile?.last_name?.trim()]
              .filter(Boolean)
              .join(" ")
              .trim() || user.email || "Apprenant";

          const emailSubject = `Quiz validé - ${
            formation.title || formation.slug
          }`;

          const emailHtml = `
            <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
              <h2 style="margin-bottom: 16px;">Quiz validé</h2>
              <p>Bonjour,</p>
              <p>
                Nous vous informons que le salarié <strong>${learnerFullName}</strong>
                a validé le quiz de la formation
                <strong>${formation.title || formation.slug}</strong>.
              </p>
              <p>
                Score obtenu : <strong>${safeScore}/${safeTotal}</strong> (${scorePercent}%)
              </p>
              <p>
                Seuil de validation : <strong>${safePassingScore}/${safeTotal}</strong>
              </p>
              <p>
                Date de réussite du quiz :
                <strong>${new Date().toLocaleDateString("fr-FR")}</strong>
              </p>
              <p>
                Le dossier passe maintenant à l’étape <strong>entretien à planifier</strong>.
              </p>
              <p>
                L’attestation ne sera disponible qu’après validation finale du parcours.
              </p>
              <p style="margin-top: 24px;">
                Bien cordialement,<br />
                PREVENSIA FORMATION
              </p>
            </div>
          `;

          const sendResult = await resend.emails.send({
            from: "PREVENSIA FORMATION <contact@prevensia-formation.fr>",
            to: managerEmail,
            subject: emailSubject,
            html: emailHtml,
          });

          if (sendResult.error) {
            console.error("Erreur envoi mail employeur :", sendResult.error);
          }
        }
      }
    } else {
      const { error: updateError } = await supabase
        .from("enrollments")
        .update({
          status:
            enrollment.status === "not_started" ? "in_progress" : enrollment.status,
        })
        .eq("id", enrollment.id);

      if (updateError) {
        return NextResponse.json(
          { error: `Erreur mise à jour inscription: ${updateError.message}` },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({
      success: true,
      status: passed
        ? "pending_interview"
        : enrollment.status === "not_started"
        ? "in_progress"
        : enrollment.status,
    });
  } catch (error) {
    console.error("QUIZ SUBMIT ERROR:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? `Erreur serveur quiz: ${error.message}`
            : "Erreur serveur quiz inconnue",
      },
      { status: 500 }
    );
  }
}
