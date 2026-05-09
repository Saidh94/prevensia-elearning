-- Migration : table quiz_attempts
-- Enregistre chaque tentative de quiz (score global + résultat par question)
-- À exécuter dans l'éditeur SQL Supabase ou via supabase db push

CREATE TABLE IF NOT EXISTS public.quiz_attempts (
  id              UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id         UUID        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  enrollment_id   UUID        REFERENCES public.enrollments(id) ON DELETE SET NULL,
  formation_slug  TEXT        NOT NULL,
  score           INTEGER     NOT NULL CHECK (score >= 0),
  total           INTEGER     NOT NULL CHECK (total > 0),
  passing_score   INTEGER     NOT NULL CHECK (passing_score >= 0),
  passed          BOOLEAN     NOT NULL,
  score_percent   INTEGER     NOT NULL CHECK (score_percent >= 0 AND score_percent <= 100),
  -- Tableau JSON allégé : [{"q": "extrait question", "correct": true/false}]
  question_results JSONB      NOT NULL DEFAULT '[]'::jsonb,
  attempted_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index pour requêtes fréquentes
CREATE INDEX IF NOT EXISTS quiz_attempts_user_id_idx
  ON public.quiz_attempts (user_id);

CREATE INDEX IF NOT EXISTS quiz_attempts_formation_slug_idx
  ON public.quiz_attempts (formation_slug);

CREATE INDEX IF NOT EXISTS quiz_attempts_attempted_at_idx
  ON public.quiz_attempts (attempted_at DESC);

-- RLS activé
ALTER TABLE public.quiz_attempts ENABLE ROW LEVEL SECURITY;

-- Un utilisateur peut insérer ses propres tentatives
CREATE POLICY "quiz_attempts_insert_own"
  ON public.quiz_attempts
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Un utilisateur peut lire ses propres tentatives
CREATE POLICY "quiz_attempts_select_own"
  ON public.quiz_attempts
  FOR SELECT
  USING (auth.uid() = user_id);

-- Les admins peuvent tout lire (basé sur la table profiles)
CREATE POLICY "quiz_attempts_select_admin"
  ON public.quiz_attempts
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid()
        AND profiles.role = 'admin'
    )
  );
