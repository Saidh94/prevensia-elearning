import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import LogoutButton from "@/app/components/logout-button";

type QuizLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

type FormationRow = {
  slug: string | null;
  title?: string | null;
};

type EnrollmentRow = {
  id: string;
  status: string | null;
  access_start: string | null;
  access_end: string | null;
  formation: FormationRow | FormationRow[] | null;
};

function normalizeFormation(
  formation: EnrollmentRow["formation"]
): FormationRow | null {
  if (!formation) return null;
  if (Array.isArray(formation)) return formation[0] ?? null;
  return formation;
}

function normalizeSlug(value: string | null | undefined): string {
  return (value ?? "").trim().toLowerCase();
}

function normalizeStatus(value: string | null | undefined): string {
  return (value ?? "")
    .trim()
    .toLowerCase()
    .replace(/[\s-]+/g, "_");
}

function isAllowedQuizStatus(status: string): boolean {
  return new Set([
    "not_started",
    "notstarted",
    "in_progress",
    "inprogress",
    "active",
    "completed",
    "validated",
    "enrolled",
    "paid",
    "pending",
    "pending_interview",
  ]).has(status);
}

function isDateStarted(accessStart: string | null): boolean {
  if (!accessStart) return true;
  const date = new Date(accessStart);
  if (Number.isNaN(date.getTime())) return false;
  return date <= new Date();
}

function isDateNotExpired(accessEnd: string | null): boolean {
  if (!accessEnd) return true;
  const date = new Date(accessEnd);
  if (Number.isNaN(date.getTime())) return false;
  return date >= new Date();
}

export default async function QuizLayout({
  children,
  params,
}: QuizLayoutProps) {
  const { slug } = await params;
  const normalizedRouteSlug = normalizeSlug(slug);

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(`/connexion?redirectTo=/modules/${slug}/quiz`);
  }

  // Bypass admin : un admin peut accéder à tous les quiz sans enrollment
  const { data: profileData } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle();

  if (profileData?.role === "admin") {
    return (
      <main className="min-h-screen bg-slate-100">
        <header className="sticky top-0 z-40 border-b border-fuchsia-700 bg-fuchsia-900 text-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <Link
                href={`/modules/${slug}`}
                className="inline-flex items-center rounded-lg bg-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                ← Retour au module
              </Link>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                  Prévisualisation admin
                </p>
                <p className="text-sm font-bold text-white">
                  Quiz — accès libre
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="/dashboard"
                className="inline-flex items-center rounded-lg border border-white/20 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Dashboard
              </Link>
              <LogoutButton />
            </div>
          </div>
        </header>
        {children}
      </main>
    );
  }

  const { data, error } = await supabase
    .from("enrollments")
    .select(`
      id,
      status,
      access_start,
      access_end,
      formation:formations (
        slug,
        title
      )
    `)
    .eq("user_id", user.id);

  if (error) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-10">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-red-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">
            Accès au quiz
          </p>

          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Impossible de vérifier votre accès
          </h1>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Une erreur est survenue lors de la vérification de vos droits d’accès
            au quiz.
          </p>

          <p className="mt-3 text-sm text-slate-500">
            Détail technique : {error.message}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/dashboard"
              className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Retour au dashboard
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const enrollments = (data ?? []) as EnrollmentRow[];

  const enrollment = enrollments.find((item) => {
    const linkedFormation = normalizeFormation(item.formation);
    return normalizeSlug(linkedFormation?.slug) === normalizedRouteSlug;
  });

  const formation = normalizeFormation(enrollment?.formation ?? null);
  const normalizedFormationSlug = normalizeSlug(formation?.slug);
  const currentStatus = normalizeStatus(enrollment?.status);

  const hasAccess =
    !!enrollment &&
    !!formation &&
    normalizedFormationSlug === normalizedRouteSlug &&
    isAllowedQuizStatus(currentStatus) &&
    isDateStarted(enrollment.access_start) &&
    isDateNotExpired(enrollment.access_end);

  if (!hasAccess) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-10">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-amber-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
            Accès réservé
          </p>

          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Ce quiz n’est pas accessible avec votre compte
          </h1>

          <p className="mt-4 text-base leading-7 text-slate-600">
            L’accès au quiz est réservé aux inscrits disposant d’une inscription
            active, validée, en cours ou en attente d’entretien sur cette
            formation.
          </p>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-900">
              Formations trouvées sur votre compte
            </p>

            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
              {enrollments.length === 0 ? (
                <li>• Aucune inscription trouvée</li>
              ) : (
                enrollments.map((item) => {
                  const linkedFormation = normalizeFormation(item.formation);

                  return (
                    <li key={item.id}>
                      •{" "}
                      {linkedFormation?.title ??
                        linkedFormation?.slug ??
                        "Formation"}{" "}
                      — slug : {linkedFormation?.slug ?? "non défini"} — statut :{" "}
                      {item.status ?? "non défini"}
                    </li>
                  );
                })
              )}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/dashboard"
              className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Retour au dashboard
            </Link>

            <Link
              href={`/modules/${slug}`}
              className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Retour au module
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100">
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-900 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Link
              href={`/modules/${slug}`}
              className="inline-flex items-center rounded-lg bg-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              ← Retour au module
            </Link>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                Quiz
              </p>
              <p className="text-sm font-bold text-white">
                {formation?.title ?? "Évaluation"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/dashboard"
              className="inline-flex items-center rounded-lg border border-white/20 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Dashboard
            </Link>

            <LogoutButton />
          </div>
        </div>
      </header>

      {children}
    </main>
  );
}