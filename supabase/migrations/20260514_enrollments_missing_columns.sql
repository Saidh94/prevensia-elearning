-- Migration : colonnes manquantes sur la table enrollments
-- validated_by, validation_note, completion_percent
-- À exécuter dans l'éditeur SQL Supabase ou via supabase db push

-- Ajoute validated_by si absente (UUID de l'admin ou formateur qui a validé)
ALTER TABLE public.enrollments
  ADD COLUMN IF NOT EXISTS validated_by UUID REFERENCES auth.users(id) ON DELETE SET NULL;

-- Ajoute validation_note si absente (commentaire libre laissé par le valideur)
ALTER TABLE public.enrollments
  ADD COLUMN IF NOT EXISTS validation_note TEXT;

-- Ajoute completion_percent si absente (0..100, mis à 100 après réussite du quiz)
ALTER TABLE public.enrollments
  ADD COLUMN IF NOT EXISTS completion_percent INTEGER DEFAULT 0
    CHECK (completion_percent >= 0 AND completion_percent <= 100);

-- Index sur validated_by pour les requêtes admin
CREATE INDEX IF NOT EXISTS enrollments_validated_by_idx
  ON public.enrollments (validated_by)
  WHERE validated_by IS NOT NULL;

-- Index sur completion_percent pour filtrer rapidement les complétés
CREATE INDEX IF NOT EXISTS enrollments_completion_percent_idx
  ON public.enrollments (completion_percent)
  WHERE completion_percent = 100;
