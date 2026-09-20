import { getStripeClient, getStripeWebhookSecret } from "@/lib/payments/stripe";
import { createAdminClient } from "@/lib/supabase/admin";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import Stripe from "stripe";
import { COMPANY } from "@/lib/company";
import { getModuleContentBySlug, getModuleLabelBySlug } from "@/lib/supabase/elearning/module-registry";
import { generateConventionPdf } from "@/lib/convention/generate-convention-pdf";
import { generateProgrammePdf, buildProgrammeInputFromModuleContent } from "@/lib/programme/generate-programme-pdf";

export const runtime = "nodejs";

const TVA_EXEMPT = process.env.PREVENSIA_TVA_EXEMPT === "true";
const TVA_RATE = TVA_EXEMPT ? 0 : 20;

function getResend() {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) return null;
  return new Resend(apiKey);
}

type EnrollmentDetailsRow = {
  id: string;
  user_id: string;
  formation_id: string | null;
  company_name: string | null;
  access_start: string | null;
  access_end: string | null;
  created_at: string;
  formations: { title: string | null; slug: string | null } | { title: string | null; slug: string | null }[] | null;
};

function getSingleFormation(
  formation: EnrollmentDetailsRow["formations"]
): { title: string | null; slug: string | null } | null {
  if (!formation) return null;
  return Array.isArray(formation) ? formation[0] ?? null : formation;
}

/** Génère la convention de formation + le programme, pour joindre aux côtés de la facture. */
async function buildComplianceDocuments(
  supabase: ReturnType<typeof createAdminClient>,
  enrollmentId: string,
  invoiceTotalCents: number | null
) {
  if (!supabase) return null;

  const { data: enrollment } = await supabase
    .from("enrollments")
    .select(
      `id, user_id, formation_id, company_name, access_start, access_end, created_at, formations ( title, slug )`
    )
    .eq("id", enrollmentId)
    .maybeSingle<EnrollmentDetailsRow>();

  if (!enrollment) return null;

  const { data: profile } = await supabase
    .from("profiles")
    .select("first_name, last_name, email")
    .eq("id", enrollment.user_id)
    .maybeSingle<{ first_name: string | null; last_name: string | null; email: string | null }>();

  const formation = getSingleFormation(enrollment.formations);
  const moduleContent = formation?.slug ? getModuleContentBySlug(formation.slug) : null;
  const formationTitle =
    (formation?.slug && getModuleLabelBySlug(formation.slug)) || formation?.title || "Formation PREVENSIA";

  const learnerFullName =
    [profile?.first_name, profile?.last_name].filter(Boolean).join(" ").trim() || profile?.email || "Apprenant";
  const learnerEmail = profile?.email || "";
  const beneficiaryIsCompany = Boolean(enrollment.company_name?.trim());
  const beneficiaryName = beneficiaryIsCompany ? enrollment.company_name!.trim() : learnerFullName;

  const priceTTC = invoiceTotalCents ? invoiceTotalCents / 100 : 0;
  const priceHT = TVA_EXEMPT ? priceTTC : Math.round((priceTTC / 1.2) * 100) / 100;

  const conventionPdf = await generateConventionPdf({
    numero: `CONV-${enrollment.id.slice(0, 8).toUpperCase()}`,
    dateSignature: enrollment.created_at,
    beneficiaryName,
    beneficiaryIsCompany,
    learnerFullName,
    learnerEmail,
    formationTitle,
    durationLabel: moduleContent?.duration || "",
    deliveryFormat: moduleContent?.deliveryFormat || "",
    objective: moduleContent?.objective,
    priceHT,
    priceTTC,
    tvaRate: TVA_RATE,
    tvaExempt: TVA_EXEMPT,
    accessStart: enrollment.access_start || enrollment.created_at,
    accessEnd: enrollment.access_end,
  });

  const programmePdf = moduleContent
    ? await generateProgrammePdf(buildProgrammeInputFromModuleContent(moduleContent, formationTitle))
    : null;

  return { conventionPdf, programmePdf, formationTitle };
}

