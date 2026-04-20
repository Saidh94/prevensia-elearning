import Link from "next/link";

const formations = [
  {
    slug: "h0b0",
    category: "Habilitation electrique",
    title: "Habilitation electrique H0B0 / H0V",
    duration: "Duree e-learning : 3 h a 4 h",
    mode: "E-learning + entretien 30 min",
    price: "150 EUR HT",
    level: "Debutant",
    audience:
      "Personnel non electricien amene a evoluer dans un environnement presentant un risque electrique.",
    description:
      "Parcours de sensibilisation au risque electrique destine aux personnels non electriciens. Le module pose les bases de la prevention, des comportements adaptes et de la conduite a tenir.",
    objectifs: [
      "Identifier les risques lies a l'electricite dans son environnement de travail",
      "Comprendre les prescriptions de securite applicables aux operations d'ordre non electrique",
      "Adopter les bons comportements pour prevenir l'accident d'origine electrique",
    ],
    programme: [
      "Notions elementaires sur le risque electrique",
      "Effets du courant electrique sur le corps humain",
      "Environnement de travail et zones a risque",
      "Limites des operations autorisees en H0B0 / H0V",
      "Conduite a tenir en cas d'incident ou d'accident",
    ],
    note:
      "Module theorique de sensibilisation complete par un entretien de validation de 30 minutes.",
  },
  {
    slug: "bs-be-manoeuvre",
    category: "Habilitation electrique",
    title: "Habilitation electrique BS / BE Manoeuvre",
    duration: "E-learning : 5 h a 7 h + visio : 2 h 30 a 3 h",
    mode: "E-learning + visio accompagnee",
    price: "320 EUR HT",
    level: "Intermediaire",
    audience:
      "Personnel realisant des interventions elementaires ou des manoeuvres d'exploitation dans le respect des prescriptions de securite.",
    description:
      "Parcours preparatoire aux interventions elementaires et manoeuvres simples, avec un accent sur les limites d'intervention, la preparation et la securite operationnelle.",
    objectifs: [
      "Comprendre les limites d'intervention liees aux symboles BS et BE Manoeuvre",
      "Appliquer les prescriptions de securite avant, pendant et apres l'operation",
      "Identifier les situations necessitant l'arret de l'intervention ou l'appel a un personnel habilite adapte",
    ],
    programme: [
      "Rappels sur le risque electrique et les mesures de prevention",
      "Role et limites d'un executant BS",
      "Role et limites d'un habilite BE Manoeuvre",
      "Mise en securite, verifications visuelles et environnement de travail",
      "Conduite a tenir en cas d'anomalie, d'incident ou d'accident",
    ],
    note:
      "Parcours pense pour une validation serieuse en distanciel, avec visio de demi-journee en complement du module en ligne.",
  },
  {
    slug: "b1-b1v-b2-b2v-br-bc",
    category: "Habilitation electrique",
    title: "Habilitation electrique B1 B1V B2 B2V BR BC",
    duration: "E-learning : 7 h a 10 h + presentiel : 1 jour",
    mode: "Parcours mixte",
    price: "549 EUR HT",
    level: "Avance",
    audience:
      "Personnel electricien amene a realiser, diriger, intervenir ou consigner dans le cadre d'operations d'ordre electrique.",
    description:
      "Parcours theorique structure autour des roles, responsabilites, sequences de securite, consignation et organisation des operations d'ordre electrique.",
    objectifs: [
      "Maitriser les prescriptions de securite applicables aux operations d'ordre electrique",
      "Comprendre les roles, responsabilites et limites des differents symboles d'habilitation",
      "Mettre en oeuvre une demarche de prevention coherente avant toute operation",
    ],
    programme: [
      "Cadre reglementaire et principes de prevention du risque electrique",
      "Domaines de tension, zones, voisinage et conditions d'intervention",
      "Roles des habilitations B1, B2, BR, BC et variantes au voisinage",
      "Consignation, intervention, remplacement, raccordement et organisation du travail",
      "Analyse des risques, conduite a tenir et cas pratiques",
    ],
    note:
      "Socle theorique premium complete par une journee presentielle d'application, d'echange et d'evaluation.",
  },
  {
    slug: "securite-incendie",
    category: "Prevention incendie",
    title: "Securite incendie, alerte et evacuation",
    duration: "Duree indicative : 4 a 7 heures",
    mode: "E-learning",
    level: "Debutant a intermediaire",
    audience:
      "Tout personnel amene a evoluer dans des locaux tertiaires, industriels, logistiques ou recevant du public.",
    description:
      "Module de sensibilisation a la prevention incendie, a l'alerte, a l'alarme, aux premiers reflexes et a l'evacuation, avec reperes sur le Code du travail, les ERP, les IGH et les ICPE.",
    objectifs: [
      "Reconnaitre les causes de depart de feu et les facteurs aggravants",
      "Reagir correctement en cas d'alerte ou d'alarme",
      "Connaitre les principes d'evacuation et les comportements de prevention",
    ],
    programme: [
      "Naissance du feu et facteurs de propagation",
      "Alerte, alarme et premiers reflexes",
      "Evacuation et point de rassemblement",
      "Cadre reglementaire : Code du travail, ERP, IGH, ICPE",
      "Prevention incendie au quotidien",
    ],
    note:
      "Formation theorique de sensibilisation. Les consignes du site, exercices et mises en situation restent indispensables.",
  },
  {
    slug: "ssi-exploitation",
    category: "SSI",
    title: "Exploitation des SSI - fondamentaux",
    duration: "Duree indicative : 5 a 8 heures",
    mode: "E-learning",
    level: "Intermediaire",
    audience:
      "Exploitants, responsables de site, personnel technique ou utilisateurs amenes a interagir avec un systeme de securite incendie.",
    description:
      "Module d'initiation au fonctionnement des SSI, a l'exploitation des informations incendie et aux principaux referentiels francais de la famille NF S 61.",
    objectifs: [
      "Comprendre le role d'un SSI et ses fonctions principales",
      "Distinguer SDI, SMSI et logique de mise en securite",
      "Adopter les bons reflexes face a une alarme, un derangement ou un defaut",
    ],
    programme: [
      "Role et logique fonctionnelle d'un SSI",
      "Distinction SDI / SMSI / alarme / mise en securite",
      "Referentiels utiles : NF S 61-931, NF S 61-932, NF S 61-970",
      "Reflexes d'exploitation et limites utilisateur",
      "Cas pratiques d'anomalies d'exploitation",
    ],
    note:
      "Ce module ne remplace pas une coordination SSI, une etude de conception ou une maintenance specialisee.",
  },
  {
    slug: "sprinkler",
    category: "Protection incendie",
    title: "Exploitation sprinkler et referentiels techniques",
    duration: "Duree indicative : 5 a 8 heures",
    mode: "E-learning",
    level: "Intermediaire",
    audience:
      "Personnel d'exploitation, maintenance, encadrement technique ou responsables de site.",
    description:
      "Module d'initiation a l'exploitation d'une installation sprinkler, a la surveillance des organes critiques et a la comprehension des principaux referentiels techniques.",
    objectifs: [
      "Comprendre le role d'une installation sprinkler",
      "Reconnaitre ses composants principaux et etats anormaux",
      "Identifier les bons reflexes d'exploitation et de remontee des anomalies",
    ],
    programme: [
      "Principe de fonctionnement d'une installation sprinkler",
      "Composants principaux et logique d'exploitation",
      "Anomalies, derives et etats non conformes",
      "Referentiels : APSAD R1, EN 12845, logique assurantielle et exploitation",
      "Focus entrepots, stockage et ICPE 1510",
    ],
    note:
      "Module d'exploitation et de sensibilisation technique. Il ne remplace pas une etude sprinkler ni un audit de conformite.",
  },
  {
    slug: "sst",
    category: "Secours au travail",
    title: "SST - Sauveteur Secouriste du Travail",
    duration: "Duree indicative : 7 a 14 heures selon parcours",
    mode: "E-learning",
    level: "Debutant a intermediaire",
    audience:
      "Salaries amenes a participer a la prevention des risques et a la prise en charge initiale d'une victime.",
    description:
      "Parcours theorique d'introduction aux principes SST : proteger, examiner, alerter, secourir et participer a la prevention dans l'entreprise.",
    objectifs: [
      "Reperer une situation dangereuse et eviter le suraccident",
      "Adopter la logique proteger, examiner, alerter, secourir",
      "Comprendre le cadre general d'intervention du SST",
    ],
    programme: [
      "Proteger",
      "Examiner",
      "Alerter ou faire alerter",
      "Secourir",
      "Prevention et role du salarie dans l'entreprise",
    ],
    note:
      "La pratique reste indispensable pour maitriser les gestes et valider reellement la competence SST.",
  },
];

