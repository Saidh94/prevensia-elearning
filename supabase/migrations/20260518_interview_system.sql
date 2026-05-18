-- ============================================================
-- Système de réservation d'entretiens de validation PREVENSIA
-- Remplace l'intégration Calendly
-- ============================================================

-- Table des créneaux disponibles (créés par l'admin)
CREATE TABLE IF NOT EXISTS interview_slots (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  date            date NOT NULL,
  start_time      time NOT NULL,
  end_time        time NOT NULL,
  formation_type  text NOT NULL CHECK (formation_type IN ('h0b0', 'atex', 'both')),
  max_participants int NOT NULL DEFAULT 1 CHECK (max_participants >= 1 AND max_participants <= 20),
  notes           text,
  created_at      timestamptz DEFAULT now()
);

-- Table des réservations (créées par les apprenants)
CREATE TABLE IF NOT EXISTS interview_bookings (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slot_id         uuid NOT NULL REFERENCES interview_slots(id) ON DELETE CASCADE,
  enrollment_id   uuid REFERENCES enrollments(id) ON DELETE SET NULL,
  user_id         uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  zoom_meeting_id text,
  zoom_join_url   text,
  zoom_start_url  text,
  status          text NOT NULL DEFAULT 'confirmed' CHECK (status IN ('confirmed', 'cancelled')),
  created_at      timestamptz DEFAULT now()
);

-- Index pour les requêtes fréquentes
CREATE INDEX IF NOT EXISTS idx_interview_slots_date ON interview_slots(date);
CREATE INDEX IF NOT EXISTS idx_interview_bookings_slot ON interview_bookings(slot_id);
CREATE INDEX IF NOT EXISTS idx_interview_bookings_enrollment ON interview_bookings(enrollment_id);
CREATE INDEX IF NOT EXISTS idx_interview_bookings_user ON interview_bookings(user_id);
CREATE INDEX IF NOT EXISTS idx_interview_bookings_status ON interview_bookings(status);

-- RLS (Row Level Security)
ALTER TABLE interview_slots ENABLE ROW LEVEL SECURITY;
ALTER TABLE interview_bookings ENABLE ROW LEVEL SECURITY;

-- Politique interview_slots : lecture publique pour les utilisateurs authentifiés
CREATE POLICY "Authenticated users can read slots"
  ON interview_slots FOR SELECT
  TO authenticated
  USING (true);

-- Politique interview_slots : écriture/suppression réservées aux admins
CREATE POLICY "Admins can manage slots"
  ON interview_slots FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
        AND profiles.role = 'admin'
    )
  );

-- Politique interview_bookings : un apprenant voit uniquement ses réservations
CREATE POLICY "Users can read own bookings"
  ON interview_bookings FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

-- Politique interview_bookings : un apprenant peut créer une réservation
CREATE POLICY "Users can insert own bookings"
  ON interview_bookings FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

-- Politique interview_bookings : un apprenant peut annuler (UPDATE status) sa réservation
CREATE POLICY "Users can update own bookings"
  ON interview_bookings FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid());

-- Politique interview_bookings : les admins voient tout
CREATE POLICY "Admins can read all bookings"
  ON interview_bookings FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
        AND profiles.role = 'admin'
    )
  );

-- Politique interview_bookings : les admins peuvent tout modifier
CREATE POLICY "Admins can manage all bookings"
  ON interview_bookings FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
        AND profiles.role = 'admin'
    )
  );
