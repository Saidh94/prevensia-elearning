import Link from "next/link";
import CourseJsonLd from "@/components/seo/CourseJsonLd";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata = {
  alternates: { canonical: "https://prevensia-formation.fr/formation-coordinateur-ssi" },
  title: "Formation Coordinateur SSI — Pilotage Système Sécurité Incendie | PREVENSIA",
  description:
    "Formation Coordinateur SSI : CCF, matrice de corrélation, dossier d'identité SSI, coordination des intervenants, ERP / IGH. Qualiopi. 7 jours en présentiel. Devis 48h.",
  openGraph: {
    title: "Formation Coordinateur SSI — NF S 61, ERP, IGH | PREVENSIA",
    description:
      "Formez votre coordinateur SSI : CCF, matrice de corrélation, dossier SSI, réception, exploitation. Architecture, réglementation ERP/IGH. Qualiopi. Intra ou inter-entreprise.",
    url: "https://prevensia-formation.fr/formation-coordinateur-ssi",
  },
  keywords: [
    "formation coordinateur SSI",
    "formation coordinateur système sécurité incendie",
    "formation pilotage SSI",
    "CCF coordinateur SSI",
    "matrice de corrélation SSI",
    "dossier identité SSI",
    "formation responsable SSI ERP IGH",
  ],
};

const faqItems = [
  {
    question: "Le titre de Coordinateur SSI est-il réglementairement obligatoire ?",
    answer:
      "Il n'existe pas, à ce jour, d'obligation réglementaire spécifique imposant une certification « Coordinateur SSI » comme c'est le cas pour le SSIAP. Cependant, la réglementation ERP (arrêté du 25 juin 1980), les règles IGH, le Code du travail et les normes NF S 61 imposent que les personnels chargés d'exploiter et de superviser un SSI soient compétents. La formation « Coordinateur SSI » répond à cette exigence de compétence documentée, en cohérence avec les recommandations du CNPP et des bureaux de contrôle.",
  },
  {
    question: "Quelle est la différence entre la formation Exploitation SSI et la formation Coordinateur SSI ?",
    answer:
      "La formation Exploitation SSI est destinée aux utilisateurs quotidiens du système (lire les signaux, réagir en cas d'alarme, appliquer les consignes). La formation Coordinateur SSI est destinée aux personnes qui pilotent l'ensemble du dispositif : rédiger le CCF et la matrice de corrélation, coordonner les installateurs lors des travaux, vérifier la conformité fonctionnelle du SSI, constituer le Dossier d'Identité SSI, gérer les non-conformités, assurer l'interface avec les bureaux de contrôle et les commissions de sécurité, et mettre à jour la documentation SSI après toute modification.",
  },
  {
    question: "À qui s'adresse la formation Coordinateur SSI ?",
    answer:
      "La formation s'adresse aux responsables techniques, responsables sécurité, chefs de service maintenance, directeurs techniques et gestionnaires de patrimoine qui ont en charge la supervision globale du SSI d'un ou plusieurs établissements ERP, IGH, industriels ou logistiques.",
  },
  {
    question: "La formation couvre-t-elle la réglementation ERP et IGH ?",
    answer:
      "Oui. La formation intègre les exigences réglementaires ERP (arrêté du 25 juin 1980 et ses modificatifs), IGH (arrêté du 30 décembre 2011), Code du travail, et les normes de la série NF S 61 (931, 932, 933) applicables aux SSI. Les obligations de vérification périodique, la relation avec les organismes de contrôle et la commission de sécurité sont abordées.",
  },
  {
    question: "Quelle est la durée de la formation ?",
    answer:
      "La formation Coordinateur SSI se déroule sur 7 jours de présentiel, avec un parcours e-learning autonome inclus (à compléter avant la session présentielle). 7 jours de présentiel intensif incluant des cas pratiques, mises en situation et travaux sur des dossiers réels. Format inter et intra-entreprise disponible.",
  },
];

