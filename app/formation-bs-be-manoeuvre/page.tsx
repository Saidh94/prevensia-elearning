import Link from "next/link";
import CourseJsonLd from "@/components/seo/CourseJsonLd";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata = {
  title: "Formation Habilitation Électrique BS / BE Manœuvre — E-learning | PREVENSIA FORMATION",
  description:
    "Formation habilitation électrique BS et BE Manœuvre conforme NF C 18-510 + A1:2020 + A2:2023. Remplacement de fusibles, manœuvres sur armoires. E-learning + classe virtuelle. Dès 350 € HT. Qualiopi.",
  alternates: {
    canonical: "https://prevensia-formation.fr/formation-bs-be-manoeuvre",
  },
  keywords: [
    "formation BS habilitation",
    "formation BE manœuvre",
    "habilitation BS",
    "habilitation BE manœuvre",
    "remplacement fusibles habilitation",
    "manœuvre armoire électrique",
    "NF C 18-510 BS BE",
  ],
  openGraph: {
    title: "Formation BS / BE Manœuvre — Habilitation électrique interventions élémentaires",
    description:
      "Habilitation BS et BE Manœuvre conforme NF C 18-510 + A1:2020 + A2:2023. Interventions élémentaires et manœuvres. E-learning + classe virtuelle. Dès 350 € HT.",
    url: "https://prevensia-formation.fr/formation-bs-be-manoeuvre",
  },
};

const faqItems = [
  {
    question: "Qu'est-ce que l'habilitation BS ?",
    answer:
      "L'habilitation BS (Basse tension, interventions élémentaires) permet à un salarié non-électricien de réaliser des interventions élémentaires définies par la norme NF C 18-510 : remplacement d'une lampe, d'un fusible de calibre identique, d'un socle de prise de courant. Elle est délivrée par l'employeur après formation.",
  },
  {
    question: "Quelle est la différence entre BS et BE Manœuvre ?",
    answer:
      "BS concerne les interventions élémentaires (remplacement de fusibles, lampes, prises) réalisées sans risque d'arc ou d'explosion. BE Manœuvre concerne les manœuvres d'exploitation sur des installations basse tension : ouverture et fermeture de disjoncteurs, sectionneurs, contacteurs dans le cadre de l'exploitation normale.",
  },
  {
    question: "Quelles sont les variantes du symbole BE ?",
    answer:
      "La norme NF C 18-510 définit plusieurs types d'habilitation BE selon la nature des opérations spécifiques réalisées : BE Manœuvre (manœuvres d'exploitation), BE Mesurage (mesurages électriques : tension, courant, résistance d'isolement), BE Vérification (vérifications initiales ou périodiques d'installations), BE Essai (essais et mise en service). Chaque variante est adaptée à un public précis — techniciens instrumentistes pour le mesurage, vérificateurs pour les vérifications, ingénieurs de mise en service pour les essais. Le titre d'habilitation mentionne explicitement la ou les variantes autorisées.",
  },
  {
    question: "La formation BS / BE Manœuvre est-elle disponible en e-learning ?",
    answer:
      "Oui. PREVENSIA FORMATION propose un parcours e-learning pour la préparation théorique, complété par une classe virtuelle pour les mises en situation et la validation des savoir-faire. À l'issue, PREVENSIA délivre une attestation de réussite et un avis après formation transmis à l'employeur. Le titre d'habilitation BS / BE Manœuvre est délivré exclusivement par l'employeur, en application de l'article R.4544-9 du Code du travail.",
  },
  {
    question: "Peut-on avoir BS et BE Manœuvre en même temps ?",
    answer:
      "Oui. Les deux symboles peuvent figurer sur le même titre d'habilitation. Cela est fréquent pour les techniciens de maintenance ou les agents d'exploitation amenés à réaliser à la fois des interventions élémentaires et des manœuvres.",
  },
  {
    question: "Quelle est la durée de validité de l'habilitation BS / BE Manœuvre ?",
    answer:
      "La norme NF C 18-510 recommande un recyclage tous les 3 ans. L'employeur peut réduire cette périodicité en fonction de l'évolution du poste, des installations ou des incidents relevés.",
  },
];

