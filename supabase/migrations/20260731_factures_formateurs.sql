-- ============================================================
-- Factures des formateurs sous-traitants
-- ============================================================

CREATE TABLE IF NOT EXISTS public.factures_formateurs (
  id            uuid          PRIMARY KEY DEFAULT gen_random_uuid(),
  formateur_id  uuid          NOT NULL REFERENCES public.formateurs(id) ON DELETE CASCADE,
  session_id    uuid          REFERENCES public.virtual_sessions(id) ON DELETE SET NULL,

  -- Infos facture
  numero        text,                          -- numéro de facture saisi par le formateur
  montant_ht    numeric(10,2) NOT NULL,
  tva_rate      int           NOT NULL DEFAULT 0, -- franchise TVA par défaut
  periode       text          NOT NULL,           -- ex : "Juillet 2026"
  description   text,

  -- Fichier PDF
  fichier_url   text,
  fichier_nom   text,

  -- Statut
  statut        text          NOT NULL DEFAULT 'en_attente'
                              CHECK (statut IN ('en_attente','validee','payee','rejetee')),
  note_admin    text,
  paid_at       timestamptz,

  created_at    timestamptz   NOT NULL DEFAULT now(),
  updated_at    timestamptz   NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS ff_formateur_idx ON public.factures_formateurs(formateur_id);
CREATE INDEX IF NOT EXISTS ff_statut_idx    ON public.factures_formateurs(statut);
CREATE INDEX IF NOT EXISTS ff_session_idx   ON public.factures_formateurs(session_id);

-- ── RLS ──────────────────────────────────────────────────────
ALTER TABLE public.factures_formateurs ENABLE ROW LEVEL SECURITY;

-- Formateur : voit uniquement ses propres factures
CREATE POLICY "ff_formateur_select"
  ON public.factures_formateurs FOR SELECT
  TO authenticated
  USING (
    formateur_id IN (SELECT id FROM public.formateurs WHERE user_id = auth.uid())
    OR EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- Formateur : peut déposer ses propres factures
CREATE POLICY "ff_formateur_insert"
  ON public.factures_formateurs FOR INSERT
  TO authenticated
  WITH CHECK (
    formateur_id IN (SELECT id FROM public.formateurs WHERE user_id = auth.uid())
  );

-- Grants
GRANT SELECT, INSERT ON public.factures_formateurs TO authenticated;
