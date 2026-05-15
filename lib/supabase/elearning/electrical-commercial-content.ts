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

  // Ne pas écraser animationKey avec imagePath : l'animation a la priorité
  const visual = baseVisual
    ? {
        ...baseVisual,
        ...(baseVisual.animationKey
          ? {}
          : {
              imagePath: chapterImagePath ?? baseVisual.imagePath,
              imageAlt: chapterImageAlt ?? baseVisual.imageAlt,
            }),
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
  unVat: "/elearning/b1-b1v-b2-b2v-br-bc/un-vat.jpg",
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
      "Parcours e-learning structuré pour les techniciens et électriciens devant exécuter, diriger, intervenir, consigner ou vérifier en basse tension selon la logique de la NF C 18-510.",
    duration: "8 h 00 à 11 h 00 de théorie guidée",
    deliveryFormat:
      "E-learning guidé + quiz + journée présentielle d'application selon les symboles retenus",
    objective:
      "Comprendre les frontières entre B1, B1V, B2, B2V, BR, BC et BE, préparer une opération en sécurité, tenir son rôle sans dérive et reconnaître les situations qui imposent l'arrêt ou la requalification.",
    audience:
      "Électriciens, techniciens de maintenance, responsables techniques et personnels amenés à intervenir sur des installations basse tension avec plusieurs symboles possibles selon les missions confiées.",
    sections: [
      section("cadre-general", { chapterImagePath: IMG.b1b2Roles }),
      section("roles-responsabilites", {
        chapterImagePath: IMG.b1b2Roles,
        intro:
          "Un titulaire multi-symboles ne devient pas un technicien universel. Il doit distinguer les rôles B1, B1V, B2, B2V, BR, BC et BE pour ne jamais glisser d'une mission à l'autre sans requalification.",
        content: [
          "Un même professionnel peut être exécutant (B1), chargé de travaux (B2), intervenant général (BR), chargé de consignation (BC) ou opérateur de vérification/mesurage (BE) selon la mission confiée. La sécurité dépend donc de la clarté du rôle réel tenu à chaque étape.",
          "Ces frontières doivent rester visibles sur le terrain : exécuter sans improviser (B1), diriger sans banaliser (B2), intervenir sans dériver (BR), consigner sans ambiguïté (BC), contrôler sans se transformer en dépanneur (BE).",
          "Le BE Vérification / BE Mesurage est un rôle distinct de BR, B2 et BC : il observe et mesure dans un cadre défini, sans intervenir ni consigner. Un titulaire BR ne glisse pas vers le BE Mesurage sans porter explicitement ce symbole sur son titre d'habilitation.",
          "La valeur du multi-symboles n'est pas de tout mélanger. Elle est de savoir quel cadre s'applique, avec quelles limites, pour quelle opération et sous quelle responsabilité.",
        ],
        keyPoints: [
          "Plusieurs symboles n'autorisent pas plusieurs rôles simultanément.",
          "BE = contrôler/mesurer sans intervenir — distinct de BR, B2, BC.",
          "Chaque mission garde son propre cadre de sécurité.",
          "La requalification reste un réflexe central.",
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
          "L'intervention BR commence par un diagnostic cadré, continue par une action proportionnée, puis se termine par une vérification et une remise en service contrôlée si le contexte le permet.",
        content: [
          "Le BR sait distinguer un remplacement, un raccordement, une recherche simple de défaut, une mesure utile et une remise en service. Cette lecture de l'action évite de transformer un dépannage en chantier improvisé.",
          "Pendant l'intervention, il vérifie l'état du matériel, l'absence de dérive vers plusieurs circuits, la cohérence du repère et la possibilité de revenir à un état sûr. Si ces conditions ne sont plus réunies, il suspend et requalifie.",
          "La remise en service n'est pas un automatisme. Elle suppose que la cause de l'anomalie soit comprise, que le matériel soit remis en état et que le contexte ne présente plus de signal d'alerte.",
          "Le BR peut réaliser des mesures dans le cadre de son intervention (mésurages utiles au dépannage), mais ce n'est pas la même chose que le rôle BE Mesurage. Le BE mesure dans un cadre d'habilitation défini, sans réaliser de dépannage ni de remise en service. Si le titulaire BR est également habilité BE Mesurage, il doit garder ces deux rôles distincts selon la mission du moment.",
        ],
        keyPoints: [
          "Diagnostiquer avant d'agir.",
          "Intervenir sans dériver vers des travaux hors cadre.",
          "BR ≠ BE Mesurage : deux cadres distincts, même si les deux symboles sont sur le même titre.",
          "Remettre en service seulement si la situation est redevenue fiable.",
        ],
      }),
      section("mesurages-essais-connexions", {
        chapterImagePath: IMG.tableau,
      }),
      section("outils-protections", {
        chapterImagePath: IMG.epiTerrain,
        intro:
          "Les protections se lisent d'abord au regard du rôle tenu. Les moyens utiles à un exécutant ne couvrent pas automatiquement ceux du chargé de travaux, du BR ou du BC.",
        content: [
          "Le professionnel vérifie les protections collectives de la zone, puis les EPI et l'outillage associés à la mission du moment. Il ne transpose pas automatiquement un équipement d'un rôle à un autre.",
          "Cette logique évite deux erreurs classiques : croire qu'un EPI autorise tout, ou penser qu'un outillage disponible suffit à changer de mission.",
          "Pour le rôle BE, l'outillage est spécifique : instruments de mesure de catégorie CAT adaptée (NF EN 61010-1), cordons conformes NF EN 61010-031, VAT pour confirmer l'absence de tension. Disposer d'un multimètre ne signifie pas être habilité BE Mesurage.",
          "Le bon niveau multi-symboles consiste à savoir quel moyen utiliser, pourquoi, et surtout quand l'absence d'un moyen impose l'arrêt ou la requalification.",
        ],
        keyPoints: [
          "Le rôle tenu conditionne les moyens à vérifier.",
          "Protection collective avant protection individuelle.",
          "BE : instrument CAT adapté + cordons NF EN 61010-031 — pas de substitution.",
          "Un équipement disponible n'autorise pas un changement de mission.",
        ],
      }),
      section("anomalies-urgence", {
        chapterImagePath: IMG.armoireDanger,
        resourceVideos: [VIDEO.chocElectrique],
        intro:
          "Une anomalie révèle souvent une erreur de lecture du rôle, du circuit ou du cadre. Le bon réflexe est d'arrêter et de relire la situation avant toute reprise.",
        content: [
          "Une odeur, un échauffement, un arc, une incohérence documentaire ou un doute sur la consignation imposent de stopper l'action et d'identifier quel cadre est encore applicable.",
          "L'urgence ne transforme pas un exécutant en BR, un BR en BC ou un B2 en dépanneur sans préparation. Elle impose au contraire plus de discipline.",
          "Pour le rôle BE, une anomalie détectée lors d'un contrôle ou d'un mesurage ne donne pas le droit d'intervenir : elle impose l'arrêt, la protection de zone, la documentation et le signalement pour requalification vers le symbole adapté (BR, B2 ou BC selon la nature de l'action requise).",
        ],
        keyPoints: [
          "Anomalie = arrêt et relecture du cadre.",
          "L'urgence ne change pas le symbole détenu.",
          "BE : anomalie détectée → signalement, jamais intervention spontanée.",
          "Le bon rôle doit être reconfirmé avant reprise.",
        ],
      }),
      section("retour-experience", {
        chapterImagePath: IMG.b1b2RetourExperience,
      }),
      section("synthese", { chapterImagePath: IMG.b1b2Synthese }),
      section("documents-coordination", {
        chapterImagePath: IMG.document,
        content: [
          "Les documents servent a faire tenir ensemble plusieurs roles sans confusion. Consignes, repérage, analyse de risque, point d'arret, compte rendu et restitution doivent raconter la même operation.",
          "Un technicien peut tenir des symboles différents selon les taches confiees, mais il ne change pas de role au milieu du chantier sans requalification. La documentation doit donc dire clairement qui execute, qui dirige, qui intervient, qui consigne et qui contrôle.",
          "La coordination consiste a faire circuler une information exploitable du debut a la fin: bon circuit, bonne zone, bon role, bonne restitution. Toute contradiction documentaire bloque la reprise.",
        ],
        keyPoints: [
          "Plusieurs symboles exigent une documentation encore plus claire.",
          "Le role reel doit être lisible dans chaque document.",
          "Une information contradictoire propage le risque technique.",
        ],
      }),
    ],
  },

  "b1-b1v": {
    ...b1b2brbcModuleContent,
    title: "B1 / B1V - Exécuter des travaux électriques en basse tension",
    shortTitle: "B1 / B1V",
    subtitle:
      "Parcours centré sur le rôle d'exécutant électricien, le respect des consignes, le voisinage et la maîtrise du périmètre d'action en basse tension.",
    objective:
      "Tenir correctement un rôle d'exécutant B1 ou B1V, reconnaître les limites du voisinage, appliquer les consignes sans improvisation et signaler immédiatement tout écart ou doute.",
    audience:
      "Électriciens exécutants, techniciens bâtiment et personnels chargés d'exécuter des travaux électriques en basse tension dans un cadre préparé par un chargé de travaux.",
    resourceFiles: [
      {
        title: "Formation Habilitations Électriques B1–B2V — Support de formation",
        description: "Support complet B1 / B1V / B2 / B2V : rôles, périmètres, voisinage, organisation des travaux, consignes et conduite à tenir.",
        url: "/downloads/b1-b2v-habilitation-electrique.pdf",
        fileType: "PDF",
        ctaLabel: "Télécharger le support de formation",
      },
    ],
    sections: [
      section("cadre-general", { chapterImagePath: IMG.b1b2Roles }),
      section("roles-responsabilites", {
        chapterImagePath: IMG.b1b2Chaine,

        intro:
          "Le B1 ou B1V est un exécutant. Son rôle consiste à appliquer une consigne de travail, dans un périmètre défini, sans se substituer au chargé de travaux ni décider seul d'un changement de méthode.",
        content: [
          "L'exécutant B1 intervient sur des travaux électriques en basse tension dans un cadre préparé. Il ne choisit pas seul le circuit, la méthode, la zone ou le niveau de protection. Il applique ce qui a été défini et s'assure de l'avoir compris avant de commencer.",
          "Le B1V ajoute la contrainte du voisinage renforcé. Il doit donc connaître la limite physique de sa zone, les parties nues sous tension présentes à proximité et les conditions qui rendent l'approche interdite.",
          "L'exécutant B1/B1V tient son rôle sans glissement : il exécute, signale, s'arrête et fait clarifier. Si la situation change, si le dossier ne correspond plus ou si une pièce voisine devient exposante, il n'improvise pas : il stoppe et alerte.",
          "Le chargé de travaux B2 prépare, balise, brief l'équipe et garde la maîtrise d'ensemble. Le B1 ne prend pas la main sur l'organisation. Cette distinction protège autant la personne que le chantier.",
        ],
        keyPoints: [
          "B1 exécute dans un cadre défini.",
          "B1V exécute en tenant compte du voisinage renforcé.",
          "L'exécutant n'étend pas seul sa mission.",
          "Au moindre doute : stop et remontée d'information.",
        ],
        practicalCase:
          "Exemple : un exécutant B1 constate qu'un coffret voisin reste accessible et que le balisage ne correspond plus au dossier du matin. Il suspend sa tâche et demande la revalidation du cadre avant reprise.",
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
          "Pour un B1 ou B1V, la préparation ne sert pas à organiser le chantier : elle sert à comprendre exactement ce qui lui est demandé, sur quel matériel et dans quelles limites.",
        content: [
          "Avant d'exécuter, le B1 doit savoir identifier le matériel concerné, reconnaître le point de travail, comprendre le balisage mis en place et vérifier que la consigne orale ou écrite est cohérente avec le terrain.",
          "Il vérifie aussi ses moyens immédiats : outillage prévu, EPI utiles, accessibilité, éclairage, absence d'obstacle et possibilité de se retirer rapidement si la situation change.",
          "Cette préparation d'exécutant n'a pas pour but de redessiner l'organisation. Elle a pour but de s'assurer que l'ordre donné est clair, faisable et compris sans interprétation personnelle.",
        ],
        keyPoints: [
          "Je sais sur quoi j'agis.",
          "Je connais ma limite de zone.",
          "Je n'extrapole pas une consigne incomplète.",
        ],
      }),
      section("travaux-b1-b2", {
        chapterImagePath: IMG.b1b2Travaux,
        intro:
          "Le travail B1/B1V est un travail exécuté sous conduite. La sécurité repose autant sur le geste que sur la discipline d'exécution.",
        content: [
          "L'exécutant B1 applique les consignes du chargé de travaux, respecte la zone délimitée, utilise les moyens prévus et signale tout écart sans chercher à le compenser seul.",
          "Il ne dépose pas un balisage, ne déplace pas un écran ou une protection collective, ne modifie pas le choix du point de travail et ne poursuit pas une tâche si le contexte s'est dégradé.",
          "Si une partie voisine apparaît sous tension, si le matériel ne correspond pas à ce qui était annoncé ou si l'opération demande finalement une initiative technique non prévue, l'action s'arrête. C'est justement un comportement attendu d'un bon exécutant.",
        ],
        keyPoints: [
          "Consigne claire avant exécution.",
          "Respect strict du périmètre.",
          "Arrêt immédiat si le cadre change.",
        ],
      }),
      section("outils-protections", {
        chapterImagePath: IMG.epiTerrain,
        intro:
          "Pour un exécutant B1 ou B1V, les protections ne rendent pas le travail possible par magie. Elles viennent compléter un cadre déjà préparé, balisé et maintenu par l'organisation du chantier.",
        content: [
          "Le B1 ou B1V vérifie d'abord la présence des protections collectives : balisage, écrans, capotage, délimitation de zone et maîtrise du voisinage. Il n'entame pas le travail si ce cadre n'est pas clairement en place.",
          "Les EPI viennent ensuite en complément. Ils ne remplacent jamais une zone mal tenue, un capot retiré ou une consigne devenue floue. L'exécutant ne compense pas seul une protection absente.",
          "Si une protection est déplacée, endommagée ou incohérente avec la mission, l'exécutant s'arrête et remonte l'information au chargé de travaux avant toute reprise.",
        ],
        keyPoints: [
          "Protection collective d'abord, protection individuelle ensuite.",
          "Le B1/B1V ne banalise pas une protection manquante.",
          "Le bon réflexe reste l'arrêt, pas l'improvisation.",
        ],
      }),
      section("anomalies-urgence", {
        chapterImagePath: IMG.reflexes,
        resourceVideos: [VIDEO.chocElectrique],
        content: [
          "Un exécutant B1/B1V n'a pas à gérer seul une anomalie électrique. Son premier rôle est d'interrompre l'action, de se protéger, d'éviter l'exposition d'un tiers et d'alerter selon l'organisation prévue.",
          "En cas de doute sur l'état électrique, de bruit anormal, d'odeur, d'échauffement, d'arc ou de présence inattendue de tension, il ne touche plus, ne teste pas au hasard et ne cherche pas à terminer vite.",
          "Si une personne est victime, la conduite à tenir reste organisée : suppression ou isolement du danger si c'est possible sans s'exposer, alerte des secours, protection de la zone et application des gestes de secours dans le cadre de ses compétences.",
        ],
        keyPoints: [
          "J'arrête, je me protège, j'alerte.",
          "Je ne termine jamais vite fait une tâche devenue douteuse.",
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
          "Pour un exécutant B1 ou B1V, les documents servent d'abord à comprendre le bon matériel, la bonne zone et la bonne consigne. Il ne travaille pas sur une interprétation personnelle d'un ordre incomplet.",
          "Le B1/B1V doit savoir lire un repérage, une consigne écrite, un plan simple et un briefing de chantier. Si ces informations sont contradictoires avec le terrain, il suspend et demande clarification.",
          "La coordination le concerne aussi : il doit faire remonter sans délai tout écart, toute anomalie et toute situation qui ferait sortir l'action du cadre préparé.",
        ],
        keyPoints: [
          "Le bon document évite le mauvais geste.",
          "Une incohérence se traite avant la reprise.",
          "Le B1/B1V signale, il n'interprète pas seul.",
        ],
      }),
    ],
  },

  "b2-b2v": {
    ...b1b2brbcModuleContent,
    title: "B2 / B2V - Diriger des travaux électriques en basse tension",
    shortTitle: "B2 / B2V",
    subtitle:
      "Parcours centré sur le rôle de chargé de travaux : préparation, briefing, surveillance d'équipe et arrêt de l'opération si le cadre n'est plus maîtrisé.",
    objective:
      "Préparer et diriger des travaux électriques en basse tension, organiser le briefing, contrôler la zone et stopper l'opération dès qu'un écart remet en cause le cadre de sécurité.",
    audience:
      "Chargés de travaux, chefs d'équipe et techniciens amenés à organiser et diriger des travaux électriques en basse tension avec ou sans voisinage.",
    resourceFiles: [
      {
        title: "Formation Habilitations Électriques B1–B2V — Support de formation",
        description: "Support complet B1 / B1V / B2 / B2V : rôles, périmètres, voisinage, organisation des travaux, consignes et conduite à tenir.",
        url: "/downloads/b1-b2v-habilitation-electrique.pdf",
        fileType: "PDF",
        ctaLabel: "Télécharger le support de formation",
      },
    ],
    sections: [
      section("cadre-general", { chapterImagePath: IMG.b1b2Roles, estimatedMinutes: 18 }),
      section("roles-responsabilites", {
        chapterImagePath: IMG.b1b2Coordination,
        estimatedMinutes: 16,
        intro:
          "Le B2 ou B2V dirige des travaux. Sa responsabilité principale n'est pas de faire à la place de l'équipe, mais de préparer, coordonner, surveiller et interrompre si le cadre de sécurité n'est plus tenu.",
        content: [
          "Le chargé de travaux B2 définit le cadre d'exécution, vérifie la cohérence des informations, précise la zone, les limites, les moyens et les interfaces. Il garde une vision d'ensemble que l'exécutant n'a pas à assumer seul.",
          "Le B2V doit intégrer en plus la maîtrise du voisinage renforcé. Il décide si le balisage, les écrans, la délimitation et l'organisation sont suffisants pour maintenir l'équipe hors de la zone dangereuse.",
          "Une partie essentielle du rôle B2 consiste à dire non à une reprise prématurée, à une consigne floue ou à une adaptation improvisée du travail. Sa valeur se mesure autant à l'arrêt qu'à la conduite du chantier.",
        ],
        keyPoints: [
          "Le B2 prépare, dirige et surveille.",
          "Le B2V tient aussi la maîtrise du voisinage renforcé.",
          "Diriger, c'est aussi savoir suspendre.",
        ],
        practicalCase:
          "Exemple : un chargé de travaux B2V constate que la zone délimitée ne couvre plus correctement une partie nue voisine après déplacement d'un matériel. Il suspend le travail, refait le balisage et rebrief l'équipe.",
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
          "Pour un B2 ou B2V, la préparation ne se limite pas à avoir le plan. Elle consiste à construire un cadre de travail clair, partagé et tenable jusqu'à la fin de l'opération.",
        content: [
          "Le chargé de travaux identifie le matériel, vérifie les documents, choisit les moyens de prévention, fixe les points d'arrêt, anticipe les interfaces et prépare le briefing de début d'opération.",
          "Il précise qui fait quoi, dans quelle zone, avec quels outils, sous quelle consigne et dans quelles conditions on suspend l'action. Cette clarification en amont évite que l'équipe improvise sur place.",
          "En voisinage, la préparation doit aussi traiter explicitement les distances, les parties exposées, les protections collectives et la compatibilité entre la mission confiée et le symbole réellement détenu par chaque intervenant.",
        ],
        keyPoints: [
          "Un chantier bien préparé limite l'exposition.",
          "Le briefing fait partie du travail.",
          "Le voisinage se traite avant le premier geste.",
        ],
      }),
      section("travaux-b1-b2", {
        chapterImagePath: IMG.b1b2Coordination,
        estimatedMinutes: 18,
        intro:
          "Le B2/B2V tient la maîtrise du chantier pendant l'exécution. Il coordonne, observe, ajuste le cadre et stoppe dès que la situation sort du scénario préparé.",
        content: [
          "Diriger des travaux signifie garder la lecture du risque pendant toute l'exécution : surveillance de la zone, discipline des accès, maintien des protections, cohérence des gestes et gestion des interfaces.",
          "Le B2 veille à ce qu'aucun exécutant ne se retrouve seul face à une décision qui dépasse son rôle. Si une difficulté technique apparaît, il reprend la main, fait suspendre et requalifie si nécessaire.",
          "Le B2V garde un point d'attention supplémentaire sur les distances et les parties nues voisines. Une modification d'environnement, même mineure en apparence, peut imposer un arrêt immédiat.",
        ],
        keyPoints: [
          "Le B2 garde la vision d'ensemble.",
          "Aucun écart ne doit être banalisé.",
          "Le cadre se maintient jusqu'à la clôture du travail.",
        ],
      }),
      section("outils-protections", {
        chapterImagePath: IMG.epi,
        estimatedMinutes: 14,
        intro:
          "Pour un B2 ou B2V, les protections sont d'abord un sujet d'organisation du chantier. Il doit vérifier que les moyens collectifs, les moyens individuels et la tenue de zone restent cohérents avec la mission réelle.",
        content: [
          "Le chargé de travaux contrôle la présence des protections collectives avant le premier geste : balisage, écrans, capotages, délimitations, accès, maintien du voisinage et prévention des franchissements.",
          "Il vérifie aussi que les exécutants disposent des EPI utiles et qu'ils savent dans quel cadre ils s'emploient. Un EPI ne corrige jamais une préparation insuffisante ni un balisage incohérent.",
          "Si une protection est absente, déplacée, dégradée ou devenue inadaptée après modification de l'environnement, le B2 ou B2V suspend, fait remettre le cadre en conformité puis rebrief l'équipe.",
        ],
        keyPoints: [
          "Le B2 vérifie d'abord les protections collectives.",
          "Les EPI complètent le cadre, ils ne l'autorisent pas.",
          "Une protection douteuse impose une suspension immédiate.",
        ],
        practicalCase:
          "Exemple : en cours de chantier, une barrière est déplacée pour faire passer du matériel. Le B2V interrompt l'opération, remet la délimitation en état et ne reprend qu'après vérification du voisinage.",
      }),
      section("anomalies-urgence", {
        chapterImagePath: IMG.maintenance,
        estimatedMinutes: 12,
        resourceVideos: [VIDEO.chocElectrique],
        intro:
          "Pour un B2 ou B2V, une anomalie ne se gère pas dans la précipitation. Son rôle est de faire stopper, de protéger l'équipe, de figer la situation utile et d'engager la bonne chaîne d'alerte.",
        content: [
          "Un bruit anormal, un échauffement, une odeur, un arc, une incohérence documentaire ou une évolution du voisinage imposent d'arrêter l'exécution puis de reprendre une lecture globale de la scène.",
          "Le B2 ou B2V s'assure qu'aucun exécutant ne reste exposé, maintient ou reconstitue la zone, interdit toute improvisation corrective et vérifie si l'opération doit être simplement suspendue ou complètement requalifiée.",
          "En cas d'urgence humaine, il articule protection, alerte et secours sans ajouter un risque électrique supplémentaire. Il ne banalise ni le doute sur l'état électrique, ni la pression de remise en service.",
        ],
        keyPoints: [
          "Anomalie visible = arrêt et reprise de lecture du risque.",
          "Le doute sur le voisinage ou la consignation impose la suspension.",
          "L'urgence ne justifie jamais une reprise improvisée.",
        ],
        practicalCase:
          "Exemple : pendant les travaux, une odeur d'échauffement apparaît sur un départ voisin non concerné. Le B2V fait cesser l'action, interdit toute poursuite locale et fait requalifier la situation avant reprise.",
      }),
      section("retour-experience", {
        chapterImagePath: IMG.b1b2RetourExperience,
        estimatedMinutes: 10,
        intro:
          "Le retour d'expérience fait partie du rôle B2. Il sert à consolider l'organisation, pas seulement à clore le chantier.",
        content: [
          "Le chargé de travaux relève les écarts observés, les points de fragilité du balisage, les difficultés de coordination, les ambiguïtés documentaires et les signaux faibles qui auraient pu faire sortir l'équipe du cadre prévu.",
          "Ce retour permet d'ajuster les futures préparations, d'améliorer les consignes et de renforcer la culture de suspension lorsque le terrain ne correspond plus au scénario annoncé.",
        ],
        keyPoints: [
          "Le retour d'expérience nourrit la prévention.",
          "Un écart analysé aujourd'hui évite un accident demain.",
        ],
      }),
      section("synthese", {
        chapterImagePath: IMG.b1b2Synthese,
        estimatedMinutes: 10,
        content: [
          "Le B2 ou B2V tient le cadre : il prépare, brief, délimite, surveille, suspend et fait clarifier avant toute reprise.",
          "Sa performance ne se mesure pas à la vitesse d'exécution mais à la capacité de garder l'équipe dans une situation lisible, maîtrisée et conforme au symbole détenu par chacun.",
        ],
        keyPoints: [
          "Diriger, c'est préparer et surveiller jusqu'au bout.",
          "Le B2V ajoute la maîtrise du voisinage renforcé.",
          "Un bon chargé de travaux sait arrêter à temps.",
        ],
      }),
      section("documents-coordination", {
        chapterImagePath: IMG.document,
        estimatedMinutes: 14,
        intro:
          "Pour un B2 ou B2V, les documents et la coordination ne sont pas un habillage administratif. Ils sont une partie directe du dispositif de sécurité.",
        content: [
          "Consignes, repérage, analyse de risque, autorisation, briefing, point d'arrêt, compte rendu et conditions de remise à disposition doivent raconter la même opération sans contradiction.",
          "Le chargé de travaux veille à ce que chaque exécutant travaille sur la bonne information, au bon endroit et avec les bons points de reprise. Une incohérence documentaire doit être traitée avant l'action, pas pendant.",
          "La coordination consiste aussi à gérer les interfaces : exploitant, autres corps d'état, maintenance voisine, énergie annexe, accès, verrouillage de zone et reprise d'activité après chantier.",
        ],
        keyPoints: [
          "Une information incohérente bloque la reprise.",
          "Le briefing et le compte rendu font partie de la sécurité.",
          "La coordination protège autant que le geste technique.",
        ],
      }),
    ],
  },

  br: {
    ...b1b2brbcModuleContent,
    title: "BR - Interventions générales en basse tension",
    shortTitle: "BR",
    subtitle:
      "Parcours centré sur l'intervention générale : diagnostic, dépannage, remplacement, mesure et remise en service contrôlée dans les limites du BR.",
    objective:
      "Préparer et conduire une intervention générale BR, tenir les limites du dépannage, mesurer sans dériver vers les travaux et remettre en service de façon contrôlée.",
    audience:
      "Techniciens de maintenance, électriciens de dépannage et personnels amenés à conduire des interventions générales en basse tension dans un cadre maîtrisé.",
    resourceFiles: [
      {
        title: "Formation Habilitation Électrique BR — Présentation Professionnelle",
        description: "Support complet BR : interventions générales, diagnostic, dépannage, remplacement, mesures et remise en service contrôlée dans les limites du BR.",
        url: "/downloads/br-habilitation-electrique.pdf",
        fileType: "PDF",
        ctaLabel: "Télécharger le support de formation",
      },
    ],
    sections: [
      section("cadre-general", { chapterImagePath: IMG.b1b2Roles }),
      section("roles-responsabilites", {
        chapterImagePath: IMG.b1b2Br,
        intro:
          "Le BR conduit des interventions générales en basse tension. Il dépanne, remplace, raccorde, mesure ou remet en service dans un cadre strictement défini, sans glisser vers des travaux ou une consignation complète hors de son rôle.",
        content: [
          "Le BR tient une autonomie technique plus forte qu'un exécutant B1, mais cette autonomie reste encadrée. Il sait diagnostiquer, choisir une action proportionnée et reconnaître le moment où l'intervention doit être suspendue ou requalifiée.",
          "Son rôle n'est ni celui du chargé de travaux B2, ni celui du chargé de consignation BC. Il doit donc éviter les glissements de mission : un dépannage qui devient chantier, une mesure qui devient modification, une remise sous tension qui devient prise de risque.",
          "La compétence BR se voit dans la maîtrise du périmètre : agir juste, agir sobrement et savoir dire stop quand la situation sort du cadre prévu.",
        ],
        keyPoints: [
          "Le BR intervient dans les limites de l'intervention générale.",
          "Le BR ne se substitue ni au B2 ni au BC.",
          "Requalifier fait partie du rôle.",
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
          "Une intervention BR se prépare comme une action ciblée : bon équipement, bon circuit, bonne hypothèse de défaut, bonne limite d'action et bonne issue possible de remise en service.",
        content: [
          "Avant d'intervenir, le BR identifie le matériel concerné, la fonction attendue, le symptôme réel, le contexte de tension, les interfaces voisines et les conditions de retrait si la situation se dégrade.",
          "Il vérifie la cohérence entre la demande, le repérage local, l'état apparent du matériel et la possibilité d'une action proportionnée. Si l'intervention suppose plusieurs circuits, des travaux plus larges ou une consignation complète, elle doit être requalifiée.",
          "Cette préparation évite de transformer un dépannage en chantier improvisé. Le BR agit dans un cadre lisible, pas dans l'urgence mal analysée.",
        ],
        keyPoints: [
          "Diagnostiquer avant d'agir.",
          "Vérifier que l'intervention reste dans le cadre BR.",
          "Requalifier si le périmètre devient plus large que prévu.",
        ],
      }),
      section("consignation", {
        chapterImagePath: IMG.consignationTerrain,
        resourceVideos: [VIDEO.consignation],
        content: [
          "Dans le cadre BR, la mise en sécurité doit rester strictement proportionnée au besoin de l'intervention et aux procédures prévues. L'intervenant ne s'invente pas chargé de consignation s'il n'a ni le rôle ni l'organisation adaptée.",
          "La séparation, la condamnation visible, l'identification et la VAT doivent être lues comme des barrières de fiabilité. Si l'une d'elles n'est pas tenable ou pas claire, l'intervention doit être revue ou requalifiée.",
          "L'intervention générale BR devient dangereuse lorsqu'elle glisse vers une exploration de plusieurs départs, une remise sous tension concurrente ou une confusion sur le circuit réel. C'est là que la discipline de consignation protège l'opérateur.",
        ],
        keyPoints: [
          "Le BR sécurise dans son cadre, il ne banalise pas la consignation.",
          "Une consignation floue impose l'arrêt ou la requalification.",
          "Pas de confiance aveugle dans un simple voyant d'état.",
        ],
      }),
      section("interventions-br", { chapterImagePath: IMG.maintenance }),
      section("mesurages-essais-connexions", {
        chapterImagePath: IMG.tableau,
      }),
      section("outils-protections", {
        chapterImagePath: IMG.outilsElectricien,
        intro:
          "Pour le BR, les outils et protections doivent rester proportionnés à l'intervention générale. Le bon matériel permet d'agir juste ; le mauvais matériel pousse à improviser.",
        content: [
          "Le BR contrôle l'état de son outillage, la cohérence de ses moyens de mesure, la compatibilité des accessoires et la présence des protections collectives utiles avant d'engager l'intervention.",
          "Les EPI et EPC gardent la même hiérarchie que partout ailleurs : la zone et les protections collectives d'abord, les EPI ensuite. Un gant, un écran facial ou un outillage isolé ne légitimisent jamais une situation mal maîtrisée.",
          "Si l'outillage est douteux, si la zone n'est plus lisible ou si la protection prévue manque, l'intervention s'arrête. Le BR n'improvise pas avec un matériel de fortune.",
        ],
        keyPoints: [
          "Le bon outillage limite les dérives de geste.",
          "Protection collective d'abord, protection individuelle ensuite.",
          "Pas d'intervention BR avec des moyens douteux.",
        ],
      }),
      section("anomalies-urgence", {
        chapterImagePath: IMG.armoireDanger,
        resourceVideos: [VIDEO.chocElectrique],
        intro:
          "Pour le BR, une anomalie n'appelle pas une réaction rapide au hasard. Elle impose une suspension, une relecture du risque et une décision de poursuite, de retrait ou de requalification.",
        content: [
          "Un échauffement, une odeur, un bruit, un arc, une mesure incohérente ou un comportement inhabituel du matériel doivent être lus comme des signaux d'arrêt. Le BR ne force pas une remise en service douteuse.",
          "En cas d'urgence, il protège d'abord les personnes, évite toute surexposition électrique, alerte et maintient la zone dans un état lisible pour les secours et les autres intervenants.",
          "Si l'anomalie dépasse le cadre de l'intervention générale, la situation est requalifiée sans chercher à finir vite.",
        ],
        keyPoints: [
          "Anomalie = suspension et reprise de lecture du risque.",
          "Urgence ne veut pas dire improvisation.",
          "Le BR sait renoncer à une remise en service prématurée.",
        ],
      }),
      section("retour-experience", {
        chapterImagePath: IMG.b1b2RetourExperience,
      }),
      section("synthese", { chapterImagePath: IMG.b1b2Synthese }),
      section("documents-coordination", {
        chapterImagePath: IMG.document,
        intro:
          "Une intervention BR tient aussi par sa trace. Le diagnostic, la cause retenue, l'action réalisée, les limites du dépannage et les conditions de remise en service doivent être compréhensibles par le suivant.",
        content: [
          "Le BR renseigne ce qui a été observé, ce qui a été fait, sur quel matériel, avec quel résultat et dans quelles limites. Cette traçabilité évite les reprises en aveugle et les interprétations hasardeuses.",
          "La coordination concerne aussi les interfaces : exploitant, maintenance voisine, utilisateur du matériel et éventuel chargé de travaux. Une information mal transmise peut recréer le risque juste après l'intervention.",
          "Une remise à disposition n'est crédible que si l'information restituée est exploitable.",
        ],
        keyPoints: [
          "Tracer le dépannage, pas seulement le finir.",
          "Restituer une information exploitable.",
          "Une mauvaise coordination recrée le danger.",
        ],
      }),
    ],
  },

  bc: {
    ...b1b2brbcModuleContent,
    title: "BC - Consignation en basse tension",
    shortTitle: "BC",
    subtitle:
      "Parcours centré sur la chaîne de consignation : séparation, condamnation, identification, VAT, documents et sécurisation fiable de l'installation.",
    objective:
      "Réaliser ou piloter une consignation basse tension fiable, tracer les étapes documentaires et empêcher toute remise sous tension intempestive ou erreur d'identification.",
    audience:
      "Chargés de consignation, responsables techniques et personnels amenés à sécuriser une installation avant travaux ou intervention.",
    sections: [
      section("cadre-general", { chapterImagePath: IMG.b1b2Roles }),
      section("roles-responsabilites", {
        chapterImagePath: IMG.consignationSteps,
        intro:
          "Le BC tient la chaîne de consignation. Son rôle est de rendre l'installation indisponible de façon fiable, vérifiée et traçable avant toute mise à disposition pour travaux ou intervention.",
        content: [
          "Le BC organise la séparation, la condamnation, l'identification, la VAT et, selon le cas, la mise à la terre et en court-circuit. Il ne travaille jamais sur une coupure supposée ou une habitude d'exploitation.",
          "Sa responsabilité est autant technique que documentaire : ce qui est consigné doit être identifiable, protégé contre toute manœuvre intempestive et restituable sans ambiguïté en fin d'opération.",
          "Le BC refuse toute levée implicite, tout doute sur le matériel réel et toute accélération qui affaiblirait la fiabilité de la chaîne.",
        ],
        keyPoints: [
          "Le BC fiabilise l'état de l'installation.",
          "La consignation se prouve et se trace.",
          "Aucune restitution sans reprise formelle de la chaîne.",
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
          "Le cœur du rôle BC est ici : rendre une installation indisponible de façon fiable, vérifiable et traçable jusqu'à sa restitution.",
        content: [
          "Le BC enchaîne les étapes de consignation sans raccourci : séparation, condamnation, identification, vérification d'absence de tension et, selon le cas, mise à la terre et en court-circuit. Chacune de ces étapes sert à enlever une source d'illusion de sécurité.",
          "La valeur du BC ne se mesure pas à la vitesse mais à la fiabilité du résultat. Un cadenas visible, un repérage sans ambiguïté, une attestation exploitable et une VAT méthodée sont plus importants qu'une exécution rapide.",
          "La consignation n'est pas seulement une opération technique. C'est une chaîne de responsabilité entre chargé de consignation, chargé de travaux, exploitant et équipe, avec restitution claire à la fin.",
        ],
        keyPoints: [
          "Séparer, condamner, identifier, vérifier.",
          "La VAT bascule d'une coupure supposée à un état vérifié.",
          "Une consignation n'est finie qu'une fois restituée et tracée.",
        ],
        practicalCase:
          "Exemple : deux départs proches portent un repérage ancien et partiellement effacé. Le BC suspend la consignation, fait clarifier l'identification et refuse toute levée de doute par simple habitude d'exploitation.",
      }),
      section("outils-protections", {
        chapterImagePath: IMG.consignationSteps,
        intro:
          "Pour le BC, les moyens utiles ne sont pas accessoires. Ils constituent la matière concrète de la consignation : séparation visible, condamnation fiable, identification claire, VAT et supports documentaires.",
        content: [
          "Le BC prépare et contrôle les cadenas, dispositifs de condamnation, étiquettes, repères, VAT adaptée, EPI/EPC utiles et documents de suivi avant d'engager la chaîne de consignation.",
          "Il vérifie la compatibilité de ces moyens avec l'installation et leur usage dans le bon ordre. Un moyen absent, mal choisi ou douteux fragilise tout l'état de sécurité obtenu.",
          "Aucun outil ou dispositif de fortune ne doit être accepté dans une consignation qui se veut fiable et restituable.",
        ],
        keyPoints: [
          "La fiabilité des moyens conditionne la fiabilité de la consignation.",
          "La VAT et la condamnation ne sont pas optionnelles.",
          "Pas de consignation crédible avec des moyens impropres ou incomplets.",
        ],
      }),
      section("anomalies-urgence", {
        chapterImagePath: IMG.consignationPhoto,
        resourceVideos: [VIDEO.chocElectrique],
        intro:
          "Pour le BC, une anomalie pendant la consignation ou avant restitution remet en cause la fiabilité de toute la chaîne. Le bon réflexe n'est pas de passer outre, mais de reprendre l'état de sécurité à la bonne étape.",
        content: [
          "Un doute sur l'identification, une condamnation qui ne tient pas, une VAT ambiguë, un organe inaccessible ou une information contradictoire imposent de suspendre la chaîne et de reprendre la vérification nécessaire.",
          "En cas d'urgence, le BC protège les personnes, empêche toute manœuvre intempestive et maintient la lisibilité documentaire de la situation pour les autres acteurs et les secours.",
          "La pression de remise à disposition ne doit jamais détruire la rigueur de consignation.",
        ],
        keyPoints: [
          "Un doute sur une étape de consignation impose la reprise du contrôle.",
          "Pas de restitution tant que la chaîne n'est pas redevenue fiable.",
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
          "Pour le BC, la documentation ne sert pas seulement à préparer. Elle sert à tracer la chaîne de consignation, à formaliser les étapes réalisées et à permettre une restitution sans ambiguïté.",
          "Attestation de consignation, information au chargé de travaux, point de remise à disposition, levée de condamnation et retour d'état doivent être cohérents. Une consignation techniquement juste mais documentairement floue reste une situation à risque.",
          "La coordination prend ici une forme particulière : personne ne ré-énergise, ne retire un cadenas ou ne requalifie seul un état d'installation sans reprise formelle de la chaîne d'information.",
        ],
        keyPoints: [
          "Tracer la consignation du début à la restitution.",
          "Pas de levée implicite ou supposée.",
          "La documentation complète fait partie de la sécurité.",
        ],
      }),
    ],
  },

  "be-verification-mesurage": {
    ...b1b2brbcModuleContent,
    title: "BE vérification / BE Mesurage - Vérifier et mesurer en basse tension",
    shortTitle: "BE vérification / BE Mesurage",
    subtitle:
      "Parcours centré sur l'usage des instruments, la vérification, le mesurage, l'environnement de travail et les limites entre contrôle, intervention et travaux.",
    objective:
      "Préparer une opération de vérification ou de mesurage en basse tension, utiliser les instruments adaptés et tenir les limites qui séparent le contrôle des travaux ou interventions.",
    audience:
      "Techniciens de contrôle, de maintenance, de mise au point ou d'essais amenés à effectuer des vérifications et mesurages en basse tension dans un cadre formalisé.",
    sections: [
      section("cadre-general", {
        chapterImagePath: IMG.b1b2Roles,
        title: "1. Cadre des habilitations BE Vérification et BE Mesurage",
        intro:
          "Les habilitations BE Vérification et BE Mesurage (NF C 18-510 §11.5) définissent un cadre d'action précis : contrôler et mesurer sans intervenir, sans dépanner et sans consigner hors du périmètre autorisé.",
        content: [
          "Le courant électrique présente des dangers physiologiques directs dès que son intensité dépasse des seuils précis. À partir de 1 mA, une sensation de picotement est perceptible. Vers 10 mA en courant alternatif, la tétanisation musculaire peut empêcher de lâcher un conducteur. À 30 mA pendant plus de 200 ms, le risque de fibrillation ventriculaire devient critique — c'est pourquoi les disjoncteurs différentiels 30 mA protègent les personnes. Au-delà de 500 mA, l'arrêt cardiaque est quasi immédiat.",
          "En contexte BE Mesurage, la principale cause d'accident est l'arc électrique provoqué par un instrument ou des cordons de catégorie CAT insuffisante. Un transitoire de tension sur un tableau industriel peut dépasser 6 000 V pendant quelques microsecondes : un instrument CAT II ne tient pas ce niveau et peut exploser, projetant des fragments métalliques portés à plusieurs milliers de degrés. C'est la justification physique du système de catégories CAT.",
          "Le symbole BE désigne des opérations particulières en basse tension. La lettre E ne signifie pas 'électricien général' : elle renvoie à une catégorie d'opérations spécifiques encadrées par le §11 de la NF C 18-510.",
          "BE Vérification (§11.5.2) : contrôler l'état d'une installation, vérifier la présence ou l'absence de tension, apprécier un état sans intervention corrective.",
          "BE Mesurage (§11.5.3) : mesurer des grandeurs électriques (tension, courant, résistance, puissance, énergie) dans un cadre préparé, avec des instruments adaptés au domaine de tension rencontré.",
          "La frontière entre vérification, mesurage et intervention est la limite centrale du rôle BE. Constater une anomalie n'autorise pas à la corriger. Mesurer une valeur n'autorise pas à modifier l'installation.",
          "Le titulaire BE Vérification / BE Mesurage ne tient pas le rôle de chargé de travaux B2, d'intervenant général BR, ni de chargé de consignation BC. Si le contrôle révèle une anomalie qui appelle une action corrective, la situation doit être requalifiée avant toute intervention.",
          "L'habilitation est toujours délivrée par l'employeur, après vérification de l'adéquation entre les opérations réelles et le symbole retenu.",
        ],
        keyPoints: [
          "Seuils physiologiques : 10 mA tétanisation, 30 mA fibrillation ventriculaire, 500 mA arrêt cardiaque.",
          "Arc électrique BE : instrument CAT insuffisant → explosion de l'appareil, brûlures graves.",
          "BE Vérification = contrôler l'état d'une installation (NF C 18-510 §11.5.2).",
          "BE Mesurage = mesurer des grandeurs électriques (NF C 18-510 §11.5.3).",
          "Constater ≠ Intervenir : une anomalie détectée impose une requalification.",
          "Le BE n'est ni B2, ni BR, ni BC.",
        ],
        legalRefs: [
          "NF C 18-510 §11.5 — Opérations particulières : vérification, mesurage et essais",
          "NF C 18-510 §11.5.2 — Opérations de vérification",
          "NF C 18-510 §11.5.3 — Opérations de mesurage",
          "NF EN 61010-1 — Catégories de surtension CAT I à CAT IV : justification physiologique et protection contre les arcs",
          "Code du travail Art. R4544-9 — Obligation d'habilitation pour les opérations d'ordre électrique",
        ],
      }),
      section("roles-responsabilites", {
        chapterImagePath: IMG.b1b2Moyens,
        intro:
          "Le titulaire BE Vérification / BE Mesurage agit pour contrôler, mesurer et interpréter dans un cadre défini. Son rôle n'est ni de conduire des travaux, ni de dépanner librement, ni de consigner hors de son périmètre.",
        content: [
          "Le titulaire BE Vérification / BE Mesurage prépare un contrôle ou un mesurage selon une méthode définie, un instrument adapté et un environnement de travail maîtrisé. Il sait pourquoi il mesure, où il mesure et comment il sécurise l'acte de mesure avant d'approcher le point de contrôle.",
          "Il doit distinguer très clairement une vérification, un mesurage, un essai simple, une lecture d'état et une intervention de dépannage. Cette frontière conditionne la sécurité et la validité technique du résultat.",
          "Le rôle BE impose également une discipline documentaire : résultat exploitable, repère du point de contrôle, traçabilité minimale et signalement immédiat de tout écart qui ferait sortir l'opération du cadre prévu dans le titre d'habilitation.",
          "Le chargé d'exploitation électrique joue un rôle clé dans la chaîne du BE : c'est lui qui autorise l'accès à la zone électrique, qui fournit les instructions de sécurité ou l'autorisation de travail, et qui coordonne les interventions des titulaires BE avec l'état réel de l'installation. Le titulaire BE ne peut commencer son opération qu'après avoir obtenu cette autorisation et pris connaissance des consignes associées.",
          "En cas d'indisponibilité du chargé d'exploitation ou d'absence de document d'autorisation, l'opération BE est suspendue jusqu'à régularisation. Commencer une mesure sans autorisation revient à opérer hors cadre, avec toutes les responsabilités que cela implique.",
        ],
        keyPoints: [
          "Mesurer ne signifie pas intervenir librement.",
          "Le cadre de contrôle doit être préparé et autorisé avant le geste.",
          "La qualité du résultat dépend de la méthode autant que de l'instrument.",
          "Chargé d'exploitation : il autorise l'accès et fournit les instructions de sécurité.",
          "Sans autorisation du chargé d'exploitation → opération suspendue.",
        ],
        legalRefs: [
          "NF C 18-510 §4 — rôles et responsabilités des acteurs, titre d'habilitation",
          "NF C 18-510 §11.5 — périmètre des opérations particulières BE",
          "NF C 18-510 §5.3 — rôle du chargé d'exploitation électrique",
        ],
      }),
      section("symboles-attributions", {
        chapterImagePath: IMG.symbolesTravaux,
        resourceVideos: [VIDEO.symboles],
        intro:
          "Le symbole BE précise à la fois la nature et les limites de l'opération. Comprendre sa signification évite la dérive la plus courante : se croire autorisé à agir au-delà du contrôle ou de la mesure.",
        content: [
          "La lettre B désigne le domaine basse tension. La lettre E renvoie aux opérations particulières encadrées par le §11 de la NF C 18-510.",
          "BE Vérification : l'opérateur peut contrôler l'état d'une installation, vérifier la présence ou l'absence de tension, apprécier un état sans intervention corrective.",
          "BE Mesurage : l'opérateur peut mesurer des grandeurs électriques (U, I, R, P, W) en utilisant des instruments adaptés à la catégorie de l'installation.",
          "BE Essais (§11.5.4) est un symbole distinct qui couvre les opérations d'essai sous tension. Il ne se confond ni avec BE Vérification ni avec BE Mesurage.",
          "Le symbole BE ne donne pas accès aux opérations de travaux (B1/B2), d'interventions générales (BR) ou de consignation (BC). Ces rôles restent séparés et ne se déduisent pas du BE.",
          "Sur un titre d'habilitation, un opérateur peut cumuler plusieurs symboles (ex. BR + BE Mesurage) si ses missions le justifient. Mais chaque symbole garde ses limites propres : cumuler des titres ne signifie pas mélanger les rôles en cours d'opération.",
        ],
        keyPoints: [
          "BE = opération particulière en BT, pas un rôle généraliste.",
          "BE Vérification ≠ BE Mesurage ≠ BE Essais : trois symboles distincts.",
          "BE ne couvre ni travaux (B1/B2), ni intervention générale (BR), ni consignation (BC).",
          "Cumuler BR + BE est possible si les missions le justifient, sans mélanger les rôles.",
        ],
        legalRefs: [
          "NF C 18-510 §11.5 — Opérations particulières et symboles BE",
          "NF C 18-510 §11.5.2 / §11.5.3 / §11.5.4 — Vérification, mesurage, essais",
        ],
      }),
      section("domaines-zones-pnst", {
        chapterImagePath: IMG.zonesBt,
        resourceVideos: [VIDEO.zonesDistances],
        title: "4. Domaines de tension, zones d'environnement et voisinage — lecture BE",
        intro:
          "Le titulaire BE Vérification / BE Mesurage travaille souvent à proximité de pièces nues sous tension (PNST). La maîtrise des zones d'environnement et des distances de sécurité conditionne directement la sécurité de chaque mesure ou contrôle.",
        content: [
          "La basse tension n'est pas une zone de confort. Un conducteur BT à 230 V ou 400 V est dangereux dans tous les environnements et potentiellement mortel en conditions humides. Le titulaire BE qui réalise des mesures sur une installation en service est exposé à ce risque à chaque approche d'un point de mesure.",
          "La NF C 18-510 définit des zones d'environnement autour des pièces nues sous tension. En basse tension : la Distance Minimale d'Approche (DMA) est de 0,30 m — c'est la limite à ne jamais franchir sans protection adaptée. Entre la DMA et 3 m : zone de voisinage simple BT, accès habilité requis. Au-delà : zone accessible au personnel non habilité encadré.",
          "Pour le BE Mesurage, l'approche du point de mesure implique souvent de travailler en voisinage immédiat de conducteurs ou de jeux de barres sous tension. La catégorie CAT de l'instrument est dimensionnée pour tenir les transitoires de tension de cette zone — c'est la traduction instrumentale de la DMA.",
          "La présence de PNST doit être analysée avant toute approche. Un capot manquant, un bornier accessible ou une enveloppe retirée peuvent faire basculer l'opération BE vers une exposition non prévue dans le titre d'habilitation. Dans ce cas, l'opération s'arrête : le BE ne repose pas le capot, ne protège pas la PNST lui-même — il signale et attend une décision du chargé d'exploitation.",
          "Les seuils de tension dangereuse varient selon l'environnement. En courant alternatif : 50 V en milieu sec, 25 V en milieu humide, 12 V en milieu mouillé. En courant continu : 120 V sec, 60 V humide, 30 V mouillé. Un circuit BT de 230 V dépasse ces seuils dans tous les environnements rencontrés en industrie ou en tertiaire.",
          "Le titulaire BE doit aussi connaître les domaines de tension : TBT (< 50 V AC, < 120 V DC), BT (50 V à 1 000 V AC), HTA (1 kV à 50 kV), HTB (> 50 kV). Son habilitation BE couvre la basse tension. Toute installation présentant de la haute tension nécessite une habilitation HE spécifique — le BE ne mesure pas en HT sans ce titre complémentaire.",
        ],
        deepDive: [
          "Le voisinage n'est pas une simple définition normative. Sur le terrain, il conditionne chaque geste de mesure : angle d'approche des sondes, longueur des cordons, position du corps, stabilité de la posture. Un BE Mesurage rigoureux intègre ces paramètres dans sa préparation avant même d'ouvrir son instrument.",
          "En pratique, un titulaire BE Mesurage sur un TGBT industriel travaille régulièrement à moins de 30 cm de jeux de barres sous tension. C'est précisément pour ce contexte que les catégories CAT III et CAT IV ont été définies — la zone d'environnement et la catégorie d'instrument sont deux faces du même dispositif de sécurité.",
        ],
        keyPoints: [
          "DMA BT = 0,30 m — limite à ne jamais franchir sans protection adaptée.",
          "Zone de voisinage simple BT : entre 0,30 m et 3 m des PNST — accès habilité requis.",
          "PNST inattendue (capot manquant, bornier ouvert) → arrêt BE, signalement.",
          "Tensions dangereuses BT : 50 V sec / 25 V humide / 12 V mouillé (AC).",
          "Habilitation BE limitée à la BT — HT exige un titre HE complémentaire.",
          "Catégorie CAT de l'instrument = traduction instrumentale de la DMA.",
        ],
        forbiddenPoints: [
          "S'approcher d'une PNST non prévue dans le titre d'habilitation sans protection adaptée.",
          "Remettre soi-même en place un capot ou protéger une PNST découverte — ce n'est pas dans le périmètre BE.",
          "Mesurer sur une installation HT avec un titre BE BT uniquement.",
        ],
        legalRefs: [
          "NF C 18-510 §4.3 — zones d'environnement, DMA, PNST en basse tension",
          "NF C 18-510 §11.5.2 et §11.5.3 — périmètre BE Vérification et BE Mesurage",
          "NF EN 61010-1 — catégories CAT et zones de mesure : lien DMA / catégorie instrument",
        ],
        practicalCase:
          "Exemple : un titulaire BE Mesurage s'apprête à mesurer les tensions sur un TGBT industriel. En ouvrant la porte du tableau, il constate qu'un déflecteur de câbles a été retiré, laissant un bornier 400 V accessible à moins de 15 cm de sa trajectoire de mesure. Il suspend immédiatement l'opération, referme la porte du tableau, et signale l'anomalie au chargé d'exploitation avant toute reprise.",
        scenarios: [
          {
            situation:
              "Vous réalisez des mesures BE sur un tableau de distribution BT. En approchant votre pince ampèremétrique, vous réalisez que vous êtes à moins de 20 cm d'un jeu de barres nu sous tension 400 V. Votre pince est CAT III.",
            question:
              "Êtes-vous dans une situation conforme pour poursuivre la mesure ?",
            wrongActions: [
              "Poursuivre rapidement la mesure pour réduire le temps d'exposition.",
              "Utiliser un outil non isolant pour maintenir la pince en position stable.",
              "Considérer que la pince CAT III protège entièrement, quelle que soit la posture.",
            ],
            correctActions: [
              "Vérifier que des protections physiques (nappe isolante, écran) séparent la trajectoire de mesure du jeu de barres nu.",
              "Ajuster la position d'approche pour respecter la DMA (0,30 m) entre votre corps et la PNST.",
              "Si la zone ne permet pas de travailler dans les conditions prévues, signaler et suspendre l'opération.",
            ],
            explanation:
              "La catégorie CAT III de l'instrument protège contre les transitoires de tension — elle ne remplace pas le respect de la DMA (0,30 m) ni des protections collectives de zone. La pince ne protège pas l'opérateur d'un contact direct avec le jeu de barres. Les deux dispositifs — catégorie CAT et DMA — sont complémentaires, pas substituables.",
            normRef:
              "NF C 18-510 §4.3 — DMA 0,30 m en BT ; NF EN 61010-1 — catégorie CAT : protection contre transitoires, pas contre contact direct",
          },
          {
            situation:
              "Lors d'une vérification BE dans un local électrique, vous constatez qu'un capot d'armoire a été retiré par une équipe de maintenance qui a travaillé là la veille. Des borniers 230 V sont visibles et accessibles.",
            question:
              "Que faites-vous face à cette PNST non prévue dans le cadre de votre opération BE ?",
            wrongActions: [
              "Remettre le capot vous-même pour sécuriser la zone et poursuivre la vérification.",
              "Travailler en faisant attention de ne pas toucher les borniers.",
              "Continuer la vérification sur les autres équipements du local sans tenir compte de cette anomalie.",
            ],
            correctActions: [
              "Cesser toute opération dans ce local.",
              "Délimiter la zone si possible (ne pas toucher au tableau).",
              "Signaler l'anomalie au chargé d'exploitation pour décision : remise en place du capot par un habilité, consignation ou sécurisation physique.",
            ],
            explanation:
              "Un capot retiré crée une PNST non prévue dans le titre BE. Le titulaire BE n'est pas habilité à intervenir sur le tableau ni à remettre le capot — c'est une action corrective qui relève d'un BR ou B1/B2. Il doit signaler et attendre. Poursuivre la vérification dans ce contexte revient à opérer hors du périmètre prévu dans le titre d'habilitation.",
            normRef:
              "NF C 18-510 §11.5.2 — périmètre BE Vérification : contrôle sans intervention ; §4.3 — PNST et zones d'environnement",
          },
        ],
        chapterImageAlt:
          "Schéma des zones d'environnement BT autour d'un conducteur nu avec DMA 0,30 m et zone de voisinage simple jusqu'à 3 m",
        visual: {
          title: "Zones BE : mesurer près des PNST",
          subtitle: "DMA 0,30 m, voisinage, CAT instrument — même dispositif de sécurité.",
          items: ["DMA 0,30 m", "CAT III/IV", "PNST inattendue → arrêt", "HT → HE requis"],
          tone: "amber",
          imagePath: "/images/modules/electricite/distances-locaux-acces.jpg",
          imageAlt: "Distances de sécurité et zones d'approche autour des pièces nues sous tension en basse tension",
        },
      }),
      section("preparation-travaux", {
        chapterImagePath: IMG.distancesLocaux,
        intro:
          "Une opération BE se prépare comme une opération de contrôle rigoureuse : point de mesure identifié, méthode connue, instrument adapté, état électrique de la zone connu, et possibilité de repli si l'environnement n'est pas conforme aux conditions prévues dans le titre d'habilitation.",
        content: [
          "Avant de mesurer ou vérifier, l'opérateur confirme le matériel concerné, le point de contrôle, la présence éventuelle de tension, le domaine de mesure attendu et l'environnement immédiat. Il prend connaissance de l'instruction de sécurité ou de l'autorisation de travail délivrée par le chargé d'exploitation.",
          "Il vérifie également la cohérence entre la demande, le schéma ou le repérage local, et ce qu'il voit réellement sur le terrain. Une mesure sur un mauvais départ ou dans un mauvais contexte peut être techniquement fausse et électriquement dangereuse.",
          "La préparation comprend aussi la connaissance des séquences de mise en sécurité d'un circuit : séparation, condamnation, identification, vérification d'absence de tension (VAT) et mise à la terre (HT). Le titulaire BE ne réalise pas lui-même la consignation, mais il doit savoir la reconnaître, vérifier qu'elle a bien été effectuée avant toute mesure dans une zone supposée hors tension, et exiger l'attestation de consignation si nécessaire.",
          "La vérification d'absence de tension (VAT) est l'étape critique avant tout accès à une zone supposée hors tension. Elle se réalise avec un vérificateur d'absence de tension homologué, sur chaque conducteur actif et par rapport à la terre. Le résultat doit être confirmé avant l'approche : une hypothèse ne remplace pas une VAT.",
          "La préparation comprend enfin le choix du bon instrument, de sa plage d'utilisation et de ses accessoires, sans bricolage ni substitution improvisée. Un instrument emprunté dont la catégorie CAT est inconnue est un instrument inutilisable.",
        ],
        keyPoints: [
          "Le point de mesure doit être identifié et l'accès autorisé avant l'approche.",
          "Une mesure fiable commence par une lecture fiable du terrain et un document d'autorisation.",
          "Consignation : le BE doit la connaître, la vérifier, sans la réaliser lui-même.",
          "VAT avant tout accès à une zone supposée hors tension — pas d'hypothèse.",
          "Le bon instrument, de la bonne catégorie CAT, fait partie de la sécurité.",
        ],
        legalRefs: [
          "NF C 18-510 §11.5 — préparation des opérations particulières BE",
          "NF C 18-510 §5 — séquences de mise en sécurité, VAT, consignation",
          "NF C 18-510 §5.3 — instruction de sécurité et autorisation de travail",
        ],
      }),
      section("mesurages-essais-connexions", {
        chapterImagePath: IMG.unVat,
        intro:
          "Le cœur du rôle BE est ici : mesurer ou vérifier avec la méthode correcte, l'instrument adapté et la catégorie d'appareil conforme au point de mesure.",
        content: [
          "Mesurer, c'est obtenir une information exploitable sur un point identifié, avec une méthode adaptée et un instrument compatible avec le domaine de tension et l'environnement.",
          "Vérifier, c'est confronter l'état observé à un attendu technique ou documentaire. Un résultat anormal n'autorise pas automatiquement une action corrective — il déclenche une requalification.",
          "Les instruments de mesure sont classés selon leur catégorie de surtension (NF EN 61010-1) : CAT I pour les circuits électroniques protégés (équipements de laboratoire en aval de protections), CAT II pour les appareils raccordés en aval d'une prise (230 V terminaux, électroménager), CAT III pour les installations fixes (tableaux, disjoncteurs, départs industriels), CAT IV pour l'origine de l'installation (compteur, TGBT principal, branchement réseau).",
          "Utiliser un instrument de catégorie inférieure au point de mesure expose à un claquage de l'appareil et à un arc électrique en cas de transitoire de tension. Un CAT II ne doit jamais être utilisé sur un tableau industriel : CAT III minimum est requis. Pour des mesures à l'origine (compteur, réseau), CAT IV est nécessaire.",
          "Les cordons de mesure (sondes, pinces, accessoires) doivent correspondre à la même catégorie que l'appareil. La norme NF EN 61010-031 définit leurs exigences : double isolation, catégorie de surtension identique à l'instrument, absence de dégradation visible (fissure, gaine décollée, pointe exposée). Un cordon dégradé invalide la sécurité de l'ensemble.",
          "Si le contrôle révèle une anomalie qui appelle un dépannage, une modification, une consignation ou un travail dirigé, l'opérateur BE sort de son cadre et transmet pour requalification.",
        ],
        keyPoints: [
          "CAT III minimum pour toute mesure sur tableau fixe industriel.",
          "CAT IV pour mesures à l'origine de l'installation (compteur, réseau).",
          "Cordons NF EN 61010-031 : même catégorie que l'appareil, aucune dégradation tolérée.",
          "Un résultat anormal déclenche une requalification, pas une intervention spontanée.",
          "Je mesure pour comprendre un état, pas pour improviser une réparation.",
        ],
        legalRefs: [
          "NF C 18-510 §11.5.3 — Opérations de mesurage en basse tension",
          "NF EN 61010-1 — Règles de sécurité pour appareils de mesure : catégories CAT I à CAT IV",
          "NF EN 61010-031 — Règles de sécurité pour les sondes et cordons de mesure",
        ],
      }),
      section("outils-protections", {
        chapterImagePath: IMG.outilsElectricien,
        intro:
          "En BE Vérification / BE Mesurage, la fiabilité du résultat dépend autant de l'instrument choisi que du maintien d'un environnement de travail compatible avec le risque électrique. Connaître les fonctions et les limites de chaque matériel est une compétence de sécurité à part entière.",
        content: [
          "Le multimètre numérique est l'instrument de référence pour mesurer la tension, le courant (en série), la résistance, la continuité et parfois la capacité ou la fréquence. Il doit être classé CAT III minimum pour toute utilisation sur un tableau BT fixe industriel, CAT IV pour l'origine de l'installation. Sa plage de mesure doit être adaptée avant l'approche.",
          "La pince ampèremétrique mesure le courant alternatif ou continu par effet Hall ou par induction autour d'un conducteur, sans ouvrir le circuit. Son avantage principal en BE Mesurage : mesurer un courant en service sans interrompre l'alimentation ni déconnecter l'équipement. Elle doit également porter la catégorie CAT adaptée au point de mesure.",
          "Le mégohmmètre (ou contrôleur d'isolement) mesure la résistance d'isolement des câbles, moteurs et équipements en appliquant une tension de test DC élevée (500 V, 1 000 V ou 2 500 V selon l'application). Il ne s'utilise QUE sur une installation hors tension, déchargée et déconnectée. Une mesure au mégohmmètre sur un circuit sous tension détruit l'instrument et met en danger l'opérateur.",
          "Le vérificateur d'absence de tension (VAT) confirme l'absence de tension sur un conducteur avant tout accès ou toute mesure dans une zone supposée hors tension. C'est un instrument de sécurité, pas un instrument de mesure précise. Il doit être testé avant et après utilisation sur une source de tension connue (selon NF C 18-510 §5).",
          "Le telluromètre mesure la résistance des prises de terre par injection de courant via des piquets auxiliaires. Il ne peut pas être remplacé par un ohmmètre classique car la méthode de mesure et les conditions terrain sont spécifiques.",
          "Les protections collectives (EPC) sont prioritaires sur les protections individuelles (EPI). En environnement BE : balisage de zone, écrans isolants, nappes de protection, barrières (EPC) doivent être en place avant d'utiliser gants, lunettes ou vêtements de protection (EPI). Un instrument de mesure n'autorise jamais une approche hors du cadre défini.",
          "Un cordon douteux, une pointe dégradée, un capot absent, un écran de protection manquant ou une zone mal maîtrisée suffisent à suspendre l'opération. Le doute sur les moyens impose l'arrêt.",
        ],
        keyPoints: [
          "Multimètre : CAT III minimum sur tableau BT fixe, CAT IV à l'origine de l'installation.",
          "Pince ampèremétrique : mesure du courant sans ouvrir le circuit — même exigence CAT.",
          "Mégohmmètre : isolement uniquement sur installation hors tension et déchargée.",
          "VAT : instrument de sécurité — tester avant ET après utilisation.",
          "Telluromètre : résistance de terre — méthode spécifique, non remplaçable par un ohmmètre.",
          "EPC en premier (balisage, écrans), EPI en complément (gants, lunettes).",
          "Tout équipement dégradé ou non conforme → opération suspendue.",
        ],
        legalRefs: [
          "NF EN 61010-1 — sécurité des instruments de mesure : catégories CAT et limites d'utilisation",
          "NF EN 61010-031 — cordons et sondes de mesure : exigences de sécurité",
          "NF C 18-510 §5 — vérificateur d'absence de tension : utilisation et vérification",
          "Code du travail L. 4121-2 — priorité des protections collectives sur les protections individuelles",
        ],
      }),
      section("anomalies-urgence", {
        chapterImagePath: IMG.armoireDanger,
        resourceVideos: [VIDEO.chocElectrique],
        intro:
          "En BE Vérification / BE Mesurage, deux types de situations d'urgence peuvent survenir : la découverte d'une anomalie sur l'installation, et l'accident corporel ou l'incendie en environnement électrique. Les conduites à tenir sont distinctes et doivent être connues avant toute opération (NF C 18-510, article 13).",
        content: [
          "Anomalie détectée lors d'un contrôle BE : une mesure incohérente, un échauffement, un bruit anormal, une odeur de brûlé ou un comportement inattendu du matériel imposent d'arrêter le contrôle, de protéger la zone et de remonter l'information pour requalification. Le titulaire BE ne transforme pas une vérification en dépannage spontané. Il documente, alerte et maintient la sécurité de la zone.",
          "Conduite à tenir en cas d'accident corporel par électrisation (NF C 18-510 article 13) : la priorité absolue est de soustraire la victime à la source électrique SANS contact direct. Couper l'alimentation électrique est le premier réflexe. Si la coupure est impossible, utiliser un matériau isolant (manche en bois, plastique rigide sec) pour éloigner le conducteur ou la victime. Ne jamais toucher la victime à mains nues tant qu'elle est en contact avec la source.",
          "Après la mise hors de danger : alerter les secours (15 SAMU, 18 Sapeurs-Pompiers, 112 secours européen). En cas d'inconscience avec respiration : placer en position latérale de sécurité (PLS). En cas d'absence de respiration : débuter les compressions thoraciques (30 compressions / 2 insufflations) jusqu'à l'arrivée des secours. Ne pas déplacer la victime sans raison médicale impérative.",
          "Conduite à tenir en cas d'incendie en environnement électrique (NF C 18-510 article 13) : si l'installation est sous tension, utiliser uniquement un extincteur CO2 (dioxyde de carbone) — non conducteur et adapté aux feux électriques. Ne jamais utiliser d'eau (conductrice) ni de jet d'eau sur un circuit sous tension. Ne pas utiliser de poudre en espace confiné (toxicité des gaz). Si possible, couper l'alimentation électrique avant d'intervenir sur le foyer.",
          "En cas d'incendie ne pouvant être maîtrisé avec l'extincteur disponible : évacuer immédiatement, alerter les secours (18 ou 112), fermer les portes coupe-feu sans les verrouiller, et ne pas retourner sur les lieux sans autorisation des secours.",
        ],
        keyPoints: [
          "Anomalie détectée → arrêt du contrôle, protection de zone, signalement, requalification.",
          "Victime électrisée : couper l'alimentation ou éloigner sans contact direct.",
          "PLS si inconsciente et respirant ; compressions thoraciques si pas de respiration.",
          "Alerte : 15 (SAMU), 18 (Pompiers), 112 (secours européen).",
          "Incendie électrique → extincteur CO2 uniquement — jamais d'eau sur circuit sous tension.",
          "Le titulaire BE ne transforme pas une vérification en dépannage spontané.",
        ],
        legalRefs: [
          "NF C 18-510 article 13 — conduite à tenir en cas d'accident corporel et d'incendie en environnement électrique",
          "Code du travail L. 4131-1 — droit de retrait et obligation de signalement des dangers",
          "NF C 18-510 §11.5 — périmètre des opérations BE : signalement obligatoire hors cadre",
        ],
      }),
      section("retour-experience", {
        chapterImagePath: IMG.b1b2RetourExperience,
        title: "9. Retour d'expérience et maintien des compétences BE",
        intro:
          "Le retour d'expérience en BE Vérification / BE Mesurage sert à identifier les situations où la frontière entre contrôle et intervention a été difficile à tenir, afin de fiabiliser les opérations suivantes.",
        content: [
          "Les principaux écarts observés en contexte BE concernent : mesure réalisée avec un instrument de mauvaise catégorie (CAT II sur un tableau industriel TGBT qui exige CAT III), cordon de mesure dégradé utilisé faute d'anticipation, anomalie détectée suivie d'une intervention spontanée hors cadre, dérive progressive de la vérification vers le dépannage.",
          "L'analyse de ces situations permet d'améliorer la préparation : choix de l'instrument adapté à la catégorie du point de mesure en amont de l'opération, vérification systématique de l'état des cordons (NF EN 61010-031) avant chaque déplacement, procédure de signalement documentée en cas d'anomalie, clarification écrite du rôle BE dans l'organisation du site.",
          "Le maintien des compétences BE implique de conserver la discipline du périmètre défini dans le titre d'habilitation : contrôler sans modifier, mesurer sans intervenir, signaler sans corriger hors cadre. Ces réflexes s'érodent avec le temps si le professionnel ne les pratique pas activement.",
          "Les statistiques nationales rappellent l'enjeu : environ 428 accidents du travail d'origine électrique en 2021, dont 46 mortels. Le mode opératoire inapproprié représente 31 % des facteurs causaux. Pour le titulaire BE, cela signifie qu'un instrument mal choisi, un cordon fissuré ou une vérification transformée en dépannage spontané peuvent être à l'origine d'un accident grave.",
        ],
        deepDive: [
          "Les organisations qui capitalisent sur les retours d'expérience BE réduisent les écarts instrumentaux, les ambiguïtés de rôle et les débordements vers des opérations non prévues. Le retour d'expérience est un levier de sécurité aussi important que la maîtrise technique.",
          "Le maintien des compétences BE doit rester cohérent avec les missions réelles du titulaire. Si le type d'installation évolue (haute tension, DC, ATEX), si de nouveaux équipements de mesure sont introduits, ou si les exigences de catégorie CAT changent avec les nouvelles architectures, le besoin de formation complémentaire ou de requalification doit être réexaminé.",
        ],
        keyPoints: [
          "Écart le plus fréquent : détecter une anomalie et tenter de la corriger sans requalification.",
          "L'instrument de mauvaise catégorie est souvent choisi par défaut, faute d'anticipation en amont.",
          "Cordons dégradés : une fissure sur la gaine suffit à mettre hors service le cordon (NF EN 61010-031).",
          "Le retour d'expérience améliore la préparation, pas seulement la réaction après coup.",
        ],
        forbiddenPoints: [
          "Clore un contrôle BE sans signaler une anomalie ou un écart documentaire identifié.",
          "Utiliser un instrument de catégorie inférieure au point de mesure en invoquant l'urgence ou la disponibilité.",
          "Supposer qu'une habilitation BE initiale suffit indéfiniment sans actualisation des pratiques.",
        ],
        legalRefs: [
          "NF C 18-510 §11.5 — opérations particulières : BE Vérification (§11.5.2), BE Mesurage (§11.5.3).",
          "NF EN 61010-1 — catégories de surtension CAT I à CAT IV pour les instruments de mesure.",
          "NF EN 61010-031 — cordons et sondes de mesure : état, catégorie et maintenance.",
          "Code du travail — prévention et amélioration continue des conditions de travail.",
        ],
        practicalCase:
          "Exemple : après une campagne de mesures sur un TGBT industriel, le titulaire BE signale que son multimètre CAT III a présenté une surtension momentanée non prévue lors d'une mesure sur un départ moteur 400 V. L'organisation formalise un rappel sur le choix des instruments et la vérification des cordons avant chaque déplacement terrain.",
        scenarios: [
          {
            situation:
              "Vous effectuez une vérification BE sur un tableau de distribution industriel. En mesurant la tension sur un départ, votre multimètre affiche une valeur anormale et émet un bip d'alarme de surtension. Vous disposez d'un second multimètre CAT II dans votre sacoche.",
            question:
              "Que faites-vous face à une surtension détectée sur un point de mesure industriel ?",
            wrongActions: [
              "Utiliser le multimètre CAT II de remplacement pour confirmer la mesure sur ce même point.",
              "Continuer la vérification en considérant que la surtension était passagère.",
              "Ouvrir le tableau pour inspecter visuellement les connexions du départ concerné.",
            ],
            correctActions: [
              "Cesser immédiatement toute mesure sur ce point et écarter la zone.",
              "Documenter l'anomalie : repère du départ, valeur observée, heure, comportement du multimètre.",
              "Signaler l'anomalie au responsable et demander une requalification vers le symbole adapté (BR ou B2) avant toute investigation complémentaire.",
            ],
            explanation:
              "Un multimètre CAT III signalant une surtension indique que le niveau de tension dépasse les limites sûres de la mesure en cours. Utiliser un instrument CAT II sur le même point serait encore plus dangereux car sa tenue aux chocs de tension est inférieure. Le rôle BE impose de signaler, pas d'intervenir.",
            normRef:
              "NF EN 61010-1 — catégorie de mesure adaptée au point de mesure ; NF C 18-510 §11.5.2 et §11.5.3 — périmètre BE",
          },
          {
            situation:
              "Lors d'une vérification BE de routine, vous constatez qu'un câble de départ présente un échauffement anormal au toucher. Ce câble alimente une machine de production. Vous êtes seul sur site, et la maintenance est joignable.",
            question:
              "Une anomalie thermique détectée lors d'une vérification BE vous autorise-t-elle à intervenir sur le câble ?",
            wrongActions: [
              "Ouvrir le disjoncteur du départ pour protéger le câble et noter l'action dans votre rapport.",
              "Déconnecter provisoirement le câble pour inspecter la connexion.",
              "Attendre la fin de la campagne de vérification pour signaler l'anomalie globalement.",
            ],
            correctActions: [
              "Cesser la vérification sur cette zone et ne pas toucher le câble.",
              "Signaler immédiatement l'anomalie au responsable d'exploitation pour décision.",
              "Documenter précisément : repère du câble, machine alimentée, nature de l'anomalie, heure.",
            ],
            explanation:
              "Le titulaire BE n'est pas habilité à réaliser des interventions correctives. La découverte d'une anomalie lors d'une vérification impose de signaler et de laisser la décision d'intervention à un habilité disposant du symbole adapté (BR, B2). Agir au-delà du périmètre BE engage la responsabilité individuelle et contredit la NF C 18-510.",
            normRef:
              "NF C 18-510 §11.5.2 — BE Vérification : périmètre et interdictions ; §4.3 — principe de non-intervention spontanée",
          },
        ],
        chapterImageAlt:
          "Tableau de bord de retour d'expérience BE avec fiches d'écarts instrumentaux et procédures de signalement d'anomalies",
        visual: {
          title: "Apprendre de chaque opération BE",
          subtitle: "Écarts, instruments, cordons et signalement.",
          items: [
            "Écart identifié",
            "Signalement documenté",
            "Instrument revu",
            "Pratiques actualisées",
          ],
          tone: "slate",
          imagePath: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-retour-experience.svg",
        },
      }),
      section("synthese", {
        chapterImagePath: IMG.b1b2Synthese,
        title: "10. Synthèse — Points clés du rôle BE Vérification / BE Mesurage",
        intro:
          "Avant le quiz, voici les points essentiels du rôle BE Vérification / BE Mesurage. Ces deux habilitations partagent un même principe fondateur : observer et mesurer dans un cadre défini, sans jamais franchir la frontière vers l'intervention.",
        content: [
          "Le BE Vérification (§11.5.2 NF C 18-510) contrôle l'état d'une installation électrique : conformité visuelle, contrôle de continuité, contrôle de mise à la terre, vérification de l'état des équipements. Il n'effectue aucune modification, même mineure.",
          "Le BE Mesurage (§11.5.3 NF C 18-510) mesure des grandeurs électriques sur une installation en service : tension, courant, puissance, résistance, isolement. Ces mesures sont réalisées sur des pièces nues ou accessibles sous tension — le choix de l'instrument est donc une décision de sécurité à part entière.",
          "La catégorie de mesure CAT (NF EN 61010-1) doit correspondre au point de mesure : CAT II pour prises et appareils domestiques, CAT III pour tableaux fixes et circuits industriels, CAT IV pour l'origine de l'installation (compteur, TGBT principal, réseau de distribution). Utiliser un instrument de catégorie insuffisante expose à un risque d'arc électrique en cas de transitoire de tension.",
          "Les cordons et sondes de mesure (NF EN 61010-031) doivent être de même catégorie que l'instrument. Tout cordon fissuré, écrasé, dont l'isolation est dégradée ou dont le repère de catégorie est illisible doit être mis hors service immédiatement.",
          "Une anomalie détectée lors d'un contrôle BE ne donne pas le droit d'intervenir. Elle impose de cesser l'opération, de sécuriser la zone, de documenter et de signaler pour requalification vers le symbole adapté (BR pour dépannage, B2 pour travaux, BC pour consignation).",
          "Les documents, le repérage et la coordination constituent aussi des éléments de sécurité : mesurer au mauvais point, avec un instrument mal choisi, ou dans un contexte non défini dans le titre d'habilitation peut être aussi dangereux qu'une intervention directe.",
        ],
        deepDive: [
          "La maîtrise du rôle BE n'est pas seulement une question de technique de mesure. Elle repose sur la capacité à lire le contexte électrique, à choisir l'instrument adapté, à maintenir la discipline du périmètre et à signaler sans hésitation dès que la situation sort du cadre prévu.",
          "Dans l'esprit de la NF C 18-510, l'habilitation BE n'est pas une autorisation générale d'accès aux installations électriques. Elle est attachée à une mission précise, un environnement défini, des instruments adaptés et une organisation formalisée. Toute dérive hors de ce cadre engage la responsabilité individuelle du titulaire.",
        ],
        keyPoints: [
          "BE Vérification §11.5.2 : contrôler l'état sans modifier.",
          "BE Mesurage §11.5.3 : mesurer les grandeurs sur installation en service.",
          "CAT III minimum pour tableau fixe industriel (TGBT), CAT IV pour l'origine de l'installation.",
          "Cordons NF EN 61010-031 : même catégorie que l'instrument, aucune dégradation tolérée.",
          "Anomalie détectée → arrêt, documentation, signalement, requalification.",
        ],
        forbiddenPoints: [
          "Utiliser un instrument de catégorie inférieure au point de mesure en invoquant l'urgence ou la disponibilité.",
          "Transformer une vérification ou un mesurage en intervention corrective spontanée.",
          "Poursuivre une opération BE lorsque le titre d'habilitation ne couvre pas le contexte rencontré.",
          "Négliger l'état des cordons avant une campagne de mesures.",
        ],
        legalRefs: [
          "NF C 18-510 §11.5 — Opérations particulières : BE Vérification (§11.5.2), BE Mesurage (§11.5.3), BE Essais (§11.5.4)",
          "NF EN 61010-1 — Catégories de surtension CAT I à CAT IV pour instruments de mesure",
          "NF EN 61010-031 — Cordons et sondes de mesure : exigences de sécurité",
          "Code du travail — prévention du risque électrique lors d'opérations de vérification et mesurage",
        ],
        practicalCase:
          "Exemple : un titulaire BE Mesurage est chargé de relever les niveaux de tension sur un TGBT industriel 400 V. Il vérifie que son multimètre est bien classé CAT III 600 V, contrôle visuellement ses cordons avant la campagne, consigne ses mesures sur la fiche d'opération et, en découvrant un déséquilibre de phases anormal, suspend la campagne et signale l'anomalie au responsable technique sans toucher au tableau.",
        scenarios: [
          {
            situation:
              "Vous êtes titulaire BE Mesurage. Votre responsable vous demande de mesurer l'intensité sur les départs d'un TGBT industriel 400 V. En arrivant sur place, vous constatez que votre pince ampèremétrique est classée CAT II 600 V.",
            question:
              "Pouvez-vous utiliser cette pince ampèremétrique CAT II sur ce TGBT industriel ?",
            wrongActions: [
              "Utiliser la pince CAT II car la tension nominale 600 V dépasse bien le 400 V du réseau.",
              "Utiliser la pince en prenant des précautions supplémentaires, car la mesure sera rapide.",
              "Demander à un collègue de surveiller pendant la mesure pour pallier le risque.",
            ],
            correctActions: [
              "Refuser d'utiliser la pince CAT II sur ce point de mesure industriel.",
              "Informer le responsable que l'instrument ne correspond pas à la catégorie requise (CAT III minimum pour un TGBT fixe industriel).",
              "Suspendre l'opération jusqu'à mise à disposition d'une pince ampèremétrique CAT III adaptée.",
            ],
            explanation:
              "La catégorie CAT définit la tenue aux chocs de tension transitoires, pas seulement à la tension nominale. Un TGBT industriel fixe exige CAT III car les transitoires de tension y sont bien supérieurs à ceux d'un circuit domestique. Utiliser un instrument CAT II expose au risque d'arc électrique en cas de transitoire, indépendamment de la tension nominale mesurée.",
            normRef:
              "NF EN 61010-1 §6.7 — catégories de mesure ; NF C 18-510 §11.5.3 — BE Mesurage",
          },
          {
            situation:
              "En fin de formation BE Vérification / BE Mesurage, un stagiaire résume ainsi sa compréhension : 'L'essentiel, c'est d'utiliser un bon multimètre et de ne pas toucher les fils sous tension.'",
            question:
              "Cette compréhension est-elle complète pour exercer le rôle BE en sécurité ?",
            wrongActions: [
              "Valider cette compréhension car elle couvre les deux risques principaux.",
              "Ajouter juste la règle de distance pour compléter.",
              "Considérer que les EPI suffisent à compléter la protection.",
            ],
            correctActions: [
              "Reformuler : le rôle BE repose sur un cadre d'habilitation précis, un périmètre défini, un instrument adapté à la catégorie du point de mesure, des cordons conformes NF EN 61010-031, et la discipline de signalement sans intervention.",
              "Rappeler que la vérification débute par la lecture du titre et la préparation documentaire, pas par la mesure.",
              "Insister sur la frontière entre contrôle et intervention : la franchir expose à une responsabilité pénale et à un risque électrique non maîtrisé.",
            ],
            explanation:
              "La sécurité en BE ne se réduit pas à la technique de mesure. Elle repose sur l'adéquation instrument/point de mesure (CAT), l'état des cordons, la lecture du contexte, le respect du périmètre d'habilitation et la capacité à signaler sans agir hors cadre. La NF C 18-510 §11.5 définit un système cohérent, pas une liste de gestes.",
            normRef:
              "NF C 18-510 §11.5 — opérations particulières BE ; NF EN 61010-1 — classification des instruments",
          },
        ],
        chapterImageAlt:
          "Schéma de synthèse des réflexes essentiels du titulaire BE : périmètre d'habilitation, catégorie d'instrument, cordons conformes et signalement d'anomalie",
        visual: {
          title: "Les 4 réflexes du titulaire BE",
          subtitle: "Cadre, instrument, cordons, signalement.",
          items: [
            "Respecter le périmètre BE",
            "Instrument CAT adapté",
            "Cordons NF EN 61010-031",
            "Signaler sans intervenir",
          ],
          tone: "blue",
          imagePath: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-synthese.svg",
        },
      }),
      section("documents-coordination", {
        chapterImagePath: IMG.b1b2Coordination,
        title: "11. Documents, traçabilité et coordination pour le BE",
        intro:
          "Le rôle BE Vérification / BE Mesurage s'inscrit toujours dans un cadre documentaire. Le titre d'habilitation, la fiche d'opération, le repérage des points de mesure et le compte rendu d'anomalie sont les supports indispensables de toute opération BE sécurisée.",
        content: [
          "Avant toute opération, le titulaire BE doit disposer de son titre d'habilitation à jour, d'une description précise des points à vérifier ou à mesurer, du repérage des équipements concernés et des consignes locales d'exploitation. Une opération BE sans base documentaire est une opération à risque.",
          "Le titre d'habilitation BE précise le périmètre autorisé : type d'opération (vérification, mesurage ou essais), domaine de tension (BT, HT), environnement et conditions particulières. Toute opération hors périmètre nécessite une requalification formelle avant d'agir.",
          "La fiche d'opération ou ordre de vérification doit indiquer : les équipements concernés avec leurs repères, les grandeurs à mesurer ou les points à contrôler, les instruments requis avec leur catégorie CAT, les conditions d'accès et les consignes de sécurité locales.",
          "Le compte rendu d'opération est obligatoire. Il doit être factuel : points vérifiés ou mesurés, valeurs relevées, anomalies constatées, instruments utilisés (marque, modèle, numéro de série, date de dernière vérification), date et heure de l'opération, signature du titulaire BE.",
          "En cas d'anomalie détectée, le compte rendu doit permettre une traçabilité complète : nature de l'anomalie, repère précis de l'équipement ou du circuit concerné, circonstance de découverte, décision prise (arrêt, signalement, demande de requalification) et action restante à prendre par un habilité compétent.",
          "La coordination avec les autres intervenants du site est un point de sécurité à part entière. Une campagne de vérification ou de mesurage réalisée pendant qu'un autre opérateur effectue des modifications sur l'installation peut créer des situations dangereuses non prévues dans le titre BE. La coordination préalable évite ces interférences.",
        ],
        deepDive: [
          "Un titre d'habilitation BE bien rédigé est aussi un outil de coordination : il permet au responsable électrique, au chargé d'exploitation et aux autres intervenants de comprendre ce que le titulaire peut faire, dans quel périmètre et sous quelles conditions. L'ambiguïté documentaire est une source d'accidents.",
          "La traçabilité des instruments de mesure (étalonnage, vérification périodique, catégorie CAT) fait partie de la documentation BE. Un instrument sans traçabilité de vérification ne garantit pas la fiabilité des mesures et peut ne pas tenir ses performances de protection dans les cas extrêmes.",
        ],
        keyPoints: [
          "Disposer d'un titre d'habilitation à jour avant toute opération BE.",
          "Fiche d'opération : repères, grandeurs, instruments requis, consignes locales.",
          "Compte rendu factuel : valeurs, anomalies, instruments, date, signature.",
          "Toute anomalie documentée permet une requalification rapide et sécurisée.",
          "Coordonner avec les autres intervenants avant de démarrer une campagne BE.",
        ],
        forbiddenPoints: [
          "Réaliser une opération BE sans titre d'habilitation à jour ni fiche d'opération.",
          "Clore une campagne sans compte rendu, même en l'absence d'anomalie.",
          "Démarrer une campagne de mesurage sans vérifier que personne ne travaille simultanément sur l'installation.",
          "Utiliser un instrument dont la vérification métrologique ou l'étalonnage est inconnu.",
        ],
        legalRefs: [
          "NF C 18-510 §4 — titre d'habilitation, périmètre et responsabilités du titulaire BE.",
          "NF C 18-510 §11.5.2 et §11.5.3 — documents requis pour les opérations BE Vérification et BE Mesurage.",
          "NF EN 61010-1 — traçabilité des instruments de mesure et catégories de surtension.",
          "Code du travail — traçabilité des opérations et obligation documentaire en prévention du risque électrique.",
        ],
        practicalCase:
          "Exemple : un titulaire BE Mesurage réalise une campagne de relevés de tensions sur un tableau tertiaire. Avant de commencer, il vérifie son titre d'habilitation, consulte le plan de repérage des départs, note les numéros de série et la date de vérification de son multimètre CAT III, et informe le responsable de l'installation de la durée prévisible de la campagne. À la fin, il remet un compte rendu signé avec toutes les valeurs relevées et signale un départ présentant un déséquilibre de 15 % entre phases.",
        scenarios: [
          {
            situation:
              "Vous êtes titulaire BE Vérification. On vous remet un plan de repérage de tableau datant de 2 ans. Visiblement, deux départs ont été ajoutés depuis. On vous demande de vérifier l'état de tous les départs du tableau.",
            question:
              "Pouvez-vous réaliser la vérification BE sur la base de ce plan non mis à jour ?",
            wrongActions: [
              "Réaliser la vérification en adaptant le plan de mémoire.",
              "Vérifier uniquement les départs référencés sur l'ancien plan en ignorant les nouveaux.",
              "Demander une mise à jour du plan à la fin de la vérification.",
            ],
            correctActions: [
              "Refuser de commencer la vérification sur un plan documentaire non à jour.",
              "Demander au responsable technique un plan de repérage actualisé ou une liste exhaustive des départs.",
              "Si le plan ne peut être obtenu dans les délais, différer la vérification jusqu'à mise à jour documentaire.",
            ],
            explanation:
              "Un plan de repérage non à jour fait courir le risque de vérifier un circuit erroné ou d'en oublier un. En BE Vérification, l'exhaustivité et la fiabilité du repérage sont des conditions de sécurité : une installation partiellement vérifiée sur une base documentaire fausse ne garantit pas la conformité de l'ensemble.",
            normRef:
              "NF C 18-510 §4 — titre et conditions d'habilitation ; §11.5.2 — BE Vérification : base documentaire requise",
          },
          {
            situation:
              "Vous terminez une campagne de mesurage BE sur un TGBT tertiaire. Toutes les mesures sont dans les limites normales. Le responsable vous dit que le compte rendu n'est pas nécessaire car tout va bien.",
            question:
              "Le compte rendu d'opération BE est-il obligatoire même en l'absence d'anomalie ?",
            wrongActions: [
              "Accepter de ne pas rédiger de compte rendu car aucune anomalie n'a été détectée.",
              "Rédiger juste une note informelle sans valeurs ni signature.",
              "Reporter la rédaction du compte rendu à la prochaine campagne.",
            ],
            correctActions: [
              "Rédiger un compte rendu complet même en l'absence d'anomalie.",
              "Y consigner toutes les valeurs relevées, les instruments utilisés avec leur numéro de série, la date et votre signature.",
              "Remettre le compte rendu au responsable désigné et en conserver une copie.",
            ],
            explanation:
              "Le compte rendu d'opération BE est une obligation documentaire, quelle que soit l'issue. Il constitue la preuve de l'opération réalisée, la traçabilité des mesures effectuées et le point de référence pour les comparaisons futures. Il permet également de détecter des dérives progressives entre deux campagnes, même si aucune valeur n'est alarmante lors d'une seule mesure.",
            normRef:
              "NF C 18-510 §11.5 — traçabilité des opérations particulières BE ; Code du travail — obligations documentaires en prévention",
          },
        ],
        chapterImageAlt:
          "Titre d'habilitation BE, fiche d'opération de mesurage et compte rendu d'anomalie posés sur un tableau de distribution tertiaire",
        visual: {
          title: "Le chantier BE se documente",
          subtitle: "Titre, fiche d'opération, compte rendu et coordination.",
          items: [
            "Titre à jour",
            "Fiche d'opération",
            "Compte rendu signé",
            "Coordination préalable",
          ],
          tone: "slate",
          imagePath: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-coordination.svg",
        },
      }),
    ],
  },
};