function getEnrollmentId(session: Stripe.Checkout.Session): string | null {
  return (
    session.metadata?.enrollmentId?.trim() ||
    session.client_reference_id?.trim() ||
    null
  );
}

// ── Marquer une inscription comme payée + envoyer la facture ────────────────
async function markEnrollmentPaid(session: Stripe.Checkout.Session) {
  const enrollmentId = getEnrollmentId(session);
  if (!enrollmentId) {
    console.warn("[Webhook] checkout sans enrollmentId", session.id);
    return;
  }

  const supabase = createAdminClient();
  if (!supabase) throw new Error("SUPABASE_SERVICE_ROLE_KEY manquante.");

  const { error } = await supabase
    .from("enrollments")
    .update({ payment_status: "paid" })
    .eq("id", enrollmentId);

  if (error) throw new Error(`Erreur mise à jour paiement: ${error.message}`);

  // ── Mise à jour KPI quotidien ──────────────────────────────────────────────
  try {
    const today = new Date().toISOString().split("T")[0];
    const amountHT = session.amount_total ? Math.round(session.amount_total / 100 / 1.2) : 0;
    await supabase.from("kpi_daily").upsert(
      { date: today, new_enrollments: 1, revenue_stripe: amountHT },
      { onConflict: "date", ignoreDuplicates: false }
    );
  } catch (kpiErr) {
    console.error("[Webhook] Erreur mise à jour KPI :", kpiErr);
  }

  // ── Facture Stripe ─────────────────────────────────────────────────────────
  if (!session.invoice) return;

  try {
    const stripe = getStripeClient();
    const invoice = await stripe.invoices.retrieve(session.invoice as string);
    const invoiceUrl = invoice.hosted_invoice_url ?? null;
    const invoicePdfUrl = invoice.invoice_pdf ?? null;

    await supabase
      .from("enrollments")
      .update({
        stripe_invoice_id: invoice.id,
        stripe_invoice_url: invoiceUrl,
        stripe_invoice_pdf: invoicePdfUrl,
      })
      .eq("id", enrollmentId);

    const customerEmail =
      session.customer_email || session.customer_details?.email;
    const formationTitle = session.metadata?.formationTitle || "votre formation";
    const resend = getResend();

    // ── Convention de formation + programme (obligations Code du travail) ────
    const attachments: { filename: string; content: string }[] = [];
    try {
      const adminForDocs = createAdminClient();
      const docs = await buildComplianceDocuments(
        adminForDocs,
        enrollmentId,
        invoice.total ?? session.amount_total ?? null
      );
      if (docs) {
        if (docs.conventionPdf) {
          attachments.push({
            filename: `Convention-de-formation.pdf`,
            content: Buffer.from(docs.conventionPdf).toString("base64"),
          });
        }
        if (docs.programmePdf) {
          attachments.push({
            filename: `Programme-de-formation.pdf`,
            content: Buffer.from(docs.programmePdf).toString("base64"),
          });
        }
      }
    } catch (docErr) {
      console.error("[Webhook] Erreur generation convention/programme :", docErr);
    }

    if (resend && customerEmail && invoiceUrl) {
      await resend.emails.send({
        from: "PREVENSIA <contact@prevensia-formation.fr>",
        to: [customerEmail],
        subject: `Votre facture — ${formationTitle}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
            <div style="margin-bottom:24px;">
              <img src="https://prevensia-formation.fr/images/logo-prevensia.png" alt="PREVENSIA FORMATION" width="200" style="display:block;" />
            </div>
            <h2 style="color:#1e293b;">Votre paiement a bien été reçu</h2>
            <p>Bonjour,</p>
            <p>Nous confirmons la réception de votre paiement pour :</p>
            <p style="font-size:16px;font-weight:bold;color:#1e293b;">${formationTitle}</p>
            <p>Vous pouvez consulter et télécharger votre facture en cliquant sur le bouton ci-dessous :</p>
            <p style="margin:28px 0;">
              <a href="${invoiceUrl}" target="_blank" rel="noopener"
                style="display:inline-block;background:#1e293b;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;">
                Télécharger ma facture
              </a>
            </p>
            ${attachments.length ? `<p style="font-size:13px;color:#64748b;">Votre convention de formation et le programme détaillé sont joints à cet e-mail au format PDF.</p>` : ""}
            <p style="font-size:13px;color:#64748b;">
              Ces documents sont également disponibles en permanence depuis votre espace apprenant sur
              <a href="https://prevensia-formation.fr/dashboard" style="color:#1e293b;">prevensia-formation.fr/dashboard</a>.
            </p>
            <hr style="border:none;border-top:1px solid #e2e8f0;margin:28px 0;" />
            <p style="font-size:12px;color:#94a3b8;">
              PREVENSIA FORMATION — Groupe PREVENSIA SAS<br />
              ${COMPANY.addressShort}<br />
            </p>
          </div>
        `,
        attachments: attachments.length ? attachments : undefined,
      });
    }
  } catch (err) {
    console.error("[Webhook] Erreur récupération facture Stripe :", err);
  }
}

