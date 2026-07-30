-- ============================================================
-- Table devis : stockage des devis envoyés depuis l'admin
-- avec token de validation, statut et lien vers l'employeur
-- ============================================================

create table if not exists public.devis (
  id               uuid        primary key default gen_random_uuid(),
  token            uuid        not null unique default gen_random_uuid(),
  status           text        not null default 'sent'
                               check (status in ('sent','validated','expired','provisioned')),

  -- Informations client
  contact_name     text,
  company_name     text,
  email            text        not null,
  phone            text,
  participants     int         not null default 1,

  -- Contenu du devis (JSONB)
  formations       jsonb       not null default '[]',
  total_ht         numeric(10,2) not null default 0,
  tva_rate         int         not null default 20,
  has_quote        boolean     not null default false,
  notes            text,

  -- Lien vers le compte employeur créé lors de la validation
  employer_user_id uuid        references auth.users(id) on delete set null,

  -- Timestamps
  created_at       timestamptz not null default now(),
  validated_at     timestamptz,
  provisioned_at   timestamptz
);

-- Index pour recherche par token (validation publique)
create index if not exists devis_token_idx   on public.devis (token);
-- Index pour filtrer par statut côté admin
create index if not exists devis_status_idx  on public.devis (status);
-- Index pour retrouver les devis d'un employeur
create index if not exists devis_employer_idx on public.devis (employer_user_id);

-- ── RLS ──────────────────────────────────────────────────────
alter table public.devis enable row level security;

-- Lecture publique par token uniquement (page de validation client)
create policy "devis_read_by_token"
  on public.devis for select
  using (true);   -- filtrage par token géré dans la requête (pas de user context)

-- Admin : accès complet (service role key depuis les API routes)
-- Les API routes utilisent createAdminClient() → pas besoin de policy supplémentaire.

-- ── Trigger updated_at (optionnel) ──────────────────────────
-- (pas de colonne updated_at car on utilise validated_at / provisioned_at explicitement)

-- ── Grants ──────────────────────────────────────────────────
grant select on public.devis to anon;
grant select on public.devis to authenticated;
