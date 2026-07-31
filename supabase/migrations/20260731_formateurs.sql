-- ============================================================
-- Système formateurs indépendants PREVENSIA
-- ============================================================

-- Table des formateurs
CREATE TABLE IF NOT EXISTS public.formateurs (
  id            uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  prenom        text        NOT NULL,
  nom           text        NOT NULL,
  email         text        NOT NULL UNIQUE,
  phone         text,
  specialites   text[]      NOT NULL DEFAULT '{}',
  bio           text,
  actif         boolean     NOT NULL DEFAULT true,
  user_id       uuid        REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at    timestamptz NOT NULL DEFAULT now(),
  updated_at    timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS formateurs_email_idx  ON public.formateurs(email);
CREATE INDEX IF NOT EXISTS formateurs_user_idx   ON public.formateurs(user_id);
CREATE INDEX IF NOT EXISTS formateurs_actif_idx  ON public.formateurs(actif);

-- Ajouter formateur_id sur virtual_sessions
ALTER TABLE public.virtual_sessions
  ADD COLUMN IF NOT EXISTS formateur_id uuid REFERENCES public.formateurs(id) ON DELETE SET NULL;

CREATE INDEX IF NOT EXISTS vs_formateur_idx ON public.virtual_sessions(formateur_id);

-- Table des présences (qui était présent à quelle session)
CREATE TABLE IF NOT EXISTS public.session_presences (
  id              uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id      uuid        NOT NULL REFERENCES public.virtual_sessions(id) ON DELETE CASCADE,
  user_id         uuid        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  enrollment_id   uuid        REFERENCES public.enrollments(id) ON DELETE SET NULL,
  present         boolean     NOT NULL DEFAULT true,
  validated_by    uuid        REFERENCES public.formateurs(id) ON DELETE SET NULL,
  validated_at    timestamptz,
  created_at      timestamptz NOT NULL DEFAULT now(),
  UNIQUE(session_id, user_id)
);

CREATE INDEX IF NOT EXISTS sp_session_idx    ON public.session_presences(session_id);
CREATE INDEX IF NOT EXISTS sp_user_idx       ON public.session_presences(user_id);
CREATE INDEX IF NOT EXISTS sp_enrollment_idx ON public.session_presences(enrollment_id);

-- RLS formateurs
ALTER TABLE public.formateurs ENABLE ROW LEVEL SECURITY;

-- Lecture : admin + le formateur lui-même
CREATE POLICY "formateurs_read"
  ON public.formateurs FOR SELECT
  TO authenticated
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role IN ('admin','formateur'))
    OR user_id = auth.uid()
  );

-- Écriture : admin uniquement (service role depuis les API routes)

-- RLS session_presences
ALTER TABLE public.session_presences ENABLE ROW LEVEL SECURITY;

CREATE POLICY "sp_read_admin_formateur"
  ON public.session_presences FOR SELECT
  TO authenticated
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role IN ('admin','formateur'))
    OR user_id = auth.uid()
  );

-- Grants
GRANT SELECT ON public.formateurs        TO authenticated;
GRANT SELECT ON public.session_presences TO authenticated;
GRANT SELECT ON public.formateurs        TO anon;
