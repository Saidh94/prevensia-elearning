import Link from "next/link";
import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import FaqJsonLd from "@/components/seo/FaqJsonLd";

export const metadata: Metadata = {
  title: "Formation SSIAP : guide complet SSIAP 1, 2 et 3 | PREVENSIA",
  description:
    "Tout savoir sur la formation SSIAP : niveaux 1, 2 et 3, conditions d'accès (âge, PSC1, casier), coût (dès 390 € HT pour le recyclage), financement OPCO, débouchés et salaires 2025-2026.",
  alternates: {
    canonical: "https://prevensia-formation.fr/blog/formation-ssiap-securite-incendie",
  },
  keywords: [
    "formation SSIAP",
    "SSIAP 1 certification",
    "formation agent sécurité incendie",
    "recyclage SSIAP obligatoire",
    "SSIAP financement formation professionnelle",
    "SSIAP débouchés salaires",
    "arrêté 2 mai 2005 SSIAP",
    "ERP agent sécurité incendie",
  ],
  openGraph: {
    title: "Formation certifiante SSIAP sécurité incendie : guide complet",
    description:
      "SSIAP 1, 2 et 3 : niveaux, conditions d'accès, financement OPCO et FNE-Formation, débouchés et salaires. Le guide complet pour devenir agent de sécurité incendie ERP.",
    url: "https://prevensia-formation.fr/blog/formation-ssiap-securite-incendie",
  },
};

const faqItems = [
  {
    question: "Le SSIAP est-il finançable via un dispositif de formation ?",
    answer:
      "Oui, les formations SSIAP peuvent être financées via différents dispositifs : OPCO (pour les salariés en entreprise), FNE-Formation, Pôle Emploi pour les demandeurs d'emploi. L'éligibilité CPF via Mon Compte Formation dépend du référencement spécifique de l'organisme — renseignez-vous directement auprès de PREVENSIA FORMATION pour connaître les financements disponibles pour votre situation.",
  },
  {
    question: "Peut-on passer le SSIAP 1 sans expérience dans la sécurité ?",
    answer:
      "Oui, pour le SSIAP 1. Il n'y a aucune condition d'expérience préalable. Il suffit d'être majeur (18 ans), d'avoir le PSC1 ou PSE 1, un casier judiciaire vierge (B3) et une aptitude médicale. C'est l'une des reconversions les plus accessibles du marché.",
  },
  {
    question: "Combien de temps faut-il pour passer du SSIAP 1 au SSIAP 3 ?",
    answer:
      "Comptez environ 3 à 5 ans minimum. Entre chaque niveau, la réglementation impose environ 1 607 heures d'expérience professionnelle validée (environ un an à temps plein). SSIAP 2 exige le SSIAP 1 + 1 607 h terrain + PSE 2. SSIAP 3 exige le SSIAP 2 + 1 607 h + niveau bac.",
  },
  {
    question: "Que se passe-t-il si mon SSIAP n'est plus valide ?",
    answer:
      "Un SSIAP périmé (non recyclé tous les 3 ans) rend impossible l'exercice légal du métier. Il faut suivre une formation de recyclage (14 heures pour le SSIAP 1) auprès d'un organisme agréé. Le recyclage peut être financé via votre OPCO ou d'autres dispositifs selon votre situation.",
  },
  {
    question: "Le SSIAP mène-t-il uniquement à des postes de sécurité incendie ?",
    answer:
      "Non. Le SSIAP est souvent couplé avec une carte professionnelle de sécurité privée (CNAPS), ce qui ouvre des postes d'agent de sécurité polyvalent, d'agent d'accueil-sécurité ou de surveillance. De nombreux employeurs recherchent des profils combinant les deux qualifications.",
  },
];

