export const metadata = {
  title: "Formation securite incendie en entreprise | PREVENSIA FORMATION",
  description:
    "Formation securite incendie en entreprise : manipulation des extincteurs, guide-file / serre-file et equipier de premiere intervention. Sessions adaptees aux besoins des entreprises avec PREVENSIA FORMATION.",
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

export default function FormationSecuriteIncendie() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-14 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
            PREVENSIA FORMATION
          </p>

          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
            Formation securite incendie
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            PREVENSIA FORMATION propose des formations en securite incendie pour
            les entreprises souhaitant preparer leurs equipes a reagir
            efficacement face a un depart de feu, a organiser l'evacuation et a
            utiliser les moyens de premiere intervention.
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
            label="Modalites"
            title="Presentiel"
            body="Formations organisees directement dans l'entreprise ou sur un site adapte aux exercices pratiques."
          />
          <InfoCard
            label="Public"
            title="Salaries et entreprises"
            body="Sessions destinees aux salaries, encadrants, agents et personnels amenes a appliquer les consignes incendie."
          />
          <InfoCard
            label="Objectif"
            title="Reagir et evacuer"
            body="Former les equipes a reagir face a un incendie et a mettre en oeuvre les premieres actions de securite."
          />
        </section>

        <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold">
            Pourquoi former vos equipes a la securite incendie ?
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            La formation securite incendie permet aux salaries de comprendre les
            risques, de connaitre les consignes de securite, d'utiliser les
            extincteurs si necessaire et de participer a une evacuation rapide
            et securisee.
          </p>

          <p className="mt-4 leading-8 text-slate-700">
            Elle constitue un levier essentiel de prevention pour les
            entreprises souhaitant renforcer la protection des personnes, des
            locaux et des activites.
          </p>
        </section>

        <section
          id="programmes"
          className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10"
        >
          <h2 className="text-2xl font-bold">Programmes proposes</h2>

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
              Une formation concrete et operationnelle
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              Les formations securite incendie sont concues pour etre
              directement applicables dans l'entreprise. Elles integrent des
              rappels reglementaires, des consignes adaptees au site et, selon
              les besoins, des exercices pratiques.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Cette approche permet aux stagiaires d'acquerir des reflexes
              simples, utiles et immediatement mobilisables.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">
              Une reponse adaptee aux besoins de l'entreprise
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              PREVENSIA FORMATION adapte les sessions au contexte de
              l'etablissement, au type de public, a l'effectif concerne et aux
              objectifs de l'employeur en matiere de prevention incendie.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Les formations peuvent etre organisees sur site afin de renforcer
              l'efficacite pedagogique et la coherence avec les installations
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
          <h2 className="text-2xl font-bold">
            Questions frequentes sur la formation securite incendie
          </h2>

          <div className="mt-6">
            <FaqItem
              question="A qui s'adresse la formation securite incendie ?"
              answer="Elle s'adresse aux salaries, exploitants, encadrants et equipes d'entreprise souhaitant renforcer la prevention incendie et la reaction en cas de depart de feu."
            />
            <FaqItem
              question="Quels themes peuvent etre abordes ?"
              answer="Les formations peuvent porter sur la manipulation des extincteurs, le role des guide-file / serre-file, l'emploi des moyens de premiere intervention et plus largement les consignes incendie en entreprise."
            />
            <FaqItem
              question="Peut-on organiser la formation directement en entreprise ?"
              answer="Oui, PREVENSIA FORMATION peut organiser des sessions sur site afin d'adapter les exercices, consignes et mises en situation au contexte reel de l'etablissement."
            />
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold">
            Nos autres formations en securite et prevention
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-slate-700">
            PREVENSIA FORMATION propose egalement des formations en
            habilitation electrique, exploitation du SSI, formation SST et
            exploitation des installations sprinkler. Decouvrez l'ensemble de
            notre catalogue pour renforcer la securite de vos equipes.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="/formation-habilitation-electrique"
              className="rounded-xl border px-4 py-2 hover:border-red-600 hover:text-red-600"
            >
              Habilitation electrique
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
