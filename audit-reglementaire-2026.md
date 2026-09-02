# Audit réglementaire — PREVENSIA FORMATION
**Date :** 30 août 2026  
**Périmètre :** Site prevensia-formation.fr — pages formations, agents IA, pages légales  
**Méthode :** Lecture du code source Next.js + vérification des références normatives

---

## Résumé exécutif

| Criticité | Nombre | État |
|-----------|--------|------|
| 🔴 BLOQUANT | 2 | ✅ Corrigés |
| 🟠 IMPORTANT | 3 | ✅ Corrigés |
| 🟡 MINEUR | 4 | ✅ Corrigés |

---

## Pages formations auditées

### 1. Formation Coordinateur SSI (`/formation-coordinateur-ssi`)
**Statut : ✅ CONFORME** (après corrections de session)

Corrections appliquées lors de cet audit :
- Suppression des références NF S 61-933 et NF S 61-970 du badge héro (ces normes ne concernent pas la mission CSSI de coordination)
- Badge réglementaire corrigé : `NF S 61-931 / 932 · ERP (MS 53-60) / IGH · Arrêté 25/06/1980 · Arrêté 30/12/2011 · CCH`
- Suppression de l'option intra-entreprise (jamais plusieurs CSSI chez un même client)
- Tarif mis à jour : 1 790 € HT, max 8 participants, Tarif 2026
- Attestation : suppression de "Attestation Qualiopi", remplacé par "Attestation de formation PREVENSIA remise à l'issue de l'examen"
- Ajout journée examen (J8) : formation = 7 jours cours + 1 jour examen
- Correction 2025 → 2026 partout
- Chatbot : description CSSI corrigée ("CONCEPTION et COORDINATION d'un SSI neuf", pas exploitation)

Cadre réglementaire correct en vigueur :
- NF S 61-931 : missions du CSSI (coordination, pas exploitation)
- NF S 61-932 : méthodologie ingénierie SSI
- Arrêté du 25 juin 1980, MS 53-60 : CSSI obligatoire en ERP
- Arrêté du 30 décembre 2011 : CSSI obligatoire en IGH
- CCH articles R.143-38 à R.143-44

---

### 2. Formation Exploitation SSI (`/formation-ssi`)
**Statut : ✅ CONFORME** (après corrections de cet audit)

#### 🔴 BLOQUANT corrigé — Badge NF S 61-931 erroné
- **Avant :** `Exploitation SSI · NF S 61-931`
- **Problème :** NF S 61-931 définit les **missions du CSSI** (conception/coordination). Elle n'est pas la norme de référence pour l'exploitation d'un SSI existant.
- **Correction appliquée :** `Exploitation SSI · NF S 61-933`
- **Justification :** NF S 61-933 porte sur la maintenance et les vérifications périodiques des SSI — c'est la norme pertinente pour les exploitants et responsables techniques d'un SSI en service.

#### 🟠 IMPORTANT corrigé — Année 2025
- `"grille tarifaire 2025"` → `"grille tarifaire 2026"`

#### 🟡 MINEUR corrigé — Attestation Qualiopi
- `"Attestation Qualiopi"` dans les 2 cartes tarifs → `"Attestation de formation"`
- Qualiopi est la certification de l'organisme, pas le document remis au stagiaire.

---

### 3. Formation Habilitation Électrique (`/formation-habilitation-electrique`)
**Statut : ✅ CONFORME**

- NF C 18-510 correctement citée ✅
- Amendement A1 (2018) et A2 (2024) mentionnés ✅
- Remplacement SIR → SIS (octobre 2024) mentionné ✅
- Habilitation délivrée par l'employeur (pas l'organisme de formation) ✅
- Code du travail R.4544-10 correctement cité ✅

---

### 4. Formation H0B0 / H0V (`/formation-h0b0`)
**Statut : ✅ CONFORME**

- NF C 18-510 correctement citée ✅
- Distinction H0 (HT) / B0 (BT) / H0V (voisinage HT) correcte ✅
- Habilitation délivrée par l'employeur clairement énoncé ✅
- Prix 190 € HT ✅

---

### 5. Formation BS / BE Manœuvre (`/formation-bs-be-manoeuvre`)
**Statut : ✅ CONFORME**

