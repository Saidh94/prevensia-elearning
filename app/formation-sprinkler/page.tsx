import Link from "next/link";
import CourseJsonLd from "@/components/seo/CourseJsonLd";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

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
    format: "Accès e-learning inclus",
    price: "Inclus avec la formation 1 ou 2 jours",
    detail: "Support de préparation et de révision pour les apprenants inscrits aux formations encadrées 1 ou 2 jours. Non vendu seul.",
  },
  {
    format: "Présentiel - 1 jour",
    price: "590 € HT / apprenant",
    detail: "Formation exploitation avec cas pratiques, lecture de schéma, anomalies courantes et conduite à tenir. Accès e-learning inclus en préparation et révision.",
  },
  {
    format: "Présentiel renforcé - 2 jours",
    price: "1 190 € HT / apprenant",
    detail: "Parcours technique pour responsables techniques, maintenance, exploitation, sites industriels et logistiques. Inclut une visite terrain encadrée sur une installation sprinkler réelle, réalisée avec les apprenants sur un site logistique ou industriel. Conforme APSAD R1, EN 12845, NFPA 13. Accès e-learning inclus.",
  },
  {
    format: "Intra entreprise",
    price: "À partir de 2 200 € HT / jour",
    detail: "Tarif à ajuster selon le site, le référentiel attendu, les documents fournis et le niveau technique demandé. Adapté aux entrepôts et plateformes logistiques.",
  },
];

export default function FormationSprinkler() {
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

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Tarifs indicatifs</h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-700">
            Les tarifs dépendent du format, de la profondeur technique et du besoin de lecture
            site. L&apos;e-learning est présenté comme un support inclus pour les apprenants,
            pas comme une formation sprinkler autonome vendue seule.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {tarifs.map((item) => (
              <div key={item.format} className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="text-lg font-semibold">{item.format}</h3>
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
    </main>
  );

}
