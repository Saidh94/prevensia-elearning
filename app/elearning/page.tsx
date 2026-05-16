import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modules E-learning Sécurité & Prévention — Catalogue | PREVENSIA",
  description:
    "Catalogue e-learning Prevensia : habilitation électrique, ATEX, SSIAP1, SSI, sprinkler, SST. Modules certifiants ou inclus dans la formation. Qualiopi.",
  alternates: { canonical: "https://prevensia-formation.fr/elearning" },
  openGraph: {
    title: "Modules E-learning Sécurité & Prévention — PREVENSIA FORMATION",
    description:
      "Habilitation électrique, ATEX, SSIAP1, SSI, sprinkler, SST. Modules e-learning certifiants ou inclus dans la formation présentielle. Qualiopi.",
    url: "https://prevensia-formation.fr/elearning",
  },
};

const formations = [
  {
    slug: "h0b0",
    category: "Habilitation électrique",
    title: "Habilitation électrique H0B0 / H0V",
    duration: "Durée e-learning : 3 h à 4 h",
    mode: "E-learning + entretien 30 min",
    price: "150 EUR HT",
    level: "Débutant",
    audience:
      "Personnel non électricien amené à évoluer dans un environnement présentant un risque électrique.",
    description:
      "Parcours de sensibilisation au risque électrique destiné aux personnels non électriciens. Le module pose les bases de la prévention, des comportements adaptés et de la conduite à tenir.",
    objectifs: [
      "Identifier les risques liés à l'électricité dans son environnement de travail",
      "Comprendre les prescriptions de sécurité applicables aux opérations d'ordre non électrique",
      "Adopter les bons comportements pour prévenir l'accident d'origine électrique",
    ],
    programme: [
      "Notions élémentaires sur le risque électrique",
      "Effets du courant électrique sur le corps humain",
      "Environnement de travail et zones à risque",
      "Limites des opérations autorisées en H0B0 / H0V",
      "Conduite à tenir en cas d'incident ou d'accident",
    ],
    note:
      "Module théorique de sensibilisation complété par un entretien de validation de 30 minutes.",
  },
  {
    slug: "bs-be-manœuvre",
    category: "Habilitation électrique",
    title: "Habilitation électrique BS et BE Manœuvre",
    duration: "E-learning : 5 h à 7 h + séquence encadrée : 45 min à 4 h",
    mode: "E-learning + classe virtuelle / visio",
    price: "320 EUR HT",
    level: "Intermédiaire",
    audience:
      "Personnel réalisant des interventions élémentaires ou des manœuvres d'exploitation dans le respect des prescriptions de sécurité.",
    description:
      "Parcours préparatoire aux interventions élémentaires et manœuvres simples, avec un accent sur les limites d'intervention, la préparation et la sécurité opérationnelle.",
    objectifs: [
      "Comprendre les limites d'intervention liées aux symboles BS et BE Manœuvre",
      "Appliquer les prescriptions de sécurité avant, pendant et après l'opération",
      "Identifier les situations nécessitant l'arrêt de l'intervention ou l'appel à un personnel habilité adapté",
    ],
    programme: [
      "Rappels sur le risque électrique et les mesures de prévention",
      "Rôle et limites d'un exécutant BS",
      "Rôle et limites d'un habilité BE Manœuvre",
      "Mise en sécurité, vérifications visuelles et environnement de travail",
      "Conduite à tenir en cas d'anomalie, d'incident ou d'accident",
    ],
    note:
      "Initial en classe virtuelle ou session entreprise, puis recyclage possible en visio accompagnée selon le besoin.",
  },
  {
    slug: "b1-b1v",
    category: "Habilitation électrique",
    title: "Habilitation électrique B1 / B1V",
    duration: "E-learning : 5 h 30 à 7 h + pratique",
    mode: "Support e-learning inclus + présentiel",
    price: "Inclus avec la formation présentielle",
    level: "Avancé",
    audience:
      "Électriciens exécutants amenés à réaliser des travaux électriques en basse tension sous direction.",
    description:
      "Parcours théorique ciblé sur le rôle d'exécutant B1 / B1V, le voisinage, la lecture du cadre de travail et la discipline d'exécution en sécurité.",
    objectifs: [
      "Comprendre le rôle d'exécutant B1 / B1V",
      "Respecter le cadre de travail fixé par le chargé de travaux",
      "Identifier le voisinage et stopper en cas d'écart",
    ],
    programme: [
      "Cadre B1 / B1V et rôle de l'exécutant",
      "Voisinage, pièces nues sous tension et limites d'action",
      "Préparation d'un travail électrique",
      "Exécution sous direction et conduite à tenir en cas d'anomalie",
    ],
    note:
      "Support e-learning inclus pour les apprenants inscrits au présentiel. Non vendu comme formation e-learning autonome.",
  },
  {
    slug: "b2-b2v",
    category: "Habilitation électrique",
    title: "Habilitation électrique B2 / B2V",
    duration: "E-learning : 6 h à 7 h 30 + pratique",
    mode: "Support e-learning inclus + présentiel",
    price: "Inclus avec la formation présentielle",
    level: "Avancé",
    audience:
      "Chargés de travaux, chefs d'équipe et responsables amenés à préparer et diriger des travaux électriques en basse tension.",
    description:
      "Parcours théorique ciblé sur le rôle B2 / B2V, l'organisation du chantier électrique, la coordination et la maîtrise du voisinage.",
    objectifs: [
      "Comprendre le rôle de chargé de travaux",
      "Organiser la zone, le briefing et les protections",
      "Diriger l'équipe et suspendre le chantier si le cadre se dégrade",
    ],
    programme: [
      "Cadre B2 / B2V et chaîne de responsabilité",
      "Préparation des travaux et coordination",
      "Direction du chantier et maîtrise du voisinage",
      "Écarts, urgences et compte rendu de fin d'opération",
    ],
    note:
      "Support e-learning inclus pour les apprenants inscrits au présentiel. Non vendu comme formation e-learning autonome.",
  },
  {
    slug: "br",
    category: "Habilitation électrique",
    title: "Habilitation électrique BR",
    duration: "E-learning : 6 h à 7 h 30 + pratique",
    mode: "Support e-learning inclus + présentiel",
    price: "Inclus avec la formation présentielle",
    level: "Avancé",
    audience:
      "Techniciens de maintenance et personnels amenés à conduire des interventions générales en basse tension.",
    description:
      "Parcours théorique ciblé sur le dépannage, le remplacement, les essais limites et les conditions strictes de l'intervention générale BR.",
    objectifs: [
      "Comprendre le cadre BR et ses limites",
      "Préparer une intervention générale en sécurité",
      "Refuser toute dérive vers des travaux structurés ou hors cadre",
    ],
    programme: [
      "Cadre BR et responsabilités de l'intervenant",
      "Préparation, mise en sécurité et vérification",
      "Dépannage, remplacement, mesurage et essais limites",
      "Anomalies, urgences et retour d'expérience",
    ],
    note:
      "Support e-learning inclus pour les apprenants inscrits au présentiel. Non vendu comme formation e-learning autonome.",
  },
  {
    slug: "bc",
    category: "Habilitation électrique",
    title: "Habilitation électrique BC",
    duration: "E-learning : 5 h 30 à 7 h + pratique",
    mode: "Support e-learning inclus + présentiel",
    price: "Inclus avec la formation présentielle",
    level: "Avancé",
    audience:
      "Responsables techniques et personnels amenés à assurer la consignation et la déconsignation en basse tension.",
    description:
      "Parcours théorique ciblé sur la chaîne de consignation, la vérification d'absence de tension, la traçabilité et la remise à disposition de l'installation.",
    objectifs: [
      "Comprendre le rôle de chargé de consignation",
      "Maîtriser la chaîne de consignation et la VAT",
      "Fiabiliser la documentation et les interfaces avec les travaux",
    ],
    programme: [
      "Cadre BC et rôle de chargé de consignation",
      "Identification, séparation, condamnation et VAT",
      "Documents, autorisations et coordination",
      "Écarts, doute et retour à la normale",
    ],
    note:
      "Support e-learning inclus pour les apprenants inscrits au présentiel. Non vendu comme formation e-learning autonome.",
  },
  {
    slug: "be-verification-mesurage",
    category: "Habilitation électrique",
    title: "Habilitation électrique BE Vérification / BE Mesurage",
    duration: "E-learning : 5 h 30 à 7 h + pratique",
    mode: "Support e-learning inclus + présentiel",
    price: "Inclus avec la formation présentielle",
    level: "Avancé",
    audience:
      "Techniciens amenés à réaliser des vérifications, mesurages et contrôles en basse tension.",
    description:
      "Parcours théorique ciblé sur la vérification, le mesurage, la lecture du cadre d'action, les instruments et les limites d'intervention.",
    objectifs: [
      "Comprendre le cadre BE Vérification / BE Mesurage",
      "Préparer un contrôle en sécurité",
      "Utiliser la bonne méthode et refuser toute dérive hors cadre",
    ],
    programme: [
      "Cadre BE et rôle du vérificateur ou mesureur",
      "Voisinage, mise en sécurité et préparation",
      "Mesurages, essais et contrôle documentaire",
      "Anomalies, résultat incohérent et compte rendu",
    ],
    note:
      "Support e-learning inclus pour les apprenants inscrits au présentiel. Non vendu comme formation e-learning autonome.",
  },
  {
    slug: "bt-multi-symboles",
    category: "Habilitation électrique",
    title: "Parcours BT multi-symboles B1 / B1V / B2 / B2V / BR / BC / BE",
    duration: "E-learning : 7 h à 10 h + présentiel : 1 jour",
    mode: "Support e-learning inclus + présentiel",
    price: "Inclus avec la formation présentielle",
    level: "Avancé",
    audience:
      "Personnel électricien amené à couvrir plusieurs rôles ou entreprises souhaitant un socle commun avant validation pratique par symbole.",
    description:
      "Parcours théorique transversal structuré autour des rôles, responsabilités, séquences de sécurité, consignation et organisation des opérations d'ordre électrique en basse tension.",
    objectifs: [
      "Maîtriser les prescriptions de sécurité applicables aux opérations d'ordre électrique",
      "Comprendre les rôles, responsabilités et limites des différents symboles d'habilitation",
      "Donner un socle commun avant requalification pratique par rôle",
    ],
    programme: [
      "Cadre réglementaire et principes de prévention du risque électrique",
      "Domaines de tension, zones, voisinage et conditions d'intervention",
      "Rôles B1, B2, BR, BC et actes de vérification / mesurage",
      "Consignation, intervention, remplacement, raccordement et organisation du travail",
      "Analyse des risques, conduite à tenir et cas pratiques",
    ],
    note:
      "Socle théorique premium inclus dans l'offre présentielle multi-symboles. Non vendu comme formation e-learning autonome.",
  },
  {
    slug: "incendie",
    category: "Prévention incendie",
    title: "Sécurité incendie, alerte et évacuation",
    duration: "Durée indicative : 4 à 7 heures",
    mode: "Support e-learning inclus + présentiel",
    price: "Inclus avec la formation encadrée",
    level: "Débutant à intermédiaire",
    audience:
      "Tout personnel amené à évoluer dans des locaux tertiaires, industriels, logistiques ou recevant du public.",
    description:
      "Module de sensibilisation à la prévention incendie, à l'alerte, à l'alarme, aux premiers réflexes et à l'évacuation, avec repères sur le Code du travail, les ERP, les IGH et les ICPE.",
    objectifs: [
      "Reconnaître les causes de départ de feu et les facteurs aggravants",
      "Réagir correctement en cas d'alerte ou d'alarme",
      "Connaître les principes d'évacuation et les comportements de prévention",
    ],
    programme: [
      "Naissance du feu et facteurs de propagation",
      "Alerte, alarme et premiers réflexes",
      "Évacuation et point de rassemblement",
      "Cadre réglementaire : Code du travail, ERP, IGH, ICPE",
      "Prévention incendie au quotidien",
    ],
    note:
      "Support e-learning inclus avec la formation sécurité incendie encadrée. Les consignes du site, exercices et mises en situation restent indispensables.",
  },
  {
    slug: "ssi-exploitation",
    category: "SSI",
    title: "Exploitation des SSI - fondamentaux",
    duration: "Durée indicative : 5 à 8 heures",
    mode: "Support e-learning inclus + présentiel",
    price: "Inclus avec la formation encadrée",
    level: "Intermédiaire",
    audience:
      "Exploitants, responsables de site, personnel technique ou utilisateurs amenés à interagir avec un système de sécurité incendie.",
    description:
      "Module d'initiation au fonctionnement des SSI, à l'exploitation des informations incendie et aux principaux référentiels français de la famille NF S 61.",
    objectifs: [
      "Comprendre le rôle d'un SSI et ses fonctions principales",
      "Distinguer SDI, SMSI et logique de mise en sécurité",
      "Adopter les bons réflexes face à une alarme, un dérangement ou un défaut",
    ],
    programme: [
      "Rôle et logique fonctionnelle d'un SSI",
      "Distinction SDI / SMSI / alarme / mise en sécurité",
      "Référentiels utiles : NF S 61-931, NF S 61-932, NF S 61-970",
      "Réflexes d'exploitation et limites utilisateur",
      "Cas pratiques d'anomalies d'exploitation",
    ],
    note:
      "Support e-learning inclus avec la formation SSI encadrée. Il ne remplace pas une coordination SSI, une étude de conception ou une maintenance spécialisée.",
  },
  {
    slug: "sprinkler",
    category: "Protection incendie",
    title: "Exploitation sprinkler - fondamentaux techniques",
    duration: "Durée indicative : 5 à 8 heures",
    mode: "Support e-learning inclus + présentiel",
    price: "Inclus avec la formation encadrée",
    level: "Intermédiaire",
    audience:
      "Personnel d'exploitation, maintenance, encadrement technique ou responsables de site.",
    description:
      "Module d'exploitation d'une installation sprinkler, de ses organes critiques, de ses anomalies et des référentiels techniques qui encadrent son maintien en état.",
    objectifs: [
      "Comprendre le rôle d'une installation sprinkler",
      "Reconnaître ses composants principaux et états anormaux",
      "Identifier les bons réflexes d'exploitation, d'essais et de remontée des anomalies",
    ],
    programme: [
      "Principe de fonctionnement d'une installation sprinkler",
      "Composants principaux et logique d'exploitation",
      "Anomalies, dérives et états non conformes",
      "Référentiels : APSAD R1, EN 12845, NFPA 13, FM",
      "Focus entrepôts, stockage et ICPE 1510",
      "Essais, surveillance et gestion des indisponibilités",
    ],
    note:
      "Support e-learning inclus avec la formation sprinkler encadrée. Il ne remplace pas une étude sprinkler ni un audit de conformité.",
  },
  {
    slug: "extinction-automatique-gaz",
    category: "Protection incendie",
    title: "Extinction automatique à gaz — exploitation et référentiels",
    duration: "Durée indicative : 4 à 6 heures",
    mode: "Support e-learning inclus + présentiel",
    price: "Inclus avec la formation encadrée",
    level: "Intermédiaire",
    audience:
      "Personnel d'exploitation, maintenance, encadrement technique ou responsables de locaux protégés par extinction automatique à gaz.",
    description:
      "Module dédié aux installations fixes d'extinction à gaz, à la sécurité des personnes, à l'intégrité du local protégé et aux repères APSAD R13 / NF EN 15004-1.",
    objectifs: [
      "Comprendre la logique d'un système d'extinction automatique à gaz",
      "Distinguer l'extinction à gaz d'une installation sprinkler",
      "Identifier les contraintes de local protégé, d'alarme, de temporisation et de réaccès",
    ],
    programme: [
      "Principe d'un système fixe d'extinction à gaz",
      "Détection, commande, temporisation et diffusion",
      "Local protégé et sécurité des personnes",
      "Repères APSAD R13 et NF EN 15004-1",
    ],
    note:
      "Support e-learning inclus avec le module SSI exploitation renforcé. Il ne remplace pas une étude de conception ni une maintenance spécialisée.",
  },
  {
    slug: "atex",
    category: "Prévention des risques",
    title: "ATEX Niveau 0 — Sensibilisation atmosphères explosives",
    duration: "Durée e-learning : 3 h",
    mode: "E-learning autonome + quiz de validation",
    price: "129 EUR HT",
    level: "Débutant",
    audience:
      "Tout personnel amené à circuler ou à travailler occasionnellement dans un environnement susceptible de présenter un risque d'explosion : industrie chimique, pétrochimique, agroalimentaire, traitement des eaux, menuiserie, métallurgie.",
    description:
      "Sensibilisation aux atmosphères explosives conforme à la directive 99/92/CE. Le module couvre le mécanisme des explosions, la classification des zones ATEX (gaz et poussières), les mesures de prévention et la signalisation réglementaire.",
    objectifs: [
      "Comprendre ce qu'est une atmosphère explosive et le mécanisme d'une explosion",
      "Identifier les zones ATEX (0, 1, 2 gaz et 20, 21, 22 poussières) et leurs contraintes",
      "Connaître les règles de comportement en zone ATEX et les EPI certifiés Ex",
    ],
    programme: [
      "Définition et contexte des atmosphères explosives",
      "Réglementation : directive 99/92/CE et Code du travail",
      "Mécanisme d'une explosion — les 6 conditions",
      "Classification des zones ATEX gaz et poussières",
      "Sources d'inflammation et mesures de prévention",
      "Équipements certifiés Ex, EPI antistatiques et signalisation",
      "Conduite à tenir en cas d'alarme ou d'accident",
    ],
    note:
      "Module e-learning autonome. Attestation de formation délivrée à l'issue du quiz de validation.",
  },
  {
    slug: "atex-niveau1",
    category: "Prévention des risques",
    title: "ATEX Niveau 1 — Travailleur exposé",
    duration: "E-learning 3 h + entretien individuel 30 min",
    mode: "E-learning + entretien de validation visio",
    price: "490 EUR HT",
    level: "Intermédiaire",
    audience:
      "Travailleurs amenés à intervenir régulièrement en zone ATEX classée : techniciens de maintenance, opérateurs de production, électriciens, mécaniciens, sous-traitants intervenants.",
    description:
      "Parcours ATEX Niveau 1 pour travailleurs exposés : bases réglementaires, identification des zones, mesures de prévention, EPI et comportements adaptés. Complété par un entretien individuel de validation donnant lieu à un avis d'habilitation ATEX valable 3 ans.",
    objectifs: [
      "Identifier les zones ATEX et comprendre les risques associés à son poste",
      "Appliquer les mesures de prévention et utiliser correctement les EPI certifiés Ex",
      "Connaître les procédures d'intervention en zone classée et la conduite à tenir en cas d'incident",
    ],
    programme: [
      "Définition et contexte des atmosphères explosives",
      "Réglementation : directive 99/92/CE et Code du travail",
      "Classification des zones ATEX gaz et poussières",
      "Équipements certifiés Ex et EPI antistatiques",
      "Mesures de prévention adaptées au poste",
      "Conduite à tenir en cas d'alarme ou d'accident",
      "Entretien individuel de validation (30 min visio)",
    ],
    note:
      "Avis d'habilitation ATEX Niveau 1 valable 3 ans délivré à l'issue de l'entretien de validation.",
  },
  {
    slug: "atex-niveau2",
    category: "Prévention des risques",
    title: "ATEX Niveau 2 — Chargé de travaux / Responsable",
    duration: "E-learning 3 h + classe virtuelle 2 h",
    mode: "E-learning + classe virtuelle collective",
    price: "À partir de 790 EUR HT",
    level: "Avancé",
    audience:
      "Responsables de travaux, chargés de chantier, responsables sécurité, coordinateurs, responsables ATEX et personnel d'encadrement amené à planifier et superviser des interventions en zone ATEX.",
    description:
      "Parcours ATEX Niveau 2 destiné aux encadrants et responsables de travaux en zone classée : réglementation approfondie, DRPE, plans de prévention, coordination des intervenants et gestion des situations d'urgence. Complété par une classe virtuelle collective de 2h.",
    objectifs: [
      "Maîtriser le cadre réglementaire ATEX et les obligations de l'employeur",
      "Élaborer ou valider le Document Relatif à la Protection contre les Explosions (DRPE)",
      "Organiser et superviser des interventions en zone classée (plans de prévention, permis de travail)",
    ],
    programme: [
      "Approfondissement réglementaire : DRPE, classification, responsabilités employeur",
      "Coordination des entreprises extérieures en zone ATEX",
      "Plans de prévention et autorisations de travail",
      "Gestion des équipements certifiés Ex et EPI",
      "Retour d'expérience et analyse d'accidents ATEX",
      "Classe virtuelle collective (2 h) : cas pratiques et échanges",
    ],
    note:
      "Avis d'habilitation ATEX Niveau 2 valable 3 ans délivré à l'issue de la classe virtuelle. Tarif sur devis pour les sessions intra-entreprise.",
  },
  {
    slug: "ssiap1",
    category: "Prévention des risques",
    title: "SSIAP1 Initial — Module e-learning inclus dans la formation certifiante",
    duration: "Durée e-learning : 2 h 30 à 3 h",
    mode: "Support e-learning inclus dans la formation initiale (70h)",
    price: "À partir de 690 EUR HT",
    level: "Débutant",
    audience:
      "Agents de sécurité incendie débutants, personnel d'ERP (hôtels, centres commerciaux, écoles, hôpitaux) souhaitant obtenir la qualification SSIAP1 via la formation certifiante complète (70h).",
    description:
      "Module e-learning théorique inclus dans la formation SSIAP1 certifiante (70h) dispensée par PREVENSIA FORMATION, organisme agréé préfecture. Couvre les classes de feux, agents extincteurs, méthode DAPS, SSI, procédures d'évacuation et rôle de l'agent SSIAP1 en ERP.",
    objectifs: [
      "Identifier les classes de feux et choisir l'agent extincteur adapté",
      "Appliquer la méthode DAPS pour utiliser un extincteur en sécurité",
      "Connaître les composants du SSI et les procédures d'évacuation en ERP",
    ],
    programme: [
      "Le SSIAP : rôles, niveaux et cadre réglementaire",
      "Réglementation ERP / IGH — obligations employeur",
      "Le feu : tétraèdre, propagation et méthodes d'extinction",
      "Les 5 classes de feux A, B, C, D, F",
      "Extincteurs et RIA — types, adéquation et méthode DAPS",
      "Système de Sécurité Incendie (SSI) — détection et alarme",
      "Procédures d'évacuation : guide-file, serre-file, rassemblement",
      "Conduite à tenir en cas d'incendie — séquence Alarmer/Alerter/Attaquer",
    ],
    note:
      "Support e-learning inclus pour chaque stagiaire inscrit à la formation SSIAP1 (70h). PREVENSIA FORMATION est organisme agréé préfecture et délivre la qualification officielle SSIAP1 à l'issue de l'examen.",
  },
  {
    slug: "recyclage-ssiap1",
    category: "Prévention des risques",
    title: "Recyclage SSIAP1 — Remise à niveau sécurité incendie ERP",
    duration: "Durée e-learning : 2 h 30 à 3 h",
    mode: "Support e-learning inclus dans le recyclage (14h)",
    price: "À partir de 250 EUR HT",
    level: "Intermédiaire",
    audience:
      "Agents SSIAP1 titulaires devant effectuer leur recyclage obligatoire tous les 3 ans pour maintenir leur titre de qualification.",
    description:
      "Module e-learning de remise à niveau théorique inclus dans le recyclage SSIAP1 (14h obligatoires tous les 3 ans) dispensé par PREVENSIA FORMATION, organisme agréé préfecture. Révision des fondamentaux, actualisation réglementaire et préparation à la partie théorique du recyclage encadré.",
    objectifs: [
      "Réviser les fondamentaux du SSIAP1 : classes de feux, agents extincteurs, SSI",
      "Se mettre à jour sur les évolutions réglementaires ERP et les nouvelles consignes",
      "Préparer la partie théorique du recyclage encadré (14h) en présentiel",
    ],
    programme: [
      "Rappel du cadre réglementaire SSIAP et évolutions récentes",
      "Révision des classes de feux et des agents extincteurs",
      "Actualisation sur les équipements SSI — détection, alarme, désenfumage",
      "Procédures d'évacuation : points de contrôle et retours d'expérience",
      "Gestes professionnels SSIAP1 — points clés de la remise à niveau",
      "Quiz de révision avant la session présentielle",
    ],
    note:
      "Support e-learning inclus dans le recyclage SSIAP1 (14h). Le recyclage complet (e-learning + présentiel) est proposé à 250 EUR HT.",
  },
  {
    slug: "sst",
    category: "Secours au travail",
    title: "SST - Sauveteur Secouriste du Travail",
    duration: "Durée indicative : 7 à 14 heures selon parcours",
    mode: "Support e-learning inclus + présentiel",
    price: "Inclus avec la formation encadrée",
    level: "Débutant à intermédiaire",
    audience:
      "Salariés amenés à participer à la prévention des risques et à la prise en charge initiale d'une victime.",
    description:
      "Parcours théorique d'introduction aux principes SST : protéger, examiner, alerter, secourir et participer à la prévention dans l'entreprise.",
    objectifs: [
      "Repérer une situation dangereuse et éviter le suraccident",
      "Adopter la logique protéger, examiner, alerter, secourir",
      "Comprendre le cadre général d'intervention du SST",
    ],
    programme: [
      "Protéger",
      "Examiner",
      "Alerter ou faire alerter",
      "Secourir",
      "Prévention et rôle du salarié dans l'entreprise",
    ],
    note:
      "Support e-learning inclus avec la formation SST encadrée. La pratique reste indispensable pour maîtriser les gestes et valider réellement la compétence SST.",
  },
];

