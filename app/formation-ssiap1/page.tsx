import Link from "next/link";
import CourseJsonLd from "@/components/seo/CourseJsonLd";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata = {
  title: "Préparation théorique SSIAP1 — Bases sécurité incendie ERP",
  description:
    "Module de préparation théorique aux bases SSIAP1 : classes de feux, extincteurs, SSI, évacuation ERP. Inclus dans nos formations sécurité incendie. Ne remplace pas un organisme agréé SSIAP.",
  alternates: {
    canonical: "https://prevensia-formation.fr/formation-ssiap1",
  },
  keywords: [
    "préparation théorique SSIAP1",
    "bases sécurité incendie ERP",
    "sensibilisation SSIAP1",
    "formation sécurité incendie ERP",
    "classes de feux extincteurs",
    "SSI évacuation ERP",
  ],
  openGraph: {
    title: "Préparation théorique SSIAP1",
    description:
      "Module de sensibilisation aux bases SSIAP1 inclus dans nos formations sécurité incendie. Ne remplace pas un organisme agréé.",
    url: "https://prevensia-formation.fr/formation-ssiap1",
  },
};

const faqItems = [
  {
    question: "Ce module remplace-t-il une formation SSIAP1 réglementaire ?",
    answer:
      "Non. Ce module de préparation théorique ne constitue pas une formation SSIAP réglementaire et ne permet pas d'obtenir ou de renouveler la qualification SSIAP1. La qualification SSIAP1 est délivrée après examen devant un jury habilité par la préfecture, auprès d'un organisme agréé — ce n'est pas PREVENSIA FORMATION. Notre module couvre les bases théoriques (classes de feux, extincteurs, SSI, évacuation ERP) en complément de la formation réglementaire.",
  },
  {
    question: "Où obtenir la qualification SSIAP1 réglementaire ?",
    answer:
      "La qualification SSIAP1 est délivrée après réussite à un examen devant jury habilité par la préfecture, organisé par un organisme agréé. Pour trouver un organisme agréé SSIAP dans votre département, rapprochez-vous de la préfecture ou du CNPP. PREVENSIA FORMATION n'organise pas cet examen.",
  },
  {
    question: "À qui s'adresse ce module de préparation ?",
    answer:
      "Ce module est inclus dans nos formations sécurité incendie pour le personnel d'ERP souhaitant acquérir les bases théoriques SSIAP1 : classes de feux, extincteurs, SSI, procédures d'évacuation. Il s'adresse aux agents de sécurité, personnel d'accueil, responsables d'établissement souhaitant comprendre les enjeux SSIAP1 avant d'engager une démarche de qualification auprès d'un organisme agréé.",
  },
  {
    question: "Quelle est la réglementation applicable aux ERP en matière de SSIAP ?",
    answer:
      "Les ERP sont soumis à l'arrêté du 25 juin 1980 modifié (règlement de sécurité incendie ERP) et à l'arrêté du 2 mai 2005 modifié (organisation et missions du SSIAP). La présence d'agents SSIAP1 qualifiés est obligatoire dans les ERP de 1re à 4e catégorie selon leur type. Les agents doivent être titulaires de la qualification SSIAP1, délivrée après examen devant jury habilité par la préfecture auprès d'un organisme agréé.",
  },
  {
    question: "Comment nous contacter pour nos formations sécurité incendie ?",
    answer:
      "Contactez-nous via notre formulaire de demande de devis ou par téléphone. Nous proposons des formations sécurité incendie adaptées aux ERP : sensibilisation, manipulation d'extincteurs, procédures d'évacuation, SSI. Devis sous 48h.",
  },
];

