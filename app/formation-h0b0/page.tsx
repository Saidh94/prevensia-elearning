import Link from "next/link";
import CourseJsonLd from "@/components/seo/CourseJsonLd";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata = {
  title: "Formation Habilitation Électrique H0B0 / H0V — E-learning",
  description:
    "Formation habilitation électrique H0B0 et H0V conforme NF C 18-510 + A1:2020 + A2:2023. Parcours e-learning de sensibilisation au risque électrique pour non-électriciens. Entretien de validation 30 min inclus. Dès 150 € HT.",
  alternates: {
    canonical: "https://prevensia-formation.fr/formation-h0b0",
  },
  keywords: [
    "formation H0B0",
    "habilitation H0B0",
    "formation H0V",
    "H0B0 e-learning",
    "habilitation électrique non électricien",
    "NF C 18-510 H0B0",
    "formation habilitation électrique e-learning",
  ],
  openGraph: {
    title: "Formation H0B0 / H0V — Habilitation électrique non-électricien",
    description:
      "Parcours e-learning H0B0/H0V conforme NF C 18-510 + A1:2020 + A2:2023. Pour caristes, agents de nettoyage, peintres, techniciens. Dès 190 € HT.",
    url: "https://prevensia-formation.fr/formation-h0b0",
  },
};

const faqItems = [
  {
    question: "Qu'est-ce que l'habilitation électrique H0B0 ?",
    answer:
      "L'habilitation H0B0 est reconnue par l'employeur pour les salariés réalisant des opérations d'ordre non électrique dans un environnement présentant un risque électrique. B0 concerne la basse tension et H0 la haute tension. Elle est encadrée par la norme NF C 18-510 et le Code du travail.",
  },
  {
    question: "À qui s'adresse la formation H0B0 ?",
    answer:
      "La formation H0B0 s'adresse aux salariés non-électriciens amenés à intervenir à proximité d'installations électriques : caristes, agents de nettoyage, peintres, maçons, agents logistiques, techniciens de maintenance mécanique, personnel de production.",
  },
  {
    question: "La formation H0B0 en e-learning est-elle suffisante ?",
    answer:
      "Le parcours e-learning constitue la préparation théorique conforme à la NF C 18-510 + A1:2020 + A2:2023. À l'issue de l'entretien de validation, PREVENSIA FORMATION délivre une attestation de réussite et un avis après formation transmis à l'employeur. Le titre d'habilitation est ensuite délivré exclusivement par l'employeur, conformément à l'article R.4544-9 du Code du travail.",
  },
  {
    question: "Quelle est la durée de validité de l'habilitation H0B0 ?",
    answer:
      "La norme NF C 18-510 recommande un recyclage tous les 3 ans. L'employeur reste responsable du maintien de la compétence et de la renouvellement de l'habilitation en fonction de l'évolution du poste.",
  },
  {
    question: "Quelle est la différence entre H0, B0 et H0V ?",
    answer:
      "B0 désigne les opérations non électriques en environnement basse tension. H0 désigne les opérations non électriques en environnement haute tension. H0V ajoute la notion de voisinage : le salarié intervient à proximité de pièces nues sous haute tension, ce qui impose une vigilance renforcée et des distances strictes.",
  },
  {
    question: "Quel est le prix de la formation H0B0 ?",
    answer:
      "La formation H0B0 e-learning encadrée est proposée à partir de 190 € HT en inter-entreprise. Pour les formations intra-entreprise (groupe), les tarifs débutent à 890 € HT selon le nombre de participants. Un devis sur mesure est disponible pour les projets entreprise.",
  },
];

const metiers = [
  "Cariste et agent logistique",
  "Agent de nettoyage industriel",
  "Peintre en bâtiment",
  "Maçon, plaquiste, façadier",
  "Technicien de maintenance mécanique",
  "Agent de production en milieu électrique",
  "Personnel de chantier BTP",
  "Jardinier et paysagiste",
];

const programme = [
  {
    titre: "Cadre réglementaire et logique de l'habilitation",
    contenu: "NF C 18-510, Code du travail, rôle de l'employeur, différence entre formation et habilitation.",
  },
  {
    titre: "Lecture des symboles : B0, H0, H0V",
    contenu: "Signification de chaque lettre et chiffre, périmètre autorisé, ce que le symbole n'autorise pas.",
  },
  {
    titre: "Domaines de tension et niveaux de danger",
    contenu: "Très basse tension, basse tension, haute tension. Spécificités en courant continu.",
  },
  {
    titre: "Zones d'environnement et distances de sécurité",
    contenu: "DLI, DLVS, DLVR. Voisinage simple et renforcé. Balisage et signalisation.",
  },
  {
    titre: "Risques de contact direct et indirect",
    contenu: "Mécanismes d'électrisation, défaut d'isolement, masses sous tension.",
  },
  {
    titre: "Effets du courant sur le corps humain",
    contenu: "Intensité, durée, trajet. Seuil de non-lâcher, fibrillation. Facteurs aggravants.",
  },
  {
    titre: "Comportements autorisés et interdits",
    contenu: "Ce que peut et ne peut pas faire un titulaire H0B0. Réflexes face à une anomalie.",
  },
  {
    titre: "Conduite à tenir en cas d'accident électrique",
    contenu: "Protéger, alerter, secourir. Ne jamais toucher une victime sous tension.",
  },
];

