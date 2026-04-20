import { getStripeClient, getStripeWebhookSecret } from "@/lib/payments/stripe";
import { createAdminClient } from "@/lib/supabase/admin";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

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

  const { error } = await supabase
    .from("enrollments")
    .update({ payment_status: "paid" })
    .eq("id", enrollmentId);

  if (error) {
    throw new Error(`Erreur mise a jour paiement: ${error.message}`);
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
