import Link from "next/link";
import CourseJsonLd from "@/components/seo/CourseJsonLd";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata = {
  title: "Formation SSIAP1 — Sécurité Incendie ERP E-learning | PREVENSIA FORMATION",
  description:
    "Sensibilisation SSIAP1 en ligne : rôle agent de sécurité incendie ERP, tétraèdre du feu, classes d'extincteurs, SSI, procédures évacuation. Parcours e-learning 3h — Attestation incluse. 119 € HT.",
  alternates: {
    canonical: "https://prevensia-formation.fr/formation-ssiap1",
  },
  keywords: [
    "formation SSIAP1",
    "sensibilisation SSIAP1",
    "formation sécurité incendie ERP",
    "agent de sécurité incendie",
    "formation incendie e-learning",
    "classes de feux",
    "extincteurs formation",
    "évacuation incendie ERP",
    "SSI formation",
    "SSIAP e-learning",
  ],
  openGraph: {
    title: "Formation SSIAP1 — Sécurité Incendie ERP E-learning",
    description:
      "Parcours e-learning SSIAP1 3h. Tétraèdre du feu, classes A/B/C/D/F, extincteurs, SSI, procédures évacuation ERP. 119 € HT — attestation incluse.",
    url: "https://prevensia-formation.fr/formation-ssiap1",
  },
};

const faqItems = [
  {
    question: "Qu'est-ce que la formation SSIAP1 e-learning ?",
    answer:
      "La sensibilisation SSIAP1 en e-learning couvre les fondamentaux de la sécurité incendie en établissement recevant du public (ERP) : mécanisme du feu, classes d'incendie, moyens d'extinction, système de sécurité incendie (SSI), procédures d'évacuation et rôle de l'agent de service de sécurité incendie. Cette sensibilisation théorique complète les formations pratiques SSIAP1 encadrées.",
  },
  {
    question: "À qui s'adresse cette formation SSIAP1 ?",
    answer:
      "Cette formation s'adresse à tout personnel exerçant ou souhaitant exercer des fonctions de sécurité incendie en ERP : agents de sécurité incendie, personnels d'accueil, responsables sécurité, directeurs d'établissement, gardiens d'immeuble, employés d'hôtel, de grande surface, d'établissement scolaire, culturel ou hospitalier.",
  },
  {
    question: "La formation e-learning remplace-t-elle la formation SSIAP1 officielle ?",
    answer:
      "Non. La certification SSIAP1 officielle exige une formation de 67 heures minimum (environ 10 à 12 jours ouvrés, 12 stagiaires maximum par session), dispensée par un organisme agréé CNPP. Elle comprend des apports théoriques, des exercices pratiques (désenfumage, gestes professionnels, mises en situation) et un examen final : QCM écrit, épreuve pratique d'identification d'anomalies et oral devant jury. Notre parcours e-learning constitue une sensibilisation théorique complémentaire, idéale pour les personnels ERP non spécialisés ou comme préparation à la partie théorique de la formation certifiante.",
  },
  {
    question: "Quelle est la réglementation applicable aux ERP en matière d'incendie ?",
    answer:
      "Les ERP sont soumis à l'arrêté du 25 juin 1980 (règlement de sécurité ERP) et à ses modifications. La présence d'un service de sécurité incendie et d'assistance aux personnes (SSIAP) est imposée selon le type et la catégorie de l'ERP. Les agents SSIAP1 doivent posséder le titre de qualification obtenu par examen auprès d'un organisme agréé.",
  },
  {
    question: "Qu'est-ce qu'un SSI (Système de Sécurité Incendie) ?",
    answer:
      "Un SSI est l'ensemble des équipements permettant de détecter un incendie, de centraliser l'information et de déclencher les actions de mise en sécurité. Il comprend le Système de Détection Incendie (SDI) et le Système de Mise en Sécurité Incendie (SMSI), avec notamment les Déclencheurs Manuels (DM), Détecteurs Automatiques d'Incendie (DAI), le CMSI et les Dispositifs Actionnés de Sécurité (DAS).",
  },
  {
    question: "Quel est le prix de la sensibilisation SSIAP1 e-learning ?",
    answer:
      "La sensibilisation SSIAP1 e-learning est proposée à 119 € HT par personne. Le prix inclut l'accès à l'intégralité des 10 modules, le quiz de validation et l'attestation de formation nominative. Pour les entreprises souhaitant former plusieurs agents simultanément, des tarifs de groupe sont disponibles sur devis.",
  },
];

