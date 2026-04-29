import type { ModuleContent } from "./module-types";

const VIDEO = {
  bsbe: {
    title: "Habilitation BS / BE Manœuvre",
    description:
      "Vidéo pédagogique sur le cadre des habilitations BS et BE Manœuvre, leurs limites et les gestes autorisés.",
    url: "https://youtu.be/AdI-HeDlla8",
    provider: "INRS",
    ctaLabel: "Voir la vidéo",
  },
  chocElectrique: {
    title: "INRS - Choc électrique",
    description:
      "Vidéo pédagogique sur les effets du courant électrique et les risques liés au choc électrique.",
    url: "https://youtu.be/wyJbFJOdGGo",
    provider: "INRS",
    ctaLabel: "Voir la vidéo",
  },
  consignation: {
    title: "INRS - Consignation électrique",
    description:
      "Vidéo pédagogique sur les étapes et les principes de la consignation électrique.",
    url: "https://youtu.be/cCqbrFDNrxA",
    provider: "INRS",
    ctaLabel: "Voir la vidéo",
  },
  zonesDistances: {
    title: "INRS - Zones et distances",
    description:
      "Vidéo pédagogique sur les zones d’environnement électrique et les distances de sécurité.",
    url: "https://youtu.be/NKV4NYJi8Rk",
    provider: "INRS",
    ctaLabel: "Voir la vidéo",
  },
  symboles: {
    title: "INRS - Symboles d’habilitation électrique",
    description:
      "Vidéo pédagogique sur la lecture des symboles d’habilitation électrique et leurs limites.",
    url: "https://youtu.be/-qG3A1eLuUM",
    provider: "INRS",
    ctaLabel: "Voir la vidéo",
  },
};

