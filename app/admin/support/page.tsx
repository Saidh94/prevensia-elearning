"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Formation = { id: string; slug: string | null; title: string | null } | null;

type Enrollment = {
  id: string;
  user_id: string;
  status: string | null;
  payment_status: string | null;
  company_name: string | null;
  manager_email: string | null;
  ordered_by_employer: boolean | null;
  access_start: string | null;
  access_end: string | null;
  validated_at: string | null;
  created_at: string | null;
  formation: Formation | Formation[];
};

type Profile = {
  id: string;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  company: string | null;
  role: string | null;
  created_at: string | null;
  is_blocked?: boolean | null;
};

type ChapterProgress = {
  user_id: string;
  formation_slug: string;
  chapter_key: string;
  is_completed: boolean;
  updated_at: string | null;
};

type QuizAttempt = {
  user_id: string;
  formation_slug: string;
  score: number;
  total: number;
  passed: boolean;
  score_percent: number;
  attempted_at: string | null;
};

type Client = {
  name: string;
  managerEmail: string;
  enrollmentCount: number;
};

type SupportTicket = {
  id: string;
  user_email: string;
  user_name: string | null;
  issue_type: string;
  message: string | null;
  status: "open" | "in_progress" | "resolved";
  admin_note: string | null;
  created_at: string | null;
  updated_at: string | null;
};

type SupportData = {
  profiles: Profile[];
  enrollments: Enrollment[];
  chapterProgress: ChapterProgress[];
  quizAttempts: QuizAttempt[];
  clients: Client[];
  tickets: SupportTicket[];
};

type TabKey = "apprenants" | "commandes" | "clients" | "parcours" | "tickets" | "outils";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmt(v: string | null | undefined) {
  if (!v) return "—";
  const d = new Date(v);
  return isNaN(d.getTime()) ? "—" : d.toLocaleDateString("fr-FR");
}

function toInputDate(v: string | null | undefined): string {
  if (!v) return "";
  const d = new Date(v);
  if (isNaN(d.getTime())) return "";
  return d.toISOString().slice(0, 10);
}

function fullName(p: Profile) {
  const n = [p.first_name, p.last_name].filter(Boolean).join(" ");
  return n || p.email || "—";
}

function getFormation(e: Enrollment): Formation {
  if (!e.formation) return null;
  return Array.isArray(e.formation) ? e.formation[0] ?? null : e.formation;
}

