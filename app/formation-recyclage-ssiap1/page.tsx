import Link from "next/link";
import CourseJsonLd from "@/components/seo/CourseJsonLd";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata = {
  title: "Recyclage SSIAP1 — Remise à niveau Sécurité Incendie ERP | PREVENSIA FORMATION",
  description:
    "Recyclage SSIAP1 obligatoire (14h/3 ans) : e-learning + présentiel. Remise à niveau réglementaire, SSI catégories A→E, IGH, gestion des travaux. À partir de 390 € HT. Attestation incluse.",
  alternates: {
    canonical: "https://prevensia-formation.fr/formation-recyclage-ssiap1",
  },
  keywords: [
    "recyclage SSIAP1",
    "recyclage sécurité incendie ERP",
    "remise à niveau SSIAP1",
    "recyclage agent incendie",
    "SSIAP1 14 heures recyclage",
    "recyclage ERP incendie e-learning",
    "qualification SSIAP1 renouvellement",
    "recyclage arrêté 2 mai 2005",
  ],
  openGraph: {
    title: "Recyclage SSIAP1 — Remise à niveau 14h Sécurité Incendie ERP",
    description:
      "Recyclage SSIAP1 obligatoire tous les 3 ans. E-learning (théorie) + présentiel (pratique). SSI catégories A→E, IGH, gestion travaux. À partir de 390 € HT.",
    url: "https://prevensia-formation.fr/formation-recyclage-ssiap1",
  },
};

const faqItems = [
  {
    question: "Le recyclage SSIAP1 est-il vraiment obligatoire ?",
    answer:
      "Oui. L'arrêté du 2 mai 2005 modifié impose un recyclage de 14 heures minimum tous les 3 ans pour maintenir la qualification SSIAP1. Sans recyclage valide, la qualification est suspendue et l'employeur ne peut plus vous affecter à un poste SSIAP1. L'agent dispose d'un délai de 6 mois avant et après la date d'échéance pour effectuer son recyclage.",
  },
  {
    question: "Que couvre le recyclage SSIAP1 ?",
    answer:
      "Le recyclage SSIAP1 porte sur : la révision des fondamentaux (feu, extincteurs, DAPS), les évolutions réglementaires récentes, l'approfondissement du SSI (catégories A→E, types d'alarme, AES), les spécificités IGH (compartimentage, désenfumage), la gestion des travaux (permis de feu, mesures compensatoires, rondes post-travaux) et des cas pratiques issus de retours d'expérience incendie réels.",
  },
  {
    question: "Quelle est la différence entre le recyclage SSIAP1 et la formation initiale ?",
    answer:
      "La formation initiale SSIAP1 dure 70 heures et aboutit à la certification initiale après examen (QCM + épreuve pratique + oral). Le recyclage dure 14 heures et vise à maintenir la qualification existante par une remise à niveau théorique et pratique. Le recyclage ne comprend pas d'examen de certification mais une évaluation des acquis.",
  },
  {
    question: "Comment se déroule le recyclage SSIAP1 chez PREVENSIA ?",
    answer:
      "Le recyclage PREVENSIA se déroule en format hybride : une partie théorique en e-learning (modules de révision + nouveaux contenus réglementaires, environ 3 heures à votre rythme) et une partie pratique en présentiel (exercices sur extincteurs, mises en situation, cas pratiques, environ 11 heures). L'e-learning peut être suivi avant la journée ou les demi-journées en présentiel.",
  },
  {
    question: "Quel est le prix du recyclage SSIAP1 chez PREVENSIA ?",
    answer:
      "Le recyclage SSIAP1 est proposé à partir de 390 € HT par personne en inter-entreprises. Pour les formations intra-entreprises (formateur PREVENSIA chez vous), le tarif est établi sur devis selon l'effectif et la localisation. L'accès e-learning est inclus dans le tarif du recyclage.",
  },
  {
    question: "Peut-on faire le recyclage SSIAP1 entièrement en e-learning ?",
    answer:
      "Non. La réglementation impose une formation de 14 heures comprenant obligatoirement des exercices pratiques encadrés (manipulation d'extincteurs, exercice d'évacuation, mises en situation). Le e-learning constitue la partie théorique du recyclage et doit être complété par une partie pratique en présentiel avec un formateur habilité.",
  },
  {
    question: "Que se passe-t-il si je n'effectue pas mon recyclage dans les délais ?",
    answer:
      "Sans recyclage valide, votre qualification SSIAP1 est suspendue. Vous ne pouvez plus légalement exercer les fonctions SSIAP1 dans un ERP. Pour reprendre votre activité, vous devrez effectuer le recyclage de 14 heures. Si la suspension est longue (plusieurs années), un recyclage complet ou une remise à niveau plus importante peut être requise selon l'appréciation de l'organisme de formation.",
  },
];

