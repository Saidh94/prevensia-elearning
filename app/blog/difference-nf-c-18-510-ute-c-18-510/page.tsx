import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import FaqJsonLd from "@/components/seo/FaqJsonLd";

export const metadata = {
  title: "Différence entre NF C 18-510 et UTE C 18-510 — Guide | PREVENSIA FORMATION",
  description:
    "Quelle est la différence entre la norme NF C 18-510 et le guide UTE C 18-510 ? Laquelle est obligatoire ? Ce que les employeurs et formateurs doivent savoir.",
  alternates: {
    canonical: "https://prevensia-formation.fr/blog/difference-nf-c-18-510-ute-c-18-510",
  },
  keywords: [
    "NF C 18-510",
    "UTE C 18-510",
    "différence NF C 18-510 UTE C 18-510",
    "norme habilitation électrique",
    "guide UTE habilitation",
    "référentiel habilitation électrique",
  ],
  openGraph: {
    title: "NF C 18-510 vs UTE C 18-510 : quelle différence ?",
    description:
      "La NF C 18-510 est la norme de référence, l'UTE C 18-510 est un guide d'application. On vous explique la différence et ce qui est réellement obligatoire.",
    url: "https://prevensia-formation.fr/blog/difference-nf-c-18-510-ute-c-18-510",
  },
};

const faqItems = [
  {
    question: "La NF C 18-510 est-elle obligatoire ?",
    answer:
      "La NF C 18-510 n'est pas une loi. Cependant, le Code du travail (articles R.4544-3 et R.4544-9) renvoie implicitement à ce référentiel pour définir les règles de prévention du risque électrique. En pratique, toute entreprise ne s'y conformant pas s'expose à une mise en cause en cas d'accident, car la norme est considérée comme l'état de l'art reconnu par les tribunaux.",
  },
  {
    question: "Peut-on utiliser l'UTE C 18-510 à la place de la NF C 18-510 ?",
    answer:
      "L'UTE C 18-510 (guide d'application) complète la NF C 18-510 sans la remplacer. Il apporte des clarifications et des exemples pratiques d'application de la norme. Les deux documents sont complémentaires et sont souvent utilisés ensemble dans les formations et les audits.",
  },
  {
    question: "Quelle est la dernière version de la NF C 18-510 ?",
    answer:
      "La base normative est la NF C 18-510 de 2012, complétée par l'amendement A1 puis par l'amendement A2, publié par l'AFNOR et obligatoire depuis octobre 2024. L'amendement A2 intègre notamment les travaux sur installations photovoltaïques et les risques liés aux batteries. La version consolidée NF C 18-510 + A1 + A2 est la référence officielle à prendre en compte pour toute nouvelle habilitation.",
  },
  {
    question: "La NF C 18-510 s'applique-t-elle aux installations haute tension ?",
    answer:
      "Oui. La NF C 18-510 couvre les domaines BTA (Basse Tension A), BTB (Basse Tension B), HTA (Haute Tension A) et HTB (Haute Tension B). Elle définit des symboles et des règles spécifiques pour chaque domaine de tension.",
  },
];

export default function ArticleDifferenceNfcUtePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "NF C 18-510 vs UTE C 18-510", url: "/blog/difference-nf-c-18-510-ute-c-18-510" },
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
            <span className="text-white">NF C 18-510 vs UTE C 18-510</span>
          </nav>
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest">
            <span className="rounded-full bg-red-600 px-3 py-1 text-white">Réglementation</span>
            <span className="text-slate-400">4 min de lecture · 22 mai 2025</span>
          </div>
          <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Différence entre NF C 18-510 et UTE C 18-510
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            L&apos;une est la norme de référence, l&apos;autre un guide d&apos;application. Ce que chacun
            contient, et ce qui est réellement opposable en cas d&apos;accident.
          </p>
        </div>
      </section>

      {/* Article */}
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-10">

        <div className="rounded-2xl border-l-4 border-red-600 bg-red-50 p-6">
          <p className="font-bold text-red-800 text-lg">En résumé</p>
          <ul className="mt-3 space-y-1 text-sm text-red-700 leading-7">
            <li>✓ <strong>NF C 18-510 + A2</strong> = norme AFNOR de référence pour les habilitations électriques (2012 + amendement A2 obligatoire depuis oct. 2024)</li>
            <li>✓ <strong>UTE C 18-510</strong> = guide d&apos;application pratique qui complète la norme</li>
            <li>✓ La norme est <strong>la référence opposable</strong> devant les tribunaux</li>
            <li>✓ Le guide apporte des <strong>clarifications et exemples concrets</strong> d&apos;application</li>
          </ul>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">La NF C 18-510 : la norme de référence</h2>
          <p className="mt-4 text-slate-600 leading-8">
            La <strong>NF C 18-510</strong> est une norme publiée par l&apos;AFNOR (Association Française
            de Normalisation) sous l&apos;égide de l&apos;UTE (Union Technique de l&apos;Électricité). Elle
            définit les règles de prévention du risque électrique et les prescriptions à respecter
            lors des opérations sur les installations électriques.
          </p>
          <p className="mt-4 text-slate-600 leading-8">
            C&apos;est ce document qui :
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 leading-7 list-disc pl-6">
            <li>Définit les <strong>domaines de tension</strong> (BTA, BTB, HTA, HTB)</li>
            <li>Établit les <strong>zones de travail</strong> et distances limites d&apos;approche</li>
            <li>Fixe les <strong>symboles d&apos;habilitation</strong> (H0, B0, BS, BE, B1, B2, BR, BC...)</li>
            <li>Précise les <strong>règles de consignation</strong> et les procédures de travail</li>
            <li>Définit les <strong>équipements de protection</strong> requis selon les opérations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">L&apos;UTE C 18-510 : le guide d&apos;application</h2>
          <p className="mt-4 text-slate-600 leading-8">
            L&apos;<strong>UTE C 18-510</strong> est un guide publié par l&apos;UTE pour faciliter la mise
            en œuvre de la norme NF C 18-510. Il ne remplace pas la norme mais la complète avec :
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 leading-7 list-disc pl-6">
            <li>Des <strong>exemples concrets</strong> d&apos;application des prescriptions</li>
            <li>Des <strong>schémas illustratifs</strong> des zones et distances</li>
            <li>Des <strong>tableaux récapitulatifs</strong> des symboles par type d&apos;opération</li>
            <li>Des <strong>modèles de documents</strong> (titres d&apos;habilitation, attestations de consignation...)</li>
            <li>Des <strong>précisions sur les cas particuliers</strong> non explicitement couverts par la norme</li>
          </ul>
        </section>

        {/* Tableau comparatif */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900">Comparatif rapide</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Critère</th>
                  <th className="px-4 py-3 text-left font-semibold text-red-700">NF C 18-510</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">UTE C 18-510</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { critere: "Nature", nf: "Norme AFNOR", ute: "Guide d'application UTE" },
                  { critere: "Contenu", nf: "Règles et prescriptions de référence", ute: "Exemples et clarifications pratiques" },
                  { critere: "Opposabilité", nf: "Référence reconnue par les tribunaux", ute: "Complément non opposable seul" },
                  { critere: "Utilisation", nf: "Obligatoire en formation réglementaire", ute: "Recommandé pour l'application terrain" },
                  { critere: "Modèles de documents", nf: "Peu de modèles", ute: "Modèles de titres, attestations, FIS..." },
                ].map((row) => (
                  <tr key={row.critere} className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-700">{row.critere}</td>
                    <td className="px-4 py-3 text-red-700 font-medium">{row.nf}</td>
                    <td className="px-4 py-3 text-slate-600">{row.ute}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">Ce que les formateurs utilisent en pratique</h2>
          <p className="mt-4 text-slate-600 leading-8">
            Les formations habilitation électrique s&apos;appuient sur <strong>les deux documents</strong>
            conjointement. La NF C 18-510 fournit le cadre normatif et les exigences, le guide
            UTE C 18-510 apporte les supports pédagogiques (schémas, tableaux, modèles de
            documents) qui facilitent la compréhension et la mémorisation.
          </p>
          <p className="mt-4 text-slate-600 leading-8">
            Pour l&apos;employeur qui délivre le titre d&apos;habilitation, le guide UTE fournit également
            les <strong>modèles officiels de titres d&apos;habilitation</strong>, de fiches individuelles
            de sécurité (FIS) et d&apos;attestations de consignation — des documents indispensables
            à la traçabilité réglementaire.
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
            <Link href="/blog/comment-choisir-son-habilitation-electrique" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 hover:border-red-200 hover:text-red-700 transition-colors">
              Comment choisir son habilitation ? →
            </Link>
            <Link href="/blog/duree-validite-habilitation-electrique" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 hover:border-red-200 hover:text-red-700 transition-colors">
              Durée de validité →
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
          <h2 className="text-2xl font-bold">Formation habilitation électrique conforme NF C 18-510</h2>
          <p className="mt-3 text-slate-300">Organisme certifié Qualiopi · Île-de-France et France entière</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/demande-devis" className="rounded-xl bg-red-600 px-6 py-3 font-semibold hover:bg-red-700 transition-colors">
              Demander un devis
            </Link>
            <Link href="/formation-habilitation-electrique" className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold hover:bg-white/20 transition-colors">
              Voir les formations
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
