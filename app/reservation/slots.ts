export type ReservationSlot = {
  id: string;
  formation: string;
  date: string; // YYYY-MM-DD
  startTime: string; // HH:mm
  endTime: string; // HH:mm
  location: string;
  seats: number;
};

export const RESERVATION_SLOTS_KEY = "prevensia-reservation-slots";

export const defaultSlots: ReservationSlot[] = [
  {
    id: "slot-1",
    formation: "Manipulation des extincteurs",
    date: "2026-05-12",
    startTime: "09:00",
    endTime: "12:00",
    location: "Paris",
    seats: 8,
  },
  {
    id: "slot-2",
    formation: "Guide-file / Serre-file",
    date: "2026-05-20",
    startTime: "14:00",
    endTime: "17:00",
    location: "Lyon",
    seats: 10,
  },
  {
    id: "slot-3",
    formation: "SST - Initial",
    date: "2026-06-03",
    startTime: "09:00",
    endTime: "17:00",
    location: "Lille",
    seats: 12,
  },
];

export const cloneDefaultSlots = (): ReservationSlot[] =>
  defaultSlots.map((slot) => ({ ...slot }));

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

export const readSlots = (): ReservationSlot[] => {
  if (typeof window === "undefined") return cloneDefaultSlots();

  const raw = window.localStorage.getItem(RESERVATION_SLOTS_KEY);
  if (!raw) return cloneDefaultSlots();

  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) {
      return cloneDefaultSlots();
    }

    const sanitizedSlots = parsed.filter(isReservationSlot).map((slot) => ({ ...slot }));
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
  window.localStorage.setItem(RESERVATION_SLOTS_KEY, JSON.stringify(slots));
};