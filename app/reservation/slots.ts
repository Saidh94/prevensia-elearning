export type SlotFormat = "virtual" | "onsite" | "in_person";
export type SlotAudience = "individual" | "group" | "both";
export type SlotCategory =
  | "h0b0_validation"
  | "bsbe_initial"
  | "bsbe_recyclage"
  | "b1b2brbc_initial"
  | "b1b2brbc_recyclage"
  | "other";

export type ReservationSlot = {
  id: string;
  formation: string;
  date: string; // YYYY-MM-DD
  startTime: string; // HH:mm
  endTime: string; // HH:mm
  location: string;
  seats: number;
  format?: SlotFormat;
  audience?: SlotAudience;
  category?: SlotCategory;
  minParticipants?: number;
  note?: string;
};

export const RESERVATION_SLOTS_KEY = "prevensia-reservation-slots";

export const defaultSlots: ReservationSlot[] = [
  {
    id: "slot-h0b0-1",
    formation: "H0B0 / H0V - Entretien de validation",
    date: "2026-05-14",
    startTime: "09:00",
    endTime: "09:30",
    location: "Classe virtuelle",
    seats: 1,
    format: "virtual",
    audience: "individual",
    category: "h0b0_validation",
    minParticipants: 1,
    note: "Entretien individuel de 30 min apres quiz valide.",
  },
  {
    id: "slot-bsbe-group-1",
    formation: "BS et BE Manoeuvre - Initial groupe",
    date: "2026-05-22",
    startTime: "09:00",
    endTime: "12:30",
    location: "Classe virtuelle",
    seats: 8,
    format: "virtual",
    audience: "group",
    category: "bsbe_initial",
    minParticipants: 4,
    note: "Classe virtuelle initiale reservee aux groupes ou aux individuels si quorum atteint.",
  },
  {
    id: "slot-bsbe-recyclage-1",
    formation: "BS et BE Manoeuvre - Recyclage",
    date: "2026-05-29",
    startTime: "11:00",
    endTime: "12:00",
    location: "Classe virtuelle",
    seats: 4,
    format: "virtual",
    audience: "both",
    category: "bsbe_recyclage",
    minParticipants: 1,
    note: "Visio de recyclage 45 min a 1 h avec formateur.",
  },
  {
    id: "slot-b1b2-1",
    formation: "B1 / B1V / B2 / B2V / BR / BC - Journee presentielle",
    date: "2026-06-04",
    startTime: "09:00",
    endTime: "17:00",
    location: "Paris",
    seats: 10,
    format: "in_person",
    audience: "group",
    category: "b1b2brbc_initial",
    minParticipants: 4,
    note: "Journee presentielle d'application et d'evaluation pour un parcours e-learning + presentiel.",
  },
];

export const cloneDefaultSlots = (): ReservationSlot[] =>
  defaultSlots.map((slot) => ({ ...slot }));

const isValidFormat = (value: unknown): value is SlotFormat =>
  value === "virtual" || value === "onsite" || value === "in_person";

const isValidAudience = (value: unknown): value is SlotAudience =>
  value === "individual" || value === "group" || value === "both";

const isValidCategory = (value: unknown): value is SlotCategory =>
  value === "h0b0_validation" ||
  value === "bsbe_initial" ||
  value === "bsbe_recyclage" ||
  value === "b1b2brbc_initial" ||
  value === "b1b2brbc_recyclage" ||
  value === "other";

const isReservationSlot = (value: unknown): value is ReservationSlot => {
  if (!value || typeof value !== "object") return false;
  const slot = value as Partial<ReservationSlot>;
  return (
    typeof slot.id === "string" &&
    typeof slot.formation === "string" &&
    typeof slot.date === "string" &&
    typeof slot.startTime === "string" &&
    typeof slot.endTime === "string" &&
    typeof slot.location === "string" &&
    typeof slot.seats === "number" &&
    Number.isFinite(slot.seats)
  );
};

function sanitizeSlot(slot: ReservationSlot): ReservationSlot {
  return {
    ...slot,
    format: isValidFormat(slot.format) ? slot.format : "in_person",
    audience: isValidAudience(slot.audience) ? slot.audience : "both",
    category: isValidCategory(slot.category) ? slot.category : "other",
    minParticipants:
      typeof slot.minParticipants === "number" &&
      Number.isFinite(slot.minParticipants) &&
      slot.minParticipants > 0
        ? slot.minParticipants
        : 1,
    note: typeof slot.note === "string" ? slot.note : "",
  };
}

export const readSlots = (): ReservationSlot[] => {
  if (typeof window === "undefined") return cloneDefaultSlots();

  const raw = window.localStorage.getItem(RESERVATION_SLOTS_KEY);
  if (!raw) return cloneDefaultSlots();

  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) {
      return cloneDefaultSlots();
    }

    const sanitizedSlots = parsed
      .filter(isReservationSlot)
      .map((slot) => sanitizeSlot({ ...slot }));

    if (sanitizedSlots.length === 0) {
      return cloneDefaultSlots();
    }

    return sanitizedSlots;
  } catch {
    return cloneDefaultSlots();
  }
};

export const writeSlots = (slots: ReservationSlot[]) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(
    RESERVATION_SLOTS_KEY,
    JSON.stringify(slots.map(sanitizeSlot))
  );
};
