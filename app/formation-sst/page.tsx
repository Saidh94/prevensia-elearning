import Link from "next/link";
import CourseJsonLd from "@/components/seo/CourseJsonLd";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata = {
  alternates: { canonical: "https://prevensia-formation.fr/formation-sst" },
  title: "Formation SST — Sauveteur Secouriste du Travail | PREVENSIA",
  description:
    "Formation SST initiale et recyclage MAC SST : premiers secours, PEAS, défibrillateur. Qualiopi. Intra-entreprise France entière. Devis 48h.",
  openGraph: {
    title: "Formation SST — Sauveteur Secouriste du Travail & MAC SST",
    description:
      "Formation SST initiale et recyclage MAC SST : gestes de premiers secours, PEAS, défibrillateur. Qualiopi. Intra partout en France.",
    url: "https://prevensia-formation.fr/formation-sst",
  },
  keywords: [
    "formation SST",
    "sauveteur secouriste du travail",
    "MAC SST recyclage",
    "formation premiers secours entreprise",
    "formation PEAS SST",
    "organisme formation SST Qualiopi",
  ],
};

const faqItemsSst = [
  {
    question: "À qui s'adresse la formation SST ?",
    answer:
      "La formation SST s'adresse aux salariés, agents, techniciens et personnels d'entreprise souhaitant apprendre les gestes de premiers secours et contribuer à la prévention des risques professionnels.",
  },
  {
    question: "Quelle différence entre SST initiale et MAC SST ?",
    answer:
      "La formation SST initiale (14h) permet d'acquérir les bases du secourisme au travail et d'obtenir le certificat SST INRS. Le MAC SST (7h) est le maintien et l'actualisation des compétences, à renouveler tous les 2 ans pour conserver la validité du certificat.",
  },
  {
    question: "La formation SST est-elle obligatoire en entreprise ?",
    answer:
      "Selon l'activité et les risques, la présence de salariés SST peut être imposée par la réglementation ou fortement recommandée dans le cadre du DUERP. Le Code du travail (R.4224-15) impose la présence d'un secouriste dans tout atelier où sont effectués des travaux dangereux.",
  },
  {
    question: "Le certificat SST est-il reconnu à l'échelle nationale ?",
    answer:
      "Oui. Le certificat SST est un titre national délivré par l'INRS et les CARSAT. Il est reconnu par toutes les entreprises et administrations françaises. Sa validité est de 2 ans, renouvelable par un MAC SST.",
  },
];

const inrsSstResources = [
  {
    title: "INRS - Vidéo SST et secourisme au travail",
    description:
      "Ressource INRS utile pour renforcer la culture de prévention, la logique protéger / examiner / alerter / secourir et la place du SST dans l'entreprise.",
    href: "https://www.inrs.fr/media.html?refINRS=Anim-049",
    badge: "INRS",
    cta: "Voir la vidéo INRS",
  },
  {
    title: "INRS France - Sélection vidéos SST",
    description:
      "Sélection YouTube INRS pour compléter les gestes de secours, la prévention et les réflexes attendus en entreprise.",
    href: "https://www.youtube.com/@INRSFrance/search?query=SST",
    badge: "INRS France",
    cta: "Voir la sélection INRS",
  },
];

