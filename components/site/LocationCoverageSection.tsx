export default function LocationCoverageSection() {
  return (
    <section className="bg-slate-100 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr]">
          
          {/* TEXTE */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
              Implantation & zone d’intervention
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Basé à Paris, interventions rapides en Île-de-France et partout en France
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-700">
              PREVENSIA FORMATION est implanté à{" "}
              <span className="font-semibold text-slate-900">
                Paris
              </span>
              , avec une organisation adaptée aux environnements tertiaires,
              industriels et logistiques.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-700">
              Nous intervenons rapidement en Île-de-France et organisons des
              formations intra-entreprise sur l’ensemble du territoire national.
            </p>

            {/* BLOCS */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-red-700">
                  Bureau
                </p>
                <p className="mt-3 text-xl font-bold text-slate-900">
                  Paris (75)
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Organisation, coordination et pilotage des formations.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-red-700">
                  Zone principale
                </p>
                <p className="mt-3 text-xl font-bold text-slate-900">
                  Île-de-France
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Interventions rapides pour entreprises et sites techniques.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm sm:col-span-2">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-red-700">
                  Couverture nationale
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "Paris",
                    "93",
                    "94",
                    "92",
                    "78",
                    "91",
                    "77",
                    "95",
                    "France entière",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA (important) */}
            <div className="mt-8">
              <a
                href="/devis"
                className="inline-flex items-center justify-center rounded-2xl bg-red-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-800"
              >
                Demander une intervention
              </a>
            </div>
          </div>

          {/* CARTE */}
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm">
            <div className="overflow-hidden rounded-[1.25rem] border border-slate-200 bg-slate-100">
              <iframe
                title="Localisation PREVENSIA FORMATION — 38 rue des Mathurins, Paris 8e"
                src="https://www.openstreetmap.org/export/embed.html?bbox=2.3034%2C48.8709%2C2.3434%2C48.8809&layer=mapnik&marker=48.8759%2C2.3234"
                className="h-[420px] w-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>

            <div className="mt-4 rounded-[1.25rem] bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">
                Siège social — Groupe PREVENSIA SAS
              </p>
              <p className="mt-1 text-sm font-medium text-slate-800">
                38, rue des Mathurins<br />75008 Paris
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Déplacements sur toute la France selon les projets.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}