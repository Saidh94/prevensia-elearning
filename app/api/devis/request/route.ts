import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createAdminClient } from "@/lib/supabase/admin";
import { COMPANY } from "@/lib/company";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://prevensia-formation.fr";

export const runtime = "nodejs";

// Lead scoring basé sur les formations demandées
function scoreLead(formations: FormationLine[], company: string, phone: string): number {
  let score = 20; // base
  const labels = formations.map((f) => f.label.toLowerCase()).join(" ");
  if (labels.includes("atex niveau 3") || labels.includes("ssiap")) score += 40;
  else if (labels.includes("atex niveau 2") || labels.includes("b1") || labels.includes("b2") || labels.includes("br") || labels.includes("bc")) score += 30;
  else if (labels.includes("atex") || labels.includes("sprinkler") || labels.includes("ssi")) score += 25;
  else if (labels.includes("bs") || labels.includes("be") || labels.includes("h0")) score += 15;
  if (formations.length >= 3) score += 20;
  else if (formations.length >= 2) score += 10;
  if (company && company.trim()) score += 15;
  if (phone && phone.trim()) score += 10;
  return Math.min(score, 100);
}

let _resend: Resend | null = null;
function getResend(): Resend | null {
  if (_resend) return _resend;
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    console.warn("[devis/request] RESEND_API_KEY manquante — les emails ne seront pas envoyés.");
    return null;
  }
  _resend = new Resend(apiKey);
  return _resend;
}

const FROM_EMAIL = "PREVENSIA <contact@prevensia-formation.fr>";
const ADMIN_EMAIL = "contact@prevensia-formation.fr";

