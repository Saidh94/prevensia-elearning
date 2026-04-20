import { getEnrollmentPaymentOption } from "@/lib/payments/catalog";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

function formatDate(value: string | null) {
  if (!value) return "—";
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? "—" : d.toLocaleDateString("fr-FR");
}

function getStatusLabel(status: string | null) {
  switch (status) {
    case "completed":
      return "Terminée";
    case "pending_interview":
      return "Entretien à planifier";
    case "in_progress":
      return "En cours";
    case "not_started":
      return "Non démarrée";
    default:
      return status || "—";
  }
}

function getStatusClasses(status: string | null) {
  switch (status) {
    case "completed":
      return "bg-emerald-100 text-emerald-700";
    case "pending_interview":
      return "bg-amber-100 text-amber-700";
    case "in_progress":
      return "bg-blue-100 text-blue-700";
    case "not_started":
      return "bg-slate-100 text-slate-700";
    default:
      return "bg-slate-100 text-slate-700";
  }
}

function getPaymentLabel(paymentStatus: string | null) {
  return paymentStatus === "paid" ? "Payé" : "En attente";
}

function getPaymentClasses(paymentStatus: string | null) {
  return paymentStatus === "paid"
    ? "bg-emerald-100 text-emerald-700"
    : "bg-red-100 text-red-700";
}

type EmployerUserRow = {
  employer_id: string;
  role: string;
};

type EmployerRow = {
  id: string;
  company_name: string;
  manager_email: string;
  contact_name: string | null;
};

type EnrollmentRow = {
  id: string;
  user_id: string;
  formation_id: string;
  status: string | null;
  access_start: string | null;
  access_end: string | null;
  payment_status: string | null;
};

type ProfileRow = {
  id: string;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
};

type FormationRow = {
  id: string;
  title: string | null;
};

