import "server-only";
import Stripe from "stripe";

let stripeClient: Stripe | null = null;

export function getStripeClient() {
  const apiKey = process.env.STRIPE_SECRET_KEY?.trim();

  if (!apiKey) {
    throw new Error(
      "STRIPE_SECRET_KEY manquante. Configure la cle Stripe dans .env.local."
    );
  }

  if (!stripeClient) {
    stripeClient = new Stripe(apiKey, {
      apiVersion: "2026-03-25.dahlia",
    });
  }

  return stripeClient;
}

export function getStripeWebhookSecret() {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET?.trim();

  if (!webhookSecret) {
    throw new Error(
      "STRIPE_WEBHOOK_SECRET manquante. Configure le secret du webhook Stripe dans .env.local."
    );
  }

  return webhookSecret;
}