const pointsForts = [
  "Parcours accessibles en ligne",
  "Contenus structures autour des risques reels en entreprise",
  "Approche progressive selon les niveaux et metiers",
  "Modules pedagogiques avec chapitres, syntheses et quiz",
  "Vision operationnelle et reglementaire adaptee au terrain",
];

const categories = [
  "Habilitation electrique",
  "Prevention incendie",
  "SSI",
  "Protection incendie",
  "Secours au travail",
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
              Formations e-learning en prevention, securite incendie et habilitations
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Developpez les connaissances theoriques essentielles en habilitation
              electrique, securite incendie, SSI, sprinkler et SST grace a des
              parcours en ligne structures, pedagogiques et orientes terrain.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-400">
              Nos modules ont vocation a accompagner l&apos;acquisition des
              connaissances, des bons reflexes et des reperes techniques ou
              reglementaires. Selon les formations concernees, ils sont completes
              par un entretien de validation, une visio accompagnee ou une
              sequence presentielle.
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
              Une approche e-learning pensee pour la prevention et l&apos;exploitation
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Les parcours proposes sur PREVENSIA FORMATION visent a transmettre
              les fondamentaux indispensables a la comprehension des risques, aux
              limites des operations autorisees et a l&apos;adoption des bons reflexes
              dans l&apos;environnement professionnel.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Le catalogue s&apos;adresse aussi bien aux besoins en habilitation
              electrique qu&apos;aux besoins de sensibilisation a la securite
              incendie, a l&apos;exploitation d&apos;un SSI, a l&apos;exploitation sprinkler ou
              aux bases SST.
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
            Des parcours progressifs, penses pour la prevention, la securite et
            l&apos;exploitation, avec une logique claire entre sensibilisation,
            acquisition theorique, quiz et validation du parcours.
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
                    Creer un compte
                  </Link>
                </div>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <h4 className="text-base font-bold text-slate-900">
                    Objectifs pedagogiques
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
                  <span className="font-semibold">A noter :</span>{" "}
                  {formation.note}
                </p>
              </div>
            </article>
          ))}
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
                parcours adapte a vos salaries, a vos operations, a vos risques
                et a votre environnement reglementaire ou technique.
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
                  Acceder a mon espace
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
