import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

// ── helpers ──────────────────────────────────────────────────────────────────

function pct(num: number, den: number) {
  return den > 0 ? Math.round((num / den) * 100) : 0;
}

function fmtMonth(key: string) {
  const [year, month] = key.split("-");
  return new Date(Number(year), Number(month) - 1, 1).toLocaleDateString("fr-FR", {
    month: "short",
    year: "2-digit",
  });
}

// ── types ─────────────────────────────────────────────────────────────────────

type EnrollmentRow = {
  id: string;
  status: string | null;
  access_start: string | null;
  completion_percent: number | null;
  formation_id: string;
  formations: { id: string; title: string | null; slug: string | null } | null;
};

type AttemptRow = {
  id: string;
  formation_slug: string;
  score: number;
  total: number;
  passed: boolean;
  score_percent: number;
  attempted_at: string;
  question_results: Array<{ q: string; correct: boolean }>;
};

type FormationStat = {
  id: string;
  title: string;
  slug: string;
  total: number;
  quizPassed: number;
  completed: number;
  inProgress: number;
  notStarted: number;
  attempts: number;
  attemptPassRate: number | null;
  avgScorePercent: number | null;
};

// ── sub-components ────────────────────────────────────────────────────────────

function KpiCard({
  label,
  value,
  sub,
  color,
}: {
  label: string;
  value: string | number;
  sub?: string;
  color: string;
}) {
  return (
    <div className={`rounded-2xl border p-6 ${color}`}>
      <p className="text-xs font-semibold uppercase tracking-widest opacity-70">{label}</p>
      <p className="mt-1 text-4xl font-bold">{value}</p>
      {sub && <p className="mt-1 text-sm opacity-60">{sub}</p>}
    </div>
  );
}

function ProgressBar({
  value,
  max,
  color,
}: {
  value: number;
  max: number;
  color: string;
}) {
  const w = max > 0 ? Math.round((value / max) * 100) : 0;
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
      <div className={`h-full rounded-full ${color}`} style={{ width: `${w}%` }} />
    </div>
  );
}

function StatusDot({ color }: { color: string }) {
  return <span className={`inline-block h-2 w-2 rounded-full ${color}`} />;
}

// ── page ──────────────────────────────────────────────────────────────────────

