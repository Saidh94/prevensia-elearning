import CourseJsonLd from "@/components/seo/CourseJsonLd";

export const metadata = {
  alternates: { canonical: "https://prevensia-formation.fr/formation-sprinkler" },
  title: "Formation exploitation sprinkler et référentiels techniques | PREVENSIA FORMATION",
  description:
    "Formation sprinkler pour exploitants, responsables techniques et entreprises : fonctionnement, exploitation, surveillance et référentiels EN 12845, APSAD R1, NFPA 13 et FM Global.",
};

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
    price: "490 € HT / apprenant",
    detail: "Formation exploitation avec cas pratiques, lecture de schéma, anomalies courantes et conduite à tenir. Accès e-learning inclus en préparation et révision.",
  },
  {
    format: "Présentiel renforcé - 2 jours",
    price: "990 € HT / apprenant",
    detail: "Parcours technique pour responsables techniques, maintenance, exploitation, sites industriels et logistiques. Inclut une visite terrain encadrée sur une installation sprinkler réelle, réalisée avec les apprenants sur un site logistique ou industriel. Conforme APSAD R1, EN 12845, NFPA 13. Accès e-learning inclus.",
  },
  {
    format: "Intra entreprise",
    price: "À partir de 1 800 € HT / jour",
    detail: "Tarif à ajuster selon le site, le référentiel attendu, les documents fournis et le niveau technique demandé. Adapté aux entrepôts et plateformes logistiques.",
  },
];

export default function FormationSprinkler() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-14 text-slate-900 sm:px-6 lg:px-8">
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
      <div className="mx-auto max-w-5xl">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
            PREVENSIA FORMATION
          </p>

          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
            Formation exploitation sprinkler et référentiels techniques
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            PREVENSIA FORMATION accompagné les exploitants, responsables techniques,
            responsables sécurité et gestionnaires de sites équipés d'installations
            sprinkler. La formation est encadrée en présentiel sur 1 ou 2 jours.
            La version 2 jours renforcée inclut une visite encadrée d'une
            installation sprinkler avec les apprenants. L'accès e-learning est
            inclus en support de préparation et de révision pour les apprenants
            inscrits.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/demande-devis"
              className="rounded-2xl bg-red-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-red-800"
            >
              Demander un devis
            </a>

            <a
              href="#programmes"
              className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-red-300 hover:text-red-700"
            >
              Voir les programmes
            </a>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-red-700">
              Modalités
            </p>
            <p className="mt-3 text-lg font-semibold">Présentiel 1 ou 2 jours, intra-entreprise</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Format adapté au niveau attendu : sensibilisation exploitation, référent technique
              ou accompagnement sur site. La 2 jours inclut une visite installation sprinkler.
              Support e-learning inclus pour les apprenants inscrits.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-red-700">
              Public
            </p>
            <p className="mt-3 text-lg font-semibold">Exploitants et responsables techniques</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Maintenance, sécurité, services généraux, exploitation bâtiment, sites industriels,
              plateformes logistiques et ERP équipés.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-red-700">
              Objectif
            </p>
            <p className="mt-3 text-lg font-semibold">Exploiter sans dégrader la protection</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Identifier les organes clés, comprendre les alarmes, suivre les essais et réagir
              correctement en cas d'anomalie ou d'indisponibilité.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold">
            Pourquoi former les équipes à l'exploitation sprinkler ?
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Une installation sprinkler n'est efficace que si elle reste disponible, surveillée
            et cohérente avec l'exploitation réelle du site. Une vanne laissée fermée, une zone
            de stockage modifiée, une tête masquée ou une indisponibilité non maîtrisée peuvent
            réduire fortement la protection attendue.
          </p>

          <p className="mt-4 leading-8 text-slate-700">
            La formation donne aux équipes les réflexes nécessaires pour dialoguer avec les
            mainteneurs, les assureurs, les bureaux d'études et les intervenants techniques,
            tout en gardant une lecture terrain des risques incendie.
          </p>
        </section>

        <section
          id="programmes"
          className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10"
        >
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
        </section>

        <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold">Tarifs indicatifs</h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-700">
            Les tarifs dépendent du format, de la profondeur technique et du besoin de lecture
            site. L'e-learning est présenté comme un support inclus pour les apprenants,
            pas comme une formation sprinkler autonome vendue seule.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {tarifs.map((item) => (
              <div key={item.format} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-semibold">{item.format}</h3>
                <p className="mt-2 text-xl font-bold text-red-700">{item.price}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">
              Une formation utile en environnement logistique et industriel
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              Le sprinkler est particulièrement sensible dans les entrepôts, plateformes
              logistiques, bâtiments industriels, locaux techniques et sites à forte continuité
              d'exploitation. La formation aide à comprendre ce qui doit être surveillé avant
              qu'un défaut d'organisation ne devienne un défaut de protection.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">
              Une approche pédagogique orientée terrain
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              Les apports techniques sont reliés aux situations réelles : poste de contrôle,
              essais, alarmes, vannes, réserve d'eau, travaux, stockage, consignes et gestion
              des indisponibilités.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold">Questions fréquentes sur la formation sprinkler</h2>

          <div className="mt-6">
            <details className="mb-4 rounded-xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold">
                À qui s'adresse la formation sprinkler ?
              </summary>
              <p className="mt-3 text-slate-700">
                Aux exploitants, responsables techniques, responsables sécurité, services
                maintenance et gestionnaires de sites équipés d'installations sprinkler.
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
                          Non. La formation sensibilise aux bons réflexes d'exploitation et
                aux référentiels techniques. La maintenance préventive et les essais
                périodiques restent à la charge d'un mainteneur qualifié et d'un
                contrat dédié.
              </p>
            </details>
          </div>
        </section>
      </div>
    </main>
  );
}
