import Link from "next/link";
import CourseJsonLd from "@/components/seo/CourseJsonLd";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import {
  getUpcomingSessions,
  formatSessionDate,
  placesRestantes,
} from "@/lib/formations/sessions";

export const metadata = {
  alternates: { canonical: "https://prevensia-formation.fr/formation-sprinkler" },
  title: "Formation Exploitation Sprinkler — EN 12845, APSAD R1 | PREVENSIA",
  description:
    "Formation sprinkler pour responsables techniques : fonctionnement, surveillance, EN 12845, APSAD R1, NFPA 13. Qualiopi. Intra-entreprise. Devis 48h.",
  openGraph: {
    title: "Formation Exploitation Sprinkler — EN 12845, APSAD R1, NFPA 13",
    description:
      "Formation sprinkler pour responsables techniques : EN 12845, APSAD R1, NFPA 13. Visite installation incluse (version 2 jours). Qualiopi.",
    url: "https://prevensia-formation.fr/formation-sprinkler",
  },
  keywords: [
    "formation sprinkler",
    "formation exploitation sprinkler",
    "formation EN 12845",
    "formation APSAD R1",
    "formation NFPA 13 sprinkler",
    "formation responsable technique sprinkler",
  ],
};

const faqItemsSprinkler = [
  {
    question: "À qui s'adresse la formation exploitation sprinkler ?",
    answer:
      "La formation s'adresse aux exploitants de bâtiments, responsables techniques, agents de maintenance, responsables sécurité incendie et tout personnel gérant un site équipé d'une installation sprinkler (entrepôt logistique, site industriel, ERP, centre commercial).",
  },
  {
    question: "Quelle est la différence entre EN 12845, APSAD R1 et NFPA 13 ?",
    answer:
      "EN 12845 est la norme européenne de référence pour les systèmes sprinkler. APSAD R1 est la règle française de certification publiée par le CNPP, souvent exigée par les assureurs. NFPA 13 est la norme américaine, applicable sur certains sites avec exigences assureur FM Global ou pour des installations conçues selon le standard américain.",
  },
  {
    question: "Pourquoi former les équipes alors que la maintenance est assurée par un prestataire ?",
    answer:
      "Le prestataire assure la maintenance préventive et corrective, mais c'est l'exploitant qui surveille l'installation au quotidien, détecte les anomalies opérationnelles (vanne fermée, zone modifiée, alarme non traitée) et coordonne les interventions. Une formation permet d'éviter les erreurs d'exploitation qui réduisent la protection réelle.",
  },
  {
    question: "La formation 2 jours inclut-elle réellement une visite d'installation ?",
    answer:
      "Oui. La formule 2 jours renforcée inclut une visite encadrée d'une installation sprinkler réelle, réalisée avec les apprenants sur un site logistique ou industriel partenaire. Cette approche terrain est unique et directement applicable sur vos propres sites.",
  },
];

const programme = [
  {
    title: "Fonctionnement général d'une installation sprinkler",
    text: "Rôle de l'installation, source d'eau, poste de contrôle, canalisations, têtes sprinkler, déclenchement thermique et logique de protection automatique.",
  },
  {
    title: "Exploitation et surveillance quotidienne",
    text: "Points de vigilance, essais périodiques, suivi des vannes, alarmes, indisponibilités, registre d'exploitation et coordination avec la maintenance.",
  },
  {
    title: "Référentiels techniques applicables",
    text: "Lecture opérationnelle des exigences EN 12845, APSAD R1, NFPA 13 et FM Global selon le type de site, les exigences assureur et le niveau de risque.",
  },
  {
    title: "Risques d'exploitation et erreurs fréquentes",
    text: "Stockage modifié, tête masquée, vanne fermée, source d'eau indisponible, travaux non coordonnés, défaut d'alarme ou contournement temporaire mal maîtrisé.",
  },
];

