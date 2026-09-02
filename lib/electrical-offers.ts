export type ElectricalCommercialSegment =
  | "non-électriciens"
  | "électriciens-bt"
  | "haute-tension";

export type ElectricalCommercialOffer = {
  slug: string;
  segment: ElectricalCommercialSegment;
  title: string;
  shortTitle: string;
  audience: string;
  objective: string;
  jobs: string;
  delivery: string;
  initialDuration: string;
  recycleDuration?: string;
  interPrice: string;
  intraPrice: string;
  participants: string;
  availability: "direct" | "quote";
  ctaHref: string;
  ctaLabel: string;
  detailValue: string;
  note: string;
};

export const electricalCommercialOffers: ElectricalCommercialOffer[] = [
  {
    slug: "h0b0-h0v",
    segment: "non-électriciens",
    title: "Habilitations H0 B0 H0V",
    shortTitle: "H0 B0 H0V",
    audience: "Formation habilitation électrique pour non-électriciens",
    objective:
      "Diriger ou réaliser des opérations et travaux d'ordre non électrique dans des environnements comportant un risque électrique, y compris au voisinage lorsque le symbole H0V est requis.",
    jobs:
      "Agent d'entretien, opérateur BTP, technicien helpdesk, personnel sécurité, logistique, nettoyage technique, second œuvre.",
    delivery: "E-learning + entretien de validation 30 min",
    initialDuration: "1 jour en initiale",
    recycleDuration: "1 jour en recyclage",
    interPrice: "190 EUR HT",
    intraPrice: "À partir de 890 EUR HT / groupe",
    participants: "Individuel ou groupe",
    availability: "direct",
    ctaHref: "/inscription?formation=H0B0%20/%20H0V",
    ctaLabel: "Découvrir la formation",
    detailValue: "h0b0-h0v",
    note:
      "Positionnée comme une offre non-électricien courte, avec validation encadrée et logique conforme à la NF C 18-510 + A1:2020 + A2:2023.",
  },
  {
    slug: "bs-be-manoeuvre",
    segment: "non-électriciens",
    title: "Habilitations BS et/ou BE Manœuvre",
    shortTitle: "BS / BE Manœuvre",
    audience: "Formation habilitation électrique pour non-électriciens",
    objective:
      "Réaliser en sécurité des interventions elementaires de remplacement ou raccordement (BS) et des manœuvres simples d'exploitation (BE Manœuvre).",
    jobs:
      "Gardien d'immeuble, plombier, peintre, agent de maintenance, technicien multiservice, personnel de maintenance de premier niveau.",
    delivery: "E-learning + classe virtuelle, visio de recyclage ou session entreprise",
    initialDuration: "2 jours en initiale",
    recycleDuration: "1,5 jour en recyclage",
    interPrice: "350 EUR HT (initiale) / 250 EUR HT (recyclage)",
    intraPrice: "À partir de 1 400 EUR HT / groupe (initiale) / 800 EUR HT / groupe (recyclage)",
    participants: "Individuel ou groupe",
    availability: "direct",
    ctaHref: "/inscription?formation=BS%20/%20BE%20Manoeuvre",
    ctaLabel: "Découvrir la formation",
    detailValue: "bs-be-manoeuvre",
    note:
      "Lecture claire des limites BS, du cadre BE Manœuvre, des documents utiles et des cas d'arret obligatoires.",
  },
  {
    slug: "bf-hf",
    segment: "non-électriciens",
    title: "Habilitations BF HF",
    shortTitle: "BF / HF",
    audience: "Formation habilitation électrique pour non-électriciens",
    objective:
      "Réaliser des opérations et travaux non électriques sur des canalisations électriques enterrees dans un cadre organisé et sécurisé.",
    jobs:
      "Professionnels du terrassement, du ripage, du nettoyage, du soutenement et des interventions de chantier au voisinage de réseaux enterres.",
    delivery: "Parcours sur devis selon chantier, réseaux et organisation du site",
    initialDuration: "1 jour en initiale",
    recycleDuration: "1 jour en recyclage",
    interPrice: "190 EUR HT",
    intraPrice: "À partir de 890 EUR HT / groupe",
    participants: "Selon chantier et contexte réseaux",
    availability: "quote",
    ctaHref: "/demande-devis?type=habilitation&detail=bf-hf&formation=BF%20/%20HF",
    ctaLabel: "Découvrir la formation",
    detailValue: "bf-hf",
    note:
      "Offre cadrée sur devis, en fonction de la nature exacte des opérations et des contraintes de réseaux enterres.",
  },
  {
    slug: "bt-multi-symboles",
    segment: "électriciens-bt",
    title: "Habilitations B1 B1V B2 B2V BR BC BE",
    shortTitle: "B1 / B1V / B2 / B2V / BR / BC / BE",
    audience: "Formation habilitation électrique pour électriciens",
    objective:
      "Diriger ou réaliser en sécurité des interventions, des travaux, des consignations et des essais sur des installations basse tension. Cette offre permet de préparer un ou plusieurs symboles en fonction des missions reelles confiees.",
    jobs:
      "Électricien sur chantier électrique, technicien de maintenance, chargé d'essai, technicien polyvalent, encadrant de proximite, responsable maintenance.",
    delivery: "E-learning + journée présentielle",
    initialDuration: "3 jours en initiale",
    recycleDuration: "1,5 a 2 jours en recyclage",
    interPrice: "790 EUR HT (initiale) / 590 EUR HT (recyclage)",
    intraPrice: "À partir de 3 200 EUR HT / groupe (initiale) / 2 200 EUR HT / groupe (recyclage)",
    participants: "10 max",
    availability: "direct",
    ctaHref:
      "/inscription?formation=B1%20/%20B1V%20/%20B2%20/%20B2V%20/%20BR%20/%20BC",
    ctaLabel: "Découvrir la formation",
    detailValue: "b1-b1v-b2-b2v-br-bc",
    note:
      "Parcours BT mutualise pour les postes combinant exécution, chargé de travaux, intervention generale, consignation ou besoins BE selon le périmètre reel.",
  },
  {
    slug: "b1-b1v",
    segment: "électriciens-bt",
    title: "Habilitations B1 B1V",
    shortTitle: "B1 / B1V",
    audience: "Formation habilitation électrique pour électriciens",
    objective:
      "Exécuter en sécurité des travaux d'installation ou d'extension significative sur l'ensemble ou une partie d'une installation électrique.",
    jobs:
      "Électricien sur chantier électrique, technicien de maintenance sur installation bâtiment, monteur-cableur, exécutant électrique BT.",
    delivery: "Parcours mixte e-learning + présentiel",
    initialDuration: "3 jours en initiale",
    recycleDuration: "2 jours en recyclage",
    interPrice: "690 EUR HT (initiale) / 450 EUR HT (recyclage)",
    intraPrice: "À partir de 2 600 EUR HT / groupe (initiale) / 1 800 EUR HT / groupe (recyclage)",
    participants: "Selon symbole et organisation",
    availability: "quote",
    ctaHref:
      "/demande-devis?type=habilitation&detail=b1-b1v&formation=B1%20/%20B1V",
    ctaLabel: "Découvrir la formation",
    detailValue: "b1-b1v",
    note:
      "Le symbole B1V supposé en plus la maîtrise des prescriptions au voisinage. Le parcours est ajusté aux travaux reels confies.",
  },
  {
    slug: "b2-b2v",
    segment: "électriciens-bt",
    title: "Habilitations B2 B2V",
    shortTitle: "B2 / B2V",
    audience: "Formation habilitation électrique pour électriciens",
    objective:
      "Assurer la direction de travaux d'installation ou d'extension significative d'un réseau électrique en basse tension, avec organisation, balisage, coordination et surveillance.",
    jobs:
      "Chef de chantier électrique, chef d'equipe électriciens, conducteurs de travaux, ingenieur bureau d'etudes, chargé de travaux BT.",
    delivery: "Parcours mixte e-learning + présentiel",
    initialDuration: "3 jours en initiale",
    recycleDuration: "2 jours en recyclage",
    interPrice: "750 EUR HT (initiale) / 490 EUR HT (recyclage)",
    intraPrice: "À partir de 2 900 EUR HT / groupe (initiale) / 2 000 EUR HT / groupe (recyclage)",
    participants: "Selon symbole et organisation",
    availability: "quote",
    ctaHref:
      "/demande-devis?type=habilitation&detail=b2-b2v&formation=B2%20/%20B2V",
    ctaLabel: "Découvrir la formation",
    detailValue: "b2-b2v",
    note:
      "Le chargé de travaux ne se confond pas avec l'exécutant. Le parcours insiste sur l'organisation, la surveillance et la coordination documentaire.",
  },
  {
    slug: "br",
    segment: "électriciens-bt",
    title: "Habilitation BR",
    shortTitle: "BR",
    audience: "Formation habilitation électrique pour électriciens",
    objective:
      "Réaliser en sécurité des interventions de dépannage, de remplacement de materiels électriques et de connexion avec presence de tension dans le cadre BR.",
    jobs:
      "Technicien de maintenance, électricien en chargé de la detection de panne et du dépannage, électricien photovoltaique, technicien SAV.",
    delivery: "Parcours mixte e-learning + présentiel",
    initialDuration: "3 jours en initiale",
    recycleDuration: "2 jours en recyclage",
    interPrice: "790 EUR HT (initiale) / 490 EUR HT (recyclage)",
    intraPrice: "À partir de 3 000 EUR HT / groupe (initiale) / 2 100 EUR HT / groupe (recyclage)",
    participants: "Selon interventions reelles",
    availability: "quote",
    ctaHref: "/demande-devis?type=habilitation&detail=br&formation=BR",
    ctaLabel: "Découvrir la formation",
    detailValue: "br",
    note:
      "Le symbole BR vise des interventions generales définies. Il ne remplace ni un cadre BS, ni un cadre B2, ni un rôle de consignation BC.",
  },
  {
    slug: "bc",
    segment: "électriciens-bt",
    title: "Habilitation BC",
    shortTitle: "BC",
    audience: "Formation habilitation électrique pour électriciens",
    objective:
      "Assurer la mise en œuvre des procédures de consignation et de déconsignation dans le respect de la sequence normee et des documents associes.",
    jobs:
      "Responsable technique, chef de chantier, chargé de consignation, référent électrique de site.",
    delivery: "Parcours mixte e-learning + présentiel",
    initialDuration: "3 jours en initiale",
    recycleDuration: "2 jours en recyclage",
    interPrice: "720 EUR HT (initiale) / 490 EUR HT (recyclage)",
    intraPrice: "À partir de 2 700 EUR HT / groupe (initiale) / 1 900 EUR HT / groupe (recyclage)",
    participants: "Selon site et procédures",
    availability: "quote",
    ctaHref: "/demande-devis?type=habilitation&detail=bc&formation=BC",
    ctaLabel: "Découvrir la formation",
    detailValue: "bc",
    note:
      "Le rôle BC couvre la sequence de consignation et de déconsignation. Il doit etre aligne sur les procédures du site et les missions confiees.",
  },
  {
    slug: "be-verification-mesurage",
    segment: "électriciens-bt",
    title: "Habilitation BE Vérification / BE Mesurage",
    shortTitle: "BE Vérification / BE Mesurage",
    audience: "Formation habilitation électrique pour électriciens",
    objective:
      "Réaliser en sécurité des vérifications et des mesurages sur des installations électriques basse tension dans le cadre d'attributs BE clairement définis.",
    jobs:
      "Inspection reglementaire d'installations, technicien d'organisme de controle, agent de controle qualite, metrologue, diagnostiqueur.",
    delivery: "Parcours sur devis selon contexte technique",
    initialDuration: "3 jours en initiale",
    recycleDuration: "2 jours en recyclage",
    interPrice: "750 EUR HT (initiale) / 490 EUR HT (recyclage)",
    intraPrice: "À partir de 2 900 EUR HT / groupe (initiale) / 2 000 EUR HT / groupe (recyclage)",
    participants: "Selon besoin",
    availability: "quote",
    ctaHref:
      "/demande-devis?type=habilitation&detail=be-verification-mesurage&formation=BE%20Verification%20/%20BE%20Mesurage",
    ctaLabel: "Découvrir la formation",
    detailValue: "be-verification-mesurage",
    note:
      "Offre proposee lorsque les opérations de vérification ou de mesurage sont clairement formalisees et reliees au poste reel.",
  },
  {
    slug: "h1v-h2v-hc",
    segment: "haute-tension",
    title: "Habilitations H1V H2V HC",
    shortTitle: "H1V / H2V / HC",
    audience: "Formation habilitation électrique pour électriciens - Haute Tension",
    objective:
      "Diriger ou réaliser en sécurité des travaux, maintenances et consignations sur des installations Haute Tension A dans un cadre organisé et fortement procéduré.",
    jobs:
      "Électricien HTA, technicien de maintenance industrielle, chargé de consignation HT, chargé de travaux HT, exploitation d'installations techniques.",
    delivery: "Parcours sur devis avec calibrage HTA / procédures site",
    initialDuration: "4 jours en initiale",
    recycleDuration: "2 jours en recyclage",
    interPrice: "890 EUR HT (initiale) / 590 EUR HT (recyclage)",
    intraPrice: "Sur devis",
    participants: "Selon site, HTA et organisation",
    availability: "quote",
    ctaHref:
      "/demande-devis?type=habilitation&detail=h1v-h2v-hc&formation=H1V%20/%20H2V%20/%20HC",
    ctaLabel: "Découvrir la formation",
    detailValue: "h1v-h2v-hc",
    note:
      "Positionnement HTA sur devis, avec cadrage technique et organisationnel plus exigeant que les parcours BT.",
  },
];

export const homepageElectricalSummary =
  "Offres distinctes pour H0 B0 H0V, BS / BE Manœuvre, BF / HF, B1 / B1V, B2 / B2V, BR, BC, B2T, BE Essai / Mesure / Vérification et HTA. Chaque parcours est adapté au périmètre d'habilitation, au niveau de responsabilité et aux exigences de la NF C 18-510 + A1:2020 + A2:2023.";