function statusBadge(status: string | null) {
  const map: Record<string, string> = {
    completed: "bg-emerald-100 text-emerald-700",
    pending_interview: "bg-amber-100 text-amber-700",
    active: "bg-blue-100 text-blue-700",
    in_progress: "bg-blue-100 text-blue-700",
    pending: "bg-slate-100 text-slate-600",
    cancelled: "bg-red-100 text-red-700",
  };
  const label: Record<string, string> = {
    completed: "Terminé",
    pending_interview: "Entretien",
    active: "Actif",
    in_progress: "En cours",
    pending: "En attente",
    cancelled: "Annulé",
  };
  const cls = map[status ?? ""] ?? "bg-slate-100 text-slate-600";
  return (
    <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${cls}`}>
      {label[status ?? ""] ?? status ?? "—"}
    </span>
  );
}

function paymentBadge(ps: string | null) {
  if (ps === "paid") return <span className="inline-block rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">Payé</span>;
  if (ps === "pending") return <span className="inline-block rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-700">En attente</span>;
  if (ps === "failed") return <span className="inline-block rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-700">Échoué</span>;
  if (ps === "refunded") return <span className="inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600">Remboursé</span>;
  return <span className="text-slate-400 text-xs">—</span>;
}

// ─── Composant Outils ────────────────────────────────────────────────────────

function OutilsTab({
  data,
  showMsg,
}: {
  data: SupportData | null;
  showMsg: (text: string, ok: boolean) => void;
}) {
  // ── État Inscription manuelle ──────────────────────────────────────────
  const [enrollUserId, setEnrollUserId] = useState("");
  const [enrollFormation, setEnrollFormation] = useState("");
  const [enrollStatus, setEnrollStatus] = useState("pending");
  const [enrollPayment, setEnrollPayment] = useState<string>("null");
  const today = new Date().toISOString().slice(0, 10);
  const in30 = (() => { const d = new Date(); d.setDate(d.getDate() + 30); return d.toISOString().slice(0, 10); })();
  const [enrollStart, setEnrollStart] = useState(today);
  const [enrollEnd, setEnrollEnd] = useState(in30);
  const [enrollLoading, setEnrollLoading] = useState(false);

  // ── État Devis ─────────────────────────────────────────────────────────
  const [devisClientName, setDevisClientName] = useState("");
  const [devisClientEmail, setDevisClientEmail] = useState("");
  const [devisClientCompany, setDevisClientCompany] = useState("");
  const [devisFormation, setDevisFormation] = useState("");
  const [devisMontantHT, setDevisMontantHT] = useState("");
  const [devisValidite, setDevisValidite] = useState("30");
  const [devisNotes, setDevisNotes] = useState("");
  const [devisLoading, setDevisLoading] = useState(false);

  // ── État Facture ───────────────────────────────────────────────────────
  const [factClientName, setFactClientName] = useState("");
  const [factClientEmail, setFactClientEmail] = useState("");
  const [factClientCompany, setFactClientCompany] = useState("");
  const [factFormation, setFactFormation] = useState("");
  const [factMontantHT, setFactMontantHT] = useState("");
  const [factEnrollmentId, setFactEnrollmentId] = useState("");
  const [factNotes, setFactNotes] = useState("");
  const [factLoading, setFactLoading] = useState(false);

  // ── Handlers ───────────────────────────────────────────────────────────

  async function handleCreateEnrollment(e: React.FormEvent) {
    e.preventDefault();
    if (!enrollUserId || !enrollFormation) {
      showMsg("Apprenant et formation requis", false);
      return;
    }
    setEnrollLoading(true);
    try {
      const res = await fetch("/api/admin/enrollments/manual", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: enrollUserId,
          formationLabel: enrollFormation,
          status: enrollStatus,
          paymentStatus: enrollPayment === "null" ? null : enrollPayment,
          accessStart: enrollStart,
          accessEnd: enrollEnd,
        }),
      });
      const json = await res.json();
      if (!res.ok || json.error) {
        showMsg(json.error ?? "Erreur lors de la creation", false);
      } else {
        showMsg("Inscription creee avec succes !", true);
        setEnrollUserId("");
        setEnrollFormation("");
      }
    } catch {
      showMsg("Erreur reseau", false);
    } finally {
      setEnrollLoading(false);
    }
  }

  async function handleGenerateDevis(e: React.FormEvent) {
    e.preventDefault();
    if (!devisClientName || !devisClientEmail || !devisFormation || !devisMontantHT) {
      showMsg("Tous les champs obligatoires sont requis", false);
      return;
    }
    setDevisLoading(true);
    try {
      const res = await fetch("/api/admin/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientName: devisClientName,
          clientEmail: devisClientEmail,
          clientCompany: devisClientCompany || undefined,
          formationLabel: devisFormation,
          montantHT: parseFloat(devisMontantHT),
          tvaRate: 0,
          validiteJours: parseInt(devisValidite) || 30,
          notes: devisNotes || undefined,
        }),
      });
      if (!res.ok) {
        const json = await res.json();
        showMsg(json.error ?? "Erreur lors de la generation", false);
        return;
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `devis-${devisClientName.replace(/\s+/g, "-")}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
      showMsg("Devis genere et telecharge !", true);
    } catch {
      showMsg("Erreur reseau", false);
    } finally {
      setDevisLoading(false);
    }
  }

  async function handleGenerateFacture(e: React.FormEvent) {
    e.preventDefault();
    if (!factClientName || !factClientEmail || !factFormation || !factMontantHT) {
      showMsg("Tous les champs obligatoires sont requis", false);
      return;
    }
    setFactLoading(true);
    try {
      const res = await fetch("/api/admin/factures", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientName: factClientName,
          clientEmail: factClientEmail,
          clientCompany: factClientCompany || undefined,
          formationLabel: factFormation,
          montantHT: parseFloat(factMontantHT),
          tvaRate: 0,
          enrollmentId: factEnrollmentId || undefined,
          notes: factNotes || undefined,
        }),
      });
      if (!res.ok) {
        const json = await res.json();
        showMsg(json.error ?? "Erreur lors de la generation", false);
        return;
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `facture-${factClientName.replace(/\s+/g, "-")}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
      showMsg("Facture generee et telechargee !", true);
    } catch {
      showMsg("Erreur reseau", false);
    } finally {
      setFactLoading(false);
    }
  }

  const inputCls =
    "w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200";
  const labelCls = "block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1";
  const btnCls =
    "mt-4 w-full rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:opacity-50";

  return (
    <div className="grid gap-6 lg:grid-cols-3">

      {/* ── Card 1 : Inscription manuelle ─────────────────────────────── */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-base font-bold text-slate-900">Inscription manuelle</h2>
        <form onSubmit={handleCreateEnrollment} className="space-y-3">
          <div>
            <label className={labelCls}>Apprenant</label>
            <select
              value={enrollUserId}
              onChange={(e) => setEnrollUserId(e.target.value)}
              className={inputCls}
              required
            >
              <option value="">-- Choisir un apprenant --</option>
              {(data?.profiles ?? [])
                .filter((p) => p.role !== "admin")
                .map((p) => (
                  <option key={p.id} value={p.id}>
                    {[p.first_name, p.last_name].filter(Boolean).join(" ") || p.email} — {p.email}
                  </option>
                ))}
            </select>
          </div>

          <div>
            <label className={labelCls}>Formation (label libre)</label>
            <input
              type="text"
              value={enrollFormation}
              onChange={(e) => setEnrollFormation(e.target.value)}
              placeholder="Ex : Habilitation électrique H0B0"
              className={inputCls}
              required
            />
          </div>

          <div>
            <label className={labelCls}>Statut initial</label>
            <select
              value={enrollStatus}
              onChange={(e) => setEnrollStatus(e.target.value)}
              className={inputCls}
            >
              <option value="pending">En attente</option>
              <option value="active">Actif</option>
              <option value="in_progress">En cours</option>
            </select>
          </div>

          <div>
            <label className={labelCls}>Paiement</label>
            <select
              value={enrollPayment}
              onChange={(e) => setEnrollPayment(e.target.value)}
              className={inputCls}
            >
              <option value="null">Virement / Manuel (non renseigné)</option>
              <option value="paid">Payé</option>
            </select>
          </div>

          <div>
            <label className={labelCls}>Début d&apos;accès</label>
            <input
              type="date"
              value={enrollStart}
              onChange={(e) => setEnrollStart(e.target.value)}
              className={inputCls}
            />
          </div>

          <div>
            <label className={labelCls}>Fin d&apos;accès</label>
            <input
              type="date"
              value={enrollEnd}
              onChange={(e) => setEnrollEnd(e.target.value)}
              className={inputCls}
            />
          </div>

          <button type="submit" disabled={enrollLoading} className={btnCls}>
            {enrollLoading ? "Création…" : "Créer l'inscription"}
          </button>
        </form>
      </div>

      {/* ── Card 2 : Devis PDF ────────────────────────────────────────── */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-base font-bold text-slate-900">Générer un devis</h2>
        <form onSubmit={handleGenerateDevis} className="space-y-3">
          <div>
            <label className={labelCls}>Nom client *</label>
            <input
              type="text"
              value={devisClientName}
              onChange={(e) => setDevisClientName(e.target.value)}
              placeholder="Jean Dupont"
              className={inputCls}
              required
            />
          </div>

          <div>
            <label className={labelCls}>Email client *</label>
            <input
              type="email"
              value={devisClientEmail}
              onChange={(e) => setDevisClientEmail(e.target.value)}
              placeholder="jean@exemple.fr"
              className={inputCls}
              required
            />
          </div>

          <div>
            <label className={labelCls}>Société (optionnel)</label>
            <input
              type="text"
              value={devisClientCompany}
              onChange={(e) => setDevisClientCompany(e.target.value)}
              placeholder="ACME SAS"
              className={inputCls}
            />
          </div>

          <div>
            <label className={labelCls}>Formation / Prestation *</label>
            <input
              type="text"
              value={devisFormation}
              onChange={(e) => setDevisFormation(e.target.value)}
              placeholder="Habilitation électrique H0B0"
              className={inputCls}
              required
            />
          </div>

          <div>
            <label className={labelCls}>Montant HT (€) *</label>
            <input
              type="number"
              min="0"
              step="0.01"
              value={devisMontantHT}
              onChange={(e) => setDevisMontantHT(e.target.value)}
              placeholder="490"
              className={inputCls}
              required
            />
          </div>

          <div>
            <label className={labelCls}>Validité (jours)</label>
            <input
              type="number"
              min="1"
              value={devisValidite}
              onChange={(e) => setDevisValidite(e.target.value)}
              className={inputCls}
            />
          </div>

          <div>
            <label className={labelCls}>Notes (optionnel)</label>
            <textarea
              value={devisNotes}
              onChange={(e) => setDevisNotes(e.target.value)}
              rows={3}
              placeholder="Informations complémentaires…"
              className={inputCls + " resize-none"}
            />
          </div>

          <button type="submit" disabled={devisLoading} className={btnCls}>
            {devisLoading ? "Génération…" : "Générer le devis PDF"}
          </button>
        </form>
      </div>

      {/* ── Card 3 : Facture PDF ──────────────────────────────────────── */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-base font-bold text-slate-900">Générer une facture</h2>
        <form onSubmit={handleGenerateFacture} className="space-y-3">
          <div>
            <label className={labelCls}>Nom client *</label>
            <input
              type="text"
              value={factClientName}
              onChange={(e) => setFactClientName(e.target.value)}
              placeholder="Jean Dupont"
              className={inputCls}
              required
            />
          </div>

          <div>
            <label className={labelCls}>Email client *</label>
            <input
              type="email"
              value={factClientEmail}
              onChange={(e) => setFactClientEmail(e.target.value)}
              placeholder="jean@exemple.fr"
              className={inputCls}
              required
            />
          </div>

          <div>
            <label className={labelCls}>Société (optionnel)</label>
            <input
              type="text"
              value={factClientCompany}
              onChange={(e) => setFactClientCompany(e.target.value)}
              placeholder="ACME SAS"
              className={inputCls}
            />
          </div>

          <div>
            <label className={labelCls}>Formation / Prestation *</label>
            <input
              type="text"
              value={factFormation}
              onChange={(e) => setFactFormation(e.target.value)}
              placeholder="Habilitation électrique H0B0"
              className={inputCls}
              required
            />
          </div>

          <div>
            <label className={labelCls}>Montant HT (€) *</label>
            <input
              type="number"
              min="0"
              step="0.01"
              value={factMontantHT}
              onChange={(e) => setFactMontantHT(e.target.value)}
              placeholder="490"
              className={inputCls}
              required
            />
          </div>

          <div>
            <label className={labelCls}>Lier à une inscription (optionnel)</label>
            <select
              value={factEnrollmentId}
              onChange={(e) => setFactEnrollmentId(e.target.value)}
              className={inputCls}
            >
              <option value="">-- Aucune --</option>
              {(data?.enrollments ?? []).map((enr) => {
                const f = Array.isArray(enr.formation)
                  ? enr.formation[0]
                  : enr.formation;
                return (
                  <option key={enr.id} value={enr.id}>
                    {f?.title ?? "Formation inconnue"} — {enr.id.slice(0, 8)}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <label className={labelCls}>Notes (optionnel)</label>
            <textarea
              value={factNotes}
              onChange={(e) => setFactNotes(e.target.value)}
              rows={3}
              placeholder="Informations complémentaires…"
              className={inputCls + " resize-none"}
            />
          </div>

          <button type="submit" disabled={factLoading} className={btnCls}>
            {factLoading ? "Génération…" : "Générer la facture PDF"}
          </button>
        </form>
      </div>

    </div>
  );
}

// ─── Composant principal ──────────────────────────────────────────────────────

export default function SupportPage() {
  const [data, setData] = useState<SupportData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tab, setTab] = useState<TabKey>("apprenants");
  const [search, setSearch] = useState("");
  const [actionMsg, setActionMsg] = useState<{ text: string; ok: boolean } | null>(null);

  useEffect(() => {
    fetch("/api/admin/support")
      .then((r) => r.json())
      .then((d) => {
        if (d.error) setError(d.error);
        else setData(d as SupportData);
      })
      .catch(() => setError("Erreur de chargement"))
      .finally(() => setLoading(false));
  }, []);

  function showMsg(text: string, ok: boolean) {
    setActionMsg({ text, ok });
    setTimeout(() => setActionMsg(null), 3000);
  }

  async function handleBlockToggle(profileId: string, currentlyBlocked: boolean) {
    const action = currentlyBlocked ? "unblock" : "block";
    try {
      const res = await fetch(`/api/admin/users/${profileId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action }),
      });
      const json = await res.json();
      if (!res.ok || json.error) {
        showMsg(json.error ?? "Erreur lors de l'action", false);
        return;
      }
      setData((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          profiles: prev.profiles.map((p) =>
            p.id === profileId ? { ...p, is_blocked: json.is_blocked } : p
          ),
        };
      });
      showMsg(
        action === "block" ? "Compte bloqué avec succès" : "Compte débloqué avec succès",
        true
      );
    } catch {
      showMsg("Erreur réseau", false);
    }
  }

  async function handleEnrollmentPatch(
    enrollmentId: string,
    payload: Record<string, unknown>
  ) {
    try {
      const res = await fetch(`/api/admin/enrollments/${enrollmentId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || json.error) {
        showMsg(json.error ?? "Erreur lors de la mise à jour", false);
        return false;
      }
      return true;
    } catch {
      showMsg("Erreur réseau", false);
      return false;
    }
  }

  async function handleStatusChange(enrollmentId: string, newStatus: string) {
    const ok = await handleEnrollmentPatch(enrollmentId, { status: newStatus });
    if (ok) {
      setData((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          enrollments: prev.enrollments.map((e) =>
            e.id === enrollmentId ? { ...e, status: newStatus } : e
          ),
        };
      });
      showMsg("Statut mis à jour", true);
    }
  }

  async function handleActivate30(enrollmentId: string) {
    const ok = await handleEnrollmentPatch(enrollmentId, { activate: true });
    if (ok) {
      const start = new Date();
      const end = new Date();
      end.setDate(start.getDate() + 30);
      setData((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          enrollments: prev.enrollments.map((e) =>
            e.id === enrollmentId
              ? {
                  ...e,
                  status: "in_progress",
                  access_start: start.toISOString(),
                  access_end: end.toISOString(),
                }
              : e
          ),
        };
      });
      showMsg("Accès activé pour 30 jours", true);
    }
  }

  async function handleAccessEndChange(enrollmentId: string, dateValue: string) {
    if (!dateValue) return;
    const isoDate = new Date(dateValue).toISOString();
    const ok = await handleEnrollmentPatch(enrollmentId, { access_end: isoDate });
    if (ok) {
      setData((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          enrollments: prev.enrollments.map((e) =>
            e.id === enrollmentId ? { ...e, access_end: isoDate } : e
          ),
        };
      });
      showMsg("Date de fin d'accès mise à jour", true);
    }
  }

  const q = search.toLowerCase().trim();

  const filteredProfiles = useMemo(() => {
    if (!data) return [];
    const filtered = data.profiles.filter((p) => {
      if (!q) return true;
      return (
        fullName(p).toLowerCase().includes(q) ||
        (p.email ?? "").toLowerCase().includes(q) ||
        (p.company ?? "").toLowerCase().includes(q)
      );
    });
    // Admins toujours en premier
    return [...filtered].sort((a, b) => {
      const aAdmin = a.role === "admin" ? 0 : 1;
      const bAdmin = b.role === "admin" ? 0 : 1;
      return aAdmin - bAdmin;
    });
  }, [data, q]);

  const filteredEnrollments = useMemo(() => {
    if (!data) return [];
    return data.enrollments.filter((e) => {
      if (!q) return true;
      const f = getFormation(e);
      return (
        (f?.title ?? "").toLowerCase().includes(q) ||
        (e.company_name ?? "").toLowerCase().includes(q) ||
        (e.status ?? "").toLowerCase().includes(q)
      );
    });
  }, [data, q]);

  const filteredClients = useMemo(() => {
    if (!data) return [];
    return data.clients.filter((c) => {
      if (!q) return true;
      return (
        c.name.toLowerCase().includes(q) ||
        c.managerEmail.toLowerCase().includes(q)
      );
    });
  }, [data, q]);

  // Pour l'onglet Parcours : liste des apprenants avec leur avancement
  const learnersWithProgress = useMemo(() => {
    if (!data) return [];
    return data.profiles
      .filter((p) => p.role === "apprenant" || !p.role)
      .map((p) => {
        const myEnrollments = data.enrollments.filter((e) => e.user_id === p.id);
        const myProgress = data.chapterProgress.filter((c) => c.user_id === p.id);
        const myQuiz = data.quizAttempts.filter((q) => q.user_id === p.id);
        return { profile: p, enrollments: myEnrollments, progress: myProgress, quiz: myQuiz };
      })
      .filter((l) => {
        if (!q) return true;
        return (
          fullName(l.profile).toLowerCase().includes(q) ||
          (l.profile.email ?? "").toLowerCase().includes(q)
        );
      });
  }, [data, q]);

  const ISSUE_LABELS: Record<string, string> = {
    no_access_course:  "Pas d'accès au cours",
    pdf_not_generated: "PDF non généré",
    no_account_access: "Pas d'accès au compte",
    broken_link:       "Lien cassé",
    password_reset:    "Mot de passe oublié",
    other:             "Autre",
  };

  const openTickets = data?.tickets.filter((t) => t.status === "open").length ?? 0;

  const tabs: { key: TabKey; label: string; count?: number; alert?: boolean }[] = [
    { key: "apprenants", label: "Apprenants", count: data?.profiles.length },
    { key: "commandes",  label: "Commandes",  count: data?.enrollments.length },
    { key: "clients",    label: "Clients / Entreprises", count: data?.clients.length },
    { key: "parcours",   label: "Suivi des parcours" },
    { key: "tickets",    label: "Tickets Support", count: data?.tickets.length, alert: openTickets > 0 },
    { key: "outils",     label: "Outils" },
  ];

  if (loading) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-10">
        <div className="space-y-4">
          <div className="h-8 w-64 animate-pulse rounded bg-slate-200" />
          <div className="h-64 animate-pulse rounded-3xl bg-slate-200" />
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-10">
        <div className="rounded-3xl border border-red-200 bg-red-50 p-6">
          <p className="font-semibold text-red-700">{error}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      {/* En-tête */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
            Espace support
          </p>
          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            Tableau de bord support
          </h1>
        </div>
        <div className="flex gap-3">
          <Link
            href="/admin"
            className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            ← Admin
          </Link>
        </div>
      </div>

      {/* Bandeau feedback actions */}
      {actionMsg && (
        <div
          className={`mb-4 rounded-xl px-4 py-3 text-sm font-semibold ${
            actionMsg.ok
              ? "bg-emerald-50 border border-emerald-200 text-emerald-800"
              : "bg-red-50 border border-red-200 text-red-800"
          }`}
        >
          {actionMsg.text}
        </div>
      )}

      {/* KPIs */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Apprenants", value: data?.profiles.length ?? 0, color: "text-slate-900" },
          { label: "Inscriptions totales", value: data?.enrollments.length ?? 0, color: "text-slate-900" },
          { label: "Formations terminées", value: data?.enrollments.filter((e) => e.status === "completed").length ?? 0, color: "text-emerald-700" },
          { label: "Clients entreprises", value: data?.clients.length ?? 0, color: "text-blue-700" },
        ].map((kpi) => (
          <div key={kpi.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{kpi.label}</p>
            <p className={`mt-2 text-3xl font-bold ${kpi.color}`}>{kpi.value}</p>
          </div>
        ))}
      </div>

      {/* Onglets */}
      <div className="mb-4 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => { setTab(t.key); setSearch(""); }}
            className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
              tab === t.key
                ? "bg-slate-900 text-white"
                : "border border-slate-300 text-slate-700 hover:bg-slate-50"
            }`}
          >
            {t.label}
            {t.count !== undefined && (
              <span className={`ml-2 rounded-full px-2 py-0.5 text-xs ${tab === t.key ? "bg-white/20" : t.alert ? "bg-red-100 text-red-700" : "bg-slate-100"}`}>
                {t.count}
              </span>
            )}
            {t.alert && tab !== t.key && (
              <span className="ml-1 inline-block h-2 w-2 rounded-full bg-red-500" />
            )}
          </button>
        ))}
      </div>

      {/* Recherche */}
      <div className="mb-4">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Rechercher…"
          className="w-full max-w-md rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm shadow-sm outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
        />
      </div>

      {/* ── Onglet Apprenants ── */}
      {tab === "apprenants" && (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3">Nom</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Entreprise</th>
                  <th className="px-4 py-3">Rôle</th>
                  <th className="px-4 py-3">Inscrit le</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProfiles.map((p, i) => {
                  const isAdminRow = p.role === "admin";
                  const prevIsAdmin = i > 0 && filteredProfiles[i - 1].role === "admin";
                  const showSeparator = !isAdminRow && prevIsAdmin;
                  return (
                    <>
                      {showSeparator && (
                        <tr key={`sep-${p.id}`}>
                          <td colSpan={6} className="bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
                            Apprenants
                          </td>
                        </tr>
                      )}
                      {i === 0 && isAdminRow && (
                        <tr key="sep-admin">
                          <td colSpan={6} className="bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
                            Équipe PREVENSIA
                          </td>
                        </tr>
                      )}
                      <tr
                        key={p.id}
                        className={`border-t ${
                          p.is_blocked
                            ? "bg-red-50/60 hover:bg-red-50"
                            : isAdminRow
                            ? "border-slate-200 bg-slate-950/[0.03] hover:bg-slate-950/[0.06]"
                            : "border-slate-100 hover:bg-slate-50"
                        }`}
                      >
                        <td className="px-4 py-3 font-semibold text-slate-900">
                          {fullName(p)}
                          {p.is_blocked && (
                            <span className="ml-2 inline-block rounded-full bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-700">
                              Bloqué
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-slate-600">{p.email ?? "—"}</td>
                        <td className="px-4 py-3 text-slate-600">{p.company ?? "—"}</td>
                        <td className="px-4 py-3">
                          {isAdminRow ? (
                            <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-700">
                              Admin
                            </span>
                          ) : (
                            <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">
                              Apprenant
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-slate-500">{fmt(p.created_at)}</td>
                        <td className="px-4 py-3">
                          <div className="flex flex-wrap gap-2">
                            <a
                              href={`mailto:${p.email}`}
                              className="rounded-lg border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700 transition hover:bg-slate-100"
                            >
                              Contacter
                            </a>
                            <button
                              type="button"
                              onClick={() => handleBlockToggle(p.id, !!p.is_blocked)}
                              className={`rounded-lg border px-3 py-1 text-xs font-semibold transition ${
                                p.is_blocked
                                  ? "border-emerald-300 bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                                  : "border-red-300 bg-red-50 text-red-700 hover:bg-red-100"
                              }`}
                            >
                              {p.is_blocked ? "Débloquer" : "Bloquer"}
                            </button>
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })}
                {filteredProfiles.length === 0 && (
                  <tr><td colSpan={6} className="px-4 py-8 text-center text-slate-400">Aucun résultat</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ── Onglet Commandes ── */}
      {tab === "commandes" && (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3">Formation</th>
                  <th className="px-4 py-3">Entreprise</th>
                  <th className="px-4 py-3">Statut</th>
                  <th className="px-4 py-3">Paiement</th>
                  <th className="px-4 py-3">Accès du</th>
                  <th className="px-4 py-3">Fin d'accès</th>
                  <th className="px-4 py-3">Validé le</th>
                  <th className="px-4 py-3">Créé le</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredEnrollments.map((e) => {
                  const f = getFormation(e);
                  const canActivate =
                    e.status !== "in_progress" && e.status !== "completed";
                  return (
                    <tr key={e.id} className="border-t border-slate-100 hover:bg-slate-50">
                      <td className="px-4 py-3 font-medium text-slate-900">{f?.title ?? "—"}</td>
                      <td className="px-4 py-3 text-slate-600">{e.company_name ?? "—"}</td>
                      <td className="px-4 py-3">
                        <select
                          value={e.status ?? ""}
                          onChange={(ev) => handleStatusChange(e.id, ev.target.value)}
                          className="rounded-lg border border-slate-300 bg-white px-2 py-1 text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-300"
                        >
                          <option value="pending">En attente</option>
                          <option value="active">Actif</option>
                          <option value="in_progress">En cours</option>
                          <option value="completed">Terminé</option>
                          <option value="cancelled">Annulé</option>
                        </select>
                      </td>
                      <td className="px-4 py-3">{paymentBadge(e.payment_status)}</td>
                      <td className="px-4 py-3 text-slate-500">{fmt(e.access_start)}</td>
                      <td className="px-4 py-3">
                        <input
                          type="date"
                          defaultValue={toInputDate(e.access_end)}
                          onBlur={(ev) => {
                            if (ev.target.value !== toInputDate(e.access_end)) {
                              handleAccessEndChange(e.id, ev.target.value);
                            }
                          }}
                          className="rounded-lg border border-slate-300 bg-white px-2 py-1 text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-300"
                        />
                      </td>
                      <td className="px-4 py-3 text-slate-500">{fmt(e.validated_at)}</td>
                      <td className="px-4 py-3 text-slate-500">{fmt(e.created_at)}</td>
                      <td className="px-4 py-3">
                        {canActivate && (
                          <button
                            type="button"
                            onClick={() => handleActivate30(e.id)}
                            className="rounded-lg border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100 whitespace-nowrap"
                          >
                            Activer 30j
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
                {filteredEnrollments.length === 0 && (
                  <tr><td colSpan={9} className="px-4 py-8 text-center text-slate-400">Aucun résultat</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ── Onglet Clients ── */}
      {tab === "clients" && (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3">Entreprise</th>
                  <th className="px-4 py-3">Contact manager</th>
                  <th className="px-4 py-3">Nb inscriptions</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredClients.map((c) => (
                  <tr key={c.name} className="border-t border-slate-100 hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">{c.name}</td>
                    <td className="px-4 py-3 text-slate-600">{c.managerEmail || "—"}</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-blue-50 px-3 py-0.5 text-xs font-semibold text-blue-700">
                        {c.enrollmentCount} inscription{c.enrollmentCount > 1 ? "s" : ""}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      {c.managerEmail ? (
                        <a
                          href={`mailto:${c.managerEmail}`}
                          className="rounded-lg border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700 transition hover:bg-slate-100"
                        >
                          Contacter
                        </a>
                      ) : "—"}
                    </td>
                  </tr>
                ))}
                {filteredClients.length === 0 && (
                  <tr><td colSpan={4} className="px-4 py-8 text-center text-slate-400">Aucun résultat</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ── Onglet Parcours ── */}
      {tab === "parcours" && (
        <div className="space-y-4">
          {learnersWithProgress.map(({ profile: p, enrollments: enrs, progress, quiz }) => (
            <div key={p.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-semibold text-slate-900">{fullName(p)}</p>
                  <p className="text-sm text-slate-500">{p.email ?? "—"}</p>
                </div>
                <a
                  href={`mailto:${p.email}`}
                  className="rounded-xl border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Contacter
                </a>
              </div>

              {enrs.length === 0 ? (
                <p className="mt-3 text-sm text-slate-400">Aucune inscription.</p>
              ) : (
                <div className="mt-4 space-y-3">
                  {enrs.map((e) => {
                    const f = getFormation(e);
                    const slug = f?.slug ?? "";
                    const chapsDone = progress.filter(
                      (c) => c.formation_slug === slug && c.is_completed
                    ).length;
                    const totalChaps = progress.filter(
                      (c) => c.formation_slug === slug
                    ).length;
                    const lastQuiz = quiz
                      .filter((q) => q.formation_slug === slug)
                      .sort((a, b) =>
                        (b.attempted_at ?? "") > (a.attempted_at ?? "") ? 1 : -1
                      )[0];

                    return (
                      <div key={e.id} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="font-medium text-slate-800">
                            {f?.title ?? "Formation inconnue"}
                          </span>
                          {statusBadge(e.status)}
                          {paymentBadge(e.payment_status)}
                        </div>

                        <div className="mt-3 grid gap-2 text-sm sm:grid-cols-3">
                          <div>
                            <span className="text-slate-500">Chapitres :</span>{" "}
                            <span className="font-medium text-slate-800">
                              {chapsDone}/{totalChaps > 0 ? totalChaps : "?"}
                            </span>
                          </div>
                          <div>
                            <span className="text-slate-500">Accès jusqu'au :</span>{" "}
                            <span className="font-medium text-slate-800">{fmt(e.access_end)}</span>
                          </div>
                          <div>
                            <span className="text-slate-500">Validé :</span>{" "}
                            <span className="font-medium text-slate-800">{fmt(e.validated_at)}</span>
                          </div>
                        </div>

                        {lastQuiz && (
                          <div className="mt-2 flex flex-wrap gap-3 text-sm">
                            <span className="text-slate-500">Dernier quiz :</span>
                            <span className={`font-semibold ${lastQuiz.passed ? "text-emerald-700" : "text-red-600"}`}>
                              {lastQuiz.score}/{lastQuiz.total} ({lastQuiz.score_percent}%)
                              — {lastQuiz.passed ? "Réussi ✓" : "Échoué ✗"}
                            </span>
                            <span className="text-slate-400">{fmt(lastQuiz.attempted_at)}</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
          {learnersWithProgress.length === 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-400">
              Aucun résultat
            </div>
          )}
        </div>
      )}

      {/* ── Onglet Outils ── */}
      {tab === "outils" && (
        <OutilsTab data={data} showMsg={showMsg} />
      )}

      {/* ── Onglet Tickets Support ── */}
      {tab === "tickets" && (
        <div className="space-y-4">
          {/* Résumé statuts */}
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { label: "Ouverts", status: "open",        color: "text-red-700",   bg: "bg-red-50 border-red-200" },
              { label: "En cours", status: "in_progress", color: "text-amber-700", bg: "bg-amber-50 border-amber-200" },
              { label: "Résolus",  status: "resolved",    color: "text-emerald-700", bg: "bg-emerald-50 border-emerald-200" },
            ].map((s) => (
              <div key={s.status} className={`rounded-2xl border p-4 ${s.bg}`}>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{s.label}</p>
                <p className={`mt-1 text-2xl font-bold ${s.color}`}>
                  {data?.tickets.filter((t) => t.status === s.status).length ?? 0}
                </p>
              </div>
            ))}
          </div>

          {/* Liste des tickets */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Nom</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Problème</th>
                    <th className="px-4 py-3">Message</th>
                    <th className="px-4 py-3">Statut</th>
                    <th className="px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {(data?.tickets ?? [])
                    .filter((t) => {
                      if (!q) return true;
                      return (
                        (t.user_email ?? "").toLowerCase().includes(q) ||
                        (t.user_name ?? "").toLowerCase().includes(q) ||
                        (ISSUE_LABELS[t.issue_type] ?? t.issue_type).toLowerCase().includes(q)
                      );
                    })
                    .map((t) => (
                      <tr key={t.id} className="border-t border-slate-100 hover:bg-slate-50">
                        <td className="px-4 py-3 text-slate-500 whitespace-nowrap">{fmt(t.created_at)}</td>
                        <td className="px-4 py-3 font-medium text-slate-900">{t.user_name || "—"}</td>
                        <td className="px-4 py-3 text-slate-600">{t.user_email}</td>
                        <td className="px-4 py-3">
                          <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">
                            {ISSUE_LABELS[t.issue_type] ?? t.issue_type}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-slate-500 max-w-[200px] truncate" title={t.message ?? ""}>
                          {t.message || "—"}
                        </td>
                        <td className="px-4 py-3">
                          {t.status === "open" && (
                            <span className="inline-block rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-700">Ouvert</span>
                          )}
                          {t.status === "in_progress" && (
                            <span className="inline-block rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-700">En cours</span>
                          )}
                          {t.status === "resolved" && (
                            <span className="inline-block rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">Résolu</span>
                          )}
                        </td>
                        <td className="px-4 py-3">
                          <a
                            href={`mailto:${t.user_email}?subject=Re: ${ISSUE_LABELS[t.issue_type] ?? t.issue_type} — PREVENSIA Support`}
                            className="rounded-lg border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700 transition hover:bg-slate-100"
                          >
                            Répondre
                          </a>
                        </td>
                      </tr>
                    ))}
                  {(data?.tickets ?? []).length === 0 && (
                    <tr>
                      <td colSpan={7} className="px-4 py-8 text-center text-slate-400">
                        Aucun ticket de support pour le moment.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
