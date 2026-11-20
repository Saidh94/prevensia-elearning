import Link from "next/link";
import CourseJsonLd from "@/components/seo/CourseJsonLd";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import {
  getUpcomingSessions,
  formatSessionDate,
  placesRestantes,
} from "@/lib/formations/sessions";

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
  const sessionsDJ = getUpcomingSessions("ssi").filter((s) => s.format === "demi-journee");
  const sessionsJ = getUpcomingSessions("ssi").filter((s) => s.format === "journee");

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

      <section id="programmes" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Programmes détaillés</h2>
          <p className="mt-3 text-slate-600">Deux formats distincts — choisissez selon le niveau d&apos;expertise visé.</p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">

            {/* Demi-journée */}
            <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-8">
              <div className="flex items-center gap-3">
                <span className="rounded-lg bg-blue-700 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">Demi-journée (9h–12h)</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">Exploitation SSI — Essentiels</h3>
              <p className="mt-2 text-sm text-slate-600">Pour tout personnel amené à intervenir sur ou à proximité d&apos;un SSI : exploitants, agents techniques, responsables sécurité.</p>

              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Partie théorique</p>
                  <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
                    <li>→ Architectures SSI : SDI, CMSI, UGA, DAS (NF S 61-930 à -934)</li>
                    <li>→ Catégories A à E — niveaux de surveillance et de sécurité</li>
                    <li>→ Lecture du tableau central : zones d&apos;alarme, dérangements, défauts</li>
                    <li>→ Niveaux d&apos;alarme (1 et 2), report de synthèse, conduite à tenir</li>
                    <li>→ Essais périodiques réglementaires et registre de sécurité</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Partie pratique</p>
                  <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
                    <li>→ Identifier une zone ou une boucle en alarme sur SSI pédagogique</li>
                    <li>→ Réaliser les essais d&apos;alarme et neutraliser un point adressable</li>
                    <li>→ Exercice de simulation : scénario alarme + dérangement simultané</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Évaluation</p>
                  <p className="mt-1 text-sm text-slate-600">Exercices de mise en situation sur SSI réel · Attestation individuelle délivrée</p>
                </div>
              </div>
            </div>

            {/* Journée complète */}
            <div className="rounded-2xl border-2 border-blue-500 bg-white p-8">
              <div className="flex items-center gap-3">
                <span className="rounded-lg bg-blue-700 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">Journée complète (9h–17h)</span>
                <span className="rounded-lg bg-slate-900 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">Recommandé</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">Exploitation SSI — Approfondie</h3>
              <p className="mt-2 text-sm text-slate-600">Pour les exploitants ERP/IGH, responsables techniques et facility managers qui gèrent un SSI au quotidien.</p>

              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Matin (9h–12h30) — Fondamentaux + Dossier SSI</p>
                  <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
                    <li>→ Tout le programme demi-journée</li>
                    <li>→ Lecture et analyse du Dossier d&apos;Identité SSI (DIS)</li>
                    <li>→ Plans de zonage : ZA, ZC, ZF, ZDM, ZDA et correspondances DAS</li>
                    <li>→ Spécificités ERP (arrêté 25/06/1980), IGH, ICPE</li>
                    <li>→ Désenfumage : CMSI, déclenchements automatiques et manuels</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Après-midi (13h30–17h) — Scénarios complexes</p>
                  <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
                    <li>→ Analyse de scénarios : défaut secteur, alarme restreinte, boucle coupée</li>
                    <li>→ Travaux en présence du SSI — consignation simple et remise en service</li>
                    <li>→ Défauts / alarmes / travaux : arbitrage et procédures</li>
                    <li>→ Module e-learning extinction gaz inclus (bonus numérique)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Évaluation</p>
                  <p className="mt-1 text-sm text-slate-600">Questionnaire de validation + exercice pratique noté · Attestation individuelle délivrée</p>
                </div>
              </div>
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

      {/* Sessions planifiées */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Prochaines sessions inter-entreprises</h2>
          <p className="mt-3 text-slate-600 max-w-2xl">
            Les sessions sont ouvertes à partir de <strong>4 participants</strong>. Réservez votre place —
            nous confirmons par email dès que le groupe est constitué.
            Sessions à Noisy-le-Grand (93). <strong>Hors IDF :</strong> sur devis.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-blue-700">Demi-journée (9h–12h)</h3>
              {sessionsDJ.length === 0 ? (
                <p className="text-slate-500 text-sm">Aucune session planifiée — contactez-nous.</p>
              ) : (
                <div className="flex flex-col gap-3">
                  {sessionsDJ.map((s) => {
                    const places = placesRestantes(s);
                    return (
                      <div key={s.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 flex items-center justify-between gap-4">
                        <div>
                          <p className="font-semibold">{formatSessionDate(s.dateStart)}</p>
                          <p className="mt-1 text-sm text-slate-500">{s.lieu}</p>
                          <p className="mt-1 text-xs text-slate-400">
                            {places <= 2 ? (
                              <span className="text-orange-600 font-medium">Plus que {places} place{places > 1 ? "s" : ""}</span>
                            ) : (
                              <span>{places} places disponibles</span>
                            )}
                          </p>
                        </div>
                        <Link
                          href={`/demande-devis?type=ssi&session=${s.id}&date=${s.dateStart}&format=demi-journee`}
                          className="shrink-0 rounded-xl bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800 transition-colors"
                        >
                          Réserver
                        </Link>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-blue-700">Journée complète (9h–17h, pause incluse)</h3>
              {sessionsJ.length === 0 ? (
                <p className="text-slate-500 text-sm">Aucune session planifiée — contactez-nous.</p>
              ) : (
                <div className="flex flex-col gap-3">
                  {sessionsJ.map((s) => {
                    const places = placesRestantes(s);
                    return (
                      <div key={s.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 flex items-center justify-between gap-4">
                        <div>
                          <p className="font-semibold">{formatSessionDate(s.dateStart)}</p>
                          <p className="mt-1 text-sm text-slate-500">{s.lieu}</p>
                          <p className="mt-1 text-xs text-slate-400">
                            {places <= 2 ? (
                              <span className="text-orange-600 font-medium">Plus que {places} place{places > 1 ? "s" : ""}</span>
                            ) : (
                              <span>{places} places disponibles</span>
                            )}
                          </p>
                        </div>
                        <Link
                          href={`/demande-devis?type=ssi&session=${s.id}&date=${s.dateStart}&format=journee`}
                          className="shrink-0 rounded-xl bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800 transition-colors"
                        >
                          Réserver
                        </Link>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Besoin d&apos;une date hors planning ou formation sur votre site ?{" "}
            <Link href="/demande-devis?type=ssi&format=intra" className="text-blue-700 underline underline-offset-2">
              Demandez un devis intra-entreprise
            </Link>.
          </p>
        </div>
      </section>

      {/* Tarifs */}
      <section id="tarifs" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">
            Tarifs — Exploitation SSI
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-700">
            Tarifs inter-entreprises à Noisy-le-Grand (93). <strong>Minimum 4 participants, maximum 10.</strong> Tarif dégressif à partir de 7 inscrits sur la même session.
            <strong> Hors Île-de-France :</strong> sur devis (déplacement formateur en sus).
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Demi-journée 4-6 pers */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-700">
                Demi-journée — 4 à 6 participants
              </p>
              <p className="mt-4 text-3xl font-bold text-slate-900">290 €</p>
              <p className="text-sm text-slate-500">HT / participant · inter IDF</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                <li>✓ Architecture SDI / CMSI / UGA / DAS</li>
                <li>✓ Lecture des signalisations</li>
                <li>✓ Conduite à tenir en cas d&apos;alarme</li>
                <li>✓ Normes NF S 61-931 / 61-932</li>
                <li>✓ E-learning inclus</li>
                <li>✓ Attestation de formation</li>
              </ul>
              <Link
                href="/demande-devis?type=ssi&format=demi-journee"
                className="mt-7 block rounded-xl border border-blue-300 px-4 py-2 text-center text-sm font-semibold text-blue-700 hover:bg-blue-50 transition-colors"
              >
                Réserver pour mon groupe
              </Link>
            </div>

            {/* Demi-journée 7-10 pers */}
            <div className="rounded-2xl border-2 border-blue-400 bg-white p-7 relative">
              <span className="absolute -top-3 left-6 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                Tarif dégressif 7-10 pers.
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-700">
                Demi-journée — 7 à 10 participants
              </p>
              <p className="mt-4 text-3xl font-bold text-slate-900">240 €</p>
              <p className="text-sm text-slate-500">HT / participant · inter IDF</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                <li>✓ Même contenu demi-journée</li>
                <li>✓ Tarif dégressif dès 7 inscrits</li>
                <li>✓ E-learning inclus</li>
                <li>✓ Attestation de formation</li>
              </ul>
              <Link
                href="/demande-devis?type=ssi&format=demi-journee-groupe"
                className="mt-7 block rounded-xl bg-blue-700 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-blue-800 transition-colors"
              >
                Réserver pour mon groupe
              </Link>
            </div>

            {/* Journée 4-6 pers */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-700">
                Journée complète — 4 à 6 participants
              </p>
              <p className="mt-4 text-3xl font-bold text-slate-900">490 €</p>
              <p className="text-sm text-slate-500">HT / participant · inter IDF</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                <li>✓ Contenu approfondi + scénarios</li>
                <li>✓ Exploitation renforcée (ERP, IGH, ICPE)</li>
                <li>✓ Défauts / alarmes / travaux</li>
                <li>✓ Module e-learning extinction gaz inclus</li>
                <li>✓ Attestation de formation</li>
              </ul>
              <Link
                href="/demande-devis?type=ssi&format=journee"
                className="mt-7 block rounded-xl border border-blue-300 px-4 py-2 text-center text-sm font-semibold text-blue-700 hover:bg-blue-50 transition-colors"
              >
                Réserver pour mon groupe
              </Link>
            </div>

            {/* Journée 7-10 pers */}
            <div className="rounded-2xl border-2 border-blue-400 bg-white p-7 relative">
              <span className="absolute -top-3 left-6 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                Tarif dégressif 7-10 pers.
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-700">
                Journée complète — 7 à 10 participants
              </p>
              <p className="mt-4 text-3xl font-bold text-slate-900">420 €</p>
              <p className="text-sm text-slate-500">HT / participant · inter IDF</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                <li>✓ Même contenu journée approfondie</li>
                <li>✓ Tarif dégressif dès 7 inscrits</li>
                <li>✓ Module e-learning extinction gaz inclus</li>
                <li>✓ Attestation de formation</li>
              </ul>
              <Link
                href="/demande-devis?type=ssi&format=journee-groupe"
                className="mt-7 block rounded-xl bg-blue-700 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-blue-800 transition-colors"
              >
                Réserver pour mon groupe
              </Link>
            </div>

            {/* Intra IDF */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                Intra-entreprise IDF
              </p>
              <p className="mt-4 text-3xl font-bold text-slate-900">1 200 €</p>
              <p className="text-sm text-slate-500">HT / demi-journée · sur votre site</p>
              <p className="mt-1 text-sm text-slate-500">ou <strong>1 800 € HT</strong> / journée complète</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>✓ Formation sur votre site IDF</li>
                <li>✓ Adapté à votre SSI installé</li>
                <li>✓ Jusqu&apos;à 10 participants</li>
                <li>✓ Contenu calé sur vos consignes</li>
                <li>✓ Devis sous 48h</li>
              </ul>
              <Link
                href="/demande-devis?type=ssi&format=intra"
                className="mt-7 block rounded-xl border border-slate-300 px-4 py-2 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Demander un devis intra
              </Link>
            </div>

            {/* Hors IDF */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                  Hors Île-de-France
                </p>
                <p className="mt-4 text-2xl font-bold text-slate-700">Sur devis</p>
                <p className="mt-2 text-sm text-slate-500">Déplacement formateur en sus</p>
                <p className="mt-4 text-sm text-slate-600">
                  Contactez-nous pour une formation SSI dans votre région.
                  Nous vous revenons sous 48h avec un devis adapté.
                </p>
              </div>
              <Link
                href="/demande-devis?type=ssi&format=hors-idf"
                className="mt-7 block rounded-xl border border-slate-300 px-4 py-2 text-center text-sm font-semibold text-slate-700 hover:bg-white transition-colors"
              >
                Demander un devis
              </Link>
            </div>
          </div>

          <p className="mt-8 text-sm text-slate-500">
            💡 Pour un groupe de 6 à 10 personnes en intra, le tarif forfaitaire journée couvre toute l&apos;équipe.
            OPCO : nos formations sont finançables selon les critères de votre OPCO de rattachement.
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

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/formation-sprinkler"
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
            >
              Formation exploitation sprinkler
            </Link>

            <Link
              href="/formation-coordinateur-ssi"
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
            >
              Formation Coordination SSI — Pilotage &amp; référentiels
            </Link>

            <Link
              href="/formation-h0b0"
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
            >
              Habilitation électrique H0B0 — 100 % e-learning
            </Link>

            <Link
              href="/formation-atex"
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
            >
              Sensibilisation ATEX NIV 0 — 100 % e-learning
            </Link>
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
