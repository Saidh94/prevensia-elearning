import Link from "next/link";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const formationContent: Record<
  string,
  {
    title: string;
    duration: string;
    sections: { title: string; content: string[] }[];
  }
> = {
  h0b0: {
    title: "Habilitation électrique H0B0",
    duration: "7 h",
    sections: [
      {
        title: "Introduction",
        content: [
          "Bienvenue dans le parcours H0B0 PREVENSIA FORMATION.",
          "Cette formation a pour objectif de sensibiliser le personnel non-électricien aux risques liés à l’environnement électrique.",
        ],
      },
      {
        title: "Notions de base sur le risque électrique",
        content: [
          "Le risque électrique peut résulter d’un contact direct, d’un contact indirect ou d’un voisinage dangereux.",
          "Même sans intervention sur les installations, une mauvaise posture ou une méconnaissance des zones peut exposer à un danger grave.",
        ],
      },
      {
        title: "Effets du courant sur le corps",
        content: [
          "Le courant électrique peut provoquer tétanisation, brûlures, arrêt respiratoire ou fibrillation ventriculaire.",
          "La gravité dépend notamment de l’intensité, de la durée d’exposition et du trajet du courant dans le corps.",
        ],
      },
      {
        title: "Comportements autorisés / interdits",
        content: [
          "Respecter les consignes, ne jamais intervenir sans autorisation et signaler toute anomalie.",
          "Ne jamais toucher une installation détériorée ou supposée sous tension.",
        ],
      },
    ],
  },
};

export default async function ModulePage({ params }: PageProps) {
  const { slug } = await params;
  const formation = formationContent[slug];

  if (!formation) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-2xl font-bold text-slate-900">Module introuvable</h1>
        <p className="mt-2 text-slate-600">
          Le module demandé n’existe pas encore.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <div className="rounded-3xl bg-slate-900 p-8 text-white">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-300">
          Module e-learning
        </p>
        <h1 className="mt-2 text-3xl font-bold">{formation.title}</h1>
        <p className="mt-3 text-slate-200">Durée estimée : {formation.duration}</p>
      </div>

      <div className="mt-8 space-y-6">
        {formation.sections.map((section) => (
          <section
            key={section.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
            <div className="mt-4 space-y-3 text-slate-700">
              {section.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href={`/modules/${slug}/quiz`}
          className="rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Passer au quiz final
        </Link>

        <Link
          href="/dashboard"
          className="rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          Retour au dashboard
        </Link>
      </div>
    </main>
  );
}