export const metadata = {
  title: "E-learning habilitation électrique | PREVENSIA FORMATION",
  description:
    "Formation habilitation électrique en e-learning pour particuliers et entreprises.",
};

export default function ElearningHabilitationElectrique() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-14 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
          PREVENSIA FORMATION
        </p>

        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
          E-learning habilitation électrique
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          Cette page sera le point d’entrée du futur parcours e-learning
          habilitation électrique PREVENSIA FORMATION.
        </p>

        <div className="mt-8">
          <a
            href="/demande-devis"
            className="inline-flex rounded-2xl bg-red-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-red-800"
          >
            Demander un devis
          </a>
        </div>
      </div>
    </main>
  );
}