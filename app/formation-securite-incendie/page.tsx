export const metadata = {
  title: "Formation sécurité incendie en entreprise | PREVENSIA FORMATION",
  description:
    "Formation sécurité incendie en entreprise : manipulation des extincteurs, guide-file, serre-file et évacuation incendie. Sessions adaptées aux besoins des entreprises avec PREVENSIA FORMATION.",
};

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
            efficacement face à un départ de feu, à organiser l’évacuation et à
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
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-red-700">
              Modalités
            </p>
            <p className="mt-3 text-lg font-semibold">Présentiel</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Formations organisées directement dans l’entreprise ou sur un site
              adapté aux exercices pratiques.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-red-700">
              Public
            </p>
            <p className="mt-3 text-lg font-semibold">Salariés et entreprises</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Sessions destinées aux salariés, encadrants, agents et personnels
              amenés à appliquer les consignes incendie.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-red-700">
              Objectif
            </p>
            <p className="mt-3 text-lg font-semibold">Réagir et évacuer</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Former les équipes à réagir face à un incendie et à mettre en
              œuvre les premières actions de sécurité.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold">
            Pourquoi former vos équipes à la sécurité incendie ?
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            La formation sécurité incendie permet aux salariés de comprendre les
            risques, de connaître les consignes de sécurité, d’utiliser les
            extincteurs si nécessaire et de participer à une évacuation rapide
            et sécurisée.
          </p>

          <p className="mt-4 leading-8 text-slate-700">
            Elle constitue un levier essentiel de prévention pour les entreprises
            souhaitant renforcer la protection des personnes, des locaux et des
            activités.
          </p>
        </section>

        <section
          id="programmes"
          className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10"
        >
          <h2 className="text-2xl font-bold">Programmes proposés</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold">
                Manipulation des extincteurs
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Formation pratique à l’utilisation des extincteurs, aux classes
                de feu et aux premières actions à mener en cas de départ
                d’incendie.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold">
                Guide-file / Serre-file
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Formation dédiée à l’organisation de l’évacuation, au rôle des
                guides-files et serre-files, et à la mise en sécurité des
                occupants.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold">Évacuation incendie</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Sensibilisation aux consignes d’alerte, aux cheminements
                d’évacuation, aux comportements attendus et aux principes de
                gestion de l’évacuation.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">
              Une formation concrète et opérationnelle
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              Les formations sécurité incendie sont conçues pour être
              directement applicables dans l’entreprise. Elles intègrent des
              rappels réglementaires, des consignes adaptées au site et, selon
              les besoins, des exercices pratiques.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Cette approche permet aux stagiaires d’acquérir des réflexes
              simples, utiles et immédiatement mobilisables.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">
              Une réponse adaptée aux besoins de l’entreprise
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              PREVENSIA FORMATION adapte les sessions au contexte de
              l’établissement, au type de public, à l’effectif concerné et aux
              objectifs de l’employeur en matière de prévention incendie.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Les formations peuvent être organisées sur site afin de renforcer
              l’efficacité pédagogique et la cohérence avec les installations
              existantes.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold">Pourquoi choisir PREVENSIA FORMATION ?</h2>

          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700">
              Formations sécurité incendie adaptées aux besoins réels des entreprises
            </li>
            <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700">
              Approche terrain axée sur la réaction, l’évacuation et la prévention
            </li>
            <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700">
              Organisation flexible selon le site, l’effectif et le niveau attendu
            </li>
            <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700">
              Réponse rapide pour les demandes de devis et les besoins urgents
            </li>
          </ul>
        </section>

        <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold">
            Questions fréquentes sur la formation sécurité incendie
          </h2>

          <div className="mt-6">
            <details className="mb-4 rounded-xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold">
                À qui s’adresse la formation sécurité incendie ?
              </summary>
              <p className="mt-3 text-slate-700">
                Elle s’adresse aux salariés, exploitants, encadrants et équipes
                d’entreprise souhaitant renforcer la prévention incendie et la
                réaction en cas de départ de feu.
              </p>
            </details>

            <details className="mb-4 rounded-xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold">
                Quels thèmes peuvent être abordés ?
              </summary>
              <p className="mt-3 text-slate-700">
                Les formations peuvent porter sur la manipulation des
                extincteurs, l’évacuation incendie, le rôle des guide-file /
                serre-file et plus largement les consignes incendie en
                entreprise.
              </p>
            </details>

            <details className="mb-4 rounded-xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold">
                Peut-on organiser la formation directement en entreprise ?
              </summary>
              <p className="mt-3 text-slate-700">
                Oui, PREVENSIA FORMATION peut organiser des sessions sur site
                afin d’adapter les exercices, consignes et mises en situation au
                contexte réel de l’établissement.
              </p>
            </details>
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-red-200 bg-red-50 p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold">Besoin d’un devis rapide ?</h2>

          <p className="mt-4 max-w-3xl leading-8 text-slate-700">
            Indiquez votre besoin, le nombre de participants, votre localisation
            et le délai souhaité. PREVENSIA FORMATION vous adresse une
            proposition adaptée à votre demande.
          </p>

          <div className="mt-6">
            <a
              href="/demande-devis"
              className="inline-flex rounded-2xl bg-red-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-red-800"
            >
              Demander un devis
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}