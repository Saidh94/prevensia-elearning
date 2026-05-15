import { getStripeClient, getStripeWebhookSecret } from "@/lib/payments/stripe";
import { createAdminClient } from "@/lib/supabase/admin";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import Stripe from "stripe";

export const runtime = "nodejs";

function getResend() {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) return null;
  return new Resend(apiKey);
}

async function markEnrollmentAsPaid(session: Stripe.Checkout.Session) {
  const enrollmentId =
    session.metadata?.enrollmentId?.trim() ||
    session.client_reference_id?.trim();

  if (!enrollmentId) {
    console.warn("Stripe webhook sans enrollmentId", session.id);
    return;
  }

  const supabase = createAdminClient();

  if (!supabase) {
    throw new Error(
      "SUPABASE_SERVICE_ROLE_KEY manquante. Le webhook Stripe ne peut pas mettre a jour le paiement."
    );
  }

  // ── Mise à jour statut paiement ──────────────────────────────────────────
  const { error } = await supabase
    .from("enrollments")
    .update({ payment_status: "paid" })
    .eq("id", enrollmentId);

  if (error) {
    throw new Error(`Erreur mise a jour paiement: ${error.message}`);
  }

  // ── Récupération de la facture Stripe ────────────────────────────────────
  if (!session.invoice) return;

  try {
    const stripe = getStripeClient();
    const invoice = await stripe.invoices.retrieve(session.invoice as string);

    const invoiceUrl = invoice.hosted_invoice_url ?? null;
    const invoicePdfUrl = invoice.invoice_pdf ?? null;
    const invoiceId = invoice.id;

    // Stocker l'URL dans l'inscription
    await supabase
      .from("enrollments")
      .update({
        stripe_invoice_id: invoiceId,
        stripe_invoice_url: invoiceUrl,
        stripe_invoice_pdf: invoicePdfUrl,
      })
      .eq("id", enrollmentId);

    // Envoyer l'email avec la facture si un email est disponible
    const customerEmail = session.customer_email || session.customer_details?.email;
    const formationTitle = session.metadata?.formationTitle || "votre formation";
    const resend = getResend();

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
            <p style="font-size:13px;color:#64748b;">
              Votre facture est également disponible en permanence depuis votre espace apprenant sur
              <a href="https://prevensia-formation.fr/dashboard" style="color:#1e293b;">prevensia-formation.fr/dashboard</a>.
            </p>
            <hr style="border:none;border-top:1px solid #e2e8f0;margin:28px 0;" />
            <p style="font-size:12px;color:#94a3b8;">
              PREVENSIA FORMATION — Groupe PREVENSIA SAS<br />
              38, rue des Mathurins — 75008 Paris<br />
              Organisme certifié Qualiopi
            </p>
          </div>
        `,
      });
    }
  } catch (invoiceError) {
    // Ne pas bloquer le webhook si la récupération de facture échoue
    console.error("[Webhook] Erreur récupération facture Stripe :", invoiceError);
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

    if (event.type === "checkout.session.completed") {
      await markEnrollmentAsPaid(event.data.object);
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
