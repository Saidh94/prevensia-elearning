export type QuizQuestion = {
  question: string;
  choices: string[];
  answer: number[];
  multiple?: boolean;
  explanation?: string;
  timeLimit?: number;
  contextLabel?: string;
  imagePath?: string;
  imageAlt?: string;
};

export const quizContent: Record<string, QuizQuestion[]> = {
  b1b2brbc: [
    {
      question:
        "Qui délivre formellement l'habilitation B1, B2, BR ou BC après vérification de la formation, du poste et des risques ?",
      choices: [
        "Le formateur",
        "L'employeur",
        "Le fabricant du matériel",
        "Le chef d'équipe seul",
      ],
      answer: [1],
      explanation:
        "La formation prépare à l'habilitation, mais c'est l'employeur qui la délivre.",
      timeLimit: 40,
    },
    {
      question: "Le symbole B1 correspond principalement à :",
      choices: [
        "Un exécutant électricien en basse tension",
        "Un chargé de consignation",
        "Un intervenant BR",
        "Un personnel non électricien",
      ],
      answer: [0],
      explanation:
        "Le B1 désigne l'exécutant électricien travaillant dans un cadre préparé et encadré.",
      timeLimit: 40,
    },
    {
      question: "Le chargé de travaux en basse tension est généralement titulaire du symbole :",
      choices: ["B1", "B2", "BR", "BC"],
      answer: [1],
      explanation:
        "Le B2 prépare, dirige et surveille l'exécution des travaux électriques.",
      timeLimit: 35,
    },
    {
      question: "Le symbole BR couvre surtout :",
      choices: [
        "Les travaux de chantier encadrés par une équipe complète",
        "Les interventions générales en basse tension dans un cadre défini",
        "La consignation uniquement",
        "Les opérations d'ordre non électrique",
      ],
      answer: [1],
      explanation:
        "Le BR concerne les interventions générales comme l'entretien, le dépannage ou certaines remises en état autorisées.",
      timeLimit: 45,
      contextLabel:
        "Le tableau des symboles permet de distinguer clairement BR, BC, B1 et B2 sans mélanger les fonctions.",
      imagePath: "/elearning/references/symboles-autres-travaux-electriques.jpg",
      imageAlt:
        "Tableau des symboles d'habilitation utilisés pour les autres opérations d'ordre électrique",
    },
    {
      question: "Le chargé de consignation est désigné par le symbole :",
      choices: ["B1V", "BR", "BC", "B2V"],
      answer: [2],
      explanation:
        "Le BC garantit le processus de consignation et de mise en sécurité de l'installation.",
      timeLimit: 35,
      contextLabel:
        "Le tableau des symboles aide à distinguer le rôle de consignation des rôles d'exécution, de travaux et d'intervention.",
      imagePath: "/elearning/references/symboles-autres-travaux-electriques.jpg",
      imageAlt:
        "Tableau des symboles d'habilitation utilisés pour les autres opérations d'ordre électrique",
    },
    {
      question:
        "Parmi les étapes suivantes, lesquelles appartiennent à une logique de consignation ?",
      choices: [
        "Séparation",
        "Condamnation",
        "Identification",
        "Vérification d'absence de tension",
      ],
      answer: [0, 1, 2, 3],
      multiple: true,
      explanation:
        "La consignation repose sur une chaîne d'étapes inséparables pour garantir la mise en sécurité.",
      timeLimit: 70,
      contextLabel:
        "Le visuel rappelle que la consignation fiable ne se réduit jamais à une simple coupure apparente.",
      imagePath: "/elearning/references/consignation-vat.jpg",
      imageAlt:
        "Illustration de consignation avec condamnation, balisage et vérification d'absence de tension",
    },
    {
      question:
        "La vérification d'absence de tension peut-elle être présumée si le disjoncteur a été coupé ?",
      choices: [
        "Oui, si l'installation est récente",
        "Oui, si le repère paraît cohérent",
        "Non, elle doit être réelle et méthodique",
        "Oui, en présence d'un B2",
      ],
      answer: [2],
      explanation:
        "La VAT ne se suppose jamais. Elle doit être effectuée selon une méthode fiable et au bon point de l'installation.",
      timeLimit: 40,
      contextLabel:
        "Le visuel rappelle qu'un organe ouvert ne suffit jamais : l'état électrique doit être vérifié méthodiquement.",
      imagePath: "/elearning/references/consignation-vat.jpg",
      imageAlt:
        "Illustration de vérification d'absence de tension sur une installation consignée",
    },
    {
      question:
        "Quel rôle correspond le mieux à la préparation et à la direction d'un travail électrique en basse tension ?",
      choices: [
        "Exécutant B1",
        "Chargé de travaux B2",
        "Intervenant BR",
        "Observateur H0B0",
      ],
      answer: [1],
      explanation:
        "Le B2 organise et pilote la sécurité du travail confié à l'équipe.",
      timeLimit: 45,
    },
    {
      question:
        "Parmi ces situations, laquelle impose de stopper immédiatement l'opération ?",
      choices: [
        "Un repère matériel incohérent avec le dossier",
        "Une odeur anormale ou un échauffement",
        "Un doute sur la consignation",
        "Toutes ces réponses",
      ],
      answer: [3],
      explanation:
        "Tout doute sérieux sur l'état électrique, l'identification ou l'intégrité du matériel impose l'arrêt.",
      timeLimit: 35,
    },
    {
      question:
        "Que faut-il faire si une intervention BR devient plus complexe que prévu et ressemble à des travaux structurés ?",
      choices: [
        "Continuer pour gagner du temps",
        "Requalifier l'opération avant de poursuivre",
        "Demander à un collègue de surveiller et continuer",
        "Ignorer la différence si la basse tension est conservée",
      ],
      answer: [1],
      explanation:
        "Une intervention ne doit pas glisser vers des travaux sans clarification du cadre et des rôles.",
      timeLimit: 45,
    },
    {
      question:
        "Quelle affirmation sur les EPI et EPC est correcte ?",
      choices: [
        "Les EPI autorisent une opération interdite si l'on reste prudent",
        "Les EPC sont à privilégier et les EPI viennent en complément",
        "Le choix dépend seulement de l'habitude de l'opérateur",
        "Les EPI remplacent la préparation",
      ],
      answer: [1],
      explanation:
        "Les protections collectives priment. Les EPI ne changent jamais les limites d'habilitation ni la nécessité de préparer l'opération.",
      timeLimit: 45,
    },
    {
      question:
        "Lequel de ces raisonnements est le plus professionnel dans un parcours B1 / B2 / BR / BC ?",
      choices: [
        "Improviser une solution si l'on pense avoir compris la panne",
        "Identifier, préparer, agir dans son rôle et s'arrêter au moindre doute",
        "Toujours réenclencher une première fois pour voir",
        "Considérer que l'urgence d'exploitation justifie l'écart",
      ],
      answer: [1],
      explanation:
        "La sécurité repose sur la méthode, la clarté des rôles et l'arrêt en cas d'incertitude.",
      timeLimit: 45,
    },
    {
      question:
        "Parmi ces propositions, lesquelles traduisent de bons réflexes en basse tension ?",
      choices: [
        "Vérifier l'identification du matériel",
        "Clarifier les rôles dans l'équipe",
        "S'assurer que l'environnement est compatible avec l'opération",
        "S'appuyer uniquement sur l'expérience sans documentation",
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "L'expérience ne remplace ni l'identification, ni l'organisation, ni le support documentaire.",
      timeLimit: 65,
    },
    {
      question:
        "En cas d'accident électrique, quel principe reste prioritaire ?",
      choices: [
        "Toucher vite la victime pour l'éloigner",
        "Supprimer ou faire supprimer le danger avant de porter secours",
        "Ouvrir le coffret pour comprendre la cause",
        "Terminer la consignation puis prévenir",
      ],
      answer: [1],
      explanation:
        "Le premier objectif est d'éviter le suraccident en supprimant le danger électrique.",
      timeLimit: 40,
    },
    {
      question:
        "Avant de lancer un travail B2 avec plusieurs intervenants, quel point doit être clarifié en priorité ?",
      choices: [
        "Le rôle de chacun, la zone de travail et les conditions d'arrêt",
        "Le numéro de téléphone personnel de tous les intervenants",
        "Le choix libre des outils par chaque opérateur",
        "Le fait de terminer avant l'horaire prévu",
      ],
      answer: [0],
      explanation:
        "Le B2 doit d'abord clarifier les rôles, le périmètre de travail, les protections et les conditions de suspension.",
      timeLimit: 45,
    },
    {
      question:
        "Quelles situations imposent une relecture documentaire avant toute poursuite ?",
      choices: [
        "Un schéma qui ne correspond pas au repérage local",
        "Une modification ancienne non tracée",
        "Une interface chantier avec un autre intervenant",
        "Un local bien éclairé sans autre anomalie",
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "La documentation, le repérage et la coordination doivent être confirmées avant toute reprise d'action.",
      timeLimit: 70,
    },
    {
      question:
        "Lequel de ces cas reste normalement dans le cadre BR ?",
      choices: [
        "Une extension complète d'armoire avec ajout de nouveaux circuits",
        "Une intervention générale de dépannage identifiée et méthodique dans le cadre prévu",
        "Des travaux de chantier avec plusieurs corps d'état",
        "Une consignation générale de site sans désignation BC",
      ],
      answer: [1],
      explanation:
        "Le BR couvre les interventions générales en basse tension dans un cadre défini, pas les travaux structurés ni la consignation générale.",
      timeLimit: 45,
    },
    {
      question:
        "Pourquoi la coordination de chantier est-elle un sujet de sécurité électrique à part entière ?",
      choices: [
        "Parce qu'une remise en service voisine ou une interface mal signée peut remettre en cause le cadre de sécurité",
        "Parce qu'elle remplace la consignation",
        "Parce qu'elle n'a d'utilité que pour la paperasse",
        "Parce qu'elle dispense de vérifier l'identification du matériel",
      ],
      answer: [0],
      explanation:
        "Une coordination insuffisante peut exposer l'équipe à une reprise d'énergie, à une erreur de zone ou à une mauvaise compréhension de l'état réel de l'installation.",
      timeLimit: 45,
    },
    {
      question:
        "Dans une logique B1 / B2 / BR / BC, quel élément transforme souvent un chantier techniquement simple en situation à risque élevé ?",
      choices: [
        "Une interface mal coordonnée avec un autre intervenant ou une remise en énergie voisine",
        "Le fait de disposer d'un outillage neuf",
        "L'existence d'un planning détaillé",
        "La présence d'un seul circuit terminal clairement identifié",
      ],
      answer: [0],
      explanation:
        "Une interface chantier ou exploitation mal coordonnée peut remettre en cause la zone de sécurité, la consignation ou l'état réel de l'installation.",
      timeLimit: 45,
    },
    {
      question:
        "Quelles affirmations sont justes à propos du voisinage et des pièces nues sous tension ?",
      choices: [
        "Le danger peut exister avant le contact direct",
        "Un capot manquant peut changer le cadre de l'opération",
        "Le voisinage se traite uniquement en haute tension",
        "La préparation doit intégrer la présence de PNST",
      ],
      answer: [0, 1, 3],
      multiple: true,
      explanation:
        "Le voisinage et la présence de PNST modifient concrètement la façon de préparer et de protéger l'opération, y compris en basse tension.",
      timeLimit: 70,
      contextLabel:
        "Le schéma de zones aide à comprendre que le danger commence avant le contact et change le cadre de l'opération.",
      imagePath: "/elearning/references/zones-conducteur-nu-bt.jpg",
      imageAlt:
        "Schéma des zones autour d'un conducteur nu et des limites de voisinage en basse tension",
    },
    {
      question:
        "Pour un chargé de consignation BC, quelle erreur est particulièrement critique ?",
      choices: [
        "Omettre l'identification précise du circuit concerné",
        "Demander un compte rendu écrit de fin d'opération",
        "Refuser une remise en service prématurée",
        "Exiger une vérification avant poursuite",
      ],
      answer: [0],
      explanation:
        "Une consignation mal identifiée crée une illusion de sécurité et expose directement l'équipe à un risque majeur.",
      timeLimit: 45,
    },
    {
      question:
        "Quelles situations doivent conduire à suspendre une remise en service ?",
      choices: [
        "Un doute sur le retrait des moyens temporaires",
        "Une présence possible d'un intervenant dans la zone",
        "Un compte rendu de fin d'opération non bouclé",
        "Une envie de gagner du temps sur le planning",
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "La remise en énergie ne peut se faire qu'après vérification complète de la fin d'opération et de l'absence d'exposition résiduelle.",
      timeLimit: 75,
    },
    {
      question:
        "Dans quel cas un BR doit-il clairement requalifier son intervention ?",
      choices: [
        "Lorsqu'il doit modifier la structure du câblage ou traiter une situation non documentée",
        "Lorsqu'il suit une méthode de dépannage identifiée dans son cadre habituel",
        "Lorsqu'il vérifie d'abord le contexte avant d'agir",
        "Lorsqu'il suspend son action à cause d'une anomalie visible",
      ],
      answer: [0],
      explanation:
        "Dès qu'une intervention générale glisse vers des travaux structurés, une modification de schéma ou un dépannage non maîtrisé, elle doit être requalifiée.",
      timeLimit: 45,
    },
    {
      question:
        "Parmi ces propositions, lesquelles traduisent une préparation solide d'un travail B2 ?",
      choices: [
        "Clarifier les rôles et conditions d'arrêt",
        "Vérifier l'environnement et les interfaces chantier",
        "S'assurer de la cohérence documentaire",
        "Compter sur l'expérience des intervenants pour combler les manques",
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "Une préparation sérieuse repose sur la clarté des rôles, la cohérence documentaire et la maîtrise de l'environnement, pas sur l'habitude seule.",
      timeLimit: 75,
    },
    {
      question:
        "Que traduit le mieux un comportement professionnel après une opération difficile mais sans accident ?",
      choices: [
        "Ne rien signaler puisque personne ne s'est blessé",
        "Tracer les écarts et faire corriger les points de fragilité pour la suite",
        "Laisser l'équipe suivante gérer si le problème revient",
        "Conserver l'information uniquement à l'oral",
      ],
      answer: [1],
      explanation:
        "Le retour d'expérience et la trace écrite permettent de corriger durablement les causes d'écarts avant qu'elles ne deviennent accidentogènes.",
      timeLimit: 40,
    },
    {
      question:
        "En vous aidant du schéma de consignation, quelle étape reste indispensable avant d'autoriser une équipe à travailler hors tension ?",
      choices: [
        "Une vérification d'absence de tension réelle et méthodique",
        "Un simple voyant éteint sur la façade",
        "La mémoire du dernier intervenant",
        "Le fait que le disjoncteur paraisse en position ouverte",
      ],
      answer: [0],
      explanation:
        "La chaîne de consignation ne vaut vraiment que si l'absence de tension est vérifiée au bon point, avec la bonne méthode.",
      timeLimit: 50,
      contextLabel:
        "Le schéma rappelle qu'une installation ne doit jamais être considérée comme sûre sur une simple impression de coupure.",
      imagePath:
        "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-consignation.svg",
      imageAlt:
        "Schéma de consignation en basse tension avec séparation, condamnation, identification et vérification d'absence de tension",
    },
    {
      question:
        "Dans une scène de coordination comme celle illustrée, quel signal impose de suspendre l'opération avant toute poursuite ?",
      choices: [
        "Une interface mal clarifiée avec un autre intervenant ou une remise en énergie voisine possible",
        "Le fait que l'équipe ait déjà travaillé ensemble",
        "La présence d'un planning affiché dans le local",
        "Un outillage récent et complet",
      ],
      answer: [0],
      explanation:
        "Une interface chantier ou exploitation mal maîtrisée peut remettre en cause la zone de sécurité et l'état réel de l'installation.",
      timeLimit: 50,
      contextLabel:
        "Le risque ne vient pas seulement du geste électrique, mais aussi de la coordination entre les acteurs et des remises en énergie voisines.",
      imagePath:
        "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-coordination.svg",
      imageAlt:
        "Illustration de coordination de chantier et d'interface de sécurité en environnement électrique",
    },
    {
      question:
        "Avant une remise en énergie, quels contrôles restent indispensables ?",
      choices: [
        "Vérifier le retrait des moyens temporaires et la fin réelle de l'opération",
        "S'assurer qu'aucune personne n'est encore exposée",
        "Clore le compte rendu de fin d'opération",
        "Relancer sans vérification si la production attend",
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "La remise en service est une phase sensible qui suppose une vérification complète de la fin d'opération et de l'absence d'exposition résiduelle.",
      timeLimit: 80,
      contextLabel:
        "La remise en service n'est jamais un simple geste de fin de chantier. Elle doit être préparée et confirmée.",
      imagePath:
        "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-remise-energie.svg",
      imageAlt:
        "Illustration de la phase de remise en énergie et des contrôles de fin d'opération",
    },
    {
      question:
        "À la lecture du schéma des rôles, quelle affirmation est correcte ?",
      choices: [
        "Le B2 et le BC sont interchangeables si l'équipe est expérimentée",
        "Le B1 exécute, le B2 dirige, le BR intervient dans son cadre, le BC consigne",
        "Le BR peut toujours remplacer un B2 sur un chantier de travaux",
        "Le BC n'a besoin ni d'identification ni de traçabilité",
      ],
      answer: [1],
      explanation:
        "Chaque symbole répond à une fonction propre. La norme borne les rôles pour éviter les glissements de mission.",
      timeLimit: 50,
      contextLabel:
        "Une habilitation ne vaut pas pour toutes les fonctions. La clarté des rôles fait partie de la prévention.",
      imagePath:
        "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-roles.svg",
      imageAlt:
        "Illustration des rôles B1 B2 BR BC en basse tension",
    },
    {
      question:
        "Dans quel cas un capot manquant ou un bornier accessible doit-il faire requalifier l'opération ?",
      choices: [
        "Lorsqu'il crée une présence de pièce nue sous tension ou un voisinage non maîtrisé",
        "Uniquement si l'installation est en haute tension",
        "Jamais, si l'équipe porte des gants",
        "Seulement si l'intervention dure plus de 30 minutes",
      ],
      answer: [0],
      explanation:
        "La présence de PNST ou d'un voisinage non maîtrisé change concrètement la scène de risque et peut sortir l'opération de son cadre initial.",
      timeLimit: 45,
    },
    {
      question:
        "Parmi ces affirmations, lesquelles traduisent une culture BC sérieuse ?",
      choices: [
        "Identifier sans ambiguïté le circuit concerné",
        "Tracer les étapes de mise en sécurité",
        "Vérifier l'absence de tension au bon point",
        "Supposer que l'étiquetage suffit sans confirmation terrain",
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "La consignation fiable repose sur l'identification, la traçabilité et la vérification réelle, pas sur une confiance aveugle dans le repérage seul.",
      timeLimit: 75,
    },
  ],
    bsbe: [
    {
      question:
        "Qui délivre formellement l’habilitation BS ou BE Manœuvre après formation, vérification des acquis et analyse du poste ?",
      choices: [
        "Le formateur",
        "L’employeur",
        "Le fabricant du matériel",
        "Le salarié lui-même après réussite au quiz",
      ],
      answer: [1],
      explanation:
        "La formation prépare à l’habilitation, mais seul l’employeur délivre le titre en fonction du poste réel, des tâches confiées et des risques.",
      timeLimit: 40,
      contextLabel:
        "La chaîne formation, évaluation, validation puis habilitation doit rester claire.",
      imagePath: "/elearning/bsbe/bsbe-cadre.svg",
      imageAlt:
        "Cadre BS et BE Manœuvre avec formation, évaluation, validation et habilitation par l’employeur",
    },
    {
      question: "Le symbole BS correspond principalement à :",
      choices: [
        "Des travaux électriques complexes en basse tension",
        "Des interventions élémentaires en basse tension",
        "La consignation générale d’une installation",
        "Des opérations d’ordre non électrique uniquement",
      ],
      answer: [1],
      explanation:
        "Le BS couvre des interventions élémentaires en basse tension, dans un cadre strictement limité, identifié et préparé.",
      timeLimit: 40,
    },
    {
      question: "Le symbole BE Manœuvre correspond principalement à :",
      choices: [
        "Des manœuvres d’exploitation sur des organes identifiés",
        "Une recherche de panne sur tout équipement basse tension",
        "Une modification de câblage",
        "Une consignation complète d’installation",
      ],
      answer: [0],
      explanation:
        "Le BE Manœuvre permet des manœuvres d’exploitation prévues, sur organes identifiés, dans le cadre des consignes du site.",
      timeLimit: 40,
    },
    {
      question:
        "Quelle affirmation décrit correctement la différence entre BS et BE Manœuvre ?",
      choices: [
        "BS concerne des interventions élémentaires ; BE Manœuvre concerne des manœuvres d’exploitation",
        "BS autorise la consignation ; BE Manœuvre autorise le dépannage",
        "BS et BE Manœuvre autorisent les mêmes gestes sans limite particulière",
        "BE Manœuvre est équivalent à BR",
      ],
      answer: [0],
      explanation:
        "Le BS et le BE Manœuvre ont des périmètres distincts. Aucun des deux ne vaut BR, B1, B2 ou BC.",
      timeLimit: 45,
    },
    {
      question:
        "Parmi les opérations suivantes, lesquelles peuvent relever du BS si elles sont prévues, identifiées, hors tension et encadrées par procédure ?",
      choices: [
        "Remplacement simple d’un appareillage prévu à l’identique",
        "Raccordement élémentaire d’un matériel sur circuit identifié",
        "Recherche de panne sur un circuit inconnu",
        "Modification du câblage interne d’une armoire",
      ],
      answer: [0, 1],
      multiple: true,
      explanation:
        "Le BS reste limité aux interventions élémentaires. La recherche de panne et la modification de câblage sortent du cadre.",
      timeLimit: 70,
      contextLabel:
        "Le visuel rappelle que le BS reste un cadre simple, hors tension, repéré et documenté.",
      imagePath: "/elearning/bsbe/bsbe-operations.svg",
      imageAlt:
        "Illustration des opérations élémentaires BS et des limites à respecter",
    },
    {
      question:
        "Le symbole BS autorise-t-il des interventions élémentaires sur n’importe quel matériel basse tension, sans restriction de procédure ni d’identification préalable ?",
      choices: [
        "Oui, tout matériel basse tension est accessible au BS sans condition",
        "Non, le BS reste limité à un périmètre précis : matériel identifié, procédure établie, hors tension",
        "Oui, à condition que le matériel soit neuf",
        "Oui, si un collègue habilité B1 est présent",
      ],
      answer: [1],
      explanation:
        "Le BS ne donne pas un accès général à tout matériel BT. Il est conditionné à un matériel précisément identifié, une procédure définie par l’entreprise et une intervention hors tension. Toute dérive vers du diagnostic ou du câblage sort du cadre BS.",
      timeLimit: 45,
    },
    {
      question:
        "Un remplacement simple commence correctement, mais le nouvel équipement ne fonctionne pas. Quel est le bon réflexe BS ?",
      choices: [
        "Rechercher la panne pour terminer l’intervention",
        "Modifier le câblage pour adapter l’équipement",
        "S’arrêter et faire requalifier la situation",
        "Réarmer plusieurs fois pour tester",
      ],
      answer: [2],
      explanation:
        "Le glissement d’un remplacement simple vers une recherche de panne fait sortir l’opération du cadre BS.",
      timeLimit: 45,
      contextLabel:
        "La limite du BS se joue souvent au moment où l’opération simple devient un diagnostic.",
      imagePath: "/elearning/bsbe/bsbe-limites.svg",
      imageAlt:
        "Illustration des limites BS et BE Manœuvre et de la nécessité de s’arrêter en cas de dérive",
    },
    {
      question:
        "Avant une manœuvre BE Manœuvre, quels éléments doivent être vérifiés ?",
      choices: [
        "L’organe est clairement identifié",
        "La procédure ou consigne est connue",
        "L’environnement ne présente pas d’anomalie visible",
        "L’opérateur peut ouvrir le coffret pour comprendre la cause",
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "Une manœuvre d’exploitation suppose un organe identifié, une consigne claire et un contexte normal. L’ouverture pour diagnostic sort du cadre.",
      timeLimit: 75,
    },
    {
      question:
        "Dans quel cas un réarmement BE Manœuvre ne doit-il pas être tenté ?",
      choices: [
        "Présence d’une odeur de chaud ou d’un bruit anormal",
        "Organe identifié et procédure claire",
        "Environnement sain et conforme",
        "Action explicitement prévue dans la consigne du site",
      ],
      answer: [0],
      explanation:
        "Une odeur anormale, un échauffement, un bruit suspect ou un déclenchement répété impose l’arrêt et le signalement.",
      timeLimit: 40,
      imagePath: "/elearning/bsbe/bsbe-urgence.svg",
      imageAlt:
        "Conduite à tenir en cas d’anomalie ou d’incident électrique",
    },
    {
      question:
        "Que faut-il faire après plusieurs déclenchements successifs du même organe ?",
      choices: [
        "Continuer à réarmer jusqu’au retour à la normale",
        "Arrêter les tentatives et signaler l’anomalie",
        "Ouvrir l’équipement pour chercher la cause",
        "Neutraliser provisoirement la protection",
      ],
      answer: [1],
      explanation:
        "Le réarmement répété est un signal d’alerte. Il ne doit jamais devenir un dépannage improvisé.",
      timeLimit: 40,
    },
    {
      question:
        "Parmi les actions suivantes, lesquelles sortent clairement du cadre BS / BE Manœuvre ?",
      choices: [
        "Recherche de panne sur cause inconnue",
        "Ouverture d’une enveloppe pour diagnostic",
        "Modification d’un câblage",
        "Manœuvre d’un organe identifié selon procédure",
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "BS et BE Manœuvre ne couvrent ni le dépannage, ni la recherche de panne, ni la modification de câblage.",
      timeLimit: 75,
      imagePath: "/elearning/bsbe/bsbe-limites.svg",
      imageAlt:
        "Limites des habilitations BS et BE Manœuvre",
    },
    {
      question:
        "Que signifie PNST dans le contexte du risque électrique ?",
      choices: [
        "Pièce nue sous tension",
        "Procédure normative de sécurité technique",
        "Protection neutre sous tableau",
        "Point neutre sans tension",
      ],
      answer: [0],
      explanation:
        "Une PNST est une pièce nue sous tension. Sa présence impose de prendre au sérieux le voisinage électrique.",
      timeLimit: 35,
      imagePath: "/elearning/bsbe/bsbe-risque.svg",
      imageAlt:
        "Illustration des risques liés aux pièces nues sous tension et au voisinage",
    },
    {
      question:
        "Pourquoi le voisinage d’une pièce nue sous tension est-il dangereux ?",
      choices: [
        "Le danger peut exister avant le contact direct",
        "Un geste, un outil ou un déplacement peut réduire la distance de sécurité",
        "Le voisinage autorise automatiquement une intervention",
        "Le voisinage ne concerne jamais la basse tension",
      ],
      answer: [0, 1],
      multiple: true,
      explanation:
        "Le voisinage expose au risque avant même le contact direct. Il impose le respect strict des limites d’approche et des protections.",
      timeLimit: 70,
      imagePath: "/elearning/bsbe/bsbe-risque.svg",
      imageAlt:
        "Zones de risque et voisinage autour d’une pièce nue sous tension",
    },
    {
      question:
        "Le contact direct correspond au fait de :",
      choices: [
        "Toucher une partie active normalement sous tension",
        "Toucher une masse métallique devenue dangereuse après défaut",
        "Lire une étiquette sur un tableau fermé",
        "Être dans un local technique sans anomalie visible",
      ],
      answer: [0],
      explanation:
        "Le contact direct concerne une partie active normalement sous tension.",
      timeLimit: 40,
    },
    {
      question:
        "Le contact indirect correspond au fait de :",
      choices: [
        "Toucher un conducteur nu",
        "Toucher une masse métallique devenue dangereuse après défaut d’isolement",
        "Observer un coffret fermé",
        "Manœuvrer un organe clairement repéré",
      ],
      answer: [1],
      explanation:
        "Le contact indirect concerne une masse normalement non dangereuse, devenue accidentellement sous tension.",
      timeLimit: 40,
    },
    {
      question:
        "Quels facteurs aggravent les effets du courant sur le corps humain ?",
      choices: [
        "L’intensité du courant",
        "La durée de passage",
        "Le trajet dans le corps",
        "L’humidité ou la peau mouillée",
      ],
      answer: [0, 1, 2, 3],
      multiple: true,
      explanation:
        "L’intensité, la durée, le trajet et l’état du milieu influencent fortement la gravité d’une électrisation.",
      timeLimit: 80,
      imagePath: "/elearning/bsbe/bsbe-effets.svg",
      imageAlt:
        "Effets du courant électrique sur le corps humain",
    },
    {
      question:
        "Autour de quel ordre de grandeur le lâcher peut-il devenir difficile en courant traversant le corps ?",
      choices: [
        "Autour de quelques microampères",
        "Autour de 10 mA",
        "Autour de 10 A",
        "Uniquement au-delà de 1 000 V",
      ],
      answer: [1],
      explanation:
        "Autour de 10 mA, des contractions musculaires peuvent rendre le lâcher difficile. Ce repère sert à comprendre le danger, pas à chercher une limite acceptable.",
      timeLimit: 45,
      imagePath: "/elearning/bsbe/bsbe-effets.svg",
      imageAlt:
        "Effets du courant selon l’intensité et la durée d’exposition",
    },
    {
      question:
        "Pourquoi l’humidité augmente-t-elle le risque électrique ?",
      choices: [
        "Elle peut diminuer la résistance du corps",
        "Elle favorise le passage du courant",
        "Elle rend le risque nul",
        "Elle remplace les protections collectives",
      ],
      answer: [0, 1],
      multiple: true,
      explanation:
        "Une peau humide, un sol conducteur ou un environnement mouillé facilitent le passage du courant.",
      timeLimit: 60,
    },
    {
      question:
        "Que permettent de comprendre les indices IP2X ou IPXXB ?",
      choices: [
        "Le niveau de protection contre l’accès aux parties dangereuses",
        "La durée de validité de l’habilitation",
        "L’autorisation automatique de dépanner",
        "La puissance exacte du circuit",
      ],
      answer: [0],
      explanation:
        "IP2X ou IPXXB aident à apprécier si l’enveloppe protège réellement contre l’accès involontaire aux parties dangereuses.",
      timeLimit: 45,
    },
    {
      question:
        "Quel comportement est adapté devant un coffret fissuré, un capotage absent ou une enveloppe dégradée ?",
      choices: [
        "Suspendre l’action et faire analyser la situation",
        "Continuer avec prudence si c’est de la basse tension",
        "Retirer le capot restant pour mieux voir",
        "Compter uniquement sur les EPI",
      ],
      answer: [0],
      explanation:
        "Une enveloppe dégradée change le niveau de risque. L’action doit être suspendue.",
      timeLimit: 45,
    },
    {
      question:
        "Quelle affirmation est correcte concernant les EPI et les EPC ?",
      choices: [
        "Les protections collectives sont prioritaires",
        "Les EPI rendent licite une opération interdite",
        "Les EPC ne concernent pas la basse tension",
        "Les EPI remplacent la procédure",
      ],
      answer: [0],
      explanation:
        "La prévention privilégie les protections collectives. Les EPI viennent en complément et n’élargissent jamais le domaine d’autorisation.",
      timeLimit: 40,
    },
    {
      question:
        "Parmi les éléments suivants, lesquels relèvent plutôt d’une protection collective ?",
      choices: [
        "Capotage",
        "Balisage",
        "Écran ou obstacle",
        "Gants isolants",
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "Capotage, balisage, écrans et obstacles sont des protections collectives. Les gants relèvent des EPI.",
      timeLimit: 70,
    },
    {
      question:
        "Quel support aide le mieux à maintenir une opération BS / BE dans son cadre autorisé ?",
      choices: [
        "Une procédure ou fiche réflexe à jour",
        "Une consigne orale ancienne",
        "Un souvenir d’intervention similaire",
        "L’habitude de l’opérateur uniquement",
      ],
      answer: [0],
      explanation:
        "Un support écrit, cohérent avec le terrain, limite les erreurs de repérage et les glissements de mission.",
      timeLimit: 40,
    },
    {
      question:
        "En cas de divergence entre la procédure et le repérage visible sur le tableau, que faut-il faire ?",
      choices: [
        "Suspendre l’action et faire confirmer le bon matériel",
        "Choisir l’organe qui paraît le plus logique",
        "Agir puis vérifier après",
        "Réarmer pour observer le résultat",
      ],
      answer: [0],
      explanation:
        "Une incohérence de repérage est un signal d’arrêt. L’identification doit être confirmée avant toute action.",
      timeLimit: 45,
    },
    {
      question:
        "Dans une logique BS, la vérification d’absence de tension doit être comprise comme :",
      choices: [
        "Une étape de sécurité indispensable lorsqu’une opération hors tension est prévue",
        "Une formalité inutile si le disjoncteur est baissé",
        "Un simple regard dans le coffret",
        "Une autorisation de modifier le câblage",
      ],
      answer: [0],
      explanation:
        "Le BS doit comprendre la logique de mise hors tension et de vérification, même s’il n’est pas chargé de consignation générale.",
      timeLimit: 45,
      imagePath: "/elearning/bsbe/bsbe-vat.svg",
      imageAlt:
        "Vérification d’absence de tension et mise en sécurité",
    },
    {
      question:
        "Le titulaire BS ou BE Manœuvre est-il chargé de consignation BC ?",
      choices: [
        "Oui, automatiquement",
        "Oui, s’il a de l’expérience",
        "Non, sauf habilitation et désignation adaptée",
        "Oui, en basse tension uniquement",
      ],
      answer: [2],
      explanation:
        "BS et BE Manœuvre ne valent pas BC. La consignation générale relève d’un rôle spécifique.",
      timeLimit: 40,
    },
    {
      question:
        "En cas d’électrisation d’une victime, quel est le premier objectif ?",
      choices: [
        "Toucher immédiatement la victime pour l’éloigner",
        "Supprimer ou faire supprimer le danger sans se mettre en risque",
        "Ouvrir le coffret pour comprendre",
        "Réarmer pour identifier la cause",
      ],
      answer: [1],
      explanation:
        "On ne touche jamais directement une victime tant que le danger électrique persiste. La priorité est d’éviter le suraccident.",
      timeLimit: 45,
      imagePath: "/elearning/bsbe/bsbe-urgence.svg",
      imageAlt:
        "Conduite à tenir en cas d’électrisation",
    },
    {
      question:
        "En cas de fumée ou d’odeur de chaud dans un coffret pendant une manœuvre, le bon réflexe est :",
      choices: [
        "Ouvrir le coffret pour voir",
        "Stopper, se protéger et alerter",
        "Réarmer une dernière fois",
        "Retirer le capot pour ventiler",
      ],
      answer: [1],
      explanation:
        "Une anomalie électrique impose l’arrêt, la mise à distance et l’alerte. Le geste ne doit pas devenir un dépannage.",
      timeLimit: 40,
      imagePath: "/elearning/bsbe/bsbe-urgence.svg",
      imageAlt:
        "Réaction attendue en cas d’incident électrique",
    },
    {
      question:
        "Quelles situations imposent de suspendre l’opération avant toute poursuite ?",
      choices: [
        "Matériel non identifié",
        "Procédure absente ou incohérente",
        "Voisinage non maîtrisé",
        "Organe identifié, procédure claire et contexte sain",
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "Un doute sur le matériel, la procédure ou le voisinage impose l’arrêt et la clarification.",
      timeLimit: 75,
      imagePath: "/elearning/bsbe/bsbe-limites.svg",
      imageAlt:
        "Signaux de sortie du cadre BS et BE Manœuvre",
    },
    {
      question:
        "Quel est le meilleur raisonnement professionnel en BS / BE Manœuvre ?",
      choices: [
        "Agir vite puis prévenir après",
        "Identifier, vérifier, agir si autorisé, sinon stopper et signaler",
        "Toujours tenter une première action pour voir",
        "Se fier uniquement à son expérience",
      ],
      answer: [1],
      explanation:
        "Le bon réflexe est de décider correctement avant le geste : identifier, vérifier, agir si le cadre est respecté, sinon s’arrêter.",
      timeLimit: 45,
      imagePath: "/elearning/bsbe/bsbe-cadre.svg",
      imageAlt:
        "Synthèse du cadre de décision BS et BE Manœuvre",
    },
    {
      question:
        "Pourquoi un titulaire BS / BE Manœuvre doit-il s'entraîner sur des cas de terrain, et pas seulement mémoriser des définitions ?",
      choices: [
        "Pour vérifier la capacité à distinguer ce qui est autorisé de ce qui doit être refusé",
        "Pour remplacer l’évaluation pratique de l’employeur",
        "Pour autoriser automatiquement l’habilitation",
        "Pour éviter de parler des limites du symbole",
      ],
      answer: [0],
      explanation:
        "Sur le terrain, la sécurité repose sur la capacité à prendre la bonne décision face à une situation concrète, tout en rappelant que l’employeur reste seul décisionnaire de l’habilitation.",
      timeLimit: 45,
    },
    {
      question:
        "À la fin du parcours BS / BE Manœuvre, quels réflexes doivent rester prioritaires ?",
      choices: [
        "Identifier",
        "Vérifier",
        "Agir uniquement si autorisé",
        "Stopper et transmettre en cas de doute",
      ],
      answer: [0, 1, 2, 3],
      multiple: true,
      explanation:
        "Ces quatre réflexes résument la logique opérationnelle du parcours BS / BE Manœuvre.",
      timeLimit: 75,
      imagePath: "/elearning/bsbe/bsbe-cadre.svg",
      imageAlt:
        "Réflexes opérationnels BS et BE Manœuvre",
    },

    // === EPI ÉLECTRIQUES ===
    {
      question:
        "Un technicien doit intervenir en voisinage d'une installation basse tension (230 V). Quelle classe de gants isolants doit-il porter au minimum ?",
      choices: [
        "Classe 00 (500 V max)",
        "Classe 0 (1 000 V max)",
        "Classe 2 (17 000 V max)",
        "Classe 4 (36 000 V max)",
      ],
      answer: [1],
      explanation:
        "La classe 0 supporte jusqu'à 1 000 V et couvre largement le domaine BT (230/400 V). La classe 00 est limitée à 500 V et ne couvre pas toute la BT. Les classes supérieures sont réservées aux domaines HTA et HTB.",
      timeLimit: 45,
      imagePath: "/elearning/bsbe/bsbe-epi.svg",
      imageAlt: "Tableau des classes de gants isolants (EN 60903)",
    },
    {
      question:
        "Parmi les EPI électriques suivants, lequel protège spécifiquement contre l'énergie thermique dégagée lors d'un arc électrique ?",
      choices: [
        "Les gants isolants classe 0",
        "Le casque isolant seul",
        "La combinaison anti-arc",
        "Les chaussures isolantes",
      ],
      answer: [2],
      explanation:
        "La combinaison anti-arc est conçue pour absorber et dissiper l'énergie thermique produite lors d'un arc électrique. Les autres EPI (gants, casque, chaussures) offrent une isolation électrique mais pas une protection thermique contre l'arc.",
      timeLimit: 40,
      imagePath: "/elearning/bsbe/bsbe-epi.svg",
      imageAlt: "EPI contre le risque électrique",
    },
    {
      question:
        "Un intervenant doit travailler en voisinage d'une installation HTA à 15 000 V. Quelle classe de gants isolants est requise au minimum ?",
      choices: [
        "Classe 0 (1 000 V max)",
        "Classe 1 (7 500 V max)",
        "Classe 2 (17 000 V max)",
        "Classe 3 (26 500 V max)",
      ],
      answer: [2],
      explanation:
        "Pour une tension de 15 000 V (HTA), la classe 2 est requise au minimum car elle supporte jusqu'à 17 000 V. La classe 1 (7 500 V max) serait insuffisante pour ce niveau de tension.",
      timeLimit: 45,
      imagePath: "/elearning/bsbe/bsbe-epi.svg",
      imageAlt: "Classes des gants isolants selon le domaine de tension",
    },
    {
      question:
        "Quelle vérification doit être effectuée sur les gants isolants avant chaque utilisation ?",
      choices: [
        "Vérifier la date de fabrication uniquement",
        "Effectuer une inspection visuelle et un gonflage pour détecter tout défaut",
        "Les peser pour contrôler leur masse",
        "Aucune vérification préalable n'est nécessaire si le délai de 6 mois n'est pas dépassé",
      ],
      answer: [1],
      explanation:
        "Avant chaque usage, les gants isolants doivent faire l'objet d'une inspection visuelle (absence de perforation, coupure, détérioration) et d'un gonflage (enrouler le gant et observer s'il reste gonflé). Un gant endommagé doit être retiré immédiatement du service.",
      timeLimit: 50,
      imagePath: "/elearning/bsbe/bsbe-epi.svg",
      imageAlt: "Vérification des EPI électriques avant usage",
    },

    // === CLASSES DES MATÉRIELS ===
    {
      question:
        "Un appareil électrique porte un symbole représentant un carré inscrit dans un autre carré (□□). À quelle classe appartient-il ?",
      choices: [
        "Classe I (isolation + mise à la terre)",
        "Classe II (double isolation)",
        "Classe III (TBTS)",
        "Classe 0 (isolation simple)",
      ],
      answer: [1],
      explanation:
        "Le symbole du carré dans le carré (□□) identifie les matériels de classe II, qui possèdent une double isolation ou une isolation renforcée. Ces appareils ne nécessitent pas de mise à la terre.",
      timeLimit: 40,
      imagePath: "/elearning/bsbe/bsbe-classes-materiels.svg",
      imageAlt: "Classes des matériels électriques — symbole classe II",
    },
    {
      question:
        "Quelle classe de matériel électrique est interdite en milieu professionnel en France ?",
      choices: [
        "Classe I",
        "Classe II",
        "Classe III",
        "Classe 0",
      ],
      answer: [3],
      explanation:
        "Les matériels de classe 0 ne possèdent qu'une isolation principale sans protection supplémentaire (ni mise à la terre, ni double isolation). Leur utilisation est interdite en milieu professionnel en France car ils offrent un niveau de sécurité insuffisant en cas de défaut d'isolement.",
      timeLimit: 40,
      imagePath: "/elearning/bsbe/bsbe-classes-materiels.svg",
      imageAlt: "Classe 0 — matériel interdit en milieu professionnel",
    },
    {
      question:
        "Un matériel de classe I est raccordé à une prise 3 broches. Quel élément de protection agit en cas de défaut d'isolement vers la masse ?",
      choices: [
        "Le fusible de l'appareil",
        "Le disjoncteur magnétothermique de la ligne",
        "Le disjoncteur différentiel relié à la prise de terre",
        "L'isolation principale du câble",
      ],
      answer: [2],
      explanation:
        "En classe I, la mise à la terre crée un chemin de retour du courant de défaut. Ce courant de fuite est détecté par le disjoncteur différentiel (ou interrupteur différentiel), qui coupe le circuit en quelques millisecondes, avant qu'une électrisation ne soit dangereuse.",
      timeLimit: 50,
      imagePath: "/elearning/bsbe/bsbe-classes-materiels.svg",
      imageAlt: "Classe I — protection par mise à la terre et différentiel",
    },

    // === CODES IP ===
    {
      question:
        "Dans l'indice de protection IP 34C, que signifie le premier chiffre 3 ?",
      choices: [
        "Protection contre les projections d'eau de toutes directions",
        "Protection contre les corps solides de diamètre supérieur à 2,5 mm",
        "Protection contre l'immersion temporaire",
        "Protection contre les corps solides de diamètre supérieur à 50 mm",
      ],
      answer: [1],
      explanation:
        "Dans un indice IP, le premier chiffre concerne la protection contre les corps solides. Le chiffre 3 signifie que l'équipement est protégé contre les corps solides de diamètre supérieur à 2,5 mm (outils, fils). Le chiffre relatif à l'eau est le second (ici 4).",
      timeLimit: 45,
      imagePath: "/elearning/bsbe/bsbe-ip.svg",
      imageAlt: "Structure de l'indice de protection IP",
    },
    {
      question:
        "Dans l'indice IP 34C, que signifie la lettre C ?",
      choices: [
        "Protection contre les projections d'eau côté",
        "Résistance au courant continu",
        "Protection des personnes contre l'accès aux parties dangereuses avec un outil de diamètre ≥ 2,5 mm",
        "Certification CENELEC",
      ],
      answer: [2],
      explanation:
        "La lettre additionnelle d'un indice IP précise la protection des personnes contre l'accès aux parties dangereuses. La lettre C correspond à un outil de diamètre supérieur à 2,5 mm (exemple : tournevis). Les lettres A, B, C, D correspondent respectivement à : main (50 mm), doigt (12,5 mm), outil (2,5 mm), fil (1 mm).",
      timeLimit: 50,
      imagePath: "/elearning/bsbe/bsbe-ip.svg",
      imageAlt: "Lettre additionnelle de l'indice IP",
    },
    {
      question:
        "Quel indice IP minimum est requis pour une armoire électrique installée en extérieur et exposée à des projections d'eau de toutes directions ?",
      choices: [
        "IP 20",
        "IP 33",
        "IP 44",
        "IP 68",
      ],
      answer: [2],
      explanation:
        "Le second chiffre 4 signifie 'protection contre les projections d'eau de toutes directions'. Le premier chiffre 4 garantit la protection contre les corps solides ≥ 1 mm. L'IP 44 est le minimum standard pour une armoire en extérieur exposée aux intempéries. L'IP 33 ne couvre que les aspersions jusqu'à 60°.",
      timeLimit: 50,
      imagePath: "/elearning/bsbe/bsbe-ip.svg",
      imageAlt: "Indice IP requis selon les conditions d'installation",
    },
  ],
  h0b0: [
    {
      question:
        "Dans le cadre de la prévention du risque électrique, qui délivre formellement l’habilitation au salarié après s’être assuré de la formation, de l’aptitude et de l’adéquation au poste ?",
      choices: [
        "Le formateur",
        "L’organisme de formation",
        "L’employeur",
        "Le chef d’équipe",
      ],
      answer: [2],
      explanation:
        "L’habilitation est délivrée par l’employeur. La formation prépare à l’habilitation mais ne vaut jamais habilitation à elle seule.",
      timeLimit: 45,
    },
    {
      question:
        "La formation préparatoire à l’habilitation électrique suffit-elle, à elle seule, pour considérer un salarié comme habilité ?",
      choices: [
        "Oui, si le test final est réussi",
        "Oui, si le salarié a de l’expérience",
        "Non, la décision d’habilitation relève de l’employeur",
        "Non, sauf si le formateur le mentionne dans son support",
      ],
      answer: [2],
      explanation:
        "La formation seule ne suffit pas. L’habilitation est une décision de l’employeur.",
      timeLimit: 40,
    },
    {
      question:
        "Parmi les éléments suivants, lesquels font partie des vérifications à effectuer avant délivrance d’une habilitation électrique ?",
      choices: [
        "La formation théorique et pratique adaptée",
        "L’assimilation de la formation",
        "L’aptitude médicale en lien avec le risque",
        "L’adéquation entre le poste et le symbole envisagé",
        "Le fait d’avoir déjà travaillé sur un chantier voisin",
      ],
      answer: [0, 1, 2, 3],
      multiple: true,
      explanation:
        "L’expérience seule ne remplace pas les vérifications nécessaires avant habilitation.",
      timeLimit: 75,
    },
    {
      question:
        "Dans un symbole d’habilitation, que signifie le premier caractère ?",
      choices: [
        "Le niveau hiérarchique du salarié",
        "Le domaine de tension",
        "La durée de validité du titre",
        "Le type d’entreprise",
      ],
      answer: [1],
      explanation:
        "Le premier caractère précise le domaine de tension concerné.",
      timeLimit: 35,
      contextLabel:
        "Le tableau des symboles aide à distinguer clairement les opérations d'ordre non électrique selon la zone et le voisinage.",
      imagePath: "/elearning/references/symboles-travaux-non-electriques.jpg",
      imageAlt:
        "Tableau des symboles d'habilitation utilisés pour les travaux d'ordre non électrique",
    },
    {
      question: "Dans un symbole d’habilitation, la lettre B correspond à :",
      choices: [
        "Balisage renforcé",
        "Basse tension",
        "Borne principale",
        "Blocage",
      ],
      answer: [1],
      explanation: "B = basse tension ; H = haute tension.",
      timeLimit: 30,
    },
    {
      question: "Dans un symbole d’habilitation, la lettre H correspond à :",
      choices: [
        "Hors tension",
        "Haute tension",
        "Habilitation renforcée",
        "Habilitation temporaire",
      ],
      answer: [1],
      explanation: "H = haute tension.",
      timeLimit: 30,
    },
    {
      question:
        "Dans un symbole d’habilitation, le caractère 0 correspond à :",
      choices: [
        "Une opération d’ordre non électrique",
        "Une consignation",
        "Une intervention élémentaire",
        "Un travail sous tension",
      ],
      answer: [0],
      explanation:
        "Le caractère 0 vise les opérations d’ordre non électrique.",
      timeLimit: 35,
    },
    {
      question:
        "La lettre V, dans un symbole d’habilitation, signifie que l’opération se déroule :",
      choices: [
        "Sous vérification",
        "Au voisinage",
        "Sous vide",
        "En version provisoire",
      ],
      answer: [1],
      explanation: "V indique la notion de voisinage.",
      timeLimit: 30,
    },
    {
      question:
        "La différence essentielle entre H0 et H0V tient principalement :",
      choices: [
        "Au niveau d’ancienneté du salarié",
        "À la notion de voisinage de pièces nues sous tension",
        "Au fait que H0 autorise des travaux électriques simples",
        "À l’obligation d’utiliser des outils isolés en H0V",
      ],
      answer: [1],
      explanation:
        "H0V ajoute la notion d’opération d’ordre non électrique au voisinage.",
      timeLimit: 45,
      contextLabel:
        "Le schéma des locaux et emplacements d'accès permet de visualiser comment le voisinage change le cadre d'autorisation.",
      imagePath: "/elearning/references/distances-locaux-acces.jpg",
      imageAlt:
        "Schéma des distances limites et des zones définies dans les locaux et emplacements d'accès",
    },
    {
      question:
        "Dans une zone de voisinage renforcé HT, que traduit le fait d’être habilité H0V ?",
      choices: [
        "Le droit d’intervenir sur l’installation haute tension si l’action paraît simple",
        "La possibilité d’effectuer une opération d’ordre non électrique au voisinage HT dans un cadre strictement organisé",
        "Une habilitation équivalente à H1V pour les travaux",
        "Une simple ancienneté supplémentaire sur le chantier",
      ],
      answer: [1],
      explanation:
        "Le H0V ne permet pas de travaux électriques. Il cadre des opérations d’ordre non électrique au voisinage HT avec des exigences renforcées.",
      timeLimit: 50,
      contextLabel:
        "Le voisinage renforce les exigences d'organisation, de distance, de balisage et de surveillance sans donner de droit d'action sur l'installation.",
      imagePath: "/elearning/references/distances-locaux-acces.jpg",
      imageAlt:
        "Schéma des zones et distances à respecter dans un local ou emplacement d'accès électrique",
    },
    {
      question:
        "Pour une opération d’ordre non électrique en zone 2 HT sous conduite d’un chargé de chantier H0V, quelles mesures sont attendues ?",
      choices: [
        "Baliser la zone de travail",
        "Vérifier que les protections prévues sont en place",
        "Organiser et contrôler la surveillance du personnel",
        "Laisser chacun apprécier seul les distances si le chantier est court",
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "En H0V, l’organisation du chantier doit empêcher tout franchissement dangereux des limites de voisinage.",
      timeLimit: 80,
      contextLabel:
        "Le schéma de zones permet de relier les notions de voisinage renforcé, de balisage et de surveillance à une scène concrète de chantier.",
      imagePath: "/elearning/references/distances-locaux-acces.jpg",
      imageAlt:
        "Schéma des distances limites et zones définies dans les locaux et emplacements d'accès",
    },
    {
      question:
        "Quel document formalise le plus classiquement l’accès d’un chantier H0 ou H0V concourant à l’exploitation ou à la maintenance dans une zone encadrée ?",
      choices: [
        "Une autorisation de travail",
        "Un simple accord oral entre collègues",
        "Une facture de maintenance",
        "Le quiz de fin de module",
      ],
      answer: [0],
      explanation:
        "L’autorisation de travail matérialise le cadre d’accès, la zone et les conditions de sécurité retenues.",
      timeLimit: 45,
      contextLabel:
        "Le support documentaire reste un repère de sécurité concret pour cadrer l'accès, la zone et les limites du chantier.",
      imagePath: "/elearning/references/document-chantier.jpg",
      imageAlt:
        "Exemple d'autorisation ou de document de chantier utilisé pour formaliser l'accès à une zone de travail",
    },
    {
      question:
        "Au cours d’une opération d’ordre non électrique, est-il permis de retirer un capot, un écran ou une protection ayant pour objet de mettre hors de portée des pièces nues sous tension ?",
      choices: [
        "Oui, si l’on ne touche à rien",
        "Oui, si un collègue regarde à distance",
        "Non, c’est interdit dans une opération d’ordre non électrique",
        "Oui, uniquement en basse tension",
      ],
      answer: [2],
      explanation:
        "Lors d’une opération d’ordre non électrique, les protections contre les contacts directs ne doivent pas être supprimées.",
      timeLimit: 45,
    },
    {
      question:
        "Sous la responsabilité d’un chargé de chantier H0V en zone de voisinage renforcé HT, le personnel exécutant appelé à travailler dans cette zone doit normalement :",
      choices: [
        "Être lui aussi habilité H0V",
        "Être non habilité mais totalement autonome",
        "Pouvoir remplacer l’habilitation par le port d’EPI",
        "Choisir seul sa limite d’approche",
      ],
      answer: [0],
      explanation:
        "La cohérence de l’organisation impose une habilitation adaptée à la zone et une surveillance compatible avec le voisinage HT.",
      timeLimit: 50,
    },
    {
      question:
        "À la fin d’un travail d’ordre non électrique en environnement électrique, quel comportement reste conforme à la logique normative ?",
      choices: [
        "Revenir dans la zone plus tard si l’on a oublié un outil",
        "Rendre compte de son travail et respecter l’interdiction de tout nouvel accès non autorisé à la zone",
        "Laisser le balisage en place sans rien signaler",
        "Considérer que la fin matérielle du travail suffit, sans compte rendu",
      ],
      answer: [1],
      explanation:
        "Le compte rendu et l’interdiction de retour non autorisé participent directement à la maîtrise de la zone de travail.",
      timeLimit: 50,
    },
    {
      question:
        "Pour un personnel B0 / H0 / H0V, quelle affirmation est correcte ?",
      choices: [
        "Il peut réaliser des travaux d’ordre électrique simples",
        "Il peut ouvrir une armoire électrique pour vérifier visuellement",
        "Il réalise uniquement des opérations d’ordre non électrique dans les limites de son habilitation",
        "Il peut remplacer un appareillage défectueux à l’identique",
      ],
      answer: [2],
      explanation:
        "B0 / H0 / H0V ne permet pas de réaliser des opérations d’ordre électrique.",
      timeLimit: 50,
    },
    {
      question:
        "La basse tension correspond classiquement, en courant alternatif, à quel domaine ?",
      choices: [
        "Supérieure à 50 V et inférieure ou égale à 1 000 V",
        "Strictement égale à 230 V",
        "Supérieure à 1 000 V",
        "Inférieure à 25 V uniquement",
      ],
      answer: [0],
      explanation:
        "En courant alternatif, la basse tension va au-delà de 50 V et jusqu’à 1 000 V.",
      timeLimit: 50,
    },
    {
      question:
        "En courant alternatif, la haute tension débute classiquement au-delà de :",
      choices: ["25 V", "50 V", "400 V", "1 000 V"],
      answer: [3],
      explanation:
        "Le repère usuel est le dépassement de 1 000 V en courant alternatif.",
      timeLimit: 40,
    },
    {
      question:
        "Dans les installations modernes, dans quels contextes peut-on rencontrer du courant continu ?",
      choices: [
        "Batteries et chargeurs",
        "Panneaux photovoltaïques",
        "Onduleurs et équipements secourus",
        "Uniquement les prises domestiques classiques",
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "Le courant continu est présent dans plusieurs installations modernes, pas uniquement dans des contextes spécialisés rares.",
      timeLimit: 75,
    },
    {
      question:
        "Pourquoi la présence de courant continu doit-elle être prise au sérieux dans une formation B0 / H0 / H0V ?",
      choices: [
        "Parce qu’un arc peut être plus stable",
        "Parce qu’une coupure peut être plus délicate selon l’installation",
        "Parce qu’il n’existe aucun danger en courant continu",
        "Parce que le risque peut persister dans certains équipements",
      ],
      answer: [0, 1, 3],
      multiple: true,
      explanation:
        "Le courant continu peut présenter des risques spécifiques, notamment en présence de batteries ou de systèmes photovoltaïques.",
      timeLimit: 80,
    },
    {
      question:
        "Pourquoi le voisinage de pièces nues sous tension constitue-t-il une situation dangereuse même sans contact direct volontaire ?",
      choices: [
        "Parce qu’un amorçage ou un arc peut se produire selon les conditions",
        "Parce qu’une erreur de geste, un outil ou un déplacement peut réduire la distance de sécurité",
        "Parce que toute installation au voisinage est forcément hors tension",
        "Parce que le voisinage annule automatiquement toutes les protections collectives",
      ],
      answer: [0, 1],
      multiple: true,
      explanation:
        "Le voisinage augmente le risque d’atteinte des distances de sécurité et d’exposition à un arc.",
      timeLimit: 75,
    },
    {
      question:
        "Concernant les équipements de protection, quelle hiérarchie de prévention est correcte ?",
      choices: [
        "Les EPI sont prioritaires sur les EPC",
        "Les EPC sont à privilégier avant les EPI",
        "Le choix dépend seulement de la préférence de l’opérateur",
        "Les EPI suffisent à autoriser une opération interdite",
      ],
      answer: [1],
      explanation:
        "Les protections collectives priment sur les protections individuelles.",
      timeLimit: 40,
    },
    {
      question:
        "Parmi les propositions suivantes, lesquelles relèvent d’une protection collective ?",
      choices: [
        "Obstacle",
        "Écran",
        "Capotage",
        "Balisage et signalisation",
        "Gants de protection",
      ],
      answer: [0, 1, 2, 3],
      multiple: true,
      explanation:
        "Les gants relèvent des EPI, pas des EPC.",
      timeLimit: 70,
    },
    {
      question:
        "Un EPI, même adapté, permet-il à lui seul de transformer une opération interdite en opération autorisée pour un salarié B0 / H0 / H0V ?",
      choices: [
        "Oui, si le salarié a déjà suivi une formation",
        "Oui, si l’intervention dure moins de 5 minutes",
        "Non, l’EPI ne modifie jamais le domaine d’autorisation de l’habilitation",
        "Non, sauf en présence d’un collègue habilité BR",
      ],
      answer: [2],
      explanation:
        "L’EPI protège ; il n’élargit pas les limites d’habilitation.",
      timeLimit: 45,
    },
    {
      question:
        "Une pancarte de danger électrique, un balisage temporaire ou une condamnation d’accès doivent être considérés comme :",
      choices: [
        "De simples indications qu’on peut adapter selon la situation",
        "Des dispositifs de sécurité à respecter strictement",
        "Des repères utiles uniquement pour les électriciens",
        "Des éléments qu’on peut déplacer pour faciliter l’accès",
      ],
      answer: [1],
      explanation:
        "La signalisation et le balisage ont une valeur opérationnelle immédiate et ne doivent pas être contournés.",
      timeLimit: 50,
    },
    {
      question:
        "Dans certaines entreprises, quels documents peuvent compléter le cadre général de prévention du risque électrique ?",
      choices: [
        "Consignes de sécurité",
        "Plans de prévention",
        "Permis d’accès ou procédures internes",
        "Carnets de prescriptions selon l’organisation",
        "Uniquement les plans architecturaux du bâtiment",
      ],
      answer: [0, 1, 2, 3],
      multiple: true,
      explanation:
        "La prévention repose aussi sur les documents et consignes applicables sur site.",
      timeLimit: 80,
    },
    {
      question:
        "Vous arrivez devant une armoire électrique ouverte ou un coffret présentant des parties accessibles. Quelle conduite est adaptée à un personnel B0 / H0 / H0V ?",
      choices: [
        "Refermer immédiatement l’armoire si cela paraît simple",
        "S’éloigner, empêcher l’approche si possible sans se mettre en danger, et alerter",
        "Regarder de plus près pour identifier le défaut",
        "Continuer l’activité prévue sans rien signaler",
      ],
      answer: [1],
      explanation:
        "Un titulaire B0 / H0 / H0V ne doit pas manipuler une armoire ouverte ou des parties potentiellement sous tension.",
      timeLimit: 55,
    },
    {
      question:
        "Le balisage d’une zone de travail électrique ou d’un environnement électrique a notamment pour fonction de :",
      choices: [
        "Matérialiser des limites de sécurité",
        "Informer sur le danger et restreindre l’accès",
        "Remplacer toute vigilance individuelle",
        "Autoriser le passage si l’on est pressé",
      ],
      answer: [0, 1],
      multiple: true,
      explanation:
        "Le balisage informe et matérialise des limites ; il ne remplace ni la vigilance ni les règles d’accès.",
      timeLimit: 65,
    },
    {
      question:
        "Parmi les situations suivantes, lesquelles doivent conduire un salarié B0 / H0 / H0V à redoubler de vigilance quant à l’environnement de travail ?",
      choices: [
        "Sol humide ou environnement conducteur",
        "Coffret provisoire de chantier",
        "Local technique avec armoires et câbles",
        "Installation moderne avec batteries ou photovoltaïque",
        "Bureau administratif sans équipement électrique apparent",
      ],
      answer: [0, 1, 2, 3],
      multiple: true,
      explanation:
        "Le risque dépend aussi du contexte de travail et de la nature des installations présentes.",
      timeLimit: 85,
    },
    {
      question:
        "En environnement électrique, pourquoi l’usage d’une échelle métallique, le transport d’un objet long ou une manutention peuvent-ils devenir dangereux ?",
      choices: [
        "Parce qu’ils peuvent rapprocher involontairement d’une zone sous tension",
        "Parce qu’ils peuvent conduire à franchir une limite de sécurité",
        "Parce qu’ils suppriment automatiquement le balisage",
        "Parce qu’une action banale peut devenir dangereuse au mauvais endroit",
      ],
      answer: [0, 1, 3],
      multiple: true,
      explanation:
        "Un déplacement, un outil ou une manutention peuvent créer un risque sans intervention électrique directe.",
      timeLimit: 85,
    },
    {
      question:
        "Le contact direct correspond à une situation dans laquelle une personne est en contact avec :",
      choices: [
        "Une masse métallique devenue accidentellement sous tension",
        "Une partie active normalement sous tension",
        "Le sol humide à proximité d’un tableau",
        "Un outil isolé",
      ],
      answer: [1],
      explanation:
        "Le contact direct concerne les parties actives normalement sous tension.",
      timeLimit: 40,
    },
    {
      question:
        "Le contact indirect correspond à une situation dans laquelle une personne touche :",
      choices: [
        "Une partie active nue",
        "Une masse devenue accidentellement sous tension",
        "Un câble correctement isolé",
        "Un balisage de sécurité",
      ],
      answer: [1],
      explanation:
        "Le contact indirect concerne une masse mise accidentellement sous tension.",
      timeLimit: 40,
    },
    {
      question:
        "Quels effets du courant électrique sur le corps humain doivent être retenus dans une formation B0 / H0 / H0V ?",
      choices: [
        "Tétanisation",
        "Brûlures",
        "Troubles cardiaques ou fibrillation selon l’intensité et les conditions",
        "Amélioration temporaire des réflexes",
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "Le courant électrique peut provoquer des atteintes graves, pas une amélioration des réflexes.",
      timeLimit: 75,
    },
    {
      question:
        "En environnement humide, le risque électrique augmente notamment parce que :",
      choices: [
        "La résistance du corps peut diminuer",
        "Les conditions favorisent davantage le passage du courant",
        "L’humidité supprime l’effet d’arc électrique",
        "Le risque est identique à celui d’un milieu sec",
      ],
      answer: [0, 1],
      multiple: true,
      explanation:
        "L’humidité augmente le risque ; elle ne le supprime pas.",
      timeLimit: 60,
    },
    {
      question:
        "Un câble détérioré, un isolant endommagé, une odeur anormale ou un échauffement inhabituel doivent conduire à :",
      choices: [
        "Poursuivre si l’installation fonctionne encore",
        "Signaler immédiatement l’anomalie et interrompre l’action si nécessaire",
        "Réparer soi-même si cela semble simple",
        "Éloigner les personnes si besoin et alerter",
      ],
      answer: [1, 3],
      multiple: true,
      explanation:
        "Le personnel B0 / H0 / H0V doit signaler et se protéger, pas réparer.",
      timeLimit: 70,
    },
    {
      question:
        "Parmi les actions suivantes, lesquelles sont incompatibles avec une habilitation B0 / H0 / H0V ?",
      choices: [
        "Remplacer un appareillage électrique",
        "Réarmer un disjoncteur ou agir sur un tableau sans autorisation adaptée",
        "Nettoyer un local en respectant les limites de sécurité et les consignes",
        "Ouvrir une enveloppe pour vérifier visuellement l’intérieur",
      ],
      answer: [0, 1, 3],
      multiple: true,
      explanation:
        "Le nettoyage dans le cadre autorisé n’est pas en soi incompatible ; les autres actions le sont.",
      timeLimit: 85,
    },
    {
      question:
        "En cas de doute sur la nature du risque, sur la zone dans laquelle vous vous trouvez ou sur l’autorisation réelle de l’opération demandée, le bon réflexe est :",
      choices: [
        "Essayer d’avancer avec prudence",
        "S’arrêter et demander clarification ou assistance",
        "Se fier uniquement à son habitude",
        "Faire l’opération si elle paraît simple",
      ],
      answer: [1],
      explanation:
        "Le doute impose l’arrêt et la demande d’avis, pas l’improvisation.",
      timeLimit: 45,
    },
    {
      question:
        "En présence d’une personne électrisée, quel doit être le premier objectif ?",
      choices: [
        "La toucher rapidement pour l’éloigner",
        "Supprimer ou faire supprimer le danger électrique avant tout contact",
        "La relever immédiatement",
        "La déplacer sans attendre",
      ],
      answer: [1],
      explanation:
        "La priorité est d’éviter le suraccident en supprimant le danger électrique.",
      timeLimit: 55,
    },
    {
      question:
        "Face à un départ de feu d’origine électrique, quelles réponses sont adaptées dans le cadre des consignes et sans se mettre en danger ?",
      choices: [
        "Appliquer les consignes du site",
        "Utiliser un moyen d’extinction adapté si la situation le permet",
        "Utiliser de l’eau sur une installation sous tension",
        "Alerter rapidement",
      ],
      answer: [0, 1, 3],
      multiple: true,
      explanation:
        "L’eau sur une installation sous tension est à proscrire.",
      timeLimit: 80,
    },
    {
      question:
        "Concernant le titre d’habilitation et le maintien des compétences, quelles propositions sont correctes ?",
      choices: [
        "Le titre doit pouvoir être présenté pendant le travail",
        "Une habilitation est définitive une fois obtenue",
        "Les habilitations doivent être revues périodiquement",
        "Un recyclage est généralement recommandé tous les 3 ans, voire plus souvent si nécessaire",
      ],
      answer: [0, 2, 3],
      multiple: true,
      explanation:
        "Le maintien des compétences et la revue périodique sont indispensables ; une habilitation n’est jamais acquise définitivement.",
      timeLimit: 80,
    },
    {
      question:
        "Concernant l’aptitude médicale préalable à l’habilitation, quelles affirmations sont justes ?",
      choices: [
        "L’employeur doit s’assurer de l’aptitude médicale du salarié lorsque cela est requis",
        "L’avis médical peut prendre en compte certains troubles incompatibles avec le risque électrique",
        "La réussite au quiz remplace l’aptitude médicale",
        "La formation remplace l’avis médical",
      ],
      answer: [0, 1],
      multiple: true,
      explanation:
        "La réussite à l’évaluation théorique ne remplace jamais l’aptitude médicale requise.",
      timeLimit: 75,
    },
    {
      question:
        "Pour un salarié intérimaire amené à réaliser des opérations nécessitant une habilitation, quelles affirmations sont correctes ?",
      choices: [
        "Il est habilité par le formateur",
        "L’entreprise utilisatrice doit vérifier l’adéquation de la formation préparatoire avec les opérations prévues",
        "L’entreprise qui l’accueille l’habilite pour les opérations concernées",
        "L’agence d’intérim remplace systématiquement l’employeur pour l’habilitation",
      ],
      answer: [1, 2],
      multiple: true,
      explanation:
        "L’intérimaire est habilité par l’entreprise qui l’accueille pour les opérations concernées, pas par le formateur.",
      timeLimit: 80,
    },
    {
      question:
        "Dans une situation de chantier ou d’exploitation, quels signes doivent conduire un personnel B0 / H0 / H0V à considérer qu’il existe un risque électrique à ne pas banaliser ?",
      choices: [
        "Armoire ou coffret ouvert",
        "Câble dégradé ou gaine abîmée",
        "Odeur anormale, échauffement ou fumée",
        "Absence ou incohérence du balisage dans une zone à risque",
        "Installation en marche apparemment normale, donc forcément sans danger",
      ],
      answer: [0, 1, 2, 3],
      multiple: true,
      explanation:
        "Une installation en fonctionnement n’est jamais automatiquement sans danger.",
      timeLimit: 90,
    },
    {
      question:
        "Vous êtes habilité B0 / H0 / H0V et l’on vous demande d’effectuer un nettoyage dans un environnement électrique. Quelles conditions doivent être réunies pour rester dans le cadre de votre habilitation ?",
      choices: [
        "L’opération reste d’ordre non électrique",
        "Les limites de sécurité et le balisage sont respectés",
        "Aucune ouverture d’enveloppe ou intervention électrique n’est réalisée",
        "Le salarié peut agir sur les protections si cela facilite le nettoyage",
        "Les consignes du site sont respectées",
      ],
      answer: [0, 1, 2, 4],
      multiple: true,
      explanation:
        "Le nettoyage B0 / H0 / H0V reste une opération non électrique, sans action sur les protections ou équipements électriques.",
      timeLimit: 90,
    },
    {
      question:
        "Parmi les affirmations suivantes, lesquelles traduisent les bons réflexes attendus d’un personnel B0 / H0 / H0V ?",
      choices: [
        "Je n’interviens pas sur l’installation électrique",
        "Je respecte les zones, obstacles, écrans, balisages et consignes",
        "En cas d’anomalie, je m’éloigne si nécessaire et j’alerte",
        "Je peux improviser si l’opération me paraît simple et rapide",
        "Je garde à l’esprit qu’une installation en fonctionnement n’est pas forcément sans danger",
      ],
      answer: [0, 1, 2, 4],
      multiple: true,
      explanation:
        "L’improvisation est incompatible avec la prévention du risque électrique.",
      timeLimit: 90,
    },

    // === CLASSES MATÉRIELS (H0B0) ===
    {
      question:
        "Vous observez un appareil électrique portable portant le symbole d’un carré dans un carré (□□). Que cela signifie-t-il pour votre sécurité ?",
      choices: [
        "L’appareil est de classe I et doit impérativement être branché sur une prise avec terre",
        "L’appareil est de classe II (double isolation) et ne nécessite pas de mise à la terre",
        "L’appareil est interdit à l’utilisation en milieu professionnel",
        "L’appareil est alimenté en très basse tension (TBTS)",
      ],
      answer: [1],
      explanation:
        "Le symbole du double carré (□□) identifie les matériels de classe II, dotés d’une double isolation ou d’une isolation renforcée. Ces appareils n’ont pas besoin de mise à la terre car leur conception évite tout contact dangereux avec des parties conductrices en cas de défaut.",
      timeLimit: 45,
      imagePath: "/elearning/bsbe/bsbe-classes-materiels.svg",
      imageAlt: "Classes des matériels électriques — symbole classe II",
    },
    {
      question:
        "En milieu professionnel, un matériel électrique de classe 0 est-il autorisé à l’utilisation ?",
      choices: [
        "Oui, s’il est correctement branché",
        "Oui, uniquement en milieu sec",
        "Non, il est interdit en milieu professionnel en France",
        "Oui, s’il est surveillé en permanence",
      ],
      answer: [2],
      explanation:
        "Les matériels de classe 0 ne possèdent qu’une isolation principale. En cas de défaut d’isolement, l’utilisateur peut être électrisé sans protection. Leur usage est interdit en milieu professionnel en France. La réglementation impose au minimum la classe I (avec mise à la terre) ou la classe II (double isolation).",
      timeLimit: 40,
      imagePath: "/elearning/bsbe/bsbe-classes-materiels.svg",
      imageAlt: "Classe 0 — matériel interdit en milieu professionnel",
    },

    // === CODES IP (H0B0) ===
    {
      question:
        "Vous devez choisir une armoire électrique pour une installation en extérieur, exposée à la pluie et aux projections d’eau. Quel est l’indice IP minimum requis pour le second chiffre ?",
      choices: [
        "Second chiffre 1 (gouttes d’eau verticales)",
        "Second chiffre 3 (aspersion jusqu’à 60°)",
        "Second chiffre 4 (projections de toutes directions)",
        "Second chiffre 0 (aucune protection)",
      ],
      answer: [2],
      explanation:
        "En extérieur exposé aux intempéries, le second chiffre de l’indice IP doit être au minimum 4, garantissant la protection contre les projections d’eau de toutes directions. Un second chiffre de 3 (aspersion 60°) ne suffit pas pour une installation pleinement exposée à la pluie.",
      timeLimit: 45,
      imagePath: "/elearning/bsbe/bsbe-ip.svg",
      imageAlt: "Indice IP — 2e chiffre et protection contre les liquides",
    },
  ],
  "securite-incendie": [
    {
      question:
        "Un départ de feu résulte classiquement de la rencontre de quels éléments ?",
      choices: [
        "Un combustible, un comburant et une énergie d'activation",
        "Un extincteur, une alarme et un point de rassemblement",
        "Une évacuation, un dérangement et un désenfumage",
        "Un SSI, un sprinkler et un RIA",
      ],
      answer: [0],
      explanation:
        "La prévention incendie agit d'abord sur les sources d'ignition, les combustibles et les conditions de propagation.",
      timeLimit: 45,
      contextLabel:
        "Le triangle du feu aide à comprendre les trois conditions de base nécessaires à la combustion.",
      imagePath: "/images/triangle-du-feu.jpg",
      imageAlt:
        "Schéma pédagogique du triangle du feu avec énergie, comburant et combustible",
    },
    {
      question:
        "Face à une fumée anormale ou à un début d'incendie, quel est le premier réflexe professionnel ?",
      choices: [
        "Aller seul vérifier plus près pour être certain",
        "Alerter rapidement selon la procédure du site",
        "Attendre qu'un collègue confirme la situation",
        "Couper soi-même tous les équipements sans consigne",
      ],
      answer: [1],
      explanation:
        "L'alerte doit partir vite. La reconnaissance ne doit pas se faire au prix d'une exposition inutile.",
      timeLimit: 40,
      contextLabel:
        "Le déclenchement de l'alarme et l'alerte utile font partie des premières minutes décisives.",
      imagePath: "/images/alarme-incendie.jpg",
      imageAlt:
        "Déclencheur d'alarme incendie ou dispositif d'alerte sur un site",
    },
    {
      question:
        "Lors d'une évacuation, quelles actions font partie des bons réflexes attendus ?",
      choices: [
        "Rejoindre le point de rassemblement",
        "Revenir dans le bâtiment pour récupérer un objet",
        "Aider une personne en difficulté sans se mettre en danger",
        "Attendre les consignes au point de rassemblement",
      ],
      answer: [0, 2, 3],
      multiple: true,
      explanation:
        "Une évacuation réussie repose sur le calme, la discipline, l'aide adaptée et l'interdiction de retour intempestif.",
      timeLimit: 70,
    },
    {
      question:
        "Dans quel cas l'emploi d'un moyen de première intervention peut-il rester envisageable ?",
      choices: [
        "Le feu est encore limité et une issue de repli est conservée",
        "Le local est fortement enfumé",
        "Le moyen est adapté et l'alerte a déjà été donnée",
        "La situation devient rapidement incontrôlable",
      ],
      answer: [0, 2],
      multiple: true,
      explanation:
        "On n'intervient que dans un cadre maîtrisé, sans s'exposer et sans retarder l'alerte ou l'évacuation.",
      timeLimit: 75,
      contextLabel:
        "L'emploi d'un extincteur suppose une gestuelle connue, une distance adaptée et surtout une situation encore maîtrisable.",
      imagePath: "/images/comment-utiliser-un-extincteur-1.webp",
      imageAlt:
        "Étapes pédagogiques d'utilisation d'un extincteur avec goupille, percussion, test et attaque de la base des flammes",
    },
    {
      question:
        "Sur le repère pédagogique présenté pour un extincteur à eau pulvérisée avec additif, quelle distance d'attaque est illustrée ?",
      choices: [
        "Moins de 50 cm",
        "Environ 1,50 m à 2,50 m",
        "Plus de 5 m",
        "La distance n'a aucune importance",
      ],
      answer: [1],
      explanation:
        "Le visuel rappelle un ordre de grandeur pédagogique de distance d'attaque, sans remplacer les consignes du site ni la formation pratique.",
      timeLimit: 50,
      contextLabel:
        "Le visuel présenté rappelle aussi les classes de feu visées et les précautions d'emploi à proximité d'une origine électrique.",
      imagePath:
        "/images/distance-de-securite-extincteur-a-eau-pulverisee.webp",
      imageAlt:
        "Schéma de distance de sécurité pour extincteur à eau pulvérisée avec additif",
    },
    {
      question:
        "Sur le schéma de l'extincteur présenté, quel organe correspond à la goupille de sécurité ?",
      choices: [
        "Le repère 1",
        "Le repère 2",
        "Le repère 6",
        "Le repère 8",
      ],
      answer: [1],
      explanation:
        "Le repère 2 du visuel correspond à la goupille de sécurité, élément de base à identifier avant toute utilisation encadrée de l'appareil.",
      timeLimit: 45,
      contextLabel:
        "Le visuel présente les organes d'un extincteur à pression permanente et aide à repérer les éléments usuels d'utilisation.",
      imagePath: "/images/extincteur-à-pression-permanente.jpg",
      imageAlt:
        "Schéma d'un extincteur à pression permanente avec repères des différents organes",
    },
    {
      question:
        "Quelles affirmations sont justes à propos d’un robinet d’incendie armé (RIA) ?",
      choices: [
        "Il permet, lorsque l’eau n’est pas interdite, une action puissante et continue sur un début d’incendie",
        "Il doit rester clairement signalé et accessible",
        "Il doit être implanté à proximité des accès et protégé contre le gel si nécessaire",
        "Il remplace à lui seul l’alerte, l’évacuation et l’organisation du site"
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "Le RIA est un moyen interne de première intervention. Il doit être disponible, signalé, bien implanté et utilisé dans un cadre cohérent avec les consignes du site.",
      timeLimit: 75,
      contextLabel:
        "Les RIA permettent une action puissante et efficace lorsque l’emploi de l’eau n’est pas interdit.",
      imagePath: "/images/extincteur-ria-extincteur-mobile.jpg",
      imageAlt:
        "Extincteur et robinet d'incendie armé en entreprise à proximité d'une zone technique",
    },
    {
      question:
        "Quelle précaution reste juste pour l’emploi d’un extincteur à proximité d’une origine électrique inférieure à 1 000 volts ?",
      choices: [
        "L’appareil doit porter une mention spécifique adaptée à cet emploi",
        "L’eau de ruissellement peut rester conductrice et impose de la prudence",
        "N’importe quel extincteur à eau convient sans condition",
        "Le risque électrique disparaît automatiquement dès que l’extincteur est déclenché"
      ],
      answer: [0, 1],
      multiple: true,
      explanation:
        "L’usage au voisinage d’une origine électrique impose un appareil adapté et une vigilance forte sur les effets du ruissellement et l’exposition de l’intervenant.",
      timeLimit: 70,
      contextLabel:
        "La réglementation distingue bien l’agent extincteur, les classes de feu et les limites d’emploi près d’une origine électrique.",
      imagePath:
        "/images/distance-de-securite-extincteur-a-eau-pulverisee.webp",
      imageAlt:
        "Schéma de distance de sécurité pour extincteur à eau pulvérisée avec additif",
    },
    {
      question:
        "Selon le Code du travail, quels éléments font partie du socle de base en matière de sécurité incendie ?",
      choices: [
        "Des moyens de premier secours contre l'incendie",
        "Des consignes adaptées",
        "Des essais et exercices",
        "La neutralisation libre des alarmes répétitives",
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "Le socle de base repose notamment sur les moyens de secours, les consignes, les essais et les exercices, pas sur la banalisation des écarts.",
      timeLimit: 75,
    },
    {
      question:
        "Pourquoi les fumées sont-elles particulièrement redoutables lors d'un incendie ?",
      choices: [
        "Elles réduisent la visibilité",
        "Elles peuvent intoxiquer rapidement",
        "Elles facilitent l'orientation dans le bâtiment",
        "Elles compliquent l'évacuation bien avant l'arrivée des flammes",
      ],
      answer: [0, 1, 3],
      multiple: true,
      explanation:
        "Les fumées sont un danger majeur pour l'évacuation et la survie des personnes exposées.",
      timeLimit: 65,
    },
    {
      question:
        "Parmi ces écarts du quotidien, lesquels dégradent directement la prévention incendie ?",
      choices: [
        "Bloquer une porte coupe-feu",
        "Stocker devant une issue",
        "Masquer un extincteur ou un déclencheur manuel",
        "Signaler un défaut pour traitement",
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "La sécurité incendie se joue aussi dans les comportements quotidiens et le traitement des anomalies visibles.",
      timeLimit: 70,
    },
    {
      question:
        "Dans un ERP ou un IGH, quelle idée reste juste pour un apprenant en exploitation ?",
      choices: [
        "Le cadre réglementaire peut être plus exigeant que le seul Code du travail",
        "Les règles ERP et IGH n'ont aucun effet sur l'évacuation ou le SSI",
        "Le type de bâtiment influence l'organisation incendie",
        "Le bâtiment et son usage n'ont pas d'impact sur les moyens à prévoir",
      ],
      answer: [0, 2],
      multiple: true,
      explanation:
        "Le type de bâtiment et son usage modifient le niveau d'exigence et l'organisation de sécurité incendie.",
      timeLimit: 65,
    },
    {
      question:
        "Pourquoi un travail par points chauds doit-il être encadré par un permis de feu ?",
      choices: [
        "Parce qu’il formalise l’analyse de la zone et les mesures de sécurité",
        "Parce qu’il identifie les responsables, la durée et les vérifications à effectuer",
        "Parce qu’il remplace toutes les consignes incendie permanentes du site",
        "Parce qu’il prévoit aussi la surveillance après la fin des travaux"
      ],
      answer: [0, 1, 3],
      multiple: true,
      explanation:
        "Le permis de feu sert à préparer, autoriser et contrôler les travaux par points chauds avant, pendant et après l’intervention. Il ne remplace pas les autres consignes du site.",
      timeLimit: 75,
    },
      {
      question: "Lors d'un incendie, quelle est la première cause de décès en milieu professionnel ?",
      choices: [
        "Les flammes",
        "Les fumées et gaz toxiques",
        "L'effondrement de la structure",
        "Le rayonnement thermique",
      ],
      answer: [1],
      explanation:
        "Les fumées et gaz (notamment le monoxyde de carbone CO, inodore) sont la première cause de décès lors des incendies en milieu professionnel.",
    },
    {
      question: "Quelle est la concentration normale d'oxygène dans l'air, repère utile pour comprendre l'asphyxie en cas d'incendie ?",
      choices: [
        "10 %",
        "15 %",
        "21 %",
        "30 %",
      ],
      answer: [2],
      explanation:
        "L'air contient environ 21 % d'oxygène. Lors d'un incendie, cette concentration diminue rapidement, ce qui contribue à l'asphyxie.",
    },
    {
      question: "Parmi ces 4 modes, lesquels participent à la propagation d'un incendie ?",
      choices: [
        "Conduction",
        "Convection",
        "Rayonnement",
        "Déplacement de substances en combustion",
      ],
      answer: [0,1,2,3],
      multiple: true,
      explanation:
        "Ces 4 modes de propagation sont : conduction (dans un même matériau), convection (gaz chauds), rayonnement (infrarouges) et déplacement de matières incandescentes.",
    },
    {
      question: "Dans environ quelle proportion de sinistres incendie l'entreprise disparaît-elle ?",
      choices: [
        "10 %",
        "30 %",
        "50 %",
        "70 %",
      ],
      answer: [3],
      explanation:
        "Dans près de 70 % des sinistres incendie, l'entreprise disparaît et le personnel se retrouve au chômage.",
    },
    {
      question: "Pour les travaux par points chauds (soudure, meulage, chalumeau...), quel document est obligatoire ?",
      choices: [
        "Un permis de feu",
        "Une attestation de présence",
        "Un bon de livraison",
        "Aucun document si le travail est court",
      ],
      answer: [0],
      explanation:
        "Le permis de feu est le document de référence pour encadrer les travaux par points chauds, qui sont une cause majeure d'incendie en entreprise.",
    },
    {
      question: "Le permis de feu doit être délivré par :",
      choices: [
        "Le salarié exécutant",
        "Le chef d'entreprise ou son représentant désigné, en concertation avec l'entreprise utilisatrice",
        "Le sous-traitant seul",
        "Le responsable RH",
      ],
      answer: [1],
      explanation:
        "Le permis de feu est délivré par le chef d'entreprise ou son représentant, en concertation avec l'entreprise extérieure intervenante.",
    },
    {
      question: "À quelle classe de feu correspondent les feux de matériaux solides (bois, papier, tissu) ?",
      choices: [
        "Classe A",
        "Classe B",
        "Classe C",
        "Classe D",
      ],
      answer: [0],
      explanation:
        "Classe A = feux secs (bois, papier, tissu). Classe B = liquides inflammables. Classe C = gaz. Classe D = métaux. F = huiles et graisses de cuisson.",
    },
    {
      question: "Quelle classe de feu concerne les liquides inflammables comme l'essence ou les solvants ?",
      choices: [
        "Classe A",
        "Classe B",
        "Classe C",
        "Classe F",
      ],
      answer: [1],
      explanation:
        "La classe B regroupe les liquides et solides liquéfiables : essence, solvants, peintures, alcools.",
    },
    {
      question: "Sur une installation électrique sous tension, quels extincteurs sont adaptés ?",
      choices: [
        "Eau pulvérisée sans additif",
        "CO2 (dioxyde de carbone)",
        "Poudre ABC",
        "Eau seule en jet droit",
      ],
      answer: [1,2],
      multiple: true,
      explanation:
        "Le CO2 et la poudre sont adaptés aux feux d'origine électrique. L'eau en jet est interdite sur une installation sous tension (risque d'électrocution).",
    },
    {
      question: "Le rôle du guide-file lors d'une évacuation est :",
      choices: [
        "De rester au point de rassemblement pour compter",
        "D'ouvrir la marche et de conduire les occupants vers la sortie de secours désignée",
        "De fermer les portes coupe-feu en partant",
        "De prévenir les pompiers depuis l'extérieur",
      ],
      answer: [1],
      explanation:
        "Le guide-file ouvre la marche et conduit les occupants vers la sortie. Le serre-file ferme la marche et vérifie que personne ne reste.",
    },
    {
      question: "Le rôle du serre-file lors d'une évacuation est :",
      choices: [
        "D'ouvrir la marche",
        "De fermer la marche, vérifier que personne ne reste, fermer les portes derrière lui",
        "D'appeler les pompiers",
        "De manipuler les extincteurs",
      ],
      answer: [1],
      explanation:
        "Le serre-file ferme l'évacuation, vérifie qu'aucun occupant n'est resté dans les locaux et referme les portes coupe-feu pour limiter la propagation.",
    },
    {
      question: "L'évaluation du risque incendie doit être intégrée dans quel document obligatoire de l'entreprise ?",
      choices: [
        "Le règlement intérieur",
        "Le document unique d'évaluation des risques professionnels (DUERP)",
        "Le contrat de travail",
        "Le plan comptable",
      ],
      answer: [1],
      explanation:
        "L'évaluation du risque incendie fait partie intégrante du DUERP, document obligatoire mis à jour au moins une fois par an.",
    },
    {
      question: "Parmi ces actions, lesquelles font partie de la prévention « agir sur les sources d'inflammation » ?",
      choices: [
        "Procédure de permis de feu pour les travaux par points chauds",
        "Conformité des installations électriques à la NF C 15-100",
        "Stockage massif de combustibles",
        "Thermographie infrarouge des armoires électriques",
      ],
      answer: [0,1,3],
      multiple: true,
      explanation:
        "Permis de feu, conformité électrique et contrôle thermique sont des actions de prévention. Le stockage massif de combustibles aggrave le risque, il ne le réduit pas.",
    },
    {
      question: "L'exercice d'évacuation doit être organisé au minimum :",
      choices: [
        "Une fois tous les 5 ans",
        "Une fois par an",
        "Tous les six mois (Code du travail R.4227-39)",
        "Uniquement à l'embauche",
      ],
      answer: [2],
      explanation:
        "Le Code du travail (R.4227-39) impose un exercice d'évacuation au moins tous les six mois, en condition réelle.",
    },
    {
      question: "Le triangle du feu est composé de :",
      choices: [
        "Combustible, comburant, source d'inflammation",
        "Eau, mousse, poudre",
        "Détecteur, alarme, sirène",
        "Évacuation, alerte, secours",
      ],
      answer: [0],
      explanation:
        "Le triangle du feu : combustible (matière qui brûle) + comburant (oxygène) + source d'inflammation. Supprimer un sommet supprime le feu.",
    },
  ],
  "ssi-exploitation": [
    {
      question:
        "Le rôle principal d'un SSI est de :",
      choices: [
        "Détecter, alerter et contribuer à la mise en sécurité incendie",
        "Remplacer l'ensemble des consignes du site",
        "Servir uniquement à enregistrer les horaires d'occupation",
        "Supprimer le besoin d'exercices d'évacuation",
      ],
      answer: [0],
      explanation:
        "Le SSI participe à la détection, à l'alarme et à la mise en sécurité, mais il ne remplace ni l'organisation ni les consignes.",
      timeLimit: 45,
      contextLabel:
        "La centrale SSI doit être lue comme un organe de sécurité et d'exploitation, pas comme un simple tableau technique.",
      imagePath: "/images/centrale-ssi.jpg",
      imageAlt:
        "Centrale ou tableau de système de sécurité incendie",
    },
    {
      question:
        "Dans le schéma de fonctionnement SSI présenté, quelle chaîne logique est la plus juste ?",
      choices: [
        "Détecter et signaler l'incendie, puis commander des organes de sécurité",
        "Contourner l'alarme et intervenir sans évacuation",
        "Déclencher uniquement des diffuseurs sonores sans autre action possible",
        "Supprimer toute mise en sécurité dès qu'un défaut apparaît",
      ],
      answer: [0],
      explanation:
        "Le schéma rappelle la logique générale du SSI: détecter, signaler, puis commander des fonctions utiles à l'évacuation et à la limitation de la propagation.",
      timeLimit: 50,
      contextLabel:
        "Le visuel présente la logique d'un système de sécurité incendie entre détection, commande, évacuation et limitation de la propagation.",
      imagePath: "/images/fonction-systeme-de-securite-incendie.gif",
      imageAlt:
        "Schéma fonctionnel d'un système de sécurité incendie",
    },
    {
      question:
        "Dans le repère pédagogique des catégories de SSI, l'équipement d'alarme de type 4 est associé à quelle catégorie simple ?",
      choices: ["Catégorie A", "Catégorie C", "Catégorie E", "Catégorie B"],
      answer: [2],
      explanation:
        "Le visuel pédagogique de correspondance rappelle qu'un équipement d'alarme de type 4 se rattache au niveau simple de la catégorie E.",
      timeLimit: 45,
      contextLabel:
        "Le schéma de correspondance entre niveau de risque, catégorie de SSI et type d'équipement d'alarme aide à situer le type 4.",
      imagePath: "/images/niveau-ssi.jpg",
      imageAlt:
        "Correspondance pédagogique entre niveau de risque, catégorie de SSI et équipement d'alarme",
    },
    {
      question:
        "Sur le schéma type 4 présenté, quel élément déclenche l'équipement d'alarme avant diffusion sonore ?",
      choices: [
        "Le déclencheur manuel",
        "Le compartimentage automatique seul",
        "La porte coupe-feu seule",
        "Le point de rassemblement",
      ],
      answer: [0],
      explanation:
        "Dans cette logique simple, le déclencheur manuel alimente la chaîne d'alarme avant diffusion sonore et éventuelles fonctions associées.",
      timeLimit: 45,
      contextLabel:
        "Le schéma type 4 permet de visualiser la chaîne simple entre déclenchement manuel, équipement d'alarme et diffuseurs sonores.",
      imagePath: "/images/alarme-type-4.png",
      imageAlt:
        "Schéma d'alarme type 4 avec déclencheur manuel, équipement d'alarme et diffuseurs sonores",
    },
    {
      question:
        "Quelle distinction est correcte ?",
      choices: [
        "Le SDI recueille les informations de détection",
        "Le SMSI pilote les fonctions de mise en sécurité",
        "Le SDI remplace toutes les consignes d'évacuation",
        "Le SMSI n'a aucun lien avec les dispositifs actionnés de sécurité",
      ],
      answer: [0, 1],
      multiple: true,
      explanation:
        "Le SDI et le SMSI n'ont pas le même rôle. L'un traite la détection, l'autre pilote la mise en sécurité prévue.",
      timeLimit: 70,
      contextLabel:
        "Le schéma SSI permet de distinguer détection, traitement, alarme et commandes de mise en sécurité.",
      imagePath: "/images/schema-ssi.gif",
      imageAlt:
        "Schéma de système de sécurité incendie avec alarme type 4, DAC, DAS et diffuseurs sonores",
    },
    {
      question:
        "Face à un affichage SSI, quelle lecture est la plus professionnelle ?",
      choices: [
        "Distinguer une alarme feu d'un dérangement ou d'un essai",
        "Traiter toute information comme un simple défaut technique",
        "Banaliser une alarme répétitive si elle finit par disparaître",
        "Tracer l'anomalie et appliquer la procédure adaptée",
      ],
      answer: [0, 3],
      multiple: true,
      explanation:
        "L'exploitation SSI repose sur une lecture correcte des états et sur la traçabilité des suites données.",
      timeLimit: 75,
    },
    {
      question:
        "Parmi ces comportements, lesquels sortent du rôle normal d'un exploitant non mainteneur ?",
      choices: [
        "Neutraliser un équipement sans procédure",
        "Réarmer à répétition sans analyse",
        "Alerter le bon interlocuteur selon la consigne du site",
        "Confondre exploitation et maintenance spécialisée",
      ],
      answer: [0, 1, 3],
      multiple: true,
      explanation:
        "L'exploitant ne doit ni neutraliser, ni improviser de maintenance, ni banaliser les défauts répétitifs.",
      timeLimit: 75,
    },
    {
      question:
        "Dans le domaine SSI, la famille NF S 61 sert principalement de :",
      choices: [
        "Repère normatif français utile pour le SSI",
        "Simple recommandation sans lien avec l'installation",
        "Base de référence pour certaines règles générales et d'installation",
        "Remplacement du règlement de sécurité ERP ou IGH",
      ],
      answer: [0, 2],
      multiple: true,
      explanation:
        "Les normes NF S 61 structurent le domaine SSI, sans se substituer aux règlements applicables au bâtiment.",
      timeLimit: 70,
    },
    {
      question:
        "Pourquoi la traçabilité d'une alarme ou d'un dérangement est-elle importante ?",
      choices: [
        "Pour garder la mémoire de l'événement et des mesures prises",
        "Pour suivre les anomalies répétitives",
        "Parce qu'un simple réarmement suffit toujours",
        "Pour faciliter le dialogue avec le mainteneur ou le responsable de site",
      ],
      answer: [0, 1, 3],
      multiple: true,
      explanation:
        "Sans traçabilité, on banalise les défauts et on perd la maîtrise de l'exploitation du SSI.",
      timeLimit: 70,
    },
    {
      question:
        "Dans une logique SSI, que peuvent piloter ou concerner des fonctions de mise en sécurité ?",
      choices: [
        "Le compartimentage",
        "Le désenfumage",
        "La gestion d'issues ou de dispositifs associés",
        "Uniquement un affichage décoratif en PC sécurité",
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "Le SSI peut être lié à des fonctions concrètes de sécurité du bâtiment, pas à un simple affichage passif.",
      timeLimit: 75,
    },
    {
      question:
        "Quel raisonnement est le plus juste pour un site ERP ou IGH équipé d'un SSI ?",
      choices: [
        "Le SSI fait partie d'un cadre réglementaire global propre au bâtiment",
        "Le SSI est indépendant des consignes et du dossier de sécurité du site",
        "L'exploitation doit rester cohérente avec l'organisation incendie du bâtiment",
        "Le type de bâtiment n'a pas d'impact sur les exigences d'exploitation",
      ],
      answer: [0, 2],
      multiple: true,
      explanation:
        "Le SSI est un maillon d'un dispositif réglementaire et organisationnel plus large, qui dépend du bâtiment et de son usage.",
      timeLimit: 70,
    },
      {
      question: "Le sigle SSI signifie :",
      choices: [
        "Système de Sécurité Intérieure",
        "Système de Sécurité Incendie",
        "Service de Surveillance Industrielle",
        "Sécurité Sanitaire et Incendie",
      ],
      answer: [1],
      explanation:
        "Le SSI est l'ensemble des matériels qui détectent un incendie et mettent en œuvre la mise en sécurité d'un bâtiment (NF S 61-931 et suivantes).",
    },
    {
      question: "Les normes SSI françaises principales appartiennent à la série :",
      choices: [
        "NF EN 12845",
        "NF S 61",
        "NF C 15-100",
        "NF P 92",
      ],
      answer: [1],
      explanation:
        "La série NF S 61 (notamment NF S 61-931, 932, 933, 934, 935, 936, 970) régit les SSI : conception, exploitation, maintenance.",
    },
    {
      question: "Le SSI est composé en deux sous-ensembles principaux :",
      choices: [
        "SDI et SMSI",
        "ECS et CMSI",
        "BAES et DAS",
        "SDI uniquement",
      ],
      answer: [0,1],
      multiple: true,
      explanation:
        "SDI (Système de Détection Incendie) avec son ECS (Équipement de Contrôle et de Signalisation) + SMSI (Système de Mise en Sécurité Incendie) avec son CMSI (Centralisateur de Mise en Sécurité Incendie).",
    },
    {
      question: "Combien de catégories de SSI existent (NF S 61-931) ?",
      choices: [
        "2 (catégorie A et B)",
        "3 (A, B, C)",
        "5 (A, B, C, D, E)",
        "Aucune catégorisation",
      ],
      answer: [2],
      explanation:
        "Les SSI sont classés en 5 catégories (A, B, C, D, E) selon le niveau de sécurité requis. La catégorie A est la plus exigeante.",
    },
    {
      question: "La catégorie A de SSI exige notamment :",
      choices: [
        "Une détection automatique généralisée + ECS + UGA + DAS + désenfumage",
        "Uniquement des extincteurs",
        "Aucun détecteur",
        "Une simple alarme sonore",
      ],
      answer: [0],
      explanation:
        "La catégorie A est la plus complète : détection automatique, équipement de contrôle, unité de gestion d'alarme, dispositifs actionnés de sécurité (DAS), désenfumage.",
    },
    {
      question: "L'UGA est :",
      choices: [
        "Une Unité de Gestion d'Alarme",
        "Une Unité Générale d'Alimentation",
        "Un Utilitaire Graphique d'Alerte",
        "Une Unité de Gardiennage Automatisé",
      ],
      answer: [0],
      explanation:
        "L'UGA gère le déclenchement de l'alarme générale, intégrée au CMSI. Elle peut comporter une temporisation pour la levée de doute.",
    },
    {
      question: "Un DAS (Dispositif Actionné de Sécurité) est :",
      choices: [
        "Un détecteur de fumée",
        "Un équipement asservi par le SSI (porte coupe-feu, clapet, désenfumage, etc.)",
        "Une alarme sonore",
        "Un déclencheur manuel",
      ],
      answer: [1],
      explanation:
        "Un DAS est un équipement asservi (porte coupe-feu auto-fermante, clapet de désenfumage, exutoire, volet, ascenseur) qui exécute une fonction de mise en sécurité.",
    },
    {
      question: "Un déclencheur manuel (DM) sert à :",
      choices: [
        "Tester l'alarme tous les jours",
        "Déclencher manuellement le processus d'alarme et de mise en sécurité",
        "Couper le courant général",
        "Appeler les pompiers",
      ],
      answer: [1],
      explanation:
        "Le DM (souvent boîtier rouge à briser) permet à un occupant de déclencher l'alarme manuellement quand il constate un début d'incendie.",
    },
    {
      question: "L'alarme restreinte est :",
      choices: [
        "Une alarme audible uniquement par le personnel de surveillance, pour permettre une levée de doute",
        "Une alarme non audible par les pompiers",
        "Une alarme désactivée la nuit",
        "Une alarme sans son",
      ],
      answer: [0],
      explanation:
        "L'alarme restreinte (ou de niveau 1) est destinée au personnel formé, pour vérifier la réalité de l'incendie avant de déclencher l'alarme générale.",
    },
    {
      question: "L'alarme générale doit être audible :",
      choices: [
        "Uniquement aux étages concernés",
        "En tout point du bâtiment",
        "Dans les bureaux uniquement",
        "Uniquement la nuit",
      ],
      answer: [1],
      explanation:
        "L'alarme générale doit être audible en tout point accessible aux occupants, et adaptée aux types de handicap présents (signaux visuels pour les sourds par ex.).",
    },
    {
      question: "Un BAES est :",
      choices: [
        "Un Bloc Autonome d'Éclairage de Sécurité",
        "Un Bouton d'Alarme Électronique de Site",
        "Un Bordereau d'Activité Évacuation Secours",
        "Un Boîtier Anti-Effraction Sécurité",
      ],
      answer: [0],
      explanation:
        "Le BAES éclaire l'évacuation en cas de coupure du courant. Il fait partie de l'éclairage de sécurité, distinct du SSI mais lié à l'évacuation.",
    },
    {
      question: "Le registre d'exploitation du SSI doit consigner :",
      choices: [
        "Les essais périodiques",
        "Les anomalies et défauts",
        "Les opérations de maintenance",
        "Le nom et l'adresse personnelle des occupants",
      ],
      answer: [0,1,2],
      multiple: true,
      explanation:
        "Le registre trace les essais, anomalies, défauts, dérangements et opérations de maintenance. Il n'a pas vocation à recenser des données personnelles.",
    },
    {
      question: "La maintenance préventive d'un SSI doit être effectuée :",
      choices: [
        "Tous les 5 ans",
        "Tous les ans (au minimum) par une entreprise qualifiée",
        "Uniquement après un sinistre",
        "Jamais",
      ],
      answer: [1],
      explanation:
        "La NF S 61-933 et le Code du travail imposent au moins une maintenance annuelle par un mainteneur qualifié, avec contrat d'entretien recommandé.",
    },
    {
      question: "Face à une alarme incendie en condition réelle, l'exploitant doit :",
      choices: [
        "Désactiver l'alarme pour vérifier",
        "Déclencher l'évacuation, alerter les secours et appliquer la consigne incendie",
        "Attendre le mainteneur",
        "Relancer le système",
      ],
      answer: [1],
      explanation:
        "Face à une alarme réelle, l'évacuation est lancée, les secours alertés et la consigne du site appliquée. La désactivation n'intervient qu'après vérification du danger.",
    },
  ],
  sprinkler: [
    {
      question:
        "Comment fonctionne une installation sprinkler en situation d'incendie ?",
      choices: [
        "Toutes les tetes se declenchent automatiquement en meme temps",
        "Seules les tetes soumises a une chaleur suffisante s'ouvrent",
        "Le systeme agit localement au plus pres du foyer",
        "Le sprinkler remplace toute autre organisation incendie du site",
      ],
      answer: [1, 2],
      multiple: true,
      explanation:
        "Le sprinkler agit localement et precocement. Il ne remplace ni l'organisation du site ni les autres moyens de securite incendie.",
      timeLimit: 70,
      contextLabel:
        "Une installation sprinkler doit etre lue comme une protection technique integree a une strategie incendie plus large.",
      imagePath: "/images/installation-sprinkler.png",
      imageAlt:
        "Schema de principe d'une installation sprinkler avec reserve d'eau, pompe, poste de controle et reseau",
    },
    {
      question:
        "Quels elements appartiennent typiquement a une installation sprinkler ?",
      choices: [
        "Des tetes sprinkler",
        "Un reseau de tuyauteries",
        "Un poste de controle et une source d'eau",
        "Uniquement un extincteur mobile",
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "Le sprinkler repose sur un ensemble coherent: tetes, reseau, controle, alimentation en eau et alarmes.",
      timeLimit: 70,
      contextLabel:
        "Le reseau sprinkler comprend plusieurs parties visibles ou techniques qu'un exploitant doit savoir reconnaitre.",
      imagePath: "/images/reseau-sprinkler.jpg",
      imageAlt:
        "Reseau sprinkler dans un batiment avec poste de controle, reseaux et sources d'eau",
    },
    {
      question:
        "Quelles anomalies doivent etre prises au serieux en exploitation sprinkler ?",
      choices: [
        "Une vanne fermee ou mal positionnee",
        "Une pression anormale",
        "Une alarme non traitee",
        "Une corrosion ou une fuite visible",
      ],
      answer: [0, 1, 2, 3],
      multiple: true,
      explanation:
        "Une petite anomalie apparente peut degrader fortement la protection reelle du site.",
      timeLimit: 80,
    },
    {
      question:
        "Pourquoi une modification de stockage ou d'exploitation doit-elle alerter sur un site protege par sprinkler ?",
      choices: [
        "Parce qu'elle peut remettre en cause l'adequation entre le risque et la protection installee",
        "Parce qu'un sprinkler est universel et ne depend jamais du risque reel",
        "Parce que la hauteur, la densite ou la nature des produits peuvent changer la situation",
        "Parce que seule la presence des tetes suffit a garantir la conformite en toute circonstance",
      ],
      answer: [0, 2],
      multiple: true,
      explanation:
        "Le sprinkler reste efficace dans un cadre de conception et d'exploitation donne, qu'il faut preserver dans le temps.",
      timeLimit: 75,
    },
    {
      question:
        "Quels referentiels sont frequemment rencontres dans l'univers sprinkler selon les sites ?",
      choices: [
        "EN 12845",
        "APSAD R1",
        "NFPA 13",
        "FM Global Data Sheets",
      ],
      answer: [0, 1, 2, 3],
      multiple: true,
      explanation:
        "Ces referentiels peuvent s'appliquer selon le contexte technique, contractuel ou assurantiel du site.",
      timeLimit: 80,
      contextLabel:
        "Le monde sprinkler s'appuie sur plusieurs referentiels techniques selon le site protege et ses exigences d'assurance.",
      imagePath: "/images/installation-sprinkler.png",
      imageAlt:
        "Schema pedagogique d'une installation sprinkler dans un batiment logistique ou industriel",
    },
    {
      question:
        "En cas d'indisponibilite temporaire d'une partie de l'installation sprinkler, quel raisonnement est le plus juste ?",
      choices: [
        "Il faut tracer la situation et appliquer les mesures compensatoires prevues",
        "Une vanne fermee n'a pas d'importance si elle est remise plus tard",
        "L'organisation du site doit savoir qui alerter et qui autorise",
        "Aucune action n'est necessaire tant qu'il n'y a pas de depart de feu",
      ],
      answer: [0, 2],
      multiple: true,
      explanation:
        "Une indisponibilite sprinkler se pilote avec methode, tracabilite et mesures compensatoires adaptees.",
      timeLimit: 75,
    },
    {
      question:
        "Dans un entrepot ou une logique ICPE 1510, quelle affirmation est correcte ?",
      choices: [
        "Le sprinkler fait partie d'un ensemble plus large de prescriptions et d'organisation",
        "La seule presence du sprinkler suffit a regler le risque incendie d'un entrepot",
        "Les changements d'exploitation doivent etre analyses",
        "Le compartimentage et l'organisation du site restent sans importance",
      ],
      answer: [0, 2],
      multiple: true,
      explanation:
        "Le sprinkler est un maillon d'une strategie plus large qui depend aussi du stockage, des cellules, de l'organisation et du risque reel.",
      timeLimit: 75,
    },
    {
      question:
        "Quel comportement traduit une bonne maturite d'exploitation sprinkler ?",
      choices: [
        "Considerer un defaut chronique comme normal",
        "Suivre les essais et controles periodiques",
        "Traiter et suivre les anomalies jusqu'au retour a la normale",
        "Laisser les acces aux organes se degrader avec le temps",
      ],
      answer: [1, 2],
      multiple: true,
      explanation:
        "La qualite d'exploitation se voit dans la surveillance, la tracabilite et le traitement effectif des ecarts.",
      timeLimit: 65,
    },
    {
      question:
        "Quelles regles d'exploitation sont justes concernant les tetes sprinkler ?",
      choices: [
        "Elles ne doivent pas etre peintes ni utilisees comme support",
        "Le stockage doit respecter un degagement suffisant sous les tetes",
        "Un obstacle ajoute sous une tete peut modifier la protection reelle",
        "Une tete heurtee ou deformee peut etre ignoree si elle n'a pas coule",
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "Les tetes sprinkler doivent rester intactes, degagees et adaptees au volume protege. Un choc, une peinture ou un obstacle modifient la protection.",
      timeLimit: 75,
      contextLabel:
        "L'exploitation quotidienne doit aussi surveiller les tetes sprinkler, leur degagement et l'absence d'obstacle ou de choc visible.",
      imagePath: "/images/reseau-sprinkler.jpg",
      imageAlt:
        "Reseau sprinkler illustrant la repartition des tetes au-dessus des zones de stockage",
    },
    {
      question:
        "Quels organes ou etats doivent rester accessibles et lisibles sur une installation sprinkler ?",
      choices: [
        "Les postes de controle et reperes associes",
        "Les vannes et leurs positions normales",
        "Les alarmes, reports ou organes utiles a l'exploitation",
        "Peu importe, si l'installation est presente depuis longtemps",
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "L'exploitant doit pouvoir lire l'etat de l'installation, acceder aux organes et detecter un ecart sans perdre de temps.",
      timeLimit: 75,
      imagePath: "/images/installation-spk.jpg",
      imageAlt:
        "Vue d'une installation sprinkler en environnement industriel ou logistique",
    },
      {
      question: "Une installation sprinkler est conçue pour :",
      choices: [
        "Détecter un incendie sans agir",
        "Détecter et éteindre / contenir automatiquement un incendie",
        "Évacuer les fumées",
        "Couper le courant",
      ],
      answer: [1],
      explanation:
        "Le sprinkler détecte (par bulbe ou ampoule thermosensible) puis éteint ou contient l'incendie en arrosant la zone concernée.",
    },
    {
      question: "Le déclenchement d'une tête sprinkler classique se fait par :",
      choices: [
        "Un signal électrique du SSI",
        "La rupture thermique d'un bulbe ou d'une ampoule à liquide",
        "L'action manuelle d'un occupant",
        "Une commande à distance",
      ],
      answer: [1],
      explanation:
        "La tête sprinkler à bulbe libère l'eau quand la chaleur atteint la température de tarage du bulbe (généralement 68 °C ou 79 °C).",
    },
    {
      question: "Les principaux référentiels techniques pour le sprinkler sont :",
      choices: [
        "EN 12845",
        "APSAD R1",
        "NFPA 13",
        "NF C 18-510",
      ],
      answer: [0,1,2],
      multiple: true,
      explanation:
        "EN 12845 (norme européenne), APSAD R1 (référentiel assureur français), NFPA 13 (USA, exigeant en logistique), FM Global (assureur). NF C 18-510 concerne l'habilitation électrique, pas le sprinkler.",
    },
    {
      question: "Une tête sprinkler à bulbe ROUGE est tarée à environ :",
      choices: [
        "57 °C",
        "68 °C",
        "79 °C",
        "141 °C",
      ],
      answer: [1],
      explanation:
        "Le code couleur des bulbes : orange = 57 °C, rouge = 68 °C, jaune = 79 °C, vert = 93 °C, bleu = 141 °C, mauve = 182 °C, noir = 204+ °C.",
    },
    {
      question: "Le poste de contrôle d'une installation sprinkler comporte typiquement :",
      choices: [
        "Une vanne principale, un clapet d'alarme, un manomètre amont/aval, un test",
        "Un détecteur de fumée",
        "Un déclencheur manuel d'alarme",
        "Un BAES",
      ],
      answer: [0],
      explanation:
        "Le poste de contrôle : vanne d'isolement, clapet anti-retour avec gong hydraulique d'alarme, manomètres pression amont et aval, dispositif de test.",
    },
    {
      question: "Une vanne sprinkler trouvée fermée alors qu'elle devrait être ouverte représente :",
      choices: [
        "Une situation normale",
        "Une indisponibilité grave de l'installation, à signaler immédiatement",
        "Une économie d'eau",
        "Une opération de maintenance",
      ],
      answer: [1],
      explanation:
        "Une vanne fermée à tort rend l'installation inopérante. C'est l'une des causes les plus fréquentes de défaillance, à signaler et corriger sans délai.",
    },
    {
      question: "Un essai hebdomadaire (essai du gong d'alarme) doit être consigné dans :",
      choices: [
        "Le registre d'exploitation de l'installation sprinkler",
        "Le contrat de travail",
        "Le DUERP",
        "Aucun document",
      ],
      answer: [0],
      explanation:
        "Le registre d'exploitation trace tous les essais (hebdomadaires, mensuels, annuels), anomalies et opérations de maintenance, conformément à l'EN 12845 et l'APSAD R1.",
    },
    {
      question: "L'APSAD R1 est :",
      choices: [
        "Une norme européenne",
        "Un référentiel d'installation et de vérification émis par les assureurs français (CNPP)",
        "Une norme américaine",
        "Une recommandation FM Global",
      ],
      answer: [1],
      explanation:
        "L'APSAD R1 (Centre National de Prévention et de Protection / CNPP) est le référentiel d'installation, vérification et maintenance des installations sprinkler en France, reconnu par les assureurs.",
    },
    {
      question: "Le risque le plus fréquent d'indisponibilité d'une installation sprinkler vient de :",
      choices: [
        "Vannes fermées par erreur, têtes masquées par du stockage, source d'eau indisponible",
        "L'âge des canalisations",
        "La couleur des têtes",
        "La hauteur du bâtiment",
      ],
      answer: [0],
      explanation:
        "Vannes fermées, stockage qui masque les têtes, source d'eau coupée : c'est ce que les exploitants doivent surveiller en priorité.",
    },
    {
      question: "L'eau d'une installation sprinkler peut-elle être utilisée à d'autres fins (lavage, arrosage) ?",
      choices: [
        "Oui, librement",
        "Non, le réseau et la source d'eau sont dédiés à la protection incendie",
        "Oui, après accord verbal",
        "Oui, uniquement la nuit",
      ],
      answer: [1],
      explanation:
        "Le réseau et la source d'eau sprinkler sont dédiés. Tout détournement compromet la disponibilité en cas d'incendie et est interdit par les référentiels.",
    },
    {
      question: "Une installation sprinkler de type « sous eau » signifie :",
      choices: [
        "Le réseau aval est constamment rempli d'eau sous pression",
        "Le réseau est rempli d'air comprimé",
        "Le réseau est vide",
        "Le réseau est rempli de mousse",
      ],
      answer: [0],
      explanation:
        "Le système sous eau (« wet pipe ») est rempli d'eau sous pression en aval du clapet, prêt à arroser dès qu'une tête s'ouvre. C'est le plus courant.",
    },
    {
      question: "Un système « sous air » (dry pipe) est utilisé :",
      choices: [
        "Dans les locaux climatisés",
        "Dans les locaux exposés au gel ou aux fortes chaleurs où l'eau ne peut pas rester en permanence",
        "Pour les feux d'origine électrique",
        "Pour les liquides inflammables",
      ],
      answer: [1],
      explanation:
        "Le système sous air remplace l'eau par de l'air comprimé en aval du clapet, pour éviter le gel des canalisations dans les zones non chauffées.",
    },
    {
      question: "Une modification du stockage (hauteur, type de produit) peut nécessiter :",
      choices: [
        "Aucune action",
        "Une réévaluation de l'installation sprinkler par un bureau d'études et un avis assureur",
        "Un simple essai d'alarme",
        "Un changement de couleur de bulbe",
      ],
      answer: [1],
      explanation:
        "Toute modification significative (hauteur, densité combustible, géométrie) peut sortir l'installation de son périmètre de conception. Un avis bureau d'études et assureur est nécessaire.",
    },
    {
      question: "Un travail par points chauds dans une zone protégée par sprinkler nécessite :",
      choices: [
        "Un permis de feu et l'application des consignes de neutralisation/réarmement de l'installation",
        "Aucune précaution",
        "L'arrêt définitif de l'installation",
        "Une simple information orale",
      ],
      answer: [0],
      explanation:
        "Permis de feu obligatoire, avec procédure de neutralisation locale temporaire et réarmement immédiat à la fin des travaux, sous suivi de l'exploitant.",
    },
    {
      question: "Le rôle du chargé d'exploitation sprinkler inclut :",
      choices: [
        "Effectuer les essais périodiques selon le référentiel",
        "Tenir le registre d'exploitation",
        "Coordonner avec le mainteneur et l'assureur",
        "Modifier seul les têtes",
      ],
      answer: [0,1,2],
      multiple: true,
      explanation:
        "Essais périodiques, registre, coordination avec mainteneur et assureur, signalement des anomalies. Les modifications techniques relèvent de l'installateur ou du mainteneur qualifié.",
    },
  ],
  "extinction-automatique-gaz": [
    {
      question:
        "Quel enonce distingue correctement un systeme d'extinction automatique a gaz d'une installation sprinkler ?",
      choices: [
        "Le systeme a gaz protege un volume et impose une logique de temporisation et d'evacuation",
        "Le systeme a gaz fonctionne comme un sprinkler mais sans eau",
        "Le systeme a gaz depend fortement de l'integrite du local protege",
        "Le systeme a gaz n'impose aucune contrainte particuliere sur le reacces",
      ],
      answer: [0, 2],
      multiple: true,
      explanation:
        "Un systeme a gaz ne se lit pas comme un sprinkler. Il repose sur un local protege, une chaine de commande et une gestion stricte des acces.",
      timeLimit: 75,
      contextLabel:
        "L'extinction automatique a gaz repose sur une logique de local protege, de temporisation et de securite des personnes.",
      imagePath: "/images/systeme-d'extinction-incendie-automatique.webp",
      imageAlt:
        "Schema d'un systeme fixe d'extinction automatique a gaz avec detection, diffusion et reserve d'agent extincteur",
    },
    {
      question:
        "Pourquoi l'integrite du local protege est-elle un point critique pour un systeme a gaz ?",
      choices: [
        "Parce que la concentration utile doit pouvoir se maintenir",
        "Parce que les portes, passages et fuites n'ont aucun effet",
        "Parce que l'efficacite depend aussi de l'etancheite du volume",
        "Parce que seul le nombre de bouteilles compte",
      ],
      answer: [0, 2],
      multiple: true,
      explanation:
        "Le local protege fait partie du systeme. Si son integrite est degradee, la concentration peut devenir insuffisante.",
      timeLimit: 70,
    },
    {
      question:
        "Quels elements de securite des personnes sont essentiels avant une emission de gaz ?",
      choices: [
        "Une alarme et une temporisation visibles ou audibles",
        "L'evacuation prealable du local protege",
        "L'acces libre au local pendant la diffusion",
        "Le controle des acces avant et apres emission",
      ],
      answer: [0, 1, 3],
      multiple: true,
      explanation:
        "La securite des personnes impose une chaine claire: alarme, temporisation, evacuation et maitrise des acces.",
      timeLimit: 75,
    },
    {
      question:
        "Apres une emission de gaz, quel comportement est le plus professionnel ?",
      choices: [
        "Interdire le reacces tant que les consignes du site ne permettent pas un retour controle",
        "Rentrer aussitot pour verifier visuellement",
        "Prendre en compte l'atmosphere du local et les risques residuels",
        "Considérer que tout danger a disparu des l'extinction apparente",
      ],
      answer: [0, 2],
      multiple: true,
      explanation:
        "Apres emission, le risque ne se limite pas au feu initial. Le reacces doit etre strictement encadre.",
      timeLimit: 75,
    },
    {
      question:
        "Quels reperes techniques ou normatifs sont cites pour les systemes d'extinction automatique a gaz ?",
      choices: [
        "APSAD R13",
        "NF EN 15004-1",
        "EN 12094-1",
        "APSAD R1",
      ],
      answer: [0, 1],
      multiple: true,
      explanation:
        "APSAD R13 et NF EN 15004-1 sont les références normatives pour l'exploitation et la maintenance de ces systèmes.",
      timeLimit: 70,
    },
    {
      question:
        "Quel raisonnement est juste pour un exploitant non mainteneur ?",
      choices: [
        "Comprendre la chaine d'information et appliquer la procedure du site",
        "Improviser une neutralisation technique si une alarme se repete",
        "Tracer les anomalies et alerter le bon interlocuteur",
        "Confondre exploitation et maintenance specialisee",
      ],
      answer: [0, 2],
      multiple: true,
      explanation:
        "L'exploitant doit comprendre, agir dans son role et transmettre. Il ne doit pas improviser de maintenance.",
      timeLimit: 70,
    },
    {
      question:
        "Lors d'une mise hors service ou d'une maintenance sur un systeme d'extinction a gaz, quelle conduite est correcte ?",
      choices: [
        "L'indisponibilite doit etre autorisee et tracee",
        "Des mesures compensatoires peuvent etre necessaires selon le site",
        "Une inhibition temporaire peut se faire sans informer personne",
        "Le retour a la normale doit etre verifie avant de considerer le local de nouveau protege",
      ],
      answer: [0, 1, 3],
      multiple: true,
      explanation:
        "Le mode degrade doit etre pilote avec methode: autorisation, tracabilite, compensation et verification du retour a la normale.",
      timeLimit: 75,
      imagePath: "/images/systeme-d'extinction-incendie-automatique.webp",
      imageAlt:
        "Schema d'un systeme fixe d'extinction automatique a gaz avec detection, diffusion et reserve d'agent extincteur",
    },
    {
      question:
        "Pourquoi une modification du local protege doit-elle etre analysee avec serieux sur un systeme a gaz ?",
      choices: [
        "Parce que passages, portes et percements influencent la tenue de la concentration",
        "Parce que l'efficacite depend aussi de l'integrite du volume protege",
        "Parce qu'un local protege reste conforme meme apres n'importe quelle modification",
        "Parce que l'etancheite et les fermetures font partie du systeme reel",
      ],
      answer: [0, 1, 3],
      multiple: true,
      explanation:
        "Le volume protege fait partie du systeme a gaz. Toute modification du local peut degrader la performance et la securite des personnes.",
      timeLimit: 75,
    },
      {
      question: "Une installation d'extinction automatique à gaz est principalement utilisée dans :",
      choices: [
        "Les chambres à coucher domestiques",
        "Les locaux à risque spécifique (informatique, archives, transformateurs, salles techniques)",
        "Les couloirs d'évacuation",
        "Les sanitaires",
      ],
      answer: [1],
      explanation:
        "Les systèmes à gaz protègent des locaux à risque spécifique où l'eau (sprinkler) n'est pas adaptée : data centers, archives, salles techniques, transformateurs.",
    },
    {
      question: "Les principaux gaz utilisés en extinction automatique sont :",
      choices: [
        "CO2, gaz inertes (azote, argon, mélanges IG)",
        "Halocarbonés (FK-5-1-12, HFC)",
        "Eau pulvérisée",
        "Mousse à haut foisonnement",
      ],
      answer: [0,1],
      multiple: true,
      explanation:
        "Deux familles : gaz inertes (réduisent l'oxygène) et halocarbonés (action chimique). Eau et mousse sont des moyens différents.",
    },
    {
      question: "Un gaz inerte éteint le feu en :",
      choices: [
        "Refroidissant intensément",
        "Diminuant la concentration d'oxygène en dessous du seuil de combustion",
        "Étouffant chimiquement la flamme",
        "Émettant de la vapeur d'eau",
      ],
      answer: [1],
      explanation:
        "Les gaz inertes (N2, Ar, mélanges IG-541, IG-55, IG-100) abaissent l'oxygène à environ 12-13 %, sous le seuil de combustion mais encore vivable brièvement.",
    },
    {
      question: "Le CO2 utilisé en extinction automatique présente le risque suivant pour les personnes :",
      choices: [
        "Aucun risque",
        "Asphyxie par déplacement de l'oxygène, à concentration létale",
        "Brûlures cutanées",
        "Allergies respiratoires",
      ],
      answer: [1],
      explanation:
        "Les concentrations d'extinction au CO2 (souvent ≥ 34 %) sont mortelles. L'évacuation préalable est obligatoire et le local n'est rendu accessible qu'après ventilation.",
    },
    {
      question: "L'évacuation des occupants avant déclenchement d'un système gaz se fait via :",
      choices: [
        "Une alarme dédiée et une temporisation entre la pré-alarme et l'inondation gazeuse",
        "Aucune procédure particulière",
        "Une simple notification e-mail",
        "Le système n'attend pas",
      ],
      answer: [0],
      explanation:
        "Une pré-alarme (évacuation) précède l'émission du gaz. La temporisation laisse le temps à l'évacuation. Des dispositifs d'arrêt d'urgence et de blocage existent.",
    },
    {
      question: "Les principaux référentiels d'extinction automatique à gaz sont :",
      choices: [
        "NF EN 15004 et NF EN 12094",
        "ISO 14520",
        "APSAD R13",
        "NF C 15-100",
      ],
      answer: [0,1,2],
      multiple: true,
      explanation:
        "EN 15004 (systèmes), EN 12094 (composants), ISO 14520 (international), APSAD R13 (référentiel assureur français). NF C 15-100 concerne l'électricité.",
    },
    {
      question: "Le terme « décharge totale » signifie :",
      choices: [
        "Le gaz est libéré progressivement dans le local",
        "La quantité totale d'agent extincteur est libérée en un temps court (généralement ≤ 60 s pour halocarbonés, ≤ 120 s pour inertes)",
        "Le système est déchargé manuellement",
        "La décharge dure plusieurs heures",
      ],
      answer: [1],
      explanation:
        "La décharge totale (« total flooding ») noie le local en quelques dizaines de secondes pour atteindre la concentration d'extinction.",
    },
    {
      question: "Pour qu'un système gaz soit efficace, le local protégé doit être :",
      choices: [
        "Ouvert sur l'extérieur",
        "Étanche à un degré suffisant pour maintenir la concentration de gaz pendant la durée de tenue (« hold time »)",
        "Climatisé en permanence",
        "Sans cloisons",
      ],
      answer: [1],
      explanation:
        "Sans étanchéité suffisante, le gaz fuit et la concentration tombe sous le seuil d'extinction. Un test d'étanchéité (« door fan test ») est généralement exigé.",
    },
    {
      question: "Un door fan test sert à :",
      choices: [
        "Vérifier le bon fonctionnement de la porte",
        "Mesurer l'étanchéité du local et calculer la durée de tenue de la concentration de gaz",
        "Tester les détecteurs",
        "Mesurer le bruit",
      ],
      answer: [1],
      explanation:
        "Le door fan test (essai au ventilateur de porte) mesure les fuites et permet de prédire la « hold time » : durée pendant laquelle la concentration de gaz reste suffisante.",
    },
    {
      question: "Le déclenchement automatique d'un système gaz nécessite généralement :",
      choices: [
        "Un seul détecteur",
        "Une double détection (deux détecteurs en coïncidence) pour limiter les fausses décharges",
        "Aucune détection",
        "Une alarme manuelle uniquement",
      ],
      answer: [1],
      explanation:
        "La double détection en coïncidence (deux détecteurs distincts confirment l'incendie) évite les déclenchements intempestifs, coûteux et potentiellement dangereux.",
    },
    {
      question: "Une commande manuelle d'urgence (CMU) sur un système gaz permet :",
      choices: [
        "De désactiver définitivement le système",
        "De déclencher manuellement l'extinction si nécessaire",
        "D'éteindre les lumières",
        "De couper l'alarme",
      ],
      answer: [1],
      explanation:
        "La CMU permet à un opérateur formé de déclencher l'extinction quand il constate visuellement le sinistre. Elle est protégée pour éviter le déclenchement accidentel.",
    },
    {
      question: "Une commande d'arrêt d'urgence (CAU) permet :",
      choices: [
        "De couper le courant",
        "D'inhiber le déclenchement automatique pendant la temporisation, par exemple si on est encore présent dans le local",
        "De supprimer l'alarme",
        "De fermer la porte",
      ],
      answer: [1],
      explanation:
        "La CAU bloque l'émission du gaz tant qu'elle est tenue, pour permettre l'évacuation d'un occupant retardé sans risquer l'asphyxie.",
    },
    {
      question: "Après une décharge gaz, l'accès au local protégé :",
      choices: [
        "Est immédiatement libre",
        "Doit être interdit jusqu'à ventilation suffisante et vérification de la qualité de l'atmosphère",
        "Est libre si on retient sa respiration",
        "Ne demande pas de précaution",
      ],
      answer: [1],
      explanation:
        "Après décharge, le local reste à concentration potentiellement asphyxiante. Ventilation forcée et mesure de l'oxygène sont requises avant réintégration.",
    },
    {
      question: "Le maintien en condition opérationnelle (maintenance) d'un système gaz exige :",
      choices: [
        "Aucune intervention",
        "Vérifications périodiques (mensuelles/trimestrielles/annuelles), épreuves des bouteilles tous les 10 ans, mainteneur qualifié",
        "Une vérification tous les 50 ans",
        "Uniquement après incident",
      ],
      answer: [1],
      explanation:
        "Vérifications visuelles régulières, contrôles instrumentés, ré-épreuves des bouteilles selon la réglementation des équipements sous pression, par un mainteneur qualifié.",
    },
  ],
  sst: [
    {
      question:
        "Quelle est la premiere priorite d'un SST face a un accident ?",
      choices: [
        "Proteger pour eviter le suraccident",
        "Deplacer immediatement la victime quoi qu'il arrive",
        "Appeler apres plusieurs minutes d'observation",
        "Agir sans analyser le danger",
      ],
      answer: [0],
      explanation:
        "Le SST commence par proteger afin d'eviter une nouvelle victime et de securiser la scene.",
      timeLimit: 45,
      imagePath: "/images/sst.jpg",
      imageAlt:
        "Formation SST et gestes de premiers secours en environnement professionnel",
    },
    {
      question:
        "L'examen SST sert principalement a :",
      choices: [
        "Identifier l'urgence et orienter le geste immediat",
        "Remplacer l'avis medical",
        "Choisir la victime la plus simple a traiter",
        "Retarder l'alerte",
      ],
      answer: [0],
      explanation:
        "L'examen permet de rechercher les urgences vitales et de guider la suite de l'intervention.",
      timeLimit: 45,
    },
    {
      question:
        "Quelles informations doivent figurer dans une alerte utile ?",
      choices: [
        "Le lieu precis",
        "La nature de l'evenement",
        "Le nombre de victimes",
        "Des informations sans lien avec la situation",
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "Une alerte claire et precise fait gagner du temps et facilite la prise en charge par les secours.",
      timeLimit: 65,
    },
    {
      question:
        "Pourquoi la protection prime-t-elle avant le secours ?",
      choices: [
        "Parce qu'il faut eviter le suraccident",
        "Parce qu'un secouriste blesse devient une nouvelle victime",
        "Parce qu'il faut agir vite sans jamais regarder le danger",
        "Parce que tout danger disparait automatiquement en quelques secondes",
      ],
      answer: [0, 1],
      multiple: true,
      explanation:
        "La scene doit etre securisee avant toute autre action pour eviter d'aggraver la situation.",
      timeLimit: 60,
    },
    {
      question:
        "Dans la logique SST, quels signes orientent l'examen initial ?",
      choices: [
        "Saignement abondant",
        "Etouffement",
        "Reponse de la victime",
        "Respiration",
      ],
      answer: [0, 1, 2, 3],
      multiple: true,
      explanation:
        "L'examen SST suit une logique methodique de recherche des urgences vitales.",
      timeLimit: 75,
    },
    {
      question:
        "Quel enonce reste juste concernant le role du SST ?",
      choices: [
        "Le SST secourt et contribue aussi a la prevention dans l'entreprise",
        "Le SST remplace les secours specialises",
        "Le SST agit dans le cadre de sa formation et des consignes du site",
        "Le SST improvise des gestes non appris si la situation est impressionnante",
      ],
      answer: [0, 2],
      multiple: true,
      explanation:
        "Le role du SST relie secours et prevention, dans le respect strict du cadre appris en formation.",
      timeLimit: 65,
    },
    {
      question:
        "Pourquoi le suivi de la victime reste-t-il important jusqu'a l'arrivee des secours ?",
      choices: [
        "Parce que son etat peut evoluer",
        "Parce qu'il faut pouvoir transmettre un compte rendu utile",
        "Parce qu'une fois l'alerte donnee, toute surveillance devient inutile",
        "Parce que l'attente remplace toujours les gestes appris",
      ],
      answer: [0, 1],
      multiple: true,
      explanation:
        "Le SST surveille, rassure si possible et transmet des informations utiles a la releve.",
      timeLimit: 60,
    },
    {
      question:
        "Dans quel ordre logique s'inscrit l'action du SST face a une situation d'accident ?",
      choices: [
        "Proteger",
        "Examiner",
        "Alerter ou faire alerter",
        "Secourir",
      ],
      answer: [0, 1, 2, 3],
      multiple: true,
      explanation:
        "La logique SST suit une methode ordonnee: proteger, examiner, alerter, puis secourir dans le cadre appris.",
      timeLimit: 70,
      imagePath: "/images/sst.jpg",
      imageAlt:
        "Formation SST et gestes de premiers secours en environnement professionnel",
    },
    {
      question:
        "Quelles informations sont utiles lors de la releve ou de l'arrivee des secours ?",
      choices: [
        "Ce qui a ete observe chez la victime",
        "Le geste deja realise",
        "Les risques persistants sur la zone",
        "Des commentaires sans lien avec la situation",
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "Une transmission factuelle et utile permet une prise en charge plus rapide et plus juste.",
      timeLimit: 65,
    },
      {
      question: "L'acronyme SST signifie :",
      choices: [
        "Système de Sécurité au Travail",
        "Sauveteur Secouriste du Travail",
        "Service Sécurité Technique",
        "Salarié Spécialisé Travail",
      ],
      answer: [1],
      explanation:
        "Le SST est un Sauveteur Secouriste du Travail formé pour porter secours à toute victime sur le lieu de travail.",
    },
    {
      question: "L'acronyme PAS du SST signifie :",
      choices: [
        "Protéger, Alerter, Secourir",
        "Prévenir, Avertir, Soigner",
        "Préparer, Agir, Stopper",
        "Pratiquer, Apprendre, Surveiller",
      ],
      answer: [0],
      explanation:
        "Le réflexe SST suit la chaîne : Protéger (la zone et la victime), Examiner, Alerter (les secours), Secourir.",
    },
    {
      question: "La première étape de l'action du SST face à un accident est :",
      choices: [
        "Examiner la victime",
        "Protéger la zone et la victime du suraccident",
        "Alerter le 18",
        "Pratiquer la RCP",
      ],
      answer: [1],
      explanation:
        "Protéger est toujours la première étape : supprimer le danger persistant pour éviter le suraccident, sans s'exposer soi-même.",
    },
    {
      question: "Le numéro d'appel du SAMU en France est :",
      choices: [
        "15",
        "17",
        "18",
        "112",
      ],
      answer: [0],
      explanation:
        "Le 15 = SAMU (médical). Le 18 = pompiers (incendie, secours). Le 17 = police. Le 112 = numéro européen unique d'urgence.",
    },
    {
      question: "Le numéro d'appel des pompiers en France est :",
      choices: [
        "15",
        "17",
        "18",
        "114",
      ],
      answer: [2],
      explanation:
        "Le 18 = pompiers. Le 112 (européen) renvoie vers le service le plus pertinent. Le 114 est le numéro accessible aux personnes sourdes ou malentendantes.",
    },
    {
      question: "Pour vérifier la conscience d'une victime, le SST doit :",
      choices: [
        "La secouer fortement",
        "Lui poser une question simple et lui prendre la main en lui demandant de la serrer",
        "Vérifier le pouls carotidien d'abord",
        "Pratiquer immédiatement la RCP",
      ],
      answer: [1],
      explanation:
        "Le contrôle de la conscience se fait par une question simple et une consigne motrice. On ne secoue jamais (risque cervical).",
    },
    {
      question: "Une victime inconsciente qui respire doit être placée :",
      choices: [
        "En décubitus dorsal (sur le dos)",
        "Assise contre un mur",
        "En position latérale de sécurité (PLS)",
        "Debout maintenue par un témoin",
      ],
      answer: [2],
      explanation:
        "La PLS maintient les voies aériennes libres et évite l'inhalation en cas de vomissement, le temps de l'arrivée des secours.",
    },
    {
      question: "Pour un adulte en arrêt cardiaque, le rythme de compressions thoraciques de la RCP est :",
      choices: [
        "50 à 60 par minute",
        "100 à 120 par minute",
        "150 à 180 par minute",
        "200 par minute",
      ],
      answer: [1],
      explanation:
        "Le rythme recommandé est de 100 à 120 compressions par minute, à environ 5-6 cm de profondeur, sur la moitié inférieure du sternum.",
    },
    {
      question: "Le ratio compressions/insufflations en RCP adulte (par un secouriste formé) est :",
      choices: [
        "15 / 2",
        "30 / 2",
        "5 / 1",
        "100 / 0",
      ],
      answer: [1],
      explanation:
        "Le ratio standard est 30 compressions pour 2 insufflations. Sans formation, on peut faire la RCP avec compressions seules.",
    },
    {
      question: "Le DAE est :",
      choices: [
        "Un Dispositif d'Alerte Electronique",
        "Un Défibrillateur Automatisé Externe",
        "Un Détecteur Automatique d'Évacuation",
        "Un Document d'Aide à l'Examen",
      ],
      answer: [1],
      explanation:
        "Le DAE délivre un choc électrique pour rétablir un rythme cardiaque normal. Il est utilisable par toute personne formée ou non, en suivant les consignes vocales de l'appareil.",
    },
    {
      question: "Face à un saignement abondant, le SST doit en priorité :",
      choices: [
        "Faire boire la victime",
        "Comprimer directement la plaie avec un tissu propre",
        "Désinfecter la plaie",
        "Élever le membre",
      ],
      answer: [1],
      explanation:
        "La compression directe de la plaie est le geste de référence pour stopper l'hémorragie, suivie d'un appel aux secours.",
    },
    {
      question: "Face à une brûlure superficielle, la conduite à tenir est :",
      choices: [
        "Percer les cloques",
        "Refroidir à l'eau tempérée (15-25 °C) pendant 10 à 20 minutes",
        "Appliquer du beurre",
        "Appliquer une glace directemen