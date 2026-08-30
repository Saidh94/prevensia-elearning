import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TrainingCatalogTabsClean from "@/components/site/TrainingCatalogTabsClean";
import FloatingContactButtons from "@/components/site/FloatingContactButtons";
import LocationCoverageSection from "@/components/site/LocationCoverageSection";
import { homepageElectricalSummary } from "@/lib/electrical-offers";
import { Header } from "@/app/components/Header";
import HomeSessionsList from "@/app/components/HomeSessionsList";

export const metadata: Metadata = {
  title: "PREVENSIA FORMATION — Habilitation Électrique, ATEX, SSI, SST, Sprinkler",
  description:
    "Organisme certifié Qualiopi. Formations en sécurité professionnelle : habilitation électrique NF C 18-510, ATEX, SSI, SST, sprinkler, coordinateur SSI. Présentiel, e-learning, intra-entreprise. By PREVENSIA GROUPE.",
  alternates: { canonical: "https://prevensia-formation.fr" },
  openGraph: {
    title: "PREVENSIA FORMATION by PREVENSIA GROUPE — Formations Sécurité Certifiées Qualiopi",
    description:
      "Habilitation électrique, ATEX, SSI, SST, sprinkler, coordinateur SSI. Organisme certifié Qualiopi. Présentiel, e-learning, intra.",
    url: "https://prevensia-formation.fr",
  },
};

const formations = [
  {
    title: "Habilitation électrique",
    href: "/formation-habilitation-electrique",
    badge: "NF C 18-510",
    description: homepageElectricalSummary,
    image: "/elearning/commun/habilitation-electrique-accueil.png",
    imageClass: "object-cover object-center",
  },
  {
    title: "Sécurité incendie",
    href: "/formation-securite-incendie",
    badge: "Extincteurs · EPI",
    description:
      "Manipulation extincteurs, guide-file / serre-file et équipier de première intervention.",
    image: "/elearning/commun/secu-incendie-accueil.png",
    imageClass: "object-cover object-center",
  },
  {
    title: "Formation SSI",
    href: "/formation-ssi",
    badge: "NF S 61",
    description:
      "Exploitation du SSI, logiques SDI / CMSI / UGA / DAS et conduite à tenir en cas d'alarme.",
    image: "/elearning/commun/ssi-accueil.png",
    imageClass: "object-cover object-center",
  },
  {
    title: "Exploitation sprinkler",
    href: "/formation-sprinkler",
    badge: "APSAD · NFPA · FM",
    description:
      "Formation sur l'exploitation des installations sprinkler et les principaux référentiels techniques.",
    image: "/elearning/commun/sprinkler-accueil.png",
    imageClass: "object-cover object-center",
  },
  {
    title: "Formation SST",
    href: "/formation-sst",
    badge: "Secourisme",
    description:
      "SST initial et MAC SST pour les entreprises et les apprenants souhaitant se former aux premiers secours.",
    image: "/elearning/commun/sst-accueil.png",
    imageClass: "object-cover object-center",
  },
  {
    title: "Formation et Sensibilisation ATEX",
    href: "/formation-atex",
    badge: "Directive 99/92/CE",
    description:
      "Prévention du risque d'explosion en zone ATEX — 3 niveaux : NIV 0 Sensibilisation, NIV 1 Intervenant, NIV 2 Encadrant. Zonage, équipements certifiés Ex, EPI antistatiques, procédures. Conforme directive 99/92/CE.",
    image: "/elearning/commun/atex-accueil.png",
    imageClass: "object-cover object-center",
  },
  {
    title: "Coordinateur SSI",
    href: "/formation-coordinateur-ssi",
    badge: "NF S 61-931",
    description:
      "Piloter un SSI en ERP, IGH ou site industriel : rédaction du CCF, matrice de corrélation ZDA/ZDM × DAS, coordination des installateurs, constitution du Dossier d'Identité SSI. E-learning + 7 jours de présentiel sur dossiers réels.",
    image: "/elearning/commun/coordinateur-ssi-accueil.png",
    imageClass: "object-cover object-center",
  },
];

