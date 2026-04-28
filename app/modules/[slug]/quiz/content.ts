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
        "Qui delivre formellement l'habilitation B1, B2, BR ou BC apres verification de la formation, du poste et des risques ?",
      choices: [
        "Le formateur",
        "L'employeur",
        "Le fabricant du materiel",
        "Le chef d'equipe seul",
      ],
      answer: [1],
      explanation:
        "La formation prepare a l'habilitation, mais c'est l'employeur qui la delivre.",
      timeLimit: 40,
    },
    {
      question: "Le symbole B1 correspond principalement a :",
      choices: [
        "Un executant electricien en basse tension",
        "Un charge de consignation",
        "Un intervenant BR",
        "Un personnel non electricien",
      ],
      answer: [0],
      explanation:
        "Le B1 designe l'executant electricien travaillant dans un cadre prepare et encadre.",
      timeLimit: 40,
    },
    {
      question: "Le charge de travaux en basse tension est generalement titulaire du symbole :",
      choices: ["B1", "B2", "BR", "BC"],
      answer: [1],
      explanation:
        "Le B2 prepare, dirige et surveille l'execution des travaux electriques.",
      timeLimit: 35,
    },
    {
      question: "Le symbole BR couvre surtout :",
      choices: [
        "Les travaux de chantier encadres par une equipe complete",
        "Les interventions generales en basse tension dans un cadre defini",
        "La consignation uniquement",
        "Les operations d'ordre non electrique",
      ],
      answer: [1],
      explanation:
        "Le BR concerne les interventions generales comme l'entretien, le depannage ou certaines remises en etat autorisees.",
      timeLimit: 45,
      contextLabel:
        "Le tableau des symboles permet de distinguer clairement BR, BC, B1 et B2 sans melanger les fonctions.",
      imagePath: "/elearning/references/symboles-autres-travaux-electriques.jpg",
      imageAlt:
        "Tableau des symboles d'habilitation utilises pour les autres operations d'ordre electrique",
    },
    {
      question: "Le charge de consignation est designe par le symbole :",
      choices: ["B1V", "BR", "BC", "B2V"],
      answer: [2],
      explanation:
        "Le BC garantit le processus de consignation et de mise en securite de l'installation.",
      timeLimit: 35,
      contextLabel:
        "Le tableau des symboles aide a distinguer le role de consignation des roles d'execution, de travaux et d'intervention.",
      imagePath: "/elearning/references/symboles-autres-travaux-electriques.jpg",
      imageAlt:
        "Tableau des symboles d'habilitation utilises pour les autres operations d'ordre electrique",
    },
    {
      question:
        "Parmi les etapes suivantes, lesquelles appartiennent a une logique de consignation ?",
      choices: [
        "Separation",
        "Condamnation",
        "Identification",
        "Verification d'absence de tension",
      ],
      answer: [0, 1, 2, 3],
      multiple: true,
      explanation:
        "La consignation repose sur une chaine d'etapes inseparables pour garantir la mise en securite.",
      timeLimit: 70,
      contextLabel:
        "Le visuel rappelle que la consignation fiable ne se reduit jamais a une simple coupure apparente.",
      imagePath: "/elearning/references/consignation-vat.jpg",
      imageAlt:
        "Illustration de consignation avec condamnation, balisage et verification d'absence de tension",
    },
    {
      question:
        "La verification d'absence de tension peut-elle etre presumee si le disjoncteur a ete coupe ?",
      choices: [
        "Oui, si l'installation est recente",
        "Oui, si le repere parait coherent",
        "Non, elle doit etre reelle et methodique",
        "Oui, en presence d'un B2",
      ],
      answer: [2],
      explanation:
        "La VAT ne se suppose jamais. Elle doit etre effectuee selon une methode fiable et au bon point de l'installation.",
      timeLimit: 40,
      contextLabel:
        "Le visuel rappelle qu'un organe ouvert ne suffit jamais : l'etat electrique doit etre verifie methodiquement.",
      imagePath: "/elearning/references/consignation-vat.jpg",
      imageAlt:
        "Illustration de verification d'absence de tension sur une installation consignee",
    },
    {
      question:
        "Quel role correspond le mieux a la preparation et a la direction d'un travail electrique en basse tension ?",
      choices: [
        "Executant B1",
        "Charge de travaux B2",
        "Intervenant BR",
        "Observateur H0B0",
      ],
      answer: [1],
      explanation:
        "Le B2 organise et pilote la securite du travail confie a l'equipe.",
      timeLimit: 45,
    },
    {
      question:
        "Parmi ces situations, laquelle impose de stopper immediatement l'operation ?",
      choices: [
        "Un repere materiel incoherent avec le dossier",
        "Une odeur anormale ou un echauffement",
        "Un doute sur la consignation",
        "Toutes ces reponses",
      ],
      answer: [3],
      explanation:
        "Tout doute serieux sur l'etat electrique, l'identification ou l'integrite du materiel impose l'arret.",
      timeLimit: 35,
    },
    {
      question:
        "Que faut-il faire si une intervention BR devient plus complexe que prevu et ressemble a des travaux structures ?",
      choices: [
        "Continuer pour gagner du temps",
        "Requalifier l'operation avant de poursuivre",
        "Demander a un collegue de surveiller et continuer",
        "Ignorer la difference si la basse tension est conservee",
      ],
      answer: [1],
      explanation:
        "Une intervention ne doit pas glisser vers des travaux sans clarification du cadre et des roles.",
      timeLimit: 45,
    },
    {
      question:
        "Quelle affirmation sur les EPI et EPC est correcte ?",
      choices: [
        "Les EPI autorisent une operation interdite si l'on reste prudent",
        "Les EPC sont a privilegier et les EPI viennent en complement",
        "Le choix depend seulement de l'habitude de l'operateur",
        "Les EPI remplacent la preparation",
      ],
      answer: [1],
      explanation:
        "Les protections collectives priment. Les EPI ne changent jamais les limites d'habilitation ni la necessite de preparer l'operation.",
      timeLimit: 45,
    },
    {
      question:
        "Lequel de ces raisonnements est le plus professionnel dans un parcours B1 / B2 / BR / BC ?",
      choices: [
        "Improviser une solution si l'on pense avoir compris la panne",
        "Identifier, preparer, agir dans son role et s'arreter au moindre doute",
        "Toujours reenclencher une premiere fois pour voir",
        "Considerer que l'urgence d'exploitation justifie l'ecart",
      ],
      answer: [1],
      explanation:
        "La securite repose sur la methode, la clarte des roles et l'arret en cas d'incertitude.",
      timeLimit: 45,
    },
    {
      question:
        "Parmi ces propositions, lesquelles traduisent de bons reflexes en basse tension ?",
      choices: [
        "Verifier l'identification du materiel",
        "Clarifier les roles dans l'equipe",
        "S'assurer que l'environnement est compatible avec l'operation",
        "S'appuyer uniquement sur l'experience sans documentation",
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "L'experience ne remplace ni l'identification, ni l'organisation, ni le support documentaire.",
      timeLimit: 65,
    },
    {
      question:
        "En cas d'accident electrique, quel principe reste prioritaire ?",
      choices: [
        "Toucher vite la victime pour l'eloigner",
        "Supprimer ou faire supprimer le danger avant de porter secours",
        "Ouvrir le coffret pour comprendre la cause",
        "Terminer la consignation puis prevenir",
      ],
      answer: [1],
      explanation:
        "Le premier objectif est d'eviter le suraccident en supprimant le danger electrique.",
      timeLimit: 40,
    },
    {
      question:
        "Avant de lancer un travail B2 avec plusieurs intervenants, quel point doit etre clarifie en priorite ?",
      choices: [
        "Le role de chacun, la zone de travail et les conditions d'arret",
        "Le numero de telephone personnel de tous les intervenants",
        "Le choix libre des outils par chaque operateur",
        "Le fait de terminer avant l'horaire prevu",
      ],
      answer: [0],
      explanation:
        "Le B2 doit d'abord clarifier les roles, le perimetre de travail, les protections et les conditions de suspension.",
      timeLimit: 45,
    },
    {
      question:
        "Quelles situations imposent une relecture documentaire avant toute poursuite ?",
      choices: [
        "Un schema qui ne correspond pas au reperage local",
        "Une modification ancienne non tracee",
        "Une interface chantier avec un autre intervenant",
        "Un local bien eclaire sans autre anomalie",
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "La documentation, le reperage et la coordination doivent etre confirmees avant toute reprise d'action.",
      timeLimit: 70,
    },
    {
      question:
        "Lequel de ces cas reste normalement dans le cadre BR ?",
      choices: [
        "Une extension complete d'armoire avec ajout de nouveaux circuits",
        "Une intervention generale de depannage identifiee et methodique dans le cadre prevu",
        "Des travaux de chantier avec plusieurs corps d'etat",
        "Une consignation generale de site sans designation BC",
      ],
      answer: [1],
      explanation:
        "Le BR couvre les interventions generales en basse tension dans un cadre defini, pas les travaux structures ni la consignation generale.",
      timeLimit: 45,
    },
    {
      question:
        "Pourquoi la coordination de chantier est-elle un sujet de securite electrique a part entiere ?",
      choices: [
        "Parce qu'une remise en service voisine ou une interface mal signee peut remettre en cause le cadre de securite",
        "Parce qu'elle remplace la consignation",
        "Parce qu'elle n'a d'utilite que pour la paperasse",
        "Parce qu'elle dispense de verifier l'identification du materiel",
      ],
      answer: [0],
      explanation:
        "Une coordination insuffisante peut exposer l'equipe a une reprise d'energie, a une erreur de zone ou a une mauvaise comprehension de l'etat reel de l'installation.",
      timeLimit: 45,
    },
    {
      question:
        "Dans une logique B1 / B2 / BR / BC, quel element transforme souvent un chantier techniquement simple en situation a risque eleve ?",
      choices: [
        "Une interface mal coordonnee avec un autre intervenant ou une remise en energie voisine",
        "Le fait de disposer d'un outillage neuf",
        "L'existence d'un planning detaille",
        "La presence d'un seul circuit terminal clairement identifie",
      ],
      answer: [0],
      explanation:
        "Une interface chantier ou exploitation mal coordonnee peut remettre en cause la zone de securite, la consignation ou l'etat reel de l'installation.",
      timeLimit: 45,
    },
    {
      question:
        "Quelles affirmations sont justes a propos du voisinage et des pieces nues sous tension ?",
      choices: [
        "Le danger peut exister avant le contact direct",
        "Un capot manquant peut changer le cadre de l'operation",
        "Le voisinage se traite uniquement en haute tension",
        "La preparation doit integrer la presence de PNST",
      ],
      answer: [0, 1, 3],
      multiple: true,
      explanation:
        "Le voisinage et la presence de PNST modifient concretement la facon de preparer et de proteger l'operation, y compris en basse tension.",
      timeLimit: 70,
      contextLabel:
        "Le schema de zones aide a comprendre que le danger commence avant le contact et change le cadre de l'operation.",
      imagePath: "/elearning/references/zones-conducteur-nu-bt.jpg",
      imageAlt:
        "Schema des zones autour d'un conducteur nu et des limites de voisinage en basse tension",
    },
    {
      question:
        "Pour un charge de consignation BC, quelle erreur est particulierement critique ?",
      choices: [
        "Omettre l'identification precise du circuit concerne",
        "Demander un compte rendu ecrit de fin d'operation",
        "Refuser une remise en service prematuree",
        "Exiger une verification avant poursuite",
      ],
      answer: [0],
      explanation:
        "Une consignation mal identifiee cree une illusion de securite et expose directement l'equipe a un risque majeur.",
      timeLimit: 45,
    },
    {
      question:
        "Quelles situations doivent conduire a suspendre une remise en service ?",
      choices: [
        "Un doute sur le retrait des moyens temporaires",
        "Une presence possible d'un intervenant dans la zone",
        "Un compte rendu de fin d'operation non boucle",
        "Une envie de gagner du temps sur le planning",
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "La remise en energie ne peut se faire qu'apres verification complete de la fin d'operation et de l'absence d'exposition residuelle.",
      timeLimit: 75,
    },
    {
      question:
        "Dans quel cas un BR doit-il clairement requalifier son intervention ?",
      choices: [
        "Lorsqu'il doit modifier la structure du cablage ou traiter une situation non documentee",
        "Lorsqu'il suit une methode de depannage identifiee dans son cadre habituel",
        "Lorsqu'il verifie d'abord le contexte avant d'agir",
        "Lorsqu'il suspend son action a cause d'une anomalie visible",
      ],
      answer: [0],
      explanation:
        "Dès qu'une intervention generale glisse vers des travaux structures, une modification de schema ou un depannage non maitrise, elle doit etre requalifiee.",
      timeLimit: 45,
    },
    {
      question:
        "Parmi ces propositions, lesquelles traduisent une preparation solide d'un travail B2 ?",
      choices: [
        "Clarifier les roles et conditions d'arret",
        "Verifier l'environnement et les interfaces chantier",
        "S'assurer de la coherence documentaire",
        "Compter sur l'experience des intervenants pour combler les manques",
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "Une preparation serieuse repose sur la clarte des roles, la coherence documentaire et la maitrise de l'environnement, pas sur l'habitude seule.",
      timeLimit: 75,
    },
    {
      question:
        "Que traduit le mieux un comportement professionnel apres une operation difficile mais sans accident ?",
      choices: [
        "Ne rien signaler puisque personne ne s'est blesse",
        "Tracer les ecarts et faire corriger les points de fragilite pour la suite",
        "Laisser l'equipe suivante gerer si le probleme revient",
        "Conserver l'information uniquement a l'oral",
      ],
      answer: [1],
      explanation:
        "Le retour d'experience et la trace ecrite permettent de corriger durablement les causes d'ecarts avant qu'elles ne deviennent accidentogenes.",
      timeLimit: 40,
    },
    {
      question:
        "En vous aidant du schema de consignation, quelle etape reste indispensable avant d'autoriser une equipe a travailler hors tension ?",
      choices: [
        "Une verification d'absence de tension reelle et methodique",
        "Un simple voyant eteint sur la facade",
        "La memoire du dernier intervenant",
        "Le fait que le disjoncteur paraisse en position ouverte",
      ],
      answer: [0],
      explanation:
        "La chaine de consignation ne vaut vraiment que si l'absence de tension est verifiee au bon point, avec la bonne methode.",
      timeLimit: 50,
      contextLabel:
        "Le schema rappelle qu'une installation ne doit jamais etre consideree comme sure sur une simple impression de coupure.",
      imagePath:
        "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-consignation.svg",
      imageAlt:
        "Schema de consignation en basse tension avec separation, condamnation, identification et verification d'absence de tension",
    },
    {
      question:
        "Dans une scene de coordination comme celle illustree, quel signal impose de suspendre l'operation avant toute poursuite ?",
      choices: [
        "Une interface mal clarifiee avec un autre intervenant ou une remise en energie voisine possible",
        "Le fait que l'equipe ait deja travaille ensemble",
        "La presence d'un planning affiche dans le local",
        "Un outillage recent et complet",
      ],
      answer: [0],
      explanation:
        "Une interface chantier ou exploitation mal maitrisee peut remettre en cause la zone de securite et l'etat reel de l'installation.",
      timeLimit: 50,
      contextLabel:
        "Le risque ne vient pas seulement du geste electrique, mais aussi de la coordination entre les acteurs et des remises en energie voisines.",
      imagePath:
        "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-coordination.svg",
      imageAlt:
        "Illustration de coordination de chantier et d'interface de securite en environnement electrique",
    },
    {
      question:
        "Avant une remise en energie, quels controles restent indispensables ?",
      choices: [
        "Verifier le retrait des moyens temporaires et la fin reelle de l'operation",
        "S'assurer qu'aucune personne n'est encore exposee",
        "Clore le compte rendu de fin d'operation",
        "Relancer sans verification si la production attend",
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "La remise en service est une phase sensible qui suppose une verification complete de la fin d'operation et de l'absence d'exposition residuelle.",
      timeLimit: 80,
      contextLabel:
        "La remise en service n'est jamais un simple geste de fin de chantier. Elle doit etre preparee et confirmee.",
      imagePath:
        "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-remise-energie.svg",
      imageAlt:
        "Illustration de la phase de remise en energie et des controles de fin d'operation",
    },
    {
      question:
        "A la lecture du schema des roles, quelle affirmation est correcte ?",
      choices: [
        "Le B2 et le BC sont interchangeables si l'equipe est experimentee",
        "Le B1 execute, le B2 dirige, le BR intervient dans son cadre, le BC consigne",
        "Le BR peut toujours remplacer un B2 sur un chantier de travaux",
        "Le BC n'a besoin ni d'identification ni de tracabilite",
      ],
      answer: [1],
      explanation:
        "Chaque symbole repond a une fonction propre. La norme borne les roles pour eviter les glissements de mission.",
      timeLimit: 50,
      contextLabel:
        "Une habilitation ne vaut pas pour toutes les fonctions. La clarte des roles fait partie de la prevention.",
      imagePath:
        "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-roles.svg",
      imageAlt:
        "Illustration des roles B1 B2 BR BC en basse tension",
    },
    {
      question:
        "Dans quel cas un capot manquant ou un bornier accessible doit-il faire requalifier l'operation ?",
      choices: [
        "Lorsqu'il cree une presence de piece nue sous tension ou un voisinage non maitrise",
        "Uniquement si l'installation est en haute tension",
        "Jamais, si l'equipe porte des gants",
        "Seulement si l'intervention dure plus de 30 minutes",
      ],
      answer: [0],
      explanation:
        "La presence de PNST ou d'un voisinage non maitrise change concretement la scene de risque et peut sortir l'operation de son cadre initial.",
      timeLimit: 45,
    },
    {
      question:
        "Parmi ces affirmations, lesquelles traduisent une culture BC serieuse ?",
      choices: [
        "Identifier sans ambiguite le circuit concerne",
        "Tracer les etapes de mise en securite",
        "Verifier l'absence de tension au bon point",
        "Supposer que l'etiquetage suffit sans confirmation terrain",
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "La consignation fiable repose sur l'identification, la tracabilite et la verification reelle, pas sur une confiance aveugle dans le reperage seul.",
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
        "Quel repère est souvent utilisé pour cadrer pédagogiquement certaines opérations BS sur du matériel simple en courant alternatif ?",
      choices: [
        "400 V et 32 A",
        "1 000 V et 125 A",
        "20 000 V sans limite d’intensité",
        "Aucune limite technique n’existe",
      ],
      answer: [0],
      explanation:
        "Le repère 400 V / 32 A aide à situer le niveau d’intervention élémentaire, sans remplacer l’analyse du matériel réel ni la procédure de l’entreprise.",
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
      imagePath: "/elearning/bsbe/bsbe-operations.svg",
      imageAlt:
        "Illustration de la logique BE Manœuvre : identifier, vérifier, manœuvrer et surveiller",
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
      imagePath: "/elearning/bsbe/bsbe-risque.svg",
      imageAlt:
        "Protection par enveloppe, capotage et indices de protection",
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
      imagePath: "/elearning/bsbe/bsbe-vat.svg",
      imageAlt:
        "Documents, repérage et mise en sécurité avant opération BS ou BE Manœuvre",
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
        "Pourquoi un quiz BS / BE doit-il proposer des cas de terrain et pas seulement des définitions ?",
      choices: [
        "Pour vérifier la capacité à distinguer ce qui est autorisé de ce qui doit être refusé",
        "Pour remplacer l’évaluation pratique de l’employeur",
        "Pour autoriser automatiquement l’habilitation",
        "Pour éviter de parler des limites du symbole",
      ],
      answer: [0],
      explanation:
        "Un quiz sérieux doit vérifier la capacité à prendre la bonne décision face à des situations concrètes, tout en rappelant que l’employeur reste seul décisionnaire de l’habilitation.",
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
        "Le tableau des symboles aide a distinguer clairement les operations d'ordre non electrique selon la zone et le voisinage.",
      imagePath: "/elearning/references/symboles-travaux-non-electriques.jpg",
      imageAlt:
        "Tableau des symboles d'habilitation utilises pour les travaux d'ordre non electrique",
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
        "Le schema des locaux et emplacements d'acces permet de visualiser comment le voisinage change le cadre d'autorisation.",
      imagePath: "/elearning/references/distances-locaux-acces.jpg",
      imageAlt:
        "Schema des distances limites et des zones definies dans les locaux et emplacements d'acces",
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
        "Schema des zones et distances a respecter dans un local ou emplacement d'acces electrique",
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
        "Le schema de zones permet de relier les notions de voisinage renforce, de balisage et de surveillance a une scene concrete de chantier.",
      imagePath: "/elearning/references/distances-locaux-acces.jpg",
      imageAlt:
        "Schema des distances limites et zones definies dans les locaux et emplacements d'acces",
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
        "Le support documentaire reste un repere de securite concret pour cadrer l'acces, la zone et les limites du chantier.",
      imagePath: "/elearning/references/document-chantier.jpg",
      imageAlt:
        "Exemple d'autorisation ou de document de chantier utilise pour formaliser l'acces a une zone de travail",
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
        "L’INRS rappelle que les RIA permettent une action puissante et efficace lorsque l’emploi de l’eau n’est pas interdit.",
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
        "Les repères INRS sur les extincteurs distinguent bien l’agent extincteur, les classes de feu et les limites d’emploi près d’une origine électrique.",
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
        "INRS ND 2191",
        "APSAD R1",
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "APSAD R13, NF EN 15004-1 et les reperes INRS aident a comprendre l'exploitation et la maintenance de ces systemes.",
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

quizContent["bt-multi-symboles"] = baseBtMultiSymbolesQuiz;

quizContent["b1-b1v"] = [
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