const tarifs = [
  {
    format: "1 jour — 1 à 3 participants",
    price: "590 € HT / participant",
    detail: "Formation exploitation avec cas pratiques, lecture de schéma, anomalies courantes et conduite à tenir. Accès e-learning inclus en préparation et révision. Session inter à Noisy-le-Grand (93).",
    badge: null,
  },
  {
    format: "1 jour — groupe 4 participants et +",
    price: "490 € HT / participant",
    detail: "Même contenu — tarif dégressif à partir de 4 inscrits sur la même session. Accès e-learning inclus.",
    badge: "Économique",
  },
  {
    format: "2 jours renforcé — 1 à 3 participants",
    price: "1 190 € HT / participant",
    detail: "Parcours complet pour responsables techniques et maintenance. Inclut une visite terrain encadrée sur une installation sprinkler réelle. Conforme APSAD R1, EN 12845, NFPA 13. Accès e-learning inclus.",
    badge: null,
  },
  {
    format: "2 jours renforcé — groupe 4 participants et +",
    price: "990 € HT / participant",
    detail: "Même contenu — tarif dégressif à partir de 4 inscrits sur la même session. Visite installation incluse. Accès e-learning inclus.",
    badge: "Économique",
  },
  {
    format: "Intra-entreprise IDF — 1 jour",
    price: "2 200 € HT / jour",
    detail: "Formation sur votre site en Île-de-France. Tarif forfaitaire, ajustable selon référentiel, documents et niveau technique. Adapté aux entrepôts et plateformes logistiques.",
    badge: null,
  },
  {
    format: "Intra-entreprise IDF — 2 jours",
    price: "4 200 € HT / 2 jours",
    detail: "Parcours complet sur votre site IDF, avec visite installation. Tarif forfaitaire.",
    badge: null,
  },
  {
    format: "Hors Île-de-France",
    price: "Sur devis",
    detail: "Déplacement formateur en sus. Contactez-nous pour un devis adapté à votre région et votre site.",
    badge: "Sur devis",
  },
];

