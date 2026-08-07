-- ============================================================
-- PREVENSIA DUERP — Schéma initial
-- Conforme : Code du travail Art. L4121-3-1 + Décret 2022-395
-- ============================================================

-- Extension UUID
create extension if not exists "pgcrypto";

-- ── 1. ENTREPRISES ──────────────────────────────────────────
create table entreprises (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid references auth.users(id) on delete cascade,

  -- Identité légale
  siret         varchar(14) unique,
  siren         varchar(9),
  raison_sociale text not null,
  nom_commercial text,
  code_naf      varchar(6),        -- ex: "4120A" (construction maisons)
  libelle_naf   text,

  -- Classification activité
  secteur       text not null,     -- 'btp' | 'industrie' | 'logistique' | 'tertiaire' | 'erp5' | 'erp1'
  sous_secteur  text,              -- ex: 'gros_oeuvre', 'second_oeuvre', 'tp'
  type_erp      text,              -- 'M' | 'N' | 'P' | 'L' | null
  categorie_erp smallint,          -- 1 à 5

  -- Effectif (détermine obligations légales)
  effectif_min  smallint not null default 1,
  effectif_max  smallint,          -- null = 250+

  -- Adresse
  adresse       text,
  code_postal   varchar(5),
  ville         text,
  departement   varchar(3),

  -- Contacts
  email_contact text not null,
  telephone     varchar(20),
  nom_dirigeant text,
  prenom_dirigeant text,

  -- Abonnement Stripe
  stripe_customer_id    text,
  stripe_subscription_id text,
  abonnement_statut     text default 'trial',  -- 'trial' | 'active' | 'past_due' | 'canceled'
  abonnement_plan       text,                  -- 'starter' | 'standard' | 'pro' | 'erp'
  trial_ends_at         timestamptz default now() + interval '30 days',

  created_at    timestamptz default now(),
  updated_at    timestamptz default now()
);

-- ── 2. UNITÉS DE TRAVAIL ────────────────────────────────────
-- Groupes de salariés exposés aux mêmes risques
create table unites_travail (
  id              uuid primary key default gen_random_uuid(),
  entreprise_id   uuid references entreprises(id) on delete cascade,
  nom             text not null,   -- ex: "Équipe chantier gros œuvre", "Personnel de caisse"
  description     text,
  effectif        smallint default 1,
  localisation    text,            -- ex: "Chantier Paris 15e", "Entrepôt principal"
  ordre           smallint default 0,
  created_at      timestamptz default now()
);

-- ── 3. CATALOGUE DES RISQUES ────────────────────────────────
-- Base de référence par secteur (alimentée par les données INRS/INERIS)
create table risques_catalogue (
  id              uuid primary key default gen_random_uuid(),
  code            text unique not null,  -- ex: 'BTP_CHUTE_HAUTEUR', 'ERPM_INCENDIE'

  -- Classification
  secteur         text not null,     -- 'btp' | 'industrie' | 'logistique' | 'tertiaire' | 'erp5' | 'erp1' | 'commun'
  sous_secteur    text,
  type_erp        text,              -- 'M' | 'N' | 'P' | 'L' | null

  -- Famille de risque (selon nomenclature INRS)
  famille         text not null,
  -- 'chute_hauteur' | 'chute_de_plain_pied' | 'manutention_manuelle'
  -- 'machines_outils' | 'electrique' | 'incendie_explosion' | 'chimique'
  -- 'biologique' | 'bruit' | 'vibrations' | 'thermique' | 'rayonnements'
  -- 'rps' | 'routier' | 'atex' | 'amiante' | 'legionelle' | 'autre'

  intitule        text not null,     -- ex: "Chute de hauteur lors de travaux en toiture"
  description     text,

  -- Cotation par défaut (1-4)
  gravite_defaut  smallint not null check (gravite_defaut between 1 and 4),
  frequence_defaut smallint not null check (frequence_defaut between 1 and 4),

  -- Mesures de prévention réglementaires (tableau JSON)
  mesures_prevention jsonb default '[]',
  -- [{ "type": "technique|organisationnelle|epi", "description": "...", "reference_reglementaire": "Art. R4323-58" }]

  -- Références légales
  references_legales text[],   -- ['Art. R4323-58 C.trav.', 'NF EN 363']
  source             text,     -- 'INRS' | 'INERIS' | 'OPPBTP' | 'CNAMTS'

  actif           boolean default true,
  created_at      timestamptz default now()
);

-- ── 4. ÉVALUATIONS (résultats du questionnaire) ─────────────
create table evaluations (
  id                uuid primary key default gen_random_uuid(),
  entreprise_id     uuid references entreprises(id) on delete cascade,
  unite_travail_id  uuid references unites_travail(id) on delete cascade,
  risque_id         uuid references risques_catalogue(id),

  -- Cotation personnalisée par l'employeur
  gravite           smallint not null check (gravite between 1 and 4),
  frequence         smallint not null check (frequence between 1 and 4),
  criticite         smallint generated always as (gravite * frequence) stored,
  -- 1-4 : acceptable | 5-8 : modéré | 9-16 : critique

  -- Commentaire libre
  commentaire       text,

  -- Statut du risque
  statut            text default 'identifie',
  -- 'identifie' | 'en_cours' | 'traite' | 'residu_acceptable'

  -- Mesures en place (parmi mesures_prevention du catalogue)
  mesures_choisies  jsonb default '[]',

  evalue_par        text,   -- nom du référent SST
  evalue_le         date default current_date,

  created_at        timestamptz default now(),
  updated_at        timestamptz default now()
);

