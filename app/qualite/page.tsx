import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Qualité & Qualiopi | PREVENSIA FORMATION",
  description:
    "Démarche qualité de PREVENSIA FORMATION : certification Qualiopi visée (Actions de formation), indicateurs qualité, règlement intérieur, CGV, procédure réclamation, accessibilité handicap.",
  alternates: { canonical: "https://prevensia-formation.fr/qualite" },
};

const sections = [
  {
    id: "certification",
    title: "Certification Qualiopi",
    content: COMPANY.qualiopiObtenu
      ? `PREVENSIA FORMATION est certifié Qualiopi au titre de la catégorie « ${COMPANY.qualiopiCategorie} ».`
      : "PREVENSIA FORMATION a engagé sa démarche de certification Qualiopi au titre de la catégorie « Actions de formation ». L'audit de certification est prévu prochainement. En attendant l'obtention du certificat, la mention de certification obtenue n'est pas utilisée sur ce site.",
  },
];

function SectionBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10 space-y-3 text-sm text-slate-700">
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      {children}
    </section>
  );
}

export default function QualitePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900">Qualité &amp; Qualiopi</h1>
      <p className="mt-2 text-sm text-slate-500">Dernière mise à jour : septembre 2026</p>

      {/* 1. Certification */}
      <SectionBlock title="1. Certification Qualiopi">
        <p>{sections[0].content}</p>
        {COMPANY.qualiopiObtenu && (
          <p className="mt-2">
            <a
              href="/documents/certificat-qualiopi.pdf"
              className="text-red-700 underline underline-offset-2 hover:text-red-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Télécharger le certificat Qualiopi (PDF)
            </a>
          </p>
        )}
      </SectionBlock>

      {/* 2. NDA */}
      <SectionBlock title="2. Numéro de déclaration d'activité (NDA)">
        {COMPANY.nda ? (
          <>
            <p>
              <strong>NDA :</strong> {COMPANY.nda}
            </p>
            <p>Enregistré auprès de la Préfecture d&apos;Île-de-France. Cet enregistrement ne vaut pas agrément de l&apos;État.</p>
          </>
        ) : (
          <p>
            Le numéro de déclaration d&apos;activité est en cours d&apos;obtention auprès de la Préfecture d&apos;Île-de-France. Il sera affiché ici dès réception.
          </p>
        )}
      </SectionBlock>

      {/* 3. Indicateurs qualité */}
      <SectionBlock title="3. Indicateurs qualité">
        <p>
          Conformément aux exigences Qualiopi (indicateur 32, critère 7), PREVENSIA FORMATION collecte et analyse les indicateurs suivants :
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Taux de satisfaction stagiaires (questionnaire de fin de formation)</li>
          <li>Taux de réussite aux évaluations finales</li>
          <li>Taux d&apos;abandon en cours de formation</li>
          <li>Nombre de stagiaires évalués</li>
          <li>Taux de réponse aux questionnaires</li>
        </ul>
        <p className="mt-3 italic text-slate-500">
          Indicateurs en cours de consolidation — publication prévue au 1er trimestre 2027.
        </p>
      </SectionBlock>

      {/* 4. Procédure réclamation */}
      <SectionBlock title="4. Procédure de réclamation">
        <p>
          Toute réclamation peut être adressée par écrit à{" "}
          <a
            href="mailto:contact@prevensia-formation.fr"
            className="text-red-700 underline underline-offset-2"
          >
            contact@prevensia-formation.fr
          </a>{" "}
          ou par courrier à l&apos;adresse du siège social ({COMPANY.addressFull}).
        </p>
        <p>
          Délai d&apos;accusé de réception : <strong>5 jours ouvrés</strong>. Délai de réponse : <strong>15 jours ouvrés</strong>.
        </p>
        <p>
          Responsable des réclamations : Hachiba Said, dirigeant. Chaque réclamation est traitée, tracée et analysée dans le cadre de l&apos;amélioration continue.
        </p>
        <p>
          Pour plus de détails :{" "}
          <Link href="/reclamation" className="text-red-700 underline underline-offset-2">
            Procédure de réclamation complète
          </Link>
          .
        </p>
      </SectionBlock>

      {/* 5. Accessibilité handicap */}
      <SectionBlock title="5. Accessibilité et handicap (PSH)">
        <p>
          PREVENSIA FORMATION s&apos;engage à rendre ses formations accessibles à toute personne en situation de handicap. Un référent handicap est disponible pour analyser vos besoins et proposer des adaptations pédagogiques, matérielles ou organisationnelles.
        </p>
        <p>
          Pour plus de détails :{" "}
          <Link href="/handicap-accessibilite" className="text-red-700 underline underline-offset-2">
            Politique handicap &amp; accessibilité
          </Link>
          .
        </p>
      </SectionBlock>

      {/* 6. Documents */}
      <SectionBlock title="6. Documents disponibles">
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <Link href="/reclamation" className="text-red-700 underline underline-offset-2">
              Procédure de réclamation
            </Link>
          </li>
          <li>
            <Link href="/handicap-accessibilite" className="text-red-700 underline underline-offset-2">
              Politique handicap &amp; accessibilité
            </Link>
          </li>
          <li>
            <Link href="/mentions-legales" className="text-red-700 underline underline-offset-2">
              Mentions légales
            </Link>
          </li>
          <li>
            <Link href="/politique-confidentialite" className="text-red-700 underline underline-offset-2">
              Politique de confidentialité
            </Link>
          </li>
          <li>
            <Link href="/reglement-interieur" className="text-red-700 underline underline-offset-2">
              Règlement intérieur
            </Link>
          </li>
          <li>
            <Link href="/cgv" className="text-red-700 underline underline-offset-2">
              Conditions générales de vente (CGV)
            </Link>
          </li>
          {COMPANY.qualiopiObtenu && (
            <li>
              <a
                href="/documents/certificat-qualiopi.pdf"
                className="text-red-700 underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Certificat Qualiopi (PDF)
              </a>
            </li>
          )}
        </ul>
      </SectionBlock>

      {/* 7. Financement */}
      <SectionBlock title="7. Financement des formations">
        <p>
          Nos formations sont susceptibles d&apos;être prises en charge selon les critères de votre OPCO de rattachement ou d&apos;autres financeurs (France Travail, FNE-Formation). La prise en charge dépend de votre situation, du dispositif mobilisable et de votre OPCO.
        </p>
        <p>
          Le CPF n&apos;est mobilisable que pour les formations réellement éligibles. Contactez-nous pour vérifier l&apos;éligibilité de votre parcours :{" "}
          <a href="mailto:contact@prevensia-formation.fr" className="text-red-700 underline underline-offset-2">
            contact@prevensia-formation.fr
          </a>
          .
        </p>
      </SectionBlock>

      <div className="mt-12 border-t border-slate-200 pt-8">
        <Link href="/" className="text-sm text-red-700 underline underline-offset-2">
          ← Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
