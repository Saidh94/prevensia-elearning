import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import FaqJsonLd from "@/components/seo/FaqJsonLd";

export const metadata = {
  title: "Formation Habilitation Électrique Paris (75) — Intra & Inter | PREVENSIA FORMATION",
  description:
    "Formation habilitation électrique à Paris (75) et en petite couronne. Organisme Qualiopi basé à Noisy-le-Grand. H0B0, BS/BE, B1/B2/BR/BC. Intra-entreprise sur site. Devis 48h.",
  alternates: {
    canonical: "https://prevensia-formation.fr/formation-habilitation-electrique-paris",
  },
  keywords: [
    "formation habilitation électrique Paris",
    "habilitation électrique 75",
    "formation habilitation électrique intra Paris",
    "organisme formation habilitation électrique Paris",
    "formation électrique Paris entreprise",
  ],
};

const faqItems = [
  {
    question: "PREVENSIA FORMATION intervient-il à Paris intramuros ?",
    answer:
      "Oui. PREVENSIA FORMATION est basé à Noisy-le-Grand (93160) et intervient dans tous les arrondissements de Paris pour les formations intra-entreprise. Le formateur se déplace dans vos locaux avec le matériel pédagogique nécessaire.",
  },
  {
    question: "Quel délai pour organiser une formation à Paris ?",
    answer:
      "Une session intra-entreprise à Paris peut généralement être organisée sous 2 à 4 semaines selon les disponibilités. Pour un besoin urgent, contactez-nous directement au 01 89 62 94 92.",
  },
  {
    question: "Peut-on s'inscrire en inter depuis Paris ?",
    answer:
      "Oui. Les sessions inter-entreprises sont accessibles depuis Paris. Certaines se tiennent à Noisy-le-Grand (accessible RER A) ou en visioconférence pour la partie théorique. Consultez notre planning pour les prochaines dates.",
  },
  {
    question: "Les formations sont-elles finançables par un OPCO ?",
    answer:
      "Oui. PREVENSIA FORMATION est certifié Qualiopi, ce qui rend nos formations éligibles aux financements OPCO. Nous fournissons tous les documents justificatifs nécessaires lors de la demande de devis.",
  },
];

export default function FormationHabilitationParis() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Habilitation électrique", url: "/formation-habilitation-electrique" },
          { name: "Formation Paris", url: "/formation-habilitation-electrique-paris" },
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
            <span className="text-white">Paris</span>
          </nav>

          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-red-100">
            Paris (75) · Île-de-France
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Formation habilitation électrique<br className="hidden lg:block" />{" "}
            <span className="text-red-400">à Paris</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            PREVENSIA FORMATION intervient dans vos locaux à Paris pour les formations
            intra-entreprise habilitation électrique. Formateur certifié Qualiopi, déplacement
            dans tous les arrondissements. H0B0, BS/BE Manœuvre, B1/B2/BR/BC.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/demande-devis" className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 transition-colors">
              Demander un devis intra Paris
            </Link>
            <Link href="/planning" className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/20 transition-colors">
              Sessions inter disponibles
            </Link>
          </div>
        </div>
      </section>

      {/* Formations */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Formations disponibles à Paris</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { titre: "H0B0 / H0V", desc: "Non-électriciens, caristes, maintenance mécanique, nettoyage", href: "/formation-h0b0", prix: "220 € HT" },
              { titre: "BS / BE Manœuvre", desc: "Interventions élémentaires, remplacement fusibles, manœuvres", href: "/formation-bs-be-manoeuvre", prix: "350 € HT" },
              { titre: "B1 / B2 / BR / BC", desc: "Électriciens BT : travaux, dépannage, consignation, vérification", href: "/formation-b1-b2-br-bc", prix: "790 € HT" },
            ].map((f) => (
              <Link key={f.titre} href={f.href} className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:border-red-200 hover:shadow-md transition-all">
                <p className="text-xs font-semibold uppercase tracking-widest text-red-600">{f.prix} inter</p>
                <h3 className="mt-2 text-xl font-bold text-slate-900 group-hover:text-red-700">{f.titre}</h3>
                <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
                <p className="mt-4 text-sm font-semibold text-red-600">Voir la formation →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages intra Paris */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Formation intra-entreprise à Paris : les avantages</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { titre: "Formateur sur site", desc: "Le formateur se déplace dans vos locaux parisiens avec le matériel pédagogique." },
              { titre: "Programme adapté", desc: "Le contenu est ajusté à vos installations réelles et à vos procédures internes." },
              { titre: "Groupe dédié", desc: "Session réservée à vos équipes, sans mélange avec d'autres entreprises." },
              { titre: "Devis 48h", desc: "Retour garanti sous 48h avec tarif groupe et proposition de dates." },
            ].map((a) => (
              <div key={a.titre} className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="font-bold text-slate-900">{a.titre}</p>
                <p className="mt-2 text-sm text-slate-600">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Questions fréquentes — Paris</h2>
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
          <h2 className="text-3xl font-bold">Formation habilitation électrique à Paris</h2>
          <p className="mt-4 text-lg text-slate-300">Devis intra sous 48h · Formateur certifié Qualiopi · Tous arrondissements</p>
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