const pointsForts = [
  "Offres structurées selon le niveau d'habilitation visé",
  "Contenus structurés autour des risques réels en entreprise",
  "Approche progressive selon les niveaux, métiers et contraintes terrain",
  "Modules pédagogiques avec chapitres, synthèses et quiz sérieux",
  "Validation encadrée selon le parcours : entretien, visio ou présentiel",
];

const catégories = [
  "Habilitation électrique",
  "Prévention incendie",
  "SSI",
  "Protection incendie",
  "Prévention des risques",
  "Secours au travail",
];

const inrsSelections = [
  {
    title: "INRS - Risque électrique",
    description:
      "Sélection officielle INRS pour compléter les parcours d'habilitation électrique et la prévention du risque électrique.",
    href: "https://www.youtube.com/@INRSFrance/search?query=Risque%20%C3%A9lectrique",
    badge: "INRS France",
  },
  {
    title: "INRS - Risque incendie et évacuation",
    description:
      "Sélection officielle INRS utile pour renforcer les modules incendie, SSI et évacuation.",
    href: "https://www.youtube.com/@INRSFrance/search?query=risque%20incendie",
    badge: "INRS France",
  },
  {
    title: "INRS - SST et secourisme au travail",
    description:
      "Ressources utiles sur le secourisme au travail, la prévention et la logique d'intervention du SST.",
    href: "https://www.youtube.com/@INRSFrance/search?query=SST",
    badge: "INRS France",
  },
];

