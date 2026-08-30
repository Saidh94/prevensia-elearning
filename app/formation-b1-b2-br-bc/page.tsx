import Link from "next/link";
import CourseJsonLd from "@/components/seo/CourseJsonLd";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata = {
  title: "Formation Habilitation Électrique B1 B2 BR BC — Électriciens BT | PREVENSIA FORMATION",
  description:
    "Formation habilitation électrique B1, B2, BR, BC conforme NF C 18-510 + A2. Travaux BT, dépannage, consignation, vérification. E-learning + présentiel. Dès 790 € HT. Qualiopi.",
  alternates: {
    canonical: "https://prevensia-formation.fr/formation-b1-b2-br-bc",
  },
  keywords: [
    "formation B1 habilitation électrique",
    "formation B2 habilitation électrique",
    "formation BR habilitation",
    "formation BC consignation",
    "habilitation électricien BT",
    "formation habilitation basse tension",
    "NF C 18-510 B1 B2 BR BC",
    "formation chargé de travaux électrique",
  ],
  openGraph: {
    title: "Formation B1 / B2 / BR / BC — Habilitation électrique électriciens BT",
    description:
      "Habilitation B1, B2, BR, BC conforme NF C 18-510. Exécutants, chargés de travaux, dépannage, consignation. E-learning + présentiel. Dès 790 € HT.",
    url: "https://prevensia-formation.fr/formation-b1-b2-br-bc",
  },
};

const faqItems = [
  {
    question: "Quelle est la différence entre B1, B2, BR et BC ?",
    answer:
      "B1 concerne l'exécutant de travaux hors tension ou au voisinage. B2 est le chargé de travaux qui dirige une équipe. BR est l'habilitation pour les interventions générales (dépannage, connexions) sur des installations en exploitation. BC est réservé au chargé de consignation, qui réalise la mise hors tension et la mise en sécurité de l'installation avant travaux.",
  },
  {
    question: "Peut-on cumuler plusieurs symboles (B1, B2, BR, BC) ?",
    answer:
      "Oui. Un même titre d'habilitation peut porter plusieurs symboles. C'est fréquent pour les électriciens polyvalents qui assurent à la fois des travaux (B1/B2) et du dépannage (BR) ou de la consignation (BC). Le programme de formation couvre alors l'ensemble des symboles visés.",
  },
  {
    question: "La formation B1 B2 BR BC est-elle disponible en e-learning ?",
    answer:
      "La partie théorique est disponible en e-learning. Elle est complétée obligatoirement par une séquence encadrée (présentiel ou visio selon le symbole) avec mises en situation pratiques, évaluations et validation par le formateur. L'e-learning est inclus dans le tarif de la formation.",
  },
  {
    question: "Quelle est la durée de la formation B1/B2/BR/BC ?",
    answer:
      "La formation initiale dure 2 à 3 jours selon les symboles visés. Un recyclage de 1 à 2 jours est recommandé tous les 3 ans. Pour les formations intra-entreprise, la durée peut être adaptée en fonction du niveau initial des apprenants.",
  },
  {
    question: "Qu'est-ce que le symbole V (B1V, B2V) ?",
    answer:
      "L'indice V (Voisinage) s'ajoute aux symboles B1 et B2 pour autoriser le travail au voisinage de pièces nues sous tension. Sans cet indice, le salarié doit impérativement travailler hors tension. B1V et B2V sont les habilitations les plus courantes pour les électriciens intervenants en milieu industriel ou tertiaire.",
  },
  {
    question: "Quelle est la durée de validité de l'habilitation B1/B2/BR/BC ?",
    answer:
      "La norme NF C 18-510 recommande un recyclage tous les 3 ans. L'employeur peut réduire cette périodicité en cas de changement de poste, d'évolution des installations ou d'incident relevé. Le titre d'habilitation reste délivré par l'employeur.",
  },
  {
    question: "Qu'est-ce que le suivi individuel renforcé (SIS) pour les travailleurs habilités ?",
    answer:
      "Depuis octobre 2024, les travailleurs exposés aux risques électriques relèvent du suivi individuel renforcé (SIS), qui remplace l'ancien dispositif SIR. Le SIS implique un examen médical d'aptitude avant affectation à un poste exposé aux risques électriques, renouvelé régulièrement selon les recommandations du médecin du travail. L'employeur doit s'assurer que le salarié dispose d'une aptitude médicale valide avant de lui délivrer ou renouveler une habilitation électrique.",
  },
];

const symboles = [
  {
    code: "B1 / B1V",
    titre: "Exécutant de travaux",
    desc: "Réalise des travaux hors tension (B1) ou au voisinage de pièces nues sous tension (B1V), sous l'autorité d'un chargé de travaux B2.",
    public: "Électricien, technicien de maintenance",
  },
  {
    code: "B2 / B2V",
    titre: "Chargé de travaux",
    desc: "Dirige une équipe d'exécutants (B1) sur un chantier électrique. Prend en charge l'Avis de Fin de Travaux (AFT) et les documents de consignation.",
    public: "Chef d'équipe électrique, responsable technique",
  },
  {
    code: "BR",
    titre: "Chargé d'intervention générale",
    desc: "Réalise seul des interventions de dépannage, connexions et mesurages sur des installations basse tension en exploitation.",
    public: "Électricien polyvalent, dépanneur, technicien SAV",
  },
  {
    code: "BC",
    titre: "Chargé de consignation",
    desc: "Réalise la mise hors tension d'une installation électrique et sa mise en sécurité avant remise au chargé de travaux. Délivre l'Attestation de Consignation.",
    public: "Responsable électrique, agent de maîtrise technique",
  },
];

