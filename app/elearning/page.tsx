import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modules E-learning Sécurité — H0B0, ATEX, SSI, Sprinkler | PREVENSIA",
  description:
    "Catalogue e-learning PREVENSIA FORMATION : H0B0/H0V, ATEX NIV 0/1/2, Exploitation SSI, Exploitation Sprinkler, Coordination SSI. Modules autonomes ou inclus dans la formation.",
  alternates: { canonical: "https://prevensia-formation.fr/elearning" },
  openGraph: {
    title: "Modules E-learning Sécurité — PREVENSIA FORMATION",
    description:
      "H0B0/H0V, ATEX NIV 0/1/2, SSI, Sprinkler, Coordination SSI. Modules e-learning autonomes ou inclus dans la formation présentielle.",
    url: "https://prevensia-formation.fr/elearning",
  },
};

// Catalogue actuel nov. 2026 : H0B0 · ATEX NIV 0/1/2 · SSI · Sprinkler · Coordination SSI
const formations = [
  {
    slug: "h0b0",
    category: "Habilitation électrique",
    title: "Habilitation électrique H0B0 / H0V",
    duration: "E-learning : 1 h 30 à 2 h 30 | Entretien formateur : 30 min",
    mode: "E-learning + entretien 30 min",
    price: "150 EUR HT",
    level: "Débutant",
    audience:
      "Personnel non électricien amené à évoluer dans un environnement présentant un risque électrique.",
    description:
      "Parcours de sensibilisation au risque électrique destiné aux personnels non électriciens. Le module pose les bases de la prévention, des comportements adaptés et de la conduite à tenir.",
    objectifs: [
      "Identifier les risques liés à l'électricité dans son environnement de travail",
      "Comprendre les prescriptions de sécurité applicables aux opérations d'ordre non électrique",
      "Adopter les bons comportements pour prévenir l'accident d'origine électrique",
    ],
    programme: [
      "Notions élémentaires sur le risque électrique",
      "Effets du courant électrique sur le corps humain",
      "Environnement de travail et zones à risque",
      "Limites des opérations autorisées en H0B0 / H0V",
      "Conduite à tenir en cas d'incident ou d'accident",
    ],
    note:
      "Ce parcours constitue la préparation théorique au titre H0B0 / H0V, complétée par un entretien de validation de 30 minutes avec un formateur. La réussite au quiz et à l'entretien ne vaut pas habilitation : l'habilitation est délivrée uniquement par l'employeur, après vérification des acquis et adéquation au poste.",
  },
  {
    slug: "ssi-exploitation",
    category: "SSI",
    title: "Exploitation des SSI - fondamentaux",
    duration: "E-learning : 1 h 30 à 2 h | Formation SSI présentielle : selon programme",
    mode: "Support e-learning inclus + présentiel",
    price: "Inclus avec la formation encadrée",
    level: "Intermédiaire",
    audience:
      "Exploitants, responsables de site, personnel technique ou utilisateurs amenés à interagir avec un système de sécurité incendie.",
    description:
      "Module d'initiation au fonctionnement des SSI, à l'exploitation des informations incendie et aux principaux référentiels français de la famille NF S 61.",
    objectifs: [
      "Comprendre le rôle d'un SSI et ses fonctions principales",
      "Distinguer SDI, SMSI et logique de mise en sécurité",
      "Adopter les bons réflexes face à une alarme, un dérangement ou un défaut",
    ],
    programme: [
      "Rôle et logique fonctionnelle d'un SSI",
      "Distinction SDI / SMSI / alarme / mise en sécurité",
      "Référentiels utiles : NF S 61-931, NF S 61-932, NF S 61-970",
      "Réflexes d'exploitation et limites utilisateur",
      "Cas pratiques d'anomalies d'exploitation",
    ],
    note:
      "Support e-learning inclus avec la formation SSI encadrée. Il ne remplace pas une coordination SSI, une étude de conception ou une maintenance spécialisée.",
  },
  {
    slug: "sprinkler",
    category: "Protection incendie",
    title: "Exploitation sprinkler - fondamentaux techniques",
    duration: "E-learning : 1 h 30 à 2 h | Formation présentielle : selon programme",
    mode: "Support e-learning inclus + présentiel",
    price: "Inclus avec la formation encadrée",
    level: "Intermédiaire",
    audience:
      "Personnel d'exploitation, maintenance, encadrement technique ou responsables de site.",
    description:
      "Module d'exploitation d'une installation sprinkler, de ses organes critiques, de ses anomalies et des référentiels techniques qui encadrent son maintien en état.",
    objectifs: [
      "Comprendre le rôle d'une installation sprinkler",
      "Reconnaître ses composants principaux et états anormaux",
      "Identifier les bons réflexes d'exploitation, d'essais et de remontée des anomalies",
    ],
    programme: [
      "Principe de fonctionnement d'une installation sprinkler",
      "Composants principaux et logique d'exploitation",
      "Anomalies, dérives et états non conformes",
      "Référentiels : APSAD R1, EN 12845, NFPA 13, FM",
      "Focus entrepôts, stockage et ICPE 1510",
      "Essais, surveillance et gestion des indisponibilités",
    ],
    note:
      "Support e-learning inclus avec la formation sprinkler encadrée. Il ne remplace pas une étude sprinkler ni un audit de conformité.",
  },
  {
    slug: "extinction-automatique-gaz",
    category: "Protection incendie",
    title: "Extinction automatique à gaz — exploitation et référentiels",
    duration: "E-learning : 1 h 30 à 2 h | Formation présentielle : selon programme",
    mode: "Support e-learning inclus + présentiel",
    price: "Inclus avec la formation encadrée",
    level: "Intermédiaire",
    audience:
      "Personnel d'exploitation, maintenance, encadrement technique ou responsables de locaux protégés par extinction automatique à gaz.",
    description:
      "Module dédié aux installations fixes d'extinction à gaz, à la sécurité des personnes, à l'intégrité du local protégé et aux repères APSAD R13 / NF EN 15004-1.",
    objectifs: [
      "Comprendre la logique d'un système d'extinction automatique à gaz",
      "Distinguer l'extinction à gaz d'une installation sprinkler",
      "Identifier les contraintes de local protégé, d'alarme, de temporisation et de réaccès",
    ],
    programme: [
      "Principe d'un système fixe d'extinction à gaz",
      "Détection, commande, temporisation et diffusion",
      "Local protégé et sécurité des personnes",
      "Repères APSAD R13 et NF EN 15004-1",
    ],
    note:
      "Support e-learning inclus avec le module SSI exploitation renforcé. Il ne remplace pas une étude de conception ni une maintenance spécialisée.",
  },
  {
    slug: "atex",
    category: "Prévention des risques",
    title: "Formation et Sensibilisation ATEX NIV 0",
    duration: "E-learning : 3 h à 4 h | Entretien de validation : 30 min",
    mode: "E-learning autonome + entretien de validation 30 min",
    price: "129 EUR HT",
    level: "Débutant",
    audience:
      "Tout personnel amené à circuler ou à travailler occasionnellement dans un environnement susceptible de présenter un risque d'explosion : industrie chimique, pétrochimique, agroalimentaire, traitement des eaux, menuiserie, métallurgie.",
    description:
      "Sensibilisation aux atmosphères explosives conforme à la directive 99/92/CE. Le module couvre le mécanisme des explosions, la classification des zones ATEX (gaz et poussières), les mesures de prévention et la signalisation réglementaire. Complété par un entretien individuel de validation de 30 min avec un formateur PREVENSIA.",
    objectifs: [
      "Comprendre ce qu'est une atmosphère explosive et le mécanisme d'une explosion",
      "Identifier les zones ATEX (0, 1, 2 gaz et 20, 21, 22 poussières) et leurs contraintes",
      "Connaître les règles de comportement en zone ATEX et les EPI certifiés Ex",
    ],
    programme: [
      "Définition et contexte des atmosphères explosives",
      "Réglementation : directive 99/92/CE et Code du travail",
      "Mécanisme d'une explosion — les 6 conditions",
      "Classification des zones ATEX gaz et poussières",
      "Sources d'inflammation et mesures de prévention",
      "Équipements certifiés Ex, EPI antistatiques et signalisation",
      "Conduite à tenir en cas d'alarme ou d'accident",
      "Entretien de validation individuel (30 min)",
    ],
    note:
      "Attestation de sensibilisation ATEX délivrée à l'issue de l'entretien de validation (30 min) avec un formateur PREVENSIA.",
  },
  {
    slug: "atex-niveau1",
    category: "Prévention des risques",
    title: "Formation et Sensibilisation ATEX NIV 1 Intervenant",
    duration: "E-learning 5-6 h + classe virtuelle 4 h avec formateur",
    mode: "E-learning autonome + classe virtuelle 4 h (Zoom)",
    price: "490 EUR HT",
    level: "Intermédiaire",
    audience:
      "Travailleurs amenés à intervenir régulièrement en zone ATEX classée : techniciens de maintenance, opérateurs de production, électriciens, mécaniciens, sous-traitants intervenants.",
    description:
      "Parcours ATEX Niveau 1 pour travailleurs exposés : bases réglementaires, identification des zones, mesures de prévention, EPI et comportements adaptés. Complété par une classe virtuelle de 4 h avec un formateur PREVENSIA (cas pratiques élec/méca, mises en situation, délivrance de l'avis d'habilitation ATEX N1 valable 3 ans).",
    objectifs: [
      "Identifier les zones ATEX et comprendre les risques associés à son poste",
      "Appliquer les mesures de prévention et utiliser correctement les EPI certifiés Ex",
      "Connaître les procédures d'intervention en zone classée et la conduite à tenir en cas d'incident",
    ],
    programme: [
      "Définition et contexte des atmosphères explosives",
      "Réglementation : directive 99/92/CE et Code du travail",
      "Classification des zones ATEX gaz et poussières",
      "Équipements certifiés Ex et EPI antistatiques",
      "Mesures de prévention adaptées au poste (élec et méca)",
      "Conduite à tenir en cas d'alarme ou d'accident",
      "Classe virtuelle (4 h) : marquages Ex, mises en situation, évaluation finale",
    ],
    note:
      "Avis d'habilitation ATEX Niveau 1 valable 3 ans délivré à l'issue de la classe virtuelle avec formateur.",
  },
  {
    slug: "atex-niveau2",
    category: "Prévention des risques",
    title: "Formation et Sensibilisation ATEX NIV 2 Encadrant",
    duration: "E-learning 7 h + journée présentielle 7 h avec formateur",
    mode: "E-learning autonome + journée présentielle (sur site ou en centre)",
    price: "À partir de 990 EUR HT",
    level: "Avancé",
    audience:
      "Responsables de travaux, chargés de chantier, responsables sécurité, coordinateurs, responsables ATEX et personnel d'encadrement amené à planifier et superviser des interventions en zone ATEX.",
    description:
      "Parcours ATEX Niveau 2 destiné aux encadrants et responsables de travaux en zone classée : réglementation approfondie, DRPCE, plans de prévention, coordination des intervenants et gestion des situations d'urgence. Complété par une journée présentielle de 7 h avec un formateur PREVENSIA.",
    objectifs: [
      "Maîtriser le cadre réglementaire ATEX et les obligations de l'employeur",
      "Élaborer ou valider le Document Relatif à la Protection contre les Explosions (DRPCE)",
      "Organiser et superviser des interventions en zone classée (plans de prévention, permis de travail)",
    ],
    programme: [
      "Approfondissement réglementaire : DRPCE, classification, responsabilités employeur",
      "Coordination des entreprises extérieures en zone ATEX",
      "Plans de prévention et autorisations de travail",
      "Gestion des équipements certifiés Ex et EPI",
      "Retour d'expérience et analyse d'accidents ATEX",
      "Journée présentielle (7 h) : quiz de positionnement, fiche de zone, sélection Ex, simulation d'intervention, évaluation finale",
    ],
    note:
      "Avis d'habilitation ATEX Niveau 2 valable 3 ans délivré à l'issue de la journée présentielle. Tarif sur devis pour les sessions intra-entreprise.",
  },
  {
    slug: "coordinateur-ssi",
    category: "SSI",
    title: "Coordinateur SSI — Pilotage du Système de Sécurité Incendie",
    duration: "7 jours en présentiel + e-learning inclus",
    mode: "Principalement présentiel (inter ou intra) · E-learning inclus",
    price: "1 790 EUR HT / pers.",
    level: "Avancé",
    audience:
      "Responsables techniques, responsables sécurité, chefs de service maintenance, gestionnaires de patrimoine ayant la charge de la supervision globale du SSI.",
    description:
      "Parcours complet pour former le Coordinateur SSI de votre établissement : rôle et responsabilités, architecture des SSI (NF S 61-931), réglementation ERP/IGH, rédaction du CCF et de la matrice de corrélation, coordination des installateurs, constitution du Dossier d'Identité SSI. E-learning préparatoire + 7 jours de présentiel sur dossiers réels.",
    objectifs: [
      "Maîtriser le rôle et les responsabilités du Coordinateur SSI",
      "Appliquer la réglementation ERP, IGH et Code du travail applicable au SSI",
      "Rédiger le CCF, construire la matrice de corrélation et constituer le Dossier d'Identité SSI",
    ],
    programme: [
      "Rôle et responsabilités du Coordinateur SSI",
      "Architecture et fonctionnement des SSI (SDI, CMSI, UGA, DAS)",
      "Réglementation ERP, IGH, Code du travail, ICPE",
      "CCF et matrice de corrélation (ZDA/ZDM × DAS)",
      "Coordination des intervenants et gestion des travaux",
      "Situations dégradées et gestion de crise",
    ],
    note:
      "Aucune obligation réglementaire spécifique n'impose ce titre à ce jour. La formation répond à l'exigence de compétence documentée attendue par les commissions de sécurité et les bureaux de contrôle. Tarif intra-entreprise sur devis.",
  },
];

