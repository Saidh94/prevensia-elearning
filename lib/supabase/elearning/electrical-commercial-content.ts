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
  symbolesTravaux:
    "/images/modules/electricite/symboles-habilitation-travaux-electriques.jpg",
  distancesLocaux:
    "/images/modules/electricite/distances-locaux-acces.jpg",
  reflexes: "/elearning/h0b0/reflexes-h0b0.png",
  epi: "/elearning/h0b0/epi-epc.png",
};

const VIDEO = {
  chocElectrique: {
    title: "INRS - Choc \u00e9lectrique",
    description:
      "Vid\u00e9o p\u00e9dagogique sur les effets du courant \u00e9lectrique et les risques li\u00e9s au choc \u00e9lectrique.",
    url: "https://youtu.be/wyJbFJOdGGo",
    provider: "INRS",
    ctaLabel: "Voir la vid\u00e9o",
  },
  consignation: {
    title: "INRS - Consignation \u00e9lectrique",
    description:
      "Vid\u00e9o p\u00e9dagogique sur les \u00e9tapes et les principes de la consignation \u00e9lectrique.",
    url: "https://youtu.be/cCqbrFDNrxA",
    provider: "INRS",
    ctaLabel: "Voir la vid\u00e9o",
  },
  zonesDistances: {
    title: "INRS - Zones et distances",
    description:
      "Vid\u00e9o p\u00e9dagogique sur les zones d'environnement \u00e9lectrique et les distances de s\u00e9curit\u00e9.",
    url: "https://youtu.be/NKV4NYJi8Rk",
    provider: "INRS",
    ctaLabel: "Voir la vid\u00e9o",
  },
  symboles: {
    title: "INRS - Symboles d'habilitation \u00e9lectrique",
    description:
      "Vid\u00e9o p\u00e9dagogique sur la lecture des symboles d'habilitation \u00e9lectrique et leurs limites.",
    url: "https://youtu.be/-qG3A1eLuUM",
    provider: "INRS",
    ctaLabel: "Voir la vid\u00e9o",
  },
};

