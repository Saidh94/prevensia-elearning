import Link from "next/link";
import CourseJsonLd from "@/components/seo/CourseJsonLd";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata = {
  title: "Formation SSIAP1 Certifiante — Agent Sécurité Incendie ERP | PREVENSIA FORMATION",
  description:
    "Formation SSIAP1 certifiante (70h) par PREVENSIA FORMATION, certifié Qualiopi. Recyclage 14h / 3 ans. E-learning inclus. À partir de 1 090 € HT.",
  alternates: {
    canonical: "https://prevensia-formation.fr/formation-ssiap1",
  },
  keywords: [
    "formation SSIAP1 certifiante",
    "formation agent sécurité incendie ERP",
    "organisme formation SSIAP1 Qualiopi",
    "formation SSIAP1 70 heures",
    "recyclage SSIAP1 14h",
    "certification SSIAP1",
    "formation sécurité incendie ERP",
    "SSIAP1 agrément préfectoral",
    "agent de sécurité incendie formation",
  ],
  openGraph: {
    title: "Formation SSIAP1 Certifiante — Organisme Qualiopi | PREVENSIA",
    description:
      "Formation SSIAP1 complète et certifiante : 70h initiale + recyclage 14h. Certifié Qualiopi. E-learning inclus. À partir de 1 090 € HT. Devis 48h.",
    url: "https://prevensia-formation.fr/formation-ssiap1",
  },
};

const faqItems = [
  {
    question: "PREVENSIA FORMATION proposera-t-il la formation SSIAP1 certifiante ?",
    answer:
      "Oui. PREVENSIA FORMATION est en cours d'obtention de l'agrément préfectoral pour dispenser la formation SSIAP1, conformément à l'arrêté du 2 mai 2005 modifié. Nos sessions SSIAP1 démarreront dès l'agrément reçu. Contactez-nous pour être informé en priorité de l'ouverture des inscriptions.",
  },
  {
    question: "En quoi consiste la formation initiale SSIAP1 (70h) ?",
    answer:
      "La formation initiale SSIAP1 dure 70 heures (environ 10 à 12 jours ouvrés), pour 12 stagiaires maximum par session. Elle comprend : le module e-learning théorique (inclus pour chaque stagiaire), des apports théoriques en salle, des exercices pratiques (manipulation d'extincteurs, désenfumage, gestes professionnels, mises en situation ERP) et un examen final composé d'une épreuve écrite (QCM), d'une épreuve pratique d'identification d'anomalies et d'un oral devant jury. La qualification SSIAP1 est délivrée aux stagiaires ayant validé l'examen.",
  },
  {
    question: "Qu'est-ce que le recyclage SSIAP1 et pourquoi est-il obligatoire ?",
    answer:
      "Le recyclage SSIAP1 est une remise à niveau obligatoire de 14 heures, à réaliser tous les 3 ans pour maintenir la qualification SSIAP1 en cours de validité. Sans recyclage, la qualification est suspendue et l'agent ne peut plus légalement exercer les fonctions SSIAP1. Le recyclage comprend une actualisation réglementaire, des exercices pratiques et un module e-learning de révision (inclus). Il est proposé à partir de 390 € HT par personne.",
  },
  {
    question: "À qui s'adresse la formation SSIAP1 ?",
    answer:
      "La formation initiale SSIAP1 s'adresse à toute personne souhaitant exercer les fonctions d'agent de sécurité incendie en ERP : agents de sécurité, personnels reconvertis, gardiens d'immeuble souhaitant évoluer vers la sécurité incendie. Le recyclage s'adresse aux agents SSIAP1 déjà qualifiés dont la qualification arrive à échéance (tous les 3 ans).",
  },
  {
    question: "Quelle est la réglementation applicable aux ERP en matière de SSIAP ?",
    answer:
      "Les ERP sont soumis à l'arrêté du 25 juin 1980 modifié (règlement de sécurité incendie ERP) et à l'arrêté du 2 mai 2005 modifié (organisation et missions du SSIAP). La présence d'agents SSIAP1 qualifiés est obligatoire dans les ERP de 1re à 4e catégorie selon leur type et leur capacité d'accueil. Les agents doivent être titulaires de la qualification SSIAP1 obtenue auprès d'un organisme agréé.",
  },
  {
    question: "Quel est le tarif de la formation SSIAP1 ?",
    answer:
      "La formation initiale SSIAP1 (70h, hybride e-learning + présentiel, examen inclus) est proposée à partir de 1 090 € HT par personne. Le recyclage SSIAP1 (14h obligatoire tous les 3 ans, e-learning inclus) est disponible à partir de 390 € HT. Ces tarifs s'entendent pour des sessions inter-entreprise. Des tarifs intra-entreprise et groupe sont disponibles sur devis sous 48h.",
  },
];

