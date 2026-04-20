export type QuizQuestion = {
  question: string;
  choices: string[];
  answer: number[];
  multiple?: boolean;
  explanation?: string;
  timeLimit?: number;
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
    },
    {
      question: "Le charge de consignation est designe par le symbole :",
      choices: ["B1V", "BR", "BC", "B2V"],
      answer: [2],
      explanation:
        "Le BC garantit le processus de consignation et de mise en securite de l'installation.",
      timeLimit: 35,
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
  ],
  bsbe: [
    {
      question:
        "Qui delivre l'habilitation BS ou BE Manoeuvre apres verification de la formation, du poste et des risques ?",
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
      question: "L'habilitation BS concerne principalement :",
      choices: [
        "Les travaux electriques complexes sur tableaux",
        "Les interventions elementaires en basse tension",
        "La consignation generale d'une installation",
        "Les essais sous tension en atelier",
      ],
      answer: [1],
      explanation:
        "Le BS couvre des remplacements et raccordements elementaires dans un cadre strictement defini.",
      timeLimit: 40,
    },
    {
      question: "L'habilitation BE Manoeuvre permet surtout :",
      choices: [
        "Le depannage de tout equipement electrique",
        "Les manoeuvres d'exploitation sur des organes identifies",
        "La modification du cablage interne d'un coffret",
        "La recherche de panne approfondie",
      ],
      answer: [1],
      explanation:
        "BE Manoeuvre couvre les manoeuvres d'exploitation prevues, pas le depannage ni la modification.",
      timeLimit: 45,
    },
    {
      question:
        "Parmi les actions suivantes, lesquelles relevent normalement d'une logique BS ?",
      choices: [
        "Remplacement simple d'un element prevu par procedure",
        "Raccordement elementaire sur materiel identifie",
        "Recherche de panne sur un circuit inconnu",
        "Modification d'une armoire electrique",
      ],
      answer: [0, 1],
      multiple: true,
      explanation:
        "Le BS reste limite a des gestes simples, identifies et formalises.",
      timeLimit: 60,
    },
    {
      question:
        "Avant un rearmement en BE Manoeuvre, quel reflexe est correct ?",
      choices: [
        "Reenclencher sans verifier pour gagner du temps",
        "Verifier le contexte, l'absence d'anomalie visible et l'autorisation de procedure",
        "Demander a un collegue de rester a cote puis reenclencher",
        "Enlever le capot pour voir la cause du declenchement",
      ],
      answer: [1],
      explanation:
        "Une manoeuvre suppose une verification minimale du contexte, pas un geste automatique.",
      timeLimit: 45,
    },
    {
      question: "Quel signe impose l'arret immediat de l'action ?",
      choices: [
        "Une odeur anormale ou un echauffement",
        "Un materiel mal identifie",
        "Un capot manquant",
        "Toutes ces reponses",
      ],
      answer: [3],
      explanation:
        "Toute anomalie visible ou tout doute sur l'identification impose de stopper l'action.",
      timeLimit: 35,
    },
    {
      question:
        "Le titulaire BS ou BE Manoeuvre peut-il faire un depannage hors procedure parce que l'action parait simple ?",
      choices: [
        "Oui, si le materiel est en basse tension",
        "Oui, si le chef insiste",
        "Non, une action hors procedure sort du cadre d'habilitation",
        "Oui, si le poste est urgent",
      ],
      answer: [2],
      explanation:
        "Le cadre d'habilitation ne s'elargit ni par l'urgence ni par l'habitude.",
      timeLimit: 40,
    },
    {
      question: "Quelle affirmation sur les protections est correcte ?",
      choices: [
        "Un EPI rend licite une action interdite",
        "Les protections se verifient avant l'operation et ne changent pas les limites d'autorisation",
        "On peut agir si l'on est prudent meme sans protection prevue",
        "Les protections ne servent qu'aux electriciens executants",
      ],
      answer: [1],
      explanation:
        "Les protections reduisent le risque, mais ne transforment jamais une operation interdite en operation autorisee.",
      timeLimit: 45,
    },
    {
      question:
        "Que faut-il faire apres plusieurs declenchements consecutifs d'un meme organe ?",
      choices: [
        "Continuer a rearmer jusqu'au retour a la normale",
        "Arreter les tentatives et signaler la situation",
        "Ouvrir l'equipement pour inspecter",
        "Contourner la protection pour maintenir le service",
      ],
      answer: [1],
      explanation:
        "Le rearmement repete est un signal d'alerte, pas une solution.",
      timeLimit: 35,
    },
    {
      question:
        "Dans une operation BS ou BE Manoeuvre, l'identification du materiel concerne est :",
      choices: [
        "Optionnelle si l'operateur a l'habitude",
        "Importante uniquement en presence du manager",
        "Obligatoire avant toute action",
        "Inutile si le materiel est accessible",
      ],
      answer: [2],
      explanation:
        "Une mauvaise identification peut conduire a agir sur le mauvais circuit ou le mauvais equipement.",
      timeLimit: 35,
    },
    {
      question:
        "En cas d'electrisation d'une victime, le premier reflexe est :",
      choices: [
        "La toucher pour l'eloigner vite",
        "Supprimer ou faire supprimer le danger sans se mettre en risque",
        "Ouvrir immediatement le coffret",
        "Reenclencher pour verifier la cause",
      ],
      answer: [1],
      explanation:
        "On ne touche jamais directement une victime tant que le danger electrique persiste.",
      timeLimit: 45,
    },
    {
      question:
        "Parmi ces propositions, lesquelles doivent faire partie de la preparation avant une operation ?",
      choices: [
        "Verifier l'environnement de travail",
        "Identifier clairement le materiel",
        "Controler l'etat apparent des protections et outils",
        "Supposer que tout est conforme si aucune panne n'a eu lieu la veille",
      ],
      answer: [0, 1, 2],
      multiple: true,
      explanation:
        "La preparation repose sur des verifications concretes, pas sur une supposition.",
      timeLimit: 70,
    },
    {
      question:
        "Le bon raisonnement professionnel en BS / BE Manoeuvre est :",
      choices: [
        "Agir vite puis prevenir apres",
        "Identifier, verifier, agir si autorise, sinon stopper et signaler",
        "Toujours tenter une premiere action pour voir",
        "Se fier uniquement a son experience personnelle",
      ],
      answer: [1],
      explanation:
        "La securite repose sur une decision correcte avant le geste, pas sur l'improvisation.",
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
};
