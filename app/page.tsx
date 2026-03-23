import Image from "next/image";

export default function Home() {
  const formationsElearning = [
    {
      title: "Habilitation électrique H0B0",
      mode: "E-learning",
      description:
        "Formation destinée au personnel non-électricien intervenant à proximité d'installations électriques.",
      duration: "7 h",
    },
    {
      title: "BS / BE Manœuvre",
      mode: "E-learning",
      description:
        "Parcours pour les opérations élémentaires et les manœuvres sur installations basse tension.",
      duration: "10 h",
    },
    {
      title: "B1 B1V B2 B2V BR BC",
      mode: "E-learning",
      description:
        "Formation complète pour personnel électricien avec modules théoriques et évaluation des connaissances.",
      duration: "14 h",
    },
  ];

  const formationsPresentiel = [
    {
      title: "Manipulation des extincteurs",
      mode: "Présentiel",
      description:
        "Apprentissage des classes de feu, choix de l'agent extincteur et mise en situation pratique.",
      duration: "2 h à 3 h",
    },
    {
      title: "Guide-file / Serre-file",
      mode: "Présentiel",
      description:
        "Organisation de l'évacuation, consignes, rôles et exercices adaptés à votre établissement.",
      duration: "3 h",
    },
    {
      title: "Équipier de Première Intervention (EPI)",
      mode: "Présentiel",
      description:
        "Sensibilisation opérationnelle pour agir rapidement en cas de départ de feu et sécuriser l'évacuation.",
      duration: "1/2 journée",
    },
    {
      title: "Exploitation SSI",
      mode: "Présentiel",
      description:
        "Lecture du SSI, conduite à tenir, levée de doute, acquittement et exploitation des informations.",
      duration: "1/2 journée à 1 jour",
    },
    {
      title: "Exploitation sprinkler et référentiels techniques",
      mode: "Présentiel",
      description:
        "Formation dédiée à l’exploitation des installations sprinkler et à la compréhension des exigences techniques et des principaux cadres applicables selon EN 12845, APSAD R1, NFPA 13 et FM Global.",
      duration: "1 à 2 jours",
    },
    {
      title: "Sauveteur Secouriste du Travail (SST) - Initial",
      mode: "Présentiel",
      description:
        "Formation SST conforme au référentiel INRS pour permettre aux salariés d’intervenir efficacement face à un accident du travail et de contribuer à la prévention des risques professionnels.",
      duration: "2 jours",
    },
    {
      title: "MAC SST - Maintien et Actualisation des Compétences",
      mode: "Présentiel",
      description:
        "Recyclage SST permettant de maintenir les compétences du sauveteur secouriste du travail et d’actualiser les gestes de secours.",
      duration: "1 jour",
    },
  ];

  const planning = [
    {
      date: "10 juin 2026",
      title: "Habilitation électrique H0B0",
      format: "E-learning accompagné",
      audience: "Particuliers / Professionnels",
    },
    {
      date: "18 juin 2026",
      title: "BS / BE Manœuvre",
      format: "E-learning accompagné",
      audience: "Professionnels",
    },
    {
      date: "02 juillet 2026",
      title: "Manipulation extincteurs",
      format: "Présentiel sur site client",
      audience: "Professionnels",
    },
    {
      date: "09 juillet 2026",
      title: "Guide-file / Serre-file",
      format: "Présentiel inter / intra",
      audience: "Particuliers / Professionnels",
    },
    {
      date: "16 septembre 2026",
      title: "Exploitation sprinkler et référentiels techniques",
      format: "Présentiel inter / intra",
      audience: "Professionnels",
    },
    {
      date: "23 septembre 2026",
      title: "SST - Formation initiale",
      format: "Présentiel inter / intra",
      audience: "Professionnels",
    },
    {
      date: "07 octobre 2026",
      title: "MAC SST",
      format: "Présentiel inter / intra",
      audience: "Professionnels",
    },
  ];

  const stats = [
    { value: "3 pôles", label: "Électrique, incendie & SST" },
    { value: "Qualiopi", label: "Organisme certifié" },
    { value: "B2B / B2C", label: "Particuliers & entreprises" },
    { value: "Rapide", label: "Demande de devis simplifiée" },
  ];

  const blocsIllustres = [
    {
      title: "Habilitation électrique",
      image: "/images/armoire-electrique.jpg",
      text: "Parcours e-learning et accompagnés pour les habilitations H0B0, BS, BE manœuvre, B1, B2, BR et BC.",
    },
    {
      title: "SSI & sécurité incendie",
      image: "/images/image-ssi.jpg",
      text: "Formations exploitation SSI, manipulation extincteurs, guide-file, serre-file et équipier de première intervention.",
    },
    {
      title: "Exploitation sprinkler",
      image: "/images/installation-spk.jpg",
      text: "Formation technique sur les installations sprinkler et les référentiels EN 12845, APSAD R1, NFPA 13 et FM Global.",
    },
    {
      title: "Formation en salle",
      image: "/images/salle-de-formation.jpg",
      text: "Sessions inter ou intra-entreprises pour les bureaux, industriels, exploitants et collectivités.",
    },
    {
      title: "SST / MAC SST",
      image: "/images/sst.webp",
      text: "Apprentissage des gestes de premiers secours, conduite à tenir et maintien des compétences en entreprise.",
    },
  ];

  const catalog = [...formationsElearning, ...formationsPresentiel];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo-prevensia-formation.jpg"
              alt="Logo Prevensia Formation"
              width={220}
              height={80}
              className="h-auto w-[150px] sm:w-[220px]"
              priority
            />
          </div>

          <nav className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
            <a href="#formations" className="transition hover:text-red-700">
              Formations
            </a>
            <a href="#catalogue" className="transition hover:text-red-700">
              Catalogue
            </a>
            <a href="#planning" className="transition hover:text-red-700">
              Planning
            </a>
            <a href="/demande-devis" className="transition hover:text-red-700">
              Demande de devis
            </a>
            <a href="#contact" className="transition hover:text-red-700">
              Contact
            </a>
          </nav>

          <a
            href="/demande-devis"
            className="rounded-2xl bg-red-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
          >
            Obtenir un devis
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0">
            <Image
              src="/images/salle-de-formation.jpg"
              alt="Formation en salle"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-red-900/80" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div className="flex flex-col justify-center">
              <p className="mb-3 inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-red-100">
                Organisme de formation
              </p>

              <div className="mb-5 inline-flex w-fit items-center gap-3 rounded-2xl border border-emerald-300/30 bg-white/10 px-4 py-2">
                <Image
                  src="/images/qualiopi.jpg"
                  alt="Qualiopi"
                  width={110}
                  height={60}
                  className="h-auto w-[80px] rounded-md object-cover sm:w-[110px]"
                />
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-100">
                  Organisme certifié Qualiopi
                </p>
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Formations en habilitation électrique, sécurité incendie et SST
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                PREVENSIA FORMATION accompagne les particuliers et les professionnels
                avec des parcours e-learning et des formations présentielles orientées
                terrain, conformité réglementaire et efficacité opérationnelle.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#catalogue"
                  className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5"
                >
                  Voir le catalogue
                </a>
                <a
                  href="/demande-devis"
                  className="rounded-2xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Demander un devis
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-xl font-bold">{item.value}</p>
                    <p className="mt-1 text-sm text-slate-300">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 self-center">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-100">
                  Nos parcours
                </p>

                <div className="mt-5 grid gap-4">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm font-semibold text-red-100">E-learning</p>
                    <p className="mt-2 text-lg font-semibold">Habilitation électrique</p>
                    <p className="mt-2 text-sm text-slate-200">
                      Modules accessibles à distance avec progression structurée,
                      contenu réglementaire et suivi apprenant.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm font-semibold text-red-100">Présentiel</p>
                    <p className="mt-2 text-lg font-semibold">
                      Sécurité incendie & exploitation sprinkler
                    </p>
                    <p className="mt-2 text-sm text-slate-200">
                      Sessions opérationnelles sur site ou en inter-entreprises.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm font-semibold text-red-100">Présentiel</p>
                    <p className="mt-2 text-lg font-semibold">SST</p>
                    <p className="mt-2 text-sm text-slate-200">
                      Formation SST initiale et MAC SST avec mises en situation concrètes.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 p-4 text-white">
                    <p className="text-sm font-semibold">Demande rapide</p>
                    <p className="mt-2 text-lg font-semibold">
                      Particuliers & Professionnels
                    </p>
                    <p className="mt-2 text-sm text-white/90">
                      Décrivez votre besoin, le nombre de participants et votre délai
                      souhaité pour obtenir une proposition adaptée.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="formations"
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
              Domaines de formation
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Une offre pensée pour la conformité, la sécurité et l’efficacité terrain
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Trois grands domaines : l’habilitation électrique, la sécurité incendie
              et la formation SST.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {blocsIllustres.map((bloc) => (
              <div
                key={bloc.title}
                className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-56">
                  <Image
                    src={bloc.image}
                    alt={bloc.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{bloc.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{bloc.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="rounded-[1.75rem] border border-emerald-200 bg-emerald-50 p-6 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/qualiopi.jpg"
                  alt="Qualiopi processus certifié"
                  width={120}
                  height={70}
                  className="h-auto w-[90px] rounded-md object-cover sm:w-[120px]"
                />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                    Certification Qualiopi
                  </p>
                  <p className="mt-1 text-sm text-slate-700">
                    Organisme certifié Qualiopi au titre des actions de formation.
                  </p>
                </div>
              </div>
              <a
                href="/demande-devis"
                className="inline-flex rounded-2xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                Demander un devis
              </a>
            </div>
          </div>
        </section>

        <section
          id="catalogue"
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                Catalogue de formations
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Toutes les formations en un seul endroit
              </h2>
            </div>
            <p className="max-w-2xl text-slate-600">
              Un catalogue lisible pour présenter les objectifs, la durée, le mode de
              réalisation et le public visé.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
            <div className="hidden grid-cols-12 border-b border-slate-200 bg-slate-50 px-6 py-4 text-sm font-semibold text-slate-700 md:grid">
              <div className="col-span-5">Formation</div>
              <div className="col-span-2">Mode</div>
              <div className="col-span-2">Durée</div>
              <div className="col-span-3">Description</div>
            </div>

            {catalog.map((item) => (
              <div
                key={item.title}
                className="grid grid-cols-1 gap-3 border-b border-slate-100 px-6 py-5 text-sm last:border-b-0 md:grid-cols-12 md:items-start"
              >
                <div className="font-semibold text-slate-900 md:col-span-5">
                  {item.title}
                </div>
                <div className="text-slate-600 md:col-span-2">{item.mode}</div>
                <div className="text-slate-600 md:col-span-2">{item.duration}</div>
                <div className="text-slate-600 md:col-span-3">{item.description}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="planning" className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                Planning des sessions
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Consultez les prochaines dates
              </h2>
              <p className="mt-4 text-slate-600">
                Une vue simple des prochaines sessions pour réserver rapidement ou nous
                consulter pour une organisation sur mesure.
              </p>
            </div>

            <div className="mt-8 grid gap-4">
              {planning.map((item) => (
                <div
                  key={`${item.date}-${item.title}`}
                  className="grid gap-4 rounded-[1.5rem] border border-slate-200 p-6 shadow-sm md:grid-cols-[180px_1fr_220px_220px] md:items-center"
                >
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-red-700">
                      Date
                    </p>
                    <p className="mt-1 text-lg font-bold">{item.date}</p>
                  </div>

                  <div>
                    <p className="text-xl font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{item.format}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                      Public
                    </p>
                    <p className="mt-1 text-sm text-slate-700">{item.audience}</p>
                  </div>

                  <div className="flex justify-start md:justify-end">
                    <a
                      href="/demande-devis"
                      className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                    >
                      Réserver / Demander
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-slate-100 py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
            <div className="rounded-[1.75rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 lg:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-bold">Échangeons sur votre besoin</h2>
              <p className="mt-4 text-slate-600">
                PREVENSIA FORMATION accompagne les particuliers et les professionnels
                pour leurs besoins en formation réglementaire et opérationnelle.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                    Email
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    prevensia.formation@outlook.fr
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                    Téléphone
                  </p>
                  <p className="mt-2 text-lg font-semibold">01 89 62 94 92</p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                    Zone d’intervention
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    France entière selon la prestation
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                    Réponse
                  </p>
                  <p className="mt-2 text-lg font-semibold">Retour rapide sur demande</p>
                </div>
              </div>

              <a
                href="/demande-devis"
                className="mt-8 inline-flex rounded-2xl bg-red-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
              >
                Demander un devis
              </a>
            </div>

            <div className="rounded-[1.75rem] bg-slate-900 p-8 text-white shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-300">
                Atouts
              </p>
              <ul className="mt-6 space-y-4 text-sm leading-6 text-slate-300">
                <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  Organisme certifié Qualiopi au titre des actions de formation
                </li>
                <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  Offre mixte e-learning et présentiel
                </li>
                <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  Organisation adaptée aux besoins B2B et B2C
                </li>
                <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  SST, sécurité incendie, SSI et habilitation électrique
                </li>
                <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  Demande de devis simple et orientée conversion
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo-prevensia-formation.jpg"
              alt="Logo Prevensia Formation"
              width={160}
              height={50}
              className="h-auto w-[130px]"
            />
            <div>
              <p className="font-semibold text-slate-900">PREVENSIA FORMATION</p>
              <p>
                Formations en habilitation électrique, sécurité incendie,
                sprinkler et SST
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#catalogue" className="hover:text-red-700">
              Catalogue
            </a>
            <a href="#planning" className="hover:text-red-700">
              Planning
            </a>
            <a href="/demande-devis" className="hover:text-red-700">
              Demande de devis
            </a>
            <a href="#contact" className="hover:text-red-700">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}