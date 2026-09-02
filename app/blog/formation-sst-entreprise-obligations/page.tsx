import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import FaqJsonLd from "@/components/seo/FaqJsonLd";

export const metadata = {
  title: "Formation SST en Entreprise : Obligations et Organisation | PREVENSIA",
  description:
    "Combien de SST faut-il dans une entreprise ? La formation SST est-elle obligatoire ? Qui finance ? Guide complet des obligations employeur en matière de secourisme au travail.",
  alternates: {
    canonical: "https://prevensia-formation.fr/blog/formation-sst-entreprise-obligations",
  },
  keywords: [
    "formation SST obligatoire entreprise",
    "combien de SST en entreprise",
    "obligation SST Code du travail",
    "financement formation SST OPCO",
    "sauveteur secouriste travail entreprise",
    "MAC SST recyclage obligation",
  ],
  openGraph: {
    title: "Formation SST en entreprise : ce que la loi impose vraiment",
    description:
      "La formation SST est-elle obligatoire ? Combien de secouristes faut-il ? Qui peut financer ? Réponses claires pour les employeurs.",
    url: "https://prevensia-formation.fr/blog/formation-sst-entreprise-obligations",
  },
};

const faqItems = [
  {
    question: "La formation SST est-elle obligatoire dans toutes les entreprises ?",
    answer:
      "Le Code du travail (R.4224-15) impose la présence d'un sauveteur secouriste du travail dans tout atelier où sont effectués des travaux dangereux et dans les chantiers occupant 20 travailleurs au moins pendant plus de 15 jours. Plus largement, l'évaluation des risques (DUERP) peut conduire l'employeur à former des SST même hors obligation stricte.",
  },
  {
    question: "Combien de SST faut-il former dans mon entreprise ?",
    answer:
      "La règle pratique recommandée par l'INRS est d'avoir au moins 1 SST pour 10 salariés, en tenant compte des horaires décalés, des absences et des congés. L'objectif est qu'un SST soit toujours présent sur le lieu de travail aux heures de présence du personnel.",
  },
  {
    question: "Quelle est la durée de validité du certificat SST ?",
    answer:
      "Le certificat SST est valable 2 ans. Au terme de cette période, le salarié doit suivre un MAC SST (Maintien et Actualisation des Compétences) de 7 heures pour conserver sa certification. Sans MAC SST, le certificat expire et une formation initiale complète de 14 heures est à nouveau nécessaire.",
  },
  {
    question: "La formation SST peut-elle être financée par l'OPCO ?",
    answer:
      "Oui. La formation SST dispensée par PREVENSIA FORMATION est susceptible d'être prise en charge selon les critères de votre OPCO (Plan de développement des compétences). La prise en charge dépend de votre OPCO et de votre situation.",
  },
];

