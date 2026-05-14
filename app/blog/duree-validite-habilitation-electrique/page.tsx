import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import FaqJsonLd from "@/components/seo/FaqJsonLd";

export const metadata = {
  title: "Durée de Validité de l'Habilitation Électrique — Recyclage & Obligations | PREVENSIA",
  description:
    "Quelle est la durée de validité d'une habilitation électrique ? Quand faut-il recycler ? Obligations de l'employeur selon la NF C 18-510 et le Code du travail.",
  alternates: {
    canonical: "https://prevensia-formation.fr/blog/duree-validite-habilitation-electrique",
  },
  keywords: [
    "durée validité habilitation électrique",
    "recyclage habilitation électrique",
    "périodicité habilitation NF C 18-510",
    "renouvellement habilitation électrique",
    "habilitation électrique combien de temps",
  ],
  openGraph: {
    title: "Durée de validité de l'habilitation électrique : tout ce qu'il faut savoir",
    description:
      "3 ans, mais pas que. Découvrez quand l'employeur doit renouveler l'habilitation électrique et quelles situations imposent un recyclage anticipé.",
    url: "https://prevensia-formation.fr/blog/duree-validite-habilitation-electrique",
  },
};

const faqItems = [
  {
    question: "Une habilitation électrique expire-t-elle automatiquement après 3 ans ?",
    answer:
      "La NF C 18-510 recommande un recyclage tous les 3 ans, mais le titre d'habilitation n'est pas automatiquement invalide après ce délai. C'est l'employeur qui fixe la durée de validité sur le titre. En pratique, la grande majorité des titres sont établis pour 3 ans. L'employeur peut les renouveler, les retirer ou les modifier à tout moment.",
  },
  {
    question: "Que se passe-t-il si un salarié travaille avec une habilitation expirée ?",
    answer:
      "L'employeur engage sa responsabilité civile et pénale en cas d'accident. Le salarié n'est plus couvert par le cadre réglementaire. Il est donc impératif de suivre les échéances et d'organiser les recyclages avant l'expiration des titres.",
  },
  {
    question: "Faut-il une formation avant chaque renouvellement d'habilitation ?",
    answer:
      "Oui. Le recyclage passe par une formation de remise à niveau (théorique et/ou pratique selon les symboles) chez un organisme certifié Qualiopi, suivie du renouvellement du titre par l'employeur. Un simple examen interne sans formation n'est pas conforme.",
  },
  {
    question: "Le changement de poste oblige-t-il à reformer le salarié ?",
    answer:
      "Oui. Si le salarié change de poste et que ses nouvelles missions ne correspondent plus au symbole délivré (nouveaux équipements, nouvelles responsabilités), l'employeur doit adapter le titre d'habilitation, ce qui peut nécessiter une formation complémentaire ou initiale.",
  },
];

