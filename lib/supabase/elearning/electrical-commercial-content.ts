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
  epiTerrain: "/elearning/b1-b1v-b2-b2v-br-bc/epi-intervention.jpg",
  outilsElectricien:
    "/elearning/b1-b1v-b2-b2v-br-bc/outils-électricien.jpg",
  consignationPhoto: "/elearning/b1-b1v-b2-b2v-br-bc/consignation.jpg",
  consignationSteps:
    "/elearning/b1-b1v-b2-b2v-br-bc/étapes-consignation.jpg",
  armoireDanger:
    "/elearning/b1-b1v-b2-b2v-br-bc/danger-armoires-électriques.jpg",
  reflexes:
    "/elearning/b1-b1v-b2-b2v-br-bc/danger-armoires-électriques.jpg",
  epi: "/elearning/b1-b1v-b2-b2v-br-bc/epi-intervention.jpg",
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
      "Parcours e-learning structure pour les techniciens et électriciens devant executer, diriger, intervenir, consigner ou vérifier en basse tension selon la logique de la NF C 18-510.",
    duration: "8 h 00 a 11 h 00 de théorie guidee",
    deliveryFormat:
      "E-learning guide + quiz + journee presentielle d'application selon les symboles retenus",
    objective:
      "Comprendre les frontieres entre B1, B1V, B2, B2V, BR, BC et BE, préparer une opération en sécurité, tenir son role sans derive et reconnaitre les situations qui imposent l'arret ou la requalification.",
    audience:
      "électriciens, techniciens de maintenance, responsables techniques et personnels amenes a intervenir sur des installations basse tension avec plusieurs symboles possibles selon les missions confiees.",
    sections: [
      section("cadre-general", { chapterImagePath: IMG.b1b2Roles }),
      section("roles-responsabilites", {
        chapterImagePath: IMG.b1b2Roles,
        intro:
          "Un titulaire multi-symboles ne devient pas un technicien universel. Il doit distinguer les roles B1, B1V, B2, B2V, BR, BC et BE pour ne jamais glisser d'une mission a l'autre sans requalification.",
        content: [
          "Un meme professionnel peut etre executeur, chargé de travaux, intervenant général, chargé de consignation ou operateur de vérification selon la mission confiee. La sécurité depend donc de la clarte du role reel tenu a chaque etape.",
          "Ces frontieres doivent rester visibles sur le terrain: executer sans improviser, diriger sans banaliser, intervenir sans deriver, consigner sans ambiguite et controler sans se transformer en depanneur.",
          "La valeur du multi-symboles n'est pas de tout melanger. Elle est de savoir quel cadre s'applique, avec quelles limites, pour quelle opération et sous quelle responsabilite.",
        ],
        keyPoints: [
          "Plusieurs symboles n'autorisent pas plusieurs roles en meme temps.",
          "Chaque mission garde son propre cadre de sécurité.",
          "La requalification reste un reflexe central.",
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
          "L'intervention BR commence par un diagnostic cadre, continue par une action proportionnee, puis se termine par une vérification et une remise en service controlee si le contexte le permet.",
        content: [
          "Le BR sait distinguer un remplacement, un raccordement, une recherche simple de defaut, une mesure utile et une remise en service. Cette lecture de l'action evite de transformer un depannage en chantier improvise.",
          "Pendant l'intervention, il vérifié l'etat du materiel, l'absence de derive vers plusieurs circuits, la cohérence du repère et la possibilite de revenir a un etat sur. Si ces conditions ne sont plus reunies, il suspend et requalifie.",
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
        chapterImagePath: IMG.epiTerrain,
        intro:
          "Les protections se lisent d'abord au regard du role tenu. Les moyens utiles a un exécutant ne couvrent pas automatiquement ceux du chargé de travaux, du BR ou du BC.",
        content: [
          "Le professionnel vérifié les protections collectives de la zone, puis les EPI et l'outillage associes a la mission du moment. Il ne transpose pas automatiquement un équipement d'un role a un autre.",
          "Cette logique evite deux erreurs classiques: croire qu'un EPI autorise tout, ou penser qu'un outillage disponible suffit a changer de mission.",
          "Le bon niveau multi-symboles consiste a savoir quel moyen utiliser, pourquoi, et surtout quand l'absence d'un moyen impose l'arret ou la requalification.",
        ],
        keyPoints: [
          "Le role tenu conditionne les moyens a vérifier.",
          "Protection collective avant protection individuelle.",
          "Un équipement disponible n'autorise pas un changement de mission.",
        ],
      }),
      section("anomalies-urgence", {
        chapterImagePath: IMG.armoireDanger,
        resourceVideos: [VIDEO.chocElectrique],
        intro:
          "Une anomalie revele souvent une erreur de lecture du role, du circuit ou du cadre. Le bon reflexe est d'arreter et de relire la situation avant toute reprise.",
        content: [
          "Une odeur, un echauffement, un arc, une incoherence documentaire ou un doute sur la consignation imposent de stopper l'action et d'identifier quel cadre est encore applicable.",
          "L'urgence ne transforme pas un exécutant en BR, un BR en BC ou un B2 en depanneur sans préparation. Elle impose au contraire plus de discipline.",
        ],
        keyPoints: [
          "Anomalie = arret et relecture du cadre.",
          "L'urgence ne change pas le symbole detenu.",
          "Le bon role doit etre reconfirme avant reprise.",
        ],
      }),
      section("retour-experience", {
        chapterImagePath: IMG.b1b2RetourExperience,
      }),
      section("synthese", { chapterImagePath: IMG.b1b2Synthese }),
      section("documents-coordination", {
        chapterImagePath: IMG.document,
        content: [
          "Les documents servent a faire tenir ensemble plusieurs roles sans confusion. Consignes, reperage, analyse de risque, point d'arret, compte rendu et restitution doivent raconter la meme opération.",
          "Un technicien peut tenir des symboles differents selon les taches confiees, mais il ne change pas de role au milieu du chantier sans requalification. La documentation doit donc dire clairement qui execute, qui dirige, qui intervient, qui consigne et qui controle.",
          "La coordination consiste a faire circuler une information exploitable du debut a la fin: bon circuit, bonne zone, bon role, bonne restitution. Toute contradiction documentaire bloque la reprise.",
        ],
        keyPoints: [
          "Plusieurs symboles exigent une documentation encore plus claire.",
          "Le role reel doit etre lisible dans chaque document.",
          "Une information contradictoire propage le risque technique.",
        ],
      }),
    ],
  },

  "b1-b1v": {
    ...b1b2brbcModuleContent,
    title: "B1 / B1V - Executer des travaux électriques en basse tension",
    shortTitle: "B1 / B1V",
    subtitle:
      "Parcours centre sur le role d'exécutant électricien, le respect des consignes, le voisinage et la maîtrise du périmètre d'action en basse tension.",
    objective:
      "Tenir correctement un role d'exécutant B1 ou B1V, reconnaitre les limites du voisinage, appliquer les consignes sans improvisation et signaler immediatement tout ecart ou doute.",
    audience:
      "électriciens exécutants, techniciens batiment et personnels charges d'executer des travaux électriques en basse tension dans un cadre prépare par un chargé de travaux.",
    sections: [
      section("cadre-general", { chapterImagePath: IMG.b1b2Roles }),
      section("roles-responsabilites", {
        chapterImagePath: IMG.b1b2Chaine,
        intro:
          "Le B1 ou B1V est un exécutant. Son role consiste a appliquer une consigne de travail, dans un périmètre défini, sans se substituer au chargé de travaux ni decider seul d'un changement de méthode.",
        content: [
          "L'exécutant B1 intervient sur des travaux électriques en basse tension dans un cadre prépare. Il ne choisit pas seul le circuit, la méthode, la zone ou le niveau de protection. Il applique ce qui a ete défini et s'assure de l'avoir compris avant de commencer.",
          "Le B1V ajoute la contrainte du voisinage renforce. Il doit donc connaitre la limite physique de sa zone, les parties nues sous tension presentes a proximite et les conditions qui rendent l'approche interdite.",
          "L'exécutant B1/B1V tient son role sans glissement: il execute, signale, s'arrete et fait clarifier. Si la situation change, si le dossier ne correspond plus ou si une piece voisine devient exposante, il n'improvise pas: il stoppe et alerte.",
          "Le chargé de travaux B2 prépare, balise, brief l'equipe et garde la maîtrise d'ensemble. Le B1 ne prend pas la main sur l'organisation. Cette distinction protege autant la personne que le chantier.",
        ],
        keyPoints: [
          "B1 execute dans un cadre défini.",
          "B1V execute en tenant compte du voisinage renforce.",
          "L'exécutant n'etend pas seul sa mission.",
          "Au moindre doute: stop et remontee d'information.",
        ],
        practicalCase:
          "Exemple : un exécutant B1 constate qu'un coffret voisin reste accessible et que le balisage ne correspond plus au dossier du matin. Il suspend sa tache et demande la revalidation du cadre avant reprise.",
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
          "Pour un B1 ou B1V, la préparation ne sert pas a organiser le chantier: elle sert a comprendre exactement ce qui lui est demande, sur quel materiel et dans quelles limites.",
        content: [
          "Avant d'executer, le B1 doit savoir identifier le materiel concerne, reconnaitre le point de travail, comprendre le balisage mis en place et vérifier que la consigne orale ou ecrite est coherente avec le terrain.",
          "Il vérifié aussi ses moyens immediats: outillage prevu, EPI utiles, accessibilite, eclairage, absence d'obstacle et possibilite de se retirer rapidement si la situation change.",
          "Cette préparation d'exécutant n'a pas pour but de redessiner l'organisation. Elle a pour but de s'assurer que l'ordre donne est clair, faisable et compris sans interpretation personnelle.",
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
          "Le travail B1/B1V est un travail execute sous conduite. La sécurité repose autant sur le geste que sur la discipline d'execution.",
        content: [
          "L'exécutant B1 applique les consignes du chargé de travaux, respecte la zone delimitee, utilise les moyens prevus et signale tout ecart sans chercher a le compenser seul.",
          "Il ne depose pas un balisage, ne deplace pas un ecran ou une protection collective, ne modifie pas le choix du point de travail et ne poursuit pas une tache si le contexte s'est degrade.",
          "Si une partie voisine apparait sous tension, si le materiel ne correspond pas a ce qui etait annonce ou si l'opération demande finalement une initiative technique non prevue, l'action s'arrete. C'est justement un comportement attendu d'un bon exécutant.",
        ],
        keyPoints: [
          "Consigne claire avant execution.",
          "Respect strict du périmètre.",
          "Arret immediat si le cadre change.",
        ],
      }),
      section("outils-protections", {
        chapterImagePath: IMG.epiTerrain,
        intro:
          "Pour un exécutant B1 ou B1V, les protections ne rendent pas le travail possible par magie. Elles viennent completer un cadre deja prépare, balise et maintenu par l'organisation du chantier.",
        content: [
          "Le B1 ou B1V vérifié d'abord la presence des protections collectives : balisage, ecrans, capotage, delimitation de zone et maîtrise du voisinage. Il n'entame pas le travail si ce cadre n'est pas clairement en place.",
          "Les EPI viennent ensuite en complement. Ils ne remplacent jamais une zone mal tenue, un capot retire ou une consigne devenue floue. L'exécutant ne compense pas seul une protection absente.",
          "Si une protection est deplacee, endommagee ou incoherente avec la mission, l'exécutant s'arrete et remonte l'information au chargé de travaux avant toute reprise.",
        ],
        keyPoints: [
          "Protection collective d'abord, protection individuelle ensuite.",
          "Le B1/B1V ne banalise pas une protection manquante.",
          "Le bon reflexe reste l'arret, pas l'improvisation.",
        ],
      }),
      section("anomalies-urgence", {
        chapterImagePath: IMG.reflexes,
        resourceVideos: [VIDEO.chocElectrique],
        content: [
          "Un exécutant B1/B1V n'a pas a gerer seul une anomalie électrique. Son premier role est d'interrompre l'action, de se proteger, d'éviter l'exposition d'un tiers et d'alerter selon l'organisation prevue.",
          "En cas de doute sur l'etat électrique, de bruit anormal, d'odeur, d'echauffement, d'arc ou de presence inattendue de tension, il ne touche plus, ne teste pas au hasard et ne cherche pas a terminer vite.",
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
          "Pour un exécutant B1 ou B1V, les documents servent d'abord a comprendre le bon materiel, la bonne zone et la bonne consigne. Il ne travaille pas sur une interpretation personnelle d'un ordre incomplet.",
          "Le B1/B1V doit savoir lire un reperage, une consigne ecrite, un plan simple et un briefing de chantier. Si ces informations sont contradictoires avec le terrain, il suspend et demande clarification.",
          "La coordination le concerne aussi: il doit faire remonter sans delai tout ecart, toute anomalie et toute situation qui ferait sortir l'action du cadre prépare.",
        ],
        keyPoints: [
          "Le bon document evite le mauvais geste.",
          "Une incoherence se traite avant la reprise.",
          "Le B1/B1V signale, il n'interprete pas seul.",
        ],
      }),
    ],
  },

  "b2-b2v": {
    ...b1b2brbcModuleContent,
    title: "B2 / B2V - Diriger des travaux électriques en basse tension",
    shortTitle: "B2 / B2V",
    subtitle:
      "Parcours centre sur le role de chargé de travaux : préparation, briefing, surveillance d'equipe et arret de l'opération si le cadre n'est plus maîtrise.",
    objective:
      "préparer et diriger des travaux électriques en basse tension, organiser le briefing, controler la zone et stopper l'opération des qu'un ecart remet en cause le cadre de sécurité.",
    audience:
      "Charges de travaux, chefs d'equipe et techniciens amenes a organiser et diriger des travaux électriques en basse tension avec ou sans voisinage.",
    sections: [
      section("cadre-general", { chapterImagePath: IMG.b1b2Roles, estimatedMinutes: 18 }),
      section("roles-responsabilites", {
        chapterImagePath: IMG.b1b2Coordination,
        estimatedMinutes: 16,
        intro:
          "Le B2 ou B2V dirige des travaux. Sa responsabilite principale n'est pas de faire a la place de l'equipe, mais de préparer, coordonner, surveiller et interrompre si le cadre de sécurité n'est plus tenu.",
        content: [
          "Le chargé de travaux B2 définit le cadre d'execution, vérifié la cohérence des informations, précise la zone, les limites, les moyens et les interfaces. Il garde une vision d'ensemble que l'exécutant n'a pas a assumer seul.",
          "Le B2V doit integrer en plus la maîtrise du voisinage renforce. Il decide si le balisage, les ecrans, la delimitation et l'organisation sont suffisants pour maintenir l'equipe hors de la zone dangereuse.",
          "Une partie essentielle du role B2 consiste a dire non a une reprise prematuree, a une consigne floue ou a une adaptation improvisee du travail. Sa valeur se mesure autant a l'arret qu'a la conduite du chantier.",
        ],
        keyPoints: [
          "Le B2 prépare, dirige et surveille.",
          "Le B2V tient aussi la maîtrise du voisinage renforce.",
          "Diriger, c'est aussi savoir suspendre.",
        ],
        practicalCase:
          "Exemple : un chargé de travaux B2V constate que la zone delimitee ne couvre plus correctement une partie nue voisine apres deplacement d'un materiel. Il suspend le travail, refait le balisage et rebrief l'equipe.",
      }),
      section("symboles-attributions", {
        chapterImagePath: IMG.symbolesTravaux,
        estimatedMinutes: 14,
        resourceVideos: [VIDEO.symboles],
      }),
      section("domaines-zones-pnst", {
        chapterImagePath: IMG.zonesBt,
        estimatedMinutes: 16,
        resourceVideos: [VIDEO.zonesDistances],
      }),
      section("preparation-travaux", {
        chapterImagePath: IMG.document,
        estimatedMinutes: 18,
        intro:
          "Pour un B2 ou B2V, la préparation ne se limite pas a avoir le plan. Elle consiste a construire un cadre de travail clair, partage et tenable jusqu'a la fin de l'opération.",
        content: [
          "Le chargé de travaux identifie le materiel, vérifié les documents, choisit les moyens de prévention, fixe les points d'arret, anticipe les interfaces et prépare le briefing de debut d'opération.",
          "Il précise qui fait quoi, dans quelle zone, avec quels outils, sous quelle consigne et dans quelles conditions on suspend l'action. Cette clarification en amont evite que l'equipe improvise sur place.",
          "En voisinage, la préparation doit aussi traiter explicitement les distances, les parties exposees, les protections collectives et la compatibilite entre la mission confiee et le symbole reellement detenu par chaque intervenant.",
        ],
        keyPoints: [
          "Un chantier bien prépare limite l'exposition.",
          "Le briefing fait partie du travail.",
          "Le voisinage se traite avant le premier geste.",
        ],
      }),
      section("travaux-b1-b2", {
        chapterImagePath: IMG.b1b2Coordination,
        estimatedMinutes: 18,
        intro:
          "Le B2/B2V tient la maîtrise du chantier pendant l'execution. Il coordonne, observe, ajuste le cadre et stoppe des que la situation sort du scenario prépare.",
        content: [
          "Diriger des travaux signifie garder la lecture du risque pendant toute l'execution: surveillance de la zone, discipline des acces, maintien des protections, cohérence des gestes et gestion des interfaces.",
          "Le B2 veille a ce qu'aucun exécutant ne se retrouve seul face a une decision qui depasse son role. Si une difficulte technique apparait, il reprend la main, fait suspendre et requalifie si nécessaire.",
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
        estimatedMinutes: 14,
        intro:
          "Pour un B2 ou B2V, les protections sont d'abord un sujet d'organisation du chantier. Il doit vérifier que les moyens collectifs, les moyens individuels et la tenue de zone restent coherents avec la mission reelle.",
        content: [
          "Le chargé de travaux controle la presence des protections collectives avant le premier geste : balisage, ecrans, capotages, delimitations, acces, maintien du voisinage et prévention des franchissements.",
          "Il vérifié aussi que les exécutants disposent des EPI utiles et qu'ils savent dans quel cadre ils s'emploient. Un EPI ne corrige jamais une préparation insuffisante ni un balisage incoherent.",
          "Si une protection est absente, deplacee, degradee ou devenue inadaptee apres modification de l'environnement, le B2 ou B2V suspend, fait remettre le cadre en conformite puis rebrief l'equipe.",
        ],
        keyPoints: [
          "Le B2 vérifié d'abord les protections collectives.",
          "Les EPI completent le cadre, ils ne l'autorisent pas.",
          "Une protection douteuse impose une suspension immediate.",
        ],
        practicalCase:
          "Exemple : en cours de chantier, une barriere est deplacee pour faire passer du materiel. Le B2V interrompt l'opération, remet la delimitation en etat et ne reprend qu'apres vérification du voisinage.",
      }),
      section("anomalies-urgence", {
        chapterImagePath: IMG.maintenance,
        estimatedMinutes: 12,
        resourceVideos: [VIDEO.chocElectrique],
        intro:
          "Pour un B2 ou B2V, une anomalie ne se gere pas dans la precipitation. Son role est de faire stopper, de proteger l'equipe, de figer la situation utile et d'engager la bonne chaine d'alerte.",
        content: [
          "Un bruit anormal, un echauffement, une odeur, un arc, une incoherence documentaire ou une évolution du voisinage imposent d'arreter l'execution puis de reprendre une lecture globale de la scene.",
          "Le B2 ou B2V s'assure qu'aucun exécutant ne reste expose, maintient ou reconstitue la zone, interdit toute improvisation corrective et vérifié si l'opération doit etre simplement suspendue ou completement requalifiee.",
          "En cas d'urgence humaine, il articule protection, alerte et secours sans ajouter un risque électrique supplementaire. Il ne banalise ni le doute sur l'etat électrique, ni la pression de remise en service.",
        ],
        keyPoints: [
          "Anomalie visible = arret et reprise de lecture du risque.",
          "Le doute sur le voisinage ou la consignation impose la suspension.",
          "L'urgence ne justifie jamais une reprise improvisee.",
        ],
        practicalCase:
          "Exemple : pendant les travaux, une odeur d'echauffement apparait sur un depart voisin non concerne. Le B2V fait cesser l'action, interdit toute poursuite locale et fait requalifier la situation avant reprise.",
      }),
      section("retour-experience", {
        chapterImagePath: IMG.b1b2RetourExperience,
        estimatedMinutes: 10,
        intro:
          "Le retour d'experience fait partie du role B2. Il sert a consolider l'organisation, pas seulement a clore le chantier.",
        content: [
          "Le chargé de travaux releve les ecarts observes, les points de fragilite du balisage, les difficultes de coordination, les ambiguities documentaires et les signaux faibles qui auraient pu faire sortir l'equipe du cadre prevu.",
          "Ce retour permet d'ajuster les futures préparations, d'ameliorer les consignes et de renforcer la culture de suspension lorsque le terrain ne correspond plus au scenario annonce.",
        ],
        keyPoints: [
          "Le retour d'experience nourrit la prévention.",
          "Un ecart analyse aujourd'hui evite un accident demain.",
        ],
      }),
      section("synthese", {
        chapterImagePath: IMG.b1b2Synthese,
        estimatedMinutes: 10,
        content: [
          "Le B2 ou B2V tient le cadre: il prépare, brief, délimite, surveille, suspend et fait clarifier avant toute reprise.",
          "Sa performance ne se mesure pas a la vitesse d'execution mais a la capacite de garder l'equipe dans une situation lisible, maitrisee et conforme au symbole detenu par chacun.",
        ],
        keyPoints: [
          "Diriger, c'est préparer et surveiller jusqu'au bout.",
          "Le B2V ajoute la maîtrise du voisinage renforce.",
          "Un bon chargé de travaux sait arreter a temps.",
        ],
      }),
      section("documents-coordination", {
        chapterImagePath: IMG.document,
        estimatedMinutes: 14,
        intro:
          "Pour un B2 ou B2V, les documents et la coordination ne sont pas un habillage administratif. Ils sont une partie directe du dispositif de sécurité.",
        content: [
          "Consignes, reperage, analyse de risque, autorisation, briefing, point d'arret, compte rendu et conditions de remise a disposition doivent raconter la meme opération sans contradiction.",
          "Le chargé de travaux veille a ce que chaque exécutant travaille sur la bonne information, au bon endroit et avec les bons points de reprise. Une incoherence documentaire doit etre traitee avant l'action, pas pendant.",
          "La coordination consiste aussi a gerer les interfaces : exploitant, autres corps d'etat, maintenance voisine, energie annexe, acces, verrouillage de zone et reprise d'activite apres chantier.",
        ],
        keyPoints: [
          "Une information incoherente bloque la reprise.",
          "Le briefing et le compte rendu font partie de la sécurité.",
          "La coordination protege autant que le geste technique.",
        ],
      }),
    ],
  },

  br: {
    ...b1b2brbcModuleContent,
    title: "BR - Interventions generales en basse tension",
    shortTitle: "BR",
    subtitle:
      "Parcours centre sur l'intervention générale : diagnostic, depannage, remplacement, mesure et remise en service controlee dans les limites du BR.",
    objective:
      "préparer et conduire une intervention générale BR, tenir les limites du depannage, mesurer sans deriver vers les travaux et remettre en service de facon controlee.",
    audience:
      "Techniciens de maintenance, électriciens de depannage et personnels amenes a conduire des interventions generales en basse tension dans un cadre maîtrise.",
    sections: [
      section("cadre-general", { chapterImagePath: IMG.b1b2Roles }),
      section("roles-responsabilites", {
        chapterImagePath: IMG.b1b2Br,
        intro:
          "Le BR conduit des interventions generales en basse tension. Il depanne, remplace, raccorde, mesure ou remet en service dans un cadre strictement défini, sans glisser vers des travaux ou une consignation complete hors de son role.",
        content: [
          "Le BR tient une autonomie technique plus forte qu'un exécutant B1, mais cette autonomie reste encadree. Il sait diagnostiquer, choisir une action proportionnee et reconnaitre le moment ou l'intervention doit etre suspendue ou requalifiee.",
          "Son role n'est ni celui du chargé de travaux B2, ni celui du chargé de consignation BC. Il doit donc éviter les glissements de mission : un depannage qui devient chantier, une mesure qui devient modification, une remise sous tension qui devient prise de risque.",
          "La competence BR se voit dans la maîtrise du périmètre: agir juste, agir sobrement et savoir dire stop quand la situation sort du cadre prevu.",
        ],
        keyPoints: [
          "Le BR intervient dans les limites de l'intervention générale.",
          "Le BR ne se substitue ni au B2 ni au BC.",
          "Requalifier fait partie du role.",
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
        chapterImagePath: IMG.maintenance,
        intro:
          "Une intervention BR se prépare comme une action ciblee: bon équipement, bon circuit, bonne hypothese de defaut, bonne limite d'action et bonne issue possible de remise en service.",
        content: [
          "Avant d'intervenir, le BR identifie le materiel concerne, la fonction attendue, le symptome reel, le contexte de tension, les interfaces voisines et les conditions de retrait si la situation se degrade.",
          "Il vérifié la cohérence entre la demande, le reperage local, l'etat apparent du materiel et la possibilite d'une action proportionnee. Si l'intervention suppose plusieurs circuits, des travaux plus larges ou une consignation complete, elle doit etre requalifiee.",
          "Cette préparation evite de transformer un depannage en chantier improvise. Le BR agit dans un cadre lisible, pas dans l'urgence mal analysee.",
        ],
        keyPoints: [
          "Diagnostiquer avant d'agir.",
          "vérifier que l'intervention reste dans le cadre BR.",
          "Requalifier si le périmètre devient plus large que prevu.",
        ],
      }),
      section("consignation", {
        chapterImagePath: IMG.consignationTerrain,
        resourceVideos: [VIDEO.consignation],
        content: [
          "Dans le cadre BR, la mise en sécurité doit rester strictement proportionnee au besoin de l'intervention et aux procedures prevues. L'intervenant ne s'invente pas chargé de consignation s'il n'a ni le role ni l'organisation adaptee.",
          "La separation, la condamnation visible, l'identification et la VAT doivent etre lues comme des barrieres de fiabilite. Si l'une d'elles n'est pas tenable ou pas claire, l'intervention doit etre revue ou requalifiee.",
          "L'intervention générale BR devient dangereuse lorsqu'elle glisse vers une exploration de plusieurs departs, une remise sous tension concurrente ou une confusion sur le circuit reel. C'est la que la discipline de consignation protege l'operateur.",
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
        chapterImagePath: IMG.outilsElectricien,
        intro:
          "Pour le BR, les outils et protections doivent rester proportionnes a l'intervention générale. Le bon materiel permet d'agir juste; le mauvais materiel pousse a improviser.",
        content: [
          "Le BR controle l'etat de son outillage, la cohérence de ses moyens de mesure, la compatibilite des accessoires et la presence des protections collectives utiles avant d'engager l'intervention.",
          "Les EPI et EPC gardent la meme hierarchie que partout ailleurs: la zone et les protections collectives d'abord, les EPI ensuite. Un gant, un ecran facial ou un outillage isole ne legitimisent jamais une situation mal maitrisee.",
          "Si l'outillage est douteux, si la zone n'est plus lisible ou si la protection prevue manque, l'intervention s'arrete. Le BR n'improvise pas avec un materiel de fortune.",
        ],
        keyPoints: [
          "Le bon outillage limite les derives de geste.",
          "Protection collective d'abord, protection individuelle ensuite.",
          "Pas d'intervention BR avec des moyens douteux.",
        ],
      }),
      section("anomalies-urgence", {
        chapterImagePath: IMG.armoireDanger,
        resourceVideos: [VIDEO.chocElectrique],
        intro:
          "Pour le BR, une anomalie n'appelle pas une réaction rapide au hasard. Elle impose une suspension, une relecture du risque et une decision de poursuite, de retrait ou de requalification.",
        content: [
          "Un echauffement, une odeur, un bruit, un arc, une mesure incoherente ou un comportement inhabituel du materiel doivent etre lus comme des signaux d'arret. Le BR ne force pas une remise en service douteuse.",
          "En cas d'urgence, il protege d'abord les personnes, evite toute surexposition électrique, alerte et maintient la zone dans un etat lisible pour les secours et les autres intervenants.",
          "Si l'anomalie depasse le cadre de l'intervention générale, la situation est requalifiee sans chercher a finir vite.",
        ],
        keyPoints: [
          "Anomalie = suspension et reprise de lecture du risque.",
          "Urgence ne veut pas dire improvisation.",
          "Le BR sait renoncer a une remise en service prematuree.",
        ],
      }),
      section("retour-experience", {
        chapterImagePath: IMG.b1b2RetourExperience,
      }),
      section("synthese", { chapterImagePath: IMG.b1b2Synthese }),
      section("documents-coordination", {
        chapterImagePath: IMG.document,
        intro:
          "Une intervention BR tient aussi par sa trace. Le diagnostic, la cause retenue, l'action realisee, les limites du depannage et les conditions de remise en service doivent etre comprenables par le suivant.",
        content: [
          "Le BR renseigne ce qui a ete observe, ce qui a ete fait, sur quel materiel, avec quel résultat et dans quelles limites. Cette tracabilite evite les reprises en aveugle et les interpretations hasardeuses.",
          "La coordination concerne aussi les interfaces: exploitant, maintenance voisine, utilisateur du materiel et eventuel chargé de travaux. Une information mal transmise peut recreer le risque juste apres l'intervention.",
          "Une remise a disposition n'est credible que si l'information restituee est exploitable.",
        ],
        keyPoints: [
          "Tracer le depannage, pas seulement le finir.",
          "Restituer une information exploitable.",
          "Une mauvaise coordination recree le danger.",
        ],
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
      "réaliser ou piloter une consignation basse tension fiable, tracer les etapes documentaires et empecher toute remise sous tension intempestive ou erreur d'identification.",
    audience:
      "Charges de consignation, responsables techniques et personnels amenes a sécuriser une installation avant travaux ou intervention.",
    sections: [
      section("cadre-general", { chapterImagePath: IMG.b1b2Roles }),
      section("roles-responsabilites", {
        chapterImagePath: IMG.consignationSteps,
        intro:
          "Le BC tient la chaine de consignation. Son role est de rendre l'installation indisponible de facon fiable, verifiee et tracable avant toute mise a disposition pour travaux ou intervention.",
        content: [
          "Le BC organisé la separation, la condamnation, l'identification, la VAT et, selon le cas, la mise a la terre et en court-circuit. Il ne travaille jamais sur une coupure supposee ou une habitude d'exploitation.",
          "Sa responsabilite est autant technique que documentaire: ce qui est consigne doit etre identifiable, protege contre toute manoeuvre intempestive et restituable sans ambiguite en fin d'opération.",
          "Le BC refuse toute levee implicite, tout doute sur le materiel reel et toute acceleration qui affaiblirait la fiabilite de la chaine.",
        ],
        keyPoints: [
          "Le BC fiabilise l'etat de l'installation.",
          "La consignation se prouve et se trace.",
          "Aucune restitution sans reprise formelle de la chaine.",
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
          "Le BC enchaine les etapes de consignation sans raccourci: separation, condamnation, identification, vérification d'absence de tension et, selon le cas, mise a la terre et en court-circuit. Chacune de ces etapes sert a enlever une source d'illusion de sécurité.",
          "La valeur du BC ne se mesure pas a la vitesse mais a la fiabilite du résultat. Un cadenas visible, un reperage sans ambiguite, une attestation exploitable et une VAT methodee sont plus importants qu'une execution rapide.",
          "La consignation n'est pas seulement une opération technique. C'est une chaine de responsabilite entre chargé de consignation, chargé de travaux, exploitant et equipe, avec restitution claire a la fin.",
        ],
        keyPoints: [
          "Separer, condamner, identifier, vérifier.",
          "La VAT bascule d'une coupure supposee a un etat vérifié.",
          "Une consignation n'est finie qu'une fois restituee et tracee.",
        ],
        practicalCase:
          "Exemple : deux departs proches portent un reperage ancien et partiellement efface. Le BC suspend la consignation, fait clarifier l'identification et refuse toute levee de doute par simple habitude d'exploitation.",
      }),
      section("outils-protections", {
        chapterImagePath: IMG.consignationSteps,
        intro:
          "Pour le BC, les moyens utiles ne sont pas accessoires. Ils constituent la matiere concrete de la consignation: separation visible, condamnation fiable, identification claire, VAT et supports documentaires.",
        content: [
          "Le BC prépare et controle les cadenas, dispositifs de condamnation, etiquettes, repères, VAT adaptee, EPI/EPC utiles et documents de suivi avant d'engager la chaine de consignation.",
          "Il vérifié la compatibilite de ces moyens avec l'installation et leur usage dans le bon ordre. Un moyen absent, mal choisi ou douteux fragilise tout l'etat de sécurité obtenu.",
          "Aucun outil ou dispositif de fortune ne doit etre accepte dans une consignation qui se veut fiable et restituable.",
        ],
        keyPoints: [
          "La fiabilite des moyens conditionne la fiabilite de la consignation.",
          "La VAT et la condamnation ne sont pas optionnelles.",
          "Pas de consignation credible avec des moyens impropres ou incomplets.",
        ],
      }),
      section("anomalies-urgence", {
        chapterImagePath: IMG.consignationPhoto,
        resourceVideos: [VIDEO.chocElectrique],
        intro:
          "Pour le BC, une anomalie pendant la consignation ou avant restitution remet en cause la fiabilite de toute la chaine. Le bon reflexe n'est pas de passer outre, mais de reprendre l'etat de sécurité a la bonne etape.",
        content: [
          "Un doute sur l'identification, une condamnation qui ne tient pas, une VAT ambigue, un organe inaccessible ou une information contradictoire imposent de suspendre la chaine et de reprendre la vérification nécessaire.",
          "En cas d'urgence, le BC protege les personnes, empeche toute manoeuvre intempestive et maintient la lisibilite documentaire de la situation pour les autres acteurs et les secours.",
          "La pression de remise a disposition ne doit jamais detruire la rigueur de consignation.",
        ],
        keyPoints: [
          "Un doute sur une etape de consignation impose la reprise du controle.",
          "Pas de restitution tant que la chaine n'est pas redevenue fiable.",
          "L'urgence ne supprime pas la rigueur documentaire.",
        ],
      }),
      section("retour-experience", {
        chapterImagePath: IMG.b1b2RetourExperience,
      }),
      section("synthese", { chapterImagePath: IMG.b1b2Consignation }),
      section("documents-coordination", {
        chapterImagePath: IMG.document,
        content: [
          "Pour le BC, la documentation ne sert pas seulement a préparer. Elle sert a tracer la chaine de consignation, a formaliser les etapes realisees et a permettre une restitution sans ambiguite.",
          "Attestation de consignation, information au chargé de travaux, point de remise a disposition, levee de condamnation et retour d'etat doivent etre coherents. Une consignation techniquement juste mais documentairement floue reste une situation a risque.",
          "La coordination prend ici une forme particuliere: personne ne reenergise, ne retire un cadenas ou ne requalifie seul un etat d'installation sans reprise formelle de la chaine d'information.",
        ],
        keyPoints: [
          "Tracer la consignation du debut a la restitution.",
          "Pas de levee implicite ou supposee.",
          "La documentation complete fait partie de la sécurité.",
        ],
      }),
    ],
  },

  "be-verification-mesurage": {
    ...b1b2brbcModuleContent,
    title: "BE vérification / BE Mesurage - vérifier et mesurer en basse tension",
    shortTitle: "BE vérification / BE Mesurage",
    subtitle:
      "Parcours centre sur l'usage des instruments, la vérification, le mesurage, l'environnement de travail et les limites entre controle, intervention et travaux.",
    objective:
      "préparer une opération de vérification ou de mesurage en basse tension, utiliser les instruments adaptes et tenir les limites qui separent le controle des travaux ou interventions.",
    audience:
      "Techniciens de controle, de maintenance, de mise au point ou d'essais amenes a effectuer des verifications et mesurages en basse tension dans un cadre formalise.",
    sections: [
      section("cadre-general", { chapterImagePath: IMG.b1b2Roles }),
      section("roles-responsabilites", {
        chapterImagePath: IMG.b1b2Symboles,
        intro:
          "Le BE vérification / BE Mesurage agit pour controler, mesurer et interpreter dans un cadre défini. Son role n'est ni de conduire des travaux, ni de depanner librement, ni de consigner hors de son périmètre.",
        content: [
          "Le titulaire BE vérification / BE Mesurage prépare un controle ou un mesurage selon une méthode, un instrument adapte et un environnement de travail maîtrise. Il sait pourquoi il mesure, ou il mesure et comment il securise l'acte de mesure.",
          "Il doit distinguer tres clairement une vérification, un mesurage, un essai simple, une lecture d'etat et une intervention de depannage. Cette frontiere conditionne la sécurité et la validite technique du résultat.",
          "Le role BE impose aussi une discipline documentaire: résultat exploitable, repère du point de controle, tracabilite minimale et signalement immediat de tout ecart qui ferait sortir l'opération du cadre prevu.",
        ],
        keyPoints: [
          "Mesurer ne veut pas dire intervenir librement.",
          "Le cadre de controle doit etre prépare avant le geste.",
          "La qualite du résultat depend de la méthode autant que de l'instrument.",
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
          "Une opération BE se prépare comme une opération de controle: point de mesure identifie, méthode connue, instrument adapte, limites de zone comprises et possibilite de repli si l'environnement n'est pas conforme.",
        content: [
          "Avant de mesurer ou vérifier, l'operateur confirme le materiel concerne, le point de controle, la presence eventuelle de tension, le domaine de mesure attendu et l'environnement immediat.",
          "Il vérifié aussi la cohérence entre la demande, le schema ou le reperage local, et ce qu'il voit reellement sur le terrain. Une mesure sur un mauvais depart ou dans un mauvais contexte peut etre techniquement fausse et electriquement dangereuse.",
          "La préparation comprend enfin le choix du bon instrument, de sa plage d'utilisation et de ses accessoires, sans bricolage ni substitution improvisee.",
        ],
        keyPoints: [
          "Le point de mesure doit etre identifie avant l'approche.",
          "Une mesure fiable commence par une lecture fiable du terrain.",
          "Le bon instrument fait partie de la sécurité.",
        ],
      }),
      section("mesurages-essais-connexions", {
        chapterImagePath: IMG.maintenance,
        intro:
          "Le BE vérification / BE Mesurage doit savoir réaliser l'acte technique utile sans deriver vers le depannage, le travail électrique ou la remise en service hors cadre.",
        content: [
          "Mesurer, c'est obtenir une information exploitable sur un point identifie, avec une méthode adaptee et un instrument compatible avec le domaine de tension et l'environnement.",
          "vérifier, c'est confronter l'etat observe a un attendu technique ou documentaire. Cela suppose de savoir interpreter sans extrapoler. Un résultat anormal n'autorise pas automatiquement une action corrective.",
          "Si le controle revele une anomalie qui appelle un depannage, une modification, une consignation ou un travail dirige, l'operateur BE sort de son cadre et transmet pour requalification.",
        ],
        keyPoints: [
          "Je mesure pour comprendre un etat, pas pour improviser une reparation.",
          "Un résultat anormal declenche souvent une requalification.",
          "Le mesurage est un acte technique encadre, pas un geste anodin.",
        ],
      }),
      section("outils-protections", {
        chapterImagePath: IMG.outilsElectricien,
        intro:
          "En BE vérification / Mesurage, la fiabilite du résultat depend autant de l'instrument que du maintien d'un environnement de travail compatible avec le risque électrique.",
        content: [
          "L'operateur controle l'etat apparent des instruments, des cordons, des accessoires et la compatibilite de l'ensemble avec le domaine de tension rencontre.",
          "Les EPI et EPC suivent la meme logique que dans les autres habilitations: la protection collective d'abord, puis la protection individuelle. Un instrument de mesure n'autorise jamais une approche hors cadre.",
          "Un cordon douteux, une pointe degradee, un capot absent ou une zone mal maitrisee suffisent a suspendre l'opération.",
        ],
        keyPoints: [
          "L'instrument fait partie du dispositif de sécurité.",
          "Pas de controle fiable sans environnement maîtrise.",
          "Un doute sur les moyens impose l'arret.",
        ],
      }),
      section("anomalies-urgence", {
        chapterImagePath: IMG.tableau,
        resourceVideos: [VIDEO.chocElectrique],
        intro:
          "En BE vérification / Mesurage, une anomalie peut etre decouverte a l'occasion d'un controle. Elle n'autorise pas une correction immediate hors cadre.",
        content: [
          "Une mesure incoherente, un echauffement, un bruit anormal, une odeur ou un comportement inattendu du materiel imposent d'arreter le controle, de proteger la zone et de remonter l'information pour requalification.",
          "Le titulaire BE ne transforme pas une vérification en depannage spontane. Il documente, alerte et maintient la sécurité de la zone.",
        ],
        keyPoints: [
          "Une anomalie detectee n'autorise pas une action corrective libre.",
          "Le controle s'arrete des que le cadre sort du prevu.",
          "Documenter et alerter font partie du role.",
        ],
      }),
      section("synthese", { chapterImagePath: IMG.b1b2Synthese }),
      section("documents-coordination", {
        chapterImagePath: IMG.document,
      }),
    ],
  },
};
