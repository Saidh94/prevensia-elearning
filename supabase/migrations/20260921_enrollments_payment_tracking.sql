-- ============================================================
-- Suivi du règlement B2B (devis → facture → virement SEPA)
--
-- Jusqu'ici enrollments.payment_status ne distinguait pas un paiement
-- carte Stripe (particulier) d'un règlement par virement bancaire
-- (entreprise, suivi manuellement par l'équipe PREVENSIA après
-- réception du virement). Ces colonnes permettent de tracer QUI a
-- marqué le paiement comme reçu, QUAND, PAR QUEL MOYEN, et avec QUELLE
-- référence (n° de virement / facture) — sans jamais transiter par le
-- flux Stripe pour les entreprises.
-- À exécuter dans l'éditeur SQL Supabase.
-- ============================================================

ALTER TABLE public.enrollments
  ADD COLUMN IF NOT EXISTS payment_method TEXT
    CHECK (payment_method IS NULL OR payment_method IN ('card', 'bank_transfer'));

ALTER TABLE public.enrollments
  ADD COLUMN IF NOT EXISTS paid_at TIMESTAMPTZ;

ALTER TABLE public.enrollments
  ADD COLUMN IF NOT EXISTS paid_by_admin UUID REFERENCES auth.users(id) ON DELETE SET NULL;

ALTER TABLE public.enrollments
  ADD COLUMN IF NOT EXISTS payment_reference TEXT;

COMMENT ON COLUMN public.enrollments.payment_method IS
  'Moyen de règlement effectif : "card" (Stripe, particulier) ou "bank_transfer" (virement SEPA suite facture, entreprise — marqué manuellement par un admin).';

COMMENT ON COLUMN public.enrollments.paid_at IS
  'Date à laquelle le paiement a été confirmé (webhook Stripe, ou saisie manuelle admin pour un virement reçu).';

COMMENT ON COLUMN public.enrollments.paid_by_admin IS
  'Admin ayant constaté manuellement la réception d''un virement et marqué l''inscription comme payée (NULL si confirmé automatiquement par Stripe).';

COMMENT ON COLUMN public.enrollments.payment_reference IS
  'Référence libre du règlement (n° de virement, n° de facture...) saisie par l''admin lors de la validation manuelle.';
