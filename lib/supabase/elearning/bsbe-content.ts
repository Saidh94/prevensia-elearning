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
      scenarios: [
        {
          situation: "Vous êtes habilité BS et devez remplacer une prise murale dans une salle serveurs. Vous coupez le disjoncteur qui dessert la prise, mais un onduleur (UPS) de 6 kVA installé dans le rack continue d’alimenter l’installation via son circuit de sortie. Les prises en aval de l’onduleur restent sous tension.",
          question: "Comment traiter la présence d’un onduleur lors d’une intervention BS ?",
          wrongActions: [
            "Considérer que la coupure au disjoncteur principal suffit à mettre toute l’installation hors tension.",
            "Débrancher le câble de la prise à remplacer sans vérifier l’absence de tension en aval de l’onduleur.",
            "Demander à un collègue d’éteindre les équipements alimentés par l’onduleur et continuer sans VAT.",
          ],
          correctActions: [
            "Identifier toutes les sources d’alimentation du circuit à traiter, y compris l’onduleur en sortie.",
            "Effectuer une VAT sur chaque conducteur accessible avant tout contact, même après coupure du disjoncteur.",
            "Si l’onduleur maintient une tension résiduelle, suspendre l’intervention et demander la mise hors service complète de la source autonome avant de poursuivre.",
          ],
          explanation: "Un onduleur constitue une source d’énergie autonome indépendante du réseau. La coupure du disjoncteur en amont ne met pas hors tension les circuits alimentés par la sortie de l’onduleur. La VAT reste obligatoire et doit confirmer l’absence de tension sur chaque conducteur du circuit à traiter.",
          normRef: "NF C 18-510 § 5.4 — sources multiples, énergies autonomes et obligation de VAT avant toute intervention BS",
        },
        {
          situation: "Vous devez remplacer un bloc autonome d’éclairage de sécurité (BAES) défaillant. Vous coupez le circuit dédié à l’éclairage de sécurité au tableau principal. En déposant le BAES, vous sentez que les bornes de raccordement sont encore sous une tension résiduelle provenant de la batterie interne du bloc.",
          question: "Un BAES peut-il rester sous tension après coupure du circuit au tableau ?",
          wrongActions: [
            "Considérer que le bloc est hors tension dès que le circuit au tableau est ouvert.",
            "Toucher les bornes du BAES sans vérifier leur état de tension.",
            "Débrancher le BAES en tirant sur les fils sans VAT préalable.",
          ],
          correctActions: [
            "Vérifier avant toute manipulation que le bloc autonome n’est plus en charge : décharge de la batterie ou neutralisation selon les consignes du fabricant.",
            "Réaliser une VAT sur les bornes accessibles du BAES avant tout contact.",
            "Respecter la procédure de remplacement spécifique aux BAES, qui prévoit la décharge de la batterie interne avant démontage.",
          ],
          explanation: "Un BAES possède une batterie intégrée qui peut maintenir une tension de sortie sur ses bornes même après coupure de l’alimentation secteur. Ce type d’énergie résiduelle est fréquemment sous-estimé. La VAT est obligatoire avant toute manipulation des bornes, quel que soit l’état du circuit d’alimentation.",
          normRef: "NF C 18-510 § 5.4 — énergies résiduelles et sources autonomes : VAT obligatoire avant intervention BS",
        },
      ],
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
      scenarios: [
        {
          situation:
            "Vous êtes habilité BS et intervenez pour changer un câble d’alimentation dans un local technique. En dégainant le cheminement de câbles, vous découvrez un câble avec une gaine orange et un marquage ‘20 kV’ sur la gaine. Le plan remis ne mentionnait qu’une installation basse tension dans ce local.",
          question:
            "Que faites-vous lorsque vous découvrez ce qui semble être un câble haute tension là où vous n’en attendiez pas ?",
          wrongActions: [
            "Continuer l’intervention en faisant attention de ne pas toucher ce câble.",
            "Vérifier vous-même avec votre testeur BT si le câble est sous tension.",
            "Couper le câble au niveau de l’armoire la plus proche pour l’identifier.",
          ],
          correctActions: [
            "Arrêter immédiatement toute intervention et quitter la zone.",
            "Informer sans délai votre chargé d’exploitation de la découverte.",
            "Ne reprendre le travail qu’après confirmation par un personnel habilité HT et identification certaine du câble.",
          ],
          explanation:
            "Un BS n’est pas habilité à travailler au voisinage de la haute tension ni à l’identifier. Un câble HT sous tension à proximité immédiate peut provoquer un arc à distance sans contact direct. La seule conduite est l’arrêt et l’alerte.",
          normRef:
            "NF C 18-510 § 5.3 — périmètre BS strictement limité à la basse tension ; § 3 — zones d’environnement en HT",
        },
        {
          situation:
            "Vous êtes habilité BE Manœuvre et on vous demande d’ouvrir le sectionneur ‘D12’ dans une armoire de distribution. En ouvrant la porte de l’armoire, vous remarquez un pictogramme en forme d’éclair avec la mention ‘10 kV’ sur un jeu de barres non protégé situé en partie haute, à moins d’un mètre de vous.",
          question:
            "Quelle est la bonne attitude face à une partie HT non protégée à proximité de votre zone d’intervention BT ?",
          wrongActions: [
            "Effectuer la manœuvre rapidement en vous éloignant le plus possible de la partie HT.",
            "Recouvrir la partie HT avec un chiffon isolant avant de procéder.",
            "Appliquer quand même la consigne reçue puisque votre manœuvre concerne un départ BT.",
          ],
          correctActions: [
            "Refuser d’effectuer la manœuvre tant que la partie HT n’est pas protégée ou condamnée par un habilité HT.",
            "Signaler immédiatement la situation à votre chargé d’exploitation.",
            "Ne pas recouvrir vous-même la partie HT : cette opération relève d’un habilité HTA ou HTB.",
          ],
          explanation:
            "Le BE Manœuvre intervient exclusivement en BT. La présence d’une partie HT accessible dans son environnement immédiat invalide les conditions de sécurité de sa manœuvre. Il ne peut pas modifier lui-même la situation HT et doit s’arrêter.",
          normRef:
            "NF C 18-510 § 5.4 — conditions d’intervention BE Manœuvre ; § 4 — zones d’environnement HT et DMA",
        },
        {
          situation:
            "Vous intervenez en BS dans un sous-station électrique pour remplacer un capot de prise 230 V côté basse tension. Le poste contient aussi un transformateur HTA/BT. Le transformateur est séparé de votre zone de travail uniquement par un grillage métallique. Aucun personnel HT n’est présent sur site.",
          question:
            "Dans ce contexte, quelles précautions supplémentaires s’imposent à vous en tant que BS ?",
          wrongActions: [
            "Travailler normalement puisque votre intervention est côté BT et que le grillage vous sépare du transformateur.",
            "Vous approcher du grillage pour identifier les jeux de barres HT afin d’estimer le risque.",
            "Commencer l’intervention si votre chef vous dit que le transformateur est hors tension.",
          ],
          correctActions: [
            "Vérifier que la zone HT est verrouillée et que vous disposez d’une autorisation écrite de travail mentionnant les conditions de séparation.",
            "Ne jamais vous appuyer sur le grillage ni approcher de la partie HT, même pour observer.",
            "Si aucune séparation physique certifiée n’est en place côté HT, différer l’intervention jusqu’à ce qu’un chargé de travaux habilité HT ait sécurisé la zone.",
          ],
          explanation:
            "Un BS dans une sous-station reste exposé aux zones de voisinage HT. La présence d’un grillage n’équivaut pas à une mise hors tension et hors tension certifiée de la HT. Sans autorisation écrite et sans séparation physique certifiée, l’intervention BS ne peut pas commencer.",
          normRef:
            "NF C 18-510 § 5.3 — conditions d’habilitation BS ; § 4 — distances de voisinage renforcé HTA",
        },
      ],
      chapterImagePath: "/elearning/h0b0/domaines-tension.png",
      chapterImageAlt:
        "Domaines de tension et distinction TBT, BT et HT utiles au BS et au BE Manœuvre",
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
          "Domaines de tension et distinction TBT, BT et HT utiles au BS et au BE Manœuvre",
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
      chapterImagePath: "/elearning/bsbe/bsbe-effets.svg",
      chapterImageAlt:
        "Effets du courant électrique sur le corps humain selon l’intensité et le temps de contact",
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
        illustrationKey: "body-effects" as const,
        imagePath: "/elearning/bsbe/bsbe-effets.svg",
        imageAlt:
          "Effets du courant électrique sur le corps humain selon l’intensité et le temps de contact",
      },
    },

    {
      id: "protections-zones",
      title:
        "5. Protection contre les chocs, contact direct, contact indirect et PNST",
      estimatedMinutes: 18,
      intro:
        "Avant toute opération BS ou BE Manœuvre, l’apprenant doit savoir reconnaître les principales situations de choc électrique : contact direct, contact indirect, pièce nue sous tension, voisinage et protection absente ou dégradée.",
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
        "Voisinage simple et voisinage renforcé BT autour d'une pièce nue sous tension",
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
        animationKey: "zones-voisinage-bt" as const,
        imagePath: "/elearning/bsbe/danger-voisinage-simple-et-voisinage-bt.jpg",
        imageAlt:
          "Voisinage simple et voisinage renforcé BT autour d'une pièce nue sous tension",
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
        "Sur un tableau, certains signaux faibles imposent une vigilance immédiate : départ mal repéré, étiquetage ancien, juxtaposition de circuits force et commande, présence d’un inverseur, départ moteur, variateur ou appareillage qui ne relève plus d’une action simple.",
        "Un organe de protection peut déclencher parce qu’il protège réellement l’installation. Le réarmer sans comprendre le contexte, surtout après plusieurs déclenchements, peut masquer un défaut, aggraver un échauffement ou exposer une personne au voisinage d’une pièce dangereuse.",
        "Pour une opération BS / BE Manœuvre, la lecture attendue reste volontairement simple mais rigoureuse : identifier l’équipement concerné, confirmer l’organe prévu, vérifier que l’action correspond à la procédure et refuser toute interprétation lorsque le repérage ne permet pas d’être sûr.",
      ],
      deepDive: [
        "La lecture du matériel protège l’opérateur contre deux erreurs fréquentes : agir sur le mauvais organe ou transformer une manœuvre simple en diagnostic improvisé. Tant que l’organe, le circuit et la fonction ne sont pas clairement identifiés, l’action ne démarre pas.",
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
      scenarios: [
        {
          situation: "Vous intervenez en BS pour remplacer un interrupteur dans une salle de réunion. Selon le schéma papier remis par le responsable, ce circuit est terminal, alimenté par un seul départ. Sur le tableau ouvert, vous constatez que le câble passe en fait dans une goulotte commune à deux départs non repérés. Le schéma n’a manifestement pas été mis à jour après des travaux d’extension réalisés six mois plus tôt.",
          question: "Comment réagir lorsque le schéma ne correspond plus à l’installation réelle ?",
          wrongActions: [
            "Couper l’un des deux départs en supposant qu’il s’agit du bon et faire la VAT pour confirmer.",
            "Couper les deux départs pour être sûr, même sans en avoir l’autorisation.",
            "Faire confiance au schéma papier et intervenir en ignorant la divergence observée.",
          ],
          correctActions: [
            "Suspendre l’intervention dès que la cohérence entre le schéma et le terrain n’est plus assurée.",
            "Signaler la divergence au responsable ou au chargé d’exploitation pour obtenir un repérage mis à jour.",
            "Ne reprendre l’intervention qu’une fois l’identification du départ correct confirmée par une personne compétente.",
          ],
          explanation: "Un schéma non à jour est une source majeure d’erreur de repérage. Agir sur la base d’un document obsolète expose à couper le mauvais départ, à laisser le circuit à traiter sous tension ou à toucher un conducteur actif non identifié. La suspension de l’opération est la seule réaction correcte.",
          normRef: "NF C 18-510 § 5.4 — cohérence entre document, repérage terrain et opération BS",
        },
        {
          situation: "Vous devez réarmer le disjoncteur ‘PC bureau 3’ selon la consigne reçue. Devant le tableau, deux disjoncteurs portent des étiquettes similaires : l’un porte ‘PC Bureau 3’ et l’autre ‘Bureau 3 - PC’. Un collègue vous assure que le bon est celui de gauche, mais sans certitude.",
          question: "Un doute sur le repérage de deux organes similaires autorise-t-il à agir au jugé ?",
          wrongActions: [
            "Choisir le disjoncteur de gauche sur conseil oral d’un collègue.",
            "Réarmer les deux disjoncteurs successivement pour identifier le bon par élimination.",
            "Considérer que l’enjeu est faible et agir quand même.",
          ],
          correctActions: [
            "Refuser d’agir tant que le repérage n’est pas confirmé de façon certaine.",
            "Demander au chargé d’exploitation ou au responsable de confirmer le départ exact à manœuvrer.",
            "Signaler que les deux étiquettes sont ambiguës et demander une mise à jour du repérage.",
          ],
          explanation: "Un repérage ambigu invalide la condition d’identification certaine requise pour toute manœuvre BS ou BE Manœuvre. Agir sur la base d’une supposition orale expose à couper le mauvais circuit ou à mettre sous tension une zone en cours d’intervention. L’exigence de repérage fiable n’est pas une formalité.",
          normRef: "NF C 18-510 § 5.4 — repérage fiable des organes comme condition préalable à toute manœuvre ou intervention",
        },
      ],
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
      scenarios: [
        {
          situation: "Vous êtes habilité BE Manœuvre. On vous remet une procédure de réarmement datée de 14 mois. Sur le coffret de commande, vous constatez que l’organe décrit dans la procédure (un disjoncteur magnétothermique de marque A) a été remplacé lors d’une révision récente par un module différentiel de marque B avec un bouton de réarmement de type et d’emplacement différents. La procédure écrite ne correspond plus au matériel présent.",
          question: "Peut-on appliquer une procédure de manœuvre qui ne correspond plus au matériel installé ?",
          wrongActions: [
            "Adapter la procédure soi-même en identifiant le nouveau bouton de réarmement par analogie.",
            "Exécuter la manœuvre ‘à peu près’ en supposant que la logique reste la même.",
            "Considérer que 14 mois c’est récent et que la procédure est encore valable.",
          ],
          correctActions: [
            "Suspendre la manœuvre dès que la procédure ne correspond plus au matériel présent.",
            "Signaler au chargé d’exploitation ou au responsable la divergence entre la procédure écrite et l’équipement réel.",
            "Ne reprendre l’opération qu’après validation d’une procédure mise à jour et adaptée au nouveau matériel.",
          ],
          explanation: "Une procédure de manœuvre n’est valable que si elle correspond au matériel réellement installé. Un changement de composant sans mise à jour documentaire est une cause classique d’erreur de manœuvre. L’opérateur BE Manœuvre ne doit jamais adapter lui-même une procédure : c’est une responsabilité qui relève du chargé d’exploitation ou du service compétent.",
          normRef: "NF C 18-510 § 5.4 — adéquation entre la procédure et le matériel présent : condition préalable à toute manœuvre BE",
        },
      ],
      chapterImagePath: "/elearning/bsbe/zone-ne-pas-franchir.jpg",
      chapterImageAlt:
        "Zone de travail à ne pas franchir devant une installation électrique",
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
          "Zone de travail à ne pas franchir devant une installation électrique",
      },
    },

    {
      id: "classes-materiels-ip",
      title:
        "8. Classes des matériels électriques et indices de protection IP",
      estimatedMinutes: 20,
      intro:
        "Avant d'intervenir sur un équipement, le titulaire BS doit savoir identifier sa classe de protection intrinsèque et lire son indice IP. Ces deux informations conditionnent directement le type d'intervention autorisé.",
      content: [
        "Les matériels électriques sont classés en quatre catégories selon leur niveau de protection intrinsèque contre le risque de contact électrique. Cette classification est définie par la norme NF EN 61140.",
        "La classe 0 correspond à une isolation principale uniquement, sans aucune protection supplémentaire. Elle est interdite en milieu professionnel en France : si un opérateur BS rencontre un tel matériel, il doit le signaler immédiatement sans l'utiliser.",
        "La classe I dispose d'une isolation principale complétée par une mise à la terre de toutes les masses métalliques. En cas de défaut d'isolement, le courant de fuite est détecté par le disjoncteur différentiel et le circuit est coupé. Ces matériels utilisent une fiche 3 broches. C'est la classe la plus courante en milieu professionnel.",
        "La classe II possède une double isolation ou une isolation renforcée. Aucune mise à la terre n'est nécessaire ni prévue. Ces matériels portent le symbole d'un carré inscrit dans un autre carré (□□). L'opérateur BS ne doit jamais connecter une prise de terre sur un matériel classe II.",
        "La classe III fonctionne sous très basse tension de sécurité (TBTS) : 50 V alternatif maximum ou 120 V continu. Elle est utilisée pour les jouets, les lampes LED 12 V, certains appareils médicaux. Le risque d'électrocution y est intrinsèquement limité.",
        "L'indice de protection IP (Ingress Protection) est défini par la norme NF EN 60529. Il indique le degré de protection d'un équipement contre la pénétration de corps solides (premier chiffre) et de liquides (second chiffre). Une lettre additionnelle optionnelle précise la protection des personnes contre l'accès aux parties dangereuses.",
        "Le premier chiffre IP va de 0 (aucune protection) à 6 (étanche aux poussières). Le chiffre 2 signifie que les doigts ne peuvent pas atteindre les parties dangereuses — c'est le seuil minimum en BT (IP 2X). Le chiffre 4 protège contre les corps solides supérieurs à 1 mm.",
        "Le second chiffre IP va de 0 (aucune protection) à 8 (immersion prolongée). Le chiffre 4, très courant en extérieur, signifie protection contre les projections d'eau de toutes directions. Le chiffre 3 ne couvre que les aspersions jusqu'à 60°, insuffisant en extérieur exposé.",
        "La lettre additionnelle A, B, C ou D précise la protection des personnes : A (main ≥ 50 mm), B (doigt ≥ 12,5 mm), C (outil ≥ 2,5 mm), D (fil ≥ 1 mm). La lettre C est fréquente sur les armoires accessibles avec des outils.",
        "Pour le titulaire BS, la règle opérationnelle est simple : un matériel IP2X ou IPXXB sur les parties actives permet un remplacement sous tension par du personnel formé non habilité (NF C 18-510 § 10). Tout matériel sans cette protection impose la mise hors tension avant toute intervention.",
      ],
      keyPoints: [
        "Classe 0 : isolation simple — INTERDITE en milieu professionnel.",
        "Classe I : isolation + mise à la terre — la plus courante (prise 3 broches).",
        "Classe II : double isolation, symbole □□ — pas de mise à la terre.",
        "Classe III : TBTS ≤ 50 V AC — très basse tension de sécurité.",
        "IP 1er chiffre = corps solides, 2e chiffre = liquides, lettre = personnes.",
        "IP 2X minimum en BT = doigt ne peut pas atteindre les parties actives.",
        "IP2X sur parties actives → remplacement possible sous tension (personnel formé non habilité).",
        "Sans IP2X → mise hors tension et habilitation BS obligatoires.",
      ],
      forbiddenPoints: [
        "Mettre à la terre un matériel classe II (pas de conducteur PE prévu).",
        "Utiliser ou laisser en service un matériel classe 0.",
        "Intervenir sous tension sur un matériel sans indice IP2X avéré.",
      ],
      legalRefs: [
        "NF EN 61140 — classification des classes de protection des matériels",
        "NF EN 60529 — degrés de protection IP",
        "NF C 18-510 § 10 — conditions d'intervention sur matériels IP2X",
      ],
      visual: {
        title: "Classes des matériels électriques",
        subtitle: "Norme NF EN 61140 — 4 classes selon le niveau de protection intrinsèque.",
        imagePath: "/elearning/bsbe/bsbe-classes-materiels.svg",
        imageAlt: "Tableau des 4 classes de matériels électriques — Classe 0, I, II, III",
        tone: "blue",
        items: [
          "Classe 0 : isolation simple — interdite en France",
          "Classe I : isolation + PE (prise 3 broches)",
          "Classe II : double isolation, symbole □□",
          "Classe III : TBTS ≤ 50 V AC / 120 V DC",
        ],
      },
      chapterImagePath: "/elearning/bsbe/bsbe-ip.svg",
      chapterImageAlt: "Structure de l'indice de protection IP — premier chiffre corps solides, second chiffre liquides",
    },

    {
      id: "operations-bs",
      title:
        "9. Opérations BS : remplacement simple et raccordement élémentaire",
      estimatedMinutes: 20,
      intro:
        "Le cœur du symbole BS est ici : intervenir uniquement sur des opérations élémentaires prévues, identifiées, hors tension et strictement encadrées par les consignes de l’employeur.",
      content: [
        "La norme NF C 18-510 établit une gradation importante que le BS doit connaître : toutes les opérations simples n’exigent pas forcément une habilitation BS. Certaines peuvent être effectuées par du personnel formé mais non habilité — ce qui délimite encore plus précisément ce que le BS doit réaliser.",
        "Premier cas : le remplacement de lampe ou d’accessoire sur un matériel présentant un degré de protection IP2X ou IPXXB (pas de risque de contact avec les parties actives). Dans ce cas, la norme autorise le remplacement en présence de tension par du personnel formé non habilité. Dès qu’il y a risque de contact, l’intervention relève du BS ou du BR.",
        "Deuxième cas : le remplacement d’un fusible à fusion enfermée (cartouche de type CH10, diazed ou cartouche industrielle dont la fusion n’est pas accessible). La norme permet ce remplacement sans VAT (Vérification d’Absence de Tension) préalable, par une personne formée B0 ou même non habilité si le fusible et son support sont conçus à cet effet (fusion confinée). Dès que le fusible n’est pas à fusion enfermée ou que le porte-fusible est nu, le BS et la mise hors tension s’imposent.",
        "Ce que le BS fait que le B0 ne peut pas faire : raccordement d’une platine sur circuit en attente, remplacement d’une prise ou d’un interrupteur sur circuit non protégé IP2X, remplacement d’un fusible non enfermé — toujours hors tension, circuit identifié.",
        "Le raccordement doit rester élémentaire, hors tension, sur un support prévu et identifié. Si l’action impose un diagnostic, une adaptation de câblage, un doute sur le repérage ou une complexité technique, elle sort du cadre BS.",
        "La qualité du raisonnement se voit dans cette capacité à distinguer une opération élémentaire d’un dépannage improvisé.",
      ],
      deepDive: [
        "Le danger fréquent est le glissement de mission : l’opérateur commence un remplacement simple, constate que cela ne repart pas et bascule vers une recherche de panne.",
        "Une opération BS doit pouvoir être expliquée simplement : quel matériel, quel circuit, quelle procédure, quelle mise hors tension, quelle vérification et quelle remise en service.",
      ],
      keyPoints: [
        "Lampe IP2X sous tension → personnel formé non habilité peut intervenir (NF C 18-510 § 10).",
        "Fusible à fusion enfermée sans VAT → B0 ou personnel formé non habilité suffisent.",
        "Opérations BS autorisées (§ 10.4.1) : remplacement à l'identique de lampe (absence IP2X), fusible nu, prise de courant, interrupteur, disjoncteur de branchement BT ; raccordement d'un circuit en attente — toujours hors tension, circuit identifié.",
        "BS = remplacement à l'identique, hors tension, circuit repéré, ≤ 400 V BT, circuits terminaux uniquement.",
        "BS ≠ diagnostic, ≠ câblage modifié, ≠ intervention sur circuit de distribution, ≠ intervention sur circuit non identifié.",
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
      scenarios: [
        {
          situation: "Vous êtes habilité BS. Votre responsable vous demande de remplacer un fusible de 16 A dans une armoire terminale. En ouvrant l'armoire, vous constatez que plusieurs départs sont sous tension et que le fusible à remplacer est difficile à identifier.",
          question: "Comment procéder lorsque l'identification du fusible est incertaine ?",
          wrongActions:           [
            "Retirer le fusible qui semble le plus probable et voir si quelque chose s'éteint.",
            "Toucher plusieurs porte-fusibles pour repérer celui qui est chaud.",
            "Demander à un collègue de 'surveiller' pendant que vous tentez de remplacer.",
          ],
          correctActions:           [
            "Refuser de remplacer le fusible sans identification certaine du circuit concerné.",
            "Demander le schéma de l'armoire ou l'assistance d'un électricien habilité BR ou B2.",
            "Ne jamais travailler dans une armoire multi-départs sous tension sans délimitation claire du périmètre d'intervention.",
          ],
          explanation: "Le BS est autorisé à remplacer des fusibles et petits matériels dans des conditions définies. L'identification certaine du circuit est indispensable. Une confusion peut entraîner une coupure non autorisée ou un contact avec un départ non consigné. Le BS doit connaître ses limites.",
          normRef: "NF C 18-510 § 5.4 — périmètre d'intervention BS : remplacement d'éléments protégés et identifiés",
        },
      ],
      chapterImagePath: "/elearning/bsbe/pratique-terrain.jpg",
      chapterImageAlt:
        "Intervention élémentaire en environnement électrique basse tension",
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
          "Intervention élémentaire en environnement électrique basse tension",
      },
    },

    {
      id: "procedure-bs-mise-hors-tension-vat",
      title:
        "10. Procédure BS : mise hors tension pour son propre compte, VAT et documents",
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
      scenarios: [
        {
          situation: "Vous êtes habilité BS et devez remplacer une prise défectueuse dans un bureau. Avant d'intervenir, vous coupez le disjoncteur différentiel qui dessert la pièce. Le voyant sur le boîtier de la prise est éteint. Vous concluez que c'est hors tension et commencez à dévisser.",
          question: "La procédure BS a-t-elle été correctement respectée ?",
          wrongActions:           [
            "Déduire l'absence de tension uniquement d'un voyant éteint ou d'un disjoncteur ouvert.",
            "Commencer le démontage sans avoir effectué la VAT avec un appareil de mesure.",
            "S'appuyer sur le circuit supposé pour identifier le départ sans vérifier.",
          ],
          correctActions:           [
            "Effectuer une vérification d'absence de tension (VAT) avec un testeur de tension adapté et vérifié.",
            "Condamner le disjoncteur si possible (cadenas ou étiquette) pour éviter une remise sous tension intempestive.",
            "Procéder à l'intervention uniquement après confirmation de l'absence de tension.",
          ],
          explanation: "La procédure BS impose une séquence : mise hors tension, condamnation si possible, identification du circuit, VAT avec appareil adapté, puis intervention. Un voyant ou un disjoncteur ouvert ne remplace pas la VAT. C'est l'étape critique qui garantit la sécurité de l'intervenant.",
          normRef: "NF C 18-510 § 5.4 — séquence d'intervention BS et vérification d'absence de tension",
        },
        {
          situation: "Vous réalisez une intervention BS pour changer un interrupteur. Votre testeur de tension ne fonctionne pas correctement (pile faible, pas de signal sur une prise connue comme sous tension). Vous pensez quand même faire la VAT avec cet appareil.",
          question: "Peut-on utiliser un testeur de tension dont on n'a pas vérifié le bon fonctionnement ?",
          wrongActions:           [
            "Réaliser la VAT avec un appareil dont le fonctionnement est incertain.",
            "Remplacer la pile et considérer que l'appareil est de nouveau fiable sans test.",
            "Tâter les fils avec une pince de test non calibrée.",
          ],
          correctActions:           [
            "Vérifier le bon fonctionnement du testeur sur une source de tension connue avant la VAT.",
            "Si le testeur est défaillant, ne pas commencer l'intervention.",
            "Obtenir un appareil de mesure fonctionnel avant toute intervention.",
          ],
          explanation: "La VAT n'a de valeur que si l'appareil utilisé est lui-même vérifié. La séquence correcte est : vérification de l'appareil sur source connue → VAT → vérification de l'appareil sur source connue après. Un testeur défaillant donne une fausse sécurité.",
          normRef: "NF C 18-510 § 5.4 — vérification du bon fonctionnement du dispositif de VAT",
        },
        {
          situation: "Vous intervenez en BS pour déposer le capot d'un coffret de compensation d'énergie réactive contenant des condensateurs de 25 kvar. Vous avez coupé le sectionneur d'alimentation et attendu deux minutes. En approchant votre testeur de tension des bornes des condensateurs, vous mesurez encore 180 V.",
          question: "Que signifie cette tension résiduelle et comment réagir ?",
          wrongActions: [
            "Considérer que 180 V est une valeur résiduelle négligeable qui disparaîtra d'elle-même.",
            "Utiliser un chiffon pour court-circuiter les bornes et accélérer la décharge.",
            "Attendre 30 secondes supplémentaires et recommencer sans recontacter un responsable.",
          ],
          correctActions: [
            "Ne pas toucher les bornes : une tension de 180 V est pleinement dangereuse.",
            "Suspendre l'intervention et signaler au chargé d'exploitation que les condensateurs ne sont pas déchargés.",
            "Attendre que la décharge soit confirmée par la VAT (résultat nul sur chaque conducteur) avant toute manipulation, ou demander l'intervention d'un électricien habilité pour réaliser la décharge contrôlée selon la procédure prévue.",
          ],
          explanation: "Les condensateurs de compensation peuvent conserver une charge importante plusieurs minutes après la coupure de l'alimentation. Une tension de 180 V est mortelle. La coupure du sectionneur ne suffit pas : la VAT doit confirmer une tension nulle avant tout contact. Si la décharge n'est pas assurée, l'opération sort du cadre BS et relève d'un électricien compétent.",
          normRef: "NF C 18-510 § 5.4 — énergies résiduelles sur condensateurs : VAT obligatoire et procédure de décharge contrôlée",
        },
        {
          situation: "Vous êtes BS et devez remplacer un interrupteur dans une salle serveurs. Vous coupez le disjoncteur principal du tableau général. En approchant votre testeur de tension du conducteur de sortie, vous mesurez 230 V alors que le disjoncteur principal est ouvert. Le local est équipé d'un onduleur (UPS) branché en aval.",
          question: "Pourquoi une tension peut-elle subsister même après coupure du disjoncteur principal ?",
          wrongActions: [
            "Considérer que l'onduleur ne maintient la tension que quelques secondes : attendre puis intervenir.",
            "Couper l'onduleur soi-même sans consigne, car c'est le seul moyen de sécuriser.",
            "Intervenir quand même car le courant fourni par un onduleur est 'moins dangereux'.",
          ],
          correctActions: [
            "Ne pas toucher les conducteurs : la tension mesurée (230 V) est pleinement dangereuse quelle que soit la source.",
            "Suspendre l'intervention et signaler au chargé d'exploitation que la coupure réseau ne suffit pas à mettre le circuit hors tension.",
            "Demander qu'un protocole de mise hors tension intégrant l'onduleur soit établi avant toute reprise de l'intervention.",
          ],
          explanation: "Un onduleur (UPS) est une source d'énergie indépendante du réseau. Il continue d'alimenter les circuits aval même après ouverture du disjoncteur réseau. La tension produite par un onduleur est aussi dangereuse qu'une tension réseau. La VAT doit systématiquement confirmer l'absence de tension avant toute intervention, quelle que soit la source supposée coupée.",
          normRef: "NF C 18-510 § 5.4 — sources multiples et VAT : toute source d'alimentation doit être identifiée et coupée",
        },
      ],
      chapterImagePath: "/elearning/bsbe/bsbe-vat.svg",
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
        animationKey: "consignation-chaine" as const,
        imagePath: "/elearning/bsbe/bsbe-vat.svg",
        imageAlt:
          "Mise hors tension pour son propre compte, VAT et documents en BS",
      },
    },

    {
      id: "operations-be-manoeuvre",
      title:
        "11. Opérations BE Manœuvre : réarmement, ouverture, fermeture, basculement",
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
        "3 types de manœuvres : consignation / exploitation / urgence.",
        "Manœuvre de consignation : selon instruction du chargé de consignation.",
        "Manœuvre d'exploitation : conduite normale de l'installation.",
        "Manœuvre d'urgence : procédure établie à l'avance, jamais improvisée.",
        "BE Manœuvre = organe prévu, procédure connue, contexte vérifié.",
        "Pas de dépannage. Pas de réenclenchement en boucle.",
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
      scenarios: [
        {
          situation: "Vous êtes BE Manœuvre dans une usine. La consigne prévoit de réarmer le disjoncteur ‘D7 - pompe process’ si celui-ci déclenche après un arrêt planifié. Vous le réarmez une première fois : il redéclenche immédiatement. Votre chef vous demande de réessayer ‘pour voir si ça tient’.",
          question: "Quelle est la bonne réaction face à un disjoncteur qui redéclenche au premier réarmement ?",
          wrongActions: [
            "Réarmer une seconde fois sur demande du chef, car c’est lui le responsable.",
            "Forcer le réarmement en maintenant le bouton enfoncé.",
            "Réarmer successivement plusieurs fois pour ‘voir si le problème disparaît’.",
          ],
          correctActions: [
            "Ne pas réarmer une seconde fois : un redéclenchement immédiat signale une anomalie persistante.",
            "Informer le chargé d’exploitation que la manœuvre ne peut pas être exécutée dans ces conditions.",
            "Laisser le diagnostic et la décision de reprise à une personne compétente (BR, B2 ou technicien habilité).",
          ],
          explanation: "Un redéclenchement immédiat indique que la protection a détecté un défaut persistant (surcharge, court-circuit, défaut d’isolement). Réarmer en boucle aggrave potentiellement les dégâts sur le câblage et le matériel, et peut déclencher un incendie. La pression hiérarchique ne change pas la règle : le BE Manœuvre suspend et transmet.",
          normRef: "NF C 18-510 § 10 — manœuvre d’exploitation : arrêt si anomalie persistante",
        },
        {
          situation: "Vous devez effectuer une manœuvre de basculement sur un tableau de distribution. La consigne indique : ‘Ouvrir DT4, fermer DT4-S’. En approchant du tableau, vous constatez que le sectionneur DT4-S porte l’étiquette ‘Réservé maintenance — Ne pas manœuvrer’ depuis une intervention récente non clôturée.",
          question: "Que faire si un organe à manœuvrer porte une consigne de blocage ou une étiquette de restriction non levée ?",
          wrongActions: [
            "Retirer l’étiquette : elle est probablement oubliée et la consigne d’exploitation prime.",
            "Manœuvrer quand même car votre ordre vient du responsable de production.",
            "Contourner DT4-S en cherchant un autre chemin électrique.",
          ],
          correctActions: [
            "Ne pas manœuvrer l’organe tant que la restriction n’est pas formellement levée.",
            "Contacter le responsable de maintenance pour vérifier si l’étiquette est toujours valide.",
            "Signaler le blocage à votre chargé d’exploitation et attendre une instruction actualisée.",
          ],
          explanation: "Une étiquette de restriction ou une consigne de blocage est une mesure de sécurité. La retirer ou l’ignorer sans autorisation peut conduire à manœuvrer un organe sous consignation active, avec un risque de remise sous tension sur une zone où un électricien travaille. La levée d’un blocage doit toujours être formelle et traçable.",
          normRef: "NF C 18-510 § 5 — respect des condamnations et des consignes de blocage avant toute manœuvre",
        },
        {
          situation: "Votre employeur vous remet une procédure BE Manœuvre datée de deux ans pour réaliser un basculement sur un tableau de secours. Sur le tableau, le schéma affiché montre une configuration différente : un organe a été ajouté et les repères ont été modifiés depuis la création de la procédure.",
          question: "Peut-on utiliser une procédure de manœuvre dont la configuration ne correspond plus au tableau actuel ?",
          wrongActions: [
            "Adapter la procédure soi-même en identifiant par analogie les nouveaux organes.",
            "Réaliser la manœuvre en faisant confiance à sa propre expérience du tableau.",
            "Appliquer la procédure existante en sautant les étapes qui ne s’appliquent pas.",
          ],
          correctActions: [
            "Suspendre la manœuvre : la procédure ne correspond plus à la configuration réelle.",
            "Signaler la divergence au chargé d’exploitation pour obtenir une procédure actualisée.",
            "Ne reprendre l’opération qu’avec un document mis à jour et validé par une personne compétente.",
          ],
          explanation: "Une procédure de manœuvre obsolète est une procédure inutilisable. Adapter soi-même la séquence pour ‘coller’ au tableau modifié revient à improviser une manœuvre non validée. Si l’installation a évolué et que la procédure n’a pas été mise à jour, c’est un défaut d’organisation à signaler, pas une situation à contourner individuellement.",
          normRef: "NF C 18-510 § 5 — adéquation entre instruction de sécurité, procédure et état réel de l’installation",
        },
      ],
      chapterImagePath: "/elearning/bsbe/cours-electrique.jpg",
      chapterImageAlt:
        "Tableau électrique basse tension et organes d’exploitation utiles à une manœuvre",
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
          "Tableau électrique basse tension et organes d'exploitation utiles à une manœuvre",
      },
    },

    {
      id: "limites-bsbe",
      title:
        "12. Savoir dire non : limites BS / BE Manœuvre et bascule vers BR ou travaux",
      estimatedMinutes: 15,
      intro:
        "Le BS et le BE Manœuvre donnent un cadre d’action limité. L’opérateur doit savoir reconnaître immédiatement les situations qui sortent de ce cadre et imposent un arrêt, une requalification ou l’appel à un autre niveau d’habilitation.",
      content: [
        "Le BS ne couvre ni la recherche de panne, ni la modification de schéma, ni l’adaptation de câblage, ni l’exploration d’un dysfonctionnement dont la cause n’est pas clairement identifiée.",
        "Le BE Manœuvre n’autorise pas l’ouverture d’une enveloppe pour diagnostiquer, l’essai improvisé d’un matériel, ni la répétition de manœuvres sur une installation anormale pour tenter de faire repartir.",
        "Des circuits multiples, un voisinage non maîtrisé, une documentation absente, un départ non repérable, un besoin de mesure ou de dépannage, une intervention sur un circuit de puissance ou une modification de borne sont autant de signaux de sortie du cadre BS / BE.",
        "Le vrai professionnalisme consiste à reconnaître le moment exact où l’action relève plutôt d’un BR, d’un B1/B2, d’un BC ou d’une intervention organisée autrement.",
        "Le refus d’une action hors cadre n’est pas une opposition au travail. C’est une mesure de prévention attendue.",
        "Le BS correspond à une intervention élémentaire, limitée, préparée, sur du matériel clairement identifié et dans un cadre défini. Dès que l’opération demande de rechercher une cause, de choisir une solution technique, de modifier un câblage ou de décider seul d’une remise en état, le cadre n’est plus le même.",
        "Le BE Manœuvre correspond à une manœuvre d’exploitation : réarmer, ouvrir, fermer, mettre en marche ou arrêter un équipement dans les conditions prévues. Si le dispositif ne réagit pas normalement, si l’organe chauffe, si un bruit ou une odeur apparaît, ou si la manœuvre doit être répétée, l’action doit être suspendue.",
        "La limite n’est donc pas seulement juridique ; elle est technique. Elle protège l’apprenant contre le glissement progressif : une action simple devient un diagnostic, puis un dépannage, puis une intervention hors cadre sans que personne n’ait formellement requalifié la mission.",
      ],
      deepDive: [
        "C’est souvent sur ces cas limites que se joue la sécurité réelle de l’opération.",
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
      scenarios: [
        {
          situation: "Vous êtes habilité BS. En remplaçant une prise, vous découvrez que le câble derrière la boîte est dénudé sur 5 cm et présente un fil de cuivre apparent. Le client vous demande de le réparer pendant que vous êtes là.",
          question: "La réparation d'un câble endommagé entre-t-elle dans le périmètre BS ?",
          wrongActions:           [
            "Réparer le câble avec du ruban isolant puisque vous êtes déjà sur place.",
            "Accepter de 'finir le travail' pour éviter de revenir.",
            "Considérer que c'est une extension logique du BS.",
          ],
          correctActions:           [
            "Refuser d'intervenir sur le câble endommagé : cela dépasse le cadre BS.",
            "Expliquer au client que cette réparation nécessite un électricien habilité B1 ou BR.",
            "Laisser la zone sécurisée (câble protégé provisoirement, circuit coupé si possible) et signaler l'anomalie.",
          ],
          explanation: "Le BS est limité au remplacement de matériels et petites interventions sur des éléments protégés et accessibles. La réparation d'un câble endommagé sort de ce périmètre. Accepter cette mission expose l'intervenant et le client à un risque non couvert par son habilitation.",
          normRef: "NF C 18-510 § 5.4 — limites du BS, interventions élémentaires sur matériels définis",
        },
        {
          situation: "Votre collègue, habilité BE Manœuvre, vient de réaliser une manœuvre d'ouverture d'un disjoncteur sur ordre du chargé d'exploitation. Il remarque en refermant le tableau que l'afficheur d'un compteur clignote avec un code d'erreur. Il veut noter le code et chercher la panne.",
          question: "Le rôle BE Manœuvre inclut-il le diagnostic et la recherche de pannes ?",
          wrongActions:           [
            "Commencer à analyser l'erreur et chercher la cause dans l'armoire.",
            "Ré-enclencher manuellement le disjoncteur pour tester si l'erreur disparaît.",
            "Prendre une initiative de dépannage sans en avoir reçu l'ordre.",
          ],
          correctActions:           [
            "Noter le code d'erreur et le signaler au chargé d'exploitation ou au chargé d'intervention.",
            "Ne réaliser aucune action technique supplémentaire sans ordre explicite.",
            "Rester dans le cadre des manœuvres définies : ouvrir, fermer, enclencer ou déclencher selon les ordres reçus.",
          ],
          explanation: "Le BE Manœuvre est autorisé à effectuer des manœuvres simples d'exploitation sur ordre. Il ne réalise pas de diagnostic, de dépannage ou d'analyse de panne. Toute action au-delà des manœuvres reçues sort de son périmètre.",
          normRef: "NF C 18-510 § 5.4 — périmètre BE Manœuvre : manœuvres d'exploitation sur ordre",
        },
        {
          situation: "Vous êtes habilité BS et intervenez pour remplacer un socle de prise dans un couloir technique. Vous avez coupé le disjoncteur concerné et posé votre outillage. Un autre collègue, habilité BE Manœuvre, est en train de manœuvrer des départs dans le même tableau pour une commande d'éclairage, sans savoir que vous êtes en train d'intervenir sur un circuit adjacent. Aucune consigne de coordination n'a été formalisée entre vous deux.",
          question: "Que faire lorsque deux opérateurs interviennent simultanément sur le même tableau sans coordination ?",
          wrongActions: [
            "Continuer votre intervention en demandant verbalement à votre collègue de faire attention.",
            "Estimer que vos deux interventions sont indépendantes et ne posent pas de problème.",
            "Vous dépêcher de finir avant que votre collègue n'actionne un autre départ.",
          ],
          correctActions: [
            "Interrompre votre intervention et coordonner avec votre collègue avant de reprendre.",
            "Informer le chargé d'exploitation de la situation de co-activité et demander une organisation claire : qui intervient, sur quel départ, dans quel ordre.",
            "Condamner le départ sur lequel vous intervenez (cadenas ou étiquette de consignation) pour empêcher toute remise sous tension intempestive pendant votre intervention.",
          ],
          explanation: "La co-activité sur un même tableau entre deux opérateurs sans coordination formelle est l'une des causes classiques de remise sous tension accidentelle. Le BS doit protéger son propre circuit de toute action extérieure, notamment par condamnation. La norme exige une organisation claire et une communication formalisée dès que plusieurs personnes sont susceptibles d'agir sur la même installation.",
          normRef: "NF C 18-510 § 5.4 et § 6 — co-activité, coordination des interventions et prévention du multi-corps",
        },
        {
          situation: "Vous intervenez en BS dans un local de stockage pour remplacer un interrupteur. Vous avez coupé le disjoncteur mais ne l'avez pas condamné (pas de cadenas disponible, pas d'étiquette de signalement). Pendant votre intervention, un agent d'exploitation qui ne sait pas que vous êtes présent dans la pièce réenclenche le disjoncteur depuis le tableau situé à l'étage inférieur.",
          question: "Comment prévenir une remise sous tension par une tierce personne lors d'une intervention BS ?",
          wrongActions: [
            "Compter sur l'organisation informelle du site pour que personne n'actionne le tableau.",
            "Commencer l'intervention en demandant à voix haute si quelqu'un doit toucher au tableau.",
            "Travailler rapidement pour finir avant qu'une remise sous tension ne soit possible.",
          ],
          correctActions: [
            "Ne jamais commencer une intervention BS sans avoir condamné le départ par un moyen physique : cadenas, dispositif de condamnation ou à défaut étiquette de signalisation visible.",
            "Informer le responsable ou le chargé d'exploitation de l'intervention en cours avant de commencer.",
            "Si aucun moyen de condamnation n'est disponible, différer l'intervention jusqu'à ce que les moyens adaptés soient obtenus.",
          ],
          explanation: "La condamnation du départ est une condition impérative de l'intervention BS. Sans condamnation physique, aucune procédure organisationnelle n'est fiable à 100 % contre une remise sous tension involontaire par une tierce personne. La norme impose de prévenir toute remise sous tension intempestive avant de commencer à travailler.",
          normRef: "NF C 18-510 § 5.4 — prévention de la remise sous tension et condamnation dans le cadre d'une intervention BS",
        },
      ],
      chapterImagePath: "/elearning/bsbe/bsbe-limites.svg",
      chapterImageAlt:
        "Types d’opérations électriques et limites entre opération simple, manœuvre et intervention hors cadre",
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
        illustrationKey: "authorized-forbidden" as const,
        imagePath: "/elearning/bsbe/bsbe-limites.svg",
        imageAlt:
          "Types d’opérations électriques et limites entre opération simple, manœuvre et intervention hors cadre",
      },
    },

    {
      id: "epi-epc-environnement",
      title:
        "13. EPI, EPC, environnement de travail et préalables à respecter",
      estimatedMinutes: 12,
      intro:
        "La prévention ne se limite pas au bon geste. Elle repose aussi sur l’environnement, les protections collectives, les protections individuelles et l’état apparent du matériel.",
      content: [
        "Les équipements de protection collective doivent être privilégiés : enveloppes, capotages, écrans, obstacles, balisage, verrouillages, délimitation de zone et organisation du poste de travail.",
        "Les équipements de protection individuelle viennent en complément. Ils ne rendent jamais licite une opération interdite, mal préparée ou réalisée dans un voisinage dégradé.",
        "Avant toute action, il faut vérifier l’état apparent du matériel, des câbles, des appareillages, des outils, du local, de l’humidité, de l’accessibilité et de l’absence d’anomalie visible.",
        "Un capot retiré, une odeur de chaud, une trace de charbonnage, un sol humide, un câble détérioré, un coffret non refermé, une barrière déplacée ou une zone encombrée changent totalement le niveau de risque.",
        "Le port d’un EPI ne transforme jamais un non-électricien en électricien. Le cadre d’habilitation reste prioritaire.",
        "L’apprenant doit comprendre la hiérarchie : supprimer ou maîtriser le danger à la source, maintenir les protections collectives en place, organiser la zone, puis utiliser les EPI adaptés. Les gants, lunettes ou chaussures ne compensent jamais un coffret ouvert, un repérage absent ou un voisinage non maîtrisé.",
        "Dans une situation BS / BE Manœuvre, les EPI doivent être cohérents avec l’opération et les consignes du site, mais la première protection reste le respect du cadre : bon organe, bonne procédure, installation dans un état apparent normal, absence de doute et arrêt immédiat si l’environnement change.",
        "Un poste de travail propre, éclairé et dégagé réduit les erreurs de manipulation. À l’inverse, un accès encombré, un tableau difficile à identifier, une porte qui ne ferme plus ou un dispositif de verrouillage absent sont des signaux de sécurité à traiter avant d’agir.",
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
      scenarios: [
        {
          situation: "Vous devez intervenir (BS) dans un local technique humide où des travaux d'étanchéité ont eu lieu la veille. Le sol est encore légèrement humide. Vous avez vos EPI habituels mais pas de tapis isolant.",
          question: "Peut-on intervenir sur une installation électrique dans un local partiellement humide sans tapis isolant ?",
          wrongActions:           [
            "Intervenir en faisant attention à ne pas poser les genoux ou les coudes au sol.",
            "Poser un carton ou un sac plastique au sol en guise de protection.",
            "Estimer que l'humidité est résiduelle et sans risque.",
          ],
          correctActions:           [
            "Refuser d'intervenir sans tapis isolant adapté dans ce contexte.",
            "Obtenir le matériel de protection approprié avant de commencer.",
            "Ou attendre que le local soit sec et vérifié avant d'intervenir.",
          ],
          explanation: "L'humidité réduit la résistance de contact et augmente considérablement le risque d'électrocution. Le tapis isolant est un EPC essentiel dans les environnements humides. Un plastique ou un carton n'offrent aucune protection diélectrique.",
          normRef: "NF C 18-510 § 9 et § 4.6 — EPI et EPC en environnement humide",
        },
      ],
      chapterImagePath: "/elearning/bsbe/bsbe-epi.svg",
      chapterImageAlt:
        "EPI d'intervention en environnement électrique et hiérarchie des protections",
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
        imagePath: "/elearning/bsbe/bsbe-epi.svg",
        imageAlt:
          "EPI d'intervention en environnement électrique et hiérarchie des protections",
      },
    },

    {
      id: "synthese-pedagogique",
      title: "14. Synthèse pédagogique",
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
        "La logique à retenir est simple : comprendre avant d’agir, vérifier avant de toucher, rester dans son cadre, refuser l’improvisation et demander clarification lorsque le doute apparaît.",
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
        "15. Incident, incendie électrique et premiers secours",
      estimatedMinutes: 12,
      intro:
        "Un titulaire BS / BE Manœuvre doit savoir arrêter l’action dès qu’une anomalie, un début d’incendie ou un accident électrique modifie les conditions de sécurité prévues.",
      content: [
        "En cas d’incident électrique, l’opérateur doit arrêter l’action, se protéger, mettre à distance si besoin et alerter.",
        "En cas d’incendie dans un environnement électrique, il faut appliquer les consignes du site et ne jamais agir en se mettant soi-même en risque.",
        "En cas d’électrisation, la priorité absolue est de supprimer ou faire supprimer le danger électrique avant toute tentative de secours.",
        "Il ne faut jamais toucher directement une victime tant que le risque électrique persiste. L’objectif est d’éviter le suraccident.",
        "Les notions de premiers secours sont ici traitées sous l’angle du risque électrique : éviter le suraccident, transmettre les bonnes informations et ne pas aggraver la situation par précipitation.",
        "Face à un feu d’origine électrique, l’utilisation d’un moyen d’extinction doit respecter les consignes du site et l’état de mise hors tension. En cas de doute, la priorité reste l’alerte et l’évacuation.",
        "Une odeur de brûlé, un grésillement, un échauffement anormal, une fumée, une trace noire ou un déclenchement répété doivent être considérés comme des signaux d’alerte. L’opérateur ne cherche pas à ouvrir pour constater, ni à réarmer pour tester.",
        "L’alerte doit être utile : lieu précis, équipement concerné, nature du phénomène, présence éventuelle d’une victime, fumée ou feu visible, énergie coupée ou non, accès possibles pour les secours internes ou externes. Une alerte claire fait gagner du temps sans exposer davantage l’apprenant.",
        "Après l’incident, la reprise ne se fait pas par habitude. Elle nécessite une vérification par une personne compétente et, selon le cas, une requalification de l’opération, une intervention BR, une consignation BC ou une analyse plus large de l’installation.",
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
      scenarios: [
        {
          situation: "Vous travaillez en binôme. Votre collègue saisit un câble sans avoir réalisé la VAT et s'effondre. Il est inconscient et sa main est encore proche du conducteur nu. Vous voyez qu'il est en contact avec l'installation.",
          question: "Quelle est la priorité absolue avant tout geste de secours sur une victime d'électrisation ?",
          wrongActions: [
            "Saisir immédiatement votre collègue par les épaules pour l'éloigner du câble.",
            "Tenter de lui faire du bouche-à-bouche sur place, sans couper l'alimentation.",
            "Appeler le 15 puis attendre sans rien faire en restant à côté de lui.",
          ],
          correctActions: [
            "Couper l'alimentation électrique du circuit concerné avant tout contact avec la victime.",
            "Si la coupure n'est pas possible, utiliser un matériau non conducteur (bâton sec, vêtement) pour écarter le câble — jamais à mains nues.",
            "Alerter le 15 ou le 18 immédiatement, préciser qu'il y a une victime d'électrisation, et commencer les gestes de secours uniquement une fois le risque électrique écarté.",
          ],
          explanation: "Le 'suraccident' est la première cause de décès lors de secours à une victime d'électrisation. Un sauveteur qui touche la victime encore en contact avec une source active devient lui-même victime. La suppression du risque électrique prime toujours sur le geste de secours. La règle : supprimer le danger, alerter, puis secourir.",
          normRef: "NF C 18-510 § 10 — conduite à tenir en cas d'accident d'origine électrique : éviter le suraccident",
        },
        {
          situation: "Vous arrivez dans une chaufferie où deux techniciens ont été électrisés simultanément lors d'une intervention. L'un est debout mais désemparé, l'autre est à terre, inconscient. Vous êtes seul sur les lieux et ne savez pas si l'installation est encore sous tension.",
          question: "Comment gérer une situation avec deux victimes lorsque l'état électrique de l'installation est inconnu ?",
          wrongActions: [
            "Aller directement secourir la victime inconsciente car elle est la plus grave.",
            "Toucher les deux victimes pour évaluer leur état avant d'appeler les secours.",
            "Chercher à couper l'alimentation en entrant dans le local technique adjacent sans consigne.",
          ],
          correctActions: [
            "Ne toucher aucune victime avant d'avoir confirmé l'absence de tension ou écarté le risque électrique.",
            "Appeler immédiatement le 15 ou le 18 en précisant : deux victimes, électrisation, localisation exacte, état de conscience.",
            "Suivre les instructions des secours par téléphone et sécuriser le périmètre pour éviter tout accès non autorisé.",
          ],
          explanation: "Face à plusieurs victimes en environnement électrique inconnu, l'urgence est d'alerter les secours professionnels avant tout geste. Toucher les victimes sans s'être assuré de l'absence de risque électrique peut faire de vous une troisième victime. Les secours (SAMU, pompiers) ont les moyens de gérer le risque électrique sur intervention.",
          normRef: "NF C 18-510 § 10 — multi-victimes en accident électrique : alerte prioritaire et prévention du suraccident",
        },
        {
          situation: "Vous réalisez une intervention BS dans un appartement. En retirant un cache, vous provoquiez un court-circuit bref et apercevez des étincelles. L'installation ne semble pas avoir de dommages visibles mais vous sentez une légère odeur de brûlé.",
          question: "Que faites-vous après un court-circuit accidentel avec étincelles ?",
          wrongActions:           [
            "Continuer l'intervention si tout semble normal après quelques secondes.",
            "Remettre en service pour vérifier que tout fonctionne.",
            "Ne pas signaler l'incident car il n'y a pas eu d'incendie.",
          ],
          correctActions:           [
            "Couper l'alimentation du circuit concerné immédiatement.",
            "Inspecter visuellement les zones accessibles pour détecter tout départ de feu ou dommage.",
            "Signaler l'incident au client et à votre responsable, documenter les circonstances.",
          ],
          explanation: "Un court-circuit avec étincelles peut entraîner un départ de feu différé (câble carbonisé, matière inflammable proche). Il ne faut jamais remettre en service sans vérification. Tout incident doit être signalé, même sans conséquence immédiate visible.",
          normRef: "NF C 18-510 § 10 — conduite à tenir en cas d'incident électrique",
        },
      ],
      chapterImagePath: "/elearning/bsbe/bsbe-urgence.svg",
      chapterImageAlt:
        "Armoire électrique présentant un danger et imposant arrêt, protection et alerte",
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
        illustrationKey: "emergency-response" as const,
        imagePath: "/elearning/bsbe/bsbe-urgence.svg",
        imageAlt:
          "Armoire électrique présentant un danger et imposant arrêt, protection et alerte",
      },
    },

    {
      id: "installations-anciennes",
      title: "16. Installations anciennes : reconnaître et s'arrêter",
      estimatedMinutes: 10,
      intro:
        "La NF C 18-510 § 10.4.1 limite strictement le BS au remplacement à l'identique d'une prise, d'un interrupteur, d'une lampe ou d'un fusible BT, et au raccordement d'un circuit en attente. Toute autre opération est exclue. Ce chapitre donne les signaux visuels que le BS peut rencontrer lors de ces opérations limitées, et pour lesquels la bonne réponse est unique : arrêter et signaler.",
      content: [
        "Lors du remplacement d'une prise de courant ou d'un interrupteur, le BS dépose la plaque et peut voir les conducteurs raccordés derrière. Ce moment est le seul instant où une anomalie visuelle sur le câblage peut se révéler. Il ne s'agit pas pour le BS de diagnostiquer l'installation — cela dépasse son périmètre — mais de reconnaître un signal d'alerte évident.",
        "Premier signal : une gaine extérieure en tissu tressé gris, brun ou blanc, ou une isolation individuelle des conducteurs qui se fissure, s'effrite ou tombe en poudre au simple toucher. Ce type de câble (câble en coton ou caoutchouc vulcanisé des années 1960-1970) a une isolation hors d'usage. Toute manipulation peut rompre l'isolation résiduelle et créer un contact direct.",
        "Deuxième signal : l'absence de conducteur vert-jaune dans le câble, ou un câble qui ne comporte que deux conducteurs (phase et neutre) sans aucune protection. Le BS ne peut pas analyser le schéma de l'installation, mais l'absence visible d'un conducteur de protection est un indicateur que quelque chose ne correspond pas à l'état attendu.",
        "Troisième signal : l'état général du tableau ou du boîtier dans lequel il intervient. Des traces de brûlure, des conducteurs dénudés sans bornier, des fusibles sans étiquette identifiable, un tableau ouvert avec des parties actives accessibles non prévues — autant de situations où l'intervention prévue (remplacement à l'identique) ne peut pas se réaliser dans les conditions définies par la norme.",
        "Dans tous ces cas, la conduite est la même : ne pas poursuivre l'intervention, ne pas improviser de remède, signaler à l'employeur et au chargé d'exploitation. La NF C 18-510 § 10.4.3 impose au BS d'informer le chargé d'exploitation des réserves pouvant résulter de l'intervention.",
      ],
      deepDive: [
        "L'analyse de l'état d'une installation ancienne (schéma TN-C, état des câbles, conformité du tableau) relève du chargé d'intervention générale (BR) ou d'un électricien B2. Ce n'est pas le rôle du BS. Lui demander d'évaluer le câblage dépasse son habilitation et engage la responsabilité de l'employeur s'il lui confie une tâche hors périmètre.",
      ],
      keyPoints: [
        "Périmètre BS : remplacement à l'identique + raccordement circuit en attente (§ 10.4.1).",
        "Câble textile effrité ou isolation qui s'émiette → arrêter, signaler.",
        "Tableau dégradé, parties actives non protégées, fusibles non repérés → arrêter, signaler.",
        "Le BS ne diagnostique pas. Il reconnaît et s'arrête.",
      ],
      forbiddenPoints: [
        "Poursuivre l'intervention en contournant l'anomalie observée.",
        "Tenter de rembobiner ou de recouvrir une isolation dégradée.",
        "Analyser le schéma de l'installation : ce n'est pas le rôle du BS.",
      ],
      legalRefs: [
        "NF C 18-510 § 10.4.1 — champ d'application strict de l'intervention BT élémentaire.",
        "NF C 18-510 § 10.4.3 — obligation d'informer le chargé d'exploitation des réserves.",
        "NF C 18-510 § 10.5.7 — rôle du chargé d'intervention élémentaire.",
      ],
      practicalCase:
        "Exemple : un BS remplace une prise de courant dans un couloir. En retirant la plaque, il voit deux conducteurs avec une gaine grisâtre qui s'effrite au toucher. Il n'y a pas de conducteur vert-jaune visible. Il repose la plaque, remet sous tension, et signale immédiatement la situation à son employeur et au chargé d'exploitation. Il n'improvise aucune remédiation.",
      scenarios: [
        {
          situation:
            "Vous êtes BS et remplacez un interrupteur dans un bâtiment construit dans les années 1960. En retirant la plaque, vous découvrez deux conducteurs dont la gaine extérieure est en tissu tressé grisâtre et dont l'isolation individuelle s'effrite quand vous les touchez légèrement.",
          question:
            "Quelle est la bonne conduite à tenir face à ces câbles visiblement dégradés ?",
          wrongActions: [
            "Enrouler les parties effrittées avec du ruban isolant et continuer le remplacement de l'interrupteur.",
            "Remplacer l'interrupteur sans manipuler les câbles, en faisant attention.",
            "Tirer délicatement sur les câbles pour voir s'ils tiennent avant de décider.",
          ],
          correctActions: [
            "Arrêter immédiatement l'intervention sans manipuler davantage les câbles.",
            "Remettre en place la plaque et redonner accès à l'installation dans son état initial.",
            "Signaler sans délai l'état du câblage à votre employeur et au chargé d'exploitation, en formulant des réserves sur la poursuite de l'intervention.",
          ],
          explanation:
            "L'isolation de ces câbles anciens (coton, caoutchouc des années 1960) est hors d'usage. La manipulation la plus légère peut rompre l'isolation résiduelle et créer immédiatement un contact direct. Rembobiner avec du ruban isolant ne restitue pas les propriétés diélectriques requises. Le remplacement du câblage relève d'un électricien qualifié (B1 ou B2), pas du BS. La NF C 18-510 § 10.4.3 impose au BS de signaler toute réserve.",
          normRef: "NF C 18-510 § 10.4.1 — champ strict de l'intervention BT élémentaire ; § 10.4.3 — obligation de signalement des réserves",
        },
        {
          situation:
            "Vous êtes BS et intervenez pour réarmer un disjoncteur dans une armoire de distribution. Votre responsable vous a indiqué le disjoncteur à réarmer par son repère. En ouvrant l'armoire, vous constatez que plusieurs disjoncteurs n'ont plus d'étiquette lisible et que les repères sont effacés. Vous n'êtes plus certain d'identifier le bon disjoncteur.",
          question:
            "Que faites-vous si vous ne pouvez pas identifier avec certitude l'organe à manœuvrer ?",
          wrongActions: [
            "Réarmer le disjoncteur qui vous semble le plus probable selon sa position.",
            "Réarmer tous les disjoncteurs déclenché pour être sûr que le bon est inclus.",
            "Appeler votre collègue pour qu'il confirme oralement lequel est le bon.",
          ],
          correctActions: [
            "Ne manœuvrer aucun organe tant que l'identification n'est pas certaine.",
            "Contacter votre employeur ou le chargé d'exploitation pour qu'il vous désigne physiquement le bon disjoncteur sur place.",
            "Signaler le défaut de repérage pour qu'il soit corrigé.",
          ],
          explanation:
            "La NF C 18-510 § 10.4.3 exige que le BS réalise une préidentification avant toute mise hors tension. Manœuvrer un organe non identifié avec certitude peut couper un équipement critique ou, au contraire, laisser sous tension le circuit sur lequel porte l'intervention. L'identification certaine est une condition non négociable.",
          normRef: "NF C 18-510 § 10.4.3 — préidentification obligatoire avant toute mise hors tension ou manœuvre",
        },
        {
          situation:
            "Vous êtes BS et remplacez une prise de courant. En retirant la plaque, vous constatez que le tableau qui alimente cette prise est visible dans la pièce adjacente et que sa porte est ouverte, laissant apparent un jeu de barres sans protection ni capot.",
          question:
            "L'état du tableau adjacent modifie-t-il les conditions de votre intervention BS ?",
          wrongActions: [
            "Non : votre intervention porte sur la prise, pas sur le tableau. Continuez.",
            "Fermer la porte du tableau avant de commencer pour réduire le risque.",
            "Procéder rapidement pour limiter le temps d'exposition au risque.",
          ],
          correctActions: [
            "Arrêter l'intervention : des pièces actives accessibles à proximité créent un environnement hors des conditions normales de votre intervention BS.",
            "Signaler l'état du tableau ouvert au chargé d'exploitation pour qu'il le sécurise.",
            "Ne reprendre l'intervention qu'une fois le tableau fermé ou les pièces actives protégées.",
          ],
          explanation:
            "La NF C 18-510 § 10.4.1 exige que l'intervention BS se déroule hors zone de voisinage renforcé BT. Des pièces nues sous tension accessibles à proximité immédiate constituent précisément cette zone. Fermer soi-même la porte du tableau dépasse le périmètre du BS. L'état de l'environnement électrique conditionne la faisabilité de l'intervention.",
          normRef: "NF C 18-510 § 10.4.1 — intervention BS hors tension et hors zone de voisinage renforcé BT",
        },
      ],
      chapterImagePath: "/elearning/bsbe/appareil-défectueux.jpg",
      chapterImageAlt:
        "Signaux d'alerte visuels pour le BS : câble textile dégradé, tableau ouvert, repérage absent",
      visual: {
        title: "Le BS reconnaît et s'arrête",
        subtitle:
          "Son rôle n'est pas de diagnostiquer. C'est de reconnaître que la situation dépasse son périmètre.",
        items: [
          "Câble textile effrité → arrêter",
          "Organe non identifiable → arrêter",
          "Pièces actives accessibles → arrêter",
          "Signaler au chargé d'exploitation",
        ],
        tone: "amber",
        imagePath: "/elearning/bsbe/appareil-défectueux.jpg",
        imageAlt:
          "Signaux d'alerte visuels pour le BS : câble textile dégradé, tableau ouvert, repérage absent",
      },
    },
    {
      id: "synthese-operationnelle",
      title: "17. Synthèse opérationnelle",
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
      scenarios: [
        {
          situation: "Vous êtes BS et remplacez un fusible dans un coffret de commande. Le responsable de production vous remet une procédure BS papier et indique ‘c’est le même coffret qu’il y a six mois, pas de souci’. En ouvrant le coffret, vous constatez qu’un variateur de fréquence a été ajouté depuis lors, avec des condensateurs internes. La procédure ne mentionne pas ce composant.",
          question: "Une procédure BS remise par un responsable est-elle fiable si l’installation a évolué depuis sa rédaction ?",
          wrongActions: [
            "Faire confiance au responsable : il connaît le matériel, la procédure est valide.",
            "Adapter mentalement la procédure pour intégrer le variateur et continuer.",
            "Réaliser la VAT sur le fusible uniquement et ignorer le variateur puisqu’il n’est pas la cible.",
          ],
          correctActions: [
            "Suspendre l’intervention dès que la réalité du coffret ne correspond plus à la procédure.",
            "Signaler que le coffret a évolué (ajout variateur) et que la procédure doit être mise à jour.",
            "Demander une procédure révisée qui prend en compte les énergies résiduelles potentielles du variateur avant de poursuivre.",
          ],
          explanation: "Les variateurs de fréquence contiennent des condensateurs qui peuvent rester chargés plusieurs minutes après la coupure. Une procédure qui ne mentionne pas ce composant est incomplète pour cette installation. La décharge des condensateurs d’un variateur nécessite une procédure spécifique, souvent fournie par le fabricant. L’ajout d’un composant depuis la rédaction de la procédure invalide celle-ci pour cet équipement.",
          normRef: "NF C 18-510 § 5.4 — procédure BS à jour et énergies résiduelles sur variateurs",
        },
        {
          situation: "Vous revenez d’une intervention BS dans un local technique où vous avez remplacé une prise de courant. En rendant compte à votre responsable, vous mentionnez que la prise adjacente présentait une trace noire et une odeur de brûlé, mais que vous ne l’avez pas signalée sur le moment car ‘ce n’était pas votre mission’. Votre responsable vous demande ce que vous auriez dû faire.",
          question: "La détection d’une anomalie hors périmètre d’une intervention BS impose-t-elle de la signaler ?",
          wrongActions: [
            "Non : votre mission était la prise défectueuse identifiée, pas les autres prises.",
            "Oui, mais uniquement si la trace noire concerne directement votre prise.",
            "Non : signaler des anomalies hors mission risque de compliquer l’organisation.",
          ],
          correctActions: [
            "Oui : toute anomalie visible (brûlure, odeur, trace, câble détérioré) doit être signalée au chargé d’exploitation, même si elle est hors du périmètre direct de l’intervention.",
            "Consigner l’observation dans le compte rendu d’intervention.",
            "Ne pas intervenir sur l’anomalie (hors cadre BS), mais en assurer la transmission pour qu’elle soit traitée par une personne compétente.",
          ],
          explanation: "La NF C 18-510 § 10.4.3 impose au BS d’informer le chargé d’exploitation des réserves pouvant résulter de son intervention. Cette obligation s’étend aux anomalies constatées dans l’environnement immédiat. Un signal non transmis peut masquer une anomalie grave (arc électrique naissant, câble carbonisé en cours de défaillance). La transmission est une compétence de sécurité à part entière.",
          normRef: "NF C 18-510 § 10.4.3 — obligation de compte rendu et signalement des réserves après intervention BS",
        },
      ],
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
        illustrationKey: "summary-reflexes" as const,
        imagePath: "/elearning/bsbe/synthese-operationnelle.svg",
        imageAlt:
          "Illustration de synthèse des réflexes de décision pour le parcours BS et BE Manœuvre",
      },
    },
  ],
};
