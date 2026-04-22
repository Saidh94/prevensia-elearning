import { b1b2brbcModuleContent } from "./b1b2brbc-content";
import { bsbeModuleContent } from "./bsbe-content";
import { ModuleContent } from "./module-types";

export const modulesContent: Record<string, ModuleContent> = {
  bsbe: bsbeModuleContent,
  b1b2brbc: b1b2brbcModuleContent,
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
        "Une mauvaise coordination ou une confusion sur les rôles peut conduire à un accident."
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
        "La coordination fait partie de la prévention."
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

  "Plusieurs distances normatives structurent ces zones : la DLI (Distance Limite d’Intervention), la DLVS (Distance Limite de Voisinage Simple) et la DLVR (Distance Limite de Voisinage Renforcé). Ces distances ne sont pas arbitraires : elles dépendent du domaine de tension et des conditions d’exploitation.",

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
        "En BT, 30 cm constitue un repère pédagogique important.",
        "En HT, la DMA ne doit jamais être franchie."
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
    "DLI",
    "DLVS",
    "DLVR",
    "DMA",
    "Repère BT à 30 cm",
    "Respect strict des limites"
  ],
  tone: "amber",
  imagePath: "/elearning/h0b0/zones-approche.png",
  imageAlt: "Illustration des zones d’environnement électrique et distances d’approche"
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
  imagePath: "/elearning/h0b0/environnement-travail.png",
  imageAlt: "Illustration des différents types d’environnements électriques"
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
  imagePath: "/elearning/h0b0/risque-electrique.png",
  imageAlt: "Illustration du contact direct et du contact indirect"
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
        "Le type de courant compte également. Dans les approches pédagogiques simplifiées, on rappelle souvent que les valeurs en courant continu sont généralement plus élevées que celles du courant alternatif pour produire certains effets physiologiques, mais cela ne signifie jamais absence de danger."
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
        "La durée de passage et le trajet changent la gravité."
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
  imagePath: "/elearning/h0b0/intensites-effets.png",
  imageAlt: "Illustration pédagogique de la relation entre intensité du courant et dommages"
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
        "Pour un titulaire H0B0, le réflexe est simple : milieu humide = vigilance maximale, arrêt si doute et aucun geste improvisé."
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
        "Le milieu de travail change directement le niveau de risque."
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
      id: "ppe",
      title: "13. Équipements de protection collective et individuelle",
      intro:
        "La logique de prévention donne la priorité aux protections collectives. Les EPI viennent en complément, jamais en remplacement des règles.",
      content: [
        "La protection collective repose notamment sur les capotages, enveloppes, écrans, barrières, balisages, accès maîtrisés et signalisation.",
        "Les EPI complètent la prévention mais ne rendent jamais une opération interdite autorisée.",
        "Le titulaire H0B0 doit savoir reconnaître les protections présentes, ne jamais les neutraliser et signaler toute absence ou dégradation.",
        "Aucun objectif d’exploitation ne justifie le contournement d’une protection."
      ],
      deepDive: [
        "Les protections collectives ont l’avantage de protéger l’ensemble des personnes exposées, et pas uniquement celui qui porte un équipement.",
        "Les EPI électriques spécialisés relèvent d’un contexte d’opération déterminé. Ils ne constituent jamais un passe-droit pour un H0B0.",
        "Le respect de la protection existante fait partie intégrante du comportement attendu."
      ],
      keyPoints: [
        "La protection collective est prioritaire.",
        "Les EPI ne remplacent jamais les règles.",
        "Une protection manquante doit être signalée.",
        "Le H0B0 ne neutralise jamais une barrière de sécurité."
      ],
      forbiddenPoints: [
        "Contourner un balisage ou un écran.",
        "Retirer un capot ou une enveloppe.",
        "Croire qu’un EPI autorise une action interdite."
      ],
      legalRefs: [
        "NF C 18-510 : priorité à l’organisation de sécurité et aux protections adaptées.",
        "Prévention du risque électrique : aucune protection ne justifie une action hors périmètre."
      ],
      practicalCase:
        "Exemple : une barrière de protection gêne le passage d’un chariot. Le salarié H0B0 ne la déplace pas de sa propre initiative ; il suit la procédure prévue ou alerte."
      ,
    visual: {
  title: "Protections à respecter",
  subtitle: "Protection collective d’abord, discipline toujours.",
  items: [
    "Capotage et enveloppe",
    "Signalisation et balisage",
    "Accès maîtrisés",
    "EPI en complément selon les cas prévus"
  ],
  tone: "green",
  imagePath: "/elearning/h0b0/epi-epc.png",
  imageAlt: "Illustration des équipements de protection collective et individuelle"
}
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
  imagePath: "/elearning/h0b0/autorise-interdit.png",
  imageAlt: "Illustration des comportements autorisés et interdits en H0B0"
}
    },
    {
      id: "conduct",
      title:
        "15. Conduite à tenir en cas d’anomalie, d’électrisation ou de départ de feu",
      intro:
        "En situation anormale, la priorité est d’éviter le suraccident, de se protéger puis d’alerter.",
      content: [
        "En cas d’anomalie, il faut immédiatement cesser l’utilisation du matériel concerné, sécuriser la zone si cela peut être fait sans exposition, puis alerter.",
        "En cas d’électrisation, il ne faut jamais toucher directement la victime si elle est encore au contact de la source de danger.",
        "En cas de départ de feu d’origine électrique, la priorité est l’alerte, la protection des personnes, l’évacuation si nécessaire et l’application stricte des consignes du site. L’utilisation d’un moyen d’extinction n’est envisageable que si elle est prévue, maîtrisée et réalisable sans exposition au danger.",
        "Odeur de brûlé, fumée, échauffement, étincelles, déclenchements répétés ou traces de brûlure doivent toujours être pris au sérieux."
      ],
      deepDive: [
        "La première erreur classique est de vouloir aider trop vite sans supprimer le danger. Cela crée un suraccident.",
        "La seconde erreur est de banaliser le signe avant-coureur : odeur, chauffe, fumée légère, déclenchement répété.",
        "Le H0B0 doit retenir une séquence simple : arrêter, se protéger, alerter, appliquer les consignes."
      ],
      keyPoints: [
        "Stopper l’usage et s’éloigner sans s’exposer.",
        "Ne jamais toucher une victime encore sous danger électrique.",
        "Alerter immédiatement.",
        "Respecter les consignes du site."
      ],
      forbiddenPoints: [
        "Toucher une victime encore en contact avec la source électrique.",
        "Utiliser de l’eau sur une installation sous tension.",
        "Improviser une extinction ou une manœuvre hors consigne."
      ],
      legalRefs: [
        "NF C 18-510 : la protection contre le suraccident est prioritaire.",
        "Prévention incendie : application stricte des consignes du site et des moyens adaptés."
      ],
      practicalCase:
        "Exemple : une rallonge fume et dégage une odeur de brûlé. L’opérateur cesse immédiatement l’usage, interdit l’accès proche si possible sans s’exposer et alerte selon la procédure."
      ,
    visual: {
  title: "Réaction en situation anormale",
  subtitle: "Stop, protection, alerte, pas d’improvisation.",
  items: [
    "Arrêter l’usage",
    "Éviter le suraccident",
    "Alerter la bonne personne",
    "Appliquer les consignes de secours et d’évacuation"
  ],
  tone: "red",
  imagePath: "/elearning/h0b0/conduite-tenir.png",
  imageAlt: "Illustration de la conduite à tenir en cas d’anomalie ou d’accident électrique"
}
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
  imagePath: "/elearning/h0b0/reflexes-h0b0.png",
  imageAlt: "Illustration de synthèse des réflexes H0B0"
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
      "Parcours e-learning de sensibilisation à la prévention incendie, à l’alerte, à l’alarme, aux premiers moyens de secours et à l’évacuation.",
    duration: "35 à 50 minutes",
    level: "Débutant à intermédiaire",
    objective:
      "Reconnaître les causes de départ de feu, réagir correctement en cas d’alerte, connaître les principes d’évacuation et adopter les bons comportements de prévention dans les principaux environnements de travail.",
    audience:
      "Tout personnel amené à évoluer dans des locaux tertiaires, industriels, logistiques ou recevant du public.",
    certificationNote:
      "Ce module constitue une sensibilisation théorique. Les consignes du site, les exercices, la reconnaissance des circulations et la prise en main pratique des moyens de première intervention restent indispensables.",
    heroBadge: "Prévention incendie",
    finalMessage:
      "Vous avez parcouru les fondamentaux de la prévention incendie et de l’évacuation. Le quiz permettra de valider les bons réflexes avant mise en situation ou exercice.",
    quizCtaLabel: "Passer au quiz sécurité incendie",
    sections: [
      {
        id: "naissance-feu",
        title: "1. Naissance du feu",
        content: [
          "Un feu naît de la rencontre d’une énergie d’activation, d’un combustible et d’un comburant. La prévention consiste à agir sur ces paramètres en limitant les sources d’ignition, en maîtrisant les combustibles et en organisant correctement les locaux.",
          "Les causes fréquentes de départ de feu sont les défaillances électriques, les travaux par points chauds, les échauffements mécaniques, les négligences humaines et l’accumulation de matières combustibles."
        ],
        visual: {
          title: "Triangle du feu",
          subtitle: "Comprendre pour prévenir.",
          items: [
            "Combustible",
            "Comburant",
            "Énergie d’activation",
            "Supprimer un élément = empêcher ou limiter le feu"
          ],
          tone: "red",
        },
      },
      {
        id: "alerte-alarme",
        title: "2. Alerte, alarme et premiers réflexes",
        content: [
          "Détecter une situation anormale, transmettre l’alerte rapidement et reconnaître le signal d’alarme sont essentiels pour éviter l’aggravation.",
          "Le premier bon réflexe consiste à alerter sans retard, sans banaliser la situation et sans se mettre en danger."
        ],
        keyPoints: [
          "Alerter vite.",
          "Déclencher l’alarme si nécessaire selon les consignes.",
          "Ne pas perdre de temps à vérifier seul une situation dangereuse."
        ],
        visual: {
          title: "Réaction immédiate",
          subtitle: "Voir, alerter, sécuriser.",
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
        id: "evacuation",
        title: "3. Évacuation",
        content: [
          "Une évacuation réussie repose sur des cheminements connus, un comportement calme, le respect des consignes et la prise en compte des personnes vulnérables.",
          "Le point de rassemblement, le comptage des personnes, la transmission d’une information fiable et l’attente des consignes font partie intégrante de l’évacuation."
        ],
        visual: {
          title: "Principes d’évacuation",
          subtitle: "Quitter, rejoindre, rendre compte.",
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
        title: "4. Cadre réglementaire",
        content: [
          "En Code du travail, l’employeur doit organiser les moyens de premier secours contre l’incendie, les consignes, les essais et les exercices.",
          "Dans les ERP, IGH ou certaines ICPE, des exigences complémentaires existent selon la nature du bâtiment et du risque."
        ],
        keyPoints: [
          "Code du travail = socle général.",
          "ERP = sécurité du public.",
          "IGH = organisation renforcée.",
          "ICPE = prescriptions liées au risque industriel."
        ],
        visual: {
          title: "Comprendre les environnements réglementaires",
          subtitle: "Même objectif : protéger les personnes et limiter le sinistre.",
          items: [
            "Code du travail",
            "ERP",
            "IGH",
            "ICPE"
          ],
          tone: "blue",
        },
      },
      {
        id: "prevention-quotidienne",
        title: "5. Prévention au quotidien",
        content: [
          "La sécurité incendie dépend largement des comportements quotidiens : ordre, propreté, maîtrise des déchets, respect des consignes électriques et dégagement des issues.",
          "La prévention repose aussi sur le signalement des anomalies : bloc porte non conforme, dispositif hors service, déclencheur manuel inaccessible, stockage inadapté."
        ],
        forbiddenPoints: [
          "Bloquer une porte coupe-feu.",
          "Stocker devant une issue.",
          "Masquer un extincteur ou un déclencheur manuel.",
          "Laisser s’installer un désordre chronique."
        ],
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
      "Parcours e-learning d’initiation au fonctionnement d’un système de sécurité incendie, à son exploitation et aux bons réflexes utilisateur.",
    duration: "45 à 60 minutes",
    level: "Intermédiaire",
    objective:
      "Comprendre le rôle d’un SSI, distinguer les grandes fonctions SDI / SMSI / alarme, connaître les réflexes d’exploitation et situer les principaux référentiels français.",
    audience:
      "Exploitants, responsables de site, encadrement, personnel technique ou utilisateurs amenés à interagir avec un SSI sans en assurer la conception réglementaire complète.",
    certificationNote:
      "Ce module traite de l’exploitation et de la compréhension fonctionnelle. Il ne remplace ni la coordination SSI, ni l’étude de conception, ni la maintenance spécialisée.",
    heroBadge: "Système de sécurité incendie",
    finalMessage:
      "Vous disposez désormais d’une base pour comprendre le rôle d’un SSI et dialoguer plus efficacement avec l’exploitant, le mainteneur, le coordinateur SSI ou la maîtrise d’œuvre.",
    quizCtaLabel: "Passer au quiz SSI",
    sections: [
      {
        id: "role-ssi",
        title: "1. Rôle d’un SSI",
        content: [
          "Un système de sécurité incendie participe à la détection, à l’alarme, à la mise en sécurité et à l’exploitation des informations utiles en cas d’incendie.",
          "Selon les bâtiments et leur réglementation, il peut intégrer ou piloter différentes fonctions : détection automatique ou manuelle, diffusion de l’alarme, compartimentage, désenfumage, gestion des issues, arrêt technique."
        ],
        visual: {
          title: "Fonctions principales d’un SSI",
          subtitle: "Détecter, alerter, mettre en sécurité.",
          items: [
            "Détection incendie",
            "Diffusion de l’alarme",
            "Mise en sécurité incendie",
            "Transmission d’informations d’exploitation"
          ],
          tone: "blue",
        },
      },
      {
        id: "sdi-smsi",
        title: "2. SDI, SMSI et exploitation",
        content: [
          "Le système de détection incendie recueille les informations de détection. Le système de mise en sécurité incendie commande ensuite les fonctions de sécurité prévues.",
          "L’exploitation d’un SSI suppose de savoir identifier l’origine d’une information, reconnaître une alarme feu, un dérangement, un défaut technique ou une situation d’essai."
        ],
        keyPoints: [
          "SDI = collecte et traitement des informations de détection.",
          "SMSI = commandes de mise en sécurité.",
          "L’exploitation repose sur la lecture correcte des états."
        ],
        visual: {
          title: "Lecture simple de l’architecture SSI",
          subtitle: "Information puis action de sécurité.",
          items: [
            "Détecteur ou déclencheur manuel",
            "Traitement de l’information incendie",
            "Commande des fonctions de sécurité",
            "Exploitation et retour d’information"
          ],
          tone: "amber",
        },
      },
      {
        id: "normes-referentiels",
        title: "3. Référentiels français utiles",
        content: [
          "La famille NF S 61 sert de base de référence dans le domaine SSI. Elle couvre notamment les dispositions générales, les règles d’installation et certaines exigences techniques selon les fonctions considérées.",
          "La NF S 61-931 constitue une référence générale du SSI, la NF S 61-932 traite des règles d’installation du SMSI et la NF S 61-970 des règles d’installation du SDI."
        ],
        keyPoints: [
          "NF S 61-931 : cadre général SSI.",
          "NF S 61-932 : règles d’installation du SMSI.",
          "NF S 61-970 : règles d’installation du SDI."
        ],
        visual: {
          title: "Référentiels à connaître",
          subtitle: "Normes et textes se complètent.",
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
        id: "bons-reflexes",
        title: "4. Bons réflexes d’exploitation",
        content: [
          "En exploitation courante, il faut connaître les accès autorisés, les procédures d’acquittement ou de réarmement prévues par l’organisation du site, et surtout les limites de ce qui peut être fait par un utilisateur non mainteneur.",
          "Une alarme, un dérangement ou un défaut technique ne doivent jamais être ignorés. Toute anomalie répétitive doit être tracée, analysée et traitée."
        ],
        forbiddenPoints: [
          "Neutraliser un équipement sans procédure.",
          "Réarmer à répétition sans analyse.",
          "Confondre exploitation et maintenance spécialisée."
        ],
        visual: {
          title: "Exploiter un SSI avec méthode",
          subtitle: "Comprendre, agir dans son rôle, tracer.",
          items: [
            "Identifier le type d’information",
            "Appliquer la consigne du site",
            "Alerter le bon interlocuteur",
            "Tracer et suivre l’anomalie"
          ],
          tone: "red",
        },
      },
    ],
  },

  sprinkler: {
    title: "Exploitation sprinkler et référentiels techniques",
    shortTitle: "Sprinkler",
    subtitle:
      "Parcours e-learning d’initiation à l’exploitation d’une installation sprinkler, à la surveillance et aux principaux repères techniques associés.",
    duration: "45 à 60 minutes",
    level: "Intermédiaire",
    objective:
      "Comprendre le rôle d’une installation sprinkler, reconnaître ses composants principaux, identifier les anomalies d’exploitation et situer les grands référentiels de référence.",
    audience:
      "Personnel d’exploitation, maintenance, encadrement technique, responsables de site, utilisateurs en environnement industriel, logistique ou tertiaire.",
    certificationNote:
      "Ce module traite de l’exploitation et de la compréhension fonctionnelle. Il ne remplace ni une étude sprinkler, ni un audit de conformité, ni une mission de conception.",
    heroBadge: "Protection incendie",
    finalMessage:
      "Vous avez acquis les fondamentaux de l’exploitation sprinkler. Le quiz final permettra de vérifier votre compréhension des composants, alarmes et réflexes d’exploitation.",
    quizCtaLabel: "Passer au quiz sprinkler",
    sections: [
      {
        id: "principe",
        title: "1. Principe de fonctionnement",
        content: [
          "Une installation sprinkler est conçue pour détecter et maîtriser automatiquement un incendie au plus près du foyer grâce au déclenchement thermique des têtes concernées.",
          "Elle ne fonctionne pas comme un déversement général : seules les têtes exposées à une chaleur suffisante s’ouvrent."
        ],
        visual: {
          title: "Principe sprinkler",
          subtitle: "Détection thermique locale et attaque précoce.",
          items: [
            "La chaleur ouvre la tête concernée",
            "L’eau est délivrée localement",
            "L’alarme est transmise",
            "Le feu est maîtrisé ou contenu"
          ],
          tone: "blue",
        },
      },
      {
        id: "composants",
        title: "2. Composants principaux",
        content: [
          "Une installation comprend notamment les têtes sprinkler, un réseau de tuyauteries, des postes de contrôle, une source d’eau et des dispositifs d’alarme.",
          "L’exploitation suppose de savoir reconnaître les organes essentiels, les positions normales d’exploitation et les états anormaux à surveiller."
        ],
        keyPoints: [
          "Poste de contrôle",
          "Source d’eau",
          "Réseau",
          "Têtes sprinkler",
          "Alarme et report"
        ],
        visual: {
          title: "Vue d’ensemble d’une installation",
          subtitle: "Les organes à connaître en exploitation.",
          items: [
            "Source d’eau",
            "Poste de contrôle",
            "Réseau de distribution",
            "Têtes sprinkler et alarmes"
          ],
          tone: "slate",
        },
      },
      {
        id: "anomalies",
        title: "3. Anomalies et vigilance",
        content: [
          "Une vanne fermée, une pression anormale, une alarme non traitée, un local source encombré, une fuite ou une corrosion visible doivent être considérées avec sérieux.",
          "L’exploitation sprinkler demande de la rigueur, de la traçabilité et une remontée rapide des écarts."
        ],
        forbiddenPoints: [
          "Fermer une vanne sans procédure.",
          "Ignorer une alarme.",
          "Encombrer les organes d’accès.",
          "Considérer une fuite comme anodine."
        ],
        visual: {
          title: "Écarts à surveiller",
          subtitle: "Une petite anomalie peut dégrader toute la protection.",
          items: [
            "Vanne non conforme",
            "Pression anormale",
            "Alarme non traitée",
            "Encombrement ou défaut visible"
          ],
          tone: "red",
        },
      },
      {
        id: "referentiels",
        title: "4. Référentiels et cadre d’exploitation",
        content: [
          "Les installations sprinkler sont fréquemment exploitées, surveillées ou auditées au regard de référentiels tels qu’APSAD R1, EN 12845, NFPA 13 ou certaines fiches FM selon le contexte du site.",
          "L’enjeu est de connaître les exigences de maintien en état, les essais périodiques et la cohérence entre la protection installée et le risque réellement présent."
        ],
        visual: {
          title: "Cadre technique d’exploitation",
          subtitle: "Protection installée, risque réel, organisation du site.",
          items: [
            "Référentiel technique applicable",
            "Conditions normales d’exploitation",
            "Surveillance et essais",
            "Adéquation avec le risque stocké ou process"
          ],
          tone: "amber",
        },
      },
      {
        id: "icpe-1510",
        title: "5. Focus entrepôts et ICPE 1510",
        content: [
          "Dans les entrepôts couverts relevant de la rubrique ICPE 1510, la prévention des sinistres s’apprécie dans un ensemble plus large de prescriptions : cellules, séparation, toiture, moyens de secours, exploitation et gestion du risque.",
          "Toute modification d’exploitation significative peut justifier une relecture de la stratégie incendie du site afin de confirmer que la protection reste adaptée."
        ],
        keyPoints: [
          "ICPE 1510 = approche globale du risque entrepôt.",
          "Le sprinkler reste une composante d’un dispositif plus large.",
          "Les changements d’exploitation doivent être analysés."
        ],
        visual: {
          title: "Logique ICPE 1510",
          subtitle: "Protection incendie + organisation + adéquation du risque.",
          items: [
            "Compartimentage et cellules",
            "Sprinkler et autres moyens",
            "Conditions de stockage",
            "Suivi des modifications d’exploitation"
          ],
          tone: "green",
        },
      },
    ],
  },

  sst: {
    title: "SST - Sauveteur Secouriste du Travail",
    shortTitle: "SST",
    subtitle:
      "Parcours e-learning d’introduction aux principes de prévention et aux gestes de première intervention en attendant les secours.",
    duration: "45 à 60 minutes",
    level: "Débutant à intermédiaire",
    objective:
      "Repérer une situation dangereuse, protéger, examiner, faire alerter ou alerter, et adopter les premiers gestes adaptés dans le cadre SST.",
    audience:
      "Salariés amenés à participer à la prévention des risques et à la prise en charge initiale d’une victime.",
    certificationNote:
      "Ce module est un support théorique. La mise en pratique gestuelle et l’évaluation terrain restent indispensables dans un parcours SST.",
    heroBadge: "Secours au travail",
    finalMessage:
      "Vous avez parcouru les bases SST. Le quiz vous permettra de consolider la logique d’intervention avant une formation pratique encadrée.",
    quizCtaLabel: "Passer au quiz SST",
    sections: [
      {
        id: "proteger",
        title: "1. Protéger",
        content: [
          "Le premier objectif est d’éviter le suraccident. Il faut analyser rapidement la situation et supprimer ou isoler le danger sans s’exposer soi-même.",
          "Un secouriste inefficace ou blessé ne peut plus aider. La protection prime donc avant toute autre action."
        ],
        visual: {
          title: "Étape 1 : protéger",
          subtitle: "Éviter le suraccident.",
          items: [
            "Observer le danger",
            "Se protéger soi-même",
            "Supprimer ou isoler le risque",
            "Empêcher l’exposition d’autrui"
          ],
          tone: "red",
        },
      },
      {
        id: "examiner",
        title: "2. Examiner",
        content: [
          "Après protection, il faut examiner la victime pour identifier l’urgence : saigne-t-elle abondamment, répond-elle, respire-t-elle ?",
          "Cet examen conditionne la suite des gestes et l’alerte aux secours."
        ],
        visual: {
          title: "Étape 2 : examiner",
          subtitle: "Identifier l’urgence vitale.",
          items: [
            "Saigne-t-elle ?",
            "Répond-elle ?",
            "Respire-t-elle ?",
            "Quel geste immédiat faut-il engager ?"
          ],
          tone: "amber",
        },
      },
      {
        id: "alerter",
        title: "3. Alerter ou faire alerter",
        content: [
          "L’alerte doit être claire, rapide et utile. Il faut transmettre la nature de l’accident, le lieu précis, le nombre de victimes et les risques persistants éventuels."
        ],
        keyPoints: [
          "Qui appelle ?",
          "Quel numéro ?",
          "Quelles informations transmettre ?"
        ],
        visual: {
          title: "Étape 3 : alerter",
          subtitle: "Une alerte utile fait gagner du temps.",
          items: [
            "Lieu précis",
            "Nature de l’événement",
            "Nombre de victimes",
            "Risques persistants"
          ],
          tone: "blue",
        },
      },
      {
        id: "secourir",
        title: "4. Secourir",
        content: [
          "Les gestes de secours doivent être adaptés à l’état de la victime et au cadre de formation reçu. Ils ne remplacent pas l’action des secours spécialisés.",
          "La qualité du geste repose sur la méthode, le calme et la répétition en formation pratique."
        ],
        visual: {
          title: "Étape 4 : secourir",
          subtitle: "Le bon geste au bon moment.",
          items: [
            "Agir selon l’état de la victime",
            "Respecter la méthode apprise",
            "Surveiller jusqu’à l’arrivée des secours",
            "Rendre compte à la relève"
          ],
          tone: "green",
        },
      },
    ],
  },
};
