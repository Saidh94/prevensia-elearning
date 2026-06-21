import Link from "next/link";
import Image from "next/image";

type TrainingRow = {
  title: string;
  duration: string;
  pricePerPerson?: string;
  pricePerGroup?: string;
  participants: string;
  audience: string[];
  details?: string[];
  ctaHref?: string;
  ctaLabel?: string;
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;
};

const electricalRows: TrainingRow[] = [
  {
    title: "H0B0 / H0V - e-learning + entretien 30 min",
    duration: "4 à 6 heures",
    pricePerPerson: "À partir de 150 € HT / personne",
    participants: "Accès individuel",
    audience: [
      "Personnel non électricien",
      "Agents d’entretien, logistique, BTP, sécurité",
      "Toute personne intervenant dans un environnement à risque électrique",
    ],
    details: [
      "Formation à distance avec accompagnement pédagogique",
      "Conforme aux exigences de la NF C 18-510",
    ],
    ctaHref: "/formation-habilitation-electrique",
    ctaLabel: "Voir le parcours e-learning",
    secondaryCtaHref: "/devis",
    secondaryCtaLabel: "Demander un devis",
  },
  {
    title: "H0B0 présentiel",
    duration: "1 jour",
    pricePerPerson: "À partir de 180 € HT / personne",
    pricePerGroup: "À partir de 800 € HT / groupe",
    participants: "Jusqu’à 10 participants",
    audience: [
      "Personnel non électricien",
      "Agents de maintenance non électriciens",
      "Personnel intervenant à proximité d’installations électriques",
    ],
    ctaHref: "/planning?search=h0b0",
    ctaLabel: "Voir les sessions",
    secondaryCtaHref: "/devis",
    secondaryCtaLabel: "Demander un devis",
  },
  {
    title: "BS et BE Manœuvre - e-learning + classe virtuelle",
    duration: "2 jours en initial / 1,5 jour en recyclage",
    pricePerPerson: "À partir de 350 € HT / personne",
    pricePerGroup: "À partir de 1 600 € HT / groupe",
    participants: "Jusqu’à 10 participants",
    audience: [
      "Agents techniques",
      "Personnel de maintenance",
      "Professionnels amenés à réaliser des manœuvres ou remplacements simples",
    ],
    ctaHref: "/formation-habilitation-electrique",
    ctaLabel: "Voir la formation",
    secondaryCtaHref: "/devis",
    secondaryCtaLabel: "Demander un devis",
  },
  {
    title: "B1 / B1V / B2 / B2V / BR / BC - e-learning + journée présentielle",
    duration: "3 jours en initial / 2 jours en recyclage",
    pricePerPerson: "À partir de 500 € HT / personne",
    pricePerGroup: "À partir de 2 000 € HT / groupe",
    participants: "Jusqu’à 10 participants",
    audience: [
      "Personnel électricien",
      "Techniciens de maintenance",
      "Chargés de travaux, chargés de consignation, chargés d’intervention",
    ],
   ctaHref: "/formation-habilitation-electrique",
    ctaLabel: "Voir la formation",
    secondaryCtaHref: "/devis",
    secondaryCtaLabel: "Demander un devis",
  },
];

const fireRows: TrainingRow[] = [
  {
    title: "Manipulation extincteurs",
    duration: "0,5 jour",
    pricePerGroup: "À partir de 450 € HT / groupe",
    participants: "Jusqu’à 10 participants",
    audience: [
      "Salariés de bureaux, entrepôts et sites industriels",
      "Personnel devant savoir réagir face à un départ de feu",
      "Collaborateurs sans formation incendie préalable",
    ],
    details: [
      "Sensibilisation au feu naissant",
      "Utilisation pratique des extincteurs",
    ],
    ctaHref: "/formations/securite-incendie",
    ctaLabel: "Voir la formation",
    secondaryCtaHref: "/devis",
    secondaryCtaLabel: "Demander un devis",
  },
  {
    title: "Guide-file / serre-file / évacuation",
    duration: "0,5 jour",
    pricePerGroup: "À partir de 490 € HT / groupe",
    participants: "Jusqu’à 10 participants",
    audience: [
      "Personnel chargé de l’évacuation",
      "Encadrants et référents sécurité",
      "Salariés désignés guide-file ou serre-file",
    ],
    ctaHref: "/formations/securite-incendie",
    ctaLabel: "Voir la formation",
    secondaryCtaHref: "/devis",
    secondaryCtaLabel: "Demander un devis",
  },
  {
    title: "Équipier de Première Intervention (EPI)",
    duration: "1 jour",
    pricePerGroup: "À partir de 690 € HT / groupe",
    participants: "Jusqu’à 10 participants",
    audience: [
      "Équipiers incendie",
      "Responsables sécurité",
      "Personnel amené à intervenir en première phase",
    ],
    ctaHref: "/formations/securite-incendie",
    ctaLabel: "Voir la formation",
    secondaryCtaHref: "/devis",
    secondaryCtaLabel: "Demander un devis",
  },
];

