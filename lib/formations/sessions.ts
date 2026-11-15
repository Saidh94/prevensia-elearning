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

export type SessionFormat = "1j" | "2j" | "demi-journee" | "journee";

export type FormationSession = {
  id: string;
  formation: "sprinkler" | "ssi";
  format: SessionFormat;
  /** Label affiché : "1 jour", "2 jours", "Demi-journée (matin)", "Journée complète" */
  formatLabel: string;
  /** Date de début ISO 8601 */
  dateStart: string;
  /** Date de fin ISO 8601 (identique à dateStart pour 1 jour) */
  dateEnd: string;
  /** Lieu */
  lieu: string;
  /** Nombre de places max */
  placesMax: number;
  /** Nombre de places déjà réservées (à maintenir manuellement ou via API) */
  placesReservees: number;
  /** Prix par personne HT — tarif 1-3 participants */
  prixUnitaireHT: number;
  /** Prix par personne HT — tarif 4+ participants */
  prixGroupeHT: number;
};

export const SESSIONS: FormationSession[] = [
  // ── Sprinkler 1 jour ────────────────────────────────────────────────────────
  {
    id: "SPK-1J-2027-01",
    formation: "sprinkler",
    format: "1j",
    formatLabel: "1 jour",
    dateStart: "2027-01-20",
    dateEnd: "2027-01-20",
    lieu: "Noisy-le-Grand (93)",
    placesMax: 8,
    placesReservees: 0,
    prixUnitaireHT: 590,
    prixGroupeHT: 490,
  },
  {
    id: "SPK-1J-2027-03",
    formation: "sprinkler",
    format: "1j",
    formatLabel: "1 jour",
    dateStart: "2027-03-17",
    dateEnd: "2027-03-17",
    lieu: "Noisy-le-Grand (93)",
    placesMax: 8,
    placesReservees: 0,
    prixUnitaireHT: 590,
    prixGroupeHT: 490,
  },
  {
    id: "SPK-1J-2027-04",
    formation: "sprinkler",
    format: "1j",
    formatLabel: "1 jour",
    dateStart: "2027-04-15",
    dateEnd: "2027-04-15",
    lieu: "Noisy-le-Grand (93)",
    placesMax: 8,
    placesReservees: 0,
    prixUnitaireHT: 590,
    prixGroupeHT: 490,
  },

  // ── Sprinkler 2 jours ───────────────────────────────────────────────────────
  {
    id: "SPK-2J-2027-02",
    formation: "sprinkler",
    format: "2j",
    formatLabel: "2 jours",
    dateStart: "2027-02-10",
    dateEnd: "2027-02-11",
    lieu: "Noisy-le-Grand (93) + visite installation",
    placesMax: 6,
    placesReservees: 0,
    prixUnitaireHT: 1190,
    prixGroupeHT: 990,
  },
  {
    id: "SPK-2J-2027-03",
    formation: "sprinkler",
    format: "2j",
    formatLabel: "2 jours",
    dateStart: "2027-03-25",
    dateEnd: "2027-03-26",
    lieu: "Noisy-le-Grand (93) + visite installation",
    placesMax: 6,
    placesReservees: 0,
    prixUnitaireHT: 1190,
    prixGroupeHT: 990,
  },

  // ── SSI Exploitation — demi-journée ─────────────────────────────────────────
  {
    id: "SSI-DJ-2027-01",
    formation: "ssi",
    format: "demi-journee",
    formatLabel: "Demi-journée (matin)",
    dateStart: "2027-01-23",
    dateEnd: "2027-01-23",
    lieu: "Noisy-le-Grand (93)",
    placesMax: 8,
    placesReservees: 0,
    prixUnitaireHT: 290,
    prixGroupeHT: 240,
  },
  {
    id: "SSI-DJ-2027-03",
    formation: "ssi",
    format: "demi-journee",
    formatLabel: "Demi-journée (matin)",
    dateStart: "2027-03-06",
    dateEnd: "2027-03-06",
    lieu: "Noisy-le-Grand (93)",
    placesMax: 8,
    placesReservees: 0,
    prixUnitaireHT: 290,
    prixGroupeHT: 240,
  },
  {
    id: "SSI-DJ-2027-04",
    formation: "ssi",
    format: "demi-journee",
    formatLabel: "Demi-journée (matin)",
    dateStart: "2027-04-10",
    dateEnd: "2027-04-10",
    lieu: "Noisy-le-Grand (93)",
    placesMax: 8,
    placesReservees: 0,
    prixUnitaireHT: 290,
    prixGroupeHT: 240,
  },

  // ── SSI Exploitation — journée complète ─────────────────────────────────────
  {
    id: "SSI-J-2027-02",
    formation: "ssi",
    format: "journee",
    formatLabel: "Journée complète",
    dateStart: "2027-02-04",
    dateEnd: "2027-02-04",
    lieu: "Noisy-le-Grand (93)",
    placesMax: 8,
    placesReservees: 0,
    prixUnitaireHT: 490,
    prixGroupeHT: 420,
  },
  {
    id: "SSI-J-2027-03",
    formation: "ssi",
    format: "journee",
    formatLabel: "Journée complète",
    dateStart: "2027-03-25",
    dateEnd: "2027-03-25",
    lieu: "Noisy-le-Grand (93)",
    placesMax: 8,
    placesReservees: 0,
    prixUnitaireHT: 490,
    prixGroupeHT: 420,
  },
];

/** Retourne les sessions à venir (dateStart >= aujourd'hui) pour une formation donnée. */
export function getUpcomingSessions(
  formation: "sprinkler" | "ssi",
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
