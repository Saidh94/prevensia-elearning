import CourseJsonLd from "@/components/seo/CourseJsonLd";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata = {
  alternates: { canonical: "https://prevensia-formation.fr/formation-securite-incendie" },
  title: "Formation Sécurité Incendie Entreprise — Extincteurs EPI | PREVENSIA",
  description:
    "Formation incendie en entreprise : extincteurs, guide-file, serre-file, équipier 1ère intervention. Intra partout en France. Qualiopi. Devis 48h.",
  openGraph: {
    title: "Formation Sécurité Incendie — Extincteurs, Guide-File, EPI",
    description:
      "Formation incendie entreprise : extincteurs, guide-file, serre-file, équipier 1ère intervention. Qualiopi. Intra France entière. Devis 48h.",
    url: "https://prevensia-formation.fr/formation-securite-incendie",
  },
  keywords: [
    "formation sécurité incendie",
    "formation manipulation extincteur",
    "formation guide-file serre-file",
    "équipier première intervention incendie",
    "formation évacuation incendie entreprise",
    "organisme formation incendie Qualiopi",
  ],
};

const faqItemsIncendie = [
  {
    question: "Mon entreprise est-elle obligée de former à la sécurité incendie ?",
    answer:
      "Oui. L'article R.4227-39 du Code du travail impose un exercice d'évacuation au moins tous les six mois. Plus largement, la formation à la manipulation des extincteurs et au rôle de guide-file / serre-file est attendue dans le cadre de l'évaluation des risques (DUERP).",
  },
  {
    question: "Quelle est la différence entre guide-file, serre-file et EPI ?",
    answer:
      "Le guide-file ouvre la marche et conduit les occupants vers la sortie. Le serre-file ferme la marche, vérifie qu'aucun occupant n'est resté dans les locaux et referme les portes coupe-feu. L'équipier de première intervention (EPI) peut tenter d'éteindre un début d'incendie avec les moyens disponibles, dans un cadre maîtrisé.",
  },
  {
    question: "Combien de salariés faut-il former à la sécurité incendie ?",
    answer:
      "La règle pratique : un guide-file et un serre-file par étage et par zone, avec une rotation pour couvrir absences et congés. Pour la manipulation des extincteurs, on vise au minimum 10 % des effectifs, à recycler tous les 2 à 3 ans.",
  },
  {
    question: "Les sessions peuvent-elles être organisées directement sur notre site ?",
    answer:
      "Oui. Toutes nos formations incendie peuvent être organisées en intra-entreprise, avec adaptation aux consignes du site, à l'implantation des moyens de première intervention et aux risques spécifiques de l'activité (logistique, industrie, tertiaire, ICPE).",
  },
];

const programmes = [
  {
    title: "Manipulation des extincteurs",
    description:
      "Formation pratique a l'utilisation des extincteurs, aux classes de feu et aux premières actions a mener en cas de départ d'incendie.",
  },
  {
    title: "Guide-file / Serre-file",
    description:
      "Formation dédiée a l'organisation de l'évacuation, au rôle des guides-files et serre-files, et a la mise en sécurité des occupants.",
  },
  {
    title: "Equipier de Première Intervention (EPI)",
    description:
      "Formation axée sur l'alerte, l'intervention de première urgence, l'emploi des moyens de première intervention et les bons réflexes avant l'arrivee des secours.",
  },
];

const atouts = [
  "Formations adaptées au site, a l'effectif et aux risques réels de l'entreprise",
  "Approche terrain axée sur l'alerte, la reaction, l'évacuation et l'emploi des moyens de première intervention",
  "Possibilite d'organisation sur site pour coller aux consignes et aux installations existantes",
  "Demande de devis rapide pour les besoins ponctuels, multisites ou urgents",
];

const inrsIncendieResources = [
  {
    title: "INRS - Sélection vidéos risque incendie",
    description:
      "Recherche officielle sur la chaîne INRS France pour compléter les notions de départ de feu, prévention, alerte et premiers réflexes.",
    href: "https://www.youtube.com/@INRSFrance/search?query=risque%20incendie",
    badge: "INRS France",
  },
  {
    title: "INRS - Sélection vidéos évacuation incendie",
    description:
      "Recherche officielle utile pour enrichir les parcours guide-file, serre-file, EPI et l'organisation de l'évacuation.",
    href: "https://www.youtube.com/@INRSFrance/search?query=évacuation%20incendie",
    badge: "INRS France",
  },
];