const programme = [
  {
    titre: "Module 1 — Rôle et responsabilités du Coordinateur SSI",
    detail:
      "Définition du rôle CSSI (NF S 61-931/932) : chef d'orchestre du SSI, indépendant des installateurs, mandaté par le maître d'ouvrage. Responsabilités civile et pénale. Interface avec bureaux de contrôle, commissions de sécurité, SDIS.",
    duree: "E-learning — 2h",
  },
  {
    titre: "Module 2 — Architecture et fonctionnement des SSI",
    detail:
      "Catégories SSI A→E. SDI, CMSI, UGA, DAS (portes coupe-feu, clapets, volets), DCT/DCM, désenfumage, extinction automatique, interfaces ascenseurs et process. Lecture des plans SSI et schémas de principe.",
    duree: "E-learning — 3h",
  },
  {
    titre: "Module 3 — Réglementation applicable",
    detail:
      "Arrêté ERP du 25 juin 1980, arrêté IGH du 30 décembre 2011, Code du travail, ICPE. Normes NF S 61-931/932/933/970. Registre de sécurité, obligations documentaires, rôle des organismes de contrôle.",
    duree: "E-learning — 2h30",
  },
  {
    titre: "Module 4 — CCF et Matrice de Corrélation",
    detail:
      "Cahier des Charges Fonctionnel SSI (CCF) : document obligatoire définissant fonctions, scénarios de mise en sécurité et exigences normatives. Matrice de corrélation : qui déclenche quoi, dans quel ordre, avec quelles temporisations. Dossier d'Identité SSI.",
    duree: "E-learning — 2h30",
  },
  {
    titre: "Module 5 — Coordination des intervenants et suivi des travaux",
    detail:
      "Coordination des corps d'état (installateurs SSI, électriciens, ascensoristes, climaticiens, désenfumage). Gestion des travaux impactant le SSI, permis de feu, mesures compensatoires, mise à jour du CCF et de la matrice après modification.",
    duree: "E-learning — 2h",
  },
  {
    titre: "Présentiel — Phase conception : CCF et matrice sur dossiers réels",
    detail:
      "Analyse de besoins de sécurité sur bâtiments ERP/IGH réels. Rédaction d'un CCF, élaboration d'une matrice de corrélation, choix de l'architecture SSI (catégorie, équipements, interfaces). Cas pratiques multi-établissements.",
    duree: "Présentiel — 14h (2 jours)",
  },
  {
    titre: "Présentiel — Phase réalisation et réception",
    detail:
      "Vérification de conformité des installations (câblage, interfaces, DAS, désenfumage). Suivi des essais fonctionnels (détection, mise en sécurité, temporisations, report d'information). Organisation des essais de réception, rédaction du Dossier d'Identité SSI, présentation à la commission de sécurité.",
    duree: "Présentiel — 21h (3 jours)",
  },
  {
    titre: "Présentiel — Phase exploitation et situations dégradées",
    detail:
      "Mise à jour du dossier SSI après modification. Assistance au chef d'établissement : comprendre les scénarios, gérer les alarmes, préparer les commissions de sécurité. Gestion des non-conformités, levée de réserves, communication avec bureaux de contrôle et SDIS. Mise en situation complète + évaluation finale.",
    duree: "Présentiel — 14h (2 jours)",
  },
];

const tarifs = [
  {
    format: "Inter-entreprise — 7 jours en salle",
    prix: "1 590 € HT / apprenant",
    detail:
      "7 jours de présentiel intensif en salle + e-learning préparatoire inclus. Maximum 8 participants. Études de cas sur dossiers ERP/IGH/ICPE réels. Attestation Qualiopi incluse.",
    badge: "Recommandé",
  },
  {
    format: "Intra-entreprise — 7 jours sur site",
    prix: "À partir de 2 900 € HT / groupe",
    detail:
      "7 jours de présentiel sur vos locaux ou un centre partenaire. Programme calé sur vos installations, vos référentiels réglementaires et vos enjeux. E-learning préparatoire inclus par participant. Jusqu'à 8 participants.",
    badge: null,
  },
  {
    format: "E-learning préparatoire",
    prix: "Inclus avec la formation",
    detail:
      "Le module e-learning Coordinateur SSI est inclus gratuitement pour tous les participants inscrits en session présentielle. Il couvre les fondamentaux (NF S 61-931/932/933/970, réglementation ERP/IGH/ICPE) avant les 7 jours de mise en pratique.",
    badge: null,
  },
];

