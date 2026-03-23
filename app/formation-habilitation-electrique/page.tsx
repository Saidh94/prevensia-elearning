export const metadata = {
  title:
    "Formation habilitation électrique en e-learning et présentiel | PREVENSIA FORMATION",
  description:
    "Formation habilitation électrique H0B0, BS, BE manœuvre, B1, B2, BR, BC en e-learning ou en présentiel partout en France. Formation rapide, conforme à la réglementation.",
};

export default function FormationHabilitation() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold mb-8">
        Formation habilitation électrique
      </h1>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Formation habilitation électrique en e-learning : rapide et flexible
      </h2>

      <p className="mb-4">
        La formation habilitation électrique en e-learning permet d’acquérir
        rapidement les connaissances théoriques indispensables pour prévenir
        les risques liés à l’électricité et intervenir en toute sécurité dans
        un environnement professionnel.
      </p>

      <p className="mb-4">
        Accessible partout en France, cette solution de formation à distance
        offre une grande flexibilité d’organisation et convient particulièrement
        aux salariés itinérants, aux techniciens de maintenance et aux
        entreprises multisites.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Formation habilitation électrique en présentiel
      </h2>

      <p className="mb-4">
        PREVENSIA FORMATION propose également des sessions en présentiel
        directement dans les entreprises ou en inter-entreprises afin de
        compléter la formation théorique par des exercices pratiques.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">
            Formations proposées
          </h2>

          <ul className="space-y-3 text-slate-700">
            <li>Habilitation électrique H0B0</li>
            <li>Habilitation électrique BS / BE manœuvre</li>
            <li>Habilitation électrique B1 B1V B2 B2V BR BC</li>
            <li>Formation en e-learning</li>
            <li>Formation en présentiel</li>
            <li>Sessions pour particuliers et entreprises</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-red-200 bg-red-50 p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">
            Demande rapide
          </h2>

          <p className="mb-4 text-slate-700">
            Vous souhaitez organiser une formation habilitation électrique ?
          </p>

          <a
            href="/demande-devis"
            className="inline-flex rounded-2xl bg-red-700 px-5 py-3 text-sm font-semibold text-white hover:bg-red-800 transition"
          >
            Demander un devis
          </a>
        </div>

      </div>

      <div className="mt-12">

        <h2 className="text-2xl font-semibold mb-6">
          Questions fréquentes sur l’habilitation électrique
        </h2>

        <details className="mb-4 border rounded-xl p-4">
          <summary className="font-semibold cursor-pointer">
            À qui s’adresse la formation habilitation électrique ?
          </summary>
          <p className="mt-3 text-slate-700">
            Elle concerne les salariés non électriciens, les techniciens,
            les agents de maintenance et toute personne travaillant à proximité
            d’installations électriques.
          </p>
        </details>

        <details className="mb-4 border rounded-xl p-4">
          <summary className="font-semibold cursor-pointer">
            L’e-learning est-il adapté aux salariés itinérants ?
          </summary>
          <p className="mt-3 text-slate-700">
            Oui, la formation à distance permet de se former rapidement
            sans contrainte de déplacement et s’adapte parfaitement
            aux entreprises multisites.
          </p>
        </details>

        <details className="mb-4 border rounded-xl p-4">
          <summary className="font-semibold cursor-pointer">
            Quand faut-il renouveler l’habilitation électrique ?
          </summary>
          <p className="mt-3 text-slate-700">
            Un recyclage est généralement recommandé tous les 3 ans.
          </p>
        </details>

      </div>

    </div>
  );
}