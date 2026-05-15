-- Migration : ajout des colonnes facture Stripe sur la table enrollments
-- À exécuter dans Supabase Dashboard > SQL Editor

ALTER TABLE enrollments
  ADD COLUMN IF NOT EXISTS stripe_invoice_id   TEXT,
  ADD COLUMN IF NOT EXISTS stripe_invoice_url  TEXT,
  ADD COLUMN IF NOT EXISTS stripe_invoice_pdf  TEXT;
