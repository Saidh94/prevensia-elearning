import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Procédure de réclamation | PREVENSIA FORMATION",
  description:
    "Procédure de réclamation de PREVENSIA FORMATION : comment déposer une réclamation, délais de traitement, responsable, suivi et amélioration continue.",
  alternates: { canonical: "https://prevensia-formation.fr/reclamation" },
};

export default function ReclamationPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900">Procédure de réclamation</h1>
      <p className="mt-2 text-sm text-slate-500">Dernière mise à jour : septembre 2026</p>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">1. Objet</h2>
        <p>
          PREVENSIA FORMATION s&apos;engage à traiter toute réclamation avec sérieux, dans un délai
          raisonnable et de façon traçable. Cette procédure s&apos;applique à toute personne —
          stagiaire, employeur, financeur — ayant un motif d&apos;insatisfaction lié à une prestation
          de formation réalisée ou proposée par PREVENSIA FORMATION.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">2. Comment déposer une réclamation</h2>
        <p>Vous pouvez soumettre votre réclamation par l&apos;un des canaux suivants :</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Email :</strong>{" "}
            <a
              href="mailto:contact@prevensia-formation.fr"
              className="text-red-700 underline underline-offset-2 hover:text-red-800"
            >
              contact@prevensia-formation.fr
            </a>{" "}
            (objet : «&nbsp;Réclamation&nbsp;»)
          </li>
          <li>
            <strong>Courrier postal :</strong> {COMPANY.addressFull} — à l&apos;attention du
            Responsable qualité
          </li>
          <li>
            <strong>Téléphone :</strong> {COMPANY.phone} (du lundi au vendredi, 9h–18h)
          </li>
        </ul>
        <p>
          Merci de préciser : vos coordonnées, la formation concernée, la date, la nature du
          problème rencontré et, si possible, les éléments ou pièces à l&apos;appui.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">3. Délais de traitement</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Accusé de réception :</strong> dans les <strong>5 jours ouvrés</strong> suivant
            la réception de la réclamation.
          </li>
          <li>
            <strong>Réponse de fond :</strong> dans les <strong>15 jours ouvrés</strong> suivant
            l&apos;accusé de réception (délai pouvant être prolongé si une enquête approfondie est
            nécessaire, auquel cas vous en serez informé).
          </li>
        </ul>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">4. Responsable</h2>
        <p>
          Le responsable du traitement des réclamations est{" "}
          <strong>Hachiba Said</strong>, dirigeant de PREVENSIA FORMATION.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">5. Suivi et traçabilité</h2>
        <p>
          Chaque réclamation reçue est enregistrée dans un registre interne (date, nature,
          réponse apportée, délai). Ce registre est analysé régulièrement dans le cadre de notre
          démarche d&apos;amélioration continue, conformément aux exigences Qualiopi.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">6. Voies de recours externes</h2>
        <p>
          Si votre réclamation ne peut être résolue à notre niveau, vous pouvez saisir un
          médiateur ou les autorités compétentes :
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Médiation de la consommation :</strong> conformément à l&apos;article L.612-1 du
            Code de la consommation, vous pouvez recourir gratuitement à un médiateur. Liste des
            médiateurs agréés :{" "}
            <a
              href="https://www.economie.gouv.fr/mediation-conso"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-700 underline underline-offset-2"
            >
              economie.gouv.fr/mediation-conso
            </a>
            .
          </li>
          <li>
            <strong>Plateforme européenne de règlement en ligne des litiges :</strong>{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-700 underline underline-offset-2"
            >
              ec.europa.eu/consumers/odr
            </a>
            .
          </li>
        </ul>
      </section>

      <div className="mt-12 border-t border-slate-200 pt-8 flex gap-6 text-sm">
        <Link href="/qualite" className="text-red-700 underline underline-offset-2">
          ← Qualité &amp; Qualiopi
        </Link>
        <Link href="/" className="text-red-700 underline underline-offset-2">
          Accueil
        </Link>
      </div>
    </main>
  );
}
