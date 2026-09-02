import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/require-admin";
import { createClient } from "@/lib/supabase/server";

type QuestionResult = {
  questionId?: string; // nouveau format (quiz/submit v2)
  q?: string;          // ancien format (rétrocompatibilité)
  correct: boolean;
};

type AttemptRow = {
  id: string;
  formation_slug: string;
  score: number;
  total: number;
  passed: boolean;
  score_percent: number;
  attempted_at: string;
  question_results: QuestionResult[];
};

export async function GET() {
  try {
    const supabase = await createClient();

    const auth = await requireAdmin();
    if ("error" in auth) return auth.error;


    // Charger enrollments + quiz_attempts en parallèle
    const [enrollmentsResult, attemptsResult] = await Promise.all([
      supabase
        .from("enrollments")
        .select(`
          id,
          status,
          access_start,
          completion_percent,
          formation_id,
          formations (id, title, slug)
        `)
        .order("access_start", { ascending: false }),
      supabase
        .from("quiz_attempts")
        .select("id, formation_slug, score, total, passed, score_percent, attempted_at, question_results")
        .order("attempted_at", { ascending: false }),
    ]);

    if (enrollmentsResult.error) throw enrollmentsResult.error;

    const rows = enrollmentsResult.data ?? [];
    const attempts = (attemptsResult.data ?? []) as AttemptRow[];

    // --- KPIs globaux (enrollments) ---
    const total = rows.length;
    const quizPassed = rows.filter((r) =>
      r.status === "pending_interview" || r.status === "completed"
    ).length;
    const completed = rows.filter((r) => r.status === "completed").length;
    const inProgress = rows.filter((r) => r.status === "in_progress").length;
    const notStarted = rows.filter((r) => r.status === "not_started").length;

    const now = new Date();
    const firstOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const thisMouth = rows.filter((r) => {
      if (!r.access_start) return false;
      return new Date(r.access_start) >= firstOfMonth;
    }).length;

    // --- KPIs attempts ---
    const totalAttempts = attempts.length;
    const passedAttempts = attempts.filter((a) => a.passed).length;
    const avgScorePercent =
      totalAttempts > 0
        ? Math.round(
            attempts.reduce((acc, a) => acc + a.score_percent, 0) / totalAttempts
          )
        : 0;

    // --- Par formation (enrollments) ---
    const formationMap = new Map<
      string,
      {
        id: string;
        title: string;
        slug: string;
        total: number;
        quizPassed: number;
        completed: number;
        inProgress: number;
        notStarted: number;
      }
    >();

    for (const row of rows) {
      const f = Array.isArray(row.formations) ? row.formations[0] : row.formations;
      if (!f) continue;
      const key = f.id;
      if (!formationMap.has(key)) {
        formationMap.set(key, {
          id: f.id,
          title: f.title ?? f.slug ?? key,
          slug: f.slug ?? "",
          total: 0,
          quizPassed: 0,
          completed: 0,
          inProgress: 0,
          notStarted: 0,
        });
      }
      const entry = formationMap.get(key)!;
      entry.total += 1;
      if (row.status === "pending_interview" || row.status === "completed") entry.quizPassed += 1;
      if (row.status === "completed") entry.completed += 1;
      if (row.status === "in_progress") entry.inProgress += 1;
      if (row.status === "not_started") entry.notStarted += 1;
    }

    const byFormation = [...formationMap.values()].sort((a, b) => b.total - a.total);

    // --- Stats attempts par formation ---
    const attemptsByFormation = new Map<
      string,
      { attempts: number; passed: number; totalPercent: number }
    >();

    for (const a of attempts) {
      if (!attemptsByFormation.has(a.formation_slug)) {
        attemptsByFormation.set(a.formation_slug, { attempts: 0, passed: 0, totalPercent: 0 });
      }
      const entry = attemptsByFormation.get(a.formation_slug)!;
      entry.attempts += 1;
      if (a.passed) entry.passed += 1;
      entry.totalPercent += a.score_percent;
    }

    const byFormationWithAttempts = byFormation.map((f) => {
      const stats = attemptsByFormation.get(f.slug) ?? { attempts: 0, passed: 0, totalPercent: 0 };
      return {
        ...f,
        attempts: stats.attempts,
        attemptPassRate: stats.attempts > 0 ? Math.round((stats.passed / stats.attempts) * 100) : null,
        avgScorePercent: stats.attempts > 0 ? Math.round(stats.totalPercent / stats.attempts) : null,
      };
    });

    // --- Questions les plus difficiles (taux d'échec le plus élevé) ---
    const questionFailMap = new Map<string, { total: number; failed: number }>();

    for (const a of attempts) {
      if (!Array.isArray(a.question_results)) continue;
      for (const qr of a.question_results) {
        // quiz_attempts stocke questionId (texte complet) — fallback qr.q pour anciennes entrées
        const questionText = typeof qr.questionId === "string" ? qr.questionId : (typeof qr.q === "string" ? qr.q : null);
        if (!questionText || typeof qr.correct !== "boolean") continue;
        const key = questionText.slice(0, 80).toLowerCase();
        if (!questionFailMap.has(key)) {
          questionFailMap.set(key, { total: 0, failed: 0 });
        }
        const entry = questionFailMap.get(key)!;
        entry.total += 1;
        if (!qr.correct) entry.failed += 1;
      }
    }

    const hardestQuestions = [...questionFailMap.entries()]
      .filter(([, v]) => v.total >= 3) // au moins 3 tentatives pour être significatif
      .map(([q, v]) => ({
        question: q,
        total: v.total,
        failed: v.failed,
        failRate: Math.round((v.failed / v.total) * 100),
      }))
      .sort((a, b) => b.failRate - a.failRate)
      .slice(0, 15);

    // --- Évolution mensuelle (12 derniers mois) ---
    const monthlyMap = new Map<string, { inscriptions: number; quizPassed: number; attempts: number }>();
    for (let i = 11; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
      monthlyMap.set(key, { inscriptions: 0, quizPassed: 0, attempts: 0 });
    }

    for (const row of rows) {
      if (!row.access_start) continue;
      const d = new Date(row.access_start);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
      if (!monthlyMap.has(key)) continue;
      const entry = monthlyMap.get(key)!;
      entry.inscriptions += 1;
      if (row.status === "pending_interview" || row.status === "completed") {
        entry.quizPassed += 1;
      }
    }

    for (const a of attempts) {
      const d = new Date(a.attempted_at);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
      if (!monthlyMap.has(key)) continue;
      monthlyMap.get(key)!.attempts += 1;
    }

    const monthly = [...monthlyMap.entries()].map(([month, data]) => ({
      month,
      ...data,
    }));

    return NextResponse.json({
      kpis: {
        total,
        quizPassed,
        completed,
        inProgress,
        notStarted,
        thisMouth,
        quizPassRate: total > 0 ? Math.round((quizPassed / total) * 100) : 0,
        completionRate: total > 0 ? Math.round((completed / total) * 100) : 0,
        totalAttempts,
        passedAttempts,
        attemptPassRate: totalAttempts > 0 ? Math.round((passedAttempts / totalAttempts) * 100) : 0,
        avgScorePercent,
      },
      byFormation: byFormationWithAttempts,
      monthly,
      hardestQuestions,
    });
  } catch (err) {
    console.error("quiz-analytics error:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
