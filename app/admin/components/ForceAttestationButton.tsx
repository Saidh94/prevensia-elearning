"use client";

import { useState } from "react";

/**
 * Bouton "Forcer attestation" sécurisé :
 * — Confirmation obligatoire avec motif
 * — Téléchargement PDF via fetch (pas de submit direct)
 * — Motif envoyé à l'API pour audit côté serveur
 */
export function ForceAttestationButton({
  enrollmentId,
}: {
  enrollmentId: string;
}) {
  const [open, setOpen] = useState(false);
  const [motif, setMotif] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleOpen() {
    setMotif("");
    setError(null);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
    setMotif("");
    setError(null);
  }

  async function handleConfirm() {
    if (!motif.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/attestation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          enrollmentId,
          forceAdminCompletion: true,
          forceReason: motif.trim(),
        }),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(
          (json as { error?: string }).error ?? `Erreur ${res.status}`
        );
      }

      // Télécharger le PDF
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `attestation-forcee-${enrollmentId.slice(0, 8)}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      handleClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Bouton déclencheur */}
      <button
        type="button"
        onClick={handleOpen}
        className="rounded-lg border border-slate-900 px-3 py-2 text-xs font-semibold text-slate-900 transition hover:bg-slate-100"
        title="Forcer le statut terminé et télécharger l'attestation"
      >
        Forcer attestation
      </button>

      {/* Modale de confirmation */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="force-attestation-title"
        >
          <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
            {/* En-tête */}
            <div className="mb-4 flex items-start gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-100">
                <svg
                  className="h-5 w-5 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                  />
                </svg>
              </div>
              <div>
                <h3
                  id="force-attestation-title"
                  className="text-base font-bold text-slate-900"
                >
                  Forcer l&apos;attestation ?
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Cette action va marquer la formation comme{" "}
                  <strong>terminée</strong> et générer l&apos;attestation PDF.
                  Elle sera enregistrée avec votre identifiant admin.
                </p>
              </div>
            </div>

            {/* Champ motif */}
            <div className="mb-4">
              <label
                htmlFor="force-attestation-motif"
                className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500"
              >
                Motif (obligatoire) *
              </label>
              <textarea
                id="force-attestation-motif"
                rows={3}
                value={motif}
                onChange={(e) => setMotif(e.target.value)}
                placeholder="Ex. Entretien réalisé en présentiel le 12/05, validation accordée par le responsable formation."
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-800 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
              />
              {!motif.trim() && (
                <p className="mt-1 text-xs text-red-600">
                  Le motif est requis pour tracer l&apos;action.
                </p>
              )}
            </div>

            {/* Erreur API */}
            {error && (
              <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                {error}
              </div>
            )}

            {/* Boutons */}
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={handleClose}
                className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Annuler
              </button>
              <button
                type="button"
                disabled={loading || !motif.trim()}
                onClick={handleConfirm}
                className="rounded-xl bg-amber-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Génération…" : "Confirmer et générer"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
