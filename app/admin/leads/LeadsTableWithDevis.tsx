"use client";

import { useState } from "react";
import Link from "next/link";
import DevisPanel from "../components/DevisPanel";

const STATUS_LABELS: Record<string, string> = {
  new: "Nouveau", contacted: "Contacté", qualified: "Qualifié",
  converted: "Converti", lost: "Perdu",
};

const STATUS_COLORS: Record<string, string> = {
  new: "bg-blue-100 text-blue-800",
  contacted: "bg-amber-100 text-amber-800",
  qualified: "bg-violet-100 text-violet-800",
  converted: "bg-emerald-100 text-emerald-800",
  lost: "bg-slate-100 text-slate-500",
};

type Lead = {
  id: string;
  first_name?: string | null;
  last_name?: string | null;
  email?: string | null;
  phone?: string | null;
  company?: string | null;
  formation_interest?: string | null;
  source?: string | null;
  score?: number | null;
  status?: string | null;
  notes?: string | null;
  created_at: string;
  metadata?: { participants?: number; total_ht?: number; has_quote?: boolean } | null;
};

type Props = {
  leads: Lead[];
};

export default function LeadsTableWithDevis({ leads }: Props) {
  const [devisLead, setDevisLead] = useState<Lead | null>(null);

  if (leads.length === 0) {
    return (
      <div className="mt-8 py-12 text-center">
        <p className="text-4xl">👥</p>
        <p className="mt-3 text-sm font-semibold text-slate-600">Aucun lead pour l&apos;instant</p>
        <p className="mt-1 text-xs text-slate-400">Les prospects apparaîtront ici dès qu&apos;ils rempliront un formulaire.</p>
      </div>
    );
  }

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[980px] border-separate border-spacing-y-1.5 text-sm">
          <thead>
            <tr>
              {["Nom", "Email", "Téléphone", "Formation", "Source", "Score", "Statut", "Créé le", ""].map((h) => (
                <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400 whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="bg-white transition hover:bg-slate-50">
                <td className="rounded-l-xl px-4 py-3 font-semibold text-slate-900 whitespace-nowrap">
                  <Link href={`/admin/leads/${lead.id}`} className="hover:text-blue-700 hover:underline">
                    {[lead.first_name, lead.last_name].filter(Boolean).join(" ") || "—"}
                  </Link>
                </td>
                <td className="px-4 py-3 text-xs text-slate-500">{lead.email}</td>
                <td className="px-4 py-3 text-xs text-slate-500">{lead.phone ?? "—"}</td>
                <td className="px-4 py-3 text-slate-700 max-w-[200px] truncate">{lead.formation_interest ?? "—"}</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                    {lead.source ?? "—"}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className={`text-sm font-bold ${(lead.score ?? 0) >= 70 ? "text-emerald-700" : (lead.score ?? 0) >= 40 ? "text-amber-700" : "text-slate-400"}`}>
                    {lead.score ?? 0}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${STATUS_COLORS[lead.status ?? ""] ?? "bg-slate-100 text-slate-500"}`}>
                    {STATUS_LABELS[lead.status ?? ""] ?? lead.status ?? "—"}
                  </span>
                </td>
                <td className="px-4 py-3 text-xs text-slate-400 whitespace-nowrap">
                  {new Date(lead.created_at).toLocaleDateString("fr-FR")}
                </td>
                {/* Bouton devis inline */}
                <td className="rounded-r-xl px-3 py-3">
                  <button
                    type="button"
                    title="Générer le devis"
                    onClick={() => setDevisLead(lead)}
                    className="inline-flex items-center gap-1 rounded-lg bg-emerald-50 border border-emerald-200 px-2.5 py-1.5 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-600 hover:text-white hover:border-emerald-600 whitespace-nowrap"
                  >
                    📄 Devis
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Panneau devis déclenché depuis la ligne */}
      {devisLead && (
        <DevisPanel
          initialData={{
            contactName:       [devisLead.first_name, devisLead.last_name].filter(Boolean).join(" "),
            email:             devisLead.email ?? "",
            phone:             devisLead.phone ?? "",
            companyName:       devisLead.company ?? "",
            participants:      devisLead.metadata?.participants ?? 1,
            formationInterest: devisLead.formation_interest ?? "",
            notes:             devisLead.notes ?? "",
          }}
          onClose={() => setDevisLead(null)}
        />
      )}
    </>
  );
}
