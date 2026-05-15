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
      scenarios: [
        {
          situation: "Vous êtes technicien, habilité BR. Votre responsable vous demande d'organiser un chantier de remplacement d'un tableau électrique avec deux autres opérateurs sous votre direction, sans avoir modifié votre habilitation.",
          question: "Pouvez-vous diriger ce chantier avec une habilitation BR ?",
          wrongActions:           [
            "Accepter la mission en considérant que votre expérience compense l'habilitation manquante.",
            "Commencer les travaux en vous disant que le responsable a pris la décision et donc en porte la responsabilité.",
            "Déléguer la direction à un collègue sans habilitation formelle pour vous couvrir.",
          ],
          correctActions:           [
            "Refuser d'assumer le rôle de chargé de travaux avec votre seule habilitation BR.",
            "Signaler à votre responsable que cette mission nécessite une habilitation B2 ou B2V.",
            "Attendre la requalification officielle de votre habilitation avant toute action de direction.",
          ],
          explanation: "Le symbole BR couvre les interventions générales définies (dépannage, remplacement, mesure, essai limité). Diriger des travaux d'installation avec une équipe relève du rôle B2. Une habilitation inadaptée engage la responsabilité de l'employeur et du salarié.",
          normRef: "NF C 18-510 § 5.3 — définition du chargé de travaux B2 et distinction avec le chargé d'intervention BR",
        },
        {
          situation: "Vous arrivez sur un chantier et vous constatez que votre titre d'habilitation a expiré il y a trois semaines. Le chargé de travaux vous dit que ce n'est qu'une formalité et qu'il faut avancer.",
          question: "Que faites-vous face à une habilitation expirée ?",
          wrongActions:           [
            "Travailler quand même en estimant que vos compétences n'ont pas changé.",
            "Accepter de commencer en attendant la régularisation en fin de journée.",
            "Signer les documents de consignation en indiquant votre ancienne habilitation.",
          ],
          correctActions:           [
            "Refuser d'intervenir : une habilitation expirée n'est plus valide, quelles que soient les circonstances.",
            "Informer le chargé de travaux et le signaler à votre employeur.",
            "Attendre la délivrance d'un nouveau titre d'habilitation signé par l'employeur avant toute intervention.",
          ],
          explanation: "L'habilitation est un acte formel de l'employeur. Elle a une durée de validité fixée par l'employeur (généralement 3 ans). Travailler avec une habilitation expirée annule la couverture réglementaire et expose le salarié et l'employeur en cas d'accident.",
          normRef: "NF C 18-510 § 6.1 — délivrance et validité de l'habilitation par l'employeur",
        },
      ],
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
      scenarios: [
        {
          situation: "Vous êtes exécutant B1 sur un chantier de remplacement de câblage. En cours de travaux, vous remarquez que le câble voisin présente une isolation endommagée qui n'était pas prévue dans l'ordre de travail.",
          question: "Que faites-vous lorsque vous constatez une anomalie non prévue ?",
          wrongActions:           [
            "Réparer vous-même l'anomalie car c'est rapide et vous êtes déjà sur place.",
            "Ignorer l'anomalie pour ne pas ralentir le chantier.",
            "Attendre la fin du chantier pour en parler lors du débriefing.",
          ],
          correctActions:           [
            "Arrêter immédiatement toute action à proximité de l'anomalie.",
            "Signaler sans délai l'anomalie au chargé de travaux B2.",
            "Ne reprendre l'intervention qu'après décision formelle du B2 sur la conduite à tenir.",
          ],
          explanation: "Le rôle de l'exécutant B1 est d'exécuter dans le cadre défini et de signaler tout écart. Il ne peut pas décider seul d'une adaptation ou d'une action supplémentaire. L'initiative non autorisée est l'une des causes majeures d'accidents électriques.",
          normRef: "NF C 18-510 § 5.2 — obligations de l'exécutant électricien",
        },
        {
          situation: "Le chargé de travaux B2 quitte temporairement le chantier pour un appel urgent et vous demande, en tant qu'exécutant B1, de 'surveiller' l'équipe et de continuer.",
          question: "Pouvez-vous assurer le rôle de chargé de travaux par délégation orale ?",
          wrongActions:           [
            "Accepter et superviser l'équipe puisque le B2 vous a désigné oralement.",
            "Continuer les travaux en considérant que tout est préparé et qu'il n'y a pas de risque.",
            "Donner des consignes aux autres exécutants pour avancer.",
          ],
          correctActions:           [
            "Suspendre les travaux en l'absence du chargé de travaux.",
            "Informer les autres exécutants de l'arrêt temporaire.",
            "Attendre le retour du B2 ou la désignation officielle d'un chargé de travaux de remplacement.",
          ],
          explanation: "La fonction de chargé de travaux B2 ne peut pas être assumée par un exécutant B1 par simple délégation orale. Le B2 doit être présent ou remplacé formellement. En son absence, les travaux doivent être suspendus.",
          normRef: "NF C 18-510 § 5.3 — responsabilités du chargé de travaux, présence et continuité de la surveillance",
        },
      ],
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
      scenarios: [
        {
          situation: "Vous avez une habilitation B1 (sans indice V). Le chantier du jour se déroule à proximité d'un TGBT avec des jeux de barres nus sous tension. Le chargé de travaux vous dit que 'ça devrait aller'.",
          question: "Pouvez-vous intervenir en zone de voisinage renforcé avec un B1 sans V ?",
          wrongActions:           [
            "Intervenir en restant simplement prudent et en faisant attention.",
            "Faire confiance au jugement du chargé de travaux qui connaît le chantier.",
            "Vous éloigner mentalement de la zone et continuer les travaux.",
          ],
          correctActions:           [
            "Refuser d'intervenir dans la zone de voisinage renforcé sans l'indice V.",
            "Signaler au chargé de travaux que votre habilitation ne couvre pas ce périmètre.",
            "Attendre soit une protection physique de la zone, soit la désignation d'un intervenant B1V.",
          ],
          explanation: "L'indice V dans B1V ou B2V signifie que l'intervenant a été formé aux prescriptions du voisinage renforcé. Sans cet indice, travailler dans la zone de voisinage renforcé est interdit, même si le risque paraît faible. La frontière est normative, pas empirique.",
          normRef: "NF C 18-510 § 4.4 — zones de travail et conditions de l'indice V",
        },
        {
          situation: "Vous êtes affecté à un chantier de maintenance sur un TGBT basse tension. Votre habilitation porte les symboles B1 et BR. On vous demande d'assurer la consignation d'un départ avant de commencer.",
          question: "Avec B1 et BR, pouvez-vous réaliser une consignation ?",
          wrongActions:           [
            "Réaliser la consignation en vous appuyant sur votre expérience.",
            "Interpréter BR comme couvrant aussi la consignation.",
            "Couper l'alimentation et coller une étiquette sans formaliser la procédure complète.",
          ],
          correctActions:           [
            "Refuser d'effectuer la consignation : ni B1 ni BR ne couvrent ce rôle.",
            "Signaler qu'un chargé de consignation BC doit être désigné pour cette étape.",
            "Attendre la venue du BC ou la mise en place d'une procédure de consignation validée avant de commencer les travaux.",
          ],
          explanation: "La consignation est réservée au chargé de consignation BC. Ce rôle ne peut pas être assumé par un B1, un B2 ou un BR, même expérimentés. Chaque symbole couvre un périmètre précis et non substituable.",
          normRef: "NF C 18-510 § 5.4 — rôle exclusif du chargé de consignation BC",
        },
      ],
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
      scenarios: [
        {
          situation: "Pendant des travaux dans un local technique, vous repérez un câble apparent dont l'isolation est usée, laissant apparaître un conducteur nu. Vous ne savez pas s'il est sous tension.",
          question: "Comment réagissez-vous face à un conducteur potentiellement sous tension ?",
          wrongActions:           [
            "Toucher brièvement le câble avec un doigt ganté pour 'sentir' s'il est sous tension.",
            "Ignorer le câble et continuer les travaux en restant éloigné.",
            "Demander à un collègue d'aller vérifier pendant que vous continuez.",
          ],
          correctActions:           [
            "Traiter immédiatement le câble comme sous tension, sans hypothèse contraire.",
            "Délimiter la zone et interdire tout accès non autorisé.",
            "Signaler au chargé de travaux pour décision : mise hors tension, capotage ou reconfinement.",
          ],
          explanation: "En présence d'une pièce nue sous tension (PNST) non identifiée, la règle est de considérer qu'elle est sous tension et dangereuse. Jamais d'hypothèse favorable. La distance limite de voisinage renforcé (DLVR) doit être respectée sans équipement adapté.",
          normRef: "NF C 18-510 § 4.3 — définition PNST et distances de voisinage BT",
        },
        {
          situation: "Vous réalisez des travaux en BT à 35 cm d'un jeu de barres nu à 400 V. Votre habilitation est B1V mais vous n'avez pas vos gants isolants classe 1 sur vous.",
          question: "Pouvez-vous poursuivre les travaux sans gants isolants en zone de voisinage renforcé ?",
          wrongActions:           [
            "Continuer en faisant attention à ne pas toucher les barres.",
            "Utiliser des gants de manutention non isolants par précaution.",
            "Réduire votre périmètre d'action pour vous éloigner légèrement.",
          ],
          correctActions:           [
            "Arrêter immédiatement les travaux dans cette zone.",
            "Récupérer vos gants isolants de classe adaptée avant de reprendre.",
            "Si les EPI ne sont pas disponibles, signaler au B2 et attendre la protection physique de la zone.",
          ],
          explanation: "En zone de voisinage renforcé BT (entre DMA et DLVR), les équipements de protection individuelle adaptés sont obligatoires. L'indice V de l'habilitation ne dispense pas des EPI : il autorise à travailler dans cette zone à condition de respecter les prescriptions, dont le port des EPI.",
          normRef: "NF C 18-510 § 4.4 et § 9 — EPI requis en zone de voisinage renforcé BT",
        },
      ],
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
      scenarios: [
        {
          situation: "Vous êtes chargé de travaux B2 et vous arrivez sur site sans avoir consulté le schéma électrique de l'installation. Vous pensez connaître le tableau de mémoire pour être intervenu dessus il y a six mois.",
          question: "Peut-on démarrer des travaux électriques sur la base d'un schéma mémorisé ?",
          wrongActions:           [
            "Commencer les travaux en vous appuyant sur votre mémoire.",
            "Demander à un exécutant de vérifier visuellement pendant que vous organisez l'équipe.",
            "Partir du principe qu'une installation standard n'a pas changé en six mois.",
          ],
          correctActions:           [
            "Obtenir et consulter le schéma électrique à jour avant toute action.",
            "Vérifier l'état réel de l'installation avec les documents de référence.",
            "Différer le démarrage si le dossier technique est incomplet ou non disponible.",
          ],
          explanation: "La préparation des travaux repose sur des documents fiables et à jour. Une installation peut être modifiée sans que l'intervenant en soit informé. Se fier à la mémoire est une erreur méthodologique reconnue dans les analyses d'accidents électriques.",
          normRef: "NF C 18-510 § 5.3 — obligations de préparation du chargé de travaux",
        },
        {
          situation: "Vous débutez un chantier et constatez que le plan de prévention avec l'entreprise utilisatrice n'a pas été signé. Le responsable du site dit qu'il est 'en cours' et que vous pouvez commencer.",
          question: "Peut-on commencer un chantier électrique sans plan de prévention finalisé ?",
          wrongActions:           [
            "Commencer en attendant la signature pour ne pas perdre la journée.",
            "Démarrer sur la base de l'accord oral du responsable du site.",
            "Réaliser une partie du travail en zone sans risque identifié.",
          ],
          correctActions:           [
            "Refuser de commencer tant que le plan de prévention n'est pas signé.",
            "Signaler la situation à votre propre hiérarchie.",
            "Reprendre les travaux uniquement après validation formelle du plan de prévention.",
          ],
          explanation: "Le plan de prévention est obligatoire pour les travaux en entreprise extérieure dès 400 heures/an de prestation ou pour des travaux dangereux. Il définit les interfaces de sécurité entre les deux entreprises. Commencer sans ce document expose les deux parties.",
          normRef: "Code du travail R. 4512-7 — plan de prévention travaux en entreprise extérieure",
        },
      ],
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
        "La mise à la terre et en court-circuit (MALT/CCT) n'est pas systématiquement obligatoire en Basse Tension, mais elle devient impérative dans plusieurs situations : câbles de grande longueur présentant un risque de tension induite (à proximité d'ouvrages HT), risque de réalimentation accidentelle depuis une source de secours ou un groupe électrogène, ou encore lorsque la configuration de l'installation l'impose. En Haute Tension, la MALT/CCT est toujours obligatoire (NF C 18-510 §6.3.4). Ne pas effectuer la MALT/CCT quand elle est requise expose les travailleurs à un risque mortel de tension résiduelle ou de réalimentation inattendue.",
      ],
      deepDive: [
        "Une consignation inexacte cree une illusion de sécurité. C'est l'une des situations les plus dangereuses car l'équipe pense être protegee alors que le risque persiste.",
        "Le formalisme documentaire, les etiquetages, les condamnations et les confirmations croisees participent directement a la prévention. La rigueur n'est pas administrative, elle est vitale.",
      ],
      keyPoints: [
        "Consigner = plusieurs étapes indissociables.",
        "La VAT doit être reelle et méthodique.",
        "Le BC structure la fiabilité du processus.",
        "MALT/CCT : obligatoire en HT, obligatoire en BT si câbles longs, risque de tension induite ou de réalimentation (NF C 18-510 §6.3.4).",
      ],
      forbiddenPoints: [
        "Se fier a une supposition de coupure.",
        "Omettre l'identification ou la condamnation.",
        "Faire la VAT sur un point douteux.",
        "Omettre la MALT/CCT en HT ou en BT lorsque les conditions l'imposent.",
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
      scenarios: [
        {
          situation: "En tant que BC, vous devez vérifier l'absence de tension sur un départ avant des travaux. Vous constatez que le voyant de présence tension est éteint. Vous en déduisez que le circuit est hors tension.",
          question: "Un voyant éteint suffit-il à confirmer l'absence de tension ?",
          wrongActions:           [
            "Valider l'absence de tension sur la base du voyant éteint.",
            "Procéder à la mise à la terre et commencer les travaux.",
            "Indiquer dans le formulaire de consignation que la VAT a été faite.",
          ],
          correctActions:           [
            "Effectuer la VAT avec un appareil de mesure adapté et vérifié (VAT ou multimètre CAT III/IV).",
            "Contrôler le bon fonctionnement du dispositif de mesure avant et après la VAT.",
            "Consigner le résultat de la VAT dans le dossier de consignation avant tout accès.",
          ],
          explanation: "Un voyant de présence tension peut être défaillant, mal câblé ou mal repéré. La vérification d'absence de tension (VAT) doit toujours être réalisée avec un appareil de mesure calibré et contrôlé. C'est l'étape critique de la consignation.",
          normRef: "NF C 18-510 § 6.3 — séquence de consignation, étape VAT obligatoire",
        },
        {
          situation: "Vous réalisez une consignation sur un tableau avec 6 départs similaires. Après séparation du départ 4, vous réalisez que les repérages des départs 3, 4 et 5 sont peu lisibles et se ressemblent.",
          question: "Que faites-vous lorsque le repérage d'une installation est ambigu ?",
          wrongActions:           [
            "Continuer sur la base de votre interprétation la plus probable.",
            "Demander à un collègue de confirmer à l'oral sans vérification documentaire.",
            "Aller directement à la VAT pour confirmer par les mesures.",
          ],
          correctActions:           [
            "Suspendre la consignation immédiatement.",
            "Rechercher le schéma de l'armoire ou un repérage officiel fiable.",
            "Ne reprendre la consignation qu'après identification certaine du départ concerné.",
          ],
          explanation: "L'identification certaine du circuit est une étape formelle de la consignation. En cas de doute sur le repérage, il faut suspendre et lever l'ambiguïté documentairement. Consigner le mauvais départ est l'une des causes d'accidents électriques graves.",
          normRef: "NF C 18-510 § 6.3.3 — identification du circuit avant consignation",
        },
      ],
      chapterImagePath: "/images/modules/electricite/consignation-vat-balisage.jpg",
      chapterImageAlt:
        "Illustration de consignation avec vérification d'absence de tension et balisage de zone",
      visual: {
        title: "La chaine de consignation",
        subtitle: "5 étapes impératives — dans l'ordre, sans raccourci.",
        items: [
          "1. Séparer le circuit",
          "2. Condamner (cadenas + étiquette)",
          "3. Vérifier l'absence de tension (VAT)",
          "4. Mettre à la terre et en court-circuit (si requis)",
          "5. Délimiter la zone de travail",
        ],
        tone: "red",
        animationKey: "consignation-chaine" as const,
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
      scenarios: [
        {
          situation: "Vous êtes exécutant B1 en train de remplacer des conducteurs dans un tableau. Le chargé de travaux est momentanément absent. Un responsable du site vous demande d'intervenir aussi sur le départ voisin pour gagner du temps.",
          question: "Pouvez-vous élargir votre zone de travail sans l'accord du B2 ?",
          wrongActions:           [
            "Accepter en vous disant que techniquement c'est le même type d'opération.",
            "Commencer rapidement pour montrer votre efficacité.",
            "Demander à un autre exécutant de commencer pendant que vous finissez votre départ.",
          ],
          correctActions:           [
            "Refuser d'élargir la zone sans l'accord formalisé du chargé de travaux B2.",
            "Expliquer au responsable que tout changement de périmètre doit être validé par le B2.",
            "Attendre le retour du B2 pour toute décision de modification du plan de travail.",
          ],
          explanation: "Le périmètre de travail est défini par le chargé de travaux B2. L'exécutant B1 n'a pas autorité pour l'étendre. Une action sur un départ non prévu peut porter sur un circuit encore sous tension ou non consigné.",
          normRef: "NF C 18-510 § 5.2 — limites du rôle de l'exécutant électricien",
        },
        {
          situation: "En fin de journée, les travaux de remplacement d'un câblage ne sont pas terminés. Il reste 30 minutes de travail mais l'heure de départ est dépassée. Le chargé de travaux vous demande de remonter l'alimentation pour la nuit.",
          question: "Que vérifiez-vous avant toute remise sous tension partielle en fin de chantier ?",
          wrongActions:           [
            "Remettre sous tension le circuit partiellement câblé en attendant la reprise du lendemain.",
            "Laisser le tableau ouvert avec les travaux en cours pour faciliter la reprise.",
            "Boucler rapidement les connexions restantes sans vérification pour finir.",
          ],
          correctActions:           [
            "S'assurer que le circuit est soit remis en état sécurisé, soit laissé sous consignation valide jusqu'à la reprise.",
            "Ne jamais laisser un circuit partiellement câblé remis sous tension.",
            "Documenter l'état d'arrêt dans le dossier de travaux pour la reprise du lendemain.",
          ],
          explanation: "Un câblage partiellement réalisé remis sous tension est une source majeure d'accident. Il faut soit terminer les travaux et lever la consignation correctement, soit maintenir la consignation jusqu'à la reprise. Aucune situation intermédiaire n'est acceptable.",
          normRef: "NF C 18-510 § 6.5 — fin de travaux et remise sous tension",
        },
      ],
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
      scenarios: [
        {
          situation: "En tant que chargé d'intervention BR, vous constatez lors d'un dépannage que la panne nécessite de déposer et remplacer trois connexions sur un départ BT. Le client veut que ce soit fait aujourd'hui.",
          question: "Le remplacement de connexions multiples entre-t-il dans le cadre BR ?",
          wrongActions:           [
            "Réaliser les trois connexions puisque vous êtes qualifié BR.",
            "Interpréter 'remplacement' au sens large pour satisfaire le client.",
            "Commencer en estimant que c'est 'dans l'esprit' du BR.",
          ],
          correctActions:           [
            "Évaluer si l'opération correspond à une intervention générale BR définie ou à des travaux nécessitant un B2.",
            "Si le périmètre dépasse le cadre BR, refuser et signaler le besoin d'un chargé de travaux B2.",
            "Documenter la limite de l'intervention et les raisons du requalification dans le compte-rendu.",
          ],
          explanation: "Le BR couvre le dépannage, le remplacement de matériels défectueux et certaines connexions limitées. Dès que l'intervention implique une modification structurelle du câblage avec plusieurs opérations, elle sort du cadre BR pour entrer dans les travaux B2.",
          normRef: "NF C 18-510 § 5.5 — périmètre des interventions générales du BR",
        },
        {
          situation: "Vous êtes BR et intervenez sous tension pour localiser une panne sur un coffret BT 230 V. En retirant un cache, vous exposez des bornes sous tension à moins de 10 cm de votre main.",
          question: "Quelles précautions s'imposent lors d'une intervention BR sous tension ?",
          wrongActions:           [
            "Continuer sans équipement complémentaire car vous connaissez ce type de coffret.",
            "Utiliser un tournevis standard pour tester les bornes.",
            "Travailler à une main pour limiter le risque de passage de courant.",
          ],
          correctActions:           [
            "Porter les EPI adaptés : gants isolants classe 1, lunettes de protection, outils isolés 1000 V.",
            "Travailler méthodiquement en un point à la fois, en maintenant la distance de sécurité.",
            "Documenter les précautions prises dans le compte-rendu d'intervention.",
          ],
          explanation: "Le BR peut intervenir sous tension dans son cadre défini, mais uniquement avec les EPI et outillages adaptés. La technique à une main ne remplace pas les gants isolants. La règle des EPI s'applique indépendamment du niveau de tension apparente.",
          normRef: "NF C 18-510 § 9 — équipements de protection pour interventions sous tension",
        },
      ],
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
      id: "installations-existantes-br",
      title: "9. Schémas de liaison à la terre (TN-C, IT) et installations existantes",
      estimatedMinutes: 35,
      intro:
        "Le chargé d'intervention BR rencontre des schémas de liaison à la terre variés selon les sites : TT classique, TN-C en installations anciennes, schéma IT dans les hôpitaux et industries de process, voire TN-C-S en transition. Reconnaître chaque schéma, comprendre ses contraintes opérationnelles et intervenir dans les limites de son habilitation fait partie des compétences attendues.",
      content: [
        "La NF C 15-100 distingue cinq schémas de liaison à la terre. Chaque lettre décrit le raccordement de neutre (T = terre, I = isolé/impédant) et des masses utilisateurs (T = terre indépendante, N = raccordées au neutre). Le schéma TT est la référence des installations résidentielles et tertiaires courantes (protection par différentiel). Le schéma TN-S (neutre et PE séparés) est courant dans l'industrie moderne. Le schéma TN-C (conducteur PEN unique) est interdit dans les installations neuves depuis la révision de la NF C 15-100 mais reste présent dans de nombreux bâtiments industriels construits avant 1990. Le schéma TN-C-S combine TN-C en amont et TN-S en aval. Le schéma IT, enfin, utilise un neutre isolé ou impédant et s'applique dans les contextes où la continuité de service est prioritaire.",
        "Dans un schéma TN-C, le conducteur PEN cumule deux rôles : il est à la fois le retour du courant de service (neutre) et le conducteur de protection des masses (terre). On le reconnaît à l'absence de borne PE distincte dans le tableau, à un unique conducteur bleu ou vert-jaune raccordé à la fois sur la barre neutre et la barre de terre, et à l'absence de conducteur vert-jaune séparé dans les câbles de distribution.",
        "La rupture du PEN est l'un des accidents les plus graves sur ce type d'installation : toutes les masses métalliques situées en aval du point de rupture peuvent se retrouver à la tension de neutre (potentiellement 230 V par rapport au sol) sans que les dispositifs de protection ne déclenchent. Le courant de défaut ne peut pas circuler normalement, les disjoncteurs et fusibles restent fermés. La tension apparaît sur les carcasses des appareils, les câbles de terre, les canalisations métalliques.",
        "Conséquences opérationnelles pour le BR : ne jamais déconnecter un conducteur PEN sans avoir consigné l'ensemble du départ aval. Ne jamais supprimer la continuité du PEN, même momentanément. Si une intervention nécessite de toucher au PEN, elle doit faire l'objet d'une consignation complète (BC ou B2) et non d'une simple mise hors tension pour son propre compte.",
        "Les câbles à isolation textile (coton, soie, caoutchouc vulcanisé) étaient courants jusqu'aux années 1970-1980. Leur isolation se dégrade avec le temps, la chaleur et les cycles de dilatation. Un câble dont la gaine s'effrite au toucher, dont l'isolation individuelle se fissure ou dont la coloration est uniformément grisée doit être traité comme un câble à risque d'arc. La manipulation peut rompre l'isolation résiduelle et créer un défaut de phase ou un contact direct.",
        "La mesure de résistance d'isolement (Ri) sur un câble ancien à isolation textile doit être réalisée avec prudence : la tension de test du mégohmmètre (500 V ou 1 000 V) peut accélérer la dégradation d'une isolation déjà fragilisée. Il est préférable de commencer par une inspection visuelle complète et de signaler l'état au responsable de maintenance avant d'appliquer la tension de test.",
        "Les tableaux électriques pré-1990 peuvent présenter des caractéristiques hors des exigences actuelles : disjoncteurs à faible pouvoir de coupure (PDC inférieur aux niveaux requis pour l'installation), fusibles à couteaux ou à cartouche ouverts sans protection contre les projections en cas de court-circuit, absence de protection différentielle 30 mA sur les circuits terminaux, borniers de terre non équipotentiels. Ces installations peuvent être en exploitation légale mais le BR doit adapter son analyse de risque en conséquence.",
        "Le schéma IT (Impédant-Terre) est caractérisé par un neutre de transformateur isolé ou relié à la terre par une haute impédance (typiquement 500 à 1 000 Ω). Les masses utilisateurs sont, elles, reliées à une prise de terre locale. Ce schéma est choisi dans les contextes où la continuité de service est impérative : blocs opératoires, salles de réanimation, industries de process en continu (sidérurgie, papeterie, chimie), certains systèmes informatiques critiques.",
        "La propriété fondamentale du schéma IT est la suivante : lors d'un premier défaut d'isolement (contact accidentel entre un conducteur actif et la masse ou la terre), l'alimentation n'est pas interrompue. Le courant de défaut reste limité par l'impédance du neutre, les utilisateurs ne sont pas exposés et la production continue. Ce premier défaut est signalé par un Contrôleur Permanent d'Isolement (CPI) — dispositif de surveillance qui émet une alarme visuelle et sonore. C'est ce signal qu'il faut impérativement traiter.",
        "Le danger en schéma IT intervient lors d'un deuxième défaut simultané sur une autre phase ou un autre circuit. Dans ce cas, les deux défauts se combinent : un courant de court-circuit ou d'électrocution peut circuler entre les deux points de défaut, potentiellement à travers une personne ou une masse. Le système coupe alors automatiquement, mais le risque d'accident est réel si le premier défaut n'a pas été éliminé à temps.",
        "Pour le BR en schéma IT, les règles opérationnelles sont claires. Premièrement, ne jamais ignorer une alarme CPI : c'est le signal qu'un premier défaut est présent quelque part sur l'installation. Deuxièmement, localiser et éliminer le premier défaut avant d'intervenir sur d'autres circuits, car tout geste sur une autre partie de l'installation crée un risque de deuxième défaut simultané. Troisièmement, ne jamais neutraliser ou court-circuiter le CPI pour 'faire taire l'alarme' : cela supprime la seule protection qui distingue un premier défaut (sans danger) d'un deuxième défaut (potentiellement mortel).",
        "Identifier un schéma IT sur site : le tableau général comporte un CPI (boîtier de surveillance avec voyant vert/rouge et bornes de mesure), le neutre du transformateur n'est pas raccordé directement à la terre, et les câbles de protection sont reliés à une prise de terre distincte du neutre. En pratique, la présence d'un CPI sur le tableau est le premier indicateur visible.",
      ],
      deepDive: [
        "Sur une installation TN-C, la mise à la terre des équipements repose entièrement sur la continuité du PEN. Un défaut d'isolement sur un équipement raccordé en TN-C déclenche le dispositif de protection par court-circuit entre phase et PEN — le courant de défaut est élevé. Si le PEN est rompu en amont du défaut, ce mécanisme disparaît. C'est pourquoi la norme interdit le TN-C dans les nouvelles installations et dans toute extension d'installation existante.",
        "La mise en conformité d'une installation TN-C (passage en TN-S ou TT) nécessite le remplacement des câbles de distribution (ajout d'un conducteur PE séparé) et la mise en place de protections différentielles adaptées. Cette décision relève du chargé d'exploitation électrique et de l'employeur, pas du BR. Le rôle du BR est d'identifier la situation, de documenter les risques associés et de les signaler.",
        "En schéma IT, la surveillance du CPI est une obligation d'exploitation, pas une option. Dans les établissements de santé (salles de bloc opératoire), les alimentations en IT sont définies par la norme NF C 15-211 et les interventions nécessitent une coordination étroite avec les équipes de maintenance biomédicale. Le BR qui intervient dans un établissement de santé sur un circuit IT doit systématiquement vérifier l'état du CPI avant de commencer.",
      ],
      keyPoints: [
        "TN-C : PEN = neutre + terre, pas de PE séparé. Rupture du PEN = masses à 230 V sans déclenchement.",
        "Ne jamais déconnecter le PEN sans consignation complète de l'aval.",
        "Câbles textiles dégradés : risque d'arc à la manipulation, précaution avant mégohmmètre.",
        "Tableaux pré-1990 : PDC insuffisant, pas de différentiel, signaler avant intervention.",
        "IT : neutre isolé ou impédant. 1er défaut → alarme CPI, pas de coupure.",
        "IT : 2e défaut simultané → coupure + risque d'électrocution entre les deux points de défaut.",
        "Alarme CPI en IT : localiser et éliminer le défaut avant toute autre intervention.",
        "Ne jamais neutraliser un CPI. Ne jamais ignorer son alarme.",
        "Évaluation et signalement sont dans le périmètre BR. La remise en conformité est hors périmètre.",
      ],
      forbiddenPoints: [
        "Couper ou déconnecter un conducteur PEN sans consignation complète de l'aval.",
        "Considérer un câble à isolation dégradée comme acceptable sans évaluation préalable.",
        "Réaliser une remise en conformité d'une installation TN-C sans ordre formalisé d'un B2 ou chargé d'exploitation.",
        "Neutraliser ou court-circuiter un CPI pour faire taire une alarme IT.",
        "Ignorer une alarme CPI et continuer à intervenir sur d'autres circuits en schéma IT.",
      ],
      legalRefs: [
        "NF C 15-100 § 312.2 — schémas de liaison à la terre TN-C, TN-S, TN-C-S, IT, TT.",
        "NF C 15-100 § 413.1.5 — schéma IT : conditions d'application et contrôleur permanent d'isolement.",
        "NF C 15-100 § 543 — conducteurs de protection et conducteur PEN.",
        "NF C 15-211 — installations électriques dans les établissements de soins (schéma IT médical).",
        "NF C 18-510 § 10.3 — intervention BT générale : préparation et analyse de risque.",
        "UTE C 15-103 — guide de choix des canalisations selon les conditions d'environnement.",
      ],
      practicalCase:
        "Exemple 1 (TN-C) : le BR intervient dans un atelier des années 1975. En ouvrant le tableau, il constate un schéma TN-C avec un unique conducteur bleu raccordé à la barre neutre et à la barre de terre. Il mesure la continuité du PEN sur les départs, documente l'état du tableau et rédige un rapport signalant les risques avant toute intervention sur les câbles.\nExemple 2 (IT) : le BR intervient dans un hôpital sur un circuit qui ne déclenche pas malgré un défaut apparent. En regardant le tableau, il identifie un CPI avec voyant rouge et alarme active. Il suspend toute intervention sur les circuits en aval, localise d'abord l'origine du premier défaut et le signale au responsable avant de poursuivre.",
      scenarios: [
        {
          situation:
            "Vous intervenez en BR pour diagnostiquer une prise défectueuse dans un atelier industriel construit en 1978. En ouvrant le tableau de zone, vous identifiez un schéma TN-C avec un unique conducteur bleu jouant le rôle de PEN. Votre client vous demande de débrancher ce conducteur du tableau pour le remplacer.",
          question:
            "Pouvez-vous déconnecter le conducteur PEN dans le cadre d'une intervention BR standard ?",
          wrongActions: [
            "Déconnecter le PEN après avoir coupé le disjoncteur général du tableau.",
            "Mettre hors tension le départ concerné et déconnecter le PEN.",
            "Déconnecter le PEN rapidement puis le reconnecter immédiatement après remplacement.",
          ],
          correctActions: [
            "Refuser de déconnecter le PEN dans le cadre d'une intervention BR simple.",
            "Expliquer que toute intervention sur le PEN nécessite une consignation complète de l'ensemble de l'aval par un BC ou un chargé de travaux B2, car la rupture du PEN peut mettre les masses aval à la tension du neutre.",
            "Documenter la situation et la transmettre au chargé d'exploitation pour organisation d'une consignation formelle.",
          ],
          explanation:
            "Dans un schéma TN-C, le conducteur PEN assure simultanément le retour du courant de service et la protection des masses. Sa rupture, même momentanée, peut faire apparaître sur toutes les masses métalliques aval une tension de 230 V par rapport au sol sans déclencher les protections. Couper simplement le disjoncteur amont ne suffit pas : il faut une consignation complète de tout l'aval pour intervenir sur le PEN en sécurité.",
          normRef: "NF C 15-100 § 543.4 — conducteur PEN : continuité et conditions d'intervention ; NF C 18-510 § 10.3",
        },
        {
          situation:
            "Lors d'une intervention BR dans un immeuble de bureaux des années 1965, vous devez mesurer la résistance d'isolement d'un câble de distribution. En inspectant visuellement le câble avant de brancher votre mégohmmètre, vous constatez que sa gaine extérieure est en tissu grisâtre, et que l'isolation individuelle des conducteurs semble se fissurer légèrement sur toute la longueur visible.",
          question:
            "Comment procédez-vous avant d'appliquer la tension de test du mégohmmètre sur ce câble ?",
          wrongActions: [
            "Appliquer directement la tension de test 500 V : la mesure dira si le câble est encore acceptable.",
            "Appliquer une tension réduite de 100 V pour ménager le câble.",
            "Décider que le câble est hors service sans mesurer et le remplacer immédiatement.",
          ],
          correctActions: [
            "Documenter l'état visuel du câble avant toute mesure (photos, description écrite).",
            "Informer le responsable de maintenance de l'état dégradé avant d'appliquer la tension de test.",
            "Si la mesure est néanmoins réalisée, appliquer la tension progressivement et observer toute dégradation supplémentaire lors du test.",
          ],
          explanation:
            "Un câble à isolation textile dégradée peut voir son état s'aggraver sous la tension de test du mégohmmètre. Appliquer 500 V ou 1 000 V sur une isolation déjà fragilisée peut créer un claquage qui n'existait pas avant le test, transformant un câble à risque en câble hors service. La documentation de l'état préalable protège le BR et informe le client avant la décision de remplacement.",
          normRef: "NF C 15-100 § 612.3.2 — résistance d'isolement ; NF C 18-510 § 10.3.1 — préparation de l'intervention BR",
        },
        {
          situation:
            "Vous intervenez en BR pour évaluer un tableau des années 1985 dont les disjoncteurs déclenchent fréquemment. En inspection, vous constatez que les disjoncteurs ont un pouvoir de coupure indiqué de 3 kA, alors que le niveau de court-circuit disponible en amont est de 6 kA selon la documentation de l'installation.",
          question:
            "Quel est le risque lié à un disjoncteur dont le PDC est inférieur au courant de court-circuit disponible, et quelle suite donnez-vous ?",
          wrongActions: [
            "Remplacer immédiatement les disjoncteurs par des modèles conformes.",
            "Ignorer l'écart : les disjoncteurs anciens fonctionnent depuis des années sans incident.",
            "Calibrer les disjoncteurs à un déclenchement plus rapide pour compenser.",
          ],
          correctActions: [
            "Documenter l'écart dans votre rapport d'intervention : PDC insuffisant = risque d'explosion du disjoncteur en cas de court-circuit franc.",
            "Signaler l'anomalie au chargé d'exploitation avec recommandation de remplacement prioritaire.",
            "Ne pas remplacer vous-même les disjoncteurs sans ordre formalisé d'un chargé de travaux B2 : la modification d'un tableau de distribution sort du périmètre BR standard.",
          ],
          explanation:
            "Un disjoncteur dont le PDC est inférieur au courant de court-circuit disponible peut exploser en cas de défaut franc, projetant des éclats et provoquant un incendie. Ce n'est pas un défaut mineur. Le BR documente et signale — la décision de remplacement et les travaux associés appartiennent à un chargé de travaux B2.",
          normRef: "NF C 15-100 § 434 — protection contre les courants de court-circuit ; NF C 18-510 § 10.3.1 — limites de l'intervention BR",
        },
        {
          situation:
            "Vous intervenez en BR dans une clinique pour diagnostiquer une prise défectueuse dans une salle de soins. En inspectant le tableau de zone, vous observez un boîtier CPI avec un voyant rouge clignotant et une alarme sonore active. Le personnel soignant vous demande de 'couper cette alarme agaçante' pour travailler tranquillement.",
          question:
            "Comment réagissez-vous face à cette demande et que faites-vous avant de poursuivre votre intervention ?",
          wrongActions: [
            "Neutraliser le CPI ou mettre son alarme en silence pour continuer l'intervention.",
            "Ignorer l'alarme et commencer à travailler sur la prise défectueuse : le CPI ne concerne pas votre circuit.",
            "Remplacer la prise puis signaler l'alarme à la fin de l'intervention.",
          ],
          correctActions: [
            "Refuser de neutraliser le CPI : son alarme signale un premier défaut d'isolement actif sur l'installation IT.",
            "Suspendre l'intervention sur la prise jusqu'à ce que le premier défaut soit localisé et éliminé.",
            "Expliquer au personnel que l'alarme CPI en IT protège contre le deuxième défaut simultané : intervenir sur un autre circuit avec un premier défaut actif crée un risque d'électrocution.",
            "Localiser d'abord l'origine du premier défaut (mesure d'isolement par départs successifs) avant de reprendre toute intervention.",
          ],
          explanation:
            "En schéma IT, le premier défaut ne coupe pas l'alimentation — c'est la propriété qui garantit la continuité de service. Mais ce premier défaut doit être éliminé avant toute nouvelle intervention sur l'installation, car un deuxième défaut simultané sur une autre phase crée un court-circuit ou une électrocution entre les deux points de défaut. Neutraliser le CPI supprime la seule alarme qui distingue une situation sûre d'une situation à double défaut. C'est interdit et dangereux.",
          normRef: "NF C 15-100 § 413.1.5 — schéma IT : surveillance par CPI et élimination du premier défaut ; NF C 15-211 — installations IT médicales",
        },
      ],
      chapterImagePath: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-br.svg",
      chapterImageAlt:
        "Schémas TN-C et IT — risques spécifiques et règles opérationnelles pour le BR",
      visual: {
        title: "Schémas de liaison à la terre : les points critiques BR",
        subtitle:
          "TN-C, IT, câbles dégradés et tableaux anciens : identifier, comprendre les contraintes, documenter.",
        items: [
          "TN-C : PEN = neutre + terre — ne pas couper sans consignation",
          "IT : 1er défaut = alarme CPI → localiser et éliminer",
          "IT : 2e défaut simultané = risque d'électrocution",
          "Câbles textiles : isolation fragile — précaution mégohmmètre",
          "Tableaux anciens : PDC insuffisant — signaler",
          "Rôle BR : évaluer, documenter, signaler",
        ],
        tone: "slate",
        imagePath: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-br.svg",
      },
    },
    {
      id: "mesurages-essais-connexions",
      title: "10. Mesurages, essais, connexions / déconnexions et limites d'intervention",
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
      scenarios: [
        {
          situation: "En cours d'intervention, le client vous demande d'effectuer un essai de fonctionnement non prévu dans votre ordre de mission, en remettant momentanément sous tension un départ consigné.",
          question: "Pouvez-vous réaliser un essai hors de votre ordre de mission initial ?",
          wrongActions:           [
            "Lever la consignation pour l'essai puisque le client le demande.",
            "Réaliser l'essai 'vite fait' avant de reconsigner.",
            "Obtenir l'accord oral du client comme autorisation suffisante.",
          ],
          correctActions:           [
            "Refuser de modifier le plan d'intervention sans validation formelle.",
            "Expliquer que tout essai doit être prévu, documenté et autorisé dans l'ordre de mission.",
            "Contacter votre hiérarchie pour obtenir une modification officielle de l'ordre de mission avant d'agir.",
          ],
          explanation: "Tout essai implique une remise temporaire sous tension d'un circuit. Cette opération doit être planifiée, autorisée et documentée. Une levée de consignation improvisée est l'une des causes d'accidents lors des phases de test.",
          normRef: "NF C 18-510 § 6.4 — essais et remises sous tension temporaires",
        },
        {
          situation: "On vous remet un multimètre pour réaliser des mesures de tension sur un TGBT 400 V. L'appareil indique CAT II. Vous n'avez pas d'autre instrument disponible.",
          question: "Un multimètre CAT II est-il adapté à des mesures sur tableau BT industriel ?",
          wrongActions:           [
            "Utiliser l'appareil car il est conçu pour les mesures électriques.",
            "Faire les mesures rapidement pour minimiser l'exposition.",
            "Vérifier juste que les sondes sont en bon état.",
          ],
          correctActions:           [
            "Refuser d'utiliser un multimètre CAT II sur un TGBT BT industriel.",
            "Demander un appareil CAT III ou CAT IV adapté à ce type d'installation.",
            "Différer les mesures jusqu'à disponibilité du matériel adapté.",
          ],
          explanation: "La catégorie de surtension (CAT) de l'appareil doit correspondre au point de mesure. Un CAT II convient aux appareils raccordés (prises). Un TGBT industriel exige un CAT III minimum. Utiliser un appareil sous-catégorisé peut provoquer un arc électrique en cas de transitoire.",
          normRef: "NF EN 61010-1 — catégories de surtension des appareils de mesure",
        },
      ],
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
      title: "11. Outils, EPI, EPC et environnement de travail",
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
      scenarios: [
        {
          situation: "Vous prenez un tournevis dans la caisse à outils communs et constatez que la poignée isolante est fissurée sur 3 cm. Vous avez besoin de cet outil pour démarrer le chantier.",
          question: "Peut-on utiliser un outil isolé présentant des dommages visibles ?",
          wrongActions:           [
            "Utiliser le tournevis en faisant attention à ne pas toucher la fissure.",
            "Réparer la fissure avec du ruban isolant.",
            "Décider que la fissure n'atteint pas la partie conductrice.",
          ],
          correctActions:           [
            "Mettre l'outil de côté et le signaler comme non conforme.",
            "Rechercher un outil en bon état avant de commencer.",
            "Ne jamais utiliser un EPI ou un outil isolé endommagé, même pour une opération courte.",
          ],
          explanation: "Un outil isolé endommagé n'offre plus la protection pour laquelle il a été conçu. La fissure peut exposer la partie conductrice ou laisser pénétrer l'humidité. L'intégrité des outils isolés doit être vérifiée avant chaque utilisation.",
          normRef: "NF C 18-510 § 9.2 — vérification et état des outillages isolés",
        },
        {
          situation: "En prenant vos gants isolants, vous constatez que leur date de périodicité de contrôle est dépassée de 4 mois. C'est les seuls gants disponibles sur le chantier.",
          question: "Des gants isolants hors période de contrôle peuvent-ils être utilisés ?",
          wrongActions:           [
            "Utiliser les gants car ils semblent en bon état visuellement.",
            "Les gonfler d'air pour vérifier l'étanchéité avant de les utiliser.",
            "Considérer que 4 mois de dépassement est marginal.",
          ],
          correctActions:           [
            "Refuser d'utiliser les gants hors période de contrôle.",
            "Suspendre l'intervention jusqu'à obtention de gants conformes.",
            "Signaler l'état du parc EPI à votre responsable pour mise en conformité.",
          ],
          explanation: "Les EPI isolants (gants, tapis, perches) ont une périodicité de contrôle diélectrique réglementaire. Passée cette date, leur niveau d'isolation n'est plus garanti. Un contrôle visuel ne remplace pas un test diélectrique en laboratoire.",
          normRef: "NF EN 60903 et NF C 18-510 § 9.3 — périodicité de contrôle des gants isolants",
        },
      ],
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
      title: "12. Anomalies, écarts et situations d'urgence",
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
      scenarios: [
        {
          situation: "Vous travaillez à côté d'un collègue qui reçoit soudainement une décharge électrique. Il lâche son outil, crie et s'effondre. Vous êtes le premier à réagir.",
          question: "Quelles sont les premières actions à effectuer face à une électrisation ?",
          wrongActions:           [
            "Saisir votre collègue par le bras pour l'écarter de la source.",
            "Crier pour appeler de l'aide sans autre action.",
            "Attendre que quelqu'un d'autre intervienne.",
          ],
          correctActions:           [
            "Ne jamais toucher la victime sans avoir coupé l'alimentation électrique ou l'avoir séparée de la source de façon sécurisée.",
            "Couper l'alimentation au tableau le plus proche si accessible et sécurisé.",
            "Alerter les secours (15, 18 ou 112), pratiquer les gestes de premiers secours si formé SST, et ne pas laisser la victime seule.",
          ],
          explanation: "En cas d'électrisation, la première règle est de ne pas se mettre en danger : ne pas toucher la victime avant coupure de l'alimentation. Après coupure ou séparation sécurisée, appeler les secours et pratiquer les gestes appris.",
          normRef: "NF C 18-510 § 10 — conduite à tenir en cas d'accident électrique",
        },
        {
          situation: "En inspectant un tableau après une intervention, vous sentez une forte odeur de brûlé et constatez des traces noircies autour d'un départ. Le voyant de défaut est allumé.",
          question: "Que faites-vous face à une anomalie thermique sur une armoire électrique ?",
          wrongActions:           [
            "Ouvrir l'armoire pour identifier la pièce défectueuse.",
            "Remettre le départ sous tension pour voir si le problème est résolu.",
            "Passer la main sur la porte pour sentir si elle est chaude.",
          ],
          correctActions:           [
            "Ne pas ouvrir l'armoire : risque d'amorçage d'arc et de propagation d'incendie.",
            "Couper l'alimentation générale de l'armoire depuis l'amont.",
            "Alerter le chargé de travaux ou le responsable de site, consigner l'armoire et attendre l'intervention d'un spécialiste avec le matériel adapté.",
          ],
          explanation: "Une anomalie thermique sur un tableau peut indiquer un arc électrique en cours, un composant en surchauffe ou un début d'incendie interne. L'ouverture sans précaution expose à un arc de forte énergie. La mise hors tension depuis l'amont est la première action.",
          normRef: "NF C 18-510 § 10 — conduite à tenir face aux anomalies et risque d'incendie électrique",
        },
      ],
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
      title: "13. Retour d'expérience, compte rendu et maintien des compétences",
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
      scenarios: [
        {
          situation: "À la fin d'une journée de travail, vous réalisez que vous avez failli toucher un conducteur sous tension car une consignation était incomplète. Aucun accident ne s'est produit. Vous hésitez à le signaler pour ne pas créer de problèmes.",
          question: "Un presque-accident (near miss) doit-il être signalé ?",
          wrongActions:           [
            "Ne rien dire puisqu'il n'y a eu aucun blessé.",
            "En parler à voix basse entre collègues sans remontée officielle.",
            "Corriger vous-même l'anomalie sans la documenter.",
          ],
          correctActions:           [
            "Signaler le presque-accident immédiatement à votre responsable et au chargé de travaux.",
            "Documenter les circonstances : heure, localisation, nature de la défaillance.",
            "Participer activement à l'analyse pour identifier la cause et proposer une action corrective.",
          ],
          explanation: "Les presque-accidents (near miss) sont des signaux précurseurs d'accidents graves. Leur signalement et leur analyse permettent de corriger les défaillances organisationnelles ou techniques avant qu'un accident réel ne se produise. Le silence est une prise de risque collective.",
          normRef: "Code du travail L. 4131-1 — droit de retrait et obligation de signalement des dangers",
        },
        {
          situation: "Votre méthode personnelle de consignation diffère légèrement de la procédure écrite de l'entreprise. Vous avez développé cette méthode sur l'expérience et n'avez jamais eu d'accident.",
          question: "Une méthode personnelle non documentée est-elle acceptable ?",
          wrongActions:           [
            "Continuer votre méthode car elle a fait ses preuves.",
            "Utiliser votre méthode tout en respectant la procédure sur le papier.",
            "Former les jeunes à votre méthode comme si c'était la référence.",
          ],
          correctActions:           [
            "Respecter strictement la procédure de l'entreprise.",
            "Si vous pensez que votre méthode est meilleure, la soumettre à validation formelle pour modifier la procédure officielle.",
            "Ne jamais transmettre une méthode personnelle non validée à d'autres collaborateurs.",
          ],
          explanation: "Les procédures de consignation sont le résultat d'une analyse collective des risques. Une méthode personnelle peut sembler efficace jusqu'à une configuration inhabituellement dangereuse. La cohérence des pratiques est une condition de sécurité collective.",
          normRef: "NF C 18-510 § 3 — principes généraux de prévention et cohérence des procédures",
        },
      ],
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
      title: "14. Documents, autorisations et coordination de chantier",
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
      scenarios: [
        {
          situation: "Vous êtes chargé de consignation BC. En cours de procédure, vous réalisez que l'attestation de consignation n'a pas été contre-signée par le chargé de travaux avant de lui remettre. Il est pressé de commencer.",
          question: "Les travaux peuvent-ils commencer sans signature complète des documents de consignation ?",
          wrongActions:           [
            "Remettre verbalement l'attestation en lui demandant de signer après.",
            "Commencer les travaux en faisant confiance à la rigueur du chargé de travaux.",
            "Signer vous-même en lieu et place du chargé de travaux pour débloquer la situation.",
          ],
          correctActions:           [
            "Exiger la signature du chargé de travaux sur l'attestation avant tout début des travaux.",
            "Ne pas remettre la zone de travail sans les signatures requises.",
            "Expliquer que le document signé est la seule preuve formelle que la consignation a été réceptionnée.",
          ],
          explanation: "L'attestation de consignation signée par les deux parties (BC et chargé de travaux) est la formalité qui transfère la responsabilité de la zone. Sans signature, la consignation n'est pas officiellement remise. La pression du temps ne justifie pas de s'en affranchir.",
          normRef: "NF C 18-510 § 6.3.6 — remise de l'attestation de consignation et signatures",
        },
        {
          situation: "Le plan électrique dont vous disposez date de 3 ans. L'installation a visiblement évolué : un départ a été ajouté et un autre semble avoir été déplacé. Vous devez consigner un départ pour des travaux urgents.",
          question: "Peut-on réaliser une consignation sur la base d'un plan non à jour ?",
          wrongActions:           [
            "Réaliser la consignation en adaptant le plan de mémoire.",
            "Procéder par déduction visuelle pour identifier le circuit.",
            "Consigner le circuit vraisemblable et vérifier a posteriori.",
          ],
          correctActions:           [
            "Refuser de commencer la consignation sur un plan non à jour.",
            "Demander le schéma à jour au responsable technique ou au gestionnaire de l'installation.",
            "Si le plan ne peut être obtenu, différer les travaux jusqu'à mise à jour documentaire ou levée de doute terrain sécurisée.",
          ],
          explanation: "Un plan non à jour peut conduire à consigner le mauvais circuit, laissant un circuit sous tension considéré comme hors tension. C'est l'une des causes d'accidents les plus fréquentes lors d'interventions sur des installations évolutives.",
          normRef: "NF C 18-510 § 5.3 — exigence de documentation fiable avant toute opération",
        },
      ],
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
      id: "pv-batteries-dc-br",
      title: "15. Photovoltaïque, batteries et courant continu : spécificités pour le BR",
      estimatedMinutes: 30,
      intro:
        "Le courant continu produit par les installations photovoltaïques, les batteries industrielles et les onduleurs présente des risques spécifiques que le chargé d'intervention BR doit savoir identifier. Arc électrique difficile à couper, tension permanente des panneaux, densité d'énergie élevée des batteries : le cadre d'intervention est différent du courant alternatif classique.",
      content: [
        "Les panneaux photovoltaïques génèrent du courant continu dès qu'ils sont exposés à la lumière. Contrairement à un circuit alternatif qui s'interrompt au disjoncteur côté réseau, les chaînes PV côté courant continu restent sous tension tant que la lumière du jour les atteint. Il n'existe pas de disjoncteur en courant continu capable de rompre le circuit PV côté source.",
        "Cette tension continue peut atteindre 600 V à 1 500 V selon l'architecture du système. En cas de contact ou d'arc, la tension ne se réduit pas naturellement à zéro comme en courant alternatif. L'arc électrique DC ne s'éteint pas de lui-même : il peut se maintenir, progresser et provoquer un incendie.",
        "Pour intervenir sur un circuit PV côté DC, il faut à la fois couper l'onduleur côté AC (pour supprimer l'injection réseau) et couvrir les panneaux avec une bâche opaque ou attendre l'obscurité complète pour supprimer la source DC. Ces deux actions sont indépendantes et toutes deux nécessaires.",
        "Les batteries industrielles (plomb ouvert, plomb gel, lithium-ion, NiMH) présentent une tension permanente qui ne peut pas être interrompue par un disjoncteur seul : l'énergie est stockée dans les cellules et disponible immédiatement. Même un bloc de batteries avec sectionneur ouvert peut délivrer un courant élevé si un contact involontaire court-circuite les bornes.",
        "Les batteries au lithium présentent un risque supplémentaire : le thermal runaway (emballement thermique). Un court-circuit, un choc mécanique ou une surchauffe peuvent déclencher une réaction chimique auto-entretenue, avec dégagement de gaz inflammables et toxiques, et risque d'incendie ou d'explosion.",
        "En courant continu, la valeur du courant de contact est perçue différemment par l'organisme par rapport au courant alternatif. Le seuil de tétanisation musculaire est plus élevé en DC qu'en AC, mais le risque de brûlure par arc est supérieur en DC en raison du maintien de l'arc. Un arc DC à 500 V provoque des lésions thermiques sévères.",
        "Le BR doit intégrer ces spécificités avant toute intervention sur une installation comportant des panneaux PV, des batteries ou des onduleurs DC/AC. Si l'intervention dépasse le cadre de son titre, il doit s'arrêter et faire appel à un habilité adapté ou à un spécialiste de l'installation.",
      ],
      deepDive: [
        "La norme NF C 15-712 encadre la conception des installations photovoltaïques raccordées au réseau. Elle impose des dispositifs de coupure et de sectionnement côté DC, des protections contre les surtensions et une signalisation des risques spécifiques. Le BR intervenant sur une installation PV existante doit vérifier que ces dispositifs sont présents et opérationnels avant tout travail.",
        "Les batteries lithium-ion posent un problème particulier lors d'interventions de maintenance : elles peuvent être en charge partielle ou totale même quand le système est en veille. Le BR doit obtenir l'état de charge et l'état de santé (SOH) de la batterie auprès du BMS (Battery Management System) avant d'intervenir sur les connexions.",
      ],
      keyPoints: [
        "Panneaux PV : tension DC permanente dès la lumière, arc non extinctible sans occultation.",
        "Couper l'onduleur côté AC ET couvrir les panneaux pour supprimer le risque DC.",
        "Batteries : énergie stockée indisponible à l'ouverture du sectionneur seul.",
        "Batteries Li-ion : risque d'emballement thermique, gaz inflammables et toxiques.",
        "Arc DC : ne s'éteint pas naturellement, brûlures sévères.",
      ],
      forbiddenPoints: [
        "Considérer qu'ouvrir le disjoncteur AC suffit à mettre hors tension une installation PV côté DC.",
        "Intervenir sur une batterie lithium sans connaître son état de charge et son état de santé.",
        "Confondre les spécificités DC et AC : les protections, les appareils et les réflexes sont différents.",
      ],
      legalRefs: [
        "NF C 15-712-1 — installations photovoltaïques raccordées au réseau.",
        "NF C 18-510 § 5 — opérations électriques en courant continu.",
        "Guide UTE C 15-712-2 — systèmes de stockage d'énergie (batteries).",
        "IEC 62619 — exigences de sécurité pour les batteries lithium-ion industrielles.",
      ],
      practicalCase:
        "Exemple : un BR est appelé pour intervenir sur l'onduleur d'une toiture PV de 30 kWc. Il coupe le disjoncteur de réseau côté AC. Avant de toucher les câbles DC côté panneaux, il vérifie que les panneaux sont occultés (bâche ou nuit tombée) et mesure l'absence de tension DC avec un multimètre CAT III adapté aux mesures DC haute tension.",
      scenarios: [
        {
          situation:
            "Vous êtes BR et intervenez pour remplacer un onduleur sur une installation PV de toiture. Il est 14 h, grand soleil. Vous avez coupé le disjoncteur de dérivation côté réseau 230 V. Votre collègue vous dit qu'il faut maintenant débrancher les connecteurs MC4 des câbles DC côté panneaux.",
          question:
            "Pouvez-vous débrancher les connecteurs MC4 DC directement après avoir coupé l'onduleur côté AC ?",
          wrongActions: [
            "Débrancher les MC4 immédiatement : l'onduleur est coupé, donc plus de risque DC.",
            "Utiliser vos gants d'isolation BT pour débrancher les connecteurs sous tension.",
            "Mesurer la tension avec votre multimètre CAT II BT pour vérifier l'absence de tension.",
          ],
          correctActions: [
            "Ne pas toucher les connecteurs MC4 : les panneaux sont toujours sous tension DC tant qu'ils reçoivent de la lumière.",
            "Couvrir les panneaux avec une bâche opaque ou reporter l'intervention après la tombée de la nuit.",
            "Mesurer l'absence de tension DC avec un multimètre CAT III adapté à la tension DC de l'installation (≥ 600 V DC) avant tout contact.",
          ],
          explanation:
            "Couper l'onduleur côté AC n'interrompt pas la production des panneaux PV côté DC. Sous plein soleil, les câbles DC restent à la tension de circuit ouvert (Voc) de la chaîne, pouvant dépasser 400 V à 700 V selon l'architecture. Un arc DC à cette tension est non extinctible et provoque des brûlures sévères.",
          normRef: "NF C 15-712-1 § 712.537 — sectionnement et coupure des installations PV ; NF C 18-510 § 5",
        },
        {
          situation:
            "Vous intervenez en BR pour effectuer une mesure de résistance d'isolement sur un câblage DC d'une batterie de stockage lithium-ion 48 V / 200 Ah. Avant de brancher votre mégohmmètre, vous ouvrez le sectionneur principal de la batterie.",
          question:
            "L'ouverture du sectionneur principal suffit-elle à rendre la batterie Li-ion sûre pour une mesure d'isolement ?",
          wrongActions: [
            "Oui, le sectionneur ouvert coupe toute énergie : brancher le mégohmmètre.",
            "Vérifier uniquement avec un voltmètre aux bornes du sectionneur pour confirmer l'absence de tension.",
            "Connecter le mégohmmètre directement aux bornes DC de la batterie pour mesurer l'isolement.",
          ],
          correctActions: [
            "Vérifier auprès du BMS (Battery Management System) que la batterie est en état de repos et que le sectionneur de cellules internes est ouvert.",
            "Ne jamais connecter un mégohmmètre directement aux bornes de cellules Li-ion : la tension de test peut endommager ou initier un emballement thermique.",
            "Mesurer la tension résiduelle aux bornes du câblage avant de connecter tout instrument.",
          ],
          explanation:
            "Les batteries Li-ion contiennent une énergie stockée dans les cellules qui est indépendante de l'état du sectionneur de coffret. L'ouverture du sectionneur ne supprime pas la tension interne. Un court-circuit ou une tension de test inadaptée peut provoquer un emballement thermique (thermal runaway) avec dégagement de gaz inflammables et risque d'incendie.",
          normRef: "IEC 62619 — sécurité des batteries lithium-ion industrielles ; Guide UTE C 15-712-2",
        },
        {
          situation:
            "En inspectant une installation PV d'ombrière de parking, vous observez sur les câbles DC une gaine partiellement fondue sur environ 15 cm, avec trace de carbonisation. L'installation est en service. Votre ordre de mission porte sur une vérification visuelle.",
          question:
            "Que faites-vous face à cette anomalie sur câble DC sous tension ?",
          wrongActions: [
            "Enrouler la zone abîmée avec du ruban isolant pour la protéger provisoirement.",
            "Continuer la vérification visuelle et noter l'anomalie dans votre rapport sans autre action.",
            "Couper l'onduleur AC et couper les chaînes au niveau du boîtier DC pour intervenir immédiatement sur le câble.",
          ],
          correctActions: [
            "Signaler immédiatement l'anomalie au responsable de l'installation et lui recommander l'arrêt du système en urgence.",
            "Ne pas toucher le câble endommagé, même avec des EPI : l'état de l'isolant ne garantit pas la sécurité en cas de contact.",
            "Documenter l'anomalie avec une photo et une description précise pour le rapport.",
          ],
          explanation:
            "Un câble DC avec gaine fondue ou carbonisée présente un risque d'arc électrique imminent. L'arc DC ne s'éteint pas de lui-même et peut déclencher un incendie. Une intervention improvisée sur un câble DC dégradé sous tension, même avec des EPI BT, dépasse le cadre d'une vérification visuelle et expose à un risque non maîtrisé. L'arrêt de l'installation doit être décidé par le responsable.",
          normRef: "NF C 15-712-1 § 712.52 — protection contre les défauts d'isolement en courant continu",
        },
        {
          situation:
            "Lors d'une intervention de maintenance préventive sur un onduleur bidirectionnel couplé à un rack de batteries Li-ion, vous entendez un léger sifflement inhabituel et percevez une légère odeur âcre provenant du rack de batteries.",
          question:
            "Quels sont les bons réflexes face à ces signaux d'alerte sur un système de stockage Li-ion ?",
          wrongActions: [
            "Continuer l'intervention : ces odeurs sont normales sur des batteries sous charge.",
            "Ouvrir le rack pour identifier la source de l'odeur.",
            "Brancher un extracteur d'air pour dissiper les éventuels gaz et reprendre le travail.",
          ],
          correctActions: [
            "Arrêter immédiatement l'intervention et quitter la zone.",
            "Couper l'alimentation de l'onduleur depuis un point de commande distant si disponible, sans s'approcher du rack.",
            "Alerter le responsable de site, les secours si nécessaire, et interdire l'accès à la zone jusqu'à expertise d'un technicien spécialisé batteries.",
          ],
          explanation:
            "Un sifflement et une odeur âcre sur un rack Li-ion sont des signaux précurseurs d'emballement thermique. À ce stade, des gaz inflammables et toxiques (fluorure d'hydrogène, monoxyde de carbone) peuvent déjà être présents. Ouvrir le rack accélèrerait l'emballement par apport d'oxygène. L'évacuation et l'alerte sont les seuls réflexes adaptés.",
          normRef: "IEC 62619 § 6.4 — prévention et gestion des incidents thermiques sur batteries Li-ion",
        },
      ],
      chapterImagePath: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-synthese.svg",
      chapterImageAlt:
        "Installation photovoltaïque avec panneaux, onduleur et système de stockage batteries pour BR",
      visual: {
        title: "DC : des risques que l'AC n'a pas",
        subtitle:
          "Panneaux toujours actifs sous la lumière, batteries jamais vraiment hors tension, arc qui ne s'éteint pas.",
        items: [
          "Panneaux PV : tension DC permanente",
          "Batteries : énergie stockée inaccessible au sectionneur",
          "Arc DC : non extinctible sans occultation",
          "Li-ion : risque d'emballement thermique",
        ],
        tone: "amber",
        imagePath: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-synthese.svg",
      },
    },
    {
      id: "mesures-br-specifiques",
      title: "16. Mesures spécifiques BR : résistance d'isolement, impédance de boucle et thermographie",
      estimatedMinutes: 30,
      intro:
        "Le chargé d'intervention BR est l'un des rares habilités autorisés à effectuer des mesurages en basse tension dans un cadre d'intervention générale. Résistance d'isolement, impédance de boucle et thermographie sont trois outils du diagnostic terrain qui exigent méthode, matériel adapté et lecture des résultats.",
      content: [
        "La résistance d'isolement (Ri) mesure la qualité de l'isolation entre les conducteurs actifs et la masse ou la terre. Elle s'exprime en mégohms (MΩ). Une valeur dégradée révèle une détérioration du matériau isolant, une humidité, un vieillissement ou un défaut d'installation.",
        "La mesure de Ri s'effectue hors tension, avec un mégohmmètre (ou télémégohmmètre). Le circuit à tester doit être consigné, les appareils sensibles déconnectés (variateurs, équipements électroniques), et la tension de test adaptée au domaine : 500 V pour les circuits BT courants, 1 000 V pour certains câbles haute isolation.",
        "Les valeurs minimales couramment retenues par la pratique sont 1 MΩ pour les circuits neufs et 0,5 MΩ pour les circuits existants en exploitation. En dessous, une investigation est requise. Ces seuils sont indicatifs : les référentiels constructeurs et les normes d'installation prévalent.",
        "L'impédance de boucle (Zs) mesure la résistance totale du circuit de défaut entre le point de mesure et la source. Elle conditionne le courant de court-circuit disponible et détermine si les dispositifs de protection (disjoncteur, fusible) peuvent déclencher dans les temps requis.",
        "La mesure d'impédance de boucle s'effectue sous tension avec un ohmmètre de boucle conforme aux exigences de la NF C 15-100. Le résultat est comparé à l'impédance maximale admissible en fonction du calibre et du type du dispositif de protection. Si Zs est trop élevée, la protection ne déclenche pas dans les délais réglementaires.",
        "La thermographie infrarouge détecte les points chauds sur les installations électriques sous charge. Un échauffement anormal sur un bornier, une connexion, un disjoncteur ou un jeu de barres révèle une résistance de contact élevée, un déséquilibre de charge ou un défaut en développement avant claquage.",
        "La thermographie s'effectue sous tension et sous charge représentative (idéalement au moins 30 % de la charge nominale). Elle nécessite une caméra infrarouge calibrée et un protocole d'interprétation (référence à une connexion saine adjacente, classification selon les écarts de température). Les résultats doivent être tracés dans un rapport.",
        "Ces trois techniques sont complémentaires : la résistance d'isolement révèle les défauts d'isolation, l'impédance de boucle garantit l'efficacité des protections, et la thermographie détecte les échauffements sous charge. Aucune ne se substitue aux autres.",
      ],
      deepDive: [
        "Un BR réalisant des mesures doit documenter ses résultats, indiquer les seuils de référence utilisés, noter les conditions opératoires (tension de test, charge présente, température ambiante) et signaler tout résultat hors seuil à son chargé d'exploitation ou au responsable de maintenance.",
        "La thermographie ne peut pas être réalisée par n'importe quel opérateur : l'interprétation des images demande une formation spécifique (niveau 1 ou 2 de qualification thermographe) et une connaissance du matériel inspecté. Le BR peut assister à la mesure, mais l'interprétation formelle revient à un thermographe qualifié.",
      ],
      keyPoints: [
        "Résistance d'isolement : mesure hors tension, mégohmmètre, seuil ≥ 0,5 MΩ.",
        "Impédance de boucle : mesure sous tension, compare au calibre du dispositif de protection.",
        "Thermographie : sous charge, détecte les points chauds, exige un thermographe qualifié pour l'interprétation.",
        "Les trois mesures sont complémentaires et documentées.",
      ],
      forbiddenPoints: [
        "Mesurer la résistance d'isolement sur un circuit sous tension.",
        "Interpréter seul une thermographie sans qualification thermographe.",
        "Utiliser un mégohmmètre 500 V sur un circuit avec des variateurs connectés.",
      ],
      legalRefs: [
        "NF C 15-100 § 612 — vérification des installations neuves (isolement, protection).",
        "NF EN 61010-1 — catégories de surtension des appareils de mesure.",
        "Guide UTE C 15-900 — vérifications des installations électriques.",
        "NF EN 13187 / ISO 6781 — thermographie des enveloppes de bâtiments (référence croisée pour la méthode thermographique).",
      ],
      practicalCase:
        "Exemple : lors d'une visite de maintenance préventive, le BR mesure l'impédance de boucle d'un départ éclairage 16 A. Il obtient Zs = 1,2 Ω. Le disjoncteur C16 exige Zs ≤ 1,44 Ω pour déclencher en 0,4 s. Le résultat est limite : le BR le documente, signale la situation et recommande une vérification des connexions.",
      scenarios: [
        {
          situation:
            "Vous êtes habilité BR et devez mesurer la résistance d'isolement d'un circuit de prises de courant 230 V. En préparant votre intervention, vous réalisez que ce circuit alimente aussi un variateur de vitesse 7,5 kW raccordé en permanence.",
          question:
            "Comment gérez-vous la présence du variateur avant de réaliser la mesure de résistance d'isolement ?",
          wrongActions: [
            "Appliquer la tension de test 500 V directement : le variateur est conçu pour la BT.",
            "Réduire la tension de test à 100 V pour préserver le variateur.",
            "Réaliser la mesure rapidement sans déconnecter : les variateurs modernes résistent aux transitoires.",
          ],
          correctActions: [
            "Déconnecter le variateur de vitesse du circuit avant d'appliquer la tension de test du mégohmmètre.",
            "Identifier tous les équipements électroniques raccordés sur le circuit et les déconnecter.",
            "Documenter les équipements déconnectés pour permettre leur reconnexion après la mesure.",
          ],
          explanation:
            "Les mégohmmètres appliquent une tension continue de 500 V à 1 000 V pour tester l'isolement. Cette tension peut claquer les condensateurs de filtrage et les composants d'entrée des variateurs, onduleurs et automates. Tous les équipements électroniques doivent être déconnectés avant la mesure.",
          normRef: "NF C 15-100 § 612.3.2 — résistance d'isolement des installations",
        },
        {
          situation:
            "Lors d'une intervention de maintenance, vous mesurez l'impédance de boucle d'un départ prise 16 A (disjoncteur type B). Vous obtenez Zs = 0,45 Ω. La valeur limite pour un B16 est Zs ≤ 1,15 Ω. Votre responsable vous demande si l'installation est conforme.",
          question:
            "Comment interpréter ce résultat et que communiquez-vous à votre responsable ?",
          wrongActions: [
            "Signaler que l'installation est non conforme car 0,45 est différent de 1,15.",
            "Considérer que le résultat est bon sans l'analyser davantage.",
            "Refuser de communiquer sur les résultats car ce n'est pas dans votre rôle de BR.",
          ],
          correctActions: [
            "Indiquer que le résultat de 0,45 Ω est inférieur à la limite de 1,15 Ω : la protection est efficace, le départ est conforme sur ce critère.",
            "Préciser les conditions de mesure (charge présente, tension de mesure, température) dans votre rapport.",
            "Souligner que la conformité d'une installation ne repose pas sur ce seul critère.",
          ],
          explanation:
            "Une faible impédance de boucle est favorable : elle permet un courant de défaut élevé qui déclenche rapidement le dispositif de protection. Le résultat est conforme si Zs est inférieur à la valeur limite du dispositif de protection installé. La documentation des conditions de mesure est indispensable pour que le résultat soit exploitable.",
          normRef: "NF C 15-100 § 411.4 — protection par coupure automatique de l'alimentation en schéma TN",
        },
        {
          situation:
            "Lors d'une campagne de maintenance thermographique dans un TGBT, vous observez sur la caméra infrarouge un écart de température de +48 °C sur le bornier de l'arrivée d'un disjoncteur de 63 A, par rapport aux borniers adjacents qui sont à la température ambiante. La charge est à 55 % de la valeur nominale.",
          question:
            "Comment qualifier cet écart et quelle suite donner à cette observation ?",
          wrongActions: [
            "Considérer que c'est normal car le disjoncteur est sous charge.",
            "Retarder le signalement à la prochaine visite annuelle.",
            "Remplacer immédiatement le disjoncteur sans traçabilité.",
          ],
          correctActions: [
            "Classer l'anomalie comme sérieuse (écart > 40 °C sous charge < 100 %) selon les référentiels thermographiques courants.",
            "Documenter l'image infrarouge, la charge au moment de la mesure, la température ambiante et la localisation précise.",
            "Signaler immédiatement l'anomalie au responsable de maintenance pour programmer une vérification des connexions et un serrage dans les meilleurs délais.",
          ],
          explanation:
            "Un écart de +48 °C sur un bornier sous 55 % de charge est un indicateur d'anomalie sérieuse, probablement un défaut de connexion (desserrage, oxydation, mauvais contact). Ce niveau d'échauffement peut conduire au claquage de l'isolant, à un départ de feu ou à une mise en défaut. La thermographie permet de détecter ce type de défaut avant la défaillance.",
          normRef: "Guide UTE C 15-900 — classification des anomalies thermographiques en installations électriques BT",
        },
        {
          situation:
            "Vous êtes BR et votre client vous demande de rédiger un rapport thermographique formel avec classification des anomalies, selon la norme de référence, pour transmission à son assureur.",
          question:
            "Pouvez-vous rédiger seul ce rapport thermographique en tant que BR ?",
          wrongActions: [
            "Rédiger le rapport car vous avez réalisé les mesures vous-même.",
            "Établir le rapport en indiquant un niveau de qualification thermographe que vous n'avez pas.",
            "Remettre les images brutes en indiquant que c'est suffisant pour l'assureur.",
          ],
          correctActions: [
            "Indiquer clairement à votre client que la rédaction d'un rapport thermographique certifiable nécessite l'intervention d'un thermographe qualifié (niveau 1 minimum selon ISO 18436-7).",
            "Transmettre vos observations et images au thermographe qualifié qui rédige le rapport formel.",
            "Si nécessaire, proposer de solliciter un thermographe certifié dans le cadre de la prestation.",
          ],
          explanation:
            "La mesure thermographique de terrain peut être conduite par un BR formé à cet outil, mais l'interprétation formelle et la rédaction d'un rapport certifiable (notamment pour des assureurs ou des organismes de contrôle) relève d'un thermographe qualifié selon ISO 18436-7. Dépasser son périmètre de compétence engage la responsabilité civile et professionnelle.",
          normRef: "ISO 18436-7 — qualification des thermographes industriels",
        },
      ],
      chapterImagePath: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-moyens.svg",
      chapterImageAlt:
        "Instruments de mesure électrique BR : mégohmmètre, ohmmètre de boucle et caméra thermique",
      visual: {
        title: "Trois outils du diagnostic terrain BR",
        subtitle:
          "Résistance d'isolement, impédance de boucle et thermographie : trois mesures complémentaires pour qualifier l'état d'une installation.",
        items: [
          "Résistance d'isolement (hors tension)",
          "Impédance de boucle (sous tension)",
          "Thermographie (sous charge)",
          "Documentation systématique",
        ],
        tone: "green",
        imagePath: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-moyens.svg",
      },
    },
    {
      id: "synthese",
      title: "17. Synthèse opérationnelle",
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
      scenarios: [
        {
          situation: "Un chargé de travaux B2 arrive sur un chantier et réunit rapidement son équipe. Il commence sans briefing structuré, sans vérifier les habilitations de chacun, sans délimiter la zone et sans s'assurer de la consignation préalable.",
          question: "Quels éléments essentiels le B2 a-t-il omis avant le début des travaux ?",
          wrongActions:           [
            "Considérer que son équipe est compétente et que les vérifications sont superflues.",
            "Déléguer les vérifications aux exécutants pour gagner du temps.",
            "Effectuer les vérifications en cours de chantier au fur et à mesure.",
          ],
          correctActions:           [
            "Vérifier les habilitations de tous les membres de l'équipe avant le démarrage.",
            "S'assurer de la consignation formelle et signée avant d'accéder à la zone de travail.",
            "Délimiter la zone, briefer l'équipe sur le périmètre, les rôles et les arrêts possibles, puis consigner les vérifications.",
          ],
          explanation: "Le briefing de début de chantier n'est pas une option. Il conditionne la sécurité collective de toute l'opération. Un B2 qui saute cette étape expose son équipe, engage sa responsabilité et viole la procédure de la norme.",
          normRef: "NF C 18-510 § 5.3 — responsabilités du chargé de travaux : préparation, briefing et surveillance",
        },
        {
          situation: "À la fin d'un parcours de formation B1/B2/BR/BC, un apprenant résume sa compréhension ainsi : 'L'essentiel c'est de ne pas toucher les fils sous tension et de mettre des gants.' Est-ce suffisant ?",
          question: "Quelle est la véritable logique de sécurité retenue par la NF C 18-510 ?",
          wrongActions:           [
            "Valider cette compréhension car elle couvre l'essentiel du risque de contact.",
            "Ajouter juste la règle des distances pour compléter.",
            "Considérer que les gants sont la protection principale.",
          ],
          correctActions:           [
            "Reformuler : la sécurité électrique repose sur une organisation rigoureuse, une habilitation adaptée au rôle réel, une préparation documentée, une consignation méthodique et un respect strict du périmètre.",
            "Rappeler que les EPI sont une protection de dernier recours, pas une solution de substitution à l'organisation.",
            "Insister sur la logique de non-improvisation et de signalement des écarts.",
          ],
          explanation: "La NF C 18-510 pose un cadre systémique : organisation, habilitations adaptées, documents fiables, consignation rigoureuse et réflexes face aux écarts. Réduire la sécurité électrique au seul geste de protection individuelle est une compréhension incomplète et dangereuse.",
          normRef: "NF C 18-510 § 3 — principes généraux de la prévention du risque électrique",
        },
      ],
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