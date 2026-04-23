export type ElectricalCommercialSegment =
  | "non-electriciens"
  | "electriciens-bt"
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
    segment: "non-electriciens",
    title: "Habilitations H0 B0 H0V",
    shortTitle: "H0 B0 H0V",
    audience: "Formation habilitation electrique pour non-electriciens",
    objective:
      "Diriger ou realiser des operations et travaux d'ordre non electrique dans des environnements comportant un risque electrique, y compris au voisinage lorsque le symbole H0V est requis.",
    jobs:
      "Agent d'entretien, operateur BTP, technicien helpdesk, personnel securite, logistique, nettoyage technique, second oeuvre.",
    delivery: "E-learning + entretien de validation 30 min",
    initialDuration: "1 jour en initiale",
    recycleDuration: "1 jour en recyclage",
    interPrice: "180 EUR HT",
    intraPrice: "A partir de 790 EUR HT / groupe",
    participants: "Individuel ou groupe",
    availability: "direct",
    ctaHref: "/inscription?formation=H0B0%20/%20H0V",
    ctaLabel: "Decouvrir la formation",
    detailValue: "h0b0-h0v",
    note:
      "Positionnee comme une offre non-electricien courte, avec validation encadree et logique conforme a la NF C 18-510.",
  },
  {
    slug: "bs-be-manoeuvre",
    segment: "non-electriciens",
    title: "Habilitations BS et/ou BE Manoeuvre",
    shortTitle: "BS / BE Manoeuvre",
    audience: "Formation habilitation electrique pour non-electriciens",
    objective:
      "Realiser en securite des interventions elementaires de remplacement ou raccordement (BS) et des manoeuvres simples d'exploitation (BE Manoeuvre).",
    jobs:
      "Gardien d'immeuble, plombier, peintre, agent de maintenance, technicien multiservice, personnel de maintenance de premier niveau.",
    delivery: "E-learning + classe virtuelle, visio de recyclage ou session entreprise",
    initialDuration: "2 jours en initiale",
    recycleDuration: "1,5 jour en recyclage",
    interPrice: "350 EUR HT (initiale) / 250 EUR HT (recyclage)",
    intraPrice: "A partir de 1 400 EUR HT / groupe (initiale) / 800 EUR HT / groupe (recyclage)",
    participants: "Individuel ou groupe",
    availability: "direct",
    ctaHref: "/inscription?formation=BS%20/%20BE%20Manoeuvre",
    ctaLabel: "Decouvrir la formation",
    detailValue: "bs-be-manoeuvre",
    note:
      "Lecture claire des limites BS, du cadre BE Manoeuvre, des documents utiles et des cas d'arret obligatoires.",
  },
  {
    slug: "bf-hf",
    segment: "non-electriciens",
    title: "Habilitations BF HF",
    shortTitle: "BF / HF",
    audience: "Formation habilitation electrique pour non-electriciens",
    objective:
      "Realiser des operations et travaux non electriques sur des canalisations electriques enterrees dans un cadre organise et securise.",
    jobs:
      "Professionnels du terrassement, du ripage, du nettoyage, du soutenement et des interventions de chantier au voisinage de reseaux enterres.",
    delivery: "Parcours sur devis selon chantier, reseaux et organisation du site",
    initialDuration: "1 jour en initiale",
    recycleDuration: "1 jour en recyclage",
    interPrice: "190 EUR HT",
    intraPrice: "A partir de 890 EUR HT / groupe",
    participants: "Selon chantier et contexte reseaux",
    availability: "quote",
    ctaHref: "/demande-devis?type=habilitation&detail=bf-hf&formation=BF%20/%20HF",
    ctaLabel: "Decouvrir la formation",
    detailValue: "bf-hf",
    note:
      "Offre cadree sur devis, en fonction de la nature exacte des operations et des contraintes de reseaux enterres.",
  },
  {
    slug: "bt-multi-symboles",
    segment: "electriciens-bt",
    title: "Habilitations B1 B1V B2 B2V BR BC BE",
    shortTitle: "B1 / B1V / B2 / B2V / BR / BC / BE",
    audience: "Formation habilitation electrique pour electriciens",
    objective:
      "Diriger ou realiser en securite des interventions, des travaux, des consignations et des essais sur des installations basse tension. Cette offre permet de preparer un ou plusieurs symboles en fonction des missions reelles confiees.",
    jobs:
      "Electricien sur chantier electrique, technicien de maintenance, charge d'essai, technicien polyvalent, encadrant de proximite, responsable maintenance.",
    delivery: "E-learning + journee presentielle",
    initialDuration: "3 jours en initiale",
    recycleDuration: "1,5 a 2 jours en recyclage",
    interPrice: "690 EUR HT (initiale) / 490 EUR HT (recyclage)",
    intraPrice: "A partir de 2 900 EUR HT / groupe (initiale) / 1 900 EUR HT / groupe (recyclage)",
    participants: "10 max",
    availability: "direct",
    ctaHref:
      "/inscription?formation=B1%20/%20B1V%20/%20B2%20/%20B2V%20/%20BR%20/%20BC",
    ctaLabel: "Decouvrir la formation",
    detailValue: "b1-b1v-b2-b2v-br-bc",
    note:
      "Parcours BT mutualise pour les postes combinant execution, charge de travaux, intervention generale, consignation ou besoins BE selon le perimetre reel.",
  },
  {
    slug: "b1-b1v",
    segment: "electriciens-bt",
    title: "Habilitations B1 B1V",
    shortTitle: "B1 / B1V",
    audience: "Formation habilitation electrique pour electriciens",
    objective:
      "Executer en securite des travaux d'installation ou d'extension significative sur l'ensemble ou une partie d'une installation electrique.",
    jobs:
      "Electricien sur chantier electrique, technicien de maintenance sur installation batiment, monteur-cableur, executant electrique BT.",
    delivery: "Parcours mixte e-learning + presentiel",
    initialDuration: "3 jours en initiale",
    recycleDuration: "2 jours en recyclage",
    interPrice: "590 EUR HT (initiale) / 390 EUR HT (recyclage)",
    intraPrice: "A partir de 2 300 EUR HT / groupe (initiale) / 1 600 EUR HT / groupe (recyclage)",
    participants: "Selon symbole et organisation",
    availability: "quote",
    ctaHref:
      "/demande-devis?type=habilitation&detail=b1-b1v&formation=B1%20/%20B1V",
    ctaLabel: "Decouvrir la formation",
    detailValue: "b1-b1v",
    note:
      "Le symbole B1V suppose en plus la maitrise des prescriptions au voisinage. Le parcours est ajuste aux travaux reels confies.",
  },
  {
    slug: "b2-b2v",
    segment: "electriciens-bt",
    title: "Habilitations B2 B2V",
    shortTitle: "B2 / B2V",
    audience: "Formation habilitation electrique pour electriciens",
    objective:
      "Assurer la direction de travaux d'installation ou d'extension significative d'un reseau electrique en basse tension, avec organisation, balisage, coordination et surveillance.",
    jobs:
      "Chef de chantier electrique, chef d'equipe electriciens, conducteurs de travaux, ingenieur bureau d'etudes, charge de travaux BT.",
    delivery: "Parcours mixte e-learning + presentiel",
    initialDuration: "3 jours en initiale",
    recycleDuration: "2 jours en recyclage",
    interPrice: "620 EUR HT (initiale) / 420 EUR HT (recyclage)",
    intraPrice: "A partir de 2 500 EUR HT / groupe (initiale) / 1 700 EUR HT / groupe (recyclage)",
    participants: "Selon symbole et organisation",
    availability: "quote",
    ctaHref:
      "/demande-devis?type=habilitation&detail=b2-b2v&formation=B2%20/%20B2V",
    ctaLabel: "Decouvrir la formation",
    detailValue: "b2-b2v",
    note:
      "Le charge de travaux ne se confond pas avec l'executant. Le parcours insiste sur l'organisation, la surveillance et la coordination documentaire.",
  },
  {
    slug: "br",
    segment: "electriciens-bt",
    title: "Habilitation BR",
    shortTitle: "BR",
    audience: "Formation habilitation electrique pour electriciens",
    objective:
      "Realiser en securite des interventions de depannage, de remplacement de materiels electriques et de connexion avec presence de tension dans le cadre BR.",
    jobs:
      "Technicien de maintenance, electricien en charge de la detection de panne et du depannage, electricien photovoltaique, technicien SAV.",
    delivery: "Parcours mixte e-learning + presentiel",
    initialDuration: "3 jours en initiale",
    recycleDuration: "2 jours en recyclage",
    interPrice: "620 EUR HT (initiale) / 420 EUR HT (recyclage)",
    intraPrice: "A partir de 2 600 EUR HT / groupe (initiale) / 1 800 EUR HT / groupe (recyclage)",
    participants: "Selon interventions reelles",
    availability: "quote",
    ctaHref: "/demande-devis?type=habilitation&detail=br&formation=BR",
    ctaLabel: "Decouvrir la formation",
    detailValue: "br",
    note:
      "Le symbole BR vise des interventions generales definies. Il ne remplace ni un cadre BS, ni un cadre B2, ni un role de consignation BC.",
  },
  {
    slug: "bc",
    segment: "electriciens-bt",
    title: "Habilitation BC",
    shortTitle: "BC",
    audience: "Formation habilitation electrique pour electriciens",
    objective:
      "Assurer la mise en oeuvre des procedures de consignation et de deconsignation dans le respect de la sequence normee et des documents associes.",
    jobs:
      "Responsable technique, chef de chantier, charge de consignation, referent electrique de site.",
    delivery: "Parcours mixte e-learning + presentiel",
    initialDuration: "3 jours en initiale",
    recycleDuration: "2 jours en recyclage",
    interPrice: "560 EUR HT (initiale) / 390 EUR HT (recyclage)",
    intraPrice: "A partir de 2 200 EUR HT / groupe (initiale) / 1 500 EUR HT / groupe (recyclage)",
    participants: "Selon site et procedures",
    availability: "quote",
    ctaHref: "/demande-devis?type=habilitation&detail=bc&formation=BC",
    ctaLabel: "Decouvrir la formation",
    detailValue: "bc",
    note:
      "Le role BC couvre la sequence de consignation et de deconsignation. Il doit etre aligne sur les procedures du site et les missions confiees.",
  },
  {
    slug: "be-verification-mesurage",
    segment: "electriciens-bt",
    title: "Habilitation BE Verification / BE Mesurage",
    shortTitle: "BE Verification / BE Mesurage",
    audience: "Formation habilitation electrique pour electriciens",
    objective:
      "Realiser en securite des verifications et des mesurages sur des installations electriques basse tension dans le cadre d'attributs BE clairement definis.",
    jobs:
      "Inspection reglementaire d'installations, technicien d'organisme de controle, agent de controle qualite, metrologue, diagnostiqueur.",
    delivery: "Parcours sur devis selon contexte technique",
    initialDuration: "3 jours en initiale",
    recycleDuration: "2 jours en recyclage",
    interPrice: "620 EUR HT (initiale) / 420 EUR HT (recyclage)",
    intraPrice: "A partir de 2 500 EUR HT / groupe (initiale) / 1 700 EUR HT / groupe (recyclage)",
    participants: "Selon besoin",
    availability: "quote",
    ctaHref:
      "/demande-devis?type=habilitation&detail=be-verification-mesurage&formation=BE%20Verification%20/%20BE%20Mesurage",
    ctaLabel: "Decouvrir la formation",
    detailValue: "be-verification-mesurage",
    note:
      "Offre proposee lorsque les operations de verification ou de mesurage sont clairement formalisees et reliees au poste reel.",
  },
  {
    slug: "h1v-h2v-hc",
    segment: "haute-tension",
    title: "Habilitations H1V H2V HC",
    shortTitle: "H1V / H2V / HC",
    audience: "Formation habilitation electrique pour electriciens - Haute Tension",
    objective:
      "Diriger ou realiser en securite des travaux, maintenances et consignations sur des installations Haute Tension A dans un cadre organise et fortement procedure.",
    jobs:
      "Electricien HTA, technicien de maintenance industrielle, charge de consignation HT, charge de travaux HT, exploitation d'installations techniques.",
    delivery: "Parcours sur devis avec calibrage HTA / procedures site",
    initialDuration: "4 jours en initiale",
    recycleDuration: "2 jours en recyclage",
    interPrice: "890 EUR HT (initiale) / 590 EUR HT (recyclage)",
    intraPrice: "Sur devis",
    participants: "Selon site, HTA et organisation",
    availability: "quote",
    ctaHref:
      "/demande-devis?type=habilitation&detail=h1v-h2v-hc&formation=H1V%20/%20H2V%20/%20HC",
    ctaLabel: "Decouvrir la formation",
    detailValue: "h1v-h2v-hc",
    note:
      "Positionnement HTA sur devis, avec cadrage technique et organisationnel plus exigeant que les parcours BT.",
  },
];

export const homepageElectricalSummary =
  "Offres distinctes pour H0 B0 H0V, BS / BE Manoeuvre, BF / HF, B1 / B1V, B2 / B2V, BR, BC, BE Verification / BE Mesurage, H1V / H2V / HC et parcours BT multi-symboles.";