const habilitationPath = [
  {
    symbol: "H0B0 / H0V",
    label: "Personnel non électricien",
    description:
      "Sensibilisation au risque électrique pour toute personne évoluant dans un environnement électrique sans réaliser d'opérations électriques.",
    keyPoints: [
      "Aucune intervention sur installation",
      "Respect des zones et distances",
      "Conduite à tenir en cas d'accident",
    ],
    slug: "h0b0",
    availability: "",
    colors: {
      wrapper: "border-slate-200 bg-slate-50",
      badge: "bg-slate-800 text-white",
      dot: "bg-slate-600",
      cta: "bg-slate-900 text-white hover:bg-slate-800",
      tag: "text-slate-500",
    },
  },
  {
    symbol: "BS / BE Manœuvre",
    label: "Non-électricien — actes simples autorisés",
    description:
      "Personnel non électricien autorisé à réaliser des remplacements simples (BS) ou des manœuvres d'exploitation sur ordre (BE), dans un cadre strictement limité par la norme.",
    keyPoints: [
      "BS : remplacement à l'identique hors tension",
      "BE : manœuvre sur organe identifié, sur ordre",
      "VAT avant toute intervention BS",
      "Arrêt immédiat si situation imprévue",
    ],
    slug: "bs-be-manœuvre",
    availability: "",
    colors: {
      wrapper: "border-blue-200 bg-blue-50",
      badge: "bg-blue-600 text-white",
      dot: "bg-blue-600",
      cta: "bg-blue-700 text-white hover:bg-blue-800",
      tag: "text-blue-500",
    },
  },
  {
    symbol: "B1 / B1V",
    label: "Exécutant électricien",
    description:
      "Réalisation de travaux électriques en BT sous la direction d'un chargé de travaux habilité B2.",
    keyPoints: [
      "Travaux sous direction B2",
      "Respect du cadre de travail",
      "Identification du voisinage",
      "Arrêt en cas d'écart",
    ],
    slug: null,
    availability: "Inclus avec la formation présentielle",
    colors: {
      wrapper: "border-green-200 bg-green-50",
      badge: "bg-green-600 text-white",
      dot: "bg-green-600",
      cta: "",
      tag: "text-green-700",
    },
  },
  {
    symbol: "B2 / B2V",
    label: "Chargé de travaux",
    description:
      "Direction des travaux électriques en BT, analyse des risques, délivrance des autorisations de travail et responsabilité de l'équipe.",
    keyPoints: [
      "Direction des travaux BT",
      "Analyse de risque préalable",
      "Délivrance des ATT",
      "Levée des consignations",
    ],
    slug: null,
    availability: "Inclus avec la formation présentielle",
    colors: {
      wrapper: "border-amber-200 bg-amber-50",
      badge: "bg-amber-500 text-slate-950",
      dot: "bg-amber-500",
      cta: "",
      tag: "text-amber-700",
    },
  },
] as const;