export default function ArticleDureeValiditePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Durée de validité de l'habilitation électrique", url: "/blog/duree-validite-habilitation-electrique" },
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
            <span className="text-white">Durée de validité</span>
          </nav>

          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest">
            <span className="rounded-full bg-red-600 px-3 py-1 text-white">Réglementation</span>
            <span className="text-slate-400">4 min de lecture · 8 mai 2025</span>
          </div>

          <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Durée de validité de l&apos;habilitation électrique
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            3 ans en général, mais ce n&apos;est pas automatique. Ce que dit vraiment la NF C 18-510
            et ce que l&apos;employeur doit faire.
          </p>
        </div>
      </section>

      {/* Article */}
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-10">

        {/* Encadré clé */}
        <div className="rounded-2xl border-l-4 border-red-600 bg-red-50 p-6">
          <p className="font-bold text-red-800 text-lg">À retenir en 30 secondes</p>
          <ul className="mt-3 space-y-1 text-sm text-red-700 leading-7">
            <li>✓ La NF C 18-510 recommande un recyclage <strong>tous les 3 ans</strong></li>
            <li>✓ La durée réelle est fixée par <strong>l&apos;employeur</strong> sur le titre</li>
            <li>✓ Certains événements imposent un <strong>recyclage anticipé</strong></li>
            <li>✓ L&apos;employeur peut <strong>retirer ou modifier</strong> un titre à tout moment</li>
          </ul>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">Ce que dit la norme NF C 18-510</h2>
          <p className="mt-4 text-slate-600 leading-8">
            La norme NF C 18-510 (édition 2012) est le texte de référence pour les habilitations
            électriques en France. Elle ne fixe pas de durée maximale légale, mais elle
            <strong> recommande fortement un recyclage tous les 3 ans</strong> pour maintenir
            les compétences des travailleurs habilités.
          </p>
          <p className="mt-4 text-slate-600 leading-8">
            En pratique, c&apos;est l&apos;employeur qui détermine la durée inscrite sur le titre
            d&apos;habilitation. La grande majorité des employeurs s&apos;alignent sur cette recommandation
            de 3 ans. Le Code du travail (article R.4544-10) impose quant à lui que l&apos;employeur
            s&apos;assure que le travailleur reste compétent pour les opérations qui lui sont confiées.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">Cas imposant un recyclage avant 3 ans</h2>
          <p className="mt-4 text-slate-600">Plusieurs situations obligent l&apos;employeur à revoir l&apos;habilitation avant son échéance normale :</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { titre: "Changement de poste", desc: "Nouvelles responsabilités ou nouveaux équipements électriques non couverts par le titre actuel." },
              { titre: "Évolution des installations", desc: "Modification significative des installations sur lesquelles le salarié intervient (passage HTA, nouveau process)." },
              { titre: "Incident ou accident", desc: "Un incident électrique grave peut justifier un recyclage anticipé pour évaluer les pratiques du salarié." },
              { titre: "Interruption prolongée", desc: "Absence longue (maladie, congé parental) : l'employeur doit vérifier que les compétences sont maintenues." },
              { titre: "Non-conformité constatée", desc: "Si un contrôle interne ou externe révèle que les pratiques ne respectent pas la norme." },
              { titre: "Évolution réglementaire", desc: "Mise à jour de la NF C 18-510 ou nouvelles prescriptions de l'employeur ou du donneur d'ordre." },
            ].map((item) => (
              <div key={item.titre} className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="font-bold text-slate-900">⚠ {item.titre}</p>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">Durées par symbole</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Symbole</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Recyclage recommandé</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Durée formation recyclage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { symbole: "H0B0 / H0V", recyclage: "3 ans", duree: "½ journée" },
                  { symbole: "BS / BE Manœuvre", recyclage: "3 ans", duree: "½ journée" },
                  { symbole: "B1 / B1V / B2 / B2V", recyclage: "3 ans", duree: "1 jour" },
                  { symbole: "BR", recyclage: "3 ans", duree: "1 jour" },
                  { symbole: "BC", recyclage: "3 ans", duree: "1 jour" },
                ].map((row) => (
                  <tr key={row.symbole} className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-red-700">{row.symbole}</td>
                    <td className="px-4 py-3 text-slate-700">{row.recyclage}</td>
                    <td className="px-4 py-3 text-slate-600">{row.duree}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-400">Durées indicatives selon NF C 18-510. À adapter selon les symboles cumulés et le niveau initial des apprenants.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">Comment anticiper les recyclages ?</h2>
          <div className="mt-4 space-y-3 text-slate-600 leading-8">
            <p>
              La meilleure pratique est de <strong>centraliser les dates d&apos;échéance</strong> de tous les titres
              d&apos;habilitation dans un registre ou un outil RH, avec des alertes 3 à 6 mois avant expiration.
            </p>
            <p>
              Pour les entreprises comptant plusieurs salariés habilités, une <strong>session intra-entreprise
              annuelle</strong> permet de regrouper les recyclages, d&apos;adapter le contenu aux installations
              réelles et de bénéficier d&apos;un tarif groupe avantageux.
            </p>
            <p>
              PREVENSIA FORMATION propose des sessions de recyclage inter-entreprises et des formations
              intra sur mesure avec devis sous 48h.
            </p>
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
      </article>

      {/* CTA */}
      <section className="bg-slate-950 py-12 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold">Organisez vos recyclages habilitation</h2>
          <p className="mt-3 text-slate-300">Session intra sur mesure · Devis sous 48h · Qualiopi</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/demande-devis" className="rounded-xl bg-red-600 px-6 py-3 font-semibold hover:bg-red-700 transition-colors">
              Demander un devis recyclage
            </Link>
            <Link href="/planning" className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold hover:bg-white/20 transition-colors">
              Sessions inter disponibles
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