const sstRows: TrainingRow[] = [
  {
    title: "SST initial",
    duration: "2 jours",
    pricePerPerson: "À partir de 240 € HT / personne",
    pricePerGroup: "À partir de 1 190 € HT / groupe",
    participants: "De 4 à 10 participants",
    audience: [
      "Salariés de tout secteur",
      "Personnes désignées pour porter secours",
      "Entreprises souhaitant structurer la prévention des accidents",
    ],
    ctaHref: "/formations/sst",
    ctaLabel: "Voir la formation",
    secondaryCtaHref: "/devis",
    secondaryCtaLabel: "Demander un devis",
  },
  {
    title: "MAC SST",
    duration: "1 jour",
    pricePerPerson: "À partir de 130 € HT / personne",
    pricePerGroup: "À partir de 690 € HT / groupe",
    participants: "De 4 à 10 participants",
    audience: [
      "Titulaires d’un certificat SST à maintenir à jour",
      "Salariés devant actualiser leurs compétences de secouriste",
    ],
    ctaHref: "/formations/sst",
    ctaLabel: "Voir la formation",
    secondaryCtaHref: "/devis",
    secondaryCtaLabel: "Demander un devis",
  },
];

const ssiRows: TrainingRow[] = [
  {
    title: "Exploitation SSI",
    duration: "1 jour",
    pricePerPerson: "200 € HT / personne",
    pricePerGroup: "À partir de 1 500 € HT / groupe",
    participants: "Jusqu’à 12 participants",
    audience: [
      "Responsables techniques",
      "Maintenance",
      "QHSE / sécurité",
      "Exploitants ERP, BUP, ICPE et IGH",
    ],
    details: [
      "Exploitation du SSI et compréhension de son architecture",
      "Lecture des logiques SDI / CMSI / UGA / DAS",
      "Conduite à tenir en cas d’alarme ou de défaut",
      "Réglementation ERP / Code du travail (BUP) / ICPE / IGH",
      "Normes AFNOR et référentiels APSAD R7 et R13",
    ],
    ctaHref: "/formations/formation-ssi",
    ctaLabel: "Voir la formation",
    secondaryCtaHref: "/devis",
    secondaryCtaLabel: "Demander un devis",
  },
];

const sprinklerRows: TrainingRow[] = [
  {
    title: "Exploitation sprinkler",
    duration: "1 jour",
    pricePerPerson: "200 € HT / personne",
    pricePerGroup: "À partir de 1 000 € HT / groupe",
    participants: "Maximum 6 participants",
    audience: [
      "Exploitants de sites logistiques et industriels",
      "Maintenance technique",
      "Responsables sécurité incendie",
    ],
    details: [
      "Principes de fonctionnement du sprinkler",
      "Lecture générale du poste et du réseau",
      "Conduite à tenir en cas d’alarme ou de déclenchement",
    ],
    ctaHref: "/formations/exploitation-sprinkler",
    ctaLabel: "Voir la formation",
    secondaryCtaHref: "/devis",
    secondaryCtaLabel: "Demander un devis",
  },
  {
    title: "Sprinkler technique",
    duration: "2 jours",
    pricePerPerson: "490 € HT / personne",
    pricePerGroup: "À partir de 2 800 € HT / groupe",
    participants: "Maximum 6 participants",
    audience: [
      "Responsables techniques",
      "Ingénieurs",
      "Bureaux d’études",
      "Maintenance spécialisée",
    ],
    details: [
      "Approfondissement technique du système sprinkler",
      "Référentiels APSAD, NFPA et FM Global",
      "Lecture d’installation, exploitation et points de vigilance",
      "Formation en groupe restreint pour favoriser les échanges techniques",
    ],
    ctaHref: "/formations/exploitation-sprinkler",
    ctaLabel: "Voir la formation",
    secondaryCtaHref: "/devis",
    secondaryCtaLabel: "Demander un devis",
  },
];

const testimonials = [
  {
    quote:
      "Formation claire, structurée et adaptée à notre environnement de travail.",
    author: "Responsable maintenance",
  },
  {
    quote:
      "Très bon niveau technique, avec une vraie compréhension des contraintes d’exploitation.",
    author: "Responsable QHSE",
  },
  {
    quote: "Approche concrète, utile et directement applicable sur site.",
    author: "Responsable exploitation logistique",
  },
];

