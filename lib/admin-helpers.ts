/**
 * Helpers purs pour le dashboard admin — exportés pour les tests unitaires.
 * Aucune dépendance Next.js ou Supabase.
 */

export function formatDate(value: string | null): string {
  if (!value) return "—";
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? "—" : d.toLocaleDateString("fr-FR");
}

export function getStatusLabel(status: string | null): string {
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

export function getStatusClasses(status: string | null): string {
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

export function getPaymentLabel(paymentStatus: string | null): string {
  return paymentStatus === "paid" ? "Payé" : "En attente";
}

export function getPaymentClasses(paymentStatus: string | null): string {
  return paymentStatus === "paid"
    ? "bg-emerald-100 text-emerald-700"
    : "bg-red-100 text-red-700";
}

export function getSingleValue(
  value: string | string[] | undefined
): string {
  return Array.isArray(value) ? value[0] ?? "" : value ?? "";
}

// ── KPI types ────────────────────────────────────────────────────────────────

export type AdminRow = {
  id: string;
  user_id: string;
  fullName: string;
  email: string;
  formationTitle: string;
  companyName: string;
  managerEmail: string;
  status: string | null;
  accessStart: string | null;
  accessEnd: string | null;
  paymentStatus: string | null;
  forcedByAdmin: boolean;
};

export type AdminKPIs = {
  total: number;
  uniqueApprenants: number;
  paid: number;
  inProgress: number;
  completed: number;
  pendingInterview: number;
  pendingPayment: number;
  expiringAccess: number;
};

/** Calcule les KPIs à partir du tableau des inscriptions. `now` est injecté pour la testabilité. */
export function computeKPIs(rows: AdminRow[], now = new Date()): AdminKPIs {
  const in7days = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

  return {
    total:            rows.length,
    uniqueApprenants: new Set(rows.map((r) => r.user_id)).size,
    paid:             rows.filter((r) => r.paymentStatus === "paid").length,
    inProgress:       rows.filter((r) => r.status === "in_progress").length,
    completed:        rows.filter((r) => r.status === "completed").length,
    pendingInterview: rows.filter((r) => r.status === "pending_interview").length,
    pendingPayment:   rows.filter(
      (r) => r.paymentStatus !== "paid" && r.status !== "cancelled"
    ).length,
    expiringAccess:   rows.filter((r) => {
      if (!r.accessEnd) return false;
      if (r.status === "completed" || r.status === "cancelled") return false;
      const end = new Date(r.accessEnd);
      return end >= now && end <= in7days;
    }).length,
  };
}