export default function FormationH0B0Page() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <CourseJsonLd
        name="Formation Habilitation Électrique H0B0 / H0V"
        description="Formation habilitation électrique H0B0 et H0V conforme NF C 18-510 + A1:2020 + A2:2023. Parcours e-learning de sensibilisation au risque électrique pour non-électriciens. Entretien de validation inclus."
        courseCode="H0B0"
        url="/formation-h0b0"
        timeRequired="PT7H"
        educationalLevel="Beginner"
        audience="Salariés non-électriciens, caristes, agents de nettoyage, maintenance mécanique"
        educationalCredentialAwarded="Attestation de formation Prevensia (base pour délivrance habilitation par l'employeur)"
      />
      <FaqJsonLd items={faqItems} />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Habilitation électrique", url: "/formation-habilitation-electrique" },
          { name: "Formation H0B0 / H0V", url: "/formation-h0b0" },
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
            <span className="text-white">Formation H0B0 / H0V</span>
          </nav>

          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-red-100">
            Habilitation électrique · NF C 18-510 + A1:2020 + A2:2023
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Formation habilitation électrique<br className="hidden lg:block" />{" "}
            <span className="text-red-400">H0B0 / H0V</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Le symbole H0B0 permet à un salarié non-électricien d'évoluer en sécurité dans un
            environnement comportant un risque électrique. La formation PREVENSIA prépare à
            la partie théorique conforme à la norme NF C 18-510, avec entretien de validation inclus.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/inscription"
              className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 transition-colors"
            >
              S&apos;inscrire — dès 190 € HT
            </Link>
            <Link
              href="/demande-devis?type=h0b0"
              className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Devis intra-entreprise
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
            <span>✓ Qualiopi</span>
            <span>✓ Conforme NF C 18-510</span>
            <span>✓ Accès e-learning immédiat</span>
            <span>✓ Attestation incluse</span>
            <span>✓ Intra-entreprise disponible</span>
          </div>
        </div>
      </section>

      {/* Tarifs rapides */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Inter-entreprise</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">190 € HT</p>
              <p className="mt-1 text-sm text-slate-600">Parcours H0B0 / H0V e-learning + entretien formateur</p>
            </div>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-600">Intra-entreprise</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">Dès 890 € HT</p>
              <p className="mt-1 text-sm text-slate-600">Groupe — tarif selon effectif et site</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Durée</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">7 h</p>
              <p className="mt-1 text-sm text-slate-600">E-learning + entretien avec un formateur</p>
            </div>
          </div>
        </div>
      </section>

      {/* À qui s'adresse cette formation */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">
            À qui s&apos;adresse la formation H0B0 ?
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Tout salarié amené à circuler, nettoyer, peindre, manutentionner ou intervenir en maintenance
            non électrique à proximité d&apos;installations électriques est concerné par l&apos;habilitation H0B0.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {metiers.map((m) => (
              <div key={m} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <span className="text-red-600 font-bold">✓</span>
                <span className="text-sm font-medium text-slate-700">{m}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Programme de la formation H0B0</h2>
          <p className="mt-4 text-lg text-slate-600">
            8 modules conformes à la NF C 18-510, accessibles en e-learning à votre rythme.
          </p>

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

      {/* Ce que vous obtenez */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Ce que comprend la formation</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { titre: "Accès e-learning complet", texte: "19 chapitres structurés, quiz de validation, support PDF téléchargeable. Accès immédiat à l'inscription." },
              { titre: "Entretien avec un formateur", texte: "À la fin du parcours e-learning, un entretien individuel avec un formateur Prevensia valide vos acquis et prépare la délivrance de l'habilitation par l'employeur." },
              { titre: "Attestation de formation", texte: "Document Qualiopi remis à l'apprenant et à l'employeur, base pour la délivrance du titre d'habilitation." },
            ].map((c) => (
              <div key={c.titre} className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-900">{c.titre}</h3>
                <p className="mt-2 text-sm text-slate-600">{c.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Questions fréquentes — Formation H0B0
          </h2>
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

      {/* CTA final */}
      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Prêt à obtenir votre habilitation H0B0 ?</h2>
          <p className="mt-4 text-lg text-slate-300">
            Accès e-learning immédiat. Entretien avec un formateur à la fin du parcours. Attestation Qualiopi.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/inscription"
              className="rounded-xl bg-red-600 px-8 py-4 font-semibold hover:bg-red-700 transition-colors"
            >
              S&apos;inscrire maintenant — 190 € HT
            </Link>
            <Link
              href="/demande-devis?type=h0b0"
              className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold hover:bg-white/20 transition-colors"
            >
              Devis entreprise
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-400">
            Questions ? <a href="tel:+33189629492" className="text-white underline">01 89 62 94 92</a>{" "}
            · <a href="mailto:contact@prevensia-formation.fr" className="text-white underline">contact@prevensia-formation.fr</a>
          </p>
        </div>
      </section>
    </main>
  );
}
