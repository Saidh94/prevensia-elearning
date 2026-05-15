"use client";

import Link from "next/link";
import { useMemo } from "react";
import {
  type ReservationSlot,
  type SlotAudience,
  type SlotCategory,
  type SlotFormat,
} from "../reservation/slots";

type ReservationPageClientProps = {
  initialSlots: ReservationSlot[];
  selectedAudience: SlotAudience | "all";
  selectedCategory: SlotCategory | "all";
  selectedFormat: SlotFormat | "all";
};

const categoryLabels: Record<SlotCategory, string> = {
  h0b0_validation: "H0B0 / H0V - entretien 30 min",
  bsbe_initial: "BS / BE Manoeuvre - initiale",
  bsbe_recyclage: "BS / BE Manoeuvre - recyclage",
  b1b2brbc_initial: "BT electricien - initiale ou parcours cible",
  b1b2brbc_recyclage: "BT electricien - recyclage",
  other: "Autres validations",
};

const formatLabels: Record<SlotFormat, string> = {
  virtual: "Classe virtuelle",
  onsite: "En entreprise",
  in_person: "Salle / présentiel",
};

const audienceLabels: Record<SlotAudience, string> = {
  individual: "Individuel",
  group: "Groupe / entreprise",
  both: "Individuel ou groupe",
};

const canonicalFormationsByCategory: Record<SlotCategory, string> = {
  h0b0_validation: "H0B0 / H0V - E-learning + entretien 30 min",
  bsbe_initial: "BS / BE Manoeuvre - E-learning + classe virtuelle",
  bsbe_recyclage: "BS / BE Manoeuvre - E-learning + visio de recyclage",
  b1b2brbc_initial: "B1 / B1V / B2 / B2V / BR / BC - Parcours BT multi-symboles",
  b1b2brbc_recyclage:
    "B1 / B1V / B2 / B2V / BR / BC - Recyclage multi-symboles",
  other: "Habilitation électrique - accompagnement sur mesure",
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(`${value}T12:00:00`));
}

function compareSlots(a: ReservationSlot, b: ReservationSlot) {
  return `${a.date}-${a.startTime}`.localeCompare(`${b.date}-${b.startTime}`);
}

function buildFilterHref(
  category?: SlotCategory | "all",
  audience?: SlotAudience | "all",
  format?: SlotFormat | "all"
) {
  const params = new URLSearchParams();

  if (category && category !== "all") params.set("category", category);
  if (audience && audience !== "all") params.set("audience", audience);
  if (format && format !== "all") params.set("format", format);

  const query = params.toString();
  return query ? `/reservation-formation?${query}` : "/reservation-formation";
}

function buildInscriptionHref(slot: ReservationSlot) {
  const params = new URLSearchParams({
    sessionId: slot.id,
    formation:
      canonicalFormationsByCategory[slot.category ?? "other"] ?? slot.formation,
    date: slot.date,
    format: formatLabels[slot.format ?? "in_person"],
  });

  return `/inscription?${params.toString()}`;
}

function buildQuoteHref(slot: ReservationSlot) {
  const params = new URLSearchParams({
    formation: slot.formation,
    date: slot.date,
    format: formatLabels[slot.format ?? "in_person"],
    location: slot.location,
  });

  const detailByCategory: Partial<Record<SlotCategory, string>> = {
    h0b0_validation: "h0b0-h0v",
    bsbe_recyclage: "bs-be-recyclage",
    b1b2brbc_initial: "b1-b1v-b2-b2v-br-bc",
    b1b2brbc_recyclage: "b1-b1v-b2-b2v-br-bc-recyclage",
  };

  if ((slot.category ?? "other") !== "other") {
    params.set("type", "habilitation");
  }

  if ((slot.category ?? "other") === "bsbe_initial") {
    params.set(
      "detail",
      slot.audience === "group" || slot.format === "onsite"
        ? "bs-be-manoeuvre-entreprise"
        : "bs-be-manoeuvre"
    );
  } else {
    const detail = detailByCategory[slot.category ?? "other"];
    if (detail) {
      params.set("detail", detail);
    }
  }

  return `/demande-devis?${params.toString()}`;
}

function getPrimaryAction(slot: ReservationSlot) {
  const isGroupFlow = slot.audience === "group" || slot.format === "onsite";

  if (isGroupFlow) {
    return {
      href: buildQuoteHref(slot),
      label: "Demander ce format entreprise",
    };
  }

  return {
    href: buildInscriptionHref(slot),
    label: "Demander mon inscription",
  };
}

