import { createAdminClient } from "@/lib/supabase/admin";
import Link from "next/link";
import { redirect, notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { LeadNoteForm } from "./LeadNoteForm";
import { LeadStatusButton } from "../LeadStatusButton";
import DevisGeneratorButton from "./DevisGeneratorButton";
import FactureButton from "../../components/FactureButton";

type Params = Promise<{ id: string }>;

const STATUS_LABELS: Record<string, string> = {
  new: "Nouveau", contacted: "Contacté", qualified: "Qualifié",
  converted: "Converti", lost: "Perdu",
};

export default async function LeadDetailPage({ params }: { params: Params }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/connexion-admin");

  const { id } = await params;
  const admin = createAdminClient();
  if (!admin) return <p>Erreur DB</p>;

  const { data: lead } = await admin.from("leads").select("*").eq("id", id).single();
  if (!lead) notFound();

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-6 py-3">
          <Link href="/" className="mr-3 flex shrink-0 items-center gap-2">
            <span className="rounded-md bg-red-700 px-2 py-0.5 text-xs font-bold uppercase tracking-widest text-white">Prévensia</span>
          </Link>
          <nav className="flex flex-1 flex-wrap gap-1">
            <Link href="/admin" className="inline-flex items-center rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50">Inscriptions</Link>
            <Link href="/admin/leads" className="inline-flex items-center rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white">👥 Leads</Link>
            <Link href="/admin/kpis" className="inline-flex items-center rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-indigo-50 hover:text-indigo-700">📊 KPIs</Link>
            <Link href="/admin/agents" className="inline-flex items-center rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-emerald-50 hover:text-emerald-700">🤖 Agents IA</Link>
            <Link href="/admin/blog" className="inline-flex items-center rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-violet-50 hover:text-violet-700">✍️ Blog IA</Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-8">
        <Link href="/admin/leads" className="text-xs text-slate-400 hover:text-slate-700">← Retour aux leads</Link>

        <div className="mt-4 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          {/* Header lead */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                {[lead.first_name, lead.last_name].filter(Boolean).join(" ") || lead.email}
              </h1>
              <p className="mt-1 text-sm text-slate-500">{lead.email}</p>
              {lead.phone && <p className="text-sm text-slate-500">{lead.phone}</p>}
              {lead.company && <p className="mt-1 text-sm font-semibold text-slate-700">{lead.company}</p>}
            </div>
            <div className="flex flex-col items-end gap-2">
              <LeadStatusButton leadId={lead.id} currentStatus={lead.status ?? "new"} />
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-slate-300" />
                <span className="text-xs text-slate-400">Score</span>
                <span className={`ml-1 text-sm font-bold ${(lead.score ?? 0) >= 70 ? "text-emerald-700" : (lead.score ?? 0) >= 40 ? "text-amber-700" : "text-slate-500"}`}>
                  {lead.score ?? 0}/100
                </span>
              </div>
            </div>
          </div>

          {/* Infos */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Formation demandée</p>
              <p className="mt-1 text-sm text-slate-800">{lead.formation_interest ?? "—"}</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Source</p>
              <p className="mt-1 text-sm text-slate-800">{lead.source ?? "—"}</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Créé le</p>
              <p className="mt-1 text-sm text-slate-800">{new Date(lead.created_at).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })}</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Prochaine relance</p>
              <p className="mt-1 text-sm text-slate-800">
                {lead.next_followup_at ? new Date(lead.next_followup_at).toLocaleDateString("fr-FR", { day: "numeric", month: "long" }) : "—"}
              </p>
            </div>
          </div>

          {/* Metadata devis */}
          {lead.metadata && Object.keys(lead.metadata).length > 0 && (
            <div className="mt-4 rounded-xl bg-blue-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-400">Détails demande devis</p>
              <div className="mt-2 flex flex-wrap gap-4 text-sm text-blue-800">
                {lead.metadata.participants && <span>{lead.metadata.participants} participant(s)</span>}
                {lead.metadata.total_ht > 0 && <span>Total estimé : {lead.metadata.total_ht}€ HT</span>}
                {lead.metadata.has_quote && <span>Inclut des prestations sur devis</span>}
              </div>
            </div>
          )}

          {/* Actions rapides */}
          <div className="mt-6 flex flex-wrap gap-3">
            <DevisGeneratorButton
              initialData={{
                contactName:       [lead.first_name, lead.last_name].filter(Boolean).join(" "),
                email:             lead.email ?? "",
                phone:             lead.phone ?? "",
                companyName:       lead.company ?? "",
                participants:      (lead.metadata as { participants?: number } | null)?.participants ?? 1,
                formationInterest: lead.formation_interest ?? "",
                notes:             lead.notes ?? "",
              }}
            />
            <FactureButton
              initialData={{
                leadId:        lead.id,
                clientName:    [lead.first_name, lead.last_name].filter(Boolean).join(" "),
                clientEmail:   lead.email ?? "",
                clientCompany: lead.company ?? "",
                totalHT:       (lead.metadata as { total_ht?: number } | null)?.total_ht ?? 0,
              }}
            />
            <a
              href={`mailto:${lead.email}?subject=Suite à votre demande de formation PREVENSIA`}
              className="inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            >
              ✉️ Envoyer un email
            </a>
            {lead.phone && (
              <a
                href={`tel:${lead.phone}`}
                className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                📞 Appeler
              </a>
            )}
          </div>
        </div>

        {/* Notes */}
        <div className="mt-5 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Notes</h2>
          {lead.notes && (
            <div className="mt-4 rounded-xl bg-slate-50 p-4">
              <p className="whitespace-pre-wrap text-sm text-slate-700">{lead.notes}</p>
            </div>
          )}
          <div className="mt-4">
            <LeadNoteForm leadId={lead.id} currentNotes={lead.notes ?? ""} />
          </div>
        </div>
      </div>
    </main>
  );
}
