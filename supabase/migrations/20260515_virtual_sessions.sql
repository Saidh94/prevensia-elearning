-- Table : classes virtuelles, entretiens et sessions encadrées PREVENSIA
-- Remplace le stockage localStorage côté admin/calendrier

CREATE TABLE IF NOT EXISTS virtual_sessions (
  id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  formation     TEXT        NOT NULL,
  date          DATE        NOT NULL,
  start_time    TEXT        NOT NULL,   -- HH:mm
  end_time      TEXT        NOT NULL,   -- HH:mm
  location      TEXT        NOT NULL,
  seats         INTEGER     NOT NULL DEFAULT 1,
  format        TEXT        NOT NULL DEFAULT 'in_person', -- 'virtual' | 'onsite' | 'in_person'
  audience      TEXT        NOT NULL DEFAULT 'both',      -- 'individual' | 'group' | 'both'
  category      TEXT        NOT NULL DEFAULT 'other',
  -- 'h0b0_validation' | 'bsbe_initial' | 'bsbe_recyclage'
  -- 'b1b2brbc_initial' | 'b1b2brbc_recyclage' | 'other'
  min_participants INTEGER  NOT NULL DEFAULT 1,
  note          TEXT,
  meeting_url   TEXT,                   -- lien Zoom / Teams pour les classes virtuelles
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Index pour les requêtes triées par date
CREATE INDEX IF NOT EXISTS virtual_sessions_date_idx
  ON virtual_sessions (date ASC, start_time ASC);

-- RLS
ALTER TABLE virtual_sessions ENABLE ROW LEVEL SECURITY;

-- Lecture publique (tout le monde peut voir les créneaux)
CREATE POLICY "public_read_virtual_sessions"
  ON virtual_sessions
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Écriture réservée à la service role key (API admin utilise createAdminClient)
-- Les routes POST et DELETE vérifient elles-mêmes le rôle admin avant d'appeler adminClient
