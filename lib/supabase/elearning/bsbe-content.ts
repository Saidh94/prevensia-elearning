import type { ModuleContent } from "./module-types";

const VIDEO = {
  bsbe: {
    title: "Habilitation BS / BE ManÅ“uvre",
    description:
      "VidÃ©o pÃ©dagogique sur le cadre des habilitations BS et BE ManÅ“uvre, leurs limites et les gestes autorisÃ©s.",
    url: "https://youtu.be/AdI-HeDlla8",
    provider: "INRS",
    ctaLabel: "Voir la vidÃ©o",
  },
  chocElectrique: {
    title: "INRS - Choc Ã©lectrique",
    description:
      "VidÃ©o pÃ©dagogique sur les effets du courant Ã©lectrique et les risques liÃ©s au choc Ã©lectrique.",
    url: "https://youtu.be/wyJbFJOdGGo",
    provider: "INRS",
    ctaLabel: "Voir la vidÃ©o",
  },
  consignation: {
    title: "INRS - Consignation Ã©lectrique",
    description:
      "VidÃ©o pÃ©dagogique sur les Ã©tapes et les principes de la consignation Ã©lectrique.",
    url: "https://youtu.be/cCqbrFDNrxA",
    provider: "INRS",
    ctaLabel: "Voir la vidÃ©o",
  },
  zonesDistances: {
    title: "INRS - Zones et distances",
    description:
      "VidÃ©o pÃ©dagogique sur les zones dâ€™environnement Ã©lectrique et les distances de sÃ©curitÃ©.",
    url: "https://youtu.be/NKV4NYJi8Rk",
    provider: "INRS",
    ctaLabel: "Voir la vidÃ©o",
  },
  symboles: {
    title: "INRS - Symboles dâ€™habilitation Ã©lectrique",
    description:
      "VidÃ©o pÃ©dagogique sur la lecture des symboles dâ€™habilitation Ã©lectrique et leurs limites.",
    url: "https://youtu.be/-qG3A1eLuUM",
    provider: "INRS",
    ctaLabel: "Voir la vidÃ©o",
  },
};

