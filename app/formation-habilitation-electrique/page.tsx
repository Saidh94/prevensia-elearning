export const metadata = {
  title: "Formation habilitation électrique en e-learning et présentiel | PREVENSIA FORMATION",
  description:
    "PREVENSIA FORMATION propose des formations en habilitation électrique en e-learning et en présentiel pour particuliers et entreprises : H0B0, BS, BE Manœuvre, B1, B2, BR, BC.",

};
export default function FormationHabilitation() {
  return (
    
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">
        Formation habilitation électrique
      </h1>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Formation habilitation électrique en e-learning
      </h2>
      <p className="mb-4">
        La formation habilitation électrique en e-learning permet d’acquérir rapidement les connaissances théoriques indispensables pour prévenir les risques liés à l’électricité et intervenir en toute sécurité dans un environnement professionnel.
      </p>

      <p className="mb-4">
        Accessible partout en France, cette solution de formation à distance offre une grande flexibilité d’organisation et constitue une alternative particulièrement adaptée aux entreprises souhaitant optimiser la gestion des formations de leurs salariés.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Formation habilitation électrique en présentiel
      </h2>
      <p className="mb-4">
        PREVENSIA FORMATION propose également des sessions de formation habilitation électrique en présentiel directement au sein des entreprises ou en inter-entreprises.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Formations proposées</h2>
          <ul className="space-y-3 text-slate-700">
            <li>Habilitation électrique H0B0</li>
            <li>Habilitation électrique BS / BE Manœuvre</li>
            <li>Habilitation électrique B1 B1V B2 B2V BR BC</li>
            <li>Formation en e-learning</li>
            <li>Formation en présentiel</li>
            <li>Sessions pour particuliers et entreprises</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-red-200 bg-red-50 p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Demande rapide</h2>
          <p className="mb-4 text-slate-700">
            Vous souhaitez organiser une formation habilitation électrique pour un ou plusieurs participants ?
          </p>
          <a
            href="/demande-devis"
            className="inline-flex rounded-2xl bg-red-700 px-5 py-3 text-sm font-semibold text-white"
          >
            Demander un devis
          </a>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">
          Questions fréquentes sur l’habilitation électrique
        </h2>

        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">
              À qui s’adresse la formation habilitation électrique ?
            </h3>
            <p className="text-slate-700">
              Cette formation s’adresse aux salariés non électriciens, aux techniciens, aux agents de maintenance et aux professionnels amenés à travailler sur ou à proximité d’installations électriques.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">
              La formation en e-learning est-elle adaptée aux entreprises ?
            </h3>
            <p className="text-slate-700">
              Oui, la formation en e-learning est particulièrement adaptée aux entreprises multisites, aux salariés itinérants et aux structures souhaitant former rapidement leurs collaborateurs.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">
              Quelle est la durée de validité d’une habilitation électrique ?
            </h3>
            <p className="text-slate-700">
              Le recyclage est généralement recommandé tous les 3 ans.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}