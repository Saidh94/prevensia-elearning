import Link from "next/link";
import CourseJsonLd from "@/components/seo/CourseJsonLd";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata = {
  title: "Formation ATEX — Atmosphères Explosives E-learning | PREVENSIA FORMATION",
  description:
    "Formation ATEX en ligne : sensibilisation aux risques d'explosion, zonage ATEX, marquage équipements, EPI et réglementation 99/92/CE. Parcours e-learning 3h — Attestation incluse. 129 € HT.",
  alternates: {
    canonical: "https://prevensia-formation.fr/formation-atex",
  },
  keywords: [
    "formation ATEX",
    "formation atmosphères explosives",
    "formation ATEX e-learning",
    "zonage ATEX",
    "directive 99/92/CE",
    "ATEX zones gaz poussières",
    "formation risque explosion",
    "DRPE ATEX",
    "équipements certifiés ATEX",
  ],
  openGraph: {
    title: "Formation ATEX — Atmosphères Explosives E-learning",
    description:
      "Parcours e-learning ATEX 3h conforme à la directive 99/92/CE. Zones gaz et poussières, marquage Ex, EPI, conduite à tenir. 129 € HT — attestation incluse.",
    url: "https://prevensia-formation.fr/formation-atex",
  },
};

const faqItems = [
  {
    question: "Qu'est-ce qu'une atmosphère explosive (ATEX) ?",
    answer:
      "Une atmosphère explosive est un mélange d'air et de substances inflammables (gaz, vapeurs, brouillards ou poussières) en proportions suffisantes pour s'enflammer. Si une source d'inflammation est présente dans ce mélange, l'explosion peut se déclencher. Les ATEX sont présentes dans de nombreux secteurs : chimie, pétrochimie, agroalimentaire, traitement des eaux, imprimerie, menuiserie.",
  },
  {
    question: "Qui est concerné par la formation ATEX ?",
    answer:
      "Toute personne amenée à intervenir, travailler ou circuler dans un environnement pouvant présenter un risque ATEX est concernée : opérateurs de production, techniciens de maintenance, sous-traitants, personnel d'entretien et de nettoyage industriel. La directive 99/92/CE impose à l'employeur de former ses salariés exposés au risque ATEX.",
  },
  {
    question: "La formation ATEX e-learning est-elle conforme à la réglementation ?",
    answer:
      "Le parcours e-learning constitue la sensibilisation théorique conforme aux exigences de la directive 99/92/CE et du Code du travail (Art. R4227-42 et suivants). Il couvre toutes les notions réglementaires : zonage, DRPE, marquage des équipements, EPI et conduite à tenir. La formation pratique terrain reste de la responsabilité de l'employeur.",
  },
  {
    question: "Quelle est la différence entre les zones 0, 1, 2 et les zones 20, 21, 22 ?",
    answer:
      "Les zones 0, 1 et 2 concernent les gaz, vapeurs et brouillards inflammables. Les zones 20, 21 et 22 concernent les poussières combustibles. Dans chaque famille, le chiffre indique la fréquence du risque : zone 0/20 = présence permanente, zone 1/21 = présence occasionnelle en fonctionnement normal, zone 2/22 = présence accidentelle ou de courte durée.",
  },
  {
    question: "Qu'est-ce que le DRPE ?",
    answer:
      "Le Document Relatif à la Protection contre les Explosions (DRPE) est un document obligatoire que l'employeur doit établir avant le début des travaux dans les zones ATEX. Il recense les zones identifiées, les mesures de prévention mises en place, la liste des équipements certifiés utilisés et les procédures spécifiques aux interventions. Il doit être tenu à jour.",
  },
  {
    question: "Quel est le prix de la formation ATEX ?",
    answer:
      "La formation ATEX e-learning est proposée à 129 € HT par personne en accès individuel. Pour les projets intra-entreprise (plusieurs salariés à former simultanément), des tarifs de groupe sont disponibles sur devis. Le prix inclut l'accès complet au parcours, le quiz de validation et l'attestation de formation.",
  },
];

const metiers = [
  "Opérateur de production chimique / pétrochimique",
  "Technicien de maintenance industrielle",
  "Agent de nettoyage industriel",
  "Conducteur de silo / installation agroalimentaire",
  "Sous-traitant intervenant en zone ATEX",
  "Chargé de sécurité / HSE",
  "Responsable de site avec zones classées",
  "Menuisier, métallurgiste, imprimeur",
];