export default function ElearningPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.22),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.16),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl">
            <nav aria-label="Fil d'Ariane" className="mb-6 text-sm text-slate-400">
              <Link href="/" className="hover:text-white">Accueil</Link>
              <span className="mx-2">›</span>
              <span className="text-white">E-learning</span>
            </nav>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-400">
              PREVENSIA FORMATION
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              E-learning PREVENSIA : support inclus et parcours habilitation encadrés
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Les modules en ligne PREVENSIA renforcent les connaissances avant
              les formations encadrées : habilitation électrique, sécurité incendie,
              SSI, sprinkler et SST.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-400">
              H0B0 / H0V et BS / BE Manœuvre sont les parcours pouvant être
              suivis en format e-learning encadré avec entretien, visio ou classe
              virtuelle. Les autres modules sont des supports inclus avec
              la formation présentielle ou classe virtuelle, accessibles aux
              apprenants inscrits pour préparer, réviser et consolider les acquis.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/inscription"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:-translate-y-0.5"
              >
                Créer un compte
              </Link>

              <Link
                href="/connexion"
                className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Se connecter
              </Link>

              <Link
                href="/demande-devis"
                className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Un avantage inclus pour les apprenants inscrits
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Les modules e-learning PREVENSIA accompagnent les apprenants avant,
              pendant ou après leur formation, avec des contenus structurés, des
              quiz et des repères pratiques adaptés aux risques du terrain.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Pour les parcours B1, B2, BR, BC, BE, incendie, SSI, sprinkler et
              SST, l&apos;accès aux modules est inclus avec la formation encadrée —
              un support digital consultable en amont, en cours et en révision.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {catégories.map((category) => (
                <span
                  key={category}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-700"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-slate-900">Points forts</h2>

            <ul className="mt-5 space-y-3">
              {pointsForts.map((point) => (
                <li
                  key={point}
                  className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-red-600">
            Catalogue e-learning
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Nos modules disponibles
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Les parcours H0B0 / H0V et BS / BE Manœuvre peuvent être suivis en
            e-learning encadré. Les autres modules sont inclus avec la formation
            encadrée correspondante pour préparer et consolider les acquis.
          </p>
        </div>

        <div className="grid gap-6">
          {formations.map((formation) => (
            <article
              key={formation.slug}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-8"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-4xl">
                  <div className="flex flex-wrap gap-3">
                    <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-700">
                      {formation.mode}
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold tracking-wide text-slate-700">
                      {formation.duration}
                    </span>
                    {"price" in formation ? (
                      <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold tracking-wide text-amber-700">
                        {formation.price}
                      </span>
                    ) : null}
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold tracking-wide text-blue-700">
                      {formation.level}
                    </span>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold tracking-wide text-emerald-700">
                      {formation.category}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-slate-900">
                    {formation.title}
                  </h3>

                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {formation.description}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    <span className="font-semibold text-slate-900">
                      Public concerné :
                    </span>{" "}
                    {formation.audience}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <Link
                    href={`/modules/${formation.slug}`}
                    className="rounded-2xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                  >
                    Voir le module
                  </Link>

                  <Link
                    href="/connexion"
                    className="rounded-2xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                  >
                    Se connecter
                  </Link>

                  <Link
                    href="/inscription"
                    className="rounded-2xl bg-green-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800"
                  >
                    Créer un compte
                  </Link>
                </div>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <h4 className="text-base font-bold text-slate-900">
                    Objectifs pédagogiques
                  </h4>

                  <ul className="mt-4 space-y-3">
                    {formation.objectifs.map((item) => (
                      <li
                        key={item}
                        className="text-sm leading-6 text-slate-700"
                      >
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <h4 className="text-base font-bold text-slate-900">
                    Programme indicatif
                  </h4>

                  <ul className="mt-4 space-y-3">
                    {formation.programme.map((item) => (
                      <li
                        key={item}
                        className="text-sm leading-6 text-slate-700"
                      >
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-sm leading-6 text-amber-900">
                  <span className="font-semibold">À noter :</span>{" "}
                  {formation.note}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-red-600">
            Ressources vidéo INRS
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Compléter les parcours avec des ressources officielles
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            En plus des modules PREVENSIA, nous orientons aussi les apprenants
            et les entreprises vers des ressources officielles INRS pour
            consolider les repères électriques, incendie et SST.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {inrsSelections.map((item) => (
              <article
                key={item.href}
                className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6"
              >
                <span className="inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-red-700">
                  {item.badge}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Voir la sélection INRS
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-red-600">
            Parcours habilitation électrique
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            De H0B0 à B2 : une progression pédagogique structurée
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Les habilitations NF C 18-510 suivent une logique de responsabilité
            croissante, du personnel non électricien jusqu&apos;au chargé de travaux.
            Chaque niveau conditionne les opérations autorisées et les mesures
            de prévention associées.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {habilitationPath.map((level, index) => (
              <div key={level.symbol} className="relative flex flex-col">
                {index < habilitationPath.length - 1 ? (
                  <div className="absolute right-0 top-10 hidden h-0.5 w-6 translate-x-full bg-slate-200 lg:block" />
                ) : null}
                <div
                  className={`flex-1 rounded-[1.5rem] border p-5 ${level.colors.wrapper}`}
                >
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] ${level.colors.badge}`}
                  >
                    Niveau {index + 1}
                  </span>
                  <p className="mt-3 text-2xl font-black tracking-tight text-slate-950">
                    {level.symbol}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {level.label}
                  </p>
                  <p className="mt-3 text-xs leading-5 text-slate-600">
                    {level.description}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {level.keyPoints.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-xs text-slate-700"
                      >
                        <span
                          className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${level.colors.dot}`}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                  {level.slug ? (
                    <Link
                      href={`/modules/${level.slug}`}
                      className={`mt-5 inline-flex w-full items-center justify-center rounded-2xl px-3 py-2 text-xs font-semibold transition hover:-translate-y-0.5 ${level.colors.cta}`}
                    >
                      Accéder au module →
                    </Link>
                  ) : (
                    <p
                      className={`mt-5 text-center text-xs font-semibold ${level.colors.tag}`}
                    >
                      {level.availability}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-sm sm:p-10">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-red-400">
                Besoin d&apos;un accompagnement
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Vous souhaitez déployer ces modules dans votre entreprise ?
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                PREVENSIA FORMATION peut vous accompagner pour structurer un
                parcours adapté à vos salariés, à vos opérations, à vos risques
                et à votre environnement réglementaire ou technique.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/demande-devis"
                  className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
                >
                  Demander un devis
                </Link>

                <Link
                  href="/connexion"
                  className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Accéder à mon espace
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

