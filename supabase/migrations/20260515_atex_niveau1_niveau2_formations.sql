-- Migration : ajout des formations ATEX Niveau 0, Niveau 1 et Niveau 2
-- À exécuter dans l'éditeur SQL Supabase ou via supabase db push
-- Date : 2026-05-15

-- ATEX Niveau 0 — Sensibilisation (e-learning autonome)
INSERT INTO public.formations (slug, title, description, duration_hours, elearning_duration, mode)
VALUES (
  'atex',
  'Formation ATEX Niveau 0 — Sensibilisation aux atmosphères explosives',
  'Parcours e-learning de sensibilisation au risque ATEX pour tout personnel circulant ou travaillant à proximité de zones classées. Couvre le mécanisme de l''explosion, le zonage, les sources d''inflammation, les EPI et la conduite à tenir. Quiz et attestation inclus.',
  3,
  '3 h',
  'e-learning'
)
ON CONFLICT (slug) DO UPDATE SET
  title           = EXCLUDED.title,
  description     = EXCLUDED.description,
  duration_hours  = EXCLUDED.duration_hours,
  elearning_duration = EXCLUDED.elearning_duration,
  mode            = EXCLUDED.mode;

-- ATEX Niveau 1 — Intervenant en zone ATEX
INSERT INTO public.formations (slug, title, description, duration_hours, elearning_duration, mode)
VALUES (
  'atex-niveau1',
  'ATEX Niveau 1 — Intervenant en zone ATEX',
  'Formation e-learning pour tout salarié amené à intervenir (maintenance, nettoyage, contrôle) en zone ATEX. Couvre la classification des zones, le marquage Ex, le permis de feu, l''explosimètre et les EPI antistatiques. Avis d''habilitation ATEX valable 3 ans.',
  5,
  '4 h à 5 h',
  'e-learning'
)
ON CONFLICT (slug) DO UPDATE SET
  title           = EXCLUDED.title,
  description     = EXCLUDED.description,
  duration_hours  = EXCLUDED.duration_hours,
  elearning_duration = EXCLUDED.elearning_duration,
  mode            = EXCLUDED.mode;

-- ATEX Niveau 2 — Encadrant et Référent ATEX
INSERT INTO public.formations (slug, title, description, duration_hours, elearning_duration, mode)
VALUES (
  'atex-niveau2',
  'ATEX Niveau 2 — Encadrant et Référent ATEX',
  'Formation e-learning avancée pour les encadrants, chefs d''équipe et référents ATEX. Couvre les responsabilités légales, la rédaction du DRPCE, la classification des zones (EN 60079-10-1/-10-2), la sélection des équipements Ex, la gestion des entreprises extérieures et les systèmes de détection fixe. Avis d''habilitation ATEX valable 3 ans.',
  6,
  '5 h à 6 h',
  'e-learning'
)
ON CONFLICT (slug) DO UPDATE SET
  title           = EXCLUDED.title,
  description     = EXCLUDED.description,
  duration_hours  = EXCLUDED.duration_hours,
  elearning_duration = EXCLUDED.elearning_duration,
  mode            = EXCLUDED.mode;