-- ── 5. PLANS D'ACTION ───────────────────────────────────────
create table plans_action (
  id              uuid primary key default gen_random_uuid(),
  evaluation_id   uuid references evaluations(id) on delete cascade,
  entreprise_id   uuid references entreprises(id) on delete cascade,

  action          text not null,
  type_action     text default 'technique',
  -- 'technique' | 'organisationnelle' | 'epi' | 'formation' | 'surveillance'

  responsable     text,
  echeance        date,
  priorite        smallint default 2 check (priorite between 1 and 3),
  -- 1=urgent | 2=normal | 3=amélioration

  statut          text default 'planifie',
  -- 'planifie' | 'en_cours' | 'realise' | 'annule'

  cout_estime     numeric(10,2),
  note            text,

  created_at      timestamptz default now(),
  updated_at      timestamptz default now()
);

-- ── 6. DOCUMENTS GÉNÉRÉS ────────────────────────────────────
create table documents_generes (
  id              uuid primary key default gen_random_uuid(),
  entreprise_id   uuid references entreprises(id) on delete cascade,

  type_document   text not null,
  -- 'duerp' | 'diuo' | 'dmlt' | 'registre_securite' | 'plan_evacuation'

  version         smallint default 1,
  annee           smallint default extract(year from current_date)::smallint,

  -- Stockage Supabase Storage
  storage_path    text,
  storage_bucket  text default 'documents',

  -- Métadonnées du document
  nb_unites       smallint,
  nb_risques      smallint,
  nb_actions      smallint,
  nb_critiques    smallint,

  genere_par      text,    -- user_id ou 'system'
  genere_le       timestamptz default now(),

  -- Token public pour partage (ex: médecin du travail)
  token_partage   text unique default encode(gen_random_bytes(32), 'hex'),
  token_expire_le timestamptz default now() + interval '1 year',

  created_at      timestamptz default now()
);

-- ── 7. ABONNEMENTS / TARIFICATION ──────────────────────────
create table plans_tarifaires (
  id          text primary key,  -- 'starter' | 'standard' | 'pro' | 'erp'
  nom         text not null,
  effectif_max smallint,         -- null = illimité
  prix_annuel numeric(8,2) not null,
  prix_mensuel numeric(8,2),
  stripe_price_id_annuel  text,
  stripe_price_id_mensuel text,
  features    jsonb default '[]',
  actif       boolean default true
);

insert into plans_tarifaires (id, nom, effectif_max, prix_annuel, prix_mensuel, features) values
  ('starter',  'Starter',   10,   29,  3,  '["DUERP illimité","1 établissement","PDF téléchargeable","Mises à jour réglementaires"]'),
  ('standard', 'Standard',  49,   79,  9,  '["DUERP illimité","3 établissements","DIUO inclus","Export Word + PDF","Support email"]'),
  ('pro',      'Pro',       249,  199, 19, '["DUERP illimité","Établissements illimités","DIUO + DMLT","API REST","Support prioritaire"]'),
  ('erp',      'ERP',       null, 299, 29, '["Tout Pro","Module ERP incendie","Registre sécurité","Plan évacuation","Commission sécurité"]');

-- ── 8. AUDIT LOG ────────────────────────────────────────────
create table audit_logs (
  id            uuid primary key default gen_random_uuid(),
  entreprise_id uuid references entreprises(id) on delete set null,
  user_id       uuid references auth.users(id) on delete set null,
  action        text not null,
  details       jsonb,
  created_at    timestamptz default now()
);

-- ── INDEX ──────────────────────────────────────────────────
create index on unites_travail (entreprise_id);
create index on evaluations (entreprise_id);
create index on evaluations (unite_travail_id);
create index on evaluations (criticite desc);
create index on plans_action (entreprise_id);
create index on plans_action (echeance);
create index on documents_generes (entreprise_id);
create index on risques_catalogue (secteur, famille);
create index on risques_catalogue (code);

-- ── RLS ────────────────────────────────────────────────────
alter table entreprises        enable row level security;
alter table unites_travail     enable row level security;
alter table evaluations        enable row level security;
alter table plans_action       enable row level security;
alter table documents_generes  enable row level security;

create policy "own_company" on entreprises
  for all using (auth.uid() = user_id);

create policy "own_unites" on unites_travail
  for all using (
    entreprise_id in (select id from entreprises where user_id = auth.uid())
  );

create policy "own_evaluations" on evaluations
  for all using (
    entreprise_id in (select id from entreprises where user_id = auth.uid())
  );

create policy "own_plans" on plans_action
  for all using (
    entreprise_id in (select id from entreprises where user_id = auth.uid())
  );

create policy "own_documents" on documents_generes
  for all using (
    entreprise_id in (select id from entreprises where user_id = auth.uid())
  );
