import { ModuleContent } from "./module-types";

export const b1b2brbcModuleContent: ModuleContent = {
  title: "B1 / B2 / BR / BC - Executants, charges de travaux, interventions et consignation en basse tension",
  shortTitle: "B1 / B2 / BR / BC",
  subtitle:
    "Parcours e-learning de preparation theorique destine aux electriciens et personnels techniques appeles a executer, encadrer, consigner ou intervenir en basse tension dans un cadre professionnel formalise, complete par une journee presentielle de validation et d'application.",
  duration: "7 h 00 a 10 h 00 de theorie guidee",
  level: "Avance",
  objective:
    "Comprendre les symboles B1, B2, BR et BC, distinguer les roles et responsabilites, preparer une operation en securite, maitriser les principes de consignation, d'intervention et de travaux en basse tension, identifier les ecarts critiques et adopter les bons reflexes face aux anomalies ou a l'urgence.",
  audience:
    "Electriciens, techniciens de maintenance, responsables techniques et personnels amenes a executer des travaux, conduire une intervention generale, preparer une consignation ou assurer un role d'encadrement electrique en basse tension.",
  certificationNote:
    "Ce parcours constitue la base theorique. La delivrance de l'habilitation releve de l'employeur apres evaluation des acquis, verification de l'adequation entre les taches reelles et le niveau retenu, ainsi qu'apres mise en situation pratique adaptee et sequence presentielle d'application.",
  heroBadge: "Habilitation electrique",
  finalMessage:
    "Le parcours B1 / B2 / BR / BC doit conduire a une logique de securite exigeante : preparation, verification, respect du role attribue, rigueur documentaire et refus de toute improvisation sur une installation electrique.",
  quizCtaLabel: "Passer au quiz B1 / B2 / BR / BC",
  sections: [
    {
      id: "cadre-general",
      title: "1. Cadre des habilitations B1, B2, BR et BC",
      intro:
        "Les habilitations B1, B2, BR et BC correspondent a des roles differents dans l'organisation du travail electrique en basse tension. Elles ne se superposent pas automatiquement et doivent etre attribuees en fonction des missions reelles.",
      content: [
        "Le B1 designe l'executant electricien basse tension. Il agit dans le cadre d'un travail prepare, sous la responsabilite d'un charge de travaux ou dans une organisation equivalente.",
        "Le B2 designe le charge de travaux. Il prepare, dirige et maitrise l'execution des travaux electriques confies a une equipe dans le respect des procedures de securite.",
        "Le BR concerne l'intervenant basse tension pour des interventions generales d'entretien, de depannage, de mesurage ou de remise en etat dans un cadre autorise.",
        "Le BC designe le charge de consignation. Il met en oeuvre ou fait mettre en oeuvre la separation, la condamnation, l'identification, la verification d'absence de tension et la mise a la terre ou en court-circuit lorsqu'elle est requise.",
        "La formation ne delivre jamais l'habilitation a elle seule. L'employeur doit verifier le poste, les risques, les operations reelles, les competences et l'aptitude pratique avant de formaliser le titre.",
      ],
      deepDive: [
        "Un meme salarie peut recevoir plusieurs symboles si ses missions l'exigent, mais chaque role conserve sa logique propre. Le danger apparait lorsque les frontieres entre execution, encadrement, intervention et consignation deviennent floues.",
        "La competence attendue n'est pas seulement technique. Elle repose aussi sur la maitrise du cadre documentaire, le respect des limites d'autorisation et la capacite a interrompre une operation mal preparee.",
      ],
      keyPoints: [
        "B1 = executant electricien.",
        "B2 = charge de travaux.",
        "BR = intervenant basse tension.",
        "BC = charge de consignation.",
      ],
      forbiddenPoints: [
        "Confondre un role d'execution avec un role de direction de travaux.",
        "Considerer qu'une experience terrain remplace le cadre d'habilitation.",
      ],
      legalRefs: [
        "Code du travail - organisation des operations electriques et habilitation des travailleurs.",
        "NF C 18-510 - definitions des symboles et roles associes en basse tension.",
        "INRS - prevention du risque electrique et articulation des fonctions.",
      ],
      practicalCase:
        "Exemple : un technicien de maintenance realise habituellement des depannages simples. S'il doit organiser un chantier electrique avec plusieurs intervenants, le role attendu n'est plus celui d'un BR seul.",
      visual: {
        title: "4 roles distincts",
        subtitle: "Executer, diriger, intervenir, consigner : chaque role a ses limites.",
        items: ["B1", "B2", "BR", "BC"],
        tone: "blue",
        imagePath: "/images/armoire-electrique.jpg",
        imageAlt: "Repere visuel d'un tableau electrique pour le parcours B1 B2 BR BC",
      },
    },
    {
      id: "roles-responsabilites",
      title: "2. Roles, responsabilites et chaine de decision",
      intro:
        "La securite depend de la clarte organisationnelle. Chaque acteur doit savoir ce qu'il decide, ce qu'il execute, ce qu'il controle et ce qu'il transmet.",
      content: [
        "L'employeur definit l'organisation, delivre les habilitations, fournit les moyens, les procedures et les protections, et s'assure de l'adequation entre mission et competence.",
        "Le charge de travaux B2 prepare le travail, verifie les conditions de securite, cadre l'equipe, delimite la zone de travail et stoppe l'operation si les conditions ne sont pas conformes.",
        "L'executant B1 applique les instructions, respecte les limites, utilise les protections prevues et signale toute derive ou tout doute.",
        "L'intervenant BR agit dans le cadre des interventions autorisees, avec une vigilance particuliere sur la limite entre intervention generale et travaux structures.",
        "Le charge de consignation BC formalise l'etat electrique de l'installation et garantit la fiabilite du processus de separation et de condamnation selon l'organisation retenue.",
      ],
      deepDive: [
        "De nombreux incidents surviennent lorsque le meme operateur bascule d'un role a l'autre sans clarification. Une consignation mal attribuee ou un depannage qui se transforme en travaux sont des glissements classiques.",
        "La maturite professionnelle consiste aussi a reformuler la mission et a exiger un cadre clair lorsque la situation technique ou organisationnelle ne correspond pas au titre d'habilitation.",
      ],
      keyPoints: [
        "Le B2 dirige, le B1 execute.",
        "Le BR intervient dans un cadre defini.",
        "Le BC garantit la consignation.",
      ],
      forbiddenPoints: [
        "Lancer un travail sans role clairement attribue.",
        "Laisser une intervention evoluer vers des travaux sans requalification.",
      ],
      legalRefs: [
        "NF C 18-510 - articulation des responsabilites avant, pendant et apres l'operation.",
        "Code du travail - adequation entre competence, poste et risque.",
      ],
      practicalCase:
        "Exemple : lors d'une intervention de remise en etat, une extension de cablage est finalement demandee. La mission doit etre requalifiee avant de poursuivre.",
      visual: {
        title: "Qui decide, qui agit ?",
        subtitle: "Une operation sure repose sur une chaine de responsabilite lisible.",
        items: ["Employer", "B2", "B1", "BR / BC"],
        tone: "slate",
      },
    },
    {
      id: "symboles-attributions",
      title: "3. Symboles, voisinage et attributs",
      intro:
        "Les symboles d'habilitation se lisent avec precision. Chaque caractere et chaque attribut ont une consequence operationnelle.",
      content: [
        "La lettre B renvoie a la basse tension. Les chiffres et lettres complementaires preciseront la nature de l'operation : executant, charge de travaux, intervention, consignation, voisinage ou specificites du poste.",
        "La lettre V introduit la notion de voisinage. Elle ne banalise pas le risque, mais signale au contraire une situation plus exposee exigeant une organisation et des protections adaptees.",
        "Un symbole ne s'interprete jamais au-dela de sa definition. Une habilitation ne donne pas automatiquement le droit de mesurer, d'intervenir, de depanner, de diriger ou de consigner si ces fonctions ne sont pas explicitement couvertes.",
      ],
      deepDive: [
        "Le symbolisme n'est pas administratif : il structure la securite du travail. Une mauvaise lecture des attributs conduit a de fausses autorisations et a des prises de risque inutiles.",
        "Le voisinage doit etre integre des la preparation. Il conditionne les protections collectives, la delimitation de la zone et les comportements attendus de l'equipe.",
      ],
      keyPoints: [
        "Le symbole fixe le perimetre reel.",
        "Le voisinage renforce les exigences de securite.",
        "Un attribut n'est jamais decoratif.",
      ],
      legalRefs: [
        "NF C 18-510 - symboles, attributs et execution des operations.",
      ],
      practicalCase:
        "Exemple : un B1V n'agit pas comme un BR. L'attribut V ne cree pas un droit d'intervention generale, il encadre seulement une situation de voisinage.",
      visual: {
        title: "Lire correctement un symbole",
        subtitle: "Chaque caractere a une consequence operationnelle.",
        items: ["B1", "B2", "BR", "BC", "V"],
        tone: "green",
      },
    },
    {
      id: "preparation-travaux",
      title: "4. Preparation des travaux electriques",
      intro:
        "La preparation d'une operation electrique est une phase critique. Elle conditionne la securite de l'execution bien avant le premier geste technique.",
      content: [
        "La preparation comprend la lecture du besoin, l'identification du materiel, l'analyse de l'environnement, la verification documentaire, la designation des roles et la verification des moyens de prevention.",
        "Le charge de travaux doit clarifier la zone d'intervention, les risques de voisinage, les energies presentes, les interfaces avec les autres corps d'etat et les conditions d'arret.",
        "Une intervention ou un travail ne commence jamais sur une installation mal identifiee, degradee, non accessible dans de bonnes conditions ou depourvue de cadre documentaire suffisant.",
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
      visual: {
        title: "Avant d'agir",
        subtitle: "La securite se construit des la preparation.",
        items: ["Identifier", "Verifier", "Delimter", "Autoriser"],
        tone: "amber",
      },
    },
    {
      id: "consignation",
      title: "5. Consignation et verification d'absence de tension",
      intro:
        "La consignation est un processus de securite, pas une simple formalite. Elle doit etre rigoureuse, verifiable et comprise par tous les acteurs.",
      content: [
        "La consignation repose sur une succession d'etapes : separation, condamnation, identification, verification d'absence de tension puis, si necessaire selon le domaine et l'organisation, mise a la terre et en court-circuit.",
        "Le charge de consignation BC garantit la fiabilite du processus. Il doit s'assurer que le circuit concerne est bien celui qui est separe, identifie et rendu indisponible a toute remise sous tension intempestive.",
        "La verification d'absence de tension n'est jamais presumee. Elle doit etre faite avec un materiel adapte, selon une methode connue et sur le bon point de l'installation.",
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
      practicalCase:
        "Exemple : avant remplacement d'un appareillage, l'equipe constate plusieurs departs similaires dans l'armoire. Le BC doit verrouiller l'identification avant toute consignation effective.",
      visual: {
        title: "La chaine de consignation",
        subtitle: "Separer, condamner, identifier, verifier.",
        items: ["Separation", "Condamnation", "Identification", "VAT"],
        tone: "red",
      },
    },
    {
      id: "travaux-b1-b2",
      title: "6. Travaux avec B1 et B2",
      intro:
        "Les travaux electriques structures ne se conduisent pas comme une intervention ponctuelle. Ils supposent un cadre d'execution, une equipe et un pilotage securite adaptes.",
      content: [
        "Le B1 execute les operations confiees dans le respect strict des consignes, des limites de la zone de travail et des protections en place.",
        "Le B2 organise, dirige et surveille les travaux. Il veille a l'information de l'equipe, au respect des roles, a la coherence des gestes et au maintien des conditions de securite.",
        "Pendant les travaux, toute evolution non prevue, tout doute technique, toute anomalie ou tout ecart de procedure impose un arret ou une requalification de l'operation.",
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
      },
    },
    {
      id: "interventions-br",
      title: "7. Interventions generales avec BR",
      intro:
        "Le BR intervient en basse tension dans un cadre defini qui peut couvrir l'entretien, le depannage, les essais limites ou certaines remises en etat. Ce cadre ne doit jamais etre banalise.",
      content: [
        "L'intervention BR suppose une bonne identification de l'installation, une lecture claire du besoin et la maitrise de la limite entre intervention generale, travaux et depannage complexe.",
        "L'intervenant doit savoir quand une situation sort du cadre BR : multiplicite des circuits, voisinage non maitrise, besoin de travaux de structure, modification de schema ou absence de procedure.",
        "Le depannage ne doit jamais devenir une exploration hasardeuse. Il doit rester methodique, documente et proportionne a l'autorisation reelle de l'operateur.",
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
      visual: {
        title: "BR : intervenir sans improviser",
        subtitle: "Diagnostiquer, agir dans son cadre, stop si la situation se complique.",
        items: ["Identifier", "Diagnostiquer", "Intervenir", "Requalifier si besoin"],
        tone: "green",
      },
    },
    {
      id: "outils-protections",
      title: "8. Outils, EPI, EPC et environnement de travail",
      intro:
        "La maitrise du risque electrique repose aussi sur le choix des moyens de travail, l'etat des outils et l'usage correct des protections collectives et individuelles.",
      content: [
        "Les EPI et EPC ne remplacent jamais la preparation ni le respect du role, mais ils reduisent le risque dans le cadre d'une operation autorisee et correctement organisee.",
        "L'operateur doit verifier l'etat apparent de ses outils, de ses appareils de mesure, de ses moyens de condamnation et de ses protections avant de commencer.",
        "L'environnement de travail doit etre compatible avec l'operation : acces suffisant, absence d'encombrement dangereux, eclairage correct, pas d'humidite anormale ni de deterioration visible non traitee.",
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
      visual: {
        title: "Preparer ses moyens",
        subtitle: "La securite passe aussi par le materiel et l'environnement.",
        items: ["Outils adaptes", "EPI / EPC", "Mesures fiables", "Zone conforme"],
        tone: "slate",
      },
    },
    {
      id: "anomalies-urgence",
      title: "9. Anomalies, ecarts et situations d'urgence",
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
      visual: {
        title: "Savoir interrompre",
        subtitle: "Le bon reflexe est parfois d'arreter immediatement.",
        items: ["Stop", "Securiser", "Alerter", "Verifier avant reprise"],
        tone: "red",
      },
    },
    {
      id: "synthese",
      title: "10. Synthese operationnelle",
      intro:
        "La maitrise des habilitations B1, B2, BR et BC repose sur la clarte des roles, la preparation methodique et la rigueur face au risque electrique.",
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
      visual: {
        title: "Les 4 reflexes a retenir",
        subtitle: "Identifier, preparer, respecter son role, arreter si doute.",
        items: ["Identifier", "Preparer", "Respecter son role", "Arreter si doute"],
        tone: "blue",
      },
    },
    {
      id: "documents-coordination",
      title: "11. Documents, autorisations et coordination de chantier",
      intro:
        "Les habilitations B1, B2, BR et BC prennent toute leur valeur dans une organisation documentee. Le travail electrique se securise aussi par les autorisations, plans, permis et consignes de chantier.",
      content: [
        "Les dossiers techniques, reperages, schemas, plans de prevention, permis ou autorisations d'acces permettent de confirmer le perimetre reel d'une operation electrique.",
        "Le charge de travaux, l'intervenant BR ou le charge de consignation doivent savoir quels documents verifier avant d'agir, lesquels mettre a jour et quels interlocuteurs alerter si une incoherence apparait.",
        "Sur un chantier ou dans un site en exploitation, la coordination avec les autres entreprises, l'encadrement local et les exploitants techniques est un point de securite a part entiere.",
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
      },
    },
  ],
};
