# Vidéos pédagogiques — plan de production

Ce dossier rassemble les **scripts** des vidéos courtes à intégrer dans les parcours e-learning, et le **plan de production** pour les tourner / monter progressivement.

## Stratégie en deux temps

**Phase 1 (immédiat, sans tournage) :** intégrer les vidéos INRS officielles dans les chapitres concernés. L'INRS publie des vidéos pédagogiques de qualité, libres d'embarquement, sur YouTube (chaîne `@INRSFrance`). Elles sont déjà partiellement référencées dans `lib/supabase/elearning/bsbe-content.ts` (objet `VIDEO`). On étend ce système aux autres modules.

**Phase 2 (production progressive Prevensia) :** tourner les vidéos signées Prevensia, à partir des scripts ci-dessous. On commence par les 5-7 vidéos à plus haute valeur ajoutée (différenciation marque + clarté pédagogique). Format cible : **2 à 4 minutes**, voix off, plan tableau ou animation 2D, logo Prevensia en début et fin.

## Bibliothèque INRS officielle utilisable

| Sujet | Vidéo INRS | Module concerné |
| --- | --- | --- |
| Habilitation BS / BE Manœuvre | https://youtu.be/AdI-HeDlla8 | bsbe |
| Choc électrique (effets du courant) | https://youtu.be/wyJbFJOdGGo | h0b0, bsbe, b1b2brbc |
| Consignation électrique | https://youtu.be/cCqbrFDNrxA | bsbe, b1b2brbc |
| Zones et distances | https://youtu.be/Pb8sssz2yng | h0b0, bsbe, b1b2brbc |
| INRS chaîne | https://www.youtube.com/@INRSFrance | tous |
| SST animation pédagogique | https://www.inrs.fr/media.html?refINRS=Anim-049 | sst |
| Risque incendie sélection | https://www.youtube.com/@INRSFrance/search?query=risque%20incendie | securite-incendie, ssi |
| Évacuation incendie | https://www.youtube.com/@INRSFrance/search?query=evacuation%20incendie | securite-incendie |

Toutes ces vidéos sont **gratuites** et **embarquables** sur le site (iframe YouTube standard), avec attribution INRS.

## Scripts Phase 2 — vidéos à produire par Prevensia

Les 7 scripts ci-dessous sont les plus rentables à produire. Voir les fichiers numérotés `01-...md` à `07-...md` dans ce dossier.

1. **01-habilitation-vs-formation.md** — La nuance qui fait toute la différence (3 min)
2. **02-h0b0-perimetre-strict.md** — Ce que vous pouvez faire, ce que vous ne pouvez pas (2 min)
3. **03-bs-be-manoeuvre-distinction.md** — BS et BE Manœuvre ne sont pas la même chose (3 min)
4. **04-vat-sequence-quatre-etapes.md** — Vérification d'absence de tension : la séquence (4 min)
5. **05-incendie-triangle-feu.md** — Le triangle du feu en 90 secondes (1 min 30)
6. **06-ssi-categories-et-organes.md** — Lire un SSI : alarme, DAS, UGA (3 min)
7. **07-sprinkler-vannes-et-anomalies.md** — Sprinkler : ce qu'un exploitant doit surveiller (3 min)

## Production pratique

- **Voix off** : voix professionnelle française, neutre, calme, élocution normative.
- **Visuel** : illustrations 2D sobres (Adobe Illustrator + After Effects ou Canva Pro). Charte : couleurs `slate-900`, `red-700`, `white`.
- **Logo Prevensia** : en intro 2 sec, en outro 4 sec.
- **Sous-titres** : obligatoires (loi accessibilité + meilleur engagement YouTube/site).
- **Hébergement** : YouTube en mode « non répertorié » (embarquement libre, hébergement gratuit, lecture rapide), ou Vimeo Pro pour pas de pub.
- **Intégration site** : iframe responsive dans le chapitre concerné, géré via le tableau `VIDEO` de chaque fichier de contenu (voir `bsbe-content.ts` pour le pattern).

## Coût estimatif Phase 2

- Production externalisée 7 vidéos clés : **3 500 à 7 000 € HT** au total selon prestataire (motion designer + voix off pro). Délai 4-6 semaines.
- Production interne (Canva Pro + voix maison) : **0 €** mais 2-3 jours de travail par vidéo.
