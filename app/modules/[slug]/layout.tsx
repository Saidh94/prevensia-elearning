import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getModuleLabelBySlug } from "@/lib/supabase/elearning/module-registry";
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
  is_blocked?: boolean | null;
};

type FormationRow = {
  slug: string | null;
  title?: string | null;
};

type EnrollmentRow = {
  id: string;
  status: string | null;
  payment_status: string | null;
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

function normalizeStatus(value: string | null | undefined): string {
  return (value ?? "")
    .trim()
    .toLowerCase()
    .replace(/[\s-]+/g, "_");
}

/**
 * Vérifie que le paiement est valide.
 * - null  → inscription manuelle/admin, on autorise (pas de suivi Stripe)
 * - "paid" → paiement confirmé par Stripe → autorisé
 * - tout autre valeur ("pending", "failed", …) → bloqué
 */
function isPaymentValid(paymentStatus: string | null): boolean {
  if (!paymentStatus) return true;
  return paymentStatus === "paid";
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
    .select("role, is_blocked")
    .eq("id", user.id)
    .maybeSingle<ProfileRow>();

  // Un compte bloqué est redirigé, même s'il est admin
  if (profile?.is_blocked === true) {
    redirect("/connexion?blocked=true");
  }

  const isAdmin = profile?.role === "admin";

  const { data, error } = await supabase
    .from("enrollments")
    .select(`
      id,
      status,
      payment_status,
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
            {"Acc\u00e8s aux modules"}
          </p>

          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            {"Impossible de v\u00e9rifier votre acc\u00e8s"}
          </h1>

          <p className="mt-4 text-base leading-7 text-slate-600">
            {"Une erreur est survenue lors de la v\u00e9rification de vos droits d\u2019acc\u00e8s au module."}
          </p>

          <p className="mt-3 text-sm text-slate-500">
            {"D\u00e9tail technique : "} {error.message}
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
      isPaymentValid(enrollment.payment_status) &&
      isDateStarted(enrollment.access_start) &&
      isDateNotExpired(enrollment.access_end));

  const displayFormationTitle =
    formation?.title ?? getModuleLabelBySlug(normalizedRouteSlug);

  // \u2500\u2500 Cas sp\u00e9cial : paiement SEPA/virement en cours de traitement \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  if (
    !hasAccess &&
    enrollment?.payment_status === "pending"
  ) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-10">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-blue-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Paiement en cours
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Votre paiement est en cours de traitement
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Votre paiement par pr\u00e9l\u00e8vement SEPA ou virement bancaire a bien \u00e9t\u00e9
            initi\u00e9. Le traitement bancaire prend <strong>2 \u00e0 6 jours ouvr\u00e9s</strong>.
          </p>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Votre acc\u00e8s \u00e0{" "}
            <strong>{displayFormationTitle}</strong>{" "}
            sera activ\u00e9 automatiquement d\u00e8s confirmation de votre banque.
            Vous recevrez un e-mail \u00e0 ce moment-l\u00e0.
          </p>
          <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
            <p className="text-sm text-blue-800">
              \ud83d\udca1 Si vous pensez que votre paiement a d\u00e9j\u00e0 \u00e9t\u00e9 valid\u00e9, patientez
              quelques minutes puis rafra\u00eechissez la page. Pour toute question :
              {" "}
              <a
                href="mailto:contact@prevensia-formation.fr"
                className="font-semibold underline"
              >
                contact@prevensia-formation.fr
              </a>
            </p>
          </div>
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

  if (!hasAccess) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-10">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-amber-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
            {"Acc\u00e8s r\u00e9serv\u00e9"}
          </p>

          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            {"Ce module n\u2019est pas accessible avec votre compte"}
          </h1>

          <p className="mt-4 text-base leading-7 text-slate-600">
            {
              "L\u2019acc\u00e8s \u00e0 ce module est r\u00e9serv\u00e9 aux inscrits disposant d\u2019une inscription active, valid\u00e9e ou effectivement ouverte sur cette formation."
            }
          </p>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-900">
              {"Formations trouv\u00e9es sur votre compte"}
            </p>

            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
              {enrollments.length === 0 ? (
                <li>{"\u2022 Aucune inscription trouv\u00e9e"}</li>
              ) : (
                enrollments.map((item) => {
                  const linkedFormation = normalizeFormation(item.formation);

                  return (
                    <li key={item.id}>
                      {"\u2022 "}
                      {linkedFormation?.title ??
                        linkedFormation?.slug ??
                        "Formation"}{" "}
                      {"\u2014 slug : "}
                      {linkedFormation?.slug ?? "non d\u00e9fini"}
                      {" \u2014 statut : "}
                      {item.status ?? "non d\u00e9fini"}
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
          <div className="flex items-center gap-2">
            <Link
              href="/dashboard"
              className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              {"\u2190 Mon espace"}
            </Link>
            <Link
              href="/"
              className="hidden sm:inline-flex items-center rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Site
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

          <div className="hidden text-right sm:block">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
              {isAdmin ? "Pr\u00e9visualisation" : "Module"}
            </p>
            <p className="text-sm font-semibold text-slate-700">
              {isAdmin ? "Acc\u00e8s admin" : "Parcours en cours"}
            </p>
          </div>
        </div>
      </header>

      {children}
    </main>
  );
}
