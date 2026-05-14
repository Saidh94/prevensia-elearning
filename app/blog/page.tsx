import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata = {
  title: "Blog Sécurité Électrique & Prévention des Risques | PREVENSIA FORMATION",
  description:
    "Conseils, guides et actualités sur l'habilitation électrique, la sécurité au travail et la prévention des risques. Ressources gratuites pour entreprises et salariés.",
  alternates: {
    canonical: "https://prevensia-formation.fr/blog",
  },
};

const articles = [
  {
    slug: "comment-choisir-son-habilitation-electrique",
    titre: "Comment choisir son habilitation électrique ?",
    description:
      "H0B0, BS, B1, B2, BR, BC... Les symboles d'habilitation électrique peuvent sembler complexes. Ce guide pratique vous aide à identifier le symbole adapté à chaque poste.",
    date: "2025-05-01",
    duree: "5 min",
    categorie: "Guide pratique",
  },
  {
    slug: "duree-validite-habilitation-electrique",
    titre: "Durée de validité de l'habilitation électrique",
    description:
      "Combien de temps est valable une habilitation électrique ? Quand faut-il faire un recyclage ? Tout ce que l'employeur doit savoir sur la périodicité et les obligations réglementaires.",
    date: "2025-05-08",
    duree: "4 min",
    categorie: "Réglementation",
  },
  {
    slug: "habilitation-electrique-sous-traitants",
    titre: "Habilitation électrique pour les sous-traitants",
    description:
      "Donneur d'ordre, plan de prévention, inspection commune préalable : qui est responsable de l'habilitation électrique des sous-traitants intervenant sur site ?",
    date: "2025-05-15",
    duree: "5 min",
    categorie: "Réglementation",
  },
  {
    slug: "difference-nf-c-18-510-ute-c-18-510",
    titre: "Différence entre NF C 18-510 et UTE C 18-510",
    description:
      "La NF C 18-510 est la norme de référence, l'UTE C 18-510 son guide d'application. Ce que chacun contient et ce qui est réellement opposable en cas d'accident.",
    date: "2025-05-22",
    duree: "4 min",
    categorie: "Réglementation",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
        ]}
      />

      {/* Hero */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="mb-6 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Blog</span>
          </nav>

          <h1 className="text-4xl font-bold sm:text-5xl">
            Blog <span className="text-red-400">Sécurité & Prévention</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Guides pratiques, conseils réglementaires et ressources gratuites sur
            l&apos;habilitation électrique et la sécurité au travail.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group block rounded-2xl border border-slate-200 bg-white p-6 hover:border-red-200 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 text-xs font-semibold text-slate-500 uppercase tracking-widest">
                <span className="rounded-full bg-red-50 px-3 py-1 text-red-600">{article.categorie}</span>
                <span>{article.duree} de lecture</span>
                <span>{new Date(article.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
              </div>
              <h2 className="mt-3 text-xl font-bold text-slate-900 group-hover:text-red-700 transition-colors">
                {article.titre}
              </h2>
              <p className="mt-2 text-slate-600">{article.description}</p>
              <p className="mt-4 text-sm font-semibold text-red-600">Lire l&apos;article →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 py-12 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold">Besoin d&apos;une formation habilitation électrique ?</h2>
          <p className="mt-3 text-slate-300">Devis intra sous 48h · Qualiopi · Île-de-France et toute la France</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/demande-devis" className="rounded-xl bg-red-600 px-6 py-3 font-semibold hover:bg-red-700 transition-colors">
              Demander un devis
            </Link>
            <Link href="/formation-habilitation-electrique" className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold hover:bg-white/20 transition-colors">
              Voir les formations
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
