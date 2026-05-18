"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type AuditLog = {
  id: string;
  created_at: string;
  admin_id: string;
  admin_name: string;
  action: string;
  target_type: string;
  target_id: string;
  metadata: Record<string, unknown>;
};

const ACTION_LABELS: Record<string, { label: string; color: string; icon: string }> = {
  payment_confirmed:    { label: "Paiement confirmé",       color: "bg-emerald-50 text-emerald-700 border-emerald-200", icon: "💰" },
  access_activated:     { label: "Accès activé",            color: "bg-blue-50 text-blue-700 border-blue-200",          icon: "🔓" },
  enrollment_validated: { label: "Inscription validée",     color: "bg-indigo-50 text-indigo-700 border-indigo-200",    icon: "✅" },
  attestation_forced:   { label: "Attestation forcée",      color: "bg-amber-50 text-amber-700 border-amber-200",       icon: "📄" },
  slot_created:         { label: "Créneau créé",            color: "bg-slate-50 text-slate-700 border-slate-200",       icon: "🗓" },
  slot_deleted:         { label: "Créneau supprimé",        color: "bg-red-50 text-red-700 border-red-200",             icon: "🗑" },
  booking_cancelled:    { label: "Réservation annulée",     color: "bg-orange-50 text-orange-700 border-orange-200",    icon: "❌" },
};

const ALL_ACTIONS = Object.keys(ACTION_LABELS);

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit", month: "2-digit", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  }).format(new Date(iso));
}

function MetadataDisplay({ meta }: { meta: Record<string, unknown> }) {
  const entries = Object.entries(meta).filter(([, v]) => v !== null && v !== undefined && v !== "");
  if (entries.length === 0) return <span className="text-slate-400 italic">—</span>;
  return (
    <ul className="space-y-0.5 text-xs text-slate-600">
      {entries.map(([k, v]) => (
        <li key={k}>
          <span className="font-medium text-slate-700">{k} :</span>{" "}
          {typeof v === "string" ? v : JSON.stringify(v)}
        </li>
      ))}
    </ul>
  );
}

export default function AuditLogsPage() {
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filterAction, setFilterAction] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const params = new URLSearchParams({ limit: "200" });
        if (filterAction) params.set("action", filterAction);
        const res = await fetch(`/api/admin/audit-logs?${params}`);
        const json = await res.json();
        if (!res.ok) throw new Error(json.error ?? "Erreur");
        setLogs(json.logs ?? []);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Erreur inconnue");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [filterAction]);

  const filtered = logs.filter((l) => {
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (
      l.admin_name.toLowerCase().includes(q) ||
      l.target_id.toLowerCase().includes(q) ||
      JSON.stringify(l.metadata).toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Administration
            </p>
            <h1 className="mt-1 text-3xl font-bold text-slate-900">
              Journal d'activité
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Traçabilité de toutes les actions sensibles effectuées par les admins.
            </p>
          </div>
          <Link
            href="/admin"
            className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            ← Retour au dashboard
          </Link>
        </div>

        {/* Filtres */}
        <div className="mb-5 flex flex-wrap gap-3">
          <input
            type="text"
            placeholder="Rechercher (admin, ID, motif…)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 w-64"
          />

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilterAction("")}
              className={`rounded-xl border px-3 py-1.5 text-xs font-semibold transition ${
                filterAction === ""
                  ? "bg-slate-900 text-white border-slate-900"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
              }`}
            >
              Toutes
            </button>
            {ALL_ACTIONS.map((a) => {
              const cfg = ACTION_LABELS[a];
              return (
                <button
                  key={a}
                  onClick={() => setFilterAction(filterAction === a ? "" : a)}
                  className={`rounded-xl border px-3 py-1.5 text-xs font-semibold transition ${
                    filterAction === a
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  {cfg.icon} {cfg.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Contenu */}
        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-16 animate-pulse rounded-2xl bg-slate-200" />
            ))}
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-sm text-red-700">
            Erreur : {error}
          </div>
        ) : filtered.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-500">
            Aucune entrée trouvée.
          </div>
        ) : (
          <>
            <p className="mb-3 text-xs text-slate-500">
              {filtered.length} entrée{filtered.length > 1 ? "s" : ""}
            </p>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead className="border-b border-slate-100 bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Date
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Admin
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Action
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Cible
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Détails
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filtered.map((log) => {
                    const cfg = ACTION_LABELS[log.action] ?? {
                      label: log.action,
                      color: "bg-slate-50 text-slate-700 border-slate-200",
                      icon: "•",
                    };
                    return (
                      <tr key={log.id} className="hover:bg-slate-50/50 transition">
                        <td className="whitespace-nowrap px-4 py-3 text-xs text-slate-500">
                          {formatDate(log.created_at)}
                        </td>
                        <td className="px-4 py-3 text-sm font-medium text-slate-800">
                          {log.admin_name}
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-semibold ${cfg.color}`}>
                            {cfg.icon} {cfg.label}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-xs text-slate-500">{log.target_type}</span>
                          <br />
                          <span className="font-mono text-xs text-slate-700">
                            {log.target_id.length > 16
                              ? `${log.target_id.slice(0, 8)}…${log.target_id.slice(-4)}`
                              : log.target_id}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <MetadataDisplay meta={log.metadata} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
