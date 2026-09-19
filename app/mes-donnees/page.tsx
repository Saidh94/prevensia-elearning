"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function MesDonneesPage() {
  const router = useRouter();
  const supabase = createClient();

  const [confirming, setConfirming] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState("");

  async function handleDelete() {
    setDeleting(true);
    setError("");
    try {
      const res = await fetch("/api/account/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ confirm: true }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Erreur");
      await supabase.auth.signOut();
      router.replace("/");
      router.refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Une erreur est survenue.");
      setDeleting(false);
    }
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900">Mes données personnelles</h1>
      <p className="mt-2 text-sm text-slate-500">
        Conformément au RGPD, vous pouvez télécharger vos données ou demander la suppression de votre
        compte. Voir notre{" "}
        <Link href="/politique-confidentialite" className="text-red-700 underline underline-offset-2">
          politique de confidentialité
        </Link>{" "}
        pour le détail des durées de conservation.
      </p>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Télécharger mes données</h2>
        <p className="mt-2 text-sm text-slate-600">
          Récupérez un export JSON de votre profil, vos formations et vos résultats de quiz.
        </p>
        <a
          href="/api/account/export"
          className="mt-4 inline-flex rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-700"
        >
          Télécharger mes données
        </a>
      </section>

      <section className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-6">
        <h2 className="text-lg font-semibold text-red-800">Supprimer mon compte</h2>
        <p className="mt-2 text-sm text-red-700">
          Votre identité (nom, email) sera anonymisée et votre connexion désactivée. Les données que
          nous devons légalement conserver (attestations Qualiopi, factures) sont conservées sous forme
          anonyme pour la durée restante de leur conservation légale.
        </p>

        {error && <p className="mt-3 text-sm text-red-800">{error}</p>}

        {!confirming ? (
          <button
            onClick={() => setConfirming(true)}
            className="mt-4 inline-flex rounded-xl border border-red-300 bg-white px-5 py-2.5 text-sm font-semibold text-red-700 hover:bg-red-100"
          >
            Supprimer mon compte
          </button>
        ) : (
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={handleDelete}
              disabled={deleting}
              className="inline-flex rounded-xl bg-red-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-800 disabled:opacity-50"
            >
              {deleting ? "Suppression en cours..." : "Confirmer la suppression définitive"}
            </button>
            <button
              onClick={() => setConfirming(false)}
              disabled={deleting}
              className="inline-flex rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Annuler
            </button>
          </div>
        )}
      </section>

      <div className="mt-10">
        <Link href="/dashboard" className="text-sm text-red-700 hover:underline">
          ← Retour au tableau de bord
        </Link>
      </div>
    </main>
  );
}
