import { b1b2brbcModuleContent } from "./b1b2brbc-content";
import type { ModuleContent, ModuleSection } from "./module-types";

function cloneSection(
  source: ModuleSection,
  overrides: Partial<ModuleSection> = {}
): ModuleSection {
  const baseVisual = source.visual
    ? {
        ...source.visual,
        items: source.visual.items ? [...source.visual.items] : undefined,
      }
    : undefined;

  const overrideVisual = overrides.visual
    ? {
        ...baseVisual,
        ...overrides.visual,
        items: overrides.visual.items
          ? [...overrides.visual.items]
          : overrides.visual.items === undefined
            ? baseVisual?.items
              ? [...baseVisual.items]
              : undefined
            : undefined,
      }
    : baseVisual;

  return {
    ...source,
    content: source.content ? [...source.content] : undefined,
    deepDive: source.deepDive ? [...source.deepDive] : undefined,
    keyPoints: source.keyPoints ? [...source.keyPoints] : undefined,
    forbiddenPoints: source.forbiddenPoints
      ? [...source.forbiddenPoints]
      : undefined,
    legalRefs: source.legalRefs ? [...source.legalRefs] : undefined,
    resourceVideos: source.resourceVideos
      ? source.resourceVideos.map((video) => ({ ...video }))
      : undefined,
    ...overrides,
    visual: overrideVisual,
  };
}

function getSection(id: string): ModuleSection {
  const found = b1b2brbcModuleContent.sections.find((section) => section.id === id);

  if (!found) {
    throw new Error(`Section introuvable dans le socle BT multi-symboles: ${id}`);
  }

  return found;
}

function section(
  id: string,
  overrides: Partial<ModuleSection> = {}
): ModuleSection {
  return cloneSection(getSection(id), overrides);
}

const commonBtIntro =
  "Ce parcours reprend le socle normatif NF C 18-510 utile a l'habilitation visee, sans melanger les roles ni les actes autorises d'autres symboles.";