export const bsbeModuleContent: ModuleContent = {
  title:
    "BS et BE Manœuvre - Interventions élémentaires et manœuvres en basse tension",
  shortTitle: "BS et BE Manœuvre",
  subtitle:
    "Parcours e-learning structuré selon la NF C 18-510 pour les personnels amenés à réaliser des remplacements simples, des raccordements élémentaires et des manœuvres d’exploitation en basse tension.",
  duration:
    "6 h de théorie guidée + quiz + séquence d’application encadrée",
  deliveryFormat:
    "E-learning technique + quiz + séquence d’application encadrée : classe virtuelle de 3 h à 4 h en initial groupe / entreprise, ou visio de 45 min à 1 h en recyclage",
  level: "Intermédiaire",
  objective:
    "Respecter les prescriptions de sécurité liées aux habilitations BS et BE Manœuvre, comprendre les bases électriques utiles, reconnaître les situations à risque, identifier les limites d’autorisation, préparer une opération simple en sécurité et adopter la bonne conduite en cas d’anomalie ou d’accident.",
  audience:
    "Agents de maintenance, techniciens polyvalents, gardiens, personnels de sites tertiaires ou industriels, personnels d’exploitation, services généraux et salariés amenés à effectuer des opérations simples ou des manœuvres en basse tension sans être électriciens exécutants.",
  certificationNote:
    "Ce parcours constitue la préparation théorique. L’habilitation BS ou BE Manœuvre est délivrée uniquement par l’employeur après vérification des acquis, adéquation au poste, analyse du risque et évaluation adaptée au poste.",
  heroBadge: "Habilitation électrique",
  finalMessage:
    "Le bon réflexe en BS ou en BE Manœuvre n’est pas d’improviser une solution. C’est d’identifier le bon organe, de vérifier le contexte, d’appliquer la procédure prévue et de s’arrêter immédiatement si l’action n’entre plus dans le cadre autorisé.",
  quizCtaLabel: "Passer au quiz BS et BE Manœuvre",

  sections: [
    {
      id: "habilitation-symboles",
      title:
        "1. Habilitation électrique, symboles BS et BE Manœuvre et cadre employeur",
      estimatedMinutes: 22,
      intro:
        "La norme NF C 18-510 rappelle qu’une habilitation est une reconnaissance de capacité accordée par l’employeur. Le premier chapitre pose donc clairement le cadre, les symboles et les limites réelles du BS et du BE Manœuvre.",
      content: [
        "L’habilitation électrique est définie comme la reconnaissance par l’employeur de la capacité d’une personne à accomplir en sécurité les tâches qui lui sont confiées vis-à-vis du risque électrique. Cette logique est centrale : la formation prépare, mais c’est l’employeur qui vérifie l’adaptation au poste, aux locaux, aux matériels et aux procédures internes avant de remettre un titre.",
        "Le symbole BS correspond aux interventions élémentaires en basse tension. Il vise des opérations simples, limitées, préparées et réalisées hors tension, telles que des remplacements simples ou des raccordements élémentaires sur des circuits et matériels identifiés.",
        "Le symbole BE Manœuvre concerne les manœuvres d’exploitation. Il peut s’agir, selon les consignes du site, d’ouvrir, fermer, mettre en marche, arrêter, basculer ou réarmer un organe prévu pour cet usage.",
        "Le BS et le BE Manœuvre ne sont pas des versions simplifiées des habilitations B1, B2, BR ou BC. Le titulaire BS n’est ni exécutant électricien de travaux, ni chargé de travaux, ni chargé de consignation. Le titulaire BE Manœuvre n’est pas chargé d’intervention générale et n’acquiert pas, par ce symbole, le droit de dépanner, modifier, diagnostiquer librement ou consigner.",
        "La prévention exige une chaîne cohérente : analyse du besoin, désignation des tâches admissibles, mise à disposition des consignes, vérification des acquis, évaluation pratique, puis délivrance du titre.",
        "Le bon réflexe à retenir est le suivant : le parcours de formation prépare à agir dans un cadre défini, mais seul le titre d’habilitation remis par l’employeur autorise l’activité sur les tâches réellement confiées.",
      ],
      deepDive: [
        "Le risque majeur, dans la vraie vie des sites, n’est pas l’ignorance pure. C’est le glissement progressif : un remplacement simple devient un diagnostic, un réarmement devient une recherche de panne, une manœuvre devient une intervention improvisée.",
        "La norme insiste aussi sur l’unicité, la cohérence et la maîtrise de l’information. Cela signifie qu’un opérateur BS / BE ne doit jamais agir sur une simple habitude orale, sur un repère flou ou sur une demande urgente qui contourne la procédure et le titre d’habilitation.",
        "Un bon apprenant BS / BE doit savoir formuler sa limite. Dire que le geste demandé n’entre pas dans son cadre est une compétence sécurité, pas une faiblesse.",
      ],
      keyPoints: [
        "L’habilitation est délivrée par l’employeur, pas par la formation seule.",
        "BS = interventions élémentaires en basse tension, dans un cadre strictement limité.",
        "BE Manœuvre = manœuvres d’exploitation sur organe identifié et prévu à cet effet.",
        "BS et BE Manœuvre ne valent ni B1, ni B2, ni BR, ni BC.",
        "Le poste réel, l’environnement et les procédures conditionnent la délivrance du titre.",
      ],
      forbiddenPoints: [
        "Confondre attestation de formation et titre d’habilitation remis par l’employeur.",
        "Croire que BS ou BE Manœuvre autorisent des travaux d’électricien exécutant ou de chargé d’intervention.",
        "Commencer un dépannage, une modification ou une recherche de panne hors du cadre autorisé.",
      ],
      legalRefs: [
        "Code du travail - articles R.4544-9 et R.4544-10 sur la formation, l’habilitation et l’organisation des opérations.",
        "NF C 18-510 - article 3 : habilitation, employeur, opérateur et rôles des personnes.",
        "NF C 18-510 - article 5 : formation, évaluation, avis après formation et titre d’habilitation.",
        "NF C 18-510 - tableaux des symboles d’habilitation.",
        "INRS - habilitation électrique, rôle de l’employeur et maintien des compétences.",
      ],
      resourceVideos: [VIDEO.bsbe, VIDEO.symboles],
      practicalCase:
        "Exemple : un agent multi-technique sait remplacer une prise simple hors tension. Sur place, il découvre un coffret mal repéré et un câblage ancien. L’opération doit être stoppée : le cadre BS n’autorise pas une recherche de panne ni une adaptation improvisée.",
      chapterImagePath: "/elearning/bsbe/bsbe-cadre.svg",
      chapterImageAlt:
        "Cadre BS et BE Manœuvre : formation, évaluation, validation et habilitation par l’employeur",
      visual: {
        title: "De la formation au titre d’habilitation",
        subtitle:
          "Le titre BS ou BE Manœuvre est délivré par l’employeur après vérification des acquis, adéquation au poste et analyse du risque.",
        items: [
          "Comprendre le cadre normatif",
          "Vérifier les connaissances et les limites",
          "Évaluer la capacité à agir en sécurité",
          "Habiliter selon les tâches réelles du poste",
        ],
        tone: "blue",
        imagePath: "/elearning/bsbe/bsbe-cadre.svg",
        imageAlt:
          "Cadre BS et BE Manœuvre : formation, évaluation, validation et habilitation par l’employeur",
      },
    },

    {
      id: "bases-electricite",
      title: "2. Bases électriques indispensables avant toute opération",
      estimatedMinutes: 20,
      intro:
        "Un titulaire BS / BE n’est pas un technicien d’études, mais il doit comprendre ce qu’est un circuit, ce que signifient les grandeurs électriques et pourquoi le domaine de tension change la lecture du risque.",
      content: [
        "Comprendre un circuit électrique, c’est savoir reconnaître une source, des conducteurs, une charge, un organe de commande et un organe de protection.",
        "Les grandeurs essentielles à maîtriser sont la tension, l’intensité, la résistance et la puissance. Elles expliquent pourquoi un équipement apparemment simple peut devenir dangereux selon son alimentation, son environnement et son état.",
        "L’apprenant doit distinguer partie active, masse, conducteur de protection, neutre et, lorsque c’est utile à la compréhension, conducteur PEN.",
        "Certaines énergies restent présentes alors qu’un équipement paraît arrêté. C’est le cas des batteries, chargeurs, onduleurs, installations photovoltaïques, automatismes secourus et matériels maintenus sous énergie. Avant toute action, il faut vérifier si une alimentation auxiliaire, secourue ou autonome peut encore alimenter le circuit.",
        "L’opérateur doit aussi savoir reconnaître les familles de matériels courants : tableau de distribution, disjoncteur, sectionneur, organe de commande, départ terminal, circuit de prises, éclairage, chauffe-eau, ventilation, volet motorisé ou automatisme. Cette lecture évite de confondre un circuit terminal simple avec un départ plus complexe ou plus énergétique.",
      ],
      deepDive: [
        "Devant une armoire ou un coffret, l’observation doit être méthodique : identifier l’organe de coupure, repérer la protection associée, vérifier la fonction du matériel et déterminer si le circuit concerné relève encore du cadre BS ou BE Manœuvre.",
        "Un circuit terminal simple alimente en général un usage clairement identifié, comme un éclairage, une prise ou un petit récepteur. À l’inverse, un départ moteur, un variateur, un automatisme ou un tableau comportant plusieurs sources exigent une analyse plus poussée et peuvent sortir du cadre BS / BE.",
      ],
      keyPoints: [
        "Un circuit comprend une source, des conducteurs, une charge, une commande et une protection.",
        "Tension, intensité, résistance et puissance expliquent le comportement du circuit.",
        "Partie active, masse et conducteur de protection doivent être compris.",
        "Les énergies secourues ou autonomes ne doivent pas être banalisées.",
      ],
      forbiddenPoints: [
        "Confondre une installation familière avec une installation sans danger.",
        "Raisonner uniquement à l’apparence extérieure du matériel.",
        "Agir sur un organe dont la fonction n’est pas comprise.",
      ],
      legalRefs: [
        "NF C 18-510 - définitions relatives aux installations, ouvrages, matériels et grandeurs électriques.",
        "NF C 15-100 - vocabulaire de base des installations basse tension.",
        "INRS - bases du risque électrique et prévention des accidents.",
      ],
      practicalCase:
        "Exemple : un opérateur doit réinitialiser un organe alimenté par un coffret de commande. Il observe la présence d’un variateur et d’une alimentation secourue. Il ne doit pas agir tant que le cadre de manœuvre n’est pas confirmé.",
      chapterImagePath: "/elearning/bsbe/bsbe-bases.svg",
      chapterImageAlt:
        "Bases électriques utiles au BS et au BE Manœuvre",
      visual: {
        title: "Lire le circuit avant le geste",
        subtitle:
          "Source, charge, commande, protection et énergie résiduelle conditionnent la sécurité de l’opération.",
        items: [
          "Source d’énergie",
          "Organe de commande",
          "Protection",
          "Matériel alimenté",
        ],
        tone: "slate",
        imagePath: "/elearning/bsbe/bsbe-bases.svg",
        imageAlt:
          "Bases électriques utiles au BS et au BE Manœuvre",
      },
    },

    {
      id: "domaines-tension",
      title:
        "3. Domaines de tension, courant alternatif et courant continu",
      estimatedMinutes: 15,
      intro:
        "Le domaine de tension structure la prévention. Un titulaire BS / BE Manœuvre doit savoir distinguer TBT, BT et HT, et comprendre que le courant continu impose aussi une vigilance spécifique.",
      content: [
        "La norme distingue les domaines de tension parce qu’ils structurent la prévention. En courant alternatif, la très basse tension est inférieure ou égale à 50 V, la basse tension est supérieure à 50 V et inférieure ou égale à 1 000 V, et la haute tension est au-delà.",
        "En courant continu lisse, la très basse tension est inférieure ou égale à 120 V, la basse tension est supérieure à 120 V et inférieure ou égale à 1 500 V, et la haute tension est au-delà.",
        "Cette distinction conditionne les distances, les zones d’environnement, les prescriptions applicables et le niveau d’habilitation requis.",
        "Le BS et le BE Manœuvre concernent la basse tension. Cela ne signifie pas que le risque est faible. Une installation BT peut provoquer électrisation, brûlure, arc, court-circuit ou départ de feu.",
        "Le courant continu peut être présent sur batteries, onduleurs, photovoltaïque, chargeurs ou équipements industriels. Il peut présenter un risque particulier de maintien d’arc et de persistance d’énergie.",
      ],
      deepDive: [
        "Le titulaire BS / BE n’a pas à devenir électricien concepteur, mais il doit comprendre pourquoi un matériel fermé, un onduleur, une batterie ou un départ non identifié ne doivent jamais être banalisés.",
      ],
      keyPoints: [
        "La BT n’est pas une absence de danger.",
        "Les seuils AC et DC sont différents.",
        "Les batteries, onduleurs et sources autonomes peuvent maintenir un risque.",
      ],
      forbiddenPoints: [
        "Croire que la basse tension est sans conséquence.",
        "Ignorer une source autonome ou une énergie résiduelle.",
      ],
      legalRefs: [
        "NF C 18-510 - tableau des domaines de tension.",
        "NF C 15-100 - installations électriques basse tension.",
        "INRS - prévention du risque électrique.",
      ],
      practicalCase:
        "Exemple : un appareil est coupé au disjoncteur, mais reste raccordé à une alimentation secourue. L’opérateur doit considérer que le risque peut persister.",
      chapterImagePath: "/elearning/h0b0/domaines-tension.png",
      chapterImageAlt:
        "Domaines de tension et distinction TBT, BT et HT utiles au BS et au BE Manoeuvre",
      visual: {
        title: "BT ne veut pas dire sans danger",
        subtitle:
          "Le domaine de tension, la nature du courant et les sources autonomes changent la lecture du risque.",
        items: [
          "Très basse tension",
          "Basse tension",
          "Courant alternatif",
          "Courant continu",
        ],
        tone: "slate",
        imagePath: "/elearning/h0b0/domaines-tension.png",
        imageAlt:
          "Domaines de tension et distinction TBT, BT et HT utiles au BS et au BE Manoeuvre",
      },
    },

    {
      id: "effets-corps",
      title:
        "4. Effets du courant sur le corps humain et courbe intensité / temps",
      estimatedMinutes: 18,
      intro:
        "Comprendre le risque électrique, ce n’est pas mémoriser une interdiction abstraite. C’est savoir ce que produit concrètement le courant sur le corps humain, et pourquoi quelques secondes de plus peuvent tout changer.",
      content: [
        "Le passage du courant dans le corps peut provoquer une électrisation, des brûlures externes et internes, des contractions musculaires, des troubles respiratoires, des troubles cardiaques et des lésions neurologiques.",
        "La gravité dépend principalement de l’intensité du courant, du temps de passage, du trajet dans l’organisme, de l’état de la peau, de l’humidité et du contexte de contact.",
        "Quelques ordres de grandeur pédagogiques doivent être connus : dès les premiers milliampères le courant devient perceptible ; autour de 10 mA le lâcher peut devenir difficile ; vers 30 mA les troubles respiratoires peuvent apparaître.",
        "La courbe intensité / temps montre qu’une exposition moins intense mais plus longue peut devenir aussi critique qu’un courant plus fort sur un temps très court.",
        "Le milieu modifie fortement le risque. Une peau humide, un sol conducteur, des vêtements mouillés, une sueur abondante ou des mains abîmées réduisent la résistance du corps.",
        "Toute sensation de décharge, toute odeur anormale, tout bruit inhabituel, toute trace d’échauffement ou tout fonctionnement incohérent doit être considéré comme un signal d’alerte sérieux.",
      ],
      deepDive: [
        "Une décharge même brève peut provoquer des troubles différés. Après un incident, l’analyse ne s’arrête donc pas au ressenti immédiat de la victime.",
        "Cette partie prépare aussi la conduite à tenir en cas d’accident : une victime n’est jamais touchée tant que la suppression du danger électrique n’est pas assurée.",
      ],
      keyPoints: [
        "Électrisation et électrocution ne désignent pas la même situation.",
        "Intensité, durée, trajet et humidité conditionnent la gravité.",
        "La courbe intensité / temps explique l’importance de la coupure rapide.",
        "Toute électrisation doit être prise au sérieux.",
      ],
      forbiddenPoints: [
        "Minimiser une décharge électrique sous prétexte qu’elle a été brève.",
        "Toucher une victime sans avoir d’abord éliminé ou maîtrisé le danger électrique.",
      ],
      legalRefs: [
        "NF C 18-510 - connaissance des dangers pour les opérateurs.",
        "INRS - effets du courant électrique sur le corps humain et conduite à tenir après accident.",
      ],
      resourceVideos: [VIDEO.chocElectrique],
      practicalCase:
        "Exemple : lors d’un remplacement simple, un opérateur ressent une décharge en retirant un accessoire endommagé. L’action est interrompue, la situation est signalée et l’équipement n’est pas réutilisé.",
      chapterImagePath: "/elearning/h0b0/intensites-effets.png",
      chapterImageAlt:
        "Effets du courant ?lectrique sur le corps humain selon l intensit? et le temps de contact",
      visual: {
        title: "Pourquoi un choc électrique peut être grave",
        subtitle:
          "L’intensité, le temps de contact, le trajet et le milieu humide aggravent le risque corporel.",
        items: [
        "Électrisation",
          "Tétanisation",
          "Troubles cardiaques",
          "Milieu humide",
        ],
        tone: "red",
        imagePath: "/elearning/h0b0/intensites-effets.png",
        imageAlt:
          "Effets du courant ?lectrique sur le corps humain selon l intensit? et le temps de contact",
      },
    },

    {
      id: "protections-zones",
      title:
        "5. Protection contre les chocs, contact direct, contact indirect et PNST",
      estimatedMinutes: 18,
      intro:
        "Cette partie doit rester normative et concrète : protections contre les chocs, régime TT, dispositif différentiel, classes de matériel, pièces nues sous tension et zones d’environnement.",
      content: [
        "Le contact direct correspond au fait de toucher une partie active normalement sous tension. Le contact indirect correspond au fait de toucher une masse devenue dangereuse après défaut.",
        "Les mesures de protection contre le contact direct reposent notamment sur l’éloignement, les obstacles, l’isolation, les enveloppes et les capotages.",
        "En basse tension, la protection contre le contact indirect fait notamment intervenir l’organisation de l’installation, le régime de neutre, la mise à la terre, les dispositifs différentiels et les classes de matériel.",
        "La PNST, ou pièce nue sous tension, reste une notion centrale. Une pièce nue sous tension accessible change immédiatement le niveau de risque.",
        "Les zones d’environnement électrique structurent ces limites. En basse tension, la zone de voisinage renforcé est classiquement associée à la distance de 30 cm autour d’une pièce nue sous tension.",
        "La notion d’IP2X ou IPXXB doit aussi être comprise : une enveloppe intacte protège contre l’accès aux parties dangereuses, mais une enveloppe ouverte, absente ou dégradée modifie complètement la situation.",
      ],
      deepDive: [
        "Une pièce nue sous tension, un dispositif différentiel, une masse métallique et un capotage ne jouent pas le même rôle. Les confondre conduit à mal évaluer le risque et à engager une action hors cadre.",
        "Le danger est parfois invisible. Un coffret fermé et intact peut assurer une protection correcte, alors qu’un capot retiré, une porte ouverte ou un indice de protection dégradé transforment immédiatement la situation en zone à risque.",
      ],
      keyPoints: [
        "Contact direct et indirect sont deux risques distincts.",
        "Les protections collectives sont prioritaires.",
        "La PNST et le voisinage doivent être compris et respectés.",
      ],
      forbiddenPoints: [
        "Contourner un capotage ou une enveloppe.",
        "Se rapprocher d’une pièce nue sous tension pour mieux voir.",
        "Continuer une action si l’indice de protection est dégradé.",
      ],
      legalRefs: [
        "NF C 18-510 - zones, voisinage, protections et environnement électrique.",
        "NF C 15-100 - protections en basse tension.",
        "INRS - contact direct, contact indirect et DDR.",
      ],
      resourceVideos: [VIDEO.zonesDistances],
      practicalCase:
        "Exemple : un opérateur doit agir dans un local technique, mais un bornier est visible car un capot manque. La situation sort du cadre normal : l’action est suspendue.",
      chapterImagePath: "/elearning/bsbe/danger-voisinage-simple-et-voisinage-bt.jpg",
      chapterImageAlt:
        "Voisinage simple et voisinage renforc? BT autour d une pi?ce nue sous tension",
      visual: {
        title: "Voir le risque avant le geste",
        subtitle:
          "Contact direct, contact indirect, protection collective, PNST et voisinage.",
        items: [
          "Contact direct",
          "Contact indirect",
          "Protections collectives",
          "PNST et voisinage",
        ],
        tone: "amber",
        imagePath: "/elearning/bsbe/danger-voisinage-simple-et-voisinage-bt.jpg",
        imageAlt:
          "Voisinage simple et voisinage renforc? BT autour d une pi?ce nue sous tension",
      },
    },

    {
      id: "lecture-installation",
      title:
        "6. Lire une installation basse tension et reconnaître les organes utiles",
      estimatedMinutes: 15,
      intro:
        "Avant toute opération BS ou BE Manœuvre, il faut savoir ce que l’on regarde : tableau, coffret, disjoncteur, sectionneur, fusible, contacteur, organe de commande ou départ moteur.",
      content: [
        "L’apprenant doit être capable d’identifier les principaux organes d’une installation basse tension : tableau, coffret, disjoncteur, interrupteur, sectionneur, fusible, bouton d’arrêt, commande locale, contacteur, relais, bornier et protections terminales.",
        "Il doit distinguer ce qui relève de la commande, de la protection, de la coupure et de l’alimentation d’un équipement.",
        "Cette lecture du matériel est indispensable pour éviter les erreurs de repère, les réarmements sur le mauvais circuit, les actions sur le mauvais organe et les interprétations dangereuses d’une situation apparemment simple.",
        "Le support documentaire d’entreprise, le schéma simplifié, le repérage d’un départ, la fiche réflexe ou l’étiquetage local sont des aides essentielles pour agir dans le bon cadre.",
        "Dans un parcours BS / BE crédible, on doit apprendre à lire les signaux faibles d’un tableau : départ mal repéré, ancien étiquetage, juxtaposition de circuits force et commande, présence d’un inverseur, d’un départ moteur ou d’un appareillage qui n’entre plus dans la logique d’une action simple.",
      ],
      deepDive: [
        "Un parcours trop vague sur ce sujet produit des apprenants qui savent réciter des symboles, mais pas reconnaître un organe en situation. Or cette lecture du matériel est indispensable pour agir en sécurité.",
      ],
      keyPoints: [
        "Identifier l’organe avant d’agir.",
        "Ne pas confondre commande, coupure et protection.",
        "Le repérage local est un support de sécurité.",
      ],
      forbiddenPoints: [
        "Agir sur un organe non identifié.",
        "Interpréter seul un schéma douteux.",
        "Réarmer ou couper un départ dont la fonction n’est pas confirmée.",
      ],
      legalRefs: [
        "NF C 18-510 - adéquation entre opération, matériel et procédure.",
        "INRS - importance du repérage et des supports d’exécution.",
      ],
      practicalCase:
        "Exemple : un organe porte une étiquette ancienne et le schéma local est partiellement modifié. L’opérateur n’agit pas tant que le repère n’est pas confirmé.",
      chapterImagePath: "/images/modules/electricite/tableau-coffret-bt.jpg",
      chapterImageAlt:
        "Armoire électrique basse tension avec organes de commande et de protection",
      visual: {
        title: "Avant d’agir sur un tableau",
        subtitle:
          "Identifier le bon organe, vérifier le repérage et confirmer le circuit.",
        items: [
          "Disjoncteur",
          "Sectionneur",
          "Commande",
          "Bon circuit",
        ],
        tone: "slate",
        imagePath: "/images/modules/electricite/tableau-coffret-bt.jpg",
        imageAlt:
          "Armoire électrique basse tension avec organes de commande et de protection",
      },
    },

    {
      id: "local-electrique-ip-reperage",
      title:
        "7. Accès aux locaux électriques, indices de protection et repérage fiable",
      estimatedMinutes: 15,
      intro:
        "Avant même le geste BS ou BE Manœuvre, l’opérateur doit savoir si l’accès au matériel est compatible avec son titre, si l’enveloppe protège réellement contre le contact et si le repérage de terrain est suffisant.",
      content: [
        "Un local à risques particuliers de choc électrique, une armoire ouverte ou un coffret dégradé ne se traitent pas comme un appareillage courant dans un environnement sec et protégé. L’accès, le voisinage et l’état de l’enveloppe changent le niveau de risque.",
        "Les notions d’indice de protection IP2X ou IPXXB sont utiles pour comprendre dans quels cas certaines manœuvres simples peuvent être réalisées en sécurité sur un matériel intact, et dans quels cas la mise hors tension ou l’arrêt s’imposent.",
        "Le repérage fiable d’un départ, d’un circuit terminal, d’un bornier en attente ou d’un organe de réarmement est une condition de sécurité. Un étiquetage partiel, ancien ou incohérent impose une vérification complémentaire avant tout geste.",
        "Le professionnel BS / BE ne doit pas raisonner uniquement à partir de l’apparence extérieure. Un coffret fermé peut paraître rassurant, mais si l’indice de protection est dégradé ou si le capotage a été retiré, le cadre de sécurité n’est plus le même.",
      ],
      deepDive: [
        "Beaucoup d’erreurs terrain viennent d’une confusion entre matériel courant et matériel sécurisé.",
        "Cette lecture du local et de l’enveloppe permet de distinguer une action admissible d’une situation relevant d’un électricien plus qualifié ou d’une remise en conformité préalable.",
      ],
      keyPoints: [
        "Accès au local et état de l’enveloppe modifient le niveau de risque.",
        "IP2X / IPXXB sont des repères utiles pour la sécurité de l’opérateur.",
        "Sans repérage fiable, pas d’action.",
      ],
      forbiddenPoints: [
        "Banaliser un coffret ouvert ou dégradé.",
        "Confondre accessibilité physique et autorisation d’agir.",
        "Entrer dans un local réservé sans cadre prévu.",
      ],
      legalRefs: [
        "NF C 18-510 - locaux et emplacements d’accès réservé aux électriciens.",
        "NF C 18-510 - ouverture d’une armoire, d’un coffret ou d’une enveloppe de matériel électrique.",
        "INRS - conditions de sécurité de type IP2X / IPXXB.",
      ],
      practicalCase:
        "Exemple : un disjoncteur est situé dans un coffret normalement fermé, mais la façade est fendue et une pièce interne devient accessible au doigt. Le geste de réarmement n’est plus banal et l’opérateur suspend l’action.",
      chapterImagePath: "/elearning/bsbe/zone-ne-pas-franchir.jpg",
      chapterImageAlt:
        "Zone de travail ? ne pas franchir devant une installation ?lectrique",
      visual: {
        title: "Avant d’accéder au matériel",
        subtitle:
          "Local, enveloppe, indice de protection et repérage doivent être compatibles avec l’action.",
        items: [
          "Local compatible",
          "Enveloppe intacte",
          "Indice de protection suffisant",
          "Repérage confirmé",
        ],
        tone: "slate",
        imagePath: "/elearning/bsbe/zone-ne-pas-franchir.jpg",
        imageAlt:
          "Zone de travail ? ne pas franchir devant une installation ?lectrique",
      },
    },

    {
      id: "operations-bs",
      title:
        "8. Opérations BS : remplacement simple et raccordement élémentaire",
      estimatedMinutes: 20,
      intro:
        "Le cœur de la trame BS est ici : ce qui est autorisé, sur quels types de matériels, avec quelles limites, et comment rester dans un cadre simple et documenté.",
      content: [
        "Le titulaire BS peut réaliser des remplacements simples et des raccordements élémentaires en basse tension lorsque l’installation, le circuit et le matériel sont identifiés et que la procédure de l’entreprise le permet.",
        "Dans la pratique, il peut s’agir de remplacements de lampe, fusible basse tension, accessoire d’éclairage, socle de prise, interrupteur, convecteur, chauffe-eau, volet ou autre matériel simple, dans la limite du cadre autorisé.",
        "Un repère pédagogique souvent retenu dans les programmes BS est celui de matériels simples jusqu’à 400 V et 32 A en courant alternatif. Ce repère aide à comprendre le niveau visé, mais il ne dispense jamais de vérifier le matériel réel et la procédure locale.",
        "Le raccordement doit rester élémentaire, hors tension, sur un support prévu et identifié. Si l’action impose un diagnostic, une adaptation de câblage, un doute sur le repérage ou une complexité technique, elle sort du cadre BS.",
        "La qualité du raisonnement se voit dans cette capacité à distinguer une opération élémentaire d’un dépannage improvisé.",
      ],
      deepDive: [
        "Le danger fréquent est le glissement de mission : l’opérateur commence un remplacement simple, constate que cela ne repart pas et bascule vers une recherche de panne.",
        "Une opération BS doit pouvoir être expliquée simplement : quel matériel, quel circuit, quelle procédure, quelle mise hors tension, quelle vérification et quelle remise en service.",
      ],
      keyPoints: [
        "BS = remplacements simples et raccordements élémentaires.",
        "Le cadre doit rester hors tension, repéré et documenté.",
        "Le repère 400 V / 32 A aide à comprendre le niveau visé.",
      ],
      forbiddenPoints: [
        "Chercher la panne si le remplacement ne suffit pas.",
        "Modifier un câblage ou improviser une adaptation.",
        "Intervenir sur un circuit non identifié.",
      ],
      legalRefs: [
        "NF C 18-510 - interventions BT élémentaires.",
        "NF C 18-510 - remplacement de lampes, accessoires et fusibles BT.",
        "INRS - limites d’autorisation BS et prévention du dépannage improvisé.",
      ],
      resourceVideos: [VIDEO.bsbe],
      practicalCase:
        "Exemple : un luminaire doit être remplacé selon procédure. Si l’équipement neuf ne fonctionne pas et que le support ne permet plus une action élémentaire, l’opérateur s’arrête et transmet.",
      chapterImagePath: "/elearning/bsbe/pratique-terrain.jpg",
      chapterImageAlt:
        "Intervention ?l?mentaire en environnement ?lectrique basse tension",
      visual: {
        title: "BS : ce qui est attendu",
        subtitle: "Simple, hors tension, repéré, documenté.",
        items: [
          "Lampe / fusible / appareillage simple",
          "Raccordement élémentaire",
          "Circuit repéré",
          "Stop si le geste se complique",
        ],
        tone: "green",
        imagePath: "/elearning/bsbe/pratique-terrain.jpg",
        imageAlt:
          "Intervention ?l?mentaire en environnement ?lectrique basse tension",
      },
    },

    {
      id: "procedure-bs-mise-hors-tension-vat",
      title:
        "9. Procédure BS : mise hors tension pour son propre compte, VAT et documents",
      estimatedMinutes: 18,
      intro:
        "Le BS doit comprendre la logique de mise en sécurité sans être confondu avec un chargé de consignation BC. Cette partie clarifie la mise hors tension pour son propre compte, la vérification adaptée et les documents de travail.",
      content: [
        "Le titulaire BS comprend la logique de consignation, mais il n’est pas chargé de consignation BC. Il ne doit donc pas s’approprier un rôle qui ne lui appartient pas.",
        "Dans le cadre d’une intervention élémentaire prévue, il peut réaliser la mise hors tension nécessaire à son intervention pour son propre compte, lorsque la procédure, le matériel et l’organisation de l’entreprise le permettent.",
        "La séquence attendue repose sur une logique simple et rigoureuse : identifier le bon circuit, séparer l’alimentation par l’organe prévu, empêcher toute remise sous tension intempestive selon les consignes du site, confirmer le repérage, vérifier l’absence de tension avec un dispositif adapté, réaliser l’opération élémentaire prévue, remettre en état puis rendre compte.",
        "La vérification d’absence de tension doit être comprise comme un point de sécurité majeur. Elle ne se remplace pas par une impression, par l’extinction d’un voyant ou par une simple habitude.",
        "Les documents ont une vraie valeur opérationnelle : procédure de remplacement, instruction de réarmement, schéma simplifié, repérage local, fiche réflexe, consigne de site, compte rendu et signalement d’anomalie.",
        "Si la procédure ne correspond plus au terrain, si le repère est douteux, si l’organe n’est pas clairement identifié ou si une source autonome peut maintenir l’alimentation, l’intervention doit être suspendue.",
      ],
      deepDive: [
        "Cette partie est importante car elle évite deux erreurs : former trop peu, en oubliant la logique de mise hors tension, ou former trop largement, en laissant croire que le BS devient BC.",
        "Le bon positionnement pédagogique est donc : comprendre la logique de mise en sécurité, appliquer la procédure prévue sans se substituer au BC, ne pas dépasser son cadre et transmettre dès qu’une condition manque.",
      ],
      keyPoints: [
        "Le BS n’est pas chargé de consignation BC.",
        "La mise hors tension pour son propre compte doit être prévue et encadrée.",
        "La VAT est un point de sécurité essentiel.",
        "Les documents et le compte rendu font partie de l’intervention.",
      ],
      forbiddenPoints: [
        "Assimiler BS et BC.",
        "Agir sans document ou avec un support incohérent.",
        "Remplacer la VAT par une simple impression visuelle.",
        "Remettre sous tension si une anomalie persiste.",
      ],
      legalRefs: [
        "NF C 18-510 - interventions BT élémentaires.",
        "NF C 18-510 - mise hors tension, VAT et rôles associés.",
        "NF C 18-510 - documents, procédures d’accès, de suivi et de contrôle.",
      ],
      resourceVideos: [VIDEO.consignation],
      practicalCase:
        "Exemple : la procédure de remplacement d’un accessoire indique un départ clairement repéré. Sur place, le repérage ne correspond plus au tableau. L’opérateur suspend l’intervention et demande une clarification avant toute action.",
      chapterImagePath: "/images/modules/electricite/consignation-vat-balisage.jpg",
      chapterImageAlt:
        "Mise hors tension pour son propre compte, VAT et documents en BS",
      visual: {
        title: "Sécuriser puis tracer l’intervention",
        subtitle:
          "Identifier, mettre hors tension, vérifier, agir puis rendre compte.",
        items: [
          "Circuit identifié",
          "Séparation / prévention",
          "VAT confirmée",
          "Compte rendu",
        ],
        tone: "slate",
        imagePath: "/images/modules/electricite/consignation-vat-balisage.jpg",
        imageAlt:
          "Mise hors tension pour son propre compte, VAT et documents en BS",
      },
    },

    {
      id: "operations-be-manoeuvre",
      title:
        "10. Opérations BE Manœuvre : réarmement, ouverture, fermeture, basculement",
      estimatedMinutes: 18,
      intro:
        "La manœuvre doit être enseignée comme un acte d’exploitation encadré, jamais comme un prétexte à dépanner ou à investiguer.",
      content: [
        "Le titulaire BE Manœuvre peut, dans le cadre des consignes du site, ouvrir, fermer, mettre en marche, arrêter, basculer ou réarmer un équipement ou un circuit à partir d’un organe identifié et prévu pour cet usage.",
        "Cela peut concerner un disjoncteur de départ repéré, un organe de commande, un dispositif de réarmement, un sectionneur de manœuvre ou un inverseur prévu à cet effet.",
        "La manœuvre reste une action d’exploitation. Elle s’effectue sur un organe identifié, accessible et prévu pour cet usage. Elle ne doit pas devenir une recherche de panne, une ouverture d’enveloppe pour diagnostic ni une tentative répétée de remise en service sans analyse du contexte.",
        "Une instruction de sécurité ou une procédure de réarmement claire est un préalable indispensable. Sans support fiable, la manœuvre doit être suspendue.",
        "Le réenclenchement répété est l’une des erreurs les plus classiques. Il faut au contraire savoir reconnaître qu’une anomalie persistante impose l’arrêt et la transmission.",
        "Le BE Manœuvre peut participer à une manœuvre prévue par instruction, mais il ne devient pas chargé de consignation, chargé d’intervention générale ou technicien de dépannage.",
      ],
      deepDive: [
        "Un opérateur fiable sait réarmer quand c’est légitime, mais surtout sait ne pas réarmer quand le contexte ne le permet plus.",
        "Le cœur de la compétence BE Manœuvre est la discipline d’exploitation : agir sur le bon organe, au bon moment, selon la bonne instruction, sans démontage de protection, et s’arrêter au premier signal anormal.",
      ],
      keyPoints: [
        "BE Manœuvre = organe prévu, procédure connue, contexte vérifié.",
        "Pas de dépannage.",
        "Pas de réenclenchement en boucle.",
      ],
      forbiddenPoints: [
        "Ouvrir un coffret pour comprendre la cause.",
        "Réenclencher plusieurs fois sans analyse.",
        "Contourner un verrouillage ou une interdiction.",
        "Transformer une manœuvre en diagnostic.",
      ],
      legalRefs: [
        "NF C 18-510 - opérations spécifiques et attribut BE Manœuvre.",
        "NF C 18-510 - manœuvres d’exploitation et limites d’autorisation.",
        "INRS - distinction entre manœuvre et dépannage.",
      ],
      resourceVideos: [VIDEO.bsbe],
      practicalCase:
        "Exemple : un disjoncteur de départ a sauté. L’opérateur constate une odeur de chaud et un bruit anormal. Il n’effectue pas de réarmement et fait traiter la situation par une personne compétente.",
      chapterImagePath: "/elearning/bsbe/cours-electrique.jpg",
      chapterImageAlt:
        "Tableau ?lectrique basse tension et organes d exploitation utiles ? une manoeuvre",
      visual: {
        title: "BE Manœuvre : la bonne séquence",
        subtitle: "Identifier, vérifier, manœuvrer, surveiller.",
        items: [
          "Organe prévu",
          "Contexte sain",
          "Procédure connue",
          "Arrêt si anomalie",
        ],
        tone: "blue",
        imagePath: "/elearning/bsbe/cours-electrique.jpg",
        imageAlt:
          "Tableau ?lectrique basse tension et organes d exploitation utiles ? une manoeuvre",
      },
    },

    {
      id: "limites-bsbe",
      title:
        "11. Savoir dire non : limites BS / BE Manœuvre et bascule vers BR ou travaux",
      estimatedMinutes: 15,
      intro:
        "Une formation sérieuse ne se limite pas à dire ce que BS et BE Manœuvre autorisent. Elle doit surtout apprendre à reconnaître les cas qui sortent du cadre et imposent un arrêt, une requalification ou l’appel à un autre niveau d’habilitation.",
      content: [
        "Le BS ne couvre ni la recherche de panne, ni la modification de schéma, ni l’adaptation de câblage, ni l’exploration d’un dysfonctionnement dont la cause n’est pas clairement identifiée.",
        "Le BE Manœuvre n’autorise pas l’ouverture d’une enveloppe pour diagnostiquer, l’essai improvisé d’un matériel, ni la répétition de manœuvres sur une installation anormale pour tenter de faire repartir.",
        "Des circuits multiples, un voisinage non maîtrisé, une documentation absente, un départ non repérable, un besoin de mesure ou de dépannage, une intervention sur un circuit de puissance ou une modification de borne sont autant de signaux de sortie du cadre BS / BE.",
        "Le vrai professionnalisme consiste à reconnaître le moment exact où l’action relève plutôt d’un BR, d’un B1/B2, d’un BC ou d’une intervention organisée autrement.",
        "Le refus d’une action hors cadre n’est pas une opposition au travail. C’est une mesure de prévention attendue.",
      ],
      deepDive: [
        "C’est souvent sur ces cas limites que se joue la qualité de la formation.",
        "Cette capacité à s’arrêter fait partie des acquis attendus.",
      ],
      keyPoints: [
        "BS / BE Manœuvre ont des limites strictes.",
        "Le doute, la panne ou la complexité imposent une requalification.",
        "Refuser une action hors cadre est un comportement professionnel.",
      ],
      forbiddenPoints: [
        "Glisser d’un remplacement simple vers un dépannage.",
        "Multiplier les réarmements pour maintenir la production.",
        "Faire une mesure ou une vérification hors cadre.",
      ],
      legalRefs: [
        "NF C 18-510 - limites des interventions élémentaires et des manœuvres d’exploitation.",
        "NF C 18-510 - distinctions BS, BR, BC, B1, B2 et BE Manœuvre.",
        "INRS - distinction entre BS, BE Manœuvre, BR et opérations non habilitées.",
      ],
      practicalCase:
        "Exemple : après remplacement d’un fusible, le circuit retombe immédiatement. L’opérateur n’entame pas une recherche de défaut et fait remonter la situation pour requalification.",
      chapterImagePath: "/elearning/bsbe/types-operations-electriques.jpg",
      chapterImageAlt:
        "Types d op?rations ?lectriques et limites entre op?ration simple, manoeuvre et intervention hors cadre",
      visual: {
        title: "Le bon niveau d’arrêt",
        subtitle: "Si la situation se complique, le cadre change.",
        items: [
          "Panne non identifiée",
          "Schéma incertain",
          "Voisinage dégradé",
          "Requalification nécessaire",
        ],
        tone: "red",
        imagePath: "/elearning/bsbe/types-operations-electriques.jpg",
        imageAlt:
          "Types d op?rations ?lectriques et limites entre op?ration simple, manoeuvre et intervention hors cadre",
      },
    },

    {
      id: "epi-epc-environnement",
      title:
        "12. EPI, EPC, environnement de travail et préalables à respecter",
      estimatedMinutes: 12,
      intro:
        "La prévention ne se limite pas au bon geste. Elle repose aussi sur l’environnement, les protections collectives, les protections individuelles et l’état apparent du matériel.",
      content: [
        "Les équipements de protection collective doivent être privilégiés : enveloppes, capotages, écrans, obstacles, balisage, verrouillages, délimitation de zone et organisation du poste de travail.",
        "Les équipements de protection individuelle viennent en complément. Ils ne rendent jamais licite une opération interdite, mal préparée ou réalisée dans un voisinage dégradé.",
        "Avant toute action, il faut vérifier l’état apparent du matériel, des câbles, des appareillages, des outils, du local, de l’humidité, de l’accessibilité et de l’absence d’anomalie visible.",
        "Un capot retiré, une odeur de chaud, une trace de charbonnage, un sol humide, un câble détérioré, un coffret non refermé, une barrière déplacée ou une zone encombrée changent totalement le niveau de risque.",
        "Le port d’un EPI ne transforme jamais un non-électricien en électricien. Le cadre d’habilitation reste prioritaire.",
      ],
      deepDive: [
        "Les EPI doivent être compris dans la hiérarchie des protections et ne remplacent jamais le cadre de sécurité initial.",
        "Un équipement de protection dégradé ou absent est un signal d’arrêt, pas un détail.",
      ],
      keyPoints: [
        "Protection collective d’abord, EPI ensuite.",
        "EPI en complément.",
        "Contexte et état du matériel avant toute action.",
      ],
      forbiddenPoints: [
        "Compter sur l’EPI pour justifier une action interdite.",
        "Ignorer une zone dégradée ou humide.",
        "Déplacer un balisage ou un obstacle sans autorisation.",
      ],
      legalRefs: [
        "Code du travail - protection collective et individuelle.",
        "NF C 18-510 - adéquation des moyens de prévention et du contexte de travail.",
        "NF C 18-510 - équipements de protection et conditions ambiantes.",
      ],
      practicalCase:
        "Exemple : une manœuvre simple est demandée dans un local où le sol est humide et le coffret partiellement abîmé. L’opérateur ne commence pas et fait traiter le risque environnemental.",
      chapterImagePath: "/elearning/bsbe/epi-intervention.jpg",
      chapterImageAlt:
        "EPI d intervention en environnement ?lectrique et hi?rarchie des protections",
      visual: {
        title: "Vérifier le contexte",
        subtitle:
          "Les protections collectives restent prioritaires ; les EPI viennent en complément.",
        items: [
          "EPC présents",
          "EPI adaptés",
          "Aucune anomalie visible",
          "Zone compatible",
        ],
        tone: "amber",
        imagePath: "/elearning/bsbe/epi-intervention.jpg",
        imageAlt:
          "EPI d intervention en environnement ?lectrique et hi?rarchie des protections",
      },
    },

    {
      id: "synthese-pedagogique",
      title: "13. Synthèse pédagogique",
      estimatedMinutes: 10,
      intro:
        "Ce chapitre consolide les acquis avant la fin du parcours. L’objectif n’est pas de répéter mécaniquement les définitions, mais de vérifier que l’apprenant sait raisonner dans une situation réelle BS / BE Manœuvre : identifier le cadre, reconnaître les limites, refuser l’improvisation et transmettre en cas de doute.",
      content: [
        "Un titulaire BS ou BE Manœuvre doit être capable de relier les notions vues dans le parcours : habilitation délivrée par l’employeur, domaine basse tension, opération élémentaire, manœuvre d’exploitation, protection contre les contacts, voisinage, repérage, procédure et conduite à tenir en cas d’anomalie.",
        "Le BS concerne des interventions élémentaires en basse tension, réalisées dans un cadre strictement défini, sur un matériel identifié, hors tension, avec une procédure claire. Il ne s’agit jamais d’un dépannage libre, d’une recherche de panne ou d’une modification de câblage.",
        "Le BE Manœuvre concerne des manœuvres d’exploitation sur des organes identifiés et prévus pour cela : ouverture, fermeture, mise en marche, arrêt, réarmement ou basculement selon les consignes du site. Là encore, la manœuvre ne doit jamais devenir une investigation technique ou une tentative répétée de remise en service.",
        "La compétence attendue ne consiste donc pas seulement à connaître les gestes autorisés. Elle consiste surtout à reconnaître le moment où le cadre n’est plus réuni : repérage douteux, procédure absente, capot manquant, odeur de chaud, déclenchement répété, environnement humide, coffret détérioré ou demande qui glisse vers du dépannage.",
        "La prévention du risque électrique repose sur une décision correcte avant le geste. Avant toute action, l’opérateur doit vérifier le bon matériel, le bon organe, le bon circuit, l’état apparent des protections, l’environnement et la cohérence entre la procédure et la réalité du terrain.",
        "Si une seule condition importante manque, le bon comportement n’est pas de compenser par l’expérience ou la prudence personnelle. Le bon comportement est de stopper, sécuriser sans s’exposer, alerter l’encadrement ou la personne compétente et transmettre l’information.",
        "La synthèse pédagogique doit donc ancrer une logique simple : comprendre avant d’agir, vérifier avant de toucher, rester dans son cadre, refuser l’improvisation et demander clarification lorsque le doute apparaît.",
      ],
      deepDive: [
        "Dans beaucoup d’accidents ou de presque-accidents, le problème ne vient pas d’un manque total de connaissance, mais d’un glissement progressif. Une opération présentée comme simple devient une recherche de panne ; un réarmement devient une série d’essais ; un coffret normalement fermé devient une zone exposée ; une procédure ancienne ne correspond plus au terrain.",
        "Le niveau professionnel attendu en BS / BE Manœuvre est précisément de savoir interrompre cette dérive. Dire non à une action hors cadre, demander une clarification ou transmettre à un niveau d’habilitation supérieur constitue une compétence de sécurité à part entière.",
        "La synthèse pédagogique prépare aussi le quiz final : les questions ne doivent pas seulement tester la mémoire des sigles, mais la capacité à prendre la bonne décision dans un cas terrain réaliste.",
      ],
      keyPoints: [
        "Identifier le cadre réel avant toute action.",
        "Vérifier que le matériel, le circuit et la procédure sont cohérents.",
        "Distinguer opération élémentaire, manœuvre d’exploitation et dépannage.",
        "Refuser toute dérive vers une recherche de panne ou une modification.",
        "Stopper et transmettre dès qu’un doute apparaît.",
      ],
      forbiddenPoints: [
        "Agir sur un matériel mal identifié.",
        "Réarmer plusieurs fois sans analyse.",
        "Transformer une opération simple en dépannage.",
        "Ouvrir une enveloppe ou retirer un capot pour comprendre.",
        "Continuer malgré une odeur anormale, un échauffement ou un déclenchement répété.",
      ],
      legalRefs: [
        "Code du travail - articles R.4544-9 et R.4544-10 relatifs à l’habilitation, à la formation et à l’organisation des opérations.",
        "NF C 18-510 - cadre des opérations BS et BE Manœuvre, limites d’intervention et prescriptions de sécurité.",
        "NF C 18-510 - logique d’adéquation entre symbole d’habilitation, tâche confiée, environnement et instruction de sécurité.",
        "INRS - prévention du risque électrique, habilitation, maintien des compétences et conduite à tenir en cas d’anomalie.",
      ],
      practicalCase:
        "Exemple : un opérateur doit réaliser un remplacement simple prévu par une procédure. Sur place, le repérage du circuit ne correspond pas au tableau et l’équipement présente une trace d’échauffement. Même si le geste paraît facile, l’opération doit être suspendue : le cadre BS n’est plus suffisamment maîtrisé.",
      chapterImagePath: "/elearning/bsbe/synthese-pedagogique.svg",
      chapterImageAlt:
        "Synthèse pédagogique BS et BE Manœuvre : comprendre le cadre, vérifier les limites, refuser l’improvisation et transmettre.",
      visual: {
        title: "Synthèse pédagogique BS / BE Manœuvre",
        subtitle:
          "Consolider la méthode, reconnaître ses limites et adopter la bonne décision.",
        items: [
          "Identifier avant d’agir",
          "Vérifier le cadre réel",
          "Refuser l’improvisation",
          "Transmettre en cas de doute",
        ],
        tone: "amber",
        imagePath: "/elearning/bsbe/synthese-pedagogique.svg",
        imageAlt:
          "Illustration de synthèse pédagogique BS et BE Manœuvre",
      },
    },

    {
      id: "incendie-urgence",
      title:
        "14. Incident, incendie électrique et premiers secours",
      estimatedMinutes: 12,
      intro:
        "La trame BS / BE doit aussi entraîner à la bonne réaction en cas d’anomalie, de début d’incendie ou d’accident électrique.",
      content: [
        "En cas d’incident électrique, l’opérateur doit arrêter l’action, se protéger, mettre à distance si besoin et alerter.",
        "En cas d’incendie dans un environnement électrique, il faut appliquer les consignes du site et ne jamais agir en se mettant soi-même en risque.",
        "En cas d’électrisation, la priorité absolue est de supprimer ou faire supprimer le danger électrique avant toute tentative de secours.",
        "Il ne faut jamais toucher directement une victime tant que le risque électrique persiste. L’objectif est d’éviter le suraccident.",
        "Les notions de premiers secours sont ici traitées sous l’angle du risque électrique : éviter le suraccident, transmettre les bonnes informations et ne pas aggraver la situation par précipitation.",
        "Face à un feu d’origine électrique, l’utilisation d’un moyen d’extinction doit respecter les consignes du site et l’état de mise hors tension. En cas de doute, la priorité reste l’alerte et l’évacuation.",
      ],
      deepDive: [
        "Il faut retenir une logique de professionnalisme : pas une attitude héroïque, mais une réaction stable, méthodique et compatible avec l’organisation du site.",
      ],
      keyPoints: [
        "Stopper, protéger, alerter.",
        "Ne jamais devenir la seconde victime.",
        "Le risque électrique persiste parfois après l’incident visible.",
      ],
      forbiddenPoints: [
        "Toucher directement une victime encore exposée.",
        "Ouvrir un coffret qui fume pour voir.",
        "Utiliser de l’eau sur une installation sous tension.",
      ],
      legalRefs: [
        "NF C 18-510 - incendie et accidents sur ou près des ouvrages et installations électriques.",
        "Code du travail - organisation des secours et prévention du suraccident.",
        "INRS - conduite à tenir face à un accident d’origine électrique.",
      ],
      resourceVideos: [VIDEO.chocElectrique],
      practicalCase:
        "Exemple : un coffret de commande dégage de la fumée pendant une manœuvre. L’opérateur se met en sécurité, protège la zone et alerte sans chercher à démonter ou à réarmer.",
      chapterImagePath: "/elearning/bsbe/danger-armoires-electriques.jpg",
      chapterImageAlt:
        "Armoire ?lectrique pr?sentant un danger et imposant arr?t, protection et alerte",
      visual: {
        title: "La bonne réaction",
        subtitle:
          "Stopper, protéger, alerter et secourir sans créer de suraccident.",
        items: [
          "Incident",
          "Incendie",
        "Électrisation",
          "Premiers secours",
        ],
        tone: "red",
        imagePath: "/elearning/bsbe/danger-armoires-electriques.jpg",
        imageAlt:
          "Armoire ?lectrique pr?sentant un danger et imposant arr?t, protection et alerte",
      },
    },

    {
      id: "synthese-operationnelle",
      title: "15. Synthèse opérationnelle",
      estimatedMinutes: 10,
      intro:
        "Ce dernier chapitre fixe les réflexes opérationnels à retenir avant l’évaluation finale. L’objectif est que l’apprenant reparte avec une méthode simple, utilisable sur le terrain, pour agir uniquement lorsque le cadre BS / BE Manœuvre est clair, autorisé et maîtrisé.",
      content: [
        "Un titulaire BS ou BE Manœuvre agit seulement si l’opération est clairement identifiée, prévue par l’organisation de l’entreprise, compatible avec son titre d’habilitation et réalisée dans un environnement maîtrisé.",
        "Pour le BS, l’action doit rester une intervention élémentaire en basse tension : remplacement simple, raccordement élémentaire ou action prévue sur un matériel identifié, hors tension et encadré par une procédure. Dès que l’opération suppose une recherche de panne, une adaptation de câblage ou une modification, elle sort du cadre.",
        "Pour le BE Manœuvre, l’action doit rester une manœuvre d’exploitation sur un organe identifié : ouverture, fermeture, arrêt, mise en marche, réarmement ou basculement prévu par les consignes. La manœuvre ne doit jamais devenir une tentative de dépannage ou une série d’essais répétés.",
        "La méthode opérationnelle peut se résumer en quatre réflexes : identifier, vérifier, agir si autorisé, stopper si doute. Cette séquence doit être appliquée avant chaque opération, même lorsque le geste paraît habituel ou rapide.",
        "Identifier signifie reconnaître le bon organe, le bon circuit, le bon équipement, le bon local et la bonne procédure. Un repère incomplet, une étiquette douteuse ou une incohérence entre le terrain et le document impose de suspendre l’action.",
        "Vérifier signifie observer l’environnement : état du coffret, capotage, absence de partie accessible dangereuse, absence d’humidité, absence d’odeur anormale, absence d’échauffement, absence de câble détérioré, cohérence de la procédure et maintien des protections collectives.",
        "Agir si autorisé signifie réaliser uniquement le geste prévu, sans élargir la mission. L’opérateur ne doit pas ouvrir pour voir, chercher la cause d’un défaut, réarmer à répétition, modifier un raccordement ou improviser une solution pour maintenir l’exploitation.",
        "Stopper si doute signifie interrompre l’action dès qu’une condition de sécurité n’est plus réunie. L’arrêt n’est pas un échec ; c’est le comportement attendu pour éviter l’accident, le suraccident ou l’aggravation d’une anomalie.",
        "En cas d’incident, d’électrisation, de fumée, d’odeur de chaud ou de déclenchement répété, la priorité reste la protection des personnes : ne pas toucher une victime exposée, ne pas ouvrir un coffret dangereux, se mettre à distance, alerter et appliquer les consignes du site.",
        "La synthèse finale doit donc être claire : le BS / BE Manœuvre est utile pour des opérations simples et encadrées, mais il ne donne jamais un droit général d’intervention électrique. La sécurité repose sur le respect strict du périmètre confié par l’employeur.",
      ],
      deepDive: [
        "Sur le terrain, la pression vient souvent de l’exploitation : remettre un équipement en service, aller vite, rendre service ou éviter un arrêt. C’est précisément dans ces moments que le cadre BS / BE Manœuvre doit être le plus respecté.",
        "L’opérateur compétent n’est pas celui qui tente coûte que coûte de résoudre le problème. C’est celui qui sait reconnaître que le problème ne relève plus de son niveau d’habilitation ou de la procédure prévue.",
        "La dernière compétence à acquérir est donc une compétence de décision : savoir quand agir, mais surtout savoir quand ne pas agir.",
      ],
      keyPoints: [
        "Identifier le matériel, l’organe ou le circuit avant toute action.",
        "Vérifier la procédure, le repérage, l’environnement et les protections.",
        "Agir uniquement si l’action est autorisée, simple et maîtrisée.",
        "Stopper immédiatement en cas de doute, d’anomalie ou de dérive.",
        "Transmettre à l’encadrement ou à une personne compétente.",
      ],
      forbiddenPoints: [
        "Réarmer en boucle après plusieurs déclenchements.",
        "Ouvrir un coffret pour rechercher la cause.",
        "Modifier un câblage ou adapter une installation.",
        "Agir malgré un repérage incohérent.",
        "Compenser une protection absente par le seul port d’un EPI.",
      ],
      legalRefs: [
        "Code du travail - articles R.4544-9 et R.4544-10 : travailleurs habilités, formation adaptée, habilitation délivrée par l’employeur.",
        "NF C 18-510 - interventions élémentaires BS et manœuvres d’exploitation BE Manœuvre.",
        "NF C 18-510 - prescriptions de sécurité, limites d’habilitation, environnement électrique et rôle des instructions.",
        "INRS - habilitation électrique : formation, évaluation, avis après formation, maintien des compétences et prévention des accidents.",
      ],
      resourceVideos: [VIDEO.bsbe],
      practicalCase:
        "Exemple : un opérateur sait techniquement réarmer un départ, mais la zone est encombrée, le repère local est douteux et l’équipement a déjà déclenché deux fois. La bonne décision consiste à ne pas réarmer, à sécuriser la situation et à transmettre à une personne compétente.",
      chapterImagePath: "/elearning/bsbe/synthese-operationnelle.svg",
      chapterImageAlt:
        "Synthèse opérationnelle BS et BE Manœuvre : identifier, vérifier, agir si autorisé, stopper si doute.",
      visual: {
        title: "Synthèse opérationnelle BS / BE Manœuvre",
        subtitle:
          "Identifier, vérifier, agir si autorisé, stopper si doute.",
        items: [
          "Matériel repéré",
          "Procédure claire",
          "Contexte conforme",
          "Transmission si doute",
        ],
        tone: "green",
        imagePath: "/elearning/bsbe/synthese-operationnelle.svg",
        imageAlt:
          "Illustration de synthèse des réflexes de décision pour le parcours BS et BE Manœuvre",
      },
    },
  ],
};
