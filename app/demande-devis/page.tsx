"use client";

import { useState } from "react";

export default function DemandeDevis() {
  const [formationType, setFormationType] = useState("");
  const [formationDetail, setFormationDetail] = useState("");

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
          Décrivez votre besoin en formation en habilitation électrique, SST,
          sécurité incendie, exploitation SSI ou exploitation sprinkler. Nous
          vous répondrons avec une proposition adaptée à votre activité, à votre
          effectif et à votre délai souhaité.
        </p>

        <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
          <p>
            <strong>Email :</strong> prevensia.formation@outlook.fr
          </p>
          <p>
            <strong>Téléphone :</strong> 01 89 62 94 92
          </p>
        </div>

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
              onChange={(e) => {
                setFormationType(e.target.value);
                setFormationDetail("");
              }}
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-700 focus:ring-2 focus:ring-red-100"
            >
              <option value="">Sélectionnez une famille de formation</option>
              <option value="habilitation">Habilitation électrique</option>
              <option value="sst">SST</option>
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
                onChange={(e) => setFormationDetail(e.target.value)}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-700 focus:ring-2 focus:ring-red-100"
              >
                <option value="">Sélectionnez une habilitation</option>
                <option value="h0b0">H0B0</option>
                <option value="bs-be-manoeuvre">BS / BE Manœuvre</option>
                <option value="b1-b1v-b2-b2v-br-bc">
                  B1 B1V B2 B2V BR BC
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
                onChange={(e) => setFormationDetail(e.target.value)}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-700 focus:ring-2 focus:ring-red-100"
              >
                <option value="">Sélectionnez une formation SST</option>
                <option value="sst-initial">SST initial</option>
                <option value="mac-sst">MAC SST</option>
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
                onChange={(e) => setFormationDetail(e.target.value)}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-700 focus:ring-2 focus:ring-red-100"
              >
                <option value="">Sélectionnez une formation SSI</option>
                <option value="exploitation-ssi">Exploitation SSI</option>
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
                onChange={(e) => setFormationDetail(e.target.value)}
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
                onChange={(e) => setFormationDetail(e.target.value)}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-700 focus:ring-2 focus:ring-red-100"
              >
                <option value="">Sélectionnez une formation incendie</option>
                <option value="manipulation-extincteurs">
                  Manipulation des extincteurs
                </option>
                <option value="guide-file-serre-file">
                  Guide-file / Serre-file
                </option>
                <option value="evacuation-incendie">
                  Évacuation incendie
                </option>
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
              className="min-h-[160px] w-full rounded-[1.5rem] border border-slate-300 px-4 py-3 outline-none transition focus:border-red-700 focus:ring-2 focus:ring-red-100"
            />
          </div>

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