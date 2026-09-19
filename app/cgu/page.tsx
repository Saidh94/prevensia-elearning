import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation (CGU)",
  description: "Conditions générales d'utilisation de la plateforme PREVENSIA FORMATION — accès aux contenus, comptes, propriété intellectuelle, assistant IA.",
  alternates: { canonical: "https://prevensia-formation.fr/cgu" },
};

export default function CguPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900">Conditions générales d&apos;utilisation</h1>
      <p className="mt-2 text-sm text-slate-500">Dernière mise à jour : septembre 2026</p>
      <p className="mt-4 text-sm text-slate-600">
        Les présentes CGU encadrent l&apos;utilisation du site et de la plateforme e-learning{" "}
        {COMPANY.name}, distinctes des{" "}
        <Link href="/cgv" className="text-red-700 underline underline-offset-2">
          conditions générales de vente
        </Link>{" "}
        qui régissent l&apos;achat des formations. Toute création de compte ou inscription à une formation
        vaut acceptation pleine et entière des présentes CGU.
      </p>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">1. Éditeur</h2>
        <p>
          La plateforme est éditée par <strong>{COMPANY.legalName}</strong> (marque commerciale{" "}
          {COMPANY.name}), {COMPANY.addressFull} — contact :{" "}
          <a href={`mailto:${COMPANY.email}`} className="text-red-700 hover:underline">{COMPANY.email}</a>.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">2. Licence d&apos;utilisation des contenus pédagogiques</h2>
        <p>
          {COMPANY.name} concède à l&apos;utilisateur, pour la durée de son accès, une licence personnelle,
          non exclusive, non cessible et non transférable d&apos;utilisation des contenus de formation
          (vidéos, supports, quiz, livrets stagiaires). Cette licence est strictement limitée à un usage
          individuel de formation.
        </p>
        <p>
          Toute reproduction, extraction, diffusion à des tiers, mise en ligne publique ou usage commercial
          des contenus, en tout ou partie, est interdite sans autorisation écrite préalable de {COMPANY.name}.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">3. Compte utilisateur</h2>
        <p>
          Les identifiants de connexion sont personnels et confidentiels. L&apos;utilisateur est responsable
          de leur usage et s&apos;engage à informer {COMPANY.name} sans délai de toute utilisation non
          autorisée de son compte.
        </p>
        <p>
          Lorsqu&apos;un compte est créé par un tiers pour le compte de l&apos;utilisateur (par exemple par
          son employeur, dans le cadre d&apos;une formation financée par ce dernier), l&apos;utilisateur en
          est informé par e-mail lors de la création de son compte et peut exercer ses droits RGPD dans les
          conditions prévues par notre{" "}
          <Link href="/politique-confidentialite" className="text-red-700 underline underline-offset-2">
            politique de confidentialité
          </Link>.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">4. Visibilité de l&apos;employeur sur les données de formation</h2>
        <p>
          Lorsque l&apos;inscription est financée ou initiée par un employeur (espace employeur), ce dernier
          a accès au statut de progression de ses salariés (formation suivie, dates, statut d&apos;avancement,
          statut de paiement) et peut télécharger leur attestation de suivi ou de réussite, laquelle
          comporte le résultat du quiz. Les réponses détaillées aux quiz restent confidentielles et ne sont
          communiquées à l&apos;employeur que via l&apos;attestation officielle.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">5. Classes virtuelles et enregistrements</h2>
        <p>
          Lorsqu&apos;une session de formation se déroule en visioconférence (classe virtuelle), elle peut
          être enregistrée à des fins pédagogiques et de contrôle qualité. L&apos;utilisateur en est informé
          avant le début de la session ; le maintien en session après cette information vaut consentement à
          l&apos;enregistrement. Les enregistrements ne sont pas diffusés publiquement.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">6. Assistant conversationnel (chatbot IA)</h2>
        <p>
          Le site propose un assistant conversationnel destiné à répondre aux questions des visiteurs et à
          orienter les demandes commerciales. Les échanges avec cet assistant peuvent être transmis à un
          prestataire tiers spécialisé en intelligence artificielle (Anthropic) à seule fin de générer une
          réponse et, le cas échéant, d&apos;identifier une demande de contact. L&apos;utilisateur est invité
          à ne transmettre aucune donnée sensible (santé, identifiants, données bancaires) via cet outil.
          Voir la{" "}
          <Link href="/politique-confidentialite" className="text-red-700 underline underline-offset-2">
            politique de confidentialité
          </Link>{" "}
          pour le détail des sous-traitants.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">7. Propriété intellectuelle</h2>
        <p>
          {COMPANY.legalName} demeure propriétaire exclusif de l&apos;ensemble des contenus, marques, logos
          et outils logiciels de la plateforme. Aucune cession de droits n&apos;est consentie à
          l&apos;utilisateur au-delà de la licence d&apos;usage décrite à l&apos;article 2.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">8. Responsabilité et disponibilité</h2>
        <p>
          {COMPANY.name} met en œuvre les moyens raisonnables pour assurer l&apos;accès continu à la
          plateforme, sans garantie d&apos;absence d&apos;interruption. {COMPANY.name} ne saurait être tenue
          responsable des dommages indirects résultant de l&apos;utilisation du site ou d&apos;une
          indisponibilité temporaire.
        </p>
      </section>

      <section className="mt-10 space-y-3 text-sm text-slate-700">
        <h2 className="text-lg font-semibold text-slate-900">9. Droit applicable</h2>
        <p>Les présentes CGU sont soumises au droit français.</p>
      </section>

      <div className="mt-12 border-t border-slate-200 pt-8 flex gap-6 text-sm">
        <Link href="/cgv" className="text-red-700 underline underline-offset-2">
          ← CGV
        </Link>
        <Link href="/politique-confidentialite" className="text-red-700 underline underline-offset-2">
          Politique de confidentialité
        </Link>
        <Link href="/" className="text-red-700 underline underline-offset-2">
          Accueil
        </Link>
      </div>
    </main>
  );
}
