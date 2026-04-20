import { ModuleContent } from "./module-types";

export const bsbeModuleContent: ModuleContent = {
  title: "BS / BE Manoeuvre - Interventions elementaires et manoeuvres en basse tension",
  shortTitle: "BS / BE Manoeuvre",
  subtitle:
    "Parcours e-learning destine aux personnels amenes a realiser des remplacements simples, des raccordements elementaires et des manoeuvres d'exploitation en basse tension dans un cadre strictement defini, complete par une classe virtuelle de validation.",
  duration: "5 h 00 a 7 h 00 de theorie guidee",
  level: "Intermediaire",
  objective:
    "Identifier le cadre des habilitations BS et BE Manoeuvre, comprendre les limites d'autorisation, preparer une operation en securite, realiser une manoeuvre simple dans le respect des consignes, reconnaitre les situations interdites et adopter la bonne conduite en cas d'anomalie.",
  audience:
    "Personnel non electricien ou faiblement electricien amene a effectuer des remplacements simples, des raccordements elementaires, des remises en service, des rearments ou des manoeuvres d'exploitation en basse tension selon l'organisation de l'entreprise.",
  certificationNote:
    "Ce parcours constitue la base theorique. L'habilitation BS ou BE Manoeuvre reste delivree par l'employeur apres formation adaptee, evaluation des acquis, verification de l'adequation entre les taches reelles et le niveau d'autorisation retenu, puis sequence de validation a distance ou en situation.",
  heroBadge: "Habilitation electrique",
  finalMessage:
    "Le parcours BS / BE Manoeuvre vise a faire travailler avec methode, preparation et sang-froid. L'objectif n'est jamais d'improviser une action electrique, mais d'appliquer strictement les gestes autorises, les verifications prealables et les consignes de l'entreprise.",
  quizCtaLabel: "Passer au quiz BS / BE Manoeuvre",
  sections: [
    {
      id: "cadre-bsbe",
      title: "1. Cadre des habilitations BS et BE Manoeuvre",
      intro:
        "Les habilitations BS et BE Manoeuvre concernent des operations electriques limitees en basse tension. Elles ne donnent jamais les droits d'un electricien charge de travaux ou d'interventions generales.",
      content: [
        "L'habilitation BS vise des interventions elementaires en basse tension. Elle couvre des remplacements et des raccordements simples, realises sur des circuits identifies, dans un cadre technique et organisationnel defini.",
        "L'habilitation BE Manoeuvre vise les manoeuvres d'exploitation ou de maintenance autorisees par l'entreprise : mise en marche, arret, rearmement, ouverture, fermeture ou basculement d'un equipement ou d'un circuit, sans modification de l'installation.",
        "Dans les deux cas, la formation ne vaut jamais habilitation a elle seule. L'employeur delivre le titre apres verification des competences, du poste et des risques reels.",
      ],
      deepDive: [
        "BS et BE Manoeuvre sont des habilitations ciblees. Elles permettent de faire seulement ce qui a ete prevu, sur des materiels identifies, avec des procedures connues et sans sortir du cadre fixe par l'entreprise.",
        "Une habilitation ne s'interprete jamais selon l'habitude du terrain ou l'urgence de production. Si l'action demandee n'entre pas clairement dans le perimetre autorise, elle doit etre refusee ou requalifiee.",
      ],
      keyPoints: [
        "BS = interventions elementaires en basse tension.",
        "BE Manoeuvre = manoeuvres d'exploitation dans un cadre defini.",
        "L'employeur delivre l'habilitation.",
        "Toute action hors perimetre est interdite.",
      ],
      forbiddenPoints: [
        "Assimiler BS ou BE Manoeuvre a une habilitation d'electricien executant.",
        "Intervenir sur une installation non identifiee ou non prevue.",
        "Confondre rapidite d'action et autorisation technique.",
      ],
      legalRefs: [
        "Code du travail - prevention du risque electrique et habilitation.",
        "NF C 18-510 - definitions, symboles et conditions d'execution des operations.",
        "INRS - habilitation electrique et prevention du risque electrique.",
      ],
      practicalCase:
        "Exemple : un salarie doit reinitialiser un depart identifie apres un defaut mineur. Il verifie d'abord qu'il s'agit bien d'une manoeuvre autorisee par sa procedure interne et non d'un depannage ou d'une recherche de panne.",
      visual: {
        title: "Perimetre BS / BE Manoeuvre",
        subtitle: "Des gestes autorises, dans un cadre strictement defini.",
        items: [
          "Operations limitees",
          "Basse tension uniquement",
          "Materiels identifies",
          "Pas d'improvisation",
        ],
        tone: "blue",
        imagePath: "/images/armoire-electrique.jpg",
        imageAlt: "Tableau electrique utilise comme repere visuel pour le cadre BS et BE Manoeuvre",
      },
    },
    {
      id: "roles-limites",
      title: "2. Roles, limites et responsabilites",
      intro:
        "La securite repose autant sur les competences que sur la clarte des roles. Chacun doit savoir ce qu'il fait, ce qu'il ne fait pas et a qui transmettre une situation douteuse.",
      content: [
        "L'employeur definit les taches autorisees, fournit les consignes, verifie les competences et delivre l'habilitation adaptee.",
        "Le salarie habilite applique strictement les procedures, verifie le contexte, utilise les protections prevues et signale tout ecart ou doute.",
        "L'encadrement doit eviter les demandes ambiguës et s'assurer que les missions confiees correspondent reellement au titre d'habilitation.",
      ],
      deepDive: [
        "Un grand nombre d'accidents survient lorsqu'une mission bascule d'une manoeuvre simple vers une recherche de panne ou un depannage improvise. Ce glissement doit etre detecte et stoppe tres tot.",
        "La competence attendue n'est pas seulement technique. Elle consiste aussi a savoir s'arreter, demander appui et refuser une action non couverte.",
      ],
      keyPoints: [
        "L'encadrement cadre les operations.",
        "Le salarie habilite reste dans son perimetre.",
        "Le doute impose l'arret et l'escalade.",
      ],
      forbiddenPoints: [
        "Poursuivre une action alors que la situation n'est plus conforme a la procedure.",
        "Accepter une consigne orale floue sur une action electrique.",
      ],
      legalRefs: [
        "Code du travail - adequation entre competence, mission et risque.",
        "NF C 18-510 - role de l'employeur, de l'encadrement et de l'operateur habilite.",
      ],
      practicalCase:
        "Exemple : un responsable demande de remplacer un composant non prevu au support. Le titulaire BS doit s'arreter et demander une qualification plus adaptee.",
      visual: {
        title: "Qui fait quoi ?",
        subtitle: "Le cadre organisationnel fait partie de la prevention.",
        items: [
          "Employeur",
          "Encadrement",
          "Salarie habilite",
          "Personne competente a alerter",
        ],
        tone: "slate",
      },
    },
    {
      id: "operations-bs",
      title: "3. Operations autorisees en BS",
      intro:
        "Le BS couvre des actions simples, preparees et limitees. Ces actions doivent rester identifiables, repetables et compatibles avec les procedures de l'entreprise.",
      content: [
        "Le titulaire BS peut realiser certains remplacements simples, comme des fusibles, lampes, accessoires ou appareillages clairement prevus dans sa procedure interne.",
        "Il peut aussi effectuer des raccordements elementaires sur des circuits et materiels identifies, dans les limites fixees par la norme et l'organisation retenue.",
        "Avant toute operation, il faut verifier le materiel, l'accessibilite, l'absence d'anomalie visible, la compatibilite du geste avec son titre et la presence des protections necessaires.",
      ],
      deepDive: [
        "Une operation BS doit rester elementaire. Si elle impose un diagnostic, un demontage complexe, un travail sur plusieurs conducteurs non identifies ou une adaptation technique, elle sort du cadre.",
        "Le support documentaire de l'entreprise est determinant : fiche reflexe, procedure, schema simplifie ou instruction ecrite permettent de limiter le risque d'erreur.",
      ],
      keyPoints: [
        "BS = remplacements et raccordements elementaires.",
        "Le materiel doit etre identifie et l'action simple.",
        "La preparation fait partie de l'operation.",
      ],
      forbiddenPoints: [
        "Transformer un remplacement simple en depannage.",
        "Intervenir sur un materiel degrade ou non identifie.",
        "Modifier le cablage ou contourner une procedure.",
      ],
      legalRefs: [
        "NF C 18-510 - interventions elementaires en basse tension.",
        "INRS - rappel des limites des interventions elementaires.",
      ],
      practicalCase:
        "Exemple : un luminaire defectueux doit etre remplace sur un point clairement identifie selon une procedure connue. Le titulaire BS suit sa gamme de securite sans improviser.",
      visual: {
        title: "BS : ce qui est attendu",
        subtitle: "Des gestes simples, prealablement definis.",
        items: [
          "Remplacer",
          "Raccorder simplement",
          "Verifier avant d'agir",
          "Stopper si la situation se complique",
        ],
        tone: "green",
      },
    },
    {
      id: "operations-bem",
      title: "4. Manoeuvres autorisees en BE Manoeuvre",
      intro:
        "Une manoeuvre consiste a agir sur un organe de commande ou de coupure prevu a cet effet, sans modifier l'installation ni effectuer de recherche de panne.",
      content: [
        "Le titulaire BE Manoeuvre peut, selon les procedures de l'entreprise, ouvrir, fermer, mettre en service, arreter, basculer ou reinitialiser un circuit ou un equipement.",
        "La manoeuvre doit porter sur un organe identifie, accessible, maintenu en bon etat et compris par l'operateur.",
        "Une manoeuvre n'est pas un diagnostic. Si un declenchement se reproduit, si l'odeur est anormale, si un echauffement est constate ou si le contexte n'est pas clair, il faut s'arreter et signaler.",
      ],
      deepDive: [
        "Le risque classique consiste a confondre rearmement autorise et remise en service dangereuse. Reenclencher un organe sans comprendre le contexte peut exposer des personnes ou aggraver un defaut.",
        "La manoeuvre doit toujours etre precedee d'une verification rapide du contexte : aucune presence dans une zone dangereuse, aucune anomalie visible, procedure connue et ordre de mission clair.",
      ],
      keyPoints: [
        "BE Manoeuvre = action sur un organe prevu a cet effet.",
        "Pas de depannage, pas de modification, pas de diagnostic.",
        "Rearmement repetitif interdit.",
      ],
      forbiddenPoints: [
        "Reenclencher plusieurs fois sans comprendre la cause.",
        "Forcer un appareil ou un capot.",
        "Contourner un verrouillage ou une interdiction.",
      ],
      legalRefs: [
        "NF C 18-510 - manoeuvres d'exploitation et limites d'autorisation.",
        "INRS - distinction entre manoeuvre et intervention.",
      ],
      practicalCase:
        "Exemple : un disjoncteur divisionnaire a declenche. Avant de le rearmer, le titulaire BE Manoeuvre verifie que la zone est sure, qu'aucun materiel n'est manifestement endommage et que la procedure interne autorise ce geste.",
      visual: {
        title: "BE Manoeuvre : la bonne logique",
        subtitle: "Agir sur l'organe prevu, jamais au-dela.",
        items: [
          "Identifier",
          "Verifier",
          "Manoeuvrer",
          "Signaler si anomalie",
        ],
        tone: "blue",
      },
    },
    {
      id: "preparation-securite",
      title: "5. Preparation, verifications et environnement de travail",
      intro:
        "Avant une intervention elementaire ou une manoeuvre, l'environnement doit etre lisible, protege et compatible avec l'action prevue.",
      content: [
        "Il faut verifier l'etat du materiel, l'accessibilite de la zone, la presence du balisage, l'absence d'eau, d'odeur anormale, d'echauffement, de capot manquant ou de degradation visible.",
        "Le poste de travail doit permettre d'agir sans contrainte dangereuse : pas de zone encombree, pas d'appui instable, pas de materiel conducteur inutile a proximite.",
        "La verification des moyens de protection et des outils prevus fait partie de la preparation. On ne commence jamais une action electrique autorisee dans un environnement douteux.",
      ],
      deepDive: [
        "Le contexte compte autant que le geste. Une manoeuvre banale peut devenir dangereuse dans un local degrade, une zone humide ou en presence d'un capot retire.",
        "La preparation inclut aussi la verification de la bonne identification du circuit et de l'organe concerne. Une erreur d'identification peut produire un incident grave.",
      ],
      keyPoints: [
        "Observer l'environnement avant toute action.",
        "Identifier clairement le materiel concerne.",
        "S'arreter en cas d'anomalie.",
      ],
      forbiddenPoints: [
        "Agir dans une zone degradee ou mal identifiee.",
        "Se fier a l'habitude plutot qu'a la procedure.",
      ],
      legalRefs: [
        "Code du travail - evaluation du risque et adaptation des moyens de prevention.",
        "NF C 18-510 - preparation des operations et respect de l'environnement de travail.",
      ],
      practicalCase:
        "Exemple : une operation simple est prevue dans un local ou de l'eau est presente au sol. L'operateur stoppe et fait traiter le risque environnemental avant toute action.",
      visual: {
        title: "Verifier avant d'agir",
        subtitle: "Le contexte peut rendre une action simple dangereuse.",
        items: [
          "Zone lisible",
          "Materiel identifie",
          "Protections presentes",
          "Aucune anomalie visible",
        ],
        tone: "amber",
      },
    },
    {
      id: "equipements-protections",
      title: "6. Outils, protections et gestes de securite",
      intro:
        "Le choix des outils et l'usage correct des protections participent directement a la prevention du risque electrique.",
      content: [
        "Les outils, EPI et EPC prevus par l'entreprise doivent etre adaptes a l'operation. Ils ne remplacent pas le respect du perimetre autorise.",
        "Le salarie habilite doit controler l'etat apparent de ses moyens de travail : absence de deterioration, proprete, conformite et bon usage.",
        "L'ordre de securite reste le meme : procedure, protections collectives, protections individuelles en complement, puis geste maitrise.",
      ],
      deepDive: [
        "Un EPI ne rend jamais une operation interdite autorisee. Il protege dans un cadre defini, mais ne modifie pas la nature du titre d'habilitation.",
        "L'outil mal choisi, deteriore ou impropre a l'environnement de travail peut lui-meme devenir une source de risque.",
      ],
      keyPoints: [
        "Les protections se respectent et se verifient.",
        "Un EPI ne change pas les limites de l'habilitation.",
        "L'outil doit etre adapte et en bon etat.",
      ],
      forbiddenPoints: [
        "Improviser avec un outil non prevu.",
        "Ignorer une protection absente ou degradee.",
      ],
      legalRefs: [
        "Code du travail - protections collectives et individuelles.",
        "NF C 18-510 - outils et protections adaptes aux operations.",
      ],
      practicalCase:
        "Exemple : l'operateur constate qu'un moyen de protection prevu n'est plus disponible. L'action est reportee tant que les conditions de securite ne sont pas retablies.",
      visual: {
        title: "Maitriser son materiel",
        subtitle: "La conformite des moyens de travail fait partie du geste professionnel.",
        items: [
          "Outils adaptes",
          "Protections presentes",
          "Controle visuel",
          "Pas d'improvisation",
        ],
        tone: "slate",
      },
    },
    {
      id: "interdits-ecarts",
      title: "7. Situations interdites et ecarts a ne pas banaliser",
      intro:
        "Le titulaire BS ou BE Manoeuvre doit reconnaitre les situations qui sortent immediatement de son cadre et savoir s'interrompre sans hesitation.",
      content: [
        "Sont notamment interdits : le depannage hors procedure, la recherche de panne, la modification d'un cablage, l'intervention sur une partie non identifiee, le contournement d'une protection ou le travail dans une zone degradee.",
        "Le rearmement repete d'un organe de protection, la mise en service sans verification minimale du contexte ou l'utilisation d'un materiel defectueux constituent des prises de risque majeures.",
        "Le reflexe professionnel n'est pas de finir coute que coute, mais de proteger, signaler et requalifier la situation.",
      ],
      deepDive: [
        "Un ecart banalise devient vite une norme locale. C'est souvent comme cela que les organisations glissent vers des pratiques dangereuses.",
        "La bonne reaction face a l'ecart n'est pas seulement technique. Elle est aussi organisationnelle : tracer, alerter, demander appui et empecher la reexposition.",
      ],
      keyPoints: [
        "Tout ce qui ressemble a du depannage sort du cadre simple.",
        "Rearmement repete = signal d'alerte, pas solution.",
        "L'arret est parfois la bonne competence.",
      ],
      forbiddenPoints: [
        "Chercher la panne soi-meme hors procedure.",
        "Reenclencher en boucle pour voir si ca repart.",
        "Agir sur un materiel degrade.",
      ],
      legalRefs: [
        "NF C 18-510 - distinction entre operation autorisee et operation interdite.",
        "INRS - prise en compte des situations anormales et des limites d'autorisation.",
      ],
      practicalCase:
        "Exemple : apres deux declenchements consecutifs, le titulaire BE Manoeuvre cesse toute tentative de remise en service et fait traiter la situation par une personne competente.",
      visual: {
        title: "Savoir dire stop",
        subtitle: "Le danger apparait souvent quand on insiste.",
        items: [
          "Depannage interdit",
          "Pas de rearmement en boucle",
          "Pas de modification",
          "Signalement immediat",
        ],
        tone: "red",
      },
    },
    {
      id: "anomalies-urgence",
      title: "8. Conduite a tenir en cas d'anomalie, d'electrisation ou de depart de feu",
      intro:
        "La reaction attendue doit etre immediate, simple et maitrisee : se proteger, proteger les autres, alerter, puis secourir dans les limites de sa formation.",
      content: [
        "En presence d'une odeur anormale, de fumee, d'un echauffement, d'un bruit inhabituel ou d'un materiel defectueux, l'operateur stoppe l'action, se met en securite et alerte.",
        "En cas d'electrisation, il ne faut jamais toucher directement une victime tant que le danger electrique persiste. La suppression du risque prime toujours.",
        "En cas de depart de feu d'origine electrique, seules les actions compatibles avec les consignes du site et le niveau de securite reel peuvent etre engagees. L'improvisation est interdite.",
      ],
      deepDive: [
        "La panique et la precipitation aggravent le risque. La conduite a tenir doit rester stable : stop, protection, alerte, puis action de secours si la situation est maitrisee.",
        "Une situation d'urgence n'etend jamais le perimetre de l'habilitation. Elle impose au contraire de s'en tenir encore plus strictement aux gestes autorises.",
      ],
      keyPoints: [
        "Se proteger avant toute autre action.",
        "Ne jamais devenir une seconde victime.",
        "Alerter vite et avec des informations claires.",
      ],
      forbiddenPoints: [
        "Toucher une victime sans avoir supprime le danger.",
        "Improviser une intervention electrique sous pression.",
      ],
      legalRefs: [
        "Code du travail - organisation des secours et prevention des accidents.",
        "INRS - conduites a tenir face a un accident electrique.",
      ],
      practicalCase:
        "Exemple : un coffret degage de la fumee au moment d'une manoeuvre. L'operateur cesse l'action, eloigne les personnes exposees et alerte sans chercher a ouvrir ou demonter.",
      visual: {
        title: "Reflexe urgence",
        subtitle: "Stop - proteger - alerter.",
        items: [
          "Arret immediat",
          "Mise a distance",
          "Alerte",
          "Secours si possible sans suraccident",
        ],
        tone: "amber",
      },
    },
    {
      id: "cas-pratiques",
      title: "9. Cas pratiques et logique de decision",
      intro:
        "Les bons reflexes se construisent quand on sait reconnaitre rapidement si l'action demandee est autorisee, interdite ou doit etre escaladee.",
      content: [
        "Avant toute action, l'operateur doit se poser quelques questions simples : le materiel est-il clairement identifie ? la procedure existe-t-elle ? l'action entre-t-elle dans mon titre ? l'environnement est-il sain ?",
        "Si l'une de ces reponses n'est pas clairement positive, l'action doit etre suspendue.",
        "La qualite professionnelle repose sur la capacite a decider correctement avant le geste, pas seulement pendant le geste.",
      ],
      deepDive: [
        "Une bonne logique de decision evite de transformer une demande simple en prise de risque. L'operateur doit rester capable d'expliquer pourquoi il agit, pourquoi il n'agit pas ou pourquoi il alerte.",
        "L'objectif du parcours n'est pas d'accumuler des automatismes aveugles, mais d'ancrer un raisonnement securite fiable.",
      ],
      keyPoints: [
        "Identifier, verifier, decider, agir ou stopper.",
        "L'absence de clarte impose l'arret.",
        "La decision securite precede le geste.",
      ],
      forbiddenPoints: [
        "Se fier uniquement a l'habitude.",
        "Agir sans procedure ni confirmation du perimetre.",
      ],
      legalRefs: [
        "NF C 18-510 - adequation des operations au titre d'habilitation.",
        "INRS - raisonnement preventif et retour d'experience.",
      ],
      practicalCase:
        "Exemple : le titulaire BS doit remplacer un appareil, mais le repere d'identification ne correspond pas a la fiche. Il stoppe et demande verification avant toute action.",
      visual: {
        title: "Avant d'agir",
        subtitle: "Une grille simple pour prendre la bonne decision.",
        items: [
          "Materiel identifie ?",
          "Procedure disponible ?",
          "Action autorisee ?",
          "Environnement conforme ?",
        ],
        tone: "green",
      },
    },
    {
      id: "synthese-bsbe",
      title: "10. Synthese operationnelle",
      intro:
        "Les habilitations BS et BE Manoeuvre autorisent des actions precises, pas une autonomie electrique generale. La vraie competence est de rester dans son cadre.",
      content: [
        "Le titulaire BS realise des interventions elementaires en basse tension sur des materiels identifies et dans un cadre strictement defini.",
        "Le titulaire BE Manoeuvre realise des manoeuvres d'exploitation autorisees, sans depannage ni modification de l'installation.",
        "Dans tous les cas, la preparation, l'identification du materiel, la verification de l'environnement, le respect des protections et l'arret en cas de doute constituent les reflexes essentiels.",
        "Une situation qui devient complexe, anormale ou mal identifiee doit etre transmise. Vouloir finir vite ou rendre service est l'une des principales sources d'accident.",
      ],
      deepDive: [
        "La logique finale est simple : agir seulement dans le cadre predefini, avec une procedure connue, sur un materiel identifie, dans un environnement sain et avec les protections appropriees.",
        "Si un seul de ces elements manque, la bonne conduite consiste a s'arreter, signaler et requalifier la situation.",
      ],
      keyPoints: [
        "BS et BE Manoeuvre sont des habilitations limitees.",
        "La preparation et l'identification sont obligatoires.",
        "Le doute impose l'arret.",
        "La securite prime toujours sur la rapidite.",
      ],
      legalRefs: [
        "Code du travail - prevention du risque electrique.",
        "NF C 18-510 - cadre des interventions elementaires et manoeuvres.",
        "INRS - maintien des reflexes de securite.",
      ],
      practicalCase:
        "Exemple : en fin de poste, une action simple est demandee en urgence sur un materiel mal repere. Le bon choix professionnel est de suspendre l'action tant que les conditions de securite ne sont pas reunies.",
      visual: {
        title: "Les 4 reflexes a retenir",
        subtitle: "Identifier - preparer - rester dans son cadre - alerter si doute.",
        items: [
          "Identifier",
          "Preparer",
          "Rester dans son cadre",
          "Alerter si doute",
        ],
        tone: "blue",
      },
    },
    {
      id: "documents-consignes",
      title: "11. Documents, consignes et tracabilite",
      intro:
        "Une operation BS ou BE Manoeuvre ne doit jamais reposer uniquement sur l'habitude. Les documents d'entreprise, consignes locales et traces d'intervention structurent la securite reelle.",
      content: [
        "Les fiches reflexes, procedures internes, reperages, plans simplifies et consignes de site permettent de verifier qu'une action reste bien dans le cadre autorise.",
        "Le titulaire BS ou BE Manoeuvre doit connaitre les documents utiles, savoir quand les consulter et ne pas agir si le support d'execution est absent, incoherent ou depasse.",
        "La tracabilite des ecarts, rearmements anormaux, anomalies constatees ou refus d'intervention participe a la prevention. Elle evite que la meme situation dangereuse se reproduise sans analyse.",
      ],
      deepDive: [
        "Une organisation mature ne demande pas seulement d'executer, elle fournit aussi des supports clairs. Quand le document manque, l'operateur ne doit pas compenser par l'improvisation.",
        "La remontee d'information fait partie du professionnalisme. Un doute bien signale vaut mieux qu'une action hasardeuse qui banalise un ecart electrique.",
      ],
      keyPoints: [
        "Procedure ecrite = repere de securite.",
        "Sans support clair, on s'arrete.",
        "Tracer un ecart permet d'eviter sa repetition.",
      ],
      forbiddenPoints: [
        "Intervenir sur simple habitude de terrain.",
        "Ignorer un support obsolescent ou incoherent.",
        "Ne rien consigner apres un incident ou un refus d'action.",
      ],
      legalRefs: [
        "Code du travail - organisation de la prevention et adaptation des instructions.",
        "NF C 18-510 - adequation des operations, consignes et organisation du travail.",
      ],
      practicalCase:
        "Exemple : une procedure de rearmement n'est plus coherente avec le reperage du tableau apres modification. L'operateur suspend l'action et fait corriger le support avant toute manoeuvre.",
      visual: {
        title: "La preuve ecrite protege l'operateur",
        subtitle: "Consigne, support et tracabilite font partie du geste professionnel.",
        items: [
          "Procedure disponible",
          "Repere coherent",
          "Consigne connue",
          "Ecart trace",
        ],
        tone: "slate",
      },
    },
  ],
};
