import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import FaqJsonLd from "@/components/seo/FaqJsonLd";

export const metadata = {
  title: "Formation Habilitation Électrique Île-de-France — Présentiel & Intra | PREVENSIA",
  description:
    "Formation habilitation électrique en Île-de-France : présentiel, intra-entreprise et e-learning. Organisme certifié Qualiopi basé à Paris. H0B0, BS/BE, B1, B2, BR, BC. Devis rapide.",
  alternates: {
    canonical: "https://prevensia-formation.fr/formation-habilitation-electrique-ile-de-france",
  },
  keywords: [
    "formation habilitation électrique Île-de-France",
    "habilitation électrique Paris",
    "formation habilitation électrique 93",
    "formation habilitation électrique Seine-Saint-Denis",
    "organisme formation habilitation électrique Paris",
    "formation habilitation électrique intra-entreprise IDF",
  ],
};

const faqItems = [
  {
    question: "PREVENSIA FORMATION intervient-il partout en Île-de-France ?",
    answer:
      "Oui. PREVENSIA FORMATION est basé à Paris et intervient dans toute l'Île-de-France pour les formations intra-entreprise : Paris, Hauts-de-Seine, Seine-Saint-Denis, Val-de-Marne, Essonne, Seine-et-Marne, Yvelines et Val-d'Oise.",
  },
  {
    question: "Comment fonctionne une formation intra-entreprise en Île-de-France ?",
    answer:
      "Le formateur se déplace dans vos locaux en Île-de-France. Vous regroupez vos collaborateurs en une session dédiée, avec un programme adapté à votre environnement de travail réel. Un devis est établi sous 48h.",
  },
  {
    question: "L'e-learning PREVENSIA est-il accessible depuis toute la France ?",
    answer:
      "Oui. Le parcours e-learning est accessible 24h/24 depuis n'importe quel appareil (PC, mobile, tablette) et depuis toute la France. La partie encadrée (classe virtuelle, visio ou présentiel) peut se tenir à distance.",
  },
  {
    question: "Quels sont les délais pour organiser une formation intra en IDF ?",
    answer:
      "En règle générale, une session intra peut être organisée sous 2 à 4 semaines en Île-de-France selon les disponibilités. Pour les besoins urgents, contactez-nous directement au 01 89 62 94 92.",
  },
];

const departements = [
  { code: "75", nom: "Paris" },
  { code: "77", nom: "Seine-et-Marne" },
  { code: "78", nom: "Yvelines" },
  { code: "91", nom: "Essonne" },
  { code: "92", nom: "Hauts-de-Seine" },
  { code: "93", nom: "Seine-Saint-Denis" },
  { code: "94", nom: "Val-de-Marne" },
  { code: "95", nom: "Val-d'Oise" },
];

export default function FormationHabilitationIleDeFrancePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Habilitation électrique", url: "/formation-habilitation-electrique" },
          { name: "Formation Île-de-France", url: "/formation-habilitation-electrique-ile-de-france" },
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
            <span className="text-white">Île-de-France</span>
          </nav>

          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-red-100">
            Île-de-France · Paris (75)
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Formation habilitation électrique<br className="hidden lg:block" />{" "}
            <span className="text-red-400">en Île-de-France</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Organisme de formation Qualiopi basé à Paris, PREVENSIA FORMATION
            accompagne les entreprises d&apos;Île-de-France dans leurs obligations réglementaires
            en habilitation électrique. Présentiel sur site, visio ou e-learning selon votre organisation.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/demande-devis" className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 transition-colors">
              Demander un devis intra
            </Link>
            <Link href="/planning" className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/20 transition-colors">
              Voir les sessions inter
            </Link>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Zone d&apos;intervention en Île-de-France</h2>
          <p className="mt-4 text-lg text-slate-600">
            PREVENSIA FORMATION se déplace dans vos locaux dans les 8 départements franciliens
            pour les formations intra-entreprise. Les sessions inter-entreprises sont accessibles
            depuis toute la région.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-4">
            {departements.map((d) => (
              <div key={d.code} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">{d.code}</span>
                <span className="font-medium text-slate-700">{d.nom}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formations disponibles */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Formations habilitation électrique disponibles en IDF
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { titre: "H0B0 / H0V", desc: "Non-électriciens : caristes, nettoyage, maintenance mécanique", href: "/formation-h0b0", prix: "220 € HT" },
              { titre: "BS / BE Manœuvre", desc: "Interventions élémentaires et manœuvres d'exploitation", href: "/formation-bs-be-manoeuvre", prix: "350 € HT" },
              { titre: "B1 / B2 / BR / BC", desc: "Électriciens BT : travaux, dépannage, consignation, vérification", href: "/formation-b1-b2-br-bc", prix: "790 € HT" },
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
          <h2 className="text-3xl font-bold text-slate-900">Questions fréquentes</h2>
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
          <h2 className="text-3xl font-bold">Formation habilitation électrique en Île-de-France</h2>
          <p className="mt-4 text-lg text-slate-300">Devis intra-entreprise sous 48h. Formateur certifié Qualiopi.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/demande-devis" className="rounded-xl bg-red-600 px-8 py-4 font-semibold hover:bg-red-700 transition-colors">
              Demander un devis
            </Link>
            <Link href="/planning" className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold hover:bg-white/20 transition-colors">
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
