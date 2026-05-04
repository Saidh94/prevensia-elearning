import { formatFrenchDisplayText } from "@/lib/french-display";

export const metadata = {
  title: "Formation sécurité incendie en entreprise | PREVENSIA FORMATION",
  description:
    "Formation sécurité incendie en entreprise : manipulation des extincteurs, guide-file / serre-file et équipier de première intervention. Sessions adaptées aux besoins des entreprises avec PREVENSIA FORMATION.",
};

const programmes = [
  {
    title: "Manipulation des extincteurs",
    description:
      "Formation pratique a l'utilisation des extincteurs, aux classes de feu et aux premieres actions a mener en cas de depart d'incendie.",
  },
  {
    title: "Guide-file / Serre-file",
    description:
      "Formation dediee a l'organisation de l'evacuation, au role des guides-files et serre-files, et a la mise en securite des occupants.",
  },
  {
    title: "Equipier de Premiere Intervention (EPI)",
    description:
      "Formation axee sur l'alerte, l'intervention de premiere urgence, l'emploi des moyens de premiere intervention et les bons reflexes avant l'arrivee des secours.",
  },
];

const atouts = [
  "Formations adaptees au site, a l'effectif et aux risques reels de l'entreprise",
  "Approche terrain axee sur l'alerte, la reaction, l'evacuation et l'emploi des moyens de premiere intervention",
  "Possibilite d'organisation sur site pour coller aux consignes et aux installations existantes",
  "Demande de devis rapide pour les besoins ponctuels, multisites ou urgents",
];

const inrsIncendieResources = [
  {
    title: "INRS - Selection videos risque incendie",
    description:
      "Recherche officielle sur la chaine INRS France pour completer les notions de depart de feu, prevention, alerte et premiers reflexes.",
    href: "https://www.youtube.com/@INRSFrance/search?query=risque%20incendie",
    badge: "INRS France",
  },
  {
    title: "INRS - Selection videos evacuation incendie",
    description:
      "Recherche officielle utile pour enrichir les parcours guide-file, serre-file, EPI et l'organisation de l'evacuation.",
    href: "https://www.youtube.com/@INRSFrance/search?query=evacuation%20incendie",
    badge: "INRS France",
  },
];

export default function FormationSecuriteIncendie() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-14 text-slate-900 sm:px-6 lg:px-8">
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
            les entreprises souhaitant préparer leurs équipes à réagir
            efficacement face à un départ de feu, à organiser l'évacuation et à
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
            body="Sessions destinées aux salariés, encadrants, agents et personnels amenés à appliquer les consignes incendie."
          />
          <InfoCard
            label="Objectif"
            title="Réagir et évacuer"
            body="Former les équipes à réagir face à un incendie et à mettre en œuvre les premières actions de sécurité."
          />
        </section>

        <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold">
            Pourquoi former vos équipes à la sécurité incendie ?
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            La formation sécurité incendie permet aux salariés de comprendre les
            risques, de connaître les consignes de sécurité, d'utiliser les
            extincteurs si nécessaire et de participer à une évacuation rapide
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
                <h3 className="text-xl font-semibold">
                  {formatFrenchDisplayText(programme.title)}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {formatFrenchDisplayText(programme.description)}
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
              Une réponse adaptée aux besoins de l'entreprise
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              PREVENSIA FORMATION adapte les sessions au contexte de
              l'établissement, au type de public, à l'effectif concerné et aux
              objectifs de l'employeur en matière de prévention incendie.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Les formations peuvent être organisées sur site afin de renforcer
              l'efficacité pédagogique et la cohérence avec les installations
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
                {formatFrenchDisplayText(item)}
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
            réflexes et à l'organisation de l'évacuation.
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
                <h3 className="mt-4 text-xl font-semibold">
                  {formatFrenchDisplayText(item.title)}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {formatFrenchDisplayText(item.description)}
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
            Questions fréquentes sur la formation sécurité incendie
          </h2>

          <div className="mt-6">
            <FaqItem
              question="À qui s'adresse la formation sécurité incendie ?"
              answer="Elle s'adresse aux salariés, exploitants, encadrants et équipes d'entreprise souhaitant renforcer la prévention incendie et la réaction en cas de départ de feu."
            />
            <FaqItem
              question="Quels thèmes peuvent être abordés ?"
              answer="Les formations peuvent porter sur la manipulation des extincteurs, le rôle des guide-file / serre-file, l'emploi des moyens de première intervention et plus largement les consignes incendie en entreprise."
            />
            <FaqItem
              question="Peut-on organiser la formation directement en entreprise ?"
              answer="Oui, PREVENSIA FORMATION peut organiser des sessions sur site afin d'adapter les exercices, consignes et mises en situation au contexte réel de l'établissement."
            />
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold">
            Nos autres formations en sécurité et prévention
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-slate-700">
            PREVENSIA FORMATION propose également des formations en
            habilitation électrique, exploitation du SSI, formation SST et
            exploitation des installations sprinkler. Découvrez l'ensemble de
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

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="mb-4 rounded-xl border border-slate-200 p-4">
      <summary className="cursor-pointer font-semibold">{question}</summary>
      <p className="mt-3 text-slate-700">{answer}</p>
    </details>
  );
}
