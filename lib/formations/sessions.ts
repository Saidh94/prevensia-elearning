/**
 * Sessions inter-entreprises planifiées — Sprinkler & SSI Exploitation.
 *
 * MISE À JOUR : modifier directement ce fichier pour ajouter / retirer des sessions.
 * Les sessions passées restent dans le tableau mais ne sont pas affichées côté client
 * (filtrage par date dans les composants de page).
 *
 * Règle tarifaire inter :
 *   - 1 à 3 participants  → tarif plein par personne
 *   - 4 participants et + → tarif groupe (réduction ~15 %)
 *   - Hors Île-de-France  → sur devis (déplacement formateur en sus)
 *   - Minimum rentable    → 4 participants (ne pas ouvrir une session en dessous)
 */

export type SessionFormat = "1j" | "2j" | "demi-journee" | "journee" | "7j";

export type FormationSession = {
  id: string;
  formation: "sprinkler" | "ssi" | "coordinateur-ssi";
  format: SessionFormat;
  /** Label affiché : "1 jour", "2 jours", "Demi-journée (4h min.)", "Journée complète", "7 jours" */
  formatLabel: string;
  /** Date de début ISO 8601 (premier jour de la session) */
  dateStart: string;
  /** Date de fin ISO 8601 (dernier jour de la session) */
  dateEnd: string;
  /**
   * Pour les sessions multi-semaines (CSSI 2+3+2) :
   * label lisible des jours exacts, ex. "10-11 juin · 17-19 juin · 24-25 juin"
   */
  dateDetails?: string;
  /** Lieu */
  lieu: string;
  /** Nombre de places max */
  placesMax: number;
  /** Nombre de places déjà réservées (à maintenir manuellement ou via API) */
  placesReservees: number;
  /** Prix par personne HT — tarif standard */
  prixUnitaireHT: number;
  /** Prix par personne HT — tarif 4+ participants (optionnel) */
  prixGroupeHT?: number;
};

