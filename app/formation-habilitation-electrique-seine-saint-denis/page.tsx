import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import FaqJsonLd from "@/components/seo/FaqJsonLd";

export const metadata = {
  title: "Formation Habilitation Électrique Seine-Saint-Denis (93) | PREVENSIA FORMATION",
  description:
    "Formation habilitation électrique en Seine-Saint-Denis (93). Organisme Qualiopi basé à Noisy-le-Grand (93160). H0B0, BS/BE, B1/B2/BR/BC. Intra sur site. Devis 48h.",
  alternates: {
    canonical: "https://prevensia-formation.fr/formation-habilitation-electrique-seine-saint-denis",
  },
  keywords: [
    "formation habilitation électrique Seine-Saint-Denis",
    "formation habilitation électrique 93",
    "habilitation électrique Noisy-le-Grand",
    "formation électrique Bobigny",
    "formation habilitation électrique Saint-Denis",
    "organisme formation habilitation 93",
  ],
};

const faqItems = [
  {
    question: "PREVENSIA FORMATION est-il basé en Seine-Saint-Denis ?",
    answer:
      "Oui. PREVENSIA FORMATION est implanté à Noisy-le-Grand (93160), au cœur de la Seine-Saint-Denis. Nous connaissons bien le tissu économique du 93 : industrie, logistique, BTP, tertiaire. Nous intervenons dans toutes les communes du département.",
  },
  {
    question: "Quels délais pour une formation intra en Seine-Saint-Denis ?",
    answer:
      "En règle générale, une session intra peut être organisée sous 1 à 3 semaines en Seine-Saint-Denis, en raison de notre proximité. Pour un besoin urgent, appelez-nous directement au 01 89 62 94 92.",
  },
  {
    question: "Proposez-vous des sessions inter en présentiel dans le 93 ?",
    answer:
      "Oui. Certaines sessions inter-entreprises se tiennent dans nos locaux à Noisy-le-Grand, accessibles depuis Saint-Denis, Bobigny, Montreuil, Pantin, Rosny-sous-Bois et toute la Seine-Saint-Denis. Consultez notre planning.",
  },
  {
    question: "L'e-learning est-il disponible sans déplacement pour les salariés du 93 ?",
    answer:
      "Oui. Les parcours H0B0/H0V et BS/BE Manœuvre sont disponibles en e-learning avec classe virtuelle, sans déplacement nécessaire. Pour les symboles B1, B2, BR, BC, une partie encadrée en présentiel ou visio reste obligatoire.",
  },
];

const communes = [
  "Noisy-le-Grand", "Montreuil", "Saint-Denis", "Bobigny", "Aubervilliers",
  "Pantin", "Rosny-sous-Bois", "Bondy", "Aulnay-sous-Bois", "Villepinte",
  "Le Blanc-Mesnil", "Tremblay-en-France",
];

export default function FormationHabilitation93() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Habilitation électrique", url: "/formation-habilitation-electrique" },
          { name: "Île-de-France", url: "/formation-habilitation-electrique-ile-de-france" },
          { name: "Seine-Saint-Denis (93)", url: "/formation-habilitation-electrique-seine-saint-denis" },
        ]}
      />
      <FaqJsonLd items={faqItems} />

      {/* Hero */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <nav aria-label="Fil d'Ariane" className="mb-6 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">›</span>
            <Link href="/formation-habilitation-electrique" className="hover:text-white">Habilitation électrique</Link>
            <span className="mx-2">›</span>
            <Link href="/formation-habilitation-electrique-ile-de-france" className="hover:text-white">Île-de-France</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Seine-Saint-Denis (93)</span>
          </nav>

          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-red-100">
            Seine-Saint-Denis · Noisy-le-Grand (93160)
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Formation habilitation électrique<br className="hidden lg:block" />{" "}
            <span className="text-red-400">en Seine-Saint-Denis (93)</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            PREVENSIA FORMATION est implanté à Noisy-le-Grand au cœur du 93. Nous intervenons
            dans toutes les communes de Seine-Saint-Denis pour les formations intra-entreprise
            habilitation électrique. Certifié Qualiopi, devis en 48h.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/demande-devis" className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 transition-colors">
              Demander un devis intra 93
            </Link>
            <Link href="/planning" className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/20 transition-colors">
              Sessions inter disponibles
            </Link>
          </div>
        </div>
      </section>

      {/* Communes */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Communes couvertes en Seine-Saint-Denis</h2>
          <p className="mt-4 text-lg text-slate-600">
            Basés à Noisy-le-Grand, nous intervenons dans toute la Seine-Saint-Denis sans
            frais de déplacement supplémentaires pour les communes proches.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {communes.map((c) => (
              <span key={c} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                {c}
              </span>
            ))}
            <span className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-700">
              + toutes communes du 93
            </span>
          </div>
        </div>
      </section>

      {/* Formations */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Formations habilitation électrique disponibles</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { titre: "H0B0 / H0V", desc: "Non-électriciens évoluant en zone à risque électrique", href: "/formation-h0b0", prix: "220 € HT" },
              { titre: "BS / BE Manœuvre", desc: "Interventions élémentaires et manœuvres d'exploitation", href: "/formation-bs-be-manoeuvre", prix: "350 € HT" },
              { titre: "B1 / B2 / BR / BC", desc: "Électriciens BT : travaux, dépannage, consignation", href: "/formation-b1-b2-br-bc", prix: "790 € HT" },
            ].map((f) => (
              <Link key={f.titre} href={f.href} className="group rounded-2xl border border-slate-200 bg-white p-6 hover:border-red-200 hover:shadow-md transition-all">
                <p className="text-xs font-semibold uppercase tracking-widest text-red-600">{f.prix} inter</p>
                <h3 className="mt-2 text-xl font-bold text-slate-900 group-hover:text-red-700">{f.titre}</h3>
                <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
                <p className="mt-4 text-sm font-semibold text-red-600">Voir la formation →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Questions fréquentes — Seine-Saint-Denis</h2>
          <div className="mt-8 space-y-4">
            {faqItems.map((item) => (
              <details key={item.question} className="group rounded-2xl border border-slate-200 bg-slate-50 p-5">
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
          <h2 className="text-3xl font-bold">Formation habilitation électrique en Seine-Saint-Denis</h2>
          <p className="mt-4 text-lg text-slate-300">Organisme local Qualiopi · Devis sous 48h · Déplacement sur site</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/demande-devis" className="rounded-xl bg-red-600 px-8 py-4 font-semibold hover:bg-red-700 transition-colors">
              Demander un devis
            </Link>
            <Link href="/formation-habilitation-electrique-ile-de-france" className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold hover:bg-white/20 transition-colors">
              Toute l&apos;Île-de-France
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
