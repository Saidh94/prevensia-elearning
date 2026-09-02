import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import FaqJsonLd from "@/components/seo/FaqJsonLd";

export const metadata = {
  title: "Obligations Sécurité Incendie en Entreprise — Code du Travail | PREVENSIA",
  description:
    "Exercice d'évacuation, extincteurs, guide-file, EPI : ce que le Code du travail impose en matière de sécurité incendie. Guide complet pour les employeurs.",
  alternates: {
    canonical: "https://prevensia-formation.fr/blog/obligations-securite-incendie-entreprise",
  },
  keywords: [
    "obligations sécurité incendie entreprise",
    "exercice évacuation incendie Code du travail",
    "formation incendie obligatoire",
    "guide-file serre-file obligation",
    "R.4227-39 Code du travail incendie",
    "DUERP risque incendie",
  ],
  openGraph: {
    title: "Sécurité incendie en entreprise : les obligations légales",
    description:
      "Exercices d'évacuation, extincteurs, guide-file, EPI : ce que la réglementation impose aux employeurs en matière de prévention incendie.",
    url: "https://prevensia-formation.fr/blog/obligations-securite-incendie-entreprise",
  },
};

const faqItems = [
  {
    question: "À quelle fréquence faut-il organiser les exercices d'évacuation ?",
    answer:
      "L'article R.4227-39 du Code du travail impose au moins un exercice d'évacuation tous les 6 mois dans les établissements. Le premier exercice doit avoir lieu dans le mois qui suit la prise de fonctions du personnel. Chaque exercice doit faire l'objet d'un compte-rendu consigné dans le registre de sécurité.",
  },
  {
    question: "La formation à la manipulation des extincteurs est-elle obligatoire ?",
    answer:
      "Il n'existe pas de texte imposant explicitement un nombre de salariés formés, mais le Code du travail impose à l'employeur de prendre toutes les mesures nécessaires pour assurer la sécurité. Dans la pratique, la formation d'au moins 10 % des effectifs à la manipulation des extincteurs est une recommandation largement admise et attendue lors des contrôles.",
  },
  {
    question: "Qui doit assurer les fonctions de guide-file et serre-file ?",
    answer:
      "L'employeur désigne les personnes chargées de mettre en application les consignes d'évacuation. Ces personnes (guide-file et serre-file) doivent être formées à leur rôle et connaître les procédures de l'établissement. Leur désignation doit figurer dans le plan d'évacuation.",
  },
  {
    question: "La formation incendie doit-elle être réalisée par un organisme certifié ?",
    answer:
      "La prise en charge par un OPCO dépend de votre situation, de votre OPCO de rattachement et du dispositif mobilisable. Pour les ERP (Établissements Recevant du Public), des exigences spécifiques peuvent s'appliquer selon la catégorie et le type d'établissement.",
  },
];

export default function ArticleObligationsIncendiePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Obligations sécurité incendie en entreprise", url: "/blog/obligations-securite-incendie-entreprise" },
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
            <span className="text-white">Obligations incendie</span>
          </nav>
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest">
            <span className="rounded-full bg-red-600 px-3 py-1 text-white">Réglementation</span>
            <span className="text-slate-400">5 min de lecture · 5 juin 2025</span>
          </div>
          <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Obligations sécurité incendie en entreprise
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Exercices d&apos;évacuation, extincteurs, guide-file, EPI : ce que le Code du travail
            impose concrètement à chaque employeur.
          </p>
        </div>
      </section>

      {/* Article */}
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-10">

        <div className="rounded-2xl border-l-4 border-red-600 bg-red-50 p-6">
          <p className="font-bold text-red-800 text-lg">Les obligations en un coup d&apos;œil</p>
          <ul className="mt-3 space-y-1 text-sm text-red-700 leading-7">
            <li>✓ <strong>Exercice d&apos;évacuation</strong> au moins tous les 6 mois (R.4227-39)</li>
            <li>✓ <strong>Consignes incendie</strong> affichées dans chaque local (R.4227-37)</li>
            <li>✓ <strong>Désignation</strong> des guide-file et serre-file formés</li>
            <li>✓ <strong>Vérification annuelle</strong> des extincteurs et équipements (R.4224-17)</li>
            <li>✓ <strong>Registre de sécurité</strong> à jour avec les exercices et contrôles</li>
          </ul>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">Les textes réglementaires applicables</h2>
          <p className="mt-4 text-slate-600 leading-8">
            La sécurité incendie en entreprise est encadrée par plusieurs textes qui
            se superposent selon le type d&apos;établissement :
          </p>
          <div className="mt-6 space-y-3">
            {[
              { ref: "Code du travail — Articles R.4227-28 à R.4227-57", desc: "Prévention des risques d'incendie et d'explosion, consignes, exercices, équipements de première intervention." },
              { ref: "Code du travail — Article R.4224-17", desc: "Vérification périodique des extincteurs et systèmes de protection contre l'incendie." },
              { ref: "Règlement de sécurité ERP (arrêté du 25/06/1980)", desc: "Pour les Établissements Recevant du Public : dispositions spécifiques selon le type et la catégorie." },
              { ref: "Arrêté du 4 novembre 1993 (chantiers temporaires)", desc: "Obligations incendie sur les chantiers du BTP." },
            ].map((item) => (
              <div key={item.ref} className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="font-bold text-red-700 text-sm">{item.ref}</p>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">Les 5 obligations concrètes</h2>

          <div className="mt-6 space-y-5">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">1</span>
                <div>
                  <h3 className="font-bold text-slate-900">Exercices d&apos;évacuation — tous les 6 mois</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-7">
                    L&apos;article <strong>R.4227-39</strong> impose au moins un exercice d&apos;évacuation par semestre.
                    Le premier doit avoir lieu dans le mois qui suit la prise de fonctions. Chaque exercice
                    doit être consigné dans le <strong>registre de sécurité</strong> avec la date, le nombre
                    de participants et les observations.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">2</span>
                <div>
                  <h3 className="font-bold text-slate-900">Affichage des consignes incendie</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-7">
                    L&apos;article <strong>R.4227-37</strong> impose l&apos;affichage des consignes incendie dans
                    chaque local. Ces consignes doivent indiquer : le numéro d&apos;appel des secours,
                    le matériel d&apos;extinction disponible, le responsable d&apos;évacuation désigné.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">3</span>
                <div>
                  <h3 className="font-bold text-slate-900">Formation des guide-file et serre-file</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-7">
                    L&apos;employeur désigne et forme les personnes chargées d&apos;organiser l&apos;évacuation.
                    Le <strong>guide-file</strong> conduit les occupants vers la sortie. Le <strong>serre-file</strong>
                    ferme la marche, vérifie les locaux et referme les portes coupe-feu.
                    Prévoir au minimum un binôme par zone et par étage, avec des remplaçants en cas d&apos;absence.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">4</span>
                <div>
                  <h3 className="font-bold text-slate-900">Vérification annuelle des extincteurs</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-7">
                    L&apos;article <strong>R.4224-17</strong> impose la vérification des extincteurs au moins
                    une fois par an par un technicien qualifié. La conformité de l&apos;implantation
                    (accessibilité, signalisation, adéquation avec les risques) doit également
                    être vérifiée.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">5</span>
                <div>
                  <h3 className="font-bold text-slate-900">Registre de sécurité à jour</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-7">
                    Tous les contrôles, vérifications, exercices et formations doivent être consignés
                    dans le <strong>registre de sécurité</strong>. C&apos;est le document de référence lors
                    d&apos;une inspection de la DREETS ou d&apos;un contrôle des services d&apos;incendie (SDIS).
                    L&apos;absence de registre à jour constitue une infraction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">Spécificités selon le type d&apos;établissement</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Type</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Réglementation</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Spécificités</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { type: "Bureau / tertiaire", regle: "Code du travail", spec: "Exercice semestriel, guide-file, extincteurs" },
                  { type: "Industrie / atelier", regle: "Code du travail + ICPE", spec: "EPI, RIA, formation renforcée selon le risque" },
                  { type: "ERP (magasin, restaurant...)", regle: "Règlement ERP", spec: "Exercice mensuel pour le personnel, rondes de sécurité" },
                  { type: "Entrepôt logistique", regle: "Code du travail + ICPE", spec: "Exercice semestriel, sprinkler, formation spécifique" },
                  { type: "IGH (immeuble > 50m)", regle: "Règlement IGH", spec: "Service de sécurité incendie permanent, exercices trimestriels" },
                ].map((row) => (
                  <tr key={row.type} className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-700">{row.type}</td>
                    <td className="px-4 py-3 text-red-700 text-xs font-medium">{row.regle}</td>
                    <td className="px-4 py-3 text-slate-600">{row.spec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
            <Link href="/blog/formation-sst-entreprise-obligations" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 hover:border-red-200 hover:text-red-700 transition-colors">
              Obligations SST en entreprise →
            </Link>
            <Link href="/blog/duree-validite-habilitation-electrique" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 hover:border-red-200 hover:text-red-700 transition-colors">
              Durée de validité habilitation →
            </Link>
          </div>
        </section>
      </article>

      {/* CTA */}
      <section className="bg-slate-950 py-12 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold">Former vos équipes à la sécurité incendie</h2>
          <p className="mt-3 text-slate-300">Extincteurs · Guide-file · EPI · Intra-entreprise · Qualiopi</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/demande-devis?type=incendie" className="rounded-xl bg-red-600 px-6 py-3 font-semibold hover:bg-red-700 transition-colors">
              Demander un devis
            </Link>
            <Link href="/formation-securite-incendie" className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold hover:bg-white/20 transition-colors">
              Voir la formation incendie
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