// ── Marquer une inscription comme "paiement en attente" ─────────────────────
async function markEnrollmentPending(session: Stripe.Checkout.Session) {
  const enrollmentId = getEnrollmentId(session);
  if (!enrollmentId) {
    console.warn("[Webhook] checkout sans enrollmentId (pending)", session.id);
    return;
  }

  const supabase = createAdminClient();
  if (!supabase) throw new Error("SUPABASE_SERVICE_ROLE_KEY manquante.");

  const { error } = await supabase
    .from("enrollments")
    .update({ payment_status: "pending" })
    .eq("id", enrollmentId);

  if (error) throw new Error(`Erreur mise à jour paiement pending: ${error.message}`);

  // ── Email d'information à l'apprenant ─────────────────────────────────────
  const customerEmail =
    session.customer_email || session.customer_details?.email;
  const formationTitle = session.metadata?.formationTitle || "votre formation";
  const resend = getResend();

  if (resend && customerEmail) {
    try {
      await resend.emails.send({
        from: "PREVENSIA <contact@prevensia-formation.fr>",
        to: [customerEmail],
        subject: `Paiement en cours de traitement — ${formationTitle}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
            <div style="margin-bottom:24px;">
              <img src="https://prevensia-formation.fr/images/logo-prevensia.png" alt="PREVENSIA FORMATION" width="200" style="display:block;" />
            </div>
            <h2 style="color:#1e293b;">Votre paiement est en cours de traitement</h2>
            <p>Bonjour,</p>
            <p>Nous avons bien reçu votre demande de paiement par prélèvement SEPA ou virement bancaire pour :</p>
            <p style="font-size:16px;font-weight:bold;color:#1e293b;">${formationTitle}</p>
            <p>Ce mode de paiement nécessite un délai de traitement bancaire de <strong>2 à 6 jours ouvrés</strong>.</p>
            <p>Votre accès à la formation sera activé automatiquement dès que le paiement sera confirmé par votre banque. Vous recevrez un e-mail de confirmation à ce moment-là.</p>
            <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:16px;margin:24px 0;">
              <p style="margin:0;font-size:13px;color:#475569;">
                💡 <strong>Besoin d'aide ?</strong> Contactez-nous à
                <a href="mailto:contact@prevensia-formation.fr" style="color:#1e293b;">contact@prevensia-formation.fr</a>
              </p>
            </div>
            <hr style="border:none;border-top:1px solid #e2e8f0;margin:28px 0;" />
            <p style="font-size:12px;color:#94a3b8;">
              PREVENSIA FORMATION — Groupe PREVENSIA SAS<br />
              ${COMPANY.addressShort}<br />
            </p>
          </div>
        `,
      });
    } catch (err) {
      console.error("[Webhook] Erreur envoi email pending :", err);
    }
  }
}

