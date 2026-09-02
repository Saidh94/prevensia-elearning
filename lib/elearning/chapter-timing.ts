/**
 * Durées minimales officielles par chapitre, définies côté serveur.
 *
 * Règle : les valeurs doivent correspondre exactement à celles utilisées
 * côté client (cours/page.tsx — H0B0_CHAPTERS.minSeconds ou buildModuleChapters).
 * C'est cette table qui fait foi pour la validation côté serveur.
 *
 * Pour les modules dont les chapitres sont construits depuis modulesContent
 * (via buildModuleChapters), la valeur est section.estimatedMinutes * 60.
 * Ces modules n'ont pas besoin d'entrée ici — getServerMinSeconds les gère
 * directement depuis modulesContent.
 *
 * Seuls les modules avec des chapitres HARDCODÉS côté client doivent figurer ici.
 */
export const CHAPTER_TIMING: Record<string, Record<string, number>> = {
  h0b0: {
    intro: 240,
    symbols: 210,
    roles: 180,
    "voltage-domains": 240,
    zones: 300,
    access: 270,
    documents: 240,
    environments: 210,
    "movement-tools": 210,
    contacts: 180,
    "current-effects": 210,
    electrisation: 150,
    "body-resistance": 180,
    equipment: 180,
    ppe: 180,
    "authorized-forbidden": 240,
    conduct: 240,
    "classes-materiels-ip": 240,
    summary: 180,
  },
};
