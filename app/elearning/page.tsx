import Link from "next/link";

const formations = [
  {
    slug: "h0b0",
    category: "Habilitation électrique",
    title: "Habilitation électrique H0B0 / H0V",
    duration: "Duree e-learning : 3 h a 4 h",
    mode: "E-learning + entretien 30 min",
    price: "150 EUR HT",
    level: "Debutant",
    audience:
      "Personnel non électricien amene a evoluer dans un environnement presentant un risque électrique.",
    description:
      "Parcours de sensibilisation au risque électrique destine aux personnels non électriciens. Le module pose les bases de la prévention, des comportements adaptés et de la conduite a tenir.",
    objectifs: [
      "Identifier les risques lies a l'électricité dans son environnement de travail",
      "Comprendre les prescriptions de sécurité applicables aux opérations d'ordre non électrique",
      "Adopter les bons comportements pour prevenir l'accident d'origine électrique",
    ],
    programme: [
      "Notions élémentaires sur le risque électrique",
      "Effets du courant électrique sur le corps humain",
      "Environnement de travail et zones a risque",
      "Limites des opérations autorisees en H0B0 / H0V",
      "Conduite a tenir en cas d'incident ou d'accident",
    ],
    note:
      "Module theorique de sensibilisation complète par un entretien de validation de 30 minutes.",
  },
  {
    slug: "bs-be-manoeuvre",
    category: "Habilitation électrique",
    title: "Habilitation électrique BS et BE Manœuvre",
    duration: "E-learning : 5 h a 7 h + séquence encadrée : 45 min a 4 h",
    mode: "E-learning + classes virtuelle / visio",
    price: "320 EUR HT",
    level: "Intermediaire",
    audience:
      "Personnel realisant des interventions élémentaires ou des manœuvres d'exploitation dans le respect des prescriptions de sécurité.",
    description:
      "Parcours preparatoire aux interventions élémentaires et manœuvres simples, avec un accent sur les limites d'intervention, la préparation et la sécurité opérationnelle.",
    objectifs: [
      "Comprendre les limites d'intervention liees aux symboles BS et BE Manœuvre",
      "Appliquer les prescriptions de sécurité avant, pendant et après l'opération",
      "Identifier les situations necessitant l'arrêt de l'intervention ou l'appel a un personnel habilite adapté",
    ],
    programme: [
      "Rappels sur le risque électrique et les mesures de prévention",
      "Rôle et limites d'un executant BS",
      "Rôle et limites d'un habilite BE Manœuvre",
      "Mise en sécurité, vérifications visuelles et environnement de travail",
      "Conduite a tenir en cas d'anomalie, d'incident ou d'accident",
    ],
    note:
      "Initial en classes virtuelle ou session entreprise, puis recyclage possible en visio accompagnée selon le besoin.",
  },
  {
    slug: "b1-b1v",
    category: "Habilitation électrique",
    title: "Habilitation électrique B1 / B1V",
    duration: "E-learning : 5 h 30 a 7 h + pratique",
    mode: "Support e-learning inclus + présentiel",
    price: "Inclus avec la formation présentielle",
    level: "Avance",
    audience:
      "Électriciens executants amenes a realiser des travaux electriques en basse tension sous direction.",
    description:
      "Parcours theorique cible sur le rôle d'executant B1 / B1V, le voisinage, la lecture du cadre de travail et la discipline d'execution en sécurité.",
    objectifs: [
      "Comprendre le rôle d'executant B1 / B1V",
      "Respecter le cadre de travail fixe par le charge de travaux",
      "Identifier le voisinage et stopper en cas d'ecart",
    ],
    programme: [
      "Cadre B1 / B1V et rôle de l'executant",
      "Voisinage, pieces nues sous tension et limites d'action",
      "Préparation d'un travail électrique",
      "Execution sous direction et conduite a tenir en cas d'anomalie",
    ],
    note:
      "Support e-learning inclus pour les apprenants inscrits au présentiel. Non vendu comme formation e-learning autonome.",
  },
  {
    slug: "b2-b2v",
    category: "Habilitation électrique",
    title: "Habilitation électrique B2 / B2V",
    duration: "E-learning : 6 h a 7 h 30 + pratique",
    mode: "Support e-learning inclus + présentiel",
    price: "Inclus avec la formation présentielle",
    level: "Avance",
    audience:
      "Charges de travaux, chefs d'équipe et responsables amenes a préparer et diriger des travaux electriques en basse tension.",
    description:
      "Parcours theorique cible sur le rôle B2 / B2V, l'organisation du chantier électrique, la coordination et la maitrise du voisinage.",
    objectifs: [
      "Comprendre le rôle de charge de travaux",
      "Organiser la zone, le briefing et les protections",
      "Diriger l'équipe et suspendre le chantier si le cadre se dégradé",
    ],
    programme: [
      "Cadre B2 / B2V et chaîne de responsabilite",
      "Préparation des travaux et coordination",
      "Direction du chantier et maitrise du voisinage",
      "Ecarts, urgences et compte rendu de fin d'opération",
    ],
    note:
      "Support e-learning inclus pour les apprenants inscrits au présentiel. Non vendu comme formation e-learning autonome.",
  },
  {
    slug: "br",
    category: "Habilitation électrique",
    title: "Habilitation électrique BR",
    duration: "E-learning : 6 h a 7 h 30 + pratique",
    mode: "Support e-learning inclus + présentiel",
    price: "Inclus avec la formation présentielle",
    level: "Avance",
    audience:
      "Techniciens de maintenance et personnels amenes a conduire des interventions générales en basse tension.",
    description:
      "Parcours theorique cible sur le depannage, le remplacement, les essais limites et les conditions strictes de l'intervention générale BR.",
    objectifs: [
      "Comprendre le cadre BR et ses limites",
      "Preparer une intervention générale en sécurité",
      "Refuser toute derive vers des travaux structures ou hors cadre",
    ],
    programme: [
      "Cadre BR et responsabilites de l'intervenant",
      "Préparation, mise en sécurité et vérification",
      "Depannage, remplacement, mesurage et essais limites",
      "Anomalies, urgences et retour d'experience",
    ],
    note:
      "Support e-learning inclus pour les apprenants inscrits au présentiel. Non vendu comme formation e-learning autonome.",
  },
  {
    slug: "bc",
    category: "Habilitation électrique",
    title: "Habilitation électrique BC",
    duration: "E-learning : 5 h 30 a 7 h + pratique",
    mode: "Support e-learning inclus + présentiel",
    price: "Inclus avec la formation présentielle",
    level: "Avance",
    audience:
      "Responsables techniques et personnels amenes a assurer la consignation et la deconsignation en basse tension.",
    description:
      "Parcours theorique cible sur la chaîne de consignation, la vérification d'absence de tension, la tracabilite et la remise a disposition de l'installation.",
    objectifs: [
      "Comprendre le rôle de charge de consignation",
      "Maitriser la chaîne de consignation et la VAT",
      "Fiabiliser la documentation et les interfaces avec les travaux",
    ],
    programme: [
      "Cadre BC et rôle de charge de consignation",
      "Identification, separation, condamnation et VAT",
      "Documents, autorisations et coordination",
      "Ecarts, doute et retour a la normale",
    ],
    note:
      "Support e-learning inclus pour les apprenants inscrits au présentiel. Non vendu comme formation e-learning autonome.",
  },
  {
    slug: "be-vérification-mesurage",
    category: "Habilitation électrique",
    title: "Habilitation électrique BE Vérification / BE Mesurage",
    duration: "E-learning : 5 h 30 a 7 h + pratique",
    mode: "Support e-learning inclus + présentiel",
    price: "Inclus avec la formation présentielle",
    level: "Avance",
    audience:
      "Techniciens amenes a realiser des vérifications, mesurages et contrôles en basse tension.",
    description:
      "Parcours theorique cible sur la vérification, le mesurage, la lecture du cadre d'action, les instruments et les limites d'intervention.",
    objectifs: [
      "Comprendre le cadre BE Vérification / BE Mesurage",
      "Preparer un contrôle en sécurité",
      "Utiliser la bonne methode et refuser toute derive hors cadre",
    ],
    programme: [
      "Cadre BE et rôle du verificateur ou mesureur",
      "Voisinage, mise en sécurité et préparation",
      "Mesurages, essais et contrôle documentaire",
      "Anomalies, resultat incoherent et compte rendu",
    ],
    note:
      "Support e-learning inclus pour les apprenants inscrits au présentiel. Non vendu comme formation e-learning autonome.",
  },
  {
    slug: "bt-multi-symboles",
    category: "Habilitation électrique",
    title: "Parcours BT multi-symboles B1 / B1V / B2 / B2V / BR / BC / BE",
    duration: "E-learning : 7 h a 10 h + présentiel : 1 jour",
    mode: "Support e-learning inclus + présentiel",
    price: "Inclus avec la formation présentielle",
    level: "Avance",
    audience:
      "Personnel électricien amene a couvrir plusieurs rôles ou entreprises souhaitant un socle commun avant validation pratique par symbole.",
    description:
      "Parcours theorique transversal structure autour des rôles, responsabilites, séquences de sécurité, consignation et organisation des opérations d'ordre électrique en basse tension.",
    objectifs: [
      "Maitriser les prescriptions de sécurité applicables aux opérations d'ordre électrique",
      "Comprendre les rôles, responsabilites et limites des differents symboles d'habilitation",
      "Donner un socle commun avant requalification pratique par rôle",
    ],
    programme: [
      "Cadre réglementaire et principes de prévention du risque électrique",
      "Domaines de tension, zones, voisinage et conditions d'intervention",
      "Roles B1, B2, BR, BC et actes de vérification / mesurage",
      "Consignation, intervention, remplacement, raccordement et organisation du travail",
      "Analyse des risques, conduite a tenir et cas pratiques",
    ],
    note:
      "Socle theorique premium inclus dans l'offre présentielle multi-symboles. Non vendu comme formation e-learning autonome.",
  },
  {
    slug: "incendie",
    category: "Prévention incendie",
    title: "Sécurité incendie, alerte et évacuation",
    duration: "Duree indicative : 4 a 7 heures",
    mode: "Support e-learning inclus + présentiel",
    price: "Inclus avec la formation encadrée",
    level: "Debutant a intermediaire",
    audience:
      "Tout personnel amene a evoluer dans des locaux tertiaires, industriels, logistiques ou recevant du public.",
    description:
      "Module de sensibilisation a la prévention incendie, a l'alerte, a l'alarme, aux premiers réflexes et a l'évacuation, avec reperes sur le Code du travail, les ERP, les IGH et les ICPE.",
    objectifs: [
      "Reconnaitre les causes de départ de feu et les facteurs aggravants",
      "Reagir correctement en cas d'alerte ou d'alarme",
      "Connaitre les principes d'évacuation et les comportements de prévention",
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
    duration: "Duree indicative : 5 a 8 heures",
    mode: "Support e-learning inclus + présentiel",
    price: "Inclus avec la formation encadrée",
    level: "Intermediaire",
    audience:
      "Exploitants, responsables de site, personnel technique ou utilisateurs amenes a interagir avec un système de sécurité incendie.",
    description:
      "Module d'initiation au fonctionnement des SSI, a l'exploitation des informations incendie et aux principaux referentiels francais de la famille NF S 61.",
    objectifs: [
      "Comprendre le rôle d'un SSI et ses fonctions principales",
      "Distinguer SDI, SMSI et logique de mise en sécurité",
      "Adopter les bons réflexes face a une alarme, un derangement ou un defaut",
    ],
    programme: [
      "Rôle et logique fonctionnelle d'un SSI",
      "Distinction SDI / SMSI / alarme / mise en sécurité",
      "Referentiels utiles : NF S 61-931, NF S 61-932, NF S 61-970",
      "Reflexes d'exploitation et limites utilisateur",
      "Cas pratiques d'anomalies d'exploitation",
    ],
    note:
      "Support e-learning inclus avec la formation SSI encadrée. Il ne remplace pas une coordination SSI, une etude de conception ou une maintenance specialisee.",
  },
  {
    slug: "sprinkler",
    category: "Protection incendie",
    title: "Exploitation sprinkler - fondamentaux techniques",
    duration: "Duree indicative : 5 a 8 heures",
    mode: "Support e-learning inclus + présentiel",
    price: "Inclus avec la formation encadrée",
    level: "Intermediaire",
    audience:
      "Personnel d'exploitation, maintenance, encadrement technique ou responsables de site.",
    description:
      "Module d'exploitation d'une installation sprinkler, de ses organes critiques, de ses anomalies et des referentiels techniques qui encadrent son maintien en etat.",
    objectifs: [
      "Comprendre le rôle d'une installation sprinkler",
      "Reconnaitre ses composants principaux et etats anormaux",
      "Identifier les bons réflexes d'exploitation, d'essais et de remontee des anomalies",
    ],
    programme: [
      "Principe de fonctionnement d'une installation sprinkler",
      "Composants principaux et logique d'exploitation",
      "Anomalies, derives et etats non conformes",
      "Referentiels : APSAD R1, EN 12845, NFPA 13, FM",
      "Focus entrepots, stockage et ICPE 1510",
      "Essais, surveillance et gestion des indisponibilites",
    ],
    note:
      "Support e-learning inclus avec la formation sprinkler encadrée. Il ne remplace pas une etude sprinkler ni un audit de conformite.",
  },
  {
    slug: "extinction-automatique-gaz",
    category: "Protection incendie",
    title: "Extinction automatique a gaz - exploitation et referentiels",
    duration: "Duree indicative : 4 a 6 heures",
    mode: "Support e-learning inclus + présentiel",
    price: "Inclus avec la formation encadrée",
    level: "Intermediaire",
    audience:
      "Personnel d'exploitation, maintenance, encadrement technique ou responsables de locaux proteges par extinction automatique a gaz.",
    description:
      "Module dédié aux installations fixes d'extinction a gaz, a la sécurité des personnes, a l'integrite du local protege et aux reperes APSAD R13 / NF EN 15004-1.",
    objectifs: [
      "Comprendre la logique d'un système d'extinction automatique a gaz",
      "Distinguer l'extinction a gaz d'une installation sprinkler",
      "Identifier les contraintes de local protege, d'alarme, de temporisation et de reacces",
    ],
    programme: [
      "Principe d'un système fixe d'extinction a gaz",
      "Détection, commande, temporisation et diffusion",
      "Local protege et sécurité des personnes",
      "Reperes APSAD R13 et NF EN 15004-1",
    ],
    note:
      "Support e-learning inclus avec la formation extinction gaz encadrée. Il ne remplace pas une etude de conception ni une maintenance specialisee.",
  },
  {
    slug: "sst",
    category: "Secours au travail",
    title: "SST - Sauveteur Secouriste du Travail",
    duration: "Duree indicative : 7 a 14 heures selon parcours",
    mode: "Support e-learning inclus + présentiel",
    price: "Inclus avec la formation encadrée",
    level: "Debutant a intermediaire",
    audience:
      "Salariés amenes a participer a la prévention des risques et a la prise en charge initiale d'une victime.",
    description:
      "Parcours theorique d'introduction aux principes SST : proteger, examiner, alerter, secourir et participer a la prévention dans l'entreprise.",
    objectifs: [
      "Reperer une situation dangereuse et eviter le suraccident",
      "Adopter la logique proteger, examiner, alerter, secourir",
      "Comprendre le cadre général d'intervention du SST",
    ],
    programme: [
      "Proteger",
      "Examiner",
      "Alerter ou faire alerter",
      "Secourir",
      "Prévention et rôle du salarié dans l'entreprise",
    ],
    note:
      "Support e-learning inclus avec la formation SST encadrée. La pratique reste indispensable pour maitriser les gestes et valider reellement la compétence SST.",
  },
];

const pointsForts = [
  "Offres structurees selon le niveau d'habilitation visé",
  "Contenus structures autour des risques réels en entreprise",
  "Approche progressive selon les niveaux, metiers et contraintes terrain",
  "Modules pédagogiques avec chapitres, syntheses et quiz serieux",
  "Validation finale encadrée : entretien, visio ou présentiel",
];

const categories = [
  "Habilitation électrique",
  "Prévention incendie",
  "SSI",
  "Protection incendie",
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

export default function ElearningPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.22),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.16),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl">
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
              achetes en format e-learning encadré avec entretien, visio ou classes
              virtuelle. Les autres modules sont des supports premium inclus avec
              les formations présentielle ou classes virtuelle, accessibles aux
              apprenants inscrits pour préparer, réviser et consolider les acquis.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/inscription"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:-translate-y-0.5"
              >
                Creer un compte
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
              L&apos;espace e-learning n&apos;a pas vocation a remplacer les séquences
              encadrées. Il sert a préparer les apprenants, harmoniser les bases,
              renforcer les quiz et conserver un accès de revision aux contenus
              techniques.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Pour les parcours B1, B2, BR, BC, BE, incendie, SSI, sprinkler et
              SST, l&apos;accès aux cours est donc un complement inclus dans l&apos;offre
              formation. Le client comprend qu&apos;il achete une formation encadrée,
              enrichie par un support digital consultable en amont et en revision.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {categories.map((category) => (
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
                      Public concerne :
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

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-sm sm:p-10">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-red-400">
                Besoin d&apos;un accompagnement
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Vous souhaitez deployer ces modules dans votre entreprise ?
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                PREVENSIA FORMATION peut vous accompagner pour structurer un
                parcours adapté a vos salariés, a vos opérations, a vos risques
                et a votre environnement réglementaire ou technique.
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
                  Accéder a mon espace
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

