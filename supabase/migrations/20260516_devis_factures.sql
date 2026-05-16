-- ─────────────────────────────────────────────────────────────────────────────
-- Migration : tables devis et factures (outils admin PDF)
-- À exécuter dans Supabase Dashboard > SQL Editor
-- ─────────────────────────────────────────────────────────────────────────────


-- ══════════════════════════════════════════════════════════════════════════════
-- TABLE : devis
-- ══════════════════════════════════════════════════════════════════════════════
CREATE TABLE IF NOT EXISTS public.devis (
  id               UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  numero           TEXT        NOT NULL UNIQUE,
  client_name      TEXT        NOT NULL,
  client_email     TEXT        NOT NULL,
  client_company   TEXT,
  formation_label  TEXT        NOT NULL,
  montant_ht       NUMERIC(10,2) NOT NULL,
  tva_rate         NUMERIC(5,2) NOT NULL DEFAULT 0,
  montant_ttc      NUMERIC(10,2) NOT NULL,
  validite_jours   INTEGER     NOT NULL DEFAULT 30,
  notes            TEXT,
  statut           TEXT        NOT NULL DEFAULT 'envoye',
  created_by       UUID        REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at       TIMESTAMPTZ DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE
  ON public.devis
  TO service_role;

ALTER TABLE public.devis ENABLE ROW LEVEL SECURITY;

-- Seul le service_role (admin) accède à cette table
CREATE POLICY "service_role_all_devis"
  ON public.devis
  FOR ALL
  USING (true)
  WITH CHECK (true);


-- ══════════════════════════════════════════════════════════════════════════════
-- TABLE : factures
-- ══════════════════════════════════════════════════════════════════════════════
CREATE TABLE IF NOT EXISTS public.factures (
  id               UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  numero           TEXT        NOT NULL UNIQUE,
  client_name      TEXT        NOT NULL,
  client_email     TEXT        NOT NULL,
  client_company   TEXT,
  formation_label  TEXT        NOT NULL,
  montant_ht       NUMERIC(10,2) NOT NULL,
  tva_rate         NUMERIC(5,2) NOT NULL DEFAULT 0,
  montant_ttc      NUMERIC(10,2) NOT NULL,
  enrollment_id    UUID        REFERENCES public.enrollments(id) ON DELETE SET NULL,
  notes            TEXT,
  statut           TEXT        NOT NULL DEFAULT 'emise',
  created_by       UUID        REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at       TIMESTAMPTZ DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE
  ON public.factures
  TO service_role;

ALTER TABLE public.factures ENABLE ROW LEVEL SECURITY;

-- Seul le service_role (admin) accède à cette table
CREATE POLICY "service_role_all_factures"
  ON public.factures
  FOR ALL
  USING (true)
  WITH CHECK (true);
