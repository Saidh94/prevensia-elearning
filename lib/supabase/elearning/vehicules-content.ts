import type { ModuleContent } from "./module-types";

export const vehiculesModuleContent: ModuleContent = {
  title:
    "Habilitation électrique — Véhicules et engins à énergie embarquée (NF C 18-550)",
  shortTitle: "Habilitation Véhicules",
  subtitle:
    "Parcours e-learning destiné aux techniciens et mécaniciens amenés à intervenir sur des véhicules ou engins équipés d'une source d'énergie électrique embarquée : voitures électriques/hybrides, chariots élévateurs, PEMP, engins de travaux publics.",
  duration: "1 h 30 à 2 h",
  level: "Intermédiaire",
  objective:
    "Comprendre le cadre réglementaire et normatif spécifique (NF C 18-550), identifier les symboles d'habilitation propres aux véhicules (lettre L), choisir le symbole adapté à l'opération et à la batterie, appliquer la démarche d'habilitation, connaître les règles de sécurité liées aux batteries et aux énergies embarquées.",
  audience:
    "Techniciens et mécaniciens automobile, électromécaniciens, agents de maintenance de chariots élévateurs ou PEMP, techniciens de contrôle technique, personnel de dépannage-remorquage, toute personne amenée à réaliser des opérations sur un véhicule ou engin à énergie électrique embarquée.",
  certificationNote:
    "Ce parcours constitue la partie théorique de la formation. La délivrance du titre d'habilitation reste du ressort de l'employeur, après avis favorable du formateur à l'issue de la formation théorique et pratique (NF C 18-550 §5 et annexe C).",
  heroBadge: "Habilitation électrique",
  finalMessage:
    "La maîtrise du risque électrique sur les véhicules et engins passe par une démarche rigoureuse : analyser l'activité, choisir le bon symbole, suivre la formation adaptée, obtenir le titre et recycler à échéance. Le quiz valide la partie théorique.",
  quizCtaLabel: "Passer au quiz Véhicules/Engins",

  sections: [
    {
      id: "contexte",
      title: "1. Contexte et champ d'application (NF C 18-550)",
      intro:
        "L'équipement électrique des véhicules et engins embarque de plus en plus d'énergie. Depuis le 1er juillet 2011, l'habilitation électrique est obligatoire pour les opérations sur ces installations.",
      content: [
        "La norme NF C 18-550 régit spécifiquement les opérations sur les véhicules et engins à énergie électrique embarquée. Elle est distincte de la NF C 18-510 qui s'applique aux installations électriques fixes.",
        "Un véhicule est un ensemble manufacturé circulant sur route : voiture (électrique, hybride), bus, camion, autocar…",
        "Un engin est une machine non routière à énergie électrique embarquée : chariot élévateur, plateforme élévatrice mobile de personnes (PEMP), engins de travaux publics, chariots à mât rétractable…",
        "La traction électrique couvre désormais tout le spectre : chariots élévateurs (pionniers), puis engins de TP, puis l'automobile grand public, principalement pour des raisons environnementales.",
        "Les véhicules thermiques récents intègrent également des équipements électriques complexes (caméras, systèmes de navigation, hayons électriques, rampes d'accès) qui nécessitent eux aussi une habilitation.",
        "Depuis le 1er juillet 2011, tout travailleur réalisant des opérations sur ou au voisinage de ces installations doit être habilité, conformément à l'article R4544-9 du Code du travail.",
      ],
      deepDive: [
        "La NF C 18-550 est le référentiel de formation et d'habilitation pour les véhicules et engins. Elle complète la NF C 18-510 sans la remplacer : un technicien automobile utilise la 18-550 ; un électricien intervenant sur une installation fixe utilise la 18-510.",
        "Les secteurs concernés sont nombreux : automobile, transports en commun, logistique, manutention, travaux publics, agriculture, contrôle technique, dépannage-remorquage, déconstruction.",
        "Les dispositions constructives imposent désormais des indices de protection a minima IP2X sur les bornes de batteries et la connectique des chargeurs des véhicules récents. Des véhicules anciens peuvent encore avoir des bornes non protégées.",
      ],
      keyPoints: [
        "NF C 18-550 = norme spécifique véhicules et engins (≠ NF C 18-510 pour installations fixes).",
        "Obligatoire depuis le 1er juillet 2011 pour toute opération sur ces installations.",
        "Véhicule = circulant sur route ; Engin = machine non routière à énergie embarquée.",
        "Champ couvert : thermique, électrique, hybride dès lors qu'une source électrique embarquée est présente.",
      ],
      legalRefs: [
        "NF C 18-550 — Habilitation électrique véhicules et engins",
        "Art. R4544-9 Code du travail — Obligation d'habilitation",
        "NF C 18-510 — Habilitation électrique installations fixes (norme générale)",
      ],
      chapterImagePath: "/elearning/bsbe/bsbe-cadre.svg",
      chapterImageAlt: "Cadre réglementaire de l'habilitation électrique véhicules et engins — NF C 18-550",
    },
    {
      id: "symboles",
      title: "2. Symboles d'habilitation propres aux véhicules (lettre L)",
      intro:
        "La NF C 18-550 définit un système de symboles spécifiques. La lettre finale L identifie toutes les habilitations liées aux véhicules et engins.",
      content: [
        "La structure du symbole est : [domaine] [type d'opération] [lettre additionnelle] + L (lettre finale véhicule).",
        "Le domaine est toujours B (Basse Tension et Très Basse Tension), puisque les véhicules et engins opèrent dans ces domaines.",
        "La lettre finale L est obligatoire pour toutes les habilitations liées aux véhicules et engins à énergie embarquée.",
        "B0L — Opérations d'ordre non électrique sur véhicule/engin : nettoyage, manipulation, vérification externe sans contact avec pièces nues sous tension.",
        "B1L — Exécutant travaux d'ordre électrique hors tension sous la conduite d'un chargé de travaux.",
        "B2L — Chargé de travaux d'ordre électrique hors tension : prépare, dirige et surveille les travaux.",
        "B1TL / B2TL — Habilitations pour travaux sous tension sur véhicule/engin (exécutant / chargé de travaux).",
        "B1VL / B2VL — Habilitations pour travaux au voisinage d'installations sous tension.",
        "B1XL / B2XL Opération batterie — Habilitations spécifiques aux opérations sur batteries.",
        "BCL — Chargé de consignation sur véhicule/engin.",
        "BOL — Chargé d'exploitation électrique pour véhicule/engin.",
        "Pour les opérations particulières (contrôle technique, dépannage-remorquage, déconstruction, crash-test), des symboles spécifiques s'appliquent.",
      ],
      deepDive: [
        "Les symboles de niveau 2 (B2XL, B2TL) s'appliquent aux opérations réalisées de façon autonome par le chargé d'opération. Si l'opération est supervisée, l'exécutant peut être au niveau 1.",
        "La zone de voisinage renforcé commence à 30 cm de la pièce nue sous tension (PNST). La zone de voisinage simple commence à 3 m de la PNST, ou à 1 m de la périphérie du véhicule si balisage.",
        "Pour les experts automobile, contrôleurs techniques et spécialistes de déconstruction/crash-test, des habilitations spécifiques sur opérations particulières sont définies dans la NF C 18-550.",
      ],
      keyPoints: [
        "La lettre L est obligatoire pour toute habilitation sur véhicule ou engin.",
        "B0L = non électrique, B1L/B2L = électrique hors tension, B1XL/B2XL = batteries.",
        "Niveau 1 = exécutant sous direction ; Niveau 2 = chargé d'opération autonome.",
        "Les zones de voisinage sont identiques à la NF C 18-510 : 30 cm (renforcé) et 3 m (simple).",
      ],
      visual: {
        title: "Niveaux d'habilitation NF C 18-550",
        subtitle: "Du B0L (non électrique) au B2TL (sous tension) — la lettre L identifie toujours un symbole véhicule.",
        items: [
          "B0L — Opérations non électriques sur véhicule/engin",
          "B1L — Exécutant travaux hors tension (sous surveillance)",
          "B2L — Chargé de travaux hors tension (autonome)",
          "B2TL — Chargé de travaux sous tension (formation spécifique)",
        ],
        tone: "blue",
        animationKey: "niveaux-vehicules" as const,
      },
      legalRefs: [
        "NF C 18-550 §2.3 — Symboles d'habilitation",
        "NF C 18-550 §2.4 — Choix du symbole adapté à l'opération",
      ],
      chapterImagePath: "/elearning/h0b0/symboles-habilitation.png",
      chapterImageAlt: "Symboles d'habilitation électrique véhicules — lettre L (B0L, B1L, B2L, BCL…)",
    },
    {
      id: "batteries",
      title: "3. Opérations sur batteries — Critères de choix du symbole",
      intro:
        "Le choix du symbole d'habilitation pour les opérations sur batteries dépend de trois paramètres clés : l'indice de protection des bornes, la tension et la capacité de la batterie.",
      content: [
        "Paramètre 1 — Indice de protection (IP) des bornes : les dispositions constructives des véhicules récents imposent un minimum IP2X sur les bornes de batteries et la connectique des chargeurs. Un indice IP2X signifie que les parties conductrices sous tension ne sont pas accessibles au doigt ou à tout objet de plus de 12 mm.",
        "Paramètre 2 — Tension U (en volts) de la batterie : elle détermine le domaine de tension (TBT, BT) et influence directement le niveau d'habilitation requis.",
        "Paramètre 3 — Capacité C (en ampères-heure, Ah) de la batterie : elle conditionne l'énergie stockée et le risque en cas de court-circuit ou d'arc électrique.",
        "Si les bornes de la batterie sont protégées (IP2X minimum) et que l'environnement électrique n'expose pas l'opérateur à un contact avec des pièces nues sous tension, l'opérateur doit être formé mais l'habilitation n'est pas obligatoire.",
        "Si les bornes ne sont pas protégées, ou si l'environnement expose à un contact potentiel avec des pièces nues sous tension, le symbole d'habilitation dépend de la tension et de la capacité de la batterie.",
        "Attention aux batteries en série ou en parallèle : la tension totale ou la capacité totale peut dépasser les valeurs de chaque élément pris séparément.",
        "Les opérations d'ordre non électrique sur les batteries (manipulation, vérification du niveau d'électrolyte, nettoyage du corps) ne requièrent pas d'habilitation si les bornes sont protégées à IP2X minimum.",
        "Les symboles préconisés pour les opérations sur batteries sont de niveau 2 (B2XL) pour les chargés d'opération autonomes, et de niveau 1 (B1XL) pour les exécutants travaillant sous surveillance.",
        "Véhicule hybride endommagé ou accidenté : même si le moteur est éteint et la clé retirée, la batterie haute tension reste potentiellement sous tension (tension résiduelle). Certains systèmes maintiendront une tension résiduelle plusieurs heures après l'accident. Ne jamais intervenir sur un hybride ou un véhicule électrique accidenté sans avoir confirmé la mise hors tension par le système de sécurité embarqué ou par une procédure constructeur validée. En cas de doute, traiter le véhicule comme étant sous tension.",
      ],
      deepDive: [
        "L'IP2X est un seuil minimal : le premier chiffre (2) indique la protection contre les corps solides de plus de 12 mm (y compris un doigt). Le X signifie que la protection contre l'eau n'est pas évaluée.",
        "Pour calculer la tension d'un bloc de batteries en série : additionner les tensions de chaque élément. Pour des batteries en parallèle, la tension reste identique mais la capacité s'additionne.",
        "Une batterie de traction (véhicule électrique) peut atteindre 400 V ou plus (domaine BT), voire 800 V pour certains véhicules récents — ce qui nécessite une vigilance particulière sur le symbole choisi.",
      ],
      keyPoints: [
        "IP2X minimum requis sur les bornes des véhicules récents.",
        "Sans IP2X sur les bornes : habilitation obligatoire selon tension + capacité.",
        "B2XL = chargé d'opération autonome sur batterie ; B1XL = exécutant sous direction.",
        "Vérifier si les batteries sont en série (tension × n) ou en parallèle (capacité × n).",
      ],
      legalRefs: [
        "NF C 18-550 §2.4.2 — Opérations sur batteries",
        "NF EN 60529 — Degrés de protection procurés par les enveloppes (code IP)",
      ],
      chapterImagePath: "/elearning/bsbe/bsbe-ip.svg",
      chapterImageAlt: "Indice de protection IP2X des bornes de batteries — critères de choix du symbole d'habilitation véhicule",
    },
    {
      id: "demarche",
      title: "4. Démarche d'habilitation — Les 7 étapes",
      intro:
        "L'employeur suit une démarche structurée en 7 étapes avant de délivrer une habilitation, identique à celle de la NF C 18-510 mais adaptée aux véhicules.",
      content: [
        "Étape 1 — Analyse de l'activité : répertorier le type d'opération (électrique ou non), la fonction du travailleur (exécutant, chargé de…), la nature des opérations (travaux, consignation, essais), les caractéristiques des véhicules et engins (thermique, hybride, électrique, tension batterie, IP).",
        "Étape 2 — Adéquation des compétences : vérifier les connaissances existantes du travailleur en électricité et en sécurité.",
        "Étape 3 — Adéquation ? : l'employeur détermine si les compétences actuelles sont suffisantes ou si une formation est nécessaire.",
        "Étape 4 — Formation préalable à l'habilitation : partie théorique + partie pratique, obligatoires. L'objectif est de faire acquérir une aptitude professionnelle en prévention du risque électrique.",
        "Étape 5 — Avis du formateur : à l'issue de la formation, le formateur rédige un « avis après formation » et le remet à l'employeur et à l'apprenant. En cas d'avis défavorable, l'employeur peut décider d'une formation complémentaire.",
        "Étape 6 — Habilitation : l'employeur délivre le titre d'habilitation. Il remet au travailleur le titre, le carnet de prescriptions (basé sur la NF C 18-550) et les EPI adaptés.",
        "Étape 7 — Remise en cause ? : l'employeur s'assure en permanence que l'habilitation reste adaptée à l'activité réelle du travailleur. En cas de doute, il peut la retirer ou demander une nouvelle formation.",
      ],
      keyPoints: [
        "7 étapes de la démarche : Analyser → Compétences → Adéquation ? → Former → Avis formateur → Habiliter → Suivre.",
        "L'habilitation est délivrée par l'employeur, pas par le formateur.",
        "Le formateur ne délivre qu'un avis après formation — favorable ou défavorable.",
        "Le titre d'habilitation + carnet de prescriptions + EPI sont remis ensemble au travailleur.",
      ],
      legalRefs: [
        "NF C 18-550 chapitre 3 — Démarche d'habilitation",
        "Art. R4544-9 et R4544-10 Code du travail",
      ],
      chapterImagePath: "/elearning/b1-b1v-b2-b2v-br-bc/b1b2-chaine.svg",
      chapterImageAlt: "Démarche d'habilitation électrique en 7 étapes — véhicules et engins NF C 18-550",
    },
    {
      id: "formation",
      title: "5. Formation et recyclage",
      intro:
        "La formation préalable est structurée en modules. Le recyclage est obligatoire pour maintenir les compétences, avec une périodicité recommandée de 3 ans.",
      content: [
        "Le contenu de la formation dépend du symbole d'habilitation visé et du type de formation (initiale ou recyclage).",
        "Module prérequis — Objectifs : différencier courant alternatif et continu, intensité, tension, puissance, capacité ; réaliser une mesure électrique (multimètre) ; lister les principaux effets du courant sur le corps ; comprendre l'architecture électrique d'un véhicule/engin et localiser les sources d'énergie.",
        "Module travaux hors tension — Objectifs : caractériser les travaux et leurs limites ; organiser, délimiter et signaler la zone de travail ; respecter les instructions et rendre compte.",
        "Module opérations sur batteries — Objectifs : identifier et localiser les énergies ; énoncer les fonctions des matériels électriques (dispositif de séparation, VAT) ; analyser les risques pour un véhicule endommagé, accidenté ou immergé.",
        "La formation doit comprendre une partie théorique et une partie pratique. La durée de la partie pratique est définie par le formateur en accord avec l'employeur.",
        "Recyclage — Périodicité recommandée : 3 ans. Pour une pratique occasionnelle ou exceptionnelle, elle peut être ramenée à 2 ans.",
        "Le recyclage comprend : analyse des accidents et presque-accidents, révision des effets du courant, des symboles, des limites de l'habilitation et de l'évaluation du risque électrique.",
        "Les formateurs doivent posséder : une connaissance de base en prévention, une compétence technique, une compétence pédagogique adaptée aux adultes (titre professionnel de formateur ou minimum 200 h de face-à-face pédagogique sur 2 ans) et un titre d'habilitation en adéquation avec la formation dispensée.",
      ],
      deepDive: [
        "Le cahier des charges de la formation, formalisé entre l'employeur et le formateur, doit préciser le profil du candidat (compétence en électricité, habilitation existante), les tâches à réaliser, la nature des interventions et les caractéristiques des véhicules.",
        "L'évaluation finale comprend une épreuve théorique et une épreuve pratique. Le formateur évalue sur chantier ou en atelier représentatif des conditions réelles de travail.",
        "Le suivi de l'habilitation est continu : avant chaque opération, l'employeur s'assure de l'adéquation entre le symbole et la tâche. Après un accident, une maladie prolongée ou un changement de poste, l'habilitation peut être remise en cause.",
      ],
      keyPoints: [
        "Recyclage recommandé tous les 3 ans (2 ans si pratique occasionnelle).",
        "Formation = théorie + pratique obligatoires (pas uniquement théorique).",
        "Le formateur doit être lui-même habilité en adéquation avec la formation dispensée.",
        "L'évaluation par le formateur conditionne l'avis remis à l'employeur.",
      ],
      legalRefs: [
        "NF C 18-550 §5 et Annexe C — Formation et recyclage",
        "NF C 18-550 §6 — Suivi et recyclage de l'habilitation",
        "Art. R4544-10 Code du travail — Carnet de prescriptions",
      ],
      chapterImagePath: "/elearning/bsbe/bsbe-bases.svg",
      chapterImageAlt: "Formation et recyclage — habilitation électrique véhicules NF C 18-550",
    },
    {
      id: "acteurs",
      title: "6. Qui habilite et cas particuliers",
      intro:
        "L'habilitation suit des règles claires sur la responsabilité de l'employeur, même dans les situations particulières : intérim, entreprises extérieures, travailleurs indépendants.",
      content: [
        "Cas général : l'employeur habilite son propre personnel. Il doit s'assurer que le travailleur a les compétences et aptitudes nécessaires avant de lui confier des tâches.",
        "Travailleurs intérimaires : l'entreprise utilisatrice (EU) vérifie les connaissances du travailleur intérimaire, assure l'accueil et la formation d'adaptation au poste. L'EU s'assure que l'intérimaire possède un carnet de prescriptions basé sur la NF C 18-550. L'habilitation est délivrée par l'EU uniquement pour la durée de la mission.",
        "Entreprises extérieures : elles ont la responsabilité de l'habilitation de leur propre personnel. L'entreprise utilisatrice coordonne les mesures de prévention (Art. R4511-5 Code du travail).",
        "Travailleurs indépendants : ils s'auto-habilitent en respectant les mêmes critères que les salariés.",
        "Aptitude médicale : un suivi individuel renforcé est obligatoire pour les travailleurs habilités (Art. R4544-10 et R4624-22 à R4624-28 Code du travail). Un examen médical d'aptitude est réalisé par le médecin du travail.",
      ],
      keyPoints: [
        "L'habilitation est toujours délivrée par l'employeur (ou l'EU pour les intérimaires).",
        "En intérim : l'EU habilite pour la durée de la mission uniquement.",
        "Entreprises extérieures : chacune habilite son propre personnel.",
        "Suivi médical renforcé obligatoire pour tous les travailleurs habilités.",
      ],
      legalRefs: [
        "NF C 18-550 §4 — Qui habilite et qui est habilité",
        "Art. R4511-5 Code du travail — Coordination entre entreprises",
        "Art. R4624-22 à R4624-28 Code du travail — Suivi médical renforcé",
      ],
      chapterImagePath: "/elearning/commun/roles-responsabilites.png",
      chapterImageAlt: "Acteurs de l'habilitation — employeur, formateur, travailleurs intérimaires et entreprises extérieures",
    },
    {
      id: "synthese",
      title: "7. Synthèse — Points clés et bons réflexes",
      intro:
        "Avant de passer au quiz, voici les points essentiels à retenir pour maîtriser le cadre de l'habilitation électrique sur véhicules et engins.",
      content: [
        "La NF C 18-550 est le référentiel unique pour les véhicules et engins à énergie embarquée — elle ne se substitue pas à la NF C 18-510 qui reste applicable pour les installations fixes.",
        "La lettre L dans le symbole d'habilitation identifie systématiquement une habilitation liée aux véhicules ou engins.",
        "L'IP2X est le seuil de protection minimal requis sur les bornes de batteries des véhicules récents. En l'absence d'IP2X, l'habilitation devient obligatoire selon la tension et la capacité.",
        "Le recyclage est recommandé tous les 3 ans (2 ans si pratique occasionnelle).",
        "C'est toujours l'employeur qui délivre l'habilitation, après avis favorable du formateur.",
        "Les zones de voisinage : 30 cm (voisinage renforcé) et 3 m (voisinage simple) de la pièce nue sous tension, comme pour les installations fixes.",
      ],
      keyPoints: [
        "Référentiel : NF C 18-550 (véhicules) ≠ NF C 18-510 (installations fixes).",
        "Lettre L obligatoire dans tout symbole véhicule.",
        "IP2X = borne protégée ≥ au doigt (12 mm).",
        "Recyclage : 3 ans standard, 2 ans si pratique occasionnelle.",
        "L'habilitation est délivrée par l'employeur après avis formateur.",
      ],
      legalRefs: [
        "NF C 18-550 — Habilitation électrique véhicules et engins (INRS ED 6313)",
        "Art. R4544-9 et R4544-10 Code du travail",
      ],
      chapterImagePath: "/elearning/bsbe/bsbe-synthese.svg",
      chapterImageAlt: "Synthèse — points clés de l'habilitation électrique véhicules et engins",
    },
  ],
};