const programme = [
  {
    titre: "Révision — Feu, classes et moyens d'extinction",
    contenu: "Tétraèdre du feu, 5 classes A/B/C/D/F, agents extincteurs et compatibilités, méthode DAPS, manipulation RIA, entretien réglementaire.",
  },
  {
    titre: "Évolutions réglementaires",
    contenu: "Arrêté du 2 mai 2005 modifié, classement Euroclass (réaction au feu), résistance au feu R/E/I, types ERP (J, L, M, N, O, R, U, W…), obligations IGH.",
  },
  {
    titre: "SSI approfondi — catégories A→E et alarmes",
    contenu: "5 catégories SSI (A à E), équipements d'alarme EA1→EA5, UGA et séquence d'alarme, AES (12h autonomie), DAS et positions d'attente/sécurité, DAD et niveaux d'accès.",
  },
  {
    titre: "Spécificités IGH",
    contenu: "Compartimentage (75m / 2 500m² / 1-3 niveaux / EI 120), évacuation différée, désenfumage et surpression escaliers, PCSI (≥50m²), ascenseurs pompiers, distances réglementaires.",
  },
  {
    titre: "Gestion des travaux et permis de feu",
    contenu: "Contenu obligatoire du permis de feu, inhibition de zone SSI + consignation + surveillance renforcée, ronde post-travaux (2h minimum), mesures compensatoires, coordination entreprises extérieures.",
  },
  {
    titre: "Retours d'expérience et cas pratiques",
    contenu: "5 scénarios analysés : alarme répétée, alarme nocturne, porte CF bloquée, évacuation PMR et EAS, accueil secours en situation réelle. Analyse des erreurs fréquentes.",
  },
  {
    titre: "Synthèse recyclage",
    contenu: "12 points clés du recyclage, obligations de qualification, main courante (méthode SOCA), registre de sécurité, rappel des réflexes opérationnels.",
  },
];

