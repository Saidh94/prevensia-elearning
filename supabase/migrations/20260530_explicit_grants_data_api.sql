-- ─────────────────────────────────────────────────────────────────────────────
-- Migration : GRANTs explicites pour l'API Data Supabase
-- Contexte : à partir du 30/05/2026 (nouveaux projets) et du 30/10/2026
--            (tous les projets existants), Supabase n'expose plus les tables
--            du schéma public sans GRANT explicite.
-- Cette migration sécurise l'accès à toutes les tables existantes.
-- ─────────────────────────────────────────────────────────────────────────────


-- ══════════════════════════════════════════════════════════════════════════════
-- TABLE : profiles
-- Accès : chaque utilisateur lit/modifie son propre profil (RLS)
--         Les admins passent par service_role
-- ══════════════════════════════════════════════════════════════════════════════
GRANT SELECT, INSERT, UPDATE
  ON public.profiles
  TO authenticated;

GRANT SELECT, INSERT, UPDATE, DELETE
  ON public.profiles
  TO service_role;

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;


-- ══════════════════════════════════════════════════════════════════════════════
-- TABLE : formations
-- Accès : lecture publique (catalogue), écriture admin uniquement
-- ══════════════════════════════════════════════════════════════════════════════
GRANT SELECT
  ON public.formations
  TO anon;

GRANT SELECT
  ON public.formations
  TO authenticated;

GRANT SELECT, INSERT, UPDATE, DELETE
  ON public.formations
  TO service_role;

ALTER TABLE public.formations ENABLE ROW LEVEL SECURITY;


-- ══════════════════════════════════════════════════════════════════════════════
-- TABLE : enrollments
-- Accès : chaque utilisateur lit ses propres inscriptions (RLS)
--         Les employeurs lisent les inscriptions de leurs salariés (RLS)
--         Les admins passent par service_role
-- ══════════════════════════════════════════════════════════════════════════════
GRANT SELECT, INSERT, UPDATE
  ON public.enrollments
  TO authenticated;

GRANT SELECT, INSERT, UPDATE, DELETE
  ON public.enrollments
  TO service_role;

ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;


-- ══════════════════════════════════════════════════════════════════════════════
-- TABLE : user_chapter_progress
-- Accès : chaque utilisateur lit/écrit sa propre progression (RLS)
-- ══════════════════════════════════════════════════════════════════════════════
GRANT SELECT, INSERT, UPDATE, DELETE
  ON public.user_chapter_progress
  TO authenticated;

GRANT SELECT, INSERT, UPDATE, DELETE
  ON public.user_chapter_progress
  TO service_role;

ALTER TABLE public.user_chapter_progress ENABLE ROW LEVEL SECURITY;


-- ══════════════════════════════════════════════════════════════════════════════
-- TABLE : employer_users
-- Accès : l'utilisateur lit sa propre appartenance employeur (RLS)
-- ══════════════════════════════════════════════════════════════════════════════
GRANT SELECT
  ON public.employer_users
  TO authenticated;

GRANT SELECT, INSERT, UPDATE, DELETE
  ON public.employer_users
  TO service_role;

ALTER TABLE public.employer_users ENABLE ROW LEVEL SECURITY;


-- ══════════════════════════════════════════════════════════════════════════════
-- TABLE : quiz_attempts
-- Accès : chaque utilisateur lit ses propres tentatives (RLS)
-- ══════════════════════════════════════════════════════════════════════════════
GRANT SELECT, INSERT
  ON public.quiz_attempts
  TO authenticated;

GRANT SELECT, INSERT, UPDATE, DELETE
  ON public.quiz_attempts
  TO service_role;

ALTER TABLE public.quiz_attempts ENABLE ROW LEVEL SECURITY;


-- ─────────────────────────────────────────────────────────────────────────────
-- RAPPEL pour toute future table :
-- Ajouter systématiquement ces 3 blocs lors de la création :
--
--   GRANT SELECT, INSERT, UPDATE, DELETE ON public.ma_table TO authenticated;
--   GRANT SELECT, INSERT, UPDATE, DELETE ON public.ma_table TO service_role;
--   ALTER TABLE public.ma_table ENABLE ROW LEVEL SECURITY;
--
-- Et ajouter les policies RLS correspondantes.
-- ─────────────────────────────────────────────────────────────────────────────
