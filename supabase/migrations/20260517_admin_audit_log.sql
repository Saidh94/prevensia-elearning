-- Migration : table admin_audit_log + colonne forced_by_admin sur enrollments
-- Points 1 & 2 de l'audit Codex dashboard admin
-- À exécuter dans l'éditeur SQL Supabase (Dashboard > SQL Editor > New query)

-- ── 1. Colonne forced_by_admin sur enrollments ──────────────────────────────
-- Indique que le statut "completed" a été forcé manuellement par un admin
-- (différent d'une complétion normale par l'apprenant)
ALTER TABLE public.enrollments
  ADD COLUMN IF NOT EXISTS forced_by_admin BOOLEAN DEFAULT FALSE;

-- ── 2. Table admin_audit_log ─────────────────────────────────────────────────
-- Traçabilité de toutes les actions admin sensibles (force attestation, etc.)
CREATE TABLE IF NOT EXISTS public.admin_audit_log (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  action       TEXT NOT NULL,                    -- 'force_attestation' | 'block_user' | etc.
  admin_id     UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  target_id    TEXT,                             -- enrollment_id, user_id, etc.
  target_type  TEXT,                             -- 'enrollment' | 'user' | etc.
  reason       TEXT,                             -- motif saisi par l'admin
  metadata     JSONB DEFAULT '{}'::jsonb,        -- infos supplémentaires libres
  created_at   TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Index sur admin_id pour filtrer par admin
CREATE INDEX IF NOT EXISTS admin_audit_log_admin_id_idx
  ON public.admin_audit_log (admin_id);

-- Index sur action + created_at pour les rapports chronologiques
CREATE INDEX IF NOT EXISTS admin_audit_log_action_created_idx
  ON public.admin_audit_log (action, created_at DESC);

-- Index sur target_id pour retrouver toutes les actions sur un enrollment/user
CREATE INDEX IF NOT EXISTS admin_audit_log_target_id_idx
  ON public.admin_audit_log (target_id)
  WHERE target_id IS NOT NULL;

-- ── 3. RLS : seuls les admins peuvent lire/écrire admin_audit_log ────────────
ALTER TABLE public.admin_audit_log ENABLE ROW LEVEL SECURITY;

-- Lecture : admin authentifié seulement
CREATE POLICY "admin_audit_log_select"
  ON public.admin_audit_log
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid()
        AND profiles.role = 'admin'
    )
  );

-- Insertion : admin seulement (via API route server-side avec service_role)
CREATE POLICY "admin_audit_log_insert"
  ON public.admin_audit_log
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid()
        AND profiles.role = 'admin'
    )
  );

-- ── 4. Grants pour le service_role (utilisé par createAdminClient) ───────────
GRANT SELECT, INSERT ON public.admin_audit_log TO service_role;
GRANT SELECT, UPDATE ON public.enrollments TO service_role;
