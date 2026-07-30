export type QuizQuestion = {
  question: string;
  choices: string[];
  answer: number[];
  multiple?: boolean;
  explanation?: string;
  /** Courte étiquette du chapitre de cours correspondant (ex: "Consignation", "EPI") */
  chapterLabel?: string;
  timeLimit?: number;
  contextLabel?: string;
  imagePath?: string;
  imageAlt?: string;
  /**
   * Si true, une mauvaise réponse à cette question entraîne un échec immédiat
   * quel que soit le score global (question éliminatoire).
   */
  eliminatory?: boolean;
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
      chapterLabel: "Rôles & habilitation",
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
      chapterLabel: "Rôles & habilitation",
      explanation:
        "Le B1 désigne l'exécutant électricien travaillant dans un cadre préparé et encadré.",
      timeLimit: 40,
    },
    {
      question: "Le chargé de travaux en basse tension est généralement titulaire du symbole :",
      choices: ["B1", "B2", "BR", "BC"],
      answer: [1],
      chapterLabel: "Rôles & habilitation",
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
      chapterLabel: "Rôles & habilitation",
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
      chapterLabel: "Rôles & habilitation",
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
      chapterLabel: "Consignation",
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
      chapterLabel: "Consignation",
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
      chapterLabel: "Consignation",
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
      chapterLabel: "Anomalies & écarts",
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
      chapterLabel: "Anomalies & écarts",
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
      chapterLabel: "EPI & moyens",
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
      chapterLabel: "Rôles & habilitation",
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
      chapterLabel: "EPI & moyens",
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
      chapterLabel: "Urgence électrique",
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
      chapterLabel: "Préparation du chantier",
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
      chapterLabel: "Préparation du chantier",
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
      chapterLabel: "Coordination & interfaces",
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
      chapterLabel: "Coordination & interfaces",
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
      chapterLabel: "Coordination & interfaces",
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
      chapterLabel: "Voisinage & zones",
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
      chapterLabel: "Consignation",
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
      chapterLabel: "Consignation",
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
      chapterLabel: "Anomalies & écarts",
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
      chapterLabel: "Préparation du chantier",
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
      chapterLabel: "Anomalies & écarts",
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
      chapterLabel: "Consignation",
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
      chapterLabel: "Coordination & interfaces",
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
      chapterLabel: "Consignation",
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
      chapterLabel: "Rôles & habilitation",
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
      chapterLabel: "Voisinage & zones",
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
      chapterLabel: "Consignation",
      explanation:
        "La consignation fiable repose sur l'identification, la traçabilité et la vérification réelle, pas sur une confiance aveugle dans le repérage seul.",
      timeLimit: 75,
    },
    {
      question: "À partir de quelle intensité le courant alternatif devient-il dangereux pour le corps humain ?",
      choices: ["1 mA", "10 mA", "50 mA", "100 mA"],
      answer: [1],
      chapterLabel: "Risque électrique",
      explanation:
        "Le courant électrique est dangereux à partir de 10 mA en courant alternatif. En courant continu, le seuil est de 40 mA.",
      timeLimit: 40,
    },
    {
      question: "Quelle est la tension de contact dangereuse en milieu sec, en courant alternatif ?",
      choices: ["12 V", "25 V", "50 V", "120 V"],
      answer: [2],
      chapterLabel: "Risque électrique",
      explanation:
        "En milieu sec (résistance du corps : 5 000 Ω), la tension dangereuse est U = R × I = 5 000 × 0,01 = 50 V en courant alternatif.",
      timeLimit: 40,
    },
    {
      question: "En milieu humide, quelle est la tension de contact dangereuse en courant alternatif ?",
      choices: ["12 V", "25 V", "50 V", "120 V"],
      answer: [1],
      chapterLabel: "Risque électrique",
      explanation:
        "En milieu humide (résistance réduite à 2 500 Ω), la tension dangereuse descend à 25 V en courant alternatif.",
      timeLimit: 40,
    },
    {
      question: "Quelle est la résistance conventionnelle du corps humain en milieu sec ?",
      choices: ["500 Ω", "1 000 Ω", "2 500 Ω", "5 000 Ω"],
      answer: [3],
      chapterLabel: "Risque électrique",
      explanation:
        "La norme fixe la résistance conventionnelle du corps humain à 5 000 Ω en local ou emplacement sec, et à 2 500 Ω en milieu mouillé.",
      timeLimit: 45,
    },
    {
      question: "Qu'est-ce que la tétanisation ?",
      choices: [
        "Un arrêt cardiaque provoqué par le courant",
        "Une paralysie des muscles due au passage du courant",
        "Une brûlure interne causée par un arc électrique",
        "Une perte de conscience sans séquelles",
      ],
      answer: [1],
      chapterLabel: "Risque électrique",
      explanation:
        "La tétanisation est une paralysie des muscles. La personne peut succomber par asphyxie du fait du blocage de la cage thoracique.",
      timeLimit: 45,
    },
    {
      question: "La fibrillation ventriculaire provoquée par un choc électrique cède-t-elle spontanément ?",
      choices: [
        "Oui, après quelques secondes de repos",
        "Non, elle ne cède jamais spontanément — seul un défibrillateur peut y remédier",
        "Oui, si on applique une respiration artificielle",
        "Non, seulement si on coupe immédiatement le courant",
      ],
      answer: [1],
      chapterLabel: "Risque électrique",
      explanation:
        "La fibrillation ventriculaire est la contraction anarchique du muscle cardiaque. Elle ne cède jamais spontanément : seuls des contre-chocs électriques délivrés par un défibrillateur peuvent la corriger.",
      timeLimit: 50,
    },
    {
      question: "Quelles sont les quatre étapes obligatoires d'une consignation électrique ?",
      choices: [
        "Séparation de l'ouvrage",
        "Condamnation en position d'ouverture",
        "Identification de l'ouvrage",
        "Vérification d'Absence de Tension (VAT) + MALT et CCT",
      ],
      answer: [0, 1, 2, 3],
      multiple: true,
      chapterLabel: "Consignation",
      explanation:
        "La consignation électrique comprend 4 phases : 1. Séparation, 2. Condamnation, 3. Identification, 4. VAT + MALT/CCT. Une étape manquante invalide la consignation.",
      timeLimit: 65,
    },
    {
      question: "Lors d'une VAT (Vérification d'Absence de Tension), quand faut-il vérifier le bon fonctionnement du vérificateur ?",
      choices: [
        "Avant la mesure uniquement",
        "Après la mesure uniquement",
        "Avant ET après la mesure",
        "Une fois par semaine, indépendamment des mesures",
      ],
      answer: [2],
      chapterLabel: "Consignation",
      explanation:
        "Le VAT doit être vérifié avant et après chaque mesure pour s'assurer qu'il fonctionne correctement au moment où la mesure a été réalisée.",
      timeLimit: 45,
    },
    {
      question: "Dans quel(s) cas la mise à la terre et en court-circuit (MALT et CCT) est-elle obligatoire en basse tension ?",
      choices: [
        "Toujours, quelle que soit l'installation",
        "En cas de risque de tension induite, de ré-alimentation ou avec des câbles de grande longueur",
        "Uniquement en haute tension",
        "Jamais en basse tension",
      ],
      answer: [1],
      chapterLabel: "Consignation",
      explanation:
        "La MALT et CCT n'est pas obligatoire en BT, sauf en cas de risque de tension induite, risque de ré-alimentation ou avec des câbles de grandes longueurs.",
      timeLimit: 55,
    },
    {
      question: "L'habilitation BR entraîne automatiquement quelles autres habilitations ?",
      choices: [
        "B0 et B1 ainsi que B1V",
        "B2 et BC",
        "Toutes les habilitations BT",
        "Aucune autre habilitation",
      ],
      answer: [0],
      chapterLabel: "Rôles & habilitation",
      explanation:
        "L'habilitation BR entraîne les habilitations B0, B1 et B1V, mais elle n'entraîne pas les habilitations B2 et BC.",
      timeLimit: 50,
    },
    {
      question: "À quoi est limitée l'habilitation BS ?",
      choices: [
        "Aux circuits terminaux en basse tension jusqu'à 400 V",
        "Aux interventions en haute tension uniquement",
        "À toutes les opérations BT sans restriction de tension",
        "À la consignation des armoires industrielles",
      ],
      answer: [0],
      chapterLabel: "Rôles & habilitation",
      explanation:
        "L'habilitation BS est limitée à 400 V et aux circuits terminaux. Elle ne permet pas de remplacer un disjoncteur dans une armoire industrielle.",
      timeLimit: 50,
    },
    {
      question: "En NF C 18-510, comment se définit la zone de voisinage simple en basse tension (BT) ?",
      choices: [
        "Zone au-delà de 3 m des pièces nues sous tension — aucune contrainte particulière",
        "Zone entre la Distance Minimale d'Approche (DMA = 0,30 m) et 3 m des pièces nues sous tension BT — accès habilité requis",
        "Zone réservée exclusivement à la haute tension",
        "Zone sans limite fixe, définie librement par le chargé de travaux",
      ],
      answer: [1],
      chapterLabel: "Voisinage & zones",
      explanation:
        "La NF C 18-510 définit une zone de voisinage simple BT entre la DMA (0,30 m) et 3 m des pièces nues sous tension. Dans cette zone, un personnel habilité est requis et des précautions spécifiques s'appliquent. En deçà de 0,30 m (DMA), on entre dans la zone de travail sous tension qui exige une habilitation et des équipements adaptés.",
      timeLimit: 55,
    },
    {
      question: "Quel est l'indice de protection minimal du matériel en basse tension (BT) pour assurer la protection contre les contacts directs ?",
      choices: ["IP 1X", "IP 2X", "IP 3X", "IP 5X"],
      answer: [1],
      chapterLabel: "Voisinage & zones",
      explanation:
        "L'indice minimum de protection du matériel est IP 2X en Basse Tension et IP 3X en Haute Tension. Ils assurent la protection contre les contacts directs.",
      timeLimit: 40,
    },
    {
      question: "Quelle est la périodicité de recyclage recommandée pour une habilitation électrique ?",
      choices: ["1 an", "2 ans", "3 ans", "5 ans"],
      answer: [2],
      chapterLabel: "Rôles & habilitation",
      explanation:
        "La périodicité de recyclage, sauf contre-indication, est fixée à 3 ans pour les habilitations électriques.",
      timeLimit: 35,
    },
    {
      question: "Selon l'analyse des accidents d'origine électrique, quelle est la principale cause identifiée ?",
      choices: [
        "Matériel défectueux (12 %)",
        "Formation insuffisante (12 %)",
        "Mode opératoire inapproprié (31 %)",
        "Application incomplète des procédures (15 %)",
      ],
      answer: [2],
      chapterLabel: "Risque électrique",
      explanation:
        "L'analyse des accidents électriques montre que le mode opératoire inapproprié est la première cause (31 %), suivi de la méconnaissance des risques (30 %), l'application incomplète des procédures (15 %), et à égalité formation insuffisante et matériel (12 % chacun).",
      timeLimit: 50,
    },
    {
      question: "Quels équipements de protection individuelle (EPI) sont obligatoires lors de travaux au voisinage en électricité ?",
      choices: [
        "Gants isolants d'électricien adaptés à la tension",
        "Écrans faciaux anti-UV",
        "Casque isolant si risque de contact électrique à la tête",
        "Chaussures de sécurité isolantes",
      ],
      answer: [0, 1, 2, 3],
      multiple: true,
      chapterLabel: "EPI & moyens",
      explanation:
        "Les EPI obligatoires en voisinage comprennent les gants isolants (conformes aux normes, vérifiés avant et après usage), les écrans faciaux anti-UV, le casque isolant si risque à la tête, et les chaussures isolantes. Les objets métalliques personnels (bracelets, chaînes) sont interdits.",
      timeLimit: 65,
    },
    {
      question: "Quelle est la Distance Minimale d'Approche (DMA) autour d'une pièce nue sous tension en basse tension (BT), en champ libre ?",
      choices: ["0,05 m", "0,30 m", "1 m", "3 m"],
      answer: [1],
      chapterLabel: "Voisinage & zones",
      explanation:
        "La DMA en BT est de 0,30 m autour d'une pièce nue sous tension. En haute tension, cette distance est nettement plus grande. Un titulaire H0B0 ne doit jamais franchir cette limite.",
      timeLimit: 40,
    },
    {
      question: "En milieu humide (condensation, transpiration), quelle est la tension de contact dangereuse en courant alternatif ?",
      choices: ["50 V", "25 V", "12 V", "120 V"],
      answer: [1],
      chapterLabel: "Risque électrique",
      explanation:
        "En milieu humide, la résistance du corps chute à environ 2 500 Ω. La tension dangereuse descend à 25 V en AC. En milieu sec elle est de 50 V, et en milieu mouillé de 12 V seulement.",
      timeLimit: 40,
    },
    {
      question: "En milieu mouillé (eau ruisselante, immersion partielle), quelle est la tension de contact dangereuse en courant alternatif ?",
      choices: ["50 V", "25 V", "12 V", "30 V"],
      answer: [2],
      chapterLabel: "Risque électrique",
      explanation:
        "En milieu mouillé, la résistance du corps est très faible. La tension dangereuse en AC tombe à 12 V. Toute installation électrique dans un tel environnement présente un risque maximal même à très basse tension.",
      timeLimit: 40,
    },
    {
      question: "De quelle couleur est le grillage avertisseur signalant la présence d'une canalisation électrique enterrée ?",
      choices: ["Jaune", "Vert", "Rouge", "Bleu"],
      answer: [2],
      chapterLabel: "Voisinage & zones",
      explanation:
        "Le grillage avertisseur rouge signale les canalisations électriques enterrées. Jaune = gaz, vert = eau potable, bleu = eau non potable, blanc = télécommunications. Découvrir ce grillage lors d'un terrassement impose l'arrêt immédiat.",
      timeLimit: 35,
    },
    {
      question: "Quelle est la Distance Minimale d'Approche (DMA) autour d'une pièce nue sous tension en basse tension (BT) ?",
      choices: ["0,05 m", "0,30 m", "1 m", "3 m"],
      answer: [1],
      chapterLabel: "Voisinage & zones",
      explanation:
        "La DMA en basse tension est fixée à 0,30 m par la NF C 18-510. En deçà de cette limite, on entre dans la zone de travail sous tension : des habilitations spécifiques, des EPI adaptés et des protections contre les pièces nues sont obligatoires. Cette distance ne se présume pas, elle se mesure physiquement sur le terrain avant toute opération.",
      timeLimit: 40,
    },
    {
      question: "Quel est le rôle du surveillant de sécurité électrique dans le cadre d'une opération impliquant du personnel non habilité ?",
      choices: [
        "Réaliser lui-même les travaux électriques à la place du personnel non habilité",
        "Surveiller en permanence les personnes non habilitées évoluant en zone à risque et intervenir si nécessaire",
        "Vérifier uniquement la conformité administrative des habilitations",
        "Remplacer le chargé de consignation en cas d'absence",
      ],
      answer: [1],
      chapterLabel: "Rôles & habilitation",
      explanation:
        "Le surveillant de sécurité électrique assure une surveillance permanente des personnes non habilitées travaillant en zone à risque. Il peut intervenir immédiatement en cas de dérive et fait le lien entre l'opérateur et l'organisation de prévention.",
      timeLimit: 50,
    },
    {
      question: "En courant continu, quelle est la tension de contact dangereuse en milieu sec ?",
      choices: ["50 V", "25 V", "60 V", "120 V"],
      answer: [3],
      chapterLabel: "Risque électrique",
      explanation:
        "En courant continu et milieu sec, la tension dangereuse est de 120 V (contre 50 V en AC). En milieu humide DC : 60 V, en milieu mouillé DC : 30 V. Le courant continu est moins dangereux que l'AC à tension équivalente, mais ne doit jamais être banalisé.",
      timeLimit: 40,
    },
    {
      question: "Quelle est la caractéristique principale du schéma IT (neutre impédant) ?",
      choices: [
        "Le neutre est directement mis à la terre, les masses sont protégées par un différentiel",
        "Le neutre est isolé ou relié à la terre par une haute impédance — le premier défaut ne coupe pas l'alimentation",
        "Le neutre et le conducteur de protection sont fusionnés dans un conducteur PEN",
        "Le neutre est flottant et aucune protection n'est nécessaire",
      ],
      answer: [1],
      chapterLabel: "Schémas & protection",
      explanation:
        "En schéma IT, le neutre du transformateur est isolé ou relié à la terre par une impédance élevée (500 à 1 000 Ω). Lors d'un premier défaut d'isolement, le courant de défaut reste limité et l'alimentation n'est pas interrompue — c'est l'avantage de continuité de service. Un Contrôleur Permanent d'Isolement (CPI) surveille l'installation et déclenche une alarme dès ce premier défaut.",
      timeLimit: 50,
    },
    {
      question: "Pourquoi le premier défaut en schéma IT ne coupe-t-il pas l'alimentation, contrairement aux schémas TT et TN ?",
      choices: [
        "Parce que les protections différentielles sont désactivées en IT",
        "Parce que l'impédance du neutre limite le courant de défaut à un niveau non dangereux pour les utilisateurs",
        "Parce que le schéma IT n'a pas de prise de terre sur les masses",
        "Parce que le disjoncteur général est réglé à un seuil plus élevé",
      ],
      answer: [1],
      chapterLabel: "Schémas & protection",
      explanation:
        "L'impédance entre le neutre et la terre (500 à 1 000 Ω) limite le courant circulant lors d'un premier défaut à une valeur trop faible pour déclencher les protections et trop faible pour être dangereuse. C'est ce qui permet la continuité de service dans les hôpitaux et les industries de process.",
      timeLimit: 50,
    },
    {
      question: "Sur une installation en schéma IT, le Contrôleur Permanent d'Isolement (CPI) passe en alarme rouge. Quelle est la bonne réaction du BR ?",
      choices: [
        "Neutraliser l'alarme pour travailler tranquillement, puis signaler en fin d'intervention",
        "Continuer l'intervention prévue : le premier défaut en IT n'est pas dangereux",
        "Suspendre toute intervention sur l'installation, localiser le premier défaut et l'éliminer avant de reprendre",
        "Couper l'alimentation générale immédiatement",
      ],
      answer: [2],
      chapterLabel: "Schémas & protection",
      explanation:
        "Une alarme CPI signale un premier défaut actif. Intervenir sur un autre circuit dans cet état crée un risque de deuxième défaut simultané, qui lui est potentiellement mortel (court-circuit ou électrocution entre les deux points de défaut). Il faut localiser et éliminer le premier défaut avant toute autre opération. Ne jamais neutraliser le CPI.",
      timeLimit: 55,
    },
    {
      question: "Qu'est-ce qu'un deuxième défaut simultané en schéma IT et pourquoi est-il dangereux ?",
      choices: [
        "Un deuxième disjoncteur qui tombe en même temps — risque de panne électrique étendue",
        "Deux défauts d'isolement actifs en même temps sur deux phases ou circuits différents — risque d'électrocution ou de court-circuit entre les deux points",
        "Une surtension provoquée par la présence de deux défauts — risque matériel uniquement",
        "Un double déclenchement de la protection différentielle — alarme uniquement",
      ],
      answer: [1],
      chapterLabel: "Schémas & protection",
      explanation:
        "En IT, le premier défaut est sans coupure. Mais si un deuxième défaut apparaît simultanément sur une autre phase ou un autre circuit, un courant dangereux peut circuler entre les deux points de défaut — potentiellement à travers une personne ou une masse. C'est pour cette raison que le premier défaut doit être éliminé impérativement avant de poursuivre toute intervention.",
      timeLimit: 55,
    },
    {
      question: "Dans quels types de sites rencontre-t-on typiquement le schéma IT ?",
      choices: [
        "Logements individuels et bureaux",
        "Installations résidentielles neuves après 2000",
        "Blocs opératoires, industries de process continu (sidérurgie, chimie), sites à continuité de service critique",
        "Éclairage public et voirie",
      ],
      answer: [2],
      chapterLabel: "Schémas & protection",
      explanation:
        "Le schéma IT est choisi pour garantir la continuité de service : un premier défaut ne coupe pas l'alimentation. Il est donc utilisé dans les blocs opératoires (NF C 15-211), les unités de réanimation, les industries de process où une coupure entraînerait des conséquences graves, et certains datacenters critiques.",
      timeLimit: 45,
    },
    // ── Questions BE Vérification / BE Mesurage dans contexte multi-symboles ─
    {
      question:
        "Un technicien titulaire des symboles BR et BE Mesurage est appelé pour dépanner une armoire BT. En cours d'intervention, on lui demande de mesurer les tensions de départ pour établir un bilan. Comment doit-il gérer ces deux missions ?",
      choices: [
        "Il peut enchaîner les deux missions librement puisque les deux symboles sont sur son titre",
        "Il réalise d'abord l'intervention BR, puis effectue les mesures dans le cadre BE Mesurage, en distinguant clairement les deux périmètres",
        "Le symbole BR inclut automatiquement le droit de mesurer — le BE Mesurage est superflu",
        "Il doit choisir l'une des deux missions et renoncer à l'autre",
      ],
      answer: [1],
      chapterLabel: "Rôles & habilitation",
      explanation:
        "Cumuler BR et BE Mesurage sur un titre d'habilitation est possible si les missions le justifient. Mais les deux rôles gardent leurs périmètres propres : le BR intervient et dépanne, le BE Mesurage mesure dans un cadre préparé sans intervenir. Passer de l'un à l'autre sans distinction revient à mélanger les rôles — ce qui est interdit. Chaque basculement doit être conscient, documenté et cohérent avec le titre.",
      timeLimit: 55,
    },
    {
      question:
        "Quelle est la différence fondamentale entre le rôle BR et le rôle BE Vérification / BE Mesurage ?",
      choices: [
        "Le BR peut mesurer et vérifier ; le BE peut aussi dépanner si l'anomalie est mineure",
        "Le BR intervient et peut corriger une anomalie dans son cadre ; le BE observe et mesure sans jamais modifier l'installation",
        "Les deux rôles sont équivalents mais le BE nécessite plus d'expérience",
        "Le BR est limité aux installations domestiques ; le BE couvre les installations industrielles",
      ],
      answer: [1],
      chapterLabel: "Rôles & habilitation",
      explanation:
        "C'est la frontière la plus importante à retenir : le BR (intervenant général) peut diagnostiquer et corriger une anomalie dans son cadre d'habilitation. Le BE Vérification / BE Mesurage observe, contrôle et mesure — sans jamais modifier, réparer ni consigner. Une anomalie détectée par le BE ne lui donne pas le droit d'agir : elle impose de signaler et de transmettre pour requalification vers BR, B2 ou BC selon le besoin. NF C 18-510 §11.5.2 et §11.5.3.",
      timeLimit: 50,
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
      chapterLabel: "Rôles & habilitation",
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
      chapterLabel: "Rôles & habilitation",
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
      chapterLabel: "Rôles & habilitation",
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
      chapterLabel: "Rôles & habilitation",
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
      chapterLabel: "Rôles & habilitation",
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
      chapterLabel: "Rôles & habilitation",
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
      chapterLabel: "Rôles & habilitation",
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
      chapterLabel: "Rôles & habilitation",
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
      chapterLabel: "Conduite à tenir",
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
      chapterLabel: "Conduite à tenir",
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
      chapterLabel: "Rôles & habilitation",
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
      chapterLabel: "Risque électrique",
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
      chapterLabel: "Risque électrique",
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
      chapterLabel: "Risque électrique",
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
      chapterLabel: "Risque électrique",
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
      chapterLabel: "Risque électrique",
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
      chapterLabel: "Risque électrique",
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
      chapterLabel: "Risque électrique",
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
      chapterLabel: "Domaines & matériels",
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
      chapterLabel: "Conduite à tenir",
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
      chapterLabel: "EPI & protection",
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
      chapterLabel: "EPI & protection",
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
      chapterLabel: "Rôles & habilitation",
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
      chapterLabel: "Conduite à tenir",
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
      chapterLabel: "Consignation",
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
      chapterLabel: "Consignation",
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
      chapterLabel: "Conduite à tenir",
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
      chapterLabel: "Conduite à tenir",
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
      chapterLabel: "Conduite à tenir",
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
      chapterLabel: "Rôles & habilitation",
      explanation:
        "Le bon réflexe est de décider correctement avant le geste : identifier, vérifier, agir si le cadre est respecté, sinon s’arrêter.",
      timeLimit: 45,
      imagePath: "/elearning/bsbe/bsbe-cadre.svg",
      imageAlt:
        "Synthèse du cadre de décision BS et BE Manœuvre",
    },
    {
      question:
        "Pourquoi un titulaire BS / BE Manœuvre doit-il s’entraîner sur des cas de terrain, et pas seulement mémoriser des définitions ?",
      choices: [
        "Pour vérifier la capacité à distinguer ce qui est autorisé de ce qui doit être refusé",
        "Pour remplacer l’évaluation pratique de l’employeur",
        "Pour autoriser automatiquement l’habilitation",
        "Pour éviter de parler des limites du symbole",
      ],
      answer: [0],
      chapterLabel: "Rôles & habilitation",
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
      chapterLabel: "Rôles & habilitation",
      explanation:
        "Ces quatre réflexes résument la logique opérationnelle du parcours BS / BE Manœuvre.",
      timeLimit: 75,
      imagePath: "/elearning/bsbe/bsbe-cadre.svg",
      imageAlt:
        "Réflexes opérationnels BS et BE Manœuvre",
    },

    {
      question: "Parmi les opérations suivantes, lesquelles sont autorisées dans le cadre de l'habilitation BS selon la norme NF C 18-510 ?",
      choices: [
        "Remplacement d'un fusible à l'identique sur un circuit terminal",
        "Remplacement d'une lampe ou d'un accessoire d'éclairage",
        "Remplacement d'un socle de prise de courant ou d'un interrupteur",
        "Raccordement d'un élément électrique simple",
        "Réarmement ou désarmement d'un disjoncteur de protection",
      ],
      answer: [0, 1, 2, 3, 4],
      multiple: true,
      chapterLabel: "Rôles & habilitation",
      explanation:
        "Ces cinq opérations sont précisément celles autorisées par la norme NF C 18-510 pour le symbole BS. Elles doivent toujours être réalisées hors tension, sur un circuit repéré, dans la limite de 400 V et sur des circuits terminaux.",
      timeLimit: 70,
    },
    {
      question: "Quelles sont les cinq conditions cumulatives requises pour qu'une opération soit qualifiée d'intervention BT élémentaire BS ?",
      choices: [
        "Basse tension (≤ 1 000 V AC)",
        "Intensité ≤ 63 A",
        "Courte durée sans interruption",
        "Circuit protégé contre les surintensités",
        "Analyse de risques sur place possible",
      ],
      answer: [0, 1, 2, 3, 4],
      multiple: true,
      chapterLabel: "Rôles & habilitation",
      explanation:
        "Ces cinq conditions sont cumulatives. Si l'une fait défaut — par exemple l'intensité dépasse 63 A ou l'analyse sur place est impossible — il ne s'agit plus d'une intervention BS mais de travaux nécessitant une organisation différente.",
      timeLimit: 75,
    },
    {
      question: "Quels sont les trois types de manœuvres que le titulaire BE Manœuvre peut être amené à réaliser ?",
      choices: [
        "Manœuvres de consignation",
        "Manœuvres d'exploitation",
        "Manœuvres d'urgence",
        "Manœuvres de diagnostic",
      ],
      answer: [0, 1, 2],
      multiple: true,
      chapterLabel: "Rôles & habilitation",
      explanation:
        "La norme distingue : les manœuvres de consignation (selon instruction du chargé de consignation), les manœuvres d'exploitation (conduite normale), et les manœuvres d'urgence (procédure établie à l'avance). Le diagnostic improvisé n'est jamais une manœuvre autorisée.",
      timeLimit: 60,
    },
    {
      question: "Le BS peut-il effectuer une consignation complète pour le compte d'un autre opérateur comme le ferait un chargé de consignation BC ?",
      choices: [
        "Oui, si l'opération est simple et en BT",
        "Oui, à condition d'être supervisé par un BR",
        "Non, la consignation pour compte d'autrui relève exclusivement du BC",
        "Non, sauf si l'employeur le précise dans le titre d'habilitation",
      ],
      answer: [2],
      chapterLabel: "Consignation",
      explanation:
        "Le BS peut réaliser une mise hors tension pour son propre compte dans le cadre de son intervention élémentaire, mais il ne peut pas consigner pour le compte d'un autre opérateur. Cette responsabilité appartient exclusivement au chargé de consignation BC.",
      timeLimit: 50,
    },
    {
      question: "Lors d'une manœuvre BE Manœuvre, un disjoncteur retombe immédiatement après réarmement et une légère odeur se dégage. Quelle est la conduite à tenir ?",
      choices: [
        "Réarmer une deuxième fois en surveillant le tableau",
        "Réarmer en forçant légèrement le levier pour maintenir le contact",
        "Suspendre la manœuvre, ne pas réenclencher et transmettre à la personne compétente",
        "Ouvrir le coffret pour observer le disjoncteur en détail",
      ],
      answer: [2],
      chapterLabel: "Conduite à tenir",
      explanation:
        "Une odeur et un retombé immédiat signalent une anomalie. Le réarmement répété aggrave le risque. La conduite attendue est l'arrêt immédiat de la manœuvre et la transmission au niveau compétent (BR ou B2).",
      timeLimit: 50,
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
      chapterLabel: "EPI & protection",
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
      chapterLabel: "EPI & protection",
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
      chapterLabel: "EPI & protection",
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
      chapterLabel: "EPI & protection",
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
      chapterLabel: "Domaines & matériels",
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
      chapterLabel: "Domaines & matériels",
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
      chapterLabel: "Domaines & matériels",
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
      chapterLabel: "Domaines & matériels",
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
      chapterLabel: "Domaines & matériels",
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
      chapterLabel: "Domaines & matériels",
      explanation:
        "Le second chiffre 4 signifie 'protection contre les projections d'eau de toutes directions'. Le premier chiffre 4 garantit la protection contre les corps solides ≥ 1 mm. L'IP 44 est le minimum standard pour une armoire en extérieur exposée aux intempéries. L'IP 33 ne couvre que les aspersions jusqu'à 60°.",
      timeLimit: 50,
      imagePath: "/elearning/bsbe/bsbe-ip.svg",
      imageAlt: "Indice IP requis selon les conditions d'installation",
    },

    // === IP2X ET FUSION ENFERMÉE — GRADATION OPÉRATIONNELLE ===
    {
      question:
        "Un luminaire de bureau est conçu avec un indice de protection IP2X sur les parties sous tension. Qui peut remplacer l'ampoule SANS mise hors tension et SANS habilitation BS ?",
      choices: [
        "Uniquement un électricien habilité B1",
        "Un personnel formé non habilité, sous réserve d'une formation au risque électrique",
        "Personne : toute intervention sur un luminaire en service est interdite",
        "Uniquement le responsable de site",
      ],
      answer: [1],
      chapterLabel: "Domaines & matériels",
      explanation:
        "La NF C 18-510 § 10 prévoit une exception pour les matériels IP2X : si les parties actives sous tension sont inaccessibles au toucher (protection mécanique IP2X), un personnel formé au risque électrique mais non habilité peut effectuer le remplacement sous tension. L'habilitation BS n'est pas requise dans ce cas précis.",
      timeLimit: 50,
    },
    {
      question:
        "Peut-on remplacer un fusible à fusion enfermée sans VAT (Vérification d'Absence de Tension) et sans habilitation BS, si le porte-fusible est conçu à cet effet ?",
      choices: [
        "Non, la VAT est toujours obligatoire avant toute manipulation d'un fusible",
        "Oui, un personnel B0 ou formé non habilité peut effectuer cette opération si le fusible et son support sont conçus pour une manipulation en charge",
        "Oui, mais uniquement avec une habilitation BS",
        "Non, seul un électricien habilité H peut manipuler des fusibles",
      ],
      answer: [1],
      chapterLabel: "Domaines & matériels",
      explanation:
        "Un fusible à fusion enfermée (cartouche cylindrique type gG, aM…) monté dans un porte-fusible adapté est conçu pour être manipulé sans risque de contact avec les parties actives. Dans ce cas précis, la NF C 18-510 § 10 autorise un personnel B0 ou formé non habilité à procéder au remplacement sans VAT préalable. L'habilitation BS n'est pas requise.",
      timeLimit: 55,
    },
    {
      question:
        "Scénario : un collègue titulaire de l'habilitation B0 remplace une ampoule sur un luminaire standard (sans indice IP2X sur les parties sous tension), sans mettre le circuit hors tension ni demander une habilitation BS. Quelle est la situation ?",
      choices: [
        "Correcte : le B0 peut intervenir sur tous les matériels d'éclairage en service",
        "Incorrecte : sans IP2X avéré sur les parties actives, le contact accidentel est possible ; la mise hors tension et l'habilitation BS sont requises",
        "Correcte : l'ampoule est basse tension, donc sans risque",
        "Incorrecte : seul un chef d'équipe peut remplacer une ampoule",
      ],
      answer: [1],
      chapterLabel: "Domaines & matériels",
      explanation:
        "L'exception IP2X s'applique uniquement si les parties actives sont effectivement inaccessibles au toucher (protection certifiée IP2X). Sur un luminaire standard sans cette protection, le risque de contact direct est réel. L'habilitation BS et la mise hors tension (VAT incluse) sont obligatoires. Le B0 n'est pas habilité à intervenir dans ce contexte.",
      timeLimit: 60,
    },

    // === SCÉNARIOS BS/BE AVANCÉS ===
    {
      question:
        "Scénario — Énergies résiduelles : Un technicien BS vient de couper le disjoncteur d’un circuit d’éclairage. La VAT indique bien l’absence de tension. Il remarque que le câblage comprend un condensateur de compensation du facteur de puissance. Que doit-il faire avant de toucher les conducteurs ?",
      choices: [
        "Intervenir immédiatement : la VAT confirme l’absence de tension, les condensateurs sont sans danger",
        "Attendre que le condensateur se décharge naturellement et vérifier à nouveau la tension aux bornes du condensateur avant de toucher",
        "Courts-circuiter le condensateur avec la main pour accélérer la décharge",
        "Appeler le fabricant pour connaître le temps de décharge",
      ],
      answer: [1],
      chapterLabel: "Conduite à tenir",
      explanation:
        "Un condensateur peut rester chargé plusieurs secondes à minutes après coupure, même si la VAT sur les conducteurs indique zéro. Il existe un risque de choc électrique par la décharge du condensateur. Il faut attendre la décharge complète (durée indiquée sur la fiche technique ou la plaque) et vérifier l’absence de tension directement aux bornes avant de toucher. Ne jamais court-circuiter manuellement.",
      timeLimit: 55,
    },
    {
      question:
        "Scénario — Situation imprévue : Un opérateur BS remplace un interrupteur dans un local technique. Une fois le circuit coupé et la VAT effectuée, il découvre que le câblage est différent du schéma fourni : trois fils au lieu de deux, dont un non identifié. Quelle est la bonne conduite à tenir ?",
      choices: [
        "Continuer : la VAT a confirmé l’absence de tension sur les fils accessibles",
        "Identifier le fil inconnu avec un simple test tactile rapide",
        "Arrêter immédiatement l’intervention, baliser la zone et rendre compte à la hiérarchie ou au chargé de travaux",
        "Couper tous les disjoncteurs du tableau pour être sûr puis continuer",
      ],
      answer: [2],
      chapterLabel: "Conduite à tenir",
      explanation:
        "Le BS intervient dans un cadre strictement défini. Toute situation imprévue — câblage non conforme au schéma, fil inconnu, doute sur l’identification — impose l’arrêt immédiat. L’opérateur BS n’a ni l’habilitation ni la compétence pour analyser un câblage modifié ou inconnu. Il balise, rend compte et attend l’intervention d’une personne habilitée (B1, BR…).",
      timeLimit: 55,
    },
    {
      question:
        "Scénario — Document obsolète : Le bon de travail remis à l’opérateur BS mentionne un tableau T3 dans le couloir de production. Sur place, le tableau porte désormais l’étiquette T3-BIS. L’opérateur hésite. Que fait-il ?",
      choices: [
        "Couper le disjoncteur qu’il pense être le bon sur T3-BIS et faire la VAT",
        "Suspendre l’intervention, ne toucher à aucun organe, contacter le responsable pour clarifier l’identification avant de commencer",
        "Faire la VAT sur tous les disjoncteurs de T3-BIS pour trouver le bon",
        "Ignorer la différence : le bon de travail est légalement valable même si le repérage a changé",
      ],
      answer: [1],
      chapterLabel: "Conduite à tenir",
      explanation:
        "Le repérage est une condition fondamentale de la sécurité BS. Si le document de travail ne correspond pas à la réalité terrain (étiquette différente, numérotation modifiée), l’identification n’est pas certaine. Il faut suspendre sans toucher à aucun organe et demander une mise à jour du bon de travail ou une confirmation auprès du responsable. Intervenir avec un repérage douteux expose au risque de couper le mauvais circuit ou d’intervenir sur un circuit actif.",
      timeLimit: 55,
    },
    {
      question:
        "Scénario — Multi-victimes : Dans un atelier, un opérateur est victime d’une électrisation et est retrouvé immobile, en contact avec une armoire électrique. Deux collègues BS se précipitent pour l’aider. Quelle est la première action correcte ?",
      choices: [
        "Attraper immédiatement la victime pour l’éloigner de l’armoire",
        "Appeler le 15 ou le 18 avant toute chose",
        "Couper l’alimentation électrique avant de toucher la victime, puis déclencher l’alerte",
        "Alerter uniquement le chef d’équipe",
      ],
      answer: [2],
      chapterLabel: "Conduite à tenir",
      explanation:
        "Toucher une victime en contact avec une source électrique sous tension expose le sauveteur à une électrisation secondaire. La première action est toujours de couper l’alimentation (disjoncteur, interrupteur…) AVANT tout contact avec la victime. Une fois le circuit hors tension, on alerte les secours (15 ou 18 selon le contexte) et on prodigue les premiers secours (PLS, RCP si nécessaire).",
      timeLimit: 50,
    },
    {
      question:
        "Scénario — Périmètre BS : Un opérateur BS doit remplacer un fusible cylindrique (type gG) sur un tableau BT. Le circuit est coupé, condamné, identifié et la VAT confirme l’absence de tension. En ouvrant l’armoire, il constate que le porte-fusible est visiblement brûlé et fissuré. Que fait-il ?",
      choices: [
        "Remplacer quand même le fusible : l’essentiel est que le circuit soit hors tension",
        "Remplacer le fusible et signaler l’état du porte-fusible dans le compte rendu après l’intervention",
        "Ne pas remplacer le fusible, remettre en place les protections de l’armoire, consigner le problème et rendre compte à la hiérarchie",
        "Remplacer le porte-fusible par lui-même car il a l’habilitation BS",
      ],
      answer: [2],
      chapterLabel: "Conduite à tenir",
      explanation:
        "Le BS autorise uniquement le remplacement à l’identique dans un périmètre défini. Un porte-fusible brûlé ou fissuré constitue une dégradation matérielle non prévue : ce n’est plus un remplacement à l’identique, et le risque de mise en danger lors de la remise sous tension est réel. L’opérateur BS doit arrêter, consigner le problème par écrit et rendre compte. La réparation du porte-fusible relève d’un électricien habilité (B1, BR).",
      timeLimit: 55,
    },
    {
      question:
        "Scénario — Condamnation insuffisante : Un opérateur BS identifie le bon disjoncteur, le coupe, effectue la VAT. Il n’applique pas de cadenas car il ne dispose pas de cadenas individuel. Un collègue re-enclenche le disjoncteur 30 secondes plus tard, pensant qu’il était ouvert par erreur. Quelle régle aurait évité cet accident ?",
      choices: [
        "Afficher un panneau ‘Ne pas toucher’ sur le tableau",
        "Demander à un collègue de surveiller le tableau pendant l’intervention",
        "Apposer un cadenas individuel sur le disjoncteur AVANT la VAT, et ne jamais intervenir sans condamnation physique",
        "Appeler le responsable de site pour qu’il supervise la manœuvre",
      ],
      answer: [2],
      chapterLabel: "Consignation",
      explanation:
        "La condamnation est une étape obligatoire de la mise hors tension. Elle consiste à rendre impossible le réenclenchement accidentel par un tiers, grâce à un cadenas individuel dont l’opérateur possède seul la clé. Un panneau ou une surveillance humaine sont insuffisants : seule une condamnation physique (cadenas) garantit que personne d’autre ne peut remettre sous tension. La VAT doit être effectuée APRÈS la condamnation.",
      timeLimit: 55,
    },
    {
      question:
        "Scénario — Habilitation périmée : Un opérateur présente un titre d’habilitation BS daté de 4 ans. Son responsable lui demande d’effectuer un remplacement d’interrupteur. L’habilitation est-elle valable ?",
      choices: [
        "Oui, une habilitation BS est valable à vie une fois délivrée",
        "Oui si l’opérateur n’a jamais eu d’accident depuis",
        "Non : l’habilitation doit être renouvelée périodiquement (en général tous les 3 ans) ou après changement de poste, d’installation ou d’absence prolongée",
        "Oui, sauf si l’employeur a modifié les consignes de sécurité",
      ],
      answer: [2],
      chapterLabel: "Rôles & habilitation",
      explanation:
        "L’habilitation n’est pas permanente. La NF C 18-510 prévoit un réexamen périodique, généralement tous les 3 ans, ainsi qu’une réévaluation après changement de poste, modification significative de l’installation ou absence prolongée. L’employeur est responsable de maintenir à jour les habilitations de ses salariés. Intervenir avec une habilitation expirée est une faute de l’employeur et expose l’opérateur à un risque non couvert.",
      timeLimit: 50,
    },
    {
      question:
        "Scénario — Limites du BE Manœuvre : Un responsable demande à un opérateur BE Manœuvre de manœuvrer un disjoncteur de protection moteur pour tester le redémarrage après une surcharge. Le disjoncteur est dans une armoire non repérée sur le plan fourni. L’opérateur doit-il exécuter l’ordre ?",
      choices: [
        "Oui, le BE Manœuvre est autorisé à manœuvrer tous les organes de coupure",
        "Oui si le responsable est présent pour surveiller",
        "Non : le BE Manœuvre ne peut manœuvrer que des organes identifiés sur un document de travail ou des consignes écrites. Un organe non repéré sort du périmètre autorisé",
        "Oui, manœuvrer un disjoncteur est toujours sans risque avec le BE Manœuvre",
      ],
      answer: [2],
      chapterLabel: "Rôles & habilitation",
      explanation:
        "Le BE Manœuvre n’autorise que des manœuvres prévues sur des organes clairement identifiés dans les consignes du site ou le bon de travail. Si l’organe n’est pas repéré ou ne figure pas dans les documents de référence, l’opérateur ne peut pas procéder. Il doit demander une identification formelle (mise à jour du plan, étiquetage) avant toute action. Manœuvrer un disjoncteur inconnu expose à une coupure sur un équipement non prévu.",
      timeLimit: 55,
    },

    // === QUESTIONS ÉLIMINATOIRES BS/BE ===
    {
      question:
        "Un opérateur BS doit intervenir sur une prise de courant endommagée. Avant toute opération, quelle étape est obligatoire ?",
      choices: [
        "Vérifier visuellement que l’installation est hors tension puis commencer",
        "Consigner l’alimentation (couper, condamner, vérifier l’absence de tension avec un VAT approprié) avant d’intervenir",
        "Porter des gants isolants et procéder si l’opération est rapide",
        "Demander à un collègue de surveiller pendant l’intervention",
      ],
      answer: [1],
      eliminatory: true,
      chapterLabel: "Consignation",
      explanation:
        "QUESTION ÉLIMINATOIRE — Intervenir sur une installation sans consignation préalable est la première cause d’accidents électriques mortels. La consignation complète (coupure, condamnation, vérification d’absence de tension par VAT homologué, signalisation) est obligatoire avant toute opération BS.",
      timeLimit: 45,
    },
    {
      question:
        "Vous êtes habilité BS. Une installation est consignée par votre collègue qui a posé son cadenas de condamnation. Il est absent momentanément. Pouvez-vous retirer son cadenas pour accéder à l’installation ?",
      choices: [
        "Oui, si vous êtes certain que la consignation est correcte",
        "Oui, en urgence si votre intervention est urgente",
        "Non : seul celui qui a posé le cadenas peut le retirer, sauf procédure formelle d’urgence validée par le responsable électrique",
        "Oui, si vous avez le même niveau d’habilitation",
      ],
      answer: [2],
      eliminatory: true,
      chapterLabel: "Consignation",
      explanation:
        "QUESTION ÉLIMINATOIRE — Le cadenas de condamnation est personnel et nominatif. Seule la personne qui l’a posé peut le retirer, garantissant qu’elle est bien dégagée de l’installation. Retirer le cadenas d’un autre expose à l’électrocution de ce collègue. Une procédure d’urgence formelle et documentée peut exister, mais jamais par décision unilatérale.",
      timeLimit: 45,
    },
    {
      question:
        "Un opérateur habilité BS effectue un remplacement de composant. La vérification d’absence de tension (VAT) avec son multimètre indique 0 V. Doit-il vérifier l’état du multimètre avant et après la mesure ?",
      choices: [
        "Non, une mesure à 0 V suffit à confirmer l’absence de tension",
        "Oui : le multimètre doit être testé sur une source connue avant et après la mesure pour confirmer son bon fonctionnement",
        "Non, si l’appareil est récent et en bon état apparent",
        "Oui uniquement si l’installation est en haute tension",
      ],
      answer: [1],
      eliminatory: true,
      chapterLabel: "Consignation",
      explanation:
        "QUESTION ÉLIMINATOIRE — Un multimètre défaillant peut afficher 0 V sur une installation sous tension. La NF C 18-510 exige de tester l’appareil de mesure sur une source connue avant et après la VAT. Ne pas effectuer ce contrôle peut conduire à intervenir sur une installation sous tension.",
      timeLimit: 50,
    },
    {
      question:
        "Lors d’une opération BS, vous constatez que le schéma de l’installation fourni ne correspond pas à l’état réel. Que faites-vous ?",
      choices: [
        "Procéder en adaptant votre intervention à la situation réelle",
        "Arrêter l’intervention, signaler l’écart documentaire et attendre une mise à jour ou une clarification formelle",
        "Continuer si l’écart concerne uniquement le câblage et non les protections",
        "Demander au client de valider oralement l’état réel de l’installation",
      ],
      answer: [1],
      eliminatory: true,
      chapterLabel: "Documents & préparation",
      explanation:
        "QUESTION ÉLIMINATOIRE — Un schéma non conforme à la réalité signifie que les risques réels ne sont pas maîtrisés. Toute intervention sur une installation dont la documentation est erronée expose à des mises sous tension imprévues. L’arrêt et la demande de mise à jour documentaire sont obligatoires.",
      timeLimit: 50,
    },
    {
      question:
        "Un habilité BS doit intervenir près d’une jeu de barres HTA restant sous tension dans la même armoire. La Distance Limite d’Investigation (DLI) en HTA est de :",
      choices: [
        "0,30 m",
        "0,60 m",
        "1 m",
        "2 m",
      ],
      answer: [1],
      eliminatory: true,
      chapterLabel: "Distances réglementaires",
      explanation:
        "QUESTION ÉLIMINATOIRE — La DLI (Distance Limite d’Investigation) en HTA est de 0,60 m (NF C 18-510/A2). Pénétrer dans cette zone sans protection adaptée expose à l’arc électrique. Connaître cette valeur est une exigence de sécurité critique pour tout opérateur BS/BE intervenant en environnement HTA.",
      timeLimit: 40,
    },
    {
      question:
        "Un habilité BE Vérification réalise une mesure de tension et détecte une valeur anormalement élevée. Elle pourrait indiquer un défaut d’isolement. Quelle est l’action correcte ?",
      choices: [
        "Effectuer une mesure complémentaire pour confirmer avant de signaler",
        "Signaler immédiatement le défaut au responsable et arrêter l’opération sans tenter de corriger",
        "Corriger le défaut d’isolement dans la foulée, puisque vous êtes sur place",
        "Continuer la mission et mentionner l’anomalie dans le compte rendu final",
      ],
      answer: [1],
      eliminatory: true,
      chapterLabel: "Limites BE",
      explanation:
        "QUESTION ÉLIMINATOIRE — L’habilitation BE Vérification autorise à mesurer et contrôler, pas à intervenir. Tenter de corriger un défaut d’isolement sort du périmètre de l’habilitation et expose à un accident grave. Le signalement immédiat sans intervention est la seule réponse correcte.",
      timeLimit: 50,
    },
    {
      question:
        "Un opérateur BS effectue une intervention sur une installation BT. Il doit poser un pont provisoire sur un bornier. Ce pont crée-t-il une situation de risque particulier ?",
      choices: [
        "Non, un pont provisoire est une opération courante sans risque",
        "Oui : le pont peut court-circuiter une protection ou maintenir une partie sous tension après remontée ; sa pose et son retrait doivent être documentés et contrôlés",
        "Non, si l’installation est consignée avant la pose du pont",
        "Oui uniquement si le bornier est en HTA",
      ],
      answer: [1],
      eliminatory: true,
      chapterLabel: "Consignation",
      explanation:
        "QUESTION ÉLIMINATOIRE — Un pont provisoire peut court-circuiter une protection différentielle, un coupe-surintensité ou maintenir une alimentation de sécurité. Sa pose crée une situation non standard qui doit être tracée, contrôlée et retirée avant toute remise en service. L’oubli d’un pont provisoire est une cause connue d’accidents graves.",
      timeLimit: 55,
    },
    {
      question:
        "Après votre intervention BS, avant de lever la consignation, vous constatez qu’un outil est resté à l’intérieur de l’armoire. Que faites-vous ?",
      choices: [
        "Lever la consignation et récupérer l’outil rapidement avant la remise sous tension",
        "Informer le donneur d’ordre que l’outil peut rester en place temporairement",
        "Maintenir la consignation, récupérer l’outil et vérifier l’état de l’installation avant de lever la consignation",
        "Lever la consignation si l’outil est en plastique et ne présente pas de danger apparent",
      ],
      answer: [2],
      eliminatory: true,
      chapterLabel: "Consignation",
      explanation:
        "QUESTION ÉLIMINATOIRE — Tout outil oublié dans une armoire constitue un risque de court-circuit ou de bloc mécanique lors de la remise sous tension. La consignation doit être maintenue, l’outil récupéré et l’état de l’installation vérifié avant toute levée. La remise sous tension avec un outil présent est une faute grave.",
      timeLimit: 45,
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
      chapterLabel: "Habilitation",
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
      chapterLabel: "Habilitation",
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
      chapterLabel: "Habilitation",
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
      chapterLabel: "Symboles",
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
      chapterLabel: "Symboles",
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
      chapterLabel: "Symboles",
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
      chapterLabel: "Symboles",
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
      chapterLabel: "Symboles",
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
      chapterLabel: "Voisinage",
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
      chapterLabel: "Voisinage",
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
      chapterLabel: "Voisinage",
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
      chapterLabel: "Autorisation de chantier",
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
      chapterLabel: "Voisinage",
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
      chapterLabel: "Voisinage",
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
      chapterLabel: "Voisinage",
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
      chapterLabel: "Voisinage",
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
      chapterLabel: "Domaines de tension",
      explanation:
        "En courant alternatif, la basse tension va au-delà de 50 V et jusqu’à 1 000 V.",
      timeLimit: 50,
    },
    {
      question:
        "En courant alternatif, la haute tension débute classiquement au-delà de :",
      choices: ["25 V", "50 V", "400 V", "1 000 V"],
      answer: [3],
      chapterLabel: "Domaines de tension",
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
      chapterLabel: "Risque électrique",
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
      chapterLabel: "Risque électrique",
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
      chapterLabel: "Zones d’approche",
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
      chapterLabel: "EPI & comportement",
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
      chapterLabel: "EPI & comportement",
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
      chapterLabel: "EPI & comportement",
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
      chapterLabel: "Locaux & accès",
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
      chapterLabel: "Locaux & accès",
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
      chapterLabel: "Conduite à tenir",
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
      chapterLabel: "Locaux & accès",
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
      chapterLabel: "Zones d'approche",
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
      chapterLabel: "Zones d'approche",
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
      chapterLabel: "Risque électrique",
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
      chapterLabel: "Risque électrique",
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
      chapterLabel: "Risque électrique",
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
      chapterLabel: "Risque électrique",
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
      chapterLabel: "Conduite à tenir",
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
      chapterLabel: "Conduite à tenir",
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
      chapterLabel: "Conduite à tenir",
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
      chapterLabel: "Conduite à tenir",
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
      chapterLabel: "Conduite à tenir",
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
      chapterLabel: "Habilitation",
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
      chapterLabel: "Habilitation",
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
      chapterLabel: "Habilitation",
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
      chapterLabel: "Zones d’approche",
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
      chapterLabel: "Locaux & accès",
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
      chapterLabel: "Conduite à tenir",
      explanation:
        "L’improvisation est incompatible avec la prévention du risque électrique.",
      timeLimit: 90,
    },

    // === RÉSEAUX ENTERRÉS & DISTANCES HT (H0B0) ===
    {
      question:
        "Lors d’un terrassement, vous découvrez un grillage avertisseur. De quelle couleur est-il s’il signale la présence d’une canalisation électrique enterrée ?",
      choices: [
        "Jaune",
        "Vert",
        "Rouge",
        "Bleu",
      ],
      answer: [2],
      chapterLabel: "Zones d’approche",
      explanation:
        "Le grillage avertisseur rouge signale les canalisations électriques enterrées. Jaune = gaz, vert = eau potable, bleu = eau non potable, blanc = télécommunications. Découvrir ce grillage lors d’un terrassement impose l’arrêt immédiat des travaux mécaniques et l’information du responsable de chantier.",
      timeLimit: 40,
    },
    {
      question:
        "Quelle est la Distance Limite de Voisinage Simple (DLVS) en Haute Tension A (1 kV à 50 kV) autour d’une pièce nue sous tension ?",
      choices: [
        "0,30 m",
        "1 m",
        "3 m",
        "5 m",
      ],
      answer: [2],
      chapterLabel: "Zones d'approche",
      explanation:
        "La DLVS en HTA (1 kV à 50 kV) est de 3 m. La Distance Limite de Voisinage Renforcé (DLVR) en HTA est de 2 m. En HTB (> 50 kV), la DLVS monte à 5 m. Un titulaire H0V ne peut pénétrer en zone de voisinage HT que dans un cadre strictement organisé avec autorisation et surveillance appropriées.",
      timeLimit: 45,
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
      chapterLabel: "Locaux & accès",
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
      chapterLabel: "Locaux & accès",
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
      chapterLabel: "Locaux & accès",
      explanation:
        "En extérieur exposé aux intempéries, le second chiffre de l’indice IP doit être au minimum 4, garantissant la protection contre les projections d’eau de toutes directions. Un second chiffre de 3 (aspersion 60°) ne suffit pas pour une installation pleinement exposée à la pluie.",
      timeLimit: 45,
      imagePath: "/elearning/bsbe/bsbe-ip.svg",
      imageAlt: "Indice IP — 2e chiffre et protection contre les liquides",
    },

    // === QUESTIONS ÉLIMINATOIRES H0B0 ===
    {
      question:
        "Une personne est électrisée et toujours en contact avec la partie sous tension. Quelle est la première action à effectuer ?",
      choices: [
        "Saisir la victime par le bras pour l'éloigner rapidement",
        "Supprimer ou faire supprimer le courant électrique avant tout contact avec la victime",
        "Appeler le SAMU puis attendre à distance",
        "Arroser la zone pour protéger les intervenants",
      ],
      answer: [1],
      eliminatory: true,
      chapterLabel: "Conduite à tenir",
      explanation:
        "QUESTION ÉLIMINATOIRE — Toucher une personne électrisée encore en contact avec la source constitue un suraccident mortel. La première action est toujours de supprimer le courant. Toute autre réponse engage la vie de l'intervenant.",
      timeLimit: 40,
    },
    {
      question:
        "Vous découvrez un départ de feu sur un tableau électrique encore sous tension. Quel moyen d'extinction est strictement interdit ?",
      choices: [
        "Extincteur CO₂ (neige carbonique)",
        "Extincteur poudre ABC",
        "Eau ou extincteur eau",
        "Couverture anti-feu sur les câbles",
      ],
      answer: [2],
      eliminatory: true,
      chapterLabel: "Conduite à tenir",
      explanation:
        "QUESTION ÉLIMINATOIRE — L'eau est conductrice de l'électricité. Son utilisation sur une installation sous tension provoque un électrocution immédiate de l'intervenant. Seuls les extincteurs adaptés aux feux électriques (CO₂, poudre) ou les coupes-circuit d'alimentation préalables sont autorisés.",
      timeLimit: 40,
    },
    {
      question:
        "Vous êtes habilité B0 uniquement. Peut-on vous demander d'effectuer un remplacement de fusible dans un tableau électrique ?",
      choices: [
        "Oui, si l'opération est rapide et que le tableau est accessible",
        "Oui, si un collègue surveille à proximité",
        "Non, cette opération dépasse les limites de l'habilitation B0",
        "Oui, s'il n'y a pas d'électricien disponible",
      ],
      answer: [2],
      eliminatory: true,
      chapterLabel: "Habilitation",
      explanation:
        "QUESTION ÉLIMINATOIRE — L'habilitation B0 / H0 / H0V n'autorise aucune opération électrique. Remplacer un fusible, réarmer un disjoncteur ou intervenir à l'intérieur d'un tableau dépasse strictement les limites de ce niveau d'habilitation. L'urgence ou l'absence de personnel qualifié ne modifie pas cette règle.",
      timeLimit: 45,
    },
    {
      question:
        "Un balisage interdit l'accès à une zone de travaux électriques. Vous devez y passer pour effectuer votre mission non électrique. Que faites-vous ?",
      choices: [
        "Franchir rapidement la zone en restant vigilant",
        "Déplacer brièvement le balisage et le remettre en place ensuite",
        "Ne pas pénétrer et demander l'autorisation à la personne en charge",
        "Entrer si aucun électricien n'est visible dans la zone",
      ],
      answer: [2],
      eliminatory: true,
      chapterLabel: "Locaux & accès",
      explanation:
        "QUESTION ÉLIMINATOIRE — Franchir ou déplacer un balisage de sécurité sans autorisation expose à un accident grave sur une installation sous tension. L'autorisation formelle de la personne en charge est obligatoire avant tout franchissement.",
      timeLimit: 45,
    },
    {
      question:
        "Vous remarquez qu'un câble d'alimentation présente une gaine fortement endommagée avec le conducteur apparent. Quelle action est correcte ?",
      choices: [
        "Couvrir le câble avec du ruban adhésif et continuer l'activité",
        "Signaler immédiatement l'anomalie, condamner si possible l'accès et ne pas utiliser l'équipement",
        "Continuer à utiliser le câble en évitant de le toucher",
        "Attendre la fin de la journée pour signaler l'anomalie",
      ],
      answer: [1],
      eliminatory: true,
      chapterLabel: "Conduite à tenir",
      explanation:
        "QUESTION ÉLIMINATOIRE — Un conducteur apparent constitue un risque d'électrocution immédiat. Le signalement et la mise hors service sont obligatoires. Aucun palliatif (ruban adhésif, prudence, délai) n'est acceptable sur une anomalie de ce type.",
      timeLimit: 45,
    },
    {
      question:
        "Un collègue non habilité vous demande d'ouvrir une armoire électrique pour lui montrer comment fonctionne l'installation. Que faites-vous ?",
      choices: [
        "Accepter si vous êtes habilité B0 et que l'armoire est accessible",
        "Accepter uniquement si l'armoire est hors tension",
        "Refuser : ouvrir une armoire électrique dépasse les limites de l'habilitation B0",
        "Accepter si le collègue ne touche rien",
      ],
      answer: [2],
      eliminatory: true,
      chapterLabel: "Habilitation",
      explanation:
        "QUESTION ÉLIMINATOIRE — L'ouverture d'une enveloppe électrique (armoire, coffret, boîte de jonction) est une opération électrique qui dépasse les limites de l'habilitation B0. Cette action expose aux parties actives et constitue un acte interdit pour ce niveau.",
      timeLimit: 40,
    },
    {
      question:
        "Votre responsable vous demande oralement de « juste vérifier » une prise endommagée dans un atelier. Vous êtes habilité H0 uniquement. Que faites-vous ?",
      choices: [
        "Procéder si la vérification visuelle n'implique pas de toucher les pièces nues",
        "Refuser et orienter vers une personne habilitée pour les opérations électriques",
        "Vérifier rapidement puis signaler au responsable",
        "Accepter si vous avez de l'expérience en électricité",
      ],
      answer: [1],
      eliminatory: true,
      chapterLabel: "Habilitation",
      explanation:
        "QUESTION ÉLIMINATOIRE — L'habilitation H0 n'autorise aucune vérification d'installation électrique, même visuelle et sans contact apparent. La demande orale ou l'expérience ne modifie pas les limites légales de l'habilitation. La bonne réponse est de refuser et d'orienter vers un personnel qualifié.",
      timeLimit: 45,
    },
    {
      question:
        "Lors d'une intervention de maintenance non électrique, vous devez utiliser une échelle métallique près d'une armoire électrique ouverte. Quelle précaution s'impose ?",
      choices: [
        "Positionner l'échelle parallèlement à l'armoire pour s'en rapprocher davantage",
        "Ne pas utiliser d'échelle métallique à proximité de parties sous tension accessibles ; utiliser un escabeau isolant ou demander la consignation préalable",
        "Travailler rapidement pour minimiser le temps d'exposition",
        "L'armoire étant au même niveau, il n'y a pas de précaution particulière",
      ],
      answer: [1],
      eliminatory: true,
      chapterLabel: "Zones d'approche",
      explanation:
        "QUESTION ÉLIMINATOIRE — Une échelle métallique constitue un conducteur. Son utilisation à proximité de parties actives accessibles expose à un arc électrique ou à un contact direct. La règle est d'utiliser un matériel isolant adapté ou d'exiger la consignation de l'installation avant toute intervention à proximité.",
      timeLimit: 50,
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
      chapterLabel: "Bases du feu",
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
      chapterLabel: "Alerte & évacuation",
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
      chapterLabel: "Alerte & évacuation",
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
      chapterLabel: "Moyens d'extinction",
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
      chapterLabel: "Moyens d'extinction",
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
      chapterLabel: "Moyens d'extinction",
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
      chapterLabel: "Moyens d'extinction",
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
      chapterLabel: "Moyens d’extinction",
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
      chapterLabel: "Réglementation",
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
    {
      question:
        "Quel article du Code du travail impose à l'employeur d'organiser une formation à la prévention du risque incendie pour ses salariés ?",
      choices: [
        "R4227-39",
        "L4121-1",
        "R4216-1",
        "L2281-1",
      ],
      answer: [0],
      explanation:
        "L'article R4227-39 fixe le contenu de la formation incendie et impose sa réalisation au moins annuellement, en précisant le rôle de chacun en cas d'incendie.",
      timeLimit: 40,
    },
    {
      question:
        "Parmi les causes industrielles d'incendie, lesquelles sont les plus fréquentes dans les locaux de travail ?",
      choices: [
        "Installation électrique en mauvais état ou dépourvue de protection (fusible, disjoncteur)",
        "Projection de particules en fusion (disqueuse, tronçonneuse, soudure)",
        "Électricité statique non dissipée",
        "Erreur de conception du plan d'évacuation",
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "Les causes industrielles majeures sont les défauts d'installation électrique, la projection de particules en fusion lors de travaux par points chauds et l'électricité statique. La conception du plan d'évacuation relève de l'organisation, non d'une cause d'incendie.",
      timeLimit: 60,
    },
    {
      question:
        "À quelle distance minimale d'attaque doit-on se placer pour utiliser un extincteur à eau ou à poudre face à un feu ?",
      choices: [
        "Entre 1,5 m et 2,5 m",
        "Moins de 0,5 m pour maximiser l'efficacité",
        "Plus de 5 m pour des raisons de sécurité",
        "À la même distance quelle que soit la taille du feu",
      ],
      answer: [0],
      explanation:
        "La distance d'attaque recommandée est de 1,5 à 2,5 m. En extérieur, on se positionne de profil pour éviter la chaleur rayonnante. Se placer trop près expose aux retours de flamme.",
      timeLimit: 40,
    },
    {
      question:
        "Quelle est la durée approximative de fonctionnement d'un extincteur CO₂ de 2 kg ?",
      choices: [
        "Environ 8 secondes",
        "Environ 30 secondes",
        "Environ 2 minutes",
        "Environ 5 minutes",
      ],
      answer: [0],
      explanation:
        "Un extincteur CO₂ de 2 kg a une durée de fonctionnement d'environ 8 secondes. La courte durée impose d'agir sans hésiter dès le début du feu.",
      timeLimit: 35,
    },
    {
      question:
        "Pour quels types de feux l'extincteur CO₂ (dioxyde de carbone) est-il particulièrement adapté ?",
      choices: [
        "Feux en présence d'installations électriques sous tension",
        "Feux de matières solides avec braises (classe A)",
        "Feux de métaux (classe D)",
        "Feux de cuisines (huiles et graisses, classe F)",
      ],
      answer: [0],
      explanation:
        "Le CO₂ est l'agent extincteur de référence pour les feux électriques (transformateurs, tableaux, ordinateurs) car il est non conducteur et ne laisse aucun résidu. Il est peu adapté aux feux de classe A car il ne refroidit pas.",
      timeLimit: 45,
    },
    {
      question:
        "Les colonnes sèches et colonnes humides implantées dans les bâtiments sont destinées à :",
      choices: [
        "Faciliter l'intervention des sapeurs-pompiers en amenant l'eau rapidement à tous les niveaux",
        "Alimenter les extincteurs automatiques (sprinklers) du bâtiment",
        "Servir de réservoir d'eau de secours pour les occupants",
        "Remplacer les robinets d'incendie armés (RIA) dans les ERP",
      ],
      answer: [0],
      explanation:
        "Les colonnes sèches (alimentées par les pompiers à l'extérieur) et humides (sous pression permanente) sont des tuyauteries fixes et rigides destinées à faciliter l'acheminement de l'eau à tous les niveaux du bâtiment par les sapeurs-pompiers.",
      timeLimit: 45,
    },
    {
      question:
        "Quelle norme certifie la conformité d'un extincteur portatif, matérialisée par une estampille argentée NF ?",
      choices: [
        "NF EN 3",
        "NF EN 54",
        "NF S 61-970",
        "NF C 15-100",
      ],
      answer: [0],
      explanation:
        "La norme NF EN 3 régit les extincteurs portatifs. L'estampille argentée NF, délivrée par AFNOR, atteste la conformité à cette norme et aux exigences complémentaires techniques.",
      timeLimit: 40,
    },
    {
      question:
        "Lors d'une brûlure thermique grave (cloques, zones blanches ou noires), quelle conduite à tenir est correcte ?",
      choices: [
        "Refroidir avec de l'eau tempérée (15-25 °C) pendant 5 à 10 min, puis alerter les secours sans retirer les vêtements collés",
        "Percer les cloques pour évacuer le liquide et appliquer un antiseptique",
        "Enduire de beurre ou de crème hydratante pour calmer la douleur",
        "Appliquer de la glace directement sur la brûlure pour arrêter la progression",
      ],
      answer: [0],
      explanation:
        "Le refroidissement à l'eau tempérée (ni froide, ni glacée) pendant au minimum 5 min limite l'extension en profondeur. On ne perce jamais les cloques, on n'applique rien de gras et on ne retire pas les vêtements collés. Pour une brûlure grave, alerter rapidement les secours.",
      timeLimit: 55,
    },
    {
      question:
        "La réaction au feu d'un matériau est classée selon le système européen Euroclass. Quelle classe correspond à un matériau totalement non combustible (équivalent de l'ancien classement M0) ?",
      choices: [
        "Classe F (le niveau le plus mauvais — non classé)",
        "Classe A1 (le meilleur — aucune contribution au feu ni aux fumées)",
        "Classe B (contribution très limitée — ex-M1)",
        "Classe E (inflammable mais sans propagation rapide — ex-M3)",
      ],
      answer: [1],
      explanation:
        "Le système Euroclass remplace les anciens classements M0→M4. Classe A1 = totalement non combustible (béton, acier, briques) — ex-M0. A2 = non combustible avec contribution minime aux fumées. B, C, D = contribution croissante au feu (ex-M1/M2). E = inflammable sans propagation rapide (ex-M3). F = non classé / le plus mauvais (ex-M4). La réaction au feu indique comment un matériau contribue à l'éclosion et à la propagation d'un incendie.",
      timeLimit: 40,
    },
    {
      question:
        "Pour la résistance au feu des éléments de structure et de compartimentage, que signifie la notation 'REI 60' ?",
      choices: [
        "Résistance à 60 bars de pression hydraulique pendant 6 heures",
        "R (stabilité mécanique) + E (étanchéité aux flammes et gaz chauds) + I (isolation thermique) pendant 60 minutes",
        "Résistance Éprouvée International valable 60 ans",
        "Refroidissement Effectif Intensif pendant 60 minutes au minimum",
      ],
      answer: [1],
      explanation:
        "La notation européenne de résistance au feu combine : R = capacité portante (résistance structurelle mécanique), E = étanchéité aux flammes et aux gaz chauds (pas de passage de flamme ni de gaz), I = isolation thermique (la face non exposée ne dépasse pas 140 °C en hausse de température). REI 60 = plancher résistant 60 min aux 3 critères. Les anciens classements français : SF (stabilité au feu) → R ; PF (pare-feu) → REI ; CF (coupe-feu) → EI. Un EI 30 remplace l'ancien PF ½ heure.",
      timeLimit: 40,
    },
    {
      question:
        "Quels gaz toxiques produits par la combustion représentent le principal danger des fumées d'incendie pour les personnes ?",
      choices: [
        "L'oxygène (O₂) et l'azote (N₂) — asphyxiants par dilution",
        "Le monoxyde de carbone (CO) et l'acide cyanhydrique (HCN) — toxiques mortels à faible concentration, sans odeur détectable",
        "Le dioxyde de carbone (CO₂) uniquement — suffocant par déplacement de l'oxygène",
        "L'acide chlorhydrique (HCl) uniquement — irritant mais non mortel à court terme",
      ],
      answer: [1],
      explanation:
        "Les fumées contiennent du CO (monoxyde de carbone — incolore, inodore, mortel à 1 000 ppm en 1 heure, se fixe 250 fois mieux sur l'hémoglobine que l'O₂), du HCN (acide cyanhydrique — extrêmement toxique, issu des matières azotées), du CO₂ (asphyxiant à haute concentration), et selon les matériaux brûlés : HCl (PVC — irritant et corrosif), HF (Teflon), acroléine (bois). Le CO est la première cause de décès en incendie, bien avant les flammes.",
      timeLimit: 40,
    },
    {
      question:
        "Qu'est-ce qu'une colonne sèche dans un bâtiment et à partir de quelle hauteur est-elle obligatoire dans les ERP ?",
      choices: [
        "Une canalisation sous pression permanente d'eau (réseau humide) alimentant les RIA — obligatoire dès le 1er étage",
        "Une canalisation fixe rigide non alimentée en eau en temps normal — les pompiers y raccordent leur motopompe depuis l'extérieur — obligatoire si plancher haut > 18 mètres",
        "Un extracteur de fumées vertical installé dans les cages d'escalier — obligatoire dès 10 mètres de hauteur",
        "Un réseau de sprinklers à déclenchement manuel — obligatoire dans les ERP de 1re catégorie",
      ],
      answer: [1],
      explanation:
        "La colonne sèche est une canalisation fixe et rigide installée dans les cages d'escalier et couloirs, non alimentée en eau en exploitation normale. Les pompiers y raccordent leur motopompe depuis une prise d'alimentation en façade (raccord STAUBLI normalisé) pour alimenter des prises d'incendie à chaque niveau, sans devoir monter leurs propres tuyaux. Elle est obligatoire dans les ERP dont le plancher bas du niveau le plus haut est à plus de 18 mètres du sol, et dans tous les IGH.",
      timeLimit: 40,
    },
    {
      question:
        "En réglementation ERP, qu'est-ce qu'une Unité de Passage (UP) et quelle est la largeur minimale d'un dégagement d'évacuation principal ?",
      choices: [
        "1 UP = 0,30 m (largeur d'une épaule) — dégagement minimal : 1 UP (0,30 m)",
        "1 UP = 0,60 m (largeur de passage d'une file) — dégagement normal minimal : 2 UP (1,20 m)",
        "1 UP = 0,90 m (largeur porte standard) — dégagement minimal : 1 UP (0,90 m)",
        "1 UP = 1,00 m (largeur PMR) — dégagement minimal : 2 UP (2,00 m)",
      ],
      answer: [1],
      explanation:
        "En réglementation ERP, 1 Unité de Passage (UP) = 0,60 mètre. Les dégagements sont dimensionnés en UP en fonction de l'effectif à évacuer. Un dégagement principal doit comporter au minimum 2 UP (1,20 m) pour permettre le passage simultané de deux files de personnes. Une porte de 0,90 m compte pour 1 UP. Une porte de 1,40 m compte pour 2 UP. Le nombre total d'UP requis est calculé selon des tables réglementaires en fonction de l'effectif admis.",
      timeLimit: 40,
    },
    {
      question: "Quels sont les signes précurseurs d'un emballement thermique d'une batterie lithium-ion ?",
      choices: [
        "Gonflement visible, odeur âcre, sifflement, chaleur anormale, dégagement de fumée",
        "Uniquement une fumée noire dense avec flammes visibles",
        "Une légère chaleur de surface sans autres signes",
        "Des étincelles uniquement lors de la connexion"
      ],
      answer: [0],
      explanation:
        "L'emballement thermique d'une batterie lithium-ion peut se manifester avant toute flamme visible : gonflement du boîtier, sifflement ou crépitement, odeur âcre, chaleur anormale, fumée blanche ou grise. Ces signes précurseurs imposent une réaction immédiate : isoler, alarmer, évacuer sans toucher ni déplacer la batterie.",
      chapterLabel: "Batteries & PFAS",
    },
    {
      question: "Une batterie lithium-ion est gonflée et chaude. Quelle est la bonne conduite à tenir ?",
      choices: [
        "L'isoler sur place, ne pas la déplacer, alerter et attendre les consignes",
        "La déplacer à l'extérieur du bâtiment pour limiter les risques",
        "La plonger dans un seau d'eau pour la refroidir",
        "Vérifier son état en l'ouvrant pour évaluer le dommage interne"
      ],
      answer: [0],
      explanation:
        "Une batterie gonflée est en phase de pré-emballement. La déplacer risque de déclencher l'emballement par contrainte mécanique. L'ouvrir est extrêmement dangereux (gaz inflammables et toxiques sous pression). La plonger dans l'eau sans protocole est inefficace et dangereux. La bonne conduite : laisser en place, isoler la zone, ne pas toucher, alerter et attendre les secours ou la personne habilitée.",
      chapterLabel: "Batteries & PFAS",
    },
    {
      question: "Vous utilisez un extincteur CO₂ sur un feu de batterie lithium-ion et les flammes disparaissent. La situation est-elle définitivement maîtrisée ?",
      choices: [
        "Non — le CO₂ agit sur les flammes visibles mais ne refroidit pas le cœur de la batterie. Une reprise est possible.",
        "Oui — dès que les flammes sont éteintes, le risque est maîtrisé.",
        "Oui — le CO₂ éteint la réaction chimique interne de la batterie.",
        "Non — il faut immédiatement utiliser de la poudre ABC pour finaliser l'extinction."
      ],
      answer: [0],
      explanation:
        "Le CO₂ (et la poudre) peuvent stopper les flammes visibles, mais ils ne refroidissent pas le cœur de la batterie. La réaction interne peut reprendre minutes ou heures après une extinction apparente. Seul un refroidissement massif et prolongé à l'eau (intervention des pompiers) peut réduire durablement le risque. Après toute extinction de batterie, la zone reste dangereuse et les secours doivent être alertés.",
      chapterLabel: "Batteries & PFAS",
    },
    {
      question: "Quel(s) principe(s) s'applique(nt) à un local de charge de batteries lithium-ion ?",
      choices: [
        "Local ventilé, dégagé de combustibles, chargeurs adaptés, recharge surveillée",
        "Fenêtres fermées pour éviter l'humidité, recharge possible sans surveillance",
        "Stocker les batteries pleines et vides au même endroit sans distinction",
        "Les multiprises standards conviennent pour plusieurs batteries simultanées"
      ],
      answer: [0],
      explanation:
        "Un local de charge de batteries lithium-ion doit être ventilé (évacuation des gaz), sans combustibles à proximité immédiate, équipé de chargeurs adaptés aux batteries concernées, et la recharge ne doit pas se faire sans surveillance dans les zones sensibles. Les multiprises surchargées et les chargeurs non adaptés sont des causes fréquentes d'incendie.",
      chapterLabel: "Batteries & PFAS",
    },
    {
      question: "Peut-on utiliser librement des extincteurs mousse AFFF (fluorés) lors d'exercices d'entraînement ?",
      choices: [
        "Non — les mousses fluorées/PFAS font l'objet de restrictions progressives. Les rejets doivent être maîtrisés et les alternatives sans fluor privilégiées.",
        "Oui — les extincteurs mousse sont homologués et peuvent être utilisés sans restriction en exercice.",
        "Oui, à condition de déclencher à l'extérieur uniquement.",
        "Non, uniquement en cas de feu réel."
      ],
      answer: [0],
      explanation:
        "Les mousses contenant des composés fluorés (PFAS) font l'objet d'une restriction réglementaire européenne progressive. En pratique : ne pas utiliser les mousses AFFF lors d'exercices ou d'essais sans maîtrise du rejet, vérifier les fiches techniques des produits présents sur site, privilégier les alternatives sans fluor disponibles. Les eaux d'extinction contenant des émulseurs fluorés sont des déchets à gérer.",
      chapterLabel: "Batteries & PFAS",
    },
    {
      question: "Que doit vérifier un responsable sécurité sur les extincteurs mousse présents sur son site ?",
      choices: [
        "La fiche technique du produit pour savoir si la mousse contient des composés fluorés (PFAS) et si des alternatives sans fluor existent",
        "Uniquement la date de péremption et la pression de l'extincteur",
        "Le numéro de série pour s'assurer de la conformité NF EN 3",
        "La couleur de la bande pour identifier la classe de feu couverte"
      ],
      answer: [0],
      explanation:
        "Les extincteurs mousse peuvent contenir des émulseurs fluorés (PFAS) soumis à restriction. Vérifier la fiche technique permet de savoir si le produit est concerné, d'anticiper le remplacement par une alternative sans fluor, et d'éviter des rejets non maîtrisés lors d'essais. La date de péremption, la pression et la conformité NF sont importantes mais ne renseignent pas sur la composition de la mousse.",
      chapterLabel: "Batteries & PFAS",
    },
  ],
  sprinkler: [
    {
      question:
        "Comment fonctionne une installation sprinkler en situation d'incendie ?",
      choices: [
        "Toutes les têtes se déclenchent automatiquement en même temps",
        "Seules les têtes soumises à une chaleur suffisante s'ouvrent",
        "Le système agit localement au plus près du foyer",
        "Le sprinkler remplace toute autre organisation incendie du site",
      ],
      answer: [1, 2],
      multiple: true,
      explanation:
        "Le sprinkler agit localement et précocement. Il ne remplace ni l'organisation du site ni les autres moyens de sécurité incendie.",
      chapterLabel: "Principe sprinkler",
      timeLimit: 70,
      contextLabel:
        "Une installation sprinkler doit être lue comme une protection technique intégrée à une stratégie incendie plus large.",
      imagePath: "/images/installation-sprinkler.png",
      imageAlt:
        "schéma de principe d'une installation sprinkler avec réserve d'eau, pompe, poste de contrôle et réseau",
    },
    {
      question:
        "Quels éléments appartiennent typiquement à une installation sprinkler ?",
      choices: [
        "Des têtes sprinkler",
        "Un réseau de tuyauteries",
        "Un poste de contrôle et une source d'eau",
        "Uniquement un extincteur mobile",
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "Le sprinkler repose sur un ensemble cohérent: têtes, réseau, contrôle, alimentation en eau et alarmes.",
      chapterLabel: "Composants",
      timeLimit: 70,
      contextLabel:
        "Le réseau sprinkler comprend plusieurs parties visibles ou techniques qu'un exploitant doit savoir reconnaître.",
      imagePath: "/images/reseau-sprinkler.jpg",
      imageAlt:
        "réseau sprinkler dans un bâtiment avec poste de contrôle, réseaux et sources d'eau",
    },
    {
      question:
        "Quelles anomalies doivent être prises au sérieux en exploitation sprinkler ?",
      choices: [
        "Une vanne fermée ou mal positionnée",
        "Une pression anormale",
        "Une alarme non traitée",
        "Une corrosion ou une fuite visible",
      ],
      answer: [0, 1, 2, 3],
      multiple: true,
      explanation:
        "Une petite anomalie apparente peut dégrader fortement la protection réelle du site.",
      chapterLabel: "Maintenance",
      timeLimit: 80,
    },
    {
      question:
        "Pourquoi une modification de stockage ou d'exploitation doit-elle alerter sur un site protégé par sprinkler ?",
      choices: [
        "Parce qu'elle peut remettre en cause l'adéquation entre le risque et la protection installée",
        "Parce qu'un sprinkler est universel et ne dépend jamais du risque réel",
        "Parce que la hauteur, la densité ou la nature des produits peuvent changer la situation",
        "Parce que seule la présence des têtes suffit à garantir la conformité en toute circonstance",
      ],
      answer: [0, 2],
      multiple: true,
      explanation:
        "Le sprinkler reste efficace dans un cadre de conception et d'exploitation donné, qu'il faut préserver dans le temps.",
      chapterLabel: "Réglementation",
      timeLimit: 75,
    },
    {
      question:
        "Quels référentiels sont fréquemment rencontrés dans l'univers sprinkler selon les sites ?",
      choices: [
        "EN 12845",
        "APSAD R1",
        "NFPA 13",
        "FM Global Data Sheets",
      ],
      answer: [0, 1, 2, 3],
      multiple: true,
      explanation:
        "Ces référentiels peuvent s'appliquer selon le contexte technique, contractuel ou assurantiel du site.",
      chapterLabel: "Réglementation",
      timeLimit: 80,
      contextLabel:
        "Le monde sprinkler s'appuie sur plusieurs référentiels techniques selon le site protégé et ses exigences d'assurance.",
      imagePath: "/images/installation-sprinkler.png",
      imageAlt:
        "schéma pédagogique d'une installation sprinkler dans un bâtiment logistique ou industriel",
    },
    {
      question:
        "En cas d'indisponibilité temporaire d'une partie de l'installation sprinkler, quel raisonnement est le plus juste ?",
      choices: [
        "Il faut tracer la situation et appliquer les mesures compensatoires prévues",
        "Une vanne fermée n'a pas d'importance si elle est remise plus tard",
        "L'organisation du site doit savoir qui alerter et qui autorise",
        "Aucune action n'est nécessaire tant qu'il n'y a pas de départ de feu",
      ],
      answer: [0, 2],
      multiple: true,
      explanation:
        "Une indisponibilité sprinkler se pilote avec méthode, traçabilité et mesures compensatoires adaptées.",
      chapterLabel: "Maintenance",
      timeLimit: 75,
    },
    {
      question:
        "Dans un entrepôt ou une logique ICPE 1510, quelle affirmation est correcte ?",
      choices: [
        "Le sprinkler fait partie d'un ensemble plus large de prescriptions et d'organisation",
        "La seule présence du sprinkler suffit à régler le risque incendie d'un entrepôt",
        "Les changements d'exploitation doivent être analysés",
        "Le compartimentage et l'organisation du site restent sans importance",
      ],
      answer: [0, 2],
      multiple: true,
      explanation:
        "Le sprinkler est un maillon d'une stratégie plus large qui dépend aussi du stockage, des cellules, de l'organisation et du risque réel.",
      chapterLabel: "Réglementation",
      timeLimit: 75,
    },
    {
      question:
        "Quel comportement traduit une bonne maturité d'exploitation sprinkler ?",
      choices: [
        "Considérer un défaut chronique comme normal",
        "Suivre les essais et contrôles périodiques",
        "Traiter et suivre les anomalies jusqu'au retour à la normale",
        "Laisser les accès aux organes se dégrader avec le temps",
      ],
      answer: [1, 2],
      multiple: true,
      explanation:
        "La qualité d'exploitation se voit dans la surveillance, la traçabilité et le traitement effectif des écarts.",
      chapterLabel: "Maintenance",
      timeLimit: 65,
    },
    {
      question:
        "Quelles règles d'exploitation sont justes concernant les têtes sprinkler ?",
      choices: [
        "Elles ne doivent pas être peintes ni utilisées comme support",
        "Le stockage doit respecter un dégagement suffisant sous les têtes",
        "Un obstacle ajouté sous une tête peut modifier la protection réelle",
        "Une tête heurtée ou déformée peut être ignorée si elle n'a pas coulé",
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "Les têtes sprinkler doivent rester intactes, dégagées et adaptées au volume protégé. Un choc, une peinture ou un obstacle modifient la protection.",
      chapterLabel: "Composants",
      timeLimit: 75,
      contextLabel:
        "L'exploitation quotidienne doit aussi surveiller les têtes sprinkler, leur dégagement et l'absence d'obstacle ou de choc visible.",
      imagePath: "/images/reseau-sprinkler.jpg",
      imageAlt:
        "réseau sprinkler illustrant la répartition des têtes au-dessus des zones de stockage",
    },
    {
      question:
        "Quels organes ou états doivent rester accessibles et lisibles sur une installation sprinkler ?",
      choices: [
        "Les postes de contrôle et repères associés",
        "Les vannes et leurs positions normales",
        "Les alarmes, reports ou organes utiles à l'exploitation",
        "Peu importe, si l'installation est présente depuis longtemps",
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "L'exploitant doit pouvoir lire l'état de l'installation, accéder aux organes et détecter un écart sans perdre de temps.",
      chapterLabel: "Maintenance",
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
      chapterLabel: "Principe sprinkler",
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
      chapterLabel: "Principe sprinkler",
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
      chapterLabel: "Réglementation",
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
      chapterLabel: "Composants",
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
      chapterLabel: "Composants",
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
      chapterLabel: "Maintenance",
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
      chapterLabel: "Maintenance",
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
      chapterLabel: "Réglementation",
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
      chapterLabel: "Maintenance",
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
      chapterLabel: "Maintenance",
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
      chapterLabel: "Principe sprinkler",
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
      chapterLabel: "Principe sprinkler",
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
      chapterLabel: "Réglementation",
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
      chapterLabel: "Maintenance",
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
      chapterLabel: "Maintenance",
    },
    {
      question: "Quelle est la différence entre l'APSAD R1 et l'APSAD R5 ?",
      choices: [
        "R1 : installations sprinkler (extinction automatique par eau) — R5 : Robinets d'Incendie Armés (RIA)",
        "R1 et R5 sont deux versions successives du même référentiel sprinkler (2013 et 2020)",
        "R1 : risque léger (LH) — R5 : risque élevé (HH) selon la classification EN 12845",
        "R1 : extincteurs portables — R5 : colonnes sèches et colonnes humides",
      ],
      answer: [0],
      explanation:
        "L'APSAD R1 est le référentiel d'installation, vérification et maintenance des systèmes sprinkler (extinction automatique par eau). L'APSAD R5 est le référentiel équivalent pour les Robinets d'Incendie Armés (RIA). Ces deux référentiels sont émis par le CNPP (Centre National de Prévention et de Protection) et sont reconnus par les assureurs français. Les deux peuvent coexister sur un même site.",
      chapterLabel: "Réglementation",
      timeLimit: 35,
    },
    {
      question:
        "Dans la classification APSAD / EN 12845 des modes de stockage, que désignent les types ST1 à ST4 ?",
      choices: [
        "ST1 = empilage libre (palettes au sol) · ST2/ST3 = palettes sur racks (rangées simples/multiples) · ST4 = racks à grande hauteur nécessitant des têtes intermédiaires entre niveaux",
        "ST1 = liquides inflammables · ST2 = solides combustibles · ST3 = gaz comprimés · ST4 = aérosols sous pression",
        "ST1 à ST4 = catégories de marchandises selon leur combustibilité (I à IV selon EN 12845)",
        "ST1 = 1 niveau de stockage · ST2 = 2 niveaux · ST3 = 3 niveaux · ST4 = plus de 4 niveaux",
      ],
      answer: [0],
      explanation:
        "La classification des modes de stockage pour le calcul des besoins sprinkler selon l'APSAD R1 / EN 12845 : ST1 = empilage libre (palettes directement au sol, sans structure métallique) ; ST2 = palettes sur racks à rangées simples (une palette de profondeur) ; ST3 = palettes sur racks à rangées multiples (back-to-back, plusieurs palettes de profondeur) ; ST4 = racks à grande hauteur avec têtes sprinkler intermédiaires obligatoires entre niveaux lorsque l'écart vertical dépasse 1,2 m entre la marchandise et les têtes de plafond.",
      chapterLabel: "Réglementation",
      timeLimit: 40,
    },
    {
      question:
        "Quelle est la différence entre une tête sprinkler ELO (Élevé Oblique) et une tête SSU (Standard Upright) ?",
      choices: [
        "ELO : conçue pour toitures inclinées, température 160 °C, K-factor élevé (K≈141) pour grande surface de couverture — SSU : montage vertical standard, 68-79 °C, K-factor standard (K≈68)",
        "ELO et SSU sont deux noms commerciaux pour la même tête — seul le fabricant diffère",
        "ELO : pour zones froides et humides — SSU : pour zones chaudes (au-dessus de 50 °C ambiants)",
        "ELO : têtes ouvertes (système déluge) — SSU : têtes fermées (système sous eau standard)",
      ],
      answer: [0],
      explanation:
        "La tête ELO (Élevé Oblique) est conçue pour les toitures inclinées (chais, entrepôts agricoles) : son déflecteur oriente le jet obliquement selon l'angle du plafond. Sa température de déclenchement est élevée (ex. 160 °C pour les zones chaudes comme les chais de vieillissement en fût) et son K-factor élevé (K≈141) assure un grand débit hydraulique couvrant une grande surface. La tête SSU standard est montée verticalement, déclenchement à 68 °C (bulbe rouge, standard) ou 79 °C (bulbe jaune), K≈68. Le choix dépend de la géométrie du bâtiment et de la température ambiante maximale.",
      chapterLabel: "Composants",
      timeLimit: 40,
    },
    {
      question:
        "Quel est le rôle exact de la pompe jockey (pompe de maintien de pression) dans une installation sprinkler ?",
      choices: [
        "Elle est la source principale d'eau en cas d'incendie — elle alimente le réseau pendant toute la durée du sinistre",
        "Elle maintient la pression réseau en compensant les micro-fuites, et son démarrage fréquent signale une fuite ou un déclenchement de tête à investiguer",
        "Elle remplace le groupe motopompe diesel en cas de coupure de courant secteur",
        "Elle est dédiée au remplissage des réservoirs pendant les périodes de faible consommation",
      ],
      answer: [1],
      explanation:
        "La pompe jockey (ou de maintien) est une petite pompe (typiquement 5 m³/h à 110 mCE) dont le seul rôle est de compenser les micro-fuites du réseau et de maintenir la pression nominale entre 0 et 5 m³/h. Si une tête se déclenche ou si une fuite importante survient, la jockey ne peut pas suivre la demande en débit — elle s'épuise et tourne en continu. Ses démarrages fréquents et rapprochés constituent une alarme de type B à investiguer immédiatement. La source principale reste l'électropompe et/ou le groupe motopompe diesel.",
      chapterLabel: "Composants",
      timeLimit: 40,
    },
    {
      question:
        "Pourquoi une installation sprinkler pour distillerie ou dépôt d'hydrocarbures intègre-t-elle un émulseur plutôt que de l'eau seule ?",
      choices: [
        "L'eau est trop lente à activer — l'émulseur accélère chimiquement la réaction d'extinction",
        "L'eau seule rebondit sur les liquides inflammables sans effet extincteur — l'émulseur AFFF (3 %) ou FFF crée un film étouffant sur la surface du liquide, empêchant les vapeurs de rejoindre les flammes",
        "L'eau seule n'est pas autorisée en ICPE — l'émulseur est une obligation réglementaire universelle",
        "L'émulseur remplace entièrement l'eau — le réseau n'est alimenté qu'en émulseur pur",
      ],
      answer: [1],
      explanation:
        "Pour les risques liquides inflammables (hydrocarbures, alcools, distilleries), l'eau seule provoquerait une vaporisation explosive et l'extension du feu. L'émulseur AFFF (Aqueous Film-Forming Foam) à 3 % crée un film aqueux sur la surface du liquide qui stoppe l'émission de vapeurs inflammables. L'alternative FFF (fluorcompound-free, sans PFAS) offre les mêmes performances sur hydrocarbures et solvants polaires. Le dosage est assuré par une pompe FIREDOS (hydraulique, sans électricité) ou un tank proportionnel. L'autonomie minimale demandée est généralement 30 minutes.",
      chapterLabel: "Principe sprinkler",
      timeLimit: 40,
    },
    {
      question:
        "Sur quelle zone hydraulique est calculé le besoin en eau (pression et débit) d'une installation sprinkler ?",
      choices: [
        "Sur la zone hydrauliquement la plus favorable — la plus proche de la source où la pression est maximale",
        "Sur la zone hydrauliquement la plus défavorisée — la plus éloignée ou la plus haute, où la pression disponible est minimale",
        "Sur la surface totale du bâtiment divisée par le nombre total de têtes",
        "Sur la zone présentant la plus forte densité de stockage, indépendamment de la pression",
      ],
      answer: [1],
      explanation:
        "Les besoins hydrauliques sont calculés sur la zone hydrauliquement la plus défavorisée : la portion du réseau où la pression disponible est la plus faible (la zone la plus éloignée de la source ou la plus haute en altitude). Ce calcul détermine le débit requis, la pression minimale à la pompe et le volume de réserve d'eau nécessaire. Si la pression et le débit sont suffisants dans la zone critique, ils seront suffisants partout ailleurs — c'est le principe du dimensionnement par la zone défavorisée.",
      chapterLabel: "Composants",
      timeLimit: 35,
    },
    {
      question:
        "Pourquoi est-il formellement interdit de peindre une tête sprinkler, même pour l'harmoniser esthétiquement avec le plafond ?",
      choices: [
        "La peinture peut modifier la couleur du bulbe et créer une confusion sur la température de déclenchement nominale",
        "La peinture modifie la conductivité thermique de l'ampoule ou du bulbe — elle peut retarder ou empêcher le déclenchement, ou fragiliser le mécanisme de maintien jusqu'à la rupture accidentelle",
        "C'est uniquement une contrainte contractuelle APSAD sans justification technique démontrée",
        "La peinture fraîche dégage des vapeurs qui déclenchent les DAI optiques de fumée voisins",
      ],
      answer: [1],
      explanation:
        "Peindre une tête sprinkler est formellement interdit par tous les référentiels (EN 12845, APSAD R1, NFPA 13). La peinture crée une isolation thermique autour de l'ampoule en verre ou du bulbe à fusible, pouvant retarder le déclenchement (la tête répond trop tard lors d'un incendie réel). À l'inverse, une peinture trop épaisse peut fragiliser le mécanisme de maintien jusqu'à la rupture intempestive. Une tête peinte, heurtée ou visuellement déformée doit être remplacée immédiatement — même si elle n'a pas coulé.",
      chapterLabel: "Maintenance",
      timeLimit: 35,
    },
    {
      question:
        "Quelle est la différence entre une alarme de type A et une alarme de type B sur une installation sprinkler ?",
      choices: [
        "Type A = alarme de zone (partie du réseau) · Type B = alarme générale (tout le bâtiment)",
        "Type A = débit d'eau dans le réseau ou pompe démarrée (incendie probable → réponse incendie immédiate) · Type B = défaut technique (basse pression, vanne, défaut électrique → appel maintenance)",
        "Type A = alarme automatique (DAI) · Type B = alarme manuelle (DM)",
        "Type A = alarme restreinte (PC sécurité) · Type B = alarme générale (évacuation)",
      ],
      answer: [1],
      explanation:
        "Distinction clé selon la NF EN 12845 : Alarme type A = signal de débit d'eau dans le réseau ou mise en marche d'une pompe → incendie réel ou probable → réponse incendie immédiate (alerte pompiers, évacuation, vérification terrain). Alarme type B = défaut technique : basse pression d'air en système sec, vanne partiellement fermée, défaut secteur, niveau carburant diesel bas → pas d'incendie, mais dégradation de disponibilité → appel technicien maintenance. Confondre ces deux types est une erreur fréquente et potentiellement fatale.",
      chapterLabel: "Maintenance",
      timeLimit: 35,
    },

    // === QUESTIONS ÉLIMINATOIRES SPRINKLER ===
    {
      question:
        "Une alarme sprinkler retentit. Vous êtes la seule personne sur site. Aucune fumée n'est visible. Quelle est votre première action ?",
      choices: [
        "Chercher d'abord l'origine dans le bâtiment avant d'alerter les secours",
        "Fermer immédiatement la vanne principale pour stopper l'alarme pendant votre inspection",
        "Alerter les secours (18 ou 112) immédiatement, puis déclencher l'évacuation sans entrer dans les zones à risque",
        "Attendre 5 minutes pour voir si l'alarme se confirme",
      ],
      answer: [2],
      eliminatory: true,
      chapterLabel: "Conduite alarme",
      explanation:
        "QUESTION ÉLIMINATOIRE — Une alarme sprinkler de type A impose une réponse incendie immédiate. Toute temporisation ou investigation solitaire expose à se retrouver dans un bâtiment en feu sans secours. Fermer la vanne principale pendant un incendie non confirmé supprime la seule protection active. Les secours décident de la suite — l'exploitant n'est pas pompier.",
      timeLimit: 40,
      imagePath: "/elearning/sprinkler/conduite-alarme-sprinkler.png",
      imageAlt: "Synoptique conduite à tenir face à une alarme sprinkler type A",
    },
    {
      question:
        "Lors d'une ronde, vous trouvez la vanne principale d'un poste de contrôle sprinkler en position fermée. Aucune étiquette de maintenance n'est visible. Que faites-vous ?",
      choices: [
        "La laisser fermée pour éviter une ouverture accidentelle si un travail est en cours",
        "L'ouvrir immédiatement vous-même pour remettre l'installation en service",
        "Signaler immédiatement au responsable sécurité et au mainteneur — ne pas modifier la position sans autorisation mais traiter comme une indisponibilité critique",
        "Consigner l'anomalie dans le registre et attendre la prochaine maintenance planifiée",
      ],
      answer: [2],
      eliminatory: true,
      chapterLabel: "Poste de contrôle",
      explanation:
        "QUESTION ÉLIMINATOIRE — Une vanne principale fermée sans autorisation est l'une des causes les plus fréquentes de sinistre mortel sur site protégé par sprinkler. L'exploitant ne doit ni laisser en état sans signalement, ni ouvrir seul sans vérifier qu'aucun travail n'est en cours. La signalisation immédiate comme indisponibilité critique avec mesures compensatoires est la seule réponse correcte.",
      timeLimit: 45,
      imagePath: "/elearning/sprinkler/vanne-sprinkler.png",
      imageAlt: "Vanne sprinkler en position fermée — anomalie critique d'exploitation",
    },
    {
      question:
        "Un technicien demande à fermer temporairement la vanne principale d'une zone sprinkler pour effectuer une intervention de maintenance de 2 heures. Quelle est la procédure correcte ?",
      choices: [
        "Fermer la vanne sur demande verbale du technicien et la rouvrir après",
        "Refuser car une vanne sprinkler ne peut jamais être fermée",
        "Appliquer la procédure d'indisponibilité : autorisation formelle, rondes continues dans la zone non protégée, permis de feu obligatoire, information du responsable sécurité et de l'assureur si requis, remise en service vérifiée avant levée des mesures compensatoires",
        "Fermer la vanne et mettre une étiquette 'maintenance' puis attendre le technicien",
      ],
      answer: [2],
      eliminatory: true,
      chapterLabel: "Maintenance",
      explanation:
        "QUESTION ÉLIMINATOIRE — La mise hors service d'une zone sprinkler, même temporaire, déclenche une procédure formelle selon EN 12845 Annexe J : autorisation préalable, rondes continues, interdiction de feux nus, permis de feu obligatoire pour tout travail par point chaud, remise en service vérifiée. Une simple étiquette ne constitue pas une procédure d'indisponibilité.",
      timeLimit: 45,
      imagePath: "/elearning/sprinkler/indisponibilite-sprinkler-mode-degrade.png",
      imageAlt: "Procédure d'indisponibilité sprinkler — mode dégradé et mesures compensatoires",
    },
    {
      question:
        "Vous constatez qu'une tête sprinkler au-dessus d'un rack a été peinte en blanc pour s'harmoniser avec le plafond lors de travaux de rénovation. Elle n'a pas coulé. Que faites-vous ?",
      choices: [
        "Ne rien faire — si elle n'a pas coulé, la peinture n'a pas altéré son fonctionnement",
        "Gratter délicatement la peinture pour rétablir la conductivité thermique",
        "Signaler immédiatement, faire remplacer la tête par un mainteneur qualifié et tracer l'anomalie dans le registre",
        "Attendre la prochaine vérification annuelle pour la faire remplacer",
      ],
      answer: [2],
      eliminatory: true,
      chapterLabel: "Composants",
      explanation:
        "QUESTION ÉLIMINATOIRE — Une tête peinte est hors service selon tous les référentiels (EN 12845, APSAD R1, NFPA 13). La peinture crée une isolation thermique retardant ou empêchant le déclenchement lors d'un incendie réel. Gratter la peinture est interdit car cela peut fragiliser l'ampoule. Le seul recours est le remplacement immédiat par un mainteneur qualifié.",
      timeLimit: 40,
      imagePath: "/elearning/sprinkler/tete-sprinkler-peinte-abimee.png",
      imageAlt: "Tête sprinkler peinte — anomalie critique imposant un remplacement immédiat",
    },
    {
      question:
        "Un nouveau prestataire logistique veut stocker des palettes de bombes aérosols dans une cellule actuellement protégée en classe OH2. La hauteur prévue est de 4 m. Quelle est la bonne réaction ?",
      choices: [
        "Accepter car le sprinkler est en service et la hauteur reste raisonnable",
        "Accepter à condition que le responsable logistique signe une décharge",
        "Refuser et exiger une analyse de l'installateur / bureau d'études avant tout stockage — les aérosols sont une marchandise hautement pénalisante pouvant exiger une reclassification en HHS et des têtes ESFR",
        "Accepter si la hauteur reste inférieure au plafond de 5 m prévu dans la cellule",
      ],
      answer: [2],
      eliminatory: true,
      chapterLabel: "Réglementation",
      explanation:
        "QUESTION ÉLIMINATOIRE — Les bombes aérosols sont classées en catégorie IV (marchandises les plus pénalisantes selon EN 12845) et peuvent exiger une reclassification en HHS ou l'installation de têtes ESFR (Extended Spray Fast Response). Accepter ce stockage sans analyse remet en cause l'adéquation protection/risque et expose à un sinistre non maîtrisé. Une signature de décharge ne change pas la physique de la combustion.",
      timeLimit: 45,
      imagePath: "/elearning/sprinkler/stockage-obstacle-sous-tete-sprinkler.png",
      imageAlt: "Stockage obstacle sous tête sprinkler — distance libre insuffisante, risque non couvert",
    },
    {
      question: "Un entrepôt équipé de sprinkler stocke des batteries lithium-ion. Que garantit le sprinkler en cas d'emballement thermique d'une batterie ?",
      choices: [
        "Le sprinkler refroidit l'environnement et limite la propagation — mais ne garantit pas l'arrêt de la réaction interne de la batterie.",
        "Le sprinkler éteint définitivement tout feu de batterie lithium-ion.",
        "Le sprinkler ne peut pas intervenir sur des feux de batterie car l'eau est contre-indiquée.",
        "Le sprinkler garantit la protection complète si la tête est positionnée directement au-dessus de la batterie."
      ],
      answer: [0],
      explanation:
        "Le sprinkler refroidit l'environnement et peut limiter la propagation d'un incendie, mais il ne stoppe pas une réaction d'emballement thermique interne d'une batterie lithium-ion. Une reprise de feu est possible après activation du sprinkler. Ce point doit figurer dans les consignes d'exploitation et être signalé aux secours. Un entrepôt stockant des batteries Li-ion doit faire l'objet d'une analyse de risque spécifique.",
      chapterLabel: "Batteries Li-ion",
    },
    {
      question: "Un salarié trouve un extincteur dont la goupille de sécurité est absente. Que doit-il faire ?",
      choices: [
        "Signaler immédiatement l'anomalie au responsable et ne pas utiliser cet extincteur",
        "Remettre la goupille s'il en trouve une et replacer l'extincteur",
        "Tester l'extincteur pour vérifier s'il fonctionne encore",
        "Ignorer si la charge indiquée au manomètre est dans la zone verte",
      ],
      answer: [0],
      explanation:
        "Un extincteur sans goupille peut s'être déclenché partiellement ou avoir été sabré. Il ne faut pas l'utiliser ni tenter de le recharger soi-même. L'anomalie doit être signalée immédiatement et l'extincteur mis hors service. La vérification de la charge ne garantit pas l'intégrité de l'extincteur.",
      chapterLabel: "Extincteurs",
    },
    {
      question: "La classe D de feu concerne :",
      choices: [
        "Les feux de métaux combustibles (magnésium, aluminium en poudre, titane, lithium métallique)",
        "Les feux de déchets industriels",
        "Les feux de produits chimiques acides",
        "Les feux de gaz comprimés",
      ],
      answer: [0],
      explanation:
        "La classe D regroupe les feux de métaux combustibles : magnésium, aluminium en poudre, sodium, titane, lithium métallique (différent du lithium-ion). Ces feux nécessitent des agents extincteurs spécifiques (poudres sèches D) car l'eau peut réagir violemment avec certains métaux et aggraver le sinistre. L'extincteur standard CO₂ ou eau est contre-indiqué.",
      chapterLabel: "Classes de feux",
    },
    {
      question: "Quelle est la durée minimale recommandée pour conserver un extincteur en service sans révision complète ?",
      choices: [
        "5 ans — une vérification annuelle est obligatoire, une révision complète tous les 5 à 10 ans selon le type",
        "1 an — tout extincteur doit être remplacé chaque année",
        "10 ans sans contrainte si le manomètre est dans la zone verte",
        "3 ans minimum avant toute intervention de maintenance",
      ],
      answer: [0],
      explanation:
        "La réglementation (code du travail, arrêté du 18 février 2014) impose une vérification annuelle de l'état apparent de chaque extincteur par une personne compétente, et une révision complète périodique (généralement tous les 5 ans selon le type). Un manomètre dans la zone verte n'est pas suffisant pour attester de la conformité complète.",
      chapterLabel: "Extincteurs",
    },
    {
      question: "L'alarme générale d'évacuation dans un établissement recevant du public (ERP) doit permettre :",
      choices: [
        "D'être perçue distinctement dans tous les locaux occupés, y compris en présence de bruit de fond",
        "D'informer uniquement le service de sécurité et non les occupants directement",
        "De prévenir les secours extérieurs automatiquement dans tous les cas",
        "De déclencher le désenfumage simultanément dans toutes les zones",
      ],
      answer: [0],
      explanation:
        "L'alarme générale doit être audible dans l'ensemble des locaux occupés, y compris les sanitaires, vestiaires et zones bruyantes. Elle peut être complétée par des flash lumineux dans les zones à forte ambiance sonore ou pour les personnes malentendantes. Son niveau sonore minimum et sa tonalité sont définis réglementairement.",
      chapterLabel: "Alerte et évacuation",
    },
    {
      question: "Les travaux par points chauds (soudure, meulage, chalumeau) en entreprise nécessitent :",
      choices: [
        "Un permis de feu délivré par le responsable sécurité, avec vérification de la zone, protection des combustibles, moyens d'extinction à portée et surveillance post-travaux",
        "Uniquement la présence d'un extincteur à portée de l'opérateur",
        "Un signalement préalable par mail au service sécurité sans autre formalité",
        "Aucune formalité si l'opérateur est un professionnel certifié",
      ],
      answer: [0],
      explanation:
        "Le permis de feu est un document de prévention fondamental pour tous travaux par points chauds. Il identifie les risques, définit les mesures de protection (distance aux combustibles, protection des ouvertures), impose la présence de moyens d'extinction et prévoit une surveillance post-travaux d'au moins 1 heure. L'absence de permis de feu est une faute grave fréquemment impliquée dans les incendies d'entreprise.",
      chapterLabel: "Prévention",
      eliminatory: true,
    },
    {
      question: "Quelle est la principale cause d'incendie dans les locaux de stockage ?",
      choices: [
        "Le stockage non contrôlé de matières combustibles sans analyse de risque, avec accumulation de déchets et mauvaise gestion des distances de sécurité",
        "La présence de systèmes sprinkler mal calibrés",
        "L'utilisation d'éclairages LED à haute température",
        "Le stockage de produits chimiques incompatibles sans séparation",
      ],
      answer: [0],
      explanation:
        "Le stockage est un facteur aggravant majeur : combustibilité des matériaux stockés, densité de charge calorifique, mauvaise gestion des déchets (emballages, palettes), absence de compartimentage. Les bonnes pratiques incluent : limiter les quantités en zone de travail, dégager les issues, maintenir des distances de sécurité, gérer régulièrement les déchets combustibles.",
      chapterLabel: "Prévention",
    },
    {
      question: "Lors d'un incendie, pourquoi ne faut-il jamais utiliser l'ascenseur pour évacuer ?",
      choices: [
        "L'ascenseur peut tomber en panne (coupure électrique), se bloquer en plein fumée ou s'ouvrir à l'étage en feu",
        "Les ascenseurs sont réservés aux pompiers en cas d'incendie",
        "L'ascenseur crée un appel d'air qui accélère la propagation des flammes",
        "Les câbles d'ascenseur fondent rapidement, rendant l'utilisation dangereuse après 5 minutes",
      ],
      answer: [0],
      explanation:
        "En cas d'incendie, l'ascenseur est proscrit car : les coupures électriques peuvent le bloquer entre deux étages, les portes peuvent s'ouvrir directement sur le feu, et la cabine peut se remplir de fumées toxiques. Les escaliers de secours sont la seule voie d'évacuation fiable. Cas particulier : les ascenseurs prioritaires pompiers existent dans certains bâtiments mais sont exclusivement réservés aux secours.",
      chapterLabel: "Alerte et évacuation",
    },
    {
      question: "Un feu de friteuse (huile de cuisson) appartient à la classe F. Quel agent extincteur est adapté ?",
      choices: [
        "Extincteur à mousse ou à eau avec additif spécifique classe F — jamais d'eau pure ni de CO₂",
        "Extincteur CO₂ uniquement car l'eau est contre-indiquée sur les graisses",
        "Poudre ABC, adaptée à tous types de feux",
        "Tout extincteur disponible car l'urgence prime",
      ],
      answer: [0],
      explanation:
        "Les feux de classe F (huiles et graisses de cuisson à très haute température) nécessitent un extincteur spécifique classe F (mousse ou eau avec additif saponifiant). L'eau pure provoquerait une explosion de vapeur (effet d'ébullition). Le CO₂ refroidit insuffisamment et peut provoquer une reprise de feu par ré-inflammation des vapeurs chaudes. Le couvercle adapté sur la friteuse reste le premier réflexe.",
      chapterLabel: "Classes de feux",
      eliminatory: true,
    },
    {
      question: "La détection automatique d'incendie par détecteurs de fumée photoélectriques est particulièrement efficace pour :",
      choices: [
        "Les feux à développement lent avec production de fumées abondantes avant flamme (papier, bois, textiles smoldering)",
        "Les feux vifs à haute température sans fumée (alcool, gaz)",
        "Les feux de métaux combustibles",
        "Les feux de liquides inflammables à déclenchement rapide",
      ],
      answer: [0],
      explanation:
        "Les détecteurs optiques de fumée sont très efficaces pour les feux couvants (smoldering) qui produisent d'abondantes fumées avant de s'embraser. Ils sont moins adaptés aux feux vifs sans fumée (alcool) ou aux feux d'hydrocarbures à inflammation rapide. D'autres types de détecteurs (thermiques, de flammes, gaz) complètent la détection selon les risques présents.",
      chapterLabel: "Détection",
    },
    {
      question: "Dans un document unique d'évaluation des risques professionnels (DUERP), le risque incendie doit :",
      choices: [
        "Être évalué et faire l'objet de mesures de prévention proportionnées : organisation des secours, formation du personnel, maintenance des équipements, signalisation, consignes",
        "Être mentionné uniquement dans les établissements soumis au classement ICPE",
        "Être traité uniquement si l'effectif dépasse 50 salariés",
        "Être délégué entièrement aux services de la protection civile",
      ],
      answer: [0],
      explanation:
        "Le DUERP est obligatoire pour tout employeur dès le 1er salarié. L'évaluation du risque incendie y figure avec les mesures de prévention associées : formation et exercices, équipements d'alarme et d'extinction, plan d'évacuation, désignation d'équipiers de première intervention. L'employeur est responsable de la sécurité incendie dans son établissement.",
      chapterLabel: "Réglementation",
    },
    {
      question: "Un extincteur à poudre ABC utilisé dans un local informatique ou électrique :",
      choices: [
        "Endommage fortement les équipements — l'extincteur CO₂ est préférable pour ces locaux",
        "Est le plus adapté car la poudre étouffe rapidement tous types de feux",
        "N'est jamais dangereux pour les équipements si bien orienté",
        "Peut être utilisé en remplacement du CO₂ sans inconvénient",
      ],
      answer: [0],
      explanation:
        "La poudre ABC laisse un résidu corrosif et conducteur qui détruit les équipements électroniques et informatiques. Un extincteur CO₂ est préférable dans ces environnements car il n'endommage pas les équipements et ne laisse aucun résidu. Le choix de l'agent extincteur doit être cohérent avec les risques spécifiques du local.",
      chapterLabel: "Extincteurs",
    },
    {
      question: "Le plan d'évacuation affiché dans les locaux doit indiquer :",
      choices: [
        "La position de l'occupant, les issues de secours, les extincteurs, le point de rassemblement et l'itinéraire d'évacuation",
        "Uniquement les numéros d'urgence à appeler",
        "Les noms et coordonnées des équipiers de première intervention",
        "Les consignes générales de prévention incendie sans plan",
      ],
      answer: [0],
      explanation:
        "Le plan d'évacuation doit : localiser l'occupant (Vous êtes ici), indiquer clairement les issues de secours et les itinéraires, positionner les moyens d'extinction (extincteurs, RIA), mentionner le point de rassemblement extérieur, et être affiché à chaque niveau du bâtiment. Son existence et sa mise à jour sont obligatoires dans les ERP et entreprises soumises au Code du travail.",
      chapterLabel: "Alerte et évacuation",
    },
    {
      question: "Lors d'une évacuation incendie, une personne en situation de handicap moteur se trouve à l'étage. Que doit-on faire ?",
      choices: [
        "La conduire vers l'espace d'attente sécurisé (EAS) le plus proche et l'y laisser en sécurité relative en attendant les secours qui sont prévenus",
        "Tenter de la descendre dans les bras par les escaliers",
        "La laisser dans son bureau et l'informer des secours",
        "Attendre que les secours arrivent sans lui indiquer les consignes",
      ],
      answer: [0],
      explanation:
        "Les EAS (Espaces d'Attente Sécurisés) sont des espaces compartimentés résistants au feu, dotés d'un système de communication avec l'extérieur, où les personnes à mobilité réduite peuvent attendre les secours en sécurité. Tenter de descendre une personne dans les bras peut blesser la victime et le secouriste. Les secours doivent être informés de la présence d'une personne dans l'EAS.",
      chapterLabel: "Alerte et évacuation",
    },
    {
      question: "Un feu dans une armoire électrique basse tension alimentée. Quelle est la séquence d'actions correcte ?",
      choices: [
        "1. Couper l'alimentation si possible. 2. Utiliser un extincteur CO₂. 3. Si impossible à couper — évacuer et alerter les secours.",
        "1. Ouvrir l'armoire pour accéder au foyer. 2. Utiliser de l'eau.",
        "1. Tenter d'éteindre à l'eau pour refroidir. 2. Couper ensuite.",
        "1. Évacuer directement sans tenter d'agir car tout feu électrique est hors de portée du salarié.",
      ],
      answer: [0],
      explanation:
        "Pour un feu dans une armoire électrique : couper l'alimentation en priorité (si accessible et sûr) puis utiliser un extincteur CO₂. Si la coupure est impossible (armoire verrouillée, risque d'arc), évacuer et alerter les secours. Ne jamais ouvrir une armoire en feu (appel d'air, risque d'arc) ni utiliser de l'eau sur une installation sous tension.",
      chapterLabel: "Extincteurs",
      eliminatory: true,
    },
    {
      question: "La classification ICPE (Installation Classée pour la Protection de l'Environnement) est pertinente en sécurité incendie car :",
      choices: [
        "Elle impose des exigences supplémentaires de prévention et de gestion des risques incendie pour les sites stockant ou utilisant des matières dangereuses au-delà de certains seuils",
        "Elle remplace le Code du travail pour les entreprises industrielles",
        "Elle ne concerne que les sites chimiques de grande taille",
        "Elle dispense les entreprises ICPE des exercices d'évacuation",
      ],
      answer: [0],
      explanation:
        "Les ICPE (régime déclaration, enregistrement ou autorisation selon les quantités) sont soumises à des prescriptions spécifiques en matière de stockage de matières inflammables, de prévention incendie, de plans d'opération interne (POI) et de gestion des urgences. Le dépassement des seuils crée des obligations renforcées par rapport au droit commun du travail.",
      chapterLabel: "Réglementation",
    },
    {
      question: "Lors d'un exercice d'évacuation, les salariés doivent :",
      choices: [
        "Évacuer réellement jusqu'au point de rassemblement, en appliquant les consignes exactement comme lors d'un vrai incendie",
        "Rester à leur poste si l'exercice interrompt une tâche critique",
        "Signaler à l'avance à leur responsable qu'ils participeront ou non selon leur charge de travail",
        "Utiliser l'ascenseur pour aller plus vite lors des exercices uniquement",
      ],
      answer: [0],
      explanation:
        "Un exercice d'évacuation n'a de valeur que s'il est réaliste : évacuation réelle jusqu'au point de rassemblement, fermeture des portes, comptage des effectifs. Un exercice bâclé (simulation sans déplacement) ne prépare pas les salariés à une vraie urgence. La fréquence minimale est de 2 exercices par an pour les ERP, 1 par an en entreprise selon le code du travail.",
      chapterLabel: "Alerte et évacuation",
    },
    {
      question: "Un salarié découvre de la fumée s'échappant sous une porte fermée. Quelle est la bonne conduite ?",
      choices: [
        "Ne pas ouvrir la porte — tâter la porte avec le dos de la main. Si elle est chaude, ne pas l'ouvrir. Déclencher l'alarme et alerter les secours.",
        "Ouvrir rapidement la porte pour vérifier et éventuellement éteindre",
        "Attendre que la fumée disparaisse pour évaluer si c'est un vrai incendie",
        "Appeler un collègue avant d'agir pour avoir un témoin",
      ],
      answer: [0],
      explanation:
        "Une porte fermée retient les flammes et les gaz chauds. Ne JAMAIS ouvrir une porte si la fumée s'échappe en-dessous sans tâter d'abord avec le dos de la main. Si la porte est chaude ou si une chaleur intense est ressentie, ne pas l'ouvrir : un backdraft (embrasement soudain par entrée d'air) peut se produire. La règle est : alerter d'abord, évacuer, ne pas jouer les héros.",
      chapterLabel: "Alerte et évacuation",
      eliminatory: true,
    },
    {
      question: "L'extinction d'un feu par le procédé d'étouffement consiste à :",
      choices: [
        "Priver le feu de comburant (oxygène) en isolant le foyer de l'air ambiant",
        "Refroidir le combustible sous son point d'inflammation",
        "Déplacer le combustible hors de la zone de combustion",
        "Introduire un inhibiteur chimique qui interrompt la réaction en chaîne",
      ],
      answer: [0],
      explanation:
        "Les quatre procédés d'extinction correspondent aux quatre actions sur le triangle du feu : étouffement (couper le comburant), refroidissement (abaisser la température), enlèvement du combustible, et inhibition chimique. L'étouffement s'applique typiquement avec une couverture anti-feu sur un feu de frigousse ou de papier, ou avec la mousse qui forme un film sur les liquides inflammables.",
      chapterLabel: "Triangle du feu",
    },
    {
      question: "Un document Plan de Prévention est obligatoire lorsque :",
      choices: [
        "Une entreprise extérieure intervient dans les locaux d'une entreprise utilisatrice sur une opération représentant plus de 400 heures de travail sur 12 mois, ou impliquant des travaux dangereux",
        "Uniquement lors de travaux de construction ou génie civil",
        "Dès qu'une intervention externe dure plus d'une journée",
        "Uniquement pour les entreprises relevant de la réglementation ICPE",
      ],
      answer: [0],
      explanation:
        "Le Plan de Prévention est obligatoire (art. R4512-7 du code du travail) quand une entreprise extérieure réalise des travaux ou prestations dépassant 400 heures annuelles, ou impliquant des travaux dangereux listés par arrêté. Il définit les risques liés à la co-activité, les mesures de prévention communes, notamment les consignes incendie et d'évacuation applicables aux intervenants extérieurs.",
      chapterLabel: "Réglementation",
    },
    {
      question: "Les voies et issues de secours doivent rester :",
      choices: [
        "Dégagées en permanence, signalées, éclairées (balisage de sécurité) et manœuvrables de l'intérieur sans clé",
        "Fermées à clé en permanence pour des raisons de sécurité, avec clé disponible à l'accueil",
        "Dégagées seulement pendant les horaires d'ouverture au public",
        "Maintenues fermées pour éviter les courants d'air qui propagent les fumées",
      ],
      answer: [0],
      explanation:
        "Les issues de secours doivent être : dégagées en permanence (aucun obstacle), signalées par pictogramme vert normalisé, éclairées par balisage de sécurité alimenté en secours (BAES), et ouvrables de l'intérieur sans clé (barre anti-panique ou poignée). Un couloir encombré, une porte bloquée ou mal signalée en cas d'évacuation peut coûter des vies.",
      chapterLabel: "Alerte et évacuation",
      eliminatory: true,
    },
    {
      question: "La concentration limite inférieure d'explosivité (LIE) d'un gaz ou d'une vapeur inflammable représente :",
      choices: [
        "La concentration minimale dans l'air au-dessous de laquelle le mélange ne peut pas s'enflammer",
        "La concentration maximale au-dessus de laquelle l'explosion est certaine",
        "La concentration à partir de laquelle le gaz devient toxique pour l'homme",
        "La concentration à partir de laquelle le détecteur gaz doit déclencher l'alarme",
      ],
      answer: [0],
      explanation:
        "La LIE est la concentration minimale d'un gaz combustible dans l'air au-dessous de laquelle le mélange est trop pauvre pour s'enflammer. La LSE (limite supérieure d'explosivité) est la concentration maximale au-dessus de laquelle le mélange est trop riche. Entre LIE et LSE se trouve la plage explosive (ou inflammable). La détection de gaz déclenche généralement une alerte à 10-20% de la LIE.",
      chapterLabel: "Réglementation",
    },
    {
      question: "En cas d'incendie dans un bâtiment à plusieurs niveaux, où doit-on se regrouper si l'évacuation vers l'extérieur est impossible ?",
      choices: [
        "Dans un local résistant au feu avec une fenêtre, portes fermées, signaler sa présence aux secours",
        "Dans les toilettes car les canalisations d'eau offrent une protection",
        "Dans la cave pour échapper aux fumées qui montent",
        "Dans le couloir pour être visible des secours",
      ],
      answer: [0],
      explanation:
        "Si l'évacuation est impossible (fumées dans les escaliers, accès coupé), il faut se réfugier dans un local résistant au feu : fermer la porte (ralentit la progression du feu), boucher les interstices avec des vêtements humides si possible, ouvrir une fenêtre pour signaler sa présence et se maintenir à l'air frais. Éviter les sous-sols (accumulation de fumées) et les couloirs (voie de propagation).",
      chapterLabel: "Alerte et évacuation",
    },
    {
      question: "L'huissier de sécurité (ou guide-file, serre-file) lors d'une évacuation a pour mission de :",
      choices: [
        "S'assurer que tout le monde a bien évacué son secteur en fermant les portes et en vérifiant les locaux avant de partir le dernier",
        "Courir devant pour ouvrir les issues de secours",
        "Compter les effectifs au point de rassemblement",
        "Déclencher l'alarme et appeler les secours",
      ],
      answer: [0],
      explanation:
        "Le serre-file est le dernier à quitter son secteur. Il vérifie l'évacuation de chaque local (toilettes, vestiaires, recoins) et ferme les portes derrière lui pour confiner l'incendie. Le guide-file ouvre la marche et guide vers les issues. Le responsable d'évacuation coordonne l'ensemble et rend compte au point de rassemblement.",
      chapterLabel: "Alerte et évacuation",
    },

    // ── Batteries lithium-ion ──────────────────────────────────────────────
    {
      question: "Qu'est-ce que l'emballement thermique (thermal runaway) d'une batterie lithium-ion ?",
      choices: [
        "Une réaction chimique interne incontrôlable qui s'emballe en cascade, générant chaleur, gaz inflammables et risque d'incendie",
        "Une surchauffe temporaire du chargeur qui se dissipe lorsqu'on débranche la batterie",
        "Un défaut électrique du circuit de charge corrigeable par un fusible",
        "Un phénomène uniquement possible lors de la fabrication, pas en exploitation",
      ],
      answer: [0],
      explanation:
        "L'emballement thermique est une réaction exothermique auto-entretenue à l'intérieur des cellules. Une fois amorcé, il ne peut pas être stoppé de l'extérieur : les cellules voisines s'enflamment en cascade. Il peut survenir après un choc, une surcharge, un court-circuit interne ou une exposition à la chaleur — parfois plusieurs heures après l'événement déclencheur.",
      chapterLabel: "Batteries lithium",
      eliminatory: true,
    },
    {
      question: "Quelle est la conduite à tenir prioritaire face à un feu de batterie lithium-ion en cours d'emballement thermique ?",
      choices: [
        "Évacuer immédiatement la zone et déclencher l'alarme — ne pas tenter d'éteindre seul",
        "Utiliser un extincteur CO₂ pour asphyxier la batterie",
        "Arroser avec un seau d'eau pour refroidir",
        "Couvrir la batterie avec une couverture anti-feu pour étouffer les flammes",
      ],
      answer: [0],
      explanation:
        "Aucun extincteur classique ne stoppe l'emballement thermique interne. Le CO₂, la poudre et la couverture anti-feu peuvent maîtriser les flammes visibles mais pas la réaction chimique interne. La priorité absolue est l'évacuation, l'alerte des secours et la limitation de la propagation. Les pompiers utilisent de grandes quantités d'eau pour refroidir l'ensemble et surveillent la ré-inflammation.",
      chapterLabel: "Batteries lithium",
      eliminatory: true,
    },
    {
      question: "Parmi les gaz émis lors d'un emballement thermique de batterie lithium, lequel est particulièrement dangereux pour les voies respiratoires ?",
      choices: [
        "Le fluorure d'hydrogène (HF)",
        "Le dioxyde de carbone (CO₂)",
        "L'azote (N₂)",
        "La vapeur d'eau",
      ],
      answer: [0],
      explanation:
        "Le fluorure d'hydrogène (HF) est un composé extrêmement corrosif et toxique, produit lors de la décomposition thermique des électrolytes fluorés des batteries lithium-ion. Il est dangereux même à faible concentration et peut provoquer des brûlures internes graves des voies respiratoires. L'évacuation immédiate s'impose dès les premiers signes de fumée.",
      chapterLabel: "Batteries lithium",
    },
    {
      question: "Qu'est-ce que la ré-inflammation dans le contexte des feux de batteries lithium-ion ?",
      choices: [
        "La reprise spontanée du feu plusieurs heures après l'extinction apparente, car les réactions chimiques internes se poursuivent",
        "Un second départ de feu dû à un court-circuit du chargeur adjacent",
        "Un phénomène lié uniquement aux batteries endommagées physiquement",
        "Une réaction qui ne survient que lors de la phase de charge",
      ],
      answer: [0],
      explanation:
        "La ré-inflammation est un risque majeur spécifique au lithium : une batterie qui semble éteinte peut redémarrer spontanément en raison des réactions électrochimiques qui continuent dans les cellules. C'est pour cette raison que les pompiers maintiennent une surveillance prolongée et immergent parfois les batteries dans l'eau pour stopper définitivement les réactions.",
      chapterLabel: "Batteries lithium",
    },
    {
      question: "Une batterie lithium-ion présentant une enveloppe gonflée (« boursouflement ») doit-elle être utilisée normalement ?",
      choices: [
        "Non — elle doit être immédiatement isolée, étiquetée et signalée sans être rechargée ni utilisée",
        "Oui, si le gonflement est léger et que la batterie charge encore",
        "Oui, si la batterie a moins de 2 ans",
        "Non, uniquement si la batterie est dans un véhicule électrique",
      ],
      answer: [0],
      explanation:
        "Un gonflement de la batterie (swelling) indique une accumulation de gaz due à une dégradation interne des cellules. La recharger ou l'utiliser dans cet état est extrêmement dangereux car l'emballement thermique peut être imminent. Elle doit être isolée dans un endroit sécurisé, ventilé, loin de combustibles, et signalée au responsable pour élimination.",
      chapterLabel: "Batteries lithium",
    },
    {
      question: "Où doit se trouver une zone de charge de batteries lithium-ion en milieu professionnel ?",
      choices: [
        "Dans un local ventilé, résistant au feu, éloigné des combustibles, avec un chargeur adapté à la batterie",
        "Dans n'importe quel local à condition d'utiliser une multiprise de qualité",
        "En sous-sol pour limiter les risques de propagation vers les niveaux supérieurs",
        "À proximité des moyens d'extinction pour réagir rapidement",
      ],
      answer: [0],
      explanation:
        "La réglementation et les bonnes pratiques imposent des zones de charge dédiées : locaux ventilés (pour évacuer les gaz), résistants au feu (pour limiter la propagation), sans combustibles à proximité, et avec des chargeurs strictement adaptés aux batteries utilisées. Une multiprise surchargée ou un chargeur non adapté peut provoquer un court-circuit déclencheur d'emballement.",
      chapterLabel: "Batteries lithium",
    },

    // ── PFAS / émulseurs fluorés ────────────────────────────────────────────
    {
      question: "Que signifie l'acronyme PFAS dans le contexte des émulseurs incendie ?",
      choices: [
        "Per- et Polyfluoroalkylsubstances — composés chimiques fluorés utilisés dans les mousses extincteurs",
        "Produits de Formulation Anti-Sinistre — agents extincteurs homologués en France",
        "Protéines Fluorées Actives pour Sprinklers — additif pour installations automatiques",
        "Plan de Formation Anti-incendie et Sécurité — document réglementaire obligatoire",
      ],
      answer: [0],
      explanation:
        "Les PFAS (Per- et Polyfluoroalkylsubstances) sont une famille de milliers de composés chimiques fluorés. Utilisés dans les émulseurs AFFF, FFFP et AR-AFFF pour leur excellente efficacité sur les feux d'hydrocarbures, ils sont désormais classés comme polluants persistants préoccupants en raison de leur accumulation dans l'environnement et l'organisme humain.",
      chapterLabel: "PFAS et émulseurs",
    },
    {
      question: "Pourquoi les PFAS sont-ils surnommés 'polluants éternels' ?",
      choices: [
        "Parce qu'ils se dégradent extrêmement lentement dans l'environnement (demi-vie de centaines d'années) et s'accumulent dans les chaînes alimentaires",
        "Parce qu'ils sont interdits en France depuis 1990 mais toujours utilisés à l'étranger",
        "Parce qu'ils laissent une trace visuelle permanente sur les sols",
        "Parce qu'ils sont radioactifs et nécessitent un stockage spécial",
      ],
      answer: [0],
      explanation:
        "Les PFAS résistent à la dégradation chimique, thermique et biologique. Une fois dans l'environnement, ils persistent pendant des centaines d'années, contaminent les nappes phréatiques, s'accumulent dans les tissus vivants (bioaccumulation) et remontent la chaîne alimentaire. Leurs effets sanitaires incluent perturbations endocriniennes, certains cancers et troubles de la reproduction.",
      chapterLabel: "PFAS et émulseurs",
    },
    {
      question: "Depuis quelle date l'utilisation des mousses fluorées (PFAS) est-elle interdite en France pour la lutte contre l'incendie dans la majorité des applications ?",
      choices: [
        "1er janvier 2024 (décret n° 2022-1588 du 19 décembre 2022)",
        "1er janvier 2020 (transposition de la directive REACH)",
        "1er juillet 2026 (entrée en vigueur progressive)",
        "L'interdiction n'est pas encore effective en France",
      ],
      answer: [0],
      explanation:
        "Le décret n° 2022-1588 du 19 décembre 2022 a interdit l'utilisation des mousses fluorées à compter du 1er janvier 2024. Des dérogations existent pour certains secteurs (aéroports, sites SEVESO spécifiques, défense nationale) avec des délais supplémentaires jusqu'en 2025-2028 selon le secteur.",
      chapterLabel: "PFAS et émulseurs",
      eliminatory: false,
    },
    {
      question: "Sur quels types de feux les émulseurs fluorés (AFFF, FFFP) étaient-ils principalement utilisés ?",
      choices: [
        "Feux de classe B : liquides inflammables et hydrocarbures en nappe",
        "Feux de classe A : solides organiques (bois, papier, tissu)",
        "Feux de classe C : gaz inflammables",
        "Feux de classe F : huiles de cuisson",
      ],
      answer: [0],
      explanation:
        "Les émulseurs fluorés formaient un film aqueux sur la surface des hydrocarbures, les isolant de l'oxygène et empêchant les vapeurs inflammables de s'enflammer à nouveau. Leur efficacité sur les feux de classe B (liquides inflammables, hydrocarbures, solvants) était reconnue, ce qui explique leur large utilisation dans les dépôts pétroliers, les aéroports et les sites ICPE.",
      chapterLabel: "PFAS et émulseurs",
    },
    {
      question: "Que désigne le terme 'AF3F' ou 'fluorine-free' dans le contexte des émulseurs incendie ?",
      choices: [
        "Des émulseurs sans composés fluorés, développés comme alternatives aux AFFF pour les feux d'hydrocarbures",
        "Des extincteurs à eau avec additif anti-feu renforcé",
        "Des mousses destinées exclusivement aux cuisines professionnelles",
        "Un label européen de certification des équipements extincteurs",
      ],
      answer: [0],
      explanation:
        "AF3F (Alcohol-resistant Fluorine-Free Foam) et les émulseurs fluorine-free sont des alternatives aux émulseurs PFAS pour les feux d'hydrocarbures. Basés sur des protéines, glucoprotéines ou agents synthétiques non fluorés, ils ne présentent pas les mêmes risques environnementaux. Leur performance sur certains feux d'hydrocarbures doit être qualifiée par des essais, car elle peut différer des émulseurs fluorés.",
      chapterLabel: "PFAS et émulseurs",
    },
    {
      question: "Lors d'un incident sur un site utilisant encore des émulseurs fluorés (sous dérogation), que doit-on faire des eaux de ruissellement contaminées ?",
      choices: [
        "Les collecter et les traiter comme déchets dangereux — ne pas les rejeter dans le milieu naturel",
        "Les diluer avec de l'eau claire avant rejet dans les égouts",
        "Les laisser s'infiltrer dans le sol après neutralisation au pH",
        "Les rejeter dans le réseau pluvial si la quantité est inférieure à 500 litres",
      ],
      answer: [0],
      explanation:
        "Les eaux contaminées aux PFAS constituent un déchet dangereux. Tout rejet direct dans le milieu naturel, les égouts ou le réseau pluvial est interdit. Elles doivent être collectées, confinées et traitées par des filières agréées. Sur les sites sous dérogation, une procédure de gestion des eaux PFAS doit être formalisée avant tout incident.",
      chapterLabel: "PFAS et émulseurs",
      eliminatory: true,
    },
  ],
  "extinction-automatique-gaz": [
    {
      question:
        "Quel énoncé distingue correctement un système d'extinction automatique à gaz d'une installation sprinkler ?",
      choices: [
        "Le système à gaz protège un volume et impose une logique de temporisation et d'évacuation",
        "Le système à gaz fonctionne comme un sprinkler mais sans eau",
        "Le système à gaz dépend fortement de l'intégrité du local protégé",
        "Le système à gaz n'impose aucune contrainte particulière sur le réaccès",
      ],
      answer: [0, 2],
      chapterLabel: "Principes & fonctionnement",
      multiple: true,
      explanation:
        "Un système à gaz ne se lit pas comme un sprinkler. Il repose sur un local protégé, une chaîne de commande et une gestion stricte des accès.",
      timeLimit: 75,
      contextLabel:
        "L'extinction automatique à gaz repose sur une logique de local protégé, de temporisation et de sécurité des personnes.",
      imagePath: "/images/systeme-d'extinction-incendie-automatique.webp",
      imageAlt:
        "schéma d'un système fixe d'extinction automatique à gaz avec détection, diffusion et réserve d'agent extincteur",
    },
    {
      question:
        "Pourquoi l'intégrité du local protégé est-elle un point critique pour un système à gaz ?",
      choices: [
        "Parce que la concentration utile doit pouvoir se maintenir",
        "Parce que les portes, passages et fuites n'ont aucun effet",
        "Parce que l'efficacité dépend aussi de l'étanchéité du volume",
        "Parce que seul le nombre de bouteilles compte",
      ],
      answer: [0, 2],
      chapterLabel: "Principes & fonctionnement",
      multiple: true,
      explanation:
        "Le local protégé fait partie du système. Si son intégrité est dégradée, la concentration peut devenir insuffisante.",
      timeLimit: 70,
    },
    {
      question:
        "Quels éléments de sécurité des personnes sont essentiels avant une émission de gaz ?",
      choices: [
        "Une alarme et une temporisation visibles ou audibles",
        "L'évacuation préalable du local protégé",
        "L'accès libre au local pendant la diffusion",
        "Le contrôle des accès avant et après émission",
      ],
      answer: [0, 1, 3],
      chapterLabel: "Sécurité des personnes",
      multiple: true,
      explanation:
        "La sécurité des personnes impose une chaîne claire : alarme, temporisation, évacuation et maîtrise des accès.",
      timeLimit: 75,
    },
    {
      question:
        "Après une émission de gaz, quel comportement est le plus professionnel ?",
      choices: [
        "Interdire le réaccès tant que les consignes du site ne permettent pas un retour contrôlé",
        "Rentrer aussitôt pour vérifier visuellement",
        "Prendre en compte l'atmosphère du local et les risques résiduels",
        "Considérer que tout danger a disparu dès l'extinction apparente",
      ],
      answer: [0, 2],
      chapterLabel: "Sécurité des personnes",
      multiple: true,
      explanation:
        "Après émission, le risque ne se limite pas au feu initial. Le réaccès doit être strictement encadré.",
      timeLimit: 75,
    },
    {
      question:
        "Quels repères techniques ou normatifs sont cités pour les systèmes d'extinction automatique à gaz ?",
      choices: [
        "APSAD R13",
        "NF EN 15004-1",
        "EN 12094-1",
        "APSAD R1",
      ],
      answer: [0, 1],
      chapterLabel: "Réglementation & normes",
      multiple: true,
      explanation:
        "APSAD R13 et NF EN 15004-1 sont les références normatives pour l'exploitation et la maintenance de ces systèmes.",
      timeLimit: 70,
    },
    {
      question:
        "Quel raisonnement est juste pour un exploitant non mainteneur ?",
      choices: [
        "Comprendre la chaîne d'information et appliquer la procédure du site",
        "Improviser une neutralisation technique si une alarme se répète",
        "Tracer les anomalies et alerter le bon interlocuteur",
        "Confondre exploitation et maintenance spécialisée",
      ],
      answer: [0, 2],
      chapterLabel: "Procédures opérationnelles",
      multiple: true,
      explanation:
        "L'exploitant doit comprendre, agir dans son rôle et transmettre. Il ne doit pas improviser de maintenance.",
      timeLimit: 70,
    },
    {
      question:
        "Lors d'une mise hors service ou d'une maintenance sur un système d'extinction à gaz, quelle conduite est correcte ?",
      choices: [
        "L'indisponibilité doit être autorisée et tracée",
        "Des mesures compensatoires peuvent être nécessaires selon le site",
        "Une inhibition temporaire peut se faire sans informer personne",
        "Le retour à la normale doit être vérifié avant de considérer le local de nouveau protégé",
      ],
      answer: [0, 1, 3],
      chapterLabel: "Maintenance & contrôles",
      multiple: true,
      explanation:
        "Le mode dégradé doit être piloté avec méthode : autorisation, traçabilité, compensation et vérification du retour à la normale.",
      timeLimit: 75,
      imagePath: "/images/systeme-d'extinction-incendie-automatique.webp",
      imageAlt:
        "schéma d'un système fixe d'extinction automatique à gaz avec détection, diffusion et réserve d'agent extincteur",
    },
    {
      question:
        "Pourquoi une modification du local protégé doit-elle être analysée avec sérieux sur un système à gaz ?",
      choices: [
        "Parce que passages, portes et percements influencent la tenue de la concentration",
        "Parce que l'efficacité dépend aussi de l'intégrité du volume protégé",
        "Parce qu'un local protégé reste conforme même après n'importe quelle modification",
        "Parce que l'étanchéité et les fermetures font partie du système réel",
      ],
      answer: [0, 1, 3],
      chapterLabel: "Principes & fonctionnement",
      multiple: true,
      explanation:
        "Le volume protégé fait partie du système à gaz. Toute modification du local peut dégrader la performance et la sécurité des personnes.",
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
      chapterLabel: "Principes & fonctionnement",
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
      chapterLabel: "Agents extincteurs",
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
      chapterLabel: "Agents extincteurs",
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
      chapterLabel: "Sécurité des personnes",
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
      chapterLabel: "Sécurité des personnes",
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
      chapterLabel: "Réglementation & normes",
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
      chapterLabel: "Principes & fonctionnement",
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
      chapterLabel: "Principes & fonctionnement",
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
      chapterLabel: "Mise en service & vérification",
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
      chapterLabel: "Détection & commande",
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
      chapterLabel: "Détection & commande",
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
      chapterLabel: "Sécurité des personnes",
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
      chapterLabel: "Sécurité des personnes",
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
      chapterLabel: "Maintenance & contrôles",
      explanation:
        "Vérifications visuelles régulières, contrôles instrumentés, ré-épreuves des bouteilles selon la réglementation des équipements sous pression, par un mainteneur qualifié.",
    },
  {
    question: "Quel agent extincteur gazeux est aujourd'hui interdit par la réglementation européenne pour les nouvelles installations ?",
    choices: ["FM-200 (HFC-227ea)", "Halon 1301", "Novec 1230", "CO2"],
    answer: [1],
    chapterLabel: "Agents extincteurs",
    explanation: "Le Halon 1301 est interdit depuis 1994 par le règlement CE sur les substances appauvrissant la couche d'ozone. Les nouvelles installations utilisent FM-200, Novec 1230, CO2 ou gaz inertes. Des dérogations limitées existent pour certains sites existants.",
    timeLimit: 40,
  },
  {
    question: "Quelle est la principale différence entre un agent gazeux 'propre' (FM-200, Novec) et le CO2 ?",
    choices: [
      "Les agents propres sont plus efficaces à extinction",
      "Le CO2 est inoffensif pour les personnes présentes dans le local",
      "Les agents propres ne présentent pas de risque d'asphyxie à concentration d'extinction",
      "Le CO2 est réservé aux locaux occupés",
    ],
    answer: [2],
    chapterLabel: "Agents extincteurs",
    explanation: "Les agents 'propres' comme FM-200 et Novec 1230 ont une concentration d'extinction bien en dessous du seuil d'asphyxie. Le CO2, au contraire, chasse l'oxygène et représente un danger mortel pour les personnes présentes dans le local. C'est pourquoi le CO2 est réservé aux locaux non occupés avec des procédures d'évacuation strictes.",
    timeLimit: 45,
  },
  {
    question: "Lors d'une alarme de pré-déclenchement (phase 1) d'un système gaz, quelle est l'action prioritaire ?",
    choices: [
      "Attendre la phase 2 et l'émission du gaz",
      "Quitter immédiatement le local protégé",
      "Rechercher la cause de l'alarme et acquitter manuellement",
      "Couper l'alimentation électrique du système",
    ],
    answer: [1],
    chapterLabel: "Sécurité & procédures",
    explanation: "En phase de pré-déclenchement, il faut évacuer le local immédiatement. La temporisation avant émission est courte (généralement 30 secondes à 1 minute). Chercher la cause ou acquitter l'alarme dans le local expose la personne à l'émission du gaz. L'évacuation est automatiquement signalée par des avertisseurs sonores et lumineux.",
    timeLimit: 40,
  },
  {
    question: "Combien de phases de détection comporte généralement un système d'extinction gaz à double détection ?",
    choices: ["1 phase unique", "2 phases successives", "3 phases", "4 phases"],
    answer: [1],
    chapterLabel: "Principe de fonctionnement",
    explanation: "Un système à double détection comporte 2 phases : phase 1 (premier détecteur déclenché) génère une alarme restreinte et met en alerte le personnel ; phase 2 (second détecteur) déclenche la temporisation puis l'émission. Cette logique réduit les risques de déclenchement accidentel.",
    timeLimit: 40,
  },
  {
    question: "La temporisation avant émission d'un système gaz a pour objectif :",
    choices: [
      "De laisser le temps au gaz de se préparer",
      "De permettre l'évacuation du local avant l'émission",
      "De vérifier que le détecteur n'est pas défaillant",
      "De prévenir les pompiers",
    ],
    answer: [1],
    chapterLabel: "Sécurité & procédures",
    explanation: "La temporisation (généralement 30 secondes à plusieurs minutes selon le site) donne le temps aux personnes présentes d'évacuer le local avant l'émission du gaz extincteur. Durant cette période, des avertisseurs sonores et lumineux se déclenchent pour ordonner l'évacuation.",
    timeLimit: 35,
  },
  {
    question: "Lors d'une mise hors service temporaire du système gaz pour des travaux, quelle mesure compensatoire est obligatoire ?",
    choices: [
      "Fermer toutes les portes du local",
      "Organiser une surveillance humaine ou des rondes renforcées",
      "Éteindre tous les appareils électriques du local",
      "Aucune, la mise hors service est sans contrainte",
    ],
    answer: [1],
    chapterLabel: "Sécurité & procédures",
    explanation: "Lorsqu'un système d'extinction est mis hors service, le risque incendie n'est plus couvert automatiquement. Des mesures compensatoires sont obligatoires : surveillance humaine renforcée, rondes fréquentes, interdiction de travaux à risque ou présence d'extincteurs supplémentaires. Ces mesures doivent être formalisées.",
    timeLimit: 40,
  },
  {
    question: "L'APSAD R13 est :",
    choices: [
      "Une norme de construction des locaux techniques",
      "Un référentiel de conception, installation et maintenance des systèmes gaz",
      "Une réglementation relative aux EPI des exploitants",
      "Un guide des agents extincteurs prohibés",
    ],
    answer: [1],
    chapterLabel: "Réglementation",
    explanation: "L'APSAD R13 est le référentiel technique de référence en France pour les installations fixes d'extinction automatique à gaz. Il couvre la conception, l'installation, la réception et la maintenance. Il complète la norme NF EN 15004-1 sur le plan technique.",
    timeLimit: 40,
  },
  {
    question: "Après une émission réelle de gaz CO2 dans un local, quelle action est prioritaire avant tout accès ?",
    choices: [
      "Aérer naturellement 5 minutes puis entrer",
      "Vérifier que la pression de la bouteille est nulle",
      "Faire intervenir uniquement des personnes équipées d'ARI (Appareil Respiratoire Isolant)",
      "Entrer rapidement pour éteindre les foyers résiduels",
    ],
    answer: [2],
    chapterLabel: "Sécurité & procédures",
    explanation: "Après une émission de CO2, la concentration dans le local est potentiellement mortelle. L'accès est interdit sans Appareil Respiratoire Isolant (ARI). Même après ventilation, des zones basses peuvent conserver une concentration dangereuse. Seul un personnel équipé et formé peut intervenir.",
    timeLimit: 40,
  },
  {
    question: "Le poste de commande manuelle d'un système gaz permet :",
    choices: [
      "De régler la durée de temporisation",
      "De déclencher manuellement l'émission en cas de feu confirmé",
      "De recharger les bouteilles d'agent extincteur",
      "D'acquitter les alarmes de défaut",
    ],
    answer: [1],
    chapterLabel: "Principe de fonctionnement",
    explanation: "Le poste de commande manuelle permet de déclencher manuellement l'émission du gaz lorsqu'un feu est confirmé et que le déclenchement automatique n'a pas eu lieu ou doit être anticipé. Il est généralement situé à l'extérieur du local protégé pour la sécurité de l'opérateur.",
    timeLimit: 40,
  },
  {
    question: "Que signifie l'état 'dérangement' sur la centrale d'un système gaz ?",
    choices: [
      "Un feu est détecté dans le local protégé",
      "Une coupure de courant est survenue",
      "Un composant du système est en défaut sans feu confirmé",
      "Le gaz a été émis partiellement",
    ],
    answer: [2],
    chapterLabel: "Maintenance & vérification",
    explanation: "Un dérangement signale un défaut technique du système (câble coupé, détecteur défaillant, batterie basse) sans que cela corresponde à une détection de feu. Il doit être traité rapidement par la maintenance car il peut affecter la capacité du système à fonctionner en cas d'incendie réel.",
    timeLimit: 40,
  },
  {
    question: "Les portes du local protégé par un système gaz doivent être :",
    choices: [
      "En bois massif pour résister à la pression du gaz",
      "Maintenues ouvertes pour faciliter l'évacuation",
      "Coupe-feu et se fermant automatiquement lors du déclenchement",
      "Équipées d'une grille de ventilation pour le gaz",
    ],
    answer: [2],
    chapterLabel: "Principe de fonctionnement",
    explanation: "Les portes du local protégé doivent être coupe-feu et à fermeture automatique. Leur fermeture lors de l'émission du gaz est essentielle pour maintenir la concentration d'agent extincteur nécessaire à l'extinction. Une porte ouverte viderait le gaz et rendrait l'extinction inefficace.",
    timeLimit: 40,
  },
  {
    question: "Quels sont les deux systèmes de détection généralement utilisés dans un local protégé par extinction gaz ?",
    choices: [
      "Détecteurs thermiques et sprinklers",
      "Détecteurs ioniques et optiques fumée",
      "Détecteurs de flamme et de gaz combustible",
      "Caméras thermiques et systèmes VESDA uniquement",
    ],
    answer: [1],
    chapterLabel: "Principe de fonctionnement",
    explanation: "La double détection utilise généralement des détecteurs ioniques (sensibles aux feux couvants) et des détecteurs optiques à effet Tyndall (sensibles aux fumées visibles). La combinaison des deux technologies réduit les déclenchements intempestifs tout en assurant une bonne couverture des risques.",
    timeLimit: 45,
  },
  {
    question: "En exploitation, que doit faire l'exploitant face à un déclenchement automatique du système gaz en dehors des heures de travail ?",
    choices: [
      "Attendre le lendemain matin pour vérifier",
      "Appeler la maintenance uniquement si une bouteille semble vide",
      "Traiter le déclenchement comme un incendie réel jusqu'à preuve du contraire et alerter les secours",
      "Entrer dans le local pour vérifier l'état du feu",
    ],
    answer: [2],
    chapterLabel: "Sécurité & procédures",
    explanation: "Tout déclenchement doit être traité comme une situation réelle jusqu'à preuve du contraire. Il faut alerter les secours (18 ou 112), ne pas entrer dans le local sans équipement adapté, et suivre le protocole du site. Le déclenchement peut être accidentel, mais seule une vérification externe sécurisée permettra de l'établir.",
    timeLimit: 40,
  },
  {
    question: "La NF EN 15004-1 s'applique principalement à :",
    choices: [
      "La certification des agents extincteurs gazeux",
      "Le calcul, l'installation et la maintenance des installations fixes d'extinction à gaz",
      "La formation des exploitants SSI",
      "L'agrément des centres de rechargement des bouteilles",
    ],
    answer: [1],
    chapterLabel: "Réglementation",
    explanation: "La NF EN 15004-1 est la norme européenne qui couvre le calcul de la quantité d'agent, les conditions d'installation et les exigences de maintenance des systèmes fixes d'extinction à gaz. Elle s'applique à tous les agents gazeux et complète les référentiels nationaux comme l'APSAD R13.",
    timeLimit: 40,
  },
  {
    question: "Lors d'un essai hebdomadaire du système gaz, quelle vérification est systématiquement réalisée ?",
    choices: [
      "La concentration du gaz dans le local",
      "Le bon fonctionnement des détecteurs et des avertisseurs sans déclenchement de l'émission",
      "La pression de toutes les bouteilles d'agent",
      "L'étanchéité du local par fumigène",
    ],
    answer: [1],
    chapterLabel: "Maintenance & vérification",
    explanation: "Les essais hebdomadaires vérifient le bon fonctionnement des détecteurs, avertisseurs, commandes et liaisons sans provoquer l'émission du gaz. La mise à l'essai implique généralement la neutralisation de la commande d'émission pour éviter un déclenchement accidentel. Les résultats sont consignés dans le registre de sécurité.",
    timeLimit: 40,
  },
  {
    question: "Qu'est-ce que la 'concentration de conception' d'un agent extincteur gazeux ?",
    choices: [
      "La concentration minimale létale pour l'homme",
      "La concentration d'agent dans le local à l'issue de l'émission, calculée pour éteindre le feu",
      "La concentration de l'agent dans la bouteille de stockage",
      "Le seuil d'alarme du détecteur de gaz",
    ],
    answer: [1],
    chapterLabel: "Principe de fonctionnement",
    explanation: "La concentration de conception est la quantité d'agent calculée pour atteindre et maintenir la concentration nécessaire à l'extinction dans tout le volume du local. Elle est calculée selon la NF EN 15004 en tenant compte du type d'agent, de la classe de feu et du volume du local. Elle doit être maintenue suffisamment longtemps pour garantir l'extinction.",
    timeLimit: 45,
  },
  {
    question: "Quel risque présente une perte d'étanchéité du local protégé par un système gaz ?",
    choices: [
      "Un risque de corrosion des bouteilles",
      "Une réduction de la concentration d'agent et un risque d'extinction inefficace",
      "Un déclenchement prématuré du système",
      "Une surconcentration dangereuse pour l'agent",
    ],
    answer: [1],
    chapterLabel: "Principe de fonctionnement",
    explanation: "La performance d'un système gaz dépend de l'étanchéité du local. Des ouvertures (passages de câbles non obturés, grilles de ventilation non fermées, joints de portes défaillants) font chuter la concentration sous le seuil d'extinction. Le test d'étanchéité (porte fan) est recommandé lors des inspections périodiques.",
    timeLimit: 45,
  },
  {
    question: "Qui est responsable de l'inscription des essais et maintenances dans le registre de sécurité du système gaz ?",
    choices: [
      "L'assureur du bâtiment",
      "Uniquement le technicien de maintenance certifié",
      "L'exploitant ou le responsable sécurité du site",
      "Le fabricant du système",
    ],
    answer: [2],
    chapterLabel: "Maintenance & vérification",
    explanation: "Le registre de sécurité est sous la responsabilité de l'exploitant ou du responsable sécurité du site. Il doit consigner tous les essais, maintenances, déclenchements et anomalies. C'est un document réglementaire qui peut être demandé lors d'une inspection ou d'un sinistre.",
    timeLimit: 40,
  },
  {
    question: "Un système d'extinction gaz peut-il être déclenché manuellement de l'intérieur du local protégé ?",
    choices: [
      "Oui, toujours, pour permettre une intervention rapide",
      "Non, les commandes manuelles sont placées à l'extérieur du local",
      "Oui, mais seulement si l'automatique est en panne",
      "Non, les déclenchements manuels sont interdits par la norme",
    ],
    answer: [1],
    chapterLabel: "Sécurité & procédures",
    explanation: "Les commandes manuelles de déclenchement sont toujours placées à l'extérieur du local protégé, généralement près des accès. Cela garantit que la personne qui déclenche est hors de la zone d'émission. Déclencher depuis l'intérieur exposerait l'opérateur au gaz émis.",
    timeLimit: 40,
  },
  {
    question: "Après une émission de Novec 1230 ou FM-200, le local peut-il être réoccupé sans ventilation préalable ?",
    choices: [
      "Oui, ces agents sont sans danger pour les personnes",
      "Non, même pour les agents 'propres', une ventilation est nécessaire avant réoccupation",
      "Oui si l'émission a duré moins de 30 secondes",
      "Non, il faut attendre 24h minimum",
    ],
    answer: [1],
    chapterLabel: "Sécurité & procédures",
    explanation: "Même si Novec 1230 et FM-200 ne sont pas mortels à concentration d'extinction contrairement au CO2, une ventilation du local est recommandée avant la réoccupation. L'émission génère des sous-produits de décomposition thermique potentiellement irritants. La procédure de réoccupation doit être définie dans le plan d'intervention du site.",
    timeLimit: 40,
  },
  {
    question: "Quelle est la fréquence minimale recommandée des inspections périodiques d'un système d'extinction gaz par un technicien spécialisé ?",
    choices: ["Tous les mois", "Tous les 6 mois", "Tous les ans", "Tous les 3 ans"],
    answer: [2],
    chapterLabel: "Maintenance & vérification",
    explanation: "APSAD R13 recommande une inspection annuelle par un technicien qualifié, complétée par des vérifications hebdomadaires et mensuelles réalisées par l'exploitant. Cette fréquence garantit la disponibilité opérationnelle du système. Certaines assurances imposent une fréquence semestrielle pour les sites sensibles.",
    timeLimit: 40,
  },
  {
    question: "Un 'signal de confirmation' dans un système gaz à double détection signifie :",
    choices: [
      "Que la maintenance a confirmé l'état du système",
      "Que le second détecteur a été déclenché, confirmant la détection d'incendie",
      "Que l'émission du gaz est terminée",
      "Que l'assureur a été prévenu",
    ],
    answer: [1],
    chapterLabel: "Principe de fonctionnement",
    explanation: "Dans un système à double détection, le signal de confirmation est émis lorsque le second détecteur se déclenche, confirmant la présence probable d'un incendie. C'est ce signal qui lance la temporisation puis l'émission. Ce mécanisme évite les faux déclenchements liés à un seul détecteur défaillant.",
    timeLimit: 40,
  },
  {
    question: "Qu'est-ce qu'un 'sélecteur de zone' dans un système d'extinction gaz multi-zones ?",
    choices: [
      "Un dispositif permettant de choisir quelle zone sera protégée lors de la prochaine maintenance",
      "Un organe permettant de diriger l'agent extincteur vers le local détecté en feu",
      "Un détecteur spécialisé pour les zones à risque élevé",
      "Un clapet coupe-feu commandé par le système",
    ],
    answer: [1],
    chapterLabel: "Principe de fonctionnement",
    explanation: "Dans les installations protégeant plusieurs locaux avec un seul stock d'agent, le sélecteur de zone oriente l'agent vers le local concerné lors du déclenchement. Il garantit que seul le local en feu reçoit l'agent, préservant la protection des autres zones. Sa maintenance et sa position sont critiques pour le bon fonctionnement.",
    timeLimit: 45,
  },
  {
    question: "L'exploitant d'un système gaz constate que le manomètre d'une bouteille d'agent indique une pression inférieure au seuil vert. Que fait-il ?",
    choices: [
      "Recharger lui-même la bouteille avec la valve disponible",
      "Signaler immédiatement le défaut à la maintenance et documenter dans le registre",
      "Attendre la prochaine maintenance annuelle programmée",
      "Passer la bouteille en réserve et continuer",
    ],
    answer: [1],
    chapterLabel: "Maintenance & vérification",
    explanation: "Une bouteille sous-chargée ne peut pas délivrer la quantité d'agent prévue, compromettant l'extinction. L'exploitant doit signaler immédiatement le défaut à la maintenance et le consigner dans le registre. Le rechargement ou le remplacement de la bouteille relève de la maintenance spécialisée, pas de l'exploitant.",
    timeLimit: 40,
  },
  {
    question: "Pourquoi les passages de câbles et conduits traversant les parois du local protégé doivent-ils être obturés ?",
    choices: [
      "Pour respecter une règle esthétique de construction",
      "Pour maintenir l'étanchéité et la concentration d'agent lors de l'émission",
      "Pour éviter la propagation de l'incendie par les câbles",
      "Pour protéger les câbles du gaz extincteur",
    ],
    answer: [1],
    chapterLabel: "Principe de fonctionnement",
    explanation: "L'étanchéité du local est indispensable au maintien de la concentration d'agent pendant le temps d'extinction. Des passages non obturés créent des fuites qui font chuter la concentration sous le seuil d'extinction. Les traversées de paroi doivent être colmatées avec des matériaux adaptés (mastics coupe-feu intumescents).",
    timeLimit: 40,
  },
  ],
  sst: [
    {
      question: "Quelle est la première priorité d'un SST face à un accident du travail ?",
      choices: [
        "Protéger pour éviter le sur-accident",
        "Déplacer immédiatement la victime quoi qu'il arrive",
        "Appeler les secours après plusieurs minutes d'observation",
        "Commencer le massage cardiaque sans analyse préalable",
      ],
      answer: [0],
      explanation:
        "Le SST commence par protéger la zone afin d'éviter qu'un secouriste ou un témoin ne devienne une nouvelle victime.",
      timeLimit: 45,
      imagePath: "/images/sst.jpg",
      imageAlt: "Formation SST et gestes de premiers secours en entreprise",
    },
    {
      question: "Dans quel ordre le SST examine-t-il une victime ?",
      choices: [
        "Saigne ? → S'étouffe ? → Répond ? → Respire ?",
        "Respire ? → Répond ? → Saigne ? → S'étouffe ?",
        "S'étouffe ? → Saigne ? → Respire ? → Répond ?",
        "Répond ? → Respire ? → S'étouffe ? → Saigne ?",
      ],
      answer: [0],
      explanation:
        "La séquence SST suit les urgences vitales par ordre de priorité : hémorragie grave → étouffement → conscience → respiration.",
      timeLimit: 50,
    },
    {
      question: "Quelles informations doivent figurer dans une alerte utile aux secours ?",
      choices: [
        "Le lieu précis de l'accident",
        "La nature de l'événement et le nombre de victimes",
        "L'état apparent de la victime et les gestes déjà engagés",
        "L'identité de tous les témoins présents",
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "Une alerte efficace comporte le lieu, la nature de l'événement, le nombre de victimes, leur état et ce qui a déjà été fait.",
      timeLimit: 65,
    },
    {
      question: "Face à un saignement abondant, quel geste est prioritaire ?",
      choices: [
        "Appliquer une compression directe et ferme sans relâcher",
        "Poser un garrot immédiatement sur le membre",
        "Nettoyer la plaie avec un antiseptique avant de comprimer",
        "Laisser saigner quelques minutes pour attendre les secours",
      ],
      answer: [0],
      explanation:
        "La compression directe, ferme et continue est le geste de référence. Le garrot est un moyen de dernier recours pour les hémorragies de membres non contrôlables.",
      timeLimit: 45,
    },
    {
      question: "Lors d'une compression pour hémorragie, le pansement est saturé de sang. Que faire ?",
      choices: [
        "Ajouter un pansement par-dessus sans retirer le premier",
        "Retirer le pansement et en placer un propre",
        "Relâcher la compression pour vérifier l'évolution du saignement",
        "Appliquer de la glace sur le pansement",
      ],
      answer: [0],
      explanation:
        "On n'ôte jamais le pansement en place — cela détruirait le caillot en formation. On ajoute du renfort par-dessus.",
      timeLimit: 45,
    },
    {
      question: "Une victime consciente s'étouffe et ne peut ni parler ni tousser. Quel est le bon protocole ?",
      choices: [
        "5 claques vigoureuses dans le dos puis 5 compressions abdominales (Heimlich), en alternant",
        "Tenter de saisir le corps étranger avec les doigts dans la bouche",
        "Allonger la victime et attendre les secours sans intervenir",
        "Réaliser immédiatement le Heimlich sans claques dorsales préalables",
      ],
      answer: [0],
      explanation:
        "Le protocole est : 5 claques dorsales vigoureuses puis 5 compressions abdominales, en alternant jusqu'à expulsion ou perte de conscience.",
      timeLimit: 55,
    },
    {
      question: "La victime qui s'étouffait vient de perdre conscience. Que fait le SST ?",
      choices: [
        "Poser la victime au sol et débuter la RCP (massage cardiaque)",
        "Continuer le Heimlich même si elle est inconsciente",
        "Mettre en PLS et attendre les secours",
        "Tenter de retirer le corps étranger à la main",
      ],
      answer: [0],
      explanation:
        "La perte de conscience impose de passer à la RCP. Les compressions thoraciques peuvent suffire à expulser le corps étranger.",
      timeLimit: 45,
    },
    {
      question: "Une victime est inconsciente mais respire normalement. Quelle position adopte-t-on ?",
      choices: [
        "Position Latérale de Sécurité (PLS) pour protéger les voies aériennes",
        "Sur le dos, bras le long du corps",
        "Assise pour faciliter la respiration",
        "Debout, maintenue par un témoin",
      ],
      answer: [0],
      explanation:
        "La PLS place la victime sur le côté, bouche vers le bas, pour éviter l'inhalation de vomissements et maintenir les voies aériennes libres.",
      timeLimit: 40,
    },
    {
      question: "Quels signes permettent de reconnaître un arrêt cardiaque ?",
      choices: [
        "La victime est inconsciente et ne respire pas normalement",
        "La victime présente des gasps agoniques (respirations rares et bruyantes)",
        "La victime ne répond pas aux stimulations",
        "La victime a les yeux ouverts et parle normalement",
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "L'arrêt cardiaque se reconnaît par : absence de réponse, absence de respiration normale (ou gasps). Ne pas perdre de temps à chercher un pouls.",
      timeLimit: 60,
    },
    {
      question: "Lors d'une RCP adulte, quelle est la technique correcte pour les compressions thoraciques ?",
      choices: [
        "Talons des mains au centre du thorax, bras tendus, 5-6 cm de profondeur, 100-120/min",
        "Bout des doigts sur le sternum, 3 cm de profondeur, 60/min",
        "Paume entière sur le côté gauche du thorax, 2-3 cm, 80/min",
        "Compressions sur l'abdomen, 100/min",
      ],
      answer: [0],
      explanation:
        "Les compressions doivent être réalisées au centre du thorax (moitié inférieure du sternum), avec les talons des mains, bras tendus, 5 à 6 cm de profondeur, à 100-120 par minute.",
      timeLimit: 55,
    },
    {
      question: "Concernant le défibrillateur automatisé externe (DAE), quelles affirmations sont vraies ?",
      choices: [
        "Il guide vocalement l'utilisateur étape par étape",
        "Il peut être utilisé sans formation médicale",
        "Il doit être récupéré et allumé le plus tôt possible après l'arrêt cardiaque",
        "Il remplace la RCP : on n'a pas besoin de masser après un choc",
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "Le DAE est conçu pour être utilisé par tous. Il guide vocalement et ne délivre le choc que si nécessaire. La RCP reprend immédiatement après chaque choc.",
      timeLimit: 65,
    },
    {
      question: "Face à une brûlure thermique, quel est le geste immédiat correct ?",
      choices: [
        "Faire couler de l'eau fraîche (15-25 °C) pendant au moins 5 à 10 minutes",
        "Appliquer de la glace directement sur la brûlure",
        "Enduire la brûlure de beurre ou de crème hydratante",
        "Percer les cloques pour soulager la douleur",
      ],
      answer: [0],
      explanation:
        "L'eau fraîche (pas glacée) refroidit les tissus et limite l'extension de la brûlure en profondeur. La glace, les corps gras et le perçage des cloques sont contre-indiqués.",
      timeLimit: 45,
    },
    {
      question: "Quels signes doivent faire suspecter un AVC et imposent d'appeler immédiatement le 15 ?",
      choices: [
        "Paralysie ou faiblesse soudaine d'un côté du visage ou du corps",
        "Difficultés soudaines à parler ou à comprendre",
        "Perte soudaine de vision d'un œil",
        "Simple maux de tête passager sans autre signe",
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "L'acronyme FAST aide : Face (asymétrie), Arm (bras qui chute), Speech (trouble de la parole), Time (appeler le 15 immédiatement). Chaque minute aggrave les séquelles.",
      timeLimit: 65,
    },
    {
      question: "Face à un traumatisme avec suspicion de fracture vertébrale, quelle est la règle de base ?",
      choices: [
        "Ne pas déplacer la victime sauf danger immédiat et mortel",
        "Mobiliser la victime en la soutenant par la tête",
        "Mettre la victime en PLS quelle que soit la situation",
        "Tirer la victime par les pieds pour la mettre à l'abri",
      ],
      answer: [0],
      explanation:
        "Un traumatisme du rachis impose de ne pas mobiliser la victime. Seul un danger immédiat justifie un dégagement d'urgence, réalisé en maintenant l'axe tête-cou-tronc.",
      timeLimit: 50,
    },
    {
      question: "Quelle est la durée réglementaire de validité de la certification SST avant le MAC obligatoire ?",
      choices: [
        "2 ans",
        "1 an",
        "3 ans",
        "5 ans",
      ],
      answer: [0],
      explanation:
        "Le MAC SST (Maintien et Actualisation des Compétences) est obligatoire tous les deux ans pour conserver la certification SST.",
      timeLimit: 35,
    },
    {
      question: "Quel est le rôle du SST en dehors des situations d'urgence ?",
      choices: [
        "Contribuer à la prévention en repérant et en remontant les situations dangereuses",
        "Remplacer le médecin du travail dans les visites médicales",
        "Décider seul des mesures de sécurité à mettre en place",
        "Assurer uniquement les premiers secours et ne pas intervenir en prévention",
      ],
      answer: [0],
      explanation:
        "Le SST a deux missions complémentaires : intervenir en cas d'accident et contribuer à la prévention des risques en signalant les situations dangereuses.",
      timeLimit: 45,
    },
    {
      question:
        "Dans la logique SST, quels signes orientent l'examen initial ?",
      choices: [
        "Saignement abondant",
        "Étouffement",
        "Réponse de la victime",
        "Respiration",
      ],
      answer: [0, 1, 2, 3],
      multiple: true,
      explanation:
        "L'examen SST suit une logique méthodique de recherche des urgences vitales.",
      timeLimit: 75,
    },
    {
      question:
        "Quel énoncé reste juste concernant le rôle du SST ?",
      choices: [
        "Le SST secourt et contribue aussi à la prévention dans l'entreprise",
        "Le SST remplace les secours spécialisés",
        "Le SST agit dans le cadre de sa formation et des consignes du site",
        "Le SST improvise des gestes non appris si la situation est impressionnante",
      ],
      answer: [0, 2],
      multiple: true,
      explanation:
        "Le rôle du SST relie secours et prévention, dans le respect strict du cadre appris en formation.",
      timeLimit: 65,
    },
    {
      question:
        "Pourquoi le suivi de la victime reste-t-il important jusqu'à l'arrivée des secours ?",
      choices: [
        "Parce que son état peut évoluer",
        "Parce qu'il faut pouvoir transmettre un compte rendu utile",
        "Parce qu'une fois l'alerte donnée, toute surveillance devient inutile",
        "Parce que l'attente remplace toujours les gestes appris",
      ],
      answer: [0, 1],
      multiple: true,
      explanation:
        "Le SST surveille, rassure si possible et transmet des informations utiles à la relève.",
      timeLimit: 60,
    },
    {
      question:
        "Dans quel ordre logique s'inscrit l'action du SST face à une situation d'accident ?",
      choices: [
        "Protéger",
        "Examiner",
        "Alerter ou faire alerter",
        "Secourir",
      ],
      answer: [0, 1, 2, 3],
      multiple: true,
      explanation:
        "La logique SST suit une méthode ordonnée : protéger, examiner, alerter, puis secourir dans le cadre appris.",
      timeLimit: 70,
      imagePath: "/images/sst.jpg",
      imageAlt:
        "Formation SST et gestes de premiers secours en environnement professionnel",
    },
    {
      question:
        "Quelles informations sont utiles lors de la relève ou de l'arrivée des secours ?",
      choices: [
        "Ce qui a été observé chez la victime",
        "Le geste déjà réalisé",
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
      question: "La démarche SST s'articule en 4 étapes. Laquelle est correcte ?",
      choices: [
        "Protéger → Examiner → Alerter ou faire alerter → Secourir",
        "Alerter → Protéger → Secourir → Examiner",
        "Examiner → Alerter → Protéger → Secourir",
        "Secourir → Alerter → Protéger → Examiner",
      ],
      answer: [0],
      explanation:
        "La démarche SST (référentiel INRS) comporte 4 étapes dans l'ordre : Protéger (supprimer le danger pour éviter le sur-accident), Examiner (rechercher les urgences vitales), Alerter ou faire alerter (15, 18 ou 112), Secourir (réaliser les gestes appris). Cet ordre est toujours respecté sauf si le danger vital impose d'alerter simultanément.",
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
        "Appliquer une glace directement",
      ],
      answer: [1],
      explanation:
        "Le refroidissement à l'eau tempérée pendant 10-20 minutes (règle des 5 × 15 : 15 cm, 15 °C, 15 min) est le geste de référence pour les brûlures.",
    },
    {
      question: "Face à une victime ayant ingéré un produit chimique, le SST doit :",
      choices: [
        "La faire vomir",
        "Lui donner du lait",
        "Ne rien faire boire ou manger et alerter le 15 ou le centre antipoison",
        "Lui donner du charbon actif",
      ],
      answer: [2],
      explanation:
        "Faire vomir aggrave les lésions caustiques. La règle est : ne rien faire boire/manger, ne pas faire vomir, alerter le 15 ou le centre antipoison.",
    },
    {
      question: "Face à une victime électrisée encore en contact avec l'installation, le SST doit d'abord :",
      choices: [
        "Toucher la victime pour la dégager",
        "Couper le courant ou écarter la victime avec un objet sec et isolant",
        "Appliquer la RCP immédiatement",
        "Faire boire de l'eau",
      ],
      answer: [1],
      explanation:
        "Toucher la victime sous tension expose le sauveteur. Il faut d'abord couper le courant ou utiliser un objet sec et isolant pour rompre le contact.",
    },
    {
      question: "La durée d'une formation SST initiale est :",
      choices: [
        "7 heures",
        "14 heures (2 jours)",
        "21 heures",
        "35 heures",
      ],
      answer: [1],
      explanation:
        "La formation SST initiale dure 14 heures (2 jours), suivie d'un MAC (Maintien et Actualisation des Compétences) de 7 heures tous les 24 mois.",
    },
    {
      question: "Le SST a aussi un rôle de :",
      choices: [
        "Médecin du travail",
        "Acteur de la prévention dans son entreprise",
        "Pompier remplaçant",
        "Manager hiérarchique",
      ],
      answer: [1],
      explanation:
        "Au-delà des gestes de secours, le SST contribue à la prévention en repérant les situations dangereuses et en alertant l'encadrement.",
    },
    {
      question:
        "Une victime vient d'être électrisée. Elle est consciente et présente des brûlures aux mains. Quelle est votre priorité immédiate ?",
      choices: [
        "Refroidir les brûlures avec de l'eau pendant 15 minutes",
        "S'assurer que le circuit est hors tension, puis prendre en charge la victime",
        "Appliquer un pansement gras sur les brûlures",
        "Lui donner du sucre pour prévenir un malaise",
      ],
      answer: [1],
      explanation:
        "Avant tout contact, vérifier que le circuit est hors tension. Refroidir à l'eau n'est approprié qu'une fois tout risque électrique écarté. Les brûlures électriques sont souvent plus profondes qu'elles n'y paraissent : surveiller la victime en attendant les secours.",
      timeLimit: 30,
    },
    {
      question:
        "Qu'est-ce qui caractérise les brûlures électriques par rapport aux brûlures thermiques classiques ?",
      choices: [
        "Elles sont toujours superficielles",
        "Elles présentent souvent un point d'entrée et un point de sortie du courant",
        "Elles ne nécessitent pas de soins médicaux",
        "Elles guérissent plus vite",
      ],
      answer: [1],
      explanation:
        "Le courant électrique suit un trajet à travers l'organisme, créant une lésion d'entrée et une lésion de sortie. Les dommages internes (muscles, nerfs, vaisseaux) peuvent être bien plus importants que les lésions cutanées visibles.",
      timeLimit: 25,
    },
    {
      question:
        "Après une électrisation, une victime dit se sentir bien et veut repartir travailler. Quelle est la bonne conduite à tenir ?",
      choices: [
        "La laisser repartir si elle est consciente et orientée",
        "L'autoriser à reprendre après 10 minutes de repos",
        "Insister pour qu'elle soit examinée par un médecin malgré l'absence de symptômes",
        "Lui conseiller de prendre un antidouleur",
      ],
      answer: [2],
      explanation:
        "Les effets d'une électrisation peuvent être différés : troubles du rythme cardiaque, lésions musculaires ou rénales apparaissant plusieurs heures après l'accident. Toute victime électrisée doit être examinée par un médecin, même si elle semble indemne.",
      timeLimit: 25,
    },
    {
      question:
        "Quel risque cardiaque est spécifiquement associé au passage du courant électrique à travers le thorax ?",
      choices: [
        "Infarctus du myocarde",
        "Fibrillation ventriculaire",
        "Insuffisance cardiaque chronique",
        "Tachycardie sinusale bénigne",
      ],
      answer: [1],
      explanation:
        "Le courant électrique peut désorganiser l'activité électrique du cœur et provoquer une fibrillation ventriculaire, arythmie létale sans pouls efficace. C'est pourquoi la défibrillation précoce (DAE) est une priorité après une électrisation avec perte de connaissance.",
      timeLimit: 25,
    },
    {
      question:
        "Une victime électrisée est inconsciente et ne respire pas. Après avoir sécurisé la zone, quelle séquence appliquez-vous ?",
      choices: [
        "Mettre en PLS, appeler le 15",
        "Alerter les secours, commencer la RCP, utiliser le DAE dès qu'il est disponible",
        "Attendre l'arrivée des pompiers sans toucher la victime",
        "Effectuer uniquement des insufflations bouche-à-bouche",
      ],
      answer: [1],
      explanation:
        "En l'absence de respiration, la chaîne de survie s'applique : alerte immédiate (15/18/112), RCP 30 compressions / 2 insufflations, pose du DAE sans délai. La fibrillation ventriculaire post-électrique répond bien à la défibrillation précoce.",
      timeLimit: 30,
    },
    {
      question:
        "Sur les lieux d'un accident électrique avec plusieurs victimes, quelle est la première action du premier secouriste arrivant ?",
      choices: [
        "Commencer la RCP sur la victime la plus proche",
        "Sécuriser la zone : couper le courant ou baliser avant toute approche",
        "Appeler les collègues pour former une chaîne humaine",
        "Prendre en photo la scène pour le rapport d'accident",
      ],
      answer: [1],
      explanation:
        "Le sur-accident est le risque majeur : une source électrique non neutralisée peut électriser le sauveteur. La sécurisation (coupure du courant, balisage) précède toute prise en charge des victimes.",
      timeLimit: 25,
    },
    {
      question:
        "Combien de temps après une électrisation un trouble du rythme cardiaque peut-il apparaître ?",
      choices: [
        "Uniquement dans les 5 premières minutes",
        "Jusqu'à 24 à 48 heures après l'accident",
        "Jamais après la phase initiale",
        "Seulement si la victime a perdu connaissance",
      ],
      answer: [1],
      explanation:
        "Des arythmies tardives ont été documentées jusqu'à 24–48 h après une électrisation, même en l'absence de symptômes immédiats. Une surveillance médicale en milieu hospitalier est systématiquement recommandée.",
      timeLimit: 25,
    },
    {
      question:
        "Une victime électrisée présente des brûlures aux deux mains et des fourmillements dans les bras. Elle est consciente. Faut-il appeler le 15 ?",
      choices: [
        "Non, les fourmillements passeront seuls",
        "Oui, les symptômes neurologiques et les brûlures électriques nécessitent une évaluation médicale urgente",
        "Seulement si elle perd connaissance",
        "Non, il suffit de lui donner de l'eau sucrée",
      ],
      answer: [1],
      explanation:
        "Les fourmillements (paresthésies) indiquent un passage de courant à travers les membres supérieurs. Combinés aux brûlures électriques, ils justifient un appel immédiat au 15 et une surveillance en milieu hospitalier.",
      timeLimit: 25,
    },
    {
      question:
        "Pourquoi ne doit-on pas refroidir une brûlure électrique à l'eau avant d'avoir sécurisé la zone ?",
      choices: [
        "L'eau aggrave chimiquement la brûlure électrique",
        "L'eau est conductrice et peut propager le choc électrique au sauveteur si la source n'est pas neutralisée",
        "L'eau est interdite sur les brûlures profondes",
        "Le refroidissement n'a aucun intérêt sur une brûlure électrique",
      ],
      answer: [1],
      explanation:
        "L'eau est un conducteur électrique. En l'absence de mise hors tension confirmée, verser de l'eau sur une brûlure électrique expose le sauveteur à une électrisation par contact indirect. Sécuriser d'abord, soigner ensuite.",
      timeLimit: 25,
    },

    // === SST SPÉCIFIQUE ÉLECTRISATION ===
    {
      question:
        "Une victime est en contact avec un conducteur nu sous tension et ne peut pas lâcher. Pourquoi ne parvient-elle pas à s'écarter d'elle-même ?",
      choices: [
        "Elle est paralysée par la peur",
        "Le courant provoque une tétanisation des muscles fléchisseurs, empêchant d'ouvrir la main",
        "Elle est inconsciente",
        "Le conducteur est collant",
      ],
      answer: [1],
      explanation:
        "Le courant alternatif à 50 Hz provoque une contraction musculaire involontaire et soutenue (tétanisation). Les muscles fléchisseurs de la main, plus puissants que les extenseurs, maintiennent la prise. La victime ne peut pas se dégager seule. Il faut couper le courant AVANT de la toucher.",
      timeLimit: 40,
    },
    {
      question:
        "La source électrique ne peut pas être coupée immédiatement. Comment dégager une victime en contact avec un conducteur sous tension, sans risquer de s'électriser soi-même ?",
      choices: [
        "Attraper la victime par les poignets rapidement",
        "Utiliser un matériau sec et non conducteur (bâton en bois sec, corde en plastique, tissu épais sec) pour déplacer le conducteur ou éloigner la victime",
        "Verser de l'eau pour refroidir le conducteur",
        "Former une chaîne humaine de plusieurs personnes",
      ],
      answer: [1],
      explanation:
        "En l'absence de coupure de courant, le contact direct avec la victime expose au risque d'électrisation secondaire. Un matériau isolant sec (bois sec, plastic, tissu sec) permet d'éloigner le conducteur ou la victime sans créer de contact électrique. L'eau est conductrice. La chaîne humaine transmet le courant à tous les maillons.",
      timeLimit: 45,
    },
    {
      question:
        "Quel trajet du courant électrique à travers le corps est le plus dangereux pour le cœur ?",
      choices: [
        "Pied gauche → pied droit (trajet transverse bas)",
        "Main droite → pied gauche (trajet traversant le thorax et le cœur)",
        "Main → coude (trajet localisé au membre supérieur)",
        "Tête → main (trajet descendant)",
      ],
      answer: [1],
      explanation:
        "Le risque cardiaque est maximal lorsque le courant traverse le thorax. Le trajet main droite–pied gauche (ou main droite–main gauche) passe directement à travers la région cardiaque, augmentant fortement le risque de fibrillation ventriculaire. C'est pourquoi travailler avec une seule main (l'autre dans le dos) est une règle de sécurité chez les électriciens.",
      timeLimit: 45,
    },
    {
      question:
        "Une victime a reçu un choc électrique haute tension (HTA, câble tombé). Le sauveteur arrive sur les lieux. Quelle différence importante par rapport à une électrisation basse tension ?",
      choices: [
        "En haute tension, la victime peut être électrisée même sans contact direct (arc, pas de tension) — la zone de danger est bien plus large",
        "En haute tension, le risque est moins élevé car les protections déclenchent plus vite",
        "En haute tension, on peut approcher la victime à moins de 1 mètre si elle n'est plus en contact avec le câble",
        "Il n'y a pas de différence pratique pour les premiers secours",
      ],
      answer: [0],
      explanation:
        "En haute tension, l'arc électrique peut se produire à distance (jusqu'à plusieurs dizaines de centimètres selon la tension), et le 'pas de tension' (gradient de potentiel au sol) expose toute personne approchant la zone à un risque d'électrisation ascendante. Il faut rester loin, ne pas approcher, alerter le gestionnaire du réseau (ENEDIS, RTE) et attendre la mise hors tension confirmée avant toute intervention.",
      timeLimit: 50,
    },
    {
      question:
        "Quelle est la définition légale de l'accident du travail selon le Code de la Sécurité sociale ?",
      choices: [
        "Tout accident survenu par le fait ou à l'occasion du travail, quelle qu'en soit la cause",
        "Uniquement les accidents provoquant un arrêt de travail supérieur à 3 jours",
        "Les seuls accidents survenant dans les ateliers ou zones de production",
        "Les accidents dont la cause est directement liée à une faute du salarié",
      ],
      answer: [0],
      explanation:
        "L'article L411-1 du Code de la Sécurité sociale définit l'AT comme « tout accident survenu par le fait ou à l'occasion du travail à toute personne salariée ». La cause et la gravité n'ont pas d'importance pour la qualification.",
      timeLimit: 45,
    },
    {
      question:
        "Une victime consciente déclare faire régulièrement des malaises vagaux et présente des nausées, sueurs et sensation de perte de conscience imminente. Quelle est la conduite à tenir ?",
      choices: [
        "L'inviter à réaliser une manœuvre physique (croiser les jambes, serrer les mains) pour éviter la syncope",
        "L'allonger immédiatement à plat sur le sol et appeler le 15",
        "Ne rien faire et observer jusqu'à la perte de conscience",
        "Lui donner un verre d'eau sucrée et attendre",
      ],
      answer: [0],
      explanation:
        "Face à un malaise vagal annoncé, les manœuvres physiques de contrepression (croiser les jambes en position debout, serrer les mains, contracter les bras) augmentent le retour veineux et peuvent prévenir la syncope. L'allongement est une option si les manœuvres échouent.",
      timeLimit: 50,
    },
    {
      question:
        "Une victime présente une plaie simple (petite, propre, sans corps étranger). Quelle est la séquence correcte ?",
      choices: [
        "Se laver les mains → nettoyer la plaie à l'eau et au savon → désinfecter → protéger par un pansement",
        "Appliquer directement un antiseptique sans rinçage préalable",
        "Poser un garrot en amont de la plaie pour stopper toute saignée",
        "Laisser la plaie à l'air libre sans pansement pour favoriser la cicatrisation",
      ],
      answer: [0],
      explanation:
        "La séquence pour une plaie simple : lavage des mains, nettoyage eau + savon, rinçage, désinfection selon les consignes du médecin du travail, protection par un pansement propre. Un antiseptique seul sans rinçage préalable est insuffisant.",
      timeLimit: 50,
    },
    {
      question:
        "Une victime présente une plaie grave (saignement important, corps étranger visible, plaie profonde ou au visage). Que ne faut-il surtout PAS faire ?",
      choices: [
        "Retirer le corps étranger et nettoyer la plaie avec de l'antiseptique",
        "Protéger la plaie sans l'appuyer directement si présence de corps étranger",
        "Alerter immédiatement les secours (15 ou 18)",
        "Surveiller la victime et la rassurer en attendant les secours",
      ],
      answer: [0],
      explanation:
        "Un corps étranger planté NE doit JAMAIS être retiré par le SST : il peut obstruer un vaisseau et son retrait provoquerait une hémorragie massive. La plaie est protégée autour du corps étranger, sans pression directe dessus. Les secours sont alertés sans délai.",
      timeLimit: 55,
    },
    {
      question:
        "Pour la RCP d'un nourrisson ou d'un enfant de moins de 8 ans, quelle différence majeure s'applique par rapport à l'adulte ?",
      choices: [
        "Débuter par 5 insufflations initiales, puis alterner 15 compressions thoraciques et 2 insufflations",
        "Réaliser exactement le même protocole que pour l'adulte (30 compressions + 2 insufflations)",
        "Effectuer uniquement des compressions thoraciques sans insufflations",
        "Utiliser exclusivement le DAE sans massage cardiaque",
      ],
      answer: [0],
      explanation:
        "Chez l'enfant (1-8 ans) et le nourrisson, la RCP débute par 5 insufflations initiales (primauté de l'oxygénation), puis alterne 15 compressions et 2 insufflations. Chez l'adulte, on part directement sur 30 compressions + 2 insufflations.",
      timeLimit: 55,
    },
    {
      question:
        "En entreprise, quelle conduite à tenir le SST doit-il adopter face à une situation de violence ou d'attaque terroriste ?",
      choices: [
        "Appliquer en priorité les consignes définies par l'employeur pour le site, ou à défaut les consignes nationales (fuir, se cacher, alerter)",
        "Intervenir immédiatement pour neutraliser la menace si possible",
        "Évacuer l'ensemble du bâtiment selon la procédure incendie habituelle",
        "Attendre que la situation se calme avant d'alerter les secours",
      ],
      answer: [0],
      explanation:
        "Face à une attaque terroriste ou une situation de violence, le SST respecte les consignes internes définies par l'employeur. En l'absence de consignes spécifiques, il applique les recommandations nationales : fuir si possible, se cacher et se mettre à l'abri, puis alerter le 17 ou le 112 en sécurité.",
      timeLimit: 55,
    },
    {
      question:
        "En période épidémique (Covid-19, grippe…), comment le SST doit-il adapter sa conduite à tenir ?",
      choices: [
        "Respecter les consignes sanitaires nationales et les recommandations de l'INRS, et adapter les gestes de secours en conséquence",
        "Suspendre tout geste de secours pour éviter la contamination",
        "Réaliser les gestes habituels sans adaptation particulière",
        "Appliquer uniquement les mesures barrières et ne pas toucher la victime",
      ],
      answer: [0],
      explanation:
        "En période épidémique, le SST adapte sa pratique aux consignes sanitaires (masque, gants, distance) et aux recommandations spécifiques de l'INRS sans renoncer aux gestes vitaux. Par exemple, pour une victime en arrêt cardiaque, la RCP est maintenue avec protection.",
      timeLimit: 50,
    },
  ],
  "habilitation-vehicules": [
    {
      question:
        "Quelle norme réglemente spécifiquement l'habilitation électrique des opérations sur les véhicules et engins à énergie embarquée ?",
      choices: [
        "NF C 18-550",
        "NF C 18-510",
        "NF EN 61140",
        "NF C 15-100",
      ],
      answer: [0],
      explanation:
        "La NF C 18-550 est dédiée aux opérations sur les véhicules et engins à énergie électrique embarquée. La NF C 18-510 s'applique aux installations électriques fixes. Ces deux normes coexistent et ne se substituent pas l'une à l'autre.",
      timeLimit: 40,
    },
    {
      question:
        "Depuis quand l'habilitation électrique est-elle obligatoire pour les opérations sur les véhicules et engins à énergie embarquée ?",
      choices: [
        "Depuis le 1er juillet 2011",
        "Depuis le 1er janvier 2000",
        "Depuis le 1er janvier 2020",
        "Elle n'est pas obligatoire, seulement recommandée",
      ],
      answer: [0],
      explanation:
        "Depuis le 1er juillet 2011, l'habilitation électrique est une exigence réglementaire pour tous les travailleurs effectuant des opérations sur les installations électriques des véhicules et engins ou dans leur voisinage (Art. R4544-9 Code du travail).",
      timeLimit: 35,
    },
    {
      question:
        "Quelle lettre finale distingue systématiquement les symboles d'habilitation liés aux véhicules et engins dans la NF C 18-550 ?",
      choices: [
        "La lettre L",
        "La lettre V",
        "La lettre E",
        "La lettre T",
      ],
      answer: [0],
      explanation:
        "La lettre L est la lettre finale caractérisant toutes les habilitations électriques liées aux opérations sur les véhicules ou engins à énergie électrique embarquée. Par exemple : B0L, B1L, B2L, B1XL, BCL.",
      timeLimit: 35,
    },
    {
      question:
        "Un technicien automobile doit effectuer seul des opérations électriques hors tension sur la chaîne de traction d'un véhicule hybride. Quel symbole est le plus adapté ?",
      choices: [
        "B2L",
        "B1L",
        "B0L",
        "BCL",
      ],
      answer: [0],
      explanation:
        "B2L désigne le chargé de travaux d'ordre électrique hors tension sur véhicule, travaillant de façon autonome (sans direction d'un supérieur). B1L désigne l'exécutant travaillant sous la direction d'un chargé de travaux.",
      timeLimit: 45,
    },
    {
      question:
        "Pour une opération sur batterie de véhicule électrique, de quels paramètres dépend le choix du symbole d'habilitation ?",
      choices: [
        "L'indice de protection (IP) des bornes, la tension (V) et la capacité (Ah) de la batterie",
        "Uniquement la marque et le modèle du véhicule",
        "La date de mise en service du véhicule uniquement",
        "La couleur des câbles d'alimentation",
      ],
      answer: [0],
      explanation:
        "Trois paramètres conditionnent le choix du symbole pour les batteries : l'IP des bornes (IP2X minimum pour les véhicules récents), la tension U en volts et la capacité C en ampères-heure. Si les bornes sont à IP2X et que l'environnement n'expose pas à des pièces nues sous tension, la formation suffit sans habilitation formelle.",
      timeLimit: 55,
    },
    {
      question:
        "Que signifie l'indice de protection IP2X appliqué aux bornes de batteries de véhicules ?",
      choices: [
        "Les parties conductrices sous tension ne sont pas accessibles au doigt (objet de plus de 12 mm)",
        "La batterie résiste à une immersion totale",
        "La borne est protégée contre la corrosion",
        "La batterie peut fonctionner sous 2 000 V maximum",
      ],
      answer: [0],
      explanation:
        "IP2X : le chiffre 2 signifie une protection contre les corps solides de diamètre supérieur à 12 mm, dont le doigt humain. Le X signifie que la protection contre l'eau n'est pas évaluée. C'est le seuil minimal imposé par les dispositions constructives des véhicules récents.",
      timeLimit: 45,
    },
    {
      question:
        "Un technicien doit réaliser uniquement la vérification du niveau d'électrolyte et le nettoyage du corps d'une batterie dont les bornes sont protégées à IP2X. Que faut-il ?",
      choices: [
        "Une formation adaptée suffit ; l'habilitation formelle n'est pas obligatoire dans ce cas",
        "Une habilitation B2XL obligatoire avant toute opération",
        "Une habilitation BCL car il s'agit d'une consignation",
        "Aucune formation particulière n'est requise",
      ],
      answer: [0],
      explanation:
        "Les opérations d'ordre non électrique sur les batteries (vérification du niveau d'électrolyte, nettoyage du corps) ne requièrent pas d'habilitation si les bornes sont protégées à IP2X minimum. Le travailleur doit néanmoins avoir reçu une formation adaptée aux risques.",
      timeLimit: 50,
    },
    {
      question:
        "Qui délivre le titre d'habilitation à un technicien automobile en entreprise ?",
      choices: [
        "L'employeur, après avis favorable du formateur",
        "Le formateur à l'issue de la formation théorique",
        "L'organisme de certification (AFNOR, QUALIOPI)",
        "Le médecin du travail lors de la visite médicale",
      ],
      answer: [0],
      explanation:
        "L'habilitation est délivrée par l'employeur, après avoir pris en compte l'avis du formateur. Le formateur ne fait que rédiger et remettre un « avis après formation » — il ne délivre pas l'habilitation lui-même.",
      timeLimit: 40,
    },
    {
      question:
        "Quelle est la périodicité de recyclage recommandée par la NF C 18-550 pour une habilitation sur véhicule/engin ?",
      choices: [
        "3 ans (2 ans si pratique occasionnelle ou exceptionnelle)",
        "1 an dans tous les cas",
        "5 ans pour les électriciens expérimentés",
        "Pas de recyclage obligatoire si le symbole n'a pas changé",
      ],
      answer: [0],
      explanation:
        "La NF C 18-550 recommande un recyclage tous les 3 ans. Pour une pratique occasionnelle ou exceptionnelle, la périodicité peut être ramenée à 2 ans. Sans recyclage à échéance, l'employeur doit remettre en cause l'habilitation.",
      timeLimit: 40,
    },
    {
      question:
        "Un chariot élévateur électrique est un exemple de :",
      choices: [
        "Engin (machine non routière à énergie électrique embarquée)",
        "Véhicule (ensemble manufacturé circulant sur route)",
        "Installation électrique fixe régie par la NF C 18-510",
        "Équipement de protection individuelle",
      ],
      answer: [0],
      explanation:
        "Au sens de la NF C 18-550, un engin est une machine non routière à énergie électrique embarquée dont la fonction exige la mobilité pendant le travail. Un chariot élévateur, une PEMP ou un engin de travaux publics sont des engins. Un véhicule circule sur route.",
      timeLimit: 40,
    },
    {
      question:
        "Pour une opération sur batteries en série dont la tension de chaque élément est 48 V, quelle tension totale doit-on retenir pour choisir le symbole d'habilitation si le bloc comporte 4 éléments en série ?",
      choices: [
        "192 V (48 V × 4)",
        "48 V (la tension d'un seul élément)",
        "12 V (valeur standard de référence)",
        "La tension ne compte pas, seule la capacité en Ah est déterminante",
      ],
      answer: [0],
      explanation:
        "En série, les tensions s'additionnent : 4 × 48 V = 192 V. C'est cette tension totale qui détermine le domaine et le symbole d'habilitation. Une erreur de calcul peut conduire à une sous-habilitation et à un risque grave.",
      timeLimit: 50,
    },
    {
      question:
        "Lors d'une intervention sur un véhicule hybride accidenté ou endommagé, quel risque spécifique doit être pris en compte ?",
      choices: [
        "L'intégrité de la chaîne de traction peut être compromise, exposant à des pièces sous tension même si le véhicule semble éteint",
        "Le risque est nul si la clé de contact est retirée",
        "Seul le risque de choc mécanique est à évaluer",
        "Le risque électrique disparaît dès que la batterie principale est déconnectée",
      ],
      answer: [0],
      explanation:
        "Un véhicule hybride ou électrique accidenté peut présenter des câbles endommagés, des condensateurs chargés ou des batteries dont l'isolation est compromise. Le retrait de la clé ou la déconnexion de la batterie principale ne garantit pas l'absence de tension résiduelle sur l'ensemble du circuit.",
      timeLimit: 55,
    },
  ],
};

const baseBtMultiSymbolesQuiz = quizContent.b1b2brbc ?? [];

function pickQuizQuestions(
  predicates: Array<(question: QuizQuestion) => boolean>,
  limit: number
): QuizQuestion[] {
  const picked: QuizQuestion[] = [];

  for (const question of baseBtMultiSymbolesQuiz) {
    if (predicates.some((predicate) => predicate(question))) {
      picked.push(question);
    }
    if (picked.length >= limit) {
      break;
    }
  }

  return picked;
}

function includesAny(question: QuizQuestion, patterns: RegExp[]): boolean {
  const haystack = [
    question.question,
    question.explanation ?? "",
    question.contextLabel ?? "",
    ...(question.choices ?? []),
  ]
    .join(" ")
    .toLowerCase();

  return patterns.some((pattern) => pattern.test(haystack));
}

const commonBtPredicates = [
  (question: QuizQuestion) =>
    includesAny(question, [
      /employeur/,
      /pnst/,
      /voisinage/,
      /epi/,
      /epc/,
      /accident/,
      /coordination/,
      /documents?/,
      /remise en energie/,
    ]),
];

const b1b1vDedicatedQuiz: QuizQuestion[] = [
  {
    question:
      "Un exécutant B1V constate qu'une protection collective a été déplacée et qu'une pièce nue sous tension devient accessible à proximité de sa zone. Que doit-il faire ?",
    choices: [
      "Continuer si le geste technique reste simple",
      "Arrêter l'action et alerter le chargé de travaux",
      "Reposer lui-même une protection sans consigne",
      "Modifier le balisage pour gagner du temps",
    ],
    answer: [1],
    explanation:
      "Le B1V exécute dans le cadre donné. Si le voisinage ou la protection collective change, il stoppe et alerte le B2.",
    timeLimit: 55,
  },
  {
    question:
      "Quelles limites caractérisent le rôle d'un B1 ou B1V ?",
    choices: [
      "Il exécute des travaux selon des instructions définies",
      "Il choisit seul la méthode générale de travail",
      "Il signale tout écart, doute ou évolution de la zone",
      "Il remplace le chargé de travaux en son absence",
    ],
    answer: [0, 2],
    multiple: true,
    explanation:
      "Le B1/B1V est exécutant électricien. Il applique les consignes et remonte les écarts, sans prendre le rôle de chargé de travaux.",
    timeLimit: 65,
  },
];

const b2b2vDedicatedQuiz: QuizQuestion[] = [
  {
    question:
      "Avant de faire intervenir une équipe, quels éléments le chargé de travaux B2/B2V doit-il clarifier au briefing ?",
    choices: [
      "Le circuit concerné, la zone et les limites de voisinage",
      "Les rôles de chaque intervenant et les points d'arrêt",
      "Les conditions qui imposent l'arrêt immédiat du travail",
      "Uniquement l'heure prévue de fin d'intervention",
    ],
    answer: [0, 1, 2],
    multiple: true,
    explanation:
      "Le B2/B2V organise et dirige: zone, rôles, limites, protections, points d'arrêt et conduite à tenir doivent être explicites.",
    timeLimit: 75,
  },
  {
    question:
      "Pendant les travaux, un intervenant signale une incohérence entre le repérage du schéma et le départ réel. Quel est le bon réflexe B2 ?",
    choices: [
      "Poursuivre si l'équipe est expérimentée",
      "Suspendre l'opération et lever l'ambiguïté avant reprise",
      "Demander au B1 de tester rapidement le départ",
      "Changer de méthode sans mise à jour des consignes",
    ],
    answer: [1],
    explanation:
      "Une incohérence documentaire remet en cause le cadre de sécurité. Le B2 arrête, clarifie et rebriefe avant toute reprise.",
    timeLimit: 60,
  },
];

const brDedicatedQuiz: QuizQuestion[] = [
  {
    question:
      "Lors d'une intervention BR, le diagnostic montre que la panne concerne plusieurs départs et nécessite une modification de câblage. Quelle décision est attendue ?",
    choices: [
      "Poursuivre comme dépannage BR si le client insiste",
      "Requalifier l'opération et arrêter le BR si le cadre est dépassé",
      "Modifier le câblage puis informer après coup",
      "Faire une remise sous tension d'essai sans analyse complémentaire",
    ],
    answer: [1],
    explanation:
      "Le BR intervient dans un cadre défini. Une dérive vers des travaux, une modification ou une opération complexe impose une requalification.",
    timeLimit: 60,
  },
  {
    question:
      "Avant une remise en service après intervention BR, quels contrôles sont cohérents avec une pratique sûre ?",
    choices: [
      "La cause de la panne est comprise ou maîtrisée",
      "Le matériel remplacé ou remis en état est compatible",
      "Les protections et capots nécessaires sont remis en place",
      "La remise en service se fait même si une odeur de chaud persiste",
    ],
    answer: [0, 1, 2],
    multiple: true,
    explanation:
      "La remise en service BR doit être contrôlée: cause, matériel, protections, environnement et absence d'anomalie persistante.",
    timeLimit: 75,
  },
];

const bcDedicatedQuiz: QuizQuestion[] = [
  {
    question:
      "Quelle séquence décrit le mieux une consignation électrique basse tension fiable ?",
    choices: [
      "Séparation, condamnation, identification, VAT, puis MALT/CC si nécessaire",
      "Observation rapide, appel téléphonique, remise d'une clé",
      "Coupure supposée, intervention immédiate, vérification après travaux",
      "VAT seule, sans condamnation ni identification",
    ],
    answer: [0],
    explanation:
      "La consignation supprime les illusions de sécurité par une chaîne complète: séparation, condamnation, identification, VAT et MALT/CC selon le cas.",
    timeLimit: 65,
  },
  {
    question:
      "Deux départs proches ont un repérage ancien et partiellement effacé. Que doit faire le BC ?",
    choices: [
      "Consigner celui qui paraît le plus probable",
      "Suspendre et faire clarifier l'identification avant de poursuivre",
      "Laisser le chargé de travaux choisir au hasard contrôlé",
      "Remplacer l'identification par une habitude d'exploitation",
    ],
    answer: [1],
    explanation:
      "Sans identification fiable, la consignation n'est pas fiable. Le BC stoppe et clarifie avant de valider l'état de sécurité.",
    timeLimit: 60,
  },
];

const beVerificationMesurageDedicatedQuiz: QuizQuestion[] = [
  {
    question:
      "Avant une opération BE Vérification ou BE Mesurage, quels points doivent être vérifiés ?",
    choices: [
      "La catégorie et l'état de l'instrument de mesure",
      "Le bon point de mesure et l'environnement électrique",
      "L'état des cordons, pointes de touche et EPI nécessaires",
      "La possibilité de réparer immédiatement si la mesure est anormale",
    ],
    answer: [0, 1, 2],
    multiple: true,
    explanation:
      "Le BE vérifie ou mesure dans un cadre défini. L'instrument, les cordons, la zone, les points de mesure et les protections doivent être maîtrisés.",
    timeLimit: 75,
  },
  {
    question:
      "Une mesure révèle une anomalie sur une installation. Que signifie cette information pour un titulaire BE Mesurage ?",
    choices: [
      "Il peut dépanner immédiatement sans autre habilitation",
      "Il doit transmettre le résultat et respecter les limites de son opération",
      "Il peut modifier le câblage si la cause semble évidente",
      "Il doit ignorer l'anomalie si la valeur affichée est stable",
    ],
    answer: [1],
    explanation:
      "Le mesurage produit une information technique. Il ne transforme pas automatiquement l'opérateur en BR, B1/B2 ou BC.",
    timeLimit: 55,
  },
  // ── Questions spécifiques BE Vérification / BE Mesurage ──────────────────
  {
    question:
      "Pour mesurer la tension sur un tableau de distribution BT fixe industriel (TGBT), quelle catégorie de surtension minimum doit porter l'instrument de mesure ?",
    choices: ["CAT I", "CAT II", "CAT III", "CAT IV"],
    answer: [2],
    explanation:
      "NF EN 61010-1 classe les instruments en 4 catégories : CAT I (circuits électroniques protégés), CAT II (prises 230 V terminaux), CAT III (installations fixes, TGBT, disjoncteurs industriels), CAT IV (origine de l'installation, compteur, réseau). Un TGBT industriel exige CAT III minimum. Utiliser un CAT II sur ce point expose à un arc électrique en cas de transitoire.",
    timeLimit: 50,
  },
  {
    question:
      "Pour effectuer des mesures directement sur le branchement réseau ou le compteur d'un bâtiment, quelle catégorie d'instrument est nécessaire ?",
    choices: [
      "CAT II — suffisant pour toute mesure BT",
      "CAT III — adapté aux installations fixes",
      "CAT IV — requis pour l'origine de l'installation",
      "CAT I avec protection renforcée",
    ],
    answer: [2],
    explanation:
      "CAT IV est requis pour les mesures à l'origine de l'installation électrique (compteur, branchement réseau, entrée de service). Ces points exposent à des transitoires de tension très élevés. Un instrument sous-catégorisé peut claquer et provoquer un arc électrique grave.",
    timeLimit: 45,
  },
  {
    question:
      "Un cordon de mesure présente une fissure de 2 cm sur sa gaine isolante. Quelle est la conduite correcte du BE Mesurage ?",
    choices: [
      "L'utiliser en faisant attention de ne pas toucher la fissure",
      "Réparer la fissure avec du ruban isolant avant utilisation",
      "Mettre le cordon hors service : tout cordon dégradé invalide la sécurité de l'ensemble",
      "Vérifier uniquement que la résistance du cordon est correcte au multimètre",
    ],
    answer: [2],
    explanation:
      "La norme NF EN 61010-031 impose que les cordons de mesure soient en bon état apparent, sans dégradation de l'isolation. Une fissure compromet la catégorie de protection. Un cordon dégradé invalide la sécurité de l'ensemble instrument + cordons, quelle que soit la catégorie de l'appareil. Il doit être mis hors service immédiatement.",
    timeLimit: 45,
  },
  {
    question:
      "Avec une habilitation BE Vérification / BE Mesurage, peut-on réaliser des essais sous tension ?",
    choices: [
      "Oui, les essais sont inclus dans le périmètre BE Vérification",
      "Oui, à condition que l'installation soit en basse tension",
      "Non — les essais sous tension relèvent du symbole BE Essais (§11.5.4), qui est distinct",
      "Oui, si la durée de l'essai ne dépasse pas 5 minutes",
    ],
    answer: [2],
    explanation:
      "La NF C 18-510 §11.5 distingue trois opérations particulières : BE Vérification (§11.5.2), BE Mesurage (§11.5.3) et BE Essais (§11.5.4). Les essais sous tension ne sont couverts que par le symbole BE Essais, distinct des deux autres. Sans ce symbole, les essais sous tension sont interdits.",
    timeLimit: 50,
  },
  {
    question:
      "Lors d'une vérification, le titulaire BE constate qu'un câble est anormalement chaud et présente un défaut d'isolement apparent. Quelle est la bonne conduite ?",
    choices: [
      "Couper le circuit en urgence et remplacer le câble",
      "Signaler l'anomalie, protéger la zone si nécessaire, et transmettre pour requalification (BR ou B2)",
      "Remplacer le câble puisqu'il a identifié le défaut",
      "Poursuivre la vérification et noter l'anomalie uniquement dans le rapport final",
    ],
    answer: [1],
    explanation:
      "Le BE Vérification contrôle l'état sans intervenir. Un défaut détecté ne donne pas le droit de réparer ou modifier l'installation. La conduite correcte est de documenter l'anomalie, protéger la zone si nécessaire, et transmettre pour requalification vers le symbole adapté : BR (dépannage), B1/B2 (travaux), BC (consignation).",
    timeLimit: 55,
  },
  {
    question:
      "Quel paragraphe de la NF C 18-510 définit spécifiquement les habilitations BE Vérification et BE Mesurage ?",
    choices: [
      "§5 — Formation et habilitation",
      "§10.4 — Interventions BT élémentaires",
      "§11.5 — Opérations particulières",
      "§4.3 — Zones d'environnement électrique",
    ],
    answer: [2],
    explanation:
      "NF C 18-510 §11.5 couvre les opérations particulières en basse tension : BE Vérification (§11.5.2), BE Mesurage (§11.5.3) et BE Essais (§11.5.4). Ce sont trois symboles distincts aux périmètres différents. La NF EN 61010-1 concerne quant à elle les instruments de mesure eux-mêmes (catégories CAT).",
    timeLimit: 45,
  },
  // ── Q9–Q20 : physiologie, accident, incendie, acteurs, matériels ─────────
  {
    question:
      "À partir de quelle intensité de courant alternatif le risque de fibrillation ventriculaire devient-il critique pour un être humain ?",
    choices: [
      "1 mA — seuil de perception",
      "10 mA — seuil de tétanisation",
      "30 mA — risque de fibrillation ventriculaire",
      "500 mA — arrêt cardiaque quasi immédiat",
    ],
    answer: [2],
    explanation:
      "Le courant de 30 mA en courant alternatif, s'il traverse le corps pendant plus de 200 ms, peut déclencher une fibrillation ventriculaire potentiellement mortelle. C'est pour cette raison que les disjoncteurs différentiels 30 mA sont obligatoires dans les circuits domestiques. En dessous : 1 mA picotement, 10 mA tétanisation possible. Au-dessus de 500 mA, l'arrêt cardiaque est quasi immédiat.",
    timeLimit: 50,
  },
  {
    question:
      "En cas de contact électrique, pourquoi ne faut-il pas toucher directement la victime avant toute autre action ?",
    choices: [
      "Pour respecter le protocole légal avant d'intervenir",
      "Parce que la victime peut être toujours en contact avec la source électrique et électriser le secouriste",
      "Pour attendre l'autorisation du chargé d'exploitation",
      "Parce que le contact aggrave les brûlures cutanées",
    ],
    answer: [1],
    explanation:
      "Tant qu'une victime est en contact avec une source électrique sous tension, toucher directement la victime expose le secouriste à être électrisé à son tour. La première action est de couper l'alimentation électrique. Si la coupure est impossible, utiliser un matériau isolant sec (manche en bois, plastique rigide) pour éloigner la source ou la victime. Jamais à mains nues.",
    timeLimit: 50,
  },
  {
    question:
      "Une victime d'électrisation est inconsciente mais respire normalement. Quelle est la conduite à tenir en attendant les secours ?",
    choices: [
      "La laisser en position allongée sur le dos pour surveiller sa respiration",
      "La placer en position latérale de sécurité (PLS) et alerter les secours",
      "Commencer immédiatement les compressions thoraciques",
      "Verser de l'eau froide sur les zones de contact pour limiter les brûlures",
    ],
    answer: [1],
    explanation:
      "En cas d'inconscience avec respiration présente, la Position Latérale de Sécurité (PLS) maintient les voies aériennes libres et prévient l'asphyxie par chute de la langue ou vomissements. Les compressions thoraciques ne sont indiquées qu'en l'absence de respiration. Ne jamais verser d'eau sur une victime d'électrisation en environnement électrique.",
    timeLimit: 55,
  },
  {
    question:
      "Un incendie se déclare sur une armoire électrique BT toujours sous tension. Quel extincteur utiliser en priorité ?",
    choices: [
      "Extincteur eau pulvérisée — plus efficace sur les feux de matériels",
      "Extincteur poudre ABC — polyvalent et disponible partout",
      "Extincteur CO2 (dioxyde de carbone) — non conducteur, adapté aux feux électriques",
      "N'importe quel extincteur disponible — l'urgence prime",
    ],
    answer: [2],
    explanation:
      "En présence de matériels électriques sous tension, seul l'extincteur CO2 est sûr : il est non conducteur et ne risque pas d'électriser l'utilisateur. L'eau conduit le courant — son utilisation sur un circuit sous tension est mortelle. La poudre est diélectrique mais endommage les matériels et peut asphyxier en espace confiné. Si possible, couper l'alimentation avant toute intervention.",
    timeLimit: 45,
  },
  {
    question:
      "Dans la chaîne des habilitations électriques, qui autorise un titulaire BE à accéder à une zone électrique pour effectuer une mesure ou une vérification ?",
    choices: [
      "Le formateur qui a dispensé la formation BE",
      "Le chef d'équipe de production du site",
      "Le chargé d'exploitation électrique, via une instruction de sécurité ou une autorisation de travail",
      "L'inspecteur du travail après déclaration d'intention",
    ],
    answer: [2],
    explanation:
      "Le chargé d'exploitation électrique est responsable de l'installation et de son état électrique. C'est lui qui autorise l'accès BE, fournit les instructions de sécurité ou l'autorisation de travail, et coordonne l'opération avec l'exploitation en cours. Sans ce document, le titulaire BE ne peut pas commencer son opération — opérer sans autorisation revient à agir hors cadre.",
    timeLimit: 50,
  },
  {
    question:
      "Quelle est la différence entre une instruction de sécurité et une autorisation de travail dans le cadre d'une opération BE ?",
    choices: [
      "Ce sont deux noms différents pour le même document",
      "L'instruction de sécurité précise les consignes techniques à respecter ; l'autorisation de travail délimite formellement le périmètre d'accès et les conditions de l'opération",
      "L'autorisation de travail est délivrée par le formateur, l'instruction de sécurité par l'employeur",
      "L'instruction de sécurité est obligatoire uniquement pour les opérations en haute tension",
    ],
    answer: [1],
    explanation:
      "Dans la NF C 18-510 : l'instruction de sécurité précise les consignes spécifiques à respecter pendant l'opération (points de mesure autorisés, tensions présentes, équipements à ne pas toucher). L'autorisation de travail délimite formellement la zone d'accès, les conditions et les limites de l'opération. Les deux documents sont complémentaires et doivent être consultés avant toute opération BE.",
    timeLimit: 55,
  },
  {
    question:
      "Avant de mesurer dans une zone supposée hors tension, que doit vérifier le titulaire BE Mesurage ?",
    choices: [
      "Que le disjoncteur principal est ouvert en position visible",
      "Que personne ne travaille dans le local au même moment",
      "Que la consignation a été réalisée et que l'attestation de consignation est disponible avant toute mesure",
      "Que l'installation est ancienne et donc probablement hors tension",
    ],
    answer: [2],
    explanation:
      "Une installation 'supposée hors tension' n'est pas une installation hors tension confirmée. Avant toute mesure dans une zone consignée, le BE doit s'assurer que la consignation complète a été effectuée (séparation, condamnation, identification, VAT, balisage) et que l'attestation de consignation est disponible. L'état visible d'un disjoncteur ne garantit pas l'absence de toute tension sur l'installation.",
    timeLimit: 50,
  },
  {
    question:
      "Pour quelle opération le mégohmmètre est-il spécifiquement utilisé en BE Vérification ?",
    choices: [
      "Mesurer la valeur de tension d'un circuit alternatif 230 V",
      "Mesurer la résistance d'isolement d'un câble ou d'un équipement électrique",
      "Vérifier l'absence de tension sur un conducteur avant intervention",
      "Mesurer l'intensité du courant de court-circuit d'un tableau",
    ],
    answer: [1],
    explanation:
      "Le mégohmmètre applique une tension DC élevée (500 V, 1 000 V ou 2 500 V selon l'application) pour mesurer la résistance d'isolement entre conducteurs et entre conducteurs et la terre. Il détecte les dégradations d'isolant des câbles, moteurs ou transformateurs. ATTENTION : il ne s'utilise QUE sur une installation hors tension, déchargée et déconnectée. Toute utilisation sur un circuit sous tension est dangereuse.",
    timeLimit: 50,
  },
  {
    question:
      "Quel est l'avantage principal de la pince ampèremétrique pour le BE Mesurage ?",
    choices: [
      "Elle mesure des tensions plus élevées qu'un multimètre classique",
      "Elle permet de mesurer le courant sans ouvrir le circuit ni interrompre l'alimentation",
      "Elle intègre automatiquement la catégorie CAT IV quel que soit le point de mesure",
      "Elle est plus précise que tout autre instrument pour les courants inférieurs à 1 A",
    ],
    answer: [1],
    explanation:
      "La pince ampèremétrique mesure le courant par induction électromagnétique ou effet Hall autour d'un conducteur, sans ouvrir le circuit ni déconnecter l'alimentation. C'est un avantage majeur en BE Mesurage : on peut mesurer un courant en service normal sans perturber l'installation ni risquer d'arc lors de la déconnexion. Elle doit néanmoins porter la catégorie CAT adaptée au point de mesure.",
    timeLimit: 45,
  },
  {
    question:
      "Le vérificateur d'absence de tension (VAT) a pour fonction principale de :",
    choices: [
      "Mesurer précisément la valeur de la tension sur un conducteur",
      "Confirmer de manière fiable l'absence de tension avant tout accès ou mesure dans une zone supposée hors tension",
      "Mesurer la résistance d'isolement entre deux conducteurs",
      "Détecter les courants de défaut à la terre sur un tableau BT",
    ],
    answer: [1],
    explanation:
      "Le VAT est un instrument de sécurité, pas un instrument de mesure précise. Sa fonction est de confirmer l'absence de tension sur chaque conducteur actif et par rapport à la terre, avant tout accès à une zone supposée hors tension. Selon NF C 18-510 §5, il doit être testé sur une source de tension connue avant ET après utilisation pour vérifier son bon fonctionnement.",
    timeLimit: 45,
  },
  {
    question:
      "Dans quel ordre de priorité les mesures de prévention doivent-elles être appliquées lors d'une opération BE ?",
    choices: [
      "EPI en premier (gants, lunettes), puis EPC si nécessaire",
      "Protections collectives (EPC : balisage, écrans, barrières) en premier, protections individuelles (EPI) en complément",
      "EPI et EPC sont équivalents — l'ordre n'a pas d'importance pour des opérations courtes",
      "L'EPC n'est requis que pour les opérations en haute tension",
    ],
    answer: [1],
    explanation:
      "Le Code du travail (Art. L. 4121-2) impose la priorité des protections collectives sur les protections individuelles. En environnement électrique BE : balisage de zone, écrans isolants, nappes de protection (EPC) doivent être mis en place en priorité. Les gants isolants, lunettes et vêtements de protection (EPI) complètent la protection mais ne remplacent jamais l'EPC. Un instrument de mesure n'autorise pas non plus une approche hors cadre.",
    timeLimit: 50,
  },
  {
    question:
      "Lors d'une opération BE Vérification, vous constatez une odeur de brûlé et une légère fumée provenant d'un départ d'un tableau BT. Quelle est la conduite correcte ?",
    choices: [
      "Ouvrir immédiatement le disjoncteur du départ pour couper l'alimentation",
      "Continuer la vérification en notant l'anomalie pour le rapport final",
      "Arrêter le contrôle, protéger la zone, alerter le chargé d'exploitation sans toucher au tableau",
      "Identifier la cause de la fumée en ouvrant le capot du tableau pour inspecter",
    ],
    answer: [2],
    explanation:
      "Une fumée ou odeur de brûlé sur un tableau BT en service indique un défaut potentiellement grave. Le titulaire BE n'est pas habilité à intervenir sur le tableau (ouvrir un disjoncteur = action corrective hors périmètre BE). La conduite correcte : arrêter le contrôle, sécuriser la zone (balisage si nécessaire), alerter immédiatement le chargé d'exploitation pour décision. Documenter l'anomalie avec précision (repère du départ, heure, nature).",
    timeLimit: 55,
  },
];

quizContent["bt-multi-symboles"] = baseBtMultiSymbolesQuiz;

quizContent["b1-b1v"] = [
  ...b1b1vDedicatedQuiz,
  ...pickQuizQuestions(commonBtPredicates, 8),
  ...pickQuizQuestions(
    [
      (question) =>
        includesAny(question, [
          /b1\b/,
          /b1v/,
          /executant/,
          /travaux/,
          /charge de travaux/,
        ]),
    ],
    10
  ),
];

quizContent["b2-b2v"] = [
  ...b2b2vDedicatedQuiz,
  ...pickQuizQuestions(commonBtPredicates, 8),
  ...pickQuizQuestions(
    [
      (question) =>
        includesAny(question, [
          /b2\b/,
          /b2v/,
          /charge de travaux/,
          /chantier/,
          /equipe/,
          /briefing/,
        ]),
    ],
    10
  ),
];

quizContent.br = [
  ...brDedicatedQuiz,
  ...pickQuizQuestions(commonBtPredicates, 8),
  ...pickQuizQuestions(
    [
      (question) =>
        includesAny(question, [
          /br\b/,
          /intervention/,
          /depannage/,
          /remise en etat/,
          /mesurage/,
          /essai/,
        ]),
    ],
    10
  ),
];

quizContent.bc = [
  ...bcDedicatedQuiz,
  ...pickQuizQuestions(commonBtPredicates, 6),
  ...pickQuizQuestions(
    [
      (question) =>
        includesAny(question, [
          /bc\b/,
          /consignation/,
          /absence de tension/,
          /vat/,
          /condamnation/,
          /separation/,
          /identification/,
        ]),
    ],
    12
  ),
];

quizContent["be-verification-mesurage"] = [
  ...beVerificationMesurageDedicatedQuiz,
  ...pickQuizQuestions(commonBtPredicates, 6),
  ...pickQuizQuestions(
    [
      (question) =>
        includesAny(question, [
          /verification/,
          /mesurage/,
          /mesures/,
          /essais/,
          /connexion/,
          /deconnexion/,
        ]),
    ],
    12
  ),
];

// ─────────────────────────────────────────────────────────────────────────────
// QUIZ — SSI Exploitation
// ─────────────────────────────────────────────────────────────────────────────
quizContent["ssi-exploitation"] = [
  {
    question: "Que signifie l'acronyme SSI ?",
    choices: [
      "Système de Sécurité Incendie",
      "Service de Surveillance et d'Inspection",
      "Système de Signalisation Intégrée",
      "Sensor Safety Interface",
    ],
    answer: [0],
    chapterLabel: "Composants SSI",
    explanation: "SSI signifie Système de Sécurité Incendie. Il désigne l'ensemble des équipements automatiques et manuels conçus pour détecter un incendie et commander les actions de mise en sécurité d'un bâtiment.",
    timeLimit: 35,
  },
  {
    question: "Le SDI (Système de Détection Incendie) comprend :",
    choices: [
      "Uniquement les détecteurs automatiques",
      "Les détecteurs automatiques, les déclencheurs manuels, la centrale de détection et les indicateurs d'action",
      "La centrale et les systèmes d'extinction uniquement",
      "Tous les équipements de sécurité incendie du bâtiment",
    ],
    answer: [1],
    chapterLabel: "Composants SSI",
    explanation: "Le SDI comprend les détecteurs automatiques (ioniques, optiques, thermiques), les déclencheurs manuels (bris de glace), la centrale de détection incendie (CDI) et les indicateurs d'action. Il détecte le feu et génère les informations nécessaires à la mise en sécurité.",
    timeLimit: 40,
  },
  {
    question: "Quelle est la différence entre le SMSI et le SDI ?",
    choices: [
      "Le SMSI détecte le feu, le SDI commande les actions",
      "Le SDI détecte le feu, le SMSI commande les actions de mise en sécurité",
      "Ce sont deux appellations du même système",
      "Le SMSI est réservé aux ERP, le SDI aux IGH",
    ],
    answer: [1],
    chapterLabel: "Composants SSI",
    explanation: "Le SDI (Système de Détection Incendie) détecte et signale un incendie. Le SMSI (Système de Mise en Sécurité Incendie) reçoit l'information du SDI et commande les actions de sécurité : désenfumage, compartimentage, diffusion de l'alarme d'évacuation, etc. Ces deux systèmes interagissent via le CMSI.",
    timeLimit: 45,
  },
  {
    question: "Un CMSI est :",
    choices: [
      "Un Contrôleur de Mise en Sécurité Incendie",
      "Un Composant de Mesure de Sécurité Intégrée",
      "Un Centre de Management des Systèmes d'Incendie",
      "Un Capteur de Mesure de Signal Incendie",
    ],
    answer: [0],
    chapterLabel: "CMSI & DAS",
    explanation: "CMSI signifie Centralisateur de Mise en Sécurité Incendie. C'est l'équipement central du SMSI qui reçoit les informations du SDI et commande l'ensemble des fonctions de mise en sécurité (DAS, désenfumage, alarme d'évacuation, etc.).",
    timeLimit: 35,
  },
  {
    question: "Que signifie DAS dans le contexte du SSI ?",
    choices: [
      "Dispositif Actionné de Sécurité",
      "Déclencheur Automatique de Sécurité",
      "Détecteur Autonome de Signalisation",
      "Dispositif d'Alerte et de Surveillance",
    ],
    answer: [0],
    chapterLabel: "CMSI & DAS",
    explanation: "DAS signifie Dispositif Actionné de Sécurité. Ce sont les équipements commandés par le SMSI lors d'une alarme : volets de désenfumage, clapets coupe-feu, portes coupe-feu à fermeture automatique, blocs-portes, ascenseurs rappelés au niveau d'évacuation, etc.",
    timeLimit: 35,
  },
  {
    question: "L'UGA (Unité de Gestion de l'Alarme) a pour rôle de :",
    choices: [
      "Détecter les incendies dans les zones à risque",
      "Gérer la diffusion de l'alarme d'évacuation vers les occupants",
      "Commander les trappes de désenfumage",
      "Alimenter les détecteurs en secours",
    ],
    answer: [1],
    chapterLabel: "Alarme & évacuation",
    explanation: "L'UGA gère la diffusion de l'alarme générale d'évacuation (AGSS ou AGS) vers les occupants du bâtiment. Elle reçoit l'ordre d'alarme du CMSI et commande les diffuseurs sonores et lumineux d'évacuation. Son bon fonctionnement est indispensable à l'évacuation en cas d'incendie.",
    timeLimit: 40,
  },
  {
    question: "Lors d'une alarme de niveau 1 (alarme restreinte) sur une centrale SSI, quelle est l'action de l'exploitant ?",
    choices: [
      "Déclencher immédiatement l'évacuation générale",
      "Effectuer une levée de doute sur la zone concernée",
      "Appeler les pompiers sans vérification",
      "Acquitter l'alarme et reprendre le travail",
    ],
    answer: [1],
    chapterLabel: "Alarme & évacuation",
    explanation: "L'alarme restreinte (niveau 1) est destinée au personnel d'exploitation pour investigation. L'exploitant doit effectuer une levée de doute physique sur la zone signalée. Si un feu est confirmé, l'alarme générale est déclenchée et les secours alertés. Si la cause est identifiée comme sans danger, l'alarme est acquittée après consignation.",
    timeLimit: 40,
  },
  {
    question: "Qu'est-ce qu'une Zone de Détection (ZD) dans un SSI ?",
    choices: [
      "Une zone du bâtiment équipée d'extincteurs",
      "Un sous-ensemble du bâtiment couvert par un groupe de détecteurs, permettant de localiser un incendie",
      "La zone d'intervention des sapeurs-pompiers",
      "Un secteur de désenfumage commandé",
    ],
    answer: [1],
    chapterLabel: "Composants SSI",
    explanation: "Une Zone de Détection est un découpage du bâtiment associé à un groupe de détecteurs. Lorsqu'un détecteur se déclenche, la centrale localise l'alarme dans la ZD correspondante. Plus les ZD sont petites, plus la localisation est précise, facilitant la levée de doute et l'intervention.",
    timeLimit: 40,
  },
  {
    question: "Une Zone de Mise en Sécurité (ZS) différente de la Zone de Détection (ZD) signifie :",
    choices: [
      "Une erreur de conception du SSI",
      "Que les actions de sécurité ne correspondent pas aux zones détectées",
      "Qu'une détection dans une ZD peut commander des actions de sécurité dans une ou plusieurs ZS différentes",
      "Que le désenfumage est indépendant de la détection",
    ],
    answer: [2],
    chapterLabel: "Composants SSI",
    explanation: "Les ZD et ZS peuvent être différentes selon la conception du bâtiment. Par exemple, une détection dans une ZD peut commander le désenfumage d'une ZS adjacente pour confiner la fumée, ou fermer des clapets dans une autre zone. L'exploitant doit connaître ces correspondances via le tableau de corrélation ZD/ZS.",
    timeLimit: 45,
  },
  {
    question: "La catégorie A d'un SSI correspond à :",
    choices: [
      "Un système minimal sans détection automatique",
      "Un système complet avec détection automatique et mise en sécurité totale",
      "Un système réservé aux ERP de 1re catégorie",
      "Une centrale de détection sans CMSI",
    ],
    answer: [1],
    chapterLabel: "Réglementation",
    explanation: "La catégorie A est la plus complète : elle comprend un SDI avec détection automatique et un SMSI assurant l'ensemble des fonctions de mise en sécurité. Les catégories B à E sont des systèmes moins complets, allant jusqu'à la catégorie E qui se limite à un simple bloc autonome d'alarme sans détection automatique.",
    timeLimit: 45,
  },
  {
    question: "Qu'est-ce qu'une 'mise hors service partielle' (MHS) dans un SSI ?",
    choices: [
      "L'arrêt total du SSI pour maintenance",
      "La neutralisation temporaire d'une zone ou d'un équipement spécifique",
      "Le remplacement d'un détecteur défaillant",
      "L'activation d'un mode nuit réduisant la sensibilité",
    ],
    answer: [1],
    chapterLabel: "Maintenance SSI",
    explanation: "Une MHS partielle consiste à neutraliser temporairement une zone ou un équipement du SSI (pour travaux, nettoyage, faux positifs répétés). Elle doit être tracée, limitée dans le temps, compensée par des mesures alternatives et approuvée par le responsable sécurité. Une MHS non tracée est une non-conformité grave.",
    timeLimit: 40,
  },
  {
    question: "Le tableau de signalisation d'une centrale SSI affiche 'DEFAUT'. Que cela indique-t-il ?",
    choices: [
      "Un incendie est en cours dans le bâtiment",
      "Un composant du système est en panne ou en anomalie technique sans détection de feu",
      "Une mise hors service a été effectuée",
      "L'alimentation secours est activée",
    ],
    answer: [1],
    chapterLabel: "Composants SSI",
    explanation: "Un défaut signale une anomalie technique du SSI : câble coupé, détecteur hors service, batterie faible, problème de communication. Ce n'est pas une alarme feu. Cependant, un défaut doit être traité rapidement car il peut réduire la capacité du système à détecter un incendie réel.",
    timeLimit: 40,
  },
  {
    question: "Les tests hebdomadaires d'un SSI consistent généralement à :",
    choices: [
      "Déclencher un feu réel pour tester le système",
      "Tester des déclencheurs manuels et vérifier que la centrale signale correctement",
      "Inspecter visuellement tous les détecteurs du bâtiment",
      "Remplacer les batteries des détecteurs",
    ],
    answer: [1],
    chapterLabel: "Maintenance SSI",
    explanation: "Les tests hebdomadaires consistent généralement à activer des déclencheurs manuels (bris de glace) et des points d'essai pour vérifier que la centrale reçoit correctement les signaux et que les actions de sécurité correspondantes se déclenchent. Les résultats sont consignés dans le registre de sécurité.",
    timeLimit: 40,
  },
  {
    question: "Quelle norme réglemente la conception et l'installation des SSI en France ?",
    choices: [
      "NF S 61-970",
      "NF S 61-931 à NF S 61-940 (série SSI)",
      "NF EN 54 uniquement",
      "APSAD R7 exclusivement",
    ],
    answer: [1],
    chapterLabel: "Réglementation",
    explanation: "La série de normes NF S 61-931 à 61-940 encadre les SSI en France : NF S 61-931 définit les règles d'installation, NF S 61-932 les règles de conception, NF S 61-933 les règles d'exploitation et de maintenance. La NF EN 54 complète cette série pour les composants de détection.",
    timeLimit: 40,
  },
  {
    question: "Lors d'un exercice d'évacuation, l'exploitant SSI doit :",
    choices: [
      "Mettre hors service le SSI pour éviter les faux positifs",
      "Déclencher manuellement l'alarme d'évacuation et observer le comportement du SSI",
      "Se contenter de déclencher l'alarme sans observer les DAS",
      "Laisser les pompiers gérer l'exercice sans intervention de l'exploitant",
    ],
    answer: [1],
    chapterLabel: "Alarme & évacuation",
    explanation: "Lors d'un exercice, l'exploitant déclenche l'alarme (via déclencheur manuel ou test central) et observe que tous les DAS s'actionnent correctement, que les diffuseurs sonores fonctionnent, que l'évacuation se déroule conformément aux consignes. Les résultats sont consignés dans le registre. C'est un test grandeur nature.",
    timeLimit: 40,
  },
  {
    question: "Un détecteur optique de fumée est particulièrement adapté à la détection de :",
    choices: [
      "Les feux à flammes vives sans fumée",
      "Les feux couvants produisant des fumées visibles denses",
      "Les gaz explosifs",
      "Les hausses lentes de température",
    ],
    answer: [1],
    chapterLabel: "Détection incendie",
    explanation: "Les détecteurs optiques (à effet Tyndall) sont sensibles aux fumées visibles denses, typiques des feux couvants (matières plastiques, mousses, textiles). Ils sont moins adaptés aux feux vifs à haute température avec peu de fumée. Les détecteurs ioniques complètent cette couverture pour les fumées moins denses.",
    timeLimit: 40,
  },
  {
    question: "Qu'est-ce qu'un déclencheur manuel (DM) dans un SSI ?",
    choices: [
      "Un bouton permettant d'activer manuellement l'alarme d'évacuation",
      "Un interrupteur de mise hors service de la centrale",
      "Un équipement de désenfumage commandé manuellement",
      "Un détecteur thermique à déclenchement par bris de verre",
    ],
    answer: [0],
    chapterLabel: "Détection incendie",
    explanation: "Le déclencheur manuel (communément appelé 'bris de glace') est un boîtier rouge permettant à toute personne découvrant un incendie de déclencher manuellement l'alarme. Il est raccordé au SDI et génère une alarme feu dans la zone correspondante. Son placement réglementaire est défini dans les normes de sécurité incendie.",
    timeLimit: 35,
  },
  {
    question: "Quelle est la conséquence d'une centrale SSI non renseignée sur sa cartographie (zones non étiquetées) ?",
    choices: [
      "Aucune conséquence fonctionnelle",
      "Un risque de retard dans la localisation et la levée de doute lors d'une alarme réelle",
      "Un défaut signalé automatiquement par la centrale",
      "Une mise hors service automatique des zones concernées",
    ],
    answer: [1],
    chapterLabel: "Maintenance SSI",
    explanation: "Si les zones de la centrale ne sont pas étiquetées ou correspondent à une cartographie obsolète, l'exploitant ne peut pas localiser rapidement la zone en alarme. Ce retard peut être critique lors d'un incendie réel. La tenue à jour de la cartographie de la centrale fait partie des obligations d'exploitation.",
    timeLimit: 40,
  },
  {
    question: "Le Tableau de Report (TR) d'un SSI est :",
    choices: [
      "Un document récapitulatif des incidents",
      "Un équipement reportant les états de la centrale vers un poste de surveillance déporté",
      "Un panneau d'affichage des consignes de sécurité",
      "La liste des zones de détection du bâtiment",
    ],
    answer: [1],
    chapterLabel: "Composants SSI",
    explanation: "Le Tableau de Report reporte les informations essentielles de la centrale (alarme, défaut, MHS) vers un poste de surveillance déporté, par exemple la loge du gardien ou le PC sécurité. Il permet une surveillance du SSI sans être devant la centrale principale, notamment en dehors des heures de bureau.",
    timeLimit: 40,
  },
  {
    question: "Lors d'une alarme générale d'évacuation dans un ERP, dans quel délai maximum les occupants doivent-ils évacuer selon la réglementation ?",
    choices: ["1 minute", "3 minutes", "5 minutes", "10 minutes"],
    answer: [1],
    chapterLabel: "Alarme & évacuation",
    explanation: "La réglementation des ERP impose une évacuation dans un délai de 3 minutes à compter du déclenchement de l'alarme d'évacuation. Ce délai est dimensionnant pour le calcul du nombre et de la largeur des issues de secours. L'exploitant SSI doit s'assurer que les exercices vérifient ce respect du délai.",
    timeLimit: 40,
  },
  {
    question: "Qu'est-ce que le désenfumage dans le contexte d'un SSI ?",
    choices: [
      "L'extinction du feu par injection de gaz inerte",
      "L'extraction des fumées d'un local pour permettre l'évacuation et l'intervention des secours",
      "La ventilation forcée pour apporter de l'air frais",
      "Le confinement des fumées dans le local en feu",
    ],
    answer: [1],
    chapterLabel: "CMSI & DAS",
    explanation: "Le désenfumage extrait les fumées et gaz chauds produits par l'incendie pour maintenir une couche d'air pur en bas du local, permettant l'évacuation des occupants et l'intervention des secours. Il est commandé par le SMSI via des volets, ouvrants de façade, ou extracteurs mécaniques.",
    timeLimit: 40,
  },
  {
    question: "Un exploitant SSI constate que plusieurs détecteurs de la même zone déclenchent régulièrement des alarmes intempestives. Quelle est la bonne démarche ?",
    choices: [
      "Mettre les détecteurs défaillants hors service définitivement",
      "Réduire la sensibilité de la centrale pour toute la zone",
      "Analyser la cause des déclenchements et traiter la source avant toute MHS",
      "Ignorer les alarmes si elles sont toujours sans feu",
    ],
    answer: [2],
    chapterLabel: "Maintenance SSI",
    explanation: "Les alarmes intempestives répétées indiquent un problème de fond : poussières, vapeurs, courants d'air, travaux, détecteur mal adapté. Il faut analyser et traiter la cause. La mise hors service ou la réduction de sensibilité ne règlent pas le problème et réduisent la sécurité. Un plan d'action et un suivi documenté sont requis.",
    timeLimit: 45,
  },
  {
    question: "La NF S 61-933 concerne principalement :",
    choices: [
      "Les règles de conception des SSI",
      "Les règles d'exploitation et de maintenance des SSI",
      "Les spécifications des détecteurs automatiques",
      "La certification des installateurs SSI",
    ],
    answer: [1],
    chapterLabel: "Réglementation",
    explanation: "La NF S 61-933 fixe les règles d'exploitation et de maintenance des SSI. Elle définit les vérifications périodiques, les essais, la tenue des documents, les règles de mise hors service et les compétences requises des exploitants. C'est la norme de référence pour l'exploitant d'un SSI.",
    timeLimit: 40,
  },
  {
    question: "Quel document est obligatoire pour consigner toutes les opérations réalisées sur un SSI ?",
    choices: [
      "Le plan du bâtiment annoté",
      "Le registre de sécurité incendie",
      "Le rapport annuel de l'installateur",
      "La fiche technique de chaque détecteur",
    ],
    answer: [1],
    chapterLabel: "Maintenance SSI",
    explanation: "Le registre de sécurité incendie est un document obligatoire dans tout ERP et IGH. Il consigne les essais, maintenances, alarmes, incidents, remplacements et mises hors service du SSI ainsi que tous les équipements de sécurité incendie. C'est une pièce maîtresse lors des visites de commission de sécurité.",
    timeLimit: 35,
  },
  {
    question: "Lors d'une visite de commission de sécurité, l'exploitant SSI doit pouvoir présenter :",
    choices: [
      "Uniquement le contrat de maintenance",
      "Le registre de sécurité à jour, les rapports de maintenance et les résultats des essais périodiques",
      "Seulement les plans du bâtiment",
      "La notice de la centrale SSI",
    ],
    answer: [1],
    chapterLabel: "Maintenance SSI",
    explanation: "La commission de sécurité vérifie la conformité réglementaire et le bon fonctionnement des équipements de sécurité. Elle demande systématiquement le registre de sécurité, les rapports de maintenance périodique, les résultats des essais et les documents de formation du personnel. Un registre incomplet peut entraîner un avis défavorable.",
    timeLimit: 40,
  },
  {
    question: "Quelle est la différence entre 'acquitter' et 'réarmer' une alarme SSI ?",
    choices: [
      "C'est la même opération avec deux noms différents",
      "Acquitter reconnaît l'information sans la supprimer ; réarmer remet le système dans son état de veille après traitement",
      "Réarmer annule définitivement l'alarme ; acquitter la suspend temporairement",
      "L'acquittement est réservé aux techniciens, le réarmement peut être fait par tous",
    ],
    answer: [1],
    chapterLabel: "Lecture des états",
    explanation: "Acquitter signifie prendre connaissance de l'information (l'alarme sonore locale peut s'arrêter mais l'état reste actif sur la centrale). Réarmer remet le système en veille après résolution de la cause. Un réarmement sans traitement de la cause ne corrige rien et peut masquer un défaut persistant.",
    timeLimit: 45,
  },
  {
    question: "Quelle est la règle fondamentale concernant la neutralisation d'un équipement SSI par un exploitant ?",
    choices: [
      "L'exploitant peut neutraliser un équipement à sa discrétion pour éviter les alarmes intempestives",
      "Aucune neutralisation ne peut être faite sans procédure formelle validée par le responsable sécurité",
      "La neutralisation est autorisée si le directeur du site donne son accord verbal",
      "Un équipement peut être neutralisé pendant 24h sans procédure particulière",
    ],
    answer: [1],
    eliminatory: true,
    chapterLabel: "Bons réflexes d'exploitation",
    explanation: "La neutralisation (mise hors service) d'un équipement SSI sans procédure formelle est une faute grave. Elle réduit la protection et peut engager la responsabilité civile et pénale. Toute MHS doit être validée par le responsable sécurité, tracée dans le registre, limitée dans le temps et compensée par des mesures alternatives.",
    timeLimit: 40,
  },
  {
    question: "Pourquoi ne faut-il pas réarmer une centrale SSI à répétition sans analyse ?",
    choices: [
      "Car cela use les composants électroniques",
      "Car les alarmes répétées masquent peut-être un défaut chronique ou un début d'incendie non investigué",
      "Car le réarmement nécessite un code spécial à chaque fois",
      "Car cela déclenche automatiquement un appel aux pompiers",
    ],
    answer: [1],
    chapterLabel: "Bons réflexes d'exploitation",
    explanation: "Réarmer sans analyser la cause crée une accoutumance dangereuse et peut masquer un vrai problème : détecteur défaillant, début d'incendie récurrent, défaut de câblage. La bonne pratique consiste à tracer chaque alarme, identifier sa cause et engager une action corrective avant de réarmer.",
    timeLimit: 40,
  },
  {
    question: "Dans le contexte SSI, quelle est la rôle de la NF S 61-970 ?",
    choices: [
      "Elle définit les règles générales du SSI",
      "Elle encadre les règles d'installation du SDI (Système de Détection Incendie)",
      "Elle fixe les règles d'exploitation et de maintenance",
      "Elle spécifie les exigences des DAS",
    ],
    answer: [1],
    chapterLabel: "Réglementation",
    explanation: "La NF S 61-970 définit les règles d'installation du SDI. La NF S 61-931 pose le cadre général du SSI, la NF S 61-932 traite des règles d'installation du SMSI, et la NF S 61-933 couvre l'exploitation et la maintenance. Connaître ces distinctions aide l'exploitant à savoir sur quel référentiel s'appuyer.",
    timeLimit: 40,
  },
  {
    question: "Un exploitant doit 'connaître les équipements pilotés' par le SSI de son bâtiment. Pourquoi est-ce essentiel ?",
    choices: [
      "Pour pouvoir les réparer en cas de panne",
      "Pour comprendre les conséquences d'une information incendie sur le site et préparer les procédures adaptées",
      "Pour obtenir la certification d'exploitant SSI",
      "Pour réduire le nombre de fausses alarmes",
    ],
    answer: [1],
    chapterLabel: "Rôle d'un SSI",
    explanation: "L'exploitant doit savoir quelles actions le SSI commande en cas d'alarme : fermetures de portes, désenfumage, rappel d'ascenseurs, arrêts techniques, etc. Sans cette connaissance, impossible d'anticiper les impacts sur les activités, de préparer les consignes d'évacuation ou de répondre correctement à une alarme.",
    timeLimit: 40,
  },
  {
    question: "Qu'est-ce qu'un 'défaut secteur' sur une centrale SSI ?",
    choices: [
      "Une panne d'un détecteur dans un secteur du bâtiment",
      "Une anomalie de la zone de détection numéro 1",
      "La perte de l'alimentation principale (réseau EDF), le système passant sur batterie secours",
      "Un court-circuit sur la boucle de détection",
    ],
    answer: [2],
    chapterLabel: "Lecture des états",
    explanation: "Un défaut secteur indique que l'alimentation réseau (220 V EDF) est coupée ou en anomalie. Le SSI bascule automatiquement sur sa batterie secours. L'exploitant doit en informer la maintenance : si la coupure persiste, la batterie s'épuisera et le système ne sera plus opérationnel. Ce défaut est à traiter sans délai.",
    timeLimit: 40,
  },
  {
    question: "Dans un ERP, à quelle fréquence minimum les essais périodiques du SSI doivent-ils être réalisés ?",
    choices: [
      "Une fois par mois",
      "Une fois par semaine pour les vérifications courantes et une fois par an pour l'essai complet",
      "Uniquement lors des visites de commission de sécurité",
      "Tous les 5 ans lors du renouvellement d'agrément",
    ],
    answer: [1],
    chapterLabel: "Maintenance SSI",
    explanation: "La NF S 61-933 préconise des vérifications hebdomadaires (test de déclencheurs manuels et vérifications visuelles), des vérifications trimestrielles (DAS, batteries, zones) et un essai annuel complet avec mainteneur agréé. Ces fréquences peuvent être adaptées selon le règlement du bâtiment ou le contrat de maintenance.",
    timeLimit: 45,
  },
  {
    question: "Un détecteur thermique est plus adapté que l'optique dans un local :",
    choices: [
      "Bureau climatisé à faible empoussièrement",
      "Cuisine ou local avec fumées de cuisson importantes",
      "Couloir d'évacuation sans risque particulier",
      "Salle serveur à environnement contrôlé",
    ],
    answer: [1],
    chapterLabel: "Détection incendie",
    explanation: "Dans une cuisine ou un local avec vapeurs ou fumées non incendiaires (graisses, buée), un détecteur optique ou ionique déclencherait en permanence des alarmes intempestives. Le détecteur thermique ne réagit qu'à une montée réelle de température, le rendant plus adapté à ces ambiances. Il détecte les feux à flammes vives.",
    timeLimit: 40,
  },
  {
    question: "Qu'est-ce qu'une alarme 'restreinte' dans un SSI de type 1 ?",
    choices: [
      "Une alarme audible uniquement dans le local en feu",
      "Une alarme destinée uniquement au personnel d'exploitation ou de sécurité pour levée de doute, avant l'alarme générale",
      "Une alarme silencieuse transmise uniquement aux pompiers",
      "Une alarme émise uniquement en dehors des heures d'ouverture",
    ],
    answer: [1],
    chapterLabel: "Alarme & évacuation",
    explanation: "L'alarme restreinte (phase 1) avertit le personnel d'exploitation et de sécurité pour qu'il effectue une levée de doute. Si l'incendie est confirmé ou si personne ne répond dans le délai prévu, l'alarme générale (phase 2) est déclenchée pour l'évacuation de tous les occupants.",
    timeLimit: 40,
  },
  {
    question: "Le bon niveau d'exploitation d'un SSI consiste principalement à :",
    choices: [
      "Connaître toute l'ingénierie et les schémas de câblage du système",
      "Savoir ce que fait l'installation, quels locaux elle protège, et quelles conséquences une alarme peut déclencher",
      "Être capable d'effectuer les maintenances préventives sans mainteneur",
      "Gérer les mises à niveau matérielles de la centrale",
    ],
    answer: [1],
    chapterLabel: "Rôle d'un SSI",
    explanation: "Le cours définit clairement que le bon niveau d'exploitation ne consiste pas à maîtriser toute l'ingénierie d'un SSI, mais à savoir ce que l'installation fait, quels équipements elle pilote, quels locaux elle protège et quelles conséquences une information incendie peut déclencher sur le site. C'est de la culture d'exploitation, pas de la conception.",
    timeLimit: 40,
  },
  {
    question: "Un défaut de supervision non remonté à la centrale SSI est découvert lors d'une ronde. L'exploitant doit :",
    choices: [
      "Rebrancher lui-même le câble de supervision",
      "Ignorer car la centrale n'a pas signalé d'anomalie",
      "Documenter le défaut avec horodatage et localisation, puis signaler au responsable sécurité et à la maintenance SSI",
      "Attendre la prochaine visite de maintenance préventive",
    ],
    answer: [2],
    eliminatory: true,
    chapterLabel: "Bons réflexes d'exploitation",
    explanation: "Un défaut de supervision signifie qu'une partie du SSI fonctionne en aveugle : un incendie dans cette zone pourrait ne pas être détecté. Le câblage SSI ne peut être modifié que par un technicien qualifié. L'exploitant doit documenter et signaler immédiatement — ne pas modifier le câblage lui-même.",
    timeLimit: 40,
  },
  {
    question: "La traçabilité des événements SSI (alarmes, défauts, MHS) est obligatoire. Quel est l'outil dédié ?",
    choices: [
      "Un fichier Excel partagé en interne",
      "Le registre de sécurité incendie",
      "Le rapport mensuel du technicien",
      "Le panneau d'affichage de la salle de contrôle",
    ],
    answer: [1],
    chapterLabel: "Maintenance SSI",
    explanation: "Le registre de sécurité incendie est le document officiel et obligatoire. Il doit consigner chaque événement SSI : date, heure, localisation, type (alarme/défaut/MHS/essai), mesure prise, interlocuteur contacté et retour à la normale. C'est la preuve de bonne exploitation lors des contrôles et en cas de sinistre.",
    timeLimit: 35,
  },
  {
    question: "Quelle est la conséquence d'une alarme réelle traitée comme une 'fausse alarme habituelle' ?",
    choices: [
      "Aucune : les systèmes modernes compensent les erreurs humaines",
      "Un retard d'évacuation et d'intervention qui peut avoir des conséquences irréversibles",
      "Une alarme supplémentaire déclenchée automatiquement",
      "Un signalement automatique à la commission de sécurité",
    ],
    answer: [1],
    eliminatory: true,
    chapterLabel: "Rôle d'un SSI",
    explanation: "La répétition de fausses alarmes crée une accoutumance dangereuse. Une alarme réelle ignorée ou traitée avec retard peut laisser au feu le temps de se propager de façon catastrophique. Chaque alarme doit être traitée comme potentiellement réelle jusqu'à levée de doute physique organisée selon la procédure du site.",
    timeLimit: 40,
  },
  {
    question: "Quelle action est interdite à un exploitant SSI sans habilitation spécifique ?",
    choices: [
      "Consulter l'historique des alarmes sur la centrale",
      "Modifier le câblage ou la configuration du SSI",
      "Déclencher manuellement un test sur un déclencheur manuel",
      "Signaler un défaut au mainteneur",
    ],
    answer: [1],
    chapterLabel: "Bons réflexes d'exploitation",
    explanation: "La modification du câblage ou de la configuration du SSI est une opération de maintenance spécialisée. Elle nécessite une qualification et une habilitation spécifiques. Un exploitant peut consulter, tester (avec procédure), signaler et tracer — mais il ne doit jamais modifier le câblage ni reconfigurer la centrale sans technicien qualifié.",
    timeLimit: 40,
  },
  {
    question: "Dans un SSI, quelle est la fonction d'un 'clapet coupe-feu' commandé par le SMSI ?",
    choices: [
      "Fermer automatiquement les gaines de ventilation pour éviter la propagation des fumées et du feu",
      "Déclencher le désenfumage naturel",
      "Couper l'alimentation électrique des équipements non essentiels",
      "Déclencher l'extincteur automatique de la zone concernée",
    ],
    answer: [0],
    chapterLabel: "CMSI & DAS",
    explanation: "Le clapet coupe-feu est un DAS installé dans les gaines de ventilation. Commandé par le SMSI, il se ferme automatiquement lors d'une alarme incendie pour éviter que fumées et flammes se propagent d'un local à l'autre via les gaines. Il est essentiel à la stratégie de compartimentage du bâtiment.",
    timeLimit: 40,
  },
  {
    question: "Après le passage de l'alarme, un exploitant constate que certains DAS (volets de désenfumage) ne sont pas revenus en position de veille. Que doit-il faire ?",
    choices: [
      "Les forcer manuellement en position fermée immédiatement",
      "Signaler au mainteneur SSI et tracer l'anomalie dans le registre",
      "Ignorer car les DAS reviennent toujours d'eux-mêmes avec le temps",
      "Réarmer la centrale pour les rappeler automatiquement",
    ],
    answer: [1],
    chapterLabel: "CMSI & DAS",
    explanation: "Un DAS qui ne revient pas en position de veille après alarme est en anomalie. Il peut indiquer une panne mécanique, un défaut d'alimentation ou un câble endommagé. L'exploitant ne doit pas forcer mécaniquement : il doit signaler au mainteneur et tracer l'anomalie. Le réarmement seul ne corrige pas une panne mécanique.",
    timeLimit: 40,
  },
  {
    question: "L'expression 'escalader vers le bon interlocuteur' en exploitation SSI signifie :",
    choices: [
      "Monter physiquement à l'étage supérieur pour vérifier une alarme",
      "Transmettre l'information à la bonne personne selon la situation : mainteneur, sécurité incendie, coordinateur SSI ou secours externes",
      "Augmenter le niveau d'alarme sur la centrale",
      "Contacter en priorité le directeur général pour toute anomalie",
    ],
    answer: [1],
    chapterLabel: "Bons réflexes d'exploitation",
    explanation: "L'exploitant doit savoir quand et vers qui escalader : le mainteneur pour un défaut technique, la sécurité incendie pour une procédure, le coordinateur SSI pour une MHS complexe, les secours externes (18/15) en cas de feu confirmé. Une bonne escalade évite les retards et les décisions improvisées sous pression.",
    timeLimit: 40,
  },
  {
    question: "Qu'indique un voyant 'DERANGEMENT' (souvent orange) sur une centrale SSI ?",
    choices: [
      "Un incendie est détecté dans le bâtiment",
      "Une mise hors service partielle est active",
      "Une anomalie de disponibilité ou de fonctionnement d'un composant, sans détection de feu",
      "Le mode essai est activé sur la zone concernée",
    ],
    answer: [2],
    chapterLabel: "Lecture des états",
    explanation: "Le dérangement (voyant orange sur beaucoup de centrales) signale une anomalie technique qui affecte la disponibilité du système : câble débranché, détecteur encrassé, batterie faible. Ce n'est pas une alarme feu mais c'est un signal qui doit être traité pour maintenir la protection complète du bâtiment.",
    timeLimit: 40,
  },
  {
    question: "Pourquoi le SSI s'inscrit-il dans un 'dispositif réglementaire global' et non comme un équipement isolé ?",
    choices: [
      "Car il est toujours relié à internet pour la télésurveillance",
      "Car son dimensionnement, ses fonctions et ses obligations d'exploitation dépendent du type et de la catégorie du bâtiment (ERP, IGH, site industriel)",
      "Car il nécessite une assurance spécifique",
      "Car il est systématiquement audité par les autorités tous les ans",
    ],
    answer: [1],
    chapterLabel: "Réglementation",
    explanation: "Le SSI n'est pas un équipement autonome : ses fonctions, sa catégorie et ses obligations d'exploitation sont définis par le règlement du bâtiment dans lequel il s'inscrit (arrêté ERP, IGH, réglementation industrielle). Un exploitant doit donc comprendre son SSI dans son contexte réglementaire global, pas seulement comme un appareil technique.",
    timeLimit: 40,
  },
  {
    question: "Une zone du SSI affiche 'ESSAI' sur la centrale. Quelle est la signification de cet état ?",
    choices: [
      "Un incendie suspect est en cours d'investigation",
      "Un technicien effectue des tests sur cette zone : les alarmes de la zone ne déclencheront pas l'évacuation",
      "La zone est définitivement mise hors service",
      "Un défaut a été détecté et est en cours de résolution",
    ],
    answer: [1],
    chapterLabel: "Lecture des états",
    explanation: "L'état ESSAI signale que la zone est en mode test encadré : les déclenchements liés aux tests ne provoqueront pas d'évacuation réelle. Cet état doit être limité dans le temps, consigné dans le registre et clairement identifiable par toutes les personnes susceptibles de lire la centrale, pour éviter toute confusion avec une vraie alarme.",
    timeLimit: 40,
  },
];

// ─── ATEX ────────────────────────────────────────────────────────────────────

quizContent["atex"] = [
  {
    question: "Que signifie ATEX ?",
    choices: [
      "Atmosphère Explosive",
      "Atmosphère Toxique Extrême",
      "Appareillage Technique d'Extinction",
      "Autorisation de Travaux en Espace Exigu",
    ],
    answer: [0],
    chapterLabel: "Atmosphères explosives",
    explanation: "ATEX est l'abréviation d'Atmosphère Explosive. Une atmosphère explosive est un mélange d'air et de substances inflammables (gaz, vapeurs ou poussières) dans des proportions susceptibles de s'enflammer et de provoquer une explosion.",
    timeLimit: 30,
  },
  {
    question: "Combien de conditions simultanées sont nécessaires pour qu'une explosion se produise ?",
    choices: [
      "3 conditions (combustible, comburant, inflammation)",
      "4 conditions",
      "6 conditions (combustible, comburant, inflammation, concentration dans la plage, volume suffisant, confinement)",
      "2 conditions (combustible et source d'inflammation)",
    ],
    answer: [2],
    chapterLabel: "Atmosphères explosives",
    explanation: "Pour qu'une explosion se produise, 6 conditions doivent être réunies simultanément : un combustible, un comburant (oxygène de l'air), une source d'inflammation, une concentration dans la plage explosive (entre LIE et LSE), un volume suffisant et un confinement. Supprimer une seule de ces conditions empêche l'explosion.",
    timeLimit: 35,
  },
  {
    question: "Quelle est la différence entre la LIE et la LSE ?",
    choices: [
      "LIE = Limite Inférieure d'Explosivité (trop pauvre), LSE = Limite Supérieure d'Explosivité (trop riche) — l'explosion n'est possible qu'entre ces deux limites",
      "LIE = niveau de danger faible, LSE = niveau de danger élevé",
      "LIE et LSE désignent les deux types de zones ATEX gaz et poussières",
      "Ce sont des indicateurs de température, pas de concentration",
    ],
    answer: [0],
    chapterLabel: "Atmosphères explosives",
    explanation: "La LIE (Limite Inférieure d'Explosivité) est la concentration minimale en combustible en dessous de laquelle le mélange est trop pauvre pour exploser. La LSE (Limite Supérieure d'Explosivité) est la concentration maximale au-dessus de laquelle le mélange est trop riche. L'explosion n'est possible qu'entre ces deux limites.",
    timeLimit: 35,
  },
  {
    question: "Quelle directive européenne encadre la protection des travailleurs exposés aux risques ATEX sur les lieux de travail ?",
    choices: [
      "Directive 94/9/CE",
      "Directive 99/92/CE",
      "Directive 89/391/CEE",
      "Directive 2006/42/CE",
    ],
    answer: [1],
    chapterLabel: "Réglementation ATEX",
    explanation: "La directive 99/92/CE (directive ATEX 'lieux de travail') fixe les prescriptions minimales pour la protection des travailleurs susceptibles d'être exposés à des risques liés aux atmosphères explosives. Elle a été transposée en droit français par le décret 2002-1553. La directive 94/9/CE concerne quant à elle les équipements utilisés en zone ATEX.",
    timeLimit: 35,
  },
  {
    question: "Quelle est la classification correcte de la Zone 1 en ATEX gaz ?",
    choices: [
      "Zone où une atmosphère explosive est présente en permanence",
      "Zone où une atmosphère explosive est susceptible de se présenter occasionnellement en fonctionnement normal",
      "Zone où une atmosphère explosive ne se présente que rarement et pour de courtes durées",
      "Zone sans risque d'atmosphère explosive en fonctionnement normal",
    ],
    answer: [1],
    chapterLabel: "Zonage & classification",
    explanation: "La Zone 1 (gaz) correspond à un emplacement où une atmosphère explosive est susceptible de se présenter occasionnellement en fonctionnement normal. La Zone 0 désigne une présence permanente, et la Zone 2 une présence exceptionnelle et de courte durée.",
    timeLimit: 30,
  },
  {
    question: "Dans quelle zone ATEX poussières classe-t-on l'intérieur d'un silo à farine en fonctionnement ?",
    choices: [
      "Zone 2",
      "Zone 21",
      "Zone 20",
      "Zone 22",
    ],
    answer: [2],
    chapterLabel: "Zonage & classification",
    explanation: "L'intérieur d'un silo à farine est classé Zone 20 (poussières) car l'atmosphère explosive sous forme de nuage de poussières est présente en permanence ou pendant de longues périodes. Les zones 21 et 22 correspondent à des présences occasionnelles ou rares.",
    timeLimit: 30,
  },
  {
    question: "Quelle catégorie d'équipement Ex est requise pour une utilisation en Zone 0 (gaz) ?",
    choices: [
      "Catégorie 3",
      "Catégorie 2",
      "Catégorie 1",
      "Toute catégorie certifiée Ex est acceptable en Zone 0",
    ],
    answer: [2],
    chapterLabel: "Équipements Ex",
    explanation: "La Zone 0 (gaz, présence permanente d'atmosphère explosive) requiert des équipements de catégorie 1 offrant le plus haut niveau de protection. La catégorie 2 convient pour les zones 1 et 21, et la catégorie 3 pour les zones 2 et 22.",
    timeLimit: 30,
  },
  {
    question: "Que signifie le marquage 'Ex' sur un équipement ?",
    choices: [
      "L'équipement est exceptionnel et de haute qualité",
      "L'équipement est certifié pour utilisation en atmosphère explosive — il ne constitue pas une source d'inflammation dans les conditions prévues",
      "L'équipement est exempté de contrôle réglementaire",
      "L'équipement a été examiné par l'inspection du travail",
    ],
    answer: [1],
    chapterLabel: "Équipements Ex",
    explanation: "Le marquage Ex (accompagné du marquage CE) atteste que l'équipement a été conçu, fabriqué et testé pour ne pas constituer une source d'inflammation dans les conditions d'utilisation prévues en zone ATEX. Son utilisation hors de la zone pour laquelle il est certifié reste interdite.",
    timeLimit: 30,
  },
  {
    question: "Parmi ces situations, laquelle peut constituer une source d'inflammation en zone ATEX ?",
    choices: [
      "Utiliser un outil en alliage de cuivre certifié ATEX",
      "Porter des vêtements de travail antistatiques certifiés EN 1149-5",
      "Utiliser un téléphone portable standard non certifié Ex",
      "Mesurer la concentration atmosphérique avec un explosimètre certifié Ex",
    ],
    answer: [2],
    chapterLabel: "Prévention & contrôles",
    explanation: "Un téléphone portable standard n'est pas certifié Ex et peut générer des étincelles électriques lors de son utilisation (appel, vibration, charge). Son utilisation en zone ATEX est strictement interdite. Seuls les appareils certifiés Ex sont autorisés.",
    timeLimit: 30,
  },
  {
    question: "À quel seuil de concentration l'alarme d'un explosimètre portable doit-elle être réglée pour permettre une évacuation sans danger ?",
    choices: [
      "100 % de la LIE",
      "50 % de la LIE",
      "20 % de la LIE",
      "À la LSE",
    ],
    answer: [2],
    chapterLabel: "Prévention & contrôles",
    explanation: "L'alarme doit être réglée à 20 % de la LIE (Limite Inférieure d'Explosivité) pour laisser une marge de sécurité suffisante permettant l'évacuation et la mise en sécurité de la zone avant d'atteindre le seuil réellement dangereux.",
    timeLimit: 30,
  },
  {
    question: "Qu'est-ce que le DRPE ?",
    choices: [
      "Document de Risques pour les Personnels Électriciens",
      "Document Relatif à la Protection contre les Explosions — obligatoire pour tout établissement disposant de zones ATEX",
      "Déclaration Réglementaire de Prévention des Explosions",
      "Dossier de Réception des Produits Explosifs",
    ],
    answer: [1],
    chapterLabel: "Réglementation ATEX",
    explanation: "Le DRPE (Document Relatif à la Protection contre les Explosions) est obligatoire pour tout employeur dont les locaux comportent des zones ATEX. Il précise les risques identifiés, la classification des zones, les mesures de prévention et les équipements certifiés utilisés. Il doit être établi avant le début des travaux et tenu à jour.",
    timeLimit: 35,
  },
  {
    question: "Quelles normes de vêtements de travail sont requises en zone ATEX pour éviter les risques d'inflammation par électricité statique ?",
    choices: [
      "EN 340 (vêtements de protection générale)",
      "EN 1149-5 (vêtements antistatiques)",
      "EN ISO 11612 (protection thermique)",
      "EN 471 (haute visibilité)",
    ],
    answer: [1],
    chapterLabel: "Prévention & contrôles",
    explanation: "En zone ATEX, les vêtements doivent être conformes à la norme EN 1149-5 qui définit les exigences en matière de propriétés électrostatiques. Ils doivent avoir une résistance superficielle inférieure à 10^9 Ω pour éviter l'accumulation de charges susceptibles de générer une étincelle.",
    timeLimit: 30,
  },
  {
    question: "Quel document est obligatoire avant de réaliser des travaux par points chauds (soudure, meulage) en zone ATEX ?",
    choices: [
      "Une simple autorisation verbale du responsable",
      "Un permis de feu validé par une personne compétente désignée par l'employeur",
      "Un rapport d'intervention",
      "Un ordre de travail standard",
    ],
    answer: [1],
    chapterLabel: "Prévention & contrôles",
    explanation: "Les travaux par points chauds (soudure, découpe, meulage, perçage) constituent la première cause d'accidents ATEX. Un permis de feu est obligatoire. Il doit inclure une vérification de l'atmosphère avant et pendant les travaux, la désignation d'une personne compétente, les EPI requis et les mesures de protection.",
    timeLimit: 35,
  },
  {
    question: "Quelle est la première action à entreprendre lorsque l'alarme de votre explosimètre se déclenche en zone ATEX ?",
    choices: [
      "Continuer le travail et noter l'heure de l'alarme pour le compte rendu",
      "Éteindre tous les équipements électriques et alerter",
      "Arrêter immédiatement le travail et évacuer calmement la zone sans créer de nouvelles sources d'inflammation, puis alerter le responsable",
      "Ventiler manuellement la zone et attendre que l'alarme cesse",
    ],
    answer: [2],
    chapterLabel: "Prévention & contrôles",
    explanation: "En cas d'alarme de l'explosimètre : arrêt immédiat du travail, évacuation calme de la zone (sans courir pour éviter les étincelles mécaniques et sans allumer/éteindre d'équipements électriques), puis alerte du responsable et des secours. Ne jamais continuer à travailler ou rester dans une atmosphère potentiellement explosive.",
    timeLimit: 35,
  },
  {
    question: "Un salarié peut-il se retirer d'une zone ATEX s'il estime que la situation présente un danger grave et imminent ?",
    choices: [
      "Non, il doit d'abord obtenir l'accord écrit de son employeur",
      "Oui, le droit d'alerte et de retrait est prévu par le Code du travail — aucune sanction ne peut lui être infligée s'il avait un motif raisonnable de croire au danger",
      "Oui, mais uniquement si le représentant du personnel est présent",
      "Non, seul le responsable de sécurité peut décider d'évacuer",
    ],
    answer: [1],
    chapterLabel: "Réglementation ATEX",
    explanation: "L'article L4131-1 du Code du travail reconnaît à tout travailleur le droit de se retirer d'une situation dont il a un motif raisonnable de penser qu'elle présente un danger grave et imminent pour sa vie ou sa santé. L'employeur ne peut pas lui demander de reprendre son poste tant que le danger persiste, et aucune sanction ne peut être prononcée.",
    timeLimit: 35,
  },
  {
    question: "Parmi les secteurs suivants, lesquels présentent un risque ATEX lié aux poussières ?",
    choices: [
      "Industrie agroalimentaire (silos de farine, de sucre), menuiserie et métallurgie uniquement",
      "Uniquement l'industrie chimique et pétrochimique",
      "Industrie agroalimentaire, menuiserie, métallurgie, traitement des eaux, imprimerie — partout où des poussières combustibles peuvent se former",
      "Seuls les sites classés ICPE sont concernés par le risque ATEX poussières",
    ],
    answer: [2],
    chapterLabel: "Atmosphères explosives",
    explanation: "Le risque ATEX poussières concerne de nombreux secteurs : agroalimentaire (farine, sucre, amidon, cacao), menuiserie (poussières de bois), métallurgie (copeaux métalliques), imprimerie (encres en poudre), traitement des eaux (boues séchées) et bien d'autres. Tout secteur produisant des poussières combustibles est potentiellement concerné.",
    timeLimit: 35,
  },
  {
    question: "Quel pictogramme signale une zone ATEX réglementaire ?",
    choices: [
      "Un cercle rouge avec une croix blanche",
      "Un triangle jaune avec une flamme noire à l'intérieur",
      "Un carré bleu avec la lettre E",
      "Un rectangle orange avec les lettres AT",
    ],
    answer: [1],
    chapterLabel: "Zonage & classification",
    explanation: "Le pictogramme réglementaire ATEX est un triangle d'avertissement sur fond jaune avec une flamme noire à l'intérieur. Ce signe doit être apposé à l'entrée de chaque zone ATEX, conformément à la directive 92/58/CEE sur la signalisation de sécurité.",
    timeLimit: 25,
  },
  {
    question: "Qu'est-ce que l'inertage d'une atmosphère et pourquoi est-il utilisé en zone ATEX ?",
    choices: [
      "C'est l'utilisation d'équipements lourds pour stabiliser les installations — il est utilisé pour réduire les vibrations",
      "C'est l'introduction d'un gaz neutre (azote, CO2) pour maintenir la teneur en oxygène sous la Concentration Limite en Oxygène, empêchant ainsi l'explosion",
      "C'est la neutralisation chimique des produits inflammables pour les rendre non explosifs",
      "C'est la mise à la terre de tous les équipements pour éliminer l'électricité statique",
    ],
    answer: [1],
    chapterLabel: "Prévention & contrôles",
    explanation: "L'inertage consiste à introduire un gaz neutre (azote, CO2, argon) dans un espace pour maintenir la teneur en oxygène en dessous de la Concentration Limite en Oxygène (CLO). Sans oxygène suffisant, l'explosion est impossible même si une atmosphère de gaz inflammable est présente. C'est une mesure de protection efficace dans les cuves et réacteurs.",
    timeLimit: 40,
  },
  {
    question: "Un technicien doit intervenir sur une vanne en Zone 1 (gaz). Il ne possède pas d'autorisation de travail pour cette zone. Que doit-il faire ?",
    choices: [
      "Entrer rapidement pour une intervention rapide sans s'attarder",
      "Appeler son responsable depuis l'extérieur de la zone et obtenir une autorisation de travail valide avant toute intervention",
      "Demander à un collègue de surveiller pendant qu'il travaille",
      "Consulter le plan de prévention du site et entrer s'il ne voit pas d'interdiction explicite",
    ],
    answer: [1],
    chapterLabel: "Réglementation ATEX",
    explanation: "Toute intervention en zone ATEX nécessite une autorisation de travail valide, établie par une personne compétente désignée par l'employeur. Il est formellement interdit d'entrer en zone ATEX sans cette autorisation, même pour une intervention courte. Le technicien doit appeler son responsable depuis l'extérieur et attendre l'autorisation.",
    timeLimit: 35,
  },
  {
    question: "Parmi ces mesures de prévention, laquelle agit directement sur la suppression de la source de combustible en zone ATEX ?",
    choices: [
      "Porter des vêtements antistatiques",
      "Utiliser des équipements certifiés catégorie 1",
      "Assurer une ventilation efficace pour maintenir la concentration du gaz sous la LIE",
      "Installer des extincteurs adaptés aux produits présents",
    ],
    answer: [2],
    chapterLabel: "Prévention & contrôles",
    explanation: "La ventilation agit directement sur la suppression de la source de combustible en diluant la concentration du gaz ou des vapeurs inflammables en dessous de la LIE. C'est une mesure de prévention primaire. Les vêtements antistatiques et les équipements certifiés agissent sur la suppression des sources d'inflammation, tandis que les extincteurs sont une mesure de protection (atténuation des effets).",
    timeLimit: 40,
  },
  // ── Questions terrain ATEX ──────────────────────────────────────────────────
  {
    question: "Un technicien de maintenance doit intervenir dans une zone ATEX classée. Quelle est la première action à effectuer avant d'entrer dans la zone ?",
    choices: [
      "Vérifier qu'il porte ses EPI habituels",
      "S'assurer qu'une autorisation de travail valide a été délivrée et consulter le DRPCE",
      "Appeler un collègue pour qu'il surveille depuis l'entrée",
      "Entrer rapidement pour limiter l'exposition à la zone",
    ],
    answer: [1],
    explanation: "Toute intervention en zone ATEX impose une autorisation de travail préalable et la consultation du DRPCE (Document Relatif à la Protection Contre les Explosions). Ces deux étapes permettent de connaître la classification exacte de la zone, les équipements autorisés et les mesures de prévention à appliquer.",
    chapterLabel: "Intervention & maintenance",
    timeLimit: 40,
  },
  {
    question: "Lors d'une maintenance sur une tuyauterie en zone ATEX, l'ouverture de la tuyauterie crée une zone temporaire. Que doit-on faire ?",
    choices: [
      "Ignorer la zone temporaire si l'intervention est courte",
      "Identifier la zone temporaire, la mentionner dans le plan de prévention et appliquer les mesures compensatoires adaptées",
      "Reventiler la pièce et continuer sans formalité",
      "Demander uniquement un permis de feu si l'on utilise un outil chauffant",
    ],
    answer: [1],
    explanation: "L'ouverture d'une tuyauterie ou d'un équipement contenant un fluide inflammable crée une zone ATEX temporaire qui doit être identifiée dans le plan de prévention ou le permis de travail. Des mesures compensatoires (ventilation renforcée, explosimètre, interdiction d'autres sources d'inflammation à proximité) doivent être mises en place.",
    chapterLabel: "Intervention & maintenance",
    timeLimit: 50,
  },
  {
    question: "Un opérateur découvre qu'un outil électroportatif utilisé par un sous-traitant en zone ATEX ne porte pas le marquage Ex. Que doit-il faire ?",
    choices: [
      "Laisser le sous-traitant continuer si l'intervention est presque terminée",
      "Arrêter immédiatement l'utilisation de l'outil et sortir de la zone pour régulariser la situation",
      "Autoriser l'outil si le risque lui semble faible dans cette zone",
      "Signaler le problème à la fin de la journée dans le registre",
    ],
    answer: [1],
    explanation: "Un outil non certifié Ex constitue une source d'inflammation potentielle en zone ATEX. Son utilisation doit être stoppée immédiatement, quelle que soit l'avancement des travaux. L'utilisation d'équipements non conformes est une des causes les plus fréquentes d'accidents ATEX.",
    chapterLabel: "Équipements Ex",
    timeLimit: 40,
  },
  {
    question: "Des travaux de soudure sont prévus à proximité d'une zone ATEX. Quelle condition est indispensable avant de commencer ?",
    choices: [
      "La présence d'un extincteur à poudre à moins de 5 mètres",
      "La délivrance d'un permis de feu signé par le responsable compétent, avec contrôle atmosphérique préalable",
      "Le port d'un masque à gaz par le soudeur",
      "L'accord oral du chef d'équipe présent sur le chantier",
    ],
    answer: [1],
    explanation: "Tout travail par points chauds (soudure, meulage, découpage) à proximité d'une zone ATEX nécessite impérativement un permis de feu. Ce document formalise la nature des travaux, la zone concernée, les risques identifiés, les mesures de prévention et les moyens d'extinction disponibles. Un contrôle atmosphérique à l'explosimètre doit être réalisé avant le début des travaux.",
    chapterLabel: "Permis de feu",
    timeLimit: 45,
  },
  {
    question: "Avant une intervention en zone ATEX, l'explosimètre affiche 18 % de la LIE. Que faire ?",
    choices: [
      "Intervenir normalement, la valeur est inférieure à 100 % de la LIE",
      "Attendre quelques minutes et re-mesurer avant de décider",
      "Ne pas pénétrer dans la zone — le seuil d'alarme est généralement fixé à 10 % de la LIE, 18 % impose l'évacuation immédiate",
      "Mettre en marche la ventilation et entrer avec un masque filtrant",
    ],
    answer: [2],
    explanation: "Le premier seuil d'alarme de l'explosimètre est fixé à 10 % de la LIE — il déclenche une alerte sonore et lumineuse. À 18 % de la LIE, on dépasse largement ce seuil : il est interdit de pénétrer dans la zone. Le deuxième seuil (25 à 50 % selon le site) impose l'évacuation et la coupure automatique des équipements non Ex.",
    chapterLabel: "Contrôle atmosphérique",
    timeLimit: 45,
  },
  {
    question: "En cours d'intervention en zone ATEX, la ventilation tombe en panne. Quelle est la bonne conduite à tenir ?",
    choices: [
      "Terminer rapidement l'opération en cours avant d'évacuer",
      "Arrêter immédiatement toute source d'inflammation, évacuer la zone et ne pas reprendre les travaux avant remise en service de la ventilation et contrôle atmosphérique",
      "Ouvrir une fenêtre ou une porte pour pallier le défaut de ventilation",
      "Continuer si l'intervention est presque terminée et que la zone semble saine",
    ],
    answer: [1],
    explanation: "Une panne de ventilation en zone ATEX modifie immédiatement les conditions de sécurité et peut conduire à une accumulation de gaz ou vapeurs inflammables. Toute source d'inflammation doit être supprimée et la zone évacuée sans délai. La reprise des travaux n'est possible qu'après remise en service de la ventilation et contrôle atmosphérique confirmant un niveau inférieur au seuil d'alarme.",
    chapterLabel: "Contrôle atmosphérique",
    timeLimit: 45,
  },
];

// ─── SSIAP1 ──────────────────────────────────────────────────────────────────

quizContent["ssiap1"] = [
  {
    question: "Que signifie SSIAP ?",
    choices: [
      "Service de Sécurité Intérieure et d'Aide aux Personnes",
      "Service de Sécurité Incendie et d'Assistance à Personnes",
      "Système de Surveillance Incendie et d'Alerte aux Personnes",
      "Service de Sécurité Industrielle et d'Aide Permanente",
    ],
    answer: [1],
      chapterLabel: "Rôles & missions SSIAP1",
    explanation: "SSIAP signifie Service de Sécurité Incendie et d'Assistance à Personnes. Il est organisé en 3 niveaux : SSIAP1 (agent de service), SSIAP2 (chef d'équipe), SSIAP3 (chef de service). Son organisation est définie par l'arrêté du 2 mai 2005.",
    timeLimit: 30,
  },
  {
    question: "Combien de conditions simultanées le tétraèdre du feu recense-t-il ?",
    choices: ["2", "3", "4", "6"],
    answer: [2],
      chapterLabel: "Théorie du feu",
    explanation: "Le tétraèdre du feu recense 4 conditions : combustible, comburant (oxygène), énergie d'activation (chaleur) et réaction en chaîne. Il remplace l'ancien triangle du feu en ajoutant cette quatrième condition. Supprimer une seule condition éteint le feu.",
    timeLimit: 25,
  },
  {
    question: "Pour quel type de feu l'eau seule est-elle formellement interdite ?",
    choices: [
      "Feux de classe A (solides)",
      "Feux de classe B (liquides inflammables)",
      "Feux de classe C (gaz)",
      "Feux de classe D (métaux)",
    ],
    answer: [1],
      chapterLabel: "Théorie du feu",
    explanation: "L'eau seule est interdite sur les feux de classe B (liquides inflammables). Elle se vaporise violemment, projette du liquide enflammé et risque de provoquer des brûlures graves et d'étendre l'incendie. Il faut utiliser de la mousse AFFF, du CO₂ ou de la poudre ABC.",
    timeLimit: 30,
  },
  {
    question: "Quelle est la méthode DAPS pour utiliser un extincteur ?",
    choices: [
      "Déclencher, Actionner, Pointer, Stabiliser",
      "Dégoupiller, Acheminer, Pointer, Supprimer",
      "Déclencher, Approcher, Pulvériser, Stopper",
      "Dégager, Activer, Projeter, Sécuriser",
    ],
    answer: [1],
      chapterLabel: "Extinction",
    explanation: "DAPS = Dégoupiller (retirer la goupille de sécurité) · Acheminer (s'approcher à 3-4 mètres du feu) · Pointer (diriger le jet vers la BASE des flammes) · Supprimer (balayer en mouvements de gauche à droite jusqu'à extinction).",
    timeLimit: 30,
  },
  {
    question: "Quel agent extincteur est le seul adapté aux feux de graisses alimentaires (classe F) ?",
    choices: [
      "Eau pulvérisée avec additif",
      "CO₂ (dioxyde de carbone)",
      "Poudre polyvalente ABC",
      "Agent F spécifique",
    ],
    answer: [3],
      chapterLabel: "Extinction",
    explanation: "Seul l'agent F est adapté aux feux de classe F (graisses alimentaires de cuisine). L'eau provoque une explosion par flash de vapeur (projections à haute température). Le CO₂ crée un risque de flash thermique. La poudre ABC est inefficace sur les huiles à très haute température.",
    timeLimit: 30,
  },
  {
    question: "À quelle catégorie d'ERP correspond un établissement accueillant entre 701 et 1 500 personnes ?",
    choices: ["1re catégorie", "2e catégorie", "3e catégorie", "4e catégorie"],
    answer: [1],
      chapterLabel: "Réglementation ERP",
    explanation: "Les ERP sont classés en 5 catégories : 1re cat. > 1 500 personnes · 2e cat. 701 à 1 500 · 3e cat. 301 à 700 · 4e cat. ≤ 300 (selon le type) · 5e cat. en dessous des seuils. Plus la catégorie est basse (1re), plus les obligations sont strictes.",
    timeLimit: 35,
  },
  {
    question: "Que doit faire en priorité le serre-file lors d'une évacuation incendie ?",
    choices: [
      "Guider le groupe vers la sortie de secours",
      "Contacter les pompiers depuis son téléphone",
      "Fermer les portes derrière lui et s'assurer que personne ne reste",
      "Utiliser l'extincteur le plus proche",
    ],
    answer: [2],
      chapterLabel: "Évacuation",
    explanation: "Le serre-file est en queue de groupe. Son rôle est de fermer les portes derrière lui (limiter la propagation du feu et des fumées) et de s'assurer qu'aucune personne ne reste dans la zone évacuée. Il signale toute personne manquante au chef d'évacuation.",
    timeLimit: 30,
  },
  {
    question: "Quel extincteur est adapté aux équipements électriques sous tension et ne laisse aucun résidu ?",
    choices: [
      "Eau pulvérisée",
      "Mousse AFFF",
      "CO₂ (dioxyde de carbone)",
      "Poudre polyvalente ABC",
    ],
    answer: [2],
      chapterLabel: "Extinction",
    explanation: "L'extincteur au CO₂ est le seul adapté aux équipements électriques sous tension (non conducteur) et ne laisse aucun résidu. Attention : son diffuseur devient extrêmement froid (-78°C) — ne pas le saisir à mains nues. À utiliser en espace ventilé (le CO₂ est asphyxiant en espace confiné).",
    timeLimit: 30,
  },
  {
    question: "Que signifie DAI dans le contexte du SSI ?",
    choices: [
      "Dispositif Automatique d'Intervention",
      "Détecteur Automatique d'Incendie",
      "Déclaration Administrative d'Intervention",
      "Déclencheur Automatique d'Incendie",
    ],
    answer: [1],
      chapterLabel: "Détection & alarme",
    explanation: "DAI = Détecteur Automatique d'Incendie. Il existe plusieurs types : optique de fumée (le plus courant), ionique (micro-particules de combustion), thermique (élévation de température) et détecteur de flammes. Les DAI font partie du SDI (Système de Détection Incendie), composante du SSI.",
    timeLimit: 30,
  },
  {
    question: "Quelle action ABSOLUMENT prioritaire déclencher en premier lors de la découverte d'un incendie ?",
    choices: [
      "Tenter d'éteindre le feu avec l'extincteur le plus proche",
      "Évacuer immédiatement le bâtiment",
      "Donner l'alarme (déclencheur manuel ou PC sécurité)",
      "Appeler les pompiers (18)",
    ],
    answer: [2],
      chapterLabel: "Détection & alarme",
    explanation: "La séquence obligatoire est : ALARMER → ALERTER → ATTAQUER (si possible). L'alarme prévient tous les occupants et déclenche le SSI. Elle doit être déclenchée avant toute tentative d'extinction ou d'évacuation. Ne jamais tenter d'éteindre avant d'avoir donné l'alarme.",
    timeLimit: 30,
  },
  {
    question: "Qu'est-ce que le DAS dans un SSI ?",
    choices: [
      "Détecteur Automatique de Sécurité",
      "Dispositif Actionné de Sécurité",
      "Déclencheur d'Alarme Sonore",
      "Document d'Actions de Sécurité",
    ],
    answer: [1],
    chapterLabel: "Détection & alarme",
    explanation: "DAS = Dispositif Actionné de Sécurité. Ce sont les équipements commandés par le CMSI lors d'une alarme : fermeture des portes coupe-feu, déclenchement du désenfumage, mise hors tension de certains équipements, déverrouillage des issues de secours. Ils constituent le volet 'mise en sécurité' du SSI.",
    timeLimit: 35,
  },
  {
    question: "Pour quel type de feu doit-on en priorité couper l'alimentation avant toute intervention ?",
    choices: ["Classe A (bois, papier)", "Classe B (liquides)", "Classe C (gaz)", "Classe D (métaux)"],
    answer: [2],
    chapterLabel: "Théorie du feu",
    explanation: "Pour un feu de classe C (gaz), la règle absolue est de COUPER L'ALIMENTATION EN GAZ avant toute autre action. Un feu de gaz qui continue à être alimenté ne doit pas être éteint — le gaz qui s'accumule sans brûler risque de former une atmosphère explosive et d'exploser.",
    timeLimit: 30,
  },
  {
    question: "Quelle est la distance d'attaque recommandée avec un extincteur portable ?",
    choices: ["1 à 2 mètres", "3 à 4 mètres", "5 à 6 mètres", "8 à 10 mètres"],
    answer: [1],
    chapterLabel: "Extinction",
    explanation: "La distance d'attaque avec un extincteur est de 3 à 4 mètres de la base des flammes. Trop proche : risque de brûlures et de projection de combustible enflammé. Trop loin : jet insuffisant. Se positionner dos au vent ou à la ventilation, et toujours s'assurer que la voie de retraite est dégagée.",
    timeLimit: 25,
  },
  {
    question: "Que faut-il faire avant d'ouvrir une porte lors d'une évacuation si l'on suspecte un incendie derrière ?",
    choices: [
      "L'ouvrir rapidement pour aérer la pièce",
      "Tâter la porte avec le dos de la main — si chaude, ne pas l'ouvrir",
      "Arroser la porte avec l'extincteur CO₂ avant de l'ouvrir",
      "Appeler les pompiers et attendre leurs instructions",
    ],
    answer: [1],
    chapterLabel: "Évacuation",
    explanation: "Tâter la porte (surface, pas la poignée — plus sensible) avec le dos de la main. Si elle est chaude, cela indique un feu de l'autre côté — ne pas l'ouvrir (risque de backdraft, propagation des flammes et fumées). Chercher une autre sortie ou se confiner en signalant sa présence.",
    timeLimit: 30,
  },
  {
    question: "Qu'est-ce qu'un EAS dans un ERP ?",
    choices: [
      "Extincteur Automatique de Sécurité",
      "Espace d'Attente Sécurisé (pour personnes à mobilité réduite)",
      "Équipement d'Alarme Sonore",
      "Entrée d'Accès Sécurisée",
    ],
    answer: [1],
    chapterLabel: "Évacuation",
    explanation: "EAS = Espace d'Attente Sécurisé. Ce sont des zones prévues pour accueillir les personnes à mobilité réduite (PMR) ne pouvant pas emprunter les escaliers lors d'une évacuation. Ils sont équipés d'un moyen de communication avec le PC sécurité et résistants au feu pour attendre l'intervention des secours.",
    timeLimit: 35,
  },
  {
    question: "À quelle fréquence minimale les exercices d'évacuation doivent-ils être organisés dans un ERP standard ?",
    choices: ["Tous les 3 ans", "Tous les 2 ans", "Au moins 1 fois par an", "Au moins 2 fois par an"],
    answer: [2],
    chapterLabel: "Réglementation ERP",
    explanation: "Les exercices d'évacuation sont obligatoires au moins 1 fois par an dans les ERP. Dans les établissements comportant des locaux à sommeil (hôtels, internats, établissements de soins), la fréquence est portée à au moins 2 fois par an selon le Code du travail (Art. R4227-39).",
    timeLimit: 25,
  },
  {
    question: "Quelle méthode d'extinction agit en interrompant la réaction en chaîne du feu ?",
    choices: ["Refroidissement (eau)", "Étouffement (mousse, sable)", "Inhibition (poudre BC/ABC)", "Soustraction (couper le gaz)"],
    answer: [2],
    chapterLabel: "Théorie du feu",
    explanation: "L'inhibition interrompt la réaction en chaîne par action chimique sur les radicaux libres. C'est le mode d'action principal des poudres BC et ABC. C'est la 4e face du tétraèdre du feu. Les autres méthodes agissent sur les 3 autres faces : combustible (soustraction), comburant (étouffement), chaleur (refroidissement).",
    timeLimit: 35,
  },
  {
    question: "Quel numéro appeler pour les pompiers en cas d'incendie en France ?",
    choices: ["15", "17", "18", "112"],
    answer: [2],
    chapterLabel: "Procédures opérationnelles",
    explanation: "Le 18 est le numéro des sapeurs-pompiers. Le 112 est le numéro d'urgence européen (redirige vers les services adaptés). Le 15 est le SAMU (urgences médicales), à appeler en plus s'il y a des victimes. Toujours donner l'adresse précise, la nature du sinistre et le nombre de personnes impliquées.",
    timeLimit: 20,
  },
  {
    question: "La poudre polyvalente ABC est déconseillée dans les locaux informatiques ou archives. Pourquoi ?",
    choices: [
      "Elle n'est pas efficace sur les feux électriques",
      "Elle est conductrice d'électricité",
      "Ses résidus sont corrosifs et endommagent irrémédiablement les équipements",
      "Elle est trop lourde à manier dans un espace confiné",
    ],
    answer: [2],
    chapterLabel: "Extinction",
    explanation: "Les résidus de poudre ABC sont très corrosifs et endommagent définitivement les équipements électroniques, serveurs, archives et matériels délicats. Dans ces locaux, le CO₂ est préférable car il ne laisse aucun résidu. La poudre reste toutefois la plus polyvalente pour les feux mixtes A+B+C en extérieur ou dans des locaux industriels.",
    timeLimit: 35,
  },
  {
    question: "Quelle est la définition d'un IGH (Immeuble de Grande Hauteur) pour un immeuble de bureaux ?",
    choices: [
      "Plancher du dernier niveau > 20 mètres",
      "Plancher du dernier niveau > 28 mètres",
      "Plancher du dernier niveau > 50 mètres",
      "Plancher du dernier niveau > 70 mètres",
    ],
    answer: [2],
    chapterLabel: "Réglementation ERP",
    explanation: "Un IGH est défini par la hauteur du plancher bas du dernier niveau accessible au public : > 28 mètres pour les immeubles d'habitation et > 50 mètres pour les bureaux, hôtels et autres usages. Cette distinction est importante car les IGH sont soumis à une réglementation spécifique plus contraignante que les ERP classiques.",
    timeLimit: 35,
  },
  {
    question:
      "Un établissement de type 'R' selon la classification des ERP accueille quelle activité principale ?",
    choices: [
      "Restaurants et débits de boissons",
      "Établissements d'enseignement, crèches et centres de vacances pour enfants",
      "Salles de spectacle et de conférence",
      "Établissements de soins et hôpitaux",
    ],
    answer: [1],
    chapterLabel: "Réglementation ERP",
    explanation:
      "Les ERP sont classés par type selon leur activité : R = Établissements d'enseignement (écoles, collèges, lycées, universités, crèches, centres de vacances). Autres types importants à connaître : J = structures pour personnes âgées/handicapées ; L = salles de spectacle, conférences ; M = magasins et centres commerciaux ; N = restaurants et débits de boissons ; O = hôtels et pensions ; U = établissements de soins (hôpitaux, cliniques) ; W = bureaux ; X = établissements sportifs couverts.",
    timeLimit: 35,
  },
  {
    question:
      "À partir de quelle hauteur de plancher une colonne sèche devient-elle obligatoire pour faciliter l'intervention des sapeurs-pompiers dans un ERP ?",
    choices: [
      "À partir de 8 mètres (dès le 2e étage environ)",
      "À partir de 18 mètres au-dessus du niveau du sol",
      "À partir de 28 mètres (seuil IGH pour l'habitation)",
      "À partir de 50 mètres (seuil IGH pour les bureaux)",
    ],
    answer: [1],
    chapterLabel: "Réglementation ERP",
    explanation:
      "La colonne sèche (canalisation fixe rigide non alimentée en eau en temps normal) est obligatoire dans les ERP dont le plancher bas du niveau le plus haut accessible est à plus de 18 mètres du sol. Les pompiers raccordent leur motopompe à la prise d'alimentation en façade et alimentent les prises d'incendie à chaque niveau. Elle est également obligatoire dans tous les IGH. La colonne humide (sous pression permanente) est réservée aux très grands bâtiments.",
    timeLimit: 35,
  },
  {
    question:
      "Parmi les 5 catégories de SSI (A à E) selon la norme NF S 61-930, laquelle est la plus complète et comprend SDI complet + SMSI complet ?",
    choices: [
      "Catégorie E (le plus élaboré — détection partout + mise en sécurité totale)",
      "Catégorie A (le plus complet — SDI avec détection automatique dans tout le bâtiment + SMSI complet avec toutes les fonctions)",
      "Catégorie C (compromis habituel — DM partout + SMSI partiel)",
      "Catégorie B (SDI partiel + SMSI uniquement pour l'évacuation)",
    ],
    answer: [1],
    chapterLabel: "Détection & alarme",
    explanation:
      "Les 5 catégories de SSI selon NF S 61-930, du plus complet au plus simple : A = SDI complet (détecteurs automatiques + DM dans tout le bâtiment) + SMSI complet (CMSI commandant évacuation, compartimentage, désenfumage) ; B = SDI partiel + SMSI complet ; C = DM seulement + SMSI complet ; D = DM + SMSI partiel (évacuation seulement) ; E = DAD (Détecteur Autonome Déclencheur) seul, avec alarme intégrée. Le type de SSI requis dépend du type et de la catégorie de l'ERP.",
    timeLimit: 40,
  },
  {
    question: "Quel est le rôle de l'UGA (Unité de Gestion d'Alarmes) dans le SSI ?",
    choices: [
      "L'UGA détecte automatiquement les incendies grâce à des capteurs thermiques et optiques intégrés",
      "L'UGA collecte les informations des DM et du SDI, les traite et déclenche le processus d'alarme (restreinte puis générale) selon la séquence programmée",
      "L'UGA pilote uniquement le désenfumage mécanique et la mise en surpression des escaliers",
      "L'UGA est le tableau répétiteur d'alarme installé à l'entrée principale de l'établissement",
    ],
    answer: [1],
    chapterLabel: "Détection & alarme",
    explanation:
      "L'UGA (Unité de Gestion d'Alarmes) est un sous-ensemble du CMSI. Elle collecte les informations en provenance des déclencheurs manuels (DM) et du système de détection incendie (SDI), les gère et déclenche la séquence d'alarme : d'abord l'alarme restreinte (signal sonore uniquement au PC sécurité pour levée de doute), puis l'alarme générale (signal sonore et lumineux dans tout le bâtiment — évacuation). Elle fait partie du SMSI avec le CMSI, les dispositifs actionnés de sécurité (DAS) et les équipements d'alarme.",
    timeLimit: 35,
  },
  {
    question: "Qu'est-ce qu'un BAES et en quoi diffère-t-il d'un BAEH ?",
    choices: [
      "BAES = alimenté par panneau solaire · BAEH = alimenté par réseau 230V uniquement",
      "BAES (Bloc Autonome d'Éclairage de Sécurité) = éclairage de sécurité standard pour ERP (1 h d'autonomie) · BAEH = variante pour établissements d'hébergement types J et U (6 h d'autonomie minimum)",
      "BAES et BAEH sont identiques — seule la puissance lumineuse (lumens) diffère",
      "BAES = bloc de signalisation des sorties · BAEH = bloc éclairant les dégagements normaux uniquement",
    ],
    answer: [1],
    chapterLabel: "Détection & alarme",
    explanation:
      "Les BAES (Blocs Autonomes d'Éclairage de Sécurité) maintiennent l'éclairage des dégagements et issues de secours lors d'une coupure secteur, avec une autonomie standard de 1 heure. Le BAEH est une variante spécifique aux établissements d'hébergement accueillant des personnes non autonomes (types J = personnes âgées/handicapées et U = soins) où l'évacuation prend plus de temps : autonomie minimale de 6 heures. Une alternative aux blocs autonomes est le LSC (Luminaire sur Source Centralisée), alimenté par une batterie centrale commune.",
    timeLimit: 35,
  },
  {
    question: "Quelle est la différence fondamentale entre désenfumage naturel et désenfumage mécanique dans un ERP ?",
    choices: [
      "Naturel = déclenché manuellement par les occupants via une poignée · Mécanique = déclenché uniquement par les pompiers depuis l'extérieur",
      "Naturel = exutoires en toiture + ouvrants en façade basse (amenée d'air) sans moteur, par tirage thermique · Mécanique = extraction forcée par ventilateurs ou mise en surpression des escaliers via des groupes électriques",
      "Naturel = efficace uniquement pour les fumées froides (< 200 °C) · Mécanique = uniquement pour les fumées très chaudes (> 500 °C)",
      "Les deux systèmes sont techniquement identiques — la différence porte uniquement sur la source d'énergie (batterie vs réseau)",
    ],
    answer: [1],
    chapterLabel: "Désenfumage & compartimentage",
    explanation:
      "Le désenfumage naturel exploite la différence de densité entre les fumées chaudes (légères, montent) et l'air frais (plus dense, entre par les bas) : exutoires (ouvrants en toiture ou en partie haute des parois) évacuent les fumées par tirage thermique ; des amenées d'air frais (ouvrants façade basse ou gaines) complètent le tirage. Le désenfumage mécanique utilise des extracteurs ou souffleurs électriques commandés par le CMSI — plus efficace par vent contraire ou en l'absence de gradient thermique suffisant. Les cages d'escalier peuvent être mises en surpression pour rester praticables.",
    timeLimit: 35,
  },
  {
    question:
      "Qu'est-ce qu'un permis de feu dans un ERP ou sur un chantier, et qui est habilité à le délivrer ?",
    choices: [
      "Un document administratif délivré par la préfecture avant tout travail en ERP en présence du public",
      "Un document interne délivré par l'exploitant ou le responsable sécurité du site, autorisant des travaux par points chauds et définissant les mesures de protection à appliquer",
      "Un formulaire de l'inspection du travail requis pour tout travail de maintenance en présence d'équipements électriques",
      "Un permis accordé par la commission de sécurité avant toute ouverture de chantier dans un ERP",
    ],
    answer: [1],
    chapterLabel: "Procédures opérationnelles",
    explanation:
      "Le permis de feu est un document interne établi par l'exploitant ou le responsable sécurité pour autoriser des travaux par points chauds (soudage, meulage, oxycoupage, découpe thermique). Il précise : la zone concernée, la nature des travaux, les risques identifiés (projections de particules incandescentes jusqu'à plus de 10 m), les mesures de protection (moyen d'extinction à portée, mise hors service temporaire des DAI sur la zone, ronde de surveillance post-travaux pendant au moins 2 heures), et les personnes habilitées. Il est établi avant et clôturé après les travaux.",
    timeLimit: 35,
  },
  {
    question:
      "Quels sont les principaux objectifs d'une ronde de sécurité incendie effectuée par l'agent SSIAP1 ?",
    choices: [
      "Remplacer les exercices d'évacuation réglementaires et vérifier les installations de climatisation",
      "Déceler toute anomalie pouvant affecter la sécurité : dégagements obstrués, portes coupe-feu bloquées, extincteurs inaccessibles ou manquants, travaux non déclarés — et consigner sur la main courante",
      "Vérifier uniquement que les portes coupe-feu sont fermées à double tour la nuit",
      "Accueillir les visiteurs et contrôler les badges d'accès au bâtiment",
    ],
    answer: [1],
    chapterLabel: "Procédures opérationnelles",
    explanation:
      "La ronde de sécurité incendie consiste à parcourir un itinéraire déterminé à l'avance pour vérifier l'absence d'anomalie pouvant affecter la sécurité : libre circulation dans les dégagements (pas d'obstacles), fermeture correcte des portes coupe-feu (sélecteur en position, ferme-porte fonctionnel), état et accessibilité des extincteurs et RIA, absence de stockage inapproprié ou de travaux non déclarés. L'agent est équipé d'un carnet, d'une lampe torche, d'un moyen de communication et d'un contrôleur de ronde. Toutes les constatations sont consignées sur la main courante selon la méthode SOCA.",
    timeLimit: 35,
  },
  {
    question:
      "Quel niveau minimal de qualification SSIAP est requis pour occuper le poste de chef du PC sécurité d'un ERP ?",
    choices: [
      "SSIAP1 — l'agent de base peut diriger le poste s'il justifie de 2 ans d'expérience",
      "SSIAP2 minimum — seul le chef d'équipe est réglementairement qualifié pour diriger le poste de sécurité en permanence",
      "SSIAP3 — seul le chef de service peut prendre les décisions au PC sécurité",
      "Tout personnel ayant suivi la formation SST (Sauveteur Secouriste du Travail) peut occuper le poste",
    ],
    answer: [1],
    chapterLabel: "Rôles & missions SSIAP1",
    explanation:
      "Le poste central de sécurité (PC sécurité ou PCSI en IGH) doit être occupé en permanence par un chef de poste qualifié SSIAP2 minimum. Le SSIAP2 (chef d'équipe) assure la direction opérationnelle du PC, prend les décisions lors des alarmes (levée de doute, alerte des secours, déclenchement de l'évacuation), coordonne les SSIAP1 et accueille les pompiers. Le SSIAP3 (chef de service) dirige l'ensemble du service sécurité et est l'interlocuteur de la direction de l'établissement et de la commission de sécurité.",
    timeLimit: 35,
  },
  {
    question:
      "La méthode SOCA est utilisée pour rédiger les comptes rendus sur la main courante SSIAP. Que signifie chaque lettre ?",
    choices: [
      "Sécurité · Observation · Contrôle · Alarme",
      "Situation (temps et espace) · Observation (faits objectifs) · Causes / Conséquences (analyse) · Action (intervention réalisée)",
      "Secteur · Occupants · Contact · Alerte",
      "Surveillance · Ordre · Communication · Assistance",
    ],
    answer: [1],
    chapterLabel: "Procédures opérationnelles",
    explanation:
      "La méthode SOCA structure toute rédaction sur la main courante et tout compte rendu oral : S = Situation (situer dans le temps et l'espace : quand, où, que faisait l'agent ?) ; O = Observation (décrire objectivement les faits constatés sans interprétation) ; C = Causes/Conséquences (analyser les causes probables et évaluer les conséquences potentielles) ; A = Action (décrire l'intervention réalisée ou envisagée). Cette méthode garantit une trace précise, chronologique et exploitable de chaque événement ou anomalie.",
    timeLimit: 35,
  },
  {
    question:
      "Comment doit être réalisée la coupure d'urgence de l'alimentation électrique générale dans un ERP selon le règlement de sécurité ?",
    choices: [
      "Elle nécessite l'intervention simultanée de deux agents de sécurité pour éviter tout déclenchement accidentel",
      "Elle doit être réalisable en une seule manœuvre à partir d'un organe clairement identifié, signalisé et accessible aux sapeurs-pompiers",
      "Elle ne peut être activée que sur ordre écrit du SSIAP3 ou de la commission de sécurité",
      "Elle se déclenche automatiquement dès qu'une alarme générale est émise par le CMSI",
    ],
    answer: [1],
    chapterLabel: "Réglementation ERP",
    explanation:
      "Le règlement de sécurité ERP impose que la coupure d'urgence de l'alimentation électrique générale soit réalisable en une seule manœuvre à partir d'un organe clairement identifié (tableau général basse tension ou disjoncteur général), signalisé par une plaque rouge et accessible aux pompiers. Cette exigence permet une coupure rapide en cas d'incendie pour supprimer les sources d'inflammation et les risques d'électrocution. Les installations de sécurité (éclairage de sécurité BAES/BAEH, CMSI, alarmes) sont alimentées par une source de sécurité indépendante non coupée par cette manœuvre.",
    timeLimit: 35,
  },
  {
    question:
      "Que désigne la notation 'EI 60' pour une cloison ou une porte coupe-feu selon la classification européenne ?",
    choices: [
      "E (étanchéité aux flammes et gaz chauds) + I (isolation thermique) pendant 60 minutes — équivalent de l'ancien coupe-feu 1 heure (CF 1h)",
      "Énergie Incombustible sur 60 centimètres d'épaisseur de matériau",
      "E = élément porteur, I = isolant, 60 = validité en années selon les standards ISO",
      "Étanchéité Intégrale pendant 60 heures en conditions de laboratoire normalisées",
    ],
    answer: [0],
    chapterLabel: "Réglementation ERP",
    explanation:
      "La notation européenne de résistance au feu pour les éléments séparateurs non porteurs (cloisons, portes, rideaux coupe-feu) : E = étanchéité aux flammes et gaz chauds (pas de flamme ni de gaz passant d'un côté à l'autre) ; I = isolation thermique (la face non exposée au feu ne dépasse pas 140 °C d'élévation). EI 30 = ancien pare-feu ½ heure (PF ½ h) ; EI 60 = ancien coupe-feu 1 heure (CF 1h) ; EI 120 = CF 2h. Pour les éléments porteurs, R s'ajoute : REI 60 = plancher résistance + étanchéité + isolation pendant 60 min.",
    timeLimit: 35,
  },

  // ── Cas terrain SSIAP : levée de doute, alarme intempestive, registre ──────
  {
    question: "Une alarme restreinte se déclenche au tableau SSI à 14h30. Quelle est la procédure de levée de doute ?",
    choices: [
      "Se rendre dans la zone concernée pour vérifier visuellement si un sinistre réel est en cours avant de déclencher l'alarme générale",
      "Déclencher immédiatement l'alarme générale sans vérification",
      "Appeler les pompiers directement sans vérification préalable",
      "Éteindre le signal sonore et attendre 5 minutes pour voir si ça se répète",
    ],
    answer: [0],
    chapterLabel: "PC sécurité et exploitation",
    explanation:
      "L'alarme restreinte (signal vers le PC sécurité seulement) déclenche la procédure de levée de doute : l'agent SSIAP1 se rend dans la zone indiquée pour constater si le départ de feu est réel. Si incendie confirmé → alarme générale + appel 18. Si levée de doute négative (fausse alarme) → réarmement, traçabilité dans le registre, analyse du détecteur. La levée de doute doit être menée dans le délai fixé par les consignes du site — généralement 5 minutes maximum ; passé ce délai sans résultat, l'alarme générale s'impose.",
    eliminatory: true,
    timeLimit: 40,
  },
  {
    question: "Lors d'une levée de doute, vous arrivez dans la zone concernée et constatez une légère odeur de fumée sans flamme visible. Que faites-vous ?",
    choices: [
      "Déclencher immédiatement l'alarme générale et appeler le 18 — une odeur de fumée est un sinistre confirmé",
      "Continuer la vérification dans les locaux adjacents pendant 10 minutes avant de décider",
      "Aérer le local et réarmer le détecteur car c'est probablement de la poussière",
      "Attendre l'arrivée d'un collègue pour décider à deux",
    ],
    answer: [0],
    chapterLabel: "PC sécurité et exploitation",
    explanation:
      "Une odeur de fumée sans flamme visible est un sinistre en cours (phase de départ ou d'échauffement). L'alarme générale doit être déclenchée immédiatement et le 18 appelé. La levée de doute sert à confirmer ou infirmer l'alarme — toute détection sensorielle (odeur, chaleur, fumée légère) constitue une confirmation. On ne temporise pas.",
    eliminatory: true,
    timeLimit: 40,
  },
  {
    question: "Une alarme restreinte se déclenche pour la troisième fois en 2 heures sur le même détecteur. Chaque fois, la levée de doute est négative. Comment qualifiez-vous cette situation et que faites-vous ?",
    choices: [
      "Alarme intempestive répétitive — tracer chaque événement au registre, signaler au responsable et contacter le mainteneur SSI pour diagnostic du détecteur",
      "Inhiber le détecteur pour ne plus être dérangé jusqu'à la prochaine maintenance préventive",
      "Considérer que le secteur est sûr et ne plus effectuer de levée de doute pour ce détecteur",
      "Débrancher physiquement le détecteur pour stopper les fausses alarmes",
    ],
    answer: [0],
    chapterLabel: "PC sécurité et exploitation",
    explanation:
      "Une alarme intempestive répétitive sur le même détecteur est une anomalie technique (détecteur encrassé, sensibilité déréglée, exposition à de la vapeur ou de la poussière). Elle ne doit jamais être gérée par inhibition non encadrée ou débranchement. La traçabilité est obligatoire, le mainteneur doit intervenir. Inhiber un détecteur sans procédure formelle est une faute grave.",
    eliminatory: true,
    timeLimit: 40,
  },
  {
    question: "Qu'est-ce qu'une mise hors service (MHS) encadrée d'un équipement SSI, et qui peut la décider ?",
    choices: [
      "L'inhibition temporaire d'un équipement (détecteur, DAS, zone) pour travaux ou maintenance, décidée et tracée selon une procédure formelle avec mesures compensatoires",
      "L'extinction du tableau SSI pendant les travaux pour éviter les fausses alarmes",
      "Le débranchement d'un détecteur jugé trop sensible, décidé par l'agent SSIAP1 de permanence",
      "La coupure générale du système SSI le week-end quand le site est fermé",
    ],
    answer: [0],
    chapterLabel: "PC sécurité et exploitation",
    explanation:
      "Une MHS encadrée est décidée par le responsable sécurité ou le coordinateur SSI, documentée dans le registre, limitée dans le temps, et accompagnée de mesures compensatoires (rondes renforcées, moyen de détection alternatif, restriction d'accès à la zone). Toute MHS non tracée constitue un manquement réglementaire grave. L'agent SSIAP1 ne peut pas décider seul d'une MHS.",
    eliminatory: true,
    timeLimit: 40,
  },
  {
    question: "Que doit contenir une entrée dans le registre de sécurité d'un ERP pour être valide ?",
    choices: [
      "La date et l'heure, la nature de l'événement, le secteur concerné, les actions réalisées et la signature de l'agent",
      "Uniquement la date et l'action réalisée — le reste est optionnel",
      "Le nom du visiteur ou du responsable de travaux seulement",
      "Le registre de sécurité n'est pas obligatoire dans les ERP de catégorie 4 et 5",
    ],
    answer: [0],
    chapterLabel: "PC sécurité et exploitation",
    explanation:
      "Le registre de sécurité est un document réglementaire obligatoire dans tous les ERP (article R. 123-51 du CCH). Chaque entrée doit être datée, horodatée, localisée, décrite précisément et signée. Il recense : alarmes et levées de doute, rondes, visites de contrôle, exercices, travaux, mises hors service, interventions de maintenance. La commission de sécurité peut le consulter à tout moment.",
    timeLimit: 35,
  },
  {
    question: "Un DAS (Dispositif Actionné de Sécurité) s'est déclenché lors d'une alarme. Après réarmement du SSI, comment vérifier que le DAS est bien revenu en position de veille ?",
    choices: [
      "Contrôle visuel sur site de la position du DAS (porte CF fermée, trappe de désenfumage fermée) ET vérification au tableau SSI de la disparition de l'indication d'état actionné",
      "Vérification uniquement au tableau SSI — le retour en position est automatique",
      "Attendre 30 minutes pour laisser le temps au DAS de se réarmer automatiquement",
      "Il suffit de réarmer le CMSI — les DAS suivent automatiquement",
    ],
    answer: [0],
    chapterLabel: "DAS et désenfumage",
    explanation:
      "Le retour en position de veille d'un DAS doit être vérifié à la fois visuellement sur site (la porte coupe-feu est bien refermée, la trappe de désenfumage est bien retournée en position fermée) et au tableau (disparition de l'indication 'actionné'). Un DAS non revenu en position compromet la protection du compartiment. Certains DAS ne se réarment pas automatiquement et nécessitent une action manuelle sur site.",
    timeLimit: 35,
  },
  {
    question: "Lors d'un exercice d'évacuation, l'alarme générale sonne. Un visiteur refuse d'évacuer et dit que c'est 'juste un exercice'. Que fait l'agent SSIAP1 ?",
    choices: [
      "Insiste fermement pour que le visiteur évacue — lors d'un exercice comme d'un sinistre réel, l'évacuation est obligatoire pour tous",
      "Laisse le visiteur rester car c'est effectivement un exercice et non un sinistre",
      "Appelle immédiatement les forces de l'ordre pour contraindre le visiteur",
      "Note le refus dans le registre mais ne peut pas forcer l'évacuation d'un visiteur adulte",
    ],
    answer: [0],
    chapterLabel: "Evacuation et rôle terrain",
    explanation:
      "L'exercice d'évacuation a précisément pour but de former les comportements en situation réelle. L'agent SSIAP1 doit faire évacuer tous les occupants sans exception. Il peut s'appuyer sur les guides-files et le responsable d'évacuation. L'objectif pédagogique est de tester le comportement réel : un visiteur qui reste annule la valeur de l'exercice. Si refus persistant, signalement au SSIAP2 de permanence.",
    timeLimit: 30,
  },
  {
    question: "Quelle est la différence entre un dérangement et un défaut sur un tableau SSI ?",
    choices: [
      "Le dérangement signale une anomalie de supervision (câble coupé, boucle ouverte) ; le défaut signale une anomalie interne à un équipement (alimentation, composant) — les deux nécessitent un suivi mainteneur",
      "Le dérangement est une alarme feu non confirmée ; le défaut est une alarme confirmée",
      "Il n'y a pas de différence : les deux termes désignent la même chose selon les constructeurs",
      "Le dérangement est signalé uniquement sur les CMSI de catégorie A ; le défaut sur les catégories B et C",
    ],
    answer: [0],
    chapterLabel: "Lecture du tableau SSI",
    explanation:
      "Sur un SSI, le dérangement (ou 'défaut de ligne') signale une anomalie de la supervision du réseau (câble coupé, mise à la terre, boucle ouverte). Le défaut technique signale une anomalie interne à un composant (alimentation de secours, carte électronique). Les deux sont des états anormaux qui dégradent la protection et nécessitent l'intervention du mainteneur — jamais une simple extinction de signal.",
    timeLimit: 35,
  },
  {
    question: "Un désenfumage mécanique s'est déclenché sur fausse alarme dans un couloir. Que doit faire l'agent SSIAP1 avant de réarmer ?",
    choices: [
      "Vérifier physiquement que les clapets et ouvrants sont bien revenus en position fermée, que le couloir est libre, puis réarmer selon la procédure du site et tracer dans le registre",
      "Réarmer directement depuis le PC sécurité sans vérification sur site",
      "Attendre que le désenfumage s'arrête seul avant toute action",
      "Ouvrir les portes coupe-feu du couloir pour accélérer la ventilation avant réarmement",
    ],
    answer: [0],
    chapterLabel: "DAS et désenfumage",
    explanation:
      "Avant tout réarmement, l'agent doit s'assurer que le local est sûr (pas de fumée réelle), que les équipements actionnés (extracteurs, clapets, trappes) ont bien la position correcte pour le réarmement. Le réarmement sans vérification peut fausser l'état de disponibilité du système. Ouvrir les portes CF compromet le compartimentage — c'est une erreur.",
    timeLimit: 40,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// RECYCLAGE SSIAP1 — Remise à niveau 14h / 3 ans
// ─────────────────────────────────────────────────────────────────────────────
quizContent["recyclage-ssiap1"] = [
  {
    question: "À quelle fréquence le recyclage SSIAP1 est-il obligatoire pour maintenir la qualification ?",
    choices: [
      "Tous les 5 ans, avec 7 heures de formation minimum",
      "Tous les 3 ans, avec 14 heures de formation minimum",
      "Tous les 2 ans, avec 8 heures de formation minimum",
      "Tous les 3 ans, avec 7 heures de formation minimum",
    ],
    answer: [1],
    chapterLabel: "Réglementation & missions",
    explanation:
      "L'arrêté du 2 mai 2005 modifié impose un recyclage SSIAP1 de 14 heures minimum tous les 3 ans. Sans recyclage valide, la qualification SSIAP1 est suspendue et l'employeur ne peut plus affecter l'agent à un poste SSIAP1. Le recyclage comprend une partie théorique (dont cet e-learning) et une partie pratique encadrée.",
    timeLimit: 30,
  },
  {
    question: "Un extincteur portable a-t-il besoin d'être remplacé ou rechargé après un déclenchement partiel (une seconde d'utilisation) ?",
    choices: [
      "Non — un déclenchement de moins de 5 secondes ne nécessite pas de recharge",
      "Oui — tout extincteur déclenché, même partiellement, doit être immédiatement remis en état ou remplacé",
      "Uniquement si la pression visible sur le manomètre est descendue sous la zone verte",
      "Seulement pour les extincteurs CO₂ — les extincteurs à poudre peuvent être réutilisés partiellement",
    ],
    answer: [1],
    chapterLabel: "Théorie du feu & extinction",
    explanation:
      "Tout extincteur portable déclenché, même partiellement (une seule seconde d'utilisation), doit être immédiatement remis en état de fonctionnement ou remplacé. Un extincteur partiellement utilisé peut continuer à perdre sa charge (pression de gaz propulseur) et ne sera pas opérationnel lors d'une prochaine utilisation. La norme NF EN 3 et la norme NF S 61-919 (maintenance) l'imposent sans exception.",
    timeLimit: 30,
  },
  {
    question: "Lors d'une alarme restreinte au PC sécurité, quelle est la durée maximale de levée de doute avant de déclencher obligatoirement l'alarme générale ?",
    choices: [
      "Il n'y a pas de durée maximale — l'agent peut prendre le temps nécessaire pour investiguer",
      "2 minutes maximum selon la norme NF S 61-930",
      "La durée est fixée par les consignes de l'établissement (généralement 3 à 5 minutes selon la configuration du SSI)",
      "10 minutes — délai standard reconnu par tous les textes réglementaires",
    ],
    answer: [2],
    chapterLabel: "Levée de doute",
    explanation:
      "La norme NF S 61-930 définit que la durée de la temporisation d'alarme restreinte (levée de doute) est fixée dans les consignes de l'établissement et dans la configuration du CMSI, généralement entre 3 et 5 minutes. Au-delà de cette durée sans confirmation d'absence d'incendie, l'alarme générale doit être déclenchée. L'agent SSIAP1 doit connaître la durée de temporisation spécifique à son établissement.",
    timeLimit: 35,
  },
  {
    question: "Quelle est la catégorie de SSI la plus simple, utilisant uniquement un DAD (Détecteur Autonome Déclencheur) ?",
    choices: [
      "Catégorie A — la plus complexe avec SDI complet et SMSI complet",
      "Catégorie C — déclencheurs manuels plus SMSI complet",
      "Catégorie E — DAD autonome avec alarme intégrée, sans CMSI ni report au PC sécurité",
      "Catégorie D — déclencheurs manuels plus SMSI partiel",
    ],
    answer: [2],
    chapterLabel: "Théorie du feu & extinction",
    explanation:
      "La catégorie E est la plus simple des 5 catégories de SSI. Un DAD (Détecteur Autonome Déclencheur) intègre à la fois la détection (généralement optique de fumée) et l'alarme sonore dans un seul appareil autonome. Il n'est pas relié à un CMSI — il n'y a donc pas de report au PC sécurité, pas de levée de doute centralisée et pas de commande de DAS. On le trouve dans les petits ERP de 5e catégorie. Catégorie A = le plus complet (SDI complet + SMSI complet).",
    timeLimit: 35,
  },
  {
    question: "Qu'est-ce que l'AES (Alimentation Électrique de Sécurité) dans un SSI et quelle autonomie minimale doit-elle assurer ?",
    choices: [
      "L'AES alimente uniquement les éclairages de sécurité BAES — autonomie 1 heure",
      "L'AES garantit l'alimentation du SSI en cas de coupure secteur : 12 heures en veille + durée de fonctionnement en alarme (généralement 1 heure minimum)",
      "L'AES est un système de redondance réseau uniquement pour les CMSI de catégorie A",
      "L'AES alimente le réseau sprinkler en cas de coupure — autonomie 30 minutes",
    ],
    answer: [1],
    chapterLabel: "Théorie du feu & extinction",
    explanation:
      "L'AES (Alimentation Électrique de Sécurité) garantit l'alimentation de tous les composants du SSI lors d'une coupure du réseau normal (EDF). Elle comprend des accumulateurs (batteries) ou un groupe électrogène de sécurité. Les exigences minimales sont : autonomie en veille de 12 heures + durée de fonctionnement complète en alarme (généralement 1 heure). Tout défaut d'AES signalé sur le tableau CMSI doit être immédiatement signalé au mainteneur.",
    timeLimit: 35,
  },
  {
    question: "Quelles sont les dimensions maximales réglementaires d'un compartiment IGH ?",
    choices: [
      "Longueur 50 m · Surface 1 500 m² · 1 niveau maximum",
      "Longueur 75 m · Surface 2 500 m² · 1 à 3 niveaux",
      "Longueur 100 m · Surface 3 000 m² · 2 niveaux maximum",
      "Pas de limitation de surface — uniquement une limitation à 2 niveaux par compartiment",
    ],
    answer: [1],
    chapterLabel: "Réglementation ERP",
    explanation:
      "Un compartiment IGH est limité à : 75 mètres de longueur maximale, 2 500 m² de surface maximale, et 1 à 3 niveaux. Les parois de compartimentage doivent résister au feu 2 heures (EI ou REI 120). Le compartimentage IGH permet une évacuation différée : le compartiment sinistré est évacué en premier, les compartiments adjacents sont mis en alerte. Les chaufferies IGH doivent avoir une résistance au feu de 4 heures.",
    timeLimit: 35,
  },
  {
    question: "Quelle est la différence entre la réaction au feu et la résistance au feu d'un matériau ou d'un élément de construction ?",
    choices: [
      "Les deux termes sont synonymes — ils mesurent la même propriété",
      "Réaction au feu = comportement d'un matériau comme combustible (contribution à l'incendie, classement Euroclass A1→F) · Résistance au feu = durée pendant laquelle un élément de structure maintient ses fonctions sous l'effet du feu (R, E, I en minutes)",
      "Réaction au feu = durée de résistance avant effondrement · Résistance au feu = contribution aux fumées",
      "Réaction au feu concerne uniquement les liquides inflammables · Résistance au feu concerne uniquement les structures porteuses",
    ],
    answer: [1],
    chapterLabel: "Théorie du feu & extinction",
    explanation:
      "Distinction fondamentale à maîtriser : la réaction au feu mesure le comportement d'un matériau en tant que combustible — comment il contribue à l'éclosion et à la propagation de l'incendie. Elle est classée selon le système Euroclass : A1 (non combustible, ex-M0) jusqu'à F (non classé, ex-M4). La résistance au feu mesure la durée pendant laquelle un élément de construction (cloison, porte, plancher) maintient ses fonctions de séparation sous l'effet du feu : R (résistance mécanique), E (étanchéité), I (isolation thermique), exprimées en minutes.",
    timeLimit: 35,
  },
  {
    question: "Lors de travaux par points chauds dans un ERP, qu'est-il OBLIGATOIRE d'effectuer APRÈS la fin des travaux ?",
    choices: [
      "Rien — la responsabilité des risques post-travaux incombe uniquement à l'entreprise extérieure",
      "Réarmer immédiatement les détecteurs inhibés et fermer le permis de feu",
      "Effectuer une ronde de surveillance pendant au moins 2 heures après la fin des travaux, en cherchant tout signe de combustion (fumée, odeur, chaleur)",
      "Appeler le 18 pour signaler la fin des travaux à la caserne de pompiers locale",
    ],
    answer: [2],
    chapterLabel: "Procédures opérationnelles",
    explanation:
      "La ronde post-travaux est une obligation critique souvent sous-estimée. Pendant au moins 2 heures après la fin de travaux par points chauds, une ronde de surveillance doit vérifier l'absence de feu couvant : pas de fumée, pas d'odeur de brûlé, surfaces adjacentes à température normale (tâter les cloisons). Les braises dans une cloison ou une projection de particule incandescente dans un espace caché peuvent déclencher un incendie des heures après la fin des travaux. Le permis de feu n'est clôturé qu'à l'issue de cette ronde de surveillance.",
    timeLimit: 30,
  },
  {
    question: "Quand une zone du SSI est temporairement mise hors service (détecteur inhibé pour travaux), que doit impérativement faire l'agent SSIAP1 ?",
    choices: [
      "Ne rien faire de spécial — l'inhibition est une procédure normale qui n'impose aucune obligation supplémentaire",
      "Consigner l'inhibition sur la main courante (date, heure, zone, motif) ET assurer une surveillance humaine renforcée de la zone pendant toute la durée de l'inhibition",
      "Informer uniquement la direction par e-mail et conserver une copie",
      "Couper également l'alarme de toute la zone contiguë pour éviter une fausse alarme en cascade",
    ],
    answer: [1],
    chapterLabel: "Procédures opérationnelles",
    explanation:
      "Toute inhibition d'une zone SSI est un événement à risque élevé qui impose deux actions simultanées : 1) Consignation obligatoire sur la main courante (date, heure de début, zone inhibée avec numéro et localisation précise, motif, durée prévue, personne ayant effectué l'inhibition) ; 2) Surveillance humaine renforcée de la zone concernée pendant toute la durée de l'inhibition (rondes plus fréquentes ou présence physique permanente selon le niveau de risque). L'inhibition doit être levée dès que possible et consignée à nouveau lors du réarmement.",
    timeLimit: 30,
  },
  {
    question: "Un agent découvre une porte coupe-feu maintenue ouverte par un extincteur posé devant elle. Quelle est la bonne conduite à tenir ?",
    choices: [
      "Ne rien faire si la porte est ouverte depuis peu de temps — la signaler uniquement lors du prochain rapport mensuel",
      "Déplacer l'extincteur, laisser la porte se fermer, consigner l'anomalie sur la main courante et en informer la direction",
      "Laisser la porte ouverte mais noter la zone dans le rapport hebdomadaire",
      "Appeler immédiatement la commission de sécurité pour constater l'infraction",
    ],
    answer: [1],
    chapterLabel: "Procédures opérationnelles",
    explanation:
      "Une porte coupe-feu maintenue ouverte constitue une infraction grave au règlement de sécurité ERP. La conduite immédiate : retirer l'obstacle (l'extincteur dans ce cas — qui ne doit jamais servir de cale !), laisser la porte se refermer normalement, vérifier son bon fonctionnement (ferme-porte, joint), consigner l'anomalie sur la main courante avec la méthode SOCA, signaler à la direction pour traitement. Si la porte doit régulièrement rester ouverte pour des raisons d'exploitation, la solution est l'installation d'un dispositif de fermeture automatique (DAS électromagnétique commandé par le SSI).",
    timeLimit: 30,
  },
  {
    question: "Lors de l'accueil des sapeurs-pompiers en cas d'incendie confirmé, quelle information doit être communiquée EN PREMIER au chef d'intervention ?",
    choices: [
      "Le nombre de visiteurs présents dans l'établissement ce jour-là",
      "La localisation précise du sinistre (niveau, aile, numéro de local) et si des personnes sont potentiellement piégées",
      "L'identité du propriétaire de l'établissement et les coordonnées de l'assureur",
      "Le contenu du registre de sécurité depuis la dernière visite de la commission de sécurité",
    ],
    answer: [1],
    chapterLabel: "Procédures opérationnelles",
    explanation:
      "La priorité absolue lors de l'accueil des sapeurs-pompiers est de leur communiquer la localisation précise du sinistre (niveau, aile, local) et toute information sur des personnes potentiellement piégées ou en difficulté (PMR en EAS, personnes non évacuées confirmées). Les secondes comptent. Ensuite viennent : les plans, les clés, les coupures effectuées (électricité, gaz), le nombre de personnes présentes, les matières dangereuses. L'agent doit rester disponible pendant toute l'intervention et suivre les instructions du chef d'intervention.",
    timeLimit: 30,
  },
  {
    question: "Quelle est la méthode SOCA utilisée pour rédiger les comptes rendus sur la main courante SSIAP1 ?",
    choices: [
      "Sécurité · Observation · Contrôle · Alarme",
      "Situation · Observation · Causes/Conséquences · Action",
      "Surveillance · Ordre · Communication · Assistance",
      "Secteur · Opération · Compétence · Autorisation",
    ],
    answer: [1],
    chapterLabel: "Procédures opérationnelles",
    explanation:
      "La méthode SOCA structure toute consignation sur la main courante SSIAP : S = Situation (situer dans le temps et l'espace : quand, où, que faisait l'agent) ; O = Observation (décrire objectivement les faits constatés, sans interprétation) ; C = Causes/Conséquences (analyser les causes probables et évaluer les conséquences potentielles) ; A = Action (décrire l'intervention réalisée ou la mesure prise). Ce document peut être requis lors d'enquêtes : il doit être factuel, chronologique et précis.",
    timeLimit: 25,
  },
  {
    question: "Quel est le seuil de hauteur qui définit un IGH pour un immeuble de bureaux ou d'hôtel ?",
    choices: [
      "Plancher bas du dernier niveau accessible > 20 mètres",
      "Plancher bas du dernier niveau accessible > 28 mètres",
      "Plancher bas du dernier niveau accessible > 50 mètres",
      "Hauteur totale du bâtiment > 60 mètres",
    ],
    answer: [2],
    chapterLabel: "Réglementation ERP",
    explanation:
      "L'article R.122-2 du Code de la construction et de l'habitation (CCH) définit les IGH : plancher bas du dernier niveau accessible au public > 28 mètres pour les immeubles d'habitation (GHA), et > 50 mètres pour les bureaux (GHB), hôtels (GHC), hôpitaux (GHD), établissements d'enseignement (GHE), locaux à usage industriel (GHF), établissements mixtes (GHJ), établissements pour personnes âgées (GHR), établissements de soins et chirurgie (GHU), établissements en attente (GHW) et établissements spéciaux (GHZ).",
    timeLimit: 30,
  },
  {
    question: "Que doit faire l'agent SSIAP1 s'il constate, lors d'une ronde, qu'un BAES (Bloc Autonome d'Éclairage de Sécurité) ne s'allume pas lors de son test d'autocontrôle ?",
    choices: [
      "Ne rien faire — les BAES testent automatiquement leur autonomie et un test raté est sans conséquence immédiate",
      "Consigner le défaut sur la main courante avec l'emplacement précis, signaler au responsable pour remplacement rapide, et si la situation perdure, évaluer si la zone est suffisamment éclairée en cas d'urgence",
      "Remplacer lui-même la batterie du BAES si elle est disponible dans les réserves techniques",
      "Débrancher le BAES défectueux et l'amener en maintenance pour ne pas créer de confusion",
    ],
    answer: [1],
    chapterLabel: "Procédures opérationnelles",
    explanation:
      "Un BAES défectueux constitue une anomalie à traiter. L'agent SSIAP1 : note le défaut sur la main courante (emplacement précis, heure de constat, nature du défaut observé), le signale au responsable technique ou à la maintenance pour remplacement dans les meilleurs délais. Il ne doit pas démonter lui-même le BAES (sauf si habilité à le faire) ni masquer le défaut. Si plusieurs BAES sont défectueux dans un même couloir ou une même zone, la sécurité de l'évacuation est compromise — escalade au responsable sécurité et mesures compensatoires à envisager.",
    timeLimit: 30,
  },
  {
    question: "Quel document doit obligatoirement être tenu à jour dans tout ERP et consulté lors d'une visite de la commission de sécurité ?",
    choices: [
      "Le contrat d'assurance de l'établissement et les polices associées",
      "Le registre de sécurité : consignes, exercices d'évacuation, vérifications périodiques des équipements, observations des commissions de sécurité",
      "La main courante uniquement — le registre de sécurité n'est requis que pour les ERP de 1re et 2e catégorie",
      "Le plan de formation annuel du personnel aux gestes de premiers secours",
    ],
    answer: [1],
    chapterLabel: "Réglementation ERP",
    explanation:
      "Le registre de sécurité est obligatoire dans tout ERP (quelle que soit la catégorie). Il doit mentionner : les consignes générales et particulières de sécurité incendie, les dates et résultats des exercices d'évacuation, les dates des vérifications et entretiens des installations de sécurité (extincteurs, SSI, désenfumage, RIA, colonnes sèches, etc.), les observations faites lors des visites de la commission de sécurité et les suites données. La commission de sécurité peut exiger de le consulter lors de ses visites périodiques ou inopinées.",
    timeLimit: 30,
  },
  {
    question: "Quelles sont les 5 catégories d'ERP (Établissements Recevant du Public) selon leur capacité d'accueil ?",
    choices: [
      "1re : > 1 500 pers. · 2e : 701 à 1 500 · 3e : 301 à 700 · 4e : ≤ 300 (sauf 5e) · 5e : en dessous des seuils de la 4e",
      "1re : > 5 000 pers. · 2e : 2 001 à 5 000 · 3e : 1 001 à 2 000 · 4e : 501 à 1 000 · 5e : ≤ 500",
      "La catégorie dépend uniquement du type d'activité, pas de la capacité d'accueil",
      "1re : > 300 pers. · 2e : 201 à 300 · 3e : 101 à 200 · 4e : 51 à 100 · 5e : ≤ 50",
    ],
    answer: [0],
    chapterLabel: "Réglementation ERP",
    explanation:
      "Le classement ERP combine le type (activité) et la catégorie (effectif). Catégorie 1re : > 1 500 personnes. 2e : 701 à 1 500. 3e : 301 à 700. 4e : jusqu'à 300 personnes (sauf si en dessous des seuils de la 5e catégorie). 5e catégorie : en dessous des seuils fixés pour chaque type (ex. type L salle de réunion : seuil 5e cat. fixé à 200 personnes en sous-sol ou 200 en rez-de-chaussée). Les obligations de sécurité incendie sont proportionnelles à la catégorie.",
    timeLimit: 35,
    eliminatory: false,
  },
  {
    question: "Quelle est la fréquence obligatoire des exercices d'évacuation dans un ERP ?",
    choices: [
      "Une fois par an minimum, avec consignation dans le registre de sécurité",
      "Deux fois par an minimum (dont un exercice nuit pour les établissements avec hébergement), avec consignation dans le registre de sécurité",
      "Une fois tous les deux ans — la fréquence est adaptée selon la catégorie de l'ERP",
      "Uniquement à la demande de la commission de sécurité",
    ],
    answer: [1],
    chapterLabel: "Procédures opérationnelles",
    explanation:
      "L'article MS 52 du règlement de sécurité ERP impose au moins deux exercices d'évacuation par an. Pour les établissements avec locaux à sommeil (hôtels, hôpitaux, foyers…), l'un des exercices doit être réalisé de nuit. Chaque exercice doit être consigné dans le registre de sécurité : date, heure, durée de l'évacuation, nombre de personnes, observations et mesures correctives prises.",
    timeLimit: 30,
    eliminatory: false,
  },
  {
    question: "Qu'est-ce qu'un espace d'attente sécurisé (EAS) et à quoi sert-il ?",
    choices: [
      "Un espace réservé aux fumeurs, situé à l'extérieur du bâtiment",
      "Une zone compartimentée, résistante au feu, équipée de moyens de communication, permettant à des personnes à mobilité réduite (PMR) d'attendre l'intervention des secours sans être exposées aux fumées ou au feu",
      "Un local de stockage des matériels de sécurité incendie (extincteurs, RIA, BAES)",
      "Un poste de commandement avancé pour l'agent SSIAP1 lors d'une intervention",
    ],
    answer: [1],
    chapterLabel: "Réglementation ERP",
    explanation:
      "Les espaces d'attente sécurisés (EAS) sont obligatoires dans les ERP et IGH neufs depuis 2009 (arrêté du 1er août 2006 modifié). Ils permettent aux PMR (personnes à mobilité réduite) d'attendre les secours dans un espace protégé : résistance au feu CF 1 heure minimum, surface minimale de 3 m², moyen de communication avec le PC de sécurité, éclairage de sécurité. L'agent SSIAP1 doit connaître l'emplacement de tous les EAS de son établissement et s'assurer qu'ils sont accessibles et conformes lors de ses rondes.",
    timeLimit: 35,
    eliminatory: false,
  },
  {
    question: "Quels sont les types de détecteurs automatiques d'incendie les plus courants et leurs applications ?",
    choices: [
      "Détecteur optique (fumées visibles) · Détecteur ionique (fumées invisibles) · Détecteur thermovélocimétrique (montée rapide de température) · Détecteur de flamme (rayonnement UV/IR)",
      "Détecteur rouge (feu ouvert) · Détecteur bleu (fumées) · Détecteur jaune (gaz) · Détecteur vert (chaleur)",
      "Il n'existe que deux types : ionique et optique — tous les autres sont des variantes commerciales",
      "Détecteur manuel (déclencheur) · Détecteur automatique (toute technologie) · Détecteur d'ambiance · Détecteur de périmètre",
    ],
    answer: [0],
    chapterLabel: "Procédures opérationnelles",
    explanation:
      "Les principaux types : Détecteur optique (photoélectrique) : idéal pour fumées épaisses visibles, lents à se former (feux couvants). Détecteur ionique : sensible aux aérosols et fumées de combustion vive, adapté aux feux rapides. Détecteur thermique fixe : déclenche à une température seuil (57°C, 68°C, 93°C…). Détecteur thermovélocimétrique : déclenche sur la vitesse de montée en température (≥ 5°C/min). Détecteur de flamme UV/IR : détecte le rayonnement des flammes, adapté aux hydrocarbures. Détecteur multicrités (combinaison de capteurs) : réduit les fausses alarmes. L'agent SSIAP1 doit identifier le type de détecteur lors d'une alarme pour adapter la levée de doute.",
    timeLimit: 40,
    eliminatory: false,
  },
  {
    question: "Lors d'une ronde de sécurité, à quelle fréquence minimale l'agent SSIAP1 doit-il effectuer ses rondes dans un ERP ouvert au public ?",
    choices: [
      "Une ronde par poste de 8 heures — la fréquence n'est pas réglementée davantage",
      "La fréquence est définie dans les consignes particulières de l'établissement, validées par le chef d'établissement, et peut varier selon la configuration et le niveau de risque",
      "Toutes les heures, obligatoirement avec un système de contrôle de ronde (badge ou clé)",
      "Uniquement en dehors des heures d'ouverture au public",
    ],
    answer: [1],
    chapterLabel: "Procédures opérationnelles",
    explanation:
      "La réglementation (arrêté du 2 mai 2005 et NF S 61-900) ne fixe pas de fréquence minimale universelle pour les rondes SSIAP1. La fréquence est définie dans les consignes particulières de l'établissement, établies selon la configuration (surface, niveaux, nombre de personnes), les risques identifiés et les éventuelles prescriptions de la commission de sécurité. En pratique, les rondes sont souvent horaires dans les grands ERP. L'agent doit adapter sa vigilance selon les phases d'activité (ouverture, fermeture, nuit).",
    timeLimit: 35,
    eliminatory: false,
  },
  {
    question: "Qu'est-ce que le désenfumage naturel et dans quel contexte est-il utilisé ?",
    choices: [
      "Un système de ventilation forcée qui aspire les fumées vers l'extérieur via des ventilateurs",
      "L'évacuation des fumées et gaz chauds par différence de pression (tirage thermique) via des ouvrants en partie haute, sans moteur — utilisé dans les escaliers, halls et locaux à faible densité",
      "L'utilisation d'extincteurs CO₂ pour étouffer les fumées dans les couloirs",
      "Un système uniquement applicable aux entrepôts et locaux industriels de grande hauteur",
    ],
    answer: [1],
    chapterLabel: "Procédures opérationnelles",
    explanation:
      "Le désenfumage naturel utilise la différence de densité entre air chaud (fumées) et air froid pour évacuer les fumées par convection thermique, sans équipement motorisé. Il repose sur des ouvrants de désenfumage (exutoires, fenêtres commandées) en partie haute et des amenées d'air frais en partie basse. Il est utilisé dans les escaliers (maintien de voie d'évacuation praticable), halls, couloirs et locaux de grande surface. Le désenfumage mécanique (VMC ou extracteurs motorisés) complète ou remplace le désenfumage naturel là où la thermique ne suffit pas.",
    timeLimit: 35,
    eliminatory: false,
  },
  {
    question: "Comment l'agent SSIAP1 doit-il commander le désenfumage en cas d'alarme feu confirmée ?",
    choices: [
      "Il ouvre toutes les fenêtres et portes du bâtiment pour maximiser la ventilation naturelle",
      "Il suit strictement les consignes particulières de l'établissement : mise en sécurité automatique (CMSI) ou commande manuelle selon la configuration, et vérifie la bonne exécution des fonctions de sécurité (fermeture des clapets, ouverture des exutoires)",
      "Il coupe la VMC générale et attend les pompiers pour le désenfumage",
      "Il décide librement selon son évaluation de la situation, sans contrainte réglementaire particulière",
    ],
    answer: [1],
    chapterLabel: "Procédures opérationnelles",
    explanation:
      "Le désenfumage en ERP est majoritairement commandé par le CMSI (Centralisateur de Mise en Sécurité Incendie) de façon automatique ou depuis le PC de sécurité. L'agent SSIAP1 doit : suivre les consignes particulières, vérifier que les fonctions de mise en sécurité s'exécutent correctement (voyants, retours d'information), intervenir manuellement en cas de défaillance selon la procédure, et ne jamais improviser. La commande doit être tracée sur la main courante.",
    timeLimit: 35,
    eliminatory: false,
  },
  {
    question: "Quelle est la différence entre une colonne sèche et une colonne humide dans un bâtiment ?",
    choices: [
      "La colonne sèche est réservée aux interventions des pompiers ; la colonne humide est utilisable par l'agent SSIAP1 pour l'extinction courante",
      "Colonne sèche : canalisation vide en temps normal, alimentée par les pompiers depuis l'extérieur lors de l'intervention · Colonne humide : canalisation sous pression permanente d'eau, utilisable immédiatement depuis les prises murales aux étages",
      "Les deux systèmes sont équivalents — la distinction est uniquement commerciale",
      "Colonne sèche : en service dans les bâtiments de moins de 28 m · Colonne humide : obligatoire dans les IGH",
    ],
    answer: [1],
    chapterLabel: "Procédures opérationnelles",
    explanation:
      "Colonne sèche (obligatoire dans les ERP et IGH à partir d'un certain niveau) : canalisation metallique noyée dans les parois, vide d'eau en permanence. Les pompiers la raccordent à leur camion-citerne depuis les raccords d'alimentation en pied de colonne, et alimentent les prises de 65 mm aux étages. L'agent SSIAP1 doit s'assurer que les raccords d'alimentation sont accessibles et non obstrués. Colonne humide : sous pression permanente raccordée au réseau d'eau, permet une intervention immédiate depuis les prises de 40 mm aux étages. Soumise à vérification annuelle.",
    timeLimit: 35,
    eliminatory: false,
  },
  {
    question: "Lors d'une alarme de niveau 1 (alarme restreinte au PC sécurité), quelle est la procédure de levée de doute de l'agent SSIAP1 ?",
    choices: [
      "Déclencher immédiatement l'alarme générale sans investigation préalable",
      "Identifier la zone en alarme sur le tableau SSI, se rendre physiquement sur les lieux dans les délais fixés par les consignes, observer et analyser (fumée, odeur, chaleur, feu visible), puis rendre compte au PC et décider du déclenchement de l'alarme générale ou du réarmement",
      "Appeler le 18 immédiatement puis se rendre sur les lieux",
      "Attendre une seconde alarme (double détection) avant toute action",
    ],
    answer: [1],
    chapterLabel: "Levée de doute",
    explanation:
      "La procédure de levée de doute suit un enchaînement précis : 1) Identifier sur le tableau CMSI la zone et le déclencheur concernés ; 2) Avertir le PC sécurité de son départ en levée de doute ; 3) Se rendre sur les lieux dans les délais fixés (généralement 2 à 5 min selon les consignes) en emportant les moyens de communication et les clés nécessaires ; 4) Observer : présence de fumée, odeur, chaleur anormale, feu visible, personnes signalant un incident ; 5) Rendre compte au PC et décider : si pas de sinistre = réarmement et consignation ; si sinistre confirmé = déclencher l'alarme générale, alerter les secours (18/112), débuter les premières actions (évacuation, tentative d'extinction si possible).",
    timeLimit: 40,
    eliminatory: true,
  },
  {
    question: "Quelles vérifications l'agent SSIAP1 doit-il effectuer lors de son remplacement de poste (prise de service) ?",
    choices: [
      "Signer la main courante et attendre les informations du collègue sortant",
      "Vérifier l'état du tableau SSI (alarmes, dérangements, inhibitions), prendre connaissance des événements survenus, vérifier les registres et consignes, effectuer une ronde de prise de service, s'assurer du bon état des moyens de secours accessibles",
      "Uniquement vérifier que le registre de sécurité est à jour",
      "Il n'y a pas de procédure réglementaire pour la prise de service — chaque agent s'organise comme il l'entend",
    ],
    answer: [1],
    chapterLabel: "Procédures opérationnelles",
    explanation:
      "La prise de service SSIAP1 doit être rigoureuse : vérification de l'état du tableau CMSI (pas d'alarme non traitée, pas de dérangement en cours, inhibitions actives notées), lecture de la main courante des dernières heures, récupération des informations orales du collègue sortant (travaux en cours, visiteurs présents, équipements indisponibles), vérification des consignes particulières en vigueur, ronde de prise de service pour s'assurer de l'état des voies d'évacuation, extincteurs, DAS, RIA visibles. La signature de la main courante formalise la prise de responsabilité.",
    timeLimit: 35,
    eliminatory: false,
  },
  {
    question: "Un robinet d'incendie armé (RIA) 19/6 et un RIA 33/12 — quelle est la différence principale ?",
    choices: [
      "Le 19/6 a un tuyau de 19 mm de diamètre et un débit de 6 m³/h ; le 33/12 a un tuyau de 33 mm et un débit de 12 m³/h — le 33/12 offre une puissance d'extinction supérieure mais est plus difficile à manœuvrer seul",
      "La différence est uniquement esthétique — les deux modèles ont les mêmes performances hydrauliques",
      "Le 19/6 est réservé aux IGH ; le 33/12 est utilisé dans les ERP de 5e catégorie",
      "Le 19/6 utilise de la mousse ; le 33/12 utilise de l'eau pulvérisée",
    ],
    answer: [0],
    chapterLabel: "Procédures opérationnelles",
    explanation:
      "Un RIA est caractérisé par le diamètre de son tuyau (en mm) et son débit nominal (en m³/h ou L/min). RIA 19/6 : tuyau semi-rigide de 19 mm, débit ≥ 130 L/min (environ 6 m³/h), portée jusqu'à 10 m, manœuvrable par une seule personne — adapté aux ERP classiques. RIA 33/12 : tuyau souple de 33 mm, débit ≥ 500 L/min (environ 12 m³/h), portée > 15 m, nécessite généralement 2 personnes — adapté aux grands entrepôts et locaux à risques importants. L'agent SSIAP1 doit connaître l'implantation et le type de RIA de son établissement.",
    timeLimit: 35,
    eliminatory: false,
  },
  {
    question: "Quelles informations OBLIGATOIRES doivent figurer dans chaque entrée de la main courante SSIAP ?",
    choices: [
      "Date et signature de l'agent — les autres informations sont facultatives",
      "Date et heure précises de l'événement, identité de l'agent, nature exacte de l'événement, actions menées, suite donnée (réarmement, transmission, signalement)",
      "Uniquement les événements anormaux — les rondes sans anomalie ne doivent pas être consignées",
      "La main courante est un document interne libre — son contenu n'est pas réglementé",
    ],
    answer: [1],
    chapterLabel: "Procédures opérationnelles",
    explanation:
      "La main courante est un document officiel pouvant être requis lors d'une enquête ou d'une inspection. Chaque entrée doit comporter : date et heure précises, identification de l'agent (nom ou matricule), nature de l'événement (alarme zone X, ronde, visite intervenants, inhibition, défaut SSI…), actions entreprises (levée de doute, réarmement, appel 18, contact direction), suite donnée et heure de clôture. Les rondes sans anomalie doivent également être consignées (heure de départ, itinéraire, heure de retour, RAS). La main courante doit être conservée selon les délais définis par l'établissement (généralement 2 à 5 ans).",
    timeLimit: 30,
    eliminatory: false,
  },
  {
    question: "Dans le système SDI (Système de Détection Incendie), que signifie un voyant 'défaut' fixe (non clignotant) sur une zone ?",
    choices: [
      "Un feu est en cours dans cette zone — déclencher l'alarme générale immédiatement",
      "Un défaut de câblage, d'alimentation ou de fonctionnement a été détecté sur la zone (boucle ouverte, détecteur défaillant, court-circuit) — la zone peut ne plus être surveillée correctement. Consigner et signaler au mainteneur",
      "La zone a été réarmée avec succès après une alarme — état normal de retour",
      "Un dérangement climatique (humidité, poussière) a provoqué une fausse alarme sur un détecteur de la zone",
    ],
    answer: [1],
    chapterLabel: "Procédures opérationnelles",
    explanation:
      "Sur un tableau CMSI ou SDI, les voyants ont des significations précises : Voyant d'alarme (rouge fixe ou clignotant) : détection en cours. Voyant de dérangement/défaut (jaune ou orange) : anomalie technique sur l'installation (boucle coupée, détecteur hors service, alimentation défaillante, organe de mise en sécurité non actionné). Un défaut signifie que la surveillance de la zone est dégradée ou nulle — c'est une situation à risque qui doit être signalée immédiatement au responsable et au mainteneur agréé. L'agent SSIAP1 doit renforcer la surveillance humaine de la zone concernée jusqu'à correction.",
    timeLimit: 35,
    eliminatory: false,
  },
  {
    question: "Quelles sont les missions EXACTES de l'agent SSIAP1 (par opposition aux missions du SSIAP2 ou SSIAP3) ?",
    choices: [
      "L'agent SSIAP1 peut réaliser toutes les missions SSIAP y compris la direction du service de sécurité",
      "L'agent SSIAP1 est un agent d'exécution : rondes de surveillance, levée de doute, accueil et guidage des secours, tenue de la main courante, exploitation du SSI au PC selon les consignes, première intervention en cas de départ de feu",
      "L'agent SSIAP1 est uniquement responsable de la gestion administrative du registre de sécurité",
      "L'agent SSIAP1 dirige l'évacuation et coordonne les équipes de sécurité lors des sinistres",
    ],
    answer: [1],
    chapterLabel: "Réglementation & missions",
    explanation:
      "La hiérarchie SSIAP est claire. SSIAP1 (agent) : missions d'exécution — surveiller, détecter, alerter, intervenir en premier et accueillir les secours. SSIAP2 (chef d'équipe) : encadre les agents SSIAP1, anime et dirige les exercices, gère les maintenances de premier niveau, tient le registre de sécurité. SSIAP3 (chef de service) : dirige le service de sécurité, responsable de l'organisation générale, interlocuteur de la direction et de la commission de sécurité. L'agent SSIAP1 ne doit jamais outrepasser ses attributions — toute décision stratégique appartient au SSIAP2 ou SSIAP3.",
    timeLimit: 30,
    eliminatory: false,
  },
  {
    question: "Lors d'une visite d'une entreprise extérieure (maintenance, nettoyage, livraison) dans un ERP en exploitation, quelles mesures l'agent SSIAP1 doit-il mettre en œuvre ?",
    choices: [
      "Laisser les intervenants accéder librement — la responsabilité incombe à leur employeur",
      "Enregistrer l'identité et la nature de l'intervention sur la main courante, s'assurer que les intervenants connaissent les consignes de sécurité du site (alerte, évacuation), surveiller les zones concernées et récupérer les clés remises à leur départ",
      "Appeler la commission de sécurité pour toute intervention d'une entreprise extérieure",
      "Exiger un agrément SSIAP de l'entreprise extérieure avant toute autorisation d'accès",
    ],
    answer: [1],
    chapterLabel: "Procédures opérationnelles",
    explanation:
      "L'agent SSIAP1 doit gérer les accès des entreprises extérieures : consignation sur la main courante (heure d'arrivée, identité, entreprise, zone d'intervention, heure de départ), remise des consignes de sécurité incendie du site (procédure d'alerte, points de rassemblement, interdictions), récupération des badges ou clés remis, surveillance renforcée de la zone pendant l'intervention (risques travaux, accès locaux sensibles). Pour les travaux par points chauds, l'émission d'un permis de feu est obligatoire (signé par le chef d'établissement ou son délégué).",
    timeLimit: 35,
    eliminatory: false,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ATEX NIVEAU 1 — Intervenant en zone ATEX
// ─────────────────────────────────────────────────────────────────────────────
quizContent["atex-niveau1"] = [
  {
    question: "Qu'est-ce que la Concentration Minimale d'Explosivité (CME) pour les poussières ?",
    choices: [
      "La concentration maximale en poussières avant étouffement de la flamme",
      "La plus faible concentration en poussières en suspension dans l'air susceptible de provoquer une explosion — l'équivalent de la LIE pour les gaz",
      "La concentration de poussières déclenchant l'alarme d'un détecteur de particules",
      "Le taux d'humidité critique au-delà duquel les poussières ne s'enflamment plus",
    ],
    answer: [1],
    chapterLabel: "Physique de l'explosion",
    explanation: "La CME (Concentration Minimale d'Explosivité) est la plus faible concentration en poussières combustibles en suspension dans l'air pouvant former une atmosphère explosive — l'équivalent de la LIE (Limite Inférieure d'Explosivité) pour les gaz. En dessous de la CME, le mélange est trop pauvre pour exploser. Au-dessus d'une concentration maximale, la flamme est étouffée.",
    timeLimit: 35,
  },
  {
    question: "Qu'est-ce que la Température d'Auto-Inflammation (TAI) et pourquoi est-elle critique pour le choix d'un équipement Ex ?",
    choices: [
      "La température à laquelle un liquide produit suffisamment de vapeurs pour former une atmosphère explosive avec l'air — elle détermine le point éclair",
      "La température à laquelle un mélange combustible/air s'enflamme spontanément sans source d'inflammation externe — elle conditionne la classe de température T de l'équipement",
      "La température de surface maximale autorisée pour les équipements non certifiés",
      "La température de fusion d'un solide combustible",
    ],
    answer: [1],
    chapterLabel: "Physique de l'explosion",
    explanation: "La TAI est la température à laquelle un mélange gaz/air s'enflamme spontanément sans source d'inflammation externe. Elle détermine la classe de température T de l'équipement Ex : la température de surface maximale de l'appareil doit être inférieure à la TAI du gaz présent (avec une marge de sécurité). Un équipement T3 (200°C max) ne peut être utilisé avec un gaz ayant une TAI inférieure à 200°C.",
    timeLimit: 40,
  },
  {
    question: "Selon le guide INERIS Omega 36, pour un liquide inflammable, quelle règle de classification en Zone 1 s'applique en conditions normales d'exploitation ?",
    choices: [
      "La zone est classée 1 si le liquide est stocké à une température supérieure à son point éclair",
      "La zone est classée 1 si la température du liquide dépasse son point éclair moins 15 °C",
      "La zone est classée 1 uniquement si le point éclair est inférieur à 21 °C",
      "La zone est classée 1 si le liquide peut atteindre sa TAI",
    ],
    answer: [1],
    chapterLabel: "Zonage ATEX",
    explanation: "Selon INERIS Omega 36, pour les liquides inflammables, le critère principal de classification Zone 1 est la température d'exploitation par rapport au point éclair : si la température de stockage ou d'utilisation est supérieure au point éclair moins 15 °C (Tf − 15 °C), une Zone 1 doit être envisagée autour du liquide. Ce critère conduit à classer de nombreuses installations de solvants ou d'hydrocarbures légers.",
    timeLimit: 40,
  },
  {
    question: "Quel est l'équipement de catégorie 2G requis en Zone 1 (gaz) selon la correspondance ATEX ?",
    choices: [
      "Catégorie 1G uniquement pour les zones 0 et 1",
      "Catégories 1G ou 2G — un équipement de catégorie 2G est adapté à la Zone 1",
      "Catégorie 3G — valable dans toutes les zones",
      "Tout équipement certifié CE est acceptable en Zone 1",
    ],
    answer: [1],
    chapterLabel: "Équipements Ex",
    explanation: "La correspondance zones/catégories : Zone 0 → catégorie 1G minimum ; Zone 1 → catégorie 1G ou 2G ; Zone 2 → catégorie 1G, 2G ou 3G. Un équipement 2G offre 2 niveaux de protection indépendants et est conçu pour fonctionner en sécurité même en cas d'anomalie. Il est spécifiquement adapté à la Zone 1.",
    timeLimit: 35,
  },
  {
    question: "Sur le marquage Ex II 2G Ex d flIIC T5 Gb — que signifie le groupe de gaz 'IIC' ?",
    choices: [
      "Le groupe IIC correspond aux gaz les plus difficiles à enflammer — flamme refroidie facilement",
      "Le groupe IIC correspond aux gaz les plus dangereux (hydrogène, acétylène) — énergie minimale d'inflammation très basse, l'équipement peut être utilisé avec tous les gaz du groupe I, IIA et IIB également",
      "Le groupe IIC correspond uniquement aux vapeurs de solvants organiques",
      "Le groupe IIC signifie que l'équipement est certifié pour les poussières combustibles",
    ],
    answer: [1],
    chapterLabel: "Équipements Ex",
    explanation: "Les gaz sont classés en groupes IIA (propane, butane — les moins dangereux), IIB (éthylène) et IIC (hydrogène, acétylène, disulfure de carbone — les plus dangereux, énergie minimale d'inflammation très basse). Un équipement IIC peut être utilisé avec tous les gaz des groupes IIA et IIB. Un équipement IIA ne peut pas être utilisé avec des gaz IIB ou IIC.",
    timeLimit: 40,
  },
  {
    question: "Selon l'INERIS (Omega 36), quel est le risque majeur lié à l'utilisation d'un explosimètre étalonné au propane pour détecter du méthane ?",
    choices: [
      "Le propane et le méthane ont les mêmes caractéristiques — aucun risque de déviation",
      "L'appareil peut afficher une concentration de 20 % de la LIE alors que le méthane a déjà atteint 40 à 50 % de sa propre LIE — risque d'explosion avant l'alarme",
      "L'explosimètre s'endommagera définitivement s'il détecte du méthane après étalonnage propane",
      "La mesure sera légèrement surestimée, ce qui entraîne uniquement des fausses alarmes",
    ],
    answer: [1],
    chapterLabel: "Contrôle atmosphérique",
    explanation: "Point critique INERIS Omega 36 : chaque gaz a un facteur de réponse spécifique. Un explosimètre étalonné au propane affichera environ 40-50 % de la LIE méthane réelle pour une lecture de 20 % LIE propane. L'opérateur peut croire être en sécurité alors que la concentration est déjà dangereuse. L'étalonnage doit être réalisé avec le gaz effectivement présent ou avec un gaz de référence dont le facteur de conversion est parfaitement connu.",
    timeLimit: 45,
    contextLabel: "Point critique INERIS Omega 36 — Étalonnage explosimètre",
  },
  {
    question: "À quelle fréquence minimale un explosimètre portable doit-il être étalonné selon les bonnes pratiques et les recommandations INERIS ?",
    choices: [
      "Tous les 5 ans, lors de la révision générale",
      "Chaque jour avant utilisation (test au gaz d'étalonnage), avec une vérification métrologique annuelle ou selon la fréquence préconisée par le fabricant",
      "Seulement après chaque alarme ou incident",
      "Une fois à l'achat — l'étalonnage d'usine est valable pour toute la durée de vie",
    ],
    answer: [1],
    chapterLabel: "Contrôle atmosphérique",
    explanation: "L'INERIS recommande un test fonctionnel quotidien (bump test avec gaz d'étalonnage) avant chaque utilisation en zone ATEX, ainsi qu'un étalonnage métrologique complet selon la fréquence préconisée par le fabricant (généralement annuelle ou semestrielle). Un explosimètre non testé est considéré comme non fiable. Le compte rendu d'étalonnage doit être conservé.",
    timeLimit: 35,
  },
  {
    question: "Que couvre exactement l'Autorisation de Travail (AT) en zone ATEX selon l'article R.4515-8 du Code du travail ?",
    choices: [
      "Elle remplace le plan de prévention pour les petits chantiers",
      "Elle formalise les conditions d'exécution d'une opération spécifique en zone dangereuse : périmètre, mesures de sécurité, personnes autorisées, durée, vérifications atmosphériques",
      "Elle est uniquement requise pour les travaux par points chauds (permis de feu)",
      "Elle est délivrée par l'inspection du travail avant le début des travaux",
    ],
    answer: [1],
    chapterLabel: "Intervention en zone",
    explanation: "L'Autorisation de Travail (AT) est un document formalisant les conditions d'exécution sécurisée d'une opération en zone ATEX : identification de la zone, conditions atmosphériques vérifiées, EPI requis, outillage autorisé, personnes habilitées, durée, mesures de consignation. Elle est délivrée par le responsable de site ou le référent ATEX. Pour les travaux par points chauds, elle est complétée par un permis de feu spécifique.",
    timeLimit: 40,
  },
  {
    question: "Quelle est la distance de sécurité minimale à respecter entre des travaux par points chauds et une source potentielle de gaz inflammable selon les bonnes pratiques ATEX ?",
    choices: [
      "2 mètres",
      "5 mètres",
      "10 mètres",
      "20 mètres",
    ],
    answer: [2],
    chapterLabel: "Permis de feu",
    explanation: "Le guide INERIS Omega 36 et les bonnes pratiques professionnelles retiennent une distance de sécurité de 10 mètres entre les travaux par points chauds (soudure, meulage, découpe) et toute source potentielle de gaz ou vapeur inflammable. Cette distance peut être réduite si un contrôle atmosphérique continu est mis en place et si les zones voisines sont dégazées ou isolées.",
    timeLimit: 35,
    contextLabel: "Guide INERIS Omega 36 — Travaux par points chauds",
  },
  {
    question: "Quelle norme définit les exigences pour les vêtements antistatiques à porter en zone ATEX ?",
    choices: [
      "EN ISO 11612 (protection contre la chaleur et les flammes)",
      "EN 1149-5 (propriétés électrostatiques des vêtements de protection)",
      "EN 388 (gants de protection contre les risques mécaniques)",
      "EN 343 (protection contre la pluie)",
    ],
    answer: [1],
    chapterLabel: "Intervention en zone",
    explanation: "La norme EN 1149-5 définit les exigences de performance pour les vêtements de protection antistatiques en zone ATEX. Elle spécifie une résistance superficielle inférieure à 2,5×10⁹ Ω et des critères de dissipation des charges électrostatiques. Ces vêtements doivent être portés avec des chaussures ESD (EN ISO 20345/20347) et des sous-vêtements non synthétiques pour que l'ensemble du système soit antistatique.",
    timeLimit: 35,
  },
  {
    question: "Pourquoi les chaussures de sécurité standard (non-ESD) sont-elles interdites en zone ATEX ?",
    choices: [
      "Elles ne résistent pas à la chaleur produite lors d'une explosion",
      "Leur semelle en caoutchouc isolant peut accumuler des charges électrostatiques susceptibles de se décharger par étincelle",
      "Elles ne sont pas certifiées CE",
      "Elles ne protègent pas contre les projections de liquides inflammables",
    ],
    answer: [1],
    chapterLabel: "Intervention en zone",
    explanation: "Les semelles en caoutchouc isolant des chaussures standard empêchent l'évacuation des charges électrostatiques générées par les mouvements du corps. Ces charges peuvent s'accumuler et se décharger sous forme d'étincelle lors du contact avec un élément conducteur — une source d'inflammation potentielle en zone ATEX. Les chaussures ESD (conformes EN ISO 20345, marquage ESD) permettent la dissipation contrôlée des charges vers la terre.",
    timeLimit: 35,
  },
  {
    question: "Selon l'INERIS, quelles sont les 3 situations de maintenance des équipements Ex qui nécessitent des procédures spécifiques ?",
    choices: [
      "Maintenance préventive, maintenance curative, maintenance prédictive",
      "Maintenance de base (inspection, nettoyage, graissage), maintenance après défaut ou incident, révision générale de l'équipement",
      "Maintenance à chaud, maintenance à froid, maintenance mixte",
      "Maintenance interne, maintenance sous-traitée, maintenance fabricant",
    ],
    answer: [1],
    chapterLabel: "Équipements Ex",
    explanation: "Le guide INERIS Omega 36 distingue 3 situations de maintenance des équipements Ex : (1) la maintenance de base — inspections, nettoyage, vérification du serrage, lubrification, sans modification ; (2) la maintenance après défaut ou incident — réparation suite à une anomalie détectée, avec remise en conformité obligatoire ; (3) la révision générale — démontage complet, remplacement de pièces usées, vérification complète de l'intégrité Ex. Chaque situation exige un niveau de qualification différent.",
    timeLimit: 40,
    contextLabel: "Guide INERIS Omega 36 — Maintenance équipements Ex",
  },
  {
    question: "Quelle norme encadre la vérification initiale et périodique des installations électriques en zone ATEX (appareillage Ex) ?",
    choices: [
      "NF C 15-100 (installations électriques basse tension)",
      "EN 60079-17 (installations électriques en zone ATEX — inspection et entretien)",
      "EN 60079-14 (conception et installation électrique en zone ATEX)",
      "ISO 9001 (management de la qualité)",
    ],
    answer: [1],
    chapterLabel: "Équipements Ex",
    explanation: "La norme EN 60079-17 (Atmosphères explosives — Partie 17 : Inspection et entretien des installations électriques) définit les exigences pour la vérification initiale, les inspections périodiques et la maintenance des équipements électriques en zone ATEX. Elle distingue 3 niveaux d'inspection : inspection visuelle, inspection rapprochée et inspection détaillée. EN 60079-14 couvre quant à elle la conception et l'installation initiale.",
    timeLimit: 35,
  },
  {
    question: "Un outil en acier standard (marteau, clé) est-il utilisable en zone ATEX de manière générale ?",
    choices: [
      "Oui, si l'utilisateur porte des EPI complets",
      "Non — les outils en acier peuvent générer des étincelles lors d'un choc ; des outils anti-étincelles (alliage cuivre-béryllium ou cuivre-aluminium) sont requis en zones 1 et 0",
      "Oui, uniquement pour les interventions de courte durée (< 5 minutes)",
      "Oui, si l'explosimètre ne détecte aucune concentration supérieure à 10 % LIE",
    ],
    answer: [1],
    chapterLabel: "Intervention en zone",
    explanation: "Les outils en acier peuvent produire des étincelles par choc ou friction, constituant une source d'inflammation en zone ATEX. En Zones 0 et 1, des outils anti-étincelles en alliages cuivre-béryllium ou cuivre-aluminium (ou revêtus) sont requis. En Zone 2, l'évaluation des risques peut permettre les outils en acier dans certaines conditions, avec mesures de contrôle atmosphérique. Les outils doivent être propres et dépourvus de rouille.",
    timeLimit: 35,
  },
  {
    question: "Quelle est la signification du mode de protection 'd' (boîtier antidéflagrant) dans le marquage Ex d IIC T4 ?",
    choices: [
      "L'équipement est entouré d'un gaz inerte sous pression positive",
      "Le boîtier résiste à une explosion interne et étouffe la flamme avant qu'elle ne se propage à l'atmosphère externe explosive",
      "L'équipement fonctionne à une énergie électrique inférieure à celle nécessaire pour enflammer le gaz",
      "L'équipement est immergé dans de l'huile pour isoler les parties actives",
    ],
    answer: [1],
    chapterLabel: "Équipements Ex",
    explanation: "Le mode de protection 'd' (encapsulation antidéflagrante) est basé sur un boîtier robuste capable de résister à une explosion interne du mélange gazeux qui y pénètre, et dont les surfaces d'arrêt et les jeux sont calculés pour que les gaz chauds se refroidissent lors de leur évacuation et ne puissent pas enflammer l'atmosphère externe. Ce mode est courant pour les moteurs, armoires et matériels de commande en zone ATEX.",
    timeLimit: 40,
  },
  {
    question: "En cas de détection d'une odeur de gaz en zone ATEX, quelle séquence d'actions est correcte ?",
    choices: [
      "Chercher la fuite, ventiler puis continuer le travail si l'explosimètre n'alarme pas",
      "Appeler immédiatement par téléphone portable pour alerter les secours",
      "Arrêter toute opération, ne pas actionner d'interrupteur électrique, évacuer la zone calmement, alerter par un moyen sécurisé depuis l'extérieur de la zone, interdire l'accès",
      "Allumer toutes les lumières pour faciliter la recherche de fuite avant évacuation",
    ],
    answer: [2],
    chapterLabel: "Intervention en zone",
    explanation: "La séquence PEAS en cas de détection de gaz : Protéger (arrêt des travaux, ne toucher à aucun équipement électrique), Évacuer (calmement, sans courir, ne pas créer d'étincelles), Alerter (depuis l'extérieur de la zone, téléphone fixe ou point de rassemblement, jamais avec le portable en zone), Secourir (attendre les secours, interdire l'accès). Actionner un interrupteur électrique peut créer une étincelle et déclencher une explosion.",
    timeLimit: 40,
  },
  {
    question: "Quelle est la durée de validité d'un avis d'habilitation ATEX et quelle action est requise à son échéance ?",
    choices: [
      "5 ans — renouvellement automatique si pas d'accident",
      "3 ans — recyclage et réévaluation des compétences avant reconduction par l'employeur",
      "1 an — formation annuelle obligatoire",
      "Illimité si le salarié reste dans le même poste",
    ],
    answer: [1],
    chapterLabel: "Intervention en zone",
    explanation: "L'avis d'habilitation ATEX est valable 3 ans. Son renouvellement exige un recyclage avec réévaluation des compétences, prenant en compte les évolutions réglementaires, technologiques et les retours d'expérience du site. L'employeur reste responsable de la reconduction ou du refus de reconduction selon les résultats de la réévaluation.",
    timeLimit: 30,
  },
  {
    question: "Pourquoi l'humidité est-elle un paramètre important dans la gestion du risque ATEX lié aux poussières ?",
    choices: [
      "L'humidité accélère la réaction chimique d'oxydation des poussières",
      "Une humidité élevée favorise l'agglomération des poussières et réduit leur capacité à se maintenir en suspension dans l'air, diminuant ainsi le risque d'explosion",
      "L'humidité n'a aucun impact sur le risque ATEX — seule la concentration volumique compte",
      "Une humidité élevée augmente la conductivité électrique des poussières, favorisant les étincelles",
    ],
    answer: [1],
    chapterLabel: "Physique de l'explosion",
    explanation: "L'humidité joue un rôle protecteur vis-à-vis du risque ATEX poussières : des particules humides s'agglomèrent et se déposent plus facilement, réduisant la concentration en suspension dans l'air. C'est pourquoi l'humidification des locaux est parfois utilisée comme mesure de prévention complémentaire dans les moulins et silos. Attention : ce n'est pas une mesure de substitution aux mesures de zonage et d'équipements certifiés.",
    timeLimit: 35,
  },
  {
    question: "Une mise à la terre est réalisée avant de commencer des travaux de maintenance sur une tuyauterie contenant des hydrocarbures en zone ATEX. Quel risque cette mesure permet-elle d'éliminer ?",
    choices: [
      "Le risque de corrosion galvanique entre les différents métaux de la tuyauterie",
      "Le risque d'étincelle d'électricité statique lors du débranchement des brides ou du remplacement de joints",
      "Le risque de surtension provoqué par la foudre",
      "Le risque de choc électrique par contact avec une installation sous tension",
    ],
    answer: [1],
    chapterLabel: "Intervention en zone",
    explanation: "Lors du démontage de tuyauteries d'hydrocarbures, le frottement des liquides peut générer des charges électrostatiques importantes sur les segments de tuyau. Si les segments ne sont pas équipotentiels et mis à la terre, la décharge peut générer une étincelle capable d'enflammer les vapeurs libérées lors de l'ouverture. La mise à la terre et l'équipotentialité des équipements avant toute intervention sont des mesures préventives fondamentales.",
    timeLimit: 40,
  },
  {
    question: "Parmi ces EPI, lesquels sont OBLIGATOIRES pour un intervenant travaillant en Zone 1 (gaz) lors d'une opération de maintenance ? (plusieurs réponses possibles)",
    choices: [
      "Vêtements antistatiques EN 1149-5",
      "Chaussures ESD certifiées",
      "Explosimètre portable certifié Ex, étalonné",
      "Casque de chantier standard (sans certification Ex requise pour le casque)",
    ],
    answer: [0, 1, 2, 3],
    multiple: true,
    chapterLabel: "Intervention en zone",
    explanation: "En Zone 1 lors d'une opération de maintenance : (1) vêtements antistatiques EN 1149-5 obligatoires pour éviter les étincelles électrostatiques ; (2) chaussures ESD pour dissiper les charges vers la terre ; (3) explosimètre portable calibré pour surveiller l'atmosphère en continu ; (4) le casque de protection des voies respiratoires et de la tête — le casque standard (sans certification Ex spécifique) est acceptable car il ne contient pas de composants électriques. D'autres EPI peuvent s'ajouter selon l'évaluation des risques (gants, lunettes, appareils de protection respiratoire).",
    timeLimit: 45,
  },
  {
    question: "Quel article du Code du travail fixe l'obligation pour l'employeur d'établir le Document Relatif à la Protection Contre les Explosions (DRPCE) ?",
    choices: [
      "Article R.4227-42 du Code du travail",
      "Article L.4121-3 (évaluation générale des risques) combiné avec l'article R.4227-50 spécifique ATEX",
      "Article R.4515-8 (autorisation de travail)",
      "Article L.4131-1 (droit de retrait)",
    ],
    answer: [1],
    chapterLabel: "Zonage ATEX",
    explanation: "L'article R.4227-50 du Code du travail (transposant la directive 99/92/CE) exige que l'employeur établisse et tienne à jour le DRPCE (Document Relatif à la Protection Contre les Explosions) pour tout établissement comportant des zones ATEX. Ce document fait partie de l'évaluation des risques de l'article L.4121-3. Il doit être établi avant le début des travaux, mis à jour lors de modifications significatives et accessible aux travailleurs concernés.",
    timeLimit: 40,
  },
  {
    question: "Vous travaillez en Zone 2 (gaz) sur une opération de nettoyage de routine. Votre collègue propose d'utiliser un aspirateur industriel standard pour nettoyer plus rapidement. Quelle est votre réaction correcte ?",
    choices: [
      "Accepter si l'aspirateur a été acheté récemment et possède un filtre HEPA",
      "Refuser — un aspirateur industriel standard peut générer des étincelles électriques, des décharges électrostatiques et des températures de surface non contrôlées ; seul un aspirateur certifié Ex adapté à la zone est utilisable",
      "Accepter si le nettoyage dure moins de 10 minutes",
      "Accepter si l'explosimètre ne détecte aucune concentration de gaz au moment du nettoyage",
    ],
    answer: [1],
    chapterLabel: "Équipements Ex",
    explanation: "Même en Zone 2 (présence d'atmosphère explosive rare), tout équipement électrique non certifié Ex est interdit. Un aspirateur standard peut : (1) générer des étincelles par ses contacts électriques ; (2) créer des décharges électrostatiques dans son sac ou filtre ; (3) présenter des températures de surface non contrôlées sur le moteur. La certification Ex est obligatoire pour tous les appareils électriques en zones 0, 1 et 2.",
    timeLimit: 40,
  },
  {
    question: "Comment s'appelle la valeur caractéristique d'un liquide inflammable qui correspond à la température minimale à laquelle il produit suffisamment de vapeurs pour former un mélange explosif avec l'air ?",
    choices: [
      "La Température d'Auto-Inflammation (TAI)",
      "La Limite Inférieure d'Explosivité (LIE)",
      "Le point éclair (ou point d'éclair)",
      "La Concentration Minimale d'Explosivité (CME)",
    ],
    answer: [2],
    chapterLabel: "Physique de l'explosion",
    explanation: "Le point éclair (ou température d'éclair) est la température minimale à laquelle un liquide inflammable produit suffisamment de vapeurs pour former un mélange inflammable avec l'air au-dessus de sa surface. Il est fondamental pour la classification des liquides : < 21°C (catégorie 1 — très inflammable, ex. essence), 21-55°C (catégorie 2 — inflammable, ex. gasoil froid), 55-100°C (catégorie 3, ex. fioul domestique). Le point éclair conditionne le zonage ATEX autour des cuves.",
    timeLimit: 35,
  },
  // ── Track électrique (N1E) ────────────────────────────────────────────────
  {
    question: "Vous remplacez un câble entrant dans un boîtier Ex d (antidéflagrant) en Zone 1. Quel type de presse-étoupe devez-vous utiliser ?",
    choices: [
      "Un presse-étoupe standard IP68, suffisamment étanche",
      "Un presse-étoupe certifié Ex d, conforme à EN 60079-1 Annexe A, adapté au diamètre du câble",
      "Tout presse-étoupe métallique renforcé, quelle que soit sa certification",
      "Aucun presse-étoupe — le câble peut traverser directement la paroi si le câblage est soigné",
    ],
    answer: [1],
    chapterLabel: "Installations électriques Ex",
    explanation:
      "Un boîtier Ex d (enveloppe antidéflagrante) tire sa protection de la résistance de ses parois et de l'étanchéité de ses traversées. Un presse-étoupe standard, même très étanche (IP68), ne résiste pas à une explosion interne et n'est pas certifié pour ce mode de protection. Un presse-étoupe non certifié Ex d annule intégralement la protection du boîtier. La norme EN 60079-1 Annexe A définit les exigences pour les presses-étoupe utilisés en mode de protection 'd'.",
    timeLimit: 40,
  },
  {
    question: "Avant d'ouvrir une armoire électrique Ex p (surpression interne) en Zone 1 pour effectuer une maintenance, quelle séquence d'actions est correcte ?",
    choices: [
      "Ouvrir directement — la surpression à l'intérieur protège contre l'entrée de gaz pendant l'ouverture",
      "Couper l'alimentation électrique, maintenir la surpression pour protéger l'intérieur pendant la maintenance",
      "Couper l'alimentation électrique, arrêter le circuit de pressurisation, attendre la durée de purge définie par le fabricant, puis ouvrir",
      "Ouvrir uniquement si l'explosimètre confirme < 10 % LIE à proximité immédiate de l'armoire",
    ],
    answer: [2],
    chapterLabel: "Installations électriques Ex",
    explanation:
      "Le protocole d'ouverture d'une armoire Ex p comporte impérativement 3 étapes : (1) couper l'alimentation électrique pour supprimer toute source d'étincelle lors de l'ouverture ; (2) arrêter le circuit de pressurisation ; (3) attendre la durée de purge définie par le fabricant (5 à 15 minutes selon le volume) pour que la pression s'équilibre sans risque. Ouvrir sous tension une armoire Ex p en zone ATEX est extrêmement dangereux — l'ouverture brusque peut aspirer de l'atmosphère explosive dans l'armoire et créer une étincelle fatale.",
    timeLimit: 40,
    contextLabel: "Armoire Ex p — protocole d'ouverture",
  },
  {
    question: "Un technicien souhaite ajouter un capteur de pression supplémentaire sur une boucle de mesure Ex ia (sécurité intrinsèque) en Zone 0. Quelle erreur critique doit-il absolument éviter ?",
    choices: [
      "Utiliser un câble de couleur rouge au lieu du bleu conventionnel pour les boucles IS",
      "Brancher le nouveau capteur sur un circuit non-intrinsèquement sûr (alimentation classique 24V DC sans barrière)",
      "Réaliser le raccordement sans couper l'alimentation de la boucle IS existante",
      "Utiliser un câble blindé à la place d'un câble non blindé",
    ],
    answer: [1],
    chapterLabel: "Installations électriques Ex",
    explanation:
      "En sécurité intrinsèque Ex ia, la protection repose sur la limitation de l'énergie électrique disponible en zone à une valeur inférieure à l'énergie minimale d'inflammation. Brancher un capteur Ex ia sur un circuit non-intrinsèquement sûr (alimentation classique sans barrière Zener ou séparateur galvanique) injecte de l'énergie non limitée dans la zone — la protection Ex ia est détruite et le risque d'étincelle en zone 0 est maximal. Cette erreur est responsable de nombreux accidents. Tout circuit IS doit rester intégralement IS sur son trajet complet.",
    timeLimit: 40,
    eliminatory: true,
    contextLabel: "Erreur critique — Boucle Ex ia",
  },
  {
    question: "Lors d'une ronde en zone ATEX, vous constatez qu'un moteur Ex présente des vibrations anormales et une élévation de température sur le palier avant. Que faites-vous ?",
    choices: [
      "Continuer la ronde et signaler lors du prochain compte-rendu hebdomadaire",
      "Lubrifier immédiatement le palier avec de la graisse universelle pour corriger le problème",
      "Arrêter le moteur immédiatement, consigner la machine, signaler au responsable sécurité avant toute remise en service",
      "Réduire la charge de la machine pour limiter les vibrations et continuer la production",
    ],
    answer: [2],
    chapterLabel: "Installations électriques Ex",
    explanation:
      "Un moteur Ex présentant vibrations anormales + surchauffe de palier est en cours de défaillance de roulement. Un roulement qui lâche peut : (1) provoquer un contact rotor-stator générateur d'étincelles ; (2) atteindre une température de surface supérieure à la classe T du moteur, constituant une source d'inflammation directe en zone ATEX. L'arrêt immédiat est impératif. Continuer à faire fonctionner la machine ou lubrifier sans diagnostic préalable aggrave le défaut. La consignation empêche une remise en service non autorisée.",
    timeLimit: 35,
    eliminatory: true,
  },
  {
    question: "Quelle norme encadre spécifiquement les vérifications initiales et périodiques des équipements électriques installés en zone ATEX ?",
    choices: [
      "NF C 15-100 — installations électriques basse tension",
      "EN 60079-14 — conception et construction des installations électriques en zones ATEX",
      "EN 60079-17 — inspection et entretien des installations électriques en atmosphères explosives",
      "EN 60529 — degrés de protection IP",
    ],
    answer: [2],
    chapterLabel: "Installations électriques Ex",
    explanation:
      "La norme EN 60079-17 est la référence pour l'inspection et l'entretien des installations électriques en zone ATEX. Elle définit 3 niveaux d'inspection : visuelle (externe, sans démontage), rapprochée (avec accès à l'intérieur) et détaillée (démontage complet selon instructions fabricant). EN 60079-14 couvre la conception et l'installation initiale, NF C 15-100 les installations BT classiques (hors ATEX), et EN 60529 les indices de protection IP — tous complémentaires mais sans rapport direct avec les vérifications périodiques ATEX.",
    timeLimit: 35,
    chapterLabel: "Installations électriques Ex",
  },
  // ── Track mécanique (N1M) ─────────────────────────────────────────────────
  {
    question: "Quelle norme encadre la certification des équipements mécaniques non électriques (pompes, compresseurs, ventilateurs) destinés à être utilisés en zone ATEX ?",
    choices: [
      "EN 60079-14 — exclusivement pour les équipements électriques",
      "EN 13463-1 (et EN ISO 80079-36) — équipements non électriques pour atmosphères explosives",
      "NF EN 12845 — installations fixes d'extinction automatique par sprinkler",
      "EN 60529 — degrés de protection des enveloppes (indices IP)",
    ],
    answer: [1],
    chapterLabel: "Équipements mécaniques Ex",
    explanation:
      "La norme EN 13463-1 (remplacée progressivement par EN ISO 80079-36) définit les règles générales pour la conception et la certification des équipements non électriques destinés aux zones ATEX. Elle est le pendant de EN 60079-0 pour les équipements électriques. Depuis le 30 juin 2003, les équipements mécaniques non électriques présentant une source d'inflammation propre (friction, choc, surface chaude) doivent être certifiés Ex pour leur zone d'utilisation, conformément à la directive 2014/34/UE.",
    timeLimit: 35,
  },
  {
    question: "Vous intervenez sur une pompe centrifuge en Zone 1 transportant des hydrocarbures légers (point éclair < 21 °C). La pompe s'est arrêtée sur défaut et vous constatez une forte odeur de produit. Quelle est la première vérification à effectuer avant de redémarrer ?",
    choices: [
      "Vérifier que le moteur n'a pas surchauffé en touchant le boîtier avec la main",
      "Vérifier l'intégrité de la garniture mécanique et l'absence de fuite — la garniture à sec est une source d'inflammation potentielle",
      "Redémarrer la pompe à vitesse réduite pour tester si le problème persiste",
      "Inspecter uniquement les câbles d'alimentation du moteur",
    ],
    answer: [1],
    chapterLabel: "Équipements mécaniques Ex",
    explanation:
      "Une forte odeur de produit après un arrêt de pompe indique une fuite de la garniture mécanique. Une garniture qui fuit peut : (1) créer une zone ATEX locale autour de la pompe ; (2) fonctionner à sec si le produit ne lubrifie plus les faces de frottement — la garniture à sec chauffe rapidement au-delà de la TAI du produit. En Zone 1 avec hydrocarbures légers, une garniture défaillante constitue une source d'inflammation directe. L'inspection visuelle de la garniture est la première action. Ne jamais redémarrer sans avoir éliminé la cause du défaut.",
    timeLimit: 40,
    eliminatory: true,
  },
  {
    question: "Lors d'une maintenance dans une zone à risque de poussières combustibles (Zone 21), votre collègue propose d'utiliser un pistolet à air comprimé pour nettoyer les dépôts de poussières sur les équipements. Quelle est votre réponse ?",
    choices: [
      "Accepter si la pression est maintenue en dessous de 6 bars",
      "Refuser — le nettoyage à l'air comprimé est interdit en zone poussières : il remet les dépôts en suspension et crée instantanément une atmosphère explosive",
      "Accepter si l'explosimètre ne détecte rien dans la zone au moment du nettoyage",
      "Accepter si le nettoyage est rapide et que l'opérateur porte un masque FFP3",
    ],
    answer: [1],
    chapterLabel: "Équipements mécaniques Ex",
    explanation:
      "Le nettoyage à l'air comprimé est formellement interdit en zone à risque de poussières combustibles. Une Zone 21 contient des dépôts de poussières potentiellement combustibles. Le soufflage à l'air les remet en suspension sous forme de nuage — créant instantanément une Zone 20 transitoire (nuage continu) dans l'espace de travail. Si une source d'inflammation est présente (équipement non certifié Ex, étincelle statique, surface chaude), l'explosion est immédiate. Utiliser exclusivement des aspirateurs certifiés Ex pour la zone concernée, ou le nettoyage humide contrôlé.",
    timeLimit: 40,
    eliminatory: true,
    contextLabel: "Interdit — nettoyage air comprimé en zone poussières",
  },
  {
    question: "Lors d'une ronde de maintenance en zone ATEX, vous constatez qu'un réducteur mécanique émet un bruit de craquement inhabituel et que le palier est anormalement chaud au toucher. Quelle est la bonne conduite à tenir ?",
    choices: [
      "Ajouter de la graisse immédiatement pour corriger le problème de lubrification et continuer la production",
      "Noter l'anomalie et attendre la prochaine maintenance planifiée dans 15 jours",
      "Arrêter la machine, consigner l'équipement, signaler immédiatement au responsable sécurité et ne pas autoriser de remise en service sans diagnostic préalable",
      "Réduire la vitesse de rotation pour limiter la surchauffe et maintenir la production",
    ],
    answer: [2],
    chapterLabel: "Équipements mécaniques Ex",
    explanation:
      "Bruit de craquement + palier chaud = roulement en cours de défaillance. Un roulement défaillant en zone ATEX peut : (1) atteindre une température supérieure à la TAI du produit présent (source d'inflammation par surface chaude) ; (2) provoquer un blocage brutal avec choc et génération d'étincelles mécaniques. L'arrêt immédiat et la consignation de la machine sont les seules réponses acceptables. Le sur-graissage sans diagnostic aggrave généralement le problème. L'attente de 15 jours est incompatible avec la sécurité en zone ATEX.",
    timeLimit: 35,
    eliminatory: true,
  },
  {
    question: "Quelle est la principale justification technique de l'utilisation d'une garniture mécanique double à fluide de barrage (pressurized barrier fluid) pour une pompe en Zone 1 transportant des hydrocarbures à point éclair < 21 °C ?",
    choices: [
      "La garniture double permet de doubler le débit de la pompe",
      "Le fluide de barrage maintenu à une pression supérieure au produit garantit que seul le fluide de barrage peut fuir vers l'extérieur — le produit inflammable reste confiné même en cas d'usure partielle de la garniture primaire",
      "La garniture double réduit les vibrations de la pompe et améliore sa durée de vie",
      "La garniture double est obligatoire uniquement pour les produits corrosifs, pas pour les hydrocarbures",
    ],
    answer: [1],
    chapterLabel: "Équipements mécaniques Ex",
    explanation:
      "La garniture double à fluide de barrage pressurisé fonctionne sur le principe de la contre-pression : le fluide de barrage est maintenu à une pression supérieure à la pression du produit pompé. En cas d'usure de la garniture primaire (côté produit), c'est le fluide de barrage (non inflammable ou peu dangereux) qui fuit vers le produit — jamais l'inverse. L'atmosphère extérieure ne reçoit donc que du fluide de barrage et non le produit inflammable. Cette conception est fondamentale pour les produits volatils à fort risque ATEX (hydrocarbures légers, solvants, GPL) en zone 1.",
    timeLimit: 40,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ATEX NIVEAU 2 — Encadrant et Référent ATEX
// ─────────────────────────────────────────────────────────────────────────────
quizContent["atex-niveau2"] = [
  {
    question: "En tant qu'encadrant ATEX, quelle est votre responsabilité personnelle si un accident survient en zone ATEX sous votre supervision, indépendamment des délégations de pouvoir en place ?",
    choices: [
      "L'encadrant n'est jamais responsable pénalement — seul l'employeur est mis en cause",
      "L'encadrant peut être mis en cause pour faute inexcusable ou délit de mise en danger de la vie d'autrui (Art. 223-1 Code pénal) si un manquement délibéré aux obligations de sécurité est établi",
      "L'encadrant est responsable uniquement si la délégation de pouvoir n'a pas été formalisée par écrit",
      "L'encadrant répond uniquement devant la hiérarchie interne — pas devant les tribunaux",
    ],
    answer: [1],
    chapterLabel: "Responsabilités & droit",
    explanation: "L'encadrant ATEX peut engager sa responsabilité pénale personnelle au titre de l'article 223-1 du Code pénal (mise en danger de la vie d'autrui par violation manifestement délibérée d'une obligation réglementaire de sécurité), ou de l'article 221-6 (homicide involontaire). Une délégation de pouvoir valide transfère la responsabilité de l'employeur mais n'exonère pas l'encadrant de ses propres obligations de vigilance et de compétence.",
    timeLimit: 45,
  },
  {
    question: "Quelles sont les 4 conditions cumulatives de validité d'une délégation de pouvoir en matière de sécurité ATEX ?",
    choices: [
      "Être écrite, signée par le DRH, déposée aux Prud'hommes, et acceptée par le délégué du personnel",
      "Être accordée à une personne dotée de l'autorité, des moyens, des compétences et de l'autonomie nécessaires pour exercer la mission de sécurité déléguée",
      "Être notifiée à l'inspection du travail et validée par le médecin du travail",
      "Avoir une durée limitée à 1 an, être renouvelée annuellement et mentionner le nom du délégataire",
    ],
    answer: [1],
    chapterLabel: "Responsabilités & droit",
    explanation: "La jurisprudence française exige 4 conditions cumulatives pour qu'une délégation de pouvoir soit valide en matière de sécurité : (1) autorité — pouvoir réel de donner des instructions ; (2) moyens — ressources humaines et matérielles suffisantes ; (3) compétence — formation et expérience adaptées à la mission ; (4) autonomie — capacité d'agir sans autorisation préalable. Une délégation accordée à une personne sans les moyens nécessaires est inopérante.",
    timeLimit: 45,
  },
  {
    question: "Quelles normes constituent le cadre principal pour la méthodologie de classification des zones ATEX lors de la rédaction du DRPCE ?",
    choices: [
      "EN 60079-14 (installation) et EN 60079-17 (maintenance)",
      "EN 60079-10-1 (gaz et vapeurs) et EN 60079-10-2 (poussières combustibles)",
      "ISO 31000 (gestion des risques) et OHSAS 18001",
      "EN ISO 80079-36 et EN ISO 80079-37 (équipements non électriques)",
    ],
    answer: [1],
    chapterLabel: "DRPCE",
    explanation: "La classification des zones ATEX s'appuie sur : EN 60079-10-1 pour les atmosphères gazeuses (méthodologie de détermination des zones 0, 1, 2 autour des sources de dégagement — source primaire, secondaire, continue) et EN 60079-10-2 pour les poussières combustibles (zones 20, 21, 22). Ces normes fournissent la méthodologie et les exemples de calcul pour délimiter les zones et les inclure dans le DRPCE.",
    timeLimit: 40,
  },
  {
    question: "Quelles sont les 3 catégories de sources de dégagement définies par EN 60079-10-1 qui conditionnent la classification en Zone 0, 1 ou 2 ?",
    choices: [
      "Source fixe, source mobile, source temporaire",
      "Source continue (permanente ou quasi-permanente), source primaire (en fonctionnement normal), source secondaire (en cas d'anomalie)",
      "Source à risque élevé, moyen et faible",
      "Source certifiée, source contrôlée, source non contrôlée",
    ],
    answer: [1],
    chapterLabel: "Zonage & évaluation",
    explanation: "EN 60079-10-1 définit : source continue (dégagement permanent ou sur de longues périodes → Zone 0) ; source primaire (dégagement probable en fonctionnement normal → Zone 1) ; source secondaire (dégagement improbable en fonctionnement normal, uniquement lors d'anomalies rares et brèves → Zone 2). La classification tient compte de la fréquence des dégagements ET de leur étendue (volume de la zone), selon les caractéristiques physico-chimiques du produit et la ventilation disponible.",
    timeLimit: 45,
  },
  {
    question: "Combien de parties principales doit comporter un DRPCE (Document Relatif à la Protection Contre les Explosions) complet selon l'Arrêté du 8 juillet 2003 ?",
    choices: [
      "3 parties : identification des zones, équipements utilisés, plan d'urgence",
      "5 parties : évaluation des risques, zonage, mesures de prévention, équipements Ex, formation",
      "8 parties : présentation du site, substances dangereuses, sources de dégagement, classification des zones, sources d'inflammation, mesures préventives, équipements Ex, gestion des interventions",
      "2 parties : carte des zones ATEX et liste des équipements certifiés",
    ],
    answer: [2],
    chapterLabel: "DRPCE",
    explanation: "Un DRPCE complet couvre : (1) présentation de l'établissement et des activités ; (2) identification et caractérisation des substances inflammables utilisées ; (3) identification des sources de dégagement et paramètres de dégazage ; (4) classification des zones ATEX (0/1/2 gaz, 20/21/22 poussières) avec cartographie ; (5) recensement des sources d'inflammation et mesures d'élimination ; (6) mesures organisationnelles et techniques de prévention ; (7) liste des équipements Ex utilisés avec leurs certificats ; (8) procédures de gestion des interventions et de permis de travail.",
    timeLimit: 40,
  },
  {
    question: "Des équipements installés avant le 30 juin 2003 et n'ayant pas de certification ATEX peuvent-ils rester en service en zone ATEX ?",
    choices: [
      "Non — tous les équipements en zone ATEX doivent être certifiés Ex depuis le 1er juillet 2003",
      "Oui, uniquement s'ils sont en Zone 2 ou 22 (zones de moindre risque)",
      "Oui, sous conditions — leur maintien est possible si une évaluation documentée démontre qu'ils présentent un niveau de sécurité équivalent, et si cette analyse est intégrée au DRPCE",
      "Oui, sans condition jusqu'à leur premier remplacement programmé",
    ],
    answer: [2],
    chapterLabel: "Équipements Ex",
    explanation: "L'Arrêté du 8 juillet 2003 (transposant la directive ATEX 94/9/CE) exige la certification Ex des équipements mis sur le marché après le 1er juillet 2003. Pour les équipements antérieurs, le maintien en service est possible à condition que l'employeur réalise une évaluation documentée démontrant qu'ils offrent un niveau de sécurité équivalent (analyse des modes de défaillance, mesures compensatoires) et que cette analyse figure dans le DRPCE. Cette dérogation ne s'applique pas si l'équipement est modifié.",
    timeLimit: 45,
    contextLabel: "Arrêté du 8 juillet 2003 — Équipements existants avant 2003",
  },
  {
    question: "Lors de la sélection d'un équipement Ex pour une Zone 1 contenant de l'éthylène (groupe IIB), quel équipement peut-on utiliser ?",
    choices: [
      "Uniquement un équipement marqué IIB",
      "Un équipement marqué IIB ou IIC (catégorie supérieure compatible avec IIB)",
      "Un équipement marqué IIA, IIB ou IIC — tous sont compatibles avec l'éthylène",
      "Uniquement un équipement IIC car l'éthylène est un gaz très dangereux",
    ],
    answer: [1],
    chapterLabel: "Équipements Ex",
    explanation: "Le principe de compatibilité des groupes de gaz : IIC (le plus restrictif) ⊃ IIB ⊃ IIA. Un équipement certifié IIB peut être utilisé avec des gaz de groupe IIA ou IIB. Un équipement IIC peut être utilisé avec tous les groupes. Un équipement IIA ne peut PAS être utilisé avec un gaz de groupe IIB ou IIC. Pour l'éthylène (groupe IIB), on peut utiliser un équipement IIB ou IIC, pas IIA.",
    timeLimit: 40,
  },
  {
    question: "Quels documents obligatoires doit fournir le fabricant d'un équipement Ex certifié pour la mise sur le marché ?",
    choices: [
      "Uniquement l'attestation CE de conformité",
      "Certificat ATEX (délivré par un organisme notifié), déclaration UE de conformité, notice d'instructions en français, et marquage Ex complet sur l'équipement",
      "Un rapport d'essai interne signé par le responsable qualité du fabricant",
      "L'approbation de l'inspection du travail et l'accord de l'INRS",
    ],
    answer: [1],
    chapterLabel: "Équipements Ex",
    explanation: "Pour un équipement Ex soumis à la directive 2014/34/UE (catégories 1 et 2, zone intérieure de catégorie 3) : le fabricant doit fournir un certificat ATEX délivré par un organisme notifié accrédité (par ex. INERIS, LNE, TÜV), une déclaration UE de conformité signée par le fabricant, une notice d'instructions complète en français (instructions de mise en service, maintenance, conditions d'utilisation sûre, informations sur les zones), et le marquage Ex complet apposé sur l'équipement.",
    timeLimit: 40,
  },
  {
    question: "Lors de la planification d'une intervention d'entreprise extérieure en zone ATEX, quels documents sont obligatoires selon les articles R.4512-6 et R.4515-8 du Code du travail ?",
    choices: [
      "Uniquement un bon de commande et un devis signé",
      "Un plan de prévention (R.4512-6) et une autorisation de travail / permis de feu si travaux à risques (R.4515-8) — avec inspection commune préalable obligatoire",
      "Une attestation d'assurance de l'entreprise extérieure et une copie des habilitations des salariés",
      "Un protocole de sécurité uniquement pour les opérations de chargement/déchargement",
    ],
    answer: [1],
    chapterLabel: "Gestion des interventions",
    explanation: "Pour toute entreprise extérieure intervenant en zone ATEX : (1) Plan de prévention (R.4512-6) — obligatoire dès lors que les travaux présentent des risques particuliers (dont ATEX), après inspection commune préalable des lieux ; il définit les risques liés à l'interférence des activités, les mesures de prévention et les responsabilités ; (2) Autorisation de travail (R.4515-8) — délivrée pour chaque opération spécifique, complétée par un permis de feu pour les travaux par points chauds. Ces deux documents sont distincts et complémentaires.",
    timeLimit: 45,
  },
  {
    question: "Qu'est-ce qu'un protocole de sécurité ATEX pour les opérations de transport et de manutention et dans quel cas est-il obligatoire ?",
    choices: [
      "Un document interne de l'entreprise extérieure — jamais obligatoire pour le donneur d'ordre",
      "Un document écrit établi entre le donneur d'ordre et l'entreprise de transport lors des opérations de chargement ou déchargement de produits inflammables en zone ATEX, obligatoire selon R.4515-4",
      "Un équivalent du plan de prévention, utilisé uniquement pour les TMD (transport de matières dangereuses)",
      "Un protocole volontaire proposé par les organismes de prévention — sans valeur réglementaire",
    ],
    answer: [1],
    chapterLabel: "Gestion des interventions",
    explanation: "L'article R.4515-4 du Code du travail rend obligatoire le protocole de sécurité pour toute opération de chargement ou de déchargement réalisée par une entreprise extérieure en zone ATEX. Ce document, établi entre le chef d'établissement et l'entreprise de transport, précise les consignes de sécurité, les zones interdites, les produits manipulés, les équipements requis et les procédures d'urgence. Il complète le plan de prévention.",
    timeLimit: 40,
  },
  {
    question: "Quelles sont les 3 principales technologies de détection fixe de gaz inflammables utilisées en zone ATEX et leurs limites respectives ?",
    choices: [
      "Ultrasonique, infrarouge, chimique — toutes équivalentes",
      "Catalytique (pellistor), infrarouge (IR), photoionisation (PID) — chacune avec des limites spécifiques d'application",
      "Électrochimique, pyroélectrique, acoustique — utilisées uniquement en atmosphères confinées",
      "Thermique, optique, magnétique — adaptées aux gaz lourds uniquement",
    ],
    answer: [1],
    chapterLabel: "Détection & surveillance",
    explanation: "Les 3 technologies principales : (1) Catalytique (pellistor) — mesure la chaleur de combustion du gaz, efficace pour la plupart des hydrocarbures mais peut être inhibée (poisonnée) par certains silicones, halogènes ou plomb ; (2) Infrarouge (IR) — basé sur l'absorption du rayonnement IR, résistant aux poisons mais inefficace pour H₂ et certains gaz sans liaison C-H ; (3) PID (Photoionisation) — très sensible aux traces de COV mais ne mesure pas les concentrations explosives (adapté à la détection de traces toxiques, pas aux niveaux LIE). Le choix dépend du gaz présent, des conditions d'environnement et du niveau de concentration à détecter.",
    timeLimit: 45,
  },
  {
    question: "Quels sont les 2 seuils d'alarme réglementaires typiques pour les détecteurs de gaz fixes en zone ATEX et leurs significations ?",
    choices: [
      "5 % LIE (pré-alarme) et 10 % LIE (alarme principale)",
      "10 % LIE (pré-alarme / alerte) et 25 à 50 % LIE (alarme principale déclenchant l'arrêt d'urgence)",
      "50 % LIE (pré-alarme) et 100 % LIE (alarme d'urgence)",
      "20 ppm (pré-alarme) et 100 ppm (alarme principale) — exprimés en parties par million",
    ],
    answer: [1],
    chapterLabel: "Détection & surveillance",
    explanation: "Les seuils usuels pour les systèmes de détection fixe : (1) 10 % LIE — pré-alarme (alerte), déclenchant une alarme sonore/visuelle et la mise en alerte du personnel ; (2) 25 à 50 % LIE — alarme principale déclenchant des actions automatiques : mise à l'arrêt des équipements de production, ventilation de secours, alarme générale. Ces seuils permettent une marge de sécurité significative avant d'atteindre le seuil explosive réel. Les valeurs exactes dépendent de l'analyse des risques et sont définies dans le DRPCE.",
    timeLimit: 40,
    contextLabel: "Guide INERIS Omega 36 — Systèmes de détection fixe",
  },
  {
    question: "Comment établissez-vous la cartographie des besoins en formation ATEX pour votre site selon les niveaux 0, 1 et 2 ?",
    choices: [
      "Tous les salariés présents sur le site reçoivent le même niveau de formation",
      "En analysant, pour chaque poste, la nature des activités en zone ATEX (circulation, intervention, encadrement) et en associant le niveau de formation correspondant à chaque profil",
      "En appliquant la formation N2 à tous les cadres et la N0 à tous les opérateurs",
      "En consultant uniquement les fiches de poste sans analyse des zones ATEX réelles",
    ],
    answer: [1],
    chapterLabel: "Formation & habilitation",
    explanation: "La cartographie des besoins en formation ATEX doit être basée sur l'analyse de chaque poste : (N0) personnel circulant en zone ATEX sans intervenir — sensibilisation aux risques et comportements ; (N1) intervenants réalisant des opérations de maintenance, nettoyage, contrôle en zone ATEX — formation complète à la prévention du risque explosion, aux EPI, aux AT/permis de feu ; (N2) encadrants, chefs d'équipe, référents ATEX, concepteurs d'installations — maîtrise complète du zonage, du DRPCE, de la sélection des équipements et de la gestion des entreprises extérieures.",
    timeLimit: 40,
  },
  {
    question: "Selon les statistiques INRS sur les accidents ATEX, quelle est la principale cause déclenchante des accidents d'explosion en milieu industriel ?",
    choices: [
      "Les défaillances techniques des équipements certifiés Ex",
      "Les travaux par points chauds (soudure, meulage, découpe) réalisés sans permis de feu ou avec une évaluation insuffisante de l'atmosphère",
      "Les orages et la foudre",
      "La contamination des produits chimiques par des impuretés",
    ],
    answer: [1],
    chapterLabel: "Retour d'expérience",
    explanation: "Selon les données INRS et la base ARIA (BARPI), les travaux par points chauds sont la première cause d'accidents d'explosion en zone ATEX en France — représentant environ 30 à 40 % des accidents. La cause principale est l'absence ou le non-respect du permis de feu, associée à une vérification atmosphérique insuffisante ou réalisée trop tôt avant les travaux. Les autres causes fréquentes : étincelles mécaniques, électricité statique lors d'opérations de vidange ou remplissage, et défaillances de matériels non certifiés Ex.",
    timeLimit: 40,
    contextLabel: "REX INRS — Statistiques accidents ATEX",
  },
  {
    question: "Qu'est-ce que la base ARIA du BARPI et quelle est son utilité pour le référent ATEX ?",
    choices: [
      "Une base de données des équipements Ex certifiés — utile pour sélectionner le matériel",
      "L'Analyse, Recherche et Information sur les Accidents — base de données française des accidents technologiques, permet d'identifier les causes récurrentes d'accidents ATEX par secteur et d'alimenter les REX internes",
      "Un référentiel de formation accrédité par le ministère du Travail",
      "Un système de surveillance en temps réel des zones ATEX à distance",
    ],
    answer: [1],
    chapterLabel: "Retour d'expérience",
    explanation: "La base ARIA (Analyse, Recherche et Information sur les Accidents) est gérée par le BARPI (Bureau d'Analyse des Risques et Pollutions Industriels — DGPR/Ministère de l'Écologie). Elle recense les accidents technologiques survenus en France et dans le monde. Pour le référent ATEX, elle est précieuse pour : identifier les causes et scénarios d'accidents types dans son secteur d'activité, alimenter les analyses de risques et les REX internes, et justifier des mesures de prévention lors de l'élaboration ou de la révision du DRPCE.",
    timeLimit: 35,
  },
  {
    question: "Lors d'une révision du DRPCE rendue nécessaire par une modification d'installation, quels éléments doivent systématiquement être réexaminés ?",
    choices: [
      "Uniquement la liste des équipements Ex — le zonage reste valable indéfiniment",
      "Les sources de dégagement affectées par la modification, les zones ATEX impactées, les équipements Ex à remplacer ou recertifier, les procédures d'intervention et les besoins de formation",
      "Uniquement les permis de travail en cours au moment de la modification",
      "Le DRPCE est validé une fois pour toutes à la mise en service — seul un accident oblige à le réviser",
    ],
    answer: [1],
    chapterLabel: "DRPCE",
    explanation: "Toute modification significative d'une installation en zone ATEX (nouveau produit, changement de process, nouvelle source de dégagement, modification des équipements) impose une révision du DRPCE. Les éléments à réexaminer : (1) les sources de dégagement et leurs paramètres après modification ; (2) les zones ATEX : leur étendue peut changer ; (3) la liste des équipements Ex : un équipement adapté à l'ancienne zone peut être insuffisant pour la nouvelle ; (4) les procédures d'intervention (AT/permis de feu) ; (5) les besoins en formation si de nouvelles zones ou de nouveaux risques apparaissent.",
    timeLimit: 40,
  },
  {
    question: "Comment le référent ATEX organise-t-il le suivi des recyclages (renouvellement des avis d'habilitation ATEX à 3 ans) pour l'ensemble du personnel ?",
    choices: [
      "Il attend que les salariés signalent eux-mêmes l'échéance de leur habilitation",
      "En tenant un tableau de bord des dates de formation et d'échéance pour chaque salarié, avec des alertes anticipées (6 mois avant) pour planifier les recyclages",
      "En organisant une formation générale annuelle pour tous — sans distinction de niveau ou d'échéance",
      "En confiant ce suivi exclusivement au service RH sans validation technique",
    ],
    answer: [1],
    chapterLabel: "Formation & habilitation",
    explanation: "Le référent ATEX est responsable du maintien des compétences. Il doit tenir un registre des formations ATEX par salarié (nom, niveau, date de formation, date d'échéance à 3 ans), paramétrer des alertes anticipées (généralement 6 mois avant l'échéance) pour planifier les recyclages sans rupture de couverture, valider les contenus de recyclage en tenant compte des évolutions réglementaires et des REX internes, et conserver les attestations de formation accessibles lors des inspections.",
    timeLimit: 35,
  },
  {
    question: "Un sous-traitant doit intervenir en Zone 1 pour une opération de maintenance sur une pompe. Son chef d'équipe présente une attestation de formation ATEX N1 datée de 4 ans. Quelle action le référent ATEX doit-il prendre ?",
    choices: [
      "Accepter l'intervention — l'attestation est valable car il n'y a pas de date limite précisée dans la loi",
      "Refuser l'accès à la Zone 1 et exiger une preuve de recyclage récent (< 3 ans) avant toute autorisation de travail",
      "Autoriser l'intervention mais doubler la surveillance",
      "Contacter le formateur initial pour vérifier si la personne est encore compétente",
    ],
    answer: [1],
    chapterLabel: "Formation & habilitation",
    explanation: "L'avis d'habilitation ATEX est valable 3 ans. Une attestation datée de 4 ans est expirée. Le référent ATEX doit refuser l'accès à la Zone 1 et exiger un justificatif de recyclage récent (< 3 ans). Cette obligation s'applique également aux entreprises extérieures. Le plan de prévention et l'autorisation de travail doivent systématiquement vérifier la validité des habilitations ATEX du personnel intervenant. Autoriser une personne sans habilitation valide engage la responsabilité du référent ATEX et du chef d'établissement.",
    timeLimit: 35,
  },
  {
    question: "Quelle est la différence entre la directive 99/92/CE et la directive 2014/34/UE en matière ATEX ?",
    choices: [
      "Ce sont deux versions successives du même texte — la 2014/34/UE remplace intégralement la 99/92/CE",
      "La 99/92/CE concerne les obligations de l'employeur pour la protection des travailleurs en zone ATEX ; la 2014/34/UE concerne les exigences pour les équipements et systèmes de protection utilisés en zone ATEX",
      "La 99/92/CE s'applique aux gaz et la 2014/34/UE aux poussières",
      "La 99/92/CE est une directive française — la 2014/34/UE est la version européenne harmonisée",
    ],
    answer: [1],
    chapterLabel: "Réglementation ATEX",
    explanation: "Deux directives ATEX complémentaires : (1) Directive 99/92/CE ('ATEX lieux de travail' ou 'ATEX sociale') — impose des obligations à l'EMPLOYEUR : évaluation des risques, DRPCE, zonage, formation des travailleurs, procédures d'autorisation de travail. Transposée en France dans le Code du travail (R.4227-42 à R.4227-54) ; (2) Directive 2014/34/UE ('ATEX équipements', anciennement 94/9/CE) — impose des exigences aux FABRICANTS d'équipements et systèmes de protection destinés à être utilisés en zone ATEX. Ces deux textes sont complémentaires et simultanément applicables.",
    timeLimit: 40,
  },
  {
    question: "Comment la ventilation d'un local influence-t-elle la classification ATEX selon EN 60079-10-1 ?",
    choices: [
      "La ventilation n'a aucun impact sur le zonage — seule la nature du produit compte",
      "Une ventilation efficace peut réduire l'étendue des zones (ex. Zone 1 réduite à Zone 2) ou même supprimer une zone si elle assure une dilution suffisante pour que la concentration reste toujours sous la LIE",
      "La ventilation transforme automatiquement toute Zone 0 en Zone 1",
      "La ventilation est uniquement prise en compte pour les zones poussières (20/21/22) — pas pour les gaz",
    ],
    answer: [1],
    chapterLabel: "Zonage & évaluation",
    explanation: "EN 60079-10-1 intègre la ventilation comme facteur clé dans la classification des zones : une ventilation naturelle ou mécanique de niveau 'élevé' (high) peut réduire l'étendue d'une zone (Zone 1 → Zone 2) ou même supprimer une zone si elle garantit une dilution permanente maintenant la concentration sous la LIE. À l'inverse, une ventilation faible ou nulle augmente l'étendue des zones. Le niveau de ventilation (élevé, moyen, faible) est évalué selon le débit d'air disponible par rapport au débit de fuite théorique et la disponibilité de la ventilation.",
    timeLimit: 45,
  },
  {
    question: "Vous êtes référent ATEX et vous découvrez qu'un équipement certifié Ex II 2G T4 est installé dans une zone identifiée Zone 1 contenant du propane (TAI = 470 °C, groupe IIA). Cet équipement est-il correct ? Justifiez.",
    choices: [
      "Non — la classe T4 (température surface max. 135 °C) est insuffisante pour le propane dont la TAI est 470 °C",
      "Oui — la classe T4 (135 °C max) est très inférieure à la TAI du propane (470 °C), la catégorie 2G est adaptée à la Zone 1, et le groupe IIA est approprié pour le propane (groupe IIA). L'équipement est correctement sélectionné.",
      "Non — le groupe IIA est insuffisant pour le propane qui appartient au groupe IIB",
      "Non — en Zone 1 avec du propane, seul un équipement de catégorie 1G est autorisé",
    ],
    answer: [1],
    chapterLabel: "Équipements Ex",
    explanation: "Analyse complète : (1) Catégorie 2G → adaptée à la Zone 1 ✓ ; (2) Groupe IIA → propane est groupe IIA ✓ (IIA correspond aux hydrocarbures aliphatiques comme propane, butane, éthane) ; (3) Classe T4 → température de surface max. 135 °C, très inférieure à la TAI du propane (470 °C) → large marge de sécurité ✓. L'équipement est correctement sélectionné. Note : un T5 (100 °C max) ou T6 (85 °C max) serait surdimensionné mais aussi acceptable. Un T1 (450 °C max) serait à la limite et risqué pour le propane.",
    timeLimit: 50,
    contextLabel: "Cas pratique — Vérification d'adéquation équipement/zone",
  },
];

// ── SST — Sauveteur Secouriste du Travail ────────────────────────────────────
quizContent["sst"] = [
  {
    question: "Quelle est la démarche structurée du Sauveteur Secouriste du Travail (SST) face à un accident ?",
    choices: [
      "Secourir → Alerter → Protéger → Examiner",
      "Protéger → Examiner → Alerter → Secourir",
      "Alerter → Protéger → Examiner → Secourir",
      "Examiner → Alerter → Secourir → Protéger",
    ],
    answer: [1],
    chapterLabel: "Démarche PEAS",
    explanation: "La démarche SST suit impérativement l'ordre PEAS : Protéger (sécuriser la scène pour éviter le sur-accident), Examiner (identifier l'urgence vitale), Alerter ou faire alerter (déclencher la chaîne de secours), Secourir (appliquer les gestes appris). Chaque étape conditionne la suivante — inverser l'ordre expose le secouriste ou la victime à un risque supplémentaire.",
    timeLimit: 35,
  },
  {
    question: "Quelle est la première priorité d'un SST arrivant sur les lieux d'un accident ?",
    choices: [
      "Examiner l'état de la victime pour évaluer sa gravité",
      "Appeler immédiatement le 15",
      "Sécuriser la scène pour éviter tout sur-accident",
      "Pratiquer les gestes de secours sans délai",
    ],
    answer: [2],
    chapterLabel: "Démarche PEAS",
    explanation: "La protection est toujours la première étape. Un secouriste blessé devient une deuxième victime et aggrave la situation. La scène doit être sécurisée — dangers identifiés, supprimés ou isolés — avant tout geste sur la victime. Seul un danger immédiat et mortel justifie le dégagement d'urgence de la victime (déplacement en axe tête-pieds).",
    timeLimit: 35,
  },
  {
    question: "Face à une victime électrisée encore en contact avec la source, que doit faire le SST en priorité ?",
    choices: [
      "La tirer par les vêtements pour l'éloigner rapidement",
      "La toucher avec les mains protégées par des gants isolants",
      "Couper l'alimentation électrique avant tout contact avec la victime",
      "Commencer immédiatement la RCP",
    ],
    answer: [2],
    chapterLabel: "Protection & sécurisation",
    explanation: "Ne JAMAIS toucher une victime encore en contact avec une source électrique — la tétanisation peut maintenir la victime sous tension et le secouriste deviendrait lui-même victime. La priorité absolue est de couper l'alimentation (disjoncteur, interrupteur). En haute tension, le danger persiste à distance par l'arc électrique : ne pas approcher, alerter ENEDIS/RTE et attendre la mise hors tension confirmée.",
    timeLimit: 40,
  },
  {
    question: "Quelle est la séquence correcte de l'examen de la victime selon la méthode SST ?",
    choices: [
      "Répond-elle ? → Respire-t-elle ? → Saigne-t-elle ? → S'étouffe-t-elle ?",
      "Saigne-t-elle ? → S'étouffe-t-elle ? → Répond-elle ? → Respire-t-elle ?",
      "Respire-t-elle ? → Répond-elle ? → Saigne-t-elle ? → S'étouffe-t-elle ?",
      "S'étouffe-t-elle ? → Saigne-t-elle ? → Respire-t-elle ? → Répond-elle ?",
    ],
    answer: [1],
    chapterLabel: "Bilan & examen",
    explanation: "La séquence d'examen SST est : (1) Saigne-t-elle abondamment ? (hémorragie incontrôlée = menace vitale en quelques minutes), (2) S'étouffe-t-elle ? (obstruction = urgence vitale immédiate), (3) Répond-elle quand on lui parle ou stimule ? (niveau de conscience), (4) Respire-t-elle normalement ? (détection arrêt cardiaque). Cet ordre permet d'identifier la menace vitale dominante et d'orienter immédiatement le geste approprié.",
    timeLimit: 45,
  },
  {
    question: "Quel est le geste prioritaire face à un saignement abondant ?",
    choices: [
      "Poser un garrot dès que possible",
      "Appliquer une compression directe ferme et continue sur la plaie",
      "Relever la plaie au-dessus du niveau du cœur sans compression",
      "Retirer les vêtements et appliquer un antiseptique",
    ],
    answer: [1],
    chapterLabel: "Gestes de secours",
    explanation: "Face à un saignement abondant, le premier geste est la compression directe, ferme et continue sur la plaie avec un tissu propre ou un pansement. Ne jamais relâcher la compression même si le pansement se sature — en ajouter un par-dessus. Le garrot n'est utilisé qu'en dernier recours (plaie au cou ou à l'aine, membre arraché, compression impossible). La victime doit être allongée pour limiter les effets de l'hypovolémie.",
    timeLimit: 40,
  },
  {
    question: "Face à une victime consciente qui s'étouffe totalement (ne peut ni parler, ni crier, ni tousser efficacement), quelle est la séquence correcte ?",
    choices: [
      "5 compressions abdominales (Heimlich) directement, sans claques dorsales",
      "Tenter de retirer le corps étranger avec les doigts d'abord",
      "5 claques vigoureuses dans le dos → si insuffisant, 5 compressions abdominales (Heimlich) → alterner",
      "Allonger la victime et attendre les secours",
    ],
    answer: [2],
    chapterLabel: "Gestes de secours",
    explanation: "La séquence est : 5 claques dorsales vigoureuses (paume ouverte entre les omoplates, victime penchée en avant), puis si insuffisant, 5 compressions abdominales (manœuvre de Heimlich : poing entre nombril et sternum, traction vers l'intérieur et le haut), puis alterner. Si la victime perd conscience : l'allonger et démarrer la RCP (les compressions thoraciques peuvent expulser le corps étranger). Chez le nourrisson (< 1 an) : jamais de Heimlich — 5 claques dorsales + 5 compressions thoraciques.",
    timeLimit: 50,
  },
  {
    question: "Une victime inconsciente respire normalement. Quelle position lui donner ?",
    choices: [
      "Sur le dos, bras le long du corps, pour faciliter la surveillance respiratoire",
      "En position assise dos au mur pour éviter l'encombrement des voies aériennes",
      "En Position Latérale de Sécurité (PLS), bouche orientée vers le bas",
      "À plat ventre, tête tournée sur le côté",
    ],
    answer: [2],
    chapterLabel: "Gestes de secours",
    explanation: "Une victime inconsciente sur le dos peut mourir d'une inhalation de vomissements ou d'une obstruction des voies aériennes par la langue. La PLS (Position Latérale de Sécurité) la met sur le côté, bouche orientée vers le bas pour permettre l'écoulement des sécrétions, tête en légère extension pour maintenir les voies aériennes ouvertes. La surveillance de la respiration doit être continue : si elle s'arrête → retourner immédiatement sur le dos et démarrer la RCP.",
    timeLimit: 40,
  },
  {
    question: "Une victime est inconsciente et ne respire pas normalement. Que fait le SST en priorité ?",
    choices: [
      "Attendre les secours sans agir pour ne pas aggraver l'état",
      "Débuter immédiatement la RCP (compressions thoraciques) et faire alerter les secours",
      "Mettre la victime en PLS puis appeler le 15",
      "Vérifier les signes vitaux pendant 1 minute avant d'agir",
    ],
    answer: [1],
    chapterLabel: "Gestes de secours",
    explanation: "Inconsciente + ne respire pas normalement = arrêt cardiaque présumé → RCP immédiate. Chaque minute sans compressions réduit les chances de survie de 10 %. Les compressions thoraciques doivent commencer sans délai (30 compressions au centre du thorax, profondeur 5-6 cm, rythme 100-120/min). L'alerte est déléguée à un témoin ou réalisée après 5 premiers cycles si le SST est seul. Le DAE doit être mis en œuvre dès qu'il est disponible.",
    timeLimit: 40,
  },
  {
    question: "Quelles sont les caractéristiques correctes de la RCP adulte selon les recommandations ERC 2021 ?",
    choices: [
      "15 compressions + 1 insufflation, rythme 80/min, profondeur 3 cm",
      "30 compressions + 2 insufflations (si formé), rythme 100-120/min, profondeur 5-6 cm",
      "20 compressions + 2 insufflations, rythme 60/min, profondeur 8 cm",
      "30 compressions uniquement (sans insufflations), rythme 60-80/min, profondeur 4 cm",
    ],
    answer: [1],
    chapterLabel: "Gestes de secours",
    explanation: "RCP adulte ERC 2021 : 30 compressions thoraciques (talons des mains au centre du thorax, bras tendus) + 2 insufflations si formé — ou compressions seules si les insufflations sont impossibles. Rythme : 100 à 120 compressions/minute. Profondeur : 5 à 6 cm avec décompression complète entre chaque compression. Rapport 30:2 maintenu jusqu'à l'arrivée des secours, au DAE ou à l'épuisement. Alterner les intervenants toutes les 2 minutes si possible.",
    timeLimit: 50,
    multiple: false,
  },
  {
    question: "Concernant le Défibrillateur Automatisé Externe (DAE), quelles affirmations sont correctes ?",
    choices: [
      "Il guide vocalement l'utilisateur — pas besoin de formation spécifique pour l'utiliser",
      "Il faut retirer les électrodes après le choc pour continuer la RCP",
      "Il doit être récupéré et mis en marche dès que possible en parallèle de la RCP",
      "La RCP s'arrête pendant toute l'analyse du rythme et la délivrance du choc",
    ],
    answer: [0, 2, 3],
    multiple: true,
    chapterLabel: "Alerte & secours",
    explanation: "Le DAE guide vocalement — toute personne peut l'utiliser (décret 2018-1186) ✓. Il faut récupérer le DAE le plus tôt possible en parallèle de la RCP ✓. La RCP s'arrête le temps de l'analyse (le DAE le demande) et du choc, puis reprend immédiatement après ✓. Les électrodes restent en place tout au long de la réanimation — ne jamais les retirer ✗ (réponse B incorrecte).",
    timeLimit: 60,
  },
  {
    question: "Une victime consciente présente une douleur thoracique irradiant dans le bras gauche et la mâchoire. Que suspecte le SST et quelle est la conduite à tenir ?",
    choices: [
      "Crise d'angoisse — installer confortablement et observer sans alerter",
      "Infarctus du myocarde suspecté — alerter immédiatement le 15, ne pas laisser marcher seul",
      "Douleur musculaire — appliquer un antalgique local et surveiller",
      "Problème digestif — conseiller un antiacide et attendre",
    ],
    answer: [1],
    chapterLabel: "Malaises & urgences médicales",
    explanation: "Douleur thoracique irradiant dans le bras gauche ou la mâchoire = signe d'infarctus du myocarde jusqu'à preuve du contraire. Alerter immédiatement le 15 (SAMU). Ne jamais laisser la victime marcher seule (effort physique aggrave l'ischémie). L'installer confortablement (demi-assise si essoufflement), la surveiller en permanence. Si elle perd conscience et cesse de respirer : RCP immédiate.",
    timeLimit: 40,
  },
  {
    question: "Vous suspectez un AVC chez un collègue. Quels signes orientent vers ce diagnostic et quelle est la conduite à tenir ?",
    choices: [
      "Pâleur et sueurs froides → donner du sucre et attendre",
      "Chute, fracture suspecte → immobiliser et appeler le 18",
      "Asymétrie du visage, bras qui chute, difficultés à parler → appeler le 15 immédiatement",
      "Vertiges et nausées → mettre en PLS et observer",
    ],
    answer: [2],
    chapterLabel: "Malaises & urgences médicales",
    explanation: "L'acronyme FAST aide à reconnaître l'AVC : Face (visage asymétrique), Arm (un bras qui chute quand les deux sont levés), Speech (difficultés à parler, mots incompréhensibles), Time (appeler le 15 immédiatement). L'AVC est une urgence absolue : chaque minute de retard détruit des neurones. Ne pas donner à manger ou à boire. Ne pas laisser marcher seul. Surveiller et être prêt à passer en PLS ou RCP si l'état évolue.",
    timeLimit: 45,
  },
  {
    question: "Que faire en cas de brûlure thermique ?",
    choices: [
      "Appliquer de la glace pour refroidir rapidement et soulager la douleur",
      "Appliquer du beurre ou de la crème pour protéger la peau",
      "Faire couler de l'eau fraîche (15-25 °C) pendant 5 à 10 minutes minimum",
      "Percer les cloques pour éviter l'infection",
    ],
    answer: [2],
    chapterLabel: "Gestes de secours",
    explanation: "Le refroidissement à l'eau fraîche (15-25 °C) pendant au minimum 5 à 10 minutes ralentit la progression de la chaleur dans les couches profondes et limite l'étendue des lésions. Son efficacité est maximale dans les premières minutes. Jamais de glace (vasoconstriction aggravante), ni de corps gras (favorise l'infection), ni de pansement adhésif direct, ni de perçage des cloques. Alerter les secours si la brûlure est étendue (> 10 %), profonde, ou concerne le visage, les mains ou les articulations.",
    timeLimit: 40,
  },
  {
    question: "Face à une plaie avec un corps étranger visible planté dans la chair, quelle est la conduite correcte ?",
    choices: [
      "Retirer le corps étranger délicatement pour nettoyer la plaie",
      "Exercer une compression directe sur le corps étranger pour limiter le saignement",
      "Ne jamais retirer le corps étranger — protéger autour sans pression directe et alerter",
      "Appliquer un garrot au-dessus de la plaie immédiatement",
    ],
    answer: [2],
    chapterLabel: "Gestes de secours",
    explanation: "Ne JAMAIS retirer un corps étranger planté : il peut obstruer un vaisseau sanguin et son retrait provoquerait une hémorragie incontrôlable. Protéger la plaie autour du corps étranger (pansement circulaire) sans exercer de pression directe dessus. Alerter immédiatement le 15 ou 18. Surveiller la victime (risque de choc hémorragique) jusqu'à l'arrivée des secours.",
    timeLimit: 40,
  },
  {
    question: "Face à une victime suspecte de traumatisme rachidien (chute, accident violent), quelle est la règle fondamentale ?",
    choices: [
      "La déplacer rapidement vers un endroit confortable et stable",
      "L'asseoir pour évaluer sa mobilité",
      "La maintenir dans la position où on la trouve, sans déplacement, sauf danger immédiat",
      "Lui demander de bouger doucement les membres pour évaluer les lésions",
    ],
    answer: [2],
    chapterLabel: "Protection & sécurisation",
    explanation: "Tout traumatisme violent (chute de hauteur, choc à grande vitesse, plongeon) doit faire suspecter une lésion rachidienne. La règle absolue : ne pas déplacer la victime, ne pas mobiliser la tête ou les membres, ne pas lui demander de se mouvoir. Maintenir dans la position de découverte. Appeler immédiatement les secours. Un mauvais déplacement peut transformer une lésion partielle en paralysie définitive.",
    timeLimit: 40,
  },
  {
    question: "Quelle information doit contenir une alerte structurée aux secours selon le programme SST ?",
    choices: [
      "Uniquement le numéro de téléphone du médecin du travail",
      "Lieu précis, nature de l'événement, nombre et état des victimes, gestes déjà engagés",
      "Le nom et prénom de la victime uniquement",
      "Le code postal et le nom de la rue sans autre information",
    ],
    answer: [1],
    chapterLabel: "Alerte & secours",
    explanation: "Une alerte efficace comporte : le lieu exact de l'accident (bâtiment, niveau, repère précis), la nature de l'événement (chute, malaise, électrisation…), le nombre de victimes et leur état apparent, les dangers persistants éventuels, et les gestes déjà engagés (RCP en cours, compression…). Ne jamais raccrocher avant que le régulateur ne l'autorise — le SAMU peut guider le SST sur les gestes à réaliser en attendant les secours.",
    timeLimit: 40,
  },
  {
    question: "À quelle fréquence le SST certifié doit-il renouveler ses compétences par le MAC (Maintien et Actualisation des Compétences) ?",
    choices: [
      "Tous les ans",
      "Tous les 3 ans",
      "Tous les 2 ans",
      "Uniquement en cas de changement de poste",
    ],
    answer: [2],
    chapterLabel: "Rôle & missions SST",
    explanation: "Le MAC SST (Maintien et Actualisation des Compétences) est obligatoire tous les 24 mois (2 ans) pour conserver la certification SST. Sans MAC à l'échéance, le salarié perd le statut de SST certifié. L'employeur a l'obligation légale de présence d'un SST dans certains établissements (Art. R.4224-15 du Code du travail). Le MAC permet aussi d'intégrer les évolutions des recommandations (ERC, INRS).",
    timeLimit: 35,
  },
  {
    question: "Quel est le rôle du SST au quotidien, au-delà de l'intervention en urgence ?",
    choices: [
      "Assurer la gestion administrative des accidents du travail",
      "Remplacer le médecin du travail lors des visites médicales",
      "Contribuer à la prévention des risques en repérant et en signalant les situations dangereuses",
      "Vérifier les équipements de protection individuelle une fois par an",
    ],
    answer: [2],
    chapterLabel: "Rôle & missions SST",
    explanation: "Le SST a deux missions indissociables : intervenir en urgence ET contribuer à la prévention au quotidien. Il repère les situations dangereuses (sols glissants, équipements défectueux, postures inadaptées), les remonte à l'encadrement ou au service prévention, et peut participer aux instances de prévention (CSSCT). Cette vigilance quotidienne partagée évite les accidents avant qu'ils ne surviennent.",
    timeLimit: 40,
  },
  {
    question: "Dans quelle situation le dégagement d'urgence est-il justifié ?",
    choices: [
      "Dès qu'une victime est inconsciente",
      "Lorsque la victime est exposée à un danger immédiat et persistant qui ne peut pas être supprimé",
      "Systématiquement avant toute prise en charge",
      "Lorsque les secours tardent à arriver",
    ],
    answer: [1],
    chapterLabel: "Dégagement d'urgence",
    explanation: "Le dégagement d'urgence est un geste exceptionnel réservé aux situations où la victime est soumise à un danger vital immédiat et non supprimable (incendie, effondrement, gaz). Il ne se fait qu'en dernier recours car il peut aggraver des lésions, notamment vertébrales.",
    timeLimit: 40,
  },
  {
    question: "Un collègue a reçu une décharge électrique et affirme se sentir bien. Quelle est la conduite à tenir du SST ?",
    choices: [
      "Le laisser reprendre le travail s'il se sent bien",
      "Appeler le 15 uniquement s'il perd connaissance",
      "Déclencher les secours et surveiller car un arrêt cardiaque différé est possible",
      "Lui donner de l'eau et lui conseiller de se reposer",
    ],
    answer: [2],
    eliminatory: true,
    chapterLabel: "Électrisation / Électrocution",
    explanation: "L'électrisation peut provoquer un arrêt cardiaque différé (fibrillation ventriculaire) plusieurs minutes ou heures après le choc, même si la victime semble indemne. Le SST doit toujours alerter les secours et surveiller la victime jusqu'à leur arrivée. C'est une règle absolue.",
    timeLimit: 40,
  },
  {
    question: "Le garrot est un geste de secourisme qui doit être utilisé :",
    choices: [
      "Sur toute plaie hémorragique des membres",
      "En premier recours avant la compression directe",
      "En dernier recours, uniquement si la compression directe est impossible ou inefficace",
      "Seulement par les professionnels de santé",
    ],
    answer: [2],
    chapterLabel: "Hémorragies",
    explanation: "Le garrot ne s'utilise qu'en dernier recours (compression directe impossible : amputation traumatique, corps étranger, hémorragie massive incontrôlable). Il est posé le plus haut possible sur le membre, serré jusqu'à arrêt du saignement, l'heure de pose notée. Un garrot posé ne doit jamais être desserré sur les lieux.",
    timeLimit: 40,
  },
  {
    question: "Un nourrisson de 8 mois s'étouffe avec un jouet. Quelle technique appliquer en priorité ?",
    choices: [
      "La manœuvre de Heimlich comme pour un adulte",
      "5 tapes dans le dos puis 5 compressions thoraciques, en alternance",
      "Mettre les doigts dans la bouche pour retirer l'objet",
      "Retourner l'enfant la tête en bas et secouer",
    ],
    answer: [1],
    eliminatory: true,
    chapterLabel: "Obstruction des voies aériennes",
    explanation: "Chez le nourrisson (< 1 an), la manœuvre de Heimlich est contre-indiquée car les organes abdominaux sont fragiles. La technique validée est : 5 tapes dans le dos (tête vers le bas), puis 5 compressions thoraciques (2 doigts sur le sternum). Alternance jusqu'à désobstruction ou perte de conscience.",
    timeLimit: 40,
  },
  {
    question: "Face à une fracture d'un membre en position vicieuse (membre tordu), le SST doit :",
    choices: [
      "Redresser le membre avant d'immobiliser",
      "Immobiliser le membre dans la position où il se trouve, sans chercher à le redresser",
      "Laisser la victime bouger librement jusqu'à l'arrivée des secours",
      "Appliquer de la glace directement sur la fracture",
    ],
    answer: [1],
    chapterLabel: "Traumatismes osseux",
    explanation: "En cas de fracture en position vicieuse, on immobilise dans la position trouvée. Toute tentative de repositionnement risque d'aggraver la lésion vasculaire ou nerveuse. L'immobilisation dans la position trouvée est la règle du secourisme.",
    timeLimit: 40,
  },
  {
    question: "Un collègue diabétique présente des sueurs, tremblements et confusion. Il est conscient. Le SST doit :",
    choices: [
      "Ne rien lui donner à manger ou boire en attendant les secours",
      "Lui administrer une injection d'insuline",
      "Lui donner du sucre rapide (boisson sucrée, bonbons) et surveiller",
      "L'allonger en position latérale de sécurité",
    ],
    answer: [2],
    chapterLabel: "Malaises / Hypoglycémie",
    explanation: "L'hypoglycémie se traite par un apport de sucre rapide (soda, jus de fruit, sucre) si la victime est consciente et peut avaler. Le SST surveille l'amélioration des symptômes. Si la personne perd conscience, ne rien donner par voie orale et appeler le 15.",
    timeLimit: 40,
  },
  {
    question: "En période d'épidémie, face à un arrêt cardiaque, le SST doit :",
    choices: [
      "Ne pas faire de gestes de secours pour se protéger",
      "Effectuer uniquement les compressions thoraciques avec un masque, sans bouche-à-bouche",
      "Attendre les secours sans intervenir",
      "Reprendre tous les gestes habituels sans adaptation",
    ],
    answer: [1],
    chapterLabel: "RCP / Arrêt cardiaque",
    explanation: "En situation d'épidémie, les recommandations maintiennent les compressions thoraciques (suffisantes pour relancer la circulation) tout en supprimant le bouche-à-bouche. Le secouriste se protège avec un masque. Ne pas agir condamne la victime : le risque de décès par ACR est supérieur au risque infectieux.",
    timeLimit: 40,
  },
  {
    question: "En cas d'attaque terroriste ou de fusillade sur le lieu de travail, le réflexe prioritaire est :",
    choices: [
      "Secourir immédiatement les blessés",
      "Appeler le 15 pour signaler les victimes",
      "Fuir si possible, se cacher et alerter les secours (protocole FUIR-SE CACHER-ALERTER)",
      "Rassembler les collègues et évacuer collectivement",
    ],
    answer: [2],
    eliminatory: true,
    chapterLabel: "Risques exceptionnels (attentat)",
    explanation: "Face à une menace terroriste, le protocole officiel est : 1. FUIR — quitter les lieux rapidement ; 2. SE CACHER — se barricader, rester silencieux, éteindre son téléphone ; 3. ALERTER — appeler le 17 (police) ou le 15 (SAMU) avec un message clair. Les secours aux victimes n'interviennent qu'une fois la zone sécurisée par les forces de l'ordre.",
    timeLimit: 40,
  },
  {
    question: "Quelle est la position recommandée pour une victime consciente souffrant d'une douleur thoracique (suspicion infarctus) ?",
    choices: [
      "Allongée à plat sur le sol",
      "En position latérale de sécurité",
      "En position demi-assise, au repos strict",
      "Debout pour faciliter la respiration",
    ],
    answer: [2],
    chapterLabel: "Malaises / Douleur thoracique",
    explanation: "En cas de douleur thoracique suspecte d'infarctus, la victime consciente est installée en position demi-assise (dos soutenu, jambes légèrement surélevées si possible). Cette position réduit la charge cardiaque. Le SST appelle le 15, desserre les vêtements serrés et surveille en permanence jusqu'à l'arrivée des secours.",
    timeLimit: 40,
  },
  {
    question: "Un collègue a reçu un produit chimique dans les yeux. Que faire en priorité ?",
    choices: [
      "Appliquer un pansement stérile sur l'œil et appeler le 15",
      "Rincer immédiatement et abondamment à l'eau pendant 10 à 15 minutes",
      "Laisser l'œil fermé pour éviter toute irritation supplémentaire",
      "Donner un collyre antiseptique disponible en pharmacie",
    ],
    answer: [1],
    eliminatory: true,
    chapterLabel: "Brûlures chimiques",
    explanation: "En cas de projection chimique oculaire, le rinçage immédiat et prolongé (10 à 15 minutes minimum) à grande eau est le geste prioritaire. Chaque seconde compte : les dommages progressent avec le contact. Le SST maintient l'œil ouvert, oriente le rinçage de l'angle interne vers externe, et demande un avis médical même si la douleur diminue.",
    timeLimit: 40,
  },
  {
    question: "Face à un coup de chaleur (fièvre élevée, peau sèche et chaude, désorientation), le SST doit :",
    choices: [
      "Faire boire de l'eau froide en grande quantité",
      "Mettre la victime en PLS et attendre les secours",
      "Refroidir rapidement le corps (linge humide, ventilation) ET appeler le 15",
      "Donner un antidouleur et surveiller",
    ],
    answer: [2],
    chapterLabel: "Malaises / Hyperthermie",
    explanation: "Le coup de chaleur est une urgence vitale. La peau sèche et chaude indique que la thermorégulation est dépassée. Le SST doit refroidir immédiatement (vêtements mouillés, ventilateur, lieu frais) ET appeler le 15 simultanément. Sans refroidissement rapide, le pronostic vital est en jeu.",
    timeLimit: 40,
  },
];