export default async function EmployeurDashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/connexion");
  }

  const { data: employerUser, error: employerUserError } = await supabase
    .from("employer_users")
    .select("employer_id, role")
    .eq("user_id", user.id)
    .maybeSingle<EmployerUserRow>();

  if (employerUserError) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-10">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-red-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-700">
            Espace employeur
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Erreur de lecture du compte employeur
          </h1>
          <p className="mt-4 text-sm text-slate-600">
            Utilisateur connecté : {user.id}
          </p>
          <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-50 p-4 text-xs text-slate-700">
            {JSON.stringify(employerUserError, null, 2)}
          </pre>
        </div>
      </main>
    );
  }

  if (!employerUser) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-10">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-amber-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
            Espace employeur
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Compte employeur introuvable
          </h1>
          <p className="mt-4 text-sm text-slate-600">
            Aucun lien trouvé dans <code>employer_users</code> pour
            l&apos;utilisateur connecté.
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Utilisateur connecté : <span className="font-mono">{user.id}</span>
          </p>
        </div>
      </main>
    );
  }

  const { data: employer, error: employerError } = await supabase
    .from("employers")
    .select("id, company_name, manager_email, contact_name")
    .eq("id", employerUser.employer_id)
    .maybeSingle<EmployerRow>();

  if (employerError || !employer) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-10">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-red-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-700">
            Espace employeur
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Entreprise introuvable
          </h1>
          <p className="mt-4 text-sm text-slate-600">
            Employer ID :{" "}
            <span className="font-mono">{employerUser.employer_id}</span>
          </p>
          {employerError ? (
            <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-50 p-4 text-xs text-slate-700">
              {JSON.stringify(employerError, null, 2)}
            </pre>
          ) : null}
        </div>
      </main>
    );
  }

  const { data: enrollments, error: enrollmentsError } = await supabase
    .from("enrollments")
    .select(
      "id, user_id, formation_id, status, access_start, access_end, payment_status"
    )
    .eq("employer_id", employer.id)
    .order("access_start", { ascending: false })
    .returns<EnrollmentRow[]>();

  if (enrollmentsError) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-10">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-red-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-700">
            Espace employeur
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Impossible de charger les inscriptions
          </h1>
          <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-50 p-4 text-xs text-slate-700">
            {JSON.stringify(enrollmentsError, null, 2)}
          </pre>
        </div>
      </main>
    );
  }

  const userIds = [...new Set((enrollments ?? []).map((item) => item.user_id))];
  const formationIds = [
    ...new Set((enrollments ?? []).map((item) => item.formation_id)),
  ];

  const { data: profiles } = userIds.length
    ? await supabase
        .from("profiles")
        .select("id, first_name, last_name, email")
        .in("id", userIds)
        .returns<ProfileRow[]>()
    : { data: [] };

  const { data: formations } = formationIds.length
    ? await supabase
        .from("formations")
        .select("id, title")
        .in("id", formationIds)
        .returns<FormationRow[]>()
    : { data: [] };

  const profilesMap = new Map((profiles ?? []).map((item) => [item.id, item]));
  const formationsMap = new Map(
    (formations ?? []).map((item) => [item.id, item])
  );

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-700">
            Espace employeur
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            {employer.company_name}
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Gestionnaire : {employer.contact_name || "Non renseigné"} —{" "}
            {employer.manager_email || "Email non renseigné"}
          </p>
        </div>

        <div className="mt-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-slate-900">
              Salariés et formations
            </h2>
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              {enrollments?.length ?? 0} inscription
              {(enrollments?.length ?? 0) > 1 ? "s" : ""}
            </span>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-3">
              <thead>
                <tr className="text-left text-sm text-slate-500">
                  <th className="px-4 py-2">Salarié</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Formation</th>
                  <th className="px-4 py-2">Statut</th>
                  <th className="px-4 py-2">Début accès</th>
                  <th className="px-4 py-2">Fin accès</th>
                  <th className="px-4 py-2">Paiement</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {(enrollments ?? []).map((item) => {
                  const profile = profilesMap.get(item.user_id);
                  const formation = formationsMap.get(item.formation_id);
                  const fullName =
                    [profile?.first_name, profile?.last_name]
                      .filter(Boolean)
                      .join(" ") || "Non renseigné";
                  const isCompleted = item.status === "completed";
                  const isPaid = item.payment_status === "paid";
                  const paymentOption = getEnrollmentPaymentOption({
                    formationTitle: formation?.title,
                  });

                  return (
                    <tr
                      key={item.id}
                      className="rounded-2xl bg-slate-50 text-sm text-slate-800"
                    >
                      <td className="px-4 py-4 font-semibold text-slate-900">
                        {fullName}
                      </td>
                      <td className="px-4 py-4">{profile?.email || "—"}</td>
                      <td className="px-4 py-4">{formation?.title || "—"}</td>
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(
                            item.status
                          )}`}
                        >
                          {getStatusLabel(item.status)}
                        </span>
                      </td>
                      <td className="px-4 py-4">{formatDate(item.access_start)}</td>
                      <td className="px-4 py-4">{formatDate(item.access_end)}</td>
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getPaymentClasses(
                            item.payment_status
                          )}`}
                        >
                          {getPaymentLabel(item.payment_status)}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex flex-col gap-2">
                          {!isPaid && paymentOption.kind === "direct" ? (
                            <form action="/api/payments/checkout" method="POST">
                              <input type="hidden" name="enrollmentId" value={item.id} />
                              <input
                                type="hidden"
                                name="returnPath"
                                value="/employeur/dashboard"
                              />
                              <button
                                type="submit"
                                className="rounded-lg bg-violet-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-violet-700"
                              >
                                Payer en ligne
                              </button>
                            </form>
                          ) : null}

                          {!isPaid && paymentOption.kind === "quote" ? (
                            <a
                              href={`/demande-devis?formation=${encodeURIComponent(
                                formation?.title || "Formation"
                              )}`}
                              className="inline-flex items-center justify-center rounded-lg border border-violet-300 px-3 py-2 text-xs font-semibold text-violet-700 transition hover:bg-violet-50"
                              title={paymentOption.reason}
                            >
                              Demander un devis
                            </a>
                          ) : null}

                          {isCompleted ? (
                            <form action="/api/attestation" method="POST">
                              <input
                                type="hidden"
                                name="enrollmentId"
                                value={item.id}
                              />
                              <button
                                type="submit"
                                className="rounded-lg bg-emerald-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-emerald-700"
                              >
                                Attestation
                              </button>
                            </form>
                          ) : (
                            <button
                              type="button"
                              disabled
                              className="cursor-not-allowed rounded-lg bg-slate-200 px-3 py-2 text-xs font-semibold text-slate-500"
                              title="Attestation disponible uniquement après validation complète"
                            >
                              En cours
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {(!enrollments || enrollments.length === 0) && (
            <p className="mt-6 text-sm text-slate-500">
              Aucune inscription rattachée à cet employeur pour le moment.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