export default function FormationCoordinateurSSI() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Formation Coordinateur SSI", url: "/formation-coordinateur-ssi" },
        ]}
      />
      <FaqJsonLd items={faqItems} />
      <CourseJsonLd
        name="Formation Coordinateur SSI"
        description="Formation Coordinateur SSI : CCF, matrice de corrélation, dossier d'identité SSI, coordination des installateurs, réception et exploitation du SSI. ERP/IGH. Qualiopi. 7 jours en présentiel."
        courseCode="COORD-SSI"
        url="/formation-coordinateur-ssi"
        timeRequired="P7D"
        educationalLevel="Advanced"
        audience="Responsables techniques, responsables sécurité, chefs de service maintenance, gestionnaires de patrimoine"
        educationalCredentialAwarded="Attestation de formation Prevensia — Coordinateur SSI"
      />

      {/* Hero */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <nav aria-label="Fil d'Ariane" className="mb-6 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Formation Coordinateur SSI</span>
          </nav>

          <p className="inline-flex rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-orange-300">
            Principalement en salle · NF S 61-931 / 932 / 933 / 970 · ERP · IGH · ICPE
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Formation{" "}
            <span className="text-orange-400">Coordinateur SSI</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Formation au pilotage du Système de Sécurité Incendie — <strong className="text-white">dispensée principalement en salle</strong>,
            avec des cas pratiques sur dossiers réels. Réglementations ERP (arrêté 25 juin 1980),
            IGH, ICPE, Code du travail, normes NF S 61-931 / 932 / 933 / 970.
            E-learning préparatoire inclus pour optimiser les 7 jours de présentiel intensif.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-sm text-amber-300">
            <span className="font-semibold">ℹ</span>
            <span>
              Aucune obligation réglementaire spécifique n&apos;impose ce titre à ce jour —
              la formation répond néanmoins à une exigence de compétence documentée reconnue
              par les commissions de sécurité et les bureaux de contrôle.
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/demande-devis?type=coordinateur-ssi"
              className="rounded-xl bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700 transition-colors"
            >
              Demander un devis
            </Link>
            <Link
              href="/elearning"
              className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Accéder à l&apos;e-learning
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
            <span>✓ NF S 61-931 / 932 / 933 / 970</span>
            <span>✓ ERP / IGH / IMH / ICPE / Habitation</span>
            <span>✓ Arrêté 25/06/1980 · CCH · Code du travail</span>
            <span>✓ E-learning préparatoire inclus</span>
            <span>✓ Cas pratiques sur dossiers réels</span>
            <span>✓ Qualiopi</span>
          </div>
        </div>
      </section>

      {/* Infos clés */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-700">Durée</p>
              <p className="mt-2 text-lg font-bold">7 jours en salle</p>
              <p className="mt-1 text-sm text-slate-600">+ e-learning préparatoire inclus</p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-700">Modalités</p>
              <p className="mt-2 text-lg font-bold">Présentiel</p>
              <p className="mt-1 text-sm text-slate-600">Principalement en salle — inter-entreprise ou intra sur site</p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-700">Niveau</p>
              <p className="mt-2 text-lg font-bold">Avancé</p>
              <p className="mt-1 text-sm text-slate-600">Pré-requis : bases en exploitation SSI recommandées</p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-700">Participants</p>
              <p className="mt-2 text-lg font-bold">Max 8 / session</p>
              <p className="mt-1 text-sm text-slate-600">Groupes restreints pour un travail sur dossiers réels</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi un Coordinateur SSI */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Pourquoi former un Coordinateur SSI ?</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <p className="leading-8 text-slate-700">
                Dans les ERP, IGH et sites industriels, le SSI est un système complexe dont le
                bon fonctionnement repose sur une supervision organisée. Entre les installateurs
                qui interviennent, les vérifications périodiques obligatoires, les travaux qui
                modifient le système et les exigences des commissions de sécurité, un pilotage
                structuré est indispensable.
              </p>
              <p className="mt-4 leading-8 text-slate-700">
                Le rôle de Coordinateur SSI répond à ce besoin. Il assure la cohérence entre
                les interventions, la conformité documentaire et la disponibilité permanente
                du système — autant d&apos;éléments que les bureaux de contrôle et les SDIS
                examinent lors des visites.
              </p>
            </div>
            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6">
              <h3 className="font-bold text-orange-900">Ce que couvre le rôle</h3>
              <ul className="mt-4 space-y-2 text-sm text-orange-900">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-orange-600">✓</span>
                  Supervision globale du SSI (SDI, CMSI, UGA, DAS)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-orange-600">✓</span>
                  Coordination des installateurs et corps d&apos;état intervenants sur le SSI
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-orange-600">✓</span>
                  Planification et suivi des vérifications réglementaires
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-orange-600">✓</span>
                  Gestion des travaux impactant le SSI
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-orange-600">✓</span>
                  Interface avec commission de sécurité, SDIS, bureau de contrôle
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-orange-600">✓</span>
                  Tenue du registre de sécurité et du carnet de bord SSI
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Programme */}
      <section id="programme" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Programme détaillé</h2>
          <p className="mt-3 text-slate-600">
            Parcours hybride : e-learning préparatoire en autonomie + présentiel intensif.
          </p>

          <div className="mt-8 space-y-4">
            {/* E-learning */}
            <div className="rounded-2xl border-2 border-orange-200 bg-orange-50 px-6 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-700">
                Phase 1 — E-learning préparatoire (12 à 15 heures)
              </p>
            </div>
            {programme.slice(0, 5).map((item) => (
              <div key={item.titre} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-slate-900">{item.titre}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700">
                    {item.duree}
                  </span>
                </div>
              </div>
            ))}

            {/* Présentiel */}
            <div className="mt-6 rounded-2xl border-2 border-slate-300 bg-slate-100 px-6 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-700">
                Phase 2 — Présentiel intensif (3 × 7 h)
              </p>
            </div>
            {programme.slice(5).map((item) => (
              <div key={item.titre} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-slate-900">{item.titre}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-600">
                    {item.duree}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section id="tarifs" className="bg-slate-950 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-400">Tarifs</p>
          <h2 className="mt-3 text-2xl font-bold text-white">
            Formation Coordinateur SSI — grille tarifaire 2025
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-300">
            Toutes nos formations sont certifiées Qualiopi et finançables OPCO.
            Pour les entreprises éligibles au FNE-Formation, nous accompagnons le montage du dossier.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {tarifs.map((item) => (
              <div
                key={item.format}
                className={`rounded-2xl p-7 relative ${
                  item.badge
                    ? "border-2 border-orange-500 bg-slate-900"
                    : "border border-slate-700 bg-slate-900"
                }`}
              >
                {item.badge && (
                  <span className="absolute -top-3 left-6 rounded-full bg-orange-600 px-3 py-1 text-xs font-semibold text-white">
                    {item.badge}
                  </span>
                )}
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                  {item.format}
                </p>
                <p className="mt-4 text-2xl font-bold text-white">{item.prix}</p>
                <p className="mt-4 text-sm leading-6 text-slate-300">{item.detail}</p>
                <Link
                  href="/demande-devis?type=coordinateur-ssi"
                  className={`mt-6 block rounded-xl px-4 py-2 text-center text-sm font-semibold transition-colors ${
                    item.badge
                      ? "bg-orange-600 text-white hover:bg-orange-700"
                      : "border border-slate-600 text-slate-200 hover:bg-slate-800"
                  }`}
                >
                  Demander un devis
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-slate-400">
            💡 Pour un groupe de 4 à 8 personnes sur le même site, l&apos;intra est souvent
            plus économique et permet d&apos;adapter le contenu à vos installations réelles.
          </p>
        </div>
      </section>

      {/* Bon à savoir — statut réglementaire */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-8">
            <h2 className="text-xl font-bold text-amber-900">
              Statut réglementaire du Coordinateur SSI
            </h2>
            <p className="mt-4 leading-8 text-amber-800">
              À ce jour, aucune réglementation française n&apos;impose une certification spécifique
              intitulée « Coordinateur SSI » (contrairement au SSIAP, régi par l&apos;arrêté du
              2 mai 2005). Le terme est utilisé dans les normes NF S 61-932 et NF S 61-933
              pour désigner la personne chargée de coordonner les intervenants et de veiller
              à la conformité et à la disponibilité du SSI — sans être elle-même prestataire de maintenance.
            </p>
            <p className="mt-4 leading-8 text-amber-800">
              En pratique, les commissions de sécurité, les bureaux de contrôle et les assureurs
              vérifient que l&apos;exploitant dispose d&apos;un référent SSI compétent et documenté.
              La formation PREVENSIA répond à cette exigence de compétence, en s&apos;alignant
              sur les recommandations du CNPP et les attentes des organismes de contrôle.
            </p>
            <p className="mt-4 text-sm text-amber-700 font-medium">
              ℹ PREVENSIA suit l&apos;évolution réglementaire et mettra à jour ce programme
              si une obligation formelle venait à être instaurée.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Questions fréquentes</h2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <details key={item.question} className="rounded-xl border border-slate-200 bg-white p-5">
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

      {/* Formations associées */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Parcours complémentaires recommandés</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Link href="/formation-ssi" className="rounded-2xl border border-slate-200 p-5 transition hover:border-orange-300 hover:shadow-sm">
              <p className="font-semibold">Formation Exploitation SSI</p>
              <p className="mt-1 text-sm text-slate-500">Comprendre et exploiter le SSI au quotidien</p>
            </Link>
            <Link href="/formation-sprinkler" className="rounded-2xl border border-slate-200 p-5 transition hover:border-orange-300 hover:shadow-sm">
              <p className="font-semibold">Formation Exploitation Sprinkler</p>
              <p className="mt-1 text-sm text-slate-500">Surveillance et référentiels EN 12845 / APSAD R1</p>
            </Link>
            <Link href="/formation-ssiap1" className="rounded-2xl border border-slate-200 p-5 transition hover:border-orange-300 hover:shadow-sm">
              <p className="font-semibold">Formation SSIAP1</p>
              <p className="mt-1 text-sm text-slate-500">Agent de sécurité incendie et assistance à personnes</p>
            </Link>
            <Link href="/formation-sst" className="rounded-2xl border border-slate-200 p-5 transition hover:border-orange-300 hover:shadow-sm">
              <p className="font-semibold">Formation SST</p>
              <p className="mt-1 text-sm text-slate-500">Sauveteur Secouriste du Travail</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-orange-700 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold">
            Formez votre Coordinateur SSI avec PREVENSIA
          </h2>
          <p className="mt-3 text-orange-100">
            Organisme certifié Qualiopi · Financement OPCO et FNE-Formation · Devis sous 48 h
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/demande-devis?type=coordinateur-ssi"
              className="rounded-xl bg-white px-6 py-3 font-semibold text-orange-700 hover:bg-orange-50 transition-colors"
            >
              Demander un devis
            </Link>
            <Link
              href="/elearning"
              className="rounded-xl border border-white/40 bg-white/10 px-6 py-3 font-semibold hover:bg-white/20 transition-colors"
            >
              Voir les modules e-learning
            </Link>
          </div>
          <p className="mt-6 text-sm text-orange-200">
            <a href="tel:+33189629492" className="text-white underline">01 89 62 94 92</a>
            {" · "}
            <a href="mailto:contact@prevensia-formation.fr" className="text-white underline">contact@prevensia-formation.fr</a>
          </p>
        </div>
      </section>
    </main>
  );
}