const pointsForts = [
  "Offres structurées selon le niveau d'habilitation visé",
  "Contenus structurés autour des risques réels en entreprise",
  "Approche progressive selon les niveaux, métiers et contraintes terrain",
  "Modules pédagogiques avec chapitres, synthèses et quiz sérieux",
  "Validation encadrée selon le parcours : entretien, visio ou présentiel",
];

const catégories = [
  "Habilitation électrique",
  "SSI",
  "Protection incendie",
  "Prévention des risques",
];

const inrsSelections = [
  {
    title: "INRS - Risque électrique",
    description:
      "Sélection officielle INRS pour compléter les parcours d'habilitation électrique et la prévention du risque électrique.",
    href: "https://www.youtube.com/@INRSFrance/search?query=Risque%20%C3%A9lectrique",
    badge: "INRS France",
  },
  {
    title: "INRS - Risque incendie et évacuation",
    description:
      "Sélection officielle INRS utile pour renforcer les modules incendie, SSI et évacuation.",
    href: "https://www.youtube.com/@INRSFrance/search?query=risque%20incendie",
    badge: "INRS France",
  },
  {
    title: "INRS - ATEX atmosphères explosives",
    description:
      "Ressources officielles INRS sur les atmosphères explosives, la prévention et les zones ATEX.",
    href: "https://www.youtube.com/@INRSFrance/search?query=ATEX",
    badge: "INRS France",
  },
];

