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

type TabKey = "today" | "apprenants" | "commandes" | "clients" | "parcours" | "tickets" | "outils";

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
  const [devisTvaRate, setDevisTvaRate] = useState("20");
  const [devisValidite, setDevisValidite] = useState("30");
  const [devisNotes, setDevisNotes] = useState("");
  const [devisLoading, setDevisLoading] = useState(false);

  // ── État Facture ───────────────────────────────────────────────────────
  const [factClientName, setFactClientName] = useState("");
  const [factClientEmail, setFactClientEmail] = useState("");
  const [factClientCompany, setFactClientCompany] = useState("");
  const [factFormation, setFactFormation] = useState("");
  const [factMontantHT, setFactMontantHT] = useState("");
  const [factTvaRate, setFactTvaRate] = useState("20");
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
          tvaRate: parseFloat(devisTvaRate) || 0,
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
          tvaRate: parseFloat(factTvaRate) || 0,
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
            <label className={labelCls}>TVA</label>
            <select
              value={devisTvaRate}
              onChange={(e) => setDevisTvaRate(e.target.value)}
              className={inputCls}
            >
              <option value="20">20 % — TVA applicable (défaut)</option>
              <option value="0">0 % — Exonéré art. 261-4-4 CGI (NDA obtenu uniquement)</option>
            </select>
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
            <label className={labelCls}>TVA</label>
            <select
              value={factTvaRate}
              onChange={(e) => setFactTvaRate(e.target.value)}
              className={inputCls}
            >
              <option value="20">20 % — TVA applicable (défaut)</option>
              <option value="0">0 % — Exonéré art. 261-4-4 CGI (NDA obtenu uniquement)</option>
            </select>
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
  const [tab, setTab] = useState<TabKey>("today");
  const [search, setSearch] = useState("");
  const [actionMsg, setActionMsg] = useState<{ text: string; ok: boolean } | null>(null);

  // ── États pour la fiche apprenant (parcours) ──────────────────────────────
  const [expandedLearner, setExpandedLearner] = useState<string | null>(null);

  // ── États pour la gestion des tickets ──────────────────────────────────────
  const [expandedTicket, setExpandedTicket] = useState<string | null>(null);
  const [ticketReplies, setTicketReplies] = useState<Record<string, string>>({});
  const [ticketNotes, setTicketNotes] = useState<Record<string, string>>({});
  const [ticketLoading, setTicketLoading] = useState<Record<string, boolean>>({});

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

  async function ticketAction(
    ticketId: string,
    action: string,
    payload: Record<string, string>
  ) {
    setTicketLoading((prev) => ({ ...prev, [ticketId]: true }));
    try {
      const res = await fetch(`/api/admin/support/tickets/${ticketId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, ...payload }),
      });
      if (!res.ok) throw new Error();
      showMsg(
        action === "reset_password"
          ? "Email de réinitialisation envoyé ✓"
          : action === "reply"
          ? "Réponse envoyée ✓"
          : action === "note"
          ? "Note sauvegardée ✓"
          : "Statut mis à jour ✓",
        true
      );
      // Rafraîchir les données
      const r = await fetch("/api/admin/support");
      if (r.ok) {
        const d = await r.json();
        setData(d);
      }
    } catch {
      showMsg("Erreur lors de l'action.", false);
    } finally {
      setTicketLoading((prev) => ({ ...prev, [ticketId]: false }));
    }
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

  // ── "À traiter aujourd'hui" ────────────────────────────────────────────────
  const todayItems = useMemo(() => {
    if (!data) return { pendingPayments: [], expiringAccess: [], blockedLearners: [], pendingInterviews: [], pendingTickets: [] };

    const now = new Date();
    const in7days = new Date(now);
    in7days.setDate(now.getDate() + 7);

    // Paiements en attente (statut non annulé)
    const pendingPayments = data.enrollments.filter(
      (e) => e.payment_status !== "paid" && e.status !== "cancelled"
    );

    // Accès expirant dans ≤ 7 jours et encore actifs
    const expiringAccess = data.enrollments.filter((e) => {
      if (!e.access_end) return false;
      if (e.status === "completed" || e.status === "cancelled") return false;
      const end = new Date(e.access_end);
      return end >= now && end <= in7days;
    });

    // Comptes bloqués
    const blockedLearners = data.profiles.filter((p) => p.is_blocked);

    // Entretiens à planifier
    const pendingInterviews = data.enrollments.filter(
      (e) => e.status === "pending_interview"
    );

    // Tickets ouverts
    const pendingTickets = data.tickets.filter((t) => t.status === "open");

    return { pendingPayments, expiringAccess, blockedLearners, pendingInterviews, pendingTickets };
  }, [data]);

  const todayAlertCount =
    todayItems.pendingPayments.length +
    todayItems.expiringAccess.length +
    todayItems.blockedLearners.length +
    todayItems.pendingInterviews.length +
    todayItems.pendingTickets.length;

  const tabs: { key: TabKey; label: string; count?: number; alert?: boolean }[] = [
    { key: "today",      label: "À traiter", count: todayAlertCount, alert: todayAlertCount > 0 },
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
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { label: "Apprenants", value: data?.profiles.filter(p => p.role !== "admin").length ?? 0, color: "text-slate-900" },
          { label: "Inscriptions totales", value: data?.enrollments.length ?? 0, color: "text-slate-900" },
          { label: "Inscriptions payées", value: data?.enrollments.filter(e => e.payment_status === "paid").length ?? 0, color: "text-emerald-700" },
          { label: "Formations terminées", value: data?.enrollments.filter(e => e.status === "completed").length ?? 0, color: "text-blue-700" },
          { label: "Clients entreprises", value: data?.clients.length ?? 0, color: "text-violet-700" },
          { label: "Tickets ouverts", value: openTickets, color: openTickets > 0 ? "text-red-600" : "text-slate-400" },
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
            onClick={() => { setTab(t.key === tab && t.key === "outils" ? "apprenants" : t.key); setSearch(""); }}
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

      {/* ── Onglet À traiter aujourd'hui ── */}
      {tab === "today" && (
        <div className="space-y-6">
          {todayAlertCount === 0 ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
              <p className="text-2xl">✅</p>
              <p className="mt-2 font-semibold text-emerald-800">Rien à traiter aujourd&apos;hui</p>
              <p className="mt-1 text-sm text-emerald-700">Toutes les inscriptions sont à jour.</p>
            </div>
          ) : (
            <>
              {/* Paiements en attente */}
              {todayItems.pendingPayments.length > 0 && (
                <section>
                  <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-amber-700">
                    <span className="inline-block h-2 w-2 rounded-full bg-amber-500" />
                    Paiements en attente ({todayItems.pendingPayments.length})
                  </h3>
                  <div className="overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-sm">
                    <table className="min-w-full text-sm">
                      <thead className="bg-amber-50 text-left text-xs uppercase tracking-wide text-amber-700">
                        <tr>
                          <th className="px-4 py-3">Formation</th>
                          <th className="px-4 py-3">Entreprise</th>
                          <th className="px-4 py-3">Statut paiement</th>
                          <th className="px-4 py-3">Statut formation</th>
                          <th className="px-4 py-3">Créé le</th>
                        </tr>
                      </thead>
                      <tbody>
                        {todayItems.pendingPayments.map((e) => {
                          const f = getFormation(e);
                          return (
                            <tr key={e.id} className="border-t border-amber-100 hover:bg-amber-50/40">
                              <td className="px-4 py-3 font-medium text-slate-900">{f?.title ?? "—"}</td>
                              <td className="px-4 py-3 text-slate-600">{e.company_name ?? "—"}</td>
                              <td className="px-4 py-3">{paymentBadge(e.payment_status)}</td>
                              <td className="px-4 py-3">{statusBadge(e.status)}</td>
                              <td className="px-4 py-3 text-slate-500">{fmt(e.created_at)}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </section>
              )}

              {/* Accès expirant ≤ 7 jours */}
              {todayItems.expiringAccess.length > 0 && (
                <section>
                  <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-orange-700">
                    <span className="inline-block h-2 w-2 rounded-full bg-orange-500" />
                    Accès expirant dans 7 jours ({todayItems.expiringAccess.length})
                  </h3>
                  <div className="overflow-hidden rounded-2xl border border-orange-200 bg-white shadow-sm">
                    <table className="min-w-full text-sm">
                      <thead className="bg-orange-50 text-left text-xs uppercase tracking-wide text-orange-700">
                        <tr>
                          <th className="px-4 py-3">Formation</th>
                          <th className="px-4 py-3">Entreprise</th>
                          <th className="px-4 py-3">Fin d&apos;accès</th>
                          <th className="px-4 py-3">Statut</th>
                          <th className="px-4 py-3">Prolonger</th>
                        </tr>
                      </thead>
                      <tbody>
                        {todayItems.expiringAccess.map((e) => {
                          const f = getFormation(e);
                          return (
                            <tr key={e.id} className="border-t border-orange-100 hover:bg-orange-50/40">
                              <td className="px-4 py-3 font-medium text-slate-900">{f?.title ?? "—"}</td>
                              <td className="px-4 py-3 text-slate-600">{e.company_name ?? "—"}</td>
                              <td className="px-4 py-3 font-semibold text-orange-700">{fmt(e.access_end)}</td>
                              <td className="px-4 py-3">{statusBadge(e.status)}</td>
                              <td className="px-4 py-3">
                                <input
                                  type="date"
                                  defaultValue={toInputDate(e.access_end)}
                                  onBlur={(ev) => {
                                    if (ev.target.value !== toInputDate(e.access_end)) {
                                      handleAccessEndChange(e.id, ev.target.value);
                                    }
                                  }}
                                  className="rounded-lg border border-slate-300 bg-white px-2 py-1 text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-300"
                                />
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </section>
              )}

              {/* Comptes bloqués */}
              {todayItems.blockedLearners.length > 0 && (
                <section>
                  <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-red-700">
                    <span className="inline-block h-2 w-2 rounded-full bg-red-500" />
                    Comptes bloqués ({todayItems.blockedLearners.length})
                  </h3>
                  <div className="overflow-hidden rounded-2xl border border-red-200 bg-white shadow-sm">
                    <table className="min-w-full text-sm">
                      <thead className="bg-red-50 text-left text-xs uppercase tracking-wide text-red-700">
                        <tr>
                          <th className="px-4 py-3">Nom</th>
                          <th className="px-4 py-3">Email</th>
                          <th className="px-4 py-3">Entreprise</th>
                          <th className="px-4 py-3">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {todayItems.blockedLearners.map((p) => (
                          <tr key={p.id} className="border-t border-red-100 hover:bg-red-50/40">
                            <td className="px-4 py-3 font-semibold text-slate-900">{fullName(p)}</td>
                            <td className="px-4 py-3 text-slate-600">{p.email ?? "—"}</td>
                            <td className="px-4 py-3 text-slate-600">{p.company ?? "—"}</td>
                            <td className="px-4 py-3">
                              <button
                                type="button"
                                onClick={() => handleBlockToggle(p.id, true)}
                                className="rounded-lg border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 hover:bg-emerald-100 transition"
                              >
                                Débloquer
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              )}

              {/* Entretiens à planifier */}
              {todayItems.pendingInterviews.length > 0 && (
                <section>
                  <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-violet-700">
                    <span className="inline-block h-2 w-2 rounded-full bg-violet-500" />
                    Entretiens à planifier ({todayItems.pendingInterviews.length})
                  </h3>
                  <div className="overflow-hidden rounded-2xl border border-violet-200 bg-white shadow-sm">
                    <table className="min-w-full text-sm">
                      <thead className="bg-violet-50 text-left text-xs uppercase tracking-wide text-violet-700">
                        <tr>
                          <th className="px-4 py-3">Formation</th>
                          <th className="px-4 py-3">Entreprise</th>
                          <th className="px-4 py-3">Fin d&apos;accès</th>
                          <th className="px-4 py-3">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {todayItems.pendingInterviews.map((e) => {
                          const f = getFormation(e);
                          return (
                            <tr key={e.id} className="border-t border-violet-100 hover:bg-violet-50/40">
                              <td className="px-4 py-3 font-medium text-slate-900">{f?.title ?? "—"}</td>
                              <td className="px-4 py-3 text-slate-600">{e.company_name ?? "—"}</td>
                              <td className="px-4 py-3 text-slate-500">{fmt(e.access_end)}</td>
                              <td className="px-4 py-3">
                                <a
                                  href="/admin/validations"
                                  className="rounded-lg border border-violet-300 bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700 hover:bg-violet-100 transition"
                                >
                                  Valider entretien →
                                </a>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </section>
              )}

              {/* Tickets ouverts */}
              {todayItems.pendingTickets.length > 0 && (
                <section>
                  <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-red-700">
                    <span className="inline-block h-2 w-2 rounded-full bg-red-500" />
                    Tickets ouverts ({todayItems.pendingTickets.length})
                  </h3>
                  <div className="overflow-hidden rounded-2xl border border-red-200 bg-white shadow-sm">
                    <table className="min-w-full text-sm">
                      <thead className="bg-red-50 text-left text-xs uppercase tracking-wide text-red-700">
                        <tr>
                          <th className="px-4 py-3">Date</th>
                          <th className="px-4 py-3">Nom</th>
                          <th className="px-4 py-3">Email</th>
                          <th className="px-4 py-3">Problème</th>
                          <th className="px-4 py-3">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {todayItems.pendingTickets.map((t) => (
                          <tr key={t.id} className="border-t border-red-100 hover:bg-red-50/40">
                            <td className="px-4 py-3 text-slate-500 whitespace-nowrap">{fmt(t.created_at)}</td>
                            <td className="px-4 py-3 font-medium text-slate-900">{t.user_name || "—"}</td>
                            <td className="px-4 py-3 text-slate-600">{t.user_email}</td>
                            <td className="px-4 py-3">
                              <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">
                                {ISSUE_LABELS[t.issue_type] ?? t.issue_type}
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <button
                                type="button"
                                onClick={() => { setTab("tickets"); }}
                                className="rounded-lg border border-red-300 bg-red-50 px-3 py-1 text-xs font-semibold text-red-700 hover:bg-red-100 transition"
                              >
                                Gérer →
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              )}
            </>
          )}
        </div>
      )}

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
          {learnersWithProgress.map(({ profile: p, enrollments: enrs, progress, quiz }) => {
            const isExpanded = expandedLearner === p.id;
            // Accès actif = date de fin dans le futur
            const now = new Date();
            const hasActiveAccess = enrs.some((e) => {
              if (!e.access_end) return false;
              return new Date(e.access_end) > now && e.status !== "cancelled";
            });

            return (
              <div key={p.id} className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                {/* ── En-tête apprenant ── */}
                <div className="flex flex-wrap items-center justify-between gap-3 p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-600 flex-shrink-0">
                      {(p.first_name?.[0] ?? p.email?.[0] ?? "?").toUpperCase()}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-semibold text-slate-900">{fullName(p)}</p>
                        {p.is_blocked && (
                          <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-700">Bloqué</span>
                        )}
                        {hasActiveAccess ? (
                          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">Accès actif</span>
                        ) : (
                          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-500">Accès expiré</span>
                        )}
                      </div>
                      <p className="text-sm text-slate-500">{p.email ?? "—"}{p.company ? ` · ${p.company}` : ""}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400">{enrs.length} formation{enrs.length > 1 ? "s" : ""}</span>
                    <a
                      href={`mailto:${p.email}`}
                      className="rounded-xl border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-50"
                    >
                      Contacter
                    </a>
                    <button
                      type="button"
                      onClick={() => setExpandedLearner(isExpanded ? null : p.id)}
                      className="rounded-xl border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-100"
                    >
                      {isExpanded ? "Réduire ▲" : "Voir détail ▼"}
                    </button>
                  </div>
                </div>

                {/* ── Résumé rapide (toujours visible) ── */}
                <div className="grid grid-cols-2 gap-px bg-slate-100 sm:grid-cols-4 border-t border-slate-100">
                  {[
                    { label: "Formations", value: enrs.length },
                    { label: "Terminées", value: enrs.filter(e => e.status === "completed").length },
                    { label: "Quiz réussis", value: quiz.filter(q => q.passed).length },
                    { label: "Inscrit le", value: fmt(p.created_at) },
                  ].map((kpi) => (
                    <div key={kpi.label} className="bg-white px-4 py-3">
                      <p className="text-xs text-slate-500">{kpi.label}</p>
                      <p className="mt-0.5 text-sm font-semibold text-slate-900">{kpi.value}</p>
                    </div>
                  ))}
                </div>

                {/* ── Détail expandable ── */}
                {isExpanded && (
                  <div className="border-t border-slate-100 p-5 space-y-5 bg-slate-50/50">
                    {enrs.length === 0 ? (
                      <p className="text-sm text-slate-400">Aucune inscription.</p>
                    ) : (
                      enrs.map((e) => {
                        const f = getFormation(e);
                        const slug = f?.slug ?? "";
                        const allChaps = progress.filter((c) => c.formation_slug === slug);
                        const chapsDone = allChaps.filter((c) => c.is_completed).length;
                        const totalChaps = allChaps.length;
                        const progressPct = totalChaps > 0 ? Math.round((chapsDone / totalChaps) * 100) : 0;
                        const allQuizAttempts = quiz
                          .filter((q) => q.formation_slug === slug)
                          .sort((a, b) => ((b.attempted_at ?? "") > (a.attempted_at ?? "") ? 1 : -1));
                        const lastQuiz = allQuizAttempts[0];

                        // Statut accès
                        const accessExpired = e.access_end ? new Date(e.access_end) < now : false;

                        return (
                          <div key={e.id} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                            {/* Titre formation */}
                            <div className="mb-3 flex flex-wrap items-center gap-2">
                              <span className="font-semibold text-slate-900">{f?.title ?? "Formation inconnue"}</span>
                              {statusBadge(e.status)}
                              {paymentBadge(e.payment_status)}
                              {accessExpired && e.status !== "completed" && (
                                <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-700">Accès expiré</span>
                              )}
                            </div>

                            {/* Grille infos accès */}
                            <div className="mb-4 grid gap-2 text-sm sm:grid-cols-3">
                              <div>
                                <span className="text-slate-500">Début accès :</span>{" "}
                                <span className="font-medium text-slate-800">{fmt(e.access_start)}</span>
                              </div>
                              <div>
                                <span className="text-slate-500">Fin accès :</span>{" "}
                                <span className={`font-medium ${accessExpired && e.status !== "completed" ? "text-red-700" : "text-slate-800"}`}>
                                  {fmt(e.access_end)}
                                </span>
                              </div>
                              <div>
                                <span className="text-slate-500">Validé le :</span>{" "}
                                <span className="font-medium text-slate-800">{fmt(e.validated_at)}</span>
                              </div>
                            </div>

                            {/* Barre de progression chapitres */}
                            {totalChaps > 0 && (
                              <div className="mb-4">
                                <div className="mb-1.5 flex items-center justify-between text-xs text-slate-500">
                                  <span>Progression chapitres</span>
                                  <span className="font-semibold text-slate-800">{chapsDone}/{totalChaps} ({progressPct}%)</span>
                                </div>
                                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
                                  <div
                                    className="h-full rounded-full bg-blue-500 transition-all"
                                    style={{ width: `${progressPct}%` }}
                                  />
                                </div>
                                {/* Liste chapitres */}
                                {allChaps.length > 0 && (
                                  <div className="mt-3 grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
                                    {allChaps.map((c) => (
                                      <div
                                        key={c.chapter_key}
                                        className={`flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs ${
                                          c.is_completed
                                            ? "bg-emerald-50 text-emerald-800"
                                            : "bg-slate-100 text-slate-600"
                                        }`}
                                      >
                                        <span className={`h-1.5 w-1.5 rounded-full flex-shrink-0 ${c.is_completed ? "bg-emerald-500" : "bg-slate-400"}`} />
                                        <span className="truncate">{c.chapter_key}</span>
                                        {c.is_completed && <span className="ml-auto flex-shrink-0">✓</span>}
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            )}

                            {/* Historique quiz */}
                            {allQuizAttempts.length > 0 && (
                              <div>
                                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                                  Historique quiz ({allQuizAttempts.length} tentative{allQuizAttempts.length > 1 ? "s" : ""})
                                </p>
                                <div className="space-y-1.5">
                                  {allQuizAttempts.map((qa, idx) => (
                                    <div
                                      key={idx}
                                      className={`flex items-center justify-between rounded-lg px-3 py-2 text-xs ${
                                        qa.passed ? "bg-emerald-50" : "bg-red-50"
                                      }`}
                                    >
                                      <span className={`font-semibold ${qa.passed ? "text-emerald-800" : "text-red-800"}`}>
                                        {qa.passed ? "✓ Réussi" : "✗ Échoué"} — {qa.score}/{qa.total} ({qa.score_percent}%)
                                      </span>
                                      <span className="text-slate-500">{fmt(qa.attempted_at)}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {!lastQuiz && totalChaps === 0 && (
                              <p className="text-xs text-slate-400">Aucune activité enregistrée.</p>
                            )}
                          </div>
                        );
                      })
                    )}
                  </div>
                )}
              </div>
            );
          })}
          {learnersWithProgress.length === 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-400">
              Aucun résultat
            </div>
          )}
        </div>
      )}

      {/* ── Onglet Outils ── */}
      {tab === "outils" && (
        <div>
          <button
            type="button"
            onClick={() => setTab("apprenants")}
            className="mb-4 flex items-center gap-1 text-sm text-slate-500 hover:text-slate-900 transition"
          >
            ← Retour au tableau de bord
          </button>
          <OutilsTab data={data} showMsg={showMsg} />
        </div>
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
                      <>
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
                            <button
                              type="button"
                              onClick={() => setExpandedTicket(expandedTicket === t.id ? null : t.id)}
                              className="rounded-lg border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700 transition hover:bg-slate-100"
                            >
                              {expandedTicket === t.id ? "Fermer ▲" : "Gérer ▼"}
                            </button>
                          </td>
                        </tr>
                        {expandedTicket === t.id && (
                          <tr key={`${t.id}-expanded`}>
                            <td colSpan={7} className="bg-slate-50 px-4 py-4">
                              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                                {/* 1. Reset mot de passe */}
                                <div className="rounded-xl border border-slate-200 bg-white p-4">
                                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">Réinitialiser le mot de passe</p>
                                  <p className="text-xs text-slate-500 mb-3">Envoie un email de reset à <strong>{t.user_email}</strong></p>
                                  <button
                                    type="button"
                                    disabled={ticketLoading[t.id]}
                                    onClick={() => ticketAction(t.id, "reset_password", { email: t.user_email })}
                                    className="w-full rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white transition hover:bg-slate-700 disabled:opacity-50"
                                  >
                                    {ticketLoading[t.id] ? "Envoi..." : "Envoyer le lien de reset"}
                                  </button>
                                </div>

                                {/* 2. Répondre par email */}
                                <div className="rounded-xl border border-slate-200 bg-white p-4">
                                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">Répondre par email</p>
                                  <textarea
                                    rows={3}
                                    placeholder="Votre réponse..."
                                    value={ticketReplies[t.id] ?? ""}
                                    onChange={(e) => setTicketReplies((prev) => ({ ...prev, [t.id]: e.target.value }))}
                                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 resize-none"
                                  />
                                  <button
                                    type="button"
                                    disabled={ticketLoading[t.id] || !(ticketReplies[t.id]?.trim())}
                                    onClick={() => ticketAction(t.id, "reply", {
                                      email: t.user_email,
                                      message: ticketReplies[t.id] ?? "",
                                      issueLabel: ISSUE_LABELS[t.issue_type] ?? t.issue_type,
                                    })}
                                    className="mt-2 w-full rounded-lg bg-blue-700 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-800 disabled:opacity-50"
                                  >
                                    {ticketLoading[t.id] ? "Envoi..." : "Envoyer la réponse"}
                                  </button>
                                </div>

                                {/* 3. Note interne */}
                                <div className="rounded-xl border border-slate-200 bg-white p-4">
                                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">Note interne</p>
                                  <textarea
                                    rows={3}
                                    placeholder={t.admin_note ?? "Note visible uniquement par les admins..."}
                                    value={ticketNotes[t.id] ?? t.admin_note ?? ""}
                                    onChange={(e) => setTicketNotes((prev) => ({ ...prev, [t.id]: e.target.value }))}
                                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 resize-none"
                                  />
                                  <button
                                    type="button"
                                    disabled={ticketLoading[t.id]}
                                    onClick={() => ticketAction(t.id, "note", { note: ticketNotes[t.id] ?? "" })}
                                    className="mt-2 w-full rounded-lg bg-amber-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-amber-700 disabled:opacity-50"
                                  >
                                    {ticketLoading[t.id] ? "Sauvegarde..." : "Sauvegarder la note"}
                                  </button>
                                </div>

                                {/* 4. Changer le statut */}
                                <div className="rounded-xl border border-slate-200 bg-white p-4">
                                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-3">Changer le statut</p>
                                  <div className="flex flex-col gap-2">
                                    {[
                                      { value: "open", label: "Ouvert", color: "bg-red-100 text-red-700 hover:bg-red-200" },
                                      { value: "in_progress", label: "En cours", color: "bg-amber-100 text-amber-700 hover:bg-amber-200" },
                                      { value: "resolved", label: "Résolu ✓", color: "bg-emerald-100 text-emerald-700 hover:bg-emerald-200" },
                                    ].map((s) => (
                                      <button
                                        key={s.value}
                                        type="button"
                                        disabled={ticketLoading[t.id] || t.status === s.value}
                                        onClick={() => ticketAction(t.id, "status", { status: s.value })}
                                        className={`w-full rounded-lg px-3 py-2 text-xs font-semibold transition disabled:opacity-40 ${s.color} ${t.status === s.value ? "ring-2 ring-offset-1 ring-slate-400" : ""}`}
                                      >
                                        {s.label}
                                      </button>
                                    ))}
                                  </div>
                                </div>

                              </div>
                            </td>
                          </tr>
                        )}
                      </>
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