const programme = [
  {
    titre: "Qu'est-ce qu'une atmosphère explosive ?",
    contenu: "Définition, substances concernées (gaz, vapeurs, brouillards, poussières), secteurs à risque, chiffres des accidents.",
  },
  {
    titre: "La réglementation ATEX",
    contenu: "Directives 99/92/CE et 2014/34/UE, obligations de l'employeur, DRPE, marquage CE + Ex, groupes de gaz IIA/IIB/IIC.",
  },
  {
    titre: "Le processus menant à l'accident",
    contenu: "Phénomène dangereux, situation dangereuse, événement déclencheur. Les 9 principes généraux de prévention.",
  },
  {
    titre: "Le mécanisme d'une explosion",
    contenu: "L'hexagone des 6 conditions simultanées, domaine d'explosivité, LIE/LSE, point éclair, température d'auto-inflammation.",
  },
  {
    titre: "Zonage ATEX — classification et délimitation",
    contenu: "Zones 0/1/2 (gaz) et 20/21/22 (poussières), exemples INRS/INERIS, cas de la maintenance, dépôts de poussières.",
  },
  {
    titre: "Les sources d'inflammation",
    contenu: "Sources électriques, mécaniques, thermiques, chimiques, électrostatiques, foudre. Permis de feu obligatoire.",
  },
  {
    titre: "Actions de prévention et protection",
    contenu: "Agir sur le combustible, sur les sources d'inflammation, sur l'organisation. Ventilation, explosimètre, autorisation de travail.",
  },
  {
    titre: "Marquage et adéquation des équipements",
    contenu: "Marquage réglementaire et normatif, modes Ex (d, e, ia, p...), classes T1→T6, indice IP, lecture d'un marquage complet.",
  },
  {
    titre: "EPI en zone ATEX",
    contenu: "Vêtements antistatiques EN 1149-5, chaussures ESD, gants, détecteur de gaz certifié Ex (alarme à 20% LIE), ARI.",
  },
  {
    titre: "Signalisation et comportements",
    contenu: "Pictogramme ATEX réglementaire, comportements interdits, cas pratique maintenance, accès contrôlé.",
  },
  {
    titre: "Conduite à tenir en cas d'accident",
    contenu: "Réflexe PEAS (Protéger, Examiner, Alerter, Secourir), numéros d'urgence, centres antipoison.",
  },
  {
    titre: "Les 13 réflexes en zone ATEX",
    contenu: "Mémo synthèse : autorisation de travail, EPI, explosimètre, outils certifiés Ex, signalement des anomalies.",
  },
];

