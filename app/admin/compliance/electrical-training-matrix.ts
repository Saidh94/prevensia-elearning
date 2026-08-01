export type FormationMatrix = {
  formation: string;
  chapter: string;
  notion: string;
  regulation: string;
  quiz: string;
  competence: string;
}[];
export const H0B0_MATRIX: FormationMatrix = [
  {
    formation: "H0B0",
    chapter: "Chapitre 1 — Cadre de l’habilitation",
    notion: "Obligation d’habilitation électrique",
    regulation: "Code du travail R.4544-9",
    quiz: "Selon le Code du travail, quel article impose que les opérations soient réalisées par du personnel habilité ?",
    competence: "Identifier l’obligation réglementaire d’habilitation",
  },
  {
    formation: "H0B0",
    chapter: "Chapitre 1 — Cadre de l’habilitation",
    notion: "Formation préalable et rôle de l’employeur",
    regulation: "Code du travail R.4544-10",
    quiz: "La formation seule permet-elle d’être habilité ?",
    competence: "Comprendre que l’habilitation est délivrée par l’employeur",
  },

  {
    formation: "H0B0",
    chapter: "Chapitre 2 — Symboles d’habilitation",
    notion: "Signification des lettres B et H",
    regulation: "NF C 18-510",
    quiz: "Que signifie la lettre H ?",
    competence: "Identifier le domaine de tension",
  },
  {
    formation: "H0B0",
    chapter: "Chapitre 2 — Symboles d’habilitation",
    notion: "Signification du chiffre 0",
    regulation: "NF C 18-510",
    quiz: "Que signifie le chiffre 0 ?",
    competence: "Identifier la nature non électrique des opérations",
  },
  {
    formation: "H0B0",
    chapter: "Chapitre 2 — Symboles d’habilitation",
    notion: "Signification du V (voisinage)",
    regulation: "NF C 18-510",
    quiz: "Que signifie le symbole H0V ?",
    competence: "Comprendre la notion de voisinage électrique",
  },

  {
    formation: "H0B0",
    chapter: "Chapitre 3 — Rôles et responsabilités",
    notion: "Responsabilité de l’employeur",
    regulation: "Code du travail",
    quiz: "Qui délivre l’habilitation électrique ?",
    competence: "Identifier les acteurs de la prévention",
  },

  {
    formation: "H0B0",
    chapter: "Chapitre 4 — Domaines de tension",
    notion: "Distinction BT / HT",
    regulation: "NF C 18-510",
    quiz: "En courant alternatif, la basse tension correspond à :",
    competence: "Identifier les domaines de tension",
  },

  {
    formation: "H0B0",
    chapter: "Chapitre 5 — Zones et distances",
    notion: "Distance limite de voisinage simple (DLVS)",
    regulation: "NF C 18-510",
    quiz: "Que signifie DLVS ?",
    competence: "Identifier les distances de sécurité",
  },
  {
    formation: "H0B0",
    chapter: "Chapitre 5 — Zones et distances",
    notion: "Distance limite de voisinage renforcé (DLVR)",
    regulation: "NF C 18-510",
    quiz: "Que signifie DLVR ?",
    competence: "Identifier les zones de danger renforcé",
  },

  {
    formation: "H0B0",
    chapter: "Chapitre 6 — Accès aux zones électriques",
    notion: "Respect du balisage et des accès",
    regulation: "NF C 18-510",
    quiz: "Peut-on franchir un balisage de sa propre initiative ?",
    competence: "Respecter les limites d’accès",
  },

  {
    formation: "H0B0",
    chapter: "Chapitre 7 — Environnement électrique",
    notion: "Influence du milieu (humidité, conductivité)",
    regulation: "INRS",
    quiz: "Quel environnement augmente le risque électrique ?",
    competence: "Identifier les facteurs aggravants",
  },

  {
    formation: "H0B0",
    chapter: "Chapitre 8 — Contacts électriques",
    notion: "Contact direct",
    regulation: "NF C 15-100",
    quiz: "Un contact direct correspond à :",
    competence: "Identifier une situation de contact direct",
  },
  {
    formation: "H0B0",
    chapter: "Chapitre 8 — Contacts électriques",
    notion: "Contact indirect",
    regulation: "NF C 15-100",
    quiz: "Un contact indirect correspond à :",
    competence: "Identifier une situation de contact indirect",
  },

  {
    formation: "H0B0",
    chapter: "Chapitre 9 — Effets du courant",
    notion: "Effets physiologiques du courant",
    regulation: "INRS",
    quiz: "À partir de quelle intensité le risque cardiaque devient-il important ?",
    competence: "Comprendre les effets du courant sur le corps",
  },

  {
    formation: "H0B0",
    chapter: "Chapitre 10 — Accidents électriques",
    notion: "Électrisation et électrocution",
    regulation: "INRS",
    quiz: "L’électrocution correspond à :",
    competence: "Distinguer électrisation et électrocution",
  },

  {
    formation: "H0B0",
    chapter: "Chapitre 11 — Résistance du corps",
    notion: "Influence de l’humidité",
    regulation: "INRS",
    quiz: "Pourquoi un milieu humide augmente-t-il le risque ?",
    competence: "Comprendre les facteurs physiques du risque",
  },

  {
    formation: "H0B0",
    chapter: "Chapitre 12 — Matériels défectueux",
    notion: "Détection d’une anomalie",
    regulation: "NF C 18-510",
    quiz: "Un câble dégradé doit conduire à :",
    competence: "Identifier une situation dangereuse",
  },

  {
    formation: "H0B0",
    chapter: "Chapitre 13 — Protections",
    notion: "Hiérarchie EPC / EPI",
    regulation: "Code du travail",
    quiz: "Les protections collectives sont-elles prioritaires ?",
    competence: "Comprendre les principes de prévention",
  },

  {
    formation: "H0B0",
    chapter: "Chapitre 14 — Limites H0B0",
    notion: "Interdictions d’intervention",
    regulation: "NF C 18-510",
    quiz: "Le titulaire H0B0 peut-il réarmer un disjoncteur ?",
    competence: "Respecter les limites d’habilitation",
  },

  {
    formation: "H0B0",
    chapter: "Chapitre 15 — Conduite à tenir",
    notion: "Gestion d’un accident électrique",
    regulation: "INRS",
    quiz: "En cas d’électrisation, quel est le premier réflexe ?",
    competence: "Réagir en sécurité face à un accident",
  },

  {
    formation: "H0B0",
    chapter: "Chapitre 16 — Synthèse",
    notion: "Règles fondamentales de sécurité",
    regulation: "NF C 18-510",
    quiz: "La bonne conduite en cas de doute est :",
    competence: "Appliquer les règles fondamentales de prévention",
  },
];