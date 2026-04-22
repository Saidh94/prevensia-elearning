import ReservationPageClient from "./reservation-page-client";
import { type SlotAudience, type SlotCategory, type SlotFormat } from "../reservation/slots";

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

export default async function ReservationFormationPage({
  searchParams,
}: ReservationFormationPageProps) {
  const params = searchParams ? await searchParams : {};

  return (
    <ReservationPageClient
      selectedAudience={normalizeAudience(getSingleValue(params.audience))}
      selectedCategory={normalizeCategory(getSingleValue(params.category))}
      selectedFormat={normalizeFormat(getSingleValue(params.format))}
    />
  );
}
