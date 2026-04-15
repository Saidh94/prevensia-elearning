import Link from "next/link";

const formations = [
  {
    slug: "h0b0",
    category: "Habilitation électrique",
    title: "Habilitation électrique H0B0",
    duration: "Durée e-learning : 1 h 20 à 1 h 45",
    mode: "E-learning",
    level: "Débutant",
    audience:
      "Personnel non électricien amené à évoluer dans un environnement présentant un risque électrique.",
    description:
      "Parcours de sensibilisation au risque électrique destiné aux personnels non électriciens. Le module pose les bases de la prévention, des comportements adaptés et de la conduite à tenir.",
    objectifs: [
      "Identifier les risques liés à l’électricité dans son environnement de travail",
      "Comprendre les prescriptions de sécurité applicables aux opérations d’ordre non électrique",
      "Adopter les bons comportements pour prévenir l’accident d’origine électrique",
    ],
    programme: [
      "Notions élémentaires sur le risque électrique",
      "Effets du courant électrique sur le corps humain",
      "Environnement de travail et zones à risque",
      "Limites des opérations autorisées en H0B0",
      "Conduite à tenir en cas d’incident ou d’accident",
    ],
    note:
      "Module théorique de sensibilisation. La partie pratique et l’évaluation finale avec formateur restent indispensables dans une logique d’habilitation.",
  },
  {
    slug: "bs-be-manoeuvre",
    category: "Habilitation électrique",
    title: "Habilitation électrique BS / BE Manœuvre",
    duration: "Durée indicative : 10 heures",
    mode: "E-learning",
    level: "Intermédiaire",
    audience:
      "Personnel réalisant des interventions élémentaires ou des manœuvres d’exploitation dans le respect des prescriptions de sécurité.",
    description:
      "Parcours préparatoire aux interventions élémentaires et manœuvres simples, avec un accent sur les limites d’intervention, la préparation et la sécurité opérationnelle.",
    objectifs: [
      "Comprendre les limites d’intervention liées aux symboles BS et BE Manœuvre",
      "Appliquer les prescriptions de sécurité avant, pendant et après l’opération",
      "Identifier les situations nécessitant l’arrêt de l’intervention ou l’appel à un personnel habilité adapté",
    ],
    programme: [
      "Rappels sur le risque électrique et les mesures de prévention",
      "Rôle et limites d’un exécutant BS",
      "Rôle et limites d’un habilité BE Manœuvre",
      "Mise en sécurité, vérifications visuelles et environnement de travail",
      "Conduite à tenir en cas d’anomalie, d’incident ou d’accident",
    ],
    note:
      "Module théorique préparatoire. À compléter par une mise en situation pratique adaptée au poste.",
  },
  {
    slug: "b1-b1v-b2-b2v-br-bc",
    category: "Habilitation électrique",
    title: "Habilitation électrique B1 B1V B2 B2V BR BC",
    duration: "Durée indicative : 14 heures",
    mode: "E-learning",
    level: "Avancé",
    audience:
      "Personnel électricien amené à réaliser, diriger, intervenir ou consigner dans le cadre d’opérations d’ordre électrique.",
    description:
      "Parcours théorique structuré autour des rôles, responsabilités, séquences de sécurité, consignation et organisation des opérations d’ordre électrique.",
    objectifs: [
      "Maîtriser les prescriptions de sécurité applicables aux opérations d’ordre électrique",
      "Comprendre les rôles, responsabilités et limites des différents symboles d’habilitation",
      "Mettre en œuvre une démarche de prévention cohérente avant toute opération",
    ],
    programme: [
      "Cadre réglementaire et principes de prévention du risque électrique",
      "Domaines de tension, zones, voisinage et conditions d’intervention",
      "Rôles des habilitations B1, B2, BR, BC et variantes au voisinage",
      "Consignation, intervention, remplacement, raccordement et organisation du travail",
      "Analyse des risques, conduite à tenir et cas pratiques",
    ],
    note:
      "Socle théorique. Les habilitations concernées nécessitent un complément pratique et une évaluation métier.",
  },
  {
    slug: "securite-incendie",
    category: "Prévention incendie",
    title: "Sécurité incendie, alerte et évacuation",
    duration: "Durée indicative : 4 à 7 heures",
    mode: "E-learning",
    level: "Débutant à intermédiaire",
    audience:
      "Tout personnel amené à évoluer dans des locaux tertiaires, industriels, logistiques ou recevant du public.",
    description:
      "Module de sensibilisation à la prévention incendie, à l’alerte, à l’alarme, aux premiers réflexes et à l’évacuation, avec repères sur le Code du travail, les ERP, les IGH et les ICPE.",
    objectifs: [
      "Reconnaître les causes de départ de feu et les facteurs aggravants",
      "Réagir correctement en cas d’alerte ou d’alarme",
      "Connaître les principes d’évacuation et les comportements de prévention",
    ],
    programme: [
      "Naissance du feu et facteurs de propagation",
      "Alerte, alarme et premiers réflexes",
      "Évacuation et point de rassemblement",
      "Cadre réglementaire : Code du travail, ERP, IGH, ICPE",
      "Prévention incendie au quotidien",
    ],
    note:
      "Formation théorique de sensibilisation. Les consignes du site, exercices et mises en situation restent indispensables.",
  },
  {
    slug: "ssi-exploitation",
    category: "SSI",
    title: "Exploitation des SSI - fondamentaux",
    duration: "Durée indicative : 5 à 8 heures",
    mode: "E-learning",
    level: "Intermédiaire",
    audience:
      "Exploitants, responsables de site, personnel technique ou utilisateurs amenés à interagir avec un système de sécurité incendie.",
    description:
      "Module d’initiation au fonctionnement des SSI, à l’exploitation des informations incendie et aux principaux référentiels français de la famille NF S 61.",
    objectifs: [
      "Comprendre le rôle d’un SSI et ses fonctions principales",
      "Distinguer SDI, SMSI et logique de mise en sécurité",
      "Adopter les bons réflexes face à une alarme, un dérangement ou un défaut",
    ],
    programme: [
      "Rôle et logique fonctionnelle d’un SSI",
      "Distinction SDI / SMSI / alarme / mise en sécurité",
      "Référentiels utiles : NF S 61-931, NF S 61-932, NF S 61-970",
      "Réflexes d’exploitation et limites utilisateur",
      "Cas pratiques d’anomalies d’exploitation",
    ],
    note:
      "Ce module ne remplace pas une coordination SSI, une étude de conception ou une maintenance spécialisée.",
  },
  {
    slug: "sprinkler",
    category: "Protection incendie",
    title: "Exploitation sprinkler et référentiels techniques",
    duration: "Durée indicative : 5 à 8 heures",
    mode: "E-learning",
    level: "Intermédiaire",
    audience:
      "Personnel d’exploitation, maintenance, encadrement technique ou responsables de site.",
    description:
      "Module d’initiation à l’exploitation d’une installation sprinkler, à la surveillance des organes critiques et à la compréhension des principaux référentiels techniques.",
    objectifs: [
      "Comprendre le rôle d’une installation sprinkler",
      "Reconnaître ses composants principaux et états anormaux",
      "Identifier les bons réflexes d’exploitation et de remontée des anomalies",
    ],
    programme: [
      "Principe de fonctionnement d’une installation sprinkler",
      "Composants principaux et logique d’exploitation",
      "Anomalies, dérives et états non conformes",
      "Référentiels : APSAD R1, EN 12845, logique assurantielle et exploitation",
      "Focus entrepôts, stockage et ICPE 1510",
    ],
    note:
      "Module d’exploitation et de sensibilisation technique. Il ne remplace pas une étude sprinkler ni un audit de conformité.",
  },
  {
    slug: "sst",
    category: "Secours au travail",
    title: "SST - Sauveteur Secouriste du Travail",
    duration: "Durée indicative : 7 à 14 heures selon parcours",
    mode: "E-learning",
    level: "Débutant à intermédiaire",
    audience:
      "Salariés amenés à participer à la prévention des risques et à la prise en charge initiale d’une victime.",
    description:
      "Parcours théorique d’introduction aux principes SST : protéger, examiner, alerter, secourir et participer à la prévention dans l’entreprise.",
    objectifs: [
      "Repérer une situation dangereuse et éviter le suraccident",
      "Adopter la logique protéger, examiner, alerter, secourir",
      "Comprendre le cadre général d’intervention du SST",
    ],
    programme: [
      "Protéger",
      "Examiner",
      "Alerter ou faire alerter",
      "Secourir",
      "Prévention et rôle du salarié dans l’entreprise",
    ],
    note:
      "La pratique reste indispensable pour maîtriser les gestes et valider réellement la compétence SST.",
  },
];

