import { b1b2brbcModuleContent } from "./b1b2brbc-content";
import type { ModuleContent, ModuleSection } from "./module-types";

function cloneSection(
  source: ModuleSection,
  overrides: Partial<ModuleSection> = {}
): ModuleSection {
  const chapterImagePath = overrides.chapterImagePath ?? source.chapterImagePath;
  const chapterImageAlt = overrides.chapterImageAlt ?? source.chapterImageAlt;

  const baseVisual = source.visual
    ? {
        ...source.visual,
        items: source.visual.items ? [...source.visual.items] : undefined,
      }
    : undefined;

  const visual = baseVisual
    ? {
        ...baseVisual,
        imagePath: chapterImagePath ?? baseVisual.imagePath,
        imageAlt: chapterImageAlt ?? baseVisual.imageAlt,
      }
    : undefined;

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
    visual,
  };
}

function getSection(id: string): ModuleSection {
  const found = b1b2brbcModuleContent.sections.find(
    (section) => section.id === id
  );

  if (!found) {
    throw new Error(`Section introuvable: ${id}`);
  }

  return found;
}

function section(
  id: string,
  overrides: Partial<ModuleSection> = {}
): ModuleSection {
  return cloneSection(getSection(id), overrides);
}

const IMG = {
  b1b2Roles: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-roles.svg",
  b1b2Chaine: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-chaine.svg",
  b1b2Symboles: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-symboles.svg",
  b1b2Travaux: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-travaux.svg",
  b1b2Br: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-br.svg",
  b1b2Consignation: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-consignation.svg",
  b1b2Coordination: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-coordination.svg",
  b1b2Moyens: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-moyens.svg",
  b1b2RemiseEnergie:
    "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-remise-energie.svg",
  b1b2RetourExperience:
    "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-retour-experience.svg",
  b1b2Synthese: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-synthese.svg",

  zonesBt: "/images/modules/electricite/zones-voisinage-bt.jpg",
  tableau: "/images/modules/electricite/tableau-coffret-bt.jpg",
  consignationTerrain:
    "/images/modules/electricite/consignation-vat-balisage.jpg",
  maintenance:
    "/images/modules/electricite/maintenance-environnement-technique.jpg",
  document: "/images/modules/electricite/document-chantier-autorisation.jpg",

  reflexes: "/elearning/h0b0/reflexes-h0b0.png",
  epi: "/elearning/h0b0/epi-epc.png",
};

const VIDEO = {
  chocElectrique: {
    title: "INRS - Choc électrique",
    description:
      "Vidéo pédagogique sur les effets du courant électrique et les risques liés au choc électrique.",
    url: "https://youtu.be/wyJbFJOdGGo",
    provider: "INRS",
    ctaLabel: "Voir la vidéo",
  },
  consignation: {
    title: "INRS - Consignation électrique",
    description:
      "Vidéo pédagogique sur les étapes et les principes de la consignation électrique.",
    url: "https://youtu.be/cCqbrFDNrxA",
    provider: "INRS",
    ctaLabel: "Voir la vidéo",
  },
  zonesDistances: {
    title: "INRS - Zones et distances",
    description:
      "Vidéo pédagogique sur les zones d’environnement électrique et les distances de sécurité.",
    url: "https://youtu.be/NKV4NYJi8Rk",
    provider: "INRS",
    ctaLabel: "Voir la vidéo",
  },
  symboles: {
    title: "INRS - Symboles d’habilitation électrique",
    description:
      "Vidéo pédagogique sur la lecture des symboles d’habilitation électrique et leurs limites.",
    url: "https://youtu.be/-qG3A1eLuUM",
    provider: "INRS",
    ctaLabel: "Voir la vidéo",
  },
};

export const electricalCommercialModuleContent: Record<
  string,
  ModuleContent