const niveaux = [
  {
    niveau: "SSIAP 1",
    titre: "Agent de sécurité incendie",
    role: "Terrain : surveillance, évacuation, premiers secours, rondes",
    duree: "70 heures (théorie + pratique)",
    prerequis: ["Être majeur (18 ans)", "Casier judiciaire vierge (B3)", "PSC1 ou PSE 1", "Aptitude médicale"],
  },
  {
    niveau: "SSIAP 2",
    titre: "Chef d'équipe de sécurité incendie",
    role: "Encadrement d'une équipe SSIAP 1, gestion du PC sécurité",
    duree: "55 heures (accès avec SSIAP 1 + 1 607 h terrain)",
    prerequis: ["SSIAP 1 en cours de validité", "1 607 h d'expérience terrain", "PSE 2"],
  },
  {
    niveau: "SSIAP 3",
    titre: "Chef de service de sécurité incendie",
    role: "Direction du service, interface direction, plans de sécurité",
    duree: "70 heures (accès avec SSIAP 2 + 1 607 h)",
    prerequis: ["SSIAP 2 en cours de validité", "1 607 h en qualité de chef d'équipe", "Niveau bac ou équivalent reconnu"],
  },
];

const salaires = [
  { niveau: "SSIAP 1 débutant", salaire: "1 600 € – 1 900 €" },
  { niveau: "SSIAP 1 expérimenté", salaire: "1 900 € – 2 200 €" },
  { niveau: "SSIAP 2", salaire: "2 200 € – 2 700 €" },
  { niveau: "SSIAP 3", salaire: "2 800 € – 3 800 €" },
];

export default function ArticleFormationSSIAPPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Formation SSIAP : guide complet", url: "/blog/formation-ssiap-securite-incendie" },
        ]}
      />
      <FaqJsonLd items={faqItems} />

      {/* Hero */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="mb-6 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Formation SSIAP</span>
          </nav>
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest">
            <span className="rounded-full bg-red-600 px-3 py-1 text-white">Guide</span>
            <span className="text-slate-400">8 min de lecture · 28 mars 2026</span>
          </div>
          <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Formation certifiante SSIAP sécurité incendie : guide complet
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Guide des formations SSIAP 1, 2 et 3, conditions d&apos;accès, financement OPCO
            et débouchés dans la sécurité incendie ERP.
          </p>
        </div>
      </section>

      {/* Article */}
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">

        {/* Résumé rapide */}
        <div className="rounded-2xl border-l-4 border-red-600 bg-red-50 p-6">
          <p className="font-bold text-red-800 text-lg">L&apos;essentiel en un coup d&apos;œil</p>
          <ul className="mt-3 space-y-1 text-sm text-red-700 leading-7">
            <li>✓ <strong>SSIAP 1</strong> : agent terrain ERP, 70 h, dès 1 090 € HT, accessible sans expérience préalable</li>
            <li>✓ <strong>Recyclage obligatoire</strong> tous les 3 ans (arrêté du 2 mai 2005) — 14 h, dès 390 € HT</li>
            <li>✓ <strong>Finançable OPCO</strong> — Renseignez-vous pour les dispositifs disponibles</li>
            <li>✓ <strong>Débouchés solides</strong> : hôpitaux, centres commerciaux, hôtels, gares, IGH</li>
            <li>✓ <strong>Salaires</strong> : 1 600 €/mois (SSIAP 1 débutant) → 3 800 €/mois (SSIAP 3)</li>
          </ul>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">Qu&apos;est-ce que la formation SSIAP et pourquoi est-elle obligatoire ?</h2>
          <p className="mt-4 text-slate-600 leading-8">
            Le SSIAP (Service de Sécurité Incendie et d&apos;Assistance à Personnes) est une certification
            réglementaire, encadrée par l&apos;<strong>arrêté du 2 mai 2005</strong>. Il est obligatoire pour
            exercer dans les Établissements Recevant du Public (ERP) de certaines catégories — centres
            commerciaux, hôpitaux, cinémas, hôtels, gares.
          </p>
          <p className="mt-4 text-slate-600 leading-8">
            Sans ce diplôme, il est impossible d&apos;être recruté légalement comme agent de sécurité incendie
            dans ces structures. La formation est dispensée par des <strong>organismes agréés par la préfecture</strong>,
            et la certification est délivrée après examen. La demande est forte dans tous les grands bassins
            d&apos;emploi, notamment en Île-de-France et dans les métropoles régionales.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">Les trois niveaux SSIAP et leurs différences</h2>
          <div className="mt-6 space-y-5">
            {niveaux.map((n) => (
              <div key={n.niveau} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-lg bg-red-700 px-3 py-1 text-sm font-bold text-white">{n.niveau}</span>
                  <h3 className="text-lg font-bold text-slate-900">{n.titre}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-600 leading-7">{n.role}</p>
                <p className="mt-2 text-sm font-semibold text-slate-700">Durée : {n.duree}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {n.prerequis.map((p) => (
                    <span key={p} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">{p}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Chaque niveau est progressif : on ne peut accéder au SSIAP 2 sans valider le SSIAP 1, et le
            SSIAP 3 exige le SSIAP 2. Cette logique structure des parcours de carrière clairs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">Recyclage obligatoire tous les 3 ans</h2>
          <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="font-bold text-amber-800">Important — arrêté du 2 mai 2005</p>
            <p className="mt-2 text-sm text-amber-700 leading-7">
              Le SSIAP doit être recyclé <strong>tous les 3 ans</strong> pour rester valide. Un SSIAP périmé
              rend impossible l&apos;exercice légal du métier. Le recyclage SSIAP 1 dure <strong>14 heures</strong>
              (e-learning théorique + présentiel pratique). Il peut être financé via votre OPCO ou FNE-Formation.
            </p>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-bold text-slate-900">Formation initiale SSIAP 1</p>
              <p className="mt-1 text-2xl font-bold text-red-700">1 090 € HT</p>
              <p className="text-sm text-slate-500">70 heures · hybride</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-bold text-slate-900">Recyclage SSIAP 1 (14h / 3 ans)</p>
              <p className="mt-1 text-2xl font-bold text-red-700">390 € HT</p>
              <p className="text-sm text-slate-500">14 heures · hybride</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">Financement : OPCO, FNE et autres dispositifs</h2>
          <p className="mt-4 text-slate-600 leading-8">
            Les formations SSIAP peuvent être financées via plusieurs dispositifs selon votre statut. En 2025-2026,
            les budgets formation des OPCO couvrent souvent une partie ou la totalité du coût d'une
            formation SSIAP 1.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              { label: "OPCO (financement entreprise)", desc: "Pour salariés en activité, via l'OPCO de branche. Organisme Qualiopi requis." },
              { label: "France Travail — AIF", desc: "Aide Individuelle à la Formation pour les demandeurs d'emploi." },
              { label: "CPF de transition (CPF-TP)", desc: "Pour salariés en reconversion complète (sous conditions). Renseignez-vous." },
              { label: "Plan de développement des compétences", desc: "Financement employeur si la montée en compétences est stratégique." },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-bold text-red-700">{item.label}</p>
                <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">Comment se déroule la formation SSIAP 1 ?</h2>
          <p className="mt-4 text-slate-600 leading-8">
            La formation SSIAP 1 est la plus accessible et la plus suivie. Elle se déroule en
            <strong> 70 heures</strong> sur 2 à 3 semaines, en format hybride (e-learning théorique + présentiel
            pratique). Le programme comprend :
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 leading-7">
            {[
              "Réglementation incendie : ERP, types de bâtiments, classements",
              "Comportement du feu : physique de la combustion, propagation, fumées toxiques",
              "Moyens d'extinction : extincteurs, RIA, systèmes sprinklers",
              "Évacuation et gestion de crise : plans, flux, communication secours",
              "Rondes de sécurité : surveillance, détection anomalies, main courante",
              "SSI : catégories A→E, CMSI, UGA, DAS, désenfumage",
              "Premiers secours : gestes PSE 1",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-0.5 text-red-600 font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-bold text-slate-900">Évaluation finale</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              <li>— Épreuve théorique écrite (QCM)</li>
              <li>— Épreuve pratique : extinction, gestion d&apos;évacuation</li>
              <li>— Contrôle des gestes de secours</li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">Taux de réussite moyen : 75-80 % au premier passage.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">Débouchés et salaires dans la sécurité incendie</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Niveau</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Salaire mensuel brut moyen</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {salaires.map((row) => (
                  <tr key={row.niveau} className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-700">{row.niveau}</td>
                    <td className="px-4 py-3 text-red-700 font-bold">{row.salaire}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            La demande est forte dans les secteurs hospitalier, logistique, grande distribution et hôtellerie
            de luxe. Des offres d&apos;emploi accessibles dès la validation du SSIAP 1.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">Comment choisir son organisme de formation SSIAP ?</h2>
          <div className="mt-5 space-y-3">
            {[
              { critere: "Agrément préfectoral", desc: "Obligatoire pour délivrer le SSIAP. À vérifier impérativement avant inscription." },
              { critere: "Certification Qualiopi", desc: "Gage de qualité pédagogique et condition pour financement OPCO." },
              { critere: "Taux de réussite", desc: "Certains organismes publient leurs statistiques — privilégiez ceux qui dépassent 75 %." },
              { critere: "Matériel pédagogique", desc: "La formation doit inclure de vraies mises en pratique (extincteurs, simulation d'évacuation, SSI)." },
            ].map((item) => (
              <div key={item.critere} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                <span className="mt-0.5 text-red-600 font-bold text-lg">✓</span>
                <div>
                  <p className="font-bold text-slate-900">{item.critere}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">Le SSIAP est-il reconnu comme certification RNCP ?</h2>
          <p className="mt-4 text-slate-600 leading-8">
            Le SSIAP est une <strong>certification professionnelle réglementée</strong>, inscrite au{" "}
            <strong>Répertoire Spécifique (RS)</strong> et non au RNCP au sens strict. Cela signifie qu&apos;il
            est reconnu par l&apos;État, obligatoire pour exercer dans les ERP concernés, finançable via OPCO et autres dispositifs, mais ne confère pas de niveau académique (bac, bac+2...).
          </p>
          <p className="mt-3 text-slate-600 leading-8">
            Cette distinction est importante si vous envisagez une évolution vers des certifications RNCP
            dans la sécurité (comme le titre professionnel Responsable de la Sécurité Incendie), accessibles
            après plusieurs années d&apos;expérience avec un SSIAP 3.
          </p>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900">Questions fréquentes</h2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <details key={item.question} className="group rounded-2xl border border-slate-200 bg-white p-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-slate-900 list-none">
                  {item.question}
                  <span className="shrink-0 text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">Articles liés</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/blog/obligations-securite-incendie-entreprise" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 hover:border-red-200 hover:text-red-700 transition-colors">
              Obligations sécurité incendie en entreprise →
            </Link>
            <Link href="/formation-recyclage-ssiap1" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 hover:border-red-200 hover:text-red-700 transition-colors">
              Recyclage SSIAP1 (14h / 3 ans) →
            </Link>
            <Link href="/formation-ssiap1" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 hover:border-red-200 hover:text-red-700 transition-colors">
              Formation SSIAP1 initiale →
            </Link>
          </div>
        </section>
      </article>

      {/* CTA */}
      <section className="bg-slate-950 py-12 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold">Formation SSIAP1 initiale ou recyclage ?</h2>
          <p className="mt-3 text-slate-300">Organisme de formation · Financement OPCO possible · Hybride e-learning + présentiel</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/formation-ssiap1"
              className="rounded-xl bg-red-600 px-6 py-3 font-semibold hover:bg-red-700 transition-colors"
            >
              Formation initiale SSIAP1
            </Link>
            <Link
              href="/formation-recyclage-ssiap1"
              className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold hover:bg-white/20 transition-colors"
            >
              Recyclage SSIAP1 (14h)
            </Link>
            <Link
              href="/demande-devis?type=ssiap1"
              className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold hover:bg-white/20 transition-colors"
            >
              Demander un devis
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-400">
            <a href="tel:+33189629492" className="text-white underline">01 89 62 94 92</a>
            {" · "}
            <a href="mailto:contact@prevensia-formation.fr" className="text-white underline">contact@prevensia-formation.fr</a>
          </p>
        </div>
      </section>
    </main>
  );
}
