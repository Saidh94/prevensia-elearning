import { ModuleContent } from "./module-types";

export const coordinateurSsiModuleContent: ModuleContent = {
  title: "Coordinateur SSI — Pilotage du Système de Sécurité Incendie",
  shortTitle: "Coordinateur SSI",
  subtitle:
    "Parcours e-learning de préparation destiné aux responsables techniques, responsables sécurité et gestionnaires amenés à piloter un Système de Sécurité Incendie dans un ERP, IGH, site industriel ou logistique. Complété par 7 jours de présentiel intensif sur dossiers réels.",
  duration: "3 h 30 à 5 h de théorie guidée (module e-learning)",
  deliveryFormat: "E-learning guidé + quiz + 7 jours de présentiel intensif",
  level: "Avancé",
  objective:
    "Maîtriser le rôle du Coordinateur SSI selon NF S 61-931 : rédiger le CCF et la matrice de corrélation, comprendre l'architecture SSI, appliquer la réglementation ERP/IGH, coordonner les installateurs, constituer le Dossier d'Identité SSI et gérer les situations dégradées.",
  audience:
    "Responsables techniques, responsables sécurité, chefs de service maintenance, directeurs techniques et gestionnaires de patrimoine ayant la charge de la supervision globale du SSI d'un ou plusieurs établissements.",
  certificationNote:
    "Ce parcours e-learning constitue la phase préparatoire du parcours Coordinateur SSI. La formation complète inclut 7 jours de présentiel intensif sur dossiers réels (CCF, matrice de corrélation, essais, DIS, exploitation). L'attestation de formation est délivrée par PREVENSIA FORMATION à l'issue de la session présentielle et de l'évaluation finale.",
  heroBadge: "Coordinateur SSI",
  finalMessage:
    "À l'issue du parcours Coordinateur SSI, le stagiaire doit retenir que la sécurité incendie repose sur une chaîne organisée : le CSSI est le chef d'orchestre qui rédige le CCF, construit la matrice de corrélation, coordonne les installateurs, constitue le Dossier d'Identité SSI et veille à la cohérence du système tout au long de sa vie — de la conception à l'exploitation.",
  quizCtaLabel: "Passer au quiz Coordinateur SSI",
  sections: [
    {
      id: "role-responsabilites",
      title: "1. Rôle et responsabilités du Coordinateur SSI",
      estimatedMinutes: 35,
      chapterImagePath: "/elearning/coordinateur-ssi/coord-ssi-role.svg",
      intro:
        "Le rôle de Coordinateur SSI est défini par la norme NF S 61-931 (§5.3 — Coordination SSI, février 2014), rendue obligatoire par l'arrêté du 25 juin 1980 (articles MS 53 à MS 60) pour les ERP et par l'arrêté du 30 décembre 2011 pour les IGH. La norme impose qu'une mission de coordination SSI préside à l'analyse des besoins, à la conception, à la réalisation et aux modifications du SSI. Il n'existe pas de certification d'État obligatoire, mais les compétences requises sont précisément encadrées par NF S 61-931 et attendues par les commissions de sécurité, bureaux de contrôle et assureurs. Le Coordinateur SSI est le pivot entre l'exploitant, les mainteneurs et les autorités.",
      content: [
        "Le Coordinateur SSI est la personne désignée par l'exploitant pour assurer la supervision globale du Système de Sécurité Incendie. Il n'est pas l'agent de sécurité incendie (SSIAP) ni le technicien de maintenance : il est le pilote organisationnel et documentaire du dispositif.",
        "Sa première responsabilité est la disponibilité permanente du SSI. Un système indisponible — même partiellement, pour travaux ou défaut — constitue un risque réglementaire et un risque pour la sécurité des personnes. Le Coordinateur SSI doit s'assurer que chaque indisponibilité est tracée, compensée par des mesures alternatives et levée dans les délais prévus.",
        "Sa deuxième responsabilité est la conformité documentaire. Le registre de sécurité, le carnet de bord SSI, les rapports de vérification périodique, les comptes rendus d'intervention et les plans à jour doivent être tenus, accessibles et présentés lors des visites de la commission de sécurité ou du SDIS.",
        "Sa troisième responsabilité est la coordination des intervenants. Chaque entreprise qui intervient sur le SSI — maintenance, travaux, vérification, mise à jour — doit être coordonnée selon des procédures claires : plan de prévention, protocole de remise en service, validation des travaux terminés.",
        "Enfin, le Coordinateur SSI est l'interlocuteur technique des autorités : bureau de contrôle, commission de sécurité, SDIS. Il doit être capable de présenter l'état du système, d'expliquer les non-conformités et d'indiquer le calendrier de levée des réserves.",
        "Sur le plan juridique, le défaut d'organisation de la sécurité incendie — et en particulier l'absence de suivi du SSI — peut engager la responsabilité civile et pénale de l'exploitant. Désigner et former un Coordinateur SSI est donc autant une bonne pratique qu'une mesure de protection.",
      ],
      deepDive: [
        "La norme NF S 61-931 (§5.3 Coordination SSI) impose qu'une mission de coordination soit présente en phase conception, réalisation ET lors de toute modification ou extension du SSI. Le §5.3.2 détaille les tâches par phase : conception du CCF SSI et de la matrice de corrélation (§5.3.2.1), suivi de cohérence et mise à jour du Dossier d'Identité SSI en réalisation (§5.3.2.2), rapport de réception technique et finalisation du DIS en réception (§5.3.2.3). La NF S 61-933 (Règles d'exploitation et maintenance, septembre 2011) complète ce dispositif en fixant les opérations de maintenance et le rôle de l'exploitant.",
        "En pratique, les commissions de sécurité demandent systématiquement à connaître le référent SSI de l'établissement. L'absence de référent identifié ou de traçabilité des interventions est une réserve récurrente lors des visites périodiques.",
      ],
      keyPoints: [
        "Le Coordinateur SSI est le pilote organisationnel du SSI — pas l'agent de sécurité ni le technicien.",
        "Sa mission est définie par NF S 61-931 §5.3 en trois phases : conception, réalisation, réception.",
        "Sa triple responsabilité opérationnelle : disponibilité du système, conformité documentaire, coordination des intervenants.",
        "Il est l'interlocuteur des autorités (commission de sécurité, SDIS, bureau de contrôle).",
        "Sa désignation formelle et ses compétences sont exigées par NF S 61-931 et attendues par les autorités.",
      ],
      forbiddenPoints: [
        "Confondre le rôle de Coordinateur SSI avec celui de l'agent SSIAP ou du technicien de maintenance.",
        "Croire qu'un système certifié conforme à l'installation peut se gérer sans référent identifié.",
        "Négliger la traçabilité documentaire — c'est souvent elle qui fait l'objet des réserves.",
      ],
      legalRefs: [
        "NF S 61-931 §5.3 (février 2014) — Coordination SSI : définition des missions par phase (conception §5.3.2.1, réalisation §5.3.2.2, réception §5.3.2.3). Norme fondamentale, rendue obligatoire par l'arrêté du 25 juin 1980 (MS 53 à MS 60).",
        "NF S 61-932 §4.1 (décembre 2024) — Coordination dans les règles d'installation du SMSI.",
        "NF S 61-933 (septembre 2011) — Règles d'exploitation et maintenance des SSI : rôle de l'exploitant, opérations de maintenance, carnet de bord.",
        "Arrêté du 25 juin 1980 (ERP) — MS 53 à MS 60 : exigences SSI, coordinateur SSI obligatoire lors de toute création, modification ou extension.",
        "Arrêté du 30 décembre 2011 (IGH) — Coordinateur SSI obligatoire pour tout projet SSI en immeuble de grande hauteur.",
        "Code du travail — articles R.4227-28 et suivants : organisation de la sécurité incendie en entreprise.",
        "CCH, articles R.123-1 à R.123-51 — renvoi au règlement de sécurité ERP, obligation de conformité SSI.",
      ],
      practicalCase:
        "Un bureau de contrôle effectue une visite annuelle. Il demande le registre de sécurité, le dernier rapport de vérification du SSI, et la liste des interventions réalisées sur le système dans l'année. Aucun document n'est disponible. Le Coordinateur SSI absent n'a pas assuré la traçabilité. Résultat : réserve majeure et mise en demeure de régulariser avant la prochaine visite de la commission de sécurité.",
      scenarios: [
        {
          situation: "Vous êtes Coordinateur SSI d'un ERP de catégorie 1. Une entreprise de travaux vous informe qu'elle doit intervenir pendant 3 jours dans un local protégé par des détecteurs automatiques d'incendie, ce qui va nécessiter la mise hors service partielle du SDI sur une zone.",
          question: "Quelles sont vos obligations avant, pendant et après les travaux ?",
          wrongActions: [
            "Accepter verbalement et laisser l'entreprise intervenir sans autre formalité.",
            "Considérer que c'est la responsabilité de l'entreprise de travaux de gérer l'impact sur le SSI.",
          ],
          correctActions: [
            "Établir un plan de prévention avec l'entreprise avant le début des travaux.",
            "Définir et mettre en place des mesures compensatoires pendant la mise hors service partielle (rondes supplémentaires, surveillance humaine renforcée).",
            "Consigner la mise hors service dans le carnet de bord SSI avec dates, zones et raisons.",
            "Valider la remise en service de la zone après les travaux avec un essai fonctionnel.",
            "Archiver le compte rendu d'intervention de l'entreprise dans le registre de sécurité.",
          ],
          normRef: "NF S 61-933 § 5 — Opérations de maintenance et gestion des indisponibilités",
        },
      ],
    },
    {
      id: "architecture-ssi",
      title: "2. Architecture et fonctionnement des SSI",
      estimatedMinutes: 45,
      chapterImagePath: "/elearning/coordinateur-ssi/coord-ssi-architecture.svg",
      intro:
        "Pour coordonner un SSI, il faut comprendre comment il est structuré. La norme NF S 61-931 définit les catégories de SSI et les équipements qui les composent. Le Coordinateur SSI n'a pas besoin d'être technicien, mais doit maîtriser la logique fonctionnelle du système pour dialoguer efficacement avec les mainteneurs et identifier les dysfonctionnements.",
      content: [
        "Un SSI est composé de deux sous-systèmes principaux. Le Système de Détection Incendie (SDI) comprend les détecteurs automatiques (fumée, chaleur, flamme), les déclencheurs manuels (DM) et la centrale de détection (ECS — Équipement de Contrôle et de Signalisation). Le Système de Mise en Sécurité Incendie (SMSI) comprend le CMSI (Centralisateur de Mise en Sécurité Incendie), les Dispositifs Actionnés de Sécurité (DAS) et l'Unité de Gestion de l'Alarme (UGA).",
        "L'ECS collecte les informations des détecteurs et déclenche les alertes. Le CMSI commande les équipements de mise en sécurité : fermeture des portes coupe-feu, désenfumage, déverrouillage des issues de secours, mise à l'arrêt des équipements techniques. L'UGA gère les niveaux d'alarme (veille, alarme restreinte, alarme générale) et pilote la diffusion sonore (DVDA — Diffuseur Sonore d'Alarme).",
        "Les DAS (Dispositifs Actionnés de Sécurité, normalisés par NF S 61-937) sont les organes terminaux du SMSI : ventouses électromagnétiques, volets de désenfumage, clapets coupe-feu, portes à fermeture automatique. Chaque DAS participe directement et localement à la mise en sécurité des personnes. Leur bon fonctionnement est critique : un DAS défaillant peut compromettre le compartimentage ou le désenfumage d'une zone. Les DAS sont commandés via le CMSI (NF S 61-934 pour les règles de conception, NF S 61-932 §7 pour les liaisons de télécommande).",
        "Les catégories de SSI (A, B, C, D, E selon NF S 61-931) définissent le niveau d'automatisation et de supervision requis selon le type et la catégorie d'établissement. Un SSI de catégorie A est le plus élaboré : il inclut détection automatique sur l'ensemble du bâtiment, CMSI, UGA et télésignalisation. Les catégories B à E sont progressivement moins élaborées.",
        "Le Coordinateur SSI doit être capable de lire un schéma de principe du SSI, d'identifier les zones de détection (ZDA automatiques, ZDM manuelles), les zones de mise en sécurité, les DAS associés et de comprendre la logique d'asservissement entre le SDI et le SMSI. Il doit savoir interpréter les signaux du tableau de signalisation (feu, défaut, dérangement) et en comprendre les implications opérationnelles.",
        "La lecture des plans SSI — plan de détection, plan de désenfumage, plan de compartimentage — est une compétence clé du Coordinateur SSI. Ces documents doivent être à jour et correspondre à l'installation réelle. Toute modification du bâtiment ou du système sans mise à jour documentaire est une non-conformité.",
      ],
      deepDive: [
        "La norme NF S 61-931 classe les SSI en catégories A à E selon le niveau d'automatisation attendu. La catégorie est définie lors de la conception du bâtiment et dépend du type (ERP, IGH, ICPE) et de la catégorie de l'établissement. Le Coordinateur SSI doit connaître la catégorie de son système et ses implications en termes de maintenance et de vérification.",
        "Les plans SSI ont une valeur documentaire opposable. En cas d'incident ou d'audit, des plans non mis à jour constituent une preuve de défaut d'organisation.",
      ],
      keyPoints: [
        "SDI = détection + ECS. SMSI = CMSI + DAS + UGA.",
        "Les catégories A à E définissent le niveau d'automatisation et les obligations associées.",
        "Savoir lire un plan SSI et interpréter les signaux de la centrale est une compétence clé.",
        "Les DAS défaillants compromettent le compartimentage — c'est une réserve systématique lors des vérifications.",
      ],
      forbiddenPoints: [
        "Négliger la mise à jour des plans SSI après des travaux ou modifications.",
        "Ignorer un signal de dérangement en considérant qu'il est 'toujours là'.",
        "Confondre une alarme feu et un simple défaut technique — les procédures de réponse sont différentes.",
      ],
      legalRefs: [
        "NF S 61-931 (février 2014) — Dispositions générales SSI : définitions, catégories A à E (§3), niveaux d'accès 0 à IV (§4), schémas-blocs (annexe A normative).",
        "NF S 61-932 (décembre 2024 — version la plus récente) — Règles d'installation du SMSI : principes de base (§4), zones de mise en sécurité (§5), alimentation SMSI (§6), lignes DAS (§7), règles CMSI (§8).",
        "NF S 61-934 (mars 1991) — Centralisateurs de Mise en Sécurité Incendie (CMSI) : règles de conception et caractéristiques d'aptitude à la fonction.",
        "NF S 61-936 (mai 2013 + amendement A1 décembre 2024) — Équipements d'alarme pour l'évacuation (EA) : UGA, BAAS, diffuseurs sonores, ECSAV. L'amendement A1 (déc. 2024) modifie les exigences sur la diffusion de l'alarme vocale et la vérification d'associativité.",
        "NF S 61-937 (décembre 1990) — Dispositifs Actionnés de Sécurité (DAS) : conditions générales de fonctionnement et aptitude à la fonction des DAS (compartimentage, désenfumage, évacuation).",
        "NF S 61-940 (juin 2000) — Alimentations Électriques de Sécurité (AES) : règles de conception, groupes électrogènes (renvoi NF E 37-312), batteries d'accumulateurs.",
        "NF S 61-970 (février 2013) — Règles d'installation du SDI : détecteurs automatiques, déclencheurs manuels, liaisons, dossier d'identité. ATTENTION : cette norme concerne le SDI, pas le CMSI.",
        "NF E 37-312 (mai 2009) — Groupes électrogènes source de sécurité (GSS) : groupes électrogènes alimentant les installations de sécurité.",
      ],
      practicalCase:
        "Lors de votre ronde hebdomadaire, vous constatez que la centrale de détection affiche un dérangement permanent sur la zone 3 depuis plusieurs semaines. Le technicien de maintenance vous indique que 'c'est normal, il y a toujours ce défaut'. Comment réagissez-vous en tant que Coordinateur SSI ?",
      scenarios: [
        {
          situation: "Vous prenez votre poste de Coordinateur SSI dans un ERP de catégorie 2 nouvellement rénové. Le précédent gestionnaire vous remet des plans SSI datés de 2018. Des travaux importants ont eu lieu en 2022 avec ajout de zones de stockage et modification du désenfumage.",
          question: "Quelles sont vos premières actions ?",
          wrongActions: [
            "Utiliser les plans existants en supposant que les modifications ont été reportées.",
            "Attendre la prochaine vérification annuelle pour identifier les écarts.",
          ],
          correctActions: [
            "Demander à l'entreprise de maintenance les plans as-built de 2022.",
            "Comparer les plans avec l'installation réelle lors d'une visite terrain.",
            "Faire mettre à jour les plans si des écarts sont constatés.",
            "Archiver les nouveaux plans avec leurs indices de révision dans le registre de sécurité.",
          ],
          normRef: "NF S 61-932 — Documentation et mise à jour des plans SSI",
        },
      ],
    },
    {
      id: "reglementation",
      title: "3. Réglementation applicable — ERP, IGH, Code du travail",
      estimatedMinutes: 40,
      chapterImagePath: "/elearning/coordinateur-ssi/coord-ssi-reglementation.svg",
      intro:
        "La réglementation applicable au SSI dépend du type d'établissement. ERP, IGH, Code du travail (BUP), ICPE : chaque cadre impose des obligations spécifiques en matière d'installation, de vérification et de documentation du SSI. Le Coordinateur SSI doit connaître le ou les cadres réglementaires applicables à ses établissements.",
      content: [
        "Les Établissements Recevant du Public (ERP) sont soumis à l'arrêté du 25 juin 1980 modifié et ses arrêtés de type (types J, L, M, N, O, P, R, S, T, U, V, W, X, Y). La réglementation ERP impose un SSI adapté à la catégorie et au type d'établissement, des vérifications périodiques annuelles par un organisme agréé, et la tenue d'un registre de sécurité. La commission de sécurité visite les ERP de catégories 1 à 4 à une périodicité variable selon la catégorie et le type.",
        "Les Immeubles de Grande Hauteur (IGH) sont soumis à l'arrêté du 30 décembre 2011. Ce cadre est plus exigeant : SSI de catégorie A obligatoire, télésignalisation en poste de sécurité, vérifications plus fréquentes, et présence obligatoire d'un responsable SSI identifié dans l'organisation de la sécurité de l'immeuble.",
        "Le Code du travail (articles R.4227-1 et suivants) impose aux entreprises qui exploitent des locaux de travail des obligations en matière de sécurité incendie : installations de détection, moyens de lutte contre l'incendie, évacuation. La vérification annuelle des installations de détection et des extincteurs est obligatoire.",
        "Les Installations Classées pour la Protection de l'Environnement (ICPE) sont soumises à des arrêtés de prescriptions spécifiques selon la nomenclature ICPE. Certains arrêtés imposent des SSI spécifiques, des systèmes d'extinction automatique et des vérifications périodiques selon des référentiels APSAD.",
        "Pour le Coordinateur SSI, la première démarche est d'identifier clairement le ou les cadres réglementaires applicables à ses établissements. Un bâtiment peut être soumis à plusieurs cadres simultanément (ERP et Code du travail, par exemple). Les obligations les plus contraignantes prévalent.",
        "Les vérifications périodiques annuelles du SSI sont réalisées par un organisme accrédité ou agréé selon les textes. Le rapport de vérification doit être conservé dans le registre de sécurité et présenté lors de la visite de la commission de sécurité. Les réserves du rapport doivent être levées dans les délais impartis.",
      ],
      deepDive: [
        "La commission de sécurité ERP vérifie non seulement l'état du SSI, mais aussi la qualité de son suivi : registre à jour, rapports de vérification en ordre, réserves levées, personnel formé. Un SSI techniquement conforme mais mal documenté peut conduire à un avis défavorable.",
        "Pour les IGH, la réglementation impose une organisation de sécurité formalisée, incluant un service de sécurité incendie permanent. Le Coordinateur SSI dans un IGH a des obligations plus lourdes que dans un ERP classique.",
      ],
      keyPoints: [
        "ERP : arrêté du 25 juin 1980, commission de sécurité, vérification annuelle obligatoire.",
        "IGH : arrêté du 30 décembre 2011, SSI catégorie A, télésignalisation, exigences renforcées.",
        "Code du travail : obligations en locaux de travail, vérification annuelle.",
        "ICPE : arrêtés de prescriptions spécifiques selon nomenclature.",
        "Conserver tous les rapports de vérification dans le registre de sécurité.",
      ],
      forbiddenPoints: [
        "Supposer que le cadre réglementaire est 'le même pour tous les bâtiments'.",
        "Ne pas lever les réserves dans les délais — c'est une faute caractérisée.",
        "Perdre ou ne pas conserver les rapports de vérification.",
      ],
      legalRefs: [
        "Arrêté du 25 juin 1980 — Règlement de sécurité ERP (et ses modificatifs).",
        "Arrêté du 30 décembre 2011 — Règlement de sécurité IGH.",
        "Code du travail, articles R.4227-1 et suivants — Sécurité incendie en locaux de travail.",
        "Arrêtés ICPE — Prescriptions spécifiques selon nomenclature et rubrique.",
      ],
      practicalCase:
        "Votre établissement est un centre commercial (ERP type M, catégorie 1) avec des réserves du bureau de contrôle sur 3 DAS non fonctionnels et un rapport de vérification périmé. La commission de sécurité doit se réunir dans 6 semaines. Quel est votre plan d'action ?",
      scenarios: [
        {
          situation: "Vous gérez un ensemble immobilier comprenant un ERP (catégorie 2) et des locaux de travail (BUP soumis au Code du travail). Le prestataire de maintenance vous informe qu'il applique uniquement les exigences ERP et ne connaît pas les obligations Code du travail.",
          question: "Comment sécurisez-vous la conformité de l'ensemble du site ?",
          wrongActions: [
            "Laisser le prestataire intervenir selon les seules exigences ERP en supposant que c'est suffisant.",
            "Attendre une visite de l'inspection du travail pour identifier les écarts.",
          ],
          correctActions: [
            "Clarifier avec le prestataire les obligations applicables à chaque zone du site.",
            "Demander un audit documentaire distinct pour les locaux de travail.",
            "Mettre à jour le contrat de maintenance pour inclure les vérifications Code du travail.",
          ],
          normRef: "Code du travail R.4227-28 — Vérifications des installations de détection en locaux de travail",
        },
      ],
    },
    {
      id: "ccf-matrice-dis",
      title: "4. CCF, Matrice de Corrélation et Dossier d'Identité SSI",
      estimatedMinutes: 45,
      chapterImagePath: "/elearning/coordinateur-ssi/coord-ssi-ccf.svg",
      intro:
        "Le Cahier des Charges Fonctionnel (CCF), la Matrice de Corrélation et le Dossier d'Identité SSI (DIS) sont les trois documents fondamentaux que le CSSI produit et maintient tout au long du cycle de vie du SSI. Ils sont définis par NF S 61-931 §5.3 et constitutent la colonne vertébrale documentaire du système.",
      content: [
        "Le Cahier des Charges Fonctionnel SSI (CCF) est le document par lequel le CSSI traduit les besoins en sécurité incendie en exigences fonctionnelles précises pour le SSI. Il définit : la catégorie SSI retenue (A à E), les Zones de Détection Automatique (ZDA) et Manuelle (ZDM) avec le type de détecteurs et leur localisation, les Zones de Compartimentage (ZC) avec les DAS associés et leurs positions de sécurité, les Zones de Désenfumage (ZF) avec les débits et points d'extraction, les Zones d'Alarme (ZA) et les temporisations de chaque action. Le CCF est rédigé AVANT la consultation des entreprises — c'est un document contractuel que l'installateur doit respecter.",
        "La Matrice de Corrélation est le tableau croisé qui précise, pour chaque Zone de Détection Automatique (ZDA) ou Manuelle (ZDM), quels DAS sont actionnés et avec quelle temporisation. Elle traduit les scénarios de mise en sécurité en une logique lisible : si ZDA1 est en alarme, alors DAS-A se ferme à t=0 s, volet ZF-B s'ouvre à t=30 s, UGA déclenche l'alarme restreinte immédiatement et l'alarme générale à t=3 min. Cette matrice est ensuite programmée dans le CMSI par l'installateur — c'est le CSSI qui la conçoit, c'est l'installateur qui l'implémente.",
        "Le CSSI vérifie, lors des essais fonctionnels en phase de réalisation, que la matrice programmée dans le CMSI correspond exactement à la matrice du CCF. Il déclenche chaque zone de détection (avec un générateur de fumée ou en actionnant un DM) et vérifie que les DAS correspondants passent en position de sécurité avec les bonnes temporisations. Tout écart est une non-conformité à lever avant réception.",
        "Le Dossier d'Identité SSI (DIS) est le livrable final de la mission du CSSI en phase de réception. Il comprend : la notice descriptive du SSI (catégorie, équipements, fonctionnement), les plans AS-BUILT (ZDA/ZDM, ZF, ZC), le CCF définitif et la matrice de corrélation validée, les fiches techniques de chaque DAS, les procès-verbaux d'essais fonctionnels, et les certificats de conformité des équipements. Ce dossier est remis à l'exploitant et présenté à la commission de sécurité.",
        "En phase d'exploitation, le CSSI doit mettre à jour le DIS après toute modification du bâtiment ou du SSI. Toute intervention qui modifie le système — ajout d'une zone de détection, remplacement d'un DAS par un modèle différent, modification du désenfumage — nécessite une mise à jour du CCF, de la matrice et des plans. Un DIS non à jour est une non-conformité majeure lors des vérifications périodiques.",
        "La connaissance des règles d'exploitation (NF S 61-933) est nécessaire pour le CSSI afin de comprendre ce que le mainteneur doit faire, vérifier que les essais périodiques sont bien réalisés, évaluer les conséquences d'une indisponibilité et définir les mesures compensatoires appropriées. Le CSSI ne réalise pas la maintenance — c'est le mainteneur qualifié — mais le CSSI sait lire un rapport de vérification et traiter les non-conformités.",
      ],
      deepDive: [
        "NF S 61-931 §5.3.2 décompose la mission du CSSI en trois phases : §5.3.2.1 (conception) impose la rédaction du CCF et de la matrice de corrélation. §5.3.2.2 (réalisation) impose le suivi de cohérence, la validation des essais et la mise à jour du DIS. §5.3.2.3 (réception) impose le rapport de réception technique et la finalisation du DIS complet.",
        "La matrice de corrélation peut être simple (un tableau Excel) ou complexe (plusieurs centaines de lignes pour un grand IGH). Ce qui importe, c'est qu'elle soit exhaustive, validée par le bureau de contrôle, et que sa mise en œuvre dans le CMSI soit vérifiée essai par essai. Une case manquante dans la matrice peut signifier qu'un DAS n'est jamais commandé en cas d'alarme dans une zone donnée.",
      ],
      keyPoints: [
        "CCF : document contractuel rédigé par le CSSI AVANT la consultation des entreprises.",
        "Matrice de corrélation : tableau ZDA/ZDM × DAS avec temporisations — conçue par le CSSI, programmée par l'installateur.",
        "Essais fonctionnels : le CSSI vérifie que la matrice CMSI correspond à la matrice CCF.",
        "DIS : livrable final de réception — plans AS-BUILT, CCF, matrice validée, PV essais.",
        "Exploitation : le CSSI met à jour le DIS après chaque modification du SSI.",
        "Le CSSI CONNAÎT les règles NF S 61-933 — il ne FAIT PAS la maintenance.",
      ],
      forbiddenPoints: [
        "Rédiger le CCF APRÈS que l'installateur a déjà câblé — c'est l'inverse de la bonne pratique.",
        "Confondre le rôle de CSSI (conception, coordination, vérification) avec celui du mainteneur (réalisation des essais périodiques, interventions correctives).",
        "Laisser le DIS non mis à jour après une modification — c'est la première chose que vérifie le bureau de contrôle.",
      ],
      legalRefs: [
        "NF S 61-931 §5.3.2.1 (conception) — Cahier des Charges Fonctionnel SSI et matrice de corrélation.",
        "NF S 61-931 §5.3.2.2 (réalisation) — Suivi de cohérence, essais fonctionnels, mise à jour DIS.",
        "NF S 61-931 §5.3.2.3 (réception) — Rapport de réception technique, DIS final.",
        "NF S 61-932 §4 — Règles d'installation du SMSI : zones de mise en sécurité, temporisations.",
        "NF S 61-933 — Règles d'exploitation et maintenance : connaissance requise du CSSI pour piloter la conformité.",
        "Arrêté ERP du 25 juin 1980 — MS 53 à MS 60 : obligation de coordination SSI lors de toute création ou modification.",
      ],
      practicalCase:
        "Un ERP type M (catégorie 2) subit une extension de 400 m² avec création d'un nouveau local de stockage. L'installateur SSI vous demande de lui fournir le CCF pour savoir quels détecteurs poser et quels DAS commander dans la nouvelle zone. Comment procédez-vous, et quels documents devez-vous produire avant le début des travaux ?",
      scenarios: [
        {
          situation: "Lors des essais fonctionnels de réception d'une zone rénovée, vous déclenchez manuellement la Zone de Détection 3 (local stockage). La porte coupe-feu associée (DAS-7) reste ouverte — elle ne passe pas en position fermée (position de sécurité). L'installateur vous dit : 'c'est normal, elle est en attente d'un signal supplémentaire'.",
          question: "Comment réagissez-vous en tant que CSSI ?",
          wrongActions: [
            "Accepter l'explication de l'installateur et valider la réception sans essai concluant.",
            "Signer le PV de réception en notant une réserve mineure à lever plus tard.",
          ],
          correctActions: [
            "Refuser de signer le PV de réception — un DAS qui ne passe pas en position de sécurité est une non-conformité bloquante.",
            "Demander à l'installateur de vérifier la programmation du CMSI et de la confronter à la matrice de corrélation du CCF.",
            "Identifier si l'écart vient d'un défaut de programmation (matrice CMSI ≠ CCF) ou d'un défaut matériel (DAS défaillant).",
            "Ne pas autoriser l'ouverture de la zone rénovée tant que le DAS n'est pas fonctionnel et l'essai concluant.",
          ],
          normRef: "NF S 61-931 §5.3.2.3 — Rapport de réception technique : essais de bon fonctionnement obligatoires avant réception",
        },
      ],
    },
    {
      id: "gestion-intervenants",
      title: "5. Coordination des intervenants et gestion des travaux",
      estimatedMinutes: 35,
      chapterImagePath: "/elearning/coordinateur-ssi/coord-ssi-intervenants.svg",
      intro:
        "Les travaux dans un bâtiment équipé d'un SSI sont une source fréquente de non-conformités et d'incidents. Le CSSI coordonne les installateurs et les corps d'état qui interviennent sur le SSI ou dans son périmètre — il n'est pas lui-même mainteneur. Il anticipe l'impact de chaque intervention, l'encadre et valide la remise en service.",
      content: [
        "Tout travail impactant le SSI — ou susceptible de l'impacter — doit être anticipé par le Coordinateur SSI. Cela inclut les travaux de cloisonnement (impact sur le compartimentage), de désenfumage (modification des ouvertures), d'électricité (alimentation des équipements), de plomberie (impact sur sprinkler le cas échéant), et bien sûr toute modification directe du SSI lui-même.",
        "Avant les travaux, le Coordinateur SSI doit évaluer l'impact sur le SSI, coordonner avec le bureau d'études ou le maître d'œuvre, établir un plan de prévention avec les entreprises intervenantes, définir les mises hors service nécessaires et les mesures compensatoires, et obtenir si nécessaire l'accord du bureau de contrôle.",
        "Pendant les travaux, il doit s'assurer que les mises hors service sont tracées dans le carnet de bord, que les mesures compensatoires sont en place, et que les entreprises respectent le plan de prévention. Un référent SSI doit être joignable en cas d'alarme pendant la période de travaux.",
        "Après les travaux, la remise en service du SSI doit être validée par un essai fonctionnel. Si les travaux ont modifié le système (ajout de détecteurs, modification de zones, changement de DAS), le bureau de contrôle doit être informé et les plans mis à jour. La mise à jour documentaire doit être réalisée avant toute réouverture de l'établissement si elle conditionne la conformité.",
        "La relation avec le bureau de contrôle est un élément clé de la gestion des travaux. Pour les modifications significatives du SSI dans un ERP, un rapport de vérification de conformité peut être requis avant la réouverture. Le Coordinateur SSI doit anticiper ces délais dans la planification des travaux.",
        "La gestion des entreprises extérieures sur site comprend également la vérification des qualifications des techniciens SSI. Tous les techniciens intervenant sur les équipements SSI doivent justifier des habilitations requises. Le Coordinateur SSI doit vérifier ces qualifications avant toute intervention.",
      ],
      deepDive: [
        "Le code du travail impose un plan de prévention dès lors que des entreprises extérieures interviennent dans les locaux de l'entreprise utilisatrice. Le SSI et ses composants sont des équipements de sécurité : leur mise hors service partielle pendant les travaux constitue un risque que le plan de prévention doit traiter.",
        "En cas d'incendie survenant pendant des travaux avec mise hors service partielle du SSI, la responsabilité de l'exploitant sera systématiquement recherchée. La traçabilité des décisions et des mesures compensatoires est la seule protection réelle.",
      ],
      keyPoints: [
        "Anticiper tout travail susceptible d'impacter le SSI.",
        "Plan de prévention obligatoire avec les entreprises extérieures.",
        "Traçabilité des mises hors service dans le carnet de bord SSI.",
        "Essai fonctionnel de remise en service après travaux.",
        "Mise à jour documentaire (plans, fiches) avant réouverture si nécessaire.",
      ],
      forbiddenPoints: [
        "Laisser des entreprises intervenir sur le SSI sans plan de prévention.",
        "Remettre en service un SSI modifié sans essai de fonctionnement.",
        "Modifier le SSI sans mettre à jour les plans et la documentation.",
      ],
      legalRefs: [
        "Code du travail R.4512-1 à R.4512-16 — Plan de prévention pour entreprises extérieures.",
        "NF S 61-932 — Réception et remise en service des SSI.",
        "Arrêté ERP — Rôle du bureau de contrôle lors de modifications.",
      ],
      practicalCase:
        "Un bailleur vous demande d'agrandir la surface d'un local commercial (ERP type M) de 200 m². Les travaux nécessitent la modification du réseau de détection et la création de nouvelles zones de désenfumage. Le délai de livraison est de 4 semaines. Quelles sont les étapes à suivre pour que l'ouverture du local agrandi se fasse dans les règles ?",
      scenarios: [
        {
          situation: "Une entreprise de travaux vous informe qu'elle va intervenir le lendemain matin pour remplacer un faux-plafond dans 3 bureaux. Elle vous dit que 'ça ne touche pas au SSI'. Vous constatez sur vos plans que des détecteurs de fumée sont dans cette zone.",
          question: "Comment réagissez-vous ?",
          wrongActions: [
            "Faire confiance à l'entreprise et ne pas intervenir.",
            "Autoriser les travaux verbalement sans vérification.",
          ],
          correctActions: [
            "Refuser le démarrage des travaux sans plan de prévention signé.",
            "Vérifier sur place l'impact réel sur les détecteurs.",
            "Si les détecteurs doivent être mis hors service, planifier les mesures compensatoires.",
            "Consigner la mise hors service dans le carnet de bord avant le début des travaux.",
          ],
          normRef: "Code du travail R.4512-6 — Contenu du plan de prévention",
        },
      ],
    },
    {
      id: "situations-degradees",
      title: "6. Situations dégradées et gestion de crise",
      estimatedMinutes: 30,
      chapterImagePath: "/elearning/coordinateur-ssi/coord-ssi-crise.svg",
      intro:
        "Le Coordinateur SSI doit être préparé aux situations dégradées : alarme réelle, défaut majeur, incendie déclaré, visite surprise d'une autorité. Ces situations nécessitent des procédures claires, des réflexes bien établis et une capacité à décider rapidement.",
      content: [
        "En cas d'alarme feu (feu confirmé ou non), la procédure de réaction dépend du type d'alarme et du plan d'évacuation de l'établissement. Le Coordinateur SSI doit connaître les procédures propres à son établissement, s'assurer qu'elles sont à jour et communiquées au personnel, et être en mesure de coordonner avec les agents SSIAP et les secours extérieurs.",
        "En cas de défaut majeur du SSI (panne de la centrale, alimentation hors service, DAS bloqué en position ouverte sur une zone critique), le Coordinateur SSI doit immédiatement évaluer le niveau de risque, mettre en place des mesures compensatoires proportionnées, contacter le mainteneur et, si la situation le justifie, restreindre l'utilisation du bâtiment ou en alerter l'autorité compétente.",
        "La réception d'une visite inopinée d'une commission de sécurité ou d'un inspecteur du travail ne doit pas surprendre un Coordinateur SSI bien organisé. Le registre de sécurité, le carnet de bord SSI et les derniers rapports de vérification doivent être accessibles à tout moment. Toute réserve antérieure doit avoir fait l'objet d'une levée ou d'un plan de levée documenté.",
        "En cas d'incendie déclaré, le Coordinateur SSI doit faciliter l'intervention des secours : accès au local du SSI, mise à disposition des plans, information sur les zones en défaut ou hors service, coordination avec les agents SSIAP présents. Il ne doit pas interférer avec le commandement des opérations de secours, mais être disponible pour toute information technique.",
        "L'analyse post-incident est une étape souvent négligée mais essentielle. Après tout incident significatif (déclenchement intempestif, défaillance d'un DAS lors d'un sinistre, alarme non traitée), le Coordinateur SSI doit rédiger un rapport d'incident, identifier les causes et mettre en place des actions correctives. Ce rapport enrichit le retour d'expérience et peut éviter un incident similaire.",
      ],
      deepDive: [
        "Les déclenchements intempestifs (fausses alarmes) sont un problème récurrent dans les ERP. Ils génèrent des évacuations non nécessaires, des tensions avec les occupants et parfois une désensibilisation dangereuse. Le Coordinateur SSI doit analyser les causes des fausses alarmes (détecteurs mal adaptés, vapeurs de cuisine, poussière) et mettre en place des corrections avec le mainteneur.",
        "Le SDIS (Service Départemental d'Incendie et de Secours) peut réaliser des visites de prévention dans les ERP. Le Coordinateur SSI doit y participer et intégrer les recommandations dans son plan de suivi.",
      ],
      keyPoints: [
        "Procédures d'alarme : les connaître, les maintenir à jour, les communiquer.",
        "Défaut majeur = évaluation immédiate du risque + mesures compensatoires + mainteneur.",
        "Registre et carnet de bord accessibles à tout moment pour toute visite.",
        "Rapport d'incident systématique après tout événement significatif.",
        "Coordination avec les secours : faciliter sans interférer.",
      ],
      forbiddenPoints: [
        "Sous-estimer un défaut majeur en attendant la prochaine maintenance planifiée.",
        "Ne pas documenter les incidents et les décisions prises.",
        "Gêner l'intervention des secours en voulant gérer la crise à leur place.",
      ],
      legalRefs: [
        "Arrêté ERP — Consignes et procédures d'évacuation.",
        "Code du travail R.4227-28 — Organisation de la lutte contre l'incendie.",
        "NF S 61-933 — Gestion des indisponibilités et incidents.",
      ],
      practicalCase:
        "Un samedi après-midi, la centrale SSI de votre ERP (centre commercial catégorie 1) déclenche une alarme générale. L'agent SSIAP en service vous appelle et vous informe qu'il ne voit pas de fumée dans la zone en défaut mais que l'alarme générale est active. Le centre est ouvert avec environ 3 000 visiteurs. Quelle est votre procédure ?",
      scenarios: [
        {
          situation: "Le lendemain d'une vérification annuelle, vous recevez le rapport préliminaire du bureau de contrôle. Il fait état de 2 réserves prioritaires : un DAS de désenfumage bloqué en position fermée dans la zone de vente principale, et une AES dont l'autonomie est insuffisante. L'établissement est ouvert.",
          question: "Quelles sont vos actions immédiates ?",
          wrongActions: [
            "Attendre le rapport définitif avant de prendre des mesures.",
            "Continuer à exploiter l'établissement comme si le rapport n'existait pas.",
          ],
          correctActions: [
            "Contacter immédiatement le mainteneur pour intervention d'urgence sur le DAS.",
            "Mettre en place des rondes humaines renforcées dans la zone de vente non désenfumée.",
            "Informer par écrit la direction et, si nécessaire, le bureau de contrôle.",
            "Consigner toutes les décisions et actions dans le carnet de bord SSI.",
            "Planifier la levée de la réserve AES dans les délais réglementaires.",
          ],
          normRef: "NF S 61-933 § 6 — Réponse aux non-conformités et gestion des urgences",
        },
      ],
    },
  ],
};
