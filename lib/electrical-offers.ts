export type ElectricalCommercialOffer = {
  slug: string;
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
    title: "H0B0 / H0V",
    shortTitle: "H0B0 / H0V",
    audience: "Personnel non electricien",
    objective:
      "Executer ou diriger des operations d'ordre non electrique en securite dans un environnement comportant un risque electrique, y compris au voisinage lorsque le symbole H0V est requis.",
    jobs:
      "Personnel de chantier, maintenance generale, logistique, nettoyage technique, second oeuvre, encadrement de travaux non electriques.",
    delivery: "E-learning + entretien de validation 30 min",
    initialDuration: "3 a 4 h + 30 min",
    recycleDuration: "Recyclage sur devis selon poste et contexte",
    interPrice: "150 EUR HT",
    intraPrice: "Sur devis",
    participants: "Individuel ou groupe",
    availability: "direct",
    ctaHref: "/inscription?formation=H0B0%20/%20H0V",
    ctaLabel: "S'inscrire",
    detailValue: "h0b0-h0v",
    note:
      "La formation prepare aux prescriptions de securite. Le titre d'habilitation reste delivre par l'employeur apres verification de l'aptitude et de l'adequation au poste.",
  },
  {
    slug: "bs-be-manoeuvre",
    title: "BS / BE Manoeuvre",
    shortTitle: "BS / BE Manoeuvre",
    audience: "Personnel charge d'interventions elementaires ou de manoeuvres",
    objective:
      "Realiser en securite des interventions elementaires BS et des manoeuvres d'exploitation BE Manoeuvre sur des installations basse tension dans les limites fixees par la NF C 18-510.",
    jobs:
      "Agent de maintenance de premier niveau, gardien d'immeuble, technicien multiservice, personnel charge de rearmement ou remplacement simple autorise.",
    delivery:
      "E-learning + classe virtuelle, visio de recyclage ou session entreprise",
    initialDuration: "5 a 7 h + 3 a 4 h",
    recycleDuration: "5 a 7 h + 45 min a 1 h",
    interPrice: "320 EUR HT",
    intraPrice: "Sur devis",
    participants: "Individuel ou groupe",
    availability: "direct",
    ctaHref: "/inscription?formation=BS%20/%20BE%20Manoeuvre",
    ctaLabel: "S'inscrire",
    detailValue: "bs-be-manoeuvre",
    note:
      "Le parcours distingue clairement le cadre BS, le cadre BE Manoeuvre, les limites d'action et les cas d'arret obligatoires.",
  },
  {
    slug: "b1-b1v",
    title: "B1 / B1V",
    shortTitle: "B1 / B1V",
    audience: "Executant electricien basse tension",
    objective:
      "Executer en securite des travaux d'ordre electrique en basse tension, hors tension ou au voisinage lorsque le symbole B1V est requis, sous la direction d'un charge de travaux.",
    jobs:
      "Electricien batiment, monteur-cableur, technicien chantier, executant maintenance electrique.",
    delivery: "Parcours mixte e-learning + presentiel",
    initialDuration: "E-learning 7 a 10 h + presentiel selon organisation",
    recycleDuration: "Recyclage sur devis",
    interPrice: "Sur devis",
    intraPrice: "Sur devis",
    participants: "Selon symbole et organisation",
    availability: "quote",
    ctaHref:
      "/demande-devis?type=habilitation&detail=b1-b1v&formation=B1%20/%20B1V",
    ctaLabel: "Demander un devis",
    detailValue: "b1-b1v",
    note:
      "Le symbole B1V suppose en plus la maitrise des prescriptions au voisinage. Le parcours est dimensionne selon les travaux reels confies.",
  },
  {
    slug: "b2-b2v",
    title: "B2 / B2V",
    shortTitle: "B2 / B2V",
    audience: "Charge de travaux basse tension",
    objective:
      "Diriger des travaux d'ordre electrique en basse tension, organiser l'equipe, maitriser le balisage, les documents et les mesures de prevention, y compris au voisinage avec B2V.",
    jobs:
      "Chef d'equipe electricien, charge de travaux, conducteur de travaux, encadrant technique BT.",
    delivery: "Parcours mixte e-learning + presentiel",
    initialDuration: "E-learning 7 a 10 h + presentiel selon organisation",
    recycleDuration: "Recyclage sur devis",
    interPrice: "Sur devis",
    intraPrice: "Sur devis",
    participants: "Selon symbole et organisation",
    availability: "quote",
    ctaHref:
      "/demande-devis?type=habilitation&detail=b2-b2v&formation=B2%20/%20B2V",
    ctaLabel: "Demander un devis",
    detailValue: "b2-b2v",
    note:
      "Le charge de travaux ne se confond pas avec l'executant. Le parcours insiste sur l'organisation, la surveillance et la coordination documentaire.",
  },
  {
    slug: "br",
    title: "BR",
    shortTitle: "BR",
    audience: "Charge d'intervention generale basse tension",
    objective:
      "Realiser en securite des interventions generales de maintenance, depannage, remplacement, raccordement, essais ou mesurages dans le cadre BR.",
    jobs:
      "Technicien de maintenance, electricien de depannage, intervenant SAV, technicien multisite.",
    delivery: "Parcours mixte e-learning + presentiel",
    initialDuration: "E-learning 7 a 10 h + presentiel selon organisation",
    recycleDuration: "Recyclage sur devis",
    interPrice: "Sur devis",
    intraPrice: "Sur devis",
    participants: "Selon interventions reelles",
    availability: "quote",
    ctaHref: "/demande-devis?type=habilitation&detail=br&formation=BR",
    ctaLabel: "Demander un devis",
    detailValue: "br",
    note:
      "Le symbole BR vise des interventions generales definies. Il ne remplace ni un cadre BS, ni un cadre B2, ni un role de consignation BC.",
  },
  {
    slug: "bc",
    title: "BC",
    shortTitle: "BC",
    audience: "Charge de consignation",
    objective:
      "Assurer la consignation, la verification d'absence de tension, la coordination documentaire et la mise en securite avant intervention ou travaux.",
    jobs:
      "Responsable technique, charge de consignation, encadrant maintenance, referent electrique de site.",
    delivery: "Parcours mixte e-learning + presentiel",
    initialDuration: "E-learning 7 a 10 h + presentiel selon organisation",
    recycleDuration: "Recyclage sur devis",
    interPrice: "Sur devis",
    intraPrice: "Sur devis",
    participants: "Selon site et procedures",
    availability: "quote",
    ctaHref: "/demande-devis?type=habilitation&detail=bc&formation=BC",
    ctaLabel: "Demander un devis",
    detailValue: "bc",
    note:
      "Le role BC couvre la sequence de consignation et de deconsignation. Il doit etre aligne sur les procedures du site et les missions confiees.",
  },
  {
    slug: "be-verification-mesurage",
    title: "BE Verification / BE Mesurage",
    shortTitle: "BE Verification / BE Mesurage",
    audience: "Personnel charge de verifications ou mesurages",
    objective:
      "Realiser en securite des verifications et mesurages conformement aux attributs BE appropries et aux limites de mission definies par l'employeur.",
    jobs:
      "Technicien de controle, metrologue, technicien essais, agent qualite ou inspection technique.",
    delivery: "Parcours sur devis selon contexte technique",
    initialDuration: "Duree adaptee au besoin reel",
    recycleDuration: "Recyclage sur devis",
    interPrice: "Sur devis",
    intraPrice: "Sur devis",
    participants: "Selon besoin",
    availability: "quote",
    ctaHref:
      "/demande-devis?type=habilitation&detail=be-verification-mesurage&formation=BE%20Verification%20/%20BE%20Mesurage",
    ctaLabel: "Demander un devis",
    detailValue: "be-verification-mesurage",
    note:
      "Cette offre n'est proposee que lorsque les operations de verification ou de mesurage sont clairement identifiees et formalisees.",
  },
  {
    slug: "bt-multi-symboles",
    title: "Parcours BT multi-symboles",
    shortTitle: "B1 / B1V / B2 / B2V / BR / BC",
    audience: "Personnel electricien avec plusieurs perimetres de mission",
    objective:
      "Preparer plusieurs symboles basse tension lorsqu'un meme poste combine execution, encadrement, intervention generale ou consignation, avec une evaluation adaptee aux missions reelles.",
    jobs:
      "Technicien polyvalent, responsable maintenance, encadrant de proximite, entreprise disposant de plusieurs roles electriques internes.",
    delivery: "E-learning + journee presentielle",
    initialDuration: "7 a 10 h + 1 jour",
    recycleDuration: "Recyclage e-learning + presentiel",
    interPrice: "549 EUR HT",
    intraPrice: "Sur devis",
    participants: "10 max",
    availability: "direct",
    ctaHref:
      "/inscription?formation=B1%20/%20B1V%20/%20B2%20/%20B2V%20/%20BR%20/%20BC",
    ctaLabel: "S'inscrire",
    detailValue: "b1-b1v-b2-b2v-br-bc",
    note:
      "Ce parcours mutualise le socle theorique BT lorsque plusieurs symboles sont recherches sur un meme poste ou au sein d'une meme organisation.",
  },
];

export const homepageElectricalSummary =
  "Offres separees pour H0B0 / H0V, BS / BE Manoeuvre, B1 / B1V, B2 / B2V, BR, BC et parcours BT multi-symboles.";