const habilitationPath = [
  {
    symbol: "H0B0 / H0V",
    label: "Personnel non électricien",
    description:
      "Sensibilisation au risque électrique pour toute personne évoluant dans un environnement électrique sans réaliser d'opérations électriques.",
    keyPoints: [
      "Aucune intervention sur installation",
      "Respect des zones et distances",
      "Conduite à tenir en cas d'accident",
    ],
    slug: "h0b0",
    availability: "",
    colors: {
      wrapper: "border-slate-200 bg-slate-50",
      badge: "bg-slate-800 text-white",
      dot: "bg-slate-600",
      cta: "bg-slate-900 text-white hover:bg-slate-800",
      tag: "text-slate-500",
    },
  },
] as const;

export default function ElearningPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.22),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.16),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl">
            <nav aria-label="Fil d'Ariane" className="mb-6 text-sm text-slate-400">
              <Link href="/" className="hover:text-white">Accueil</Link>
              <span className="mx-2">›</span>
              <span className="text-white">E-learning</span>
            </nav>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-400">
              PREVENSIA FORMATION
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              E-learning PREVENSIA : support inclus et parcours habilitation encadrés
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Les modules en ligne PREVENSIA couvrent le catalogue actuel : H0B0/H0V,
              ATEX NIV 0/1/2, Exploitation SSI, Exploitation Sprinkler et Coordination SSI.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-400">
              H0B0/H0V et ATEX sont disponibles en e-learning encadré (entretien ou
              classe virtuelle). Les modules SSI, Sprinkler et Coordinateur SSI sont
              inclus avec la formation présentielle correspondante.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/inscription"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:-translate-y-0.5"
              >
                Créer un compte
              </Link>

              <Link
                href="/connexion"
                className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Se connecter
              </Link>

              <Link
                href="/demande-devis"
                className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Un avantage inclus pour les apprenants inscrits
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Les modules e-learning PREVENSIA accompagnent les apprenants avant,
              pendant ou après leur formation, avec des contenus structurés, des
              quiz et des repères pratiques adaptés aux risques du terrain.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Pour les parcours B1, B2, BR, BC, BE, incendie, SSI, sprinkler et
              SST, l&apos;accès aux modules est inclus avec la formation encadrée —
              un support digital consultable en amont, en cours et en révision.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {catégories.map((category) => (
                <span
                  key={category}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-700"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-slate-900">Points forts</h2>

            <ul className="mt-5 space-y-3">
              {pointsForts.map((point) => (
                <li
                  key={point}
                  className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-red-600">
            Catalogue e-learning
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Nos modules disponibles
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Les parcours H0B0 / H0V et BS / BE Manœuvre peuvent être suivis en
            e-learning encadré. Les autres modules sont inclus avec la formation
            encadrée correspondante pour préparer et consolider les acquis.
          </p>
          <p className="mt-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-900">
            <span className="font-semibold">Important :</span> L&apos;e-learning
            et le quiz constituent la préparation théorique de la formation.
            Ils ne délivrent pas d&apos;habilitation. L&apos;habilitation
            électrique est délivrée exclusivement par l&apos;employeur, après
            formation et entretien ou séquence encadrée, selon le titre visé.
          </p>
        </div>

        <div className="grid gap-6">
          {formations.map((formation) => (
            <article
              key={formation.slug}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-8"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-4xl">
                  <div className="flex flex-wrap gap-3">
                    <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-700">
                      {formation.mode}
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold tracking-wide text-slate-700">
                      {formation.duration}
                    </span>
                    {"price" in formation ? (
                      <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold tracking-wide text-amber-700">
                        {formation.price}
                      </span>
                    ) : null}
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold tracking-wide text-blue-700">
                      {formation.level}
                    </span>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold tracking-wide text-emerald-700">
                      {formation.category}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-slate-900">
                    {formation.title}
                  </h3>

                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {formation.description}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    <span className="font-semibold text-slate-900">
                      Public concerné :
                    </span>{" "}
                    {formation.audience}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <Link
                    href={`/modules/${formation.slug}`}
                    className="rounded-2xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                  >
                    Voir le module
                  </Link>

                  <Link
                    href="/connexion"
                    className="rounded-2xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                  >
                    Se connecter
                  </Link>

                  <Link
                    href="/inscription"
                    className="rounded-2xl bg-green-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800"
                  >
                    Créer un compte
                  </Link>
                </div>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <h4 className="text-base font-bold text-slate-900">
                    Objectifs pédagogiques
                  </h4>

                  <ul className="mt-4 space-y-3">
                    {formation.objectifs.map((item) => (
                      <li
                        key={item}
                        className="text-sm leading-6 text-slate-700"
                      >
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <h4 className="text-base font-bold text-slate-900">
                    Programme indicatif
                  </h4>

                  <ul className="mt-4 space-y-3">
                    {formation.programme.map((item) => (
                      <li
                        key={item}
                        className="text-sm leading-6 text-slate-700"
                      >
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-sm leading-6 text-amber-900">
                  <span className="font-semibold">À noter :</span>{" "}
                  {formation.note}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-red-600">
            Ressources vidéo INRS
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Compléter les parcours avec des ressources officielles
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            En plus des modules PREVENSIA, nous orientons aussi les apprenants
            et les entreprises vers des ressources officielles INRS pour
            consolider les repères électriques, ATEX et SSI.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {inrsSelections.map((item) => (
              <article
                key={item.href}
                className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6"
              >
                <span className="inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-red-700">
                  {item.badge}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Voir la sélection INRS
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-red-600">
            Habilitation électrique
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            H0B0 / H0V : sensibilisation au risque électrique (NF C 18-510 A2)
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Le parcours H0B0/H0V est destiné à tout le personnel non-électricien évoluant
            à proximité d&apos;installations électriques. Depuis l&apos;amendement A2 (obligatoire
            depuis octobre 2024), cette sensibilisation est renforcée. E-learning autonome
            + entretien formateur 30 min.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {habilitationPath.map((level, index) => (
              <div key={level.symbol} className="relative flex flex-col">
                {index < habilitationPath.length - 1 ? (
                  <div className="absolute right-0 top-10 hidden h-0.5 w-6 translate-x-full bg-slate-200 lg:block" />
                ) : null}
                <div
                  className={`flex-1 rounded-[1.5rem] border p-5 ${level.colors.wrapper}`}
                >
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] ${level.colors.badge}`}
                  >
                    Niveau {index + 1}
                  </span>
                  <p className="mt-3 text-2xl font-black tracking-tight text-slate-950">
                    {level.symbol}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {level.label}
                  </p>
                  <p className="mt-3 text-xs leading-5 text-slate-600">
                    {level.description}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {level.keyPoints.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-xs text-slate-700"
                      >
                        <span
                          className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${level.colors.dot}`}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                  {level.slug ? (
                    <Link
                      href={`/modules/${level.slug}`}
                      className={`mt-5 inline-flex w-full items-center justify-center rounded-2xl px-3 py-2 text-xs font-semibold transition hover:-translate-y-0.5 ${level.colors.cta}`}
                    >
                      Accéder au module →
                    </Link>
                  ) : (
                    <p
                      className={`mt-5 text-center text-xs font-semibold ${level.colors.tag}`}
                    >
                      {level.availability}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-sm sm:p-10">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-red-400">
                Besoin d&apos;un accompagnement
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Vous souhaitez déployer ces modules dans votre entreprise ?
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                PREVENSIA FORMATION peut vous accompagner pour structurer un
                parcours adapté à vos salariés, à vos opérations, à vos risques
                et à votre environnement réglementaire ou technique.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/demande-devis"
                  className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
                >
                  Demander un devis
                </Link>

                <Link
                  href="/connexion"
                  className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Accéder à mon espace
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

