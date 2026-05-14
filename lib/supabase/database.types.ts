/**
 * Types TypeScript du schéma Supabase — PREVENSIA FORMATION
 *
 * Maintenus manuellement (pas de génération CLI Supabase dans ce projet).
 * À mettre à jour lors de chaque ajout/modification de table ou colonne.
 *
 * Usage :
 *   import type { Database } from "@/lib/supabase/database.types";
 *   const supabase = createClient<Database>(url, key);
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

// ─── Rôles ────────────────────────────────────────────────────────────────────

export type UserRole = "admin" | "apprenant" | "employeur";

export type EnrollmentStatus =
  | "pending"
  | "active"
  | "pending_interview"
  | "completed"
  | "cancelled";

export type PaymentStatus = "pending" | "paid" | "failed" | "refunded";

// ─── Tables ───────────────────────────────────────────────────────────────────

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;                   // UUID — lié à auth.users
          email: string | null;
          first_name: string | null;
          last_name: string | null;
          phone: string | null;
          company: string | null;
          role: UserRole;
          created_at: string;
          updated_at: string | null;
        };
        Insert: {
          id: string;
          email?: string | null;
          first_name?: string | null;
          last_name?: string | null;
          phone?: string | null;
          company?: string | null;
          role?: UserRole;
          created_at?: string;
          updated_at?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["profiles"]["Insert"]>;
      };

      formations: {
        Row: {
          id: string;                   // UUID
          slug: string;
          title: string;
          description: string | null;
          duration_hours: number | null;
          elearning_duration: string | null;
          mode: string | null;          // "présentiel" | "e-learning" | "mixte"
          created_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          description?: string | null;
          duration_hours?: number | null;
          elearning_duration?: string | null;
          mode?: string | null;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["formations"]["Insert"]>;
      };

      enrollments: {
        Row: {
          id: string;                   // UUID
          user_id: string;              // FK → auth.users
          formation_id: string | null;  // FK → formations
          employer_id: string | null;   // UUID employeur commanditaire
          ordered_by_employer: boolean;
          company_name: string | null;
          manager_email: string | null;
          status: EnrollmentStatus;
          payment_status: PaymentStatus | null;
          validated_at: string | null;
          validated_by: string | null;  // UUID → auth.users (admin)
          validation_note: string | null;
          access_start: string | null;
          access_end: string | null;
          completion_percent: number;   // 0..100
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          formation_id?: string | null;
          employer_id?: string | null;
          ordered_by_employer?: boolean;
          company_name?: string | null;
          manager_email?: string | null;
          status?: EnrollmentStatus;
          payment_status?: PaymentStatus | null;
          validated_at?: string | null;
          validated_by?: string | null;
          validation_note?: string | null;
          access_start?: string | null;
          access_end?: string | null;
          completion_percent?: number;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["enrollments"]["Insert"]>;
      };

      user_chapter_progress: {
        Row: {
          user_id: string;              // FK → auth.users
          formation_slug: string;
          chapter_key: string;
          chapter_order: number;
          is_completed: boolean;
          seconds_spent: number;
          min_seconds_required: number;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          formation_slug: string;
          chapter_key: string;
          chapter_order?: number;
          is_completed?: boolean;
          seconds_spent?: number;
          min_seconds_required?: number;
          updated_at?: string;
        };
        Update: Partial<
          Database["public"]["Tables"]["user_chapter_progress"]["Insert"]
        >;
      };

      employer_users: {
        Row: {
          user_id: string;              // FK → auth.users
          employer_id: string;          // UUID
          role: string;                 // "manager" | "viewer"
          created_at: string;
        };
        Insert: {
          user_id: string;
          employer_id: string;
          role?: string;
          created_at?: string;
        };
        Update: Partial<
          Database["public"]["Tables"]["employer_users"]["Insert"]
        >;
      };

      quiz_attempts: {
        Row: {
          id: string;                   // UUID
          user_id: string;              // FK → auth.users
          enrollment_id: string | null; // FK → enrollments
          formation_slug: string;
          score: number;
          total: number;
          passing_score: number;
          passed: boolean;
          score_percent: number;        // 0..100
          question_results: Json;       // [{ q: string, correct: boolean }]
          attempted_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          enrollment_id?: string | null;
          formation_slug: string;
          score: number;
          total: number;
          passing_score: number;
          passed: boolean;
          score_percent: number;
          question_results?: Json;
          attempted_at?: string;
        };
        Update: Partial<
          Database["public"]["Tables"]["quiz_attempts"]["Insert"]
        >;
      };
    };

    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      user_role: UserRole;
      enrollment_status: EnrollmentStatus;
      payment_status: PaymentStatus;
    };
  };
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Type raccourci pour une ligne de table */
export type TableRow<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Row"];

export type ProfileRow = TableRow<"profiles">;
export type FormationRow = TableRow<"formations">;
export type EnrollmentRow = TableRow<"enrollments">;
export type UserChapterProgressRow = TableRow<"user_chapter_progress">;
export type EmployerUserRow = TableRow<"employer_users">;
export type QuizAttemptRow = TableRow<"quiz_attempts">;