const programme = [
  { titre: "Rappels H0B0 et domaines de tension", contenu: "Zones, distances, voisinage, contacts directs et indirects." },
  { titre: "Définition des interventions élémentaires (BS)", contenu: "Remplacement fusibles, lampes, prises. Limites d'application. Distinction BS ≠ BR." },
  { titre: "Manœuvres d'exploitation (BE Manœuvre)", contenu: "Nature des manœuvres autorisées, appareillage BT, organes de coupure (disjoncteurs, sectionneurs, contacteurs)." },
  { titre: "Opérations spécifiques (BE Mesurage / Vérification / Essai)", contenu: "BE Mesurage : mesures de tension, courant, isolement. BE Vérification : contrôles réglementaires. BE Essai : mise en service, essais fonctionnels. Instruments et sécurisation de la zone." },
  { titre: "Équipements de protection", contenu: "EPC et EPI requis, VAT, outillage isolant, gants isolants, écran facial." },
  { titre: "Consignation partielle et mise hors tension", contenu: "Vérification d'absence de tension, cadenas, condamnation, balises." },
  { titre: "Conduite à tenir en cas d'incident", contenu: "Protéger, alerter, ne pas improviser, signalement systématique." },
];

export default function FormationBsBeManoeuvrePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <CourseJsonLd
        name="Formation Habilitation Électrique BS / BE Manœuvre"
        description="Formation habilitation électrique BS et BE Manœuvre conforme NF C 18-510. Interventions élémentaires et manœuvres d'exploitation. E-learning + classe virtuelle."
        courseCode="BS-BE-MANOEUVRE"
        url="/formation-bs-be-manoeuvre"
        timeRequired="P1D"
        educationalLevel="Beginner"
        audience="Techniciens de maintenance, agents d'exploitation, personnel d'atelier"
        educationalCredentialAwarded="Attestation de formation Prevensia (base pour délivrance habilitation par l'employeur)"
      />
      <FaqJsonLd items={faqItems} />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Habilitation électrique", url: "/formation-habilitation-electrique" },
          { name: "Formation BS / BE Manœuvre", url: "/formation-bs-be-manoeuvre" },
        ]}
      />

      {/* Hero */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <nav aria-label="Fil d'Ariane" className="mb-6 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">›</span>
            <Link href="/formation-habilitation-electrique" className="hover:text-white">Habilitation électrique</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Formation BS / BE Manœuvre</span>
          </nav>

          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-red-100">
            Habilitation électrique · NF C 18-510 + A1:2020 + A2:2023
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Formation habilitation électrique<br className="hidden lg:block" />{" "}
            <span className="text-red-400">BS / BE Manœuvre</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Les symboles BS et BE Manœuvre permettent à un salarié de réaliser des interventions
            élémentaires (remplacement de fusibles, prises) et des manœuvres d&apos;exploitation
            sur des installations basse tension, dans un cadre strictement défini par la NF C 18-510 + A1:2020 + A2:2023.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/inscription"
              className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 transition-colors"
            >
              S&apos;inscrire — dès 350 € HT
            </Link>
            <Link
              href="/demande-devis?type=bs-be"
              className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Devis intra-entreprise
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
            <span>✓ Qualiopi</span>
            <span>✓ Conforme NF C 18-510</span>
            <span>✓ E-learning + classe virtuelle</span>
            <span>✓ Attestation incluse</span>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Inter — initiale</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">350 € HT</p>
              <p className="mt-1 text-sm text-slate-600">E-learning + classe virtuelle</p>
            </div>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-600">Intra-entreprise</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">Dès 1 400 € HT</p>
              <p className="mt-1 text-sm text-slate-600">Groupe — tarif selon effectif</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Durée</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">1 jour</p>
              <p className="mt-1 text-sm text-slate-600">E-learning + classe virtuelle ou présentiel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programme */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Programme de la formation BS / BE Manœuvre</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {programme.map((p, i) => (
              <div key={p.titre} className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
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

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Questions fréquentes — BS / BE Manœuvre</h2>
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

      {/* CTA */}
      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Obtenir l&apos;habilitation BS / BE Manœuvre</h2>
          <p className="mt-4 text-lg text-slate-300">
            Formation e-learning avec classe virtuelle. Attestation Qualiopi délivrée à l&apos;issue.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/inscription" className="rounded-xl bg-red-600 px-8 py-4 font-semibold hover:bg-red-700 transition-colors">
              S&apos;inscrire — 350 € HT
            </Link>
            <Link href="/demande-devis?type=bs-be" className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold hover:bg-white/20 transition-colors">
              Devis entreprise
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
