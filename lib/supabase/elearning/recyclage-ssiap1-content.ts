import type { ModuleContent } from "./module-types";

export const recyclageSsiap1ModuleContent: ModuleContent = {
  title: "Recyclage SSIAP1 — Remise à niveau Sécurité Incendie ERP",
  shortTitle: "Recyclage SSIAP1",
  subtitle:
    "Parcours e-learning de recyclage obligatoire pour les agents SSIAP1 (tous les 3 ans). Remise à niveau sur les évolutions réglementaires, l'approfondissement SSI/IGH, la gestion des travaux et les retours d'expérience incendie.",
  duration: "2 h 30 à 3 h",
  deliveryFormat: "E-learning autonome + quiz de validation",
  level: "Intermédiaire — pour agents SSIAP1 certifiés",
  objective:
    "Actualiser les connaissances réglementaires et techniques de l'agent SSIAP1, maîtriser les spécificités IGH et les catégories SSI, approfondir la gestion des travaux par points chauds, renforcer les réflexes opérationnels à partir de cas pratiques et de retours d'expérience.",
  audience:
    "Agents SSIAP1 certifiés devant effectuer leur recyclage obligatoire de 14 heures (tous les 3 ans). Ce module e-learning constitue la partie théorique du recyclage, complétée par des exercices pratiques encadrés. Également adapté aux agents souhaitant se remettre à niveau après une période d'inactivité.",
  certificationNote:
    "Ce parcours e-learning constitue la partie théorique du recyclage SSIAP1 obligatoire (14 heures tous les 3 ans selon l'arrêté du 2 mai 2005 modifié). La partie pratique (exercices sur extincteurs, mises en situation, évaluation pratique) doit être réalisée en présentiel avec un formateur habilité. L'attestation de recyclage complète est délivrée à l'issue de la formation encadrée complète par l'organisme agréé.",
  heroBadge: "Recyclage SSIAP1 — 14h / 3 ans",
  finalMessage:
    "Le recyclage SSIAP1 n'est pas qu'une obligation réglementaire — c'est une opportunité de consolider vos réflexes et d'intégrer les évolutions normatives. Un agent recyclé régulièrement est un agent plus efficace et plus serein face à une situation d'urgence. Votre qualification SSIAP1 à jour protège les personnes qui vous font confiance.",
  quizCtaLabel: "Passer au quiz de recyclage SSIAP1",
  sections: [
    {
      id: "revision-fondamentaux",
      title: "1. Révision — Feu, classes et moyens d'extinction",
      estimatedMinutes: 18,
      chapterImagePath: "/elearning/ssiap1/ssiap1-tetraedre-feu.svg",
      chapterImageAlt: "Révision fondamentaux — tétraèdre du feu, classes A/B/C/D/F et agents extincteurs",
      intro:
        "Avant d'approfondir les nouvelles notions, revenons sur les fondamentaux du feu et de l'extinction. Un agent SSIAP1 opérationnel doit avoir ces réflexes parfaitement automatisés.",
      content: [
        "Le tétraèdre du feu rappelle les 4 conditions simultanées nécessaires à la combustion : combustible (matière qui brûle), comburant (oxygène de l'air — le feu s'éteint si la teneur descend sous 14 %), énergie d'activation (source de chaleur permettant d'atteindre la température d'inflammation), et réaction en chaîne (entretien autonome de la combustion par les radicaux libres). Supprimer une seule de ces faces éteint le feu. Les 4 méthodes d'extinction correspondent chacune à la suppression d'une face : refroidissement (eau), étouffement (mousse, CO₂, couverture), soustraction du combustible (coupure gaz), inhibition de la réaction en chaîne (poudre ABC/BC).",
        "Les 5 classes de feux à maîtriser parfaitement : Classe A = feux de solides laissant des braises (bois, papier, tissu) → eau, mousse, poudre ABC ; Classe B = feux de liquides inflammables (essence, huile, solvants) → mousse AFFF, CO₂, poudre — eau seule INTERDITE (projections de liquide enflammé) ; Classe C = feux de gaz → couper l'alimentation EN PRIORITÉ avant toute extinction — gaz non allumé forme une ATEX explosive ; Classe D = feux de métaux (magnésium, sodium, lithium) → poudre D spéciale uniquement — eau et CO₂ réaction explosive ; Classe F = feux de graisses alimentaires (friteuses industrielles, bains de friture) → agent F uniquement — eau = explosion de vapeur, CO₂ = flash thermique.",
        "La méthode DAPS pour l'utilisation d'un extincteur portable : Dégoupiller (retirer la goupille de sécurité en tirant la goupille), Acheminer (s'approcher à 3-4 mètres de la base des flammes — JAMAIS plus proche), Pointer (diriger le jet vers la BASE des flammes, pas vers le haut), Supprimer (balayer en mouvements de gauche à droite jusqu'à extinction complète). Se positionner dos au vent ou à la ventilation. Vérifier avant d'intervenir que la voie de retraite est dégagée. La durée d'action d'un extincteur est courte (8 à 60 secondes selon la capacité).",
        "Le Robinet d'Incendie Armé (RIA) est un moyen de lutte fixe à débit continu. Avant utilisation : dérouler COMPLÈTEMENT le tuyau avant d'ouvrir l'eau (si l'eau est ouverte avec le tuyau enroulé, le dévidoir devient incontrôlable). Ouvrir progressivement le robinet d'arrêt. Utiliser le jet diffusé pour l'attaque en protection, le jet droit pour les locaux éloignés. Ne jamais avancer seul — avoir un binôme prêt à fermer l'eau. Le RIA est efficace sur les feux de classe A et B (liquides dans des bacs contenus).",
        "Points d'entretien réglementaire des moyens d'extinction : vérification annuelle obligatoire par un technicien habilité (extincteurs) ; révision partielle tous les 5 ans ; révision totale tous les 10 ans (extincteurs portables). Un extincteur déclenché même partiellement doit être immédiatement remis en état ou remplacé. L'exploitant effectue des contrôles visuels mensuels (accessibilité, pression, scellé intact, absence de corrosion). Les RIA font l'objet d'un essai trimestriel et d'une vérification annuelle complète par un organisme compétent.",
      ],
      keyPoints: [
        "Tétraèdre : combustible · comburant · énergie d'activation · réaction en chaîne.",
        "Classes A (solides) · B (liquides — jamais d'eau) · C (gaz — couper d'abord) · D (métaux — poudre D) · F (graisses — agent F).",
        "DAPS : Dégoupiller · Acheminer (3-4 m) · Pointer (base des flammes) · Supprimer (balayer).",
        "RIA : tuyau entièrement déroulé AVANT d'ouvrir l'eau. Toujours en binôme.",
        "Extincteur : vérification annuelle technicien · révision partielle 5 ans · totale 10 ans.",
      ],
      legalRefs: [
        "Norme NF EN 3 — extincteurs portables : exigences de performance.",
        "Norme NF S 61-919 — maintenance des extincteurs.",
        "APSAD R4 — Robinets d'incendie armés : installation et vérification.",
      ],
    },
    {
      id: "evolutions-reglementaires",
      title: "2. Évolutions réglementaires — ce qui a changé",
      estimatedMinutes: 20,
      chapterImagePath: "/elearning/ssiap1/ssiap1-erp-classification.svg",
      chapterImageAlt: "Évolutions réglementaires ERP/IGH — nouvelles obligations et modifications des textes",
      intro:
        "La réglementation incendie évolue régulièrement. Un agent SSIAP1 à jour doit connaître les textes en vigueur et les modifications intervenues depuis sa dernière formation.",
      content: [
        "L'arrêté du 2 mai 2005 modifié définit les missions, qualifications et conditions d'emploi du personnel SSIAP. Points clés à retenir pour le recyclage : la qualification SSIAP1 est valable 3 ans et doit être renouvelée par un recyclage de 14 heures minimum (sans quoi elle est suspendue). L'agent doit justifier d'une aptitude médicale à l'emploi. La formation initiale SSIAP1 est de 67 heures minimum dispensées par un organisme agréé et sanctionnées par un examen combinant QCM écrit, épreuve pratique et oral devant jury.",
        "Le système Euroclass (réaction au feu) remplace depuis 2003 les anciens classements M0 à M4 : A1 (non combustible — ex-M0), A2, B, C, D (ex-M1/M2), E (ex-M3), F (ex-M4 ou non classé). La résistance au feu des éléments de structure et de compartimentage s'exprime désormais selon la notation européenne : R (résistance mécanique), E (étanchéité aux flammes et gaz chauds), I (isolation thermique), avec la durée en minutes. REI 60 remplace l'ancien plancher CF 1h. EI 60 remplace l'ancien coupe-feu 1h.",
        "Les ERP sont classés par type selon leur activité (J, L, M, N, O, P, R, S, T, U, V, W, X, Y) et par catégorie selon leur capacité (1re : > 1 500 personnes, 2e : 701-1 500, 3e : 301-700, 4e : ≤ 300, 5e : sous les seuils). La réglementation impose des obligations strictes adaptées à chaque combinaison type/catégorie : présence d'agents SSIAP selon le type et la catégorie de l'ERP, fréquence des exercices d'évacuation (≥ 1 fois/an, ≥ 2 fois/an pour les locaux à sommeil), entretien réglementaire des équipements et tenue du registre de sécurité.",
        "Les IGH (Immeubles de Grande Hauteur) sont soumis à une réglementation encore plus exigeante : seuil de 28 m pour les habitations, 50 m pour les bureaux, hôtels et autres usages. Ils sont subdivisés en classes (GHA, GHB, GHC, GHD, GHE, GHF, GHJ, GHR, GHU, GHW, GHZ). Chaque IGH doit disposer d'un poste central de sécurité incendie (PCSI) occupé en permanence, d'un service incendie permanent et de deux ascenseurs minimum dans la même gaine pour l'intervention des pompiers.",
        "La réglementation des Établissements Recevant du Travail (ERT) — relevant du Code du travail — coexiste avec la réglementation ERP. Le Document Unique d'Évaluation des Risques Professionnels (DUERP) doit intégrer le risque incendie. L'employeur est responsable de la mise en place et de la mise à jour du plan de prévention des risques d'incendie, de la désignation des guide-files et serre-files, de la conduite d'exercices d'évacuation documentés, et de l'entretien des moyens de secours.",
        "Risques émergents à intégrer dans la pratique : la réglementation incendie intègre progressivement de nouveaux risques que l'agent SSIAP1 doit connaître. Les batteries lithium-ion (VE, trottinettes, vélos, stockage d'énergie, onduleurs) représentent un risque d'emballement thermique avec reprise de feu, fumées toxiques et limites des agents extincteurs classiques. Les mousses incendie contenant des composés fluorés (PFAS) font l'objet de restrictions européennes progressives : vérifier les fiches techniques des produits présents sur site, éviter les rejets non maîtrisés, tracer les stocks et se tenir informé des alternatives. Ces deux sujets doivent être intégrés dans les rondes de prévention, les consignes d'exploitation et les informations transmises aux secours."
      ],
      keyPoints: [
        "Recyclage SSIAP1 : 14h obligatoires tous les 3 ans — qualification suspendue sans recyclage.",
        "Euroclass : A1/A2 (ex-M0) → B/C/D (ex-M1/M2) → E (ex-M3) → F (non classé).",
        "Résistance au feu européenne : R (mécanique) · E (étanchéité) · I (isolation) + durée en minutes.",
        "ERP : 5 catégories selon capacité + types selon activité (J, L, M, N, O, R, U, W…).",
        "IGH : > 28 m habitation · > 50 m bureaux — PCSI permanent + 2 ascenseurs en gaine commune.",
        "Batteries Li-ion : risque d'emballement thermique, reprise de feu, fumées toxiques — conduite spécifique.",
        "Mousses PFAS : restriction progressive — vérifier fiches techniques, éviter rejets non maîtrisés."
      ],
      legalRefs: [
        "Arrêté du 2 mai 2005 modifié — qualification et missions SSIAP.",
        "Arrêté du 25 juin 1980 modifié — règlement de sécurité ERP.",
        "Décret 76-1060 du 14 novembre 1976 — règlement de sécurité IGH.",
        "Code du travail Art. R4227-28 à R4227-41 — sécurité incendie au travail.",
        "INRS ED 6164 — Batteries lithium-ion au travail.",
        "Règlement UE 2024/2462 et UE 2025/1988 — restriction progressive des PFAS dans les mousses incendie (ECHA pour textes à jour)."
      ],
    },
    {
      id: "ssi-approfondi",
      title: "3. SSI approfondi — catégories, alarmes et alimentation électrique",
      estimatedMinutes: 25,
      chapterImagePath: "/elearning/ssiap1/ssiap1-ssi-schema.svg",
      chapterImageAlt: "SSI approfondi — catégories A→E, types alarme EA, UGA, AES, DAD et compartimentage",
      intro:
        "Le recyclage approfondit la maîtrise du SSI au-delà de la simple identification des composants : comprendre les catégories, les types d'alarme et l'alimentation électrique de sécurité est indispensable pour gérer correctement les situations d'alarme en poste.",
      content: [
        "Les 5 catégories de SSI (norme NF S 61-930) classifient les installations du plus complet au plus simple. Catégorie A : SDI complet (détecteurs automatiques dans tout le bâtiment + déclencheurs manuels) + SMSI complet avec toutes les fonctions (évacuation, compartimentage, désenfumage). C'est la catégorie des ERP à risques importants (grands magasins, hôpitaux, IGH). Catégorie B : SDI partiel + SMSI complet. Catégorie C : déclencheurs manuels seuls + SMSI complet. Catégorie D : déclencheurs manuels + SMSI partiel. Catégorie E : DAD (Détecteur Autonome Déclencheur avec alarme sonore intégrée) uniquement — la plus simple.",
        "Les équipements d'alarme (EA) sont classés de EA1 à EA5 selon leur complexité et les équipements requis. EA1 : équipement d'alarme complet avec diffuseurs sonores et visuels commandés par le CMSI. EA2 et EA2b : équipements intermédiaires combinant déclencheurs manuels (DM) et blocs autonomes d'alarme sonore (BAAS). EA3 : déclencheurs manuels + BAAS Ma (maître). EA4 : déclencheurs manuels seuls. EA5 : alarme donnée par des moyens non spécifiques (sirène, sonnerie, voix). L'agent SSIAP1 doit connaître le type d'équipement d'alarme de son établissement pour appliquer la bonne procédure en cas d'alarme.",
        "L'UGA (Unité de Gestion d'Alarmes) est intégrée au CMSI et gère la séquence d'alarme : d'abord l'alarme restreinte (signal au PC sécurité uniquement — permet la levée de doute), puis l'alarme générale (signal dans tout l'établissement — déclenche l'évacuation). En catégorie SSI A et B, la séquence peut être temporisée pour permettre la levée de doute (durée réglementaire maximum : 5 minutes). L'agent qui effectue la levée de doute doit se rendre sur les lieux signalés, évaluer la situation et prendre la décision : annuler si fausse alarme confirmée, ou déclencher l'alarme générale immédiatement si l'incendie est confirmé.",
        "L'Alimentation Électrique de Sécurité (AES) garantit l'alimentation des équipements du SSI en cas de coupure secteur. Elle comprend des accumulateurs (batteries) ou un groupe électrogène de sécurité. Les exigences sont : autonomie de 12 heures minimum en veille + durée de fonctionnement en alarme (généralement 1 heure). L'AES est testée périodiquement selon le plan de maintenance du SSI. L'agent SSIAP1 doit signaler immédiatement tout défaut d'alimentation électrique signalé sur le tableau du CMSI.",
        "Les Dispositifs Actionnés de Sécurité (DAS) sont commandés par le CMSI lors d'une alarme. Ils comprennent : les portes et cloisons coupe-feu (fermeture automatique sur ordre du CMSI), les volets de désenfumage (ouverture des exutoires en toiture, fermeture des volets coupe-feu de gaine), les blocs-portes à fermeture automatique (mécanisme électromagnétique ou vérins — maintien ouvert en exploitation, fermeture sur alarme), les issues de secours (déverrouillage électrique), et les équipements électriques désactivés (ventilations, certains ascenseurs). La position d'attente (PA) est la position normale d'exploitation. La position de sécurité (PS) est la position prise lors d'une alarme. L'agent doit vérifier lors de ses rondes que les DAS sont bien en position d'attente.",
      ],
      deepDive: [
        "Le DAD (Détecteur Autonome Déclencheur) est un équipement autonome qui intègre à la fois la détection (optique de fumée généralement) et l'alarme sonore. Il n'est pas relié à un CMSI — c'est la forme la plus simple de SSI (catégorie E). On le trouve dans les petits ERP de 5e catégorie. Son principal défaut : pas de report au PC sécurité, pas de levée de doute centralisée, pas de commande de DAS. L'agent SSIAP1 affecté dans un établissement avec DAD doit connaître leur emplacement et leur procédure de réarmement.",
        "La Gestion Technique Centralisée (GTC) est un système de supervision qui peut intégrer le SSI parmi d'autres équipements techniques (GTB — gestion technique du bâtiment). L'agent SSIAP1 peut être amené à interagir avec une GTC pour consulter l'état des installations. Il faut distinguer les fonctions de surveillance (lecture d'état, historique) des fonctions de commande (qui nécessitent un accès de niveau supérieur). Les niveaux d'accès au SSI sont réglementés : niveau 1 (public), niveau 2 (personnel exploitant), niveau 3 (maintenance technique), niveau 4 (constructeur).",
      ],
      keyPoints: [
        "SSI catégories : A (SDI + SMSI complets) · B (SDI partiel + SMSI) · C (DM + SMSI) · D (DM + SMSI partiel) · E (DAD seul).",
        "EA1 → EA5 : niveaux d'équipement d'alarme — EA1 le plus complet, EA5 le plus simple.",
        "UGA : alarme restreinte (levée de doute ≤ 5 min) → alarme générale si incendie confirmé.",
        "AES : alimentation électrique de sécurité — 12h autonomie veille + 1h en alarme.",
        "DAS : toujours vérifier la position d'attente (PA) lors des rondes.",
        "DAD (catégorie E) : autonome, pas de CMSI — connaître leur emplacement et réarmement.",
      ],
      legalRefs: [
        "Norme NF S 61-930 — Systèmes de Sécurité Incendie : règles d'installation.",
        "Norme NF S 61-931 — SSI catégorie A.",
        "Norme NF EN 54-1 à NF EN 54-29 — composants des systèmes de détection et d'alarme.",
        "Norme NF S 61-940 — maintenance des SSI.",
      ],
    },
    {
      id: "ssi-igh-specificites",
      title: "4. Spécificités IGH — compartimentage et désenfumage avancé",
      estimatedMinutes: 20,
      chapterImagePath: "/elearning/recyclage-ssiap1/recyclage-igh-compartimentage.svg",
      chapterImageAlt: "Spécificités IGH — compartimentage 75m/2500m², désenfumage, PCSI, ascenseurs pompiers",
      intro:
        "Les IGH présentent des contraintes spécifiques qui dépassent la réglementation ERP classique. Un agent SSIAP1 affecté dans un IGH ou dans un ERP associé doit en maîtriser les particularités.",
      content: [
        "Un compartiment IGH est une subdivision horizontale et verticale de l'immeuble constituant une zone coupe-feu autonome. Dimensions maximales réglementaires d'un compartiment : longueur maximale 75 mètres, surface maximale 2 500 m², pouvant s'étendre sur 1, 2 ou 3 niveaux. Les parois de compartimentage doivent résister au feu au moins 2 heures (EI 120 ou REI 120 pour les planchers porteurs). Cette durée est calculée pour permettre l'évacuation complète et l'intervention des services de secours sans propagation du feu d'un compartiment à l'autre.",
        "La stratégie d'évacuation en IGH est différente de celle en ERP classique : elle repose sur le principe d'évacuation différée par compartiment plutôt qu'une évacuation générale simultanée. En cas d'alarme, le compartiment sinistré est évacué en premier. Les compartiments adjacents sont mis en alerte (alarme restreinte) mais peuvent patienter selon la progression du sinistre. L'ascenseur dédié aux pompiers (APS — ascenseur prioritaire de secours) n'est pas utilisé par les occupants. L'IGH doit disposer d'au moins 2 ascenseurs dans la même gaine pour l'intervention, dont l'un est réservé aux sapeurs-pompiers.",
        "Le désenfumage en IGH est une priorité absolue pour la praticabilité des voies d'évacuation. Les cages d'escalier sont mises en surpression (différentiel de pression ≥ 20 Pa entre la cage et le couloir adjacent) pour éviter toute pénétration de fumée. Les circulations horizontales communes sont désenfumées mécaniquement. Chaque compartiment peut être désenfumé séparément selon la zone de détection activée. Le PCSI (Poste Central de Sécurité Incendie) de l'IGH doit avoir une surface d'au moins 50 m², être constitué de parois EI ou REI 60 et de blocs-portes E 30, et être implanté au niveau des sorties/accès des services de secours.",
        "Concernant les installations techniques en IGH : les chaufferies doivent avoir une résistance au feu de 4 heures (EI ou REI 240) et ne pas communiquer directement avec les parties communes. Les gaines techniques verticales (électricité, plomberie) doivent être compartimentées à chaque niveau. Les circulation horizontales communes encloisonnées doivent être construites avec des matériaux de classe A2 (non combustibles) résistant au feu CF 1h (EI 60). L'IGH doit être situé à moins de 3 km d'un centre de secours des sapeurs-pompiers doté d'une échelle aérienne ou d'un engin élévateur atteignant le dernier niveau.",
        "L'Espace d'Attente Sécurisé (EAS) pour les personnes à mobilité réduite (PMR) est une exigence réglementaire dans les IGH et dans les ERP à niveaux multiples. L'EAS doit être situé à moins de 40 mètres de tout point d'une zone évacuée (30 mètres pour les PMR), résister au feu et disposer d'un moyen de communication bidirectionnel avec le PCSI. L'agent SSIAP1 doit connaître l'emplacement de tous les EAS de son établissement et la procédure de communication avec les PMR qui y attendent.",
      ],
      keyPoints: [
        "Compartiment IGH : ≤ 75 m longueur · ≤ 2 500 m² surface · 1 à 3 niveaux · parois EI/REI 120.",
        "Évacuation IGH : différée par compartiment (sinistré en premier) — pas d'évacuation générale simultanée.",
        "Désenfumage : surpression escaliers (≥ 20 Pa) + désenfumage mécanique circulations horizontales.",
        "PCSI IGH : ≥ 50 m², parois EI/REI 60, porte E30, au niveau des accès secours.",
        "Chaufferies IGH : résistance au feu 4 heures (EI/REI 240) — pas de communication directe avec parties communes.",
        "IGH doit être à ≤ 3 km d'un centre SP avec échelle aérienne atteignant le dernier niveau.",
      ],
      legalRefs: [
        "Décret n° 76-1060 du 14 novembre 1976 — règlement de sécurité contre l'incendie dans les IGH.",
        "CCH Art. R.122-2 — définition des IGH.",
        "Norme NF S 61-930 — SSI : application aux IGH.",
        "Arrêté du 18 octobre 1977 modifié — sécurité incendie dans les IGH.",
      ],
    },
    {
      id: "gestion-travaux-permis-feu",
      title: "5. Gestion des travaux — permis de feu et mesures compensatoires",
      estimatedMinutes: 18,
      chapterImagePath: "/elearning/recyclage-ssiap1/recyclage-permis-feu.svg",
      chapterImageAlt: "Gestion des travaux en ERP/IGH — permis de feu, mise hors service SSI, rondes post-travaux",
      intro:
        "La gestion des travaux en exploitation est l'une des situations les plus à risque pour un agent SSIAP1. Un faux pas — détecteur inhibé oublié, permis de feu non signé, ronde post-travaux non effectuée — peut avoir des conséquences dramatiques.",
      content: [
        "Le permis de feu est obligatoire pour tout travail par points chauds (soudage, meulage, oxycoupage, découpe thermique, chalumeau) effectué dans un ERP ou sur un chantier en exploitation. Il est établi par l'exploitant ou le responsable sécurité du site, et signé par le responsable des travaux. Son contenu obligatoire : identification précise de la zone, nature des travaux, durée prévue, risques identifiés (projections de particules incandescentes pouvant atteindre 10 mètres), mesures de protection à mettre en place, moyen d'extinction à portée de main, zones à protéger ou à dégager, personnes habilitées. Le permis de feu doit être clôturé après les travaux et archivé.",
        "Lors de travaux dans des zones protégées par des détecteurs automatiques, l'agent SSIAP1 peut être amené à inhiber temporairement une zone de détection pour éviter les fausses alarmes dues aux poussières, aux fumées de soudure ou à la vapeur d'eau. Cette mise hors service temporaire DOIT être consignée sur la main courante avec : la date et l'heure de mise hors service, la zone concernée (numéro de zone, localisation précise), le motif (travaux, type d'intervention), la durée prévue, et la personne qui a effectué l'inhibition. La zone inhibée doit faire l'objet d'une surveillance humaine renforcée pendant toute la durée de l'inhibition (ronde plus fréquente, présence physique si risque élevé).",
        "La ronde post-travaux est une obligation souvent négligée mais critique. Elle doit être effectuée pendant au moins 2 heures après la fin des travaux par points chauds. Le risque d'un feu couvant (braises dans une cloison, chaleur résiduelle dans un joint, projection de particule dans un espace inaccessible) est maximal dans les premières heures suivant les travaux. La ronde post-travaux vérifie : absence de fumée ou d'odeur de brûlé dans et autour de la zone, température des surfaces (contact de la main sur les cloisons voisines), état des matériaux combustibles proches de la zone de travail.",
        "Les mesures compensatoires s'appliquent lors de toute indisponibilité d'un équipement de sécurité incendie (détecteur inhibé, porte coupe-feu bloquée ouverte pour livraison, RIA mis hors service pour maintenance). Elles consistent à compenser la perte de protection par des moyens alternatifs : augmentation de la fréquence des rondes dans la zone concernée, positionnement d'un agent de surveillance physique dans la zone, réduction temporaire de l'effectif accueilli dans la zone si le risque est élevé, information de l'ensemble du personnel de la zone, signalement à la direction et inscription au registre de sécurité. La mesure compensatoire cesse dès que l'équipement est remis en service et vérifié.",
        "La coordination avec les entreprises extérieures est régie par le Code du travail. Pour les travaux dans un ERP ou un ERT, l'article R.4512-6 impose un plan de prévention lorsque la durée des travaux dépasse 400 heures par an ou lorsque les travaux comportent des risques particuliers (travaux en hauteur, travaux par points chauds, travaux à proximité d'installations dangereuses). L'agent SSIAP1 doit s'assurer que l'entreprise extérieure a bien pris connaissance des consignes de sécurité incendie du site avant d'intervenir.",
      ],
      keyPoints: [
        "Permis de feu : obligatoire avant tout travail par points chauds — zone, durée, risques, moyens extinction, signatures.",
        "Inhibition de zone : toujours consignée sur la main courante + surveillance humaine renforcée.",
        "Ronde post-travaux : 2 heures minimum après la fin des travaux à chaud.",
        "Mesures compensatoires : rondes plus fréquentes + agents de surveillance + information personnel.",
        "Entreprises extérieures : plan de prévention + transmission des consignes incendie du site.",
      ],
      legalRefs: [
        "Code du travail Art. R.4512-6 — plan de prévention pour les entreprises extérieures.",
        "Règlement de sécurité ERP — obligations relatives aux travaux en exploitation.",
        "Norme NF S 61-940 — maintenance des SSI : procédures de mise hors service temporaire.",
      ],
    },
    {
      id: "retours-experience-cas-pratiques",
      title: "6. Retours d'expérience et cas pratiques",
      estimatedMinutes: 20,
      chapterImagePath: "/elearning/ssiap1/ssiap1-conduite-tenir.svg",
      chapterImageAlt: "Cas pratiques et retours d'expérience — scénarios d'alarme, gestion des secours, communication",
      intro:
        "Analyser des situations réelles permet de consolider les réflexes. Ces cas pratiques sont inspirés d'incidents survenus dans des ERP et des IGH. Ils illustrent les erreurs fréquentes et les bonnes pratiques.",
      content: [
        "Cas n°1 — Fausse alarme répétée : un détecteur optique se déclenche plusieurs fois par semaine dans une cuisine sans qu'un incendie soit confirmé. La tendance naturelle est d'inhiber le détecteur en permanence 'pour ne pas déranger les cuisiniers'. C'est une erreur grave : un détecteur qui se déclenche fréquemment est peut-être défectueux (encrassement, sensibilité trop élevée), mais il peut aussi détecter une situation qui deviendra problématique. La bonne démarche : consigner chaque déclenchement sur la main courante, signaler au mainteneur SSI pour vérification et nettoyage éventuel, proposer si nécessaire le remplacement par un détecteur thermovélocimétrique mieux adapté aux cuisines. Ne jamais inhiber durablement sans corriger la cause.",
        "Cas n°2 — Alarme déclenchée hors heures d'ouverture : le PC sécurité reçoit une alarme restreinte à 2h du matin dans un grand magasin. L'agent de nuit doit : ne pas réarmer immédiatement l'alarme, noter l'heure et la zone concernée sur la main courante, se rendre physiquement sur la zone signalée pour investigation (lampe torche, prudence), appliquer la séquence DAPS si un feu est visible, déclencher l'alarme générale si un incendie est confirmé, appeler les pompiers (18). Erreur fréquente : réarmer l'alarme sans investigation pour 'éviter d'appeler les pompiers pour rien'. Un incendie couvant dans la zone commerciale peut se propager discrètement pendant des heures.",
        "Cas n°3 — Porte coupe-feu bloquée ouverte : lors d'une ronde, l'agent découvre une porte coupe-feu d'un couloir maintenue ouverte par une caisse posée devant elle. Cette porte permet l'accès entre la réserve et la surface de vente. Les arguments des employés : 'c'est plus pratique pour les livraisons'. La bonne pratique : retirer l'obstacle immédiatement, consigner sur la main courante, signaler à la direction. Si la porte doit rester ouverte pour des raisons d'exploitation légitimes, elle doit être équipée d'un dispositif de fermeture automatique (DAS électromagnétique commandé par le SSI) installé par un technicien qualifié. Une porte CF bloquée ouverte peut permettre la propagation du feu et des fumées sur une zone entière.",
        "Cas n°4 — PMR coincée lors d'une évacuation : lors d'un exercice d'évacuation, une personne en fauteuil roulant se retrouve seule dans un couloir du 4e étage, sans que personne n'ait pensé à l'EAS. L'erreur systémique révélée par l'exercice : les EAS n'ont pas été signalés dans les consignes d'évacuation, et les guide-files et serre-files n'ont pas été formés à l'identification et à l'accompagnement des PMR vers les EAS. La correction : actualiser les consignes d'évacuation en identifiant nominativement les PMR et en désignant un binôme responsable de chaque PMR. S'assurer que chaque EAS dispose d'un moyen de communication fonctionnel avec le PCSI.",
        "Cas n°5 — Gestion d'une alarme réelle avec les secours : un début d'incendie est confirmé dans une cuisine d'un restaurant d'entreprise. L'agent SSIAP1 a déclenché l'alarme générale et appelé le 18. À l'arrivée des pompiers, l'agent doit : se positionner à l'entrée principale pour les accueillir, indiquer immédiatement au chef d'intervention la zone du sinistre (niveau, localisation précise), remettre les clés et les plans de l'établissement, informer des personnes présentes (nombre approximatif, zones évacuées ou à évacuer, PMR éventuellement en EAS), indiquer les coupures déjà effectuées (électricité, gaz), mettre le CMSI à la disposition des secours, rester à leur disposition pendant toute la durée de l'intervention.",
      ],
      keyPoints: [
        "Alarme fréquente = problème à corriger (capteur encrassé ou inadapté) — jamais à ignorer.",
        "Alarme nocturne : investigation physique obligatoire avant tout réarmement.",
        "Porte CF bloquée = infraction grave — retrait immédiat de l'obstacle + signalement direction.",
        "PMR : EAS identifiés + binôme désigné dans les consignes + test communication lors des exercices.",
        "Accueil pompiers : entrée principale + zone + clés/plans + personnes + coupures effectuées.",
      ],
    },
    {
      id: "synthese-recyclage",
      title: "7. Synthèse — Points clés du recyclage SSIAP1",
      estimatedMinutes: 12,
      chapterImagePath: "/elearning/ssiap1/ssiap1-synthese-reflexes.svg",
      chapterImageAlt: "Synthèse recyclage SSIAP1 — 12 points clés à retenir et obligations de recyclage",
      intro:
        "Ce chapitre final récapitule les points essentiels à retenir du recyclage et rappelle vos obligations réglementaires pour maintenir votre qualification SSIAP1.",
      content: [
        "1. Recyclage obligatoire tous les 3 ans (14 heures minimum). Sans recyclage, votre qualification SSIAP1 est suspendue. L'employeur ne peut pas vous affecter à un poste SSIAP1 sans qualification en cours de validité.",
        "2. Les 5 classes de feux et le bon agent extincteur doivent être des réflexes automatiques : eau (A et B avec additif), mousse AFFF (A et B), CO₂ (B et électrique, sans résidu), poudre ABC (A+B+C, résidus corrosifs), agent F (graisses uniquement).",
        "3. La méthode DAPS (Dégoupiller, Acheminer à 3-4 m, Pointer vers la base, Supprimer en balayant) et la manipulation du RIA (tuyau déroulé avant d'ouvrir l'eau) doivent être pratiquées en exercice pour rester opérationnelles.",
        "4. SSI catégories A à E : savoir identifier la catégorie de votre SSI et connaître les équipements associés. SSI catégorie A = le plus complet (SDI complet + SMSI complet). Catégorie E = DAD seul.",
        "5. L'inhibition d'un détecteur ou d'une zone doit TOUJOURS être consignée sur la main courante, accompagnée d'une surveillance humaine renforcée et réarmée dès la fin de l'intervention.",
        "6. Le permis de feu est obligatoire avant tout travail par points chauds. La ronde post-travaux dure au moins 2 heures.",
        "7. La levée de doute est un acte professionnel : investigation physique sur la zone, pas de réarmement sans vérification. Durée maximale de l'alarme restreinte avant obligation de déclencher l'alarme générale : suivre les consignes propres à chaque établissement (généralement 5 minutes).",
        "8. Les PMR doivent être prises en charge spécifiquement lors de toute évacuation : les EAS doivent être connus, fonctionnels et leur communication avec le PCSI testée lors de chaque exercice d'évacuation.",
        "9. Lors de tout accueil des secours : se positionner à l'entrée principale, remettre les plans, indiquer la zone du sinistre, informer des coupures effectuées, rester disponible pendant toute l'intervention.",
        "10. La main courante est un document officiel. Toute consignation sur la main courante peut être requise lors d'une enquête ou d'une procédure judiciaire. Rédiger avec la méthode SOCA (Situation, Observation, Causes/Conséquences, Action) : objectivement, clairement, chronologiquement.",
      ],
      keyPoints: [
        "Recyclage : 14h tous les 3 ans — qualification suspendue sans recyclage valide.",
        "Classes de feux + agents extincteurs : réflexe automatique, pas de recherche en situation d'urgence.",
        "Inhibition = main courante + surveillance renforcée + réarmement dès que possible.",
        "Permis de feu obligatoire + ronde post-travaux 2h minimum.",
        "Levée de doute : investigation physique obligatoire avant réarmement.",
        "PMR et EAS : connaissance, test communication, désignation de binôme dans les consignes.",
        "Main courante : document officiel — méthode SOCA, objectivité, chronologie.",
      ],
      legalRefs: [
        "Arrêté du 2 mai 2005 modifié — recyclage SSIAP1 : 14 heures tous les 3 ans.",
        "Règlement de sécurité ERP — arrêté du 25 juin 1980 modifié.",
        "Norme NF S 61-930 à 61-940 — SSI : installation et maintenance.",
        "Code du travail Art. R4227-28 à R4227-41 — sécurité incendie et exercices.",
      ],
    },
  ],
};