const metiers = [
  "Agent de sécurité incendie souhaitant obtenir la qualification SSIAP1",
  "Personnel reconverti vers la sécurité incendie en ERP",
  "Gardien d'immeuble souhaitant évoluer vers le SSIAP1",
  "Agent SSIAP1 certifié devant effectuer son recyclage (3 ans)",
  "Responsable sécurité souhaitant comprendre les obligations SSIAP",
  "Directeur d'établissement ERP gérant une équipe SSIAP",
  "RH / responsable formation gérant les recyclages SSIAP1",
  "Personnel de sécurité en reconversion professionnelle",
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
    titre: "Rôle et missions de l'agent SSIAP1",
    contenu: "Rondes de surveillance, levée de doute, intervention de première main, consignes du poste de sécurité, transmission aux secours.",
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
        name="Formation SSIAP1 Certifiante — Agent de Sécurité Incendie ERP"
        description="Formation SSIAP1 complète et certifiante (70h) à dispenser par PREVENSIA FORMATION dès l'obtention de l'agrément préfectoral. Certifié Qualiopi. Recyclage 14h inclus. E-learning inclus pour chaque stagiaire."
        courseCode="SSIAP1"
        url="/formation-ssiap1"
        timeRequired="P10D"
        educationalLevel="Beginner"
        audience="Agents de sécurité incendie, personnel souhaitant exercer les fonctions SSIAP1 en ERP"
        educationalCredentialAwarded="Qualification SSIAP1 — Titre délivré après examen et jury officiel"
      />
      <FaqJsonLd items={faqItems} />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Nos formations", url: "/" },
          { name: "Formation SSIAP1", url: "/formation-ssiap1" },
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
            <span className="text-white">Formation SSIAP1</span>
          </nav>

          <p className="inline-flex rounded-full border border-red-400/30 bg-red-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-red-300">
            Certifié Qualiopi · Formation certifiante · Arrêté du 2 mai 2005
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Formation SSIAP1<br className="hidden lg:block" />{" "}
            <span className="text-red-400">Certifiante &amp; Complète</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Obtenez la qualification SSIAP1 reconnue par le Ministère de l&apos;Intérieur, exigée
            dans tous les ERP de catégorie 1 à 4. Formation complète en 70h : théorie, pratique sur
            matériel réel, examen devant jury. Module e-learning inclus pour chaque stagiaire.
            Recyclage obligatoire (14h / 3 ans) également disponible.
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
            <span>✓ Qualiopi · Agrément en cours</span>
            <span>✓ Premières sessions dès agrément obtenu</span>
            <span>✓ Formation certifiante 70h</span>
            <span>✓ Recyclage 14h / 3 ans</span>
            <span>✓ E-learning inclus</span>
            <span>✓ Max 12 stagiaires · Suivi individuel</span>
          </div>
        </div>
      </section>

      {/* Tarifs rapides */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-700">Formation initiale certifiante</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">À partir de <span className="text-red-600">1 090 € HT</span></p>
              <p className="mt-1 text-sm text-slate-600">70h · E-learning inclus · Examen + qualification</p>
            </div>
            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-orange-700">Recyclage obligatoire (tous les 3 ans)</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">À partir de <span className="text-orange-600">390 € HT</span></p>
              <p className="mt-1 text-sm text-slate-600">14h · E-learning inclus · Remise à niveau</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Module e-learning inclus</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">3 h</p>
              <p className="mt-1 text-sm text-slate-600">10 modules · Quiz · Support théorique stagiaires</p>
            </div>
          </div>
        </div>
      </section>

      {/* Agrément & positionnement */}
      <section className="bg-red-700 text-white py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-200 mb-2">Pourquoi choisir PREVENSIA FORMATION</p>
              <h2 className="text-2xl font-bold">Formation complète vers la qualification officielle SSIAP1</h2>
              <p className="mt-3 text-red-100 leading-7">
                Certifié Qualiopi, nous préparons la formation SSIAP1 dans son intégralité :
                théorie, exercices pratiques sur matériel réel et examen final devant jury.
                Le programme est calé sur le référentiel officiel de l&apos;arrêté du 2 mai 2005 modifié.
              </p>
              <p className="mt-3 text-red-200 text-sm leading-6">
                <strong className="text-white">Agrément préfectoral en cours d&apos;obtention.</strong>{" "}
                Les premières sessions seront ouvertes dès validation administrative. Vous pouvez
                dès à présent soumettre une demande de devis pour être informé en priorité.
              </p>
            </div>
            <Link
              href="/demande-devis?type=ssiap1-initial"
              className="shrink-0 rounded-xl bg-white px-6 py-3 font-semibold text-red-700 hover:bg-red-50 transition-colors"
            >
              Demander un devis →
            </Link>
          </div>
        </div>
      </section>

      {/* Pourquoi se former */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Pourquoi former vos agents à la sécurité incendie SSIAP1 ?
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Un incendie en ERP peut tuer en quelques minutes. La réglementation impose des agents
            SSIAP1 qualifiés dans les ERP de 1re à 4e catégorie. Employer un agent sans qualification
            valide expose l&apos;exploitant à des sanctions pénales.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                titre: "Obligation réglementaire",
                texte: "L'arrêté du 2 mai 2005 modifié impose la présence d'agents SSIAP1 qualifiés dans les ERP de 1re à 4e catégorie selon leur type. Une qualification expirée (non recyclée) équivaut à une absence de qualification.",
                couleur: "border-red-200 bg-red-50",
                icon: "⚖️",
              },
              {
                titre: "Enjeu vital",
                texte: "En France, les incendies en ERP causent chaque année des dizaines de décès et des centaines de blessés. Un agent SSIAP1 qualifié et entraîné peut faire la différence entre une évacuation réussie et un drame.",
                couleur: "border-orange-200 bg-orange-50",
                icon: "🔥",
              },
              {
                titre: "Tous les ERP concernés",
                texte: "Hôtels, grandes surfaces, établissements scolaires, hôpitaux, cinémas, musées, parkings couverts : tous les ERP de catégorie 1 à 4 sont soumis à l'obligation de disposer d'agents SSIAP1 qualifiés.",
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
            La formation initiale est ouverte à toute personne souhaitant exercer les fonctions
            d&apos;agent de sécurité incendie en ERP. Le recyclage s&apos;adresse aux agents SSIAP1
            déjà qualifiés dont la qualification arrive à échéance.
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
          <h2 className="text-3xl font-bold text-slate-900">Programme de la formation SSIAP1</h2>
          <p className="mt-4 text-lg text-slate-600">
            10 modules théoriques structurés (e-learning inclus), conformes au référentiel de
            formation SSIAP défini par l&apos;arrêté du 2 mai 2005 modifié.
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

      {/* Déroulement de la formation */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Comment se déroule la formation SSIAP1 ?</h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            La formation SSIAP1 chez PREVENSIA suit un parcours hybride structuré : module e-learning
            théorique en amont, puis formation encadrée en présentiel, et enfin examen de qualification.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">

            {/* Module e-learning inclus */}
            <div className="rounded-2xl border-2 border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 text-lg font-bold">1</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Inclus pour chaque stagiaire</p>
                  <p className="font-bold text-slate-900 text-lg">Module e-learning théorique (3h)</p>
                </div>
              </div>
              <p className="text-sm text-slate-600">
                Chaque stagiaire inscrit à une formation SSIAP1 (initiale ou recyclage) reçoit
                un accès individuel au module e-learning. Il permet d&apos;acquérir les bases théoriques
                avant les journées de formation encadrée, à son rythme.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-slate-600">
                <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">›</span>Accès activé dès la confirmation d&apos;inscription</li>
                <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">›</span>10 modules + quiz de validation des acquis</li>
                <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">›</span>Accessible 24h/24 depuis PC, tablette ou mobile</li>
                <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">›</span>Suivi de progression accessible à l&apos;employeur</li>
              </ul>
            </div>

            {/* Formation encadrée */}
            <div className="rounded-2xl border-2 border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-white text-lg font-bold">2</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Formation encadrée</p>
                  <p className="font-bold text-slate-900 text-lg">Présentiel théorie + pratique</p>
                </div>
              </div>
              <p className="text-sm text-slate-600">
                Les journées en présentiel (intra-entreprise ou inter-entreprise) permettent
                d&apos;approfondir les apports théoriques et de réaliser les exercices pratiques
                réglementaires.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-slate-600">
                <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">›</span>Théorie approfondie en salle (réglementation, SSI, ERP)</li>
                <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">›</span>Manipulation d&apos;extincteurs sur feux réels simulés</li>
                <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">›</span>Exercices désenfumage, gestes professionnels, mises en situation</li>
                <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">›</span>Disponible en intra (formateur chez vous) ou inter (nos locaux)</li>
                <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">›</span>12 stagiaires maximum par session</li>
              </ul>
            </div>

            {/* Examen */}
            <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white text-lg font-bold">3</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-red-700">Qualification officielle</p>
                  <p className="font-bold text-slate-900 text-lg">Examen de certification SSIAP1</p>
                </div>
              </div>
              <p className="text-sm text-slate-600">
                L&apos;examen SSIAP1 est organisé conformément à l&apos;arrêté du 2 mai 2005 modifié.
                Il comporte trois épreuves distinctes.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-slate-600">
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">›</span><strong>Épreuve écrite</strong> : QCM portant sur les connaissances théoriques</li>
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">›</span><strong>Épreuve pratique</strong> : contrôle et identification d&apos;anomalies</li>
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">›</span><strong>Oral devant jury</strong> : mise en situation professionnelle</li>
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">›</span>Qualification SSIAP1 délivrée aux stagiaires reçus</li>
              </ul>
            </div>

            {/* Recyclage */}
            <div className="rounded-2xl border-2 border-orange-200 bg-orange-50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white text-lg font-bold">↺</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-orange-700">Tous les 3 ans</p>
                  <p className="font-bold text-slate-900 text-lg">Recyclage SSIAP1 — 14h obligatoires</p>
                </div>
              </div>
              <p className="text-sm text-slate-600">
                Le recyclage est obligatoire pour maintenir la qualification SSIAP1 en cours de
                validité. PREVENSIA organise des sessions de recyclage incluant le module e-learning
                de révision et les exercices pratiques réglementaires.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-slate-600">
                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold mt-0.5">›</span>14h de remise à niveau (e-learning + présentiel)</li>
                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold mt-0.5">›</span>Actualisation réglementaire et retours d&apos;expérience</li>
                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold mt-0.5">›</span>Exercices pratiques extincteurs et procédures</li>
                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold mt-0.5">›</span>Attestation de recyclage délivrée à l&apos;issue</li>
                <li className="flex items-start gap-2"><span className="text-orange-500 font-bold mt-0.5">›</span>À partir de 390 € HT / personne</li>
              </ul>
              <div className="mt-4">
                <Link href="/demande-devis?type=ssiap1-recyclage" className="inline-flex rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-400 transition-colors">
                  Demander un recyclage →
                </Link>
              </div>
            </div>

          </div>

          {/* Tableau comparatif */}
          <div className="mt-10 overflow-x-auto">
            <table className="w-full rounded-2xl border border-slate-200 text-sm bg-white overflow-hidden">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Formule</th>
                  <th className="px-4 py-3 text-center font-semibold">E-learning</th>
                  <th className="px-4 py-3 text-center font-semibold">Pratique extincteurs</th>
                  <th className="px-4 py-3 text-center font-semibold">Adapté au site</th>
                  <th className="px-4 py-3 text-center font-semibold">Qualification / Attestation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">Initiale inter-entreprise (nos locaux)</td>
                  <td className="px-4 py-3 text-center text-green-600 font-bold">✓</td>
                  <td className="px-4 py-3 text-center text-green-600 font-bold">✓</td>
                  <td className="px-4 py-3 text-center text-slate-400">—</td>
                  <td className="px-4 py-3 text-center text-green-600 font-bold">Qualification SSIAP1</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-900">Initiale intra-entreprise (vos locaux)</td>
                  <td className="px-4 py-3 text-center text-green-600 font-bold">✓</td>
                  <td className="px-4 py-3 text-center text-green-600 font-bold">✓</td>
                  <td className="px-4 py-3 text-center text-green-600 font-bold">✓</td>
                  <td className="px-4 py-3 text-center text-green-600 font-bold">Qualification SSIAP1</td>
                </tr>
                <tr className="bg-orange-50">
                  <td className="px-4 py-3 font-medium text-slate-900">Recyclage (14h / 3 ans)</td>
                  <td className="px-4 py-3 text-center text-green-600 font-bold">✓</td>
                  <td className="px-4 py-3 text-center text-green-600 font-bold">✓</td>
                  <td className="px-4 py-3 text-center text-green-600 font-bold">✓</td>
                  <td className="px-4 py-3 text-center text-orange-600 font-bold">Attestation recyclage</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Ce que comprend la formation */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Ce que comprend chaque formation</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                titre: "Module e-learning inclus",
                texte: "10 chapitres théoriques avec schémas pédagogiques SVG animés (tétraèdre du feu, classes de feux, extincteurs, SSI, évacuation). Accès individuel activé à l'inscription, accessible depuis PC, tablette ou mobile.",
              },
              {
                titre: "Formation encadrée par formateur SSIAP expérimenté",
                texte: "Journées en présentiel : apports théoriques complémentaires, exercices pratiques sur extincteurs, mises en situation professionnelles. Formation conduite par un formateur SSIAP expérimenté.",
              },
              {
                titre: "Attestation + rapport employeur",
                texte: "Document nominatif délivré à l'issue de la formation. Pour les employeurs, un rapport de formation détaillé est transmis automatiquement. La qualification SSIAP1 est délivrée après réussite à l'examen.",
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
                Qualification obligatoire obtenue auprès d&apos;un <strong>organisme agréé par la préfecture</strong>.
                Recyclage de 14h obligatoire tous les 3 ans.
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
                Normes AFNOR encadrant la conception, l&apos;installation et l&apos;exploitation des Systèmes
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
          <h2 className="text-3xl font-bold text-slate-900">Objectifs pédagogiques</h2>
          <p className="mt-4 text-lg text-slate-600">
            À l&apos;issue de la formation SSIAP1, le stagiaire sera capable de :
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Expliquer le mécanisme du feu (tétraèdre) et les 4 méthodes d'extinction",
              "Identifier les 5 classes de feux et choisir l'agent extincteur adapté",
              "Mettre en œuvre un extincteur portatif et un RIA selon la méthode DAPS",
              "Décrire les composantes d'un SSI et leur rôle dans la détection et l'alarme",
              "Appliquer les procédures d'évacuation ERP : alarme, guide-file, serre-file, PMR",
              "Assurer les missions réglementaires de l'agent SSIAP1 : rondes, poste de sécurité, accueil secours",
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
            Formation certifiante 70h · Recyclage 14h · E-learning inclus · Max 12 stagiaires · Certifié Qualiopi
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
