import { ModuleContent } from "./module-types";

export const b1b2brbcModuleContent: ModuleContent = {
  title: "B1 / B1V / B2 / B2V / BR / BC - Travaux, interventions et consignation en basse tension",
  shortTitle: "B1 / B1V / B2 / B2V / BR / BC",
  subtitle:
    "Parcours e-learning de préparation théorique destiné aux électriciens et personnels techniques appelés à exécuter, encadrer, consigner ou intervenir en basse tension dans un cadre professionnel formalisé, complété par une journée présentielle de validation et d'application.",
  duration: "8 h 00 à 11 h 00 de théorie guidée",
  deliveryFormat: "E-learning guidé + quiz + journée présentielle d'application",
  level: "Avancé",
  objective:
    "Comprendre les symboles B1, B1V, B2, B2V, BR et BC, distinguer les rôles et responsabilités, préparer une opération en sécurité, maîtriser les principes de consignation, d'intervention et de travaux en basse tension, identifier les écarts critiques et adopter les bons réflexes face aux anomalies ou à l'urgence.",
  audience:
    "Électriciens, techniciens de maintenance, responsables techniques et personnels amenés à exécuter des travaux, conduire une intervention générale, préparer une consignation ou assurer un rôle d'encadrement électrique en basse tension.",
  certificationNote:
    "Ce parcours constitue la base théorique. La délivrance de l'habilitation relève de l'employeur après évaluation des acquis, vérification de l'adéquation entre les tâches réelles et le niveau retenu, ainsi qu'après mise en situation pratique adaptée et séquence présentielle d'application.",
  heroBadge: "Habilitation électrique",
  finalMessage:
    "À l'issue du parcours B1 / B1V / B2 / B2V / BR / BC, l'apprenant doit retenir une logique de sécurité exigeante : préparation, vérification, respect du rôle attribué, rigueur documentaire et refus de toute improvisation sur une installation électrique.",
  quizCtaLabel: "Passer au quiz B1 / B1V / B2 / B2V / BR / BC",
  sections: [
    {
      id: "cadre-general",
      title: "1. Cadre des habilitations B1, B1V, B2, B2V, BR et BC",
      estimatedMinutes: 25,
      intro:
        "La NF C 18-510 ne présente pas les symboles B1, B1V, B2, B2V, BR et BC comme de simples étiquettes. Elle les rattache à des fonctions précises, à une chaîne de décision claire et à une habilitation employeur qui doit correspondre exactement aux opérations confiées.",
      content: [
        "Le B1 designe l'executant electricien en basse tension. Le B1V designe cet executant lorsqu'il agit dans un environnement de voisinage renforcant les exigences de securite. Le B2 designe le charge de travaux, c'est-a-dire la personne qui prepare, organise et dirige effectivement les travaux electriques confies a son equipe. Le B2V designe ce charge de travaux lorsqu'il intervient en voisinage dans les conditions prevues par l'organisation et la norme.",
        "Le BR designe le charge d'intervention en basse tension pour les interventions generales autorisees. Il se situe dans un cadre specifique d'entretien, de depannage, de mesure, d'essai limite ou de remise en etat. Le BC est le charge de consignation: il effectue ou fait effectuer les operations de separation, condamnation, identification, verification d'absence de tension et, lorsque cela est requis, mise a la terre et en court-circuit.",
        "La norme insiste sur la définition des personnes: employeur, chargé de travaux, chargé d'intervention, chargé de consignation, exécutant, surveillant de sécurité électrique. Cette architecture n'est pas théorique. Elle structure la prevention du risque electrique parce que chacun doit savoir ce qu'il decide, ce qu'il controle et ce qu'il execute.",
        "L'habilitation reste une reconnaissance employeur. Elle ne se deduit ni d'un diplome, ni de l'anciennete, ni d'une habitude de site. Un salarie peut posseder plusieurs symboles si ses missions le justifient, mais chaque symbole garde ses limites propres. Cumuler des titres ne signifie jamais melanger les roles pendant une operation sans clarification.",
        "La partie e-learning prepare la theorie, mais la delivrance du titre d'habilitation releve d'une verification employeur complete, appuyee sur une evaluation pratique et sur l'adequation entre les taches reelles et le symbole retenu.",
        "Le Code du travail et la NF C 18-510 encadrent cette logique: l'operation d'ordre electrique doit etre organisee, les personnes doivent etre formees et habilitees lorsque cela est requis, et l'employeur doit definir les missions reelles, les consignes et les moyens adaptes. Le titre d'habilitation n'est donc jamais une simple formalite administrative.",
        "Pour un apprenant, il est essentiel de retenir que les symboles ne decrivent pas seulement un niveau technique. Ils decrivent surtout un perimetre d'action: qui prepare, qui dirige, qui execute, qui consigne, qui intervient et dans quelles limites precises.",
        "Le professionnel fiable sait donc dire non a un glissement de mission. Un B1 ou un B1V n'agit pas comme un B2 ou un B2V. Un BR ne se transforme pas en BC parce qu'il faut aller vite. Et une operation non preparee doit etre stoppee meme si le besoin de remise en service est fort.",
      ],
      deepDive: [
        "L'introduction de la norme insiste sur l'unicité, la cohérence et la maîtrise de l'information. Dans la pratique, cela veut dire qu'une opération électrique ne doit jamais reposer sur des consignes floues, des transmissions orales contradictoires ou des suppositions de terrain.",
        "Le vrai professionnalisme ne consiste pas à 'se débrouiller'. Il consiste a tenir son role, à connaître sa limite et à exiger une requalification des que la situation ne correspond plus au cadre prévu.",
        "Chaque technicien doit savoir se positionner correctement dans l'organisation de sécurité, pas seulement réciter des définitions.",
      ],
      keyPoints: [
        "B1 / B1V = executant electricien en BT, avec ou sans voisinage selon l'attribut.",
        "B2 / B2V = charge de travaux en BT, avec ou sans voisinage selon l'attribut.",
        "BR = charge d'intervention en BT.",
        "BC = charge de consignation.",
        "Chaque symbole correspond à un rôle et à des limites propres.",
      ],
      forbiddenPoints: [
        "Confondre experience terrain et droit d'agir.",
        "Meler les fonctions d'execution, de direction, d'intervention et de consignation sans cadre clair.",
        "Presenter la formation seule comme une habilitation definitive.",
      ],
      legalRefs: [
        "NF C 18-510 - article 3 : definitions des personnes, roles et habilitation employeur.",
        "Code du travail - organisation des operations electriques et obligation d'habilitation lorsque requise.",
        "INRS - prevention du risque electrique et articulation des fonctions sur le terrain.",
      ],
      resourceVideos: [
        {
          title: "Webinaire INRS - Comment choisir les habilitations électriques ?",
          description:
            "Support officiel tres utile pour verifier les frontieres entre B1, B2, BR, BC et la logique de choix du symbole.",
          url: "https://www.inrs.fr/media.html?refINRS=Anim-184",
          provider: "INRS",
          ctaLabel: "Voir le webinaire INRS",
        },
      ],
      practicalCase:
        "Exemple : un technicien assure habituellement du depannage en BR. On lui demande soudain d'organiser un chantier avec plusieurs operateurs et une mise hors tension preparee. La mission ne releve plus du meme cadre et doit etre requalifiee avant toute action.",
      visual: {
        title: "Quatre fonctions, quatre responsabilités",
        subtitle: "Exécuter, diriger, intervenir, consigner : la norme fixe une frontière nette entre ces rôles.",
        items: ["B1 / B1V exécutant", "B2 / B2V chargé de travaux", "BR intervention générale", "BC consignation"],
        tone: "blue",
        imagePath: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-roles.svg",
        imageAlt: "Illustration des rôles B1 B1V B2 B2V BR BC et de leurs responsabilités distinctes",
      },
    },
    {
      id: "roles-responsabilites",
      title: "2. Rôles, responsabilités et chaîne de décision",
      estimatedMinutes: 25,
      intro:
        "Le risque electrique ne se maîtrise pas seulement par le geste technique. Il se maitrise d'abord par une organisation claire, des documents fiables et une chaîne de responsabilité que chacun comprend sans ambiguite.",
      content: [
        "L'employeur définit les missions, les moyens, les procédures, les équipements de protection et les niveaux d'habilitation adaptes. Il doit s'assurer que le personnel dispose d'une formation adéquate, d'une information maîtrisée et d'une organisation compatible avec le risque électrique réel du site.",
        "Le charge de travaux B2 prepare l'intervention, delimite la zone, verifie le cadre de securite, organise le briefing, pilote l'equipe et suspend l'operation si les conditions prevues ne sont plus reunies. L'executant B1 applique les consignes, reste dans le perimetre defini et remonte immediatement tout ecart, doute ou evenement non prevu.",
        "Le charge d'intervention BR prepare et conduit l'intervention generale dans la limite de son cadre. Le charge de consignation BC garantit la fiabilite de la mise en securite electrique. Selon les configurations, d'autres fonctions peuvent intervenir: charge d'exploitation, surveillant de securite electrique, representant de l'entreprise exploitante ou donneur d'ordre. Le fil conducteur reste le meme: une personne sait, une personne autorise, une personne dirige, une personne execute.",
        "Cette chaine s'appuie sur des documents et des informations claires: instructions, analyses de risque, autorisations, attestations, certificats, reperages, procedures de suivi et de controle. La norme insiste sur ce point car une operation mal informee produit des erreurs d'identification, des glissements de mission et des illusions de securite.",
        "Dans les parcours les plus serieux, cette partie ne se limite pas a des definitions. Elle montre comment s'articulent concretement le titre d'habilitation, l'autorisation de travail, le balisage, la consignation, le briefing d'equipe, le compte rendu de fin d'intervention et la remise en service.",
        "L'apprenant doit aussi savoir qu'une information fiable est unique, cohérente et maîtrisée. Si le schema, l'etiquetage, le dossier d'intervention ou l'instruction du jour se contredisent, la bonne reaction n'est pas d'interpreter au plus vite: c'est de suspendre et de faire clarifier.",
        "Une mission electrique sure se prepare avec une information exploitable: qui intervient, sur quel materiel, dans quelle zone, avec quelle autorisation, quelles protections, quels points d'arret et quelles conditions de reprise.",
        "La requalification de l'opération fait partie de cette maturite. Si un depannage simple revele finalement des travaux a organiser, ou si un chantier préparé se heurte à un voisinage non maîtrisé, l'operation n'est pas poursuivie par habitude: elle est stoppée puis redéfinie.",
      ],
      deepDive: [
        "Beaucoup d'accidents trouvent leur origine dans une situation ou tout le monde croit que 'quelqu'un d'autre' a verifie. Le rôle de chacun doit donc être explicite, assumé et traçable.",
        "La chaine de decision doit rester compatible avec le terrain: quand un materiel est mal repere, quand un depart voisin apparait sous tension ou quand un document n'est plus coherent, le processus de securite reprend la main sur la production.",
      ],
      keyPoints: [
        "L'employeur organise et habilite.",
        "Le B2 prepare et dirige les travaux.",
        "Le B1 execute selon les consignes et limites definies.",
        "Le BR conduit l'intervention generale dans son cadre.",
        "Le BC garantit la consignation et sa fiabilite.",
      ],
      forbiddenPoints: [
        "Lancer une operation sans clarification des roles.",
        "S'appuyer sur un document flou ou un repere douteux.",
        "Continuer alors que l'operation a change de nature.",
      ],
      legalRefs: [
        "NF C 18-510 - introduction : unicité, cohérence et maîtrise de l'information.",
        "NF C 18-510 - article 3 : definitions des charges et de l'executant.",
        "Code du travail - adequation entre competence, poste et risque electrique.",
      ],
      practicalCase:
        "Exemple : lors d'une intervention sur une machine, un conducteur supplementaire non documente est decouvert. Le BR suspend l'action, informe l'organisation et la mission est requalifiee avant reprise.",
      chapterImagePath:
        "/images/modules/electricite/document-chantier-autorisation.jpg",
      chapterImageAlt:
        "Document technique et cadre d'autorisation utilises pour organiser une operation electrique et clarifier les responsabilités",
      visual: {
        title: "Une chaîne de responsabilité lisible",
        subtitle: "Employeur, responsables electriques, executants et documents doivent former un dispositif coherent.",
        items: ["Mission definie", "Role attribue", "Documents fiables", "Arret si l'operation change"],
        tone: "slate",
        imagePath: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-chaine.svg",
        imageAlt: "Illustration de la chaine de decision et de securite pour une operation B1 B1V B2 B2V BR BC",
      },
    },
    {
      id: "symboles-attributions",
      title: "3. Symboles, voisinage et attributs",
      estimatedMinutes: 20,
      intro:
        "Lire un symbole d'habilitation ne consiste pas a reconnaitre des lettres familieres. Il faut comprendre ce que chaque caractere ouvre ou, au contraire, interdit dans le cadre reel d'une operation.",
      content: [
        "La lettre B renvoie a la basse tension. Les chiffres et lettres associes precisent la nature de l'opération ou du rôle: executant, charge de travaux, intervention, consignation. Le symbole n'est donc pas un simple intitulé administratif: il fixe un cadre concret d'action.",
        "Les attributs et indices doivent etre lus avec rigueur. Un B1 n'est pas un B2. Un BR n'est pas un BC. L'attribut V renvoie a une situation de voisinage qui renforce les exigences de securite mais ne transforme jamais un symbole en autre chose que ce qu'il est. Un B1V n'est pas un BR et un BRV n'est pas un charge de consignation.",
        "La lecture correcte des symboles evite l'un des ecarts les plus courants du terrain: penser qu'une habitude, un niveau technique ou une urgence de production permettent d'elargir ce que le titre autorise. La norme fait exactement l'inverse: elle borne les missions pour eviter les derives.",
        "Le voisinage doit etre pense des la preparation. Il conditionne les ecrans, obstacles, capotages, delimitations de zone, protections collectives et parfois la necessite de changer de methode ou de suspendre l'operation. Un symbole avec voisinage n'est jamais un 'plus pratique'; c'est un cadre plus exigeant.",
        "L'attribut V ne donne pas un droit supplementaire de depannage ou de travaux. Il signifie qu'une operation est realisee dans des conditions de voisinage qui imposent une analyse plus rigoureuse, des protections renforcees et un encadrement adapte.",
        "Le symbole BC ne doit pas être confondu avec un rôle général de chantier. Il vise la consignation. Le symbole BR ne doit pas etre confondu avec une autorisation generale de modifier librement une installation. Il couvre des interventions générales définies, méthodiques et limitées.",
        "Une lecture professionnelle des symboles implique enfin de rapprocher le titre, la mission, le materiel, l'environnement et la procedure. Si l'un de ces elements ne colle plus, le bon reflexe n'est pas d'interpreter au large. C'est de s'arreter et de requalifier.",
      ],
      deepDive: [
        "Chaque caractere du symbole a une consequence operationnelle. La lettre, le chiffre et l'attribut indiquent le domaine, la fonction tenue, la presence eventuelle de voisinage et les limites a ne pas franchir.",
        "Le voisinage n'est pas un accessoire de vocabulaire. C'est une vraie decision de prevention qui modifie la scene de travail, les moyens de protection et l'autorisation de poursuivre.",
      ],
      keyPoints: [
        "La lettre, l'indice et l'attribut ont chacun une valeur operationnelle.",
        "Un symbole ne s'interprete jamais au-dela de ce qu'il dit.",
        "L'attribut V renforce les exigences de securite en voisinage.",
        "Un B1V ne devient pas un BR par simple habitude de terrain.",
      ],
      forbiddenPoints: [
        "Deviner le sens d'un symbole au lieu de le lire strictement.",
        "Utiliser le voisinage comme prétexte pour agir au-delà du rôle attribué.",
      ],
      legalRefs: [
        "NF C 18-510 - tableau des elements du symbole et conditions associees.",
        "NF C 18-510 - execution des operations en fonction des roles et du voisinage.",
      ],
      practicalCase:
        "Exemple : un technicien B1V travaille a proximite d'un depart voisin. Il ne gagne pas un droit de depannage general: il reste executant dans une situation de voisinage plus exigeante.",
      chapterImagePath:
        "/images/modules/electricite/symboles-habilitation-travaux-electriques.jpg",
      chapterImageAlt:
        "Tableau des symboles d'habilitation utilises pour les autres operations d'ordre electrique",
      visual: {
        title: "Chaque caractere compte",
        subtitle: "Lettre, indice et attribut fixent le cadre reel d'autorisation et les precautions a prendre.",
        items: ["B = basse tension", "1 ou 2 = exécuter ou diriger", "R / C = intervenir ou consigner", "V = voisinage plus exigeant"],
        tone: "green",
        imagePath: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-symboles.svg",
        imageAlt: "Illustration de lecture des symboles B1 B1V B2 B2V BR BC et de l'attribut V",
      },
    },
    {
      id: "domaines-zones-pnst",
      title: "4. Domaines de tension, voisinage et pièces nues sous tension",
      estimatedMinutes: 25,
      intro:
        "Les habilitations B1, B1V, B2, B2V, BR et BC s'exercent dans un environnement ou la notion de voisinage, de PNST et de distances de sécurité change concretement la façon de préparer et d'exécuter une opération.",
      content: [
        "La basse tension n'est pas une zone de confort. Elle reste un domaine ou le risque de choc electrique, d'arc et de court-circuit peut etre grave, en particulier si des pieces nues sous tension sont accessibles ou si l'environnement est degrade.",
        "La presence de voisinage doit etre analysee des la preparation. Elle conditionne les balisages, les ecrans, les obstacles, la delimitation de zone, les roles et parfois la necessite de modifier le cadre d'intervention.",
        "Une PNST n'est pas seulement un danger a toucher. C'est un danger a approcher sans maitrise. Une enveloppe retiree, un capot manquant ou un bornier accessible peuvent faire basculer l'operation vers un niveau de risque incompatible avec le cadre initial.",
        "Le role du charge de travaux, de l'intervenant BR ou du charge de consignation consiste aussi a reconnaitre ces situations et a imposer les protections supplementaires ou l'arret avant toute poursuite.",
        "Cette lecture du voisinage est inseparable des zones d'environnement et des distances de securite de la norme. L'apprenant n'a pas besoin de memoriser une geometrie abstraite sans contexte: il doit comprendre qu'un depart voisin sous tension, une piece nue accessible ou un capot retire changent immediatement le mode operatoire et parfois le symbole d'habilitation requis.",
        "Le maintien des capotages, obstacles et ecrans est un point de prevention majeur. Une installation qui semblait compatible avec une operation preparee peut sortir du cadre des qu'un element de protection est degrade, depose ou absent.",
        "Les chapitres les plus solides insistent aussi sur l'IP2X, le maintien des capotages, la lecture du voisinage et la capacite a requalifier l'operation si un depart voisin ou un bornier accessible change la scene de risque.",
      ],
      deepDive: [
        "Le voisinage n'est pas une simple definition. Sur le terrain, il conditionne la decision de poursuivre, de renforcer les protections, de modifier le balisage ou d'arreter l'operation tant que la zone n'est pas maitrisee.",
        "Le professionnalisme consiste a faire evoluer l'organisation des protections avant que le danger ne se transforme en exposition reelle de l'equipe.",
      ],
      keyPoints: [
        "BT ne veut pas dire risque faible.",
        "Voisinage et PNST modifient la preparation.",
        "Un capotage degrade change le cadre de l'operation.",
      ],
      forbiddenPoints: [
        "S'approcher d'une PNST pour mieux voir sans protection adaptee.",
        "Banaliser un voisinage non maitrise.",
      ],
      legalRefs: [
        "NF C 18-510 - voisinage, zones d'environnement et prevention du risque electrique.",
        "INRS - operations sur installations electriques et traitement du voisinage.",
      ],
      practicalCase:
        "Exemple : une intervention BR prevue sur un circuit terminal devient critique car un bornier voisin est decouvert apres depose partielle d'un capot. L'organisation de l'intervention doit etre revue avant reprise.",
      chapterImagePath: "/images/modules/electricite/zones-voisinage-bt.jpg",
      chapterImageAlt:
        "Schema des zones autour d'un conducteur nu et des limites de voisinage en basse tension",
      visual: {
        title: "Le voisinage change tout",
        subtitle: "PNST, capotage, zone et protection conditionnent l'action.",
        items: ["BT a risque", "PNST", "Voisinage", "Arret si non maitrise"],
        tone: "amber",
        imagePath: "/elearning/bsbe/bsbe-risque.svg",
      },
    },
    {
      id: "preparation-travaux",
      title: "5. Préparation des travaux électriques",
      estimatedMinutes: 25,
      intro:
        "La preparation d'une operation electrique est une phase critique. Elle conditionne la securite de l'execution bien avant le premier geste technique.",
      content: [
        "La preparation comprend la lecture du besoin, l'identification du materiel, l'analyse de l'environnement, la verification documentaire, la designation des roles et la verification des moyens de prevention.",
        "Le charge de travaux doit clarifier la zone d'intervention, les risques de voisinage, les energies presentes, les interfaces avec les autres corps d'etat et les conditions d'arret.",
        "Une intervention ou un travail ne commence jamais sur une installation mal identifiee, degradee, non accessible dans de bonnes conditions ou depourvue de cadre documentaire suffisant.",
        "La preparation doit aussi verifier la compatibilite entre le symbole d'habilitation detenu et l'operation reelle. Un chantier electrique, une intervention generale BR, une consignation BC ou un travail en voisinage n'impliquent ni les memes moyens, ni les memes documents, ni les memes responsabilites.",
        "Le briefing de debut d'operation n'est pas une formalite. Il sert a rappeler le materiel concerne, la zone de travail, les energies en presence, les limites de chacun, la conduite a tenir en cas d'ecart et les conditions de remise en service.",
        "Les parcours les plus serieux donnent une vraie place au briefing de debut d'operation, a la delimitation physique de la zone, a la verification des outils et a la coordination avec l'exploitant. Sans cette discipline, meme un chantier techniquement simple peut devenir dangereux.",
      ],
      deepDive: [
        "L'essentiel des erreurs graves vient souvent d'une preparation insuffisante : mauvais repere, ambiguite sur le circuit, procedure absente, moyens de protection non verifies, interface de chantier negligee.",
        "Une bonne preparation permet aussi de raccourcir la duree d'exposition et d'eviter les improvisations qui apparaissent quand l'equipe decouvre les difficultees sur place.",
      ],
      keyPoints: [
        "Identifier, preparer, delimiter, verifier.",
        "La preparation fait partie du travail.",
        "Sans clarte documentaire, on stoppe.",
      ],
      forbiddenPoints: [
        "Demarrer pour voir sur place.",
        "S'appuyer sur l'habitude plutot que sur l'identification du materiel.",
      ],
      legalRefs: [
        "NF C 18-510 - preparation et organisation des operations.",
        "Code du travail - evaluation du risque et moyens de prevention.",
      ],
      practicalCase:
        "Exemple : une equipe doit intervenir sur un depart repere en maintenance, mais la signaletique locale ne correspond pas au dossier. L'operation est suspendue jusqu'a verification.",
      chapterImagePath: "/images/modules/electricite/maintenance-environnement-technique.jpg",
      chapterImageAlt:
        "Technicien intervenant devant une armoire electrique en environnement technique controle",
      visual: {
        title: "Avant d'agir",
        subtitle: "La securite se construit des la preparation.",
        items: ["Identifier", "Verifier", "Delimiter", "Autoriser"],
        tone: "amber",
        imagePath: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-travaux.svg",
      },
    },
    {
      id: "consignation",
      title: "6. Consignation et vérification d'absence de tension",
      estimatedMinutes: 30,
      intro:
        "La consignation est un processus de securite, pas une simple formalite. Elle doit etre rigoureuse, verifiable et comprise par tous les acteurs.",
      content: [
        "La consignation repose sur une succession d'etapes : separation, condamnation, identification, verification d'absence de tension puis, si necessaire selon le domaine et l'organisation, mise a la terre et en court-circuit.",
        "Le charge de consignation BC garantit la fiabilite du processus. Il doit s'assurer que le circuit concerne est bien celui qui est separe, identifie et rendu indisponible a toute remise sous tension intempestive.",
        "La verification d'absence de tension n'est jamais presumee. Elle doit etre faite avec un materiel adapte, selon une methode connue et sur le bon point de l'installation.",
        "Les ecueils classiques du BC sont concrets: plusieurs departs semblables dans une meme armoire, reperage incomplet, condamnation mal visible, essai de remise en service concurrent ou confiance excessive dans un simple voyant d'etat. C'est souvent la que l'illusion de securite s'installe.",
        "La VAT n'est pas une formalite annexe. C'est le point de bascule entre une coupure supposee et un etat electrique verifie. Le professionnel fiable sait expliquer sa methode, son materiel et ses points de controle.",
        "La methode de verification doit inclure le controle du bon fonctionnement du dispositif avant et apres la VAT, l'identification certaine du point de mesure et la coherence avec le dossier de consignation. Se fier a un voyant, a une habitude ou a une indication orale expose directement l'equipe.",
        "L'apprenant doit aussi comprendre la difference entre la simple mise hors tension, la mise en securite electrique et la consignation complete. Ce vocabulaire n'est pas decoratif: il conditionne le niveau de fiabilite attendu avant le debut des travaux ou de l'intervention.",
      ],
      deepDive: [
        "Une consignation inexacte cree une illusion de securite. C'est l'une des situations les plus dangereuses car l'equipe pense etre protegee alors que le risque persiste.",
        "Le formalisme documentaire, les etiquetages, les condamnations et les confirmations croisees participent directement a la prevention. La rigueur n'est pas administrative, elle est vitale.",
      ],
      keyPoints: [
        "Consigner = plusieurs etapes indissociables.",
        "La VAT doit etre reelle et methodique.",
        "Le BC structure la fiabilite du processus.",
      ],
      forbiddenPoints: [
        "Se fier a une supposition de coupure.",
        "Omettre l'identification ou la condamnation.",
        "Faire la VAT sur un point douteux.",
      ],
      legalRefs: [
        "NF C 18-510 - consignation et verification d'absence de tension.",
        "INRS - principes de mise en securite d'une installation electrique.",
      ],
      resourceVideos: [
        {
          title: "Chaine INRS France - selection risque electrique",
          description:
            "Selection officielle INRS sur YouTube pour completer le chapitre avec des rappels visuels sur le risque electrique, la consignation et la prevention.",
          url: "https://www.youtube.com/@INRSFrance/search?query=Risque%20%C3%A9lectrique",
          provider: "INRS France",
          ctaLabel: "Voir la selection YouTube",
        },
      ],
      practicalCase:
        "Exemple : avant remplacement d'un appareillage, l'equipe constate plusieurs departs similaires dans l'armoire. Le BC doit verrouiller l'identification avant toute consignation effective.",
      chapterImagePath: "/images/modules/electricite/consignation-vat-balisage.jpg",
      chapterImageAlt:
        "Illustration de consignation avec verification d'absence de tension et balisage de zone",
      visual: {
        title: "La chaine de consignation",
        subtitle: "Separer, condamner, identifier, verifier.",
        items: ["Separation", "Condamnation", "Identification", "VAT"],
        tone: "red",
        imagePath: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-consignation.svg",
      },
    },
    {
      id: "travaux-b1-b2",
      title: "7. Travaux avec B1, B1V, B2 et B2V",
      estimatedMinutes: 25,
      intro:
        "Les travaux electriques structures ne se conduisent pas comme une intervention ponctuelle. Ils supposent un cadre d'execution, une equipe et un pilotage securite adaptes.",
      content: [
        "Le B1 execute les operations confiees dans le respect strict des consignes, des limites de la zone de travail et des protections en place.",
        "Le B2 organise, dirige et surveille les travaux. Il veille a l'information de l'equipe, au respect des roles, a la coherence des gestes et au maintien des conditions de securite.",
        "Pendant les travaux, toute evolution non prevue, tout doute technique, toute anomalie ou tout ecart de procedure impose un arret ou une requalification de l'operation.",
        "Le B1 ou le B1V ne decide pas seul d'une adaptation de methode, d'une depose supplementaire, d'un essai non prevu ou d'une action sur un depart voisin. Son role consiste a executer dans le cadre fixe, a reformuler si besoin et a signaler sans delai tout ecart.",
        "Le B2 ou le B2V doit garder la maitrise du chantier jusqu'a la fin des travaux: briefing initial, surveillance de zone, verification des conditions de securite, coordination avec les autres intervenants et validation de la reprise ou de l'arret.",
        "Une équipe fiable ne cherche pas seulement à agir vite : elle agit juste. Le B2 prépare, brief, surveille et arbitre. Le B1 exécute, reformule si besoin et remonte immédiatement tout écart. Cette discipline collective est au cœur de la prévention.",
      ],
      deepDive: [
        "Une equipe efficace n'est pas une equipe rapide, mais une equipe qui partage la meme lecture du risque et du perimetre de travail. Le brief de debut et la surveillance active ont une vraie valeur preventive.",
        "Le B2 doit garder une vision d'ensemble : zone, voisinage, autres entreprises, outillage, protections, autorisations et point d'arret. Le B1 doit conserver une discipline d'execution sans s'ecarter du cadre fixe.",
      ],
      keyPoints: [
        "B1 execute selon consigne.",
        "B2 dirige et surveille.",
        "Tout ecart impose l'arret ou la requalification.",
      ],
      legalRefs: [
        "NF C 18-510 - execution et direction des travaux electriques en basse tension.",
      ],
      practicalCase:
        "Exemple : lors d'un remplacement de materiel, un equipement voisin non prevu apparait sous tension a proximite. Le B2 suspend l'action et redefinit la protection de zone avant reprise.",
      visual: {
        title: "Travail encadre",
        subtitle: "Un executant et un charge de travaux n'ont pas le meme role.",
        items: ["Consigne", "Execution", "Surveillance", "Arret si ecart"],
        tone: "blue",
        imagePath: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-travaux.svg",
      },
    },
    {
      id: "interventions-br",
      title: "8. Interventions générales avec BR",
      estimatedMinutes: 30,
      intro:
        "Le BR intervient en basse tension dans un cadre defini qui peut couvrir l'entretien, le depannage, les essais limites ou certaines remises en etat. Ce cadre ne doit jamais etre banalise.",
      content: [
        "L'intervention BR suppose une bonne identification de l'installation, une lecture claire du besoin et la maitrise de la limite entre intervention generale, travaux et depannage complexe.",
        "L'intervenant doit savoir quand une situation sort du cadre BR : multiplicite des circuits, voisinage non maitrise, besoin de travaux de structure, modification de schema ou absence de procedure.",
        "Le depannage ne doit jamais devenir une exploration hasardeuse. Il doit rester methodique, documente et proportionne a l'autorisation reelle de l'operateur.",
        "Le BR est l'une des habilitations les plus sensibles car il ne doit jamais etre compris comme un droit general de depannage. Sa valeur tient a la methode, aux limites et a la capacite a requalifier des que le contexte sort du cadre initial.",
        "Dans la pratique, le BR peut etre amene a realiser des operations d'entretien, de depannage, de mesurage, d'essai ou de remise en etat dans la limite des procedures definies. Ce cadre suppose une lecture rigoureuse du symptome, du materiel concerne, des energies presentes et des conditions de voisinage.",
        "Des que l'intervention suppose une transformation plus lourde, une modification structurelle, plusieurs circuits mal identifies ou une organisation de chantier, l'action ne releve plus du meme cadre et doit etre requalifiee.",
      ],
      deepDive: [
        "Le BR est souvent la zone la plus sensible en exploitation, car il se situe au croisement de la pression de remise en service, du besoin de diagnostic et du risque d'improvisation. La discipline de methode est donc essentielle.",
        "Toute intervention generale suppose une preparation, meme courte : verifier le contexte, l'accessibilite, l'absence d'anomalie majeure, le materiel de mesure, les protections et la possibilite de stopper si la situation se complique.",
      ],
      keyPoints: [
        "Le BR n'autorise pas tout depannage.",
        "Diagnostic et remise en etat doivent rester methodiques.",
        "La complexite doit faire requalifier l'action.",
      ],
      forbiddenPoints: [
        "Poursuivre un depannage dans une situation mal identifiee.",
        "Transformer une intervention en travaux sans requalification.",
      ],
      legalRefs: [
        "NF C 18-510 - interventions generales en basse tension.",
        "INRS - distinction entre intervention et travaux.",
      ],
      practicalCase:
        "Exemple : un technicien BR intervient sur un arret machine. En ouvrant le dossier, il constate une modification ancienne non documentee du cablage. L'intervention doit etre requalifiee et encadree autrement.",
      chapterImagePath:
        "/images/modules/electricite/maintenance-environnement-technique.jpg",
      chapterImageAlt:
        "Technicien intervenant en environnement technique devant une armoire electrique basse tension",
      visual: {
        title: "BR : intervenir sans improviser",
        subtitle: "Diagnostiquer, agir dans son cadre, stop si la situation se complique.",
        items: ["Identifier", "Diagnostiquer", "Intervenir", "Requalifier si besoin"],
        tone: "green",
        imagePath: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-br.svg",
      },
    },
    {
      id: "mesurages-essais-connexions",
      title: "9. Mesurages, essais, connexions / déconnexions et limites d'intervention",
      estimatedMinutes: 25,
      intro:
        "Les habilitations B1, B1V, B2, B2V, BR et BC ne donnent pas toutes les memes possibilites de mesurer, tester, connecter, deconnecter ou remettre en service. Ce chapitre sert a fixer une lecture plus serieuse des limites d'action.",
      content: [
        "Un mesurage ou un essai n'est jamais un geste neutre. Il suppose un materiel adapte, une methode connue, un objectif clair, des conditions de securite maitrisees et un titre d'habilitation compatible avec l'operation reelle.",
        "Les connexions et deconnexions en basse tension peuvent relever de cadres differents selon qu'il s'agit de travaux, d'interventions generales BR ou d'operations particulieres formellement preparees. Elles ne doivent jamais etre improvisees au motif qu'un circuit parait simple.",
        "La remise en service est une phase sensible: elle suppose la verification de la fin d'operation, le retrait des moyens temporaires, la coherence des condamnations, l'information des acteurs et la certitude qu'aucune personne n'est encore exposee.",
        "Le point cle de securite est de ne jamais confondre un geste techniquement possible avec un geste autorise dans le cadre de l'habilitation detenue.",
        "Les transitions dangereuses doivent être maîtrisées : mesure rapide pour voir, essai lancé sans coordination, reconnexion anticipée, remise sous énergie d'un sous-ensemble encore en cours de vérification. C'est souvent dans ces moments-là que le niveau d'exigence doit augmenter.",
        "La remise sous energie ne se decide jamais par automatisme. Elle suppose que la fin d'intervention soit confirmee, que les personnes soient hors zone, que les balisages provisoires aient ete traites selon la procedure et que la coordination entre charge de travaux, intervenant BR, BC et exploitant soit claire.",
        "Dans un parcours conforme a la norme, cette phase est traitee comme un chapitre a part entiere car c'est souvent a ce moment que surviennent les erreurs de communication, les remises en service trop rapides et les expositions residuelles.",
      ],
      deepDive: [
        "Sur le terrain, beaucoup d'ecarts naissent a ce moment-la: mesure faite 'rapidement', reconnexion pour essayer, remise en service anticipee ou essai lance sans coordination. Ce sont justement ces moments qui exigent le plus de rigueur.",
        "Le risque n'est pas seulement dans l'action initiale, mais aussi dans les transitions : vérifier, tester, reconnecter, remettre sous énergie.",
      ],
      keyPoints: [
        "Mesurer et essayer supposent un cadre precis.",
        "Connexion / deconnexion ne s'improvisent pas.",
        "La remise en service est une phase critique.",
      ],
      forbiddenPoints: [
        "Faire un essai hors cadre pour gagner du temps.",
        "Reconnecter sans verification complete de fin d'operation.",
      ],
      legalRefs: [
        "NF C 18-510 - interventions, essais, connexions, deconnexions et remise en service.",
        "INRS - limites des interventions BT generales et des operations electriques associees.",
      ],
      practicalCase:
        "Exemple : apres remplacement d'un appareillage, un intervenant souhaite remettre sous tension pour 'voir si ca tient'. Le cadre de remise en service doit etre revalide avant tout essai.",
      chapterImagePath: "/images/modules/electricite/tableau-coffret-bt.jpg",
      chapterImageAlt:
        "Tableau basse tension et appareillage sur lesquels les mesurages, essais et remises en energie exigent une methode stricte",
      visual: {
        title: "Verifier avant la remise en energie",
        subtitle: "Mesurer, tester, reconnecter et remettre sous tension exigent une methode.",
        items: ["Mesurage", "Essai", "Connexion", "Remise en service"],
        tone: "green",
        imagePath: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-remise-energie.svg",
      },
    },
    {
      id: "outils-protections",
      title: "10. Outils, EPI, EPC et environnement de travail",
      estimatedMinutes: 20,
      intro:
        "La maitrise du risque electrique repose aussi sur le choix des moyens de travail, l'etat des outils et l'usage correct des protections collectives et individuelles.",
      content: [
        "Les EPI et EPC ne remplacent jamais la preparation ni le respect du role, mais ils reduisent le risque dans le cadre d'une operation autorisee et correctement organisee.",
        "L'operateur doit verifier l'etat apparent de ses outils, de ses appareils de mesure, de ses moyens de condamnation et de ses protections avant de commencer.",
        "L'environnement de travail doit etre compatible avec l'operation : acces suffisant, absence d'encombrement dangereux, eclairage correct, pas d'humidite anormale ni de deterioration visible non traitee.",
        "Les appareils de mesure, verificateurs d'absence de tension, dispositifs de condamnation, gants, visieres, outillage isole et ecrans de protection doivent etre adaptes a l'usage prevu et a l'etat de l'installation. Un moyen degrade ou mal choisi peut lui-meme devenir une source d'accident.",
        "La logique normative reste constante: on ne compense jamais un mauvais cadre de travail par une simple accumulation d'EPI. Les protections collectives, l'organisation, la delimitation et la mise en securite restent prioritaires.",
      ],
      deepDive: [
        "Un materiel degrade, un outil non adapte ou un appareillage de mesure mal maitrise peuvent devenir eux-memes une source d'accident. La fiabilite des moyens est inseparable de la competence technique.",
        "Le bon usage des EPC doit etre privilegie. Les EPI viennent en complement, jamais comme pretexte pour accepter une situation initialement non conforme.",
      ],
      keyPoints: [
        "Verifier ses moyens avant d'agir.",
        "Les EPC priment sur les EPI.",
        "Un environnement degrade impose l'arret.",
      ],
      forbiddenPoints: [
        "Improviser avec un outil non prevu.",
        "Compter sur les seuls EPI pour corriger un cadre dangereux.",
      ],
      legalRefs: [
        "Code du travail - hierarchie des protections collectives et individuelles.",
        "NF C 18-510 - materiels, protections et environnement de travail.",
      ],
      practicalCase:
        "Exemple : avant intervention, l'operateur constate qu'un capot est manquant et que la zone est humide. L'action est reportee jusqu'au retour a des conditions compatibles.",
      chapterImagePath: "/elearning/b1-b1v-b2-b2v-br-bc/epi-intervention.jpg",
      chapterImageAlt:
        "Illustration des equipements de protection collective et individuelle en environnement electrique",
      visual: {
        title: "Preparer ses moyens",
        subtitle: "La securite passe aussi par le materiel et l'environnement.",
        items: ["Outils adaptes", "EPI / EPC", "Mesures fiables", "Zone conforme"],
        tone: "slate",
        imagePath: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-moyens.svg",
      },
    },
    {
      id: "anomalies-urgence",
      title: "11. Anomalies, écarts et situations d'urgence",
      estimatedMinutes: 20,
      intro:
        "La bonne reaction face a l'anomalie ne consiste pas a finir coute que coute, mais a proteger, stopper, alerter et reprendre seulement si le cadre est remaitrise.",
      content: [
        "Une odeur anormale, un échauffement, un bruit suspect, un capot manquant, un repère incohérent, un déclenchement répété ou un doute sur la consignation sont des signaux d'arrêt immédiat. Dans ces situations, l'objectif n'est pas de terminer plus vite, mais de revenir à un état maîtrisé.",
        "Un écart peut concerner le matériel, le document, le balisage, l'environnement ou le comportement d'un intervenant. Un bornier accessible, un départ non identifié, une protection retirée, une zone humide ou un appareil de mesure douteux modifient le niveau de risque et imposent une décision de sécurité.",
        "Le chargé de travaux B2 doit suspendre l'opération si les conditions prévues ne sont plus réunies. L'exécutant B1 doit signaler immédiatement l'écart. Le BR doit requalifier l'intervention si le dépannage devient une modification ou un travail organisé. Le BC doit refuser toute consignation incertaine.",
        "En cas d'accident électrique, la suppression du danger prime toujours. On ne touche pas une victime électrisée tant que l'installation n'est pas mise en sécurité ou que le danger n'est pas supprimé. L'alerte doit être rapide, précise et conforme aux consignes du site.",
        "L'urgence d'exploitation n'étend jamais le champ de l'habilitation. Elle impose au contraire une discipline accrue : arrêter, protéger, alerter, empêcher le suraccident, puis ne reprendre qu'après clarification du cadre technique et documentaire.",
        "Le départ de feu d'origine électrique doit être traité avec la même logique : alerter, couper l'énergie si cela est prévu et possible sans danger, respecter les consignes incendie du site et ne jamais utiliser un moyen d'extinction inadapté ou agir au-delà de son rôle.",
      ],
      deepDive: [
        "Les organisations qui banalisent les petits écarts finissent souvent par accepter des risques majeurs. Le réflexe professionnel consiste à identifier très vite le moment où l'opération sort du cadre acceptable.",
        "Une bonne gestion d'urgence repose sur une séquence stable : stopper, sécuriser, alerter, secourir sans suraccident, puis tracer. Cette séquence vaut pour les travaux, les interventions BR, les consignations et les remises en service.",
        "La traçabilité de l'anomalie protège l'équipe suivante. Un écart non écrit peut réapparaître au changement de poste, à la relève, lors d'une intervention d'une autre entreprise ou au moment de la remise sous tension.",
      ],
      keyPoints: [
        "Anomalie visible = arret.",
        "Le doute sur la consignation est critique.",
        "L'urgence ne cree pas d'autorisation supplementaire.",
      ],
      forbiddenPoints: [
        "Continuer avec un doute serieux sur l'etat electrique.",
        "Toucher une victime sans suppression du danger.",
      ],
      legalRefs: [
        "INRS - conduite a tenir en cas d'accident electrique.",
        "NF C 18-510 - traitement des situations anormales.",
      ],
      practicalCase:
        "Exemple : apres consignation, un voyant reste allume sur un sous-ensemble. L'equipe s'arrete immediatement et fait verifier l'etat reel de l'installation avant toute poursuite.",
      chapterImagePath: "/elearning/b1-b1v-b2-b2v-br-bc/danger-armoires-électriques.jpg",
      chapterImageAlt:
        "Conduite a tenir en cas d'anomalie, de doute electrique ou d'urgence sur une installation basse tension",
      visual: {
        title: "Savoir interrompre",
        subtitle: "Le bon reflexe est parfois d'arreter immediatement.",
        items: ["Stop", "Securiser", "Alerter", "Verifier avant reprise"],
        tone: "red",
        imagePath: "/elearning/bsbe/bsbe-urgence.svg",
      },
    },
    {
      id: "retour-experience",
      title: "12. Retour d'expérience, compte rendu et maintien des compétences",
      estimatedMinutes: 20,
      intro:
        "Une organisation mature ne s'arrete pas a l'execution technique. Elle apprend aussi des ecarts, des quasi-accidents, des difficultes de reperage et des problemes de coordination pour fiabiliser les operations suivantes.",
      content: [
        "Le compte rendu de fin d'opération permet de signaler les anomalies constatées, les écarts documentaires, les protections manquantes, les matériels dégradés et les points à corriger avant une future intervention. Il doit être factuel : matériel concerné, repère, circonstance, décision prise et action restante.",
        "Le retour d'expérience permet de faire progresser les procédures, le repérage et les consignes de chantier. Il participe directement à la prévention du risque électrique, car beaucoup d'accidents naissent d'un écart déjà observé mais jamais traité durablement.",
        "Le maintien des compétences ne se limite pas à mémoriser une définition. Il implique de conserver une discipline de préparation, de vérification et d'arrêt, y compris longtemps après la formation initiale. Les automatismes utiles doivent rester vivants : lecture du titre, analyse de la zone, vérification des documents, contrôle des moyens.",
        "Pour B1/B1V, le retour d'expérience consiste notamment à signaler les difficultés d'exécution, les accès dangereux, les consignes ambiguës et les protections déplacées. Pour B2/B2V, il porte aussi sur l'organisation de l'équipe, le briefing, les interfaces et les conditions de reprise.",
        "Pour BR, le compte rendu doit préciser le diagnostic, les limites rencontrées, les opérations effectuées et les contrôles avant remise en service. Pour BC, il doit permettre de comprendre comment la consignation a été réalisée, transmise, maintenue puis levée.",
        "Une compétence électrique fiable se voit dans la capacité à faire remonter un doute avant qu'il ne devienne un incident. Le professionnel ne cache pas une difficulté de repérage ou une incertitude documentaire : il la transforme en action de prévention.",
      ],
      deepDive: [
        "Les organisations qui capitalisent sur les retours terrain réduisent les ambiguïtés de rôle, les erreurs de repérage et les remises en service hasardeuses. C'est un levier de sécurité aussi important que la technique pure.",
        "Le maintien des compétences doit rester cohérent avec les missions réelles. Si le poste change, si de nouveaux équipements apparaissent, si le niveau de voisinage évolue ou si les interventions deviennent plus complexes, le besoin de formation, d'accompagnement ou de requalification doit être réexaminé.",
      ],
      keyPoints: [
        "Tracer les ecarts pour corriger durablement.",
        "Le retour d'experience fait partie de la prevention.",
        "Le maintien des competences est une demarche continue.",
      ],
      forbiddenPoints: [
        "Clore une operation sans signaler un ecart critique.",
        "Supposer qu'une formation unique suffit pour toujours.",
      ],
      legalRefs: [
        "Code du travail - prevention et amelioration continue des conditions de travail.",
        "INRS - maintien des competences et retour d'experience en prevention du risque electrique.",
      ],
      practicalCase:
        "Exemple : apres une consignation difficile a confirmer sur un tableau mal repere, l'equipe fait formaliser une correction documentaire au lieu de laisser le probleme en l'etat.",
      chapterImagePath:
        "/images/modules/electricite/document-chantier-autorisation.jpg",
      chapterImageAlt:
        "Support documentaire et cadre de tracabilite utilises pour formaliser un retour d'experience et corriger durablement un ecart",
      visual: {
        title: "Apprendre de chaque operation",
        subtitle: "Compte rendu, ecarts et maintien des reflexes.",
        items: ["Retour terrain", "Trace ecrite", "Correction", "Maintien des competences"],
        tone: "slate",
        imagePath: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-retour-experience.svg",
      },
    },
    {
      id: "documents-coordination",
      title: "13. Documents, autorisations et coordination de chantier",
      estimatedMinutes: 25,
      intro:
        "Les habilitations B1, B1V, B2, B2V, BR et BC prennent toute leur valeur dans une organisation documentee. Le travail electrique se securise aussi par les autorisations, plans, permis et consignes de chantier.",
      content: [
        "Les dossiers techniques, reperages, schemas, plans de prevention, permis ou autorisations d'acces permettent de confirmer le perimetre reel d'une operation electrique.",
        "Le charge de travaux, l'intervenant BR ou le charge de consignation doivent savoir quels documents verifier avant d'agir, lesquels mettre a jour et quels interlocuteurs alerter si une incoherence apparait.",
        "Sur un chantier ou dans un site en exploitation, la coordination avec les autres entreprises, l'encadrement local et les exploitants techniques est un point de securite a part entiere.",
        "Une operation techniquement juste peut devenir dangereuse si un autre intervenant remet une zone sous energie, retire un balisage, modifie un acces ou travaille sur un depart voisin sans coordination. La prevention electrique est aussi une prevention d'interface.",
        "Selon les situations, l'apprenant doit savoir reconnaitre le role des autorisations de travail, attestations de consignation, avis de fin de travail, plans de prevention, permis feu ou consignes locales d'exploitation. Ces documents ne remplacent pas la competence, mais ils structurent la securite collective.",
        "La tracabilite de fin d'operation est tout aussi importante: fin de travaux, levee de condamnation, restitution a l'exploitant, information de l'equipe et compte rendu des ecarts. Une operation correctement executee mais mal cloree peut preparer l'accident suivant.",
      ],
      deepDive: [
        "Une operation bien preparee sur le plan technique peut devenir dangereuse si la coordination est mauvaise : interface non signalee, acces concurrent, modification non tracee, ou mauvaise information sur l'etat electrique reel.",
        "Le professionnalisme attendu sur ces habilitations ne consiste pas seulement a savoir faire un geste technique, mais a maitriser la chaine complete : preparation, documents, consignes, execution, compte rendu et retour d'experience.",
      ],
      keyPoints: [
        "Documenter avant d'agir.",
        "Coordonner avec les autres intervenants.",
        "Tracer les ecarts et les reprises.",
      ],
      forbiddenPoints: [
        "Executer sans dossier ou repere fiable.",
        "Ignorer une interface chantier ou exploitation.",
        "Reprendre une installation sans verification documentaire.",
      ],
      legalRefs: [
        "Code du travail - coordination, prevention et organisation des interventions.",
        "NF C 18-510 - preparation des operations, designation des roles et support documentaire.",
      ],
      practicalCase:
        "Exemple : une equipe B2 doit intervenir sur un depart consigne, mais un sous-traitant voisin annonce une remise en service partielle de zone. L'operation est suspendue jusqu'a coordination et revalidation du cadre.",
      chapterImagePath: "/images/modules/electricite/document-chantier-autorisation.jpg",
      chapterImageAlt:
        "Exemple de document technique ou administratif utilise pour tracer une installation et son cadre de conformite",
      visual: {
        title: "Le chantier ne se gere pas seul",
        subtitle: "Plan, consigne et coordination font partie de la securite electrique.",
        items: [
          "Dossier technique",
          "Autorisation claire",
          "Coordination des acteurs",
          "Trace ecrite",
        ],
        tone: "slate",
        imagePath: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-coordination.svg",
      },
    },
    {
      id: "synthese",
      title: "14. Synthèse opérationnelle",
      estimatedMinutes: 20,
      intro:
        "La maitrise des habilitations B1, B1V, B2, B2V, BR et BC repose sur la clarte des roles, la preparation methodique et la rigueur face au risque electrique.",
      content: [
        "Le B1 exécute, le B2 dirige les travaux, le BR intervient dans son cadre autorisé et le BC structure la consignation. Chaque rôle doit rester lisible à tout moment, surtout lorsque plusieurs intervenants travaillent dans un même local, sur des départs proches ou dans une installation partiellement maintenue en service.",
        "Le cœur de la sécurité reste identique : identifier l'ouvrage, préparer l'opération, délimiter la zone, vérifier l'état électrique, agir dans son périmètre, puis stopper et alerter à la moindre dérive. Ce raisonnement vaut autant pour une opération simple que pour un chantier structuré.",
        "Une opération électrique sûre n'est jamais basée sur l'habitude seule. Elle repose sur la méthode, le respect des symboles d'habilitation, la qualité documentaire, la cohérence du repérage, la fiabilité des protections et l'organisation des responsabilités.",
        "Le doute, l'anomalie, la complexité non prévue ou l'urgence d'exploitation imposent une requalification de l'action. La bonne décision peut être de ne pas poursuivre, même si l'arrêt génère une contrainte de production.",
        "Pour B1/B1V, la priorité est de rester dans la tâche confiée et de signaler tout écart. Pour B2/B2V, elle est d'organiser, de briefer, de surveiller les interfaces et de garantir que l'équipe travaille dans le cadre prévu. Pour BR, elle est de ne pas transformer une intervention en travaux. Pour BC, elle est de garantir une consignation fiable, compréhensible et traçable.",
        "Le parcours doit laisser un réflexe simple : aucune intervention électrique ne se poursuit sur une hypothèse. Si l'état réel n'est pas confirmé, si le document ne correspond pas au terrain, si le voisinage n'est pas maîtrisé ou si le rôle n'est pas clair, l'opération s'arrête.",
      ],
      deepDive: [
        "La compétence finale n'est pas seulement de connaître une définition. Elle consiste à garder une lecture sécurité du travail électrique, à savoir ce qui est permis, ce qui ne l'est pas et à quel moment changer de cadre.",
        "Le professionnel fiable est celui qui sait exécuter correctement, mais aussi préparer, coordonner, interrompre et faire remonter les écarts sans banaliser le risque.",
        "Dans l'esprit de la NF C 18-510, l'habilitation n'est pas une autorisation générale. Elle reste attachée à une mission, un environnement, des limites d'approche, des moyens adaptés et une organisation formalisée.",
      ],
      keyPoints: [
        "Un role clair, une operation claire.",
        "La consignation et la preparation sont centrales.",
        "La securite prime toujours sur la production.",
        "Le doute impose l'arret et la verification.",
      ],
      legalRefs: [
        "Code du travail - prevention du risque electrique.",
        "NF C 18-510 - execution, intervention, travaux et consignation en basse tension.",
        "INRS - maintien des reflexes de securite electrique.",
      ],
      practicalCase:
        "Exemple : un chantier electrique prepare glisse vers une modification de schema non prevue. Le bon choix est de suspendre et de redocumenter l'operation avant reprise.",
      chapterImagePath: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-synthese.svg",
      chapterImageAlt:
        "Schéma de synthèse des réflexes à conserver pour préparer, exécuter ou interrompre une opération électrique en basse tension",
      visual: {
        title: "Les 4 reflexes a retenir",
        subtitle: "Identifier, preparer, respecter son role, arreter si doute.",
        items: ["Identifier", "Preparer", "Respecter son role", "Arreter si doute"],
        tone: "blue",
        imagePath: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-synthese.svg",
      },
    },
  ],
};
