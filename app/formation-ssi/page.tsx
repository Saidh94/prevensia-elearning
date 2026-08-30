import Link from "next/link";
import CourseJsonLd from "@/components/seo/CourseJsonLd";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata = {
  alternates: { canonical: "https://prevensia-formation.fr/formation-ssi" },
  title: "Formation Exploitation SSI — SDI, CMSI, DAS, NF S 61 | PREVENSIA",
  description:
    "Formation SSI pour exploitants et responsables techniques : SDI, CMSI, UGA, DAS, normes NF S 61. ERP / IGH / ICPE. Qualiopi. Devis sous 48h.",
  openGraph: {
    title: "Formation Exploitation SSI — SDI, CMSI, DAS, NF S 61 | PREVENSIA",
    description:
      "Formation exploitation SSI pour responsables techniques : SDI, CMSI, UGA, DAS, normes NF S 61. ERP / IGH. Qualiopi. Devis 48h.",
    url: "https://prevensia-formation.fr/formation-ssi",
  },
  keywords: [
    "formation exploitation SSI",
    "formation système sécurité incendie",
    "formation NF S 61",
    "formation CMSI SDI UGA DAS",
    "formation SSI ERP IGH",
    "formation responsable technique incendie",
  ],
};

const faqItemsSsi = [
  {
    question: "À qui s'adresse la formation exploitation SSI ?",
    answer:
      "La formation s'adresse aux exploitants de bâtiments, responsables techniques, agents de maintenance, responsables sécurité et tout personnel amené à surveiller ou utiliser un SSI au quotidien dans un ERP, IGH, site industriel ou logistique.",
  },
  {
    question: "Quelle est la différence entre le SDI, le CMSI et l'UGA ?",
    answer:
      "Le SDI (Système de Détection Incendie) détecte les départs de feu et transmet l'information. Le CMSI (Centralisateur de Mise en Sécurité Incendie) commande les équipements de mise en sécurité (désenfumage, compartimentage, DAS). L'UGA (Unité de Gestion de l'Alarme) gère les niveaux d'alarme et la diffusion sonore. Ces éléments constituent ensemble le SSI.",
  },
  {
    question: "La formation SSI est-elle obligatoire pour les exploitants de bâtiments ?",
    answer:
      "La réglementation ERP (Code de la Construction) et le Code du travail imposent aux exploitants de s'assurer que le personnel maîtrise l'exploitation du SSI. Une formation spécifique est fortement recommandée, voire imposée selon la catégorie et le type d'établissement.",
  },
  {
    question: "La formation couvre-t-elle les interventions en cas d'alarme ?",
    answer:
      "Oui. La formation inclut la conduite à tenir en cas d'alarme (feu, défaut, dérangement), les procédures de levée de doute, la coordination avec les secours et les consignes d'exploitation adaptées au site.",
  },
];