> = {
  "b1-b1v": {
    ...b1b2brbcModuleContent,
    title: "B1 / B1V - Executer des travaux electriques en basse tension",
    shortTitle: "B1 / B1V",
    sections: [
      section("cadre-general", { chapterImagePath: IMG.b1b2Roles }),
      section("roles-responsabilites", { chapterImagePath: IMG.b1b2Chaine }),
      section("symboles-attributions", {
        chapterImagePath: IMG.b1b2Symboles,
        resourceVideos: [VIDEO.symboles],
      }),
      section("domaines-zones-pnst", {
        chapterImagePath: IMG.zonesBt,
        resourceVideos: [VIDEO.zonesDistances],
      }),
      section("preparation-travaux", {
        chapterImagePath: IMG.b1b2Coordination,
      }),
      section("travaux-b1-b2", { chapterImagePath: IMG.b1b2Travaux }),
      section("outils-protections", { chapterImagePath: IMG.b1b2Moyens }),
      section("anomalies-urgence", {
        chapterImagePath: IMG.b1b2RemiseEnergie,
        resourceVideos: [VIDEO.chocElectrique],
      }),
      section("retour-experience", {
        chapterImagePath: IMG.b1b2RetourExperience,
      }),
      section("synthese", { chapterImagePath: IMG.b1b2Synthese }),
      section("documents-coordination", {
        chapterImagePath: IMG.b1b2Coordination,
      }),
    ],
  },

  "b2-b2v": {
    ...b1b2brbcModuleContent,
    title: "B2 / B2V - Diriger des travaux electriques en basse tension",
    shortTitle: "B2 / B2V",
    sections: [
      section("cadre-general", { chapterImagePath: IMG.b1b2Roles }),
      section("roles-responsabilites", { chapterImagePath: IMG.b1b2Chaine }),
      section("symboles-attributions", {
        chapterImagePath: IMG.b1b2Symboles,
        resourceVideos: [VIDEO.symboles],
      }),
      section("domaines-zones-pnst", {
        chapterImagePath: IMG.zonesBt,
        resourceVideos: [VIDEO.zonesDistances],
      }),
      section("preparation-travaux", {
        chapterImagePath: IMG.b1b2Coordination,
      }),
      section("travaux-b1-b2", { chapterImagePath: IMG.b1b2Travaux }),
      section("outils-protections", { chapterImagePath: IMG.b1b2Moyens }),
      section("anomalies-urgence", {
        chapterImagePath: IMG.b1b2RemiseEnergie,
        resourceVideos: [VIDEO.chocElectrique],
      }),
      section("retour-experience", {
        chapterImagePath: IMG.b1b2RetourExperience,
      }),
      section("synthese", { chapterImagePath: IMG.b1b2Synthese }),
      section("documents-coordination", {
        chapterImagePath: IMG.b1b2Coordination,
      }),
    ],
  },

  br: {
    ...b1b2brbcModuleContent,
    title: "BR - Interventions generales en basse tension",
    shortTitle: "BR",
    sections: [
      section("cadre-general", { chapterImagePath: IMG.b1b2Roles }),
      section("roles-responsabilites", { chapterImagePath: IMG.b1b2Chaine }),
      section("symboles-attributions", {
        chapterImagePath: IMG.b1b2Symboles,
        resourceVideos: [VIDEO.symboles],
      }),
      section("domaines-zones-pnst", {
        chapterImagePath: IMG.zonesBt,
        resourceVideos: [VIDEO.zonesDistances],
      }),
      section("preparation-travaux", { chapterImagePath: IMG.tableau }),
      section("consignation", {
        chapterImagePath: IMG.b1b2Consignation,
        resourceVideos: [VIDEO.consignation],
      }),
      section("interventions-br", { chapterImagePath: IMG.b1b2Br }),
      section("mesurages-essais-connexions", {
        chapterImagePath: IMG.tableau,
      }),
      section("outils-protections", { chapterImagePath: IMG.b1b2Moyens }),
      section("anomalies-urgence", {
        chapterImagePath: IMG.b1b2RemiseEnergie,
        resourceVideos: [VIDEO.chocElectrique],
      }),
      section("retour-experience", {
        chapterImagePath: IMG.b1b2RetourExperience,
      }),
      section("synthese", { chapterImagePath: IMG.b1b2Synthese }),
      section("documents-coordination", {
        chapterImagePath: IMG.b1b2Coordination,
      }),
    ],
  },

  bc: {
    ...b1b2brbcModuleContent,
    title: "BC - Consignation en basse tension",
    shortTitle: "BC",
    sections: [
      section("cadre-general", { chapterImagePath: IMG.b1b2Roles }),
      section("roles-responsabilites", { chapterImagePath: IMG.b1b2Chaine }),
      section("symboles-attributions", {
        chapterImagePath: IMG.b1b2Symboles,
        resourceVideos: [VIDEO.symboles],
      }),
      section("domaines-zones-pnst", {
        chapterImagePath: IMG.zonesBt,
        resourceVideos: [VIDEO.zonesDistances],
      }),
      section("preparation-travaux", { chapterImagePath: IMG.tableau }),
      section("consignation", {
        chapterImagePath: IMG.b1b2Consignation,
        resourceVideos: [VIDEO.consignation],
      }),
      section("outils-protections", {
        chapterImagePath: IMG.consignationTerrain,
      }),
      section("anomalies-urgence", {
        chapterImagePath: IMG.b1b2RemiseEnergie,
        resourceVideos: [VIDEO.chocElectrique],
      }),
      section("retour-experience", {
        chapterImagePath: IMG.b1b2RetourExperience,
      }),
      section("synthese", { chapterImagePath: IMG.b1b2Synthese }),
      section("documents-coordination", {
        chapterImagePath: IMG.b1b2Coordination,
      }),
    ],
  },
};