export default function FormationSecuriteIncendie() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-14 text-slate-900 sm:px-6 lg:px-8">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Sécurité incendie", url: "/formation-securite-incendie" },
        ]}
      />
      <FaqJsonLd items={faqItemsIncendie} />
      <CourseJsonLd
        name="Formation sécurité incendie en entreprise"
        description="Formation sécurité incendie : manipulation extincteurs, guide-file, serre-file, équipier de première intervention. Sessions adaptées aux entreprises."
        courseCode="INCENDIE"
        url="/formation-securite-incendie"
        timeRequired="PT4H"
        educationalLevel="Beginner"
        audience="Salariés, encadrants, équipiers de première intervention"
        educationalCredentialAwarded="Attestation de formation Prevensia"
      />
      <div className="mx-auto max-w-5xl">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
            PREVENSIA FORMATION
          </p>

          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
            Formation sécurité incendie
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            PREVENSIA FORMATION propose des formations en sécurité incendie pour
            les entreprises souhaitant préparer leurs équipes a réagir
            efficacement face a un départ de feu, a organiser l'évacuation et a
            utiliser les moyens de première intervention.
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
          <InfoCard
            label="Modalités"
            title="Présentiel"
            body="Formations organisées directement dans l'entreprise ou sur un site adapté aux exercices pratiques."
          />
          <InfoCard
            label="Public"
            title="Salariés et entreprises"
            body="Sessions destinées aux salariés, encadrants, agents et personnels amenes a appliquer les consignes incendie."
          />
          <InfoCard
            label="Objectif"
            title="Reagir et evacuer"
            body="Former les équipes a réagir face a un incendie et a mettre en œuvre les premières actions de sécurité."
          />
        </section>

        <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold">
            Pourquoi former vos équipes a la sécurité incendie ?
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            La formation sécurité incendie permet aux salariés de comprendre les
            risques, de connaitre les consignes de sécurité, d'utiliser les
            extincteurs si nécessaire et de participer a une évacuation rapide
            et sécurisée.
          </p>

          <p className="mt-4 leading-8 text-slate-700">
            Elle constitue un levier essentiel de prévention pour les
            entreprises souhaitant renforcer la protection des personnes, des
            locaux et des activites.
          </p>
        </section>

        <section
          id="programmes"
          className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10"
        >
          <h2 className="text-2xl font-bold">Programmes proposés</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {programmes.map((programme) => (
              <div
                key={programme.title}
                className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-xl font-semibold">{programme.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {programme.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">
              Une formation concrète et opérationnelle
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              Les formations sécurité incendie sont conçues pour être
              directement applicables dans l'entreprise. Elles intègrent des
              rappels réglementaires, des consignes adaptées au site et, selon
              les besoins, des exercices pratiques.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Cette approche permet aux stagiaires d'acquérir des réflexes
              simples, utiles et immédiatement mobilisables.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">
              Une reponse adaptée aux besoins de l'entreprise
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              PREVENSIA FORMATION adapte les sessions au contexte de
              l'etablissement, au type de public, a l'effectif concerne et aux
              objectifs de l'employeur en matiere de prévention incendie.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Les formations peuvent être organisées sur site afin de renforcer
              l'efficacite pédagogique et la coherence avec les installations
              existantes.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold">
            Pourquoi choisir PREVENSIA FORMATION ?
          </h2>

          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {atouts.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
            Ressources INRS
          </p>
          <h2 className="mt-3 text-2xl font-bold">
            Vidéos officielles sur le risque incendie et l'évacuation
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-700">
            PREVENSIA recommande aussi des ressources officielles INRS pour
            compléter la sensibilisation au risque incendie, aux premiers
            réflexes et a l'organisation de l'évacuation.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {inrsIncendieResources.map((item) => (
              <article
                key={item.href}
                className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6"
              >
                <span className="inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-red-700">
                  {item.badge}
                </span>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
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
        </section>

        <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold">
            Questions frequentes sur la formation sécurité incendie
          </h2>

          <div className="mt-6">
            <FaqItem
              question="A qui s'adresse la formation sécurité incendie ?"
              answer="Elle s'adresse aux salariés, exploitants, encadrants et équipes d'entreprise souhaitant renforcer la prévention incendie et la reaction en cas de départ de feu."
            />
            <FaqItem
              question="Quels themes peuvent être abordes ?"
              answer="Les formations peuvent porter sur la manipulation des extincteurs, le rôle des guide-file / serre-file, l'emploi des moyens de première intervention et plus largement les consignes incendie en entreprise."
            />
            <FaqItem
              question="Peut-on organiser la formation directement en entreprise ?"
              answer="Oui, PREVENSIA FORMATION peut organiser des sessions sur site afin d'adapter les exercices, consignes et mises en situation au contexte réel de l'etablissement."
            />
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold">
            Nos autres formations en sécurité et prévention
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-slate-700">
            PREVENSIA FORMATION propose egalement des formations en
            habilitation électrique, exploitation du SSI, formation SST et
            exploitation des installations sprinkler. Decouvrez l'ensemble de
            notre catalogue pour renforcer la sécurité de vos équipes.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="/formation-habilitation-electrique"
              className="rounded-xl border px-4 py-2 hover:border-red-600 hover:text-red-600"
            >
              Habilitation électrique
            </a>

            <a
              href="/formation-ssi"
              className="rounded-xl border px-4 py-2 hover:border-red-600 hover:text-red-600"
            >
              Exploitation SSI
            </a>

            <a
              href="/formation-sst"
              className="rounded-xl border px-4 py-2 hover:border-red-600 hover:text-red-600"
            >
              Formation SST
            </a>

            <a
              href="/formation-sprinkler"
              className="rounded-xl border px-4 py-2 hover:border-red-600 hover:text-red-600"
            >
              Exploitation sprinkler
            </a>
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
            Questions fréquentes
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            Sur la formation sécurité incendie
          </h2>

          <div className="mt-8 grid gap-4">
            <details className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 open:shadow-md">
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
                Mon entreprise est-elle obligée de former à la sécurité
                incendie ?
                <span className="float-right text-red-700 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Oui. L’article R.4227-39 du Code du travail impose un exercice
                d’évacuation au moins tous les six mois. Plus largement, la
                formation à la manipulation des extincteurs et au rôle de
                guide-file / serre-file est attendue dans le cadre de
                l’évaluation des risques (DUERP).
              </p>
            </details>

            <details className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 open:shadow-md">
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
                Quelle est la différence entre guide-file, serre-file et EPI ?
                <span className="float-right text-red-700 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Le guide-file ouvre la marche et conduit les occupants vers la
                sortie. Le serre-file ferme la marche, vérifie qu’aucun
                occupant n’est resté dans les locaux et referme les portes
                coupe-feu. L’équipier de première intervention (EPI) peut
                tenter d’éteindre un début d’incendie avec les moyens
                disponibles, dans un cadre maîtrisé.
              </p>
            </details>

            <details className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 open:shadow-md">
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
                Combien de salariés faut-il former ?
                <span className="float-right text-red-700 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                La règle pratique : un guide-file et un serre-file par étage
                et par zone, avec une rotation pour couvrir absences et
                congés. Pour la manipulation des extincteurs, on vise au
                minimum 10 % des effectifs, à recycler tous les 2 à 3 ans.
              </p>
            </details>

            <details className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 open:shadow-md">
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
                Vos sessions sont-elles adaptées à notre site ?
                <span className="float-right text-red-700 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Oui. Toutes nos formations incendie peuvent être organisées
                directement en intra-entreprise, avec adaptation aux
                consignes du site, à l’implantation des moyens de première
                intervention et aux risques spécifiques de l’activité
                (logistique, industrie, tertiaire, ICPE).
              </p>
            </details>
          </div>
        </section>
      </div>
    </main>
  );
}

function InfoCard({
  label,
  title,
  body,
}: {
  label: string;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-red-700">
        {label}
      </p>
      <p className="mt-3 text-lg font-semibold">{title}</p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
    </div>
  );
}

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="group mb-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 open:shadow-md">
      <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
        {question}
        <span className="float-right text-red-700 group-open:rotate-180 transition">
          ▼
        </span>
      </summary>
      <p className="mt-3 text-sm leading-7 text-slate-600">{answer}</p>
    </details>
  );
}