export default function FormationRecyclageSsiap1Page() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <CourseJsonLd
        name="Recyclage SSIAP1 — Remise à niveau Sécurité Incendie ERP"
        description="Recyclage SSIAP1 obligatoire (14h/3 ans) en format hybride : e-learning théorique + présentiel pratique. SSI A→E, IGH, travaux, cas pratiques."
        courseCode="RECYCLAGE-SSIAP1"
        url="/formation-recyclage-ssiap1"
        timeRequired="PT14H"
        educationalLevel="Intermediate"
        audience="Agents SSIAP1 certifiés devant effectuer leur recyclage obligatoire (14h tous les 3 ans)"
        educationalCredentialAwarded="Attestation de recyclage SSIAP1 — PREVENSIA FORMATION"
      />
      <FaqJsonLd items={faqItems} />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Nos formations", url: "/" },
          { name: "Formation SSIAP1", url: "/formation-ssiap1" },
          { name: "Recyclage SSIAP1", url: "/formation-recyclage-ssiap1" },
        ]}
      />

      {/* Hero */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <nav aria-label="Fil d'Ariane" className="mb-6 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">›</span>
            <Link href="/formation-ssiap1" className="hover:text-white">Formation SSIAP1</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Recyclage SSIAP1</span>
          </nav>

          <p className="inline-flex rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-orange-300">
            Recyclage obligatoire · 14h / 3 ans · Arrêté du 2 mai 2005
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Recyclage SSIAP1<br className="hidden lg:block" />{" "}
            <span className="text-orange-400">Remise à niveau Sécurité Incendie</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Recyclage obligatoire tous les 3 ans pour les agents SSIAP1 certifiés. Format hybride :
            e-learning théorique (révisions + évolutions réglementaires + SSI/IGH approfondis)
            complété par des exercices pratiques en présentiel.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/demande-devis?type=recyclage-ssiap1"
              className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-400 transition-colors"
            >
              Demander un devis recyclage SSIAP1
            </Link>
            <Link
              href="/planning"
              className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Voir les dates disponibles →
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
            <span>✓ 14h minimum réglementaires</span>
            <span>✓ E-learning inclus (~3h théorie)</span>
            <span>✓ Exercices pratiques en présentiel</span>
            <span>✓ Attestation de recyclage</span>
            <span>✓ Intra-entreprise disponible</span>
          </div>
        </div>
      </section>

      {/* Tarifs rapides */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-orange-700">Inter-entreprises</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">À partir de <span className="text-orange-600">390 € HT</span></p>
              <p className="mt-1 text-sm text-slate-600">Par personne · E-learning inclus · Attestation</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Intra-entreprise</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">Sur <span className="text-slate-700">devis</span></p>
              <p className="mt-1 text-sm text-slate-600">Formateur PREVENSIA chez vous · Groupe</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Durée réglementaire</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">14 heures</p>
              <p className="mt-1 text-sm text-slate-600">~3h e-learning + ~11h présentiel · Tous les 3 ans</p>
            </div>
          </div>
        </div>
      </section>

      {/* Obligation réglementaire */}
      <section className="bg-orange-50 border-y border-orange-200 py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Pourquoi le recyclage SSIAP1 est-il obligatoire ?
          </h2>
          <p className="mt-3 text-slate-600">
            L'arrêté du 2 mai 2005 modifié impose un recyclage de 14 heures minimum tous les 3 ans.
            Sans recyclage, votre qualification SSIAP1 est suspendue.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white border border-orange-200 p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-2">Sans recyclage</p>
              <p className="text-sm text-slate-700">
                La qualification SSIAP1 est <strong>suspendue</strong>. Vous ne pouvez plus légalement
                exercer les fonctions SSIAP1 dans un ERP ni être affecté à ce poste par votre employeur.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-orange-200 p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-2">Délai</p>
              <p className="text-sm text-slate-700">
                L'agent dispose d'un délai avant et après la date d'échéance.
                Nous vous recommandons d'anticiper 6 mois à l'avance pour
                choisir la session qui vous convient.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-orange-200 p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-2">Contenu obligatoire</p>
              <p className="text-sm text-slate-700">
                14h minimum incluant une remise à niveau théorique (réglementaire, SSI, IGH)
                et des <strong>exercices pratiques obligatoires</strong> encadrés par un formateur habilité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programme */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Programme du recyclage SSIAP1</h2>
          <p className="mt-4 text-lg text-slate-600">
            7 modules structurés couvrant les révisions fondamentales, les évolutions réglementaires
            et les approfondissements SSI/IGH. Conformes à l'arrêté du 2 mai 2005 modifié.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {programme.map((p, i) => (
              <div key={p.titre} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900">{p.titre}</h3>
                    <p className="mt-1 text-sm text-slate-600">{p.contenu}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Format hybride */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Comment se déroule le recyclage ?</h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Le recyclage PREVENSIA combine e-learning théorique et présentiel pratique pour maximiser
            l'efficacité et respecter les obligations réglementaires.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">

            {/* E-learning théorique */}
            <div className="rounded-2xl border-2 border-orange-200 bg-orange-50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white text-lg font-bold">1</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-orange-700">Étape 1 — À votre rythme</p>
                  <p className="font-bold text-slate-900 text-lg">E-learning théorique (~3h)</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-slate-600">
                <p>Les 7 modules e-learning couvrent la partie théorique du recyclage. À suivre avant la journée en présentiel, depuis votre PC, tablette ou mobile.</p>
                <ul className="mt-3 space-y-1">
                  <li className="flex items-start gap-2"><span className="text-orange-500 font-bold mt-0.5">›</span>Révisions fondamentaux (feu, extincteurs, DAPS)</li>
                  <li className="flex items-start gap-2"><span className="text-orange-500 font-bold mt-0.5">›</span>Évolutions réglementaires (Euroclass, R/E/I, IGH)</li>
                  <li className="flex items-start gap-2"><span className="text-orange-500 font-bold mt-0.5">›</span>SSI approfondi (catégories A→E, UGA, AES)</li>
                  <li className="flex items-start gap-2"><span className="text-orange-500 font-bold mt-0.5">›</span>Spécificités IGH et gestion des travaux</li>
                  <li className="flex items-start gap-2"><span className="text-orange-500 font-bold mt-0.5">›</span>Cas pratiques et retours d'expérience</li>
                  <li className="flex items-start gap-2"><span className="text-orange-500 font-bold mt-0.5">›</span>Quiz de validation + attestation e-learning</li>
                </ul>
              </div>
            </div>

            {/* Présentiel pratique */}
            <div className="rounded-2xl border-2 border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-white text-lg font-bold">2</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Étape 2 — En présentiel</p>
                  <p className="font-bold text-slate-900 text-lg">Pratique encadrée (~11h)</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-slate-600">
                <p>La partie pratique obligatoire est encadrée par un formateur PREVENSIA habilité. Elle comprend :</p>
                <ul className="mt-3 space-y-1">
                  <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">›</span>Manipulation réelle d'extincteurs sur feux simulés</li>
                  <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">›</span>Exercice d'évacuation et gestion des PMR</li>
                  <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">›</span>Travaux pratiques sur SSI (tableau CMSI, DAS)</li>
                  <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">›</span>Mises en situation et cas pratiques dirigés</li>
                  <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">›</span>Évaluation des acquis pratiques</li>
                  <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">›</span>Remise de l'attestation de recyclage complète</li>
                </ul>
              </div>
              <div className="mt-4 flex items-center justify-between rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">
                <div>
                  <p className="text-xs text-slate-500">À partir de / personne</p>
                  <p className="text-2xl font-bold text-slate-900">390 € HT</p>
                </div>
                <Link href="/demande-devis?type=recyclage-ssiap1" className="rounded-lg bg-slate-700 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-600 transition-colors">
                  Demander →
                </Link>
              </div>
            </div>
          </div>

          {/* Comparatif initial / recyclage */}
          <div className="mt-10 overflow-x-auto">
            <table className="w-full rounded-2xl border border-slate-200 text-sm bg-white overflow-hidden">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Critère</th>
                  <th className="px-4 py-3 text-center font-semibold">Formation initiale SSIAP1</th>
                  <th className="px-4 py-3 text-center font-semibold">Recyclage SSIAP1</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">Durée</td>
                  <td className="px-4 py-3 text-center text-slate-700">70h</td>
                  <td className="px-4 py-3 text-center text-slate-700">14h minimum</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-900">Fréquence</td>
                  <td className="px-4 py-3 text-center text-slate-700">Une seule fois</td>
                  <td className="px-4 py-3 text-center text-orange-700 font-semibold">Tous les 3 ans</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">Examen</td>
                  <td className="px-4 py-3 text-center text-slate-700">QCM + pratique + oral</td>
                  <td className="px-4 py-3 text-center text-slate-700">Évaluation des acquis</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-900">E-learning inclus</td>
                  <td className="px-4 py-3 text-center text-green-600 font-bold">✓ ~3h</td>
                  <td className="px-4 py-3 text-center text-green-600 font-bold">✓ ~3h</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">Tarif indicatif</td>
                  <td className="px-4 py-3 text-center text-slate-700">À partir de 990 € HT</td>
                  <td className="px-4 py-3 text-center text-orange-700 font-semibold">À partir de 390 € HT</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Questions fréquentes — Recyclage SSIAP1
          </h2>
          <div className="mt-8 space-y-4">
            {faqItems.map((item) => (
              <details key={item.question} className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 open:shadow-sm">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-slate-900 list-none">
                  {item.question}
                  <span className="shrink-0 text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Recyclage SSIAP1 — Votre qualification à jour</h2>
          <p className="mt-4 text-lg text-slate-300">
            14h réglementaires · E-learning inclus · Exercices pratiques · Attestation de recyclage · À partir de 390 € HT
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/demande-devis?type=recyclage-ssiap1"
              className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white hover:bg-orange-400 transition-colors"
            >
              Demander un devis recyclage
            </Link>
            <Link
              href="/planning"
              className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Voir les dates →
            </Link>
            <Link
              href="/formation-ssiap1"
              className="rounded-xl border border-slate-700 px-8 py-4 font-semibold text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
            >
              Formation initiale SSIAP1 →
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-400">
            Questions ?{" "}
            <a href="tel:+33189629492" className="text-white underline">01 89 62 94 92</a>
            {" · "}
            <a href="mailto:contact@prevensia-formation.fr" className="text-white underline">contact@prevensia-formation.fr</a>
          </p>
        </div>
      </section>
    </main>
  );
}