export default function FormationSST() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Formation SST", url: "/formation-sst" },
        ]}
      />
      <FaqJsonLd items={faqItemsSst} />
      <CourseJsonLd
        name="Formation SST – Sauveteur Secouriste du Travail"
        description="Formation SST initiale (14 h) et MAC SST (7 h) selon le programme INRS, en présentiel pour entreprises et professionnels."
        courseCode="SST"
        url="/formation-sst"
        timeRequired="PT14H"
        educationalLevel="Beginner"
        audience="Salariés, encadrants, agents de prévention"
        educationalCredentialAwarded="Certificat SST INRS"
      />

      {/* Hero */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <nav aria-label="Fil d'Ariane" className="mb-6 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Formation SST</span>
          </nav>

          <p className="inline-flex rounded-full border border-red-400/30 bg-red-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-red-300">
            Secourisme au travail · Certification INRS
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Formation SST —{" "}
            <span className="text-red-400">Sauveteur Secouriste du Travail</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            PREVENSIA FORMATION propose des formations SST initiales et MAC SST
            pour les entreprises et les professionnels souhaitant renforcer la
            sécurité au travail, développer les réflexes de premiers secours et
            contribuer à la prévention des risques professionnels.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/demande-devis?type=sst"
              className="rounded-xl bg-red-700 px-6 py-3 font-semibold text-white hover:bg-red-800 transition-colors"
            >
              Demander un devis
            </Link>
            <Link
              href="#programmes"
              className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Voir les programmes
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
            <span>✓ Formateurs certifiés INRS</span>
            <span>✓ SST initial 14h</span>
            <span>✓ MAC SST 7h</span>
            <span>✓ Intra-entreprise France entière</span>
            <span>✓ Qualiopi</span>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-red-700">
                Modalités
              </p>
              <p className="mt-3 text-lg font-semibold">Présentiel</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Sessions organisées en entreprise ou dans un cadre adapté aux
                exercices pratiques et aux mises en situation.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-red-700">
                Public
              </p>
              <p className="mt-3 text-lg font-semibold">Salariés et entreprises</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Formation destinée aux salariés amenés à intervenir en cas
                d&apos;accident du travail et à participer à la prévention.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-red-700">
                Objectif
              </p>
              <p className="mt-3 text-lg font-semibold">Secourir et prévenir</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Acquérir les bons gestes face à une urgence et contribuer à la
                réduction des risques dans l&apos;entreprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">
            Pourquoi suivre une formation SST ?
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            La formation Sauveteur Secouriste du Travail permet aux salariés
            d&apos;intervenir rapidement en cas d&apos;accident, de malaise ou de situation
            d&apos;urgence sur le lieu de travail. Elle contribue également à
            développer une culture de prévention au sein de l&apos;entreprise.
          </p>

          <p className="mt-4 leading-8 text-slate-700">
            Cette formation répond à un besoin concret de sécurité des personnes,
            tout en renforçant l&apos;organisation interne des entreprises face aux
            risques professionnels.
          </p>
        </div>
      </section>

      <section
        id="programmes"
        className="bg-white py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Programmes proposés</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold">SST initial</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Formation complète permettant d&apos;apprendre à protéger, examiner,
                alerter, secourir et participer à la prévention des risques
                professionnels dans l&apos;entreprise.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold">MAC SST</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Maintien et actualisation des compétences pour conserver les bons
                réflexes, réviser les gestes de secours et actualiser les
                connaissances du sauveteur secouriste du travail.
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
                Une formation orientée terrain
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                La formation SST repose sur des mises en situation concrètes, des
                cas pratiques et un apprentissage opérationnel des gestes de
                premiers secours. Elle favorise l&apos;acquisition de réflexes simples,
                efficaces et adaptés au contexte professionnel.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                Elle convient particulièrement aux entreprises souhaitant former
                leurs équipes sur site avec une approche réaliste et applicable
                immédiatement.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8">
              <h2 className="text-2xl font-bold">
                Un levier de prévention pour l&apos;entreprise
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Au-delà des gestes de secours, la formation SST permet aussi
                d&apos;identifier les situations à risque et de participer à la
                prévention au quotidien. Elle s&apos;inscrit pleinement dans une
                démarche de sécurité et de protection des salariés.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                C&apos;est une formation particulièrement utile pour les structures
                souhaitant renforcer leur organisation face aux accidents du
                travail et améliorer la sécurité globale de leurs équipes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Pourquoi choisir PREVENSIA FORMATION ?</h2>

          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700">
              Sessions SST initiales et MAC SST adaptées aux besoins des entreprises
            </li>
            <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700">
              Approche concrète orientée terrain, gestes de secours et prévention
            </li>
            <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700">
              Organisation rapide des sessions et adaptation au nombre de stagiaires
            </li>
            <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700">
              Réponse claire et rapide pour les demandes de devis et de planification
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
            Ressources INRS
          </p>
          <h2 className="mt-3 text-2xl font-bold">
            Ressources INRS pour compléter la formation SST
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-700">
            PREVENSIA recommande aussi des ressources officielles INRS pour renforcer la culture de prévention, la lecture de la situation d&apos;accident et les bons réflexes de secourisme au travail.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {inrsSstResources.map((item) => (
              <article
                key={item.href}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6"
              >
                <span className="inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-red-700">
                  {item.badge}
                </span>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  {item.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">
            Questions fréquentes sur la formation SST
          </h2>

          <div className="mt-6">
            <details className="mb-4 rounded-xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold">
                À qui s&apos;adresse la formation SST ?
              </summary>
              <p className="mt-3 text-slate-700">
                La formation SST s&apos;adresse aux salariés, agents, techniciens et
                personnels d&apos;entreprise souhaitant apprendre les gestes de
                premiers secours et contribuer à la prévention des risques
                professionnels.
              </p>
            </details>

            <details className="mb-4 rounded-xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold">
                Quelle différence entre SST initiale et MAC SST ?
              </summary>
              <p className="mt-3 text-slate-700">
                La formation SST initiale permet d&apos;acquérir les bases, tandis que
                le MAC SST correspond au maintien et à l&apos;actualisation des
                compétences du sauveteur secouriste du travail.
              </p>
            </details>

            <details className="mb-4 rounded-xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold">
                La formation SST est-elle obligatoire ?
              </summary>
              <p className="mt-3 text-slate-700">
                Selon l&apos;activité et les risques de l&apos;entreprise, la présence de
                salariés formés au secourisme peut être nécessaire pour répondre
                aux obligations de prévention et de sécurité au travail.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">
            Découvrir nos autres formations professionnelles
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-slate-700">
            PREVENSIA FORMATION propose également des formations en habilitation électrique,
            sécurité incendie, exploitation du système de sécurité incendie (SSI) et
            exploitation sprinkler pour les entreprises et collectivités.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a href="/formation-habilitation-electrique" className="rounded-xl border px-4 py-2 hover:border-red-600 hover:text-red-600">
              Habilitation électrique
            </a>

            <a href="/formation-ssi" className="rounded-xl border px-4 py-2 hover:border-red-600 hover:text-red-600">
              Formation SSI
            </a>

            <a href="/formation-securite-incendie" className="rounded-xl border px-4 py-2 hover:border-red-600 hover:text-red-600">
              Sécurité incendie
            </a>

            <a href="/formation-sprinkler" className="rounded-xl border px-4 py-2 hover:border-red-600 hover:text-red-600">
              Exploitation sprinkler
            </a>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="bg-white py-16 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">Tarifs indicatifs</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">Formations SST et MAC SST</h2>
          <p className="mt-4 max-w-2xl text-slate-600">
            Toutes nos formations SST sont dispensées en intra-entreprise. Le tarif groupe couvre jusqu&apos;à 10 participants sur site.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-red-700">SST initial</p>
              <p className="mt-4 text-3xl font-bold text-slate-900">240 € <span className="text-lg font-medium text-slate-500">HT / personne</span></p>
              <p className="mt-1 text-sm text-slate-500">À partir de 1 190 € HT / groupe (intra)</p>
              <ul className="mt-4 space-y-1 text-sm text-slate-600">
                <li>✓ 14 heures (2 jours) en présentiel</li>
                <li>✓ 4 à 10 participants</li>
                <li>✓ Certification INRS incluse</li>
                <li>✓ France entière</li>
              </ul>
              <Link href="/demande-devis?type=sst&detail=initial" className="mt-5 inline-flex rounded-xl bg-red-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-800 transition-colors">
                Devis SST initial →
              </Link>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-orange-600">MAC SST (recyclage)</p>
              <p className="mt-4 text-3xl font-bold text-slate-900">130 € <span className="text-lg font-medium text-slate-500">HT / personne</span></p>
              <p className="mt-1 text-sm text-slate-500">À partir de 690 € HT / groupe (intra)</p>
              <ul className="mt-4 space-y-1 text-sm text-slate-600">
                <li>✓ 7 heures (1 jour) en présentiel</li>
                <li>✓ Obligatoire tous les 2 ans</li>
                <li>✓ Mise à jour des gestes SST</li>
                <li>✓ France entière</li>
              </ul>
              <Link href="/demande-devis?type=sst&detail=mac" className="mt-5 inline-flex rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-red-300 hover:text-red-700 transition-colors">
                Devis MAC SST →
              </Link>
            </div>
          </div>
          <p className="mt-4 text-xs text-slate-400">Tarifs HT indicatifs · Frais de déplacement hors Île-de-France en sus · Devis personnalisé sous 48h</p>
        </div>
      </section>

      <section className="bg-red-50 border-y border-red-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Besoin d&apos;un devis rapide ?</h2>

          <p className="mt-4 max-w-3xl leading-8 text-slate-700">
            Indiquez votre besoin, le nombre de participants, vos
            contraintes de site et nous revenons vers vous avec une proposition
            adaptée (initial ou MAC, intra-entreprise, sessions sur site).
          </p>

          <div className="mt-6">
            <Link
              href="/demande-devis?type=sst"
              className="inline-flex rounded-2xl bg-red-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-red-800"
            >
              Demander un devis SST
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
