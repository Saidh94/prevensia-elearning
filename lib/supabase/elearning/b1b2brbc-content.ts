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
        "Le B1 désigne l'exécutant électricien en basse tension. Le B1V désigne cet exécutant lorsqu'il agit dans un environnement de voisinage renforcant les exigences de sécurité. Le B2 désigne le chargé de travaux, c'est-a-dire la personne qui prépare, organisé et dirige effectivement les travaux électriques confies a son équipe. Le B2V désigne ce chargé de travaux lorsqu'il intervient en voisinage dans les conditions prévues par l'organisation et la norme.",
        "Le BR désigne le chargé d'intervention en basse tension pour les interventions générales autorisées. Il se situe dans un cadre spécifique d'entretien, de dépannage, de mesure, d'essai limite ou de remise en etat. Le BC est le chargé de consignation: il effectue ou fait effectuer les opérations de séparation, condamnation, identification, vérification d'absence de tension et, lorsque cela est requis, mise à la terre et en court-circuit.",
        "La norme insiste sur la définition des personnes: employeur, chargé de travaux, chargé d'intervention, chargé de consignation, exécutant, surveillant de sécurité électrique. Cette architecture n'est pas théorique. Elle structure la prévention du risque électrique parce que chacun doit savoir ce qu'il decide, ce qu'il contrôle et ce qu'il exécuté.",
        "L'habilitation reste une reconnaissance employeur. Elle ne se déduit ni d'un diplôme, ni de l'anciennete, ni d'une habitude de site. Un salarié peut posséder plusieurs symboles si ses missions le justifient, mais chaque symbole garde ses limites propres. Cumuler des titres ne signifie jamais mélanger les rôles pendant une opération sans clarification.",
        "La partie e-learning prépare la théorie, mais la délivrance du titre d'habilitation releve d'une vérification employeur complete, appuyee sur une évaluation pratique et sur l'adéquation entre les tâches réelles et le symbole retenu.",
        "Le Code du travail et la NF C 18-510 encadrent cette logique: l'opération d'ordre électrique doit être organisee, les personnes doivent être formees et habilitees lorsque cela est requis, et l'employeur doit définir les missions réelles, les consignes et les moyens adaptes. Le titre d'habilitation n'est donc jamais une simple formalite administrative.",
        "Pour un apprenant, il est essentiel de retenir que les symboles ne decrivent pas seulement un niveau technique. Ils decrivent surtout un périmètre d'action: qui prépare, qui dirige, qui exécuté, qui consigne, qui intervient et dans quelles limites précises.",
        "Le professionnel fiable sait donc dire non a un glissement de mission. Un B1 ou un B1V n'agit pas comme un B2 ou un B2V. Un BR ne se transforme pas en BC parce qu'il faut aller vite. Et une opération non preparee doit être stoppee meme si le besoin de remise en service est fort.",
      ],
      deepDive: [
        "L'introduction de la norme insiste sur l'unicité, la cohérence et la maîtrise de l'information. Dans la pratique, cela veut dire qu'une opération électrique ne doit jamais reposer sur des consignes floues, des transmissions orales contradictoires ou des suppositions de terrain.",
        "Le vrai professionnalisme ne consiste pas a 'se debrouiller'. Il consiste a tenir son rôle, a connaître sa limite et a exiger une requalification des que la situation ne correspond plus au cadre prevu.",
        "Chaque technicien doit savoir se positionner correctement dans l'organisation de sécurité, pas seulement réciter des définitions.",
      ],
      keyPoints: [
        "B1 / B1V = exécutant électricien en BT, avec ou sans voisinage selon l'attribut.",
        "B2 / B2V = chargé de travaux en BT, avec ou sans voisinage selon l'attribut.",
        "BR = chargé d'intervention en BT.",
        "BC = chargé de consignation.",
        "Chaque symbole correspond a un rôle et a des limites propres.",
      ],
      forbiddenPoints: [
        "Confondre experience terrain et droit d'agir.",
        "Meler les fonctions d'exécution, de direction, d'intervention et de consignation sans cadre clair.",
        "Présenter la formation seule comme une habilitation definitive.",
      ],
      legalRefs: [
        "NF C 18-510 - article 3 : définitions des personnes, rôles et habilitation employeur.",
        "Code du travail - organisation des opérations électriques et obligation d'habilitation lorsque requise.",
        "INRS - prévention du risque électrique et articulation des fonctions sur le terrain.",
      ],
      resourceVideos: [
        {
          title: "Webinaire INRS - Comment choisir les habilitations électriques ?",
          description:
            "Support officiel très utile pour vérifier les frontieres entre B1, B2, BR, BC et la logique de choix du symbole.",
          url: "https://www.inrs.fr/media.html?refINRS=Anim-184",
          provider: "INRS",
          ctaLabel: "Voir le webinaire INRS",
        },
      ],
      practicalCase:
        "Exemple : un technicien assure habituellement du dépannage en BR. On lui demande soudain d'organiser un chantier avec plusieurs opérateurs et une mise hors tension preparee. La mission ne releve plus du meme cadre et doit être requalifiée avant toute action.",
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
        "Le risque électrique ne se maîtrise pas seulement par le geste technique. Il se maîtrise d'abord par une organisation claire, des documents fiables et une chaine de responsabilité que chacun comprend sans ambiguite.",
      content: [
        "L'employeur définit les missions, les moyens, les procédures, les équipements de protection et les niveaux d'habilitation adaptes. Il doit s'assurer que le personnel dispose d'une formation adequate, d'une information maîtrisée et d'une organisation compatible avec le risque électrique reel du site.",
        "Le chargé de travaux B2 prépare l'intervention, délimite la zone, vérifié le cadre de sécurité, organisé le briefing, pilote l'équipe et suspend l'opération si les conditions prévues ne sont plus reunies. L'exécutant B1 applique les consignes, reste dans le périmètre défini et remonte immédiatement tout écart, doute ou evenement non prevu.",
        "Le chargé d'intervention BR prépare et conduit l'intervention générale dans la limite de son cadre. Le chargé de consignation BC garantit la fiabilité de la mise en sécurité électrique. Selon les configurations, d'autres fonctions peuvent intervenir: charge d'exploitation, surveillant de sécurité électrique, représentant de l'entreprise exploitante ou donneur d'ordre. Le fil conducteur reste le meme: une personne sait, une personne autorise, une personne dirige, une personne exécuté.",
        "Cette chaine s'appuie sur des documents et des informations claires: instructions, analyses de risque, autorisations, attestations, certificats, reperages, procédures de suivi et de contrôle. La norme insiste sur ce point car une opération mal informee produit des erreurs d'identification, des glissements de mission et des illusions de sécurité.",
        "Dans les parcours les plus serieux, cette partie ne se limite pas a des définitions. Elle montre comment s'articulent concrètement le titre d'habilitation, l'autorisation de travail, le balisage, la consignation, le briefing d'équipe, le compte rendu de fin d'intervention et la remise en service.",
        "L'apprenant doit aussi savoir qu'une information fiable est unique, cohérente et maîtrisée. Si le schéma, l'etiquetage, le dossier d'intervention ou l'instruction du jour se contredisent, la bonne réaction n'est pas d'interpreter au plus vite: c'est de suspendre et de faire clarifier.",
        "Une mission électrique sure se prépare avec une information exploitable: qui intervient, sur quel matériel, dans quelle zone, avec quelle autorisation, quelles protections, quels points d'arret et quelles conditions de reprise.",
        "La requalification de l'opération fait partie de cette maturite. Si un dépannage simple revele finalement des travaux a organiser, ou si un chantier prépare se heurte a un voisinage non maîtrise, l'opération n'est pas poursuivie par habitude: elle est stoppee puis redefinie.",
      ],
      deepDive: [
        "Beaucoup d'accidents trouvent leur origine dans une situation ou tout le monde croit que 'quelqu'un d'autre' a vérifié. Le rôle de chacun doit donc être explicite, assume et traçable.",
        "La chaine de décision doit rester compatible avec le terrain: quand un matériel est mal repère, quand un départ voisin apparait sous tension ou quand un document n'est plus cohérent, le processus de sécurité reprend la main sur la production.",
      ],
      keyPoints: [
        "L'employeur organisé et habilite.",
        "Le B2 prépare et dirige les travaux.",
        "Le B1 exécuté selon les consignes et limites définies.",
        "Le BR conduit l'intervention générale dans son cadre.",
        "Le BC garantit la consignation et sa fiabilité.",
      ],
      forbiddenPoints: [
        "Lancer une opération sans clarification des rôles.",
        "S'appuyer sur un document flou ou un repère douteux.",
        "Continuer alors que l'opération a change de nature.",
      ],
      legalRefs: [
        "NF C 18-510 - introduction : unicité, cohérence et maîtrise de l'information.",
        "NF C 18-510 - article 3 : définitions des charges et de l'exécutant.",
        "Code du travail - adéquation entre competence, poste et risque électrique.",
      ],
      practicalCase:
        "Exemple : lors d'une intervention sur une machine, un conducteur supplémentaire non documente est decouvert. Le BR suspend l'action, informe l'organisation et la mission est requalifiée avant reprise.",
      chapterImagePath:
        "/images/modules/electricite/document-chantier-autorisation.jpg",
      chapterImageAlt:
        "Document technique et cadre d'autorisation utilises pour organiser une opération électrique et clarifier les responsabilités",
      visual: {
        title: "Une chaine de responsabilité lisible",
        subtitle: "Employeur, responsables électriques, exécutants et documents doivent former un dispositif cohérent.",
        items: ["Mission définie", "Rôle attribue", "Documents fiables", "Arret si l'opération change"],
        tone: "slate",
        imagePath: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-chaine.svg",
        imageAlt: "Illustration de la chaine de décision et de sécurité pour une opération B1 B1V B2 B2V BR BC",
      },
    },
    {
      id: "symboles-attributions",
      title: "3. Symboles, voisinage et attributs",
      estimatedMinutes: 20,
      intro:
        "Lire un symbole d'habilitation ne consiste pas a reconnaitre des lettres familieres. Il faut comprendre ce que chaque caractere ouvre ou, au contraire, interdit dans le cadre reel d'une opération.",
      content: [
        "La lettre B renvoie a la basse tension. Les chiffres et lettres associes precisent la nature de l'opération ou du rôle: exécutant, chargé de travaux, intervention, consignation. Le symbole n'est donc pas un simple intitule administratif: il fixe un cadre concret d'action.",
        "Les attributs et indices doivent être lus avec rigueur. Un B1 n'est pas un B2. Un BR n'est pas un BC. L'attribut V renvoie a une situation de voisinage qui renforce les exigences de sécurité mais ne transforme jamais un symbole en autre chose que ce qu'il est. Un B1V n'est pas un BR et un BRV n'est pas un chargé de consignation.",
        "La lecture correcte des symboles evite l'un des écarts les plus courants du terrain: penser qu'une habitude, un niveau technique ou une urgence de production permettent d'elargir ce que le titre autorise. La norme fait exactement l'inverse: elle borne les missions pour éviter les derives.",
        "Le voisinage doit être pense des la préparation. Il conditionne les ecrans, obstacles, capotages, delimitations de zone, protections collectives et parfois la nécessité de changer de méthode ou de suspendre l'opération. Un symbole avec voisinage n'est jamais un 'plus pratique'; c'est un cadre plus exigeant.",
        "L'attribut V ne donne pas un droit supplémentaire de dépannage ou de travaux. Il signifie qu'une opération est réalisée dans des conditions de voisinage qui imposent une analyse plus rigoureuse, des protections renforcees et un encadrement adapte.",
        "Le symbole BC ne doit pas être confondu avec un rôle général de chantier. Il vise la consignation. Le symbole BR ne doit pas être confondu avec une autorisation générale de modifier librement une installation. Il couvre des interventions générales définies, methodiques et limitees.",
        "Une lecture professionnelle des symboles implique enfin de rapprocher le titre, la mission, le matériel, l'environnement et la procédure. Si l'un de ces éléments ne colle plus, le bon reflexe n'est pas d'interpreter au large. C'est de s'arrêter et de requalifier.",
      ],
      deepDive: [
        "Chaque caractere du symbole a une consequence opérationnelle. La lettre, le chiffre et l'attribut indiquent le domaine, la fonction tenue, la présence eventuelle de voisinage et les limites a ne pas franchir.",
        "Le voisinage n'est pas un accessoire de vocabulaire. C'est une vraie décision de prévention qui modifie la scene de travail, les moyens de protection et l'autorisation de poursuivre.",
      ],
      keyPoints: [
        "La lettre, l'indice et l'attribut ont chacun une valeur opérationnelle.",
        "Un symbole ne s'interprete jamais au-dela de ce qu'il dit.",
        "L'attribut V renforce les exigences de sécurité en voisinage.",
        "Un B1V ne devient pas un BR par simple habitude de terrain.",
      ],
      forbiddenPoints: [
        "Deviner le sens d'un symbole au lieu de le lire strictement.",
        "Utiliser le voisinage comme pretexte pour agir au-dela du rôle attribue.",
      ],
      legalRefs: [
        "NF C 18-510 - tableau des éléments du symbole et conditions associees.",
        "NF C 18-510 - exécution des opérations en fonction des rôles et du voisinage.",
      ],
      practicalCase:
        "Exemple : un technicien B1V travaille a proximite d'un départ voisin. Il ne gagne pas un droit de dépannage général: il reste exécutant dans une situation de voisinage plus exigeante.",
      chapterImagePath:
        "/images/modules/electricite/symboles-habilitation-travaux-electriques.jpg",
      chapterImageAlt:
        "Tableau des symboles d'habilitation utilises pour les autres opérations d'ordre électrique",
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
        "Les habilitations B1, B1V, B2, B2V, BR et BC s'exercent dans un environnement ou la notion de voisinage, de PNST et de distances de sécurité change concrètement la façon de préparer et d'exécuter une opération.",
      content: [
        "La basse tension n'est pas une zone de confort. Elle reste un domaine ou le risque de choc électrique, d'arc et de court-circuit peut être grave, en particulier si des pièces nues sous tension sont accessibles ou si l'environnement est dégradé.",
        "La présence de voisinage doit être analysee des la préparation. Elle conditionne les balisages, les ecrans, les obstacles, la délimitation de zone, les rôles et parfois la nécessité de modifier le cadre d'intervention.",
        "Une PNST n'est pas seulement un danger a toucher. C'est un danger a approcher sans maîtrise. Une enveloppe retiree, un capot manquant ou un bornier accessible peuvent faire basculer l'opération vers un niveau de risque incompatible avec le cadre initial.",
        "Le rôle du chargé de travaux, de l'intervenant BR ou du chargé de consignation consiste aussi a reconnaitre ces situations et a imposer les protections supplémentaires ou l'arret avant toute poursuite.",
        "Cette lecture du voisinage est inséparable des zones d'environnement et des distances de sécurité de la norme. L'apprenant n'a pas besoin de mémoriser une géométrie abstraite sans contexte: il doit comprendre qu'un départ voisin sous tension, une pièce nue accessible ou un capot retire changent immédiatement le mode opératoire et parfois le symbole d'habilitation requis.",
        "Le maintien des capotages, obstacles et ecrans est un point de prévention majeur. Une installation qui semblait compatible avec une opération preparee peut sortir du cadre des qu'un élément de protection est dégradé, déposé ou absent.",
        "Les chapitres les plus solides insistent aussi sur l'IP2X, le maintien des capotages, la lecture du voisinage et la capacité à requalifier l'opération si un départ voisin ou un bornier accessible change la scène de risque.",
        "La norme NF C 18-510 fixe des distances normatives que tout habilité B1, B2, BR ou BC doit connaître. En basse tension, la Distance Minimale d'Approche (DMA) est de 0,30 m autour d'une pièce nue sous tension en champ libre : c'est la limite à ne jamais franchir sans mise hors tension préalable. En zone de voisinage renforcé BT, cette même limite s'applique et tout franchissement impose des protections adaptées. En haute tension A (1 kV à 50 kV), la Distance Limite de Voisinage Simple (DLVS) est de 3 m et la Distance Limite de Voisinage Renforcé (DLVR) de 2 m : ces valeurs changent radicalement le mode opératoire et les habilitations requises.",
        "Les seuils de tension dangereuse selon l'environnement doivent être intégrés pour comprendre la gravité réelle du risque. En courant alternatif : 50 V en milieu sec, 25 V en milieu humide, 12 V en milieu mouillé. En courant continu : 120 V sec, 60 V humide, 30 V mouillé. Un circuit BT de 230 V est donc dangereux dans tous les environnements, et mortel dans les conditions humides ou mouillées les plus courantes sur chantier."
      ],
      deepDive: [
        "Le voisinage n'est pas une simple définition. Sur le terrain, il conditionne la décision de poursuivre, de renforcer les protections, de modifier le balisage ou d'arreter l'opération tant que la zone n'est pas maîtrisée.",
        "Le professionnalisme consiste a faire evoluer l'organisation des protections avant que le danger ne se transforme en exposition reelle de l'équipe.",
      ],
      keyPoints: [
        "BT ne veut pas dire risque faible.",
        "Voisinage et PNST modifient la préparation.",
        "Un capotage dégradé change le cadre de l'opération.",
        "DMA en BT = 0,30 m — limite à ne jamais franchir sans mise hors tension.",
        "Tensions dangereuses BT : 50 V sec / 25 V humide / 12 V mouillé (AC).",
      ],
      forbiddenPoints: [
        "S'approcher d'une PNST pour mieux voir sans protection adaptee.",
        "Banaliser un voisinage non maîtrise.",
      ],
      legalRefs: [
        "NF C 18-510 - voisinage, zones d'environnement et prévention du risque électrique.",
        "INRS - opérations sur installations électriques et traitement du voisinage.",
      ],
      practicalCase:
        "Exemple : une intervention BR prévue sur un circuit terminal devient critique car un bornier voisin est decouvert après déposé partielle d'un capot. L'organisation de l'intervention doit être revue avant reprise.",
      chapterImagePath: "/images/modules/electricite/zones-voisinage-bt.jpg",
      chapterImageAlt:
        "Schema des zones autour d'un conducteur nu et des limites de voisinage en basse tension",
      visual: {
        title: "Le voisinage change tout",
        subtitle: "PNST, capotage, zone et protection conditionnent l'action.",
        items: ["BT a risque", "PNST", "Voisinage", "Arret si non maîtrise"],
        tone: "amber",
        imagePath: "/images/modules/electricite/distances-locaux-acces.jpg",
        imageAlt: "Distances de sécurité et zones d'approche autour des pièces nues sous tension en basse tension — DMA, DLVS, DLVR",
      },
    },
    {
      id: "preparation-travaux",
      title: "5. Préparation des travaux électriques",
      estimatedMinutes: 25,
      intro:
        "La préparation d'une opération électrique est une phase critique. Elle conditionne la sécurité de l'exécution bien avant le premier geste technique.",
      content: [
        "La préparation comprend la lecture du besoin, l'identification du matériel, l'analyse de l'environnement, la vérification documentaire, la désignation des rôles et la vérification des moyens de prévention.",
        "Le chargé de travaux doit clarifier la zone d'intervention, les risques de voisinage, les énergies présentées, les interfaces avec les autres corps d'etat et les conditions d'arret.",
        "Une intervention ou un travail ne commence jamais sur une installation mal identifiée, dégradée, non accessible dans de bonnes conditions ou depourvue de cadre documentaire suffisant.",
        "La préparation doit aussi vérifier la compatibilité entre le symbole d'habilitation detenu et l'opération reelle. Un chantier électrique, une intervention générale BR, une consignation BC ou un travail en voisinage n'impliquent ni les memes moyens, ni les memes documents, ni les memes responsabilités.",
        "Le briefing de debut d'opération n'est pas une formalite. Il sert a rappeler le matériel concerne, la zone de travail, les énergies en présence, les limites de chacun, la conduite a tenir en cas d'écart et les conditions de remise en service.",
        "Les parcours les plus serieux donnent une vraie place au briefing de debut d'opération, a la délimitation physique de la zone, a la vérification des outils et a la coordination avec l'exploitant. Sans cette discipline, meme un chantier techniquement simple peut devenir dangereux.",
      ],
      deepDive: [
        "L'essentiel des erreurs graves vient souvent d'une préparation insuffisante : mauvais repère, ambiguite sur le circuit, procédure absente, moyens de protection non vérifiés, interface de chantier négligée.",
        "Une bonne préparation permet aussi de raccourcir la duree d'exposition et d'éviter les improvisations qui apparaissent quand l'équipe decouvre les difficultees sur place.",
      ],
      keyPoints: [
        "Identifier, préparer, délimiter, vérifier.",
        "La préparation fait partie du travail.",
        "Sans clarte documentaire, on stoppe.",
      ],
      forbiddenPoints: [
        "Demarrer pour voir sur place.",
        "S'appuyer sur l'habitude plutot que sur l'identification du matériel.",
      ],
      legalRefs: [
        "NF C 18-510 - préparation et organisation des opérations.",
        "Code du travail - évaluation du risque et moyens de prévention.",
      ],
      practicalCase:
        "Exemple : une équipe doit intervenir sur un départ repère en maintenance, mais la signaletique locale ne correspond pas au dossier. L'opération est suspendue jusqu'a vérification.",
      chapterImagePath: "/images/modules/electricite/maintenance-environnement-technique.jpg",
      chapterImageAlt:
        "Technicien intervenant devant une armoire électrique en environnement technique contrôle",
      visual: {
        title: "Avant d'agir",
        subtitle: "La sécurité se construit des la préparation.",
        items: ["Identifier", "vérifier", "délimiter", "Autoriser"],
        tone: "amber",
        imagePath: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-travaux.svg",
      },
    },
    {
      id: "consignation",
      title: "6. Consignation et vérification d'absence de tension",
      estimatedMinutes: 30,
      intro:
        "La consignation est un processus de sécurité, pas une simple formalite. Elle doit être rigoureuse, vérifiable et comprise par tous les acteurs.",
      content: [
        "La consignation repose sur une succession d'étapes : séparation, condamnation, identification, vérification d'absence de tension puis, si nécessaire selon le domaine et l'organisation, mise à la terre et en court-circuit.",
        "Le chargé de consignation BC garantit la fiabilité du processus. Il doit s'assurer que le circuit concerne est bien celui qui est séparé, identifié et rendu indisponible a toute remise sous tension intempestive.",
        "La vérification d'absence de tension n'est jamais presumee. Elle doit être faite avec un matériel adapte, selon une méthode connue et sur le bon point de l'installation.",
        "Les ecueils classiques du BC sont concrets: plusieurs départs semblables dans une meme armoire, repérage incomplet, condamnation mal visible, essai de remise en service concurrent ou confiance excessive dans un simple voyant d'etat. C'est souvent la que l'illusion de sécurité s'installe.",
        "La VAT n'est pas une formalite annexe. C'est le point de bascule entre une coupure supposée et un etat électrique vérifié. Le professionnel fiable sait expliquer sa méthode, son matériel et ses points de contrôle.",
        "La méthode de vérification doit inclure le contrôle du bon fonctionnement du dispositif avant et après la VAT, l'identification certaine du point de mesure et la cohérence avec le dossier de consignation. Se fier a un voyant, a une habitude ou a une indication orale expose directement l'équipe.",
        "L'apprenant doit aussi comprendre la difference entre la simple mise hors tension, la mise en sécurité électrique et la consignation complete. Ce vocabulaire n'est pas decoratif: il conditionne le niveau de fiabilité attendu avant le debut des travaux ou de l'intervention.",
      ],
      deepDive: [
        "Une consignation inexacte cree une illusion de sécurité. C'est l'une des situations les plus dangereuses car l'équipe pense être protegee alors que le risque persiste.",
        "Le formalisme documentaire, les etiquetages, les condamnations et les confirmations croisees participent directement a la prévention. La rigueur n'est pas administrative, elle est vitale.",
      ],
      keyPoints: [
        "Consigner = plusieurs étapes indissociables.",
        "La VAT doit être reelle et méthodique.",
        "Le BC structure la fiabilité du processus.",
      ],
      forbiddenPoints: [
        "Se fier a une supposition de coupure.",
        "Omettre l'identification ou la condamnation.",
        "Faire la VAT sur un point douteux.",
      ],
      legalRefs: [
        "NF C 18-510 - consignation et vérification d'absence de tension.",
        "INRS - principes de mise en sécurité d'une installation électrique.",
      ],
      resourceVideos: [
        {
          title: "Chaine INRS France - selection risque électrique",
          description:
            "Selection officielle INRS sur YouTube pour completer le chapitre avec des rappels visuels sur le risque électrique, la consignation et la prévention.",
          url: "https://www.youtube.com/@INRSFrance/search?query=Risque%20%C3%A9lectrique",
          provider: "INRS France",
          ctaLabel: "Voir la selection YouTube",
        },
      ],
      practicalCase:
        "Exemple : avant remplacement d'un appareillage, l'équipe constate plusieurs départs similaires dans l'armoire. Le BC doit verrouiller l'identification avant toute consignation effective.",
      chapterImagePath: "/images/modules/electricite/consignation-vat-balisage.jpg",
      chapterImageAlt:
        "Illustration de consignation avec vérification d'absence de tension et balisage de zone",
      visual: {
        title: "La chaine de consignation",
        subtitle: "Separer, condamner, identifier, vérifier.",
        items: ["Séparation", "Condamnation", "Identification", "VAT"],
        tone: "red",
        imagePath: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-consignation.svg",
      },
    },
    {
      id: "travaux-b1-b2",
      title: "7. Travaux avec B1, B1V, B2 et B2V",
      estimatedMinutes: 25,
      intro:
        "Les travaux électriques structures ne se conduisent pas comme une intervention ponctuelle. Ils supposent un cadre d'exécution, une équipe et un pilotage sécurité adaptes.",
      content: [
        "Le B1 exécuté les opérations confiees dans le respect strict des consignes, des limites de la zone de travail et des protections en place.",
        "Le B2 organisé, dirige et surveille les travaux. Il veille a l'information de l'équipe, au respect des rôles, a la cohérence des gestes et au maintien des conditions de sécurité.",
        "Pendant les travaux, toute évolution non prévue, tout doute technique, toute anomalie ou tout écart de procédure impose un arret ou une requalification de l'opération.",
        "Le B1 ou le B1V ne decide pas seul d'une adaptation de méthode, d'une déposé supplémentaire, d'un essai non prevu ou d'une action sur un départ voisin. Son rôle consiste a exécuter dans le cadre fixe, a reformuler si besoin et a signaler sans delai tout écart.",
        "Le B2 ou le B2V doit garder la maîtrise du chantier jusqu'a la fin des travaux: briefing initial, surveillance de zone, vérification des conditions de sécurité, coordination avec les autres intervenants et validation de la reprise ou de l'arret.",
        "Une équipe fiable ne cherche pas seulement à agir vite : elle agit juste. Le B2 prépare, brief, surveille et arbitre. Le B1 exécute, reformule si besoin et remonte immédiatement tout écart. Cette discipline collective est au cœur de la prévention.",
      ],
      deepDive: [
        "Une équipe efficace n'est pas une équipe rapide, mais une équipe qui partage la meme lecture du risque et du périmètre de travail. Le brief de debut et la surveillance active ont une vraie valeur preventive.",
        "Le B2 doit garder une vision d'ensemble : zone, voisinage, autres entreprises, outillage, protections, autorisations et point d'arret. Le B1 doit conserver une discipline d'exécution sans s'ecarter du cadre fixe.",
      ],
      keyPoints: [
        "B1 exécuté selon consigne.",
        "B2 dirige et surveille.",
        "Tout écart impose l'arret ou la requalification.",
      ],
      legalRefs: [
        "NF C 18-510 - exécution et direction des travaux électriques en basse tension.",
      ],
      practicalCase:
        "Exemple : lors d'un remplacement de matériel, un équipement voisin non prevu apparait sous tension a proximite. Le B2 suspend l'action et redefinit la protection de zone avant reprise.",
      visual: {
        title: "Travail encadre",
        subtitle: "Un exécutant et un chargé de travaux n'ont pas le meme rôle.",
        items: ["Consigne", "Exécution", "Surveillance", "Arret si écart"],
        tone: "blue",
        imagePath: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-travaux.svg",
      },
    },
    {
      id: "interventions-br",
      title: "8. Interventions générales avec BR",
      estimatedMinutes: 30,
      intro:
        "Le BR intervient en basse tension dans un cadre défini qui peut couvrir l'entretien, le dépannage, les essais limites ou certaines remises en etat. Ce cadre ne doit jamais être banalise.",
      content: [
        "L'intervention BR supposé une bonne identification de l'installation, une lecture claire du besoin et la maîtrise de la limite entre intervention générale, travaux et dépannage complexe.",
        "L'intervenant doit savoir quand une situation sort du cadre BR : multiplicite des circuits, voisinage non maîtrise, besoin de travaux de structure, modification de schéma ou absence de procédure.",
        "Le dépannage ne doit jamais devenir une exploration hasardeuse. Il doit rester méthodique, documente et proportionne a l'autorisation reelle de l'opérateur.",
        "Le BR est l'une des habilitations les plus sensibles car il ne doit jamais être compris comme un droit général de dépannage. Sa valeur tient a la méthode, aux limites et a la capacité à requalifier des que le contexte sort du cadre initial.",
        "Dans la pratique, le BR peut être amene a réaliser des opérations d'entretien, de dépannage, de mesurage, d'essai ou de remise en etat dans la limite des procédures définies. Ce cadre supposé une lecture rigoureuse du symptome, du matériel concerne, des énergies présentées et des conditions de voisinage.",
        "Des que l'intervention supposé une transformation plus lourde, une modification structurelle, plusieurs circuits mal identifiés ou une organisation de chantier, l'action ne releve plus du meme cadre et doit être requalifiée.",
      ],
      deepDive: [
        "Le BR est souvent la zone la plus sensible en exploitation, car il se situe au croisement de la pression de remise en service, du besoin de diagnostic et du risque d'improvisation. La discipline de méthode est donc essentielle.",
        "Toute intervention générale supposé une préparation, meme courte : vérifier le contexte, l'accessibilite, l'absence d'anomalie majeure, le matériel de mesure, les protections et la possibilite de stopper si la situation se complique.",
      ],
      keyPoints: [
        "Le BR n'autorise pas tout dépannage.",
        "Diagnostic et remise en etat doivent rester methodiques.",
        "La complexite doit faire requalifier l'action.",
      ],
      forbiddenPoints: [
        "Poursuivre un dépannage dans une situation mal identifiée.",
        "Transformer une intervention en travaux sans requalification.",
      ],
      legalRefs: [
        "NF C 18-510 - interventions générales en basse tension.",
        "INRS - distinction entre intervention et travaux.",
      ],
      practicalCase:
        "Exemple : un technicien BR intervient sur un arret machine. En ouvrant le dossier, il constate une modification ancienne non documentee du cablage. L'intervention doit être requalifiée et encadree autrement.",
      chapterImagePath:
        "/images/modules/electricite/maintenance-environnement-technique.jpg",
      chapterImageAlt:
        "Technicien intervenant en environnement technique devant une armoire électrique basse tension",
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
        "Un mesurage ou un essai n'est jamais un geste neutre. Il supposé un matériel adapte, une méthode connue, un objectif clair, des conditions de sécurité maîtrisées et un titre d'habilitation compatible avec l'opération reelle.",
        "Les connexions et deconnexions en basse tension peuvent relever de cadres differents selon qu'il s'agit de travaux, d'interventions générales BR ou d'opérations particulieres formellement preparees. Elles ne doivent jamais être improvisees au motif qu'un circuit parait simple.",
        "La remise en service est une phase sensible: elle supposé la vérification de la fin d'opération, le retrait des moyens temporaires, la cohérence des condamnations, l'information des acteurs et la certitude qu'aucune personne n'est encore exposee.",
        "Le point cle de sécurité est de ne jamais confondre un geste techniquement possible avec un geste autorise dans le cadre de l'habilitation detenue.",
        "Les transitions dangereuses doivent être maîtrisées : mesure rapide pour voir, essai lancé sans coordination, reconnexion anticipée, remise sous énergie d'un sous-ensemble encore en cours de vérification. C'est souvent dans ces moments-là que le niveau d'exigence doit augmenter.",
        "La remise sous énergie ne se decide jamais par automatisme. Elle supposé que la fin d'intervention soit confirmee, que les personnes soient hors zone, que les balisages provisoires aient ete traites selon la procédure et que la coordination entre chargé de travaux, intervenant BR, BC et exploitant soit claire.",
        "Dans un parcours conforme a la norme, cette phase est traitee comme un chapitre a part entiere car c'est souvent a ce moment que surviennent les erreurs de communication, les remises en service trop rapides et les expositions residuelles.",
      ],
      deepDive: [
        "Sur le terrain, beaucoup d'écarts naissent a ce moment-la: mesure faite 'rapidement', reconnexion pour essayer, remise en service anticipee ou essai lance sans coordination. Ce sont justement ces moments qui exigent le plus de rigueur.",
        "Le risque n'est pas seulement dans l'action initiale, mais aussi dans les transitions : vérifier, tester, reconnecter, remettre sous énergie.",
      ],
      keyPoints: [
        "Mesurer et essayer supposent un cadre précis.",
        "Connexion / deconnexion ne s'improvisent pas.",
        "La remise en service est une phase critique.",
      ],
      forbiddenPoints: [
        "Faire un essai hors cadre pour gagner du temps.",
        "Reconnecter sans vérification complete de fin d'opération.",
      ],
      legalRefs: [
        "NF C 18-510 - interventions, essais, connexions, deconnexions et remise en service.",
        "INRS - limites des interventions BT générales et des opérations électriques associees.",
      ],
      practicalCase:
        "Exemple : après remplacement d'un appareillage, un intervenant souhaite remettre sous tension pour 'voir si ca tient'. Le cadre de remise en service doit être revalide avant tout essai.",
      chapterImagePath: "/images/modules/electricite/tableau-coffret-bt.jpg",
      chapterImageAlt:
        "Tableau basse tension et appareillage sur lesquels les mesurages, essais et remises en énergie exigent une méthode stricte",
      visual: {
        title: "vérifier avant la remise en énergie",
        subtitle: "Mesurer, tester, reconnecter et remettre sous tension exigent une méthode.",
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
        "La maîtrise du risque électrique repose aussi sur le choix des moyens de travail, l'etat des outils et l'usage correct des protections collectives et individuelles.",
      content: [
        "Les EPI et EPC ne remplacent jamais la préparation ni le respect du rôle, mais ils reduisent le risque dans le cadre d'une opération autorisee et correctement organisee.",
        "L'opérateur doit vérifier l'etat apparent de ses outils, de ses appareils de mesure, de ses moyens de condamnation et de ses protections avant de commencer.",
        "L'environnement de travail doit être compatible avec l'opération : accès suffisant, absence d'encombrement dangereux, eclairage correct, pas d'humidite anormale ni de deterioration visible non traitee.",
        "Les appareils de mesure, verificateurs d'absence de tension, dispositifs de condamnation, gants, visieres, outillage isole et ecrans de protection doivent être adaptes a l'usage prevu et a l'etat de l'installation. Un moyen dégradé ou mal choisi peut lui-meme devenir une source d'accident.",
        "La logique normative reste constante: on ne compense jamais un mauvais cadre de travail par une simple accumulation d'EPI. Les protections collectives, l'organisation, la délimitation et la mise en sécurité restent prioritaires.",
      ],
      deepDive: [
        "Un matériel dégradé, un outil non adapte ou un appareillage de mesure mal maîtrise peuvent devenir eux-memes une source d'accident. La fiabilité des moyens est inséparable de la competence technique.",
        "Le bon usage des EPC doit être privilegie. Les EPI viennent en complement, jamais comme pretexte pour accepter une situation initialement non conforme.",
      ],
      keyPoints: [
        "vérifier ses moyens avant d'agir.",
        "Les EPC priment sur les EPI.",
        "Un environnement dégradé impose l'arret.",
      ],
      forbiddenPoints: [
        "Improviser avec un outil non prevu.",
        "Compter sur les seuls EPI pour corriger un cadre dangereux.",
      ],
      legalRefs: [
        "Code du travail - hierarchie des protections collectives et individuelles.",
        "NF C 18-510 - matériels, protections et environnement de travail.",
      ],
      practicalCase:
        "Exemple : avant intervention, l'opérateur constate qu'un capot est manquant et que la zone est humide. L'action est reportee jusqu'au retour a des conditions compatibles.",
      chapterImagePath: "/elearning/b1-b1v-b2-b2v-br-bc/epi-intervention.jpg",
      chapterImageAlt:
        "Illustration des équipements de protection collective et individuelle en environnement électrique",
      visual: {
        title: "préparer ses moyens",
        subtitle: "La sécurité passe aussi par le matériel et l'environnement.",
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
        "La bonne réaction face a l'anomalie ne consiste pas a finir coute que coute, mais a proteger, stopper, alerter et reprendre seulement si le cadre est remaitrise.",
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
        "L'urgence ne cree pas d'autorisation supplémentaire.",
      ],
      forbiddenPoints: [
        "Continuer avec un doute serieux sur l'etat électrique.",
        "Toucher une victime sans suppression du danger.",
      ],
      legalRefs: [
        "INRS - conduite a tenir en cas d'accident électrique.",
        "NF C 18-510 - traitement des situations anormales.",
      ],
      practicalCase:
        "Exemple : après consignation, un voyant reste allume sur un sous-ensemble. L'équipe s'arrête immédiatement et fait vérifier l'etat reel de l'installation avant toute poursuite.",
      chapterImagePath: "/elearning/b1-b1v-b2-b2v-br-bc/danger-armoires-électriques.jpg",
      chapterImageAlt:
        "Conduite a tenir en cas d'anomalie, de doute électrique ou d'urgence sur une installation basse tension",
      visual: {
        title: "Savoir interrompre",
        subtitle: "Le bon reflexe est parfois d'arreter immédiatement.",
        items: ["Stop", "sécuriser", "Alerter", "vérifier avant reprise"],
        tone: "red",
        imagePath: "/elearning/bsbe/bsbe-urgence.svg",
      },
    },
    {
      id: "retour-experience",
      title: "12. Retour d'expérience, compte rendu et maintien des compétences",
      estimatedMinutes: 20,
      intro:
        "Une organisation mature ne s'arrête pas à l'exécution technique. Elle apprend aussi des écarts, des quasi-accidents, des difficultés de repérage et des problèmes de coordination pour fiabiliser les opérations suivantes.",
      content: [
        "Le compte rendu de fin d'opération permet de signaler les anomalies constatées, les écarts documentaires, les protections manquantes, les matériels dégradés et les points à corriger avant une future intervention. Il doit être factuel : matériel concerné, repère, circonstance, décision prise et action restante.",
        "Le retour d'expérience permet de faire progresser les procédures, le repérage et les consignes de chantier. Il participe directement à la prévention du risque électrique, car beaucoup d'accidents naissent d'un écart déjà observé mais jamais traité durablement.",
        "Les données de sinistralité rappellent l'enjeu réel. En 2021, les statistiques nationales recensaient environ 428 accidents du travail d'origine électrique, dont 46 mortels. L'analyse des causes révèle que le mode opératoire inapproprié représente 31 % des facteurs, devant la méconnaissance des risques (30 %), l'application incomplète des procédures (15 %), la formation insuffisante (12 %) et le matériel défectueux (12 %). Pour un B1, B2, BR ou BC, ces chiffres signifient que la rigueur de préparation, le respect des distances normatives et la maîtrise des documents de consignation sont des éléments de prévention directe, pas de conformité administrative.",
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
        "Tracer les écarts pour corriger durablement.",
        "Le retour d'expérience fait partie de la prévention.",
        "Le maintien des compétences est une démarche continue.",
      ],
      forbiddenPoints: [
        "Clore une opération sans signaler un écart critique.",
        "Supposer qu'une formation unique suffit pour toujours.",
      ],
      legalRefs: [
        "Code du travail - prévention et amélioration continue des conditions de travail.",
        "INRS - maintien des compétences et retour d'expérience en prévention du risque électrique.",
      ],
      practicalCase:
        "Exemple : après une consignation difficile a confirmer sur un tableau mal repère, l'équipe fait formaliser une correction documentaire au lieu de laisser le problème en l'etat.",
      chapterImagePath:
        "/images/modules/electricite/document-chantier-autorisation.jpg",
      chapterImageAlt:
        "Support documentaire et cadre de traçabilité utilises pour formaliser un retour d'expérience et corriger durablement un écart",
      visual: {
        title: "Apprendre de chaque opération",
        subtitle: "Compte rendu, écarts et maintien des reflexes.",
        items: ["Retour terrain", "Trace ecrite", "Correction", "Maintien des compétences"],
        tone: "slate",
        imagePath: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-retour-experience.svg",
      },
    },
    {
      id: "documents-coordination",
      title: "13. Documents, autorisations et coordination de chantier",
      estimatedMinutes: 25,
      intro:
        "Les habilitations B1, B1V, B2, B2V, BR et BC prennent toute leur valeur dans une organisation documentee. Le travail électrique se securise aussi par les autorisations, plans, permis et consignes de chantier.",
      content: [
        "Les dossiers techniques, reperages, schémas, plans de prévention, permis ou autorisations d'accès permettent de confirmer le périmètre reel d'une opération électrique.",
        "Le chargé de travaux, l'intervenant BR ou le chargé de consignation doivent savoir quels documents vérifier avant d'agir, lesquels mettre a jour et quels interlocuteurs alerter si une incoherence apparait.",
        "Sur un chantier ou dans un site en exploitation, la coordination avec les autres entreprises, l'encadrement local et les exploitants techniques est un point de sécurité a part entiere.",
        "Une opération techniquement juste peut devenir dangereuse si un autre intervenant remet une zone sous énergie, retire un balisage, modifie un accès ou travaille sur un départ voisin sans coordination. La prévention électrique est aussi une prévention d'interface.",
        "Selon les situations, l'apprenant doit savoir reconnaitre le rôle des autorisations de travail, attestations de consignation, avis de fin de travail, plans de prévention, permis feu ou consignes locales d'exploitation. Ces documents ne remplacent pas la competence, mais ils structurent la sécurité collective.",
        "La traçabilité de fin d'opération est tout aussi importante: fin de travaux, levee de condamnation, restitution a l'exploitant, information de l'équipe et compte rendu des écarts. Une opération correctement exécutée mais mal cloree peut préparer l'accident suivant.",
      ],
      deepDive: [
        "Une opération bien preparee sur le plan technique peut devenir dangereuse si la coordination est mauvaise : interface non signalee, accès concurrent, modification non tracee, ou mauvaise information sur l'etat électrique reel.",
        "Le professionnalisme attendu sur ces habilitations ne consiste pas seulement a savoir faire un geste technique, mais a maîtriser la chaine complete : préparation, documents, consignes, exécution, compte rendu et retour d'expérience.",
      ],
      keyPoints: [
        "Documenter avant d'agir.",
        "Coordonner avec les autres intervenants.",
        "Tracer les écarts et les reprises.",
      ],
      forbiddenPoints: [
        "Exécuter sans dossier ou repère fiable.",
        "Ignorer une interface chantier ou exploitation.",
        "Reprendre une installation sans vérification documentaire.",
      ],
      legalRefs: [
        "Code du travail - coordination, prévention et organisation des interventions.",
        "NF C 18-510 - préparation des opérations, désignation des rôles et support documentaire.",
      ],
      practicalCase:
        "Exemple : une équipe B2 doit intervenir sur un départ consigne, mais un sous-traitant voisin annonce une remise en service partielle de zone. L'opération est suspendue jusqu'a coordination et revalidation du cadre.",
      chapterImagePath: "/images/modules/electricite/document-chantier-autorisation.jpg",
      chapterImageAlt:
        "Exemple de document technique ou administratif utilise pour tracer une installation et son cadre de conformité",
      visual: {
        title: "Le chantier ne se gere pas seul",
        subtitle: "Plan, consigne et coordination font partie de la sécurité électrique.",
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
        "La maîtrise des habilitations B1, B1V, B2, B2V, BR et BC repose sur la clarte des rôles, la préparation méthodique et la rigueur face au risque électrique.",
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
        "Un rôle clair, une opération claire.",
        "La consignation et la préparation sont centrales.",
        "La sécurité prime toujours sur la production.",
        "Le doute impose l'arret et la vérification.",
      ],
      legalRefs: [
        "Code du travail - prévention du risque électrique.",
        "NF C 18-510 - exécution, intervention, travaux et consignation en basse tension.",
        "INRS - maintien des reflexes de sécurité électrique.",
      ],
      practicalCase:
        "Exemple : un chantier électrique prépare glisse vers une modification de schéma non prévue. Le bon choix est de suspendre et de redocumenter l'opération avant reprise.",
      chapterImagePath: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-synthese.svg",
      chapterImageAlt:
        "Schema de synthese des reflexes a conserver pour préparer, exécuter ou interrompre une opération électrique en basse tension",
      visual: {
        title: "Les 4 reflexes a retenir",
        subtitle: "Identifier, préparer, respecter son rôle, arreter si doute.",
        items: ["Identifier", "préparer", "Respecter son rôle", "Arreter si doute"],
        tone: "blue",
        imagePath: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-synthese.svg",
      },
    },
  ],
};