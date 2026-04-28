import { ModuleContent } from "./module-types";

export const b1b2brbcModuleContent: ModuleContent = {
  title: "B1 / B1V / B2 / B2V / BR / BC - Travaux, interventions et consignation en basse tension",
  shortTitle: "B1 / B1V / B2 / B2V / BR / BC",
  subtitle:
    "Parcours e-learning de preparation theorique destine aux electriciens et personnels techniques appeles a executer, encadrer, consigner ou intervenir en basse tension dans un cadre professionnel formalise, complete par une journee presentielle de validation et d'application.",
  duration: "8 h 00 a 11 h 00 de theorie guidee",
  deliveryFormat: "E-learning guide + quiz + journee presentielle d'application",
  level: "Avance",
  objective:
    "Comprendre les symboles B1, B1V, B2, B2V, BR et BC, distinguer les roles et responsabilites, preparer une operation en securite, maitriser les principes de consignation, d'intervention et de travaux en basse tension, identifier les ecarts critiques et adopter les bons reflexes face aux anomalies ou a l'urgence.",
  audience:
    "Electriciens, techniciens de maintenance, responsables techniques et personnels amenes a executer des travaux, conduire une intervention generale, preparer une consignation ou assurer un role d'encadrement electrique en basse tension.",
  certificationNote:
    "Ce parcours constitue la base theorique. La delivrance de l'habilitation releve de l'employeur apres evaluation des acquis, verification de l'adequation entre les taches reelles et le niveau retenu, ainsi qu'apres mise en situation pratique adaptee et sequence presentielle d'application.",
  heroBadge: "Habilitation electrique",
  finalMessage:
    "Le parcours B1 / B1V / B2 / B2V / BR / BC doit conduire a une logique de securite exigeante : preparation, verification, respect du role attribue, rigueur documentaire et refus de toute improvisation sur une installation electrique.",
  quizCtaLabel: "Passer au quiz B1 / B1V / B2 / B2V / BR / BC",
  sections: [
    {
      id: "cadre-general",
      title: "1. Cadre des habilitations B1, B1V, B2, B2V, BR et BC",
      estimatedMinutes: 25,
      intro:
        "La NF C 18-510 ne presente pas les symboles B1, B1V, B2, B2V, BR et BC comme de simples etiquettes. Elle les rattache a des fonctions precises, a une chaine de decision claire et a une habilitation employeur qui doit correspondre exactement aux operations confiees.",
      content: [
        "Le B1 designe l'executant electricien en basse tension. Le B1V designe cet executant lorsqu'il agit dans un environnement de voisinage renforcant les exigences de securite. Le B2 designe le charge de travaux, c'est-a-dire la personne qui prepare, organise et dirige effectivement les travaux electriques confies a son equipe. Le B2V designe ce charge de travaux lorsqu'il intervient en voisinage dans les conditions prevues par l'organisation et la norme.",
        "Le BR designe le charge d'intervention en basse tension pour les interventions generales autorisees. Il se situe dans un cadre specifique d'entretien, de depannage, de mesure, d'essai limite ou de remise en etat. Le BC est le charge de consignation: il effectue ou fait effectuer les operations de separation, condamnation, identification, verification d'absence de tension et, lorsque cela est requis, mise a la terre et en court-circuit.",
        "La norme insiste sur la definition des personnes: employeur, charge de travaux, charge d'intervention, charge de consignation, executant, surveillant de securite electrique. Cette architecture n'est pas theorique. Elle structure la prevention du risque electrique parce que chacun doit savoir ce qu'il decide, ce qu'il controle et ce qu'il execute.",
        "L'habilitation reste une reconnaissance employeur. Elle ne se deduit ni d'un diplome, ni de l'anciennete, ni d'une habitude de site. Un salarie peut posseder plusieurs symboles si ses missions le justifient, mais chaque symbole garde ses limites propres. Cumuler des titres ne signifie jamais melanger les roles pendant une operation sans clarification.",
        "La partie e-learning prepare la theorie, mais la delivrance du titre d'habilitation releve d'une verification employeur complete, appuyee sur une evaluation pratique et sur l'adequation entre les taches reelles et le symbole retenu.",
        "Le Code du travail et la NF C 18-510 encadrent cette logique: l'operation d'ordre electrique doit etre organisee, les personnes doivent etre formees et habilitees lorsque cela est requis, et l'employeur doit definir les missions reelles, les consignes et les moyens adaptes. Le titre d'habilitation n'est donc jamais une simple formalite administrative.",
        "Pour un apprenant, il est essentiel de retenir que les symboles ne decrivent pas seulement un niveau technique. Ils decrivent surtout un perimetre d'action: qui prepare, qui dirige, qui execute, qui consigne, qui intervient et dans quelles limites precises.",
        "Le professionnel fiable sait donc dire non a un glissement de mission. Un B1 ou un B1V n'agit pas comme un B2 ou un B2V. Un BR ne se transforme pas en BC parce qu'il faut aller vite. Et une operation non preparee doit etre stoppee meme si le besoin de remise en service est fort.",
      ],
      deepDive: [
        "L'introduction de la norme insiste sur l'unicite, la coherence et la maitrise de l'information. Dans la pratique, cela veut dire qu'une operation electrique ne doit jamais reposer sur des consignes floues, des transmissions orales contradictoires ou des suppositions de terrain.",
        "Le vrai professionnalisme ne consiste pas a 'se debrouiller'. Il consiste a tenir son role, a connaitre sa limite et a exiger une requalification des que la situation ne correspond plus au cadre prevu.",
        "Une formation de qualite doit permettre a chaque technicien de se positionner correctement dans l'organisation de securite, pas seulement de reciter des definitions.",
      ],
      keyPoints: [
        "B1 / B1V = executant electricien en BT, avec ou sans voisinage selon l'attribut.",
        "B2 / B2V = charge de travaux en BT, avec ou sans voisinage selon l'attribut.",
        "BR = charge d'intervention en BT.",
        "BC = charge de consignation.",
        "Chaque symbole correspond a un role et a des limites propres.",
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
          title: "Webinaire INRS - Comment choisir les habilitations electriques ?",
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
        title: "Quatre fonctions, quatre responsabilites",
        subtitle: "Executer, diriger, intervenir, consigner: la norme fixe une frontiere nette entre ces roles.",
        items: ["B1 / B1V executant", "B2 / B2V charge de travaux", "BR intervention generale", "BC consignation"],
        tone: "blue",
        imagePath: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-roles.svg",
        imageAlt: "Illustration des roles B1 B1V B2 B2V BR BC et de leurs responsabilites distinctes",
      },
    },
    {
      id: "roles-responsabilites",
      title: "2. Roles, responsabilites et chaine de decision",
      estimatedMinutes: 25,
      intro:
        "Le risque electrique ne se maitrise pas seulement par le geste technique. Il se maitrise d'abord par une organisation claire, des documents fiables et une chaine de responsabilite que chacun comprend sans ambiguite.",
      content: [
        "L'employeur definit les missions, les moyens, les procedures, les equipements de protection et les niveaux d'habilitation adaptes. Il doit s'assurer que le personnel dispose d'une formation adequate, d'une information maitrisee et d'une organisation compatible avec le risque electrique reel du site.",
        "Le charge de travaux B2 prepare l'intervention, delimite la zone, verifie le cadre de securite, organise le briefing, pilote l'equipe et suspend l'operation si les conditions prevues ne sont plus reunies. L'executant B1 applique les consignes, reste dans le perimetre defini et remonte immediatement tout ecart, doute ou evenement non prevu.",
        "Le charge d'intervention BR prepare et conduit l'intervention generale dans la limite de son cadre. Le charge de consignation BC garantit la fiabilite de la mise en securite electrique. Selon les configurations, d'autres fonctions peuvent intervenir: charge d'exploitation, surveillant de securite electrique, representant de l'entreprise exploitante ou donneur d'ordre. Le fil conducteur reste le meme: une personne sait, une personne autorise, une personne dirige, une personne execute.",
        "Cette chaine s'appuie sur des documents et des informations claires: instructions, analyses de risque, autorisations, attestations, certificats, reperages, procedures de suivi et de controle. La norme insiste sur ce point car une operation mal informee produit des erreurs d'identification, des glissements de mission et des illusions de securite.",
        "Dans les parcours les plus serieux, cette partie ne se limite pas a des definitions. Elle montre comment s'articulent concretement le titre d'habilitation, l'autorisation de travail, le balisage, la consignation, le briefing d'equipe, le compte rendu de fin d'intervention et la remise en service.",
        "L'apprenant doit aussi savoir qu'une information fiable est unique, coherente et maitrisee. Si le schema, l'etiquetage, le dossier d'intervention ou l'instruction du jour se contredisent, la bonne reaction n'est pas d'interpreter au plus vite: c'est de suspendre et de faire clarifier.",
        "Un bon cours ne dit pas seulement 'faites attention'. Il montre comment une mission se prepare, comment elle se transmet et comment on sait qui a la main a chaque etape.",
        "La requalification de l'operation fait partie de cette maturite. Si un depannage simple revele finalement des travaux a organiser, ou si un chantier prepare se heurte a un voisinage non maitrise, l'operation n'est pas poursuivie par habitude: elle est stoppee puis redefinie.",
      ],
      deepDive: [
        "Beaucoup d'accidents trouvent leur origine dans une situation ou tout le monde croit que 'quelqu'un d'autre' a verifie. Le role de chacun doit donc etre explicite, assume et tracable.",
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
        "NF C 18-510 - introduction : unicite, coherence et maitrise de l'information.",
        "NF C 18-510 - article 3 : definitions des charges et de l'executant.",
        "Code du travail - adequation entre competence, poste et risque electrique.",
      ],
      practicalCase:
        "Exemple : lors d'une intervention sur une machine, un conducteur supplementaire non documente est decouvert. Le BR suspend l'action, informe l'organisation et la mission est requalifiee avant reprise.",
      chapterImagePath:
        "/images/modules/electricite/document-chantier-autorisation.jpg",
      chapterImageAlt:
        "Document technique et cadre d'autorisation utilises pour organiser une operation electrique et clarifier les responsabilites",
      visual: {
        title: "Une chaine de responsabilite lisible",
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
        "La lettre B renvoie a la basse tension. Les chiffres et lettres associes precisent la nature de l'operation ou du role: executant, charge de travaux, intervention, consignation. Le symbole n'est donc pas un simple intitule administratif: il fixe un cadre concret d'action.",
        "Les attributs et indices doivent etre lus avec rigueur. Un B1 n'est pas un B2. Un BR n'est pas un BC. L'attribut V renvoie a une situation de voisinage qui renforce les exigences de securite mais ne transforme jamais un symbole en autre chose que ce qu'il est. Un B1V n'est pas un BR et un BRV n'est pas un charge de consignation.",
        "La lecture correcte des symboles evite l'un des ecarts les plus courants du terrain: penser qu'une habitude, un niveau technique ou une urgence de production permettent d'elargir ce que le titre autorise. La norme fait exactement l'inverse: elle borne les missions pour eviter les derives.",
        "Le voisinage doit etre pense des la preparation. Il conditionne les ecrans, obstacles, capotages, delimitations de zone, protections collectives et parfois la necessite de changer de methode ou de suspendre l'operation. Un symbole avec voisinage n'est jamais un 'plus pratique'; c'est un cadre plus exigeant.",
        "L'attribut V ne donne pas un droit supplementaire de depannage ou de travaux. Il signifie qu'une operation est realisee dans des conditions de voisinage qui imposent une analyse plus rigoureuse, des protections renforcees et un encadrement adapte.",
        "Le symbole BC ne doit pas etre confondu avec un role general de chantier. Il vise la consignation. Le symbole BR ne doit pas etre confondu avec une autorisation generale de modifier librement une installation. Il couvre des interventions generales definies, methodiques et limitees.",
        "Une lecture professionnelle des symboles implique enfin de rapprocher le titre, la mission, le materiel, l'environnement et la procedure. Si l'un de ces elements ne colle plus, le bon reflexe n'est pas d'interpreter au large. C'est de s'arreter et de requalifier.",
      ],
      deepDive: [
        "Les meilleurs supports rendent les symboles tres lisibles, mais ils restent souvent trop courts sur la consequence operationnelle de chaque caractere. Il faut faire le lien entre le code, le geste et la limite.",
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
        "Utiliser le voisinage comme pretexte pour agir au-dela du role attribue.",
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
        items: ["B = basse tension", "1 ou 2 = executer ou diriger", "R / C = intervenir ou consigner", "V = voisinage plus exigeant"],
        tone: "green",
        imagePath: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-symboles.svg",
        imageAlt: "Illustration de lecture des symboles B1 B1V B2 B2V BR BC et de l'attribut V",
      },
    },
    {
      id: "domaines-zones-pnst",
      title: "4. Domaines de tension, voisinage et pieces nues sous tension",
      estimatedMinutes: 25,
      intro:
        "Les habilitations B1, B1V, B2, B2V, BR et BC s'exercent dans un environnement ou la notion de voisinage, de PNST et de distances de securite change concretement la facon de preparer et d'executer une operation.",
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
        "Dans les parcours trop superficiels, le voisinage est souvent reduit a une definition. Sur le terrain, c'est pourtant un point cle de decision: peut-on encore agir, et sous quel cadre de securite ?",
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
      title: "5. Preparation des travaux electriques",
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
      title: "6. Consignation et verification d'absence de tension",
      estimatedMinutes: 30,
      intro:
        "La consignation est un processus de securite, pas une simple formalite. Elle doit etre rigoureuse, verifiable et comprise par tous les acteurs.",
      content: [
        "La consignation repose sur une succession d'etapes : separation, condamnation, identification, verification d'absence de tension puis, si necessaire selon le domaine et l'organisation, mise a la terre et en court-circuit.",
        "Le charge de consignation BC garantit la fiabilite du processus. Il doit s'assurer que le circuit concerne est bien celui qui est separe, identifie et rendu indisponible a toute remise sous tension intempestive.",
        "La verification d'absence de tension n'est jamais presumee. Elle doit etre faite avec un materiel adapte, selon une methode connue et sur le bon point de l'installation.",
        "Une vraie formation BC doit aussi insister sur les ecueils classiques: plusieurs departs semblables dans une meme armoire, reperage incomplet, condamnation mal visible, essai de remise en service concurrent ou confiance excessive dans un simple voyant d'etat. C'est souvent la que l'illusion de securite s'installe.",
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
        "Une formation solide doit faire sentir la difference entre une equipe qui agit vite et une equipe qui agit juste. Le B2 prepare, brief, surveille et arbitre. Le B1 execute, reformule si besoin et remonte immediatement tout ecart. Cette discipline collective est au coeur de la prevention.",
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
      title: "8. Interventions generales avec BR",
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
      title: "9. Mesurages, essais, connexions / deconnexions et limites d'intervention",
      estimatedMinutes: 25,
      intro:
        "Les habilitations B1, B1V, B2, B2V, BR et BC ne donnent pas toutes les memes possibilites de mesurer, tester, connecter, deconnecter ou remettre en service. Ce chapitre sert a fixer une lecture plus serieuse des limites d'action.",
      content: [
        "Un mesurage ou un essai n'est jamais un geste neutre. Il suppose un materiel adapte, une methode connue, un objectif clair, des conditions de securite maitrisees et un titre d'habilitation compatible avec l'operation reelle.",
        "Les connexions et deconnexions en basse tension peuvent relever de cadres differents selon qu'il s'agit de travaux, d'interventions generales BR ou d'operations particulieres formellement preparees. Elles ne doivent jamais etre improvisees au motif qu'un circuit parait simple.",
        "La remise en service est une phase sensible: elle suppose la verification de la fin d'operation, le retrait des moyens temporaires, la coherence des condamnations, l'information des acteurs et la certitude qu'aucune personne n'est encore exposee.",
        "Le point cle de securite est de ne jamais confondre un geste techniquement possible avec un geste autorise dans le cadre de l'habilitation detenue.",
        "Les contenus les plus utiles du secteur insistent sur les transitions dangereuses: mesure rapide pour voir, essai lance sans coordination, reconnexion anticipee, remise sous energie d'un sous-ensemble encore en cours de verification. C'est souvent dans ces moments-la que le niveau d'exigence doit augmenter.",
        "La remise sous energie ne se decide jamais par automatisme. Elle suppose que la fin d'intervention soit confirmee, que les personnes soient hors zone, que les balisages provisoires aient ete traites selon la procedure et que la coordination entre charge de travaux, intervenant BR, BC et exploitant soit claire.",
        "Dans un parcours conforme a la norme, cette phase est traitee comme un chapitre a part entiere car c'est souvent a ce moment que surviennent les erreurs de communication, les remises en service trop rapides et les expositions residuelles.",
      ],
      deepDive: [
        "Sur le terrain, beaucoup d'ecarts naissent a ce moment-la: mesure faite 'rapidement', reconnexion pour essayer, remise en service anticipee ou essai lance sans coordination. Ce sont justement ces moments qui exigent le plus de rigueur.",
        "Une formation avancee doit faire comprendre que le risque n'est pas seulement dans l'action initiale, mais aussi dans les transitions: verifier, tester, reconnecter, remettre sous energie.",
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
      chapterImagePath: "/elearning/h0b0/epi-epc.png",
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
      title: "11. Anomalies, ecarts et situations d'urgence",
      estimatedMinutes: 20,
      intro:
        "La bonne reaction face a l'anomalie ne consiste pas a finir coute que coute, mais a proteger, stopper, alerter et reprendre seulement si le cadre est remaitrise.",
      content: [
        "Une odeur anormale, un echauffement, un bruit suspect, un capot manquant, un repere incoherent, un declenchement repete ou un doute sur la consignation sont des signaux d'arret immediat.",
        "En cas d'accident electrique, la suppression du danger prime toujours. On ne devient pas une seconde victime pour porter secours.",
        "L'urgence n'etend jamais le champ de l'habilitation. Elle impose au contraire une discipline accrue et le respect strict des gestes autorises.",
      ],
      deepDive: [
        "Les organisations qui banalisaient les petits ecarts finissent souvent par accepter des risques majeurs. Le reflexe professionnel consiste a identifier tres vite le moment ou l'operation sort du cadre acceptable.",
        "Une bonne gestion d'urgence repose sur une sequence stable : stop, securiser, alerter, secourir sans suraccident, puis tracer.",
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
      chapterImagePath: "/elearning/h0b0/conduite-tenir.png",
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
      title: "12. Retour d'experience, compte rendu et maintien des competences",
      estimatedMinutes: 20,
      intro:
        "Une organisation mature ne s'arrete pas a l'execution technique. Elle apprend aussi des ecarts, des quasi-accidents, des difficultes de reperage et des problemes de coordination pour fiabiliser les operations suivantes.",
      content: [
        "Le compte rendu de fin d'operation permet de signaler les anomalies constatees, les ecarts documentaires, les protections manquantes, les materiels degrades et les points a corriger avant une future intervention.",
        "Le retour d'experience permet de faire progresser les procedures, le reperage et les consignes de chantier. Il participe directement a la prevention du risque electrique.",
        "Le maintien des competences ne se limite pas a memoriser une definition. Il implique de conserver une discipline de preparation, de verification et d'arret, y compris longtemps apres la formation initiale.",
      ],
      deepDive: [
        "Les organisations qui capitalisent sur les retours terrain reduisent les ambiguities de role, les erreurs de reperage et les remises en service hasardeuses. C'est un levier de securite aussi important que la technique pure.",
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
      id: "synthese",
      title: "13. Synthese operationnelle",
      estimatedMinutes: 20,
      intro:
        "La maitrise des habilitations B1, B1V, B2, B2V, BR et BC repose sur la clarte des roles, la preparation methodique et la rigueur face au risque electrique.",
      content: [
        "Le B1 execute, le B2 dirige les travaux, le BR intervient dans son cadre autorise et le BC structure la consignation. Chaque role doit rester lisible a tout moment.",
        "Le coeur de la securite reste identique : identifier, preparer, delimiter, verifier, agir dans son perimetre, puis stopper et alerter a la moindre derive.",
        "Une operation electrique sure n'est jamais basee sur l'habitude seule. Elle repose sur la methode, le respect des symboles d'habilitation, la qualite documentaire et l'organisation.",
        "Le doute, l'anomalie, la complexite non prevue ou l'urgence d'exploitation imposent une requalification de l'action. La bonne decision peut etre de ne pas poursuivre.",
      ],
      deepDive: [
        "La competence finale n'est pas seulement de connaitre une definition. Elle consiste a garder une lecture securite du travail electrique, a savoir ce qui est permis, ce qui ne l'est pas et a quel moment changer de cadre.",
        "Le professionnel fiable est celui qui sait executer correctement, mais aussi preparer, coordonner, interrompre et faire remonter les ecarts sans banaliser le risque.",
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
      chapterImagePath: "/elearning/h0b0/reflexes-h0b0.png",
      chapterImageAlt:
        "Schema de synthese des reflexes a conserver pour preparer, executer ou interrompre une operation electrique en basse tension",
      visual: {
        title: "Les 4 reflexes a retenir",
        subtitle: "Identifier, preparer, respecter son role, arreter si doute.",
        items: ["Identifier", "Preparer", "Respecter son role", "Arreter si doute"],
        tone: "blue",
        imagePath: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-synthese.svg",
      },
    },
    {
      id: "documents-coordination",
      title: "14. Documents, autorisations et coordination de chantier",
      estimatedMinutes: 25,
      intro:
        "Les habilitations B1, B1V, B2, B2V, BR et BC prennent toute leur valeur dans une organisation documentee. Le travail electrique se securise aussi par les autorisations, plans, permis et consignes de chantier.",
      content: [
        "Les dossiers techniques, reperages, schemas, plans de prevention, permis ou autorisations d'acces permettent de confirmer le perimetre reel d'une operation electrique.",
        "Le charge de travaux, l'intervenant BR ou le charge de consignation doivent savoir quels documents verifier avant d'agir, lesquels mettre a jour et quels interlocuteurs alerter si une incoherence apparait.",
        "Sur un chantier ou dans un site en exploitation, la coordination avec les autres entreprises, l'encadrement local et les exploitants techniques est un point de securite a part entiere.",
        "Le contenu doit aussi faire comprendre qu'une operation techniquement juste peut devenir dangereuse si un autre intervenant remet une zone sous energie, retire un balisage, modifie un acces ou travaille sur un depart voisin sans coordination. La prevention electrique est aussi une prevention d'interface.",
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
  ],
};
