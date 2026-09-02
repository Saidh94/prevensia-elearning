import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { Resend } from "resend";
import { resolveModuleSlug } from "@/lib/supabase/elearning/module-registry";
import {
  canFormationAccessModule,
  getCanonicalModuleSlug,
} from "@/lib/supabase/elearning/module-access";

/**
 * Seuils de validation calculés côté serveur.
 * Le seuil transmis par le client n'est jamais utilisé directement :
 * on le vérifie contre cette table de référence.
 * BSBE → 85 % (NF C 18-510/A2) ; tous les autres → 80 %.
 */
function getServerPassingThreshold(slug: string): number {
  return slug === "bsbe" ? 0.85 : 0.8;
}

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
    const formationSlug = getCanonicalModuleSlug(
      resolveModuleSlug(requestedFormationSlug) ??
      requestedFormationSlug.toLowerCase()
    );

    if (!formationSlug) {
      return NextResponse.json(
        { error: "formationSlug manquant" },
        { status: 400 }
      );
    }

    // ── Validation des valeurs numériques ──────────────────────────────────
    const rawScore = Number(body?.score ?? 0);
    const rawTotal = Number(body?.total ?? 0);

    const safeScore = Number.isFinite(rawScore) && rawScore >= 0 ? Math.round(rawScore) : 0;
    const safeTotal = Number.isFinite(rawTotal) && rawTotal > 0 ? Math.round(rawTotal) : 0;

    // Sanity check : le score ne peut pas dépasser le total
    if (safeScore > safeTotal) {
      console.warn(
        `[QUIZ SECURITY] score>${safeTotal} reçu pour ${formationSlug} par user ${user.id} — rejeté`
      );
      return NextResponse.json(
        { error: "Score invalide." },
        { status: 400 }
      );
    }

    // ── Recalcul côté serveur : NE JAMAIS faire confiance à body.passed ───
    const serverThreshold = getServerPassingThreshold(formationSlug);
    const serverPassingScore = safeTotal > 0 ? Math.ceil(safeTotal * serverThreshold) : 1;
    const scorePercent = safeTotal > 0 ? Math.round((safeScore / safeTotal) * 100) : 0;

    // questionResults : vérification de cohérence
    const questionResults = Array.isArray(body?.questionResults)
      ? body.questionResults.filter(
          (r: unknown) =>
            r !== null &&
            typeof r === "object" &&
            typeof (r as Record<string, unknown>).q === "string" &&
            typeof (r as Record<string, unknown>).correct === "boolean"
        )
      : [];

    // Si questionResults est fourni, vérifier que le score déclaré correspond
    // au nombre de bonnes réponses (tolérance ±0 — doit être exact)
    if (questionResults.length > 0) {
      const computedScore = questionResults.filter(
        (r: Record<string, unknown>) => r.correct === true
      ).length;
      if (computedScore !== safeScore) {
        console.warn(
          `[QUIZ SECURITY] Score déclaré (${safeScore}) ≠ score calculé (${computedScore}) ` +
          `pour ${formationSlug} user ${user.id}`
        );
        return NextResponse.json(
          { error: "Incohérence de score détectée." },
          { status: 400 }
        );
      }
    }

    // ── Résultat final — calculé côté serveur uniquement ──────────────────
    const safePassingScore = serverPassingScore;
    // Le client peut signaler qu'une question éliminatoire a été échouée ;
    // le serveur l'utilise seulement pour journaliser, jamais pour assouplir le seuil.
    const clientClaimedPassed = Boolean(body?.passed);
    const passed = safeScore >= safePassingScore && safeTotal > 0;

    if (clientClaimedPassed !== passed) {
      console.warn(
        `[QUIZ SECURITY] body.passed=${clientClaimedPassed} mais calcul serveur=${passed} ` +
        `(score=${safeScore}/${safeTotal} seuil=${safePassingScore}) ` +
        `formation=${formationSlug} user=${user.id}`
      );
    }

    const { data: formations, error: formationError } = await supabase
      .from("formations")
      .select("id, slug, title");

    const formation =
      formations?.find((item) =>
        canFormationAccessModule(item.slug, formationSlug)
      ) ?? null;

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

    // Enregistrer la tentative dans quiz_attempts (toutes tentatives, réussies ou non)
    const { error: attemptError } = await supabase
      .from("quiz_attempts")
      .insert({
        user_id: user.id,
        enrollment_id: enrollment.id,
        formation_slug: formationSlug,
        score: safeScore,
        total: safeTotal,
        passing_score: safePassingScore,
        passed,
        score_percent: scorePercent,
        question_results: questionResults,
      });

    if (attemptError) {
      // Non-bloquant : on log mais on ne stoppe pas le flux
      console.error("Erreur enregistrement quiz_attempts :", attemptError.message);
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
