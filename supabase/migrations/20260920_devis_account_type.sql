-- ============================================================
-- Ajoute la distinction particulier / entreprise sur les devis
-- (le formulaire /demande-devis demande maintenant explicitement
-- ce choix au lieu de supposer systématiquement un employeur)
-- ============================================================

alter table public.devis
  add column if not exists account_type text not null default 'entreprise'
    check (account_type in ('entreprise', 'particulier'));

comment on column public.devis.account_type is
  'Indique si le devis a été demandé par un particulier ou une entreprise/employeur — conditionne les textes affichés dans le parcours de validation et le rôle attribué au premier compte créé.';