export default function FormationAtexPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <CourseJsonLd
        name="Formation ATEX — Atmosphères Explosives"
        description="Formation e-learning ATEX conforme à la directive 99/92/CE. Zonage, marquage équipements, EPI, conduite à tenir. Attestation incluse."
        courseCode="ATEX"
        url="/formation-atex"
        timeRequired="PT3H"
        educationalLevel="Beginner"
        audience="Personnel industriel exposé au risque ATEX : opérateurs, techniciens de maintenance, sous-traitants"
        educationalCredentialAwarded="Attestation de sensibilisation ATEX — PREVENSIA FORMATION"
      />
      <FaqJsonLd items={faqItems} />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "E-learning", url: "/elearning" },
          { name: "Formation ATEX", url: "/formation-atex" },
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
            <span className="text-white">Formation ATEX</span>
          </nav>

          <p className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-amber-300">
            Prévention des risques · Directive 99/92/CE
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Formation ATEX<br className="hidden lg:block" />{" "}
            <span className="text-amber-400">Atmosphères Explosives</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Parcours e-learning complet de 3h pour comprendre les risques ATEX, identifier
            les zones classées, utiliser les équipements certifiés Ex et adopter les bons
            comportements. Conforme à la directive 99/92/CE et au Code du travail.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/elearning/atex"
              className="rounded-xl bg-amber-500 px-6 py-3 font-semibold text-slate-950 hover:bg-amber-400 transition-colors"
            >
              Démarrer la formation — 129 € HT
            </Link>
            <Link
              href="/demande-devis?type=atex"
              className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Devis intra-entreprise
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
            <span>✓ Conforme directive 99/92/CE</span>
            <span>✓ Accès e-learning immédiat</span>
            <span>✓ 3 heures de formation</span>
            <span>✓ Attestation incluse</span>
            <span>✓ Vidéo officielle INRS</span>
          </div>
        </div>
      </section>

      {/* Tarifs rapides */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Individuel</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">129 € HT</p>
              <p className="mt-1 text-sm text-slate-600">Accès complet e-learning + attestation</p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">Intra-entreprise</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">Sur devis</p>
              <p className="mt-1 text-sm text-slate-600">Groupe — tarif selon effectif et site</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Durée</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">3 h</p>
              <p className="mt-1 text-sm text-slate-600">12 modules + quiz de validation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi se former ATEX */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Pourquoi se former au risque ATEX ?
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Les explosions liées aux atmosphères explosives provoquent chaque année des dizaines d&apos;accidents graves en France.
            La réglementation impose à l&apos;employeur de former tout salarié susceptible de travailler dans
            une zone ATEX. Un manquement engage la responsabilité pénale du dirigeant.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                titre: "Obligation réglementaire",
                texte: "La directive 99/92/CE et le Code du travail (Art. R4227-49) imposent à l'employeur de former les salariés exposés au risque ATEX.",
                couleur: "border-amber-200 bg-amber-50",
                icon: "⚖️",
              },
              {
                titre: "Risque mortel sous-estimé",
                texte: "Une explosion en zone ATEX peut provoquer des destructions massives et des victimes graves. Les poussières combustibles (farine, sucre, bois) sont souvent négligées.",
                couleur: "border-red-200 bg-red-50",
                icon: "⚠️",
              },
              {
                titre: "Applicable à de nombreux secteurs",
                texte: "Chimie, pétrochimie, agroalimentaire, menuiserie, métallurgie, stations-service, traitement des eaux : les zones ATEX sont partout.",
                couleur: "border-slate-200 bg-slate-50",
                icon: "🏭",
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

      {/* À qui s'adresse cette formation */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">
            À qui s&apos;adresse la formation ATEX ?
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Toute personne susceptible d&apos;intervenir, de travailler ou de circuler dans un
            environnement présentant un risque d&apos;atmosphère explosive est concernée.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {metiers.map((m) => (
              <div key={m} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3">
                <span className="text-amber-500 font-bold">✓</span>
                <span className="text-sm font-medium text-slate-700">{m}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Programme de la formation ATEX</h2>
          <p className="mt-4 text-lg text-slate-600">
            12 modules structurés, conformes à la directive 99/92/CE, accessibles en e-learning à votre rythme.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {programme.map((p, i) => (
              <div key={p.titre} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-slate-950">
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
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Ce que comprend la formation</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                titre: "Accès e-learning complet",
                texte: "12 chapitres structurés avec schémas pédagogiques SVG, vidéo officielle INRS, quiz de 20 questions. Accès immédiat à l'achat.",
              },
              {
                titre: "Quiz de validation",
                texte: "20 questions couvrant l'ensemble du programme. Un score minimum valide les acquis et déclenche la génération de l'attestation.",
              },
              {
                titre: "Attestation de formation",
                texte: "Document nominatif téléchargeable, base pour l'information de l'employeur sur la sensibilisation réglementaire ATEX du salarié.",
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
      <section className="bg-amber-50 border-y border-amber-200 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Zoom sur le cadre réglementaire ATEX
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-white border border-amber-200 p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">Directive 99/92/CE — ATEX 137</p>
              <p className="text-sm text-slate-700">
                Concerne les <strong>lieux de travail</strong>. Impose à l&apos;employeur de classer les zones,
                établir le DRPE, sélectionner les équipements adaptés et former le personnel.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-amber-200 p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">Directive 2014/34/UE — ATEX 95</p>
              <p className="text-sm text-slate-700">
                Concerne les <strong>équipements</strong>. Définit les exigences de conception, les catégories
                (1G/2G/3G, 1D/2D/3D) et le marquage Ex obligatoire sur les appareils certifiés.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-amber-200 p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">Code du travail — Obligation de formation</p>
              <p className="text-sm text-slate-700">
                <strong>Art. L4141-2 et L4141-3</strong> : l&apos;employeur a l&apos;obligation générale de dispenser
                une formation à la sécurité adaptée à chaque salarié exposé.{" "}
                <strong>Art. R4227-49</strong> : l&apos;employeur doit prendre les mesures nécessaires pour qu&apos;une
                formation en matière de protection contre les explosions soit délivrée à tout travailleur exposé.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-amber-200 p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">Arrêté du 8 juillet 2003 + DRPE</p>
              <p className="text-sm text-slate-700">
                L&apos;<strong>arrêté du 8 juillet 2003</strong> relatif à la protection des travailleurs susceptibles
                d&apos;être exposés à une atmosphère explosive oblige l&apos;employeur à prévoir une formation
                <em> suffisante et appropriée</em> pour toute personne travaillant dans un emplacement ATEX.
                Le <strong>DRPE</strong> (Document Relatif à la Protection contre les Explosions) liste les zones,
                les équipements certifiés et les procédures — à établir avant les travaux et à tenir à jour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Niveaux de formation ATEX */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Les niveaux de formation ATEX
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Les experts en prévention des risques distinguent généralement plusieurs niveaux de
            formation ATEX, selon le rôle et l&apos;exposition de chaque salarié. Ces formations se
            doivent d&apos;être adaptées au contexte et aux spécificités de l&apos;entreprise.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* Niveau 0 */}
            <div className="relative rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-lg font-bold text-slate-950">
                  0
                </span>
                <p className="text-xs font-bold uppercase tracking-widest text-amber-700">Formation ATEX Niveau 0</p>
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Personnel en zone ATEX ou à proximité</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Destinée à <strong>tout salarié susceptible de travailler ou de circuler dans une zone ATEX</strong>,
                même sans intervenir sur les équipements. Opérateurs de production, agents de nettoyage,
                visiteurs réguliers, sous-traitants.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2"><span className="text-amber-500 font-bold mt-0.5">›</span>Sensibilisation aux risques ATEX</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 font-bold mt-0.5">›</span>Identification des zones classées</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 font-bold mt-0.5">›</span>Comportements et EPI à respecter</li>
                <li className="flex items-start gap-2"><span className="text-amber-500 font-bold mt-0.5">›</span>Conduite à tenir en cas d&apos;accident</li>
              </ul>
              <div className="mt-5 rounded-xl border border-amber-300 bg-white px-4 py-3">
                <p className="text-xs text-slate-500">Notre parcours e-learning ATEX couvre intégralement ce niveau.</p>
                <Link href="/elearning/atex" className="mt-1 inline-block text-sm font-semibold text-amber-600 hover:underline">
                  Démarrer — 129 € HT →
                </Link>
              </div>
            </div>

            {/* Niveau 1 */}
            <div className="relative rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-lg font-bold text-white">
                  1
                </span>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Formation ATEX Niveau 1</p>
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Personnel intervenant sur appareil ATEX</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Destinée au <strong>personnel intervenant directement sur des appareils ou installations
                situés en zone ATEX</strong> : techniciens de maintenance, électriciens, monteurs,
                instrumentistes.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">›</span>Contenu du niveau 0 + approfondissement</li>
                <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">›</span>Lecture des marquages Ex des équipements</li>
                <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">›</span>Adéquation équipement / zone classée</li>
                <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">›</span>Permis de feu, autorisation de travail</li>
              </ul>
              <div className="mt-5 rounded-xl border border-slate-200 bg-white px-4 py-3">
                <p className="text-xs text-slate-500">Parcours sur mesure adapté au site et aux équipements concernés.</p>
                <Link href="/demande-devis?type=atex-niveau1" className="mt-1 inline-block text-sm font-semibold text-slate-700 hover:underline">
                  Demander un devis →
                </Link>
              </div>
            </div>

            {/* Niveau 2 */}
            <div className="relative rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-lg font-bold text-white">
                  2
                </span>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Formation ATEX Niveau 2</p>
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Encadrant, décisionnaire et référent ATEX</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Destinée au <strong>personnel encadrant, aux responsables sécurité et aux référents ATEX</strong>
                {" "}chargés de piloter la prévention, rédiger le DRPE ou superviser les interventions en zone classée.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">›</span>Contenu des niveaux 0 et 1</li>
                <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">›</span>Rédaction et mise à jour du DRPE</li>
                <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">›</span>Classement et délimitation des zones</li>
                <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">›</span>Sélection et vérification des équipements Ex</li>
              </ul>
              <div className="mt-5 rounded-xl border border-slate-200 bg-white px-4 py-3">
                <p className="text-xs text-slate-500">Parcours sur mesure adapté au rôle et aux responsabilités de l&apos;encadrant.</p>
                <Link href="/demande-devis?type=atex-niveau2" className="mt-1 inline-block text-sm font-semibold text-slate-700 hover:underline">
                  Demander un devis →
                </Link>
              </div>
            </div>
          </div>

          <p className="mt-8 max-w-3xl text-sm text-slate-500">
            <strong>Note :</strong> La nomenclature Niveau 0 / 1 / 2 est une convention professionnelle largement
            utilisée par les organismes de formation et les préventeurs. Elle ne correspond pas à une
            obligation réglementaire formelle mais reflète les différents profils visés par l&apos;art. R4227-49
            du Code du travail et l&apos;arrêté du 8 juillet 2003.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Questions fréquentes — Formation ATEX
          </h2>
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

      {/* CTA final */}
      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Prêt à vous former au risque ATEX ?</h2>
          <p className="mt-4 text-lg text-slate-300">
            Accès e-learning immédiat · 12 modules · Vidéo INRS · Quiz de validation · Attestation incluse
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/elearning/atex"
              className="rounded-xl bg-amber-500 px-8 py-4 font-semibold text-slate-950 hover:bg-amber-400 transition-colors"
            >
              Démarrer maintenant — 129 € HT
            </Link>
            <Link
              href="/demande-devis?type=atex"
              className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Devis entreprise
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