export const electricalCommercialModuleContent: Record<string, ModuleContent> = {
  "bt-multi-symboles": {
    ...b1b2brbcModuleContent,
    title:
      "B1 / B1V / B2 / B2V / BR / BC / BE - Parcours multi-symboles en basse tension",
    shortTitle: "BT multi-symboles",
    subtitle:
      "Parcours e-learning structure pour les techniciens et electriciens devant executer, diriger, intervenir, consigner ou verifier en basse tension selon la logique de la NF C 18-510.",
    duration: "8 h 00 a 11 h 00 de theorie guidee",
    deliveryFormat:
      "E-learning guide + quiz + journee presentielle d'application selon les symboles retenus",
    objective:
      "Comprendre les frontieres entre B1, B1V, B2, B2V, BR, BC et BE, preparer une operation en securite, tenir son role sans derive et reconnaitre les situations qui imposent l'arret ou la requalification.",
    audience:
      "Electriciens, techniciens de maintenance, responsables techniques et personnels amenes a intervenir sur des installations basse tension avec plusieurs symboles possibles selon les missions confiees.",
    sections: [
      section("cadre-general", { chapterImagePath: IMG.b1b2Roles }),
      section("roles-responsabilites", {
        chapterImagePath: IMG.b1b2Br,
        intro:
          "Le BR conduit des interventions generales en basse tension. Son role ne se confond ni avec l'execution de travaux B1/B2 ni avec la consignation complete du BC.",
        content: [
          "Le BR intervient pour diagnostiquer, depanner, remplacer, raccorder, mesurer ou remettre en service dans un cadre basse tension defini. Il tient une autonomie technique plus forte que le B1, mais reste dans les limites de l'intervention generale.",
          "Il doit savoir reconnaitre quand l'anomalie releve encore d'un depannage raisonnable et quand elle devient un travail, une consignation complete, une exploration multiple ou une situation necessitant une autre organisation.",
          "Le BR ne banalise jamais une mesure, un essai ou une remise sous tension. Il garde une logique de maitrise progressive du risque et suspend l'action des que le cadre se brouille.",
        ],
        keyPoints: [
          "Le BR depanne, mesure et remet en service dans son cadre.",
          "Le BR n'est ni un BC ni un charge de travaux B2.",
          "Requalifier fait partie de la competence attendue.",
        ],
      }),
      section("symboles-attributions", {
        chapterImagePath: IMG.symbolesTravaux,
        resourceVideos: [VIDEO.symboles],
      }),
      section("domaines-zones-pnst", {
        chapterImagePath: IMG.zonesBt,
        resourceVideos: [VIDEO.zonesDistances],
      }),
      section("preparation-travaux", {
        chapterImagePath: IMG.document,
      }),
      section("consignation", {
        chapterImagePath: IMG.consignationTerrain,
        resourceVideos: [VIDEO.consignation],
      }),
      section("travaux-b1-b2", { chapterImagePath: IMG.b1b2Travaux }),
      section("interventions-br", {
        chapterImagePath: IMG.maintenance,
        intro:
          "L'intervention BR commence par un diagnostic cadre, continue par une action proportionnee, puis se termine par une verification et une remise en service controlee si le contexte le permet.",
        content: [
          "Le BR sait distinguer un remplacement, un raccordement, une recherche simple de defaut, une mesure utile et une remise en service. Cette lecture de l'action evite de transformer un depannage en chantier improvise.",
          "Pendant l'intervention, il verifie l'etat du materiel, l'absence de derive vers plusieurs circuits, la coherence du repere et la possibilite de revenir a un etat sur. Si ces conditions ne sont plus reunies, il suspend et requalifie.",
          "La remise en service n'est pas un automatisme. Elle suppose que la cause de l'anomalie soit comprise, que le materiel soit remis en etat et que le contexte ne presente plus de signal d'alerte.",
        ],
        keyPoints: [
          "Diagnostiquer avant d'agir.",
          "Intervenir sans deriver vers des travaux hors cadre.",
          "Remettre en service seulement si la situation est redevenue fiable.",
        ],
      }),
      section("mesurages-essais-connexions", {
        chapterImagePath: IMG.tableau,
      }),
      section("outils-protections", {
        chapterImagePath: IMG.epi,
        intro:
          "Pour un executant B1 ou B1V, les protections ne servent pas a rendre possible n'importe quel geste. Elles servent a travailler dans un cadre deja rendu acceptable par l'organisation, le balisage et les protections collectives.",
        content: [
          "Le B1 ou B1V verifie d'abord la presence et l'etat des protections collectives : capotage, ecran, obstacle, balisage, delimitation de zone et maintien du voisinage hors d'atteinte.",
          "Les EPI viennent en complement de ce cadre. Ils ne compensent jamais une consigne floue, un balisage absent, un capot retire ou une zone devenue incoherente avec le travail demande.",
          "L'executant ne degrade pas le dispositif de protection pour aller plus vite. S'il manque une protection, il s'arrete et fait remonter l'information au charge de travaux.",
        ],
        keyPoints: [
          "Protection collective avant protection individuelle.",
          "Pas d'execution si la zone n'est pas correctement tenue.",
          "Le bon reflexe reste l'arret, pas la compensation personnelle.",
        ],
      }),
      section("anomalies-urgence", {
        chapterImagePath: IMG.reflexes,
        resourceVideos: [VIDEO.chocElectrique],
      }),
      section("retour-experience", {
        chapterImagePath: IMG.b1b2RetourExperience,
      }),
      section("synthese", { chapterImagePath: IMG.b1b2Synthese }),
      section("documents-coordination", {
        chapterImagePath: IMG.document,
        content: [
          "Une opération BE produit et utilise de l'information. Schéma, plan de contrôle, repérage local, valeurs attendues, compte rendu et signalement d'écart font partie intégrante du travail.",
          "Le résultat d'une vérification ou d'un mesurage doit être restitué de façon compréhensible et exploitable. Un chiffre sans contexte, un repère ambigu ou une conclusion non tracée fragilisent toute la suite de l'exploitation.",
          "La coordination consiste ici à faire circuler une information fiable: qui a contrôlé, quoi, où, dans quelles conditions et avec quelle conclusion opérationnelle.",
        ],
        keyPoints: [
          "Mesurer, c'est aussi restituer proprement le résultat.",
          "La traçabilité donne sa valeur au contrôle.",
          "Une information floue propage le risque technique.",
        ],
      }),
    ],
  },

  "b1-b1v": {
    ...b1b2brbcModuleContent,
    title: "B1 / B1V - Executer des travaux electriques en basse tension",
    shortTitle: "B1 / B1V",
    subtitle:
      "Parcours centre sur le role d'executant electricien, le respect des consignes, le voisinage et la maitrise du perimetre d'action en basse tension.",
    objective:
      "Tenir correctement un role d'executant B1 ou B1V, reconnaitre les limites du voisinage, appliquer les consignes sans improvisation et signaler immediatement tout ecart ou doute.",
    audience:
      "Electriciens executants, techniciens batiment et personnels charges d'executer des travaux electriques en basse tension dans un cadre prepare par un charge de travaux.",
    sections: [
      section("cadre-general", { chapterImagePath: IMG.b1b2Roles }),
      section("roles-responsabilites", {
        chapterImagePath: IMG.b1b2Chaine,
        intro:
          "Le B1 ou B1V est un executant. Son role consiste a appliquer une consigne de travail, dans un perimetre defini, sans se substituer au charge de travaux ni decider seul d'un changement de methode.",
        content: [
          "L'executant B1 intervient sur des travaux electriques en basse tension dans un cadre prepare. Il ne choisit pas seul le circuit, la methode, la zone ou le niveau de protection. Il applique ce qui a ete defini et s'assure de l'avoir compris avant de commencer.",
          "Le B1V ajoute la contrainte du voisinage renforce. Il doit donc connaitre la limite physique de sa zone, les parties nues sous tension presentes a proximite et les conditions qui rendent l'approche interdite.",
          "Une bonne formation B1/B1V doit apprendre a tenir son role sans glissement: executer, signaler, s'arreter, faire clarifier. Si la situation change, si le dossier ne correspond plus ou si une piece voisine devient exposante, l'executant n'improvise pas: il stoppe et alerte.",
          "Le charge de travaux B2 prepare, balise, brief l'equipe et garde la maitrise d'ensemble. Le B1 ne prend pas la main sur l'organisation. Cette distinction protege autant la personne que le chantier.",
        ],
        keyPoints: [
          "B1 execute dans un cadre defini.",
          "B1V execute en tenant compte du voisinage renforce.",
          "L'executant n'etend pas seul sa mission.",
          "Au moindre doute: stop et remontee d'information.",
        ],
        practicalCase:
          "Exemple : un executant B1 constate qu'un coffret voisin reste accessible et que le balisage ne correspond plus au dossier du matin. Il suspend sa tache et demande la revalidation du cadre avant reprise.",
      }),
      section("symboles-attributions", {
        chapterImagePath: IMG.symbolesTravaux,
        resourceVideos: [VIDEO.symboles],
      }),
      section("domaines-zones-pnst", {
        chapterImagePath: IMG.zonesBt,
        resourceVideos: [VIDEO.zonesDistances],
      }),
      section("preparation-travaux", {
        chapterImagePath: IMG.tableau,
        intro:
          "Pour un B1 ou B1V, la preparation ne sert pas a organiser le chantier: elle sert a comprendre exactement ce qui lui est demande, sur quel materiel et dans quelles limites.",
        content: [
          "Avant d'executer, le B1 doit savoir identifier le materiel concerne, reconnaitre le point de travail, comprendre le balisage mis en place et verifier que la consigne orale ou ecrite est coherente avec le terrain.",
          "Il verifie aussi ses moyens immediats: outillage prevu, EPI utiles, accessibilite, eclairage, absence d'obstacle et possibilite de se retirer rapidement si la situation change.",
          "Cette preparation d'executant n'a pas pour but de redessiner l'organisation. Elle a pour but de s'assurer que l'ordre donne est clair, faisable et compris sans interpretation personnelle.",
        ],
        keyPoints: [
          "Je sais sur quoi j'agis.",
          "Je connais ma limite de zone.",
          "Je n'extrapole pas une consigne incomplete.",
        ],
      }),
      section("travaux-b1-b2", {
        chapterImagePath: IMG.b1b2Travaux,
        intro:
          "Le travail B1/B1V est un travail execute sous conduite. La securite repose autant sur le geste que sur la discipline d'execution.",
        content: [
          "L'executant B1 applique les consignes du charge de travaux, respecte la zone delimitee, utilise les moyens prevus et signale tout ecart sans chercher a le compenser seul.",
          "Il ne depose pas un balisage, ne deplace pas un ecran ou une protection collective, ne modifie pas le choix du point de travail et ne poursuit pas une tache si le contexte s'est degrade.",
          "Si une partie voisine apparait sous tension, si le materiel ne correspond pas a ce qui etait annonce ou si l'operation demande finalement une initiative technique non prevue, l'action s'arrete. C'est justement un comportement attendu d'un bon executant.",
        ],
        keyPoints: [
          "Consigne claire avant execution.",
          "Respect strict du perimetre.",
          "Arret immediat si le cadre change.",
        ],
      }),
      section("outils-protections", {
        chapterImagePath: IMG.epi,
        intro:
          "Pour un charge de travaux B2 ou B2V, les protections sont aussi un sujet d'organisation. Il doit verifier que les moyens collectifs et les moyens individuels sont coherents avec la zone, le voisinage et la mission.",
        content: [
          "Le B2/B2V controle la presence des protections collectives avant demarrage : balisage, ecrans, delimitation, capotage, acces et interfaces avec l'environnement voisin.",
          "Il verifie egalement que les executants disposent des bons EPI et qu'ils savent dans quel cadre ils s'utilisent. Un EPI ne corrige jamais une preparation insuffisante ni une zone mal delimitee.",
          "Si un moyen de protection est absent, degrade ou mal adapte, le B2 suspend l'operation, fait corriger le cadre et rebrief l'equipe avant toute reprise.",
        ],
        keyPoints: [
          "Le B2/B2V valide le dispositif de protection avant execution.",
          "Un EPI ne remplace pas une organisation sure.",
          "Pas de reprise tant que le cadre n'est pas completement retabli.",
        ],
      }),
      section("anomalies-urgence", {
        chapterImagePath: IMG.reflexes,
        resourceVideos: [VIDEO.chocElectrique],
        content: [
          "Un executant B1/B1V n'a pas a gerer seul une anomalie electrique. Son premier role est d'interrompre l'action, de se proteger, d'eviter l'exposition d'un tiers et d'alerter selon l'organisation prevue.",
          "En cas de doute sur l'etat electrique, de bruit anormal, d'odeur, d'echauffement, d'arc ou de presence inattendue de tension, il ne touche plus, ne teste pas au hasard et ne cherche pas a terminer vite.",
          "Si une personne est victime, la conduite a tenir reste organisee: suppression ou isolement du danger si c'est possible sans s'exposer, alerte des secours, protection de la zone et application des gestes de secours dans le cadre de ses competences.",
        ],
        keyPoints: [
          "J'arrete, je me protege, j'alerte.",
          "Je ne termine jamais vite fait une tache devenue douteuse.",
          "Le secours commence par la suppression du danger sans surexposition.",
        ],
      }),
      section("retour-experience", {
        chapterImagePath: IMG.b1b2RetourExperience,
      }),
      section("synthese", { chapterImagePath: IMG.b1b2Synthese }),
      section("documents-coordination", {
        chapterImagePath: IMG.document,
        content: [
          "Une opération BE produit et utilise de l'information. Schéma, plan de contrôle, repérage local, valeurs attendues, compte rendu et signalement d'écart font partie intégrante du travail.",
          "Le résultat d'une vérification ou d'un mesurage doit être restitué de façon compréhensible et exploitable. Un chiffre sans contexte, un repère ambigu ou une conclusion non tracée fragilisent toute la suite de l'exploitation.",
          "La coordination consiste ici à faire circuler une information fiable: qui a contrôlé, quoi, où, dans quelles conditions et avec quelle conclusion opérationnelle.",
        ],
        keyPoints: [
          "Mesurer, c'est aussi restituer proprement le résultat.",
          "La traçabilité donne sa valeur au contrôle.",
          "Une information floue propage le risque technique.",
        ],
      }),
    ],
  },

  "b2-b2v": {
    ...b1b2brbcModuleContent,
    title: "B2 / B2V - Diriger des travaux electriques en basse tension",
    shortTitle: "B2 / B2V",
    subtitle:
      "Parcours centre sur le role de charge de travaux : preparation, briefing, surveillance d'equipe et arret de l'operation si le cadre n'est plus maitrise.",
    objective:
      "Preparer et diriger des travaux electriques en basse tension, organiser le briefing, controler la zone et stopper l'operation des qu'un ecart remet en cause le cadre de securite.",
    audience:
      "Charges de travaux, chefs d'equipe et techniciens amenes a organiser et diriger des travaux electriques en basse tension avec ou sans voisinage.",
    sections: [
      section("cadre-general", { chapterImagePath: IMG.b1b2Roles }),
      section("roles-responsabilites", {
        chapterImagePath: IMG.b1b2Coordination,
        intro:
          "Le B2 ou B2V dirige des travaux. Sa responsabilite principale n'est pas de faire a la place de l'equipe, mais de preparer, coordonner, surveiller et interrompre si le cadre de securite n'est plus tenu.",
        content: [
          "Le charge de travaux B2 definit le cadre d'execution, verifie la coherence des informations, precise la zone, les limites, les moyens et les interfaces. Il garde une vision d'ensemble que l'executant n'a pas a assumer seul.",
          "Le B2V doit integrer en plus la maitrise du voisinage renforce. Il decide si le balisage, les ecrans, la delimitation et l'organisation sont suffisants pour maintenir l'equipe hors de la zone dangereuse.",
          "Une partie essentielle du role B2 consiste a dire non a une reprise prematuree, a une consigne floue ou a une adaptation improvisee du travail. Sa valeur se mesure autant a l'arret qu'a la conduite du chantier.",
        ],
        keyPoints: [
          "Le B2 prepare, dirige et surveille.",
          "Le B2V tient aussi la maitrise du voisinage renforce.",
          "Diriger, c'est aussi savoir suspendre.",
        ],
        practicalCase:
          "Exemple : un charge de travaux B2V constate que la zone delimitee ne couvre plus correctement une partie nue voisine apres deplacement d'un materiel. Il suspend le travail, refait le balisage et rebrief l'equipe.",
      }),
      section("symboles-attributions", {
        chapterImagePath: IMG.symbolesTravaux,
        resourceVideos: [VIDEO.symboles],
      }),
      section("domaines-zones-pnst", {
        chapterImagePath: IMG.zonesBt,
        resourceVideos: [VIDEO.zonesDistances],
      }),
      section("preparation-travaux", {
        chapterImagePath: IMG.document,
        intro:
          "Pour un B2 ou B2V, la preparation ne se limite pas a avoir le plan. Elle consiste a construire un cadre de travail clair, partage et tenable jusqu'a la fin de l'operation.",
        content: [
          "Le charge de travaux identifie le materiel, verifie les documents, choisit les moyens de prevention, fixe les points d'arret, anticipe les interfaces et prepare le briefing de debut d'operation.",
          "Il precise qui fait quoi, dans quelle zone, avec quels outils, sous quelle consigne et dans quelles conditions on suspend l'action. Cette clarification en amont evite que l'equipe improvise sur place.",
          "En voisinage, la preparation doit aussi traiter explicitement les distances, les parties exposees, les protections collectives et la compatibilite entre la mission confiee et le symbole reellement detenu par chaque intervenant.",
        ],
        keyPoints: [
          "Un chantier bien prepare limite l'exposition.",
          "Le briefing fait partie du travail.",
          "Le voisinage se traite avant le premier geste.",
        ],
      }),
      section("travaux-b1-b2", {
        chapterImagePath: IMG.b1b2Coordination,
        intro:
          "Le B2/B2V tient la maitrise du chantier pendant l'execution. Il coordonne, observe, ajuste le cadre et stoppe des que la situation sort du scenario prepare.",
        content: [
          "Diriger des travaux signifie garder la lecture du risque pendant toute l'execution: surveillance de la zone, discipline des acces, maintien des protections, coherence des gestes et gestion des interfaces.",
          "Le B2 veille a ce qu'aucun executant ne se retrouve seul face a une decision qui depasse son role. Si une difficulte technique apparait, il reprend la main, fait suspendre et requalifie si necessaire.",
          "Le B2V garde un point d'attention supplementaire sur les distances et les parties nues voisines. Une modification d'environnement, meme mineure en apparence, peut imposer un arret immediat.",
        ],
        keyPoints: [
          "Le B2 garde la vision d'ensemble.",
          "Aucun ecart ne doit etre banalise.",
          "Le cadre se maintient jusqu'a la cloture du travail.",
        ],
      }),
      section("outils-protections", {
        chapterImagePath: IMG.epi,
        intro:
          "Pour le BE, la qualité des mesures dépend des instruments, mais aussi des protections et du maintien d'un environnement de travail cohérent avec le niveau de risque.",
        content: [
          "L'opérateur contrôle l'état apparent de ses instruments, la cohérence des cordons, accessoires et plages d'utilisation, ainsi que la compatibilité de l'ensemble avec le domaine de tension rencontré.",
          "Les EPI et EPC restent soumis à la même hiérarchie que dans les autres habilitations: protection collective d'abord, protection individuelle ensuite, sans jamais transformer un contrôle en intervention autorisée de fait.",
          "Un cordon douteux, une pointe dégradée, un capot absent, une zone encombrée ou un voisinage mal maîtrisé suffisent à suspendre l'opération.",
        ],
        keyPoints: [
          "L'instrument fait partie du dispositif de sécurité.",
          "Un contrôle n'est valable que dans un environnement maîtrisé.",
          "Pas de mesure si les moyens ou la zone sont douteux.",
        ],
      }),
      section("anomalies-urgence", {
        chapterImagePath: IMG.reflexes,
        resourceVideos: [VIDEO.chocElectrique],
      }),
      section("retour-experience", {
        chapterImagePath: IMG.b1b2RetourExperience,
      }),
      section("synthese", { chapterImagePath: IMG.b1b2Synthese }),
      section("documents-coordination", {
        chapterImagePath: IMG.document,
      }),
    ],
  },

  br: {
    ...b1b2brbcModuleContent,
    title: "BR - Interventions generales en basse tension",
    shortTitle: "BR",
    subtitle:
      "Parcours centre sur l'intervention generale : diagnostic, depannage, remplacement, mesure et remise en service controlee dans les limites du BR.",
    objective:
      "Preparer et conduire une intervention generale BR, tenir les limites du depannage, mesurer sans deriver vers les travaux et remettre en service de facon controlee.",
    audience:
      "Techniciens de maintenance, electriciens de depannage et personnels amenes a conduire des interventions generales en basse tension dans un cadre maitrise.",
    sections: [
      section("cadre-general", { chapterImagePath: IMG.b1b2Roles }),
      section("roles-responsabilites", {
        chapterImagePath: IMG.b1b2Consignation,
        intro:
          "Le BC tient un role de fiabilisation. Il met l'installation dans un etat de securite verifie, indisponible pour l'exploitation normale, puis en assure la restitution selon une chaine d'information claire.",
        content: [
          "Le charge de consignation BC ne travaille pas 'a peu pres hors tension'. Il organise une indisponibilite fiable et verifiable de l'installation selon les etapes prevues par la norme et les procedures du site.",
          "Son role est a la fois technique et organisationnel : separer, condamner, identifier, verifier l'absence de tension, formaliser, informer le charge de travaux et garder la maitrise de la restitution.",
          "Le BC refuse toute levee implicite, toute identification approximative ou toute restitution basee sur l'habitude. Sa competence centrale est la fiabilite, pas la rapidite.",
        ],
        keyPoints: [
          "Le BC rend l'installation sure et indisponible de facon tracee.",
          "La chaine documentaire fait partie de la consignation.",
          "Aucune restitution sans reprise formelle de l'information.",
        ],
      }),
      section("symboles-attributions", {
        chapterImagePath: IMG.symbolesTravaux,
        resourceVideos: [VIDEO.symboles],
      }),
      section("domaines-zones-pnst", {
        chapterImagePath: IMG.zonesBt,
        resourceVideos: [VIDEO.zonesDistances],
      }),
      section("preparation-travaux", {
        chapterImagePath: IMG.tableau,
        intro:
          "Une opération BE se prépare comme une opération de contrôle: point de mesure identifié, méthode connue, instrument adapté, limites de zone comprises et possibilité de repli si l'environnement n'est pas conforme.",
        content: [
          "Avant de mesurer ou vérifier, l'opérateur confirme le matériel concerné, le point de contrôle, la présence éventuelle de tension, le domaine de mesure attendu et l'environnement immédiat.",
          "Il vérifie aussi la cohérence entre la demande, le schéma ou le repérage local, et ce qu'il voit réellement sur le terrain. Une mesure sur un mauvais départ ou dans un mauvais contexte peut être techniquement fausse et électriquement dangereuse.",
          "La préparation comprend enfin le choix du bon instrument, de sa plage d'utilisation et de ses accessoires, sans bricolage ni substitution improvisée.",
        ],
        keyPoints: [
          "Le point de mesure doit être identifié avant l'approche.",
          "Une mesure fiable commence par une lecture fiable du terrain.",
          "Le bon instrument fait partie de la sécurité.",
        ],
      }),
      section("consignation", {
        chapterImagePath: IMG.consignationTerrain,
        resourceVideos: [VIDEO.consignation],
        content: [
          "Dans le cadre BR, la mise en securite doit rester strictement proportionnee au besoin de l'intervention et aux procedures prevues. L'intervenant ne s'invente pas charge de consignation s'il n'a ni le role ni l'organisation adaptee.",
          "La separation, la condamnation visible, l'identification et la VAT doivent etre lues comme des barrieres de fiabilite. Si l'une d'elles n'est pas tenable ou pas claire, l'intervention doit etre revue ou requalifiee.",
          "L'intervention generale BR devient dangereuse lorsqu'elle glisse vers une exploration de plusieurs departs, une remise sous tension concurrente ou une confusion sur le circuit reel. C'est la que la discipline de consignation protege l'operateur.",
        ],
        keyPoints: [
          "Le BR securise dans son cadre, il ne banalise pas la consignation.",
          "Une consignation floue impose l'arret ou la requalification.",
          "Pas de confiance aveugle dans un simple voyant d'etat.",
        ],
      }),
      section("interventions-br", { chapterImagePath: IMG.maintenance }),
      section("mesurages-essais-connexions", {
        chapterImagePath: IMG.tableau,
      }),
      section("outils-protections", {
        chapterImagePath: IMG.epi,
        intro:
          "Pour le BE, la qualité des mesures dépend des instruments, mais aussi des protections et du maintien d'un environnement de travail cohérent avec le niveau de risque.",
        content: [
          "L'opérateur contrôle l'état apparent de ses instruments, la cohérence des cordons, accessoires et plages d'utilisation, ainsi que la compatibilité de l'ensemble avec le domaine de tension rencontré.",
          "Les EPI et EPC restent soumis à la même hiérarchie que dans les autres habilitations: protection collective d'abord, protection individuelle ensuite, sans jamais transformer un contrôle en intervention autorisée de fait.",
          "Un cordon douteux, une pointe dégradée, un capot absent, une zone encombrée ou un voisinage mal maîtrisé suffisent à suspendre l'opération.",
        ],
        keyPoints: [
          "L'instrument fait partie du dispositif de sécurité.",
          "Un contrôle n'est valable que dans un environnement maîtrisé.",
          "Pas de mesure si les moyens ou la zone sont douteux.",
        ],
      }),
      section("anomalies-urgence", {
        chapterImagePath: IMG.reflexes,
        resourceVideos: [VIDEO.chocElectrique],
      }),
      section("retour-experience", {
        chapterImagePath: IMG.b1b2RetourExperience,
      }),
      section("synthese", { chapterImagePath: IMG.b1b2Synthese }),
      section("documents-coordination", {
        chapterImagePath: IMG.document,
      }),
    ],
  },

  bc: {
    ...b1b2brbcModuleContent,
    title: "BC - Consignation en basse tension",
    shortTitle: "BC",
    subtitle:
      "Parcours centre sur la chaine de consignation : separation, condamnation, identification, VAT, documents et securisation fiable de l'installation.",
    objective:
      "Realiser ou piloter une consignation basse tension fiable, tracer les etapes documentaires et empecher toute remise sous tension intempestive ou erreur d'identification.",
    audience:
      "Charges de consignation, responsables techniques et personnels amenes a securiser une installation avant travaux ou intervention.",
    sections: [
      section("cadre-general", { chapterImagePath: IMG.b1b2Roles }),
      section("roles-responsabilites", {
        chapterImagePath: IMG.b1b2Symboles,
        intro:
          "Le BE Vérification / BE Mesurage agit pour contrôler, mesurer et interpréter dans un cadre défini. Son rôle n'est ni de conduire des travaux, ni de dépanner librement, ni de consigner hors de son périmètre.",
        content: [
          "Le titulaire BE Verification / BE Mesurage prépare un contrôle ou un mesurage selon une méthode, un instrument adapté et un environnement de travail maîtrisé. Il sait pourquoi il mesure, où il mesure et comment il sécurise l'acte de mesure.",
          "Il doit distinguer très clairement une vérification, un mesurage, un essai simple, une lecture d'état et une intervention de dépannage. Cette frontière conditionne la sécurité et la validité technique du résultat.",
          "Le rôle BE impose aussi une discipline documentaire: résultat exploitable, repère du point de contrôle, traçabilité minimale et signalement immédiat de tout écart qui ferait sortir l'opération du cadre prévu.",
        ],
        keyPoints: [
          "Mesurer ne veut pas dire intervenir librement.",
          "Le cadre de contrôle doit être préparé avant le geste.",
          "La qualité du résultat dépend de la méthode autant que de l'instrument.",
        ],
      }),
      section("symboles-attributions", {
        chapterImagePath: IMG.symbolesTravaux,
        resourceVideos: [VIDEO.symboles],
      }),
      section("domaines-zones-pnst", {
        chapterImagePath: IMG.zonesBt,
        resourceVideos: [VIDEO.zonesDistances],
      }),
      section("preparation-travaux", { chapterImagePath: IMG.document }),
      section("consignation", {
        chapterImagePath: IMG.consignationTerrain,
        resourceVideos: [VIDEO.consignation],
        intro:
          "Le coeur du role BC est ici: rendre une installation indisponible de facon fiable, verifiable et tracable jusqu'a sa restitution.",
        content: [
          "Le BC enchaine les etapes de consignation sans raccourci: separation, condamnation, identification, verification d'absence de tension et, selon le cas, mise a la terre et en court-circuit. Chacune de ces etapes sert a enlever une source d'illusion de securite.",
          "La valeur du BC ne se mesure pas a la vitesse mais a la fiabilite du resultat. Un cadenas visible, un reperage sans ambiguite, une attestation exploitable et une VAT methodee sont plus importants qu'une execution rapide.",
          "Le chapitre doit aussi montrer que la consignation n'est pas seulement une operation technique. C'est une chaine de responsabilite entre charge de consignation, charge de travaux, exploitant et equipe, avec restitution claire a la fin.",
        ],
        keyPoints: [
          "Separer, condamner, identifier, verifier.",
          "La VAT bascule d'une coupure supposee a un etat verifie.",
          "Une consignation n'est finie qu'une fois restituee et tracee.",
        ],
        practicalCase:
          "Exemple : deux departs proches portent un reperage ancien et partiellement efface. Le BC suspend la consignation, fait clarifier l'identification et refuse toute levee de doute par simple habitude d'exploitation.",
      }),
      section("outils-protections", {
        chapterImagePath: IMG.consignationTerrain,
        intro:
          "Pour le BC, les moyens de protection sont d'abord des moyens de consignation fiables : organe de separation, dispositif de condamnation, signalisation, VAT et supports documentaires.",
        content: [
          "Le BC prepare et controle les moyens utiles a la consignation : cadenas, dispositif de condamnation, etiquette, repere, VAT adaptee, EPI/EPC utiles et documents de suivi.",
          "Il ne se contente pas de posseder ces moyens. Il verifie qu'ils sont compatibles avec l'installation, disponibles au bon moment et utilises dans le bon ordre.",
          "Un materiel de consignation absent, inadapté ou douteux impose de stopper la chaine avant de creer une illusion de securite.",
        ],
        keyPoints: [
          "La fiabilite des moyens conditionne la fiabilite de la consignation.",
          "La VAT et la condamnation ne sont pas optionnelles.",
          "Pas de consignation credible avec des moyens impropres ou incomplets.",
        ],
      }),
      section("anomalies-urgence", {
        chapterImagePath: IMG.reflexes,
        resourceVideos: [VIDEO.chocElectrique],
      }),
      section("retour-experience", {
        chapterImagePath: IMG.b1b2RetourExperience,
      }),
      section("synthese", { chapterImagePath: IMG.b1b2Consignation }),
      section("documents-coordination", {
        chapterImagePath: IMG.document,
        content: [
          "Pour le BC, la documentation ne sert pas seulement a preparer. Elle sert a tracer la chaine de consignation, a formaliser les etapes realisees et a permettre une restitution sans ambiguite.",
          "Attestation de consignation, information au charge de travaux, point de remise a disposition, levee de condamnation et retour d'etat doivent etre coherents. Une consignation techniquement juste mais documentairement floue reste une situation a risque.",
          "La coordination prend ici une forme particuliere: personne ne reenergise, ne retire un cadenas ou ne requalifie seul un etat d'installation sans reprise formelle de la chaine d'information.",
        ],
        keyPoints: [
          "Tracer la consignation du debut a la restitution.",
          "Pas de levee implicite ou supposee.",
          "La documentation complete fait partie de la securite.",
        ],
      }),
    ],
  },

  "be-verification-mesurage": {
    ...b1b2brbcModuleContent,
    title: "BE Verification / BE Mesurage - Verifier et mesurer en basse tension",
    shortTitle: "BE Verification / BE Mesurage",
    subtitle:
      "Parcours centre sur l'usage des instruments, la verification, le mesurage, l'environnement de travail et les limites entre controle, intervention et travaux.",
    objective:
      "Preparer une operation de verification ou de mesurage en basse tension, utiliser les instruments adaptes et tenir les limites qui separent le controle des travaux ou interventions.",
    audience:
      "Techniciens de controle, de maintenance, de mise au point ou d'essais amenes a effectuer des verifications et mesurages en basse tension dans un cadre formalise.",
    sections: [
      section("cadre-general", { chapterImagePath: IMG.b1b2Roles }),
      section("roles-responsabilites", {
        chapterImagePath: IMG.b1b2Symboles,
        intro:
          "Le BE Vérification / BE Mesurage agit pour contrôler, mesurer et interpréter dans un cadre défini. Son rôle n'est ni de conduire des travaux, ni de dépanner librement, ni de consigner hors de son périmètre.",
        content: [
          "Le titulaire BE Verification / BE Mesurage prépare un contrôle ou un mesurage selon une méthode, un instrument adapté et un environnement de travail maîtrisé. Il sait pourquoi il mesure, où il mesure et comment il sécurise l'acte de mesure.",
          "Il doit distinguer très clairement une vérification, un mesurage, un essai simple, une lecture d'état et une intervention de dépannage. Cette frontière conditionne la sécurité et la validité technique du résultat.",
          "Le rôle BE impose aussi une discipline documentaire: résultat exploitable, repère du point de contrôle, traçabilité minimale et signalement immédiat de tout écart qui ferait sortir l'opération du cadre prévu.",
        ],
        keyPoints: [
          "Mesurer ne veut pas dire intervenir librement.",
          "Le cadre de contrôle doit être préparé avant le geste.",
          "La qualité du résultat dépend de la méthode autant que de l'instrument.",
        ],
      }),
      section("symboles-attributions", {
        chapterImagePath: IMG.symbolesTravaux,
        resourceVideos: [VIDEO.symboles],
      }),
      section("domaines-zones-pnst", {
        chapterImagePath: IMG.zonesBt,
        resourceVideos: [VIDEO.zonesDistances],
      }),
      section("preparation-travaux", {
        chapterImagePath: IMG.tableau,
        intro:
          "Une opération BE se prépare comme une opération de contrôle: point de mesure identifié, méthode connue, instrument adapté, limites de zone comprises et possibilité de repli si l'environnement n'est pas conforme.",
        content: [
          "Avant de mesurer ou vérifier, l'opérateur confirme le matériel concerné, le point de contrôle, la présence éventuelle de tension, le domaine de mesure attendu et l'environnement immédiat.",
          "Il vérifie aussi la cohérence entre la demande, le schéma ou le repérage local, et ce qu'il voit réellement sur le terrain. Une mesure sur un mauvais départ ou dans un mauvais contexte peut être techniquement fausse et électriquement dangereuse.",
          "La préparation comprend enfin le choix du bon instrument, de sa plage d'utilisation et de ses accessoires, sans bricolage ni substitution improvisée.",
        ],
        keyPoints: [
          "Le point de mesure doit être identifié avant l'approche.",
          "Une mesure fiable commence par une lecture fiable du terrain.",
          "Le bon instrument fait partie de la sécurité.",
        ],
      }),
      section("mesurages-essais-connexions", {
        chapterImagePath: IMG.maintenance,
        intro:
          "Le BE Vérification / BE Mesurage doit savoir réaliser l'acte technique utile sans dériver vers le dépannage, le travail électrique ou la remise en service hors cadre.",
        content: [
          "Mesurer, c'est obtenir une information exploitable sur un point identifié, avec une méthode adaptée et un instrument compatible avec le domaine de tension et l'environnement.",
          "Vérifier, c'est confronter l'état observé à un attendu technique ou documentaire. Cela suppose de savoir interpréter sans extrapoler. Un résultat anormal n'autorise pas automatiquement une action corrective.",
          "Si le contrôle révèle une anomalie qui appelle un dépannage, une modification, une consignation ou un travail dirigé, l'opérateur BE sort de son cadre et transmet pour requalification.",
        ],
        keyPoints: [
          "Je mesure pour comprendre un état, pas pour improviser une réparation.",
          "Un résultat anormal déclenche souvent une requalification.",
          "Le mesurage est un acte technique encadré, pas un geste anodin.",
        ],
      }),
      section("outils-protections", { chapterImagePath: IMG.epi }),
      section("anomalies-urgence", {
        chapterImagePath: IMG.reflexes,
        resourceVideos: [VIDEO.chocElectrique],
      }),
      section("synthese", { chapterImagePath: IMG.b1b2Synthese }),
      section("documents-coordination", {
        chapterImagePath: IMG.document,
      }),
    ],
  },
};
