import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { Resend } from "resend";
import { resolveModuleSlug } from "@/lib/supabase/elearning/module-registry";
import {
  canFormationAccessModule,
  getCanonicalModuleSlug,
} from "@/lib/supabase/elearning/module-access";
import { quizContent } from "@/app/modules/[slug]/quiz/content";

/**
 * Seuils de validation calculés côté serveur.
 * Le seuil transmis par le client n'est jamais utilisé directement :
 * on le vérifie contre cette table de référence.
 * BSBE → 85 % (NF C 18-510/A2) ; tous les autres → 80 %.
 */
function getServerPassingThreshold(slug: string): number {
  return slug === "bsbe" ? 0.85 : 0.8;
}

/** Compare deux tableaux triés d'entiers — ordre-indépendant. */
function answersEqual(a: number[], b: number[]): boolean {
  if (a.length !== b.length) return false;
  const sa = [...a].sort((x, y) => x - y);
  const sb = [...b].sort((x, y) => x - y);
  return sa.every((v, i) => v === sb[i]);
}

type QuestionResult = {
  questionId: string;
  selectedChoices: number[];
  correct: boolean;
  eliminatory: boolean;
};

/**
 * Évalue les réponses côté serveur à partir du référentiel de questions.
 *
 * Entrée : answers = [{questionId (texte complet), selectedChoices}]
 * Sortie : {score, total, eliminatoryFailed, questionResults} — tout calculé serveur.
 * Retourne null uniquement si le quiz est absent du référentiel.
 */
function evaluateAnswersServerSide(
  formationSlug: string,
  answers: Array<{ questionId: string; selectedChoices: number[] }>
): {
  score: number;
  total: number;
  eliminatoryFailed: boolean;
  questionResults: QuestionResult[];
} | null {
  const questions = quizContent[formationSlug];
  if (!questions || questions.length === 0) return null;

  // Lookup : texte complet de la question → {answer, eliminatory}
  const lookup = new Map<string, { answer: number[]; eliminatory?: boolean }>();
  for (const q of questions) {
    lookup.set(q.question, { answer: q.answer, eliminatory: q.eliminatory });
  }

  let score = 0;
  let eliminatoryFailed = false;
  let verifiableCount = 0;
  const questionResults: QuestionResult[] = [];

  for (const a of answers) {
    const ref = lookup.get(a.questionId);
    if (!ref) {
      // Question inconnue — ignorée (log pour détection de manipulation)
      console.warn(
        `[QUIZ SECURITY] Question inconnue dans "${formationSlug}" : "${a.questionId.slice(0, 60)}…"`
      );
      continue;
    }

    verifiableCount++;
    const correct = answersEqual(a.selectedChoices, ref.answer);
    if (correct) score++;
    if (!correct && ref.eliminatory) eliminatoryFailed = true;

    questionResults.push({
      questionId: a.questionId,
      selectedChoices: a.selectedChoices,
      correct,
      eliminatory: ref.eliminatory ?? false,
    });
  }

  // Refus si moins de 50 % des réponses sont reconnues (manipulation probable)
  if (verifiableCount < answers.length * 0.5) {
    console.error(
      `[QUIZ SECURITY] Seulement ${verifiableCount}/${answers.length} questions reconnues ` +
      `pour "${formationSlug}" — évaluation abandonnée`
    );
    return null;
  }

  return { score, total: verifiableCount, eliminatoryFailed, questionResults };
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

    // ── Seul contrat accepté : answers [{questionId, selectedChoices}] ───────
    // Le serveur n'accepte ni score, ni total, ni passed, ni correct du client.
    type ClientAnswer = { questionId: string; selectedChoices: number[] };
    const rawAnswers: ClientAnswer[] = Array.isArray(body?.answers)
      ? (body.answers as unknown[]).filter(
          (a): a is ClientAnswer =>
            a !== null &&
            typeof a === "object" &&
            typeof (a as Record<string, unknown>).questionId === "string" &&
            Array.isArray((a as Record<string, unknown>).selectedChoices)
        )
      : [];

    if (rawAnswers.length === 0) {
      return NextResponse.json(
        { error: "answers manquant ou vide." },
        { status: 400 }
      );
    }

    // ── Évaluation côté serveur depuis quizContent ────────────────────────
    const serverEval = evaluateAnswersServerSide(formationSlug, rawAnswers);

    if (!serverEval) {
      // Quiz absent du référentiel serveur — refus strict
      console.error(
        `[QUIZ SECURITY] Quiz absent du référentiel pour "${formationSlug}" ` +
        `— ${rawAnswers.length} réponses reçues mais non vérifiables. user=${user.id}`
      );
      return NextResponse.json(
        { error: "Quiz non disponible pour cette formation." },
        { status: 400 }
      );
    }

    const { score: safeScore, total: safeTotal, eliminatoryFailed, questionResults } = serverEval;

    // ── Seuil + résultat — calculés côté serveur uniquement ──────────────
    const serverThreshold = getServerPassingThreshold(formationSlug);
    const safePassingScore = safeTotal > 0 ? Math.ceil(safeTotal * serverThreshold) : 1;
    const scorePercent = safeTotal > 0 ? Math.round((safeScore / safeTotal) * 100) : 0;
    const passed = safeScore >= safePassingScore && safeTotal > 0 && !eliminatoryFailed;

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