function escapeHtml(value: string | null | undefined): string {
  return (value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

type FormationLine = {
  label: string;
  priceHT: number | null;
  priceNote: string;
  perPerson: boolean;
  qty: number;
};

type DevisPayload = {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  participants: number;
  formations: FormationLine[];
  totalHT: number;
  tvaRate: number;
  hasQuote: boolean;
  notes: string;
};

function buildFormationsTable(formations: FormationLine[]): string {
  const rows = formations
    .map((f) => {
      const puHT = f.priceHT !== null ? `${f.priceHT} €` : "Sur devis";
      const lineTotal = f.priceHT !== null ? `${f.priceHT * f.qty} €` : "Sur devis";
      return `
        <tr style="border-bottom:1px solid #e2e8f0;">
          <td style="text-align:left;padding:8px 12px;">${escapeHtml(f.label)}</td>
          <td style="text-align:right;padding:8px 12px;">${f.qty}</td>
          <td style="text-align:right;padding:8px 12px;">${puHT}</td>
          <td style="text-align:right;padding:8px 12px;">${lineTotal}</td>
        </tr>`;
    })
    .join("");

  return `
    <table style="width:100%;border-collapse:collapse;font-size:14px;margin:16px 0;">
      <thead>
        <tr style="background:#f1f5f9;">
          <th style="text-align:left;padding:8px 12px;">Formation</th>
          <th style="text-align:right;padding:8px 12px;">Qté</th>
          <th style="text-align:right;padding:8px 12px;">PU HT</th>
          <th style="text-align:right;padding:8px 12px;">Total HT</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>`;
}

export async function POST(request: Request) {
  try {
    const body: DevisPayload = await request.json();

    const {
      companyName = "",
      contactName = "",
      email = "",
      phone = "",
      participants = 1,
      formations = [],
      totalHT = 0,
      tvaRate = 20,
      hasQuote = false,
      notes = "",
    } = body;

    if (!email || formations.length === 0) {
      return NextResponse.json(
        { success: false, error: "Email et au moins une formation sont requis." },
        { status: 400 }
      );
    }

    // ── Sauvegarder le devis en base et générer le token de validation ──
    let validationToken: string | null = null;
    const admin = createAdminClient();
    if (admin) {
      const { data: devisRow } = await admin
        .from("devis")
        .insert({
          contact_name: contactName || null,
          company_name: companyName || null,
          email,
          phone: phone || null,
          participants,
          formations,
          total_ht: totalHT,
          tva_rate: tvaRate,
          has_quote: hasQuote,
          notes: notes || null,
          status: "sent",
        })
        .select("token")
        .single();
      validationToken = devisRow?.token ?? null;
    }

    const validationUrl = validationToken
      ? `${SITE_URL}/devis/valider/${validationToken}`
      : null;

    const resend = getResend();

    if (!resend) {
      console.warn("[devis/request] Email non envoyé (RESEND_API_KEY absente).", {
        email,
        companyName,
        formations: formations.map((f) => f.label),
        validationToken,
      });
      return NextResponse.json({ success: true, validationToken });
    }

    const formationsTable = buildFormationsTable(formations);

    const logoHtml = `<div style="margin-bottom:20px;"><img src="https://prevensia-formation.fr/images/logo-prevensia.png" alt="PREVENSIA FORMATION" width="220" style="display:block;" /></div>`;

    const totalLine =
      totalHT > 0
        ? `<p style="font-size:16px;font-weight:bold;margin-top:8px;">Total HT estimé : ${totalHT} €${hasQuote ? " <em style='font-size:13px;font-weight:normal;color:#d97706;'>+ prestations sur devis</em>" : ""}</p>`
        : `<p style="color:#d97706;font-style:italic;">Toutes les formations sont sur devis.</p>`;

    // --- Email admin ---
    const adminSubject = `[Devis] ${escapeHtml(companyName || contactName || email)} — ${participants} participant(s)`;

    const adminHtml = `
      ${logoHtml}
      <h2 style="color:#0f172a;">Nouvelle demande de devis</h2>
      <p><strong>Société :</strong> ${escapeHtml(companyName || "Non renseignée")}</p>
      <p><strong>Contact :</strong> ${escapeHtml(contactName || "Non renseigné")}</p>
      <p><strong>Email :</strong> ${escapeHtml(email)}</p>
      <p><strong>Téléphone :</strong> ${escapeHtml(phone || "Non renseigné")}</p>
      <p><strong>Nombre de participants :</strong> ${participants}</p>
      <h3 style="color:#0f172a;margin-top:24px;">Formations demandées</h3>
      ${formationsTable}
      ${totalLine}
      ${notes ? `<p><strong>Notes :</strong> ${escapeHtml(notes)}</p>` : ""}
      <hr style="margin:24px 0;border:none;border-top:1px solid #e2e8f0;" />
      <p style="font-size:13px;color:#64748b;">Traiter cette demande depuis le <a href="https://prevensia-formation.fr/admin/support">dashboard admin</a>.</p>
    `;

    await resend.emails.send({
      from: FROM_EMAIL,
      to: [ADMIN_EMAIL],
      subject: adminSubject,
      html: adminHtml,
    });

    // --- Email client ---
    const clientSubject = "Votre demande de devis — PREVENSIA FORMATION";

    const montantTVA = tvaRate > 0 ? Math.round(totalHT * tvaRate) / 100 : 0;
    const totalTTC   = totalHT + montantTVA;
    const tvaLine    = tvaRate > 0
      ? `<p style="margin:4px 0;font-size:13px;"><strong>TVA ${tvaRate}% :</strong> ${montantTVA.toFixed(2)} €</p>`
      : `<p style="margin:4px 0;font-size:13px;color:#64748b;font-style:italic;">TVA non applicable — art. 261-4-4° CGI</p>`;

    const validationBlock = validationUrl ? `
      <div style="margin:28px 0;background:#fef9ec;border:2px solid #f59e0b;border-radius:12px;padding:20px 24px;">
        <p style="margin:0 0 6px;font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">
          ✅ Action requise — Valider votre devis
        </p>
        <p style="margin:0 0 16px;font-size:14px;color:#1a1a1a;">
          Pour confirmer votre commande et activer les accès de vos collaborateurs, cliquez sur le bouton ci-dessous :
        </p>
        <a href="${validationUrl}"
           style="display:inline-block;background:#b91c1c;color:#fff;font-weight:700;font-size:15px;
                  padding:14px 32px;border-radius:10px;text-decoration:none;">
          Je valide ce devis →
        </a>
        <p style="margin:14px 0 0;font-size:11px;color:#64748b;">
          Ou copiez ce lien dans votre navigateur :<br/>
          <span style="word-break:break-all;">${validationUrl}</span>
        </p>
      </div>` : "";

    const clientHtml = `
      ${logoHtml}
      <p>Bonjour ${escapeHtml(contactName || "")},</p>
      <p>Nous avons bien reçu votre demande de devis pour <strong>${formations.length} formation(s)</strong>.</p>
      <h3 style="color:#0f172a;margin-top:24px;">Récapitulatif de votre devis</h3>
      ${formationsTable}
      <div style="background:#f8fafc;border-radius:8px;padding:12px 16px;margin-top:8px;">
        <p style="margin:4px 0;font-size:13px;"><strong>Total HT :</strong> ${totalHT > 0 ? `${totalHT.toFixed(2)} €` : "Sur devis"}${hasQuote ? " <em style='color:#d97706'>(+ prestations sur devis)</em>" : ""}</p>
        ${tvaLine}
        <p style="margin:8px 0 4px;font-size:14px;font-weight:700;color:#b91c1c;">Total TTC : ${totalHT > 0 ? `${totalTTC.toFixed(2)} €` : "Sur devis"}</p>
      </div>
      ${notes ? `<p style="margin-top:16px;"><strong>Notes :</strong> ${escapeHtml(notes)}</p>` : ""}
      ${validationBlock}
      <hr style="margin:24px 0;border:none;border-top:1px solid #e2e8f0;" />
      <p style="font-size:13px;color:#64748b;">
        PREVENSIA FORMATION<br />
        ${COMPANY.addressShort}<br />
        01 89 62 94 92 — contact@prevensia-formation.fr
      </p>
    `;

    await resend.emails.send({
      from: FROM_EMAIL,
      to: [email],
      subject: clientSubject,
      html: clientHtml,
    });

    // --- Insérer le lead dans le CRM ---
    if (admin) {
      const nameParts = (contactName ?? "").trim().split(" ");
      const firstName = nameParts[0] ?? "";
      const lastName = nameParts.slice(1).join(" ") || "";
      const formationInterest = formations.map((f) => f.label).join(", ");
      const score = scoreLead(formations, companyName, phone);
      const nextFollowup = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();

      await admin.from("leads").insert({
        email,
        first_name: firstName,
        last_name: lastName,
        phone: phone || null,
        company: companyName || null,
        formation_interest: formationInterest,
        source: "devis",
        status: "new",
        score,
        next_followup_at: nextFollowup,
        notes: notes || null,
        metadata: { participants, total_ht: totalHT, has_quote: hasQuote },
      });

      // Incrémenter kpi_daily
      const today = new Date().toISOString().split("T")[0];
      await admin.from("kpi_daily").upsert(
        { date: today, new_leads: 1, new_devis_requests: 1 },
        { onConflict: "date", ignoreDuplicates: false }
      );
    }

    return NextResponse.json({ success: true, validationToken });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Erreur inconnue";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
