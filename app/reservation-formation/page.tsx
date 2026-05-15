import ReservationPageClient from "./reservation-page-client";
import {
  type ReservationSlot,
  type SlotAudience,
  type SlotCategory,
  type SlotFormat,
} from "../reservation/slots";

type ReservationFormationPageProps = {
  searchParams?: Promise<{
    audience?: string | string[];
    category?: string | string[];
    format?: string | string[];
  }>;
};

function getSingleValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] ?? "" : value ?? "";
}

function normalizeCategory(value: string): SlotCategory | "all" {
  return value === "h0b0_validation" ||
    value === "bsbe_initial" ||
    value === "bsbe_recyclage" ||
    value === "b1b2brbc_initial" ||
    value === "b1b2brbc_recyclage" ||
    value === "other"
    ? value
    : "all";
}

function normalizeAudience(value: string): SlotAudience | "all" {
  return value === "individual" || value === "group" || value === "both"
    ? value
    : "all";
}

function normalizeFormat(value: string): SlotFormat | "all" {
  return value === "virtual" || value === "onsite" || value === "in_person"
    ? value
    : "all";
}

async function fetchVirtualSlots(): Promise<ReservationSlot[]> {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

    if (!supabaseUrl || !supabaseAnonKey) return [];

    const url =
      `${supabaseUrl}/rest/v1/virtual_sessions` +
      `?select=*&order=date.asc,start_time.asc`;

    const res = await fetch(url, {
      headers: {
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) return [];

    const data: unknown = await res.json();
    if (!Array.isArray(data)) return [];

    return (
      data as {
        id: string;
        formation: string;
        date: string;
        start_time: string;
        end_time: string;
        location: string;
        seats: number;
        format: string;
        audience: string;
        category: string;
        min_participants: number;
        note: string | null;
        meeting_url: string | null;
      }[]
    ).map((row) => ({
      id: row.id,
      formation: row.formation,
      date: row.date,
      startTime: row.start_time,
      endTime: row.end_time,
      location: row.location,
      seats: row.seats,
      format: row.format as SlotFormat,
      audience: row.audience as SlotAudience,
      category: row.category as SlotCategory,
      minParticipants: row.min_participants,
      note: row.note ?? undefined,
      meetingUrl: row.meeting_url ?? undefined,
    }));
  } catch {
    return [];
  }
}

export default async function ReservationFormationPage({
  searchParams,
}: ReservationFormationPageProps) {
  const params = searchParams ? await searchParams : {};
  const slots = await fetchVirtualSlots();

  return (
    <ReservationPageClient
      initialSlots={slots}
      selectedAudience={normalizeAudience(getSingleValue(params.audience))}
      selectedCategory={normalizeCategory(getSingleValue(params.category))}
      selectedFormat={normalizeFormat(getSingleValue(params.format))}
    />
  );
}
