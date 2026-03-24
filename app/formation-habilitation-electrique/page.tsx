export const metadata = {
  title:
    "Formation habilitation électrique en e-learning et présentiel | PREVENSIA FORMATION",
  description:
    "Formation habilitation électrique H0B0, BS, BE manœuvre, B1, B2, BR, BC en e-learning ou en présentiel. Formations pour particuliers et entreprises partout en France.",
};

export default function FormationHabilitation() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-14 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
            PREVENSIA FORMATION
          </p>

          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
            Formation habilitation électrique
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            PREVENSIA FORMATION propose des formations en habilitation électrique
            en e-learning et en présentiel pour les particuliers, les salariés et
            les entreprises. Nos parcours permettent d’acquérir les connaissances
            essentielles pour prévenir les risques électriques et répondre aux
            exigences réglementaires.
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
            <p className="mt-3 text-lg font-semibold">E-learning et présentiel</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Organisation souple selon votre activité, votre niveau et le nombre
              de participants.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-red-700">
              Public
            </p>
            <p className="mt-3 text-lg font-semibold">Particuliers et entreprises</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Sessions adaptées aux salariés itinérants, équipes techniques,
              entreprises multisites et besoins individuels.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-red-700">
              Objectif
            </p>
            <p className="mt-3 text-lg font-semibold">Prévention du risque électrique</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Comprendre les dangers, appliquer les consignes de sécurité et
              intervenir dans un cadre maîtrisé.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold">
            Pourquoi suivre une formation habilitation électrique ?
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Toute personne amenée à travailler à proximité d’installations
            électriques ou à réaliser certaines opérations doit être formée aux
            risques électriques et aux règles de sécurité associées. La formation
            habilitation électrique permet d’identifier les dangers, d’adopter les
            bons réflexes et de contribuer à la prévention des accidents.
          </p>

          <p className="mt-4 leading-8 text-slate-700">
            Elle constitue également un levier important de mise en conformité pour
            les entreprises, tout en renforçant la sécurité des collaborateurs sur
            le terrain.
          </p>
        </section>

        <section
          id="programmes"
          className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10"
        >
          <h2 className="text-2xl font-bold">Programmes proposés</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold">H0B0</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Formation destinée au personnel non électricien travaillant dans un
                environnement comportant un risque électrique.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold">BS / BE Manœuvre</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Formation adaptée aux opérations simples, manœuvres, remplacements
                et interventions élémentaires sur certaines installations.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold">B1 B1V B2 B2V BR BC</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Parcours pour les personnels électriciens amenés à travailler,
                intervenir, consigner ou encadrer des opérations électriques.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">
              Formation en e-learning : rapide et flexible
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              La formation habilitation électrique en e-learning permet d’acquérir
              rapidement les connaissances théoriques indispensables sans contrainte
              de déplacement. Elle est particulièrement adaptée aux salariés
              itinérants, aux entreprises multisites et aux besoins de formation à
              distance.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Cette modalité permet une organisation plus souple tout en
              maintenant un niveau d’exigence élevé sur les fondamentaux de la
              sécurité électrique.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">
              Formation en présentiel : plus opérationnelle
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              Les sessions présentielles permettent de compléter les apports
              théoriques par des échanges concrets, des exemples métier et, selon
              les besoins, une approche plus proche des réalités terrain de
              l’entreprise.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Cette formule convient particulièrement aux équipes techniques, aux
              exploitants et aux structures souhaitant regrouper plusieurs
              collaborateurs sur une même session.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold">Pourquoi choisir PREVENSIA FORMATION ?</h2>

          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700">
              Organisme structuré pour les besoins des particuliers et des entreprises
            </li>
            <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700">
              Parcours en e-learning et sessions présentielles selon le besoin
            </li>
            <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700">
              Approche orientée sécurité, réglementation et efficacité terrain
            </li>
            <li className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700">
              Réponse rapide pour l’organisation des sessions et des devis
            </li>
          </ul>
        </section>

        <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold">
            Questions fréquentes sur l’habilitation électrique
          </h2>

          <div className="mt-6">
            <details className="mb-4 rounded-xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold">
                À qui s’adresse la formation habilitation électrique ?
              </summary>
              <p className="mt-3 text-slate-700">
                Elle concerne les salariés non électriciens, les techniciens, les
                agents de maintenance et les personnels amenés à travailler sur ou
                à proximité d’installations électriques.
              </p>
            </details>

            <details className="mb-4 rounded-xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold">
                L’e-learning est-il adapté aux salariés itinérants ?
              </summary>
              <p className="mt-3 text-slate-700">
                Oui, la formation à distance est particulièrement adaptée aux
                salariés itinérants et aux entreprises multisites grâce à sa
                souplesse d’organisation.
              </p>
            </details>

            <details className="mb-4 rounded-xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold">
                Quand faut-il renouveler l’habilitation électrique ?
              </summary>
              <p className="mt-3 text-slate-700">
                Un recyclage est généralement recommandé tous les 3 ans, selon le
                niveau d’habilitation et le contexte d’activité.
              </p>
            </details>
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-red-200 bg-red-50 p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold">Besoin d’un devis rapide ?</h2>

          <p className="mt-4 max-w-3xl leading-8 text-slate-700">
            Indiquez votre besoin, votre effectif, votre localisation et le délai
            souhaité. PREVENSIA FORMATION vous adresse une proposition adaptée à
            votre demande.
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