export default function ArticleSstObligationsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Formation SST en entreprise : obligations", url: "/blog/formation-sst-entreprise-obligations" },
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
            <span className="text-white">SST en entreprise</span>
          </nav>
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest">
            <span className="rounded-full bg-red-600 px-3 py-1 text-white">Guide pratique</span>
            <span className="text-slate-400">5 min de lecture · 29 mai 2025</span>
          </div>
          <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Formation SST en entreprise : obligations et organisation
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Ce que le Code du travail impose vraiment, combien de secouristes prévoir,
            et comment organiser les recyclages MAC SST.
          </p>
        </div>
      </section>

      {/* Article */}
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-10">

        <div className="rounded-2xl border-l-4 border-red-600 bg-red-50 p-6">
          <p className="font-bold text-red-800 text-lg">À retenir</p>
          <ul className="mt-3 space-y-1 text-sm text-red-700 leading-7">
            <li>✓ <strong>R.4224-15</strong> : SST obligatoire dans les ateliers dangereux et chantiers ≥ 20 personnes sur 15 jours</li>
            <li>✓ Recommandation INRS : <strong>1 SST pour 10 salariés</strong>, présent à toutes les heures de travail</li>
            <li>✓ Certificat valable <strong>2 ans</strong>, renouvelable par MAC SST (7h)</li>
            <li>✓ Formation éligible <strong>OPCO et CPF</strong> avec organisme Qualiopi</li>
          </ul>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">Ce que dit le Code du travail</h2>
          <p className="mt-4 text-slate-600 leading-8">
            L&apos;article <strong>R.4224-15 du Code du travail</strong> est le texte de référence :
          </p>
          <blockquote className="mt-4 border-l-4 border-slate-300 pl-5 italic text-slate-600 leading-8">
            "En l'absence d'infirmier, ou lorsque leur nombre ne permet pas d'assurer une présence
            permanente, l'employeur prend, après avis du médecin du travail, les dispositions
            nécessaires pour assurer les premiers secours aux accidentés et aux malades. Ces
            dispositions qui sont prises en liaison avec les services de secours d'urgence extérieurs
            sont adaptées à la nature des risques."
          </blockquote>
          <p className="mt-4 text-slate-600 leading-8">
            Plus concrètement, l&apos;article impose la présence d&apos;un <strong>sauveteur secouriste
            du travail</strong> dans :
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 leading-7 list-disc pl-6">
            <li>Tout atelier où sont effectués des <strong>travaux dangereux</strong></li>
            <li>Les chantiers occupant <strong>20 travailleurs au moins pendant plus de 15 jours</strong> avec travaux dangereux</li>
          </ul>
          <p className="mt-4 text-slate-600 leading-8">
            Au-delà de cette obligation stricte, le <strong>DUERP</strong> (Document Unique
            d&apos;Évaluation des Risques Professionnels) conduit dans la pratique la grande majorité
            des entreprises à former des SST, même en l&apos;absence de travaux dangereux qualifiés.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">Combien de SST former ?</h2>
          <p className="mt-4 text-slate-600 leading-8">
            Le Code du travail ne fixe pas de ratio précis. L&apos;INRS recommande en pratique :
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { chiffre: "1 / 10", desc: "Un SST pour 10 salariés, comme règle de base" },
              { chiffre: "×2", desc: "Doubler si l'entreprise fonctionne en 2×8 ou 3×8" },
              { chiffre: "+20 %", desc: "Prévoir une marge pour les absences et congés" },
            ].map((item) => (
              <div key={item.chiffre} className="rounded-2xl border border-slate-200 bg-white p-5 text-center">
                <p className="text-3xl font-bold text-red-600">{item.chiffre}</p>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-slate-600 leading-8">
            L&apos;objectif est simple : <strong>un SST doit être disponible à tout moment</strong>
            lorsque des salariés sont présents sur le lieu de travail. En cas d&apos;accident,
            les premières minutes sont déterminantes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">SST initial vs MAC SST : les deux formations</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-red-600">Formation initiale</p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">SST initial</h3>
              <ul className="mt-3 space-y-1 text-sm text-slate-600 leading-7">
                <li>✓ Durée : <strong>14 heures</strong> (2 jours)</li>
                <li>✓ Public : toute personne non certifiée SST</li>
                <li>✓ Contenu : protéger, examiner, alerter, secourir, prévention</li>
                <li>✓ Certificat valable <strong>2 ans</strong></li>
                <li>✓ Délivré par l&apos;INRS via organisme habilité</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-red-600">Recyclage</p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">MAC SST</h3>
              <ul className="mt-3 space-y-1 text-sm text-slate-600 leading-7">
                <li>✓ Durée : <strong>7 heures</strong> (1 jour)</li>
                <li>✓ Public : SST certifiés dont le titre expire dans les 2 ans</li>
                <li>✓ Contenu : révision des gestes, actualisation réglementaire</li>
                <li>✓ Renouvelle le certificat pour <strong>2 ans supplémentaires</strong></li>
                <li>⚠ Sans MAC SST dans les délais : repasser le SST initial complet</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">Comment financer la formation SST ?</h2>
          <div className="mt-6 space-y-3">
            {[
              { titre: "OPCO (Plan de développement des compétences)", desc: "Pour les entreprises : la formation SST avec un organisme Qualiopi est prise en charge dans le cadre du plan de formation annuel, selon les modalités de l'OPCO de la branche." },
              { titre: "CPF (Compte Personnel de Formation)", desc: "Pour les salariés à titre individuel : le SST est inscrit au répertoire spécifique RS6459. Les droits CPF peuvent financer tout ou partie de la formation." },
              { titre: "France Travail (anciennement Pôle Emploi)", desc: "Pour les demandeurs d'emploi en reconversion vers des postes nécessitant le SST (industrie, logistique, BTP, services à la personne)." },
            ].map((item) => (
              <div key={item.titre} className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="font-bold text-slate-900">{item.titre}</p>
                <p className="mt-2 text-sm text-slate-600 leading-7">{item.desc}</p>
              </div>
            ))}
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
            <Link href="/blog/comment-choisir-son-habilitation-electrique" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 hover:border-red-200 hover:text-red-700 transition-colors">
              Choisir son habilitation électrique →
            </Link>
            <Link href="/blog/habilitation-electrique-sous-traitants" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 hover:border-red-200 hover:text-red-700 transition-colors">
              Habilitation pour sous-traitants →
            </Link>
          </div>
        </section>
      </article>

      {/* CTA */}
      <section className="bg-slate-950 py-12 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold">Former vos équipes SST</h2>
          <p className="mt-3 text-slate-300">SST initial · MAC SST · Intra-entreprise · Qualiopi · Éligible OPCO</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/demande-devis?type=sst" className="rounded-xl bg-red-600 px-6 py-3 font-semibold hover:bg-red-700 transition-colors">
              Demander un devis SST
            </Link>
            <Link href="/formation-sst" className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold hover:bg-white/20 transition-colors">
              Voir la formation SST
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
