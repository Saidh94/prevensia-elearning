import Link from "next/link";

const formations = [
  {
    slug: "h0b0",
    title: "Habilitation électrique H0B0",
    duration: "7 heures",
    mode: "E-learning",
    audience:
      "Personnel non électricien amené à évoluer dans un environnement présentant un risque électrique.",
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
  },
  {
    slug: "bs-be-manoeuvre",
    title: "Habilitation électrique BS / BE Manœuvre",
    duration: "10 heures",
    mode: "E-learning",
    audience:
      "Personnel réalisant des interventions élémentaires ou des manœuvres d’exploitation dans le respect des prescriptions de sécurité.",
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
  },
  {
    slug: "b1-b1v-b2-b2v-br-bc",
    title: "Habilitation électrique B1 B1V B2 B2V BR BC",
    duration: "14 heures",
    mode: "E-learning",
    audience:
      "Personnel électricien amené à réaliser, diriger, intervenir ou consigner dans le cadre d’opérations d’ordre électrique.",
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
  },
];

const pointsForts = [
  "Parcours accessibles en ligne",
  "Contenus structurés autour de la prévention du risque électrique",
  "Approche adaptée aux différents niveaux et symboles d’habilitation",
  "Suivi progressif des modules avant évaluation finale",
];

export default function ElearningPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.22),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.16),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-400">
              PREVENSIA FORMATION
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Formations e-learning en habilitation électrique
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Développez les connaissances nécessaires à la prévention du risque
              électrique grâce à des parcours en ligne structurés, conçus autour
              des prescriptions de sécurité applicables et des principes de la
              norme NF C 18-510.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-400">
              Nos modules ont vocation à accompagner l’acquisition des
              connaissances théoriques et des bonnes pratiques. L’habilitation
              électrique relève ensuite de la décision de l’employeur, selon le
              poste occupé, l’aptitude du salarié et l’adéquation de la
              formation suivie.
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
              Une approche e-learning pensée pour la prévention
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Les parcours proposés sur PREVENSIA FORMATION visent à transmettre
              les fondamentaux indispensables à la compréhension du risque
              électrique, aux limites des opérations autorisées et à l’adoption
              des bons réflexes de sécurité dans l’environnement professionnel.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Le contenu est structuré autour des notions essentielles
              habituellement attendues dans le cadre des formations
              préparatoires à l’habilitation électrique : identification des
              dangers, zones d’environnement, rôles et symboles d’habilitation,
              prescriptions de sécurité, analyse des risques et conduite à
              tenir.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-slate-900">
              Points forts
            </h2>

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
            Nos modules d’habilitation électrique
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Trois parcours progressifs, adaptés aux différents besoins
            d’apprentissage en matière d’opérations d’ordre non électrique ou
            d’ordre électrique.
          </p>
        </div>

        <div className="grid gap-6">
          {formations.map((formation) => (
            <article
              key={formation.slug}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-8"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap gap-3">
                    <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-700">
                      {formation.mode}
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-700">
                      {formation.duration}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-slate-900">
                    {formation.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {formation.audience}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 lg:justify-end">
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
                PREVENSIA FORMATION peut également vous accompagner pour
                structurer un parcours adapté à vos salariés, à vos opérations
                et à votre environnement de travail, en cohérence avec les
                exigences de prévention du risque électrique.
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