export default function FormationSSI() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Formation SSI", url: "/formation-ssi" },
        ]}
      />
      <FaqJsonLd items={faqItemsSsi} />
      <CourseJsonLd
        name="Formation exploitation du SSI"
        description="Formation à l'exploitation du Système de Sécurité Incendie : normes NF S 61, cadres ERP, IGH, Code du Travail, ICPE. Pour exploitants et responsables techniques."
        courseCode="SSI"
        url="/formation-ssi"
        timeRequired="P1D"
        educationalLevel="Intermediate"
        audience="Exploitants, responsables techniques, équipes maintenance"
        educationalCredentialAwarded="Attestation de formation Prevensia"
      />

      {/* Hero */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <nav aria-label="Fil d'Ariane" className="mb-6 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Formation SSI</span>
          </nav>

          <p className="inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-blue-300">
            Exploitation SSI · NF S 61-933
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Formation{" "}
            <span className="text-blue-400">Exploitation du SSI</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            PREVENSIA FORMATION propose des formations à l&apos;exploitation du
            système de sécurité incendie pour les exploitants, responsables
            techniques, équipes maintenance et personnels amenés à utiliser ou
            surveiller un SSI dans un bâtiment tertiaire, industriel ou
            logistique.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/demande-devis?type=ssi"
              className="rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800 transition-colors"
            >
              Demander un devis
            </Link>
            <Link
              href="/elearning"
              className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Accéder à l&apos;e-learning
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
            <span>✓ SDI / CMSI / UGA / DAS</span>
            <span>✓ Normes NF S 61</span>
            <span>✓ ERP / IGH / ICPE</span>
            <span>✓ E-learning inclus</span>
            <span>✓ Qualiopi</span>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-700">
                Modalités
              </p>
              <p className="mt-3 text-lg font-semibold">Présentiel</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Sessions organisées sur site ou dans un cadre adapté à la
                compréhension des installations et des consignes de sécurité.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-700">
                Public
              </p>
              <p className="mt-3 text-lg font-semibold">
                Exploitants et équipes techniques
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Formation destinée aux personnels amenés à exploiter un SSI au
                quotidien ou à intervenir en cas d&apos;alarme incendie.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-700">
                Objectif
              </p>
              <p className="mt-3 text-lg font-semibold">Comprendre et exploiter</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Savoir lire les informations du SSI, comprendre son rôle et
                appliquer les bons réflexes en situation normale ou dégradée.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">
            Pourquoi suivre une formation à l&apos;exploitation du SSI ?
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Le système de sécurité incendie joue un rôle central dans la
            détection incendie, l&apos;alarme, la mise en sécurité et la gestion des
            informations techniques liées au feu. Une bonne compréhension du SSI
            permet aux exploitants et aux équipes de réagir de manière plus
            efficace et plus sûre.
          </p>

          <p className="mt-4 leading-8 text-slate-700">
            Cette formation aide les participants à mieux identifier les
            équipements, comprendre les signalisations et adopter les bonnes
            pratiques d&apos;exploitation au quotidien.
          </p>
        </div>
      </section>

      <section
        id="programmes"
        className="bg-white py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">
            Programme de la formation exploitation SSI
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold">
                Architecture et fonctionnement du SSI
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Compréhension des principes de détection incendie, d&apos;alarme, de
                compartimentage, de désenfumage et de mise en sécurité.
                Identification des différents équipements du système de sécurité
                incendie et lecture des informations issues des ECS et CMSI.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold">
                Exploitation quotidienne du système
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Lecture des signalisations, distinction entre alarmes feu,
                défauts et dérangements techniques, conduite à tenir en cas de
                déclenchement, levée de doute et consignes d&apos;exploitation
                adaptées au site.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold">
                Cadre normatif des systèmes de sécurité incendie
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Présentation des principales normes AFNOR de la série NF S 61
                relatives aux systèmes de sécurité incendie, notamment les
                règles générales d&apos;installation, d&apos;exploitation et de
                maintenance des équipements de détection, d&apos;alarme et de mise en
                sécurité.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold">
                Réglementation applicable selon le type d&apos;établissement
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Présentation des exigences réglementaires liées aux
                établissements recevant du public (ERP), aux immeubles de grande
                hauteur (IGH), aux bâtiments à usage professionnel au sens du
                Code du Travail (BUP) ainsi qu&apos;aux installations classées pour
                la protection de l&apos;environnement (ICPE).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8">
              <h2 className="text-2xl font-bold">
                Une formation utile pour les sites exploités
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                La formation SSI est particulièrement pertinente pour les ERP,
                bâtiments tertiaires, plateformes logistiques, sites industriels
                et établissements disposant d&apos;un système de sécurité incendie
                exploité en routine.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                Elle permet de mieux structurer les réactions du personnel face à
                un événement feu ou à un défaut technique signalé par
                l&apos;installation.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8">
              <h2 className="text-2xl font-bold">
                Une approche adaptée au niveau des participants
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                PREVENSIA FORMATION adapte le contenu en fonction du profil des
                participants, du système installé sur site et du niveau
                d&apos;exploitation attendu dans l&apos;établissement.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                L&apos;objectif est de proposer une formation claire, utile et
                immédiatement applicable dans le contexte réel du client.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">
            Pourquoi choisir PREVENSIA FORMATION ?
          </h2>

          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700">
              Formation SSI pensée pour les besoins d&apos;exploitation réels des sites
            </li>
            <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700">
              Contenu clair orienté lecture du système, conduite à tenir et sécurité
            </li>
            <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700">
              Intégration des principales normes AFNOR série NF S 61 et des
              exigences réglementaires applicables
            </li>
            <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700">
              Réponse rapide pour les demandes de devis et l&apos;organisation des sessions
            </li>
          </ul>
        </div>
      </section>

      {/* Module e-learning extinction gaz */}
      <section className="bg-amber-50 border-y border-amber-200 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-amber-700">
            MODULE E-LEARNING INCLUS
          </p>
          <h2 className="mt-3 text-2xl font-bold">
            Extinction automatique à gaz — exploitation et référentiels
          </h2>
          <p className="mt-4 leading-7 text-slate-700">
            Ce module e-learning de <strong>4 à 6 heures</strong> est inclus avec le module SSI exploitation renforcé. Il est dédié aux installations fixes d&apos;extinction à gaz : sécurité des personnes, intégrité du local protégé, repères APSAD R13 et NF EN 15004-1.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-amber-600">✓</span>
              Comprendre la logique d&apos;un système d&apos;extinction automatique à gaz
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-amber-600">✓</span>
              Distinguer l&apos;extinction à gaz d&apos;une installation sprinkler
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-amber-600">✓</span>
              Identifier les contraintes de local protégé, d&apos;alarme, de temporisation et de réaccès
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-amber-600">✓</span>
              Repères APSAD R13 et NF EN 15004-1
            </li>
          </ul>
          <p className="mt-5 text-sm text-slate-500 italic">
            Public : personnel d&apos;exploitation, maintenance, encadrement technique ou responsables de locaux protégés par extinction automatique à gaz.
          </p>
          <div className="mt-6">
            <a
              href="/elearning"
              className="inline-flex rounded-xl border border-amber-400 bg-white px-4 py-2 text-sm font-semibold text-amber-700 transition hover:bg-amber-100"
            >
              Voir tous les modules e-learning →
            </a>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section id="tarifs" className="bg-slate-950 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-400">
            Tarifs
          </p>
          <h2 className="mt-3 text-2xl font-bold text-white">
            Formations SSI — grille tarifaire 2026
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-300">
            Trois formats selon votre niveau technique et vos contraintes d&apos;organisation.
            Toutes nos formations SSI sont certifiées Qualiopi et finançables OPCO.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* 1 jour */}
            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                Exploitation SSI — 1 jour
              </p>
              <p className="mt-4 text-3xl font-bold text-white">650 €</p>
              <p className="text-sm text-slate-400">HT / apprenant · inter</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-300">
                <li>✓ Architecture SDI / CMSI / UGA / DAS</li>
                <li>✓ Lecture des signalisations</li>
                <li>✓ Conduite à tenir en cas d&apos;alarme</li>
                <li>✓ Normes NF S 61 applicables</li>
                <li>✓ E-learning inclus</li>
                <li>✓ Attestation de formation</li>
              </ul>
              <Link
                href="/demande-devis?type=ssi&format=1j"
                className="mt-7 block rounded-xl border border-blue-400 px-4 py-2 text-center text-sm font-semibold text-blue-300 hover:bg-blue-900 transition-colors"
              >
                Demander un devis
              </Link>
            </div>

            {/* 2 jours avancé */}
            <div className="rounded-2xl border-2 border-blue-500 bg-slate-900 p-7 relative">
              <span className="absolute -top-3 left-6 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                Recommandé
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-400">
                SSI Avancé — 2 jours
              </p>
              <p className="mt-4 text-3xl font-bold text-white">1 190 €</p>
              <p className="text-sm text-slate-400">HT / apprenant · inter</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-300">
                <li>✓ Tout le contenu 1 jour</li>
                <li>✓ Exploitation renforcée sur site</li>
                <li>✓ Scénarios défaut / alarme / travaux</li>
                <li>✓ Module e-learning extinction gaz inclus</li>
                <li>✓ ERP · IGH · ICPE · logistique</li>
                <li>✓ Attestation de formation</li>
              </ul>
              <Link
                href="/demande-devis?type=ssi&format=2j"
                className="mt-7 block rounded-xl bg-blue-700 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-blue-600 transition-colors"
              >
                Demander un devis
              </Link>
            </div>

            {/* Intra */}
            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                Intra entreprise
              </p>
              <p className="mt-4 text-3xl font-bold text-white">2 200 €</p>
              <p className="text-sm text-slate-400">HT / jour · groupe</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-300">
                <li>✓ Formation sur votre site</li>
                <li>✓ Adapté à votre SSI installé</li>
                <li>✓ Jusqu&apos;à 10 participants / session</li>
                <li>✓ Contenu calé sur vos consignes</li>
                <li>✓ Financement OPCO possible</li>
                <li>✓ Devis sous 48h</li>
              </ul>
              <Link
                href="/demande-devis?type=ssi&format=intra"
                className="mt-7 block rounded-xl border border-slate-600 px-4 py-2 text-center text-sm font-semibold text-slate-200 hover:bg-slate-800 transition-colors"
              >
                Demander un devis intra
              </Link>
            </div>
          </div>

          <p className="mt-8 text-sm text-slate-400">
            {"💡"} Pour un groupe de 6 à 10 personnes, l&apos;intra est souvent la solution la plus économique — un tarif journée pour toute l&apos;équipe.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">
            Questions fréquentes sur la formation SSI
          </h2>

          <div className="mt-6">
            <details className="mb-4 rounded-xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold">
                À qui s&apos;adresse la formation SSI ?
              </summary>
              <p className="mt-3 text-slate-700">
                Elle s&apos;adresse aux exploitants, responsables techniques,
                équipes maintenance, services généraux et personnels amenés à
                utiliser ou surveiller un système de sécurité incendie.
              </p>
            </details>

            <details className="mb-4 rounded-xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold">
                Que permet de comprendre la formation SSI ?
              </summary>
              <p className="mt-3 text-slate-700">
                Elle permet de comprendre le rôle du SSI, l&apos;architecture du
                système, les signaux courants, les normes applicables et les
                réactions attendues en cas d&apos;alarme, de défaut ou de
                dérangement.
              </p>
            </details>

            <details className="mb-4 rounded-xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold">
                Peut-on adapter la formation au site de l&apos;entreprise ?
              </summary>
              <p className="mt-3 text-slate-700">
                Oui, PREVENSIA FORMATION peut adapter la session au système
                installé, aux consignes du site, aux référentiels applicables et
                au niveau de connaissance des participants.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Découvrir nos autres formations</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <a
              href="/formation-habilitation-electrique"
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
            >
              Formation habilitation électrique
            </a>

            <a
              href="/formation-sst"
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
            >
              Formation SST – Sauveteur Secouriste du Travail
            </a>

            <a
              href="/formation-ssiap1"
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
            >
              Formation SSIAP1 — Agent sécurité incendie
            </a>

            <a
              href="/formation-sprinkler"
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
            >
              Formation exploitation sprinkler
            </a>

            <a
              href="/formation-coordinateur-ssi"
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
            >
              Formation Coordinateur SSI — Pilotage &amp; référentiels
            </a>
          </div>
        </div>
      </section>

      {/* Bonus SSIAP1 e-learning */}
      <section className="bg-green-50 border-y border-green-200 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">
                🎁 Inclus avec votre formation SSI
              </p>
              <h3 className="mt-2 text-lg font-bold text-green-900">
                Module e-learning SSIAP1 offert — Préparation théorique à la formation et à l&apos;examen
              </h3>
              <p className="mt-2 text-sm leading-6 text-green-800">
                Chaque apprenant inscrit à la formation SSI PREVENSIA reçoit gratuitement l&apos;accès au
                module e-learning de préparation SSIAP1 (2h30–3h) : classes de feux, extincteurs, SSI,
                procédures d&apos;évacuation ERP et cadre réglementaire. Idéal pour consolider la culture
                sécurité incendie — et préparer l&apos;épreuve QCM de l&apos;examen officiel SSIAP1.
              </p>
            </div>
            <Link
              href="/elearning"
              className="shrink-0 rounded-xl border border-green-400 bg-white px-4 py-2 text-sm font-semibold text-green-700 hover:bg-green-100 transition-colors"
            >
              Accéder au module e-learning →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 border-y border-blue-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Besoin d&apos;un devis rapide ?</h2>

          <p className="mt-4 max-w-3xl leading-8 text-slate-700">
            Indiquez votre besoin, le nombre de participants, vos contraintes
            de site et nous revenons vers vous avec une proposition adaptée
            (présentiel, intra-entreprise, accompagnement).
          </p>

          <div className="mt-6">
            <Link
              href="/demande-devis?type=ssi"
              className="inline-flex rounded-2xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800"
            >
              Demander un devis SSI
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
