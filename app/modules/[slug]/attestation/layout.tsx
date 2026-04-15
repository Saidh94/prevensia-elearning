import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

type ModuleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

type EnrollmentRow = {
  id: string;
  status: string | null;
  access_start: string | null;
  access_end: string | null;
  formation:
    | {
        slug: string | null;
        title?: string | null;
      }
    | {
        slug: string | null;
        title?: string | null;
      }[]
    | null;
};

function normalizeFormation(
  formation: EnrollmentRow["formation"]
): { slug: string | null; title?: string | null } | null {
  if (!formation) return null;
  if (Array.isArray(formation)) return formation[0] ?? null;
  return formation;
}

export default async function ModuleLayout({
  children,
  params,
}: ModuleLayoutProps) {
  const { slug } = await params;
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/connexion");
  }

  const { data, error } = await supabase
    .from("enrollments")
    .select(
      `
      id,
      status,
      access_start,
      access_end,
      formation:formations (
        slug,
        title
      )
    `
    )
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

  const enrollments = (data ?? []) as EnrollmentRow[];

  const enrollment = enrollments.find((item) => {
    const formation = normalizeFormation(item.formation);
    return formation?.slug?.toLowerCase() === slug.toLowerCase();
  });

  const formation = normalizeFormation(enrollment?.formation ?? null);

  const now = new Date();

  const status = (enrollment?.status ?? "").toLowerCase();
  const allowedStatus = status === "active" || status === "completed";

  const accessStartOk =
    !enrollment?.access_start || new Date(enrollment.access_start) <= now;

  const accessEndOk =
    !enrollment?.access_end || new Date(enrollment.access_end) >= now;

  const hasAccess =
    !!enrollment &&
    !!formation &&
    formation.slug?.toLowerCase() === slug.toLowerCase() &&
    allowedStatus &&
    accessStartOk &&
    accessEndOk;

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
            L’accès à ce module est réservé aux apprenants disposant d’une
            inscription active ou d’un accès autorisé.
          </p>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-900">
              Vérifications possibles
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
              <li>• Votre formation n’a pas encore été attribuée à votre compte</li>
              <li>• Le paiement n’a pas encore été validé dans le système</li>
              <li>• Votre accès est peut-être en statut autre que active/completed</li>
              <li>• Votre période d’accès est expirée</li>
            </ul>
          </div>

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
                      • {linkedFormation?.title ?? linkedFormation?.slug ?? "Formation"} — statut :{" "}
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

  return <>{children}</>;
}