export default function FormationSprinkler() {
  const sessions1j = getUpcomingSessions("sprinkler").filter((s) => s.format === "1j");
  const sessions2j = getUpcomingSessions("sprinkler").filter((s) => s.format === "2j");

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Formation sprinkler", url: "/formation-sprinkler" },
        ]}
      />
      <FaqJsonLd items={faqItemsSprinkler} />
      <CourseJsonLd
        name="Formation exploitation sprinkler"
        description="Formation sprinkler pour exploitants et responsables techniques : fonctionnement, exploitation, surveillance et référentiels EN 12845, APSAD R1, NFPA 13."
        courseCode="SPRINKLER"
        url="/formation-sprinkler"
        timeRequired="P1D"
        educationalLevel="Intermediate"
        audience="Exploitants, responsables techniques, maintenance, sécurité"
        educationalCredentialAwarded="Attestation de formation Prevensia"
      />

      {/* Hero */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <nav aria-label="Fil d'Ariane" className="mb-6 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Formation sprinkler</span>
          </nav>

          <p className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
            Exploitation sprinkler · EN 12845 / APSAD R1
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Formation{" "}
            <span className="text-cyan-400">Exploitation Sprinkler</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            PREVENSIA FORMATION accompagne les exploitants, responsables techniques,
            responsables sécurité et gestionnaires de sites équipés d&apos;installations
            sprinkler. La formation est encadrée en présentiel sur 1 ou 2 jours.
            La version 2 jours renforcée inclut une visite encadrée d&apos;une
            installation sprinkler avec les apprenants. L&apos;accès e-learning est
            inclus en support de préparation et de révision pour les apprenants
            inscrits.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/demande-devis?type=sprinkler"
              className="rounded-xl bg-cyan-700 px-6 py-3 font-semibold text-white hover:bg-cyan-800 transition-colors"
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
            <span>✓ EN 12845</span>
            <span>✓ APSAD R1</span>
            <span>✓ NFPA 13</span>
            <span>✓ Visite installation (2 jours)</span>
            <span>✓ Qualiopi</span>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-700">
                Modalités
              </p>
              <p className="mt-3 text-lg font-semibold">Présentiel 1 ou 2 jours, intra-entreprise</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Format adapté au niveau attendu : sensibilisation exploitation, référent technique
                ou accompagnement sur site. La 2 jours inclut une visite installation sprinkler.
                Support e-learning inclus pour les apprenants inscrits.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-700">
                Public
              </p>
              <p className="mt-3 text-lg font-semibold">Exploitants et responsables techniques</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Maintenance, sécurité, services généraux, exploitation bâtiment, sites industriels,
                plateformes logistiques et ERP équipés.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-700">
                Objectif
              </p>
              <p className="mt-3 text-lg font-semibold">Exploiter sans dégrader la protection</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Identifier les organes clés, comprendre les alarmes, suivre les essais et réagir
                correctement en cas d&apos;anomalie ou d&apos;indisponibilité.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">
            Pourquoi former les équipes à l&apos;exploitation sprinkler ?
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Une installation sprinkler n&apos;est efficace que si elle reste disponible, surveillée
            et cohérente avec l&apos;exploitation réelle du site. Une vanne laissée fermée, une zone
            de stockage modifiée, une tête masquée ou une indisponibilité non maîtrisée peuvent
            réduire fortement la protection attendue.
          </p>

          <p className="mt-4 leading-8 text-slate-700">
            La formation donne aux équipes les réflexes nécessaires pour dialoguer avec les
            mainteneurs, les assureurs, les bureaux d&apos;études et les intervenants techniques,
            tout en gardant une lecture terrain des risques incendie.
          </p>
        </div>
      </section>

      <section
        id="programmes"
        className="bg-white py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">
            Programme de la formation exploitation sprinkler
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {programme.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sessions planifiées */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Prochaines sessions inter-entreprises</h2>
          <p className="mt-3 text-slate-600 max-w-2xl">
            Les sessions sont ouvertes à partir de <strong>4 participants</strong>. Réservez votre place —
            nous confirmons la session par email dès que le groupe est constitué.
            Session à Noisy-le-Grand (93). <strong>Hors IDF :</strong> sur devis.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-cyan-700">Formation 1 jour</h3>
              {sessions1j.length === 0 ? (
                <p className="text-slate-500 text-sm">Aucune session planifiée — contactez-nous.</p>
              ) : (
                <div className="flex flex-col gap-3">
                  {sessions1j.map((s) => {
                    const places = placesRestantes(s);
                    return (
                      <div key={s.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 flex items-center justify-between gap-4">
                        <div>
                          <p className="font-semibold">{formatSessionDate(s.dateStart)}</p>
                          <p className="mt-1 text-sm text-slate-500">{s.lieu}</p>
                          <p className="mt-1 text-xs text-slate-400">
                            {places <= 2 ? (
                              <span className="text-orange-600 font-medium">Plus que {places} place{places > 1 ? "s" : ""}</span>
                            ) : (
                              <span>{places} places disponibles</span>
                            )}
                          </p>
                        </div>
                        <Link
                          href={`/demande-devis?type=sprinkler&session=${s.id}&date=${s.dateStart}`}
                          className="shrink-0 rounded-xl bg-cyan-700 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-800 transition-colors"
                        >
                          Réserver
                        </Link>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-cyan-700">Formation 2 jours</h3>
              {sessions2j.length === 0 ? (
                <p className="text-slate-500 text-sm">Aucune session planifiée — contactez-nous.</p>
              ) : (
                <div className="flex flex-col gap-3">
                  {sessions2j.map((s) => {
                    const places = placesRestantes(s);
                    return (
                      <div key={s.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 flex items-center justify-between gap-4">
                        <div>
                          <p className="font-semibold">
                            {formatSessionDate(s.dateStart)} — {formatSessionDate(s.dateEnd)}
                          </p>
                          <p className="mt-1 text-sm text-slate-500">{s.lieu}</p>
                          <p className="mt-1 text-xs text-slate-400">
                            {places <= 2 ? (
                              <span className="text-orange-600 font-medium">Plus que {places} place{places > 1 ? "s" : ""}</span>
                            ) : (
                              <span>{places} places disponibles</span>
                            )}
                          </p>
                        </div>
                        <Link
                          href={`/demande-devis?type=sprinkler&session=${s.id}&date=${s.dateStart}`}
                          className="shrink-0 rounded-xl bg-cyan-700 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-800 transition-colors"
                        >
                          Réserver
                        </Link>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Besoin d&apos;une date hors planning ou d&apos;une formation sur votre site ?{" "}
            <Link href="/demande-devis?type=sprinkler" className="text-cyan-700 underline underline-offset-2">
              Demandez un devis intra-entreprise
            </Link>.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Tarifs</h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-700">
            Tarifs inter-entreprises en Île-de-France. Tarif dégressif à partir de 4 inscrits
            sur la même session. L&apos;e-learning est inclus pour tous les participants.
            <strong> Hors Île-de-France :</strong> sur devis (déplacement formateur en sus).
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {tarifs.map((item) => (
              <div key={item.format} className="rounded-2xl border border-slate-200 bg-white p-5 relative">
                {item.badge && (
                  <span className={`absolute top-4 right-4 rounded-full px-2 py-0.5 text-xs font-semibold ${
                    item.badge === "Sur devis" ? "bg-slate-100 text-slate-600" : "bg-cyan-100 text-cyan-700"
                  }`}>
                    {item.badge}
                  </span>
                )}
                <h3 className="text-base font-semibold pr-16">{item.format}</h3>
                <p className="mt-2 text-xl font-bold text-cyan-700">{item.price}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
              <h2 className="text-2xl font-bold">
                Une formation utile en environnement logistique et industriel
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Le sprinkler est particulièrement sensible dans les entrepôts, plateformes
                logistiques, bâtiments industriels, locaux techniques et sites à forte continuité
                d&apos;exploitation. La formation aide à comprendre ce qui doit être surveillé avant
                qu&apos;un défaut d&apos;organisation ne devienne un défaut de protection.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
              <h2 className="text-2xl font-bold">
                Une approche pédagogique orientée terrain
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Les apports techniques sont reliés aux situations réelles : poste de contrôle,
                essais, alarmes, vannes, réserve d&apos;eau, travaux, stockage, consignes et gestion
                des indisponibilités.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Questions fréquentes sur la formation sprinkler</h2>

          <div className="mt-6">
            <details className="mb-4 rounded-xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold">
                À qui s&apos;adresse la formation sprinkler ?
              </summary>
              <p className="mt-3 text-slate-700">
                Aux exploitants, responsables techniques, responsables sécurité, services
                maintenance et gestionnaires de sites équipés d&apos;installations sprinkler.
              </p>
            </details>

            <details className="mb-4 rounded-xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold">
                Quels référentiels peuvent être abordés ?
              </summary>
              <p className="mt-3 text-slate-700">
                Les grands principes EN 12845, APSAD R1, NFPA 13 et FM Global peuvent être
                abordés selon le niveau attendu et le contexte du site.
              </p>
            </details>

            <details className="mb-4 rounded-xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold">
                La formation remplace-t-elle la maintenance réglementaire ?
              </summary>
              <p className="mt-3 text-slate-700">
                Non. La formation sensibilise aux bons réflexes d&apos;exploitation et
                aux référentiels techniques. La maintenance préventive et les essais
                périodiques restent à la charge d&apos;un mainteneur qualifié et d&apos;un
                contrat dédié.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Bonus SSIAP1 e-learning */}
      <section className="bg-green-50 border-y border-green-200 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">
                🎁 Inclus avec votre formation Sprinkler
              </p>
              <h3 className="mt-2 text-lg font-bold text-green-900">
                Module e-learning SSIAP1 offert — Préparation théorique à la formation et à l&apos;examen
              </h3>
              <p className="mt-2 text-sm leading-6 text-green-800">
                Chaque apprenant inscrit à la formation Sprinkler PREVENSIA reçoit gratuitement l&apos;accès
                au module e-learning de préparation SSIAP1 (2h30–3h) : classes de feux, extincteurs, SSI,
                procédures d&apos;évacuation ERP et cadre réglementaire. Un bonus pour renforcer la culture
                sécurité incendie de vos équipes — et faciliter la préparation à l&apos;épreuve QCM SSIAP1.
              </p>
            </div>
            <Link
              href="/elearning"
              className="shrink-0 rounded-xl border border-green-400 bg-white px-4 py-2 text-sm font-semibold text-green-700 hover:bg-green-100 transition-colors"
            >
              Accéder au module e-learning →
            </Link>
          </div>
        </div>
      </section>

      {/* Autres formations */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900">Autres formations PREVENSIA</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/formation-ssi" className="rounded-2xl border border-slate-200 p-5 transition hover:border-cyan-300 hover:shadow-sm">
              Formation Exploitation SSI
            </Link>
            <Link href="/formation-coordinateur-ssi" className="rounded-2xl border border-slate-200 p-5 transition hover:border-cyan-300 hover:shadow-sm">
              Formation Coordination SSI — Pilotage &amp; référentiels
            </Link>
            <Link href="/formation-h0b0" className="rounded-2xl border border-slate-200 p-5 transition hover:border-cyan-300 hover:shadow-sm">
              Habilitation électrique H0B0 — 100 % e-learning
            </Link>
          </div>
        </div>
      </section>
    </main>
  );

}
