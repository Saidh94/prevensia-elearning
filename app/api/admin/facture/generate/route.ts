import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/require-admin";
import { createAdminClient } from "@/lib/supabase/admin";
import { Resend } from "resend";
import { generateFacturePdf } from "@/lib/facture/generate-facture-pdf";
import type { FactureLine } from "@/lib/facture/generate-facture-pdf";
import { COMPANY } from "@/lib/company";

export const runtime = "nodejs";

const FROM_EMAIL = "PREVENSIA <contact@prevensia-formation.fr>";

/** TVA : false = exonération Art. 261-4-4° CGI (dès que NDA PREVENSIA obtenu) */
const TVA_EXEMPT = process.env.PREVENSIA_TVA_EXEMPT === "true";
const TVA_RATE   = TVA_EXEMPT ? 0 : 20;

function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY?.trim();
  return key ? new Resend(key) : null;
}

/** Génère le prochain numéro de facture : PREV-YYYY-NNN */
async function nextNumero(admin: ReturnType<typeof createAdminClient>): Promise<string> {
  const year = new Date().getFullYear();
  const { data } = await admin!
    .from("factures")
    .select("numero")
    .like("numero", `PREV-${year}-%`)
    .order("numero", { ascending: false })
    .limit(1);

  const last = data?.[0]?.numero as string | undefined;
  const seq  = last ? parseInt(last.split("-")[2] ?? "0", 10) + 1 : 1;
  return `PREV-${year}-${String(seq).padStart(3, "0")}`;
}

export async function POST(req: Request) {
  const auth = await requireAdmin();
  if ("error" in auth) return auth.error;



  const body = await req.json() as {
    leadId?: string;
    clientName: string;
    clientEmail: string;
    clientCompany?: string;
    lines: FactureLine[];
    totalHT: number;
  };

  const { leadId, clientName, clientEmail, clientCompany, lines, totalHT } = body;

  if (!clientEmail || !lines?.length) {
    return NextResponse.json({ error: "Email client et au moins une ligne sont requis." }, { status: 400 });
  }

  const admin = createAdminClient();
  if (!admin) return NextResponse.json({ error: "Erreur DB" }, { status: 500 });

  // Numéro séquentiel
  const numero      = await nextNumero(admin);
  const dateFacture = new Date().toISOString().split("T")[0];

  // IBAN / BIC depuis env vars (ne jamais hardcoder)
  const iban = process.env.PREVENSIA_IBAN;
  const bic  = process.env.PREVENSIA_BIC;

  // Génération PDF
  const pdfBytes = await generateFacturePdf({
    numero, dateFacture,
    clientName, clientEmail, clientCompany,
    lines, totalHT,
    tvaRate: TVA_RATE,
    iban, bic,
  });

  // Sauvegarde en base
  const tvaAmount = Math.round(totalHT * TVA_RATE) / 100;
  await admin.from("factures").insert({
    lead_id:        leadId ?? null,
    numero,
    date_facture:   dateFacture,
    client_name:    clientName,
    client_email:   clientEmail,
    client_company: clientCompany ?? null,
    formations:     lines,
    total_ht:       totalHT,
    tva_rate:       TVA_RATE,
    tva_amount:     tvaAmount,
    total_ttc:      totalHT + tvaAmount,
    status:         "sent",
  });

  // Mise à jour statut lead
  if (leadId) {
    await admin.from("leads").update({ status: "converted" }).eq("id", leadId);
  }

  // Envoi email avec PDF en pièce jointe
  const resend = getResend();
  if (resend) {
    const tvaLine = TVA_EXEMPT
      ? "TVA non applicable — Art. 261-4-4° du CGI"
      : `TVA 20 % : ${tvaAmount.toFixed(2)} EUR HT — Total TTC : ${(totalHT + tvaAmount).toFixed(2)} EUR`;

    await resend.emails.send({
      from: FROM_EMAIL,
      to:   [clientEmail],
      subject: `Votre facture ${numero} — PREVENSIA FORMATION`,
      html: `
        <p>Bonjour${clientName ? ` ${clientName}` : ""},</p>
        <p>Veuillez trouver ci-joint votre facture <strong>${numero}</strong> d'un montant de <strong>${totalHT.toFixed(2)} EUR HT</strong>.</p>
        <p>${tvaLine}</p>
        <p>Règlement par virement sous 30 jours à réception.</p>
        ${iban ? `<p><strong>IBAN :</strong> ${iban}${bic ? ` — <strong>BIC :</strong> ${bic}` : ""}</p>` : ""}
        <hr />
        <p style="font-size:12px;color:#64748b;">
          ${COMPANY.name} — ${COMPANY.addressFull}<br/>
          01 89 62 94 92 — contact@prevensia-formation.fr
        </p>
      `,
      attachments: [{
        filename: `Facture-${numero}.pdf`,
        content:  Buffer.from(pdfBytes).toString("base64"),
      }],
    });
  }

  return NextResponse.json({ success: true, numero });
}