const metiers = [
  "Agent de sécurité incendie (SSIAP1)",
  "Personnel d'accueil ERP (hôtel, grande surface)",
  "Responsable sécurité / HSE",
  "Directeur d'établissement scolaire ou culturel",
  "Gardien d'immeuble / Personnel de nuit",
  "Infirmier(e) / Personnel hospitalier",
  "Guide-file / Serre-file désigné",
  "Chef d'établissement ERP de 4e et 5e catégorie",
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
    contenu: "Classe A (solides), B (liquides/gaz), C (gaz), D (métaux), F (graisses alimentaires). Agents adaptés à chaque classe.",
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
    titre: "Rôle et missions de l'agent SSIAP1",
    contenu: "Rondes de surveillance, levée de doute, intervention de première main, consignes du poste de sécurité, transmission.",
  },
  {
    titre: "Conduite à tenir en cas d'incendie",
    contenu: "Donner l'alarme, attaquer le feu si possible, diriger l'évacuation, accueillir les secours. Gestes interdits (ascenseur, porte ouverte).",
  },
  {
    titre: "Synthèse — 10 réflexes SSIAP1",
    contenu: "Mémo opérationnel : reconnaissance feu, alarme, extinction, évacuation, accueil secours, rapport d'incident.",
  },
];

export default function FormationSsiap1Page() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <CourseJsonLd
        name="Sensibilisation SSIAP1 — Sécurité Incendie ERP"
        description="Formation e-learning SSIAP1 : tétraèdre du feu, classes d'incendie, extincteurs, SSI, évacuation ERP. Attestation incluse."
        courseCode="SSIAP1"
        url="/formation-ssiap1"
        timeRequired="PT3H"
        educationalLevel="Beginner"
        audience="Personnel ERP, agents de sécurité incendie, responsables sécurité, encadrants ERP"
        educationalCredentialAwarded="Attestation de sensibilisation SSIAP1 — PREVENSIA FORMATION"
      />
      <FaqJsonLd items={faqItems} />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "E-learning", url: "/elearning" },
          { name: "Formation SSIAP1", url: "/formation-ssiap1" },
        ]}
      />

      {/* Hero */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <nav aria-label="Fil d'Ariane" className="mb-6 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">›</span>
            <Link href="/elearning" className="hover:text-white">E-learning</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Formation SSIAP1</span>
          </nav>

          <p className="inline-flex rounded-full border border-red-400/30 bg-red-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-red-300">
            Sécurité incendie · ERP · Arrêté du 25 juin 1980
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Formation SSIAP1<br className="hidden lg:block" />{" "}
            <span className="text-red-400">Sécurité Incendie ERP</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Parcours e-learning de sensibilisation SSIAP1 : mécanisme du feu, classes d&apos;incendie,
            extincteurs, SSI, procédures d&apos;évacuation et rôle de l&apos;agent de sécurité. Conforme
            à la réglementation ERP (arrêté du 25 juin 1980).
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/demande-devis?type=ssiap1-initial"
              className="rounded-xl bg-red-500 px-6 py-3 font-semibold text-white hover:bg-red-400 transition-colors"
            >
              Demander la formation initiale SSIAP1
            </Link>
            <Link
              href="/demande-devis?type=ssiap1-recyclage"
              className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Recyclage SSIAP1 (14h / 3 ans)
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
            <span>✓ E-learning inclus dans la formation</span>
            <span>✓ Formation initiale 67h min</span>
            <span>✓ Recyclage 14h tous les 3 ans</span>
            <span>✓ Attestation + rapport employeur</span>
            <span>✓ Max 12 stagiaires par session</span>
          </div>
        </div>
      </section>

      {/* Tarifs rapides */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-700">Formation initiale</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">Sur devis</p>
              <p className="mt-1 text-sm text-slate-600">67h min · E-learning inclus · Attestation</p>
            </div>
            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-orange-700">Recyclage (3 ans)</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">Sur devis</p>
              <p className="mt-1 text-sm text-slate-600">14h · E-learning inclus · Remise à niveau</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">E-learning inclus</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">3 h</p>
              <p className="mt-1 text-sm text-slate-600">10 modules · Quiz · Accès stagiaires</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi se former */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Pourquoi se former à la sécurité incendie en ERP ?
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Un incendie en ERP peut tuer en quelques minutes. La réglementation impose des mesures strictes
            et des personnels formés. Connaître les procédures et les équipements peut faire la différence
            entre une évacuation réussie et un drame.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                titre: "Obligation réglementaire",
                texte: "L'arrêté du 25 juin 1980 impose à tout ERP de disposer de personnels formés à la sécurité incendie, adaptés au type et à la catégorie de l'établissement.",
                couleur: "border-red-200 bg-red-50",
                icon: "⚖️",
              },
              {
                titre: "Enjeu vital",
                texte: "En France, les incendies en ERP causent chaque année des dizaines de décès et des centaines de blessés. Une évacuation bien conduite par des agents formés sauve des vies.",
                couleur: "border-orange-200 bg-orange-50",
                icon: "🔥",
              },
              {
                titre: "Tous les ERP concernés",
                texte: "Hôtels, grandes surfaces, établissements scolaires, hôpitaux, salles de spectacle, restaurants, parkings : tous les ERP sont soumis à cette réglementation.",
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

      {/* À qui s'adresse */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">
            À qui s&apos;adresse la formation SSIAP1 ?
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Toute personne travaillant ou exerçant des responsabilités dans un établissement recevant
            du public est concernée par cette sensibilisation à la sécurité incendie.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {metiers.map((m) => (
              <div key={m} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3">
                <span className="text-red-500 font-bold">✓</span>
                <span className="text-sm font-medium text-slate-700">{m}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Programme de la sensibilisation SSIAP1</h2>
          <p className="mt-4 text-lg text-slate-600">
            10 modules structurés, conformes à la réglementation ERP, accessibles en e-learning à votre rythme.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {programme.map((p, i) => (
              <div key={p.titre} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
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

      {/* Modalités de formation */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Comment se déroule la formation ?</h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            La sensibilisation SSIAP1 est disponible en plusieurs formats selon votre contexte
            et vos contraintes. E-learning autonome, formation en salle chez PREVENSIA ou
            déplacement de formateur dans vos locaux : chaque modalité est adaptée à un besoin précis.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">

            {/* E-learning inclus */}
            <div className="rounded-2xl border-2 border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-400 text-white text-lg font-bold">✓</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Inclus dans chaque formation</p>
                  <p className="font-bold text-slate-900 text-lg">Accès e-learning pour chaque stagiaire</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-slate-600">
                <p>L&apos;accès aux 10 modules e-learning est <strong>systématiquement inclus</strong> pour chaque stagiaire inscrit à une formation SSIAP1 (initiale ou recyclage). Il sert de support théorique avant et pendant la formation encadrée.</p>
                <ul className="mt-3 space-y-1">
                  <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">›</span>Accès individuel activé à l&apos;inscription</li>
                  <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">›</span>10 modules + quiz de validation</li>
                  <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">›</span>Accessible 24h/24 depuis PC, tablette ou mobile</li>
                  <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">›</span>Non vendu séparément</li>
                </ul>
              </div>
              <div className="mt-4 rounded-xl bg-white border border-slate-200 px-4 py-3">
                <p className="text-sm text-slate-600">Pour accéder au e-learning, inscrivez-vous à une formation initiale ou un recyclage SSIAP1 chez PREVENSIA.</p>
              </div>
            </div>

            {/* Intra-entreprise présentiel */}
            <div className="rounded-2xl border-2 border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-white text-lg font-bold">2</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Intra-entreprise</p>
                  <p className="font-bold text-slate-900 text-lg">Formateur chez vous — dans vos locaux</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-slate-600">
                <p>Un formateur PREVENSIA se déplace dans votre établissement. La formation est entièrement adaptée à vos équipements réels (vos extincteurs, votre SSI, vos plans d&apos;évacuation, vos zones spécifiques).</p>
                <ul className="mt-3 space-y-1">
                  <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">›</span>Théorie + exercices pratiques sur vos extincteurs</li>
                  <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">›</span>Visite du poste de sécurité et du SSI en place</li>
                  <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">›</span>Simulation d&apos;évacuation adaptée au bâtiment</li>
                  <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">›</span>Accès e-learning inclus pour chaque stagiaire</li>
                  <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">›</span>Jusqu&apos;à 10-12 stagiaires par session</li>
                </ul>
              </div>
              <div className="mt-4 flex items-center justify-between rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">
                <div>
                  <p className="text-xs text-slate-500">Tarif groupe</p>
                  <p className="text-2xl font-bold text-slate-900">Sur devis</p>
                </div>
                <Link href="/demande-devis?type=ssiap1-intra" className="rounded-lg bg-slate-700 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-600 transition-colors">
                  Demander →
                </Link>
              </div>
            </div>

            {/* Inter-entreprise en salle */}
            <div className="rounded-2xl border-2 border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-white text-lg font-bold">3</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Inter-entreprise</p>
                  <p className="font-bold text-slate-900 text-lg">Formation en salle chez PREVENSIA</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-slate-600">
                <p>Participez à une session planifiée dans nos locaux, en groupe avec des stagiaires d&apos;autres entreprises. Idéal pour les établissements qui n&apos;ont pas de groupe constitué ou qui souhaitent une date rapide.</p>
                <ul className="mt-3 space-y-1">
                  <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">›</span>Journée complète en salle (théorie le matin)</li>
                  <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">›</span>Exercices pratiques extincteurs l&apos;après-midi</li>
                  <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">›</span>Accès e-learning préparatoire inclus</li>
                  <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">›</span>Calendrier de sessions sur le planning PREVENSIA</li>
                </ul>
              </div>
              <div className="mt-4 flex items-center justify-between rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">
                <div>
                  <p className="text-xs text-slate-500">Tarif par personne</p>
                  <p className="text-2xl font-bold text-slate-900">Sur devis</p>
                </div>
                <Link href="/planning" className="rounded-lg bg-slate-700 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-600 transition-colors">
                  Voir les dates →
                </Link>
              </div>
            </div>

            {/* Parcours hybride */}
            <div className="rounded-2xl border-2 border-orange-200 bg-orange-50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white text-lg font-bold">4</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-orange-700">Recommandé</p>
                  <p className="font-bold text-slate-900 text-lg">Parcours hybride — e-learning + pratique</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-slate-600">
                <p>La combinaison la plus efficace : les stagiaires suivent les 10 modules e-learning en autonomie (théorie), puis participent à une demi-journée pratique encadrée par un formateur PREVENSIA (manipulation d&apos;extincteurs, exercice d&apos;évacuation).</p>
                <ul className="mt-3 space-y-1">
                  <li className="flex items-start gap-2"><span className="text-orange-500 font-bold mt-0.5">›</span>E-learning à distance (théorie, ~3h)</li>
                  <li className="flex items-start gap-2"><span className="text-orange-500 font-bold mt-0.5">›</span>Demi-journée pratique encadrée (sur site ou en salle)</li>
                  <li className="flex items-start gap-2"><span className="text-orange-500 font-bold mt-0.5">›</span>Manipulation extincteurs sur feux réels simulés</li>
                  <li className="flex items-start gap-2"><span className="text-orange-500 font-bold mt-0.5">›</span>Attestation + rapport de formation employeur</li>
                  <li className="flex items-start gap-2"><span className="text-orange-500 font-bold mt-0.5">›</span>Idéal pour préparer la certification SSIAP1 officielle</li>
                </ul>
              </div>
              <div className="mt-4 flex items-center justify-between rounded-xl bg-white border border-orange-200 px-4 py-3">
                <div>
                  <p className="text-xs text-slate-500">Tarif selon effectif</p>
                  <p className="text-2xl font-bold text-slate-900">Sur devis</p>
                </div>
                <Link href="/demande-devis?type=ssiap1-hybride" className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-400 transition-colors">
                  Demander →
                </Link>
              </div>
            </div>

          </div>

          {/* Tableau comparatif */}
          <div className="mt-10 overflow-x-auto">
            <table className="w-full rounded-2xl border border-slate-200 text-sm bg-white overflow-hidden">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Modalité</th>
                  <th className="px-4 py-3 text-center font-semibold">Théorie</th>
                  <th className="px-4 py-3 text-center font-semibold">Pratique extincteurs</th>
                  <th className="px-4 py-3 text-center font-semibold">Adaptée au site</th>
                  <th className="px-4 py-3 text-center font-semibold">Attestation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">E-learning individuel</td>
                  <td className="px-4 py-3 text-center text-green-600 font-bold">✓</td>
                  <td className="px-4 py-3 text-center text-slate-400">—</td>
                  <td className="px-4 py-3 text-center text-slate-400">—</td>
                  <td className="px-4 py-3 text-center text-green-600 font-bold">✓</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-900">Intra-entreprise présentiel</td>
                  <td className="px-4 py-3 text-center text-green-600 font-bold">✓</td>
                  <td className="px-4 py-3 text-center text-green-600 font-bold">✓</td>
                  <td className="px-4 py-3 text-center text-green-600 font-bold">✓</td>
                  <td className="px-4 py-3 text-center text-green-600 font-bold">✓</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">Inter-entreprise en salle</td>
                  <td className="px-4 py-3 text-center text-green-600 font-bold">✓</td>
                  <td className="px-4 py-3 text-center text-green-600 font-bold">✓</td>
                  <td className="px-4 py-3 text-center text-slate-400">—</td>
                  <td className="px-4 py-3 text-center text-green-600 font-bold">✓</td>
                </tr>
                <tr className="bg-orange-50">
                  <td className="px-4 py-3 font-medium text-slate-900">Parcours hybride <span className="text-xs text-orange-600 font-semibold">(recommandé)</span></td>
                  <td className="px-4 py-3 text-center text-green-600 font-bold">✓</td>
                  <td className="px-4 py-3 text-center text-green-600 font-bold">✓</td>
                  <td className="px-4 py-3 text-center text-green-600 font-bold">✓</td>
                  <td className="px-4 py-3 text-center text-green-600 font-bold">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Ce que vous obtenez */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Ce que comprend la formation</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                titre: "Accès e-learning complet",
                texte: "10 chapitres structurés avec schémas pédagogiques SVG animés (tétraèdre du feu, classes de feux, extincteurs, évacuation). Accès immédiat à l'achat.",
              },
              {
                titre: "Quiz de validation",
                texte: "20 questions couvrant l'ensemble du programme SSIAP1. Un score minimum valide les acquis et déclenche la génération de l'attestation nominative.",
              },
              {
                titre: "Attestation de formation",
                texte: "Document nominatif téléchargeable, preuve de la sensibilisation théorique de l'agent. Utile pour le dossier de formation et les contrôles de l'autorité de sécurité.",
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
            Zoom sur le cadre réglementaire SSIAP / ERP
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-white border border-red-200 p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-red-600 mb-2">Arrêté du 25 juin 1980</p>
              <p className="text-sm text-slate-700">
                Règlement de sécurité contre l&apos;incendie dans les ERP. Définit les obligations
                selon le <strong>type</strong> (M, N, O, R, U, W…) et la <strong>catégorie</strong> (1re à 5e)
                de l&apos;établissement, ainsi que la composition du SSIAP requis.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-red-200 p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-red-600 mb-2">Arrêté du 2 mai 2005 — SSIAP</p>
              <p className="text-sm text-slate-700">
                Définit les missions, qualifications et conditions d&apos;emploi des agents SSIAP.
                SSIAP1 (agent), SSIAP2 (chef d&apos;équipe), SSIAP3 (chef de service).
                Qualification obtenue par examen auprès d&apos;un organisme agréé.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-red-200 p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-red-600 mb-2">Code du travail</p>
              <p className="text-sm text-slate-700">
                Art. R4227-28 à R4227-41 : obligations de l&apos;employeur en matière de protection
                incendie sur les lieux de travail. Exercices d&apos;évacuation obligatoires
                (au moins 2 par an dans les établissements à risque).
              </p>
            </div>
            <div className="rounded-xl bg-white border border-red-200 p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-red-600 mb-2">Normes SSI — NF S 61-931 à 938</p>
              <p className="text-sm text-slate-700">
                Normes NF S 61-931 à 61-938 encadrant la conception, l&apos;installation et
                l&apos;exploitation des Systèmes de Sécurité Incendie. Catégories A à E selon
                le niveau de protection attendu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectifs pédagogiques */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Objectifs pédagogiques</h2>
          <p className="mt-4 text-lg text-slate-600">
            À l&apos;issue de cette sensibilisation, le stagiaire sera capable de :
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Expliquer le mécanisme du feu (tétraèdre) et les méthodes d'extinction",
              "Identifier les 5 classes de feux et choisir l'agent extincteur adapté",
              "Mettre en œuvre un extincteur portatif selon la méthode DAPS",
              "Décrire les composantes d'un SSI et leur rôle dans la détection/alarme",
              "Appliquer la procédure d'évacuation ERP : alarme, guide-file, serre-file",
              "Citer les obligations réglementaires SSIAP selon le type et la catégorie ERP",
            ].map((obj) => (
              <div key={obj} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500 text-xs text-white font-bold">✓</span>
                <span className="text-sm text-slate-700">{obj}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification officielle & recyclage */}
      <section className="bg-red-50 border-y border-red-200 py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Formation certifiante SSIAP1 — ce que dit la réglementation
          </h2>
          <p className="mt-3 text-slate-600">
            Notre sensibilisation e-learning est distincte de la certification officielle SSIAP1.
            Voici les éléments clés à connaître pour bien orienter votre projet de formation.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-xl bg-white border border-red-200 p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-red-600 mb-3">Formation initiale SSIAP1</p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">›</span><span><strong>67 heures minimum</strong> (hors examen), soit environ 10 à 12 jours ouvrés</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">›</span><span>Certains centres proposent jusqu&apos;à <strong>80 heures</strong> pour approfondir les modules techniques</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">›</span><span>Maximum <strong>12 stagiaires</strong> par session</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">›</span><span>Théorie + exercices pratiques + mises en situation professionnelle</span></li>
              </ul>
            </div>

            <div className="rounded-xl bg-white border border-red-200 p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-red-600 mb-3">Examen de certification</p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">›</span><span><strong>Épreuve écrite</strong> : QCM sur les connaissances théoriques</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">›</span><span><strong>Épreuve pratique</strong> : contrôle et identification d&apos;anomalies sur équipements réels</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">›</span><span><strong>Oral devant jury</strong> : mise en situation professionnelle</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">›</span><span>Délivré par un organisme habilité (CNPP, IFRAE…)</span></li>
              </ul>
            </div>

            <div className="rounded-xl bg-white border border-orange-200 p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-3">Recyclage SSIAP1 — tous les 3 ans</p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold mt-0.5">›</span><span><strong>14 heures obligatoires</strong> de recyclage tous les 3 ans pour maintenir la qualification</span></li>
                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold mt-0.5">›</span><span>Remise à niveau sur les évolutions réglementaires et pratiques</span></li>
                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold mt-0.5">›</span><span>Sans recyclage : la qualification SSIAP1 est suspendue</span></li>
                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold mt-0.5">›</span><span>Le e-learning PREVENSIA peut préparer ce recyclage théorique</span></li>
              </ul>
            </div>

          </div>

          <div className="mt-6 rounded-xl bg-slate-900 text-white px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-bold">Notre e-learning prépare la théorie — nous organisons aussi la pratique</p>
              <p className="mt-1 text-sm text-slate-300">
                Pour les établissements qui souhaitent préparer leurs agents à la certification officielle SSIAP1,
                PREVENSIA propose un accompagnement complet : e-learning théorique + journée(s) pratiques encadrées.
              </p>
            </div>
            <a
              href="/demande-devis?type=ssiap1-certification"
              className="shrink-0 rounded-lg border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors whitespace-nowrap"
            >
              En savoir plus →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Questions fréquentes — Formation SSIAP1
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
          <h2 className="text-3xl font-bold">Former vos agents à la sécurité incendie ERP ?</h2>
          <p className="mt-4 text-lg text-slate-300">
            Formation initiale 67h · Recyclage 14h · E-learning inclus · Max 12 stagiaires · Attestation + rapport employeur
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/demande-devis?type=ssiap1-initial"
              className="rounded-xl bg-red-500 px-8 py-4 font-semibold text-white hover:bg-red-400 transition-colors"
            >
              Formation initiale SSIAP1 — Devis
            </Link>
            <Link
              href="/demande-devis?type=ssiap1-recyclage"
              className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Recyclage SSIAP1 — Devis
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
