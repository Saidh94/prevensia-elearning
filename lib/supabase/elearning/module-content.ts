import { b1b2brbcModuleContent } from "./b1b2brbc-content";
import { bsbeModuleContent } from "./bsbe-content";
import { ModuleContent } from "./module-types";
import { electricalCommercialModuleContent } from "./electrical-commercial-content";
import { vehiculesModuleContent } from "./vehicules-content";

export const modulesContent: Record<string, ModuleContent> = {
  ...electricalCommercialModuleContent,
  bsbe: bsbeModuleContent,
  b1b2brbc: b1b2brbcModuleContent,
  "habilitation-vehicules": vehiculesModuleContent,
  h0b0: {
  title: "H0B0 - Exécuter en sécurité des travaux d’ordre non électrique",
  shortTitle: "H0B0",
  subtitle:
    "Parcours e-learning de sensibilisation au risque électrique destiné aux personnels non électriciens amenés à évoluer dans un environnement comportant des installations électriques.",
  duration: "1 h 20 à 1 h 45",
  level: "Débutant",
  objective:
    "Comprendre le cadre du H0B0, distinguer les domaines de tension, reconnaître les situations dangereuses, identifier les effets du courant électrique, respecter les zones d’environnement et les limites d’approche, adopter les bons comportements et connaître la conduite à tenir en cas d’anomalie ou d’accident.",
  audience:
    "Personnel non électricien amené à circuler, nettoyer, manutentionner, peindre, intervenir en maintenance non électrique, logistique, production ou travaux généraux à proximité d’installations électriques.",
  certificationNote:
    "Ce parcours constitue une base théorique. La délivrance de l’habilitation relève de l’employeur après formation adaptée, vérification des acquis et prise en compte de l’activité réelle. La partie pratique et l’échange avec formateur restent indispensables.",
  heroBadge: "Habilitation électrique",
  finalMessage:
    "Le parcours H0B0 a pour finalité de faire reconnaître le risque, respecter strictement son périmètre, ne jamais improviser et alerter correctement. La validation passe ensuite par le quiz puis, selon l’organisation retenue, par la mise en situation et l’évaluation pratique.",
  quizCtaLabel: "Passer au quiz H0B0",
  sections: [
    {
      id: "intro",
      title: "1. Cadre du H0B0 et logique de l’habilitation",
      intro:
        "Le H0B0 n’est pas une habilitation d’électricien. Il concerne des opérations d’ordre non électrique réalisées dans un environnement où existe un risque électrique.",
      content: [
        "L’habilitation électrique est une reconnaissance formalisée par l’employeur de la capacité d’un salarié à accomplir en sécurité les tâches qui lui sont confiées dans un environnement présentant un risque électrique.",
        "Le symbole H0B0 vise les opérations d’ordre non électrique. Il ne permet ni travaux électriques, ni consignation, ni intervention électrique, ni mesurage, ni ouverture d’une enveloppe pour agir sur une installation.",
        "La formation préalable constitue un prérequis indispensable, mais elle ne vaut pas habilitation. L’employeur doit s’assurer que le travailleur a reçu une formation théorique et pratique adaptée.",
        "La logique de prévention repose sur la reconnaissance du danger, le respect strict des limites, l’interdiction d’improviser et l’alerte en cas d’anomalie."
      ],
      deepDive: [
        "Le H0B0 s’inscrit dans la logique générale du Code du travail et de la NF C 18-510 : une personne non électricienne peut être exposée à un risque électrique sans pour autant être autorisée à agir sur l’installation.",
        "La délivrance de l’habilitation ne repose pas uniquement sur la formation suivie. Elle dépend aussi du poste, des tâches réellement confiées, de l’environnement de travail et de l’évaluation réalisée par l’employeur.",
        "Le bon niveau H0B0 consiste à savoir reconnaître le risque, respecter son périmètre et refuser toute dérive vers une opération électrique."
      ],
      keyPoints: [
        "H0B0 = opérations d’ordre non électrique uniquement.",
        "La formation ne vaut pas habilitation à elle seule.",
        "L’employeur délivre l’habilitation.",
        "Le salarié doit rester strictement dans son périmètre."
      ],
      forbiddenPoints: [
        "Intervenir sur une installation ou un équipement électrique.",
        "Ouvrir une armoire, un coffret ou un capot pour agir sur un organe électrique.",
        "Consigner, mesurer ou dépanner.",
        "Interpréter son habilitation au-delà de ce qu’elle autorise."
      ],
      legalRefs: [
        "Code du travail : les opérations sur les installations électriques ou dans leur voisinage doivent être confiées à des travailleurs habilités lorsque cela est requis.",
        "NF C 18-510 : l’habilitation doit être adaptée aux opérations confiées et à l’environnement.",
        "INRS : la formation et le maintien des compétences participent à la prévention du risque électrique."
      ],
      practicalCase:
        "Exemple : un agent logistique doit déplacer des palettes à proximité d’un tableau électrique fermé. Il peut réaliser son travail s’il reste dans le cadre prévu, respecte les dégagements et n’agit jamais sur le matériel électrique.",
     visual: {
  title: "Périmètre du H0B0",
  subtitle: "Être autorisé à évoluer dans l’environnement ne signifie pas être autorisé à agir sur l’installation.",
  items: [
    "Personnel non électricien",
    "Travaux d’ordre non électrique",
    "Présence possible à proximité d’installations",
    "Interdiction d’intervention électrique"
  ],
  tone: "blue",
  illustrationKey: "habilitation-scope",
  imagePath: "/elearning/h0b0/roles-responsabilites.png",
  imageAlt: "Illustration du périmètre H0B0 et des limites d’intervention"
}
    },
    {
      id: "symbols",
      title: "2. Symboles d’habilitation électrique",
      intro:
        "Les symboles d’habilitation traduisent le domaine de tension, la nature des opérations et certaines conditions particulières de voisinage.",
      content: [
        "La lettre B renvoie à la basse tension et la lettre H à la haute tension.",
        "Le chiffre 0 désigne les opérations d’ordre non électrique.",
        "Les symboles B0, H0 et H0V concernent uniquement des opérations d’ordre non électrique dans un environnement électrique.",
        "Le titulaire doit toujours raisonner à partir de son symbole réel et ne jamais l’interpréter au-delà de son périmètre."
      ],
      deepDive: [
        "Le symbole n’est pas un simple code administratif. Il détermine ce que la personne peut faire, dans quel environnement et avec quelles limites.",
        "Le H0V concerne des situations de voisinage en haute tension dans un cadre très précis. Cela ne transforme pas le titulaire en exécutant de travaux électriques.",
        "Le bon réflexe est de toujours raisonner depuis le symbole effectivement attribué, et non depuis une habitude de terrain ou une facilité apparente."
      ],
      keyPoints: [
        "B = basse tension.",
        "H = haute tension.",
        "0 = opérations d’ordre non électrique.",
        "Il n’existe pas de symbole B0V."
      ],
      forbiddenPoints: [
        "Supposer qu’un symbole permet plus que ce qu’il indique.",
        "Confondre présence à proximité et droit d’intervention.",
        "Se croire autorisé à ouvrir ou manœuvrer un équipement par simple habitude."
      ],
      legalRefs: [
        "NF C 18-510 : les symboles traduisent le domaine de tension, la nature de l’opération et les conditions associées.",
        "INRS : B0, H0 et H0V concernent les opérations d’ordre non électrique."
      ],
      practicalCase:
        "Exemple : un salarié H0B0 travaille dans un bâtiment comportant des armoires BT. Il peut évoluer dans l’environnement prévu mais ne peut ni ouvrir l’armoire ni agir sur un organe électrique, même si l’action lui paraît simple.",
      visual: {
  title: "Lecture des symboles",
  subtitle: "Comprendre ce que le titre autorise réellement.",
  items: [
    "B = basse tension",
    "H = haute tension",
    "0 = ordre non électrique",
    "H0V = voisinage en HT selon le cadre prévu"
  ],
  tone: "slate",
  imagePath: "/elearning/h0b0/symboles-habilitation.png",
  imageAlt: "Illustration pédagogique des symboles d’habilitation électrique"
}
    },
    {
      id: "roles",
      title: "3. Rôles et responsabilités",
      intro:
        "L’employeur, le salarié, le formateur et l’encadrement ont chacun un rôle précis dans la prévention du risque électrique.",
      content: [
        "L’employeur organise la prévention, définit les tâches confiées, vérifie l’adéquation entre le poste et le niveau d’habilitation, puis délivre l’habilitation.",
        "Le salarié habilité respecte les prescriptions de sécurité, les limites de son titre, les accès autorisés et les consignes internes du site.",
        "Le formateur transmet les connaissances théoriques et pratiques nécessaires à la sécurité, mais ne délivre pas lui-même l’habilitation.",
        "Une mauvaise coordination ou une confusion sur les rôles peut conduire à un accident.",
        "Le surveillant de sécurité électrique est une figure clé souvent méconnue des non-électriciens. Désigné par le chargé de travaux ou le chargé d'exploitation, il surveille en permanence les personnes non habilitées évoluant dans une zone à risque électrique. Il peut intervenir immédiatement en cas de dérive et fait le lien entre l'opérateur et l'organisation de prévention. Sa présence est une exigence réglementaire dès lors qu'un non-habilité doit opérer au voisinage de pièces nues sous tension."
      ],
      deepDive: [
        "L’employeur doit tenir compte du poste réel, de la nature des tâches, des locaux accessibles, des risques particuliers du site et du retour d’expérience.",
        "Le salarié a une responsabilité personnelle de respect des consignes et de signalement. L’habitude, la pression d’exploitation ou l’urgence supposée ne suppriment jamais cette responsabilité.",
        "Le management de proximité joue un rôle déterminant : il doit éviter les consignes ambiguës et les glissements de tâche."
      ],
      keyPoints: [
        "L’employeur habilite.",
        "Le formateur forme.",
        "Le salarié respecte strictement son périmètre.",
        "La coordination fait partie de la prévention.",
        "Le surveillant de sécurité électrique protège les non-habilités en zone à risque."
      ],
      forbiddenPoints: [
        "Donner oralement une consigne floue sur une action électrique.",
        "Laisser un salarié sortir de son cadre d’habilitation.",
        "Poursuivre une tâche alors que le cadre n’est pas clair."
      ],
      legalRefs: [
        "Code du travail : l’employeur doit s’assurer de la capacité du travailleur à exécuter la tâche en sécurité.",
        "NF C 18-510 : la formation théorique et pratique doit être adaptée aux opérations confiées."
      ],
      practicalCase:
        "Exemple : un chef d’équipe demande à un agent H0B0 de réarmer un appareil dans une armoire pour relancer une machine. L’agent doit refuser, car cette action sort de son périmètre."
      ,
     visual: {
  title: "Répartition des responsabilités",
  subtitle: "Savoir qui fait quoi pour éviter les dérives.",
  items: [
    "Employeur",
    "Salarié habilité",
    "Formateur",
    "Encadrement / organisation"
  ],
  tone: "blue",
  imagePath: "/elearning/h0b0/roles-responsabilites.png",
  imageAlt: "Illustration des rôles et responsabilités en habilitation électrique"
}
    },
    {
      id: "voltage-domains",
      title: "4. Domaines de tension en BT et HT",
      intro:
        "La distinction entre BT et HT structure l’analyse du risque et conditionne les distances, les accès et les mesures de prévention.",
      content: [
        "Les installations électriques sont classées selon leur domaine de tension. En courant alternatif, la très basse tension est au plus égale à 50 V, la basse tension est supérieure à 50 V et au plus égale à 1 000 V, et la haute tension est au-delà de 1 000 V. En courant continu, la très basse tension est au plus égale à 120 V, la basse tension est supérieure à 120 V et au plus égale à 1 500 V, et la haute tension au-delà.",
        "La basse tension correspond à la majorité des installations usuelles des bâtiments, ateliers, bureaux, équipements et machines. La haute tension concerne notamment certains postes, cellules et environnements techniques de distribution.",
        "Même en basse tension, le danger peut être grave ou mortel. En haute tension, le risque d’amorçage et d’arc électrique à distance renforce encore les exigences de sécurité.",
        "Le titulaire H0B0 n’a pas à manipuler ces installations, mais doit savoir identifier l’environnement électrique dans lequel il évolue et respecter strictement les règles associées."
      ],
      deepDive: [
        "La BT est omniprésente dans les locaux courants : tableaux, prises, armoires de commande, machines, locaux techniques, installations provisoires.",
        "La HT concerne des environnements plus spécialisés mais plus dangereux, notamment du fait du risque d’arc et d’amorçage sans contact direct.",
        "Le fait qu’une installation soit familière visuellement ne réduit jamais son niveau de danger."
      ],
      keyPoints: [
        "BT et HT correspondent à des domaines distincts.",
        "BT ne veut pas dire sans danger.",
        "HT impose des précautions renforcées.",
        "Le H0B0 n’autorise aucune intervention électrique."
      ],
      forbiddenPoints: [
        "Assimiler basse tension à faible risque.",
        "Entrer en zone technique HT sans cadre autorisé.",
        "Banaliser une armoire ou un tableau sous prétexte qu’il est courant."
      ],
      legalRefs: [
        "NF C 18-510 : distinction des domaines de tension et conséquences sur les zones de voisinage.",
        "NF C 15-100 : référentiel des installations basse tension."
      ],
      practicalCase:
        "Exemple : un agent de nettoyage intervient dans un local tertiaire comportant un tableau BT fermé. Le danger existe toujours. Il doit respecter les dégagements, éviter toute action sur le tableau et signaler toute anomalie visible."
      ,
      visual: {
  title: "Lecture simple des domaines de tension",
  subtitle: "Identifier l’environnement avant toute présence ou travaux non électriques.",
          items: [
    "BT : installations courantes",
    "HT : postes et environnements techniques spécifiques",
    "Les deux domaines sont dangereux",
    "Le H0B0 n’autorise pas l’intervention électrique"
  ],
  tone: "slate",
  imagePath: "/elearning/h0b0/domaines-tension.png",
  imageAlt: "Illustration pédagogique des domaines de tension BT et HT"
}
    },
    {
      id: "zones",
      title: "5. Zones d’environnement électrique et distances d’approche",
      intro:
        "Les zones d’environnement électrique et les distances d’approche servent à prévenir le risque avant même le contact avec l’installation.",
   content: [
  "La norme NF C 18-510 organise le risque autour de zones d’environnement électrique définies par des distances de sécurité autour des pièces nues sous tension. Ces distances permettent de prévenir le risque de contact direct mais également, en haute tension, le risque d’amorçage électrique à distance.",

  "Plusieurs distances normatives structurent ces zones : la DLI (Distance Limite d’Investigation), la DLVS (Distance Limite de Voisinage Simple) et la DLVR (Distance Limite de Voisinage Renforcé). Ces distances ne sont pas arbitraires : elles dépendent du domaine de tension et des conditions d’exploitation.",

  "La DLI correspond à la limite à partir de laquelle une opération sur l’installation électrique devient possible uniquement par du personnel habilité pour des opérations d’ordre électrique. La DLVS matérialise la zone de voisinage simple, dans laquelle le risque devient significatif. La DLVR correspond à une zone de danger renforcé, notamment en haute tension, où le risque d’arc électrique est présent.",

  "En basse tension, la distance de voisinage simple est communément de l’ordre de 30 cm autour des pièces nues sous tension. En haute tension, les distances sont nettement plus importantes et doivent impérativement être respectées, même sans contact avec l’installation.",

  "Ces zones peuvent être matérialisées par un balisage, une signalisation, des obstacles physiques, des capotages, des enveloppes fermées ou des règles d’accès à des locaux électriques. L’absence de protection visible ne signifie jamais absence de danger.",

  "Une armoire ouverte, un coffret sans protection, un jeu de barres accessible ou une cellule technique non sécurisée créent immédiatement une situation de voisinage à risque, même en l’absence d’intervention directe sur l’installation.",

  "Dans le cadre des habilitations H0B0 et H0V, ces distances prennent une importance particulière. Le H0B0 concerne des opérations d’ordre non électrique réalisées hors voisinage dangereux, tandis que le H0V concerne des opérations d’ordre non électrique réalisées au voisinage d’installations, notamment en haute tension.",

  "Le H0V implique donc une vigilance renforcée : le danger peut exister sans contact, notamment en raison du risque d’amorçage électrique. Le respect strict des distances (DLVS, DLVR), du balisage et des consignes constitue une obligation absolue.",

  "Le titulaire H0B0 ou H0V ne doit jamais chercher à apprécier 'à vue' une distance de sécurité ni à s’approcher d’un équipement sous tension sans cadre défini. En cas de doute sur une limite, la règle est systématique : arrêt immédiat de l’action, mise en sécurité et alerte.",

  "Le schéma associé illustre de manière pédagogique les distances de sécurité autour d’une installation électrique. Il permet de visualiser la notion de voisinage. Cette représentation reste simplifiée : les distances réelles dépendent du domaine de tension et des prescriptions de la norme NF C 18-510.",

  "Le titulaire H0B0 ou H0V doit être capable d’identifier ces situations, de reconnaître les limites de sécurité, de ne jamais les franchir et d’alerter immédiatement en cas de protection manquante, de balisage absent ou de situation anormale."
],

      deepDive: [
        "Les distances ne sont pas de simples recommandations de confort. Elles participent directement à la prévention du risque électrique.",
        "Un obstacle, un écran, une enveloppe ou un balisage ont précisément pour fonction d’empêcher le franchissement d’une zone dangereuse.",
        "L’absence de repère clair doit conduire à un arrêt immédiat de l’action."
      ],
      keyPoints: [
        "Les distances structurent la prévention.",
        "La consignation et le travail hors tension restent à privilégier quand ils relèvent des opérations autorisées.",
        "DMA BT = 0,30 m — ne jamais franchir cette limite.",
        "DLI BT = 50 m — zone d'investigation.",
        "DLAP = 0,50 m pour les canalisations enterrées.",
        "Grillage avertisseur rouge = réseau électrique enterré.",
        "En HT, les distances sont nettement plus importantes."
      ],
      forbiddenPoints: [
        "Franchir une limite de balisage.",
        "S’approcher pour regarder de plus près une partie nue sous tension.",
        "Contourner une protection ou un écran."
      ],
      legalRefs: [
        "NF C 18-510 : zones d’environnement et distances d’approche.",
        "INRS : la proximité d’éléments nus sous tension constitue déjà une situation dangereuse."
      ],
      practicalCase:
        "Exemple : lors d’une opération de manutention, une armoire reste ouverte et rend visibles des parties actives. L’opérateur H0B0 doit s’arrêter, ne pas poursuivre l’action à proximité immédiate et signaler l’écart."
      ,
     visual: {
  title: "Zones et distances de sécurité",
  subtitle: "Le danger commence avant le contact.",
  items: [
    "Zone renforcée BT = 30 cm (interdit sans habilitation)",
    "Zone voisinage simple BT = 3 m",
    "Respect strict des distances normatives",
    "Arrêt immédiat et alerte en cas de doute"
  ],
  tone: "amber",
  animationKey: "zones-voisinage-bt" as const,
}
    },
    {
      id: "access",
      title: "6. Accès aux locaux et zones électriques",
      intro:
        "L’accès à un local ou à une zone électrique n’est jamais banal et suppose le respect strict des restrictions et de la signalisation.",
      content: [
        "Un local électrique peut comporter des pièces nues sous tension ou des configurations dangereuses, même sans intervention prévue.",
        "Un titulaire H0B0 ne doit ni entrer dans un local réservé aux électriciens sans cadre clair, ni ouvrir un capot, ni manipuler une armoire ou un coffret.",
        "Une porte ouverte, un capot absent ou une protection détériorée constituent déjà une anomalie.",
        "Le bon comportement consiste à s’arrêter, ne pas s’exposer et signaler immédiatement."
      ],
      deepDive: [
        "Un local technique ou électrique ne devient pas anodin parce qu’il est proche d’une zone de travail courante.",
        "La signalisation, les consignes d’accès, l’état des portes et des enveloppes doivent être intégrés dans l’analyse visuelle préalable.",
        "L’absence de danger apparent ne vaut jamais autorisation implicite."
      ],
      keyPoints: [
        "Un local électrique n’est jamais un local banal.",
        "Une protection absente impose l’arrêt et le signalement.",
        "Le H0B0 n’autorise aucune action sur un coffret ou une armoire.",
        "L’accès est organisé, pas libre."
      ],
      forbiddenPoints: [
        "Entrer pour vérifier soi-même un problème électrique.",
        "Ouvrir une armoire ou un coffret.",
        "Repositionner un capot ou une protection sans compétence ni autorisation."
      ],
      legalRefs: [
        "NF C 18-510 : les accès aux zones électriques doivent être maîtrisés.",
        "INRS : la présence de pièces nues sous tension modifie immédiatement le niveau de risque."
      ],
      practicalCase:
        "Exemple : une porte de local électrique est trouvée entrouverte pendant un passage de nettoyage. L’agent H0B0 ne pénètre pas, ne referme pas s’il doit s’exposer et alerte immédiatement."
      ,
      visual: {
        title: "Accès aux zones électriques",
        subtitle: "L’accès est réglementé et conditionné par la sécurité.",
        items: [
          "Local réservé",
          "Signalisation",
          "Protection en place",
          "Arrêt immédiat en cas d’anomalie"
        ],
        tone: "slate",
        imagePath: "/elearning/h0b0/acces-local-electrique.png",
        imageAlt:
          "Illustration pédagogique de l’accès aux locaux et zones électriques"
      }
    },
    {
      id: "environments",
      title: "7. Types d’environnements électriques",
      intro:
        "Le niveau de risque dépend aussi du contexte de travail : local technique, atelier, chantier, zone humide, installation provisoire ou environnement logistique.",
      content: [
        "On distingue notamment les zones en champ libre, les locaux réservés aux électriciens, les armoires ou coffrets ouverts, et les environnements provisoires ou dégradés.",
        "Un même site peut présenter plusieurs environnements électriques avec des niveaux de vigilance différents.",
        "L’humidité, la coactivité, les installations provisoires et les matériels mobiles augmentent souvent le risque.",
        "Le salarié H0B0 doit toujours commencer par observer son environnement avant d’agir."
      ],
      deepDive: [
        "Les environnements provisoires, les rallonges, les coffrets de chantier et les matériels mobiles sont des sources fréquentes d’écarts.",
        "Les environnements humides ou conducteurs diminuent les marges de sécurité et aggravent les conséquences d’un défaut.",
        "La coactivité entre maintenance, exploitation, nettoyage et logistique est un facteur classique d’exposition non maîtrisée."
      ],
      keyPoints: [
        "Le risque dépend aussi du contexte.",
        "Local réservé, champ libre et armoire ouverte ne présentent pas le même niveau de risque.",
        "Les installations provisoires ou humides aggravent la situation.",
        "Observer l’environnement est un réflexe essentiel."
      ],
      forbiddenPoints: [
        "Banaliser une installation provisoire.",
        "Poursuivre une tâche dans un environnement visiblement dégradé.",
        "Ignorer une coactivité à proximité d’un risque électrique."
      ],
      legalRefs: [
        "NF C 18-510 : l’environnement de travail conditionne les mesures de prévention.",
        "INRS : l’analyse visuelle de l’environnement est une étape essentielle."
      ],
      practicalCase:
        "Exemple : un agent intervient dans une zone de lavage où des rallonges alimentent des équipements mobiles. La présence d’eau et de matériels provisoires impose une vigilance renforcée et peut justifier l’arrêt si le cadre n’est pas sécurisé."
      ,
  visual: {
  title: "Lire le bon environnement électrique",
  subtitle: "Le niveau de risque dépend aussi du contexte.",
  items: [
    "Champ libre",
    "Local réservé",
    "Armoire / coffret ouvert",
    "Configuration provisoire ou dégradée"
  ],
  tone: "slate",
  illustrationKey: "work-environment" as const,
}
    },
    {
      id: "contacts",
      title: "8. Contacts directs et indirects",
      intro:
        "Le risque électrique ne se manifeste pas seulement lorsqu’on touche un fil. Il faut distinguer clairement contact direct et contact indirect.",
      content: [
        "Le contact direct correspond au contact avec une partie active normalement sous tension.",
        "Le contact indirect correspond au contact avec une masse métallique devenue dangereuse à la suite d’un défaut d’isolement.",
        "Une structure ou une enveloppe peut paraître normale tout en étant accidentellement sous tension.",
        "Toute anomalie apparente doit conduire à l’arrêt et à l’alerte."
      ],
      deepDive: [
        "Le contact direct survient typiquement lorsqu’une partie active devient accessible : conducteur, borne, jeu de barres, organe interne visible.",
        "Le contact indirect est plus trompeur : l’enveloppe d’un appareil ou la carcasse d’une machine peut devenir dangereuse sans que cela soit visible immédiatement.",
        "Le H0B0 doit retenir que l’apparence normale d’un matériel ne garantit jamais l’absence de danger."
      ],
      keyPoints: [
        "Contact direct = partie active sous tension.",
        "Contact indirect = masse devenue dangereuse.",
        "Le danger n’est pas toujours visible.",
        "Le non-électricien ne vérifie pas lui-même l’origine d’un défaut."
      ],
      forbiddenPoints: [
        "Tester avec la main si un appareil est sous tension.",
        "Continuer à utiliser un matériel qui présente des signes anormaux.",
        "Chercher soi-même l’origine d’un défaut électrique."
      ],
      legalRefs: [
        "NF C 18-510 : distinction entre exposition aux parties actives et environnement électrique.",
        "NF C 15-100 : rôle de l’isolement, de la mise à la terre et des dispositifs de protection."
      ],
      practicalCase:
        "Exemple : une machine donne une sensation de picotement au contact de sa carcasse métallique. Il peut s’agir d’un contact indirect lié à un défaut d’isolement. L’usage doit être interrompu immédiatement."
      ,
     visual: {
  title: "Contact direct / contact indirect",
  subtitle: "Deux mécanismes différents, un même niveau de gravité possible.",
  items: [
    "Partie active",
    "Masse métallique",
    "Défaut d’isolement",
    "Danger parfois invisible"
  ],
  tone: "amber",
  illustrationKey: "electric-risk" as const,
}
    },
    {
      id: "current-effects",
      title: "9. Intensité du courant, durée d’exposition et dommages",
      intro:
        "La gravité d’un accident électrique ne dépend pas uniquement de la tension affichée. L’intensité du courant, la durée de passage et le trajet dans le corps sont déterminants.",
      content: [
        "Le courant électrique agit sur le corps humain selon plusieurs paramètres : l’intensité en milliampères, la durée d’exposition, le trajet du courant dans l’organisme, l’état de la peau, l’humidité, la surface de contact et le type de courant.",
        "À titre pédagogique, on retient souvent les repères suivants en courant alternatif 50 Hz : environ 0,5 mA pour le seuil de perception, 5 mA pour un choc nettement ressenti, autour de 10 mA pour le seuil de non-lâcher avec contraction musculaire, 30 mA pour un risque sérieux avec atteinte respiratoire possible, et environ 75 mA pour un risque majeur de fibrillation ventriculaire et d’arrêt cardiaque.",
        "Le seuil de non-lâcher est un point clé : la victime peut ne plus réussir à se dégager seule de la partie sous tension, ce qui prolonge la durée d’exposition et aggrave considérablement l’accident.",
        "Le trajet du courant modifie fortement la gravité. Un trajet main-main ou main-pieds peut traverser le thorax et majorer le risque cardiaque. Un trajet plus localisé peut provoquer des brûlures ou des atteintes nerveuses importantes.",
        "La durée de passage du courant est un facteur aggravant majeur. Un courant relativement modéré mais appliqué plus longtemps peut devenir beaucoup plus dangereux qu’un passage très bref.",
        "Le type de courant compte également. Dans les approches pédagogiques simplifiées, on rappelle souvent que les valeurs en courant continu sont généralement plus élevées que celles du courant alternatif pour produire certains effets physiologiques, mais cela ne signifie jamais absence de danger.",
        "Les statistiques d'accidents confirment la réalité du risque. En 2021, les données de sinistralité enregistraient environ 428 accidents du travail d'origine électrique, dont 46 mortels. L'analyse des facteurs causaux révèle que le mode opératoire inapproprié ou dangereux est la première cause (31 %), devant la méconnaissance des risques (30 %), l'application incomplète des procédures (15 %), la formation insuffisante (12 %) et le matériel défectueux (12 %). Ces chiffres montrent que la prévention technique ne suffit pas : le comportement et la culture de sécurité sont déterminants."
      ],
      deepDive: [
        "La tension seule n’explique pas tout. Ce sont les conditions réelles d’exposition qui déterminent la gravité.",
        "Les conséquences indirectes d’un choc doivent aussi être intégrées : chute, perte d’équilibre, projection, panique, brûlure secondaire ou incendie.",
        "Le but du H0B0 est de comprendre que même un défaut paraissant mineur peut produire un accident grave."
      ],
      keyPoints: [
        "0,5 mA : seuil de perception.",
        "10 mA : zone de non-lâcher possible.",
        "30 mA : niveau déjà très dangereux.",
        "75 mA : risque cardiaque majeur.",
        "La durée de passage et le trajet changent la gravité.",
        "2021 : 428 AT d'origine électrique — 46 mortels.",
        "1re cause d'accident : mode opératoire inapproprié (31 %).",
        "2e cause : méconnaissance des risques (30 %)."
      ],
      forbiddenPoints: [
        "Croire qu’un faible courant est forcément sans danger.",
        "Raisonner uniquement à partir de la tension nominale.",
        "Banaliser un choc au motif qu’il a été bref.",
        "Oublier les conséquences secondaires comme la chute ou l’incendie."
      ],
      legalRefs: [
        "Repères pédagogiques de sensibilisation couramment utilisés en prévention du risque électrique.",
        "La prévention repose sur l’évitement de l’exposition et non sur une appréciation empirique du danger."
      ],
      practicalCase:
        "Exemple : un salarié saisit une rallonge endommagée avec les mains humides. Même en basse tension, l’humidité peut conduire à un courant suffisant pour provoquer un non-lâcher, une chute ou un arrêt respiratoire."
      ,
      resourceVideos: [
        {
          title: "INRS - Choc électrique, effets du courant sur le corps",
          description:
            "Vidéo pédagogique INRS sur les effets du courant électrique, l'intensité et la durée d'exposition.",
          url: "https://youtu.be/wyJbFJOdGGo",
          provider: "INRS",
          ctaLabel: "Voir la vidéo INRS",
        },
      ],
      visual: {
  title: "Relation intensité / dommages",
  subtitle: "Plus l’intensité, la durée et le trajet sont défavorables, plus la gravité augmente.",
  items: [
    "0,5 mA : perception",
    "5 mA : choc ressenti",
    "10 mA : non-lâcher possible",
    "30 mA : danger respiratoire sérieux",
    "75 mA : fibrillation / arrêt cardiaque",
    "Durée + trajet = aggravation"
  ],
  tone: "red",
  illustrationKey: "body-effects" as const,
}
    },
    {
      id: "electrisation",
      title: "10. Électrisation et électrocution",
      intro:
        "Ces deux termes ne sont pas synonymes. Il faut les distinguer clairement, car toute électrisation doit être considérée comme un événement potentiellement grave.",
      content: [
        "L’électrisation correspond au passage du courant électrique dans le corps humain. Elle n’entraîne pas nécessairement le décès, mais elle peut provoquer des effets immédiats ou différés : tétanisation musculaire, impossibilité de lâcher, paralysie respiratoire, trouble du rythme cardiaque, brûlures externes et internes, atteintes neurologiques ou chute consécutive au choc.",
        "L’électrocution correspond à une électrisation mortelle. En pratique, c’est le cas lorsque le courant entraîne un arrêt cardiaque, une fibrillation ventriculaire ou une atteinte vitale non récupérée à temps.",
        "Une électrisation ne se limite pas à un simple coup de courant. Même si la victime reste consciente, les conséquences peuvent être sérieuses : douleur thoracique, brûlures profondes, trouble cardiaque différé, perte de connaissance, malaise secondaire ou traumatisme lié à une chute.",
        "Le risque existe par contact direct, par contact indirect, et en haute tension par amorçage ou arc électrique, sans contact franc avec le conducteur.",
        "Les brûlures électriques sont souvent plus profondes qu’elles n’en ont l’air.",
        "Pour un titulaire H0B0, le message essentiel est simple : toute électrisation est grave jusqu’à preuve du contraire."
      ],
      deepDive: [
        "L’électrisation correspond au passage du courant dans le corps. L’électrocution correspond à l’issue mortelle de cette électrisation.",
        "Une victime qui parle ou se relève n’est pas nécessairement hors de danger.",
        "Le traitement de l’événement doit rester sérieux, immédiat et conforme à l’organisation de secours."
      ],
      keyPoints: [
        "Électrisation = passage du courant dans le corps.",
        "Électrocution = électrisation mortelle.",
        "Une électrisation peut être grave sans être immédiatement mortelle.",
        "Le danger peut venir d’un contact, d’un défaut ou d’un arc électrique."
      ],
      forbiddenPoints: [
        "Banaliser un petit coup de courant.",
        "Toucher directement une victime encore exposée au danger électrique.",
        "Croire qu’une absence de brûlure visible signifie absence de gravité.",
        "Retarder l’alerte."
      ],
      legalRefs: [
        "Prévention du risque électrique : toute électrisation doit être traitée comme un accident potentiellement grave.",
        "NF C 18-510 : la protection contre le suraccident est prioritaire."
      ],
      practicalCase:
        "Exemple : un opérateur reçoit une décharge en touchant la carcasse métallique d’un appareil. Même sans perte de connaissance, il s’agit d’une électrisation qui doit être signalée et traitée sérieusement."
      ,
      visual: {
  title: "Électrisation / électrocution",
  subtitle: "Distinguer le passage du courant dans le corps et l’issue mortelle.",
  items: [
    "Passage du courant",
    "Tétanisation",
    "Brûlures externes et internes",
    "Troubles respiratoires ou cardiaques",
    "Arc électrique possible sans contact",
    "Issue potentiellement mortelle"
  ],
  tone: "red",
  imagePath: "/elearning/h0b0/electrisation-electrocution.png",
  imageAlt: "Illustration pédagogique de l’électrisation et de l’électrocution"
}
    },
    {
      id: "body-resistance",
      title: "11. Résistance du corps humain, peau sèche ou humide",
      intro:
        "La résistance du corps humain n’est pas fixe. Elle varie selon l’état de la peau, l’humidité, la surface de contact, le milieu et les conditions d’exposition.",
      content: [
        "La résistance électrique du corps humain dépend notamment de la peau sèche ou humide, de la transpiration, de la présence d’eau, de la pression de contact, des chaussures, du sol, de la fatigue et de l’état de santé.",
        "En milieu sec, la résistance peut être plus élevée. En milieu humide, elle chute nettement, ce qui facilite le passage du courant à travers le corps.",
        "À titre pédagogique, une peau sèche avec une résistance d’environ 4 000 ohms soumise à 50 V peut déjà conduire à un courant proche de 12 mA. Cela correspond déjà à une zone où le non-lâcher devient plausible.",
        "Lorsque les mains sont mouillées, que le sol est humide, que les vêtements sont trempés ou que l’on est en contact avec une structure métallique, le niveau de danger augmente fortement.",
        "Le même équipement électrique ne présente donc pas le même niveau de risque selon le contexte d’utilisation.",
        "Pour un titulaire H0B0, le réflexe est simple : milieu humide = vigilance maximale, arrêt si doute et aucun geste improvisé.",
        "La norme fixe des tensions de contact dangereuses selon l'environnement. En courant alternatif : 50 V en milieu sec, 25 V en milieu humide (condensation, transpiration), 12 V en milieu mouillé (eau ruisselante, immersion partielle). En courant continu les seuils sont plus élevés : 120 V sec, 60 V humide, 30 V mouillé. Ces valeurs montrent qu'une installation parfaitement conforme en bureau peut devenir dangereuse dans un atelier de nettoyage ou un local technique humide.",
        "La résistance conventionnelle du corps humain retenue par la norme est de 5 000 Ω en milieu sec et 2 500 Ω en milieu humide. L'application directe de la loi d'Ohm (I = U/R) confirme qu'à 50 V on atteint 10 mA en milieu sec — valeur déjà au seuil du non-lâcher — et 20 mA en milieu humide, ce qui constitue un danger respiratoire réel."
      ],
      deepDive: [
        "L’humidité réduit la protection naturelle offerte par la peau.",
        "Le risque augmente encore en cas de cumul : peau humide, sol conducteur, environnement métallique, fatigue, chaussures inadaptées.",
        "Les activités de nettoyage, de logistique, de maintenance légère ou d’exploitation extérieure sont particulièrement concernées."
      ],
      keyPoints: [
        "L’humidité diminue la résistance du corps.",
        "La peau sèche protège davantage que la peau humide, sans supprimer le danger.",
        "50 V peuvent déjà conduire à un courant dangereux selon le contexte.",
        "Le milieu de travail change directement le niveau de risque.",
        "Tensions dangereuses AC : 50 V (sec) / 25 V (humide) / 12 V (mouillé).",
        "Tensions dangereuses DC : 120 V (sec) / 60 V (humide) / 30 V (mouillé).",
        "Résistance corps : 5 000 Ω (sec) — 2 500 Ω (humide).",
        "Eau = réduction de résistance = danger multiplié."
      ],
      forbiddenPoints: [
        "Manipuler une prise ou un équipement avec les mains mouillées.",
        "Banaliser un sol humide ou conducteur.",
        "Considérer qu’un matériel est sûr uniquement parce qu’il fonctionne.",
        "Poursuivre une action en présence d’eau ou de condensation sans analyse."
      ],
      legalRefs: [
        "Prévention du risque électrique : les conditions d’environnement modifient directement le niveau de danger.",
        "INRS : l’humidité et la conductivité sont des facteurs aggravants majeurs."
      ],
      practicalCase:
        "Exemple : un agent de nettoyage veut déplacer un équipement branché dans une zone humide. Même sans défaut visible, l’association eau, contact manuel et sol conducteur augmente fortement le risque."
      ,
    visual: {
  title: "Corps humain et influence du milieu",
  subtitle: "Le risque augmente fortement lorsque l’humidité réduit la résistance du corps.",
  items: [
    "Peau sèche",
    "Peau humide",
    "Surface de contact",
    "Sol conducteur",
    "Milieu métallique",
    "Danger aggravé"
  ],
  tone: "amber",
  imagePath: "/elearning/h0b0/milieu-sec-humide.png",
  imageAlt: "Illustration de l’influence du milieu sec ou humide sur le risque électrique"
}
    },
    {
      id: "equipment",
      title: "12. Matériels, câbles et équipements défectueux",
      intro:
        "Un matériel électrique défectueux peut devenir dangereux immédiatement, même s’il semble encore fonctionner normalement.",
      content: [
        "Les signes d’alerte les plus fréquents sont : câble écrasé, gaine coupée, prise fissurée, fiche cassée, conducteur apparent, rallonge déformée, coffret abîmé, capot manquant, traces noires, odeur de chaud, échauffement anormal, étincelles ou déclenchements répétés.",
        "Le fait qu’un appareil fonctionne encore ne prouve jamais qu’il est sûr. Au contraire, un matériel en service malgré un défaut visible peut être à l’origine d’une électrisation, d’un court-circuit ou d’un départ de feu.",
        "Les canalisations électriques enterrées sont signalées par un grillage avertisseur de couleur rouge. Ce code couleur est réglementé et permet d'identifier le réseau avant toute fouille ou terrassement : rouge pour l'électricité, jaune pour le gaz, vert pour l'eau potable, bleu pour l'eau non potable, blanc pour les télécommunications. Rencontrer ce grillage lors d'un travail au sol impose l'arrêt immédiat et l'alerte.",
        "Le titulaire H0B0 ne doit jamais réparer, bricoler, scotcher, rebrancher en force ou neutraliser un défaut apparent sur un matériel électrique.",
        "L’inspection visuelle avant usage est une mesure simple mais essentielle : état des câbles, intégrité des fiches, présence des protections, stabilité des branchements, absence d’échauffement et cohérence avec l’environnement d’utilisation.",
        "Tout élément détérioré ou inhabituel doit être considéré comme un motif d’arrêt.",
        "Le bon comportement est d’écarter l’usage du matériel si cela peut être fait sans exposition, puis d’alerter la personne compétente."
      ],
      deepDive: [
        "Beaucoup d’accidents naissent d’un écart banalisé : rallonge usée, fiche forcée, prise descellée, câble pincé, appareil chauffant sur équipement dégradé.",
        "La compétence H0B0 ne consiste pas à réparer, mais à détecter rapidement l’écart et à stopper l’usage.",
        "Ce que l’on voit, sent ou entend anormalement doit être traité comme un signal de danger."
      ],
      keyPoints: [
        "Un matériel défectueux peut rester fonctionnel tout en étant dangereux.",
        "L’inspection visuelle avant usage est indispensable.",
        "Odeur, chaleur, étincelles et traces noires sont des signaux d’alerte.",
        "Le H0B0 signale ; il ne répare pas."
      ],
      forbiddenPoints: [
        "Scotcher une gaine détériorée pour continuer à utiliser l’équipement.",
        "Forcer une fiche ou une prise.",
        "Réutiliser un matériel qui chauffe anormalement.",
        "Neutraliser une protection ou maintenir un matériel en service malgré l’écart."
      ],
      legalRefs: [
        "Prévention du risque électrique : l’usage d’un matériel défectueux constitue un facteur d’accident majeur.",
        "INRS : l’inspection visuelle préalable est une mesure simple mais essentielle."
      ],
      practicalCase:
        "Exemple : une rallonge présente une gaine abîmée près de la fiche et chauffe au toucher. Même si l’outil branché fonctionne, la rallonge doit être retirée du service et signalée immédiatement."
      ,
      visual: {
  title: "Matériels défectueux",
  subtitle: "Voir un écart, c’est déjà disposer d’un motif d’arrêt.",
  items: [
    "Gaine abîmée",
    "Prise fissurée",
    "Échauffement",
    "Odeur ou fumée",
    "Étincelles",
    "Déclenchements répétés"
  ],
  tone: "red",
  imagePath: "/elearning/h0b0/materiel-defectueux.png",
  imageAlt: "Illustration de matériels, câbles et équipements électriques défectueux"
}
    },
   {
  id: "epi-epc",
  title: "13. Équipements de protection collective et individuelle",
  intro:
    "La protection contre le risque électrique repose d'abord sur des protections collectives. Les EPI viennent en complément, jamais en remplacement.",
  content: [
    "Les protections collectives (EPC) sont prioritaires : enveloppes fermées (armoires, coffrets), capotages, isolation des pièces actives, balisage, signalisation, distances de sécurité matérialisées et locaux réservés.",
    "Pour le titulaire H0B0, l'EPC le plus important est le maintien en l'état des protections déjà installées : ne jamais retirer un capot, ne jamais forcer un balisage, ne jamais désactiver une signalisation.",
    "Les équipements de protection individuelle (EPI) électriques classiques en environnement BT sont les chaussures de sécurité diélectriques, les vêtements de travail couvrants, et selon les sites un casque de chantier. Le titulaire H0B0 ne porte généralement pas de gants isolants ni d'écran facial anti-arc, qui relèvent des opérations électriques.",
    "L'EPI ne dispense jamais du respect des règles d'environnement : un EPI ne change pas le périmètre de l'habilitation et ne donne aucune autorisation supplémentaire d'intervention.",
    "Avant chaque mission, le titulaire H0B0 vérifie visuellement son équipement : intégrité des chaussures, propreté des vêtements, état du casque si requis. Tout EPI dégradé ou périmé est mis hors service et signalé.",
  ],
  deepDive: [
    "L'INRS rappelle que la hiérarchie des mesures de prévention place toujours les protections collectives au-dessus des protections individuelles. La supprimer ou la contourner annule la chaîne de prévention.",
    "Pour les opérations d'ordre non électrique, les EPI électriques (gants isolants classés, écran facial) ne sont pas systématiquement requis car le titulaire H0B0 ne touche pas aux pièces actives. C'est l'environnement qui est sécurisé, pas l'opérateur qui se protège du contact.",
  ],
  keyPoints: [
    "Les EPC priment toujours sur les EPI.",
    "Ne jamais retirer un capot, balisage ou signalisation existant.",
    "Chaussures diélectriques + vêtements couvrants pour H0B0 en BT.",
    "Un EPI ne donne aucune autorisation supplémentaire d'intervention.",
  ],
  forbiddenPoints: [
    "Compter sur l'EPI pour intervenir hors de son périmètre.",
    "Retirer ou contourner un capot, une signalisation ou un balisage.",
    "Continuer à utiliser un EPI dégradé ou périmé.",
  ],
  legalRefs: [
    "Code du travail R.4323-91 et suivants : règles relatives aux EPI.",
    "NF C 18-510 : protections collectives et individuelles dans l'environnement électrique.",
    "INRS : hiérarchie des mesures de prévention (EPC avant EPI).",
  ],
  practicalCase:
    "Exemple : un agent logistique entre dans un local technique pour reprendre une palette. L'armoire électrique du local est fermée et signalée. La protection collective (capots fermés, balisage) suffit pour évoluer en sécurité, à condition de ne pas la modifier.",
  visual: {
    title: "EPC d'abord, EPI ensuite",
    subtitle: "Le titulaire H0B0 ne touche pas l'installation : c'est l'environnement qui doit le protéger.",
    items: [
      "Capots et armoires fermés",
      "Signalisation et balisage maintenus",
      "Chaussures diélectriques",
      "Vêtements couvrants",
      "Casque si requis sur site",
    ],
    tone: "blue",
    imagePath: "/elearning/h0b0/epi-epc.png",
    imageAlt: "Illustration des protections collectives et individuelles en environnement H0B0",
  },
},
    {
      id: "authorized-forbidden",
      title: "14. Comportements autorisés et interdits",
      intro:
        "Le cœur du H0B0 est comportemental : rester dans ses limites, observer, ne pas improviser et alerter.",
      content: [
        "Le H0B0 n’autorise aucune opération d’ordre électrique, aucune ouverture d’armoire, aucune réparation, aucune consignation.",
        "Le salarié doit respecter les consignes, signaler toute anomalie et s’assurer que son activité ne crée pas de danger.",
        "Il est interdit d’utiliser du matériel défectueux, de manipuler une prise avec les mains mouillées, d’improviser une réparation ou de neutraliser une protection.",
        "Le bon réflexe consiste toujours à arrêter, sécuriser sans s’exposer et alerter la bonne personne."
      ],
      deepDive: [
        "Le professionnalisme H0B0 se mesure précisément à la capacité de ne pas faire ce qui ne relève pas de son périmètre.",
        "La dérive comportementale commence souvent par une action jugée simple, rapide ou habituelle. C’est précisément ce qu’il faut éviter.",
        "Observer, signaler, arrêter et demander le bon appui technique sont des comportements de sécurité."
      ],
      keyPoints: [
        "Observer, signaler, arrêter si nécessaire.",
        "Ne jamais réparer ou ouvrir.",
        "Ne jamais improviser.",
        "L’arrêt en cas de doute est une règle."
      ],
      forbiddenPoints: [
        "Réparer ou ouvrir un équipement électrique.",
        "Réarmer techniquement un dispositif hors consigne autorisée.",
        "Neutraliser une protection.",
        "Poursuivre malgré un doute."
      ],
      legalRefs: [
        "NF C 18-510 : les opérations autorisées doivent rester strictement dans le périmètre du symbole d’habilitation.",
        "INRS : respecter ses limites d’habilitation est une règle de sécurité majeure."
      ],
      practicalCase:
        "Exemple : une prise est descellée et empêche l’utilisation normale d’un poste. Le titulaire H0B0 n’intervient pas dessus. Il condamne l’usage si possible sans risque et signale."
      ,
      visual: {
  title: "Autorisé / interdit en H0B0",
  subtitle: "Le bon comportement repose sur un périmètre strict.",
  items: [
    "Observer",
    "Signaler",
    "Stopper l’usage en cas d’écart",
    "Ne jamais ouvrir / réparer / improviser"
  ],
  tone: "green",
  illustrationKey: "authorized-forbidden" as const,
}
    },
 {
  id: "conduct-accident",
  title: "15. Conduite à tenir en cas d'accident électrique",
  intro:
    "Face à un accident électrique, la priorité est de protéger sans devenir une seconde victime. Le titulaire H0B0 ne se substitue pas aux secours : il sécurise, alerte et applique les gestes formés.",
  content: [
    "Face à une victime en contact avec une source électrique, la priorité absolue est de supprimer le contact avant toute intervention. Un sauveteur qui touche directement la victime devient lui-même victime.",
    "La suppression du contact se fait par coupure de l'alimentation au plus près (arrêt d'urgence, disjoncteur, sectionneur identifié) ou, à défaut, en écartant la victime à l'aide d'un objet sec et isolant (manche en bois, vêtement sec) en se tenant sur un support sec.",
    "Une fois la victime hors du circuit, on alerte les secours : 18 (pompiers) ou 112 (numéro européen). On transmet le lieu précis, la nature de l'accident, l'état apparent de la victime et la persistance éventuelle d'un risque électrique.",
    "Les gestes de premiers secours (vérification conscience, position latérale de sécurité, RCP) ne s'improvisent pas. Le titulaire H0B0 non formé SST se limite à la sécurisation et à l'alerte. Une formation SST distincte est nécessaire pour aller au-delà.",
    "En cas de feu d'origine électrique, on n'utilise pas d'eau sur une installation sous tension. Les moyens adaptés sont l'extincteur CO2 ou poudre, et uniquement si la situation le permet (feu naissant, voie de repli conservée). Sinon : évacuation et alerte.",
    "Toute brûlure électrique, même apparemment mineure, doit faire l'objet d'un examen médical : les lésions internes (organes traversés par le courant) ne sont pas visibles à l'œil nu.",
  ],
  deepDive: [
    "L'INRS rappelle que dans les accidents d'origine électrique, le délai entre l'accident et l'arrivée des secours est souvent décisif. Une alerte rapide et précise sauve plus que des gestes improvisés.",
    "La règle dite des « 5 P » utile au sauveteur : Protéger (la zone, la victime, soi-même), Prévenir (alerter les secours), Préserver (ne pas aggraver l'état), Préparer (faciliter l'arrivée des secours), Patienter (rester avec la victime jusqu'à la prise en charge).",
  ],
  keyPoints: [
    "Supprimer d'abord le contact, ne JAMAIS toucher une victime sous tension.",
    "Couper l'alimentation par un organe identifié si accessible sans risque.",
    "Alerter les secours : 18 ou 112.",
    "Premiers secours = formation SST, ne pas improviser sans formation.",
    "Feu électrique sous tension : CO2 ou poudre, jamais d'eau.",
  ],
  forbiddenPoints: [
    "Toucher la victime tant que la tension n'est pas coupée.",
    "Utiliser de l'eau sur une installation sous tension.",
    "Improviser des gestes de RCP sans formation SST.",
    "Considérer une brûlure électrique comme bénigne.",
  ],
  legalRefs: [
    "Code du travail - obligation de moyens de secours et de formation à la sécurité.",
    "INRS - conduite à tenir en cas d'accident d'origine électrique, formation SST.",
    "NF C 18-510 - prévention du risque électrique et conduite face à une situation dégradée.",
  ],
  practicalCase:
    "Exemple : un opérateur trouve un collègue en contact avec une rallonge dégradée. Il identifié l'arrêt d'urgence du local, coupe l'alimentation, dégage le collègue avec un manche en bois sec, alerte le 18 en transmettant lieu, état et risques persistants. Il reste près de la victime jusqu'à l'arrivée des secours.",
  resourceVideos: [
    {
      title: "INRS - SST et secourisme au travail",
      description:
        "Vidéo INRS sur la logique protéger / examiner / alerter / secourir et la place du SST en entreprise.",
      url: "https://www.inrs.fr/media.html?refINRS=Anim-049",
      provider: "INRS",
      ctaLabel: "Voir la vidéo INRS",
    },
    {
      title: "INRS - Consignation électrique",
      description:
        "Vidéo INRS sur la séquence de mise hors tension. Utile pour comprendre comment couper l'alimentation en sécurité.",
      url: "https://youtu.be/cCqbrFDNrxA",
      provider: "INRS",
      ctaLabel: "Voir la vidéo INRS",
    },
  ],
  visual: {
    title: "Réagir face à un accident électrique",
    subtitle: "Protéger, alerter, ne pas improviser au-delà de sa formation.",
    items: [
      "Couper l'alimentation",
      "Dégager avec objet isolant sec",
      "Alerter 18 ou 112",
      "Transmettre lieu, état, risques",
      "Patienter avec la victime",
    ],
    tone: "red",
    illustrationKey: "emergency-response" as const,
  },
},
    {
      id: "summary",
      title: "16. Synthèse opérationnelle",
      intro:
        "Cette synthèse reprend l’ensemble des notions essentielles du parcours H0B0 sous une forme directement exploitable sur le terrain.",
      content: [
        "Le H0B0 concerne exclusivement des opérations d’ordre non électrique réalisées dans un environnement présentant un risque électrique. Il ne permet jamais d’intervenir sur une installation, même de manière simple ou ponctuelle.",
        "Le risque électrique doit être analysé à partir de plusieurs paramètres : domaine de tension, environnement de travail, présence éventuelle de pièces nues sous tension, état apparent du matériel et respect des distances d’approche. En basse tension, la proximité immédiate d’éléments nus sous tension impose une vigilance stricte ; dans les supports pédagogiques, 30 cm est souvent utilisé comme repère d’alerte. En haute tension, les distances sont nettement supérieures et le risque d’amorçage existe sans contact.",
        "Les contacts dangereux sont de deux types : le contact direct avec une partie active sous tension et le contact indirect avec une masse métallique devenue accidentellement sous tension.",
        "Les effets du courant électrique dépendent de l’intensité, du temps d’exposition et du trajet dans le corps. Dès 10 mA, il existe un risque de non-lâcher ; à partir de 30 mA, le risque devient grave avec atteinte respiratoire possible ; vers 75 mA, le risque de fibrillation cardiaque est majeur. L’humidité diminue la résistance du corps et aggrave fortement le risque.",
        "Une électrisation correspond au passage du courant dans le corps. L’électrocution correspond à une issue mortelle.",
        "La prévention repose d’abord sur les protections collectives : capotage, enveloppe, balisage, signalisation, accès réglementé. Les EPI viennent en complément mais ne rendent jamais une action interdite autorisée.",
        "Le comportement attendu en H0B0 est strict : ne jamais ouvrir une armoire, ne jamais intervenir sur un circuit, ne jamais réparer ou improviser. Toute anomalie impose l’arrêt et le signalement.",
        "En cas d’accident, la priorité est d’éviter le suraccident. Il ne faut jamais toucher une victime tant que le danger électrique n’est pas supprimé.",
        "En cas de départ de feu d’origine électrique, il faut alerter, évacuer si nécessaire et utiliser uniquement les moyens adaptés selon les consignes du site. L’eau est proscrite sur une installation sous tension.",
        "La logique globale H0B0 repose sur une discipline constante : analyser l’environnement, respecter les distances, ne pas sortir de son périmètre et alerter sans délai."
      ],
      keyPoints: [
        "H0B0 = opérations d’ordre non électrique uniquement.",
        "BT ≠ absence de danger / HT = risque renforcé avec amorçage possible.",
        "En BT, 30 cm constitue un repère pédagogique d’alerte.",
        "Contact direct et indirect = deux dangers majeurs.",
        "10 mA = non-lâcher / 30 mA = danger grave / 75 mA = risque cardiaque majeur.",
        "Humidité = aggravation du risque.",
        "Ne jamais ouvrir, réparer ou intervenir.",
        "Stopper, sécuriser, alerter : réflexe systématique.",
        "Ne jamais toucher une victime sous tension.",
        "Protection collective prioritaire sur EPI."
      ],
      deepDive: [
        "La maîtrise du risque électrique ne repose pas sur l’habitude, mais sur la discipline, l’observation et le respect du périmètre autorisé.",
        "Le H0B0 n’est pas une habilitation de moindre importance. C’est une formation essentielle pour éviter les accidents chez les non-électriciens exposés à un environnement électrique.",
        "Le bon niveau d’acquisition se voit lorsque le salarié sait reconnaître qu’il doit s’arrêter et transmettre."
      ],
      legalRefs: [
        "Code du travail : formation et habilitation adaptées aux opérations confiées.",
        "NF C 18-510 : prévention du risque électrique dans l’environnement de travail.",
        "INRS : maintien des compétences et respect des limites d’habilitation."
      ],
      practicalCase:
        "Exemple : sur le terrain, le bon réflexe H0B0 n’est pas de chercher à dépanner, mais de reconnaître le danger, de s’écarter, de signaler et de laisser intervenir la personne compétente."
      ,
    visual: {
  title: "Les réflexes H0B0",
  subtitle: "Une logique opérationnelle basée sur la maîtrise du risque et le respect strict du périmètre.",
  items: [
    "Observer l’environnement",
    "Identifier le risque électrique",
    "Respecter les distances et protections",
    "Ne pas intervenir sur l’installation",
    "Stopper en cas de doute",
    "Alerter immédiatement"
  ],
  tone: "blue",
  illustrationKey: "summary-reflexes" as const,
}
    }
  ]
},
  "bs-be-manoeuvre": {
    title: "BS / BE Manœuvre - Interventions élémentaires et manœuvres",
    shortTitle: "BS / BE Manœuvre",
    subtitle:
      "Parcours e-learning préparatoire aux interventions élémentaires et aux manœuvres simples dans le respect des limites fixées par la NF C 18-510.",
    duration: "45 à 60 minutes",
    level: "Intermédiaire",
    objective:
      "Comprendre le périmètre d’une intervention élémentaire, sécuriser son intervention, réaliser une manœuvre simple et appliquer la conduite adaptée en cas d’anomalie.",
    audience:
      "Personnel amené à effectuer des remplacements simples, réarmements, manœuvres d’exploitation ou opérations limitées prévues dans le cadre de son habilitation.",
    certificationNote:
      "La formation doit être complétée par une partie pratique avec formateur et une évaluation adaptée au poste de travail.",
    heroBadge: "Habilitation électrique",
    finalMessage:
      "Ce parcours vous prépare aux fondamentaux BS / BE Manœuvre. La validation opérationnelle passe ensuite par la mise en situation pratique et l’évaluation encadrée.",
    quizCtaLabel: "Passer au quiz BS / BE Manœuvre",
    sections: [
      {
        id: "cadre",
        title: "1. Cadre d’intervention",
        content: [
          "BS et BE Manœuvre ne donnent pas un droit général d’intervenir sur toute installation électrique. Ces habilitations correspondent à des opérations limitées, encadrées, prévues et connues à l’avance.",
          "L’habilitation BS concerne des interventions élémentaires simples et limitées, réalisées selon des procédures connues, sur des circuits ou équipements clairement identifiés.",
          "L’habilitation BE Manœuvre concerne les manœuvres d’exploitation telles que mise en marche, arrêt, réarmement ou action autorisée sur un appareillage défini."
        ],
        keyPoints: [
          "Intervention limitée, identifiée, encadrée.",
          "Pas d’improvisation ni d’élargissement de périmètre.",
          "La procédure et l’environnement priment sur l’habitude."
        ],
        visual: {
          title: "Périmètre BS / BE Manœuvre",
          subtitle: "Intervenir uniquement dans le cadre défini.",
          items: [
            "Opération autorisée et identifiée",
            "Procédure connue à l’avance",
            "Matériel et environnement adaptés",
            "Arrêt immédiat en cas d’écart"
          ],
          tone: "blue",
        },
      },
      {
        id: "preparation",
        title: "2. Préparation de l’intervention",
        content: [
          "Avant toute intervention, il faut identifier clairement l’équipement concerné, analyser les risques, vérifier l’état apparent du matériel, préparer l’outillage et s’assurer de disposer des équipements de protection nécessaires.",
          "Toute incohérence, absence d’identification, doute sur le circuit ou présence d’un défaut visible doit conduire à l’arrêt de l’intervention et à l’alerte d’un référent compétent."
        ],
        keyPoints: [
          "Identifier avant d’agir.",
          "Vérifier matériel, outillage et environnement.",
          "S’arrêter immédiatement en cas de doute."
        ],
        visual: {
          title: "Préparer avant d’intervenir",
          subtitle: "Une intervention simple reste une intervention à risque.",
          items: [
            "Identifier l’équipement",
            "Vérifier l’état apparent",
            "Préparer l’outillage et les EPI",
            "Confirmer le cadre autorisé"
          ],
          tone: "amber",
        },
      },
      {
        id: "limites",
        title: "3. Limites à respecter",
        content: [
          "Le titulaire BS / BE Manœuvre ne doit pas sortir du champ prévu. Une opération simple qui se complique doit être interrompue.",
          "Dès qu’un défaut non prévu, un accès incertain, une absence de repérage ou une dégradation importante est constaté, l’opération doit être stoppée."
        ],
        forbiddenPoints: [
          "Intervenir hors procédure.",
          "Poursuivre malgré un doute.",
          "Modifier un appareillage non prévu.",
          "Intervenir sur un matériel dégradé ou non identifié."
        ],
        visual: {
          title: "Quand faut-il s’arrêter ?",
          subtitle: "Le doute impose l’arrêt.",
          items: [
            "Équipement non identifié",
            "Défaut inattendu",
            "Matériel dégradé",
            "Procédure incomplète ou absente"
          ],
          tone: "red",
        },
      },
      {
        id: "manoeuvres",
        title: "4. Manœuvres et opérations courantes",
        content: [
          "Les manœuvres simples doivent être réalisées avec méthode, dans le respect des consignes, sans précipitation et après vérification de l’environnement.",
          "Le réarmement d’un dispositif de protection n’est jamais un geste anodin. Il doit être autorisé, compris et réalisé uniquement si le cadre le permet."
        ],
        keyPoints: [
          "Procéder avec méthode.",
          "Ne jamais banaliser un déclenchement.",
          "Documenter ou signaler toute anomalie constatée."
        ],
        visual: {
          title: "Réaliser une manœuvre en sécurité",
          subtitle: "Méthode, contrôle, retour d’information.",
          items: [
            "Vérifier le contexte",
            "Agir selon la consigne",
            "Contrôler le résultat",
            "Signaler toute anomalie"
          ],
          tone: "green",
        },
      },
      {
        id: "synthese",
        title: "5. Synthèse",
        content: [
          "BS / BE Manœuvre exige de la rigueur. Une opération simple n’est sûre que si elle est préparée, comprise, autorisée et réalisée dans un environnement maîtrisé.",
          "L’arrêt en cas de doute est une preuve de professionnalisme, pas un frein à l’exploitation."
        ],
        keyPoints: [
          "Je respecte ma mission.",
          "Je n’élargis jamais mon périmètre.",
          "Je signale toute situation anormale."
        ],
        visual: {
          title: "Réflexes BS / BE Manœuvre",
          subtitle: "Préparer, exécuter, contrôler.",
          items: [
            "Identifier",
            "Exécuter selon consigne",
            "Contrôler",
            "Tracer ou signaler"
          ],
          tone: "blue",
        },
      },
    ],
  },

  "b1-b1v-b2-b2v-br-bc": {
    title: "B1 B1V B2 B2V BR BC - Travaux, interventions et consignation",
    shortTitle: "B1 / B2 / BR / BC",
    subtitle:
      "Parcours e-learning de préparation aux opérations d’ordre électrique, travaux, interventions et consignation selon les rôles et limites associées.",
    duration: "1 h 15 à 1 h 45",
    level: "Avancé",
    objective:
      "Comprendre les rôles, responsabilités, séquences de sécurité, principes de consignation et exigences de préparation avant travaux ou interventions d’ordre électrique.",
    audience:
      "Personnel électricien ou encadrant technique concerné par des travaux, interventions générales, direction de travaux ou consignation.",
    certificationNote:
      "Ce contenu constitue un socle théorique. La partie pratique, les mises en situation et l’évaluation métier restent indispensables.",
    heroBadge: "Habilitation électrique",
    finalMessage:
      "Vous avez parcouru les principes structurants des habilitations B1, B2, BR et BC. La validation doit ensuite s’appuyer sur une évaluation pratique adaptée à vos missions réelles.",
    quizCtaLabel: "Passer au quiz B1 / B2 / BR / BC",
    sections: [
      {
        id: "roles",
        title: "1. Rôles et responsabilités",
        content: [
          "Les habilitations B1, B1V, B2, B2V, BR et BC correspondent à des rôles différents. Elles impliquent des responsabilités précises et ne doivent jamais être confondues.",
          "Le chargé de travaux, le chargé d’intervention, l’exécutant et le chargé de consignation n’ont ni le même périmètre ni les mêmes obligations."
        ],
        keyPoints: [
          "Un rôle = un périmètre précis.",
          "Les responsabilités doivent être clairement définies.",
          "La coordination est essentielle avant toute opération."
        ],
        visual: {
          title: "Organisation des rôles",
          subtitle: "Savoir qui fait quoi avant d’agir.",
          items: [
            "Exécutant : réalise selon consignes",
            "Chargé de travaux : organise et dirige",
            "Chargé d’intervention : traite l’intervention prévue",
            "Chargé de consignation : met en sécurité"
          ],
          tone: "blue",
        },
      },
      {
        id: "consignation",
        title: "2. Principe de consignation",
        content: [
          "La consignation vise à mettre l’installation dans un état garantissant la sécurité des personnes. Elle s’appuie sur une séquence rigoureuse qui ne doit jamais être tronquée.",
          "Une installation n’est pas considérée comme sécurisée sur la seule base d’une impression ou d’une habitude. La procédure doit être complète et vérifiée."
        ],
        keyPoints: [
          "Séparation",
          "Condamnation",
          "Identification",
          "Vérification d’absence de tension",
          "Mise à la terre et en court-circuit si nécessaire"
        ],
        visual: {
          title: "Séquence de consignation",
          subtitle: "Une démarche rigoureuse et ordonnée.",
          items: [
            "Séparer l’installation",
            "Condamner l’organe de coupure",
            "Identifier sans ambiguïté",
            "Vérifier l’absence de tension"
          ],
          tone: "amber",
        },
      },
      {
        id: "travaux-voisinage",
        title: "3. Travaux et voisinage",
        content: [
          "Le voisinage renforce les exigences de préparation, de balisage, de surveillance et de maîtrise du geste professionnel.",
          "Une zone de voisinage ne se gère pas à l’intuition. Elle nécessite des dispositions adaptées, une organisation claire et un niveau d’habilitation cohérent."
        ],
        keyPoints: [
          "Balisage et délimitation fiables.",
          "Préparation collective avant intervention.",
          "Maîtrise permanente de la zone de travail."
        ],
        visual: {
          title: "Travaux en zone de voisinage",
          subtitle: "Le danger existe même sans contact direct.",
          items: [
            "Délimiter et baliser",
            "Organiser les accès",
            "Coordonner les intervenants",
            "Maintenir la maîtrise de la zone"
          ],
          tone: "red",
        },
      },
      {
        id: "interventions",
        title: "4. Interventions et remise en service",
        content: [
          "Chaque intervention doit être préparée, exécutée puis clôturée avec méthode. La remise en service doit être maîtrisée, contrôlée et communiquée.",
          "Aucune étape ne doit être bâclée, notamment en phase de fin de travaux ou de remise à disposition."
        ],
        keyPoints: [
          "Préparer, exécuter, contrôler, remettre en service.",
          "Tracer les anomalies et réserves.",
          "Communiquer clairement la fin d’intervention."
        ],
        visual: {
          title: "Cycle d’une opération électrique",
          subtitle: "Du briefing à la remise à disposition.",
          items: [
            "Préparation",
            "Mise en sécurité",
            "Exécution",
            "Contrôle et remise en service"
          ],
          tone: "green",
        },
      },
      {
        id: "synthese",
        title: "5. Synthèse",
        content: [
          "Les opérations d’ordre électrique exigent discipline, coordination, traçabilité et maîtrise technique. La sécurité ne repose jamais sur l’expérience seule, mais sur la procédure appliquée sans compromis."
        ],
        keyPoints: [
          "Je respecte mon rôle.",
          "Je sécurise avant d’intervenir.",
          "Je maîtrise la clôture d’intervention."
        ],
        visual: {
          title: "Réflexes de sécurité",
          subtitle: "Méthode avant rapidité.",
          items: [
            "Préparer",
            "Consigner",
            "Réaliser",
            "Contrôler et tracer"
          ],
          tone: "blue",
        },
      },
    ],
  },

  "securite-incendie": {
    title: "Sécurité incendie, alerte et évacuation",
    shortTitle: "Sécurité incendie",
    subtitle:
      "Parcours e-learning structuré sur la prévention du risque incendie, l’alerte, l’alarme, les premiers moyens de secours, l’évacuation, les travaux par points chauds et les repères réglementaires utiles en exploitation.",
    duration: "65 à 85 minutes",
    level: "Débutant à intermédiaire",
    objective:
      "Comprendre comment naît et se propage un incendie, réagir correctement en cas d’alerte ou d’alarme, utiliser les premiers moyens dans le strict cadre prévu, appliquer les principes d’évacuation, encadrer les travaux par points chauds et intégrer les repères réglementaires essentiels du Code du travail, des ERP, des IGH et de l’habitation.",
    audience:
      "Tout personnel amené à évoluer dans des locaux tertiaires, industriels, logistiques ou recevant du public.",
    certificationNote:
      "Ce module constitue une sensibilisation théorique structurée. Les consignes du site, la reconnaissance des circulations, les exercices, les essais et la prise en main pratique des moyens de première intervention restent indispensables.",
    heroBadge: "Prévention incendie",
    finalMessage:
      "Vous avez parcouru les fondamentaux de la prévention incendie, de l’alerte, de l’évacuation et de l’encadrement des situations à risque. La vraie efficacité repose ensuite sur les consignes du site, les exercices périodiques, le traitement des écarts et l’application disciplinée des rôles prévus.",
    quizCtaLabel: "Passer au quiz sécurité incendie",
    sections: [
      {
        id: "naissance-feu",
        title: "1. Naissance du feu, développement et propagation",
        estimatedMinutes: 12,
        intro:
          "La prévention incendie commence par une lecture réaliste du sinistre: un feu ne naît pas par hasard, il trouve toujours un combustible, un comburant, une énergie d’activation et un contexte favorable à sa propagation.",
        content: [
          "Un feu naît de la rencontre d’une énergie d’activation, d’un combustible et d’un comburant. Dans les démarches de prévention, cette logique est fondamentale: on réduit le risque en supprimant les sources d’ignition, en maîtrisant les combustibles et en organisant les locaux de façon cohérente.",
          "Les causes fréquentes de départ de feu restent très concrètes: défaillance électrique, échauffement mécanique, travail par point chaud, stockage anarchique, déchets combustibles, cigarette mal gérée, défaut d’entretien ou intervention de maintenance mal préparée.",
          "Parmi les causes industrielles les plus récurrentes en entreprise : une installation électrique en mauvais état ou dépourvue de protection (fusible, disjoncteur absent ou défectueux), la projection de particules en fusion lors de travaux par points chauds (disqueuse, tronçonneuse, soudure, chalumeau), et l’électricité statique non dissipée dans les environnements de manipulation de produits inflammables. Ces causes sont évitables par la maintenance préventive, le permis de feu et les mesures de prévention adaptées.",
          "Le sinistre ne se limite pas au départ de feu. Il faut aussi comprendre la propagation par rayonnement, convection, fumées et circulation d’air. Une porte coupe-feu bloquée ouverte, un local encombré, un faux plafond non maîtrisé ou une gaine technique mal gérée peuvent accélérer l’extension du sinistre.",
          "Les fumées constituent souvent le premier danger mortel. Elles réduisent la visibilité, gênent l’orientation, intoxiquent rapidement et compliquent l’évacuation bien avant que les flammes n’atteignent les personnes. C’est pour cela que la prévention ne se résume pas à l’extincteur: elle inclut le compartimentage, le désenfumage, l’alarme et l’organisation humaine."
        ],
        keyPoints: [
          "Un feu naît d’une combinaison de facteurs identifiables.",
          "La propagation dépend aussi de l’organisation des locaux.",
          "Les fumées sont un danger majeur pour l’évacuation."
        ],
        legalRefs: [
          "INRS - démarche de prévention du risque incendie dans les lieux de travail.",
          "Code du travail - organisation de la prévention et des moyens de secours contre l’incendie."
        ],
        chapterImagePath: "/images/evolution-d-un-feu.jpg",
        chapterImageAlt:
          "Schéma d'évolution d'un feu avec inflammation, saut de feu et embrasement généralisé",
        visual: {
          title: "Triangle du feu",
          subtitle: "Comprendre l’origine du sinistre pour agir avant l’incendie.",
          animationKey: "triangle-du-feu" as const,
          items: [
            "Combustible",
            "Comburant",
            "Énergie d’activation",
            "Propagation facilitée si les locaux sont mal maîtrisés"
          ],
          tone: "red",
        },
      },
      {
        id: "alerte-alarme",
        title: "2. Alerte, alarme et premiers réflexes",
        estimatedMinutes: 10,
        intro:
          "Dans un incendie, les premières secondes servent à faire partir la bonne information, pas à improviser seul une reconnaissance dangereuse.",
        content: [
          "Détecter une situation anormale, transmettre l’alerte rapidement et reconnaître le signal d’alarme sont essentiels pour éviter l’aggravation. La chaîne d’information doit être simple, rapide et fiable.",
          "L’alerte permet d’informer les secours ou l’organisation interne qu’un événement sérieux est en cours. L’alarme permet de déclencher la réaction collective prévue par le site ou le bâtiment. Les deux ne doivent pas être confondues.",
          "Le premier bon réflexe consiste à alerter sans retard, sans banaliser la situation et sans se mettre en danger. Chercher à vérifier seul un local enfumé, retarder l’alarme ou perdre du temps à discuter du caractère réel du départ de feu est une erreur classique.",
          "Les informations transmises doivent être utiles: lieu précis, nature du phénomène observé, présence éventuelle de fumées ou de flammes, personnes potentiellement exposées, accès possible pour les secours."
        ],
        keyPoints: [
          "Alerter vite et utilement.",
          "Déclencher l’alarme si nécessaire selon la consigne du site.",
          "Ne pas vérifier seul une situation dangereuse."
        ],
        chapterImagePath: "/images/alarme-incendie.jpg",
        chapterImageAlt:
          "Déclencheur et dispositif d'alarme incendie en environnement de travail",
        resourceVideos: [
          {
            title: "Ressource INRS - risque incendie",
            description:
              "Sélection officielle INRS utile pour renforcer la culture de prévention avant l’alerte et l’intervention.",
            url: "https://www.youtube.com/@INRSFrance/search?query=risque%20incendie",
            provider: "INRS",
            ctaLabel: "Voir les ressources INRS",
          },
        ],
        visual: {
          title: "Réaction immédiate",
          subtitle: "Observer, alerter, déclencher, se mettre à l’abri.",
          animationKey: "alerte-incendie" as const,
          items: [
            "Repérer la situation anormale",
            "Alerter selon la procédure du site",
            "Déclencher si nécessaire",
            "Prévenir sans s’exposer"
          ],
          tone: "amber",
        },
      },
      {
        id: "premiers-moyens",
        title: "3. Premiers moyens de secours et limites d’action",
        estimatedMinutes: 12,
        intro:
          "Les moyens de première intervention existent pour agir très tôt, mais uniquement si le cadre, la formation et la sécurité personnelle le permettent.",
        content: [
          "L’extincteur, le robinet d’incendie armé ou d’autres moyens présents sur site ne sont utiles que si l’opérateur sait quand agir, quand s’arrêter et quand privilégier immédiatement l’évacuation.",
          "Le premier principe est simple: on ne lutte pas contre un feu si l’on se met soi-même en danger, si le local est enfumé, si la propagation est rapide, si l’on n’a pas d’issue derrière soi ou si le moyen n’est pas adapté au type de feu.",
          "La prise en main des moyens n’est pas une pure théorie. Elle suppose de connaître l’implantation des extincteurs, des RIA lorsqu’ils existent, les accès, les catégories de feux traitables dans le cadre du site, les conditions d’attaque et la manière d’alerter simultanément.",
          "L’extincteur et le RIA ne répondent pas exactement au même usage. L’extincteur permet une attaque très précoce avec un agent extincteur donné. Le RIA permet, lorsque l’emploi de l’eau n’est pas interdit, une action plus puissante et plus continue dans l’attente des secours. Il doit rester signalé clairement, accessible, situé à proximité des accès et protégé contre le gel si nécessaire.",
          "Les extincteurs pouvant être employés sur des appareils ou conducteurs sous tension inférieure à 1 000 volts portent une mention spécifique. Même dans ce cas, l’opérateur doit rester vigilant au ruissellement et ne jamais improviser une attaque en se mettant en danger.",
          "Deux familles d’extincteurs portables à retenir : l’extincteur à eau avec additif, dont l’agent émulseur rend l’eau plus pénétrante et mouillante pour les feux de classe A (solides) et B (liquides) ; et l’extincteur CO₂ (dioxyde de carbone), adapté aux feux électriques et au voisinage d’équipements sous tension car il est non conducteur et ne laisse aucun résidu. Un extincteur CO₂ de 2 kg a une durée de fonctionnement d’environ 8 secondes — il faut agir sans hésiter dès le départ de feu.",
          "Distance d’attaque recommandée : 1,5 à 2,5 m face au feu. En extérieur, se positionner de profil pour éviter la chaleur rayonnante. Toujours se placer entre le feu et la sortie de secours la plus proche. Se baisser au maximum pour éviter les fumées, car l’air frais se situe près du sol.",
          "Les colonnes sèches et colonnes humides sont des tuyauteries fixes installées dans les bâtiments pour faciliter l’intervention des sapeurs-pompiers : elles acheminent rapidement l’eau à tous les niveaux. Les colonnes sèches sont alimentées depuis l’extérieur par les pompiers ; les colonnes humides sont en permanence sous pression.",
          "Tout extincteur portatif conforme porte une estampille argentée NF, délivrée par AFNOR, attestant la conformité à la norme NF EN 3. Cette estampille est la preuve visible de la conformité technique de l’appareil.",
          "L’agent de terrain doit aussi retenir que l’intervention initiale n’est qu’une composante d’un dispositif plus large. Même après une extinction apparente, il faut signaler, baliser si nécessaire et laisser la suite à l’organisation prévue.",
          "Brûlure grave — conduite à tenir : en cas de brûlure thermique, arroser immédiatement et abondamment à l’eau froide pendant 15 minutes minimum, même sur les vêtements (sauf si ceux-ci adhèrent à la peau : ne jamais les retirer de force). Ne pas percer les cloques, ne pas appliquer de corps gras, de dentifrice ou de glace. Alerter le 15 (SAMU), le 18 (pompiers) ou le 112. Couvrir la brûlure avec un pansement propre non adhérent ou un film plastique en attendant les secours. Une brûlure étendue (supérieure à la paume de la main) ou profonde constitue une urgence médicale absolue."
        ],
        keyPoints: [
          "Intervenir seulement si la situation reste maîtrisable.",
          "Garder une issue et ne jamais s’exposer aux fumées.",
          "Alerter reste obligatoire, même en cas d’action initiale.",
          "Un RIA doit rester accessible, signalé et employé dans un cadre compatible avec l’eau.",
          "CO₂ = feux électriques, ~8 secondes pour 2 kg, distance 1,5-2,5 m.",
          "Estampille argentée NF EN 3 = conformité de l’extincteur.",
          "Brûlure : 15 min eau froide, ne pas retirer vêtements adhérents, alerter 15/18/112."
        ],
        forbiddenPoints: [
          "Se lancer seul dans un local enfumé.",
          "Utiliser un moyen sans connaître son cadre d’emploi.",
          "Croire qu’une extinction apparente clôt la situation."
        ],
        legalRefs: [
          "Code du travail - moyens de premier secours contre l’incendie et personnel instruit de leur emploi.",
          "INRS ED 6054 - Les extincteurs d’incendie portatifs, mobiles et fixes.",
          "INRS - évacuation, intervention et consignes de sécurité sur le lieu de travail.",
          "NF EN 3 - norme européenne des extincteurs portatifs (conformité attestée par l’estampille NF argentée).",
          "NF EN 2 - classes de feux (A solides, B liquides, C gaz, D métaux, E électrique, F huiles/graisses).",
          "Consignes du site et organisation interne de première intervention."
        ],
        chapterImagePath: "/images/extincteur-ria-extincteur-mobile.jpg",
        chapterImageAlt:
          "Extincteur et robinet d'incendie armé en entreprise à proximité d'une zone technique",
        visual: {
          title: "Classes de feux et extincteurs",
          subtitle: "Choisir le bon agent en fonction de la nature du foyer.",
          animationKey: "classes-extincteurs" as const,
          items: [
            "Alerte déjà donnée avant d’agir",
            "Feu encore limité, issue de repli disponible",
            "Extincteur adapté à la classe du feu",
            "Jamais d’eau sur feu électrique (classe E) ou graisses (classe F)"
          ],
          tone: "amber",
        },
      },
      {
        id: "évacuation",
        title: "4. Évacuation, mise en sécurité et point de rassemblement",
        estimatedMinutes: 12,
        intro:
          "L’évacuation n’est pas une fuite désordonnée: c’est une organisation collective visant à faire sortir, orienter, regrouper et rendre compte.",
        content: [
          "Une évacuation réussie repose sur des cheminements connus, un comportement calme, le respect des consignes et la prise en compte des personnes vulnérables.",
          "Le point de rassemblement, le comptage des personnes, la transmission d’une information fiable et l’attente des consignes font partie intégrante de l’évacuation. Sortir du bâtiment ne suffit pas: encore faut-il s’assurer que l’information remonte correctement et que personne ne retourne de sa propre initiative dans la zone sinistrée.",
          "Guide-file, serre-file, chargé d’évacuation ou encadrement de zone ont des rôles différents selon l’organisation du site. Même lorsqu’aucun rôle spécifique n’est attribué, chaque salarié doit connaître les circulations, l’alarme, les accès interdits et la conduite à tenir envers les visiteurs ou personnes vulnérables.",
          "Une bonne évacuation dépend aussi de la préparation: exercices réguliers, plans lisibles, circulations dégagées, portes fonctionnelles, zones de rassemblement identifiées, messages d’alarme compris et rôles clairs."
        ],
        resourceVideos: [
          {
            title: "Ressource INRS - évacuation incendie",
            description:
              "Sélection INRS utile pour ancrer les bons réflexes d’évacuation et de mise en sécurité des personnes.",
            url: "https://www.youtube.com/@INRSFrance/search?query=évacuation%20incendie",
            provider: "INRS",
            ctaLabel: "Voir les ressources INRS",
          },
        ],
        chapterImagePath: "/images/evacuation-securite-incendie.jpg",
        chapterImageAlt:
          "Brassards d'évacuation et d'organisation de mise en sécurité lors d'un exercice ou d'une situation incendie",
        visual: {
          title: "Principes d’évacuation",
          subtitle: "Quitter, rejoindre, compter, rendre compte.",
          animationKey: "evacuation-schema" as const,
          items: [
            "Suivre le cheminement",
            "Aider sans se mettre en danger",
            "Rejoindre le point de rassemblement",
            "Attendre les consignes"
          ],
          tone: "green",
        },
      },
      {
        id: "cadre-reglementaire",
        title: "5. Cadre réglementaire et contextes de bâtiments",
        estimatedMinutes: 12,
        intro:
          "Le cadre incendie n’est pas unique. Le socle vient du Code du travail, puis il se renforce ou se précise selon le type de bâtiment et l’activité accueillie.",
        content: [
          "Le Code du travail constitue le socle de base. L’article R4227-39 impose à l’employeur d’organiser une formation pratique et appropriée en matière de sécurité incendie pour ses salariés, à réaliser au moins tous les ans. Cette formation précise le comportement à adopter en cas d’incendie, les modalités de déclenchement de l’alarme, les circulations et issues de secours, les moyens de première intervention et le rôle de chacun. Les articles R4216-1 à R4216-34 régissent la conception des bâtiments de travail (dégagements, compartimentage, désenfumage), et les articles R4227-1 à R4227-57 organisent les mesures de prévention et d’exploitation.",
          "En Code du travail, l’employeur doit organiser les moyens de premier secours contre l’incendie, les consignes, les essais et les exercices. Cela constitue le socle de base applicable dans les lieux de travail.",
          "Dans les établissements recevant du public, la logique est complétée par des règles spécifiques de sécurité contre l’incendie et la panique, avec des exigences renforcées sur l’alarme, l’évacuation, les moyens de secours, le compartimentage et, selon les cas, le système de sécurité incendie.",
          "Dans les immeubles de grande hauteur, l’organisation devient plus exigeante encore: compartimentage, désenfumage, alarme, équipes de sécurité et exploitation sont traités dans un cadre très structuré.",
          "En habitation collective, les exigences poursuivent le même objectif de protection des personnes, mais selon des règles propres. Dans l’industrie ou la logistique, d’autres prescriptions peuvent aussi s’ajouter selon le classement du site et la nature des risques."
        ],
        keyPoints: [
          "Code du travail = socle de base.",
          "ERP = sécurité du public.",
          "IGH = organisation renforcée.",
          "Le type de bâtiment change le niveau d’exigence."
        ],
        legalRefs: [
          "Code du travail - articles R.4227-28 à R.4227-39 sur les dégagements, moyens de secours, consignes, essais et exercices.",
          "Arrêté du 25 juin 1980 modifié - règlement de sécurité contre les risques d’incendie et de panique dans les ERP.",
          "Arrêté du 31 janvier 1986 modifié - protection contre l’incendie des bâtiments d’habitation.",
          "Arrêté du 30 décembre 2011 - règlement de sécurité pour la construction des immeubles de grande hauteur et leur protection contre les risques d’incendie et de panique."
        ],
        visual: {
          title: "Comprendre les environnements réglementaires",
          subtitle: "Même objectif de protection, mais des cadres différents selon le bâtiment.",
          items: [
            "Code du travail",
            "ERP",
            "IGH",
            "Habitation / autres prescriptions de site"
          ],
          tone: "blue",
        },
      },
      {
        id: "consignes-exercices",
        title: "6. Consignes, essais, exercices et culture de sécurité",
        estimatedMinutes: 10,
        intro:
          "Un dispositif incendie n’est efficace que s’il est connu, exercé et maintenu dans le temps.",
        content: [
          "Les consignes de sécurité incendie ne doivent pas rester théoriques. Elles doivent être connues, affichées lorsque nécessaire, expliquées, testées et adaptées aux réalités du site: zones à risques particuliers, accueil du public, horaires décalés, prestataires, locaux techniques ou stockages.",
          "Les consignes générales, spéciales et particulières doivent être cohérentes avec l’activité et les locaux. Les plans d’évacuation et les plans d’intervention doivent rester lisibles, utiles et placés là où ils servent réellement à l’action.",
          "Les essais et exercices servent à vérifier que les cheminements, les messages, les automatismes, les rôles et les réactions humaines fonctionnent réellement. Un bâtiment peut être correctement équipé et rester inefficace si personne ne sait quoi faire quand l’alarme se déclenche.",
          "La culture incendie repose sur la régularité: essais, comptes rendus, traitement des écarts, retour d’expérience et mise à jour des consignes après modification des locaux ou de l’exploitation. Une consigne n’est efficace que si elle est expliquée, commentée et réentraînée."
        ],
        keyPoints: [
          "Consignes connues et accessibles.",
          "Essais et exercices réguliers.",
          "Retour d’expérience et traitement des écarts."
        ],
        chapterImagePath: "/images/formation-ssi.jpg",
        chapterImageAlt:
          "Session de formation ou d'information autour des consignes incendie et de l'organisation d'évacuation",
        visual: {
          title: "Le bon dispositif est aussi humain",
          subtitle: "Écrire une consigne ne suffit pas: il faut la faire vivre.",
          items: [
            "Informer",
            "Tester",
            "Corriger",
            "Rejouer les scénarios utiles"
          ],
          tone: "green",
        },
      },
      {
        id: "travaux-points-chauds",
        title: "7. Travaux par points chauds et permis de feu",
        estimatedMinutes: 11,
        intro:
          "Les travaux par points chauds sont une cause classique d’incendie en entreprise. Ils imposent une préparation particulière avant, pendant et après l’intervention.",
        content: [
          "Le soudage, le meulage, le découpage, le chalumeau et d’autres travaux générant flammes, projections ou échauffements ne doivent jamais être banalisés. L’INRS rappelle qu’ils représentent une part importante des origines d’incendie dans les entreprises.",
          "Le permis de feu n’est pas un papier de plus. Il sert à formaliser l’analyse de la zone, les produits ou stockages voisins, les opérateurs autorisés, la durée de validité, les matériels employés et les mesures de mise en sécurité à vérifier avant le démarrage.",
          "Selon la situation, il faut notamment éloigner ou protéger les combustibles, baliser la zone, vérifier les moyens d’extinction, neutraliser de façon encadrée certains automatismes si la procédure du site l’impose, consigner les énergies utiles, nettoyer, dépoussiérer, dégazer ou inertiser lorsque le risque l’exige.",
          "La vigilance ne s’arrête pas à la fin du point chaud. Une surveillance post-travaux et une revalidation de la zone sont indispensables pour détecter une reprise de feu, un échauffement résiduel ou une situation laissée dégradée."
        ],
        keyPoints: [
          "Point chaud = risque incendie majeur si la zone n’est pas préparée.",
          "Le permis de feu formalise l’analyse et les mesures de sécurité.",
          "La surveillance après travaux fait partie intégrante du dispositif."
        ],
        forbiddenPoints: [
          "Commencer un point chaud sans autorisation ni analyse de zone.",
          "Laisser combustibles et dépôts au voisinage immédiat.",
          "Clôturer le chantier sans contrôle ni surveillance post-travaux."
        ],
        legalRefs: [
          "INRS ED 6030 - Le permis de feu, démarche et document support.",
          "Formulaire INRS ED 6030 - mesures de mise en sécurité, responsabilités et validation des travaux par points chauds.",
          "Plan de prévention, PPSPS ou autorisation de travail selon l’organisation du site et des entreprises intervenantes."
        ],
        visual: {
          title: "Avant d’allumer, on sécurise",
          subtitle: "Préparer la zone, autoriser, contrôler, surveiller.",
          animationKey: "permis-feu-etapes" as const,
          items: [
            "Analyser la zone et les risques voisins",
            "Déplacer ou protéger les combustibles",
            "Vérifier les moyens et la consignation utile",
            "Surveiller pendant et après les travaux"
          ],
          tone: "amber",
        },
      },
      {
        id: "prevention-quotidienne",
        title: "8. Prévention au quotidien et anomalies à signaler",
        estimatedMinutes: 10,
        intro:
          "La majorité des situations dangereuses visibles avant sinistre relèvent de l’exploitation quotidienne: désordre, stockage, non-respect des équipements et banalisation des écarts.",
        content: [
          "La sécurité incendie dépend largement des comportements quotidiens : ordre, propreté, maîtrise des déchets, respect des consignes électriques et dégagement des issues.",
          "La prévention repose aussi sur le signalement des anomalies : bloc porte non conforme, dispositif hors service, déclencheur manuel inaccessible, stockage inadapté, travaux non encadrés, issue condamnée, local électrique encombré ou produit inflammable mal géré.",
          "Le bon niveau professionnel n’est pas de s’habituer aux écarts. C’est de les voir, de les signaler et de contribuer à leur suppression avant qu’ils ne deviennent un départ de feu ou un obstacle à l’évacuation."
        ],
        forbiddenPoints: [
          "Bloquer une porte coupe-feu.",
          "Stocker devant une issue.",
          "Masquer un extincteur ou un déclencheur manuel.",
          "Laisser s’installer un désordre chronique."
        ],
        chapterImagePath: "/images/extincteurs-de-chantier.jpg",
        chapterImageAlt:
          "Ensemble d'extincteurs mobiles de chantier ou d'intervention regroupés pour mise à disposition",
        visual: {
          title: "Prévention quotidienne",
          subtitle: "Les écarts simples créent souvent les sinistres.",
          items: [
            "Garder les accès dégagés",
            "Respecter les équipements de sécurité",
            "Limiter les combustibles inutiles",
            "Signaler les anomalies"
          ],
          tone: "slate",
        },
      },
    ],
  },

  "ssi-exploitation": {
    title: "Exploitation des SSI - fondamentaux",
    shortTitle: "SSI",
    subtitle:
      "Parcours e-learning structuré sur le fonctionnement d’un système de sécurité incendie, son exploitation au quotidien, ses limites et ses principaux repères réglementaires et normatifs.",
    duration: "65 à 90 minutes",
    level: "Intermédiaire",
    objective:
      "Comprendre le rôle d’un SSI, distinguer les grandes fonctions SDI / SMSI / CMSI / UGA / DAS, connaître les réflexes d’exploitation, savoir lire les états usuels d’une installation et situer les principaux référentiels français applicables.",
    audience:
      "Exploitants, responsables de site, encadrement, personnel technique ou utilisateurs amenés à interagir avec un SSI sans en assurer la conception réglementaire complète.",
    certificationNote:
      "Ce module traite de l’exploitation et de la compréhension fonctionnelle. Il ne remplace ni la coordination SSI, ni l’étude de conception, ni la maintenance spécialisée, ni les vérifications réglementaires du site.",
    heroBadge: "Système de sécurité incendie",
    finalMessage:
      "Vous disposez désormais d’une base pour comprendre le rôle d’un SSI et dialoguer plus efficacement avec l’exploitant, le mainteneur, le coordinateur SSI, la sécurité incendie ou la maîtrise d’œuvre. En exploitation, le professionnalisme consiste à reconnaître ses limites et à tracer correctement les écarts.",
    quizCtaLabel: "Passer au quiz SSI",
    sections: [
      {
        id: "role-ssi",
        title: "1. Rôle d’un SSI",
        estimatedMinutes: 12,
        intro:
          "Le SSI n’est pas un simple boîtier d’alarme. C’est un ensemble organisé destiné à détecter, signaler, traiter et piloter des fonctions de sécurité incendie.",
        content: [
          "Un système de sécurité incendie participe à la détection, à l’alarme, à la mise en sécurité et à l’exploitation des informations utiles en cas d’incendie.",
          "Selon les bâtiments et leur réglementation, il peut intégrer ou piloter différentes fonctions : détection automatique ou manuelle, diffusion de l’alarme, compartimentage, désenfumage, gestion des issues, arrêt technique ou commandes associées.",
          "Le bon niveau d’exploitation ne consiste pas à connaître toute l’ingénierie d’un SSI, mais à savoir ce que l’installation fait, quels équipements elle pilote, quels locaux elle protège et quelles conséquences une information incendie peut déclencher sur le site."
        ],
        chapterImagePath: "/images/fonctionnement-systeme-incendie.jpg",
        chapterImageAlt:
          "Schéma simplifié de fonctionnement d'un système incendie avec détecteurs, déclencheurs manuels, sirène et centrale",
        resourceVideos: [
          {
            title: "INRS France - Selection videos risque incendie",
            description:
              "Sélection officielle INRS pour compléter les notions d'alarme, de détection, de réflexes incendie et de mise en sécurité.",
            url: "https://www.youtube.com/@INRSFrance/search?query=risque%20incendie",
            provider: "INRS France",
            ctaLabel: "Voir la selection INRS",
          },
        ],
        visual: {
          title: "Fonctions principales d’un SSI",
          subtitle: "Détecter, alerter, mettre en sécurité.",
          animationKey: "alerte-incendie" as const,
          items: [
            "Détection incendie",
            "Diffusion de l’alarme",
            "Mise en sécurité incendie",
            "Transmission d’informations d’exploitation"
          ],
          tone: "blue",
        },
        scenarios: [
          {
            situation: "Un déclenchement d'alarme SSI se produit en dehors des heures de travail. La centrale indique 'Zone 3 — Cuisine'. L'astreinte bâtiment dit que 'c'est sûrement encore une fausse alarme comme la semaine dernière'.",
            question: "Comment réagissez-vous face à une alarme potentiellement considérée comme fausse ?",
            wrongActions: [
              "Acquitter l'alarme à distance sur la base de l'historique.",
              "Attendre 10 minutes pour voir si l'alarme se confirme.",
              "Laisser l'astreinte décider sans protocole.",
            ],
            correctActions: [
              "Traiter chaque déclenchement comme réel jusqu'à preuve du contraire.",
              "Envoyer quelqu'un vérifier physiquement la zone signalée.",
              "Suivre le protocole SSI : vérification terrain, levée de doute, remise en état ou appel des secours.",
            ],
            explanation: "La répétition de fausses alarmes crée une accoutumance dangereuse. Une vraie alarme ignorée peut avoir des conséquences irréversibles. Le protocole SSI prévient les décisions improvisées sous pression. Aucune alarme ne doit être acquittée sans levée de doute terrain.",
            normRef: "NF S 61-933 — exploitation SSI, procédures de levée de doute",
          },
        ],

      },
      {
        id: "sdi-smsi",
        title: "2. SDI, SMSI, CMSI, UGA et DAS",
        estimatedMinutes: 14,
        intro:
          "Pour exploiter un SSI, il faut distinguer les familles fonctionnelles sans mélanger détection, traitement et commande de sécurité.",
        content: [
          "Le système de détection incendie recueille les informations de détection. Le système de mise en sécurité incendie commande ensuite les fonctions de sécurité prévues.",
          "L’exploitation d’un SSI suppose de savoir identifier l’origine d’une information, reconnaître une alarme feu, un dérangement, un défaut technique, un défaut secteur, une perte de liaison ou une situation d’essai.",
          "Dans la pratique, il est utile de connaître le rôle d’un CMSI, d’une UGA et des dispositifs actionnés de sécurité. Même sans intervenir en maintenance, l’exploitant doit comprendre qu’un ordre incendie peut fermer des portes, libérer des issues, déclencher un désenfumage ou envoyer un report d’information.",
          "L’enjeu est d’éviter les confusions: une alarme feu n’est pas un simple dérangement, un réarmement n’est pas une réparation, et une commande de sécurité ne doit jamais être neutralisée sans procédure."
        ],
        keyPoints: [
          "SDI = collecte et traitement des informations de détection.",
          "SMSI = commandes de mise en sécurité.",
          "CMSI, UGA et DAS sont des repères d’exploitation essentiels.",
          "L’exploitation repose sur la lecture correcte des états."
        ],
        chapterImagePath: "/images/schema-ssi.gif",
        chapterImageAlt:
          "Schéma SSI avec équipement d'alarme, mise en sécurité, DAC, DAS et diffuseurs sonores",
        visual: {
          title: "Lecture simple de l’architecture SSI",
          subtitle: "Information puis action de sécurité.",
          animationKey: "ssi-chaine-fonctionnelle" as const,
          items: [
            "Détecteur ou déclencheur manuel",
            "Traitement de l’information incendie",
            "Commande des fonctions de sécurité",
            "Exploitation et retour d’information"
          ],
          tone: "blue",
        },
      },
      {
        id: "normes-référentiels",
        title: "3. Référentiels normatifs et cadres réglementaires utiles",
        estimatedMinutes: 12,
        intro:
          "Un exploitant n’a pas besoin de réciter toutes les normes, mais il doit savoir sur quels repères repose le SSI de son bâtiment.",
        content: [
          "La famille NF S 61 sert de base de référence dans le domaine SSI. Elle couvre notamment les dispositions générales, les règles d’installation et certaines exigences techniques selon les fonctions considérées.",
          "La NF S 61-931 constitue une référence générale du SSI, la NF S 61-932 traite des règles d’installation du SMSI et la NF S 61-970 des règles d’installation du SDI.",
          "Le SSI s’inscrit aussi dans un contexte réglementaire de bâtiment. En ERP, en IGH ou dans certains établissements techniques, la présence, la catégorie ou les fonctions attendues du SSI dépendent du règlement applicable et de l’analyse de risque associée.",
          "L’exploitant doit donc retenir une idée simple: le SSI n’est pas un équipement isolé, c’est un maillon d’un dispositif réglementaire global de sécurité incendie."
        ],
        keyPoints: [
          "NF S 61-931 : cadre général SSI.",
          "NF S 61-932 : règles d’installation du SMSI.",
          "NF S 61-970 : règles d’installation du SDI.",
          "ERP et IGH imposent des exigences d’exploitation cohérentes avec le bâtiment."
        ],
        legalRefs: [
          "Famille NF S 61 - références françaises courantes en matière de SSI.",
          "Arrêté du 25 juin 1980 modifié - règlement de sécurité contre les risques d’incendie et de panique dans les ERP.",
          "Arrêté du 30 décembre 2011 - règlement de sécurité pour les IGH.",
          "Consignes et dossier de sécurité propres au site exploité."
        ],
        chapterImagePath: "/images/niveau-ssi.jpg",
        chapterImageAlt:
          "Niveau de risque, catégories de SSI et types d'équipement d'alarme",
        visual: {
          title: "Référentiels à connaître",
          subtitle: "Normes et textes se complètent.",
          illustrationKey: "authorized-forbidden" as const,
          items: [
            "NF S 61-931",
            "NF S 61-932",
            "NF S 61-970",
            "Textes ERP / IGH / site"
          ],
          tone: "green",
        },
      },
      {
        id: "lecture-états",
        title: "4. Lire les états: alarme feu, dérangement, défaut, essai",
        estimatedMinutes: 14,
        intro:
          "La qualité d’exploitation d’un SSI se joue souvent sur la capacité à distinguer correctement les états affichés et à déclencher la bonne réponse.",
        content: [
          "Une alarme feu doit être traitée comme une information potentiellement réelle jusqu’à levée de doute organisée selon la procédure du site. Un dérangement traduit un défaut de disponibilité ou de fonctionnement qui doit être suivi et traité. Un essai doit être identifiable comme tel pour éviter les confusions.",
          "Le risque d’erreur est important lorsque les équipes s’habituent à des défauts répétitifs ou à des signaux considérés comme normaux. Cette banalisation dégrade la culture incendie du site et affaiblit la réponse en cas de vrai sinistre.",
          "Une bonne exploitation suppose donc une traçabilité: date, heure, localisation, type d’information, mesure prise, interlocuteur contacté, retour à la normale ou suite à engager."
        ],
        keyPoints: [
          "Alarme feu = traitement immédiat selon consigne.",
          "Dérangement = anomalie technique à suivre.",
          "Essai = état encadré et identifié comme tel."
        ],
        chapterImagePath: "/images/alarme-type-4.png",
        chapterImageAlt:
          "Schéma d'alarme type 4 avec déclencheur manuel, équipement d'alarme et diffuseur sonore",
        visual: {
          title: "Ne pas tout lire de la même manière",
          subtitle: "Le bon réflexe dépend du type exact d’information affichée.",
          animationKey: "ssi-chaine-fonctionnelle" as const,
          items: [
            "Alarme feu",
            "Dérangement",
            "Défaut technique",
            "Essai / mise hors service encadrée"
          ],
          tone: "amber",
        },
      },
      {
        id: "bons-reflexes",
        title: "5. Bons réflexes d’exploitation et limites utilisateur",
        estimatedMinutes: 13,
        intro:
          "L’exploitation d’un SSI demande de l’autonomie, mais jamais au prix d’une dérive vers la maintenance ou la neutralisation improvisée.",
        content: [
          "En exploitation courante, il faut connaître les accès autorisés, les procédures d’acquittement ou de réarmement prévues par l’organisation du site, et surtout les limites de ce qui peut être fait par un utilisateur non mainteneur.",
          "Une alarme, un dérangement ou un défaut technique ne doivent jamais être ignorés. Toute anomalie répétitive doit être tracée, analysée et traitée.",
          "L’exploitant doit aussi savoir quand escalader: mainteneur, sécurité incendie, coordinateur SSI, responsable de site, prestataire ou secours externes selon la situation.",
          "Le professionnalisme consiste à comprendre, agir dans son rôle, puis transmettre proprement. Un réarmement ne remplace ni une analyse, ni une réparation."
        ],
        forbiddenPoints: [
          "Neutraliser un équipement sans procédure.",
          "Réarmer à répétition sans analyse.",
          "Confondre exploitation et maintenance spécialisée.",
          "Laisser persister des défauts chroniques sans traitement."
        ],
        chapterImagePath: "/images/centrale-ssi.jpg",
        chapterImageAlt:
          "Personnel exploitant ou technique en situation de suivi d'un système de sécurité incendie",
        visual: {
          title: "Exploiter un SSI avec méthode",
          subtitle: "Comprendre, agir dans son rôle, tracer.",
          illustrationKey: "emergency-response" as const,
          items: [
            "Identifier le type d’information",
            "Appliquer la consigne du site",
            "Alerter le bon interlocuteur",
            "Tracer et suivre l’anomalie"
          ],
          tone: "red",
        },
        scenarios: [
          {
            situation: "Lors d'une ronde, vous constatez qu'un détecteur automatique d'incendie affiche un voyant défaut (orange). La centrale ne signale rien car le câble de supervision est débranché.",
            question: "Que faites-vous face à un défaut de supervision non remonté à la centrale ?",
            wrongActions:             [
              "Rebrancher vous-même le câble de supervision.",
              "Ignorer car la centrale ne l'a pas signalé.",
              "Attendre la prochaine maintenance préventive.",
            ],
            correctActions:             [
              "Documenter le défaut avec horodatage et localisation précise.",
              "Signaler immédiatement au responsable sécurité et à la maintenance SSI.",
              "Ne pas modifier le câblage SSI sans habilitation spécifique.",
            ],
            explanation: "Un défaut de supervision signifie qu'une partie du SSI fonctionne en aveugle. C'est un état non acceptable qui doit être résolu rapidement. Le câblage SSI ne peut être modifié que par un technicien qualifié. Le signalement déclenche l'intervention appropriée.",
            normRef: "NF S 61-933 — exploitation SSI, signalement des défauts et interventions",
          },
        ],

      },
    ],
  },

  sprinkler: {
    title: "Exploitation sprinkler - fondamentaux techniques",
    shortTitle: "Sprinkler",
    subtitle:
      "Parcours e-learning structuré sur le fonctionnement d’une installation sprinkler, sa surveillance, ses anomalies d’exploitation et les grands référentiels rencontrés sur les sites protégés.",
    duration: "60 a 85 minutes",
    level: "Intermediaire",
    objective:
      "Comprendre le rôle d’une installation sprinkler, reconnaître ses composants, suivre ses états d’exploitation, traiter les anomalies et garder une protection adaptée au risque réel, sans la confondre avec un système fixe d’extinction à gaz.",
    audience:
      "Personnel d'exploitation, maintenance, encadrement technique, responsables de site, utilisateurs en environnement industriel, logistique ou tertiaire.",
    certificationNote:
      "Ce module traite de l'exploitation et de la compréhension fonctionnelle. Il ne remplace ni une étude sprinkler, ni un audit de conformité, ni une mission de conception, ni la vérification spécialisée des référentiels applicables au site.",
    heroBadge: "Protection incendie",
    finalMessage:
      "Vous avez acquis les fondamentaux de l'exploitation sprinkler. La performance dépend ensuite du maintien en état, des contrôles périodiques, de la traçabilité et de l'adéquation permanente entre protection installée et risque réel.",
    quizCtaLabel: "Passer au quiz sprinkler",
    sections: [
      {
        id: "principe",
        title: "1. Principe de fonctionnement",
        estimatedMinutes: 12,
        intro:
          "Le sprinkler n'est ni un décor ni un déversement général automatique. C'est un système conçu pour réagir localement et tôt, au plus près du foyer.",
        content: [
          "Une installation sprinkler est conçue pour détecter et maîtriser automatiquement un incendie au plus près du foyer grâce au déclenchement thermique des têtes concernées. Selon la NFPA, un système fonctionnel contrôle efficacement près de 97 % des départs de feu.",
          "Elle ne fonctionne pas comme un déversement général : seules les têtes exposées à une chaleur suffisante s'ouvrent. Chaque tête est indépendante — c'est une erreur fréquente de croire que toutes s'activent simultanément.",
          "Le mécanisme repose sur une ampoule en verre remplie de liquide qui se brise à une température nominale précise, identifiable par sa couleur : orange à 57 °C, rouge à 68 °C (le plus courant pour les installations standard), jaune à 79 °C, vert à 93–100 °C, bleu à 121–141 °C, mauve à 163–182 °C. La température nominale doit être supérieure d'au moins 30 °C à la température ambiante maximale du local.",
          "Il existe quatre types principaux d'installations. Le système humide — le plus répandu — maintient les canalisations sous eau en permanence pour une réaction immédiate ; il équipe la majorité des ERP, entrepôts chauffés et sites industriels. Le système à préaction combine un réseau sec et une détection préalable : l'eau n'entre dans les canalisations qu'après un signal d'alarme, ce qui évite tout déclenchement accidentel ; il protège les archives, musées et data centers. Le système sec utilise des canalisations remplies d'air sous pression, adapté aux zones exposées au gel comme les parkings couverts ou entrepôts non chauffés. Le système déluge dispose de toutes les têtes ouvertes en permanence et projette massivement l'eau dès l'activation du poste de contrôle ; il est réservé aux sites industriels à haut risque ou aux feux de liquides inflammables.",
          "Le sprinkler est conçu pour contenir, maîtriser ou contrôler un incendie en attendant les autres moyens de secours. Il ne remplace pas l'organisation humaine ni l'intervention des secours."
        ],
        chapterImagePath: "/elearning/sprinkler/sprinkler-principe.svg",
        chapterImageAlt:
          "Les 4 étapes d'activation d'un sprinkler : chaleur → ampoule brisée → eau projetée → alarme déclenchée",
        keyPoints: [
          "97 % des départs de feu contrôlés quand le système est fonctionnel (NFPA).",
          "Activation locale uniquement — pas de déversement général.",
          "Codes couleur ampoule : orange 57 °C, rouge 68 °C (standard), jaune 79 °C, vert 93–100 °C, bleu 121–141 °C.",
          "4 types : humide (standard), préaction (zones sensibles), sec (gel), déluge (risque très élevé).",
        ],
        visual: {
          title: "Principe sprinkler",
          subtitle: "Détection thermique locale et attaque précoce.",
          animationKey: "sprinkler-activation" as const,
          items: [
            "La chaleur brise l'ampoule de la tête exposée",
            "L'eau sous pression est libérée localement",
            "L'alarme hydraulique et électrique est transmise",
            "Le feu est maîtrisé ou contenu avant l'arrivée des secours"
          ],
          tone: "blue",
        },
      },
      {
        id: "composants",
        title: "2. Composants principaux",
        estimatedMinutes: 12,
        intro:
          "Un exploitant sprinkler doit savoir reconnaître l'architecture générale de l'installation, même s'il n'en assure pas la conception.",
        content: [
          "Une installation comprend notamment les têtes sprinkler, un réseau de tuyauteries, des postes de contrôle, une source d'eau et des dispositifs d'alarme.",
          "L'exploitation suppose de savoir reconnaître les organes essentiels, les positions normales d'exploitation et les états anormaux a surveiller.",
          "La disponibilité de la source d'eau, l'accessibilité des organes, l'état apparent du réseau, la lisibilité des repères, la position normale des vannes et la compréhension des alarmes sont des points de vigilance de premier niveau.",
          "Le niveau attendu n'est pas celui d'un bureau d'études, mais celui d'un professionnel capable de voir immédiatement ce qui n'est pas conforme à l'état normal d'exploitation.",
          "La NF EN 12845 classe les installations selon le niveau de risque du bâtiment ou de l'activité : LH (risque léger — bureaux, hôtels), OH1 à OH4 (risque ordinaire — industrie légère à moyenne), HH / HHP / HHS (risque élevé — stockage de produits combustibles). Cette classe détermine la densité d'eau requise, la pression, le type de têtes et la surface maximale de chaque tête. Un exploitant doit savoir dans quelle classe est son installation, car tout changement d'activité ou de stockage peut exiger une révision de la protection."
        ],
        keyPoints: [
          "Poste de contrôle",
          "Source d'eau",
          "Réseau de distribution",
          "Têtes sprinkler",
          "Alarme et report",
          "Classe de risque : LH / OH / HH — à connaître pour son site"
        ],
        chapterImagePath: "/elearning/sprinkler/sprinkler-types.svg",
        chapterImageAlt:
          "Les 4 types de systèmes sprinkler : humide, préaction, sec, déluge — APSAD R1 / NF EN 12845",
        visual: {
          title: "Composants d'une installation sprinkler",
          subtitle: "Les organes à connaître en exploitation.",
          animationKey: "sprinkler-activation" as const,
          items: [
            "Source d'eau (bac, réservoir, réseau)",
            "Poste de contrôle (vannes, alarmes)",
            "Réseau de distribution (tuyauteries)",
            "Têtes sprinkler (ampoule + déflecteur)"
          ],
          tone: "blue",
        },
      },
      {
        id: "anomalies",
        title: "3. Anomalies et vigilance",
        estimatedMinutes: 12,
        intro:
          "Une protection sprinkler peut exister sur le papier et être gravement degradee dans la realite si les anomalies d'exploitation sont banalisees.",
        content: [
          "Une vanne fermee, une pression anormale, une alarme non traitee, un local source encombre, une fuite ou une corrosion visible doivent être considerees avec serieux.",
          "L'exploitation sprinkler demande de la rigueur, de la traçabilité et une remontee rapide des écarts.",
          "Un local technique inaccessible, un accès obstrue, un stockage trop proche des têtes, une tête peinte ou heurtée, une modification non déclarée du process ou un réseau détérioré peuvent réduire fortement l'efficacité reelle de l'installation.",
          "Les anomalies doivent être consignees, traitees et suivies jusqu'au retour a la situation nominale.",
          "La NF EN 12845 distingue deux catégories d'alarmes selon leur nature. Les alarmes de type A signalent un débit d'eau dans le réseau ou la mise en marche d'une pompe : elles correspondent à un déclenchement réel ou suspecté et imposent une réponse incendie immédiate avec information des secours. Les alarmes de type B signalent un défaut technique : basse pression d'air dans un système à air, vanne partiellement fermée, défaut secteur, niveau de carburant bas sur groupe diesel. Elles n'indiquent pas un incendie mais une dégradation de la disponibilité du système, qui doit déclencher l'appel du technicien de maintenance. Confondre ces deux types est une erreur fréquente et potentiellement grave."
        ],
        forbiddenPoints: [
          "Fermer une vanne sans procedure.",
          "Ignorer une alarme de type A ou B.",
          "Encombrer les organes d'accès.",
          "Considerer une fuite comme anodine.",
          "Traiter une alarme de type A comme un simple défaut technique."
        ],
        chapterImagePath: "/elearning/sprinkler/sprinkler-alarmes-ab.svg",
        chapterImageAlt:
          "Distinction alarme type A (feu) et type B (défaut technique) — réponses différentes",
        visual: {
          title: "Écarts a surveiller",
          subtitle: "Une petite anomalie peut degrader toute la protection.",
          animationKey: "alerte-incendie" as const,
          items: [
            "Vanne non conforme",
            "Pression anormale",
            "Alarme non traitee",
            "Encombrement ou defaut visible"
          ],
          tone: "red",
        },
        scenarios: [
          {
            situation: "Lors d'une ronde, vous constatez que la pression du réseau sprinkler affichée sur le manomètre est à 5,2 bar alors que la consigne minimum est 8 bar. Aucune alarme n'a retenti.",
            question: "Que faites-vous face à une chute de pression non signalée sur le réseau sprinkler ?",
            wrongActions:             [
              "Considérer que le manomètre est en panne et attendre la maintenance.",
              "Redémarrer manuellement la pompe de surpression.",
              "Ignorer car il n'y a pas eu d'alarme.",
            ],
            correctActions:             [
              "Signaler immédiatement la pression anormale au responsable et à la maintenance.",
              "Vérifier s'il y a un écoulement visible ou une tête sprinkler ouverte.",
              "Ne pas modifier manuellement les paramètres sans habilitation.",
            ],
            explanation: "Une chute de pression non signalée peut indiquer une fuite, une tête ouverte ou une défaillance système. Sous le seuil minimum, le réseau ne peut pas assurer sa fonction d'extinction. Tout écart doit être traité comme une urgence technique.",
            normRef: "APSAD R1 / NF EN 12845 — surveillance et maintenance des installations sprinkler",
          },
        ],

      },
      {
        id: "référentiels",
        title: "4. référentiels et cadre d'exploitation",
        estimatedMinutes: 12,
        intro:
          "Le sprinkler est souvent associé à des référentiels techniques exigeants. L'exploitant n'a pas à les réciter, mais il doit comprendre leur rôle.",
        content: [
          "Les installations sprinkler sont fréquemment exploitées, surveillées ou auditées au regard de référentiels tels qu'APSAD R1, EN 12845, NFPA 13 ou certaines fiches FM selon le contexte du site.",
          "L'enjeu est de connaître les exigences de maintien en état, les essais périodiques et la cohérence entre la protection installée et le risque réellement présent.",
          "Selon les sites, le référentiel contractuel ou technique ne sera pas le même. Cela ne change pas le fond : une installation n'est performante que si elle est maintenue disponible, essayée, surveillée et adaptée à la réalité du stockage ou du process.",
          "Il faut toujours relier la technique au terrain : hauteur de stockage, nature des produits, évolution d'activité, encombrement, ambiance corrosive, travaux, indisponibilités temporaires et mesures compensatoires."
        ],
        legalRefs: [
          "EN 12845 - référentiel europeen souvent rencontre pour les installations sprinkler.",
          "APSAD R1 — référentiel fréquemment utilisé en France dans les démarches de protection incendie.",
          "NFPA 13 et FM Global Data Sheets — référentiels pouvant s'appliquer selon les sites, cahiers des charges ou assureurs.",
          "Consignes d'exploitation, dossier de sécurité et exigences contractuelles du site protégé."
        ],
        chapterImagePath: "/elearning/sprinkler/sprinkler-referentiels.svg",
        chapterImageAlt:
          "Référentiels applicables : NF EN 12845, APSAD R1 (version 2020), NFPA 13, FM Global — cadre d'exploitation sprinkler",
        visual: {
          title: "Cadre technique d'exploitation",
          subtitle: "Protection installee, risque reel, organisation du site.",
          illustrationKey: "authorized-forbidden" as const,
          items: [
            "référentiel technique applicable",
            "Conditions normales d'exploitation",
            "Surveillance et essais",
            "Adequation avec le risque stocke ou process"
          ],
          tone: "amber",
        },
      },
      {
        id: "icpe-1510",
        title: "5. Focus entrepots, stockage et ICPE 1510",
        estimatedMinutes: 12,
        intro:
          "Dans les environnements logistiques et les entrepôts, le sprinkler doit être lu dans une logique globale de maîtrise du risque incendie.",
        content: [
          "Dans les entrepots couverts relevant de la rubrique ICPE 1510, la prevention des sinistres s'apprecie dans un ensemble plus large de prescriptions : cellules, séparation, toiture, moyens de secours, exploitation et gestion du risque.",
          "Toute modification d'exploitation significative peut justifier une relecture de la strategie incendie du site afin de confirmer que la protection reste adaptee.",
          "Changer la hauteur de stockage, la nature des marchandises, la densite de palettes, le conditionnement ou l'occupation d'une zone peut remettre en cause l'adequation entre le risque et la protection installee.",
          "Le sprinkler n'est donc pas un passe-partout. Il reste performant dans un cadre de conception et d'exploitation donne, qui doit rester cohérent dans le temps.",
          "La NF EN 12845 classe les marchandises en quatre catégories selon leur inflammabilité. La catégorie I regroupe les matières peu combustibles : métaux, verre, céramiques. La catégorie II couvre le papier, le carton, les fibres naturelles. La catégorie III comprend les textiles, le cuir et certains plastiques. La catégorie IV rassemble les matières plastiques synthétiques les plus combustibles. Plus la catégorie est élevée, plus la hauteur de stockage autorisée sous protection OH est réduite : de 4,0 m en catégorie I à 1,2 m en catégorie IV au-delà desquelles l'installation bascule en classe HH ou HHS. Le mode de stockage compte autant que la hauteur : le stockage en racks (ST4) impose des têtes intermédiaires entre les niveaux si l'écart dépasse 1,2 m entre la marchandise et les têtes de plafond."
        ],
        keyPoints: [
          "ICPE 1510 = approche globale du risque entrepot.",
          "Le sprinkler reste une composante d'un dispositif plus large.",
          "Les changements d'exploitation doivent être analyses.",
          "Catégories de marchandises I à IV — plus la catégorie est élevée, plus les contraintes sont fortes.",
          "Racks (ST4) : têtes intermédiaires obligatoires si écart > 1,2 m."
        ],
        chapterImagePath: "/elearning/sprinkler/sprinkler-categories.svg",
        chapterImageAlt:
          "Catégories de marchandises I à IV selon NF EN 12845 avec hauteurs maximales de stockage",
        visual: {
          title: "Logique ICPE 1510",
          subtitle: "Protection incendie + organisation + adequation du risque.",
          animationKey: "triangle-du-feu" as const,
          items: [
            "Compartimentage et cellules",
            "Sprinkler et autres moyens",
            "Conditions de stockage",
            "Suivi des modifications d'exploitation"
          ],
          tone: "green",
        },
      },
      {
        id: "essais-surveillance",
        title: "6. Essais, surveillance et gestion des indisponibilites",
        estimatedMinutes: 10,
        intro:
          "Une installation sprinkler reste crédible si elle est surveillée dans le temps et si toute indisponibilité est pilotée avec méthode.",
        content: [
          "L'exploitant doit connaître l'existence des essais périodiques, des levees de doute, des contrôles de routine et des remontees d'anomalies. Sans cette discipline, la protection peut sembler en place tout en etant partiellement degradee.",
          "La NF EN 12845 fixe des périodicités précises. Chaque mois, une inspection visuelle des vannes principales, des manomètres et des voyants de pompe doit être réalisée et consignée. Chaque trimestre, un test de la vanne de purge simule l'ouverture d'une tête : il vérifie que le débit d'eau déclenche bien l'alarme hydraulique (gong) et l'alarme électrique. Chaque année, un test de débit complet au poste de contrôle valide la courbe de la pompe et la pression disponible en condition réelle. Tous les vingt-cinq ans, une inspection interne des canalisations est obligatoire, accompagnée d'un prélèvement de têtes envoyées en laboratoire pour vérification du seuil thermique et du facteur K.",
          "Une indisponibilité temporaire, une vanne fermée, un arrêt de source d'eau, une intervention de maintenance ou une zone neutralisée doivent déclencher des mesures compensatoires selon l'organisation du site.",
          "La mise hors service d'une installation ou d'une zone obéit à un protocole strict issu de la NF EN 12845 (Annexe J) : notification préalable à l'autorité compétente, travaux uniquement en heures ouvrées sauf dérogation, rondes continues dans les zones non protégées, interdiction de feux nus et permis de feu obligatoire pour tout travail par point chaud, remise en service vérifiée avant de lever les mesures compensatoires.",
          "Le vrai sujet d'exploitation n'est pas seulement technique : c'est la capacité à savoir qui alerter, qui autorise, qui trace, qui remet en service et comment le site reste protégé pendant la période dégradée."
        ],
        keyPoints: [
          "Mensuel : inspection visuelle vannes, manomètres, pompe.",
          "Trimestriel : test vanne de purge — alarme hydraulique et électrique.",
          "Annuel : test de débit complet, courbe pompe au poste de contrôle.",
          "25 ans : inspection interne canalisations + prélèvement de têtes en labo.",
          "Mise hors service : notification préalable, rondes, permis de feu, retour vérifié."
        ],
        chapterImagePath: "/elearning/sprinkler/sprinkler-essais.svg",
        chapterImageAlt:
          "Périodicités d'essais NF EN 12845 : mensuel, trimestriel, annuel, 25 ans — registre de sécurité",
        visual: {
          title: "Garder la protection reellement disponible",
          subtitle: "Surveiller, tracer, compenser, remettre en état.",
          illustrationKey: "summary-reflexes" as const,
          items: [
            "Essais périodiques",
            "Suivi des alarmes et defauts",
            "Mesures compensatoires en mode degrade",
            "Retour a la normale vérifié"
          ],
          tone: "blue",
        },
        scenarios: [
          {
            situation: "Vous devez réaliser un essai hebdomadaire de la pompe sprinkler. En consultant le registre, vous constatez que l'essai de la semaine précédente n'a pas été consigné.",
            question: "Que faites-vous lorsque vous constatez un manque de traçabilité dans le registre de sécurité ?",
            wrongActions:             [
              "Réaliser votre essai sans noter l'absence de la semaine précédente.",
              "Remplir rétroactivement le registre en estimant ce qui s'est passé.",
              "Passer à l'essai normalement car c'est 'juste administratif'.",
            ],
            correctActions:             [
              "Consigner l'absence de traçabilité dans le registre avec horodatage.",
              "Signaler le manque au responsable sécurité.",
              "Réaliser votre essai et le documenter précisément avec date, heure, résultat et signature.",
            ],
            explanation: "Le registre de sécurité est un document réglementaire. Une lacune peut signifier que l'essai n'a pas eu lieu : c'est une non-conformité. Elle ne peut pas être comblée fictivement. Le signalement déclenche une analyse et une action corrective.",
            normRef: "APSAD R1 — tenue du registre de sécurité sprinkler, périodicité des essais",
          },
        ],

      },
      {
        id: "têtes-obstacles",
        title: "7. têtes sprinkler, obstacles et stockage",
        estimatedMinutes: 10,
        intro:
          "Une installation sprinkler peut être présenté, alimentee et pourtant mal exploitee si les têtes sont masquees, endommagees ou mal dégagées.",
        content: [
          "Les têtes sprinkler ne doivent pas être peintes, utilisées comme points d'accroche ou exposées a des chocs sans analyse immediate.",
          "Le stockage, les faux plafonds, luminaires, gaines, rayonnages ou protections ajoutees peuvent creer des obstacles a la diffusion de l'eau ou modifier l'exposition a la chaleur.",
          "L'exploitant doit surveiller les distances libres, l'absence d'encombrement sous les têtes et les écarts visibles entre l'état reel du local et les conditions prevues par la protection installee.",
          "Toute modification d'implantation ou de stockage qui rapproche les marchandises des têtes, modifie les hauteurs ou ajoute des obstacles doit être remontee pour analyse."
        ],
        keyPoints: [
          "Ne jamais peindre ni utiliser une tête comme support.",
          "Respecter les dégagements sous les sprinklers.",
          "Analyser tout obstacle ou modification de stockage."
        ],
        chapterImagePath: "/elearning/sprinkler/sprinkler-tetes.svg",
        chapterImageAlt:
          "Têtes sprinkler — interdictions, dégagements à respecter et surveillance en exploitation",
        visual: {
          title: "Têtes sprinkler et volume protégé",
          subtitle: "Dégagement, absence d'obstacle, intégrité visible.",
          animationKey: "sprinkler-activation" as const,
          items: [
            "tête intacte et non peinte",
            "Aucun stockage sous la tête",
            "Pas d'obstacle a la diffusion",
            "Modification remontee pour analyse"
          ],
          tone: "slate",
        },
      },
    ],
  },

  "extinction-automatique-gaz": {
    title: "Extinction automatique a gaz - exploitation et référentiels",
    shortTitle: "Extinction a gaz",
    subtitle:
      "Parcours e-learning structuré sur le fonctionnement d'un système fixe d'extinction automatique à gaz, la sécurité des personnes, l'intégrité du local protégé et les repères APSAD R13 / NF EN 15004-1.",
    duration: "55 a 75 minutes",
    level: "Intermediaire",
    objective:
      "Comprendre la logique d'un système d'extinction à gaz, distinguer ce système d'une installation sprinkler, intégrer les contraintes de local protégé et appliquer les bons réflexes d'exploitation et de sécurité.",
    audience:
      "Exploitants, responsables techniques, maintenance, encadrement et utilisateurs de locaux proteges par extinction automatique a gaz.",
    certificationNote:
      "Ce module traite de l'exploitation et de la compréhension fonctionnelle. Il ne remplace ni une étude de conception, ni un calcul de concentration, ni la maintenance spécialisée, ni les vérifications réglementaires du site.",
    heroBadge: "Extinction automatique",
    finalMessage:
      "Vous avez acquis les repères essentiels d'un système d'extinction automatique à gaz. L'efficacité repose ensuite sur l'intégrité du local protégé, la qualité des contrôles, la maîtrise des accès et le strict respect des consignes de sécurité.",
    quizCtaLabel: "Passer au quiz extinction a gaz",
    sections: [
      {
        id: "principe-gaz",
        title: "1. Principe d'un systeme fixe d'extinction a gaz",
        estimatedMinutes: 12,
        intro:
          "Un système à gaz n'est pas un sprinkler sans eau. Il repose sur une logique de volume protégé, de détection et de diffusion contrôlée de l'agent extincteur.",
        content: [
          "Les systemes fixes d'extinction automatique a gaz sont utilises lorsque la protection par eau n'est pas adaptee ou lorsqu'il faut preserver des équipements, des volumes techniques ou des locaux sensibles.",
          "Il existe plusieurs variantes selon la configuration du risque. L'inondation totale est la plus répandue : l'agent extincteur est diffusé dans l'ensemble du volume du local fermé jusqu'à atteindre une concentration suffisante pour étouffer le feu. L'application locale protège un équipement précis sans inonder tout le local — elle convient aux risques localisés comme une cabine de peinture ou un transformateur. Les systèmes en cascade utilisent plusieurs bouteilles reliées pour protéger de grands volumes ou déclencher des zones successives.",
          "L'efficacité du système dépend d'une détection fiable, d'une chaîne de commande correcte et de la capacité du local à conserver la concentration utile pendant le temps prévu.",
          "L'exploitant doit retenir qu'un systeme a gaz se gere comme un ensemble complet: detection, temporisation, alarmes, signalisation, coupures ou arrets associes, diffusion et contrôle du réaccès."
        ],
        chapterImagePath: "/images/triangle-du-feu.jpg",
        chapterImageAlt:
          "Triangle du feu illustrant les trois éléments nécessaires à la combustion : comburant, combustible, énergie",
        visual: {
          title: "Systeme a gaz : logique générale",
          subtitle: "Detecter, temporiser, evacuer, diffuser, securiser.",
          animationKey: "triangle-du-feu" as const,
          items: [
            "Local protégé",
            "Detection et commande",
            "Temporisation et évacuation",
            "Emission puis contrôle des accès"
          ],
          tone: "blue",
        },
      },
      {
        id: "local-protégé",
        title: "2. Local protégé, intégrité et securite des personnes",
        estimatedMinutes: 12,
        intro:
          "Un systeme a gaz n'est efficace que si le local protégé reste conforme a l'état prevu et si la securite des personnes est traitee en priorite.",
        content: [
          "L'intégrité du local protégé est un point critique: portes, passages de cables, clapets, fermetures et étanchéité influencent directement la tenue de la concentration de l'agent extincteur.",
          "L'intégrité se vérifie concrètement : le test de porte consiste à fermer le local et à vérifier qu'aucune fuite significative ne compromet le maintien de la concentration pendant la durée prévue (généralement 10 minutes minimum). Tout percement non bouché, gaine ouverte, joint de porte défectueux ou trappe mal fermée dégrade ce maintien. Une installation peut déclencher parfaitement et rester inefficace si le local fuit trop vite. C'est pourquoi toute modification du local — cloisonnement, passage de câble, remplacement d'une porte — doit être signalée et évaluée avant travaux.",
          "La securite des personnes impose une chaine claire: alarme, temporisation, évacuation, interdiction d'accès pendant et après emission, puis contrôle strict du réaccès.",
          "Après declenchement, le risque ne se limite pas au feu initial. Il faut tenir compte de l'atmosphere du local, des produits de decomposition eventuels et des consignes du site avant tout retour."
        ],
        keyPoints: [
          "Le local protégé fait partie intégrante du système.",
          "L'évacuation doit précéder l'émission — temporisation prévue à cet effet.",
          "Test de porte : vérifie le maintien de la concentration 10 min minimum.",
          "Toute modification du local doit être évaluée avant d'être réalisée.",
          "Le réaccès se pilote selon les consignes du site — jamais improvisé."
        ],
        chapterImagePath: "/images/evacuation-securite-incendie.jpg",
        chapterImageAlt:
          "Panneau et procédure d'évacuation d'urgence dans un local protégé par système d'extinction gaz",
        visual: {
          title: "Maîtriser le volume protégé",
          subtitle: "étanchéité, accès, évacuation et réaccès.",
          animationKey: "evacuation-schema" as const,
          items: [
            "Fermetures et passages maitrises",
            "Signalisation et alarme",
            "évacuation avant emission",
            "contrôle du réaccès"
          ],
          tone: "red",
        },
      },
      {
        id: "chaine-fonctionnelle-gaz",
        title: "3. Detection, temporisation et commande du systeme",
        estimatedMinutes: 11,
        intro:
          "L'exploitation doit permettre de comprendre d'ou vient l'information incendie et quelles actions le systeme peut commander avant l'emission.",
        content: [
          "Un systeme d'extinction automatique a gaz comporte une logique de detection et de traitement qui peut inclure des confirmations, une temporisation, des alarmes sonores et lumineuses et des commandes techniques associees.",
          "L'exploitant doit savoir differencier une alarme reelle, un essai, un derangement et une mise hors service, puis suivre la procedure du site sans improviser de maintenance.",
          "Une neutralisation, un defaut ou une indisponibilite de la chaine de commande doivent être traces, traites et compenses selon l'organisation prevue."
        ],
        chapterImagePath: "/images/alarme-incendie.jpg",
        chapterImageAlt:
          "Déclencheur manuel d'alarme incendie rouge sur fond de local protégé par système d'extinction gaz",
        visual: {
          title: "Avant l'emission",
          subtitle: "Lire l'information et securiser le contexte.",
          animationKey: "alerte-incendie" as const,
          items: [
            "Detection incendie",
            "Temporisation",
            "Alarme et avertissement",
            "Commande de diffusion"
          ],
          tone: "amber",
        },
      },
      {
        id: "référentiels-gaz",
        title: "4. Repères APSAD R13 et NF EN 15004-1",
        estimatedMinutes: 10,
        intro:
          "L'exploitant n'a pas a reciter les normes, mais il doit savoir sur quels repères techniques repose le systeme protégé.",
        content: [
          "APSAD R13 constitue un repère technique important pour la conception, l'installation et la maintenance des systemes d'extinction automatique a gaz.",
          "La NF EN 15004-1 fournit le cadre general relatif au calcul, a l'installation et a la maintenance des installations fixes d'extinction a gaz.",
          "En exploitation, l'essentiel est de comprendre que la performance depend autant du systeme installe que du maintien des conditions du local protégé et du respect strict des procedures."
        ],
        legalRefs: [
          "APSAD R13 - repère technique pour la conception, l'installation et la maintenance des systemes d'extinction automatique a gaz.",
          "NF EN 15004-1 - Installations fixes de lutte contre l'incendie - Installations d'extinction a gaz - Partie 1 : calcul, installation et maintenance.",
          "INRS ND 2191 - Agents extincteurs gazeux utilises dans les installations fixes d'extinction.",
          "Consignes d'exploitation et procedures specifiques du site protégé."
        ],
        chapterImagePath: "/images/formation-ssi.jpg",
        chapterImageAlt:
          "Formation sécurité incendie avec présentation des référentiels techniques et normes applicables",
        visual: {
          title: "Normes et exploitation",
          subtitle: "Repères techniques pour un systeme sensible.",
          illustrationKey: "authorized-forbidden" as const,
          items: [
            "APSAD R13",
            "NF EN 15004-1",
            "Conditions du local protégé",
            "Essais, maintenance et traçabilité"
          ],
          tone: "green",
        },
      },
      {
        id: "mise-hors-service-gaz",
        title: "5. Mise hors service, maintenance et retour a la normale",
        estimatedMinutes: 10,
        intro:
          "Un systeme a gaz neutralise ou en maintenance doit être gere avec une discipline stricte, car une indisponibilite mal pilotee degrade immediatement la protection du local.",
        content: [
          "Une mise hors service, un essai, une intervention de maintenance ou une inhibition temporaire doivent être autorises, traces et accompagnes des mesures compensatoires prevues par le site.",
          "L'exploitant doit savoir qui autorise l'indisponibilite, qui informe les utilisateurs, comment la signaler sur place et comment vérifier le retour a la situation nominale.",
          "Le retour a la normale ne se limite pas a reenclencher un systeme. Il implique de confirmer l'état du local, la remise en service effective, la levee des inhibitions et l'information des acteurs concernes."
        ],
        keyPoints: [
          "Indisponibilite autorisee et tracee.",
          "Mesures compensatoires appliquees.",
          "Retour a la normale vérifié et formalise."
        ],
        chapterImagePath: "/images/systeme-d'extinction-incendie-automatique.webp",
        chapterImageAlt:
          "schéma d'un systeme fixe d'extinction automatique a gaz avec detection, diffusion et reserve d'agent extincteur",
        visual: {
          title: "Piloter le mode degrade",
          subtitle: "Autoriser, tracer, compenser, remettre en service.",
          illustrationKey: "summary-reflexes" as const,
          items: [
            "Inhibition ou maintenance autorisee",
            "Information des acteurs du site",
            "Mesures compensatoires pendant l'arret",
            "Retour a la normale formalise"
          ],
          tone: "slate",
        },
        scenarios: [
          {
            situation: "Des travaux de percement sont prévus dans une zone protégée par un système d'extinction gaz. Le chef de chantier demande si on peut garder le système actif car les travaux durent 'seulement 2 heures'.",
            question: "Faut-il mettre hors service le système d'extinction gaz pendant les travaux dans la zone protégée ?",
            wrongActions:             [
              "Laisser le système actif car les travaux sont courts.",
              "Désactiver uniquement le déclencheur manuel.",
              "Laisser décider le chef de chantier.",
            ],
            correctActions:             [
              "Mettre hors service le système selon la procédure définie avant tout travail dans la zone.",
              "Informer le responsable sécurité de la mise hors service et de sa durée.",
              "Mettre en place des mesures compensatoires : ronde, surveillance humaine.",
            ],
            explanation: "Un déclenchement accidentel du système gaz pendant les travaux peut asphyxier les personnes présentes. La mise hors service est obligatoire quelle que soit la durée des travaux. Des mesures compensatoires garantissent la sécurité pendant la période de mise hors service.",
            normRef: "APSAD R13 — mise hors service temporaire des systèmes d'extinction gaz",
          },
        ],

      },
    ],
  },

  sst: {
    title: "SST — Sauveteur Secouriste du Travail",
    shortTitle: "SST",
    subtitle:
      "Parcours e-learning de préparation théorique au rôle de Sauveteur Secouriste du Travail : prévention, logique d'intervention et situations de secours courantes en milieu professionnel.",
    duration: "1 h 10 à 1 h 30",
    level: "Débutant à intermédiaire",
    objective:
      "Comprendre le rôle du SST en entreprise, appliquer la démarche protéger-examiner-alerter-secourir, reconnaître les urgences vitales et adopter les bons gestes face aux situations les plus fréquentes : saignement, étouffement, inconscience, arrêt cardiaque, malaise, brûlure et traumatisme.",
    audience:
      "Salariés désignés ou volontaires appelés à participer à la prévention des risques et à la prise en charge initiale d'une victime en attendant les secours.",
    certificationNote:
      "Ce module constitue un support théorique de préparation. La compétence SST repose sur la mise en pratique gestuelle, les mises en situation encadrées et l'évaluation réalisée lors de la formation présentielle obligatoire.",
    heroBadge: "Secours au travail",
    finalMessage:
      "Le parcours SST vous a présenté la logique d'intervention et les situations de secours essentielles. La compétence réelle repose ensuite sur l'entraînement pratique régulier, la maîtrise des gestes et le respect des protocoles d'alerte propres à votre site.",
    quizCtaLabel: "Passer au quiz SST",
    sections: [
      {
        id: "role-sst",
        title: "1. Rôle du SST et logique d'intervention",
        estimatedMinutes: 10,
        intro:
          "Le Sauveteur Secouriste du Travail n'est pas seulement un secouriste d'urgence. Il est aussi un acteur de prévention des risques professionnels dans l'entreprise.",
        content: [
          "Le SST intervient face à une situation d'accident ou de malaise et contribue également à la prévention des risques professionnels au quotidien. Ces deux rôles sont indissociables.",
          "Son action suit une démarche structurée en quatre étapes : protéger, examiner, alerter ou faire alerter, puis secourir. Cet enchaînement n'est pas arbitraire : chaque étape conditionne la suivante.",
          "Le SST agit dans le respect strict de sa formation, des procédures du site et de la sécurité collective. Il ne remplace ni les secours spécialisés ni les dispositifs médicaux. Son rôle est de stabiliser la situation et d'assurer la continuité de la prise en charge jusqu'à la relève.",
          "La désignation d'un SST relève de l'employeur. Le Code du travail impose la présence d'un SST dans certains ateliers, chantiers ou lieux de travail présentant des risques particuliers.",
          "Le MAC SST (maintien et actualisation des compétences) est obligatoire tous les deux ans pour conserver la certification. Sans recyclage, le titre devient caduc.",
        ],
        deepDive: [
          "La NF EN 15151 et les recommandations INRS insistent sur le fait que la présence d'un SST formé réduit significativement le délai entre l'accident et la prise en charge effective. Chaque minute compte en cas d'arrêt cardiaque : la survie diminue de 10 % par minute sans défibrillation.",
          "Le SST ne décide pas seul de l'urgence médicale. Son rôle est d'observer, d'agir dans son cadre et de transmettre une information fiable aux secours. L'improvisation au-delà de sa formation est contre-productive.",
        ],
        keyPoints: [
          "Le SST intervient et contribue à la prévention : deux missions complémentaires.",
          "La démarche est toujours : protéger → examiner → alerter → secourir.",
          "Le SST agit dans les limites de sa formation, jamais au-delà.",
          "Le MAC SST est obligatoire tous les deux ans.",
        ],
        forbiddenPoints: [
          "Improviser des gestes non appris en formation.",
          "Négliger la protection avant le secours.",
          "Remplacer l'alerte aux secours par une action seul.",
        ],
        legalRefs: [
          "Code du travail — article R. 4224-15 : obligation de présence d'un SST dans certains établissements.",
          "INRS — programme national de formation SST défini en lien avec l'Assurance Maladie.",
          "Décret n° 2007-1219 du 10 août 2007 relatif à la formation des secouristes.",
        ],
        chapterImagePath: "/elearning/sst/sst-role.svg",
        chapterImageAlt: "Rôle du SST en entreprise — secours et prévention",
        resourceVideos: [
          {
            title: "INRS — SST et secourisme au travail",
            description:
              "Ressource INRS qui ancre la place du SST dans l'entreprise et la logique d'intervention face à un accident du travail.",
            url: "https://www.inrs.fr/media.html?refINRS=Anim-049",
            provider: "INRS",
            ctaLabel: "Voir la vidéo INRS",
          },
        ],
        visual: {
          title: "Méthode PEAS",
          subtitle: "La démarche SST en 4 étapes — dans l'ordre, sans exception.",
          animationKey: "peas-sst" as const,
          items: [
            "Protéger — sécuriser la zone en premier",
            "Examiner — évaluer l'état de la victime",
            "Alerter — appeler le 15, 18 ou 112",
            "Secourir — appliquer les gestes appris",
          ],
          tone: "blue",
        },
        scenarios: [
          {
            situation: "Vous êtes SST. Un collègue vous dit qu'un salarié a trébuché et se relève en boitant mais refuse de vous voir en disant que 'ça va'. Personne d'autre n'est intervenu.",
            question: "En tant que SST, que faites-vous face à une victime qui minimise sa blessure ?",
            wrongActions:             [
              "Accepter l'évaluation de la victime et ne pas intervenir.",
              "Signaler à votre responsable sans aller vérifier vous-même.",
              "Attendre que la douleur empire avant d'agir.",
            ],
            correctActions:             [
              "Aller voir le salarié pour proposer votre aide et réaliser un bilan de base.",
              "Expliquer calmement votre rôle et l'importance d'une prise en charge immédiate.",
              "Documenter et signaler l'incident à votre responsable conformément à la procédure interne.",
            ],
            explanation: "Une victime qui minimise sa blessure n'est pas rare. Le SST ne peut pas décider à distance que tout va bien. Un examen même bref permet de détecter des signes sérieux (fracture, choc). Le signalement garantit le suivi réglementaire de l'accident du travail.",
            normRef: "Code du travail R. 4224-15 — présence SST et obligations d'intervention",
          },
        ],

      },
      {
        id: "proteger",
        title: "2. Protéger — Éviter le sur-accident",
        estimatedMinutes: 10,
        intro:
          "Le premier objectif est d'éviter le sur-accident. Avant tout geste de secours, la scène doit être sécurisée. Un secouriste blessé devient une nouvelle victime.",
        content: [
          "Protéger, c'est analyser rapidement la situation pour identifier le ou les dangers, puis supprimer ou isoler le risque sans s'exposer soi-même. L'action doit être proportionnée : on ne risque pas sa vie pour éteindre un début d'incendie si l'évacuation est la bonne réponse.",
          "Les dangers à évaluer sont variés selon le contexte : circulation routière, machine en fonctionnement, installation électrique, chute de hauteur, atmosphère confinée, produit chimique, feu ou structure instable. Chaque situation impose une analyse avant l'action.",
          "Danger électrique — réflexes spécifiques : face à une victime électrisée, ne JAMAIS la toucher à mains nues si elle est encore en contact avec la source. La tétanisation (contraction musculaire incontrôlable qui empêche de lâcher le conducteur) peut maintenir la victime sous tension. La priorité absolue est de couper l'alimentation électrique (disjoncteur, interrupteur) avant tout contact avec la victime. Utiliser un outil isolant si le coupure est impossible et que la situation est vitale. En haute tension, le danger persiste à distance par l'arc électrique et le pas de tension : ne pas approcher, alerter le gestionnaire du réseau (ENEDIS, RTE) et attendre la mise hors tension confirmée.",
          "Le trajet du courant dans le corps détermine la gravité de l'électrisation. Le trajet main droite → pied gauche est le plus dangereux car il traverse le cœur. Même une électrisation apparemment bénigne peut provoquer un arrêt cardiaque différé (jusqu'à quelques heures). Toute victime électrisée doit être examinée par un médecin, même si elle semble aller bien.",
          "Face à une situation de violence ou d'attaque terroriste en entreprise, le SST respecte en priorité les consignes définies par l'employeur. En l'absence de consignes spécifiques, il applique les recommandations nationales : fuir si possible, se cacher et se mettre à l'abri en silence, puis alerter le 17 ou le 112 depuis un endroit sécurisé. Il ne tente pas de neutraliser la menace lui-même.",
          "En période épidémique (Covid-19, grippe ou autre maladie à transmission respiratoire), le SST adapte sa pratique aux consignes sanitaires nationales et aux recommandations de l'INRS, sans renoncer aux gestes vitaux. Pour une victime en arrêt cardiaque, la RCP est maintenue avec protection (masque, gants si disponibles). L'adaptation des gestes ne justifie jamais l'inaction face à une urgence vitale.",
          "Si le danger ne peut pas être supprimé ou isolé, la dégagement d'urgence s'impose : déplacer la victime uniquement si son maintien en place l'expose à un danger immédiat et mortel. Ce dégagement doit être réalisé en ligne droite, axe tête-pieds, le plus rapidement possible.",
          "Une fois la scène sécurisée, baliser la zone pour prévenir l'arrivée de nouveaux exposés. Ce balisage relève aussi de la protection.",
        ],
        deepDive: [
          "Le dégagement d'urgence est une exception à la règle de non-déplacement de la victime. Il ne se réalise que si le danger est immédiat et qu'aucune autre option n'existe. Hors danger immédiat, on ne déplace jamais une victime avant l'arrivée des secours.",
          "Dans un contexte électrique, l'approche de la victime sans mise hors tension préalable est interdite. Le SST ne devient pas électricien le temps de l'urgence.",
        ],
        keyPoints: [
          "Supprimer ou isoler le danger avant tout geste sur la victime.",
          "Ne jamais s'exposer au risque : un secouriste blessé aggrave la situation.",
          "Le dégagement d'urgence n'est justifié qu'en cas de danger immédiat et mortel.",
          "Baliser la zone pour protéger les témoins et les intervenants.",
        ],
        forbiddenPoints: [
          "Approcher la victime sans avoir évalué et traité le danger.",
          "Déplacer la victime sans raison de protection immédiate.",
          "Improviser une mise hors tension électrique sans formation adaptée.",
        ],
        legalRefs: [
          "INRS — gestes de premiers secours : protéger avant de secourir.",
          "Programme SST INRS — chapitre 'Protéger' : logique et limites du dégagement d'urgence.",
        ],
        chapterImageAlt: "Protection de la victime et sécurisation de la scène — SST",
        visual: {
          title: "Étape 1 — Protéger",
          subtitle: "Sécuriser la scène avant d'agir sur la victime.",
          illustrationKey: "emergency-response" as const,
          items: [
            "Identifier le ou les dangers",
            "Supprimer ou isoler le risque",
            "Dégagement d'urgence si nécessaire",
            "Baliser la zone",
          ],
          tone: "red",
        },
        scenarios: [
          {
            situation: "Vous arrivez sur les lieux d'un accident dans l'atelier. Une machine est toujours en marche à proximité de la victime et des câbles traînent au sol.",
            question: "Comment sécurisez-vous la scène avant d'approcher la victime ?",
            wrongActions:             [
              "Vous précipiter sur la victime sans évaluer les dangers de la zone.",
              "Demander à la victime si elle peut bouger pendant que vous éteignez la machine.",
              "Considérer que vous pouvez agir vite et éviter le danger.",
            ],
            correctActions:             [
              "Stopper la machine depuis le poste de commande ou le bouton d'arrêt d'urgence avant d'approcher.",
              "Écarter ou signaler les câbles dangereux si cela peut être fait sans risque pour vous.",
              "N'approcher la victime qu'une fois la zone sécurisée ou le danger isolé.",
            ],
            explanation: "Protéger, c'est d'abord ne pas devenir une deuxième victime. Un SST blessé aggrave la situation. La sécurisation de la scène est systématique, quelle que soit l'urgence apparente de l'état de la victime.",
            normRef: "Programme national SST — étape 1 : Protéger, éviter le sur-accident",
          },
        ],

      },
      {
        id: "examiner",
        title: "3. Examiner — Identifier l'urgence vitale",
        estimatedMinutes: 12,
        intro:
          "Après la protection, le SST examine la victime selon une logique de priorités. L'ordre d'examen est déterminant : il guide le geste immédiat et la qualité de l'alerte.",
        content: [
          "L'examen SST suit une séquence précise en quatre étapes : 1. La victime saigne-t-elle abondamment ? 2. S'étouffe-t-elle ? 3. Répond-elle quand on lui parle ou qu'on la stimule ? 4. Respire-t-elle normalement ?",
          "Cette séquence permet d'identifier en quelques secondes l'urgence vitale dominante et d'orienter l'action : compression pour le saignement, claques dorsales pour l'étouffement, PLS pour l'inconscience avec respiration, RCP pour l'arrêt cardiaque.",
          "L'examen ne doit pas être précipité au point d'en sauter des étapes, ni si lent qu'il retarde le secours. La régularité acquise en formation pratique permet d'atteindre l'efficacité sans stress.",
          "En cas de doutes sur plusieurs urgences simultanées (ex. : victime inconsciente ET saignante), le SST traite l'urgence vitale la plus immédiate — hémorragie incontrôlée prime sur la PLS si le saignement menace la vie en quelques minutes.",
        ],
        deepDive: [
          "L'examen de la victime n'est pas un diagnostic médical. Le SST n'est pas compétent pour déterminer la cause de l'état de la victime. Il identifié l'urgence fonctionnelle observable (saigne, s'étouffe, inconsciente, ne respire pas) et agit en conséquence.",
          "La stimulation de la victime se fait en lui parlant fort et en lui secouant doucement les épaules. Pas de bruit, pas de réponse = inconsciente. Cette vérification prend moins de 5 secondes.",
        ],
        keyPoints: [
          "Séquence : saigne ? → s'étouffe ? → répond ? → respire ?",
          "Chaque réponse oriente immédiatement le geste suivant.",
          "Ne pas sauter d'étape, ne pas s'attarder inutilement.",
          "En cas d'urgences multiples, traiter la menace vitale la plus immédiate en premier.",
        ],
        forbiddenPoints: [
          "Examiner sans ordre : risquer de manquer une urgence vitale.",
          "Poser un diagnostic médical — le SST observe, il ne diagnostique pas.",
          "Ignorer le saignement abondant pour passer directement à la conscience.",
        ],
        legalRefs: [
          "Programme SST INRS — chapitre 'Examiner' : séquence d'examen et logique d'orientation.",
          "INRS ED 6252 — formation SST : contenu et déroulement.",
        ],
        chapterImageAlt: "Examen de la victime selon la séquence SST — INRS",
        visual: {
          title: "Étape 2 — Examiner",
          subtitle: "Identifier l'urgence vitale en 4 questions.",
          animationKey: "peas-sst" as const,
          items: [
            "Saigne abondamment ?",
            "S'étouffe ?",
            "Répond ?",
            "Respire normalement ?",
          ],
          tone: "amber",
        },
        scenarios: [
          {
            situation: "Vous examinez une victime consciente après une chute. Elle répond à vos questions mais vous remarquez qu'elle ne peut plus bouger ses jambes et dit ne pas les sentir.",
            question: "Comment gérez-vous une victime consciente avec suspicion de traumatisme rachidien ?",
            wrongActions:             [
              "L'aider à s'asseoir pour la rendre plus à l'aise.",
              "Lui demander d'essayer de bouger les jambes pour évaluer l'atteinte.",
              "La déplacer vers un endroit plus confortable en attendant les secours.",
            ],
            correctActions:             [
              "Maintenir la victime dans la position où vous la trouvez sans déplacement.",
              "Lui demander de rester immobile et de ne pas bouger la tête.",
              "Appeler les secours immédiatement et suivre leurs instructions.",
            ],
            explanation: "Tout traumatisme violent doit faire suspecter une atteinte du rachis. Déplacer une victime avec une lésion rachidienne peut provoquer une paralysie définitive. La règle absolue : immobilisation dans la position trouvée, appel des secours, suivi des instructions.",
            normRef: "Programme national SST — bilan victime, suspicion traumatisme rachidien",
          },
        ],

      },
      {
        id: "alerter",
        title: "4. Alerter ou faire alerter",
        estimatedMinutes: 8,
        intro:
          "L'alerte déclenche la chaîne de secours organisée. Elle doit être transmise le plus tôt possible, avec des informations précises et structurées.",
        content: [
          "Une alerte efficace comporte : le lieu exact de l'accident (bâtiment, étage, repère précis), la nature de l'événement, le nombre de victimes, leur état apparent, les dangers persistants éventuels et le geste déjà engagé.",
          "Le SST doit connaître les numéros d'alerte du site (PC sécurité, infirmerie, standardiste) et les numéros nationaux : 15 (SAMU), 18 (pompiers), 112 (numéro européen), 17 (police). Il ne raccroche que lorsque le régulateur l'y autorise.",
          "Si le SST est seul, il alerte en premier avant de débuter les gestes — sauf si la victime est en arrêt cardiaque et qu'un défibrillateur est accessible immédiatement : dans ce cas, commencer la RCP et déclencher l'alerte dès qu'une autre personne est disponible.",
          "Le SST ne quitte pas la victime pour aller chercher de l'aide sauf si c'est strictement impossible autrement. Un témoin peut être chargé d'appeler les secours et d'aller chercher le défibrillateur.",
        ],
        deepDive: [
          "Le délai entre l'accident et l'arrivée des secours professionnels est en moyenne de 8 à 12 minutes en France. Ce délai impose que le SST ait déjà agi avant leur arrivée : protéger, installer la victime, débuter la RCP si nécessaire.",
          "L'alerte au 15 (SAMU) permet d'obtenir une guidance médicale en direct. Le régulateur peut guider le SST sur les gestes à réaliser en attendant l'équipe médicale.",
        ],
        keyPoints: [
          "Alerter le plus tôt possible avec des informations précises.",
          "Ne jamais raccrocher sans autorisation du régulateur.",
          "Numéros clés : 15, 18, 112, 17.",
          "Un témoin peut être chargé de l'alerte et de la recherche du DAE.",
        ],
        forbiddenPoints: [
          "Alerter après avoir tout géré seul — le délai est souvent fatal.",
          "Donner des informations approximatives ou paniquées.",
          "Raccrocher avant que le régulateur ne l'autorise.",
        ],
        legalRefs: [
          "Programme SST INRS — chapitre 'Alerter ou faire alerter'.",
          "Code du travail — article R. 4224-16 : moyens d'alerte organisés dans l'établissement.",
        ],
        chapterImageAlt: "Transmission de l'alerte lors d'un accident du travail — SST",
        visual: {
          title: "Étape 3 — Alerter",
          subtitle: "Une alerte précise fait gagner des minutes décisives.",
          animationKey: "alerte-incendie" as const,
          items: [
            "Lieu précis",
            "Nature de l'événement",
            "Nombre et état des victimes",
            "Gestes déjà engagés",
          ],
          tone: "blue",
        },
        scenarios: [
          {
            situation: "Un accident grave vient de se produire. Vous devez alerter les secours mais vous êtes dans une zone sans réseau téléphonique. Deux collègues se trouvent à proximité.",
            question: "Comment organisez-vous l'alerte sans réseau direct ?",
            wrongActions:             [
              "Abandonner la victime pour aller chercher du réseau vous-même.",
              "Dire 'quelqu'un aille appeler' sans désigner personne.",
              "Attendre que quelqu'un prenne l'initiative.",
            ],
            correctActions:             [
              "Désigner nommément un collègue pour aller alerter les secours ou trouver un téléphone fixe.",
              "Lui donner les informations précises : localisation exacte, nature de l'accident, état de la victime.",
              "Rester auprès de la victime pour assurer les premiers secours en attendant.",
            ],
            explanation: "L'alerte doit être organisée, pas improvisée. Désigner une personne précise évite l'effet 'quelqu'un va le faire'. Les informations transmises aux secours doivent être précises pour adapter les moyens envoyés et réduire le délai d'intervention.",
            normRef: "Programme national SST — étape 3 : Alerter, message d'alerte structuré",
          },
        ],

      },
      {
        id: "secourir-saignement",
        title: "5. Secourir — Saignement abondant",
        estimatedMinutes: 10,
        intro:
          "Un saignement abondant non contrôlé peut entraîner la mort en quelques minutes. Le premier geste est la compression directe, immédiate et prolongée.",
        content: [
          "Face à un saignement abondant, le SST applique une compression directe ferme et continue sur la plaie à l'aide d'un tissu propre ou d'un pansement. Cette compression ne doit pas être relâchée, même si le pansement se sature de sang — on en ajoute un autre par-dessus.",
          "Si la compression directe est impossible (plaie au cou, à l'aine, ou membre arraché), le SST utilise le garrot si disponible et formé à son emploi, ou maintient une compression adaptée à l'anatomie de la plaie en attendant les secours.",
          "La victime doit être allongée pour limiter les effets de l'hypovolémie. Les membres inférieurs peuvent être légèrement surélevés si aucun traumatisme osseux n'est suspecté.",
          "Pendant la compression, continuer à surveiller : la victime peut perdre conscience. Si elle perd conscience et cesse de respirer, la situation bascule vers un arrêt cardiaque nécessitant la RCP.",
        ],
        deepDive: [
          "La règle est simple : comprimer, ne pas relâcher, ne pas retirer. Chaque relâchement de la compression permet au saignement de reprendre et détruit le caillot en formation.",
          "Le garrot est un moyen de dernier recours pour les hémorragies des membres quand la compression est impossible ou insuffisante. Son utilisation sans formation peut causer des lésions nerveuses ou vasculaires irréversibles.",
        ],
        keyPoints: [
          "Compression directe, ferme, continue — sans relâcher.",
          "Ajouter un pansement si le premier est saturé, ne pas retirer.",
          "Allonger la victime, surveiller en permanence.",
          "Si perte de conscience + arrêt respiratoire → bascule vers RCP.",
        ],
        forbiddenPoints: [
          "Relâcher la compression pour 'vérifier' si ça saigne encore.",
          "Poser un garrot sans formation ou sans indication précise.",
          "Laisser la victime seule sans surveillance.",
        ],
        legalRefs: [
          "Programme SST INRS — situation 1 : la victime saigne abondamment.",
          "INRS ED 6252 — gestes et protocoles de compression hémostatique.",
        ],
        chapterImagePath: "/elearning/sst/sst-saignement.svg",
        chapterImageAlt: "Compression directe sur une hémorragie — geste SST",
        visual: {
          title: "Saignement abondant",
          subtitle: "Comprimer directement, fermement et sans relâcher.",
          illustrationKey: "emergency-response" as const,
          items: [
            "Compression directe ferme",
            "Ne pas relâcher",
            "Ajouter si saturé",
            "Surveiller en continu",
          ],
          tone: "red",
        },
      },
      {
        id: "secourir-etouffement",
        title: "6. Secourir — Étouffement (obstruction des voies aériennes)",
        estimatedMinutes: 8,
        intro:
          "L'obstruction totale des voies aériennes est une urgence vitale immédiate. Sans intervention, la victime peut perdre conscience en moins de 2 minutes.",
        content: [
          "Face à une victime consciente qui s'étouffe et ne peut ni parler, ni crier, ni tousser efficacement, le SST réalise 5 claques vigoureuses dans le dos (entre les omoplates, paume ouverte, victime penchée en avant) puis, si insuffisant, 5 compressions abdominales (manœuvre de Heimlich).",
          "La manœuvre de Heimlich : se placer derrière la victime, passer les bras sous les siens, positionner le poing fermé entre le nombril et le sternum, saisir ce poing avec l'autre main et effectuer une traction sèche vers l'intérieur et vers le haut. Alterner claques dorsales et Heimlich jusqu'à libération ou perte de conscience.",
          "Si la victime perd conscience, la poser délicatement au sol et débuter la RCP (massage cardiaque) : les compressions thoraciques peuvent suffire à expulser le corps étranger.",
          "Chez le nourrisson (moins d'un an), la manœuvre de Heimlich est contre-indiquée. On réalise 5 claques dorsales + 5 compressions thoraciques (deux doigts sur le sternum).",
        ],
        deepDive: [
          "La toux efficace reste le meilleur moyen naturel d'expulsion. Tant que la victime tousse, on l'encourage à continuer et on ne réalise aucun geste. L'intervention commence seulement quand la toux est inefficace ou absente.",
          "Ne jamais tenter de retirer à la main un corps étranger qu'on ne voit pas directement — ce geste risque de l'enfoncer davantage.",
        ],
        keyPoints: [
          "5 claques dorsales → 5 compressions abdominales → alterner.",
          "Claques d'abord : toujours avant le Heimlich.",
          "Perte de conscience → RCP immédiate.",
          "Nourrisson : jamais de Heimlich — claques + compressions thoraciques.",
        ],
        forbiddenPoints: [
          "Tenter de saisir le corps étranger sans le voir.",
          "Réaliser le Heimlich chez un nourrisson de moins d'un an.",
          "Attendre sans agir face à une obstruction totale.",
        ],
        legalRefs: [
          "Programme SST INRS — situation 2 : la victime s'étouffe.",
          "Recommandations ERC 2021 — obstruction des voies aériennes par corps étranger.",
        ],
        chapterImagePath: "/elearning/sst/sst-etouffement.svg",
        chapterImageAlt: "Manœuvre de Heimlich et claques dorsales — étouffement SST",
        visual: {
          title: "Étouffement",
          subtitle: "5 claques dorsales puis 5 compressions abdominales — alterner.",
          illustrationKey: "emergency-response" as const,
          items: [
            "Pencher la victime en avant",
            "5 claques dorsales vigoureuses",
            "5 compressions abdominales (Heimlich)",
            "Perte de conscience → RCP",
          ],
          tone: "amber",
        },
      },
      {
        id: "secourir-inconscience-respiration",
        title: "7. Secourir — Victime inconsciente qui respire (PLS)",
        estimatedMinutes: 8,
        intro:
          "Une victime inconsciente mais qui respire risque d'inhaler ses vomissements et de s'étouffer. La Position Latérale de Sécurité (PLS) protège ses voies aériennes.",
        content: [
          "Si la victime ne répond pas mais respire normalement, le SST la place en Position Latérale de Sécurité (PLS) : sur le côté, bouche orientée vers le bas pour permettre l'écoulement des secrétions, tête en légère extension pour maintenir les voies aériennes ouvertes.",
          "La PLS est une technique précise : genou supérieur fléchi au sol pour la stabiliser, bras inférieur étendu devant, bras supérieur soutenant la tête. Elle doit permettre à la victime de respirer librement sans risque d'inhalation.",
          "Une fois en PLS, surveiller en permanence : la respiration peut s'arrêter et la situation basculer vers un arrêt cardiaque. Dans ce cas, remettre immédiatement la victime sur le dos et débuter la RCP.",
          "Ne jamais laisser une victime inconsciente sur le dos sans surveillance : c'est une position dangereuse si la respiration est maintenue.",
        ],
        deepDive: [
          "La PLS est une mesure conservatoire en attente des secours — elle ne traite pas la cause de l'inconscience. Alerter les secours avant ou simultanément à la mise en PLS.",
          "En cas de traumatisme cervical suspecté (chute, accident de la route), la PLS reste indiquée si la victime risque d'inhaler, mais elle doit être réalisée avec précaution en maintenant l'axe tête-cou-tronc. En pratique SST, la priorité reste les voies aériennes.",
        ],
        keyPoints: [
          "Inconsciente + respire → PLS immédiate.",
          "Bouche vers le bas, tête en extension légère, genou fléchi.",
          "Surveiller la respiration en permanence.",
          "Arrêt respiratoire → retourner sur le dos et démarrer RCP.",
        ],
        forbiddenPoints: [
          "Laisser une victime inconsciente sur le dos sans surveillance.",
          "Réaliser une PLS approximative qui ne protège pas les voies aériennes.",
          "Arrêter de surveiller une fois la PLS en place.",
        ],
        legalRefs: [
          "Programme SST INRS — situation : victime inconsciente qui respire.",
          "Recommandations ERC 2021 — PLS et gestion de l'inconscience.",
        ],
        chapterImagePath: "/elearning/sst/sst-pls.svg",
        chapterImageAlt: "Position Latérale de Sécurité (PLS) — victime inconsciente SST",
        visual: {
          title: "Victime inconsciente qui respire",
          subtitle: "PLS immédiate pour protéger les voies aériennes.",
          illustrationKey: "emergency-response" as const,
          imageAlt: "Position Latérale de Sécurité — geste SST",
          items: [
            "Vérifier la respiration",
            "Placer en PLS",
            "Surveiller en continu",
            "Arrêt → retourner + RCP",
          ],
          tone: "amber",
        },
        scenarios: [
          {
            situation: "Vous avez découvert une victime inconsciente qui respire normalement. L'appel des secours est fait. Elle est allongée sur le dos, stable.",
            question: "Quelle position adoptez-vous pour la victime inconsciente qui respire en attendant les secours ?",
            wrongActions:             [
              "La laisser sur le dos pour faciliter une éventuelle RCP si l'état change.",
              "La mettre en position assise dos contre le mur.",
              "La déplacer vers un endroit plus confortable.",
            ],
            correctActions:             [
              "Mettre la victime en Position Latérale de Sécurité (PLS).",
              "Surveiller sa respiration en continu jusqu'à l'arrivée des secours.",
              "Signaler tout changement d'état aux secours.",
            ],
            explanation: "La PLS maintient les voies aériennes ouvertes et prévient l'inhalation de vomissements. Une victime inconsciente sur le dos peut décéder d'une obstruction des voies aériennes. La surveillance continue est essentielle car l'état peut évoluer rapidement.",
            normRef: "Programme national SST — victime inconsciente qui respire, PLS",
          },
        ],

      },
      {
        id: "secourir-arret-cardiaque",
        title: "8. Secourir — Arrêt cardiaque : RCP et DAE",
        estimatedMinutes: 14,
        intro:
          "L'arrêt cardiaque est l'urgence absolue. Sans RCP dans les 3 à 5 premières minutes, le risque de décès ou de séquelles cérébrales graves est majeur. Le SST doit agir immédiatement.",
        content: [
          "Une victime en arrêt cardiaque est inconsciente, ne répond pas et ne respire pas normalement (absence de respiration ou gasps agoniques). Le SST commence la Réanimation Cardio-Pulmonaire (RCP) sans délai.",
          "La RCP comprend deux éléments : les compressions thoraciques (massage cardiaque) et, si formé, les insufflations. Les compressions sont prioritaires — une RCP uniquement par compressions est déjà efficace si les insufflations sont impossibles ou trop lentes.",
          "Technique de compression : talons des mains au centre du thorax (demi-inférieure du sternum), bras tendus, compression de 5 à 6 cm à un rythme de 100 à 120 par minute, décompression complète entre chaque. Le ratio est de 30 compressions pour 2 insufflations si les insufflations sont réalisées.",
          "RCP de l'enfant (1 à 8 ans) et du nourrisson : la prise en charge diffère de celle de l'adulte. On débute par 5 insufflations initiales (primauté de l'oxygénation car l'arrêt est souvent d'origine respiratoire), puis on alterne 15 compressions thoraciques et 2 insufflations — et non 30+2 comme chez l'adulte. Chez le nourrisson, les compressions se font avec deux doigts au centre du thorax, à environ un tiers de la profondeur du thorax.",
          "Le Défibrillateur Automatisé Externe (DAE) doit être récupéré et mis en marche dès que possible. Il guide vocalement l'utilisateur. Dès que l'appareil est prêt, placer les électrodes et suivre les instructions. La RCP ne s'arrête que quand le DAE analyse ou délivre un choc, puis reprend immédiatement après.",
          "La RCP se poursuit sans interruption jusqu'à l'arrivée des secours, au rétablissement spontané de la respiration normale ou jusqu'à épuisement physique total. Alterner les intervenants toutes les 2 minutes si possible.",
        ],
        deepDive: [
          "L'efficacité d'un DAE utilisé dans les 3 à 5 premières minutes après un arrêt cardiaque par fibrillation ventriculaire peut atteindre 70 à 90 % de survie. Au-delà de 10 minutes sans défibrillation, la survie devient très faible.",
          "Le massage cardiaque crée une pression artificielle qui pousse le sang vers le cerveau et les organes vitaux. Il ne recharge pas le cœur mais maintient une perfusion minimale jusqu'au choc électrique ou au rétablissement naturel.",
        ],
        keyPoints: [
          "Inconsciente + ne respire pas → RCP immédiate, alerter les secours.",
          "30 compressions + 2 insufflations (si formé) — ou compressions seules.",
          "Fréquence : 100 à 120 compressions/minute, profondeur 5 à 6 cm.",
          "DAE : allumer, placer les électrodes, suivre les instructions vocales.",
          "Ne jamais interrompre la RCP sauf analyse ou choc DAE.",
        ],
        forbiddenPoints: [
          "Attendre les secours sans débuter la RCP.",
          "Interrompre la RCP pour autre chose qu'une analyse DAE.",
          "Comprimer trop superficiellement ou trop lentement.",
          "Retirer les électrodes du DAE après le choc — elles restent en place.",
        ],
        legalRefs: [
          "Programme SST INRS — situation : victime inconsciente qui ne respire pas.",
          "Recommandations ERC 2021 (European Resuscitation Council) — RCP adulte.",
          "Décret n° 2018-1186 du 19 décembre 2018 — accès au défibrillateur.",
        ],
        chapterImagePath: "/elearning/sst/sst-rcp.svg",
        chapterImageAlt: "RCP et défibrillation DAE — arrêt cardiaque — SST",
        visual: {
          title: "Arrêt cardiaque — RCP + DAE",
          subtitle: "Chaque seconde compte : comprimer, alerter, défibriller.",
          illustrationKey: "emergency-response" as const,
          imageAlt: "RCP et défibrillation DAE — arrêt cardiaque — SST",
          items: [
            "RCP immédiate (30+2 ou compressions seules)",
            "Rythme 100-120/min, profondeur 5-6 cm",
            "DAE : allumer + électrodes + suivre les instructions",
            "Continuer sans interruption jusqu'aux secours",
          ],
          tone: "red",
        },
        scenarios: [
          {
            situation: "Un collègue s'effondre devant vous. Il ne répond pas et ne respire pas normalement. Vous êtes seul, pas de DEA visible à proximité immédiate.",
            question: "Quelle est la séquence prioritaire face à un arrêt cardiaque sans DEA à portée ?",
            wrongActions:             [
              "Partir chercher le DEA avant de commencer les compressions.",
              "Appeler les secours avant de commencer la RCP.",
              "Attendre de l'aide avant d'agir.",
            ],
            correctActions:             [
              "Commencer immédiatement les compressions thoraciques à raison de 30 compressions.",
              "Crier pour alerter quelqu'un et lui demander d'appeler le 15 ou 18 et de trouver le DEA.",
              "Alterner 30 compressions et 2 insufflations jusqu'à l'arrivée des secours ou du DEA.",
            ],
            explanation: "Chaque minute sans RCP réduit les chances de survie de 10 %. Les compressions thoraciques doivent commencer sans délai. L'alerte et la recherche du DEA sont déléguées. Si vous êtes seul, faites 5 cycles de RCP avant d'appeler puis reprenez immédiatement.",
            normRef: "Programme national SST — RCP adulte, défibrillation précoce, chaîne de survie",
          },
        ],

      },
      {
        id: "secourir-malaise",
        title: "9. Secourir — Malaise",
        estimatedMinutes: 7,
        intro:
          "Un malaise peut précéder une situation plus grave. Le SST installe la victime en position adaptée, surveille et alerte.",
        content: [
          "Face à une victime qui se plaint de malaise (vertiges, douleur thoracique, nausée, pâleur, sueurs froides, sensation de faiblesse), le SST l'installe dans la position qui lui semble la plus confortable : assis, demi-assis ou allongé selon les symptômes.",
          "Malaise vagal : quand une victime consciente déclare faire régulièrement des malaises vagaux et présente des étourdissements, nausées, sueurs, sensation de chaleur ou de perte de conscience imminente, le SST l'invite à réaliser une manœuvre physique de contrepression pour éviter la syncope : croiser les jambes en position debout, serrer fortement les deux mains l'une contre l'autre ou contracter les bras. Ces manœuvres augmentent le retour veineux et peuvent interrompre le malaise. Si elles échouent, allonger la victime et surveiller.",
          "Un malaise avec douleur thoracique irradiant dans le bras gauche ou la mâchoire doit faire suspecter un infarctus du myocarde. Alerter immédiatement le 15 (SAMU). Ne pas laisser la victime marcher seule.",
          "Un malaise avec perte d'équilibre, difficultés à parler, à voir ou paralysie d'un côté du visage ou du corps doit faire suspecter un AVC (Accident Vasculaire Cérébral). Alerter immédiatement le 15. L'AVC est une urgence : chaque minute de retard aggrave les séquelles.",
          "Surveiller en permanence jusqu'à l'arrivée des secours. Si la victime perd conscience, vérifier la respiration et adapter le geste : PLS ou RCP selon l'état.",
        ],
        deepDive: [
          "L'acronyme FAST aide à reconnaître un AVC : Face (visage asymétrique), Arm (bras qui chute), Speech (difficultés à parler), Time (appeler le 15 immédiatement). Ce moyen mnémotechnique est recommandé par la Haute Autorité de Santé.",
          "En cas d'hypoglycémie suspectée (diabétique, malaise après effort intense), si la victime est consciente et peut avaler, donner du sucre. Ne jamais forcer une alimentation chez une personne semi-consciente.",
        ],
        keyPoints: [
          "Installer en position confortable selon les symptômes.",
          "Douleur thoracique → suspicion infarctus → 15 immédiatement.",
          "Paralysie / trouble de la parole → suspicion AVC → 15 immédiatement.",
          "Surveiller en permanence jusqu'aux secours.",
        ],
        forbiddenPoints: [
          "Laisser une victime suspecte d'infarctus ou d'AVC marcher seule.",
          "Minimiser le malaise et ne pas alerter les secours.",
          "Donner à manger ou à boire à une victime semi-consciente.",
        ],
        legalRefs: [
          "Programme SST INRS — situation : la victime se plaint d'un malaise.",
          "HAS — fiche AVC : reconnaître et agir vite.",
        ],
        chapterImagePath: "/elearning/sst/sst-malaise.svg",
        chapterImageAlt: "Prise en charge d'un malaise — SST",
        visual: {
          title: "Malaise",
          subtitle: "Position adaptée, alerte immédiate, surveillance.",
          illustrationKey: "emergency-response" as const,
          imageAlt: "Prise en charge d'un malaise — SST",
          items: [
            "Installer confortablement",
            "Douleur thoracique → appeler le 15",
            "FAST → AVC → appeler le 15",
            "Surveiller jusqu'aux secours",
          ],
          tone: "amber",
        },
      },
      {
        id: "secourir-brulure-traumatisme",
        title: "10. Secourir — Brûlure, plaie et traumatisme",
        estimatedMinutes: 10,
        intro:
          "Les brûlures, plaies et traumatismes sont des situations fréquentes en milieu professionnel. La distinction plaie simple / grave et la règle du corps étranger sont des réflexes fondamentaux.",
        content: [
          "Face à une brûlure thermique, le réflexe immédiat est le refroidissement : faire couler de l'eau fraîche (15 à 25 °C) sur la zone brûlée pendant 5 à 10 minutes minimum. Ne jamais utiliser de la glace (risque d'aggravation par vasoconstriction), ni de corps gras, ni de pansement adhésif directement sur la brûlure.",
          "Alerter les secours si la brûlure dépasse 10 % de la surface corporelle chez l'adulte, si elle concerne le visage, les mains, les organes génitaux ou les articulations, si elle est circulaire, profonde ou d'origine électrique ou chimique.",
          "Plaie simple (petite, propre, sans corps étranger) : séquence à retenir — se laver les mains avec de l'eau et du savon, nettoyer la plaie à l'eau et au savon, rincer, désinfecter selon les consignes du médecin du travail, puis protéger par un pansement propre. Ne jamais appliquer un antiseptique seul sans rinçage préalable, ni laisser la plaie à l'air libre sans protection.",
          "Plaie grave (saignement important, corps étranger visible ou planté, plaie profonde, au visage, thoracique ou abdominale) : ne JAMAIS retirer un corps étranger planté. Il peut obstruer un vaisseau ; son retrait provoquerait une hémorragie incontrôlable. Protéger la plaie autour du corps étranger sans pression directe dessus, alerter immédiatement le 15 ou le 18, et surveiller la victime jusqu'à l'arrivée des secours.",
          "Face à un traumatisme (chute, écrasement, choc violent), ne pas déplacer la victime si un traumatisme rachidien (colonne vertébrale) est suspecté, sauf danger immédiat. La victime reste en position de découverte. Ne pas mobiliser un membre suspect de fracture.",
          "En cas de fracture ouverte (os visible), ne pas réduire et ne pas toucher la plaie. Protéger avec un pansement propre. Alerter les secours.",
        ],
        deepDive: [
          "Le refroidissement d'une brûlure ralentit la progression de la chaleur dans les couches profondes et limite l'étendue des lésions. Son efficacité est maximale dans les premières minutes suivant l'accident.",
          "Une brûlure électrique est souvent plus grave que son apparence externe ne le laisse penser : le courant peut causer des lésions profondes sur tout le trajet parcouru dans le corps. Toute brûlure électrique justifie une évaluation médicale.",
        ],
        keyPoints: [
          "Brûlure → eau fraîche, 5 à 10 minutes minimum.",
          "Jamais de glace, de corps gras ou de pansement adhésif sur la brûlure.",
          "Traumatisme → ne pas déplacer si rachis suspect.",
          "Fracture ouverte → ne pas réduire, protéger, alerter.",
        ],
        forbiddenPoints: [
          "Appliquer de la glace, du beurre, de la crème sur une brûlure.",
          "Mobiliser un membre ou une victime si fracture ou rachis suspect.",
          "Retirer un corps étranger planté dans une plaie.",
        ],
        legalRefs: [
          "Programme SST INRS — situations brûlure et traumatisme.",
          "INRS ED 6252 — gestes de premiers secours en milieu professionnel.",
        ],
        chapterImagePath: "/elearning/sst/sst-brulure.svg",
        chapterImageAlt: "Brûlure et traumatisme — gestes SST en milieu professionnel",
        visual: {
          title: "Brûlure et traumatisme",
          subtitle: "Eau fraîche pour la brûlure, immobilité pour le traumatisme.",
          illustrationKey: "summary-reflexes" as const,
          imageAlt: "Brûlure et traumatisme — gestes SST en milieu professionnel",
          items: [
            "Eau fraîche 5-10 min sur la brûlure",
            "Jamais de glace ni de corps gras",
            "Ne pas mobiliser si fracture/rachis",
            "Alerter les secours",
          ],
          tone: "slate",
        },
      },
      {
        id: "surveiller-transmettre",
        title: "11. Surveiller la victime et transmettre à la relève",
        estimatedMinutes: 7,
        intro:
          "Après le geste d'urgence, le SST reste mobilisé. Il surveille l'évolution de l'état de la victime et transmet des informations fiables à la relève des secours.",
        content: [
          "La surveillance continue permet de repérer une aggravation : arrêt de la respiration, reprise de saignement, perte de conscience, changement de comportement ou apparition de nouveaux signes. Chaque observation doit être mémorisée pour la transmission.",
          "La transmission à la relève doit être structurée : ce qui s'est passé (heure, circonstances), ce qui a été observé (état initial, évolution), ce qui a été fait (gestes réalisés, durée) et les risques encore présents sur zone.",
          "Le SST ne quitte pas la victime sans relais organisé, sauf danger immédiat pour lui-même ou consigne explicite des secours spécialisés. Une victime sans surveillance peut s'aggraver silencieusement.",
        ],
        keyPoints: [
          "Surveiller en permanence : respiration, conscience, saignement.",
          "Transmettre : circonstances → état observé → gestes réalisés → risques.",
          "Ne pas quitter la victime sans relais organisé.",
        ],
        forbiddenPoints: [
          "Abandonner la victime une fois l'alerte donnée.",
          "Transmettre des informations imprécises ou incomplètes.",
          "Cesser la surveillance dès l'arrivée des secours sans assurer la passation.",
        ],
        legalRefs: [
          "Programme SST INRS — surveillance et transmission à la relève.",
        ],
        chapterImageAlt: "Surveillance et transmission à la relève — SST",
        visual: {
          title: "Surveiller et transmettre",
          subtitle: "Assurer la continuité de la prise en charge.",
          illustrationKey: "summary-reflexes" as const,
          imageAlt: "Surveillance et transmission à la relève — SST",
          items: [
            "Surveiller respiration et conscience",
            "Mémoriser les observations",
            "Transmission structurée à la relève",
            "Ne pas rompre la chaîne d'assistance",
          ],
          tone: "blue",
        },
      },
      {
        id: "prevention-entreprise",
        title: "12. Prévention et remontée des situations dangereuses",
        estimatedMinutes: 8,
        intro:
          "Le SST contribue également à la prévention des risques en observant le travail réel et en faisant remonter les situations dangereuses avant qu'elles ne causent un accident.",
        content: [
          "L'accident du travail (AT) est défini par l'article L411-1 du Code de la Sécurité sociale comme « tout accident survenu par le fait ou à l'occasion du travail, quelle qu'en soit la cause ». La qualification d'AT ne dépend ni de la gravité, ni de la cause (faute du salarié ou non), ni de la présence de témoins. Le SST contribue à la traçabilité en favorisant la déclaration et en rédigeant des constats factuels précis.",
          "La certification SST est valide 2 ans. Le MAC (Maintien et Actualisation des Compétences) est obligatoire à l'échéance pour conserver la certification. Sans MAC, le salarié perd le statut de SST certifié. Cette périodicité est fixée par l'INRS dans le référentiel national SST.",
          "Un SST efficace ne se limite pas aux accidents déclarés. Il repère les situations à risque dans son environnement quotidien : sols glissants, équipements défectueux, postures inadaptées, zones mal éclairées, produits mal étiquetés, procédures non respectées.",
          "Cette logique relie secours et prévention : voir le danger, remonter l'information à l'encadrement ou au service prévention, proposer une correction simple et contribuer à éviter le prochain accident. C'est le rôle actif du SST au-delà de l'urgence.",
          "Le SST peut participer aux instances de prévention de l'entreprise (CSSCT, réunion d'équipe sécurité) et collaborer avec le service de santé au travail pour signaler les situations à risque récurrentes.",
          "La prévention en entreprise repose sur cette vigilance quotidienne partagée, pas uniquement sur les audits périodiques. Chaque signal faible détecté est une opportunité d'éviter un accident grave.",
        ],
        keyPoints: [
          "Observer le travail réel et identifier les écarts au quotidien.",
          "Remonter les situations dangereuses sans attendre l'accident.",
          "Participer aux instances de prévention si possible.",
          "Prévenir vaut mieux que secourir.",
        ],
        forbiddenPoints: [
          "Ignorer une situation dangereuse parce que ça n'a jamais causé d'accident.",
          "Attendre l'accident pour signaler le problème.",
        ],
        legalRefs: [
          "Code du travail — article L. 4131-1 : droit d'alerte et de retrait du salarié.",
          "Programme SST INRS — rôle de prévention du SST en entreprise.",
        ],
        chapterImagePath: "/elearning/sst/sst-role.svg",
        chapterImageAlt: "Rôle de prévention du SST en entreprise — observer, signaler et contribuer",
        visual: {
          title: "Prévenir pour agir moins souvent en urgence",
          subtitle: "Observer, signaler, contribuer à la prévention.",
          illustrationKey: "authorized-forbidden" as const,
          imageAlt: "SST et prévention des risques en environnement professionnel",
          items: [
            "Repérer les situations dangereuses",
            "Faire remonter les écarts",
            "Participer à l'amélioration",
            "Relier secours et prévention",
          ],
          tone: "slate",
        },
      },
    ],
  },
};