export const bsbeModuleContent: ModuleContent = {
  title:
    "BS et BE ManÅ“uvre - Interventions Ã©lÃ©mentaires et manÅ“uvres en basse tension",
  shortTitle: "BS et BE ManÅ“uvre",
  subtitle:
    "Parcours e-learning structurÃ© selon la NF C 18-510 pour les personnels amenÃ©s Ã  rÃ©aliser des remplacements simples, des raccordements Ã©lÃ©mentaires et des manÅ“uvres dâ€™exploitation en basse tension.",
  duration:
    "6 h de thÃ©orie guidÃ©e + quiz + sÃ©quence dâ€™application encadrÃ©e",
  deliveryFormat:
    "E-learning technique + quiz + sÃ©quence dâ€™application encadrÃ©e : classe virtuelle de 3 h Ã  4 h en initial groupe / entreprise, ou visio de 45 min Ã  1 h en recyclage",
  level: "IntermÃ©diaire",
  objective:
    "Respecter les prescriptions de sÃ©curitÃ© liÃ©es aux habilitations BS et BE ManÅ“uvre, comprendre les bases Ã©lectriques utiles, reconnaÃ®tre les situations Ã  risque, identifier les limites dâ€™autorisation, prÃ©parer une opÃ©ration simple en sÃ©curitÃ© et adopter la bonne conduite en cas dâ€™anomalie ou dâ€™accident.",
  audience:
    "Agents de maintenance, techniciens polyvalents, gardiens, personnels de sites tertiaires ou industriels, personnels dâ€™exploitation, services gÃ©nÃ©raux et salariÃ©s amenÃ©s Ã  effectuer des opÃ©rations simples ou des manÅ“uvres en basse tension sans Ãªtre Ã©lectriciens exÃ©cutants.",
  certificationNote:
    "Ce parcours constitue la prÃ©paration thÃ©orique. Lâ€™habilitation BS ou BE ManÅ“uvre est dÃ©livrÃ©e uniquement par lâ€™employeur aprÃ¨s vÃ©rification des acquis, adÃ©quation au poste, analyse du risque et Ã©valuation adaptÃ©e au poste.",
  heroBadge: "Habilitation Ã©lectrique",
  finalMessage:
    "Le bon rÃ©flexe en BS ou en BE ManÅ“uvre nâ€™est pas dâ€™improviser une solution. Câ€™est dâ€™identifier le bon organe, de vÃ©rifier le contexte, dâ€™appliquer la procÃ©dure prÃ©vue et de sâ€™arrÃªter immÃ©diatement si lâ€™action nâ€™entre plus dans le cadre autorisÃ©.",
  quizCtaLabel: "Passer au quiz BS et BE ManÅ“uvre",

  sections: [
    {
      id: "habilitation-symboles",
      title:
        "1. Habilitation Ã©lectrique, symboles BS et BE ManÅ“uvre et cadre employeur",
      estimatedMinutes: 22,
      intro:
        "La norme NF C 18-510 rappelle quâ€™une habilitation est une reconnaissance de capacitÃ© accordÃ©e par lâ€™employeur. Le premier chapitre pose donc clairement le cadre, les symboles et les limites rÃ©elles du BS et du BE ManÅ“uvre.",
      content: [
        "Lâ€™habilitation Ã©lectrique est dÃ©finie comme la reconnaissance par lâ€™employeur de la capacitÃ© dâ€™une personne Ã  accomplir en sÃ©curitÃ© les tÃ¢ches qui lui sont confiÃ©es vis-Ã -vis du risque Ã©lectrique. Cette logique est centrale : la formation prÃ©pare, mais câ€™est lâ€™employeur qui vÃ©rifie lâ€™adaptation au poste, aux locaux, aux matÃ©riels et aux procÃ©dures internes avant de remettre un titre.",
        "Le symbole BS correspond aux interventions Ã©lÃ©mentaires en basse tension. Il vise des opÃ©rations simples, limitÃ©es, prÃ©parÃ©es et rÃ©alisÃ©es hors tension, telles que des remplacements simples ou des raccordements Ã©lÃ©mentaires sur des circuits et matÃ©riels identifiÃ©s.",
        "Le symbole BE ManÅ“uvre concerne les manÅ“uvres dâ€™exploitation. Il peut sâ€™agir, selon les consignes du site, dâ€™ouvrir, fermer, mettre en marche, arrÃªter, basculer ou rÃ©armer un organe prÃ©vu pour cet usage.",
        "Le BS et le BE ManÅ“uvre ne sont pas des versions simplifiÃ©es des habilitations B1, B2, BR ou BC. Le titulaire BS nâ€™est ni exÃ©cutant Ã©lectricien de travaux, ni chargÃ© de travaux, ni chargÃ© de consignation. Le titulaire BE ManÅ“uvre nâ€™est pas chargÃ© dâ€™intervention gÃ©nÃ©rale et nâ€™acquiert pas, par ce symbole, le droit de dÃ©panner, modifier, diagnostiquer librement ou consigner.",
        "La prÃ©vention exige une chaÃ®ne cohÃ©rente : analyse du besoin, dÃ©signation des tÃ¢ches admissibles, mise Ã  disposition des consignes, vÃ©rification des acquis, Ã©valuation pratique, puis dÃ©livrance du titre.",
        "Le bon rÃ©flexe Ã  retenir est le suivant : le parcours de formation prÃ©pare Ã  agir dans un cadre dÃ©fini, mais seul le titre dâ€™habilitation remis par lâ€™employeur autorise lâ€™activitÃ© sur les tÃ¢ches rÃ©ellement confiÃ©es.",
      ],
      deepDive: [
        "Le risque majeur, dans la vraie vie des sites, nâ€™est pas lâ€™ignorance pure. Câ€™est le glissement progressif : un remplacement simple devient un diagnostic, un rÃ©armement devient une recherche de panne, une manÅ“uvre devient une intervention improvisÃ©e.",
        "La norme insiste aussi sur lâ€™unicitÃ©, la cohÃ©rence et la maÃ®trise de lâ€™information. Cela signifie quâ€™un opÃ©rateur BS / BE ne doit jamais agir sur une simple habitude orale, sur un repÃ¨re flou ou sur une demande urgente qui contourne la procÃ©dure et le titre dâ€™habilitation.",
        "Un bon apprenant BS / BE doit savoir formuler sa limite. Dire que le geste demandÃ© nâ€™entre pas dans son cadre est une compÃ©tence sÃ©curitÃ©, pas une faiblesse.",
      ],
      keyPoints: [
        "Lâ€™habilitation est dÃ©livrÃ©e par lâ€™employeur, pas par la formation seule.",
        "BS = interventions Ã©lÃ©mentaires en basse tension, dans un cadre strictement limitÃ©.",
        "BE ManÅ“uvre = manÅ“uvres dâ€™exploitation sur organe identifiÃ© et prÃ©vu Ã  cet effet.",
        "BS et BE ManÅ“uvre ne valent ni B1, ni B2, ni BR, ni BC.",
        "Le poste rÃ©el, lâ€™environnement et les procÃ©dures conditionnent la dÃ©livrance du titre.",
      ],
      forbiddenPoints: [
        "Confondre attestation de formation et titre dâ€™habilitation remis par lâ€™employeur.",
        "Croire que BS ou BE ManÅ“uvre autorisent des travaux dâ€™Ã©lectricien exÃ©cutant ou de chargÃ© dâ€™intervention.",
        "Commencer un dÃ©pannage, une modification ou une recherche de panne hors du cadre autorisÃ©.",
      ],
      legalRefs: [
        "Code du travail - articles R.4544-9 et R.4544-10 sur la formation, lâ€™habilitation et lâ€™organisation des opÃ©rations.",
        "NF C 18-510 - article 3 : habilitation, employeur, opÃ©rateur et rÃ´les des personnes.",
        "NF C 18-510 - article 5 : formation, Ã©valuation, avis aprÃ¨s formation et titre dâ€™habilitation.",
        "NF C 18-510 - tableaux des symboles dâ€™habilitation.",
        "INRS - habilitation Ã©lectrique, rÃ´le de lâ€™employeur et maintien des compÃ©tences.",
      ],
      resourceVideos: [VIDEO.bsbe, VIDEO.symboles],
      practicalCase:
        "Exemple : un agent multi-technique sait remplacer une prise simple hors tension. Sur place, il dÃ©couvre un coffret mal repÃ©rÃ© et un cÃ¢blage ancien. Lâ€™opÃ©ration doit Ãªtre stoppÃ©e : le cadre BS nâ€™autorise pas une recherche de panne ni une adaptation improvisÃ©e.",
      chapterImagePath: "/elearning/bsbe/bsbe-cadre.svg",
      chapterImageAlt:
        "Cadre BS et BE ManÅ“uvre : formation, Ã©valuation, validation et habilitation par lâ€™employeur",
      visual: {
        title: "De la formation au titre dâ€™habilitation",
        subtitle:
          "Le titre BS ou BE ManÅ“uvre est dÃ©livrÃ© par lâ€™employeur aprÃ¨s vÃ©rification des acquis, adÃ©quation au poste et analyse du risque.",
        items: [
          "Comprendre le cadre normatif",
          "VÃ©rifier les connaissances et les limites",
          "Ã‰valuer la capacitÃ© Ã  agir en sÃ©curitÃ©",
          "Habiliter selon les tÃ¢ches rÃ©elles du poste",
        ],
        tone: "blue",
        imagePath: "/elearning/bsbe/bsbe-cadre.svg",
        imageAlt:
          "Cadre BS et BE ManÅ“uvre : formation, Ã©valuation, validation et habilitation par lâ€™employeur",
      },
    },

    {
      id: "bases-electricite",
      title: "2. Bases Ã©lectriques indispensables avant toute opÃ©ration",
      estimatedMinutes: 20,
      intro:
        "Un titulaire BS / BE nâ€™est pas un technicien dâ€™Ã©tudes, mais il doit comprendre ce quâ€™est un circuit, ce que signifient les grandeurs Ã©lectriques et pourquoi le domaine de tension change la lecture du risque.",
      content: [
        "Comprendre un circuit Ã©lectrique, câ€™est savoir reconnaÃ®tre une source, des conducteurs, une charge, un organe de commande et un organe de protection.",
        "Les grandeurs essentielles Ã  maÃ®triser sont la tension, lâ€™intensitÃ©, la rÃ©sistance et la puissance. Elles expliquent pourquoi un Ã©quipement apparemment simple peut devenir dangereux selon son alimentation, son environnement et son Ã©tat.",
        "Lâ€™apprenant doit distinguer partie active, masse, conducteur de protection, neutre et, lorsque câ€™est utile Ã  la comprÃ©hension, conducteur PEN.",
        "Le chapitre doit aussi parler des Ã©nergies non Ã©videntes : batteries, chargeurs, onduleurs, photovoltaÃ¯que, automatismes secourus et Ã©quipements maintenus sous Ã©nergie.",
        "Un bon chapitre BS / BE doit apprendre Ã  lire les familles de matÃ©riels courants : tableau de distribution, disjoncteur, sectionneur, organe de commande, dÃ©part terminal, circuit prise, Ã©clairage, chauffe-eau, ventilateur, volet, automatisme.",
      ],
      deepDive: [
        "Le but nâ€™est pas dâ€™empiler des dÃ©finitions scolaires. Le but est de relier la thÃ©orie Ã  la scÃ¨ne terrain : que voit-on devant une armoire, quel type dâ€™Ã©nergie circule, quel organe coupe, quel organe protÃ¨ge, et le cadre BS / BE est-il encore adaptÃ© ?",
        "Il est important dâ€™expliquer la diffÃ©rence entre un circuit terminal simple et un dÃ©part plus Ã©nergÃ©tique. Cette finesse aide lâ€™apprenant Ã  comprendre pourquoi certains matÃ©riels restent hors cadre malgrÃ© une apparence familiÃ¨re.",
      ],
      keyPoints: [
        "Un circuit comprend une source, des conducteurs, une charge, une commande et une protection.",
        "Tension, intensitÃ©, rÃ©sistance et puissance expliquent le comportement du circuit.",
        "Partie active, masse et conducteur de protection doivent Ãªtre compris.",
        "Les Ã©nergies secourues ou autonomes ne doivent pas Ãªtre banalisÃ©es.",
      ],
      forbiddenPoints: [
        "Confondre une installation familiÃ¨re avec une installation sans danger.",
        "Raisonner uniquement Ã  lâ€™apparence extÃ©rieure du matÃ©riel.",
        "Agir sur un organe dont la fonction nâ€™est pas comprise.",
      ],
      legalRefs: [
        "NF C 18-510 - dÃ©finitions relatives aux installations, ouvrages, matÃ©riels et grandeurs Ã©lectriques.",
        "NF C 15-100 - vocabulaire de base des installations basse tension.",
        "INRS - bases du risque Ã©lectrique et prÃ©vention des accidents.",
      ],
      practicalCase:
        "Exemple : un opÃ©rateur doit rÃ©initialiser un organe alimentÃ© par un coffret de commande. Il observe la prÃ©sence dâ€™un variateur et dâ€™une alimentation secourue. Il ne doit pas agir tant que le cadre de manÅ“uvre nâ€™est pas confirmÃ©.",
      chapterImagePath: "/elearning/bsbe/bsbe-bases.svg",
      chapterImageAlt:
        "Bases Ã©lectriques utiles au BS et au BE ManÅ“uvre",
      visual: {
        title: "Lire le circuit avant le geste",
        subtitle:
          "Source, charge, commande, protection et Ã©nergie rÃ©siduelle conditionnent la sÃ©curitÃ© de lâ€™opÃ©ration.",
        items: [
          "Source dâ€™Ã©nergie",
          "Organe de commande",
          "Protection",
          "MatÃ©riel alimentÃ©",
        ],
        tone: "slate",
        imagePath: "/elearning/bsbe/bsbe-bases.svg",
        imageAlt:
          "Bases Ã©lectriques utiles au BS et au BE ManÅ“uvre",
      },
    },

    {
      id: "domaines-tension",
      title:
        "3. Domaines de tension, courant alternatif et courant continu",
      estimatedMinutes: 15,
      intro:
        "Le domaine de tension structure la prÃ©vention. Un titulaire BS / BE ManÅ“uvre doit savoir distinguer TBT, BT et HT, et comprendre que le courant continu impose aussi une vigilance spÃ©cifique.",
      content: [
        "La norme distingue les domaines de tension parce quâ€™ils structurent la prÃ©vention. En courant alternatif, la trÃ¨s basse tension est infÃ©rieure ou Ã©gale Ã  50 V, la basse tension est supÃ©rieure Ã  50 V et infÃ©rieure ou Ã©gale Ã  1 000 V, et la haute tension est au-delÃ .",
        "En courant continu lisse, la trÃ¨s basse tension est infÃ©rieure ou Ã©gale Ã  120 V, la basse tension est supÃ©rieure Ã  120 V et infÃ©rieure ou Ã©gale Ã  1 500 V, et la haute tension est au-delÃ .",
        "Cette distinction conditionne les distances, les zones dâ€™environnement, les prescriptions applicables et le niveau dâ€™habilitation requis.",
        "Le BS et le BE ManÅ“uvre concernent la basse tension. Cela ne signifie pas que le risque est faible. Une installation BT peut provoquer Ã©lectrisation, brÃ»lure, arc, court-circuit ou dÃ©part de feu.",
        "Le courant continu peut Ãªtre prÃ©sent sur batteries, onduleurs, photovoltaÃ¯que, chargeurs ou Ã©quipements industriels. Il peut prÃ©senter un risque particulier de maintien dâ€™arc et de persistance dâ€™Ã©nergie.",
      ],
      deepDive: [
        "Le titulaire BS / BE nâ€™a pas Ã  devenir Ã©lectricien concepteur, mais il doit comprendre pourquoi un matÃ©riel fermÃ©, un onduleur, une batterie ou un dÃ©part non identifiÃ© ne doivent jamais Ãªtre banalisÃ©s.",
      ],
      keyPoints: [
        "La BT nâ€™est pas une absence de danger.",
        "Les seuils AC et DC sont diffÃ©rents.",
        "Les batteries, onduleurs et sources autonomes peuvent maintenir un risque.",
      ],
      forbiddenPoints: [
        "Croire que la basse tension est sans consÃ©quence.",
        "Ignorer une source autonome ou une Ã©nergie rÃ©siduelle.",
      ],
      legalRefs: [
        "NF C 18-510 - tableau des domaines de tension.",
        "NF C 15-100 - installations Ã©lectriques basse tension.",
        "INRS - prÃ©vention du risque Ã©lectrique.",
      ],
      practicalCase:
        "Exemple : un appareil est coupÃ© au disjoncteur, mais reste raccordÃ© Ã  une alimentation secourue. Lâ€™opÃ©rateur doit considÃ©rer que le risque peut persister.",
      chapterImagePath: "/elearning/h0b0/domaines-tension.png",
      chapterImageAlt:
        "Domaines de tension et distinction TBT, BT et HT utiles au BS et au BE Manoeuvre",
      visual: {
        title: "BT ne veut pas dire sans danger",
        subtitle:
          "Le domaine de tension, la nature du courant et les sources autonomes changent la lecture du risque.",
        items: [
          "TrÃ¨s basse tension",
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
        "4. Effets du courant sur le corps humain et courbe intensitÃ© / temps",
      estimatedMinutes: 18,
      intro:
        "Comprendre le risque Ã©lectrique, ce nâ€™est pas mÃ©moriser une interdiction abstraite. Câ€™est savoir ce que produit concrÃ¨tement le courant sur le corps humain, et pourquoi quelques secondes de plus peuvent tout changer.",
      content: [
        "Le passage du courant dans le corps peut provoquer une Ã©lectrisation, des brÃ»lures externes et internes, des contractions musculaires, des troubles respiratoires, des troubles cardiaques et des lÃ©sions neurologiques.",
        "La gravitÃ© dÃ©pend principalement de lâ€™intensitÃ© du courant, du temps de passage, du trajet dans lâ€™organisme, de lâ€™Ã©tat de la peau, de lâ€™humiditÃ© et du contexte de contact.",
        "Quelques ordres de grandeur pÃ©dagogiques doivent Ãªtre connus : dÃ¨s les premiers milliampÃ¨res le courant devient perceptible ; autour de 10 mA le lÃ¢cher peut devenir difficile ; vers 30 mA les troubles respiratoires peuvent apparaÃ®tre.",
        "La courbe intensitÃ© / temps montre quâ€™une exposition moins intense mais plus longue peut devenir aussi critique quâ€™un courant plus fort sur un temps trÃ¨s court.",
        "Le milieu modifie fortement le risque. Une peau humide, un sol conducteur, des vÃªtements mouillÃ©s, une sueur abondante ou des mains abÃ®mÃ©es rÃ©duisent la rÃ©sistance du corps.",
        "Le bon rÃ©flexe BS / BE nâ€™est pas seulement dâ€™Ã©viter lâ€™accident. Câ€™est aussi de prendre au sÃ©rieux tout incident Ã©lectrique.",
      ],
      deepDive: [
        "Les cours trop superficiels parlent dâ€™une simple chÃ¢taigne. Il faut au contraire faire comprendre lâ€™effet physiologique rÃ©el du courant.",
        "Cette partie prÃ©pare aussi la conduite Ã  tenir en cas dâ€™accident : on ne touche pas une victime tant que le risque Ã©lectrique persiste.",
      ],
      keyPoints: [
        "Ã‰lectrisation et Ã©lectrocution ne dÃ©signent pas la mÃªme situation.",
        "IntensitÃ©, durÃ©e, trajet et humiditÃ© conditionnent la gravitÃ©.",
        "La courbe intensitÃ© / temps explique lâ€™importance de la coupure rapide.",
        "Toute Ã©lectrisation doit Ãªtre prise au sÃ©rieux.",
      ],
      forbiddenPoints: [
        "Minimiser une dÃ©charge Ã©lectrique sous prÃ©texte quâ€™elle a Ã©tÃ© brÃ¨ve.",
        "Toucher une victime sans avoir dâ€™abord Ã©liminÃ© ou maÃ®trisÃ© le danger Ã©lectrique.",
      ],
      legalRefs: [
        "NF C 18-510 - connaissance des dangers pour les opÃ©rateurs.",
        "INRS - effets du courant Ã©lectrique sur le corps humain et conduite Ã  tenir aprÃ¨s accident.",
      ],
      resourceVideos: [VIDEO.chocElectrique],
      practicalCase:
        "Exemple : lors dâ€™un remplacement simple, un opÃ©rateur ressent une dÃ©charge en retirant un accessoire endommagÃ©. Lâ€™action est interrompue, la situation est signalÃ©e et lâ€™Ã©quipement nâ€™est pas rÃ©utilisÃ©.",
      chapterImagePath: "/elearning/h0b0/intensites-effets.png",
      chapterImageAlt:
        "Effets du courant ?lectrique sur le corps humain selon l intensit? et le temps de contact",
      visual: {
        title: "Pourquoi un choc Ã©lectrique peut Ãªtre grave",
        subtitle:
          "Lâ€™intensitÃ©, le temps de contact, le trajet et le milieu humide aggravent le risque corporel.",
        items: [
          "Ã‰lectrisation",
          "TÃ©tanisation",
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
        "Cette partie doit rester normative et concrÃ¨te : protections contre les chocs, rÃ©gime TT, dispositif diffÃ©rentiel, classes de matÃ©riel, piÃ¨ces nues sous tension et zones dâ€™environnement.",
      content: [
        "Le contact direct correspond au fait de toucher une partie active normalement sous tension. Le contact indirect correspond au fait de toucher une masse devenue dangereuse aprÃ¨s dÃ©faut.",
        "Les mesures de protection contre le contact direct reposent notamment sur lâ€™Ã©loignement, les obstacles, lâ€™isolation, les enveloppes et les capotages.",
        "En basse tension, la protection contre le contact indirect fait notamment intervenir lâ€™organisation de lâ€™installation, le rÃ©gime de neutre, la mise Ã  la terre, les dispositifs diffÃ©rentiels et les classes de matÃ©riel.",
        "La PNST, ou piÃ¨ce nue sous tension, reste une notion centrale. Une piÃ¨ce nue sous tension accessible change immÃ©diatement le niveau de risque.",
        "Les zones dâ€™environnement Ã©lectrique structurent ces limites. En basse tension, la zone de voisinage renforcÃ© est classiquement associÃ©e Ã  la distance de 30 cm autour dâ€™une piÃ¨ce nue sous tension.",
        "La notion dâ€™IP2X ou IPXXB doit aussi Ãªtre comprise : une enveloppe intacte protÃ¨ge contre lâ€™accÃ¨s aux parties dangereuses, mais une enveloppe ouverte, absente ou dÃ©gradÃ©e modifie complÃ¨tement la situation.",
      ],
      deepDive: [
        "Ce chapitre doit permettre de comprendre ce quâ€™est une PNST, un contact indirect, un DDR ou un capotage.",
        "Il faut apprendre Ã  lâ€™apprenant que le danger est parfois invisible : un coffret fermÃ© peut protÃ©ger, mais un capot retirÃ© change complÃ¨tement la situation.",
      ],
      keyPoints: [
        "Contact direct et indirect sont deux risques distincts.",
        "Les protections collectives sont prioritaires.",
        "La PNST et le voisinage doivent Ãªtre compris et respectÃ©s.",
      ],
      forbiddenPoints: [
        "Contourner un capotage ou une enveloppe.",
        "Se rapprocher dâ€™une piÃ¨ce nue sous tension pour mieux voir.",
        "Continuer une action si lâ€™indice de protection est dÃ©gradÃ©.",
      ],
      legalRefs: [
        "NF C 18-510 - zones, voisinage, protections et environnement Ã©lectrique.",
        "NF C 15-100 - protections en basse tension.",
        "INRS - contact direct, contact indirect et DDR.",
      ],
      resourceVideos: [VIDEO.zonesDistances],
      practicalCase:
        "Exemple : un opÃ©rateur doit agir dans un local technique, mais un bornier est visible car un capot manque. La situation sort du cadre normal : lâ€™action est suspendue.",
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
        "6. Lire une installation basse tension et reconnaÃ®tre les organes utiles",
      estimatedMinutes: 15,
      intro:
        "Avant toute opÃ©ration BS ou BE ManÅ“uvre, il faut savoir ce que lâ€™on regarde : tableau, coffret, disjoncteur, sectionneur, fusible, contacteur, organe de commande ou dÃ©part moteur.",
      content: [
        "Lâ€™apprenant doit Ãªtre capable dâ€™identifier les principaux organes dâ€™une installation basse tension : tableau, coffret, disjoncteur, interrupteur, sectionneur, fusible, bouton dâ€™arrÃªt, commande locale, contacteur, relais, bornier et protections terminales.",
        "Il doit distinguer ce qui relÃ¨ve de la commande, de la protection, de la coupure et de lâ€™alimentation dâ€™un Ã©quipement.",
        "Cette lecture du matÃ©riel est indispensable pour Ã©viter les erreurs de repÃ¨re, les rÃ©armements sur le mauvais circuit, les actions sur le mauvais organe et les interprÃ©tations dangereuses dâ€™une situation apparemment simple.",
        "Le support documentaire dâ€™entreprise, le schÃ©ma simplifiÃ©, le repÃ©rage dâ€™un dÃ©part, la fiche rÃ©flexe ou lâ€™Ã©tiquetage local sont des aides essentielles pour agir dans le bon cadre.",
        "Dans un parcours BS / BE crÃ©dible, on doit apprendre Ã  lire les signaux faibles dâ€™un tableau : dÃ©part mal repÃ©rÃ©, ancien Ã©tiquetage, juxtaposition de circuits force et commande, prÃ©sence dâ€™un inverseur, dâ€™un dÃ©part moteur ou dâ€™un appareillage qui nâ€™entre plus dans la logique dâ€™une action simple.",
      ],
      deepDive: [
        "Un parcours trop vague sur ce sujet produit des apprenants qui savent rÃ©citer des symboles, mais pas reconnaÃ®tre un organe en situation. Or cette lecture du matÃ©riel est indispensable pour agir en sÃ©curitÃ©.",
      ],
      keyPoints: [
        "Identifier lâ€™organe avant dâ€™agir.",
        "Ne pas confondre commande, coupure et protection.",
        "Le repÃ©rage local est un support de sÃ©curitÃ©.",
      ],
      forbiddenPoints: [
        "Agir sur un organe non identifiÃ©.",
        "InterprÃ©ter seul un schÃ©ma douteux.",
        "RÃ©armer ou couper un dÃ©part dont la fonction nâ€™est pas confirmÃ©e.",
      ],
      legalRefs: [
        "NF C 18-510 - adÃ©quation entre opÃ©ration, matÃ©riel et procÃ©dure.",
        "INRS - importance du repÃ©rage et des supports dâ€™exÃ©cution.",
      ],
      practicalCase:
        "Exemple : un organe porte une Ã©tiquette ancienne et le schÃ©ma local est partiellement modifiÃ©. Lâ€™opÃ©rateur nâ€™agit pas tant que le repÃ¨re nâ€™est pas confirmÃ©.",
      chapterImagePath: "/images/modules/electricite/tableau-coffret-bt.jpg",
      chapterImageAlt:
        "Armoire Ã©lectrique basse tension avec organes de commande et de protection",
      visual: {
        title: "Avant dâ€™agir sur un tableau",
        subtitle:
          "Identifier le bon organe, vÃ©rifier le repÃ©rage et confirmer le circuit.",
        items: [
          "Disjoncteur",
          "Sectionneur",
          "Commande",
          "Bon circuit",
        ],
        tone: "slate",
        imagePath: "/images/modules/electricite/tableau-coffret-bt.jpg",
        imageAlt:
          "Armoire Ã©lectrique basse tension avec organes de commande et de protection",
      },
    },

    {
      id: "local-electrique-ip-reperage",
      title:
        "7. AccÃ¨s aux locaux Ã©lectriques, indices de protection et repÃ©rage fiable",
      estimatedMinutes: 15,
      intro:
        "Avant mÃªme le geste BS ou BE ManÅ“uvre, lâ€™opÃ©rateur doit savoir si lâ€™accÃ¨s au matÃ©riel est compatible avec son titre, si lâ€™enveloppe protÃ¨ge rÃ©ellement contre le contact et si le repÃ©rage de terrain est suffisant.",
      content: [
        "Un local Ã  risques particuliers de choc Ã©lectrique, une armoire ouverte ou un coffret dÃ©gradÃ© ne se traitent pas comme un appareillage courant dans un environnement sec et protÃ©gÃ©. Lâ€™accÃ¨s, le voisinage et lâ€™Ã©tat de lâ€™enveloppe changent le niveau de risque.",
        "Les notions dâ€™indice de protection IP2X ou IPXXB sont utiles pour comprendre dans quels cas certaines manÅ“uvres simples peuvent Ãªtre rÃ©alisÃ©es en sÃ©curitÃ© sur un matÃ©riel intact, et dans quels cas la mise hors tension ou lâ€™arrÃªt sâ€™imposent.",
        "Le repÃ©rage fiable dâ€™un dÃ©part, dâ€™un circuit terminal, dâ€™un bornier en attente ou dâ€™un organe de rÃ©armement est une condition de sÃ©curitÃ©. Un Ã©tiquetage partiel, ancien ou incohÃ©rent impose une vÃ©rification complÃ©mentaire avant tout geste.",
        "Le professionnel BS / BE ne doit pas raisonner uniquement Ã  partir de lâ€™apparence extÃ©rieure. Un coffret fermÃ© peut paraÃ®tre rassurant, mais si lâ€™indice de protection est dÃ©gradÃ© ou si le capotage a Ã©tÃ© retirÃ©, le cadre de sÃ©curitÃ© nâ€™est plus le mÃªme.",
      ],
      deepDive: [
        "Beaucoup dâ€™erreurs terrain viennent dâ€™une confusion entre matÃ©riel courant et matÃ©riel sÃ©curisÃ©.",
        "Cette lecture du local et de lâ€™enveloppe permet de distinguer une action admissible dâ€™une situation relevant dâ€™un Ã©lectricien plus qualifiÃ© ou dâ€™une remise en conformitÃ© prÃ©alable.",
      ],
      keyPoints: [
        "AccÃ¨s au local et Ã©tat de lâ€™enveloppe modifient le niveau de risque.",
        "IP2X / IPXXB sont des repÃ¨res utiles pour la sÃ©curitÃ© de lâ€™opÃ©rateur.",
        "Sans repÃ©rage fiable, pas dâ€™action.",
      ],
      forbiddenPoints: [
        "Banaliser un coffret ouvert ou dÃ©gradÃ©.",
        "Confondre accessibilitÃ© physique et autorisation dâ€™agir.",
        "Entrer dans un local rÃ©servÃ© sans cadre prÃ©vu.",
      ],
      legalRefs: [
        "NF C 18-510 - locaux et emplacements dâ€™accÃ¨s rÃ©servÃ© aux Ã©lectriciens.",
        "NF C 18-510 - ouverture dâ€™une armoire, dâ€™un coffret ou dâ€™une enveloppe de matÃ©riel Ã©lectrique.",
        "INRS - conditions de sÃ©curitÃ© de type IP2X / IPXXB.",
      ],
      practicalCase:
        "Exemple : un disjoncteur est situÃ© dans un coffret normalement fermÃ©, mais la faÃ§ade est fendue et une piÃ¨ce interne devient accessible au doigt. Le geste de rÃ©armement nâ€™est plus banal et lâ€™opÃ©rateur suspend lâ€™action.",
      chapterImagePath: "/elearning/bsbe/zone-ne-pas-franchir.jpg",
      chapterImageAlt:
        "Zone de travail ? ne pas franchir devant une installation ?lectrique",
      visual: {
        title: "Avant dâ€™accÃ©der au matÃ©riel",
        subtitle:
          "Local, enveloppe, indice de protection et repÃ©rage doivent Ãªtre compatibles avec lâ€™action.",
        items: [
          "Local compatible",
          "Enveloppe intacte",
          "Indice de protection suffisant",
          "RepÃ©rage confirmÃ©",
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
        "8. OpÃ©rations BS : remplacement simple et raccordement Ã©lÃ©mentaire",
      estimatedMinutes: 20,
      intro:
        "Le cÅ“ur de la trame BS est ici : ce qui est autorisÃ©, sur quels types de matÃ©riels, avec quelles limites, et comment rester dans un cadre simple et documentÃ©.",
      content: [
        "Le titulaire BS peut rÃ©aliser des remplacements simples et des raccordements Ã©lÃ©mentaires en basse tension lorsque lâ€™installation, le circuit et le matÃ©riel sont identifiÃ©s et que la procÃ©dure de lâ€™entreprise le permet.",
        "Dans la pratique, il peut sâ€™agir de remplacements de lampe, fusible basse tension, accessoire dâ€™Ã©clairage, socle de prise, interrupteur, convecteur, chauffe-eau, volet ou autre matÃ©riel simple, dans la limite du cadre autorisÃ©.",
        "Un repÃ¨re pÃ©dagogique souvent retenu dans les programmes BS est celui de matÃ©riels simples jusquâ€™Ã  400 V et 32 A en courant alternatif. Ce repÃ¨re aide Ã  comprendre le niveau visÃ©, mais il ne dispense jamais de vÃ©rifier le matÃ©riel rÃ©el et la procÃ©dure locale.",
        "Le raccordement doit rester Ã©lÃ©mentaire, hors tension, sur un support prÃ©vu et identifiÃ©. Si lâ€™action impose un diagnostic, une adaptation de cÃ¢blage, un doute sur le repÃ©rage ou une complexitÃ© technique, elle sort du cadre BS.",
        "La qualitÃ© du raisonnement se voit dans cette capacitÃ© Ã  distinguer une opÃ©ration Ã©lÃ©mentaire dâ€™un dÃ©pannage improvisÃ©.",
      ],
      deepDive: [
        "Le danger frÃ©quent est le glissement de mission : lâ€™opÃ©rateur commence un remplacement simple, constate que cela ne repart pas et bascule vers une recherche de panne.",
        "Une opÃ©ration BS doit pouvoir Ãªtre expliquÃ©e simplement : quel matÃ©riel, quel circuit, quelle procÃ©dure, quelle mise hors tension, quelle vÃ©rification et quelle remise en service.",
      ],
      keyPoints: [
        "BS = remplacements simples et raccordements Ã©lÃ©mentaires.",
        "Le cadre doit rester hors tension, repÃ©rÃ© et documentÃ©.",
        "Le repÃ¨re 400 V / 32 A aide Ã  comprendre le niveau visÃ©.",
      ],
      forbiddenPoints: [
        "Chercher la panne si le remplacement ne suffit pas.",
        "Modifier un cÃ¢blage ou improviser une adaptation.",
        "Intervenir sur un circuit non identifiÃ©.",
      ],
      legalRefs: [
        "NF C 18-510 - interventions BT Ã©lÃ©mentaires.",
        "NF C 18-510 - remplacement de lampes, accessoires et fusibles BT.",
        "INRS - limites dâ€™autorisation BS et prÃ©vention du dÃ©pannage improvisÃ©.",
      ],
      resourceVideos: [VIDEO.bsbe],
      practicalCase:
        "Exemple : un luminaire doit Ãªtre remplacÃ© selon procÃ©dure. Si lâ€™Ã©quipement neuf ne fonctionne pas et que le support ne permet plus une action Ã©lÃ©mentaire, lâ€™opÃ©rateur sâ€™arrÃªte et transmet.",
      chapterImagePath: "/elearning/bsbe/pratique-terrain.jpg",
      chapterImageAlt:
        "Intervention ?l?mentaire en environnement ?lectrique basse tension",
      visual: {
        title: "BS : ce qui est attendu",
        subtitle: "Simple, hors tension, repÃ©rÃ©, documentÃ©.",
        items: [
          "Lampe / fusible / appareillage simple",
          "Raccordement Ã©lÃ©mentaire",
          "Circuit repÃ©rÃ©",
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
        "9. ProcÃ©dure BS : mise hors tension pour son propre compte, VAT et documents",
      estimatedMinutes: 18,
      intro:
        "Le BS doit comprendre la logique de mise en sÃ©curitÃ© sans Ãªtre confondu avec un chargÃ© de consignation BC. Cette partie clarifie la mise hors tension pour son propre compte, la vÃ©rification adaptÃ©e et les documents de travail.",
      content: [
        "Le titulaire BS comprend la logique de consignation, mais il nâ€™est pas chargÃ© de consignation BC. Il ne doit donc pas sâ€™approprier un rÃ´le qui ne lui appartient pas.",
        "Dans le cadre dâ€™une intervention Ã©lÃ©mentaire prÃ©vue, il peut rÃ©aliser la mise hors tension nÃ©cessaire Ã  son intervention pour son propre compte, lorsque la procÃ©dure, le matÃ©riel et lâ€™organisation de lâ€™entreprise le permettent.",
        "La sÃ©quence attendue repose sur une logique simple et rigoureuse : identifier le bon circuit, sÃ©parer lâ€™alimentation par lâ€™organe prÃ©vu, empÃªcher toute remise sous tension intempestive selon les consignes du site, confirmer le repÃ©rage, vÃ©rifier lâ€™absence de tension avec un dispositif adaptÃ©, rÃ©aliser lâ€™opÃ©ration Ã©lÃ©mentaire prÃ©vue, remettre en Ã©tat puis rendre compte.",
        "La vÃ©rification dâ€™absence de tension doit Ãªtre comprise comme un point de sÃ©curitÃ© majeur. Elle ne se remplace pas par une impression, par lâ€™extinction dâ€™un voyant ou par une simple habitude.",
        "Les documents ont une vraie valeur opÃ©rationnelle : procÃ©dure de remplacement, instruction de rÃ©armement, schÃ©ma simplifiÃ©, repÃ©rage local, fiche rÃ©flexe, consigne de site, compte rendu et signalement dâ€™anomalie.",
        "Si la procÃ©dure ne correspond plus au terrain, si le repÃ¨re est douteux, si lâ€™organe nâ€™est pas clairement identifiÃ© ou si une source autonome peut maintenir lâ€™alimentation, lâ€™intervention doit Ãªtre suspendue.",
      ],
      deepDive: [
        "Cette partie est importante car elle Ã©vite deux erreurs : former trop peu, en oubliant la logique de mise hors tension, ou former trop largement, en laissant croire que le BS devient BC.",
        "Le bon positionnement pÃ©dagogique est donc : comprendre la logique de mise en sÃ©curitÃ©, appliquer la procÃ©dure prÃ©vue sans se substituer au BC, ne pas dÃ©passer son cadre et transmettre dÃ¨s quâ€™une condition manque.",
      ],
      keyPoints: [
        "Le BS nâ€™est pas chargÃ© de consignation BC.",
        "La mise hors tension pour son propre compte doit Ãªtre prÃ©vue et encadrÃ©e.",
        "La VAT est un point de sÃ©curitÃ© essentiel.",
        "Les documents et le compte rendu font partie de lâ€™intervention.",
      ],
      forbiddenPoints: [
        "Assimiler BS et BC.",
        "Agir sans document ou avec un support incohÃ©rent.",
        "Remplacer la VAT par une simple impression visuelle.",
        "Remettre sous tension si une anomalie persiste.",
      ],
      legalRefs: [
        "NF C 18-510 - interventions BT Ã©lÃ©mentaires.",
        "NF C 18-510 - mise hors tension, VAT et rÃ´les associÃ©s.",
        "NF C 18-510 - documents, procÃ©dures dâ€™accÃ¨s, de suivi et de contrÃ´le.",
      ],
      resourceVideos: [VIDEO.consignation],
      practicalCase:
        "Exemple : la procÃ©dure de remplacement dâ€™un accessoire indique un dÃ©part clairement repÃ©rÃ©. Sur place, le repÃ©rage ne correspond plus au tableau. Lâ€™opÃ©rateur suspend lâ€™intervention et demande une clarification avant toute action.",
      chapterImagePath: "/images/modules/electricite/consignation-vat-balisage.jpg",
      chapterImageAlt:
        "Mise hors tension pour son propre compte, VAT et documents en BS",
      visual: {
        title: "SÃ©curiser puis tracer lâ€™intervention",
        subtitle:
          "Identifier, mettre hors tension, vÃ©rifier, agir puis rendre compte.",
        items: [
          "Circuit identifiÃ©",
          "SÃ©paration / prÃ©vention",
          "VAT confirmÃ©e",
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
        "10. OpÃ©rations BE ManÅ“uvre : rÃ©armement, ouverture, fermeture, basculement",
      estimatedMinutes: 18,
      intro:
        "La manÅ“uvre doit Ãªtre enseignÃ©e comme un acte dâ€™exploitation encadrÃ©, jamais comme un prÃ©texte Ã  dÃ©panner ou Ã  investiguer.",
      content: [
        "Le titulaire BE ManÅ“uvre peut, dans le cadre des consignes du site, ouvrir, fermer, mettre en marche, arrÃªter, basculer ou rÃ©armer un Ã©quipement ou un circuit Ã  partir dâ€™un organe identifiÃ© et prÃ©vu pour cet usage.",
        "Cela peut concerner un disjoncteur de dÃ©part repÃ©rÃ©, un organe de commande, un dispositif de rÃ©armement, un sectionneur de manÅ“uvre ou un inverseur prÃ©vu Ã  cet effet.",
        "La manÅ“uvre reste une action dâ€™exploitation. Elle sâ€™effectue sur un organe identifiÃ©, accessible et prÃ©vu pour cet usage. Elle ne doit pas devenir une recherche de panne, une ouverture dâ€™enveloppe pour diagnostic ni une tentative rÃ©pÃ©tÃ©e de remise en service sans analyse du contexte.",
        "Une instruction de sÃ©curitÃ© ou une procÃ©dure de rÃ©armement claire est un prÃ©alable indispensable. Sans support fiable, la manÅ“uvre doit Ãªtre suspendue.",
        "Le rÃ©enclenchement rÃ©pÃ©tÃ© est lâ€™une des erreurs les plus classiques. Il faut au contraire savoir reconnaÃ®tre quâ€™une anomalie persistante impose lâ€™arrÃªt et la transmission.",
        "Le BE ManÅ“uvre peut participer Ã  une manÅ“uvre prÃ©vue par instruction, mais il ne devient pas chargÃ© de consignation, chargÃ© dâ€™intervention gÃ©nÃ©rale ou technicien de dÃ©pannage.",
      ],
      deepDive: [
        "Un opÃ©rateur fiable sait rÃ©armer quand câ€™est lÃ©gitime, mais surtout sait ne pas rÃ©armer quand le contexte ne le permet plus.",
        "Le cÅ“ur de la compÃ©tence BE ManÅ“uvre est la discipline dâ€™exploitation : agir sur le bon organe, au bon moment, selon la bonne instruction, sans dÃ©montage de protection, et sâ€™arrÃªter au premier signal anormal.",
      ],
      keyPoints: [
        "BE ManÅ“uvre = organe prÃ©vu, procÃ©dure connue, contexte vÃ©rifiÃ©.",
        "Pas de dÃ©pannage.",
        "Pas de rÃ©enclenchement en boucle.",
      ],
      forbiddenPoints: [
        "Ouvrir un coffret pour comprendre la cause.",
        "RÃ©enclencher plusieurs fois sans analyse.",
        "Contourner un verrouillage ou une interdiction.",
        "Transformer une manÅ“uvre en diagnostic.",
      ],
      legalRefs: [
        "NF C 18-510 - opÃ©rations spÃ©cifiques et attribut BE ManÅ“uvre.",
        "NF C 18-510 - manÅ“uvres dâ€™exploitation et limites dâ€™autorisation.",
        "INRS - distinction entre manÅ“uvre et dÃ©pannage.",
      ],
      resourceVideos: [VIDEO.bsbe],
      practicalCase:
        "Exemple : un disjoncteur de dÃ©part a sautÃ©. Lâ€™opÃ©rateur constate une odeur de chaud et un bruit anormal. Il nâ€™effectue pas de rÃ©armement et fait traiter la situation par une personne compÃ©tente.",
      chapterImagePath: "/elearning/bsbe/cours-electrique.jpg",
      chapterImageAlt:
        "Tableau ?lectrique basse tension et organes d exploitation utiles ? une manoeuvre",
      visual: {
        title: "BE ManÅ“uvre : la bonne sÃ©quence",
        subtitle: "Identifier, vÃ©rifier, manÅ“uvrer, surveiller.",
        items: [
          "Organe prÃ©vu",
          "Contexte sain",
          "ProcÃ©dure connue",
          "ArrÃªt si anomalie",
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
        "11. Savoir dire non : limites BS / BE ManÅ“uvre et bascule vers BR ou travaux",
      estimatedMinutes: 15,
      intro:
        "Une formation sÃ©rieuse ne se limite pas Ã  dire ce que BS et BE ManÅ“uvre autorisent. Elle doit surtout apprendre Ã  reconnaÃ®tre les cas qui sortent du cadre et imposent un arrÃªt, une requalification ou lâ€™appel Ã  un autre niveau dâ€™habilitation.",
      content: [
        "Le BS ne couvre ni la recherche de panne, ni la modification de schÃ©ma, ni lâ€™adaptation de cÃ¢blage, ni lâ€™exploration dâ€™un dysfonctionnement dont la cause nâ€™est pas clairement identifiÃ©e.",
        "Le BE ManÅ“uvre nâ€™autorise pas lâ€™ouverture dâ€™une enveloppe pour diagnostiquer, lâ€™essai improvisÃ© dâ€™un matÃ©riel, ni la rÃ©pÃ©tition de manÅ“uvres sur une installation anormale pour tenter de faire repartir.",
        "Des circuits multiples, un voisinage non maÃ®trisÃ©, une documentation absente, un dÃ©part non repÃ©rable, un besoin de mesure ou de dÃ©pannage, une intervention sur un circuit de puissance ou une modification de borne sont autant de signaux de sortie du cadre BS / BE.",
        "Le vrai professionnalisme consiste Ã  reconnaÃ®tre le moment exact oÃ¹ lâ€™action relÃ¨ve plutÃ´t dâ€™un BR, dâ€™un B1/B2, dâ€™un BC ou dâ€™une intervention organisÃ©e autrement.",
        "Le refus dâ€™une action hors cadre nâ€™est pas une opposition au travail. Câ€™est une mesure de prÃ©vention attendue.",
      ],
      deepDive: [
        "Câ€™est souvent sur ces cas limites que se joue la qualitÃ© de la formation.",
        "Cette capacitÃ© Ã  sâ€™arrÃªter fait partie des acquis attendus.",
      ],
      keyPoints: [
        "BS / BE ManÅ“uvre ont des limites strictes.",
        "Le doute, la panne ou la complexitÃ© imposent une requalification.",
        "Refuser une action hors cadre est un comportement professionnel.",
      ],
      forbiddenPoints: [
        "Glisser dâ€™un remplacement simple vers un dÃ©pannage.",
        "Multiplier les rÃ©armements pour maintenir la production.",
        "Faire une mesure ou une vÃ©rification hors cadre.",
      ],
      legalRefs: [
        "NF C 18-510 - limites des interventions Ã©lÃ©mentaires et des manÅ“uvres dâ€™exploitation.",
        "NF C 18-510 - distinctions BS, BR, BC, B1, B2 et BE ManÅ“uvre.",
        "INRS - distinction entre BS, BE ManÅ“uvre, BR et opÃ©rations non habilitÃ©es.",
      ],
      practicalCase:
        "Exemple : aprÃ¨s remplacement dâ€™un fusible, le circuit retombe immÃ©diatement. Lâ€™opÃ©rateur nâ€™entame pas une recherche de dÃ©faut et fait remonter la situation pour requalification.",
      chapterImagePath: "/elearning/bsbe/types-operations-electriques.jpg",
      chapterImageAlt:
        "Types d op?rations ?lectriques et limites entre op?ration simple, manoeuvre et intervention hors cadre",
      visual: {
        title: "Le bon niveau dâ€™arrÃªt",
        subtitle: "Si la situation se complique, le cadre change.",
        items: [
          "Panne non identifiÃ©e",
          "SchÃ©ma incertain",
          "Voisinage dÃ©gradÃ©",
          "Requalification nÃ©cessaire",
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
        "12. EPI, EPC, environnement de travail et prÃ©alables Ã  respecter",
      estimatedMinutes: 12,
      intro:
        "La prÃ©vention ne se limite pas au bon geste. Elle repose aussi sur lâ€™environnement, les protections collectives, les protections individuelles et lâ€™Ã©tat apparent du matÃ©riel.",
      content: [
        "Les Ã©quipements de protection collective doivent Ãªtre privilÃ©giÃ©s : enveloppes, capotages, Ã©crans, obstacles, balisage, verrouillages, dÃ©limitation de zone et organisation du poste de travail.",
        "Les Ã©quipements de protection individuelle viennent en complÃ©ment. Ils ne rendent jamais licite une opÃ©ration interdite, mal prÃ©parÃ©e ou rÃ©alisÃ©e dans un voisinage dÃ©gradÃ©.",
        "Avant toute action, il faut vÃ©rifier lâ€™Ã©tat apparent du matÃ©riel, des cÃ¢bles, des appareillages, des outils, du local, de lâ€™humiditÃ©, de lâ€™accessibilitÃ© et de lâ€™absence dâ€™anomalie visible.",
        "Un capot retirÃ©, une odeur de chaud, une trace de charbonnage, un sol humide, un cÃ¢ble dÃ©tÃ©riorÃ©, un coffret non refermÃ©, une barriÃ¨re dÃ©placÃ©e ou une zone encombrÃ©e changent totalement le niveau de risque.",
        "Le port dâ€™un EPI ne transforme jamais un non-Ã©lectricien en Ã©lectricien. Le cadre dâ€™habilitation reste prioritaire.",
      ],
      deepDive: [
        "Les EPI doivent Ãªtre compris dans la hiÃ©rarchie des protections et ne remplacent jamais le cadre de sÃ©curitÃ© initial.",
        "Un Ã©quipement de protection dÃ©gradÃ© ou absent est un signal dâ€™arrÃªt, pas un dÃ©tail.",
      ],
      keyPoints: [
        "Protection collective dâ€™abord, EPI ensuite.",
        "EPI en complÃ©ment.",
        "Contexte et Ã©tat du matÃ©riel avant toute action.",
      ],
      forbiddenPoints: [
        "Compter sur lâ€™EPI pour justifier une action interdite.",
        "Ignorer une zone dÃ©gradÃ©e ou humide.",
        "DÃ©placer un balisage ou un obstacle sans autorisation.",
      ],
      legalRefs: [
        "Code du travail - protection collective et individuelle.",
        "NF C 18-510 - adÃ©quation des moyens de prÃ©vention et du contexte de travail.",
        "NF C 18-510 - Ã©quipements de protection et conditions ambiantes.",
      ],
      practicalCase:
        "Exemple : une manÅ“uvre simple est demandÃ©e dans un local oÃ¹ le sol est humide et le coffret partiellement abÃ®mÃ©. Lâ€™opÃ©rateur ne commence pas et fait traiter le risque environnemental.",
      chapterImagePath: "/elearning/bsbe/epi-intervention.jpg",
      chapterImageAlt:
        "EPI d intervention en environnement ?lectrique et hi?rarchie des protections",
      visual: {
        title: "VÃ©rifier le contexte",
        subtitle:
          "Les protections collectives restent prioritaires ; les EPI viennent en complÃ©ment.",
        items: [
          "EPC prÃ©sents",
          "EPI adaptÃ©s",
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
      title: "13. SynthÃ¨se pÃ©dagogique",
      estimatedMinutes: 10,
      intro:
        "Ce chapitre consolide les acquis avant la fin du parcours. Lâ€™objectif nâ€™est pas de rÃ©pÃ©ter mÃ©caniquement les dÃ©finitions, mais de vÃ©rifier que lâ€™apprenant sait raisonner dans une situation rÃ©elle BS / BE ManÅ“uvre : identifier le cadre, reconnaÃ®tre les limites, refuser lâ€™improvisation et transmettre en cas de doute.",
      content: [
        "Un titulaire BS ou BE ManÅ“uvre doit Ãªtre capable de relier les notions vues dans le parcours : habilitation dÃ©livrÃ©e par lâ€™employeur, domaine basse tension, opÃ©ration Ã©lÃ©mentaire, manÅ“uvre dâ€™exploitation, protection contre les contacts, voisinage, repÃ©rage, procÃ©dure et conduite Ã  tenir en cas dâ€™anomalie.",
        "Le BS concerne des interventions Ã©lÃ©mentaires en basse tension, rÃ©alisÃ©es dans un cadre strictement dÃ©fini, sur un matÃ©riel identifiÃ©, hors tension, avec une procÃ©dure claire. Il ne sâ€™agit jamais dâ€™un dÃ©pannage libre, dâ€™une recherche de panne ou dâ€™une modification de cÃ¢blage.",
        "Le BE ManÅ“uvre concerne des manÅ“uvres dâ€™exploitation sur des organes identifiÃ©s et prÃ©vus pour cela : ouverture, fermeture, mise en marche, arrÃªt, rÃ©armement ou basculement selon les consignes du site. LÃ  encore, la manÅ“uvre ne doit jamais devenir une investigation technique ou une tentative rÃ©pÃ©tÃ©e de remise en service.",
        "La compÃ©tence attendue ne consiste donc pas seulement Ã  connaÃ®tre les gestes autorisÃ©s. Elle consiste surtout Ã  reconnaÃ®tre le moment oÃ¹ le cadre nâ€™est plus rÃ©uni : repÃ©rage douteux, procÃ©dure absente, capot manquant, odeur de chaud, dÃ©clenchement rÃ©pÃ©tÃ©, environnement humide, coffret dÃ©tÃ©riorÃ© ou demande qui glisse vers du dÃ©pannage.",
        "La prÃ©vention du risque Ã©lectrique repose sur une dÃ©cision correcte avant le geste. Avant toute action, lâ€™opÃ©rateur doit vÃ©rifier le bon matÃ©riel, le bon organe, le bon circuit, lâ€™Ã©tat apparent des protections, lâ€™environnement et la cohÃ©rence entre la procÃ©dure et la rÃ©alitÃ© du terrain.",
        "Si une seule condition importante manque, le bon comportement nâ€™est pas de compenser par lâ€™expÃ©rience ou la prudence personnelle. Le bon comportement est de stopper, sÃ©curiser sans sâ€™exposer, alerter lâ€™encadrement ou la personne compÃ©tente et transmettre lâ€™information.",
        "La synthÃ¨se pÃ©dagogique doit donc ancrer une logique simple : comprendre avant dâ€™agir, vÃ©rifier avant de toucher, rester dans son cadre, refuser lâ€™improvisation et demander clarification lorsque le doute apparaÃ®t.",
      ],
      deepDive: [
        "Dans beaucoup dâ€™accidents ou de presque-accidents, le problÃ¨me ne vient pas dâ€™un manque total de connaissance, mais dâ€™un glissement progressif. Une opÃ©ration prÃ©sentÃ©e comme simple devient une recherche de panne ; un rÃ©armement devient une sÃ©rie dâ€™essais ; un coffret normalement fermÃ© devient une zone exposÃ©e ; une procÃ©dure ancienne ne correspond plus au terrain.",
        "Le niveau professionnel attendu en BS / BE ManÅ“uvre est prÃ©cisÃ©ment de savoir interrompre cette dÃ©rive. Dire non Ã  une action hors cadre, demander une clarification ou transmettre Ã  un niveau dâ€™habilitation supÃ©rieur constitue une compÃ©tence de sÃ©curitÃ© Ã  part entiÃ¨re.",
        "La synthÃ¨se pÃ©dagogique prÃ©pare aussi le quiz final : les questions ne doivent pas seulement tester la mÃ©moire des sigles, mais la capacitÃ© Ã  prendre la bonne dÃ©cision dans un cas terrain rÃ©aliste.",
      ],
      keyPoints: [
        "Identifier le cadre rÃ©el avant toute action.",
        "VÃ©rifier que le matÃ©riel, le circuit et la procÃ©dure sont cohÃ©rents.",
        "Distinguer opÃ©ration Ã©lÃ©mentaire, manÅ“uvre dâ€™exploitation et dÃ©pannage.",
        "Refuser toute dÃ©rive vers une recherche de panne ou une modification.",
        "Stopper et transmettre dÃ¨s quâ€™un doute apparaÃ®t.",
      ],
      forbiddenPoints: [
        "Agir sur un matÃ©riel mal identifiÃ©.",
        "RÃ©armer plusieurs fois sans analyse.",
        "Transformer une opÃ©ration simple en dÃ©pannage.",
        "Ouvrir une enveloppe ou retirer un capot pour comprendre.",
        "Continuer malgrÃ© une odeur anormale, un Ã©chauffement ou un dÃ©clenchement rÃ©pÃ©tÃ©.",
      ],
      legalRefs: [
        "Code du travail - articles R.4544-9 et R.4544-10 relatifs Ã  lâ€™habilitation, Ã  la formation et Ã  lâ€™organisation des opÃ©rations.",
        "NF C 18-510 - cadre des opÃ©rations BS et BE ManÅ“uvre, limites dâ€™intervention et prescriptions de sÃ©curitÃ©.",
        "NF C 18-510 - logique dâ€™adÃ©quation entre symbole dâ€™habilitation, tÃ¢che confiÃ©e, environnement et instruction de sÃ©curitÃ©.",
        "INRS - prÃ©vention du risque Ã©lectrique, habilitation, maintien des compÃ©tences et conduite Ã  tenir en cas dâ€™anomalie.",
      ],
      practicalCase:
        "Exemple : un opÃ©rateur doit rÃ©aliser un remplacement simple prÃ©vu par une procÃ©dure. Sur place, le repÃ©rage du circuit ne correspond pas au tableau et lâ€™Ã©quipement prÃ©sente une trace dâ€™Ã©chauffement. MÃªme si le geste paraÃ®t facile, lâ€™opÃ©ration doit Ãªtre suspendue : le cadre BS nâ€™est plus suffisamment maÃ®trisÃ©.",
      chapterImagePath: "/elearning/bsbe/synthese-pedagogique.svg",
      chapterImageAlt:
        "SynthÃ¨se pÃ©dagogique BS et BE ManÅ“uvre : comprendre le cadre, vÃ©rifier les limites, refuser lâ€™improvisation et transmettre.",
      visual: {
        title: "SynthÃ¨se pÃ©dagogique BS / BE ManÅ“uvre",
        subtitle:
          "Consolider la mÃ©thode, reconnaÃ®tre ses limites et adopter la bonne dÃ©cision.",
        items: [
          "Identifier avant dâ€™agir",
          "VÃ©rifier le cadre rÃ©el",
          "Refuser lâ€™improvisation",
          "Transmettre en cas de doute",
        ],
        tone: "amber",
        imagePath: "/elearning/bsbe/synthese-pedagogique.svg",
        imageAlt:
          "Illustration de synthÃ¨se pÃ©dagogique BS et BE ManÅ“uvre",
      },
    },

    {
      id: "incendie-urgence",
      title:
        "14. Incident, incendie Ã©lectrique et premiers secours",
      estimatedMinutes: 12,
      intro:
        "La trame BS / BE doit aussi entraÃ®ner Ã  la bonne rÃ©action en cas dâ€™anomalie, de dÃ©but dâ€™incendie ou dâ€™accident Ã©lectrique.",
      content: [
        "En cas dâ€™incident Ã©lectrique, lâ€™opÃ©rateur doit arrÃªter lâ€™action, se protÃ©ger, mettre Ã  distance si besoin et alerter.",
        "En cas dâ€™incendie dans un environnement Ã©lectrique, il faut appliquer les consignes du site et ne jamais agir en se mettant soi-mÃªme en risque.",
        "En cas dâ€™Ã©lectrisation, la prioritÃ© absolue est de supprimer ou faire supprimer le danger Ã©lectrique avant toute tentative de secours.",
        "Il ne faut jamais toucher directement une victime tant que le risque Ã©lectrique persiste. Lâ€™objectif est dâ€™Ã©viter le suraccident.",
        "Les notions de premiers secours sont ici traitÃ©es sous lâ€™angle du risque Ã©lectrique : Ã©viter le suraccident, transmettre les bonnes informations et ne pas aggraver la situation par prÃ©cipitation.",
        "Face Ã  un feu dâ€™origine Ã©lectrique, lâ€™utilisation dâ€™un moyen dâ€™extinction doit respecter les consignes du site et lâ€™Ã©tat de mise hors tension. En cas de doute, la prioritÃ© reste lâ€™alerte et lâ€™Ã©vacuation.",
      ],
      deepDive: [
        "Il faut retenir une logique de professionnalisme : pas une attitude hÃ©roÃ¯que, mais une rÃ©action stable, mÃ©thodique et compatible avec lâ€™organisation du site.",
      ],
      keyPoints: [
        "Stopper, protÃ©ger, alerter.",
        "Ne jamais devenir la seconde victime.",
        "Le risque Ã©lectrique persiste parfois aprÃ¨s lâ€™incident visible.",
      ],
      forbiddenPoints: [
        "Toucher directement une victime encore exposÃ©e.",
        "Ouvrir un coffret qui fume pour voir.",
        "Utiliser de lâ€™eau sur une installation sous tension.",
      ],
      legalRefs: [
        "NF C 18-510 - incendie et accidents sur ou prÃ¨s des ouvrages et installations Ã©lectriques.",
        "Code du travail - organisation des secours et prÃ©vention du suraccident.",
        "INRS - conduite Ã  tenir face Ã  un accident dâ€™origine Ã©lectrique.",
      ],
      resourceVideos: [VIDEO.chocElectrique],
      practicalCase:
        "Exemple : un coffret de commande dÃ©gage de la fumÃ©e pendant une manÅ“uvre. Lâ€™opÃ©rateur se met en sÃ©curitÃ©, protÃ¨ge la zone et alerte sans chercher Ã  dÃ©monter ou Ã  rÃ©armer.",
      chapterImagePath: "/elearning/bsbe/danger-armoires-electriques.jpg",
      chapterImageAlt:
        "Armoire ?lectrique pr?sentant un danger et imposant arr?t, protection et alerte",
      visual: {
        title: "La bonne rÃ©action",
        subtitle:
          "Stopper, protÃ©ger, alerter et secourir sans crÃ©er de suraccident.",
        items: [
          "Incident",
          "Incendie",
          "Ã‰lectrisation",
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
      title: "15. SynthÃ¨se opÃ©rationnelle",
      estimatedMinutes: 10,
      intro:
        "Ce dernier chapitre fixe les rÃ©flexes opÃ©rationnels Ã  retenir avant lâ€™Ã©valuation finale. Lâ€™objectif est que lâ€™apprenant reparte avec une mÃ©thode simple, utilisable sur le terrain, pour agir uniquement lorsque le cadre BS / BE ManÅ“uvre est clair, autorisÃ© et maÃ®trisÃ©.",
      content: [
        "Un titulaire BS ou BE ManÅ“uvre agit seulement si lâ€™opÃ©ration est clairement identifiÃ©e, prÃ©vue par lâ€™organisation de lâ€™entreprise, compatible avec son titre dâ€™habilitation et rÃ©alisÃ©e dans un environnement maÃ®trisÃ©.",
        "Pour le BS, lâ€™action doit rester une intervention Ã©lÃ©mentaire en basse tension : remplacement simple, raccordement Ã©lÃ©mentaire ou action prÃ©vue sur un matÃ©riel identifiÃ©, hors tension et encadrÃ© par une procÃ©dure. DÃ¨s que lâ€™opÃ©ration suppose une recherche de panne, une adaptation de cÃ¢blage ou une modification, elle sort du cadre.",
        "Pour le BE ManÅ“uvre, lâ€™action doit rester une manÅ“uvre dâ€™exploitation sur un organe identifiÃ© : ouverture, fermeture, arrÃªt, mise en marche, rÃ©armement ou basculement prÃ©vu par les consignes. La manÅ“uvre ne doit jamais devenir une tentative de dÃ©pannage ou une sÃ©rie dâ€™essais rÃ©pÃ©tÃ©s.",
        "La mÃ©thode opÃ©rationnelle peut se rÃ©sumer en quatre rÃ©flexes : identifier, vÃ©rifier, agir si autorisÃ©, stopper si doute. Cette sÃ©quence doit Ãªtre appliquÃ©e avant chaque opÃ©ration, mÃªme lorsque le geste paraÃ®t habituel ou rapide.",
        "Identifier signifie reconnaÃ®tre le bon organe, le bon circuit, le bon Ã©quipement, le bon local et la bonne procÃ©dure. Un repÃ¨re incomplet, une Ã©tiquette douteuse ou une incohÃ©rence entre le terrain et le document impose de suspendre lâ€™action.",
        "VÃ©rifier signifie observer lâ€™environnement : Ã©tat du coffret, capotage, absence de partie accessible dangereuse, absence dâ€™humiditÃ©, absence dâ€™odeur anormale, absence dâ€™Ã©chauffement, absence de cÃ¢ble dÃ©tÃ©riorÃ©, cohÃ©rence de la procÃ©dure et maintien des protections collectives.",
        "Agir si autorisÃ© signifie rÃ©aliser uniquement le geste prÃ©vu, sans Ã©largir la mission. Lâ€™opÃ©rateur ne doit pas ouvrir pour voir, chercher la cause dâ€™un dÃ©faut, rÃ©armer Ã  rÃ©pÃ©tition, modifier un raccordement ou improviser une solution pour maintenir lâ€™exploitation.",
        "Stopper si doute signifie interrompre lâ€™action dÃ¨s quâ€™une condition de sÃ©curitÃ© nâ€™est plus rÃ©unie. Lâ€™arrÃªt nâ€™est pas un Ã©chec ; câ€™est le comportement attendu pour Ã©viter lâ€™accident, le suraccident ou lâ€™aggravation dâ€™une anomalie.",
        "En cas dâ€™incident, dâ€™Ã©lectrisation, de fumÃ©e, dâ€™odeur de chaud ou de dÃ©clenchement rÃ©pÃ©tÃ©, la prioritÃ© reste la protection des personnes : ne pas toucher une victime exposÃ©e, ne pas ouvrir un coffret dangereux, se mettre Ã  distance, alerter et appliquer les consignes du site.",
        "La synthÃ¨se finale doit donc Ãªtre claire : le BS / BE ManÅ“uvre est utile pour des opÃ©rations simples et encadrÃ©es, mais il ne donne jamais un droit gÃ©nÃ©ral dâ€™intervention Ã©lectrique. La sÃ©curitÃ© repose sur le respect strict du pÃ©rimÃ¨tre confiÃ© par lâ€™employeur.",
      ],
      deepDive: [
        "Sur le terrain, la pression vient souvent de lâ€™exploitation : remettre un Ã©quipement en service, aller vite, rendre service ou Ã©viter un arrÃªt. Câ€™est prÃ©cisÃ©ment dans ces moments que le cadre BS / BE ManÅ“uvre doit Ãªtre le plus respectÃ©.",
        "Lâ€™opÃ©rateur compÃ©tent nâ€™est pas celui qui tente coÃ»te que coÃ»te de rÃ©soudre le problÃ¨me. Câ€™est celui qui sait reconnaÃ®tre que le problÃ¨me ne relÃ¨ve plus de son niveau dâ€™habilitation ou de la procÃ©dure prÃ©vue.",
        "La derniÃ¨re compÃ©tence Ã  acquÃ©rir est donc une compÃ©tence de dÃ©cision : savoir quand agir, mais surtout savoir quand ne pas agir.",
      ],
      keyPoints: [
        "Identifier le matÃ©riel, lâ€™organe ou le circuit avant toute action.",
        "VÃ©rifier la procÃ©dure, le repÃ©rage, lâ€™environnement et les protections.",
        "Agir uniquement si lâ€™action est autorisÃ©e, simple et maÃ®trisÃ©e.",
        "Stopper immÃ©diatement en cas de doute, dâ€™anomalie ou de dÃ©rive.",
        "Transmettre Ã  lâ€™encadrement ou Ã  une personne compÃ©tente.",
      ],
      forbiddenPoints: [
        "RÃ©armer en boucle aprÃ¨s plusieurs dÃ©clenchements.",
        "Ouvrir un coffret pour rechercher la cause.",
        "Modifier un cÃ¢blage ou adapter une installation.",
        "Agir malgrÃ© un repÃ©rage incohÃ©rent.",
        "Compenser une protection absente par le seul port dâ€™un EPI.",
      ],
      legalRefs: [
        "Code du travail - articles R.4544-9 et R.4544-10 : travailleurs habilitÃ©s, formation adaptÃ©e, habilitation dÃ©livrÃ©e par lâ€™employeur.",
        "NF C 18-510 - interventions Ã©lÃ©mentaires BS et manÅ“uvres dâ€™exploitation BE ManÅ“uvre.",
        "NF C 18-510 - prescriptions de sÃ©curitÃ©, limites dâ€™habilitation, environnement Ã©lectrique et rÃ´le des instructions.",
        "INRS - habilitation Ã©lectrique : formation, Ã©valuation, avis aprÃ¨s formation, maintien des compÃ©tences et prÃ©vention des accidents.",
      ],
      resourceVideos: [VIDEO.bsbe],
      practicalCase:
        "Exemple : un opÃ©rateur sait techniquement rÃ©armer un dÃ©part, mais la zone est encombrÃ©e, le repÃ¨re local est douteux et lâ€™Ã©quipement a dÃ©jÃ  dÃ©clenchÃ© deux fois. La bonne dÃ©cision consiste Ã  ne pas rÃ©armer, Ã  sÃ©curiser la situation et Ã  transmettre Ã  une personne compÃ©tente.",
      chapterImagePath: "/elearning/bsbe/synthese-operationnelle.svg",
      chapterImageAlt:
        "SynthÃ¨se opÃ©rationnelle BS et BE ManÅ“uvre : identifier, vÃ©rifier, agir si autorisÃ©, stopper si doute.",
      visual: {
        title: "SynthÃ¨se opÃ©rationnelle BS / BE ManÅ“uvre",
        subtitle:
          "Identifier, vÃ©rifier, agir si autorisÃ©, stopper si doute.",
        items: [
          "MatÃ©riel repÃ©rÃ©",
          "ProcÃ©dure claire",
          "Contexte conforme",
          "Transmission si doute",
        ],
        tone: "green",
        imagePath: "/elearning/bsbe/synthese-operationnelle.svg",
        imageAlt:
          "Illustration de synthÃ¨se des rÃ©flexes de dÃ©cision pour le parcours BS et BE ManÅ“uvre",
      },
    },
  ],
};
