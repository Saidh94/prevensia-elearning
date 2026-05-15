-- ─── Support Tickets ──────────────────────────────────────────────────────────
-- Table pour les demandes de support client (page /aide)

CREATE TABLE IF NOT EXISTS support_tickets (
  id           UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email   TEXT        NOT NULL,
  user_name    TEXT,
  issue_type   TEXT        NOT NULL,
  message      TEXT,
  status       TEXT        NOT NULL DEFAULT 'open'
                           CHECK (status IN ('open', 'in_progress', 'resolved')),
  admin_note   TEXT,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE support_tickets ENABLE ROW LEVEL SECURITY;

-- Tout le monde peut créer un ticket (formulaire public)
CREATE POLICY "insert_ticket" ON support_tickets
  FOR INSERT TO anon, authenticated WITH CHECK (true);

-- Seul service_role peut lire / modifier (admin dashboard)
GRANT ALL ON support_tickets TO service_role;
GRANT INSERT ON support_tickets TO anon, authenticated;