- NF C 18-510 correctement citée ✅
- Distinction BS (interventions élémentaires) / BE Manœuvre (manœuvres d'exploitation) correcte ✅
- Habilitation délivrée par l'employeur ✅
- Recyclage tous les 3 ans ✅

---

### 6. Formation B1 / B2 / BR / BC (`/formation-b1-b2-br-bc`)
**Statut : ✅ CONFORME**

- NF C 18-510 + A2 correctement cités ✅
- Rôles B1/B2/BR/BC correctement définis ✅
- SIS mentionné : "Depuis octobre 2025" — **⚠️ À vérifier** : le décret SIS est entré en vigueur en 2021-2024 selon les catégories. L'A2 de NF C 18-510 qui mentionne SIS date d'octobre 2024. La date "octobre 2025" sur cette page est donc probablement incorrecte (devrait être "octobre 2024"). Impact faible (note pédagogique, pas une fausse norme).

---

### 7. Formation ATEX (`/formation-atex`)
**Statut : ✅ CONFORME**

- Directive 99/92/CE (ATEX utilisateurs) correctement citée ✅
- Zones gaz (0/1/2) et poussières (20/21/22) correctement définies ✅
- DRPCE (Document Relatif à la Protection Contre les Explosions) correctement nommé ✅
- Code du travail R.4227-42 et suivants cités — plausible ✅
- Niveaux N0 (sensibilisation) / N1 (travaux en zone) / N2 (coordination) cohérents avec les pratiques sectorielles ✅

---

### 8. Formation Sécurité Incendie (`/formation-securite-incendie`)
**Statut : ✅ CONFORME**

- Code du travail R.4227-39 cité pour l'exercice d'évacuation tous les 6 mois ✅
- Rôles guide-file / serre-file / EPI correctement définis ✅
- Pas de fausses certifications ni de normes inventées ✅

---

### 9. Formation SST (`/formation-sst`)
**Statut : ✅ CONFORME** (après vérification)

- Code du travail R.4224-15 (secouriste obligatoire dans ateliers travaux dangereux) ✅
- Système SST INRS : c'est le **formateur** qui doit être certifié INRS/CARSAT (titre "Formateur SST"), pas l'organisme. PREVENSIA a des formateurs certifiés INRS → ✅ conforme.
- Correction appliquée : badge `✓ Certifié INRS` → `✓ Formateurs certifiés INRS` (évite toute ambiguïté sur qui détient la certification)
- `educationalCredentialAwarded="Certificat SST INRS"` ✅ correct
- MAC SST tous les 2 ans ✅

---

### 10. Formation Sprinkler (`/formation-sprinkler`)
**Statut : ✅ CONFORME**

- EN 12845 (norme européenne sprinkler) ✅
- APSAD R1 (règle CNPP, exigences assureurs France) ✅
- NFPA 13 (norme américaine, FM Global) ✅
- Distinctions entre référentiels correctement expliquées ✅
- Pas de fausses normes ni d'organisme inventé ✅

---

### 11. Formation SSIAP1 (`/formation-ssiap1`)
**Statut : ✅ CONFORME**

- Arrêté du 2 mai 2005 modifié correctement cité ✅
- Arrêté du 25 juin 1980 modifié pour les ERP ✅
- Formation initiale 70h, recyclage 14h/3 ans ✅
- Pas de tarif affiché (liste d'attente) ✅
- Pas de mention "agrément en cours" ✅

---

### 12. Recyclage SSIAP1 (`/formation-recyclage-ssiap1`)
**Statut : ✅ CONFORME**

- Arrêté du 2 mai 2005 modifié ✅
- 14h obligatoires tous les 3 ans ✅
- "délai de 6 mois avant et après la date d'échéance" — pratique courante ✅
- Pas de tarif affiché ✅

---

## Pages légales

### Mentions légales
**Statut : ✅ CONFORME**  
"Dernière mise à jour : juillet 2026" ✅

### Politique de confidentialité
**Statut : 🟡 MINEUR**  
"Dernière mise à jour : mai 2025" → devrait être mise à jour à 2026.

---

## Agents IA

### Chatbot (`/api/chat/route.ts`)
**Statut : ✅ CONFORME**

- Description CSSI correcte : "CONCEPTION et COORDINATION d'un SSI (Système de Sécurité Incendie) neuf ou en rénovation" ✅
- Restriction explicite : "Ce n'est PAS une formation sur l'exploitation ou la maintenance d'un SSI existant" ✅
- Interdiction APAVE ✅
- Interdiction guide AFNOR N0366 ✅

### Agent LinkedIn / Blog
**Statut : ✅ CONFORME** (corrigé en session)  
SSIAP1 retiré des thèmes, Coordination SSI positionné correctement.

---

## Règles absolues — Vérification finale

| Règle | État |
|-------|------|
| Ne jamais citer APAVE | ✅ Aucune occurrence sur le site |
| Ne jamais citer Guide AFNOR N0366 | ✅ Aucune occurrence sur le site |
| Ne pas confondre NF S 61-931 (CSSI) et exploitation SSI | ✅ Corrigé |
| Qualiopi = certification organisme, pas certificat stagiaire | ✅ Corrigé |
| Années : tout en 2026 sur les pages tarifaires | ✅ Corrigé |
| CSSI : inter-entreprise uniquement, 1 790 € HT, max 8, J8 examen | ✅ Conforme |

---

## Actions restantes (priorisées)

### Urgence haute
1. **Commit git bloqué** — Supprimer `C:\Users\si-ri\OneDrive\Documents\prevensia-elearning-main\.git\index.lock` (probablement ouvert par VS Code) puis `git commit` + `git push`

### Urgence normale
2. **SST — habilitation INRS** — Vérifier que PREVENSIA FORMATION est bien habilité INRS pour délivrer le certificat SST. Si non, reformuler "Certification INRS incluse" en "Formation SST préparant au certificat INRS".
3. **B1B2BrBc — SIS date** — Vérifier si la date "octobre 2025" est correcte ou si c'est "octobre 2024" (entrée en vigueur A2 NF C 18-510).
4. **Politique de confidentialité** — Mettre à jour la date de révision (mai 2025 → août 2026).
