// Types partagés pour les créneaux de classes virtuelles / entretiens PREVENSIA.
// La persistance est assurée par Supabase (table virtual_sessions).
// Ces types sont utilisés par : app/api/virtual-sessions, reservation-formation, admin/calendrier.

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
  date: string;        // YYYY-MM-DD
  startTime: string;   // HH:mm
  endTime: string;     // HH:mm
  location: string;
  seats: number;
  format?: SlotFormat;
  audience?: SlotAudience;
  category?: SlotCategory;
  minParticipants?: number;
  note?: string;
  meetingUrl?: string; // Lien Zoom / Teams (affiché uniquement aux admins et inscrits)
};
