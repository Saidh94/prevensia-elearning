import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import { createZoomMeeting } from "@/lib/zoom";
import { Resend } from "resend";

export const runtime = "nodejs";

const FROM_EMAIL = "PREVENSIA <contact@prevensia-formation.fr>";
const ADMIN_EMAIL = "contact@prevensia-formation.fr";

function getResend() {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) throw new Error("RESEND_API_KEY manquante");
  return new Resend(apiKey);
}

function escapeHtml(v: string | null | undefined) {
  return (v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatDateTime(date: string, time: string, locale = "fr-FR") {
  const dt = new Date(`${date}T${time}`);
  return dt.toLocaleString(locale, {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

const logoHtml = `<div style="margin-bottom:20px;"><img src="https://prevensia-formation.fr/images/logo-prevensia.png" alt="PREVENSIA FORMATION" width="220" style="display:block;" /></div>`;

// POST /api/interview-slots/[id]/book
// body: { enrollment_id }
export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: slotId } = await params;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const enrollmentId = String(body?.enrollment_id ?? "").trim();

  if (!enrollmentId) {
    return NextResponse.json(
      { error: "enrollment_id requis" },
      { status: 400 }
    );
  }

  // 1. Vérifier que l'inscription appartient bien à cet utilisateur
  const { data: enrollment, error: enrollError } = await supabase
    .from("enrollments")
    .select(`
      id,
      status,
      formations!inner(title, slug)
    `)
    .eq("id", enrollmentId)
    .eq("user_id", user.id)
    .single();

  if (enrollError || !enrollment) {
    return NextResponse.json(
      { error: "Inscription introuvable ou non autorisée" },
      { status: 404 }
    );
  }

  // 2. Vérifier que le créneau existe et n'est pas plein
  const { data: slot, error: slotError } = await supabase
    .from("interview_slots")
    .select(`
      *,
      interview_bookings(count)
    `)
    .eq("id", slotId)
    .single();

  if (slotError || !slot) {
    return NextResponse.json({ error: "Créneau introuvable" }, { status: 404 });
  }

  const booked =
    Array.isArray(slot.interview_bookings)
      ? (slot.interview_bookings[0] as { count: number })?.count ?? 0
      : 0;

  if (booked >= slot.max_participants) {
    return NextResponse.json(
      { error: "Ce créneau est complet" },
      { status: 409 }
    );
  }

  // 3. Vérifier qu'une réservation n'existe pas déjà pour cet enrollment
  const { data: existingBooking } = await supabase
    .from("interview_bookings")
    .select("id")
    .eq("enrollment_id", enrollmentId)
    .eq("status", "confirmed")
    .maybeSingle();

  if (existingBooking) {
    return NextResponse.json(
      { error: "Un entretien est déjà réservé pour cette inscription" },
      { status: 409 }
    );
  }

  // 4. Récupérer le profil de l'apprenant
  const { data: profile } = await supabase
    .from("profiles")
    .select("first_name, last_name, email")
    .eq("id", user.id)
    .single();

  const firstName = profile?.first_name ?? "";
  const lastName = profile?.last_name ?? "";
  const email = profile?.email ?? user.email ?? "";

  const formationTitle = Array.isArray(enrollment.formations)
    ? (enrollment.formations[0] as { title: string })?.title
    : (enrollment.formations as { title: string } | null)?.title ?? "Formation PREVENSIA";

  // 5. Calculer la durée en minutes
  const [sh, sm] = slot.start_time.split(":").map(Number);
  const [eh, em] = slot.end_time.split(":").map(Number);
  const durationMinutes = (eh * 60 + em) - (sh * 60 + sm);

  // 6. Créer la réunion Zoom
  const startDatetime = `${slot.date}T${slot.start_time}:00`;
  const topic = `Entretien PREVENSIA — ${formationTitle} — ${firstName} ${lastName}`;

  let zoomMeetingId = "";
  let zoomJoinUrl = "";
  let zoomStartUrl = "";
  let zoomPassword = "";

  try {
    const zoomMeeting = await createZoomMeeting({
      topic,
      startTime: startDatetime,
      durationMinutes,
      agenda: `Entretien de validation — ${formationTitle}\nApprenant : ${firstName} ${lastName} (${email})`,
    });
    zoomMeetingId = zoomMeeting.meetingId;
    zoomJoinUrl = zoomMeeting.joinUrl;
    zoomStartUrl = zoomMeeting.startUrl;
    zoomPassword = zoomMeeting.password;
  } catch (zoomErr) {
    const zoomErrMsg = zoomErr instanceof Error ? zoomErr.message : String(zoomErr);
    // On insère quand même la réservation sans lien Zoom (admin devra créer manuellement)
    console.error("Zoom error:", zoomErrMsg);
  }

  // 7. Créer la réservation en base
  const { data: booking, error: bookingError } = await supabase
    .from("interview_bookings")
    .insert({
      slot_id: slotId,
      enrollment_id: enrollmentId,
      user_id: user.id,
      zoom_meeting_id: zoomMeetingId || null,
      zoom_join_url: zoomJoinUrl || null,
      zoom_start_url: zoomStartUrl || null,
      status: "confirmed",
    })
    .select()
    .single();

  if (bookingError || !booking) {
    return NextResponse.json(
      { error: bookingError?.message ?? "Erreur création réservation" },
      { status: 500 }
    );
  }

  const dateLabel = formatDateTime(slot.date, slot.start_time);
  const endLabel = new Date(`${slot.date}T${slot.end_time}`).toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // 8. Envoyer les emails
  try {
    const resend = getResend();

    // Email apprenant
    const learnerHtml = `
      ${logoHtml}
      <h2 style="color:#1e293b;">Votre entretien est confirmé ✓</h2>
      <p>Bonjour ${escapeHtml(firstName)},</p>
      <p>Votre entretien de validation pour <strong>${escapeHtml(formationTitle)}</strong> est bien réservé.</p>

      <div style="background:#f1f5f9;border-radius:12px;padding:20px;margin:20px 0;">
        <p style="margin:4px 0;"><strong>📅 Date :</strong> ${escapeHtml(dateLabel)}</p>
        <p style="margin:4px 0;"><strong>🕐 Fin prévue :</strong> ${escapeHtml(endLabel)}</p>
        ${slot.notes ? `<p style="margin:4px 0;"><strong>📝 Note :</strong> ${escapeHtml(slot.notes)}</p>` : ""}
      </div>

      ${zoomJoinUrl ? `
      <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:12px;padding:20px;margin:20px 0;">
        <p style="margin:0 0 12px;font-weight:600;color:#1e40af;">Lien de connexion Zoom</p>
        <a href="${escapeHtml(zoomJoinUrl)}" style="display:inline-block;background:#2563eb;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;">
          Rejoindre l'entretien →
        </a>
        ${zoomPassword ? `<p style="margin:12px 0 0;font-size:13px;color:#475569;">Code : <strong>${escapeHtml(zoomPassword)}</strong></p>` : ""}
      </div>
      ` : `
      <p style="color:#b45309;">⚠ Le lien de visio sera transmis séparément par notre équipe.</p>
      `}

      <p>En cas de problème, contactez-nous : <a href="mailto:contact@prevensia-formation.fr">contact@prevensia-formation.fr</a></p>
      <p>Cordialement,<br /><strong>PREVENSIA FORMATION</strong></p>
    `;

    // Email admin
    const adminHtml = `
      ${logoHtml}
      <h2>Nouvelle réservation d'entretien</h2>
      <p><strong>Apprenant :</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
      <p><strong>Email :</strong> ${escapeHtml(email)}</p>
      <p><strong>Formation :</strong> ${escapeHtml(formationTitle)}</p>
      <p><strong>Créneau :</strong> ${escapeHtml(dateLabel)} → ${escapeHtml(endLabel)}</p>
      <p><strong>Réservation ID :</strong> ${escapeHtml(booking.id)}</p>
      ${zoomStartUrl ? `<p><strong>Lien hôte Zoom :</strong> <a href="${escapeHtml(zoomStartUrl)}">Démarrer la réunion</a></p>` : ""}
      ${zoomJoinUrl ? `<p><strong>Lien participant :</strong> <a href="${escapeHtml(zoomJoinUrl)}">${escapeHtml(zoomJoinUrl)}</a></p>` : ""}
      ${!zoomMeetingId ? `<p style="color:#b45309;">⚠ La réunion Zoom n'a pas pu être créée automatiquement. Veuillez créer un lien manuellement.</p>` : ""}
    `;

    await Promise.all([
      resend.emails.send({
        from: FROM_EMAIL,
        to: [email],
        subject: `Entretien PREVENSIA confirmé — ${formationTitle}`,
        html: learnerHtml,
      }),
      resend.emails.send({
        from: FROM_EMAIL,
        to: [ADMIN_EMAIL],
        subject: `Réservation entretien — ${firstName} ${lastName} — ${formationTitle}`,
        html: adminHtml,
      }),
    ]);
  } catch (mailErr) {
    console.error("Email error:", mailErr);
    // non-bloquant
  }

  return NextResponse.json({
    ok: true,
    bookingId: booking.id,
    zoomJoinUrl: zoomJoinUrl || null,
    date: slot.date,
    startTime: slot.start_time,
    endTime: slot.end_time,
  });
}