const pointsForts = [
  "Parcours accessibles en ligne",
  "Contenus structurés autour des risques réels en entreprise",
  "Approche progressive selon les niveaux et métiers",
  "Modules pédagogiques avec chapitres, synthèses et quiz",
  "Vision opérationnelle et réglementaire adaptée au terrain",
];

const categories = [
  "Habilitation électrique",
  "Prévention incendie",
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
              Formations e-learning en prévention, sécurité incendie et habilitations
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Développez les connaissances théoriques essentielles en habilitation
              électrique, sécurité incendie, SSI, sprinkler et SST grâce à des
              parcours en ligne structurés, pédagogiques et orientés terrain.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-400">
              Nos modules ont vocation à accompagner l’acquisition des
              connaissances, des bons réflexes et des repères techniques ou
              réglementaires. Selon les formations concernées, ils ont vocation à
              être complétés par une partie pratique, une mise en situation, une
              évaluation avec formateur ou une adaptation au poste de travail.
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
              Une approche e-learning pensée pour la prévention et l’exploitation
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Les parcours proposés sur PREVENSIA FORMATION visent à transmettre
              les fondamentaux indispensables à la compréhension des risques, aux
              limites des opérations autorisées et à l’adoption des bons réflexes
              dans l’environnement professionnel.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Le catalogue s’adresse aussi bien aux besoins en habilitation
              électrique qu’aux besoins de sensibilisation à la sécurité incendie,
              à l’exploitation d’un SSI, à l’exploitation sprinkler ou aux bases
              SST.
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
            Des parcours progressifs, pensés pour la prévention, la sécurité et
            l’exploitation, avec une logique claire entre sensibilisation,
            acquisition théorique, quiz et validation du parcours.
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

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-sm sm:p-10">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-red-400">
                Besoin d’un accompagnement
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