import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import {
  getModuleLabelBySlug,
  resolveModuleSlug,
} from "@/lib/supabase/elearning/module-registry";
import {
  canFormationAccessModule,
  getCanonicalModuleSlug,
} from "@/lib/supabase/elearning/module-access";

type ModuleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

type ProfileRow = {
  role: string | null;
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

function isAllowedStatus(status: string): boolean {
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

export default async function ModuleLayout({
  children,
  params,
}: ModuleLayoutProps) {
  const { slug } = await params;
  const normalizedRouteSlug = getCanonicalModuleSlug(slug);

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(`/connexion?redirectTo=/modules/${slug}`);
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle<ProfileRow>();

  const isAdmin = profile?.role === "admin";

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
            Accès aux modules
          </p>

          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Impossible de vérifier votre accès
          </h1>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Une erreur est survenue lors de la vérification de vos droits d’accès
            au module.
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
    return canFormationAccessModule(linkedFormation?.slug, normalizedRouteSlug);
  });

  const formation = normalizeFormation(enrollment?.formation ?? null);
  const normalizedFormationSlug = getCanonicalModuleSlug(formation?.slug);
  const currentStatus = normalizeStatus(enrollment?.status);

  const hasAccess =
    isAdmin ||
    (!!enrollment &&
      !!formation &&
      canFormationAccessModule(normalizedFormationSlug, normalizedRouteSlug) &&
      isAllowedStatus(currentStatus) &&
      isDateStarted(enrollment.access_start) &&
      isDateNotExpired(enrollment.access_end));

  const displayFormationTitle =
    formation?.title ?? getModuleLabelBySlug(normalizedRouteSlug);

  if (!hasAccess) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-10">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-amber-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
            Accès réservé
          </p>

          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Ce module n’est pas accessible avec votre compte
          </h1>

          <p className="mt-4 text-base leading-7 text-slate-600">
            L’accès à ce module est réservé aux inscrits disposant d’une
            inscription active, validée, en cours ou en attente d’entretien sur
            cette formation.
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
                      • {linkedFormation?.title ?? linkedFormation?.slug ?? "Formation"} — slug :{" "}
                      {linkedFormation?.slug ?? "non défini"} — statut :{" "}
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
              href="/elearning"
              className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Retour au catalogue
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="module-shell min-h-screen bg-slate-100">
      <header className="module-shell-header sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              ← Retour au site
            </Link>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                E-learning
              </p>
              <p className="text-sm font-bold text-slate-900">
                {displayFormationTitle}
              </p>
            </div>
          </div>

          <div className="hidden sm:block text-right">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
              {isAdmin ? "Prévisualisation" : "Module"}
            </p>
            <p className="text-sm font-semibold text-slate-700">
              {isAdmin ? "Accès admin" : "Parcours en cours"}
            </p>
          </div>
        </div>
      </header>

      {children}
    </main>
  );
}
