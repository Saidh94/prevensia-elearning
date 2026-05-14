import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import FaqJsonLd from "@/components/seo/FaqJsonLd";

export const metadata = {
  title: "Comment choisir son habilitation électrique ? Guide complet | PREVENSIA",
  description:
    "H0B0, BS, B1, B2, BR, BC : quel symbole d'habilitation électrique pour quel poste ? Guide pratique pour aider les employeurs et salariés à choisir la bonne formation.",
  alternates: {
    canonical: "https://prevensia-formation.fr/blog/comment-choisir-son-habilitation-electrique",
  },
  keywords: [
    "choisir habilitation électrique",
    "quel symbole habilitation",
    "différence H0B0 B1 B2 BR",
    "habilitation électrique quel niveau",
    "guide habilitation NF C 18-510",
  ],
  openGraph: {
    title: "Comment choisir son habilitation électrique ? Guide H0B0, BS, B1, B2, BR, BC",
    description:
      "Guide pratique pour choisir le bon symbole d'habilitation électrique selon le poste : H0B0, BS/BE, B1, B2, BR, BC. Conforme NF C 18-510.",
    url: "https://prevensia-formation.fr/blog/comment-choisir-son-habilitation-electrique",
  },
};

const faqItems = [
  {
    question: "Un cariste ou agent de nettoyage a-t-il besoin d'une habilitation ?",
    answer:
      "Oui, si son poste l'amène à évoluer dans un environnement présentant un risque électrique (chantier, atelier industriel, local technique). L'habilitation H0B0 est le niveau minimum requis pour les non-électriciens travaillant dans une zone à risque électrique.",
  },
  {
    question: "Quelle est la différence entre habilitation initiale et recyclage ?",
    answer:
      "La formation initiale est destinée aux personnes n'ayant jamais été habilitées ou dont le titre est expiré depuis plus de 3 ans. Le recyclage s'adresse aux personnes habilitées souhaitant maintenir et actualiser leurs compétences tous les 3 ans comme le recommande la NF C 18-510.",
  },
  {
    question: "L'employeur peut-il délivrer l'habilitation sans formation ?",
    answer:
      "Non. La NF C 18-510 et le Code du travail (R.4544-10) imposent que l'employeur s'assure que le salarié a bien reçu une formation adéquate avant de lui délivrer un titre d'habilitation. La formation par un organisme certifié Qualiopi constitue la preuve de cette formation.",
  },
];

const symboles = [
  {
    code: "H0B0 / H0V",
    titre: "Non-électriciens",
    public: "Caristes, agents de nettoyage, peintres, maçons, magasiniers",
    travaux: "Aucun travail électrique. Évolution en environnement à risque.",
    prix: "220 € HT",
    href: "/formation-h0b0",
    color: "bg-slate-600",
  },
  {
    code: "BS / BE Manœuvre",
    titre: "Interventions élémentaires",
    public: "Techniciens de maintenance, agents d'exploitation",
    travaux: "Remplacement de fusibles, manœuvres d'exploitation simples.",
    prix: "350 € HT",
    href: "/formation-bs-be-manoeuvre",
    color: "bg-amber-600",
  },
  {
    code: "B1 / B1V",
    titre: "Exécutant de travaux BT",
    public: "Électriciens, techniciens de maintenance électrique",
    travaux: "Travaux hors tension (B1) ou au voisinage (B1V), sous autorité B2.",
    prix: "790 € HT",
    href: "/formation-b1-b2-br-bc",
    color: "bg-red-600",
  },
  {
    code: "B2 / B2V",
    titre: "Chargé de travaux BT",
    public: "Chef d'équipe électrique, responsable technique",
    travaux: "Dirige les exécutants B1, délivre les documents de chantier.",
    prix: "790 € HT",
    href: "/formation-b1-b2-br-bc",
    color: "bg-red-700",
  },
  {
    code: "BR",
    titre: "Interventions générales",
    public: "Électricien polyvalent, dépanneur, technicien SAV",
    travaux: "Dépannage, connexions, mesurages sur installation en exploitation.",
    prix: "790 € HT",
    href: "/formation-b1-b2-br-bc",
    color: "bg-red-800",
  },
  {
    code: "BC",
    titre: "Chargé de consignation",
    public: "Responsable électrique, chef de quart",
    travaux: "Mise hors tension et mise en sécurité des installations avant travaux.",
    prix: "790 € HT",
    href: "/formation-b1-b2-br-bc",
    color: "bg-slate-900",
  },
];

export default function ArticleChoisirHabilitationPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Comment choisir son habilitation électrique ?", url: "/blog/comment-choisir-son-habilitation-electrique" },
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
            <span className="text-white">Choisir son habilitation</span>
          </nav>

          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest">
            <span className="rounded-full bg-red-600 px-3 py-1 text-white">Guide pratique</span>
            <span className="text-slate-400">5 min de lecture · 1er mai 2025</span>
          </div>

          <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Comment choisir son habilitation électrique ?
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            H0B0, BS, B1, B2, BR, BC… Le bon symbole dépend du poste réel occupé, pas d&apos;une
            préférence. Ce guide vous aide à faire le bon choix.
          </p>
        </div>
      </section>

      {/* Article */}
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">

        <section className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-slate-900">Pourquoi bien choisir son symbole d&apos;habilitation ?</h2>
          <p className="mt-4 text-slate-600 leading-8">
            L&apos;habilitation électrique n&apos;est pas un simple diplôme. C&apos;est un acte formel de l&apos;employeur
            qui atteste que le salarié est compétent pour des travaux ou des opérations définies sur
            des installations électriques précises. Délivrer un symbole trop large expose l&apos;entreprise
            à un risque juridique. Un symbole trop restrictif pénalise le salarié dans ses missions.
          </p>
          <p className="mt-4 text-slate-600 leading-8">
            La norme <strong>NF C 18-510</strong> définit chaque symbole avec précision. Le rôle de
            l&apos;organisme de formation est de préparer le salarié aux exigences du symbole visé. Le rôle
            de l&apos;employeur est de délivrer le titre après vérification de l&apos;adéquation au poste réel.
          </p>
        </section>

        {/* Tableau des symboles */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900">Le bon symbole selon le poste</h2>
          <p className="mt-4 text-slate-600">
            Utilisez ce tableau pour identifier rapidement le symbole adapté :
          </p>
          <div className="mt-6 space-y-3">
            {symboles.map((s) => (
              <div key={s.code} className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                <span className={`flex h-12 w-20 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white ${s.color}`}>
                  {s.code}
                </span>
                <div className="flex-1">
                  <p className="font-bold text-slate-900">{s.titre}</p>
                  <p className="text-sm text-slate-500 mt-0.5">{s.public}</p>
                  <p className="text-sm text-slate-600 mt-1">{s.travaux}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-lg font-bold text-slate-900">{s.prix}</p>
                  <Link href={s.href} className="mt-1 inline-block text-sm font-semibold text-red-600 hover:underline">
                    Voir la formation →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Conseils */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">3 questions pour choisir le bon niveau</h2>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="font-bold text-slate-900">1. Le salarié touche-t-il à des équipements électriques ?</h3>
            <p className="mt-2 text-slate-600 text-sm leading-7">
              <strong>Non</strong> → H0B0 suffit s&apos;il travaille à proximité d&apos;installations électriques.<br />
              <strong>Oui (gestes simples)</strong> → BS pour le remplacement de fusibles ou de lampes. BE Manœuvre pour ouvrir un disjoncteur.<br />
              <strong>Oui (travaux électriques)</strong> → B1, B2, BR ou BC selon le rôle.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="font-bold text-slate-900">2. L&apos;intervention se fait-elle sous tension ou hors tension ?</h3>
            <p className="mt-2 text-slate-600 text-sm leading-7">
              <strong>Hors tension</strong> → B1 (exécutant) ou B2 (chargé de travaux).<br />
              <strong>Au voisinage de pièces nues sous tension</strong> → Ajouter l&apos;indice V (B1V, B2V).<br />
              <strong>Sur installation en exploitation</strong> → BR pour le dépannage.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="font-bold text-slate-900">3. Le salarié dirige-t-il d&apos;autres électriciens ?</h3>
            <p className="mt-2 text-slate-600 text-sm leading-7">
              <strong>Non</strong> → B1 ou BR selon le type d&apos;intervention.<br />
              <strong>Oui</strong> → B2 (chargé de travaux) obligatoire pour diriger une équipe.<br />
              <strong>Il consigne les installations</strong> → BC en complément.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12">
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
          <h2 className="text-2xl font-bold">Besoin d&apos;aide pour choisir votre formation ?</h2>
          <p className="mt-3 text-slate-300">Notre équipe vous oriente selon vos postes et votre organisation. Devis sous 48h.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/demande-devis" className="rounded-xl bg-red-600 px-6 py-3 font-semibold hover:bg-red-700 transition-colors">
              Demander un devis
            </Link>
            <Link href="/formation-habilitation-electrique" className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold hover:bg-white/20 transition-colors">
              Voir toutes les formations
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
