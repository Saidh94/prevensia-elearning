import { ModuleContent } from "./module-types";

export const bsbeModuleContent: ModuleContent = {
  title:
    "BS et BE Manoeuvre - Interventions elementaires et manoeuvres en basse tension",
  shortTitle: "BS et BE Manoeuvre",
  subtitle:
    "Parcours e-learning structure selon la NF C 18-510 pour les personnels amenes a realiser des remplacements simples, des raccordements elementaires et des manoeuvres d'exploitation en basse tension.",
  duration: "7 h 30 a 9 h 30 de theorie guidee",
  deliveryFormat:
    "E-learning technique + quiz + sequence d'application encadree : classe virtuelle de 3 h a 4 h en initial groupe / entreprise, ou visio de 45 min a 1 h en recyclage",
  level: "Intermediaire",
  objective:
    "Respecter les prescriptions de securite liees aux habilitations BS et BE Manoeuvre, comprendre les bases electriques utiles, reconnaitre les situations a risque, identifier les limites d'autorisation, preparer une operation simple en securite et adopter la bonne conduite en cas d'anomalie ou d'accident.",
  audience:
    "Agents de maintenance, techniciens polyvalents, gardiens, personnels de sites tertiaires ou industriels, personnels d'exploitation, services generaux et salaries amenes a effectuer des operations simples ou des manoeuvres en basse tension sans etre electriciens executants.",
  certificationNote:
    "Ce parcours constitue la preparation theorique. L'habilitation BS ou BE Manoeuvre est delivree uniquement par l'employeur apres verification des acquis, adequation au poste, analyse du risque et evaluation adaptee au poste.",
  heroBadge: "Habilitation electrique",
  finalMessage:
    "Le bon reflexe en BS ou en BE Manoeuvre n'est pas d'improviser une solution. C'est d'identifier le bon organe, de verifier le contexte, d'appliquer la procedure prevue et de s'arreter immediatement si l'action n'entre plus dans le cadre autorise.",
  quizCtaLabel: "Passer au quiz BS et BE Manoeuvre",
  sections: [
    {
      id: "habilitation-symboles",
      title: "1. Habilitation electrique, symboles BS et BE Manoeuvre et cadre employeur",
      estimatedMinutes: 25,
      intro:
        "La norme NF C 18-510 rappelle qu'une habilitation est une reconnaissance de capacite accordee par l'employeur. Le premier chapitre doit donc poser clairement le cadre, les symboles et les limites reelles du BS et du BE Manoeuvre.",
      content: [
        "L'habilitation electrique est definie par la norme comme la reconnaissance par l'employeur de la capacite d'une personne a accomplir en securite les taches qui lui sont confiees vis-a-vis du risque electrique. Cette logique est centrale: la formation prepare, mais c'est l'employeur qui verifie l'adaptation au poste, aux locaux, aux materiels et aux procedures internes avant de remettre un titre.",
        "Le symbole BS correspond aux interventions elementaires en basse tension. Il vise des operations simples, limitees, prepares et realisees hors tension, telles que des remplacements simples ou des raccordements elementaires sur des circuits et materiels identifies. Le symbole BE Manoeuvre concerne les manoeuvres d'exploitation, par exemple l'ouverture, la fermeture, le rearmement ou la commande d'organes clairement identifies et prevus pour cela.",
        "Le BS et le BE Manoeuvre ne sont pas des versions simplifiees des habilitations B1, B2, BR ou BC. Le titulaire BS n'est ni executant electricien de travaux, ni charge de travaux, ni charge de consignation. Le titulaire BE Manoeuvre n'est pas charge d'intervention generale et n'acquiert pas, par ce symbole, le droit de depanner, modifier, diagnostiquer librement ou consigner.",
        "La prevention exige une chaine coherente: analyse du besoin, designation des taches admissibles, mise a disposition des consignes, verification des acquis, evaluation pratique, puis delivrance du titre. Cette chaine est exactement celle que l'on retrouve dans l'introduction et les definitions de la NF C 18-510, puis dans l'annexe D dediee aux savoirs attendus en formation initiale et recyclage.",
        "Le bon reflexe a retenir est le suivant: le parcours de formation prepare a agir dans un cadre defini, mais seul le titre d'habilitation remis par l'employeur autorise l'activite sur les taches reellement confiees.",
        "Le recyclage ne se limite pas a repasser quelques definitions. Il vise a verifier que les reflexes sont toujours maitrises, que les limites du symbole restent comprises et que le salarie sait reconnaitre les situations qui sortent du cadre BS ou BE Manoeuvre.",
      ],
      deepDive: [
        "Le risque majeur, dans la vraie vie des sites, n'est pas l'ignorance pure. C'est le glissement progressif: un remplacement simple devient un diagnostic, un rearmement devient une recherche de panne, une manoeuvre devient une intervention improvisee. Le chapitre d'ouverture doit donc apprendre a stopper avant cette derive.",
        "La norme insiste aussi sur l'unicite, la coherence et la maitrise de l'information. Cela signifie qu'un operateur BS / BE ne doit jamais agir sur une simple habitude orale, sur un repere flou ou sur une demande urgente qui contourne la procedure et le titre d'habilitation.",
        "Un bon apprenant BS / BE doit savoir formuler sa limite. Dire 'ce geste n'entre pas dans mon cadre' est une competence securite, pas une faiblesse.",
      ],
      keyPoints: [
        "L'habilitation est delivree par l'employeur, pas par la formation seule.",
        "BS = interventions elementaires en basse tension, dans un cadre strictement limite.",
        "BE Manoeuvre = manoeuvres d'exploitation sur organe identifie et prevu a cet effet.",
        "BS et BE Manoeuvre ne valent ni B1, ni B2, ni BR, ni BC.",
        "Le poste reel, l'environnement et les procedures conditionnent la delivrance du titre.",
      ],
      forbiddenPoints: [
        "Confondre attestation de formation et titre d'habilitation remis par l'employeur.",
        "Croire que BS ou BE Manoeuvre autorisent des travaux d'electricien executant ou de charge d'intervention.",
        "Commencer un depannage, une modification ou une recherche de panne hors du cadre autorise.",
      ],
      legalRefs: [
        "Code du travail - articles R.4544-9 et R.4544-10 sur la formation, l'habilitation et l'organisation des operations.",
        "NF C 18-510 - article 3 : habilitation, employeur, operateur et roles des personnes.",
        "NF C 18-510 - annexe D : referentiels des savoirs attendus en formation initiale et recyclage.",
        "INRS - habilitation electrique, role de l'employeur et maintien des competences.",
      ],
      resourceVideos: [
        {
          title: "Video INRS - Les bases de l'habilitation electrique",
          description:
            "Support officiel utile pour poser le cadre employeur, le role de la formation et la logique des symboles.",
          url: "https://www.inrs.fr/media.html?refINRS=Anim-132",
          provider: "INRS",
          ctaLabel: "Voir la video INRS",
        },
      ],
      practicalCase:
        "Exemple : un agent multi-technique sait remplacer une prise simple hors tension. Sur place, il decouvre un coffret mal repere et un cablage ancien. L'operation doit etre stoppee: le cadre BS n'autorise pas une recherche de panne ni une adaptation improvisee.",
      visual: {
        title: "De la formation au titre d'habilitation",
        subtitle: "Le titre BS ou BE Manoeuvre n'est delivre qu'apres verification des acquis et adequation au poste.",
        items: [
          "Comprendre le cadre normatif",
          "Verifier les connaissances et les limites",
          "Evaluer la capacite a agir en securite",
          "Habiliter selon les taches reelles du poste",
        ],
        tone: "blue",
        imagePath: "/elearning/bsbe/bsbe-cadre.svg",
        imageAlt:
          "Schema de la chaine formation evaluation et habilitation employeur pour le BS et le BE Manoeuvre",
      },
    },
    {
      id: "bases-electricite",
      title: "2. Bases electriques indispensables avant toute operation",
      estimatedMinutes: 25,
      intro:
        "Un titulaire BS / BE n'est pas un technicien d'etudes, mais il doit comprendre ce qu'est un circuit, ce que signifient les grandeurs electriques et pourquoi le domaine de tension change la lecture du risque.",
      content: [
        "La norme distingue les domaines de tension parce qu'ils structurent la prevention. En courant alternatif, la tres basse tension est inferieure ou egale a 50 V, la basse tension est superieure a 50 V et inferieure ou egale a 1 000 V, et la haute tension est au-dela. En courant continu, les seuils correspondants sont 120 V puis 1 500 V. Cette lecture est indispensable pour ne pas banaliser un circuit, une batterie, un onduleur ou un coffret apparemment simple.",
        "Comprendre un circuit electrique, c'est savoir reconnaitre une source, des conducteurs, une charge, un organe de commande et un organe de protection. Sans cette lecture minimale, l'operateur agit a l'aveugle et ne sait pas si le materiel qu'il touche releve d'un simple circuit terminal, d'un depart moteur, d'une alimentation secourue ou d'une chaine continue encore energisee.",
        "Les grandeurs essentielles a maitriser sont la tension, l'intensite, la resistance et la puissance. La tension traduit une difference de potentiel, l'intensite la quantite de courant qui circule, la resistance l'opposition au passage du courant et la puissance la quantite d'energie mise en jeu. Ces notions servent a comprendre pourquoi un circuit chauffe, pourquoi un conducteur peut se deteriorer et pourquoi une erreur de manoeuvre peut avoir un effet violent sur les personnes et le materiel.",
        "L'apprenant doit aussi distinguer partie active, masse, conducteur de protection, neutre et, lorsque c'est utile a la comprehension, conducteur PEN. Meme si ces termes paraissent plus techniques, ils permettent d'expliquer ce qu'est un contact direct, un contact indirect et pourquoi une enveloppe metallique peut devenir dangereuse a la suite d'un defaut d'isolement.",
        "Le chapitre doit aussi parler des energies non evidentes: batteries, chargeurs, onduleurs, photovoltaique, automatismes secourus. Ce n'est pas hors sujet. Au contraire, cela donne au titulaire BS ou BE Manoeuvre le bon reflexe: l'absence de reseau apparent ne suffit pas a conclure a l'absence de risque.",
        "Un bon chapitre BS / BE doit enfin apprendre a lire les familles de materiels courants: tableau de distribution, disjoncteur, sectionneur, organe de commande, depart terminal, circuit prise, eclairage, chauffe-eau, ventilateur, volet, automatisme. Plus l'operateur comprend ce qu'il regarde, moins il glisse vers une manoeuvre ou un remplacement mal cadre.",
      ],
      deepDive: [
        "Le but n'est pas d'empiler des definitions scolaires. Le but est de relier la theorie a la scene terrain: que voit-on devant une armoire, quel type d'energie circule, quel organe coupe, quel organe protege, et le cadre BS / BE est-il encore adapte ?",
        "Il est important d'expliquer la difference entre un circuit terminal simple et un depart plus energetique. Cette finesse aide l'apprenant a comprendre pourquoi certains materiels restent hors cadre malgre une apparence familiere.",
      ],
      keyPoints: [
        "Les domaines de tension structurent la prevention du risque.",
        "Tension, intensite, resistance et puissance expliquent le comportement du circuit.",
        "Partie active, masse et conducteur de protection doivent etre compris.",
        "Alternatif et continu ne se traitent pas exactement de la meme facon.",
      ],
      forbiddenPoints: [
        "Confondre une installation familiere avec une installation sans danger.",
        "Raisonner uniquement a l'apparence exterieure du materiel.",
      ],
      legalRefs: [
        "NF C 18-510 - tableau des domaines de tension et definitions des parties actives et des masses.",
        "NF C 15-100 - vocabulaire de base des installations basse tension.",
        "INRS - bases du risque electrique et prevention des accidents.",
      ],
      practicalCase:
        "Exemple : un operateur doit reinitialiser un organe alimente par un coffret de commande. Il observe la presence d'un variateur et d'une alimentation secourue. Avant toute action, il comprend que l'energie et le comportement du circuit ne sont pas ceux d'un simple depart d'eclairage.",
      visual: {
        title: "Lire le circuit avant le geste",
        subtitle: "Domaines de tension, grandeurs utiles et familles de materiels conditionnent la securite de l'operation.",
        items: [
          "TBT / BT / HT",
          "Alternatif et continu",
          "Source, charge, commande, protection",
          "Partie active, masse, conducteur de protection",
        ],
        tone: "slate",
        imagePath: "/elearning/bsbe/bsbe-bases.svg",
        imageAlt:
          "Illustration des bases electriques utiles au BS et au BE Manoeuvre avec circuit, grandeurs et domaines de tension",
      },
    },
    {
      id: "effets-corps",
      title: "3. Effets du courant sur le corps humain et courbe intensite / temps",
      estimatedMinutes: 20,
      intro:
        "Comprendre le risque electrique, ce n'est pas memoriser une interdiction abstraite. C'est savoir ce que produit concretement le courant sur le corps humain, et pourquoi quelques secondes de plus peuvent tout changer.",
      content: [
        "Le passage du courant dans le corps peut provoquer une electrisation, des brulures externes et internes, des contractions musculaires, des troubles respiratoires, des troubles cardiaques et des lesions neurologiques. L'electrocution correspond a l'issue mortelle d'une electrisation. Dans tous les cas, il faut retenir qu'une victime qui parle ou se releve n'est pas forcement hors danger.",
        "La gravite depend principalement de l'intensite du courant, du temps de passage, du trajet dans l'organisme, de l'etat de la peau, de l'humidite et du contexte de contact. Un courant qui traverse le thorax est particulierement dangereux car il expose le coeur et la respiration.",
        "Quelques ordres de grandeur pedagogiques doivent etre connus: des les premiers milliamperes le courant devient perceptible; autour de 10 mA le lacher peut devenir difficile; vers 30 mA les troubles respiratoires peuvent apparaitre; plus on approche de 75 a 100 mA avec un passage thoracique, plus le risque de fibrillation devient majeur. Ces reperes ne servent pas a jouer avec la limite, mais a comprendre pourquoi les protections et la rapidite de coupure sont vitales.",
        "La courbe intensite / temps montre qu'une exposition moins intense mais plus longue peut devenir aussi critique qu'un courant plus fort sur un temps tres court. C'est cette logique qui justifie le role des dispositifs de protection, des coupures rapides et du refus de tout contact prolonge ou toute tentative improvisee.",
        "Le milieu modifie fortement le risque. Une peau humide, un sol conducteur, des vetements mouilles, une sueur abondante ou des mains abimees reduisent la resistance du corps et favorisent le passage du courant. C'est pourquoi les locaux humides, les exterieurs et les zones techniques degradees doivent etre traites avec une vigilance renforcee.",
        "Le bon reflexe BS / BE n'est pas seulement d'eviter l'accident. C'est aussi de prendre au serieux tout incident electrique, d'alerter, de faire securiser la zone et de ne jamais minimiser une electrisation meme si elle parait breve.",
      ],
      deepDive: [
        "Les cours trop superficiels parlent d'une simple 'chataigne'. Il faut au contraire faire comprendre l'effet physiologique reel du courant et la raison pour laquelle une manoeuvre apparemment banale peut avoir une consequence grave.",
        "Cette partie prepare aussi la conduite a tenir en cas d'accident: on ne touche pas une victime tant que le risque electrique persiste, on supprime le danger si cela est possible sans s'exposer, puis on alerte et on applique les gestes de secours adaptes.",
      ],
      keyPoints: [
        "Electrisation et electrocution ne designent pas la meme situation.",
        "Intensite, duree, trajet et humidite conditionnent la gravite.",
        "La courbe intensite / temps explique l'importance de la coupure rapide.",
        "Toute electrisation doit etre prise au serieux.",
      ],
      forbiddenPoints: [
        "Minimiser une decharge electrique sous pretexte qu'elle a ete breve.",
        "Toucher une victime sans avoir d'abord elimine ou maitrise le danger electrique.",
      ],
      legalRefs: [
        "NF C 18-510 - prevention du risque electrique et connaissance des dangers pour les operateurs.",
        "INRS - effets du courant electrique sur le corps humain et conduite a tenir apres accident.",
      ],
      practicalCase:
        "Exemple : lors d'un remplacement simple, un operateur ressent une decharge en retirant un accessoire endommage. L'action est interrompue, la zone est securisee, l'evenement est traite comme une electrisation potentielle et non comme un incident anodin.",
      visual: {
        title: "Pourquoi un choc electrique peut etre grave",
        subtitle: "L'intensite, le temps de contact, le trajet et le milieu humide aggravent le risque corporel.",
        items: [
          "Electrisation et brulures internes",
          "Tetanie et impossibilite de lacher",
          "Troubles respiratoires et cardiaques",
          "Milieu humide = risque renforce",
        ],
        tone: "red",
        imagePath: "/elearning/bsbe/bsbe-effets.svg",
        imageAlt:
          "Illustration des effets du courant electrique sur le corps humain avec intensite, duree et trajet du courant",
      },
    },
    {
      id: "protections-zones",
      title: "4. Protection contre les chocs, contact direct, contact indirect et PNST",
      estimatedMinutes: 25,
      intro:
        "Cette partie doit rester normative et concrete: protections contre les chocs, regime TT, dispositif differentiel, classes de materiel, pieces nues sous tension et zones d'environnement.",
      content: [
        "Le contact direct correspond au fait de toucher une partie active normalement sous tension. Le contact indirect correspond au fait de toucher une masse devenue dangereuse apres defaut.",
        "Les mesures de protection contre le contact direct reposent notamment sur l'eloignement, les obstacles, l'isolation, les enveloppes et les capotages. Ces protections ne doivent jamais etre contournees pour des raisons pratiques.",
        "En basse tension, la protection contre le contact indirect fait notamment intervenir l'organisation de l'installation, le regime de neutre, la mise a la terre, les dispositifs differentiels et les classes de materiel.",
        "Le regime TT et les dispositifs differentiels sont des notions utiles a comprendre pour expliquer pourquoi certaines coupures surviennent et pourquoi un defaut d'isolement peut rendre une masse metallique dangereuse.",
        "La PNST, ou piece nue sous tension, reste une notion centrale. L'apprenant doit comprendre que le danger existe avant le contact et que le voisinage d'une piece nue sous tension impose un arret ou des precautions strictes.",
        "Les zones d'environnement electrique structurent ces limites. En basse tension, une regle pedagogique courante consiste a visualiser un voisinage dangereux autour de la piece nue sous tension, notamment autour d'environ 30 cm, sans jamais remplacer les prescriptions du site ou de la norme par une simple approximation.",
        "La notion d'IP2X ou IPXXB doit aussi etre abordee serieusement. Une manoeuvre simple n'est admissible que si l'enveloppe et les protections empechent reellement l'acces involontaire a des parties actives. Un coffret degrade, fendu ou partiellement ouvert fait sortir l'operateur de ce confort apparent.",
        "Les classes de materiel et la logique des dispositifs differentiels ne sont pas la pour faire joli dans un support de cours. Elles expliquent pourquoi un appareil portatif, un tableau de distribution ou un circuit de puissance ne se traitent pas avec le meme niveau de confiance.",
      ],
      deepDive: [
        "Ce chapitre doit permettre de comprendre ce qu'est une PNST, un contact indirect, un DDR ou un capotage, pas seulement de memoriser des slogans de prevention.",
        "Il faut aussi apprendre a l'apprenant que le danger est parfois invisible: un coffret ferme peut proteger, mais un capot retire change completement la situation.",
      ],
      keyPoints: [
        "Contact direct et indirect sont deux risques distincts.",
        "Les protections collectives sont prioritaires.",
        "La PNST et le voisinage doivent etre compris et respectes.",
      ],
      forbiddenPoints: [
        "Contourner un capotage ou une enveloppe.",
        "Se rapprocher d'une piece nue sous tension pour mieux voir.",
      ],
      legalRefs: [
        "NF C 18-510 - zones, voisinage, protections et environnement electrique.",
        "NF C 15-100 - protections en basse tension.",
        "INRS - contact direct, contact indirect et DDR.",
      ],
      practicalCase:
        "Exemple : un operateur doit agir dans un local technique, mais un bornier est visible car un capot manque. Meme si l'action prevue est simple, la situation bascule en environnement degrade et impose l'arret.",
      chapterImagePath: "/elearning/references/zones-conducteur-nu-bt.jpg",
      chapterImageAlt:
        "Schema des zones de voisinage et des limites d'approche autour d'un conducteur nu en basse tension",
      visual: {
        title: "Voir le risque avant le geste",
        subtitle: "Protection, PNST, distance, environnement.",
        items: [
          "Contact direct",
          "Contact indirect",
          "DDR et protections",
          "PNST et voisinage",
        ],
        tone: "amber",
        imagePath: "/elearning/bsbe/bsbe-risque.svg",
        imageAlt:
          "Illustration des protections contre les chocs electriques et des zones de voisinage autour d'une piece nue sous tension",
      },
    },
    {
      id: "lecture-installation",
      title: "5. Lire une installation basse tension et reconnaitre les organes utiles",
      estimatedMinutes: 20,
      intro:
        "Avant toute operation BS ou BE Manoeuvre, il faut savoir ce que l'on regarde: tableau, coffret, disjoncteur, sectionneur, fusible, contacteur, organe de commande ou depart moteur.",
      content: [
        "L'apprenant doit etre capable d'identifier les principaux organes d'une installation basse tension: tableau, coffret, disjoncteur, interrupteur, sectionneur, fusible, bouton d'arret, commande locale, contacteur, relais, bornier et protections terminales.",
        "Il doit aussi savoir distinguer ce qui releve de la commande, de la protection, de la coupure et de l'alimentation d'un equipement.",
        "Cette lecture du materiel est indispensable pour eviter les erreurs de repere, les rearmements sur le mauvais circuit, les actions sur le mauvais organe et les interpretations dangereuses d'une situation apparemment simple.",
        "Le support documentaire d'entreprise, le schema simplifie, le reperage d'un depart, la fiche reflexe ou l'etiquetage local sont des aides essentielles pour agir dans le bon cadre.",
        "Dans un parcours BS / BE credible, on doit aussi apprendre a lire les signaux faibles d'un tableau: depart mal repere, ancien etiquetage, juxtaposition de circuits force et commande, presence d'un inverseur, d'un depart moteur ou d'un appareillage qui n'entre plus dans la logique d'une action simple.",
      ],
      deepDive: [
        "Un parcours trop vague sur ce sujet produit des apprenants qui savent reciter des symboles, mais pas reconnaitre un organe en situation. Or cette lecture du materiel est indispensable pour agir en securite.",
      ],
      keyPoints: [
        "Identifier l'organe avant d'agir.",
        "Ne pas confondre commande, coupure et protection.",
        "Le reperage local est un support de securite.",
      ],
      legalRefs: [
        "NF C 18-510 - adequation entre operation, materiel et procedure.",
        "INRS - importance du reperage et des supports d'execution.",
      ],
      practicalCase:
        "Exemple : un organe porte une etiquette ancienne et le schema local est partiellement modifie. L'operateur n'agit pas tant que le repere n'est pas confirme.",
      chapterImagePath: "/elearning/references/tableau-coffret-bt.jpg",
      chapterImageAlt:
        "Photo d'un tableau et d'un coffret basse tension avec depart et protections reperees",
      visual: {
        title: "Avant d'agir sur un tableau",
        subtitle: "Identifier, reperer, confirmer.",
        items: [
          "Disjoncteur ?",
          "Sectionneur ?",
          "Commande ?",
          "Bon circuit ?",
        ],
        tone: "slate",
        imagePath: "/images/armoire-electrique.jpg",
        imageAlt:
          "Illustration d'un tableau electrique basse tension avec organes de commande et de protection",
      },
    },
    {
      id: "local-electrique-ip-reperage",
      title: "6. Acces aux locaux electriques, indices de protection et reperage fiable",
      estimatedMinutes: 20,
      intro:
        "Avant meme le geste BS ou BE Manoeuvre, l'operateur doit savoir si l'acces au materiel est compatible avec son titre, si l'enveloppe protege reellement contre le contact et si le reperage de terrain est suffisant.",
      content: [
        "Un local a risques particuliers de choc electrique, une armoire ouverte ou un coffret degrade ne se traitent pas comme un appareillage courant dans un environnement sec et protege. L'acces, le voisinage et l'etat de l'enveloppe changent le niveau de risque.",
        "Les notions d'indice de protection IP2X ou IPXXB sont utiles pour comprendre dans quels cas certaines manoeuvres simples peuvent etre realisees en securite sur un materiel intact, et dans quels cas la mise hors tension ou l'arret s'imposent.",
        "Le reperage fiable d'un depart, d'un circuit terminal, d'un bornier en attente ou d'un organe de rearmement est une condition de securite. Un etiquetage partiel, ancien ou incoherent impose une verification complementaire avant tout geste.",
        "Le professionnel BS / BE ne doit pas raisonner uniquement a partir de l'apparence exterieure. Un coffret ferme peut paraitre rassurant, mais si l'indice de protection est degrade ou si le capotage a ete retire, le cadre de securite n'est plus le meme.",
      ],
      deepDive: [
        "Beaucoup d'erreurs terrain viennent d'une confusion entre 'materiel courant' et 'materiel securise'. Or un appareillage simple n'est admissible dans le cadre BS ou BE Manoeuvre que si son etat, son acces et son repere restent compatibles avec la procedure.",
        "Cette lecture du local et de l'enveloppe est aussi ce qui permet de distinguer une action admissible d'une situation qui releve d'un electricien plus qualifie ou d'une remise en conformite prealable.",
      ],
      keyPoints: [
        "Acces au local et etat de l'enveloppe modifient le niveau de risque.",
        "IP2X / IPXXB sont des reperes utiles pour la securite de l'operateur.",
        "Sans reperage fiable, pas d'action.",
      ],
      forbiddenPoints: [
        "Banaliser un coffret ouvert ou degrade.",
        "Confondre accessibilite physique et autorisation d'agir.",
      ],
      legalRefs: [
        "INRS - operations simples non habilitees et conditions de securite de type IP2X / IPXXB.",
        "NF C 18-510 - adequation de l'environnement, du materiel et des protections aux operations confiees.",
      ],
      practicalCase:
        "Exemple : un disjoncteur est situe dans un coffret normalement ferme, mais la facade est fendue et une piece interne devient accessible au doigt. Le geste de rearmement n'est plus banal et l'operateur suspend l'action.",
      chapterImagePath: "/elearning/references/distances-locaux-acces.jpg",
      chapterImageAlt:
        "Schema des distances limites et des zones definies dans les locaux et emplacements d'acces electrique",
      visual: {
        title: "Avant d'acceder au materiel",
        subtitle: "Local, enveloppe, IP, reperage.",
        items: [
          "Local compatible",
          "Enveloppe intacte",
          "Indice de protection suffisant",
          "Reperage confirme",
        ],
        tone: "slate",
      },
    },
    {
      id: "operations-bs",
      title: "7. Operations BS : remplacement simple et raccordement elementaire",
      estimatedMinutes: 25,
      intro:
        "Le coeur de la trame BS est ici: ce qui est autorise, sur quels types de materiels, avec quelles limites, et comment rester dans un cadre simple et documente.",
      content: [
        "Le titulaire BS peut realiser des remplacements simples et des raccordements elementaires en basse tension lorsque l'installation, le circuit et le materiel sont identifies et que la procedure de l'entreprise le permet.",
        "Dans la pratique, il peut s'agir de remplacements de lampe, fusible basse tension, accessoire d'eclairage, socle de prise, interrupteur, convecteur, chauffe-eau, volet ou autre materiel simple, dans la limite du cadre autorise.",
        "Un repere pedagogique souvent retenu dans les programmes BS est celui de materiels simples jusqu'a 400 V et 32 A en courant alternatif. Ce repere aide a comprendre le niveau vise, mais il ne dispense jamais de verifier le materiel reel et la procedure locale.",
        "Le raccordement doit rester elementaire, hors tension, sur un support prevu et identifie. Si l'action impose un diagnostic, une adaptation de cablage, un doute sur le reperage ou une complexite technique, elle sort du cadre BS.",
        "La qualite du raisonnement se voit dans cette capacite a distinguer une operation elementaire d'un depannage improvise.",
        "Les ordres de grandeur souvent cites pour rester dans le perimetre BS concernent un materiel simple, jusqu'a 32 A en courant alternatif, avec des conducteurs de petite section et une procedure stabilisee. Ce ne sont pas des autorisations automatiques, mais des garde-fous pour ne pas depasser le symbole.",
        "Avant remplacement ou raccordement, l'operateur doit pouvoir exposer sa sequence: identifier le bon circuit, mettre hors tension, condamner si l'organisation le demande, verifier l'absence de tension selon la methode retenue, realiser le geste simple, refermer et restituer dans un cadre maitrise.",
      ],
      deepDive: [
        "Le danger frequent est le glissement de mission: l'operateur commence un remplacement simple, constate que cela ne repart pas et bascule vers une recherche de panne. C'est la que l'accident organisationnel se produit.",
      ],
      keyPoints: [
        "BS = remplacements simples et raccordements elementaires.",
        "Le cadre doit rester hors tension, repere et documente.",
        "Le repere 400 V / 32 A aide a comprendre le niveau vise.",
      ],
      forbiddenPoints: [
        "Chercher la panne si le remplacement ne suffit pas.",
        "Modifier un cablage ou improviser une adaptation.",
        "Intervenir sur un circuit non identifie.",
      ],
      legalRefs: [
        "NF C 18-510 - interventions elementaires en basse tension.",
        "INRS - limites d'autorisation BS et prevention du depannage improvise.",
      ],
      practicalCase:
        "Exemple : un luminaire doit etre remplace selon procedure. Si l'equipement neuf ne fonctionne pas et que le support ne permet plus une action elementaire, l'operateur s'arrete et transmet.",
      visual: {
        title: "BS : ce qui est attendu",
        subtitle: "Simple, hors tension, repere, documente.",
        items: [
          "Lampe / fusible / appareillage simple",
          "Raccordement elementaire",
          "Circuit identifie",
          "Stop si le geste se complique",
        ],
        tone: "green",
        imagePath: "/elearning/bsbe/bsbe-operations.svg",
        imageAlt:
          "Illustration pedagogique des gestes autorises et interdits dans le cadre BS",
      },
    },
    {
      id: "operations-be-manoeuvre",
      title: "8. Operations BE Manoeuvre : rearmement, ouverture, fermeture, basculement",
      estimatedMinutes: 25,
      intro:
        "La manoeuvre doit etre enseignee comme un acte d'exploitation encadre, jamais comme un pretexte a depanner ou a investiguer.",
      content: [
        "Le titulaire BE Manoeuvre peut, dans le cadre des consignes du site, ouvrir, fermer, mettre en marche, arreter, basculer ou rearmer un equipement ou un circuit a partir d'un organe identifie et prevu pour cet usage.",
        "Cela peut concerner un disjoncteur de depart repere, un organe de commande, un dispositif de rearmement, un sectionneur de manoeuvre ou un inverseur prevu a cet effet.",
        "La manoeuvre reste une action d'exploitation. Elle ne doit pas devenir une recherche de panne, une ouverture d'enveloppe pour diagnostic ou une tentative repetee de remise en service sans analyse du contexte.",
        "Une instruction de securite ou une procedure de rearmement claire est un prealable indispensable. Sans support fiable, la manoeuvre doit etre suspendue.",
        "Le reenclenchement repete est l'une des erreurs les plus classiques. Il faut au contraire savoir reconnaitre qu'une anomalie persistante impose l'arret et la transmission.",
        "Une formation BE Manoeuvre serieuse doit aussi expliquer qu'un organe prevu pour la manoeuvre n'autorise pas n'importe quelle initiative. La manoeuvre est admissible parce qu'elle est encadree par la procedure, par l'identification de l'organe et par un environnement normal. Si l'enveloppe est ouverte, si le repere est douteux ou si l'installation presente une anomalie, on n'est deja plus dans la bonne situation.",
        "Le dialogue avec l'encadrement, l'exploitant ou le charge de consignation fait partie de la manoeuvre d'exploitation. Le titulaire BE Manoeuvre ne manoeuvre pas contre l'organisation du site, il agit dans cette organisation.",
      ],
      deepDive: [
        "Un operateur fiable sait rearmer quand c'est legitime, mais surtout sait ne pas rearmer quand le contexte ne le permet plus. C'est cette maturite qui differencie une formation utile d'un simple support theorique.",
      ],
      keyPoints: [
        "BE Manoeuvre = organe prevu, procedure connue, contexte verifie.",
        "Pas de depannage.",
        "Pas de reenclenchement en boucle.",
      ],
      forbiddenPoints: [
        "Ouvrir un coffret pour comprendre la cause.",
        "Reenclencher plusieurs fois sans analyse.",
        "Contourner un verrouillage ou une interdiction.",
      ],
      legalRefs: [
        "NF C 18-510 - manoeuvres d'exploitation et limites d'autorisation.",
        "INRS - distinction entre manoeuvre et depannage.",
      ],
      practicalCase:
        "Exemple : un disjoncteur de depart a saute. L'operateur constate une odeur de chaud et un bruit anormal. Il n'effectue pas de rearmement et fait traiter la situation par une personne competente.",
      visual: {
        title: "BE Manoeuvre : la bonne sequence",
        subtitle: "Identifier, verifier, manoeuvrer, surveiller.",
        items: [
          "Organe prevu",
          "Contexte sain",
          "Procedure connue",
          "Arret si anomalie",
        ],
        tone: "blue",
        imagePath: "/elearning/bsbe/bsbe-operations.svg",
        imageAlt:
          "Illustration de la logique de manoeuvre d'exploitation et de la reaction attendue en cas d'anomalie",
      },
    },
    {
      id: "mise-securite-documents",
      title: "9. Mise en securite, consignation, deconsignation et documents",
      estimatedMinutes: 20,
      intro:
        "La trame terrain parle toujours de mise en securite de circuit, de consignation et de deconsignation. Le but ici est de faire comprendre le role de ces notions sans sortir du cadre BS / BE.",
      content: [
        "Le titulaire BS ou BE Manoeuvre doit comprendre la logique de mise en securite d'un circuit et la place de la consignation dans l'organisation electrique de l'entreprise.",
        "Il ne s'agit pas de former un charge de consignation BC, mais de savoir reconnaitre qu'une action simple s'inscrit dans une organisation plus large de separation, condamnation, identification et verification.",
        "Les roles des differents intervenants doivent etre compris: employeur, encadrement, operateur habilite, personne competente, eventuel charge de consignation, eventuel charge de travaux ou intervenant.",
        "Les documents ont une vraie valeur operationnelle: procedure de remplacement de fusible, procedure de raccordement hors tension, instruction de rearmement, schema simplifie, reperage local, fiche reflexe et consigne de site.",
        "La deconsignation et la remise en service ne sont jamais improvisees. Elles s'inscrivent dans une logique de coordination, de traçabilite et de verification du cadre de securite.",
        "La verification d'absence de tension doit etre traitee comme un vrai chapitre de competence. Elle ne peut pas etre presumee parce qu'un disjoncteur est baisse ou parce qu'un voyant est eteint. La methode doit etre connue, reproductible et adaptee au materiel retenu par l'entreprise.",
        "Les guides les plus serieux insistent aussi sur un point simple: le controle du dispositif avant et apres verification fait partie de la fiabilite du geste. La VAT n'est pas un detail pedagogique, c'est l'un des moments ou l'on transforme une coupure supposee en etat electrique verifie.",
      ],
      deepDive: [
        "Il faut former non seulement un geste, mais aussi une culture documentaire et organisationnelle. C'est cette coherence qui permet ensuite a l'employeur de delivrer un titre adapte au poste.",
      ],
      keyPoints: [
        "Comprendre la mise en securite d'un circuit.",
        "Connaitre la place de la consignation sans se l'approprier hors cadre.",
        "S'appuyer sur des procedures ecrites et coherentes.",
      ],
      forbiddenPoints: [
        "Assimiler BS / BE a BC.",
        "Agir sans document ou avec un support incoherent.",
      ],
      legalRefs: [
        "Code du travail - organisation de la prevention et adequation des consignes.",
        "NF C 18-510 - mise en securite, consignation, roles et documentation.",
      ],
      resourceVideos: [
        {
          title: "Webinaire INRS - Comment choisir les habilitations electriques ?",
          description:
            "Ressource officielle utile pour replacer la consignation, la VAT, les roles et les limites des symboles dans une logique de terrain.",
          url: "https://www.inrs.fr/media.html?refINRS=Anim-184",
          provider: "INRS",
          ctaLabel: "Voir le webinaire INRS",
        },
      ],
      practicalCase:
        "Exemple : la procedure de rearmement d'un depart ne correspond plus au reperage du tableau apres modification. L'operateur suspend l'action et demande une remise en coherence documentaire avant reprise.",
      chapterImagePath: "/elearning/references/consignation-vat.jpg",
      chapterImageAlt:
        "Illustration d'une verification d'absence de tension et d'un balisage avant intervention",
      visual: {
        title: "La securite est aussi documentaire",
        subtitle: "Procedure, reperage, role, traçabilite.",
        items: [
          "Procedure ecrite",
          "Reperage fiable",
          "Role de chacun",
          "Mise en securite",
        ],
        tone: "slate",
        imagePath: "/elearning/bsbe/bsbe-vat.svg",
        imageAlt:
          "Illustration de la signalisation, des consignes et des documents necessaires aux operations BS et BE Manoeuvre",
      },
    },
    {
      id: "limites-bsbe",
      title: "10. Savoir dire non : limites BS / BE Manoeuvre et bascule vers BR ou travaux",
      estimatedMinutes: 20,
      intro:
        "Une formation serieuse ne se limite pas a dire ce que BS et BE Manoeuvre autorisent. Elle doit surtout apprendre a reconnaitre les cas qui sortent du cadre et imposent un arret, une requalification ou l'appel a un autre niveau d'habilitation.",
      content: [
        "Le BS ne couvre ni la recherche de panne, ni la modification de schema, ni l'adaptation de cablage, ni l'exploration d'un dysfonctionnement dont la cause n'est pas clairement identifiee.",
        "Le BE Manoeuvre n'autorise pas l'ouverture d'une enveloppe pour diagnostiquer, l'essai improvise d'un materiel, ni la repetition de manoeuvres sur une installation anormale pour tenter de 'faire repartir'.",
        "Des circuits multiples, un voisinage non maitrise, une documentation absente, un depart non reperable, un besoin de mesure ou de depannage, une intervention sur un circuit de puissance ou une modification de borne sont autant de signaux de sortie du cadre BS / BE.",
        "Le vrai professionnalisme ne consiste pas a faire seul tout ce que l'on pense savoir faire. Il consiste a reconnaitre le moment exact ou l'action releve plutot d'un BR, d'un B1/B2 ou d'une intervention organisee autrement.",
      ],
      deepDive: [
        "C'est souvent sur ces cas limites que se joue la qualite de la formation. Un apprenant doit sortir du module en sachant refuser un geste techniquement tentant mais organisationnellement dangereux.",
        "Cette capacite a s'arreter fait partie des acquis attendus: on n'habilite pas seulement quelqu'un qui sait faire, mais quelqu'un qui sait quand ne pas faire.",
      ],
      keyPoints: [
        "BS / BE Manoeuvre ont des limites strictes.",
        "Le doute, la panne ou la complexite imposent une requalification.",
        "Refuser une action hors cadre est un comportement professionnel.",
      ],
      forbiddenPoints: [
        "Glisser d'un remplacement simple vers un depannage.",
        "Multiplier les rearmements pour maintenir la production.",
      ],
      legalRefs: [
        "INRS - distinction entre BS, BE Manoeuvre, BR et operations non habilitees.",
        "NF C 18-510 - limites des interventions elementaires et des manoeuvres d'exploitation.",
      ],
      practicalCase:
        "Exemple : apres remplacement d'un fusible, le circuit retombe immediatement. L'operateur n'entame pas une recherche de defaut et fait remonter la situation pour requalification.",
      visual: {
        title: "Le bon niveau d'arret",
        subtitle: "Si la situation se complique, le cadre change.",
        items: [
          "Panne non identifiee",
          "Schema incertain",
          "Voisinage degrade",
          "Requalification necessaire",
        ],
        tone: "red",
        imagePath: "/elearning/bsbe/bsbe-limites.svg",
      },
    },
    {
      id: "epi-epc-environnement",
      title: "11. EPI, EPC, environnement de travail et prealables a respecter",
      estimatedMinutes: 20,
      intro:
        "La prevention ne se limite pas au bon geste. Elle repose aussi sur l'environnement, les protections et l'etat du materiel.",
      content: [
        "Les equipements de protection collective doivent etre privilegies: enveloppes, capotages, ecrans, obstacles, balisage, verrouillages et organisation de la zone.",
        "Les equipements de protection individuelle viennent en complement et ne rendent jamais licite une operation interdite ou mal preparee.",
        "Avant toute action, il faut verifier l'etat apparent du materiel, des cables, des appareillages, des outils, du local, de l'humidite, de l'accessibilite et de l'absence d'anomalie visible.",
        "Un capot retire, une odeur de chaud, une trace de charbonnage, un sol humide, un cable deteriore, un coffret non referme ou une zone encombrée changent totalement le niveau de risque.",
        "Les EPI a presenter dans un parcours BS / BE ne doivent pas etre cites de facon decorative. Gants isolants, protection du visage, outillage adapte, tapis ou ecrans n'ont de sens que si l'apprenant comprend dans quelle situation ils interviennent et surtout pourquoi ils ne remplacent jamais le cadre de securite initial.",
        "Le contexte de travail doit etre lu avec le meme serieux que le materiel lui-meme: local humide, acces encombre, coactivite, maintenance en cours, coffret provisoire ou deteriorations visibles font partie de l'analyse de risque avant action.",
      ],
      deepDive: [
        "C'est un point sur lequel les parcours trop faibles se trompent souvent: ils decrivent les EPI, mais n'expliquent pas assez la hierarchie des protections ni la lecture du contexte de travail.",
      ],
      keyPoints: [
        "Protection collective d'abord.",
        "EPI en complement.",
        "Contexte et etat du materiel avant toute action.",
      ],
      forbiddenPoints: [
        "Compter sur l'EPI pour justifier une action interdite.",
        "Ignorer une zone degradee ou humide.",
      ],
      legalRefs: [
        "Code du travail - protection collective et individuelle.",
        "NF C 18-510 - adequation des moyens de prevention et du contexte de travail.",
      ],
      practicalCase:
        "Exemple : une manoeuvre simple est demandee dans un local ou le sol est humide et le coffret partiellement abime. L'operateur ne commence pas et fait traiter le risque environnemental.",
      visual: {
        title: "Verifier le contexte",
        subtitle: "Materiel, zone, protections, environnement.",
        items: [
          "EPC presents",
          "EPI adaptes",
          "Aucune anomalie visible",
          "Zone compatible avec l'action",
        ],
        tone: "amber",
        imagePath: "/elearning/bsbe/bsbe-risque.svg",
        imageAlt:
          "Illustration des equipements de protection et des verifications d'environnement avant action",
      },
    },
    {
      id: "incendie-urgence",
      title: "12. Incident, incendie electrique et premiers secours",
      estimatedMinutes: 20,
      intro:
        "La trame BS / BE doit aussi entrainer a la bonne reaction en cas d'anomalie, de debut d'incendie ou d'accident electrique.",
      content: [
        "En cas d'incident electrique, l'operateur doit arreter l'action, se proteger, mettre a distance si besoin et alerter. Il n'improvise ni depannage ni verification interne.",
        "En cas d'incendie dans un environnement electrique, il faut appliquer les consignes du site, comprendre qu'un feu d'origine electrique peut rester dangereux meme sans flamme visible et ne jamais agir en se mettant soi-meme en risque.",
        "En cas d'electrisation, la priorite absolue est de supprimer ou faire supprimer le danger electrique avant toute tentative de secours. On ne touche jamais une victime tant que l'exposition persiste.",
        "Les notions de premiers secours sont ici traitees sous l'angle du risque electrique: eviter le suraccident, transmettre les bonnes informations et ne pas aggraver la situation par precipitation.",
        "Le parcours doit egalement preparer a la conduite a tenir en cas de fumee, d'odeur de chaud, de bruits anormaux, de disjoncteur qui retombe ou de materiel qui ne correspond plus a son etat nominal. Dans tous ces cas, le bon reflexe n'est pas de demonter, mais de figer la situation et de transmettre une information exploitable.",
      ],
      deepDive: [
        "Il faut retenir une logique de professionnalisme: pas une attitude heroique, mais une reaction stable, methodique et compatible avec l'organisation du site.",
      ],
      keyPoints: [
        "Stopper, proteger, alerter.",
        "Ne jamais devenir la seconde victime.",
        "Le risque electrique persiste parfois apres l'incident visible.",
      ],
      forbiddenPoints: [
        "Toucher directement une victime encore exposee.",
        "Ouvrir un coffret qui fume pour 'voir'.",
      ],
      legalRefs: [
        "Code du travail - organisation des secours et prevention du suraccident.",
        "INRS - conduite a tenir face a un accident d'origine electrique.",
      ],
      practicalCase:
        "Exemple : un coffret de commande degage de la fumee pendant une manoeuvre. L'operateur se met en securite, protege la zone et alerte sans chercher a demonter ou a rearmer.",
      visual: {
        title: "La bonne reaction",
        subtitle: "Stop - proteger - alerter - secourir sans suraccident.",
        items: [
          "Incident",
          "Incendie",
          "Electrisation",
          "Premier secours",
        ],
        tone: "red",
        imagePath: "/elearning/bsbe/bsbe-urgence.svg",
        imageAlt:
          "Illustration de la conduite a tenir en cas d'incident, d'incendie electrique ou d'accident pour BS et BE Manoeuvre",
      },
    },
    {
      id: "synthese-validation",
      title: "13. Synthese operationnelle",
      estimatedMinutes: 20,
      intro:
        "La fin du parcours doit fixer les reflexes utiles avant la classe virtuelle, la session groupe ou la visio de recyclage.",
      content: [
        "Un titulaire BS ou BE Manoeuvre agit seulement sur un materiel identifie, dans un environnement conforme, selon une procedure claire et a l'interieur d'un cadre d'autorisation explicite.",
        "Le BS couvre les remplacements simples et raccordements elementaires. Le BE Manoeuvre couvre les manoeuvres d'exploitation. Aucun des deux ne doit glisser vers le depannage, la modification ou la recherche de panne.",
        "Le vrai niveau professionnel se voit dans la capacite a preparer, verifier, agir si autorise, puis s'arreter et transmettre des qu'une condition manque.",
        "La sequence d'application encadree permet ensuite de retravailler les cas limites, les situations metier reelles, les erreurs de reperage et les rearmements a tort.",
      ],
      deepDive: [
        "L'articulation entre theorie, quiz, mise en situation et evaluation finale permet de consolider les reflexes attendus avant la delivrance eventuelle d'un titre d'habilitation par l'employeur.",
      ],
      keyPoints: [
        "Identifier.",
        "Verifier.",
        "Agir si autorise.",
        "Stopper et transmettre si doute.",
      ],
      legalRefs: [
        "Code du travail - adequation entre poste, competences et risques.",
        "NF C 18-510 - cadre des interventions elementaires et manoeuvres.",
        "INRS - maintien des reflexes de prevention.",
      ],
      practicalCase:
        "Exemple : un operateur sait techniquement rearmer un depart, mais la zone est encombre et le repere local est douteux. La bonne competence consiste a ne pas agir tant que le cadre n'est pas redevenu clair.",
      visual: {
        title: "Les 4 reflexes a retenir",
        subtitle: "Identifier - verifier - agir ou stopper.",
        items: [
          "Materiel repere",
          "Procedure claire",
          "Contexte conforme",
          "Transmission si doute",
        ],
        tone: "green",
        imagePath: "/elearning/bsbe/bsbe-cadre.svg",
        imageAlt:
          "Illustration de synthese des reflexes de decision pour le parcours BS et BE Manoeuvre",
      },
    },
  ],
};