// ── Marquer une inscription comme "paiement échoué" ─────────────────────────
async function markEnrollmentFailed(session: Stripe.Checkout.Session) {
  const enrollmentId = getEnrollmentId(session);
  if (!enrollmentId) return;

  const supabase = createAdminClient();
  if (!supabase) throw new Error("SUPABASE_SERVICE_ROLE_KEY manquante.");

  await supabase
    .from("enrollments")
    .update({ payment_status: "failed" })
    .eq("id", enrollmentId);

  // ── Email d'information échec ──────────────────────────────────────────────
  const customerEmail =
    session.customer_email || session.customer_details?.email;
  const formationTitle = session.metadata?.formationTitle || "votre formation";
  const resend = getResend();

  if (resend && customerEmail) {
    try {
      await resend.emails.send({
        from: "PREVENSIA <contact@prevensia-formation.fr>",
        to: [customerEmail],
        subject: `Échec du paiement — ${formationTitle}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
            <div style="margin-bottom:24px;">
              <img src="https://prevensia-formation.fr/images/logo-prevensia.png" alt="PREVENSIA FORMATION" width="200" style="display:block;" />
            </div>
            <h2 style="color:#dc2626;">Votre paiement n'a pas pu être traité</h2>
            <p>Bonjour,</p>
            <p>Malheureusement, votre paiement par prélèvement SEPA pour <strong>${formationTitle}</strong> a été rejeté par votre banque.</p>
            <p>Pour régulariser votre inscription, veuillez nous contacter :</p>
            <p style="margin:28px 0;">
              <a href="mailto:contact@prevensia-formation.fr"
                style="display:inline-block;background:#1e293b;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;">
                Contacter PREVENSIA
              </a>
            </p>
            <hr style="border:none;border-top:1px solid #e2e8f0;margin:28px 0;" />
            <p style="font-size:12px;color:#94a3b8;">
              PREVENSIA FORMATION — Groupe PREVENSIA SAS<br />
              ${COMPANY.addressShort}<br />
            </p>
          </div>
        `,
      });
    } catch (err) {
      console.error("[Webhook] Erreur envoi email failed :", err);
    }
  }
}

export async function POST(request: Request) {
  try {
    const stripe = getStripeClient();
    const webhookSecret = getStripeWebhookSecret();
    const signature = request.headers.get("stripe-signature");

    if (!signature) {
      return NextResponse.json(
        { error: "Signature Stripe manquante" },
        { status: 400 }
      );
    }

    const payload = await request.text();
    const event = stripe.webhooks.constructEvent(
      payload,
      signature,
      webhookSecret
    );

    const session = event.data.object as Stripe.Checkout.Session;

    switch (event.type) {
      // ── Paiement immédiat (carte bancaire) ──────────────────────────────────
      // ── OU confirmation que la session est complétée (sans paiement encore) ─
      case "checkout.session.completed":
        if (session.payment_status === "paid") {
          // Carte : paiement immédiatement confirmé
          await markEnrollmentPaid(session);
        } else {
          // SEPA / virement : paiement initié mais pas encore encaissé
          await markEnrollmentPending(session);
        }
        break;

      // ── Paiement asynchrone confirmé (SEPA, virement) ─────────────────────
      case "checkout.session.async_payment_succeeded":
        await markEnrollmentPaid(session);
        break;

      // ── Paiement asynchrone rejeté (ex. rejet SEPA) ───────────────────────
      case "checkout.session.async_payment_failed":
        await markEnrollmentFailed(session);
        break;

      default:
        // Événement non géré — ignorer silencieusement
        break;
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Erreur webhook Stripe :", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Webhook Stripe invalide",
      },
      { status: 400 }
    );
  }
}
