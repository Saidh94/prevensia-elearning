import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et protection des données personnelles (RGPD) — PREVENSIA FORMATION.",
  robots: { index: false, follow: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900">Politique de confidentialité</h1>
      <p className="mt-2 text-sm text-slate-500">Dernière mise à jour : août 2026</p>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">1. Responsable du traitement</h2>
        <p>
          Le responsable du traitement des données est <strong>PREVENSIA FORMATION</strong>,
          joignable à l'adresse : <a href="mailto:contact@prevensia-formation.fr" className="text-red-700 hover:underline">contact@prevensia-formation.fr</a>.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">2. Données collectées</h2>
        <p>Dans le cadre de nos services, nous collectons les données suivantes :</p>
        <ul className="ml-4 list-disc space-y-1">
          <li><strong>Demandes de devis et de contact :</strong> nom, prénom, email, téléphone, société, besoin en formation.</li>
          <li><strong>Inscriptions et suivi de formation :</strong> identité, coordonnées, données de progression pédagogique, résultats de quiz, attestations.</li>
          <li><strong>Navigation :</strong> données techniques (adresse IP, navigateur) nécessaires au bon fonctionnement du site.</li>
        </ul>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">3. Finalités des traitements</h2>
        <ul className="ml-4 list-disc space-y-1">
          <li>Traitement des demandes de devis et de contact</li>
          <li>Organisation et suivi des formations (inscription, accès e-learning, délivrance d'attestations)</li>
          <li>Gestion de la relation client et facturation</li>
          <li>Respect des obligations légales (archivage Qualiopi, financement OPCO)</li>
        </ul>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">4. Base légale</h2>
        <p>
          Les traitements reposent sur : l'exécution d'un contrat (formation), l'obligation légale (Qualiopi, Code du travail),
          et le consentement de la personne concernée lorsque applicable.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">5. Destinataires des données</h2>
        <p>
          Les données sont traitées par PREVENSIA FORMATION et ses sous-traitants techniques (hébergement Vercel, envoi d'e-mails Resend, paiement Stripe).
          Elles ne sont jamais vendues ni cédées à des tiers à des fins commerciales.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">6. Durée de conservation</h2>
        <ul className="ml-4 list-disc space-y-1">
          <li>Données de contact et devis : 3 ans à compter du dernier contact</li>
          <li>Données de formation : 5 ans (obligations légales Qualiopi et financement OPCO)</li>
          <li>Données de navigation : 13 mois maximum</li>
        </ul>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">7. Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez des droits suivants : accès, rectification, suppression, portabilité, limitation du traitement, opposition.
          Pour exercer ces droits, contactez-nous à{" "}
          <a href="mailto:contact@prevensia-formation.fr" className="text-red-700 hover:underline">
            contact@prevensia-formation.fr
          </a>.
          Vous pouvez également introduire une réclamation auprès de la{" "}
          <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">
            CNIL
          </a>.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">8. Cookies</h2>
        <p>
          Ce site utilise uniquement des cookies techniques strictement nécessaires (authentification, session). Aucun cookie publicitaire ou de tracking tiers n'est déposé sans votre accord.
        </p>
      </section>

      <div className="mt-12">
        <Link href="/" className="text-sm text-red-700 hover:underline">
          ← Retour à l'accueil
        </Link>
      </div>
    </main>
  );
}
