-- ============================================================
-- Admin Audit Logs
-- Trace toutes les actions sensibles réalisées par les admins
-- ============================================================

CREATE TABLE IF NOT EXISTS admin_audit_logs (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at    timestamptz NOT NULL DEFAULT now(),
  admin_id      uuid NOT NULL REFERENCES auth.users(id) ON DELETE SET NULL,
  action        text NOT NULL,           -- 'payment_confirmed', 'access_activated', 'enrollment_validated', 'attestation_forced'
  target_type   text NOT NULL,           -- 'enrollment', 'session', 'user'
  target_id     text NOT NULL,           -- ID de l'objet ciblé
  metadata      jsonb DEFAULT '{}',      -- données supplémentaires (motif, note, etc.)
  ip_address    text                     -- optionnel
);

-- Index courants
CREATE INDEX IF NOT EXISTS idx_audit_logs_admin   ON admin_audit_logs (admin_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_action  ON admin_audit_logs (action);
CREATE INDEX IF NOT EXISTS idx_audit_logs_created ON admin_audit_logs (created_at DESC);

-- RLS : seuls les admins peuvent lire les logs, personne ne peut les modifier/supprimer via API
ALTER TABLE admin_audit_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "admins can read audit logs"
  ON admin_audit_logs FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
    )
  );

-- Les insertions se font côté serveur (service_role via API routes), pas depuis le client
-- Pas de policy INSERT pour les rôles normaux = seul le service_role peut insérer