export const electricalCommercialModuleContent: Record<string, ModuleContent> = {
  "bt-multi-symboles": {
    ...b1b2brbcModuleContent,
    title:
      "B1 / B1V / B2 / B2V / BR / BC / BE - Parcours BT multi-symboles",
    shortTitle: "BT multi-symboles",
    subtitle:
      "Parcours e-learning transversal pour les entreprises qui doivent preparer plusieurs roles electriques basse tension dans un meme dispositif de formation.",
    duration: "8 h 00 a 11 h 00 de theorie guidee",
    objective:
      "Donner une base theorique solide sur les roles B1, B1V, B2, B2V, BR, BC et les actes de verification ou mesurage en basse tension, avant mise en situation presentielle adaptee.",
    audience:
      "Entreprises, services techniques ou centres de maintenance souhaitant disposer d'un socle BT multi-symboles avant requalification par role.",
    finalMessage:
      "Le parcours multi-symboles doit servir de socle commun. La validation finale et la delivrance de l'habilitation restent ensuite bornees au role reel retenu par l'employeur.",
    quizCtaLabel: "Passer au quiz BT multi-symboles",
  },
  "b1-b1v": {
    ...b1b2brbcModuleContent,
    title: "B1 / B1V - Executer des travaux electriques en basse tension",
    shortTitle: "B1 / B1V",
    subtitle:
      "Parcours e-learning cible sur le role d'executant electricien en basse tension, avec focus sur le voisinage, l'execution sous direction et les limites du symbole.",
    duration: "5 h 30 a 7 h 00 de theorie guidee",
    deliveryFormat: "E-learning cible + quiz + sequence pratique d'application",
    objective:
      "Comprendre le role d'executant B1 / B1V, preparer son action dans un cadre dirige, reconnaitre les situations de voisinage, appliquer les consignes et s'arreter en cas d'ecart ou de doute.",
    audience:
      "Electriciens executants, techniciens de maintenance ou personnels techniques amenes a executer des travaux electriques en basse tension sous direction d'un charge de travaux.",
    certificationNote:
      "Ce parcours prepare au role B1 / B1V. La delivrance de l'habilitation releve de l'employeur apres evaluation pratique et verification de l'adequation au poste reel.",
    finalMessage:
      "Un executant B1 / B1V agit dans un cadre prepare. Sa force professionnelle n'est pas d'improviser, mais d'executer juste, de signaler tout ecart et de stopper des que le contexte ne correspond plus au cadre annonce.",
    quizCtaLabel: "Passer au quiz B1 / B1V",
    sections: [
      section("cadre-general", {
        title: "1. Cadre du B1 / B1V et logique d'execution",
        intro:
          "Le B1 / B1V concerne l'executant electricien en basse tension. Ce parcours cible ce role precis, sans melanger direction de travaux, consignation ou intervention generale.",
      }),
      section("roles-responsabilites", {
        title: "2. Role de l'executant et chaine de responsabilite",
      }),
      section("symboles-attributions", {
        title: "3. Symboles B1 / B1V et conditions de voisinage",
      }),
      section("domaines-zones-pnst", {
        title: "4. Voisinage, pieces nues sous tension et limites de l'executant",
      }),
      section("preparation-travaux", {
        title: "5. Se preparer a executer un travail electrique en securite",
      }),
      section("travaux-b1-b2", {
        title: "6. Executer un travail avec B1 / B1V sous direction B2",
        intro:
          "L'executant B1 / B1V agit dans un cadre prepare par le charge de travaux. Il execute, respecte la zone, signale les ecarts et ne glisse jamais vers une prise d'initiative hors role.",
      }),
      section("outils-protections", {
        title: "7. Outils, EPI, EPC et environnement de travail",
      }),
      section("anomalies-urgence", {
        title: "8. Anomalies, ecarts et situations d'urgence",
      }),
      section("retour-experience", {
        title: "9. Retour d'experience et maintien des reflexes",
      }),
      section("synthese", {
        title: "10. Synthese executant B1 / B1V",
      }),
      section("documents-coordination", {
        title: "11. Documents utiles et coordination avec le charge de travaux",
      }),
    ],
  },
  "b2-b2v": {
    ...b1b2brbcModuleContent,
    title: "B2 / B2V - Diriger des travaux electriques en basse tension",
    shortTitle: "B2 / B2V",
    subtitle:
      "Parcours e-learning cible sur le role de charge de travaux en basse tension, l'organisation du chantier electrique, la coordination et la maitrise du voisinage.",
    duration: "6 h 00 a 7 h 30 de theorie guidee",
    deliveryFormat: "E-learning cible + quiz + sequence pratique d'application",
    objective:
      "Comprendre le role B2 / B2V, preparer et diriger les travaux electriques, organiser la zone, coordonner les executants et suspendre l'operation en cas de doute ou d'ecart.",
    audience:
      "Charges de travaux, chefs d'equipe electriciens, responsables techniques ou personnels amenes a preparer, encadrer et diriger des travaux electriques en basse tension.",
    certificationNote:
      "Ce parcours prepare au role B2 / B2V. La delivrance de l'habilitation releve de l'employeur apres evaluation pratique et verification de l'adequation au poste reel.",
    finalMessage:
      "Le charge de travaux B2 / B2V garantit la maitrise du chantier electrique. Son role est d'organiser, de clarifier, de proteger et de suspendre sans hesiter des que le cadre se degrade.",
    quizCtaLabel: "Passer au quiz B2 / B2V",
    sections: [
      section("cadre-general", {
        title: "1. Cadre du B2 / B2V et role de charge de travaux",
      }),
      section("roles-responsabilites", {
        title: "2. Chaine de responsabilite et pilotage du travail electrique",
      }),
      section("symboles-attributions", {
        title: "3. Symboles B2 / B2V et logique de voisinage",
      }),
      section("domaines-zones-pnst", {
        title: "4. Voisinage, pieces nues sous tension et maitrise de la zone",
      }),
      section("preparation-travaux", {
        title: "5. Preparation des travaux et briefing de l'equipe",
      }),
      section("travaux-b1-b2", {
        title: "6. Diriger des travaux avec B2 / B2V",
        intro:
          "Le charge de travaux B2 / B2V prepare, organise, delimite et dirige. Il porte la coherente de securite du chantier et ne delegue jamais la clarte du cadre.",
      }),
      section("outils-protections", {
        title: "7. Moyens, protections et environnement de travail",
      }),
      section("anomalies-urgence", {
        title: "8. Ecarts, suspension de chantier et situations d'urgence",
      }),
      section("retour-experience", {
        title: "9. Retour d'experience et compte rendu de fin de chantier",
      }),
      section("synthese", {
        title: "10. Synthese charge de travaux B2 / B2V",
      }),
      section("documents-coordination", {
        title: "11. Documents, autorisations et coordination de chantier",
      }),
    ],
  },
  br: {
    ...b1b2brbcModuleContent,
    title: "BR - Interventions generales en basse tension",
    shortTitle: "BR",
    subtitle:
      "Parcours e-learning cible sur le role de charge d'intervention generale en basse tension: diagnostic, depannage, remplacement, mesurage et remise en etat dans un cadre strictement borne.",
    duration: "6 h 00 a 7 h 30 de theorie guidee",
    deliveryFormat: "E-learning cible + quiz + sequence pratique d'application",
    objective:
      "Comprendre le cadre BR, preparer une intervention generale, maitriser les limites du depannage et du remplacement, integrer les mesurages et essais limites et refuser toute derive vers des travaux structures.",
    audience:
      "Techniciens de maintenance, depanneurs, electriciens d'exploitation ou personnels amenes a conduire des interventions generales en basse tension dans un cadre formalise.",
    certificationNote:
      "Ce parcours prepare au role BR. La delivrance de l'habilitation releve de l'employeur apres evaluation pratique, analyse du poste et verification de l'adequation entre les actes reels et le symbole retenu.",
    finalMessage:
      "Le BR est un professionnel de l'intervention generale, pas un joker universel. Sa valeur repose sur la methode, la limite et la capacite a requalifier l'operation des qu'elle sort du cadre BR.",
    quizCtaLabel: "Passer au quiz BR",
    sections: [
      section("cadre-general", {
        title: "1. Cadre du BR et limites de l'intervention generale",
      }),
      section("roles-responsabilites", {
        title: "2. Responsabilites du charge d'intervention BR",
      }),
      section("symboles-attributions", {
        title: "3. Symboles BR, voisinage et limites de role",
      }),
      section("domaines-zones-pnst", {
        title: "4. Voisinage, pieces nues sous tension et risques d'intervention",
      }),
      section("preparation-travaux", {
        title: "5. Preparation d'une intervention generale",
      }),
      section("consignation", {
        title: "6. Mise en securite, consignation et verification d'absence de tension",
        intro:
          "Le BR doit savoir se situer vis-a-vis de la mise en securite electrique et de la consignation, sans confondre son role avec celui du charge de consignation BC.",
      }),
      section("interventions-br", {
        title: "7. Depannage, remplacement et remise en etat dans le cadre BR",
      }),
      section("mesurages-essais-connexions", {
        title: "8. Mesurages, essais et remises sous tension limitees",
      }),
      section("outils-protections", {
        title: "9. Moyens techniques, EPI et environnement de travail",
      }),
      section("anomalies-urgence", {
        title: "10. Ecarts, doute technique et situations d'urgence",
      }),
      section("retour-experience", {
        title: "11. Retour d'experience et compte rendu d'intervention",
      }),
      section("synthese", {
        title: "12. Synthese intervention BR",
      }),
      section("documents-coordination", {
        title: "13. Documents et coordination avec l'exploitation",
      }),
    ],
  },
  bc: {
    ...b1b2brbcModuleContent,
    title: "BC - Consignation et deconsignation en basse tension",
    shortTitle: "BC",
    subtitle:
      "Parcours e-learning cible sur le role de charge de consignation en basse tension, la chaine de mise en securite electrique et la fiabilite documentaire indispensable avant toute operation.",
    duration: "5 h 30 a 7 h 00 de theorie guidee",
    deliveryFormat: "E-learning cible + quiz + sequence pratique d'application",
    objective:
      "Comprendre le role BC, maitriser la chaine de consignation, verifier l'absence de tension, fiabiliser la tracabilite et securiser la remise a disposition de l'installation.",
    audience:
      "Responsables techniques, charges de consignation, chefs de chantier ou personnels amenes a porter la responsabilite de la mise en securite electrique en basse tension.",
    certificationNote:
      "Ce parcours prepare au role BC. La delivrance de l'habilitation releve de l'employeur apres evaluation pratique et verification de l'adequation au poste reel.",
    finalMessage:
      "Le BC engage la fiabilite de la mise en securite. Son exigence doit etre documentaire, methodique et tres concrete sur le terrain: identifier, condamner, verifier, tracer et ne jamais presumer.",
    quizCtaLabel: "Passer au quiz BC",
    sections: [
      section("cadre-general", {
        title: "1. Cadre du BC et role de charge de consignation",
      }),
      section("roles-responsabilites", {
        title: "2. Chaine de responsabilite autour de la consignation",
      }),
      section("symboles-attributions", {
        title: "3. Symbole BC et place du charge de consignation",
      }),
      section("domaines-zones-pnst", {
        title: "4. Voisinage, pieces nues sous tension et cadre de securisation",
      }),
      section("preparation-travaux", {
        title: "5. Preparation de la consignation et identification du materiel",
      }),
      section("consignation", {
        title: "6. Chaine complete de consignation et verification d'absence de tension",
      }),
      section("outils-protections", {
        title: "7. Moyens, materiels et conditions de fiabilite d'une consignation",
      }),
      section("anomalies-urgence", {
        title: "8. Anomalies, doute sur la consignation et gestion des ecarts",
      }),
      section("retour-experience", {
        title: "9. Retour d'experience et tracabilite documentaire",
      }),
      section("synthese", {
        title: "10. Synthese charge de consignation BC",
      }),
      section("documents-coordination", {
        title: "11. Documents, autorisations et coordination avec les travaux",
      }),
    ],
  },
  "be-verification-mesurage": {
    ...b1b2brbcModuleContent,
    title: "BE Verification / BE Mesurage - Verifier, mesurer et controler en basse tension",
    shortTitle: "BE Verification / BE Mesurage",
    subtitle:
      "Parcours e-learning cible sur les actes de verification, de mesurage et de controle en basse tension, avec exigence methodique sur l'environnement, les instruments et les limites d'intervention.",
    duration: "5 h 30 a 7 h 00 de theorie guidee",
    deliveryFormat: "E-learning cible + quiz + sequence pratique d'application",
    objective:
      "Comprendre le cadre BE Verification / BE Mesurage, preparer un mesurage ou un controle, maitriser les limites des essais et connexions associees, et refuser toute derive hors du perimetre autorise.",
    audience:
      "Techniciens de controle, personnels de maintenance, metrologues ou operateurs amenes a realiser des verifications et mesurages en basse tension dans un cadre formalise.",
    certificationNote:
      "Ce parcours prepare aux actes BE Verification / BE Mesurage. La delivrance de l'habilitation releve de l'employeur apres evaluation pratique et verification de l'adequation au poste reel.",
    finalMessage:
      "La verification et le mesurage en basse tension exigent methode, bon instrument, bon point de controle et lecture stricte du cadre autorise. Rien n'est anodin quand on reconnecte, teste ou valide un etat electrique.",
    quizCtaLabel: "Passer au quiz BE Verification / BE Mesurage",
    sections: [
      section("cadre-general", {
        title: "1. Cadre du BE Verification / BE Mesurage",
        intro: commonBtIntro,
      }),
      section("roles-responsabilites", {
        title: "2. Responsabilites du verificateur ou du mesureur",
      }),
      section("symboles-attributions", {
        title: "3. Symbole BE et limites des actes de verification ou mesurage",
      }),
      section("domaines-zones-pnst", {
        title: "4. Voisinage, pieces nues sous tension et risques de mesure",
      }),
      section("preparation-travaux", {
        title: "5. Preparation d'une verification ou d'un mesurage",
      }),
      section("consignation", {
        title: "6. Mise en securite electrique et verification d'absence de tension",
      }),
      section("mesurages-essais-connexions", {
        title: "7. Mesurages, essais, connexions et deconnexions dans le cadre BE",
      }),
      section("outils-protections", {
        title: "8. Instruments, EPI et environnement de travail",
      }),
      section("anomalies-urgence", {
        title: "9. Resultats anormaux, doute technique et situations d'urgence",
      }),
      section("retour-experience", {
        title: "10. Retour d'experience et traçabilite des controles",
      }),
      section("synthese", {
        title: "11. Synthese BE Verification / BE Mesurage",
      }),
      section("documents-coordination", {
        title: "12. Documents et coordination de l'acte de verification",
      }),
    ],
  },
};