const testimonials = [
  {
    name: "Nadia Benyahia",
    text: "Formation claire, bien structurée et adaptée à notre environnement de travail.",
  },
  {
    name: "Karim El Mansouri",
    text: "Très bon niveau technique, avec une vraie compréhension des contraintes d’exploitation.",
  },
  {
    name: "Sophie Martin",
    text: "Approche concrète, utile et directement applicable sur site.",
  },
];

const inrsVideoResources = [
  {
    title: "INRS - Les bases de l'habilitation électrique",
    description:
      "Une ressource utile pour comprendre le rôle de l'habilitation, la place de la formation et la responsabilité de l'employeur.",
    href: "https://www.inrs.fr/media.html?refINRS=Anim-132",
    badge: "Vidéo INRS",
  },
  {
    title: "INRS - Comment choisir les habilitations électriques ?",
    description:
      "Webinaire officiel pour recaler les symboles, les rôles et le choix du bon parcours selon les missions réelles.",
    href: "https://www.inrs.fr/media.html?refINRS=Anim-184",
    badge: "Webinaire INRS",
  },
];

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main>
       <section className="relative overflow-hidden bg-slate-950 text-white">
  <div className="absolute inset-0">
    <Image
      src="/images/hero-prevensia.jpg"
      alt="Prévensia Formation - prévention des risques en entreprise"
      fill
      priority
      sizes="100vw"
      className="object-cover"
    />
  </div>

  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/60 to-slate-900/75" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.18),transparent_38%)]" />

  <div className="relative border-b border-white/10 bg-slate-950/35 backdrop-blur-[2px]">
    <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        <div className="flex items-center gap-2.5">
          <Image
            src="/images/qualiopi.jpg"
            alt="Certification Qualiopi"
            width={44}
            height={44}
            className="h-auto w-9 shrink-0"
          />
          <span className="text-xs font-bold uppercase tracking-wide text-white">
            Certifié Qualiopi
          </span>
        </div>

        <span className="hidden h-3 w-px bg-white/20 sm:block" />

        <span className="text-xs font-semibold text-white/70">
          Référentiel NF C 18-510
        </span>

        <span className="hidden h-3 w-px bg-white/20 sm:block" />

        <span className="text-xs font-semibold text-white/70">
          Habilitation électrique · ATEX · SSI · SST · Sprinkler · Coordinateur SSI
        </span>

        <span className="hidden h-3 w-px bg-white/20 sm:block" />

        <span className="text-xs font-semibold text-white/70">
          Présentiel · E-learning · Intra
        </span>
      </div>
    </div>
  </div>

  <div className="relative mx-auto max-w-4xl px-4 pt-12 text-center sm:px-6 lg:px-8">
    <div className="mb-6 flex flex-col items-center gap-3">
      <p className="text-2xl font-black tracking-tight text-white sm:text-3xl">
        PREVENSIA FORMATION
      </p>
      <p className="text-base font-semibold text-red-300 sm:text-lg">
        by PREVENSIA GROUPE
      </p>
      <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/80 backdrop-blur">
        Organisme certifié Qualiopi — Actions de formation
      </span>
    </div>

    <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[3.25rem]">
      L’expert en formation sécurité&nbsp;professionnelle.
      <span className="mt-2 block text-red-400">
        Habilitation électrique · ATEX · SSI · SST · Sprinkler.
      </span>
    </h1>

    <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-200">
      Des formations conformes, certifiées Qualiopi, conçues pour les entreprises
      qui ne peuvent pas se permettre de faire l&apos;impasse sur la sécurité.
      Intra-entreprise, présentiel ou e-learning — on s&apos;adapte à vous.
    </p>

    {/* Preuve sociale au-dessus du pli */}
    <div className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-3 text-center md:grid-cols-4">
      <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
        <p className="text-2xl font-bold text-red-400 sm:text-3xl">Qualiopi</p>
        <p className="mt-1 text-[11px] uppercase tracking-wider text-slate-300">
          Certifié actions de formation
        </p>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
        <p className="text-2xl font-bold text-white sm:text-3xl">6</p>
        <p className="mt-1 text-[11px] uppercase tracking-wider text-slate-300">
          Domaines de formation
        </p>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
        <p className="text-2xl font-bold text-white sm:text-3xl">10+</p>
        <p className="mt-1 text-[11px] uppercase tracking-wider text-slate-300">
          Parcours e-learning inclus
        </p>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
        <p className="text-2xl font-bold text-white sm:text-3xl">OPCO</p>
        <p className="mt-1 text-[11px] uppercase tracking-wider text-slate-300">
          Financement éligible
        </p>
      </div>
    </div>
  </div>

  <div className="relative mx-auto max-w-5xl px-4 pb-10 pt-8 sm:px-6 lg:px-8">
    <div className="grid gap-5 lg:grid-cols-2">
      <div className="flex flex-col rounded-3xl border border-red-700/30 bg-gradient-to-br from-red-900/50 to-slate-900/80 p-8 shadow-2xl">
        <span className="inline-flex w-fit rounded-xl bg-red-700/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-red-300">
          Entreprises
        </span>
        <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
          Votre prestataire formation sécurité — devis sous 48&nbsp;h
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          Plusieurs salariés à mettre en conformité ? Une obligation réglementaire
          à couvrir ? Un audit sécurité qui pointe des lacunes ?
          On s&apos;occupe de tout, de l&apos;analyse du besoin jusqu&apos;aux attestations.
        </p>
        <ul className="mt-5 space-y-2 text-sm text-slate-300">
          <li className="flex items-center gap-2">
            <span className="mt-0.5 text-red-400">✓</span>
            Intra-entreprise sur votre site — partout en France
          </li>
          <li className="flex items-center gap-2">
            <span className="mt-0.5 text-red-400">✓</span>
            Financement OPCO éligible — on vous aide à monter le dossier
          </li>
          <li className="flex items-center gap-2">
            <span className="mt-0.5 text-red-400">✓</span>
            Attestations, feuilles d&apos;émargement et documents de conformité
          </li>
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/demande-devis"
            className="rounded-2xl bg-red-700 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-red-600"
          >
            Demander un devis
          </Link>
          <Link
            href="/planning"
            className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10"
          >
            Voir le planning
          </Link>
        </div>
      </div>

      <div className="flex flex-col rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800/60 to-slate-900/80 p-8 shadow-2xl">
        <span className="inline-flex w-fit rounded-xl bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-slate-300">
          Particuliers &amp; Apprenants
        </span>
        <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
          E-learning et espace apprenant
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          Accédez à vos modules, quiz, résultats et attestations dans un
          espace dédié, avec un parcours souple et lisible.
        </p>
        <ul className="mt-5 space-y-2 text-sm text-slate-300">
          <li className="flex items-center gap-2">
            <span className="mt-0.5 text-slate-400">✓</span>
            Parcours 100&nbsp;% en ligne, à votre rythme
          </li>
          <li className="flex items-center gap-2">
            <span className="mt-0.5 text-slate-400">✓</span>
            Quiz, résultats et attestation intégrés
          </li>
          <li className="flex items-center gap-2">
            <span className="mt-0.5 text-slate-400">✓</span>
            Conforme NF&nbsp;C&nbsp;18-510
          </li>
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/elearning"
            className="rounded-2xl bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow-lg transition hover:bg-slate-100"
          >
            Accéder à l&apos;espace e-learning
          </Link>
          <a
            href="#catalogue"
            className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10"
          >
            Voir le catalogue
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                <Image
                  src="/images/qualiopi.jpg"
                  alt="Certification Qualiopi"
                  width={70}
                  height={70}
                  className="h-auto w-14 shrink-0 sm:w-16"
                />
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Organisme certifié Qualiopi
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Pour les actions de formation.
                  </p>
                </div>
              </div>

              <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Présentiel, intra et e-learning
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Des formats adaptés aux particuliers, entreprises et
                    groupes.
                  </p>
                </div>
              </div>

              <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Approche technique et réglementaire
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Formation pensée pour les environnements tertiaires,
                    industriels, logistiques et techniques.
                  </p>
                </div>
              </div>

              <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Île-de-France et France entière
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Interventions sur site selon la nature de la prestation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 piliers Prevensia — différenciation et conversion */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                Trois engagements concrets
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Pourquoi les employeurs et les apprenants nous choisissent
              </h2>
              <p className="mt-4 text-slate-600">
                Une logique simple : la formation prépare, l’employeur délivre l’habilitation,
                et nous facilitons toute la chaîne de bout en bout.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-700 text-xl font-bold text-white">
                  1
                </div>
                <h3 className="mt-5 text-xl font-bold">Conformité réglementaire</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Formations alignées sur le Code du travail (R.4544-9, R.4544-10), la
                  NF C 18-510, les référentiels INRS, EN 12845, APSAD R1, NF S 61.
                  Vous tenez vos obligations sans approximation.
                </p>
              </div>

              <div className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-700 text-xl font-bold text-white">
                  2
                </div>
                <h3 className="mt-5 text-xl font-bold">Souplesse de format</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  E-learning encadré pour H0B0/H0V et BS/BE Manœuvre. Présentiel et
                  classe virtuelle pour les habilitations B1, B2, BR, BC. Intra-entreprise
                  pour les groupes. Vous choisissez ce qui colle à votre organisation.
                </p>
              </div>

              <div className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-700 text-xl font-bold text-white">
                  3
                </div>
                <h3 className="mt-5 text-xl font-bold">Traçabilité et attestations</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Plateforme apprenant, suivi des progressions, quiz avec corrigés
                  explicatifs, attestations PDF prêtes à archiver. Pour l’employeur,
                  un accès dédié pour piloter ses inscrits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ rapide — accélère la conversion et capture les longues traînes SEO */}
        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                Questions fréquentes
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Les questions qu’on nous pose souvent
              </h2>
            </div>

            <div className="mt-10 grid gap-4">
              <details className="group rounded-2xl border border-slate-200 bg-white p-5 open:shadow-md">
                <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
                  La formation me délivre-t-elle l’habilitation électrique ?
                  <span className="float-right text-red-700 group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Non. La formation Prevensia vous prépare et atteste de vos acquis
                  théoriques. Le titre d’habilitation est délivré par votre employeur
                  selon votre poste, vos tâches réelles et votre aptitude médicale,
                  conformément au Code du travail (R.4544-10) et à la NF C 18-510.
                </p>
              </details>

              <details className="group rounded-2xl border border-slate-200 bg-white p-5 open:shadow-md">
                <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
                  En combien de temps puis-je commencer ?
                  <span className="float-right text-red-700 group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Pour les parcours e-learning H0B0/H0V et BS/BE Manœuvre, l’accès est
                  ouvert immédiatement après inscription et paiement. Pour les
                  formations encadrées (B1, B2, BR, BC, SST, incendie, sprinkler),
                  consultez le planning ou demandez un devis : nous proposons
                  généralement une session sous 2 à 4 semaines.
                </p>
              </details>

              <details className="group rounded-2xl border border-slate-200 bg-white p-5 open:shadow-md">
                <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
                  Est-ce finançable par l’OPCO ou Pôle emploi ?
                  <span className="float-right text-red-700 group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Prevensia étant certifié Qualiopi, nos formations sont éligibles aux
                  dispositifs de financement par OPCO et France Travail. Nous fournissons
                  les documents justificatifs nécessaires sur demande lors du devis.
                </p>
              </details>

              <details className="group rounded-2xl border border-slate-200 bg-white p-5 open:shadow-md">
                <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
                  Quelle est la durée de validité d’une habilitation ?
                  <span className="float-right text-red-700 group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  La NF C 18-510 recommande un recyclage tous les 3 ans pour le maintien
                  des compétences. L’employeur reste libre de demander un recyclage plus
                  fréquent si l’environnement de travail le justifie.
                </p>
              </details>

              <details className="group rounded-2xl border border-slate-200 bg-white p-5 open:shadow-md">
                <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
                  Pouvez-vous intervenir directement sur notre site ?
                  <span className="float-right text-red-700 group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Oui. Toutes nos formations encadrées peuvent être organisées en
                  intra-entreprise sur votre site, partout en France. Le devis intègre
                  les frais de déplacement et l’adaptation du contenu à vos installations
                  réelles.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section
          id="catalogue"
          className="relative overflow-hidden bg-slate-50 py-16"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/armoire-electrique.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-[0.06]"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 to-slate-50/95" />

          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
                Toutes les formations PREVENSIA FORMATION — certifiées Qualiopi,
                disponibles en présentiel, e-learning ou intra-entreprise.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {formations.map((item) => (
                <div
                  key={item.title}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className={`transition duration-500 group-hover:scale-[1.03] ${
                        item.imageClass ?? "object-cover object-center"
                      }`}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/45 to-transparent" />
                  </div>

                  <div className="p-6">
                    <span className="w-fit rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                      {item.badge}
                    </span>
                    <h3 className="mt-4 text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 min-h-[88px] text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                    <Link
                      href={item.href}
                      className="mt-5 inline-flex rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                      Voir la formation
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

          <TrainingCatalogTabsClean />

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                Ressources INRS
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Deux vidéos utiles pour cadrer le risque électrique
              </h2>
              <p className="mt-4 text-slate-600">
                PREVENSIA s'appuie sur ses propres parcours, mais recommande
                aussi des ressources officielles INRS pour consolider les
                repères réglementaires, le choix des symboles et la logique de
                prévention.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {inrsVideoResources.map((item) => (
                <article
                  key={item.href}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
                >
                  <span className="inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-red-700">
                    {item.badge}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold text-slate-900">
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
                    Voir la ressource officielle
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section SEO — liens internes vers landing pages */}
        <section className="bg-slate-50 py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
              Habilitation électrique par symbole
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Trouvez la formation adaptée à votre poste
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { titre: "H0B0 / H0V", desc: "Non-électriciens, caristes, agents de nettoyage, maintenance mécanique", href: "/formation-h0b0", prix: "dès 190 € HT" },
                { titre: "BS / BE Manœuvre", desc: "Interventions élémentaires, remplacement de fusibles, manœuvres d'exploitation", href: "/formation-bs-be-manoeuvre", prix: "dès 350 € HT" },
                { titre: "B1 / B2 / BR / BC", desc: "Électriciens BT : travaux, dépannage, consignation, vérification", href: "/formation-b1-b2-br-bc", prix: "dès 790 € HT" },
                { titre: "Île-de-France", desc: "Formation intra-entreprise dans vos locaux, 8 départements franciliens", href: "/formation-habilitation-electrique-ile-de-france", prix: "Devis 48h" },
              ].map((f) => (
                <Link key={f.titre} href={f.href} className="group rounded-2xl border border-slate-200 bg-white p-5 hover:border-red-200 hover:shadow-md transition-all">
                  <p className="text-xs font-bold uppercase tracking-widest text-red-600">{f.prix}</p>
                  <h3 className="mt-2 text-lg font-bold text-slate-900 group-hover:text-red-700">{f.titre}</h3>
                  <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
                  <p className="mt-4 text-sm font-semibold text-red-600">Voir la formation →</p>
                </Link>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <p className="text-sm text-slate-500">Ressources :</p>
              {[
                { label: "Comment choisir son habilitation ?", href: "/blog/comment-choisir-son-habilitation-electrique" },
                { label: "Durée de validité de l'habilitation", href: "/blog/duree-validite-habilitation-electrique" },
                { label: "Blog Sécurité & Prévention", href: "/blog" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm text-slate-600 hover:border-red-200 hover:text-red-700 transition-colors">
                  {l.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                Formation SSI
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Comprendre et exploiter un système de sécurité incendie
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Formation dédiée à l’exploitation des systèmes de sécurité
                incendie, à la compréhension de leur architecture et à la
                conduite à tenir face aux événements d’alarme, de défaut ou de
                mise en sécurité.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600">
                L’approche est conçue pour les exploitants, les responsables
                techniques, les services maintenance et les référents sécurité
                évoluant dans des contextes ERP, Code du travail, ICPE ou IGH.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="text-sm font-bold text-slate-900">
                    Exploitation réelle du SSI
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Comprendre les chaînes de détection, l’alarme, la mise en
                    sécurité et les réactions attendues face aux défauts.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="text-sm font-bold text-slate-900">
                    Référentiels et contexte réglementaire
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Lecture structurée des logiques NF S 61, ERP, Code du
                    travail, ICPE, IGH et principes APSAD liés à l’exploitation.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/formation-ssi"
                  className="inline-flex rounded-2xl bg-red-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-800"
                >
                  Découvrir la formation SSI
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="relative mx-auto aspect-[16/10] w-full max-w-[560px] overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src="/images/image-ssi.jpg"
                  alt="Système de sécurité incendie"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover object-[center_30%]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-100 py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                Avis clients
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Ce que disent les personnes formées
              </h2>
              <p className="mt-4 text-slate-600">
                Des formations adaptées aux réalités du terrain, avec une
                approche concrète et opérationnelle.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="text-amber-500">★★★★★</div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    “{item.text}”
                  </p>
                  <p className="mt-5 text-sm font-bold text-slate-900">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <LocationCoverageSection />

        <section id="planning" className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                Sessions présentielles
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Quelques prochaines dates
              </h2>
              <p className="mt-4 text-slate-600">
                Aperçu des prochaines sessions en présentiel. Consultez le
                planning complet pour visualiser toutes les dates disponibles.
              </p>
            </div>

            <HomeSessionsList />

            <div className="mt-8">
              <Link
                href="/planning"
                className="inline-flex rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Voir toutes les sessions
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-slate-100 py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                À qui s&apos;adresse PREVENSIA FORMATION ?
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Un chemin clair selon votre situation
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                  Entreprises
                </p>
                <h3 className="mt-3 text-xl font-bold text-slate-900">
                  Formation intra et devis groupe
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Plusieurs salariés à former, une organisation intra ou un
                  besoin spécifique de conformité ? La demande de devis est le
                  point d&apos;entrée adapté.
                </p>
                <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-red-700">✓</span>
                    Formations sur mesure et intra-entreprise
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-red-700">✓</span>
                    Prise en charge OPCO possible
                 
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-red-700">✓</span>
                    Attestations et documents de conformité
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    href="/demande-devis"
                    className="inline-flex rounded-2xl bg-red-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-800"
                  >
                    Demander un devis
                  </Link>
                </div>
              </div>

              <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                  Apprenants
                </p>
                <h3 className="mt-3 text-xl font-bold text-slate-900">
                  E-learning et espace apprenant
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Accédez à vos modules, quiz, résultats et attestations dans
                  un espace dédié, à votre rythme.
                </p>
                <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-red-700">✓</span>
                    Parcours 100&nbsp;% en ligne
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-red-700">✓</span>
                    Quiz, corrigés et attestation intégrés
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-red-700">✓</span>
                    Conforme NF&nbsp;C&nbsp;18-510
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    href="/elearning"
                    className="inline-flex rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Accéder à l&apos;espace
                  </Link>
                </div>
              </div>

              <div
                id="contact"
                className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                  Contact
                </p>
                <h3 className="mt-3 text-xl font-bold text-slate-900">
                  Échangeons sur votre besoin
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  PREVENSIA FORMATION accompagne particuliers et professionnels
                  partout en France selon la prestation.
                </p>
                <div className="mt-4 space-y-2 text-sm">
                  <a
                    href="tel:+33189629492"
                    className="flex items-center gap-2 font-semibold text-slate-900 transition hover:text-red-700"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-700">☎</span>
                    01 89 62 94 92
                  </a>
                  <a
                    href="mailto:contact@prevensia-formation.fr"
                    className="flex items-center gap-2 font-medium text-slate-600 transition hover:text-slate-900"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">✉</span>
                    contact@prevensia-formation.fr
                  </a>
                </div>
                <div className="mt-5 flex flex-col gap-2">
                  <a
                    href="https://wa.me/33780992417?text=Bonjour%20je%20souhaite%20des%20informations%20sur%20vos%20formations"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-green-300 bg-green-50 px-4 py-2.5 text-sm font-semibold text-green-700 transition hover:bg-green-100"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.523 5.836L.057 23.998l6.304-1.653A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.213-3.718.975.993-3.63-.234-.373A9.818 9.818 0 1112 21.818z"/></svg>
                    WhatsApp
                  </a>
                  <a
                    href="https://www.linkedin.com/in/prevensia-formation-3450a0385/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-blue-200 bg-blue-50 px-4 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <FloatingContactButtons />
    </div>
  );
}