export const SESSIONS: FormationSession[] = [
  // ── Sprinkler — sessions inter (à ouvrir dès que dates confirmées) ──────────
  // Maximum 6 participants par session (1 jour ou 2 jours renforcé).
  // Tarif inter : 590 € HT/pers (1j) · 1 190 € HT/pers (2j) · groupe ≥4 : 490 / 990 €.
  // Intra IDF : 2 200 € HT/j. Hors IDF : sur devis.
  // Ajouter les sessions ici avec placesMax: 6.

  // ── SSI Exploitation — à partir d'avril 2027 · 3 dates par mois ────────────
  // Minimum 4 participants, maximum 10 par session.
  // Demi-journée = 4h minimum. Tarif dégressif à partir de 7 inscrits.
  // Avril
  {
    id: "SSI-DJ-2027-04a",
    formation: "ssi",
    format: "demi-journee",
    formatLabel: "Demi-journée (9h–12h)",
    dateStart: "2027-04-10",
    dateEnd: "2027-04-10",
    lieu: "Noisy-le-Grand (93)",
    placesMax: 10,
    placesReservees: 0,
    prixUnitaireHT: 290,
    prixGroupeHT: 240,
  },
  {
    id: "SSI-J-2027-04",
    formation: "ssi",
    format: "journee",
    formatLabel: "Journée complète",
    dateStart: "2027-04-16",
    dateEnd: "2027-04-16",
    lieu: "Noisy-le-Grand (93)",
    placesMax: 10,
    placesReservees: 0,
    prixUnitaireHT: 490,
    prixGroupeHT: 420,
  },
  {
    id: "SSI-DJ-2027-04b",
    formation: "ssi",
    format: "demi-journee",
    formatLabel: "Demi-journée (9h–12h)",
    dateStart: "2027-04-24",
    dateEnd: "2027-04-24",
    lieu: "Noisy-le-Grand (93)",
    placesMax: 10,
    placesReservees: 0,
    prixUnitaireHT: 290,
    prixGroupeHT: 240,
  },
  // Mai
  {
    id: "SSI-DJ-2027-05a",
    formation: "ssi",
    format: "demi-journee",
    formatLabel: "Demi-journée (9h–12h)",
    dateStart: "2027-05-07",
    dateEnd: "2027-05-07",
    lieu: "Noisy-le-Grand (93)",
    placesMax: 10,
    placesReservees: 0,
    prixUnitaireHT: 290,
    prixGroupeHT: 240,
  },
  {
    id: "SSI-J-2027-05",
    formation: "ssi",
    format: "journee",
    formatLabel: "Journée complète",
    dateStart: "2027-05-20",
    dateEnd: "2027-05-20",
    lieu: "Noisy-le-Grand (93)",
    placesMax: 10,
    placesReservees: 0,
    prixUnitaireHT: 490,
    prixGroupeHT: 420,
  },
  {
    id: "SSI-DJ-2027-05b",
    formation: "ssi",
    format: "demi-journee",
    formatLabel: "Demi-journée (9h–12h)",
    dateStart: "2027-05-21",
    dateEnd: "2027-05-21",
    lieu: "Noisy-le-Grand (93)",
    placesMax: 10,
    placesReservees: 0,
    prixUnitaireHT: 290,
    prixGroupeHT: 240,
  },
  // Juin (3 dates avant le démarrage CSSI le 10 juin / en fin de mois)
  {
    id: "SSI-DJ-2027-06a",
    formation: "ssi",
    format: "demi-journee",
    formatLabel: "Demi-journée (9h–12h)",
    dateStart: "2027-06-04",
    dateEnd: "2027-06-04",
    lieu: "Noisy-le-Grand (93)",
    placesMax: 10,
    placesReservees: 0,
    prixUnitaireHT: 290,
    prixGroupeHT: 240,
  },
  {
    id: "SSI-J-2027-06",
    formation: "ssi",
    format: "journee",
    formatLabel: "Journée complète",
    dateStart: "2027-06-24",
    dateEnd: "2027-06-24",
    lieu: "Noisy-le-Grand (93)",
    placesMax: 10,
    placesReservees: 0,
    prixUnitaireHT: 490,
    prixGroupeHT: 420,
  },
  {
    id: "SSI-DJ-2027-06b",
    formation: "ssi",
    format: "demi-journee",
    formatLabel: "Demi-journée (9h–12h)",
    dateStart: "2027-06-25",
    dateEnd: "2027-06-25",
    lieu: "Noisy-le-Grand (93)",
    placesMax: 10,
    placesReservees: 0,
    prixUnitaireHT: 290,
    prixGroupeHT: 240,
  },
  // Septembre
  {
    id: "SSI-J-2027-09a",
    formation: "ssi",
    format: "journee",
    formatLabel: "Journée complète",
    dateStart: "2027-09-10",
    dateEnd: "2027-09-10",
    lieu: "Noisy-le-Grand (93)",
    placesMax: 10,
    placesReservees: 0,
    prixUnitaireHT: 490,
    prixGroupeHT: 420,
  },
  {
    id: "SSI-J-2027-09b",
    formation: "ssi",
    format: "journee",
    formatLabel: "Journée complète",
    dateStart: "2027-09-23",
    dateEnd: "2027-09-23",
    lieu: "Noisy-le-Grand (93)",
    placesMax: 10,
    placesReservees: 0,
    prixUnitaireHT: 490,
    prixGroupeHT: 420,
  },
  {
    id: "SSI-DJ-2027-09",
    formation: "ssi",
    format: "demi-journee",
    formatLabel: "Demi-journée (9h–12h)",
    dateStart: "2027-09-24",
    dateEnd: "2027-09-24",
    lieu: "Noisy-le-Grand (93)",
    placesMax: 10,
    placesReservees: 0,
    prixUnitaireHT: 290,
    prixGroupeHT: 240,
  },
  // Octobre
  {
    id: "SSI-DJ-2027-10a",
    formation: "ssi",
    format: "demi-journee",
    formatLabel: "Demi-journée (9h–12h)",
    dateStart: "2027-10-08",
    dateEnd: "2027-10-08",
    lieu: "Noisy-le-Grand (93)",
    placesMax: 10,
    placesReservees: 0,
    prixUnitaireHT: 290,
    prixGroupeHT: 240,
  },
  {
    id: "SSI-J-2027-10",
    formation: "ssi",
    format: "journee",
    formatLabel: "Journée complète",
    dateStart: "2027-10-21",
    dateEnd: "2027-10-21",
    lieu: "Noisy-le-Grand (93)",
    placesMax: 10,
    placesReservees: 0,
    prixUnitaireHT: 490,
    prixGroupeHT: 420,
  },
  {
    id: "SSI-DJ-2027-10b",
    formation: "ssi",
    format: "demi-journee",
    formatLabel: "Demi-journée (9h–12h)",
    dateStart: "2027-10-22",
    dateEnd: "2027-10-22",
    lieu: "Noisy-le-Grand (93)",
    placesMax: 10,
    placesReservees: 0,
    prixUnitaireHT: 290,
    prixGroupeHT: 240,
  },

  // ── Coordination SSI — 7 jours (2 + 3 + 2 sur 3 semaines) ──────────────────
  // Structure : Phase Conception (J1-J2) · Phase Réalisation (J3-J5) · Phase Exploitation + éval (J6-J7)
  // Minimum 3 participants pour confirmer, maximum 8.
  {
    id: "CSSI-2027-06",
    formation: "coordinateur-ssi",
    format: "7j",
    formatLabel: "7 jours (2 + 3 + 2)",
    dateStart: "2027-06-10",
    dateEnd: "2027-06-25",
    dateDetails: "10-11 juin · 17-19 juin · 24-25 juin 2027",
    lieu: "Noisy-le-Grand (93)",
    placesMax: 10,
    placesReservees: 0,
    prixUnitaireHT: 1790,
  },
  {
    id: "CSSI-2027-07",
    formation: "coordinateur-ssi",
    format: "7j",
    formatLabel: "7 jours (2 + 3 + 2)",
    dateStart: "2027-07-01",
    dateEnd: "2027-07-17",
    dateDetails: "1-2 juillet · 8-10 juillet · 16-17 juillet 2027",
    lieu: "Noisy-le-Grand (93)",
    placesMax: 10,
    placesReservees: 0,
    prixUnitaireHT: 1790,
  },
  {
    id: "CSSI-2027-11",
    formation: "coordinateur-ssi",
    format: "7j",
    formatLabel: "7 jours (2 + 3 + 2)",
    dateStart: "2027-11-03",
    dateEnd: "2027-11-26",
    dateDetails: "3-4 nov. · 18-20 nov. · 25-26 nov. 2027",
    lieu: "Noisy-le-Grand (93)",
    placesMax: 10,
    placesReservees: 0,
    prixUnitaireHT: 1790,
  },
  {
    id: "CSSI-2027-12",
    formation: "coordinateur-ssi",
    format: "7j",
    formatLabel: "7 jours (2 + 3 + 2)",
    dateStart: "2027-12-02",
    dateEnd: "2027-12-17",
    dateDetails: "2-3 déc. · 9-11 déc. · 16-17 déc. 2027",
    lieu: "Noisy-le-Grand (93)",
    placesMax: 10,
    placesReservees: 0,
    prixUnitaireHT: 1790,
  },
];

/** Retourne les sessions à venir (dateStart >= aujourd'hui) pour une formation donnée. */
export function getUpcomingSessions(
  formation: "sprinkler" | "ssi" | "coordinateur-ssi",
  now = new Date()
): FormationSession[] {
  const today = now.toISOString().slice(0, 10);
  return SESSIONS.filter(
    (s) => s.formation === formation && s.dateStart >= today
  ).sort((a, b) => a.dateStart.localeCompare(b.dateStart));
}

/** Formate une date ISO "YYYY-MM-DD" en "20 janvier 2027". */
export function formatSessionDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** Retourne les places restantes pour une session. */
export function placesRestantes(session: FormationSession): number {
  return session.placesMax - session.placesReservees;
}
