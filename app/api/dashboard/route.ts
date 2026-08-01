import { NextResponse } from "next/server";
import { createClient } from "../../../lib/supabase/server";
import { getRequiredChapterCount } from "../../../lib/supabase/elearning/module-registry";

type ProfileRow = {
  id: string;
  email: string | null;
  first_name: string | null;
  last_name: string | null;
  phone: string | null;
  company: string | null;
  role: string | null;
};

type FormationRow = {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  duration_hours: number | null;
  elearning_duration: string | null;
  mode: string | null;
};

type EnrollmentRow = {
  id: string;
  status: string | null;
  payment_status: string | null;
  access_start: string | null;
  access_end: string | null;
  stripe_invoice_url: string | null;
  stripe_invoice_pdf: string | null;
  formation: FormationRow | FormationRow[] | null;
};

type ChapterProgressRow = {
  formation_slug: string;
  chapter_key: string;
  chapter_order: number | null;
  is_completed: boolean;
  updated_at: string | null;
};

type QuizAttemptRow = {
  enrollment_id: string | null;
  score: number;
  total: number;
  score_percent: number;
  passed: boolean;
  attempted_at: string;
};

function getSingleFormation(
  formation: FormationRow | FormationRow[] | null
): FormationRow | null {
  if (!formation) return null;
  return Array.isArray(formation) ? formation[0] ?? null : formation;
}

export async function GET() {
  try {
    const supabase = await createClient();

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      console.error("AUTH ERROR:", userError);
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("id, email, first_name, last_name, phone, company, role")
      .eq("id", user.id)
      .maybeSingle();

    if (profileError) {
      console.error("PROFILE ERROR:", profileError);
      return NextResponse.json(
        { error: `Erreur lecture profil: ${profileError.message}` },
        { status: 500 }
      );
    }

    const typedProfile = (profile ?? null) as ProfileRow | null;

    const { data: enrollments, error: enrollmentsError } = await supabase
      .from("enrollments")
      .select(
        `
        id,
        status,
        payment_status,
        access_start,
        access_end,
        stripe_invoice_url,
        stripe_invoice_pdf,
        formation:formations (
          id,
          slug,
          title,
          description,
          duration_hours,
          elearning_duration,
          mode
        )
        `
      )
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (enrollmentsError) {
      console.error("ENROLLMENTS ERROR:", enrollmentsError);
      return NextResponse.json(
        { error: `Erreur lecture inscriptions: ${enrollmentsError.message}` },
        { status: 500 }
      );
    }

    const typedEnrollments = (enrollments ?? []) as EnrollmentRow[];

    const formationSlugs = typedEnrollments
      .map((item) => getSingleFormation(item.formation)?.slug ?? null)
      .filter((slug): slug is string => Boolean(slug));

    let chapterProgressRows: ChapterProgressRow[] = [];
    let quizAttemptRows: QuizAttemptRow[] = [];

    if (formationSlugs.length > 0) {
      const { data: chapterProgress, error: chapterProgressError } =
        await supabase
          .from("user_chapter_progress")
          .select(
            `
          formation_slug,
          chapter_key,
          chapter_order,
          is_completed,
          updated_at
          `
          )
          .eq("user_id", user.id)
          .in("formation_slug", formationSlugs);

      if (chapterProgressError) {
        console.error("CHAPTER PROGRESS ERROR:", chapterProgressError);
        return NextResponse.json(
          {
            error: `Erreur lecture progression chapitres: ${chapterProgressError.message}`,
          },
          { status: 500 }
        );
      }

      chapterProgressRows = (chapterProgress ?? []) as ChapterProgressRow[];

      // Récupérer les tentatives de quiz pour toutes les inscriptions
      const enrollmentIds = typedEnrollments.map((e) => e.id).filter(Boolean);
      if (enrollmentIds.length > 0) {
        const { data: quizAttempts } = await supabase
          .from("quiz_attempts")
          .select("enrollment_id, score, total, score_percent, passed, attempted_at")
          .eq("user_id", user.id)
          .in("enrollment_id", enrollmentIds)
          .order("attempted_at", { ascending: false });
        quizAttemptRows = (quizAttempts ?? []) as QuizAttemptRow[];
      }
    }

    const dashboardFormations = typedEnrollments.map((enrollment) => {
      const formation = getSingleFormation(enrollment.formation);
      const formationSlug = formation?.slug ?? null;
      const requiredChapterCount = getRequiredChapterCount(formationSlug);

      // Quiz : toutes les tentatives pour cette inscription
      const enrollmentAttempts = quizAttemptRows.filter(
        (a) => a.enrollment_id === enrollment.id
      );
      const passedAttempt = enrollmentAttempts.find((a) => a.passed) ?? null;
      const bestAttempt = enrollmentAttempts.reduce<QuizAttemptRow | null>(
        (best, cur) => (!best || cur.score_percent > best.score_percent ? cur : best),
        null
      );

      const formationChapterRows = chapterProgressRows.filter(
        (row) => row.formation_slug === formationSlug
      );

      const completedChapterRows = formationChapterRows.filter(
        (row) => row.is_completed
      );

      const completedChapterCount = completedChapterRows.length;

      const completionPercent =
        requiredChapterCount > 0
          ? Math.min(
              100,
              Math.round((completedChapterCount / requiredChapterCount) * 100)
            )
          : 0;

      const lastCompletedChapter =
        completedChapterRows
          .slice()
          .sort((a, b) => (b.chapter_order ?? 0) - (a.chapter_order ?? 0))[0] ??
        null;

      const completed = enrollment.status === "completed";

      const derivedStatus =
        enrollment.status === "completed"
          ? "completed"
          : enrollment.status === "pending_interview"
          ? "pending_interview"
          : completionPercent > 0
          ? "in_progress"
          : enrollment.status ?? "not_started";

      const latestUpdatedAt =
        formationChapterRows
          .slice()
          .sort((a, b) => {
            const aTime = a.updated_at ? new Date(a.updated_at).getTime() : 0;
            const bTime = b.updated_at ? new Date(b.updated_at).getTime() : 0;
            return bTime - aTime;
          })[0]?.updated_at ?? null;

      return {
        enrollment_id: enrollment.id,
        formation_id: formation?.id ?? null,
        slug: formationSlug,
        title: formation?.title ?? null,
        description: formation?.description ?? null,
        duration_hours: formation?.duration_hours ?? null,
        elearning_duration: formation?.elearning_duration ?? null,
        mode: formation?.mode ?? null,
        status: derivedStatus,
        payment_status: enrollment.payment_status ?? null,
        completion_percent: completionPercent,
        completed,
        last_module_slug: lastCompletedChapter?.chapter_key ?? null,
        updated_at: latestUpdatedAt,
        access_start: enrollment.access_start,
        access_end: enrollment.access_end,
        stripe_invoice_url: enrollment.stripe_invoice_url ?? null,
        stripe_invoice_pdf: enrollment.stripe_invoice_pdf ?? null,
        // Quiz
        quiz_attempts_count: enrollmentAttempts.length,
        quiz_best_score_percent: bestAttempt?.score_percent ?? null,
        quiz_passed: passedAttempt !== null,
        quiz_passed_at: passedAttempt?.attempted_at ?? null,
      };
    });

    return NextResponse.json({
      user: {
        id: user.id,
        email: user.email ?? null,
      },
      profile: typedProfile,
      formations: dashboardFormations,
    });
  } catch (error) {
    console.error("DASHBOARD FATAL ERROR:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? `Erreur serveur dashboard: ${error.message}`
            : "Erreur serveur dashboard inconnue",
      },
      { status: 500 }
    );
  }
}