const programme = [
  {
    titre: "Introduction à la sécurité incendie ERP",
    contenu: "Définition de l'ERP, cadre réglementaire SSIAP, rôle de l'agent de sécurité incendie. Statistiques incendies en France.",
  },
  {
    titre: "Réglementation ERP et IGH",
    contenu: "Arrêté du 25 juin 1980, types ERP (M, N, O, R, U…), catégories 1re à 5e, seuils de capacité, obligations SSIAP selon ERP.",
  },
  {
    titre: "Mécanisme du feu — le tétraèdre",
    contenu: "Les 4 conditions simultanées : combustible, comburant (O₂), énergie d'activation, réaction en chaîne. 4 méthodes d'extinction.",
  },
  {
    titre: "Les classes de feux A / B / C / D / F",
    contenu: "Classe A (solides), B (liquides), C (gaz), D (métaux), F (graisses alimentaires). Agents extincteurs adaptés à chaque classe.",
  },
  {
    titre: "Extincteurs et Robinets Incendie Armés (RIA)",
    contenu: "Types d'extincteurs (eau, poudre, CO₂, mousse), domaines d'emploi, méthode DAPS, distance d'attaque, RIA 19 mm et 25 mm.",
  },
  {
    titre: "Le Système de Sécurité Incendie (SSI)",
    contenu: "Composantes du SSI : SDI, SMSI, DAI, DM, CMSI, DAS, EAS. Catégories A à E, tableau de signalisation, déclenchement alarme.",
  },
  {
    titre: "Procédures d'évacuation",
    contenu: "Signal d'alarme, phases d'évacuation, rôles guide-file et serre-file, point de rassemblement, PMR, exercices obligatoires.",
  },
  {
    titre: "Rôle et missions d'un agent de sécurité incendie en ERP",
    contenu: "Rondes de surveillance, levée de doute, intervention de première main, consignes du poste de sécurité, transmission aux secours.",
  },
  {
    titre: "Conduite à tenir en cas d'incendie",
    contenu: "Donner l'alarme, attaquer le feu si possible, diriger l'évacuation, accueillir les secours. Gestes interdits (ascenseur, porte ouverte).",
  },
  {
    titre: "Synthèse — 10 réflexes sécurité incendie",
    contenu: "Mémo opérationnel : reconnaissance feu, alarme, extinction, évacuation, accueil secours, rapport d'incident.",
  },
];