export default async function QuizAnalyticsPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/connexion");

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle();

  if (profile?.role !== "admin") redirect("/");

  // ── fetch data en parallèle ─────────────────────────────────────────────────
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
      .order("access_start", { ascending: false })
      .returns<EnrollmentRow[]>(),
    supabase
      .from("quiz_attempts")
      .select("id, formation_slug, score, total, passed, score_percent, attempted_at, question_results")
      .order("attempted_at", { ascending: false })
      .returns<AttemptRow[]>(),
  ]);

  const enrollments = enrollmentsResult.data ?? [];
  const attempts = attemptsResult.data ?? [];

  // ── KPIs enrollments ────────────────────────────────────────────────────────
  const total = enrollments.length;
  const quizPassed = enrollments.filter(
    (r) => r.status === "pending_interview" || r.status === "completed"
  ).length;
  const completed = enrollments.filter((r) => r.status === "completed").length;
  const inProgress = enrollments.filter((r) => r.status === "in_progress").length;
  const notStarted = enrollments.filter((r) => r.status === "not_started").length;
  const pendingInterview = enrollments.filter(
    (r) => r.status === "pending_interview"
  ).length;

  const now = new Date();
  const firstOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const thisMonth = enrollments.filter(
    (r) => r.access_start && new Date(r.access_start) >= firstOfMonth
  ).length;

  // ── KPIs attempts ───────────────────────────────────────────────────────────
  const totalAttempts = attempts.length;
  const passedAttempts = attempts.filter((a) => a.passed).length;
  const avgScorePercent =
    totalAttempts > 0
      ? Math.round(
          attempts.reduce((acc, a) => acc + a.score_percent, 0) / totalAttempts
        )
      : 0;
  const thisMonthAttempts = attempts.filter(
    (a) => new Date(a.attempted_at) >= firstOfMonth
  ).length;

  // ── par formation ───────────────────────────────────────────────────────────
  const formationMap = new Map<string, FormationStat>();
  for (const row of enrollments) {
    const f = row.formations;
    if (!f) continue;
    if (!formationMap.has(f.id)) {
      formationMap.set(f.id, {
        id: f.id,
        title: f.title ?? f.slug ?? f.id,
        slug: f.slug ?? "",
        total: 0,
        quizPassed: 0,
        completed: 0,
        inProgress: 0,
        notStarted: 0,
        attempts: 0,
        attemptPassRate: null,
        avgScorePercent: null,
      });
    }
    const e = formationMap.get(f.id)!;
    e.total += 1;
    if (row.status === "pending_interview" || row.status === "completed") e.quizPassed += 1;
    if (row.status === "completed") e.completed += 1;
    if (row.status === "in_progress") e.inProgress += 1;
    if (row.status === "not_started") e.notStarted += 1;
  }

  // Enrichir avec les données attempts
  const attemptsBySlug = new Map<
    string,
    { count: number; passed: number; totalPct: number }
  >();
  for (const a of attempts) {
    if (!attemptsBySlug.has(a.formation_slug)) {
      attemptsBySlug.set(a.formation_slug, { count: 0, passed: 0, totalPct: 0 });
    }
    const e = attemptsBySlug.get(a.formation_slug)!;
    e.count += 1;
    if (a.passed) e.passed += 1;
    e.totalPct += a.score_percent;
  }

  for (const f of formationMap.values()) {
    const stats = attemptsBySlug.get(f.slug);
    if (stats) {
      f.attempts = stats.count;
      f.attemptPassRate = Math.round((stats.passed / stats.count) * 100);
      f.avgScorePercent = Math.round(stats.totalPct / stats.count);
    }
  }

  const byFormation = [...formationMap.values()].sort((a, b) => b.total - a.total);

  // ── questions les plus difficiles ───────────────────────────────────────────
  const questionFailMap = new Map<string, { total: number; failed: number }>();
  for (const a of attempts) {
    if (!Array.isArray(a.question_results)) continue;
    for (const qr of a.question_results) {
      // quiz_attempts stocke questionId (texte complet) — pas qr.q
      const questionText = typeof qr.questionId === "string" ? qr.questionId : (typeof qr.q === "string" ? qr.q : null);
      if (!questionText || typeof qr.correct !== "boolean") continue;
      const key = questionText.slice(0, 80).toLowerCase();
      if (!questionFailMap.has(key)) {
        questionFailMap.set(key, { total: 0, failed: 0 });
      }
      const e = questionFailMap.get(key)!;
      e.total += 1;
      if (!qr.correct) e.failed += 1;
    }
  }
  const hardestQuestions = [...questionFailMap.entries()]
    .filter(([, v]) => v.total >= 3)
    .map(([q, v]) => ({
      question: q,
      total: v.total,
      failed: v.failed,
      failRate: Math.round((v.failed / v.total) * 100),
    }))
    .sort((a, b) => b.failRate - a.failRate)
    .slice(0, 15);

  // ── mensuel ─────────────────────────────────────────────────────────────────
  const monthlyMap = new Map<
    string,
    { inscriptions: number; quizPassed: number; attempts: number }
  >();
  for (let i = 11; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    monthlyMap.set(key, { inscriptions: 0, quizPassed: 0, attempts: 0 });
  }
  for (const row of enrollments) {
    if (!row.access_start) continue;
    const d = new Date(row.access_start);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    if (!monthlyMap.has(key)) continue;
    const e = monthlyMap.get(key)!;
    e.inscriptions += 1;
    if (row.status === "pending_interview" || row.status === "completed") e.quizPassed += 1;
  }
  for (const a of attempts) {
    const d = new Date(a.attempted_at);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    if (!monthlyMap.has(key)) continue;
    monthlyMap.get(key)!.attempts += 1;
  }
  const monthly = [...monthlyMap.entries()].map(([month, data]) => ({ month, ...data }));
  const maxInscriptions = Math.max(...monthly.map((m) => m.inscriptions), 1);

  // ── render ───────────────────────────────────────────────────────────────────
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-7xl space-y-8">

        {/* header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">
              Administration
            </p>
            <h1 className="mt-1 text-3xl font-bold text-slate-900">
              Analytics quiz
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Vue agrégée des résultats sur l&apos;ensemble des formations e-learning
            </p>
          </div>
          <Link
            href="/admin"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
          >
            ← Retour inscriptions
          </Link>
        </div>

        {/* KPIs inscriptions */}
        <section>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-500">
            Indicateurs inscriptions
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            <KpiCard
              label="Total inscrits"
              value={total}
              sub={`ce mois : +${thisMonth}`}
              color="border-slate-200 bg-white text-slate-900"
            />
            <KpiCard
              label="Quiz réussi"
              value={`${pct(quizPassed, total)} %`}
              sub={`${quizPassed} / ${total}`}
              color="border-emerald-200 bg-emerald-50 text-emerald-900"
            />
            <KpiCard
              label="Formations terminées"
              value={`${pct(completed, total)} %`}
              sub={`${completed} / ${total}`}
              color="border-blue-200 bg-blue-50 text-blue-900"
            />
            <KpiCard
              label="En cours"
              value={inProgress}
              color="border-sky-200 bg-sky-50 text-sky-900"
            />
            <KpiCard
              label="Entretien planifié"
              value={pendingInterview}
              color="border-amber-200 bg-amber-50 text-amber-900"
            />
            <KpiCard
              label="Non démarrées"
              value={notStarted}
              color="border-slate-200 bg-slate-100 text-slate-700"
            />
          </div>
        </section>

        {/* KPIs tentatives */}
        {totalAttempts > 0 && (
          <section>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-500">
              Indicateurs tentatives (quiz_attempts)
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <KpiCard
                label="Tentatives totales"
                value={totalAttempts}
                sub={`ce mois : +${thisMonthAttempts}`}
                color="border-violet-200 bg-violet-50 text-violet-900"
              />
              <KpiCard
                label="Taux de réussite"
                value={`${pct(passedAttempts, totalAttempts)} %`}
                sub={`${passedAttempts} réussies`}
                color="border-emerald-200 bg-emerald-50 text-emerald-900"
              />
              <KpiCard
                label="Score moyen"
                value={`${avgScorePercent} %`}
                sub="toutes tentatives"
                color="border-blue-200 bg-blue-50 text-blue-900"
              />
              <KpiCard
                label="Tentatives échouées"
                value={totalAttempts - passedAttempts}
                sub="à reprendre"
                color="border-red-200 bg-red-50 text-red-900"
              />
            </div>
          </section>
        )}

        {/* statuts globaux bar */}
        {total > 0 && (
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-500">
              Répartition globale des statuts
            </h2>
            <div className="h-6 w-full overflow-hidden rounded-full">
              <div className="flex h-full">
                <div
                  className="bg-emerald-500"
                  style={{ width: `${pct(completed, total)}%` }}
                  title={`Terminées : ${completed}`}
                />
                <div
                  className="bg-amber-400"
                  style={{ width: `${pct(pendingInterview, total)}%` }}
                  title={`Entretien : ${pendingInterview}`}
                />
                <div
                  className="bg-blue-400"
                  style={{ width: `${pct(inProgress, total)}%` }}
                  title={`En cours : ${inProgress}`}
                />
                <div
                  className="bg-slate-200"
                  style={{ width: `${pct(notStarted, total)}%` }}
                  title={`Non démarrées : ${notStarted}`}
                />
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-600">
              <span className="flex items-center gap-1.5">
                <StatusDot color="bg-emerald-500" /> Terminées ({completed})
              </span>
              <span className="flex items-center gap-1.5">
                <StatusDot color="bg-amber-400" /> Entretien ({pendingInterview})
              </span>
              <span className="flex items-center gap-1.5">
                <StatusDot color="bg-blue-400" /> En cours ({inProgress})
              </span>
              <span className="flex items-center gap-1.5">
                <StatusDot color="bg-slate-300" /> Non démarrées ({notStarted})
              </span>
            </div>
          </section>
        )}

        {/* par formation */}
        {byFormation.length > 0 && (
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-500">
              Résultats par formation
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                    <th className="pb-3 pr-4">Formation</th>
                    <th className="pb-3 pr-4 text-center">Inscrits</th>
                    <th className="pb-3 pr-4 text-center">Quiz réussi</th>
                    <th className="pb-3 pr-4 text-center">Tentatives</th>
                    <th className="pb-3 pr-4 text-center">Taux / tentative</th>
                    <th className="pb-3 pr-4 text-center">Score moyen</th>
                    <th className="pb-3 min-w-[180px]">Progression</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {byFormation.map((f) => {
                    const quizRate = pct(f.quizPassed, f.total);
                    const completionRate = pct(f.completed, f.total);
                    return (
                      <tr key={f.id} className="group hover:bg-slate-50">
                        <td className="py-3 pr-4 font-medium text-slate-800">
                          {f.title}
                        </td>
                        <td className="py-3 pr-4 text-center text-slate-600">
                          {f.total}
                        </td>
                        <td className="py-3 pr-4 text-center">
                          <span
                            className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                              quizRate >= 70
                                ? "bg-emerald-100 text-emerald-700"
                                : quizRate >= 40
                                ? "bg-amber-100 text-amber-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {quizRate} %
                          </span>
                        </td>
                        <td className="py-3 pr-4 text-center text-slate-500">
                          {f.attempts > 0 ? f.attempts : "—"}
                        </td>
                        <td className="py-3 pr-4 text-center">
                          {f.attemptPassRate !== null ? (
                            <span
                              className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                                f.attemptPassRate >= 70
                                  ? "bg-emerald-100 text-emerald-700"
                                  : f.attemptPassRate >= 40
                                  ? "bg-amber-100 text-amber-700"
                                  : "bg-red-100 text-red-700"
                              }`}
                            >
                              {f.attemptPassRate} %
                            </span>
                          ) : (
                            <span className="text-slate-300">—</span>
                          )}
                        </td>
                        <td className="py-3 pr-4 text-center text-slate-600">
                          {f.avgScorePercent !== null ? `${f.avgScorePercent} %` : "—"}
                        </td>
                        <td className="py-3">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="w-16 shrink-0 text-right text-xs text-emerald-600">
                                Quiz {quizRate}%
                              </span>
                              <ProgressBar
                                value={f.quizPassed}
                                max={f.total}
                                color="bg-emerald-400"
                              />
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="w-16 shrink-0 text-right text-xs text-blue-600">
                                Fini {completionRate}%
                              </span>
                              <ProgressBar
                                value={f.completed}
                                max={f.total}
                                color="bg-blue-400"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Questions les plus difficiles */}
        {hardestQuestions.length > 0 && (
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-slate-500">
              Questions les plus difficiles
            </h2>
            <p className="mb-5 text-xs text-slate-400">
              Questions avec le taux d&apos;échec le plus élevé — min. 3 tentatives pour apparaître
            </p>
            <div className="space-y-3">
              {hardestQuestions.map((q, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                      q.failRate >= 70
                        ? "bg-red-100 text-red-700"
                        : q.failRate >= 40
                        ? "bg-amber-100 text-amber-700"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {q.failRate}%
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-slate-800">
                      {q.question.charAt(0).toUpperCase() + q.question.slice(1)}…
                    </p>
                    <p className="mt-0.5 text-xs text-slate-400">
                      {q.failed} échec(s) sur {q.total} tentative(s)
                    </p>
                  </div>
                  <div className="w-24 shrink-0">
                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
                      <div
                        className={`h-full rounded-full ${
                          q.failRate >= 70
                            ? "bg-red-400"
                            : q.failRate >= 40
                            ? "bg-amber-400"
                            : "bg-emerald-400"
                        }`}
                        style={{ width: `${q.failRate}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {totalAttempts === 0 && (
          <section className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
            <p className="text-sm font-medium text-slate-500">
              Aucune tentative de quiz enregistrée pour l&apos;instant.
            </p>
            <p className="mt-2 text-xs text-slate-400">
              Les données apparaîtront ici dès que des apprenants auront soumis leur quiz.
            </p>
            <p className="mt-3 rounded-lg bg-amber-50 px-4 py-3 text-xs text-amber-700 inline-block">
              Si vous venez de déployer la migration SQL, assurez-vous que la table{" "}
              <code className="font-mono">quiz_attempts</code> est bien créée dans Supabase.
            </p>
          </section>
        )}

        {/* évolution mensuelle */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-slate-500">
            Évolution mensuelle — 12 derniers mois
          </h2>
          <div className="flex items-end gap-2 overflow-x-auto pb-2">
            {monthly.map(({ month, inscriptions, quizPassed: qp, attempts: att }) => {
              const barH = Math.round((inscriptions / maxInscriptions) * 120);
              const qpH =
                inscriptions > 0
                  ? Math.round((qp / inscriptions) * barH)
                  : 0;
              return (
                <div key={month} className="flex flex-1 min-w-[40px] flex-col items-center gap-1">
                  <p className="text-xs font-semibold text-slate-700">
                    {inscriptions > 0 ? inscriptions : ""}
                  </p>
                  {att > 0 && (
                    <p className="text-[9px] text-violet-500">{att}t</p>
                  )}
                  <div
                    className="relative w-full overflow-hidden rounded-t-md bg-slate-100"
                    style={{ height: `${Math.max(barH, 4)}px` }}
                    title={`${inscriptions} inscrits, ${qp} quiz réussis, ${att} tentatives`}
                  >
                    <div
                      className="absolute bottom-0 w-full rounded-t-md bg-emerald-400"
                      style={{ height: `${qpH}px` }}
                    />
                  </div>
                  <p className="text-center text-[10px] text-slate-400">
                    {fmtMonth(month)}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-4 flex gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <StatusDot color="bg-slate-200" /> Inscrits
            </span>
            <span className="flex items-center gap-1.5">
              <StatusDot color="bg-emerald-400" /> Quiz réussis
            </span>
            <span className="flex items-center gap-1.5">
              <StatusDot color="bg-violet-400" /> Tentatives (t)
            </span>
          </div>
        </section>

        {/* note bas de page */}
        <p className="text-center text-xs text-slate-400">
          Données en temps réel depuis Supabase · mis à jour à chaque chargement ·
          taux quiz = statuts &quot;entretien&quot; + &quot;terminée&quot; ·
          questions difficiles = min. 3 tentatives enregistrées dans quiz_attempts
        </p>

      </div>
    </main>
  );
}
