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
    {
      question: "À partir de quelle intensité le courant alternatif devient-il dangereux pour le corps humain ?",
      choices: ["1 mA", "10 mA", "50 mA", "100 mA"],
      answer: [1],
      explanation:
        "Le courant électrique est dangereux à partir de 10 mA en courant alternatif. En courant continu, le seuil est de 40 mA.",
      timeLimit: 40,
    },
    {
      question: "Quelle est la tension de contact dangereuse en milieu sec, en courant alternatif ?",
      choices: ["12 V", "25 V", "50 V", "120 V"],
      answer: [2],
      explanation:
        "En milieu sec (résistance du corps : 5 000 Ω), la tension dangereuse est U = R × I = 5 000 × 0,01 = 50 V en courant alternatif.",
      timeLimit: 40,
    },
    {
      question: "En milieu humide, quelle est la tension de contact dangereuse en courant alternatif ?",
      choices: ["12 V", "25 V", "50 V", "120 V"],
      answer: [1],
      explanation:
        "En milieu humide (résistance réduite à 2 500 Ω), la tension dangereuse descend à 25 V en courant alternatif.",
      timeLimit: 40,
    },
    {
      question: "Quelle est la résistance conventionnelle du corps humain en milieu sec ?",
      choices: ["500 Ω", "1 000 Ω", "2 500 Ω", "5 000 Ω"],
      answer: [3],
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
      explanation:
        "L'habilitation BS est limitée à 400 V et aux circuits terminaux. Elle ne permet pas de remplacer un disjoncteur dans une armoire industrielle.",
      timeLimit: 50,
    },
    {
      question: "Quelle zone d'environnement est réservée aux opérations électriques en basse tension (zone 4) ?",
      choices: [
        "Zone accessible à tout le monde sans restriction",
        "Zone réservée au personnel habilité, où le matériel IP2X ne doit pas être considéré comme sous tension",
        "Zone uniquement accessible en haute tension",
        "Zone d'investigation sans restriction pour le personnel non habilité",
      ],
      answer: [1],
      explanation:
        "La zone 4 est réservée au personnel habilité pour les opérations électriques en BT. Tout matériel de degré IP2X n'y est pas considéré comme sous tension accessible.",
      timeLimit: 55,
    },
    {
      question: "Quel est l'indice de protection minimal du matériel en basse tension (BT) pour assurer la protection contre les contacts directs ?",
      choices: ["IP 1X", "IP 2X", "IP 3X", "IP 5X"],
      answer: [1],
      explanation:
        "L'indice minimum de protection du matériel est IP 2X en Basse Tension et IP 3X en Haute Tension. Ils assurent la protection contre les contacts directs.",
      timeLimit: 40,
    },
    {
      question: "Quelle est la périodicité de recyclage recommandée pour une habilitation électrique ?",
      choices: ["1 an", "2 ans", "3 ans", "5 ans"],
      answer: [2],
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
      explanation:
        "Les EPI obligatoires en voisinage comprennent les gants isolants (conformes aux normes, vérifiés avant et après usage), les écrans faciaux anti-UV, le casque isolant si risque à la tête, et les chaussures isolantes. Les objets métalliques personnels (bracelets, chaînes) sont interdits.",
      timeLimit: 65,
    },
    {
      question: "Quelle est la Distance Minimale d'Approche (DMA) autour d'une pièce nue sous tension en basse tension (BT), en champ libre ?",
      choices: ["0,05 m", "0,30 m", "1 m", "3 m"],
      answer: [1],
      explanation:
        "La DMA en BT est de 0,30 m autour d'une pièce nue sous tension. En haute tension, cette distance est nettement plus grande. Un titulaire H0B0 ne doit jamais franchir cette limite.",
      timeLimit: 40,
    },
    {
      question: "En milieu humide (condensation, transpiration), quelle est la tension de contact dangereuse en courant alternatif ?",
      choices: ["50 V", "25 V", "12 V", "120 V"],
      answer: [1],
      explanation:
        "En milieu humide, la résistance du corps chute à environ 2 500 Ω. La tension dangereuse descend à 25 V en AC. En milieu sec elle est de 50 V, et en milieu mouillé de 12 V seulement.",
      timeLimit: 40,
    },
    {
      question: "En milieu mouillé (eau ruisselante, immersion partielle), quelle est la tension de contact dangereuse en courant alternatif ?",
      choices: ["50 V", "25 V", "12 V", "30 V"],
      answer: [2],
      explanation:
        "En milieu mouillé, la résistance du corps est très faible. La tension dangereuse en AC tombe à 12 V. Toute installation électrique dans un tel environnement présente un risque maximal même à très basse tension.",
      timeLimit: 40,
    },
    {
      question: "De quelle couleur est le grillage avertisseur signalant la présence d'une canalisation électrique enterrée ?",
      choices: ["Jaune", "Vert", "Rouge", "Bleu"],
      answer: [2],
      explanation:
        "Le grillage avertisseur rouge signale les canalisations électriques enterrées. Jaune = gaz, vert = eau potable, bleu = eau non potable, blanc = télécommunications. Découvrir ce grillage lors d'un terrassement impose l'arrêt immédiat.",
      timeLimit: 35,
    },
    {
      question: "Quelle est la Distance Limite d'Investigation (DLI) à respecter autour d'une pièce nue sous tension en basse tension ?",
      choices: ["3 m", "10 m", "50 m", "100 m"],
      answer: [2],
      explanation:
        "La DLI en BT est de 50 m. C'est la distance à partir de laquelle on commence à prendre en compte l'environnement électrique lors d'une analyse de risques avant travaux.",
      timeLimit: 45,
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
      explanation:
        "Le surveillant de sécurité électrique assure une surveillance permanente des personnes non habilitées travaillant en zone à risque. Il peut intervenir immédiatement en cas de dérive et fait le lien entre l'opérateur et l'organisation de prévention.",
      timeLimit: 50,
    },
    {
      question: "En courant continu, quelle est la tension de contact dangereuse en milieu sec ?",
      choices: ["50 V", "25 V", "60 V", "120 V"],
      answer: [3],
      explanation:
        "En courant continu et milieu sec, la tension dangereuse est de 120 V (contre 50 V en AC). En milieu humide DC : 60 V, en milieu mouillé DC : 30 V. Le courant continu est moins dangereux que l'AC à tension équivalente, mais ne doit jamais être banalisé.",
      timeLimit: 40,
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
        "Toutes les têtes se déclenchent automatiquement en même temps",
        "Seules les têtes soumises a une chaleur suffisante s'ouvrent",
        "Le systeme agit localement au plus pres du foyer",
        "Le sprinkler remplace toute autre organisation incendie du site",
      ],
      answer: [1, 2],
      multiple: true,
      explanation:
        "Le sprinkler agit localement et precocement. Il ne remplace ni l'organisation du site ni les autres moyens de securite incendie.",
      timeLimit: 70,
      contextLabel:
        "Une installation sprinkler doit être lue comme une protection technique integree a une strategie incendie plus large.",
      imagePath: "/images/installation-sprinkler.png",
      imageAlt:
        "schéma de principe d'une installation sprinkler avec reserve d'eau, pompe, poste de contrôle et réseau",
    },
    {
      question:
        "Quels elements appartiennent typiquement a une installation sprinkler ?",
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
      timeLimit: 70,
      contextLabel:
        "Le réseau sprinkler comprend plusieurs parties visibles ou techniques qu'un exploitant doit savoir reconnaître.",
      imagePath: "/images/reseau-sprinkler.jpg",
      imageAlt:
        "réseau sprinkler dans un bâtiment avec poste de contrôle, réseaux et sources d'eau",
    },
    {
      question:
        "Quelles anomalies doivent être prises au serieux en exploitation sprinkler ?",
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
        "Pourquoi une modification de stockage ou d'exploitation doit-elle alerter sur un site protégé par sprinkler ?",
      choices: [
        "Parce qu'elle peut remettre en cause l'adequation entre le risque et la protection installee",
        "Parce qu'un sprinkler est universel et ne depend jamais du risque reel",
        "Parce que la hauteur, la densite ou la nature des produits peuvent changer la situation",
        "Parce que seule la présence des têtes suffit a garantir la conformité en toute circonstance",
      ],
      answer: [0, 2],
      multiple: true,
      explanation:
        "Le sprinkler reste efficace dans un cadre de conception et d'exploitation donne, qu'il faut preserver dans le temps.",
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
      timeLimit: 80,
      contextLabel:
        "Le monde sprinkler s'appuie sur plusieurs référentiels techniques selon le site protégé et ses exigences d'assurance.",
      imagePath: "/images/installation-sprinkler.png",
      imageAlt:
        "schéma pedagogique d'une installation sprinkler dans un bâtiment logistique ou industriel",
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
        "La seule présence du sprinkler suffit a regler le risque incendie d'un entrepot",
        "Les changements d'exploitation doivent être analyses",
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
        "Suivre les essais et contrôles périodiques",
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
        "Quelles règles d'exploitation sont justes concernant les têtes sprinkler ?",
      choices: [
        "Elles ne doivent pas être peintes ni utilisées comme support",
        "Le stockage doit respecter un dégagement suffisant sous les têtes",
        "Un obstacle ajoute sous une tête peut modifier la protection reelle",
        "Une tête heurtée ou deformee peut être ignoree si elle n'a pas coule",
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "Les têtes sprinkler doivent rester intactes, dégagées et adaptees au volume protégé. Un choc, une peinture ou un obstacle modifient la protection.",
      timeLimit: 75,
      contextLabel:
        "L'exploitation quotidienne doit aussi surveiller les têtes sprinkler, leur dégagement et l'absence d'obstacle ou de choc visible.",
      imagePath: "/images/reseau-sprinkler.jpg",
      imageAlt:
        "réseau sprinkler illustrant la répartition des têtes au-dessus des zones de stockage",
    },
    {
      question:
        "Quels organes ou etats doivent rester accessibles et lisibles sur une installation sprinkler ?",
      choices: [
        "Les postes de contrôle et repères associes",
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
        "Le systeme a gaz protégé un volume et impose une logique de temporisation et d'évacuation",
        "Le systeme a gaz fonctionne comme un sprinkler mais sans eau",
        "Le systeme a gaz depend fortement de l'intégrité du local protégé",
        "Le systeme a gaz n'impose aucune contrainte particuliere sur le réaccès",
      ],
      answer: [0, 2],
      multiple: true,
      explanation:
        "Un systeme a gaz ne se lit pas comme un sprinkler. Il repose sur un local protégé, une chaine de commande et une gestion stricte des acces.",
      timeLimit: 75,
      contextLabel:
        "L'extinction automatique a gaz repose sur une logique de local protégé, de temporisation et de securite des personnes.",
      imagePath: "/images/systeme-d'extinction-incendie-automatique.webp",
      imageAlt:
        "schéma d'un systeme fixe d'extinction automatique a gaz avec detection, diffusion et reserve d'agent extincteur",
    },
    {
      question:
        "Pourquoi l'intégrité du local protégé est-elle un point critique pour un systeme a gaz ?",
      choices: [
        "Parce que la concentration utile doit pouvoir se maintenir",
        "Parce que les portes, passages et fuites n'ont aucun effet",
        "Parce que l'efficacité depend aussi de l'étanchéité du volume",
        "Parce que seul le nombre de bouteilles compte",
      ],
      answer: [0, 2],
      multiple: true,
      explanation:
        "Le local protégé fait partie du systeme. Si son intégrité est degradee, la concentration peut devenir insuffisante.",
      timeLimit: 70,
    },
    {
      question:
        "Quels elements de securite des personnes sont essentiels avant une emission de gaz ?",
      choices: [
        "Une alarme et une temporisation visibles ou audibles",
        "L'évacuation prealable du local protégé",
        "L'acces libre au local pendant la diffusion",
        "Le contrôle des acces avant et apres emission",
      ],
      answer: [0, 1, 3],
      multiple: true,
      explanation:
        "La securite des personnes impose une chaine claire: alarme, temporisation, évacuation et maitrise des acces.",
      timeLimit: 75,
    },
    {
      question:
        "Apres une emission de gaz, quel comportement est le plus professionnel ?",
      choices: [
        "Interdire le réaccès tant que les consignes du site ne permettent pas un retour contrôle",
        "Rentrer aussitot pour verifier visuellement",
        "Prendre en compte l'atmosphere du local et les risques residuels",
        "Considérer que tout danger a disparu des l'extinction apparente",
      ],
      answer: [0, 2],
      multiple: true,
      explanation:
        "Apres emission, le risque ne se limite pas au feu initial. Le réaccès doit être strictement encadre.",
      timeLimit: 75,
    },
    {
      question:
        "Quels repères techniques ou normatifs sont cites pour les systemes d'extinction automatique a gaz ?",
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
        "L'indisponibilite doit être autorisee et tracee",
        "Des mesures compensatoires peuvent être necessaires selon le site",
        "Une inhibition temporaire peut se faire sans informer personne",
        "Le retour a la normale doit être verifie avant de considerer le local de nouveau protégé",
      ],
      answer: [0, 1, 3],
      multiple: true,
      explanation:
        "Le mode degrade doit être pilote avec methode: autorisation, tracabilite, compensation et verification du retour a la normale.",
      timeLimit: 75,
      imagePath: "/images/systeme-d'extinction-incendie-automatique.webp",
      imageAlt:
        "schéma d'un systeme fixe d'extinction automatique a gaz avec detection, diffusion et reserve d'agent extincteur",
    },
    {
      question:
        "Pourquoi une modification du local protégé doit-elle être analysee avec serieux sur un systeme a gaz ?",
      choices: [
        "Parce que passages, portes et percements influencent la tenue de la concentration",
        "Parce que l'efficacité depend aussi de l'intégrité du volume protégé",
        "Parce qu'un local protégé reste conforme même apres n'importe quelle modification",
        "Parce que l'étanchéité et les fermetures font partie du systeme reel",
      ],
      answer: [0, 1, 3],
      multiple: true,
      explanation:
        "Le volume protégé fait partie du systeme a gaz. Toute modification du local peut degrader la performance et la securite des personnes.",
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
// QUIZ — Extinction automatique à gaz
// ─────────────────────────────────────────────────────────────────────────────
quizContent["extinction-automatique-gaz"] = [
  {
    question: "Quel agent extincteur gazeux est aujourd'hui interdit par la réglementation européenne pour les nouvelles installations ?",
    choices: ["FM-200 (HFC-227ea)", "Halon 1301", "Novec 1230", "CO2"],
    answer: [1],
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
    explanation: "En phase de pré-déclenchement, il faut évacuer le local immédiatement. La temporisation avant émission est courte (généralement 30 secondes à 1 minute). Chercher la cause ou acquitter l'alarme dans le local expose la personne à l'émission du gaz. L'évacuation est automatiquement signalée par des avertisseurs sonores et lumineux.",
    timeLimit: 40,
  },
  {
    question: "Combien de phases de détection comporte généralement un système d'extinction gaz à double détection ?",
    choices: ["1 phase unique", "2 phases successives", "3 phases", "4 phases"],
    answer: [1],
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
    explanation: "Même si Novec 1230 et FM-200 ne sont pas mortels à concentration d'extinction contrairement au CO2, une ventilation du local est recommandée avant la réoccupation. L'émission génère des sous-produits de décomposition thermique potentiellement irritants. La procédure de réoccupation doit être définie dans le plan d'intervention du site.",
    timeLimit: 40,
  },
  {
    question: "Quelle est la fréquence minimale recommandée des inspections périodiques d'un système d'extinction gaz par un technicien spécialisé ?",
    choices: ["Tous les mois", "Tous les 6 mois", "Tous les ans", "Tous les 3 ans"],
    answer: [2],
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
    explanation: "L'étanchéité du local est indispensable au maintien de la concentration d'agent pendant le temps d'extinction. Des passages non obturés créent des fuites qui font chuter la concentration sous le seuil d'extinction. Les traversées de paroi doivent être colmatées avec des matériaux adaptés (mastics coupe-feu intumescents).",
    timeLimit: 40,
  },
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
    explanation: "Le Tableau de Report reporte les informations essentielles de la centrale (alarme, défaut, MHS) vers un poste de surveillance déporté, par exemple la loge du gardien ou le PC sécurité. Il permet une surveillance du SSI sans être devant la centrale principale, notamment en dehors des heures de bureau.",
    timeLimit: 40,
  },
  {
    question: "Lors d'une alarme générale d'évacuation dans un ERP, dans quel délai maximum les occupants doivent-ils évacuer selon la réglementation ?",
    choices: ["1 minute", "3 minutes", "5 minutes", "10 minutes"],
    answer: [1],
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
    explanation: "La commission de sécurité vérifie la conformité réglementaire et le bon fonctionnement des équipements de sécurité. Elle demande systématiquement le registre de sécurité, les rapports de maintenance périodique, les résultats des essais et les documents de formation du personnel. Un registre incomplet peut entraîner un avis défavorable.",
    timeLimit: 40,
  },
];
