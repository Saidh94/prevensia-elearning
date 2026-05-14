-- Migration : ajout de la formation Recyclage SSIAP1
-- Date : 2026-05-15

INSERT INTO public.formations (
  slug,
  title,
  description,
  duration_hours,
  elearning_duration,
  mode
)
VALUES (
  'recyclage-ssiap1',
  'Recyclage SSIAP1 — Remise à niveau Sécurité Incendie ERP',
  'Formation de recyclage obligatoire SSIAP1, 14 heures tous les 3 ans (arrêté du 2 mai 2005 modifié). Révision des fondamentaux incendie, évolutions réglementaires, SSI approfondi, spécificités IGH, gestion des travaux et cas pratiques. Format hybride : e-learning théorique (~3h) + présentiel pratique (~11h). Eligible OPCO. Organisme certifié Qualiopi.',
  14,
  '2 h 30 à 3 h',
  'hybride'
)
ON CONFLICT (slug) DO UPDATE SET
  title             = EXCLUDED.title,
  description       = EXCLUDED.description,
  duration_hours    = EXCLUDED.duration_hours,
  elearning_duration = EXCLUDED.elearning_duration,
  mode              = EXCLUDED.mode;
