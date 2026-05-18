import { createClient } from "@/lib/supabase/server";

type AuditAction =
  | "payment_confirmed"
  | "access_activated"
  | "enrollment_validated"
  | "attestation_forced"
  | "slot_created"
  | "slot_deleted"
  | "booking_cancelled";

interface LogAuditOptions {
  adminId: string;
  action: AuditAction;
  targetType: "enrollment" | "session" | "user" | "slot" | "booking";
  targetId: string;
  metadata?: Record<string, unknown>;
}

/**
 * Insère une entrée dans admin_audit_logs.
 * Non-bloquant : les erreurs sont loggées en console mais ne stoppent pas le flux.
 */
export async function logAdminAction(opts: LogAuditOptions): Promise<void> {
  try {
    const supabase = await createClient();
    const { error } = await supabase.from("admin_audit_logs").insert({
      admin_id: opts.adminId,
      action: opts.action,
      target_type: opts.targetType,
      target_id: opts.targetId,
      metadata: opts.metadata ?? {},
    });
    if (error) {
      console.error("[AUDIT LOG ERROR]", error.message);
    }
  } catch (err) {
    console.error("[AUDIT LOG FATAL]", err);
  }
}
