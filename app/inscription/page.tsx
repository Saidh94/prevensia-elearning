"use client";

import Link from "next/link";
import { FormEvent, Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const formationsParCategorie = {
  "Habilitations électriques": [
    "H0B0",
    "BS / BE Manœuvre",
    "B1 B1V B2 B2V BR BC",
    "Habilitation électrique H0B0 - Présentiel",
    "BS / BE Manœuvre - Présentiel",
    "B1 B1V B2 B2V BR BC - Présentiel",
  ],
  "Sécurité incendie": [
    "Manipulation extincteurs",
    "Guide-file / Serre-file",
    "Équipier de Première Intervention (EPI)",
    "Exploitation SSI",
    "Exploitation sprinkler et référentiels techniques",
  ],
  SST: ["SST - Formation initiale", "MAC SST"],
} as const;

type CategorieFormation = keyof typeof formationsParCategorie;

function trouverCategorieDepuisFormation(
  formation: string
): CategorieFormation | "" {
  const entree = formation.trim().toLowerCase();

  for (const [categorie, formations] of Object.entries(formationsParCategorie)) {
    const trouve = formations.some(
      (item) => item.trim().toLowerCase() === entree
    );

    if (trouve) {
      return categorie as CategorieFormation;
    }
  }

  return "";
}

function formaterDate(dateIso: string) {
  if (!dateIso) return "";
  const date = new Date(dateIso);

  if (Number.isNaN(date.getTime())) {
    return dateIso;
  }

  return date.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function InscriptionForm() {
  const searchParams = useSearchParams();

  const sessionId = searchParams.get("sessionId") ?? "";
  const formationDepuisUrl = searchParams.get("formation") ?? "";
  const dateDepuisUrl = searchParams.get("date") ?? "";
  const formatDepuisUrl = searchParams.get("format") ?? "";

  const categorieInitiale = trouverCategorieDepuisFormation(formationDepuisUrl);

  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    entreprise: "",
    categorie: categorieInitiale,
    formation: formationDepuisUrl,
    sessionId,
    dateSession: dateDepuisUrl,
    format: formatDepuisUrl,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const optionsFormation = useMemo(() => {
    if (!form.categorie) return [];
    return formationsParCategorie[form.categorie];
  }, [form.categorie]);

  useEffect(() => {
    const categorieTrouvee = trouverCategorieDepuisFormation(formationDepuisUrl);

    setForm((prev) => ({
      ...prev,
      categorie: categorieTrouvee,
      formation: formationDepuisUrl,
      sessionId,
      dateSession: dateDepuisUrl,
      format: formatDepuisUrl,
    }));
  }, [formationDepuisUrl, sessionId, dateDepuisUrl, formatDepuisUrl]);

  const isValid = useMemo(() => {
    return (
      form.nom.trim() !== "" &&
      form.prenom.trim() !== "" &&
      form.email.trim() !== "" &&
      form.categorie.trim() !== "" &&
      form.formation.trim() !== ""
    );
  }, [form]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCategorieChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nouvelleCategorie = e.target.value as CategorieFormation | "";

    setForm((prev) => {
      const formationsDisponibles = nouvelleCategorie
        ? formationsParCategorie[nouvelleCategorie]
        : [];

     const formationEncoreValide = formationsDisponibles.some(
  (item) => item === prev.formation
);

      return {
        ...prev,
        categorie: nouvelleCategorie,
        formation: formationEncoreValide ? prev.formation : "",
      };
    });
  };

  const handleFormationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    setForm((prev) => ({
      ...prev,
      formation: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess(null);
    setError(null);

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "inscription",
          ...form,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Erreur lors de l'envoi");
      }

      setSuccess(
        "Votre demande d’inscription a bien été envoyée. Nous vous recontacterons rapidement."
      );

      setForm((prev) => ({
        ...prev,
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        entreprise: "",
      }));
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Une erreur est survenue lors de l’envoi."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-600">
            PREVENSIA FORMATION
          </p>

          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Inscription à une formation
          </h1>

          <p className="mt-4 text-slate-600">
            Remplissez le formulaire ci-dessous pour demander votre inscription
            à une session de formation.
          </p>

          {formationDepuisUrl || dateDepuisUrl || formatDepuisUrl ? (
            <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-4">
              <p className="text-sm font-semibold text-green-800">
                Session sélectionnée
              </p>

              {formationDepuisUrl ? (
                <p className="mt-2 text-sm text-green-700">
                  <span className="font-semibold">Formation :</span>{" "}
                  {formationDepuisUrl}
                </p>
              ) : null}

              {dateDepuisUrl ? (
                <p className="mt-1 text-sm text-green-700">
                  <span className="font-semibold">Date :</span>{" "}
                  {formaterDate(dateDepuisUrl)}
                </p>
              ) : null}

              {formatDepuisUrl ? (
                <p className="mt-1 text-sm text-green-700">
                  <span className="font-semibold">Format :</span>{" "}
                  {formatDepuisUrl}
                </p>
              ) : null}
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Nom
                </label>
                <input
                  type="text"
                  name="nom"
                  value={form.nom}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-600"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Prénom
                </label>
                <input
                  type="text"
                  name="prenom"
                  value={form.prenom}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-600"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-600"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Téléphone
                </label>
                <input
                  type="text"
                  name="telephone"
                  value={form.telephone}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-600"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Entreprise
              </label>
              <input
                type="text"
                name="entreprise"
                value={form.entreprise}
                onChange={handleInputChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-600"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Catégorie de formation
                </label>
                <select
                  name="categorie"
                  value={form.categorie}
                  onChange={handleCategorieChange}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-red-600"
                >
                  <option value="">Choisir une catégorie</option>
                  {Object.keys(formationsParCategorie).map((categorie) => (
                    <option key={categorie} value={categorie}>
                      {categorie}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Formation
                </label>
                <select
                  name="formation"
                  value={form.formation}
                  onChange={handleFormationChange}
                  disabled={!form.categorie}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-red-600 disabled:cursor-not-allowed disabled:bg-slate-100"
                >
                  <option value="">
                    {form.categorie
                      ? "Choisir une formation"
                      : "Sélectionnez d’abord une catégorie"}
                  </option>

                  {optionsFormation.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <input type="hidden" name="sessionId" value={form.sessionId} readOnly />
            <input
              type="hidden"
              name="dateSession"
              value={form.dateSession}
              readOnly
            />
            <input type="hidden" name="format" value={form.format} readOnly />

            {success && (
              <div className="rounded-2xl border border-green-200 bg-green-50 p-4 text-green-700">
                {success}
              </div>
            )}

            {error && (
              <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-red-700">
                {error}
              </div>
            )}

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="submit"
                disabled={!isValid || isSubmitting}
                className="inline-flex rounded-xl bg-red-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
              </button>

              <Link
                href="/planning"
                className="inline-flex rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Retour au planning
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default function InscriptionPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-slate-50 py-10">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 text-slate-600">
              Chargement du formulaire...
            </div>
          </div>
        </main>
      }
    >
      <InscriptionForm />
    </Suspense>
  );
}