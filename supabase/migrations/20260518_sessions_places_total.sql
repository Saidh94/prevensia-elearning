-- Ajoute la colonne places_total à la table sessions
-- Permet de définir explicitement la capacité au lieu de la déduire du titre
ALTER TABLE sessions ADD COLUMN IF NOT EXISTS places_total integer;

-- Index pour les requêtes de capacité
CREATE INDEX IF NOT EXISTS idx_sessions_places_total ON sessions(places_total);

COMMENT ON COLUMN sessions.places_total IS 'Capacité max de la session. Si NULL, déduite du titre via getMaxPlaces() côté API.';