function TrainingTable({
  title,
  subtitle,
  rows,
}: {
  title: string;
  subtitle: string;
  rows: TrainingRow[];
}) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
          {title}
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
          {subtitle}
        </p>
      </div>

      <div className="space-y-5">
        {rows.map((row) => (
          <article
            key={row.title}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5"
          >
            <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-lg font-semibold text-slate-900">
                    {row.title}
                  </h4>
                  <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white">
                    {row.duration}
                  </span>
                </div>

                <div className="mt-3 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
                  {row.pricePerPerson ? (
                    <div className="rounded-xl bg-white p-3">
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        Tarif par participant
                      </p>
                      <p className="mt-1 font-semibold text-slate-900">
                        {row.pricePerPerson}
                      </p>
                    </div>
                  ) : null}

                  {row.pricePerGroup ? (
                    <div className="rounded-xl bg-white p-3">
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        Tarif groupe
                      </p>
                      <p className="mt-1 font-semibold text-slate-900">
                        {row.pricePerGroup}
                      </p>
                    </div>
                  ) : null}

                  <div className="rounded-xl bg-white p-3 md:col-span-2">
                    <p className="text-xs uppercase tracking-wide text-slate-500">
                      Participants
                    </p>
                    <p className="mt-1 font-semibold text-slate-900">
                      {row.participants}
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-sm font-medium text-slate-900">
                    Public concerné
                  </p>
                  <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-700">
                    {row.audience.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                {row.details?.length ? (
                  <div className="mt-4">
                    <p className="text-sm font-medium text-slate-900">
                      Points clés
                    </p>
                    <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-700">
                      {row.details.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>

              <div className="w-full xl:w-56 xl:flex-shrink-0">
                <Link
                  href={row.ctaHref ?? "/devis"}
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  {row.ctaLabel ?? "Voir la formation"}
                </Link>

                <Link
                  href={row.secondaryCtaHref ?? "/devis"}
                  className="mt-3 inline-flex w-full items-center justify-center rounded-2xl border border-slate-300 bg-white px-4 py-3 text-center text-sm font-medium text-slate-900 transition hover:bg-slate-100"
                >
                  {row.secondaryCtaLabel ?? "Demander un devis"}
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function CommercialProofSection() {
  return (
    <section className="bg-slate-100 py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-slate-300 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-700">
            Tarifs, formats et publics
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Des formations lisibles, techniques et adaptées à votre activité
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Retrouvez pour chaque formation la durée, le format tarifaire,
            le public concerné et le nombre de participants recommandé.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Organisation</p>
            <p className="mt-2 text-xl font-semibold text-slate-900">
              Sessions inter et intra
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Formations organisées en centre, à distance ou directement sur site
              selon vos besoins.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Formats</p>
            <p className="mt-2 text-xl font-semibold text-slate-900">
              Présentiel, intra, e-learning
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Offre structurée pour particuliers, entreprises et groupes de
              salariés.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Approche</p>
            <p className="mt-2 text-xl font-semibold text-slate-900">
              Technique et réglementaire
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Positionnement adapté aux environnements tertiaires, industriels,
              logistiques et techniques.
            </p>
          </div>
        </div>

        <TrainingTable
          title="Habilitation électrique"
          subtitle="Parcours en e-learning, en salle ou directement dans vos locaux, selon le niveau visé et le profil des stagiaires."
          rows={electricalRows}
        />

        <TrainingTable
          title="Sécurité incendie"
          subtitle="Des formations opérationnelles pour réagir, évacuer et intervenir efficacement face à un départ de feu."
          rows={fireRows}
        />

        <TrainingTable
          title="SST"
          subtitle="Formations secourisme destinées aux entreprises souhaitant renforcer la prévention et la capacité d’intervention de leurs équipes."
          rows={sstRows}
        />

        <TrainingTable
          title="SSI"
          subtitle="Formation orientée exploitation, compréhension de l’architecture du système et intégration des exigences réglementaires."
          rows={ssiRows}
        />

        <TrainingTable
          title="Sprinkler"
          subtitle="Modules d’exploitation ou d’approfondissement technique en petit groupe, avec un positionnement premium sur les sujets avancés."
          rows={sprinklerRows}
        />

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
              Retours clients
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Des formations adaptées aux réalités du terrain, avec une approche concrète et opérationnelle.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.author}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <p className="text-sm leading-6 text-slate-700">“{item.quote}”</p>
                <p className="mt-4 text-sm font-medium text-slate-900">
                  {item.author}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
              Nos formations
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Des formations concrètes, techniques et adaptées aux besoins des entreprises.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <article className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <div className="relative h-56 w-full">
                <Image
                  src="/images/sst.jpg"
                  alt="Formation SST"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="text-base font-semibold text-slate-900">
                  Formation SST
                </h4>
              </div>
            </article>

            <article className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <div className="relative h-56 w-full">
                <Image
                  src="/images/salle-de-formation.jpg"
                  alt="Salle de formation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="text-base font-semibold text-slate-900">
                  Salle de formation
                </h4>
              </div>
            </article>

            <article className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <div className="relative h-56 w-full">
                <Image
                  src="/images/armoire-electrique.jpg"
                  alt="Habilitation électrique"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="text-base font-semibold text-slate-900">
                  Habilitation électrique
                </h4>
              </div>
            </article>

            <article className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <div className="relative h-56 w-full">
                <Image
                  src="/images/installation-spk.jpg"
                  alt="Exploitation sprinkler"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="text-base font-semibold text-slate-900">
                  Exploitation sprinkler
                </h4>
              </div>
            </article>
          </div>
        </section>

        <section className="rounded-3xl bg-slate-900 p-6 text-white shadow-sm md:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold tracking-tight">
                Besoin d’un devis ou d’une organisation sur mesure ?
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Pour plusieurs apprenants, une intervention sur site, un couplage
                SSI / sprinkler ou un besoin réglementaire spécifique, la demande
                de devis reste le format le plus pertinent.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/devis"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
              >
                Demander un devis
              </Link>
              <Link
                href="/planning"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Voir le planning
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
