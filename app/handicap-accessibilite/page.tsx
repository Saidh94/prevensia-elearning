import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Accessibilité & Handicap (PSH) | PREVENSIA FORMATION",
  description:
    "Politique handicap de PREVENSIA FORMATION : référent handicap, adaptations pédagogiques, modalités d'accès pour les personnes en situation de handicap.",
  alternates: { canonical: "https://prevensia-formation.fr/handicap-accessibilite" },
};

export default function HandicapAccessibilitePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900">
        Accessibilité &amp; Handicap (PSH)
      </h1>
      <p className="mt-2 text-sm text-slate-500">Dernière mise à jour : septembre 2026</p>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">Notre engagement</h2>
        <p>
          PREVENSIA FORMATION s&apos;engage à rendre ses formations accessibles à toute personne en
          situation de handicap (PSH), conformément aux dispositions de la loi n° 2005-102 du
          11 février 2005 et aux exigences de la certification Qualiopi.
        </p>
        <p>
          Chaque situation est traitée individuellement, en amont de l&apos;inscription, afin de
          proposer les adaptations les plus appropriées.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">Référent handicap</h2>
        <p>
          <strong>Hachiba Said</strong> est le référent handicap de PREVENSIA FORMATION. Il est
          votre interlocuteur dédié pour toute question relative à l&apos;accessibilité et aux
          aménagements nécessaires.
        </p>
        <p>
          <strong>Contact :</strong>{" "}
          <a
            href="mailto:contact@prevensia-formation.fr"
            className="text-red-700 underline underline-offset-2 hover:text-red-800"
          >
            contact@prevensia-formation.fr
          </a>{" "}
          — {COMPANY.phone}
        </p>
        <p>
          <strong>Délai de réponse :</strong> 5 jours ouvrés maximum.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">Analyse des besoins</h2>
        <p>
          Lors de votre inscription ou prise de contact, nous vous invitons à nous informer de
          votre situation afin que nous puissions :
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Évaluer vos besoins spécifiques (mobilité, vision, audition, cognitif, etc.)</li>
          <li>Identifier les adaptations pédagogiques et matérielles possibles</li>
          <li>Vérifier la compatibilité des locaux ou de la modalité e-learning retenue</li>
          <li>
            Vous orienter, si nécessaire, vers un organisme partenaire mieux adapté à votre
            situation
          </li>
        </ul>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">Adaptations possibles</h2>
        <p>Selon la nature du handicap et la formation concernée, nous pouvons notamment :</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Adapter les supports de cours (grande police, contraste, versions audio)</li>
          <li>Aménager les horaires ou le rythme de la formation</li>
          <li>Proposer des temps supplémentaires pour les évaluations</li>
          <li>Faciliter l&apos;accès aux locaux (étude de l&apos;accessibilité PMR)</li>
          <li>Recourir à des modalités à distance (e-learning, classe virtuelle)</li>
          <li>Faire appel à un interprète en langue des signes (LSF) si besoin</li>
        </ul>
        <p className="italic text-slate-500">
          Certaines adaptations nécessitent un délai de mise en place. Contactez-nous au plus
          tôt avant le début de la formation.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">Orientation si adaptation impossible</h2>
        <p>
          Si la nature de la formation ou les contraintes techniques ne permettent pas d&apos;assurer
          un accueil adapté à votre situation, nous vous orienterons vers un organisme partenaire
          ou une structure spécialisée mieux à même de vous accueillir dans de bonnes conditions.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">Accessibilité numérique</h2>
        <p>
          Notre plateforme e-learning est accessible depuis tout navigateur récent. Si vous
          rencontrez des difficultés d&apos;utilisation liées à votre handicap, contactez notre
          référent pour que nous puissions vous accompagner.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">Contact</h2>
        <p>
          Pour toute demande d&apos;adaptation ou d&apos;information :{" "}
          <a
            href="mailto:contact@prevensia-formation.fr"
            className="text-red-700 underline underline-offset-2"
          >
            contact@prevensia-formation.fr
          </a>{" "}
          · {COMPANY.phone}
        </p>
        <p>{COMPANY.addressFull}</p>
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