export default function FormationSsiap1Page() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <CourseJsonLd
        name="Préparation théorique SSIAP1 — Bases sécurité incendie ERP"
        description="Module de préparation théorique aux bases SSIAP1 inclus dans les formations sécurité incendie PREVENSIA. Ne constitue pas une formation SSIAP réglementaire."
        courseCode="SSIAP1-PREP"
        url="/formation-ssiap1"
        timeRequired="P1D"
        educationalLevel="Beginner"
        audience="Personnel d'ERP, agents de sécurité souhaitant acquérir les bases théoriques SSIAP1"
        educationalCredentialAwarded="Attestation de suivi du module de préparation théorique PREVENSIA FORMATION — ne confère pas la qualification SSIAP1"
      />
      <FaqJsonLd items={faqItems} />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Nos formations", url: "/" },
          { name: "Préparation théorique SSIAP1", url: "/formation-ssiap1" },
        ]}
      />

      {/* Hero */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <nav aria-label="Fil d'Ariane" className="mb-6 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">›</span>
            <Link href="/" className="hover:text-white">Nos formations</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Préparation théorique SSIAP1</span>
          </nav>

          <p className="inline-flex rounded-full border border-slate-400/30 bg-slate-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-300">
            Module de sensibilisation · Inclus dans nos formations sécurité incendie
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Préparation théorique<br className="hidden lg:block" />{" "}
            <span className="text-red-400">aux bases SSIAP1</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Ce module couvre les bases théoriques attendues pour comprendre les enjeux SSIAP1 en ERP :
            classes de feux, extincteurs, SSI, procédures d&apos;évacuation. Il est inclus dans nos
            formations sécurité incendie pour le personnel d&apos;ERP.
          </p>

          {/* Disclaimer bien visible */}
          <div className="mt-8 rounded-xl border border-amber-400/40 bg-amber-400/10 p-4 max-w-3xl">
            <p className="text-sm text-amber-200 leading-6">
              <strong className="text-amber-300">Important :</strong> Ce module ne constitue pas une
              formation SSIAP réglementaire et ne permet pas d&apos;obtenir ou de renouveler la
              qualification SSIAP1. La qualification SSIAP1 est délivrée par un organisme agréé
              après examen devant jury habilité par la préfecture — pas par PREVENSIA FORMATION.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/formation-securite-incendie"
              className="rounded-xl bg-red-500 px-6 py-3 font-semibold text-white hover:bg-red-400 transition-colors"
            >
              Voir nos formations sécurité incendie →
            </Link>
            <Link
              href="/demande-devis"
              className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Demander un devis
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
            <span>✓ Démarche Qualiopi engagée</span>
            <span>✓ Bases théoriques SSIAP1</span>
            <span>✓ E-learning inclus dans nos formations</span>
            <span>✓ Max 12 stagiaires · Suivi individuel</span>
            <span>✓ Devis sous 48h</span>
          </div>
        </div>
      </section>

      {/* Avertissement réglementaire */}
      <section className="bg-amber-50 border-y border-amber-200 py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-slate-900 mb-3">
            Ce module n&apos;est pas une formation SSIAP réglementaire
          </h2>
          <p className="text-sm text-slate-700 leading-7">
            La qualification SSIAP1 est obligatoire pour exercer les fonctions d&apos;agent de sécurité
            incendie en ERP (arrêté du 2 mai 2005 modifié). Elle est délivrée après examen devant un
            jury habilité par la préfecture, auprès d&apos;un <strong>organisme agréé</strong> — ce n&apos;est
            pas PREVENSIA FORMATION. Ce module de préparation théorique couvre les connaissances de base
            du programme SSIAP1 mais <strong>ne remplace pas</strong> une formation SSIAP dispensée
            par un organisme agréé et <strong>ne permet pas à lui seul</strong> d&apos;obtenir ou
            renouveler la qualification SSIAP1.
          </p>
          <p className="mt-3 text-sm text-slate-600">
            Pour une formation SSIAP réglementaire, rapprochez-vous d&apos;un organisme agréé par la
            préfecture de votre département (CNPP, organismes habilités locaux).
          </p>
        </div>
      </section>

      {/* Pourquoi se former */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Pourquoi sensibiliser votre personnel aux bases SSIAP1 ?
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Même hors obligation réglementaire SSIAP, tout le personnel d&apos;un ERP gagne à comprendre
            les fondamentaux de la sécurité incendie : réagir vite et bien en cas de départ de feu
            peut sauver des vies.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                titre: "Obligation réglementaire SSIAP",
                texte: "L'arrêté du 2 mai 2005 impose des agents SSIAP1 qualifiés dans les ERP de 1re à 4e catégorie. Ce module prépare à comprendre ces enjeux avant d'engager une démarche de qualification auprès d'un organisme agréé.",
                couleur: "border-red-200 bg-red-50",
                icon: "⚖️",
              },
              {
                titre: "Enjeu vital",
                texte: "Un incendie en ERP peut tuer en quelques minutes. Comprendre les classes de feux, le bon extincteur à utiliser et les procédures d'évacuation permet à tout membre du personnel d'agir efficacement.",
                couleur: "border-orange-200 bg-orange-50",
                icon: "🔥",
              },
              {
                titre: "Tous les ERP concernés",
                texte: "Hôtels, grandes surfaces, établissements scolaires, hôpitaux, cinémas, musées, parkings couverts : tous les ERP ont intérêt à former leur personnel aux bases de la sécurité incendie.",
                couleur: "border-slate-200 bg-slate-50",
                icon: "🏢",
              },
            ].map((c) => (
              <div key={c.titre} className={`rounded-2xl border p-6 ${c.couleur}`}>
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="font-bold text-slate-900">{c.titre}</h3>
                <p className="mt-2 text-sm text-slate-600">{c.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Contenu du module de préparation théorique</h2>
          <p className="mt-4 text-lg text-slate-600">
            10 modules théoriques structurés (e-learning inclus dans nos formations), couvrant les bases
            du programme SSIAP1 défini par l&apos;arrêté du 2 mai 2005 modifié.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {programme.map((p, i) => (
              <div key={p.titre} className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">
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

      {/* Ce que comprend la formation */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Ce que comprend le module</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                titre: "Module e-learning inclus",
                texte: "10 chapitres théoriques avec schémas pédagogiques SVG animés (tétraèdre du feu, classes de feux, extincteurs, SSI, évacuation). Accès individuel activé à l'inscription, accessible depuis PC, tablette ou mobile.",
              },
              {
                titre: "Formation encadrée par formateur sécurité incendie",
                texte: "Journées en présentiel : apports théoriques complémentaires, exercices pratiques sur extincteurs, mises en situation professionnelles. Formation conduite par un formateur expérimenté.",
              },
              {
                titre: "Attestation de suivi + rapport employeur",
                texte: "Attestation de suivi du module délivrée à l'issue. Pour les employeurs, un rapport de formation est transmis automatiquement. Cette attestation ne confère pas la qualification SSIAP1.",
              },
            ].map((c) => (
              <div key={c.titre} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-slate-900">{c.titre}</h3>
                <p className="mt-2 text-sm text-slate-600">{c.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zoom réglementaire */}
      <section className="bg-red-50 border-y border-red-200 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Cadre réglementaire SSIAP / ERP
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-white border border-red-200 p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-red-600 mb-2">Arrêté du 2 mai 2005 modifié — SSIAP</p>
              <p className="text-sm text-slate-700">
                Définit les missions, qualifications et conditions d&apos;emploi des agents SSIAP.
                SSIAP1 (agent de service), SSIAP2 (chef d&apos;équipe), SSIAP3 (chef de service).
                La qualification SSIAP1 est obtenue après réussite à l&apos;examen devant jury habilité
                par la préfecture, auprès d&apos;un organisme agréé.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-red-200 p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-red-600 mb-2">Arrêté du 25 juin 1980 modifié</p>
              <p className="text-sm text-slate-700">
                Règlement de sécurité contre l&apos;incendie dans les ERP. Définit les obligations
                selon le <strong>type</strong> (M, N, O, R, U, W…) et la <strong>catégorie</strong> (1re à 5e)
                de l&apos;établissement, ainsi que la composition et les effectifs SSIAP requis.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-red-200 p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-red-600 mb-2">Code du travail</p>
              <p className="text-sm text-slate-700">
                Art. R4227-28 à R4227-41 : obligations de l&apos;employeur en matière de protection
                incendie. Exercices d&apos;évacuation obligatoires (minimum 2 par an). L&apos;employeur
                est responsable du maintien des qualifications SSIAP de ses agents.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-red-200 p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-red-600 mb-2">Normes SSI — NF S 61-931 à 938</p>
              <p className="text-sm text-slate-700">
                Normes encadrant la conception, l&apos;installation et l&apos;exploitation des Systèmes
                de Sécurité Incendie. Catégories A à E selon le niveau de protection. Obligatoires
                pour les ERP et IGH soumis à la réglementation SSIAP.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectifs pédagogiques */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Objectifs pédagogiques du module</h2>
          <p className="mt-4 text-lg text-slate-600">
            À l&apos;issue de ce module de préparation théorique, le stagiaire sera capable de :
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Expliquer le mécanisme du feu (tétraèdre) et les 4 méthodes d'extinction",
              "Identifier les 5 classes de feux et choisir l'agent extincteur adapté",
              "Mettre en œuvre un extincteur portatif et un RIA selon la méthode DAPS",
              "Décrire les composantes d'un SSI et leur rôle dans la détection et l'alarme",
              "Appliquer les procédures d'évacuation ERP : alarme, guide-file, serre-file, PMR",
              "Comprendre les missions réglementaires de l'agent SSIAP1 en ERP",
            ].map((obj) => (
              <div key={obj} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500 text-xs text-white font-bold">✓</span>
                <span className="text-sm text-slate-700">{obj}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Questions fréquentes
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

      {/* Bonus e-learning */}
      <section className="bg-green-50 border-y border-green-200 py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-700 mb-2">
                🎁 Module e-learning inclus dans nos formations
              </p>
              <h2 className="text-xl font-bold text-green-900">
                E-learning sécurité incendie : préparation théorique complète
              </h2>
              <p className="mt-3 text-green-800 leading-7">
                Chaque stagiaire inscrit à une formation sécurité incendie PREVENSIA accède
                au module e-learning de préparation théorique. Classes de feux, extincteurs,
                SSI, évacuation ERP, cadre réglementaire : tout le socle théorique est couvert
                avant même d&apos;arriver en salle.
              </p>
            </div>
            <Link
              href="/elearning"
              className="shrink-0 rounded-xl border border-green-400 bg-white px-5 py-3 text-sm font-semibold text-green-700 hover:bg-green-50 transition-colors"
            >
              Voir le module e-learning →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Former votre personnel à la sécurité incendie ?</h2>
          <p className="mt-4 text-lg text-slate-300">
            Sensibilisation, manipulation d&apos;extincteurs, évacuation ERP · E-learning inclus · Devis sous 48h
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/formation-securite-incendie"
              className="rounded-xl bg-red-500 px-8 py-4 font-semibold text-white hover:bg-red-400 transition-colors"
            >
              Nos formations sécurité incendie
            </Link>
            <Link
              href="/demande-devis"
              className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Demander un devis
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-400">
            Questions ?{" "}
            <a href="tel:+33189629492" className="text-white underline">01 89 62 94 92</a>
            {" · "}
            <a href="mailto:contact@prevensia-formation.fr" className="text-white underline">contact@prevensia-formation.fr</a>
          </p>
        </div>
      </section>
    </main>
  );
}
