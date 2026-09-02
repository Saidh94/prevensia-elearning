import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { Metadata } from "next";
import { InterviewBookingClient } from "./InterviewBookingClient";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Réserver mon entretien de validation",
  description: "Choisissez un créneau pour votre entretien de validation avec un formateur PREVENSIA.",
  robots: { index: false, follow: false },
};

export default async function EntretienPage({
  searchParams,
}: {
  searchParams: Promise<{ enrollment_id?: string; type?: string }>;
}) {
  const { enrollment_id, type } = await searchParams;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/connexion");

  // Vérifier l'inscription si fournie
  let formationTitle = "Formation PREVENSIA";
  const enrollmentId = enrollment_id ?? "";

  if (enrollmentId) {
    const { data: enrollment } = await supabase
      .from("enrollments")
      .select(`
        id,
        status,
        formations!inner(title)
      `)
      .eq("id", enrollmentId)
      .eq("user_id", user.id)
      .single();

    if (!enrollment) {
      redirect("/booking");
    }

    const formations = enrollment.formations;
    formationTitle = Array.isArray(formations)
      ? (formations[0] as { title: string })?.title ?? formationTitle
      : (formations as { title: string } | null)?.title ?? formationTitle;
  }

  // Créneaux disponibles
  const { data: slots } = await supabase
    .from("interview_slots")
    .select(`
      id,
      date,
      start_time,
      end_time,
      formation_type,
      max_participants,
      notes,
      interview_bookings(count)
    `)
    .gte("date", new Date().toISOString().split("T")[0])
    .order("date", { ascending: true })
    .order("start_time", { ascending: true });

  // Filtrer les créneaux disponibles (non pleins et compatibles avec le type)
  const formationType = type ?? "h0b0";
  const availableSlots = (slots ?? []).filter((slot) => {
    const booked =
      Array.isArray(slot.interview_bookings)
        ? (slot.interview_bookings[0] as { count: number })?.count ?? 0
        : 0;
    const hasSpace = booked < slot.max_participants;
    const typeMatch =
      slot.formation_type === "both" ||
      slot.formation_type === formationType;
    return hasSpace && typeMatch;
  });

  // Vérifier si une réservation existe déjà
  const { data: existingBooking } = enrollmentId
    ? await supabase
        .from("interview_bookings")
        .select(`
          id,
          zoom_join_url,
          status,
          interview_slots(date, start_time, end_time)
        `)
        .eq("enrollment_id", enrollmentId)
        .eq("status", "confirmed")
        .maybeSingle()
    : { data: null };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-green-700">
          Entretien de validation
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Réserver votre créneau
        </h1>
        <p className="mt-3 text-slate-600">
          <strong>{formationTitle}</strong> — choisissez la date et l'heure qui vous conviennent.
          Un lien Zoom sera généré automatiquement et envoyé par email.
        </p>

        <div className="mt-8">
          <InterviewBookingClient
            enrollmentId={enrollmentId}
            formationType={formationType}
            availableSlots={availableSlots.map((s) => ({
              id: s.id,
              date: s.date,
              start_time: s.start_time,
              end_time: s.end_time,
              formation_type: s.formation_type,
              notes: s.notes,
            }))}
            existingBooking={
              existingBooking
                ? {
                    id: existingBooking.id,
                    zoomJoinUrl: existingBooking.zoom_join_url,
                    slot: Array.isArray(existingBooking.interview_slots)
                      ? (existingBooking.interview_slots[0] as {
                          date: string;
                          start_time: string;
                          end_time: string;
                        })
                      : (existingBooking.interview_slots as {
                          date: string;
                          start_time: string;
                          end_time: string;
                        } | null),
                  }
                : null
            }
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/booking"
            className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            ← Retour à la planification
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            Mon espace e-learning
          </Link>
        </div>
      </div>
    </div>
  );
}
