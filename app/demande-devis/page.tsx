"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

function buildPrefillMessage({
  formation,
  date,
  format,
  location,
}: {
  formation: string;
  date: string;
  format: string;
  location: string;
}) {
  const lines = [
    formation ? `Je souhaite organiser le format suivant : ${formation}.` : "",
    date ? `Date souhaitée ou créneau repéré : ${date}.` : "",
    format ? `Format repéré : ${format}.` : "",
    location ? `Lieu souhaité / repéré : ${location}.` : "",
  ].filter(Boolean);

  return lines.length > 0
    ? `${lines.join(
        "\n"
      )}\n\nMerci de me recontacter pour confirmer l'organisation et les modalités.`
    : "";
}

function DemandeDevisForm() {
  const searchParams = useSearchParams();

  const requestedType = searchParams.get("type") ?? "";
  const requestedDetail = searchParams.get("detail") ?? "";
  const requestedFormation = searchParams.get("formation") ?? "";
  const requestedDate = searchParams.get("date") ?? "";
  const requestedFormat = searchParams.get("format") ?? "";
  const requestedLocation = searchParams.get("location") ?? "";

  const [formationType, setFormationType] = useState<string>(requestedType);
  const [formationDetail, setFormationDetail] =
    useState<string>(requestedDetail);

  const prefillMessage = useMemo(
    () =>
      buildPrefillMessage({
        formation: requestedFormation,
        date: requestedDate,
        format: requestedFormat,
        location: requestedLocation,
      }),
    [requestedDate, requestedFormation, requestedFormat, requestedLocation]
  );

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
          PREVENSIA FORMATION
        </p>

        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
          Demande de devis
        </h1>

        <p className="mt-4 text-slate-600">
          Décrivez votre besoin en formation : habilitation électrique, ATEX,
          SSIAP1, SST, exploitation SSI, sécurité incendie ou exploitation
          sprinkler. Nous vous répondrons avec une proposition adaptée à votre
          activité, à votre effectif, à votre délai souhaité et au bon format
          PREVENSIA : e-learning seul, e-learning + classe virtuelle,
          e-learning + entretien 30&nbsp;min ou parcours mixte avec présentiel.
        </p>

        <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
          <p>
            <strong>Email :</strong> contact@prevensia-formation.fr
          </p>
          <p>
            <strong>Téléphone :</strong> 01 89 62 94 92
          </p>
        </div>

        {requestedFormation ||
        requestedDate ||
        requestedFormat ||
        requestedLocation ? (
          <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900">
            <p className="font-semibold">
              Contexte pré-rempli depuis le calendrier
            </p>

            {requestedFormation ? (
              <p className="mt-2">Formation : {requestedFormation}</p>
            ) : null}

            {requestedDate ? (
              <p className="mt-1">Date repérée : {requestedDate}</p>
            ) : null}

            {requestedFormat ? (
              <p className="mt-1">Format : {requestedFormat}</p>
            ) : null}

            {requestedLocation ? (
              <p className="mt-1">Lieu : {requestedLocation}</p>
            ) : null}
          </div>
        ) : null}

        <form
          action="https://formspree.io/f/myknqwyb"
          method="POST"
          className="mt-8 grid gap-5"
        >
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Vous êtes
            </label>
            <select
              name="profil"
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-700 focus:ring-2 focus:ring-red-100"
            >
              <option value="particulier">Particulier</option>
              <option value="professionnel">Professionnel</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Famille de formation
            </label>

            <select
              name="type_formation"
              required
              value={formationType}
              onChange={(event) => {
                setFormationType(event.target.value);
                setFormationDetail("");
              }}
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-700 focus:ring-2 focus:ring-red-100"
            >
              <option value="">Sélectionnez une famille de formation</option>
              <option value="habilitation">Habilitation électrique</option>
              <option value="atex">ATEX — Atmosphères Explosives</option>
              <option value="ssiap1">SSIAP1 — Sécurité Incendie ERP</option>
              <option value="sst">SST — Sauveteur Secouriste du Travail</option>
              <option value="ssi">Exploitation SSI</option>
              <option value="sprinkler">Exploitation sprinkler</option>
              <option value="incendie">Sécurité incendie</option>
            </select>
          </div>

          {formationType === "habilitation" && (
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Détail habilitation électrique
              </label>
              <select
                name="detail_formation"
                required
                value={formationDetail}
                onChange={(event) => setFormationDetail(event.target.value)}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-700 focus:ring-2 focus:ring-red-100"
              >
                <option value="">Sélectionnez une habilitation</option>
                <option value="h0b0-h0v">
                  H0B0 / H0V - E-learning + entretien 30 min
                </option>
                <option value="bs-be-manoeuvre">
                  BS / BE Manœuvre - Initiale e-learning + classe virtuelle
                </option>
                <option value="bf-hf">
                  BF / HF - Travaux non électriques sur canalisations enterrées
                </option>
                <option value="b1-b1v">
                  B1 / B1V - Parcours cible exécutant électricien
                </option>
                <option value="b1-b1v-recyclage">B1 / B1V - Recyclage</option>
                <option value="b2-b2v">
                  B2 / B2V - Parcours cible chargé de travaux
                </option>
                <option value="b2-b2v-recyclage">B2 / B2V - Recyclage</option>
                <option value="br">
                  BR - Parcours cible intervention générale
                </option>
                <option value="br-recyclage">BR - Recyclage</option>
                <option value="bc">BC - Parcours cible consignation</option>
                <option value="bc-recyclage">BC - Recyclage</option>
                <option value="be-verification-mesurage">
                  BE Vérification / BE Mesurage - Sur devis
                </option>
                <option value="b1-b1v-b2-b2v-br-bc">
                  B1 / B1V / B2 / B2V / BR / BC - Parcours BT multi-symboles
                </option>
                <option value="b1-b1v-b2-b2v-br-bc-recyclage">
                  B1 / B1V / B2 / B2V / BR / BC - Recyclage multi-symboles
                </option>
              </select>
            </div>
          )}

          {formationType === "sst" && (
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Détail formation SST
              </label>
              <select
                name="detail_formation"
                required
                value={formationDetail}
                onChange={(event) => setFormationDetail(event.target.value)}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-700 focus:ring-2 focus:ring-red-100"
              >
                <option value="">Sélectionnez une formation SST</option>
                <option value="sst-initial">SST initial</option>
                <option value="mac-sst">MAC SST</option>
              </select>
            </div>
          )}

          {formationType === "atex" && (
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Détail formation ATEX
              </label>
              <select
                name="detail_formation"
                required
                value={formationDetail}
                onChange={(event) => setFormationDetail(event.target.value)}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-700 focus:ring-2 focus:ring-red-100"
              >
                <option value="">Sélectionnez une formation ATEX</option>
                <option value="atex-sensibilisation">
                  Sensibilisation ATEX — Niveau 0 (personnel en zone)
                </option>
                <option value="atex-niveau1">
                  Formation ATEX — Niveau 1 (intervenant sur appareils)
                </option>
                <option value="atex-niveau2">
                  Formation ATEX — Niveau 2 (encadrant / référent)
                </option>
                <option value="atex-recyclage">
                  Recyclage ATEX — Maintien des compétences
                </option>
              </select>
            </div>
          )}

          {formationType === "ssiap1" && (
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Détail formation SSIAP1
              </label>
              <select
                name="detail_formation"
                required
                value={formationDetail}
                onChange={(event) => setFormationDetail(event.target.value)}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-700 focus:ring-2 focus:ring-red-100"
              >
                <option value="">Sélectionnez une formation SSIAP1</option>
                <option value="ssiap1-initiale">
                  SSIAP1 — Formation initiale (70h min, max 12 stagiaires)
                </option>
                <option value="ssiap1-recyclage">
                  SSIAP1 — Recyclage (14h / tous les 3 ans)
                </option>
              </select>
            </div>
          )}

          {formationType === "ssi" && (
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Détail formation SSI
              </label>
              <select
                name="detail_formation"
                required
                value={formationDetail}
                onChange={(event) => setFormationDetail(event.target.value)}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-700 focus:ring-2 focus:ring-red-100"
              >
                <option value="">Sélectionnez une formation SSI</option>
                <option value="exploitation-ssi">Exploitation SSI</option>
                <option value="formation-renforcee-ssi">
                  Formation SSI renforcée (ERP / IGH / ICPE)
                </option>
              </select>
            </div>
          )}

          {formationType === "sprinkler" && (
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Détail formation sprinkler
              </label>
              <select
                name="detail_formation"
                required
                value={formationDetail}
                onChange={(event) => setFormationDetail(event.target.value)}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-700 focus:ring-2 focus:ring-red-100"
              >
                <option value="">Sélectionnez une formation sprinkler</option>
                <option value="exploitation-sprinkler">
                  Exploitation sprinkler
                </option>
              </select>
            </div>
          )}

          {formationType === "incendie" && (
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Détail formation sécurité incendie
              </label>
              <select
                name="detail_formation"
                required
                value={formationDetail}
                onChange={(event) => setFormationDetail(event.target.value)}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-700 focus:ring-2 focus:ring-red-100"
              >
                <option value="">Sélectionnez une formation incendie</option>
                <option value="manipulation-extincteurs">
                  Manipulation des extincteurs
                </option>
                <option value="guide-file-serre-file">
                  Guide-file / Serre-file
                </option>
                <option value="evacuation-incendie">Évacuation incendie</option>
              </select>
            </div>
          )}

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Nom
            </label>
            <input
              type="text"
              name="nom"
              placeholder="Votre nom"
              required
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-700 focus:ring-2 focus:ring-red-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Société
            </label>
            <input
              type="text"
              name="societe"
              placeholder="Nom de la société"
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-700 focus:ring-2 focus:ring-red-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              required
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-700 focus:ring-2 focus:ring-red-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Téléphone
            </label>
            <input
              type="tel"
              name="telephone"
              placeholder="Votre téléphone"
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-700 focus:ring-2 focus:ring-red-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Nombre de participants
            </label>
            <input
              type="number"
              name="participants"
              placeholder="Ex : 8"
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-700 focus:ring-2 focus:ring-red-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Ville / lieu de formation
            </label>
            <input
              type="text"
              name="ville"
              placeholder="Ex : Paris, Noisy-le-Grand, sur site client..."
              defaultValue={requestedLocation}
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-700 focus:ring-2 focus:ring-red-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Délai souhaité
            </label>
            <input
              type="text"
              name="delai"
              placeholder="Ex : sous 15 jours, courant du mois prochain..."
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-700 focus:ring-2 focus:ring-red-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Décrivez votre besoin, le niveau attendu, le nombre de stagiaires et toute contrainte particulière."
              required
              defaultValue={prefillMessage}
              className="min-h-[160px] w-full rounded-[1.5rem] border border-slate-300 px-4 py-3 outline-none transition focus:border-red-700 focus:ring-2 focus:ring-red-100"
            />
          </div>

          <input
            type="hidden"
            name="formation_prefill"
            value={requestedFormation}
            readOnly
          />
          <input
            type="hidden"
            name="date_prefill"
            value={requestedDate}
            readOnly
          />
          <input
            type="hidden"
            name="format_prefill"
            value={requestedFormat}
            readOnly
          />
          <input
            type="hidden"
            name="location_prefill"
            value={requestedLocation}
            readOnly
          />

          <button
            type="submit"
            className="rounded-2xl bg-red-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-red-800"
          >
            Envoyer la demande
          </button>
        </form>
      </div>
    </main>
  );
}

export default function DemandeDevisPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-slate-50 px-4 py-16 text-slate-900 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm">
            Chargement du formulaire...
          </div>
        </main>
      }
    >
      <DemandeDevisForm />
    </Suspense>
  );
}