export default function ReservationPageClient({
  initialSlots,
  selectedAudience,
  selectedCategory,
  selectedFormat,
}: ReservationPageClientProps) {
  const slots = useMemo(
    () => initialSlots.slice().sort(compareSlots),
    [initialSlots]
  );

  const filteredSlots = useMemo(() => {
    return slots.filter((slot) => {
      const categoryMatch =
        selectedCategory === "all" || slot.category === selectedCategory;
      const audienceMatch =
        selectedAudience === "all" || slot.audience === selectedAudience;
      const formatMatch =
        selectedFormat === "all" || slot.format === selectedFormat;

      return categoryMatch && audienceMatch && formatMatch;
    });
  }, [selectedAudience, selectedCategory, selectedFormat, slots]);

  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-8 px-6 py-8 lg:grid-cols-[1.4fr_1fr] lg:px-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-700">
                Réservation formation
              </p>
              <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Entretiens, classes virtuelles et journées terrain PREVENSIA
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                PREVENSIA distingue la théorie e-learning, le quiz puis la
                séquence finale avec formateur. Selon le parcours, vous pouvez
                organiser un entretien H0B0 / H0V, une classe virtuelle BS /
                BE Manoeuvre ou une journée présentielle BT électricien pour
                B1 / B1V, B2 / B2V, BR, BC ou parcours multi-symboles, avec une
                lecture claire entre besoins individuels, groupes et entreprises.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/demande-devis"
                  className="inline-flex items-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Demander une organisation sur mesure
                </Link>
                <Link
                  href="/booking"
                  className="inline-flex items-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Revenir au parcours apprenant
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              <article className="rounded-[1.5rem] border border-blue-200 bg-blue-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-700">
                  Employeurs / groupes
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Pour les groupes et entreprises, PREVENSIA peut proposer une
                  classe virtuelle planifiée, une organisation en entreprise ou
                  une journée terrain selon le nombre d&apos;apprenants et le
                  niveau visé.
                </p>
              </article>

              <article className="rounded-[1.5rem] border border-amber-200 bg-amber-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-700">
                  Individuels / salariés seuls
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Les apprenants seuls sont orientés vers l&apos;entretien H0B0 /
                  H0V, les classes virtuelles BS / BE Manoeuvre disponibles ou
                  les sessions BT programmées. Certaines sessions BS / BE
                  Manoeuvre initiales s&apos;ouvrent lorsque le nombre minimal de
                  participants est atteint.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                Filtres rapides
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                Trouver le bon format de validation
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href={buildFilterHref("all", "all", "all")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  selectedCategory === "all" &&
                  selectedAudience === "all" &&
                  selectedFormat === "all"
                    ? "bg-slate-900 text-white"
                    : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                Toutes les sessions
              </Link>
              <Link
                href={buildFilterHref("h0b0_validation", "all", "virtual")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  selectedCategory === "h0b0_validation"
                    ? "bg-slate-900 text-white"
                    : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                H0B0 / H0V
              </Link>
              <Link
                href={buildFilterHref("bsbe_initial", "all", "all")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  selectedCategory === "bsbe_initial"
                    ? "bg-slate-900 text-white"
                    : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                BS et BE initial
              </Link>
              <Link
                href={buildFilterHref("bsbe_recyclage", "all", "virtual")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  selectedCategory === "bsbe_recyclage"
                    ? "bg-slate-900 text-white"
                    : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                BS et BE recyclage
              </Link>
              <Link
                href={buildFilterHref("b1b2brbc_initial", "all", "all")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  selectedCategory === "b1b2brbc_initial"
                    ? "bg-slate-900 text-white"
                    : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                B1 / B1V / B2 / B2V / BR / BC
              </Link>
              <Link
                href={buildFilterHref("all", "group", "all")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  selectedAudience === "group"
                    ? "bg-slate-900 text-white"
                    : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                Entreprises / groupes
              </Link>
            </div>
          </div>
        </section>

        <section className="grid gap-5">
          {filteredSlots.length === 0 ? (
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                Aucun créneau visible
              </p>
              <h2 className="mt-3 text-2xl font-bold text-slate-900">
                Aucun créneau ne correspond à ce filtre
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Vous pouvez réinitialiser les filtres ou demander une
                organisation sur mesure pour votre entreprise.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link
                  href="/reservation-formation"
                  className="inline-flex items-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Réinitialiser
                </Link>
                <Link
                  href="/demande-devis"
                  className="inline-flex items-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Demander un devis
                </Link>
              </div>
            </div>
          ) : (
            filteredSlots.map((slot) => {
              const primaryAction = getPrimaryAction(slot);

              return (
                <article
                  key={slot.id}
                  className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="grid gap-6 lg:grid-cols-[1.2fr_0.9fr]">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-red-700">
                        {categoryLabels[slot.category ?? "other"]}
                      </p>
                      <h2 className="mt-3 text-2xl font-bold text-slate-900">
                        {slot.formation}
                      </h2>
                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        {slot.note ||
                          "Session organisée pour finaliser la séquence encadrée dans un cadre clair et professionnel."}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700">
                          {formatLabels[slot.format ?? "in_person"]}
                        </span>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700">
                          {audienceLabels[slot.audience ?? "both"]}
                        </span>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700">
                          {slot.seats} place{slot.seats > 1 ? "s" : ""}
                        </span>
                      </div>
                    </div>

                    <div className="grid gap-4 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                          Date
                        </p>
                        <p className="mt-2 text-base font-semibold text-slate-900">
                          {formatDate(slot.date)}
                        </p>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                            Horaire
                          </p>
                          <p className="mt-2 text-base font-semibold text-slate-900">
                            {slot.startTime} - {slot.endTime}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                            Lieu
                          </p>
                          <p className="mt-2 text-base font-semibold text-slate-900">
                            {slot.location}
                          </p>
                        </div>
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                          Condition d&apos;ouverture
                        </p>
                        <p className="mt-2 text-sm leading-7 text-slate-700">
                          Minimum {slot.minParticipants ?? 1} apprenant
                          {(slot.minParticipants ?? 1) > 1 ? "s" : ""} pour
                          confirmer ce créneau.
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-3 pt-2">
                        <Link
                          href={primaryAction.href}
                          className="inline-flex items-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                        >
                          {primaryAction.label}
                        </Link>
                        <Link
                          href="/booking"
                          className="inline-flex items-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                        >
                          Accéder au parcours apprenant
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })
          )}
        </section>
      </div>
    </main>
  );
}