const programme = [
  { titre: "Rappels et domaines de tension BT/HTA", contenu: "Zones, distances, voisinage, limites d'approche BT. Rappel des fondamentaux H0B0." },
  { titre: "Rôles et responsabilités (B1, B2, BR, BC)", contenu: "Hiérarchie des habilitations, rôles respectifs sur un chantier électrique, documents associés." },
  { titre: "Travaux hors tension (B1 / B2)", contenu: "Procédure de consignation, vérification d'absence de tension, attestations de travaux." },
  { titre: "Travaux au voisinage (B1V / B2V)", contenu: "Distances limites d'approche, EPI et EPC requis, signalisation des zones de voisinage." },
  { titre: "Interventions générales (BR)", contenu: "Dépannage, remplacement de pièces, mesurages et essais, connexions sur installations en exploitation." },
  { titre: "Consignation (BC)", contenu: "Séquence complète de consignation/déconsignation, cadenas et condamnation, Attestation de Consignation." },
  { titre: "Equipements de protection et outillage", contenu: "Sélection et utilisation des EPI (gants isolants, visière, tapis), VAT, outillage isolant." },
  { titre: "Conduite à tenir en cas d'incident", contenu: "Protéger, alerter, ne pas improviser. PEAS/SST. Remontée d'incident." },
];

export default function FormationB1B2BrBcPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <CourseJsonLd
        name="Formation Habilitation Électrique B1 / B2 / BR / BC"
        description="Formation habilitation électrique pour électriciens BT : B1, B2, BR, BC conforme NF C 18-510. Travaux, dépannage, consignation. E-learning + présentiel."
        courseCode="B1-B2-BR-BC"
        url="/formation-b1-b2-br-bc"
        timeRequired="P2D"
        educationalLevel="Intermediate"
        audience="Électriciens, techniciens de maintenance, chargés de travaux, agents de consignation"
        educationalCredentialAwarded="Attestation de formation Prevensia (base pour délivrance habilitation par l'employeur)"
      />
      <FaqJsonLd items={faqItems} />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Habilitation électrique", url: "/formation-habilitation-electrique" },
          { name: "Formation B1 / B2 / BR / BC", url: "/formation-b1-b2-br-bc" },
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
            <span className="text-white">Formation B1 / B2 / BR / BC</span>
          </nav>

          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-red-100">
            Habilitation électrique électriciens BT · NF C 18-510 + A2
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Formation habilitation électrique<br className="hidden lg:block" />{" "}
            <span className="text-red-400">B1 / B2 / BR / BC</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Les symboles B couvrent l&apos;ensemble des travaux électriques basse tension :
            exécution (B1), direction de chantier (B2), dépannage et interventions générales (BR),
            consignation (BC). Formation conforme NF C 18-510, e-learning inclus + séquence
            encadrée obligatoire.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/demande-devis?type=b1-b2-br-bc"
              className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 transition-colors"
            >
              Demander un devis
            </Link>
            <Link
              href="/planning"
              className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Voir les sessions
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
            <span>✓ Qualiopi</span>
            <span>✓ Conforme NF C 18-510</span>
            <span>✓ E-learning + présentiel</span>
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
              <p className="mt-2 text-3xl font-bold text-slate-900">790 € HT</p>
              <p className="mt-1 text-sm text-slate-600">E-learning + 2 jours encadrés</p>
            </div>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-600">Intra-entreprise</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">Dès 2 400 € HT</p>
              <p className="mt-1 text-sm text-slate-600">Groupe — tarif selon effectif</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Durée</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">2–3 jours</p>
              <p className="mt-1 text-sm text-slate-600">Selon les symboles visés</p>
            </div>
          </div>
        </div>
      </section>

      {/* Symboles */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Les 4 symboles couverts</h2>
          <p className="mt-4 text-lg text-slate-600">
            Chaque symbole correspond à un rôle précis sur les installations électriques basse tension.
            La formation peut couvrir un ou plusieurs symboles selon le poste occupé.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {symboles.map((s) => (
              <div key={s.code} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-16 shrink-0 items-center justify-center rounded-xl bg-red-600 text-sm font-bold text-white">
                    {s.code}
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900">{s.titre}</h3>
                    <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
                    <p className="mt-2 text-xs font-semibold text-red-600 uppercase tracking-wide">{s.public}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Programme de la formation B1 / B2 / BR / BC</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {programme.map((p, i) => (
              <div key={p.titre} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
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
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Questions fréquentes — B1 / B2 / BR / BC</h2>
          <div className="mt-8 space-y-4">
            {faqItems.map((item) => (
              <details key={item.question} className="group rounded-2xl border border-slate-200 bg-white p-5 open:shadow-sm">
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
          <h2 className="text-3xl font-bold">Obtenir l&apos;habilitation B1 / B2 / BR / BC</h2>
          <p className="mt-4 text-lg text-slate-300">
            Formation encadrée avec e-learning inclus. Devis intra sous 48h. Qualiopi.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/demande-devis?type=b1-b2-br-bc" className="rounded-xl bg-red-600 px-8 py-4 font-semibold hover:bg-red-700 transition-colors">
              Demander un devis
            </Link>
            <Link href="/planning" className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold hover:bg-white/20 transition-colors">
              Sessions disponibles
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
