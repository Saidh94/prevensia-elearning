import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Règlement intérieur | PREVENSIA FORMATION",
  description: "Règlement intérieur de PREVENSIA FORMATION — obligations des stagiaires, discipline, réclamations, santé et sécurité.",
  alternates: { canonical: "https://prevensia-formation.fr/reglement-interieur" },
};

export default function ReglementInterieurPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900">Règlement intérieur</h1>
      <p className="mt-2 text-sm text-slate-500">
        Applicable à toutes les formations dispensées par PREVENSIA FORMATION — Dernière mise à jour : septembre 2026
      </p>
      <p className="mt-4 text-sm text-slate-700">
        Le présent règlement intérieur est établi conformément aux articles L.6352-3 à L.6352-5 et
        R.6352-1 à R.6352-15 du Code du travail. Il s&apos;applique à tout stagiaire participant à une
        action de formation dispensée par <strong>PREVENSIA FORMATION</strong> (PREVENSIA Groupe SAS —
        {COMPANY.addressFull}).
      </p>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">Article 1 — Champ d&apos;application</h2>
        <p>
          Ce règlement s&apos;applique à l&apos;ensemble des actions de formation organisées par PREVENSIA
          FORMATION, qu&apos;elles se déroulent en présentiel, en e-learning ou en modalité hybride.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">Article 2 — Horaires et assiduité</h2>
        <p>
          Les stagiaires sont tenus de respecter les horaires fixés et d&apos;être présents pendant toute
          la durée de la formation. Toute absence doit être signalée au formateur ou à
          l&apos;organisme dès que possible.
        </p>
        <p>
          Pour les formations e-learning, le stagiaire s&apos;engage à réaliser l&apos;intégralité des
          modules dans les délais communiqués lors de l&apos;inscription.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">Article 3 — Discipline et comportement</h2>
        <p>
          Tout comportement perturbateur, irrespectueux ou contraire à la sécurité peut entraîner
          l&apos;exclusion du stagiaire de la formation, sans remboursement. Le stagiaire est tenu :
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>De respecter les formateurs et les autres stagiaires.</li>
          <li>De ne pas utiliser son téléphone à des fins personnelles pendant les séquences de formation.</li>
          <li>De ne pas enregistrer les sessions sans autorisation préalable de l&apos;organisme.</li>
          <li>De respecter la confidentialité des échanges au sein du groupe.</li>
        </ul>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">Article 4 — Santé, sécurité et hygiène</h2>
        <p>
          Dans les locaux de formation, les règles d&apos;hygiène et de sécurité en vigueur doivent être
          respectées. Il est interdit de fumer ou de vapoter dans les espaces de formation. La
          consommation d&apos;alcool ou de tout produit stupéfiant est strictement interdite pendant
          la formation.
        </p>
        <p>
          Tout accident survenu pendant la formation doit être déclaré immédiatement au formateur ou
          au responsable de l&apos;organisme.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">Article 5 — Représentation des stagiaires</h2>
        <p>
          Dès lors que la formation dépasse 500 heures (ou selon les seuils réglementaires), des
          délégués de stagiaires peuvent être désignés conformément à l&apos;article L.6352-3 du Code du
          travail.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">Article 6 — Sanctions disciplinaires</h2>
        <p>
          Tout manquement au présent règlement peut faire l&apos;objet d&apos;une sanction graduée :
          avertissement, mise à pied temporaire, exclusion définitive de la formation, en fonction
          de la gravité des faits. Le stagiaire est informé préalablement et peut faire valoir ses
          observations.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">Article 7 — Réclamations</h2>
        <p>
          Tout stagiaire peut formuler une réclamation conformément à la{" "}
          <Link href="/reclamation" className="text-red-700 underline underline-offset-2">
            procédure de réclamation
          </Link>{" "}
          de PREVENSIA FORMATION.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">Article 8 — Droit applicable</h2>
        <p>
          Le présent règlement est établi conformément aux articles L.6352-3 à L.6352-5 du Code du
          travail. Il est remis à chaque stagiaire avant le début de la formation.
        </p>
        <p>
          Responsable de l&apos;application : Hachiba Said, dirigeant de PREVENSIA FORMATION.
        </p>
      </section>

      <div className="mt-12 border-t border-slate-200 pt-8 flex gap-6 text-sm">
        <Link href="/qualite" className="text-red-700 underline underline-offset-2">
          ← Qualité &amp; Qualiopi
        </Link>
        <Link href="/cgv" className="text-red-700 underline underline-offset-2">
          CGV
        </Link>
        <Link href="/" className="text-red-700 underline underline-offset-2">
          Accueil
        </Link>
      </div>
    </main>
  );
}
