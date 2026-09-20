import type { Metadata } from "next";
import { Suspense } from "react";
import type { EmailOtpType } from "@supabase/supabase-js";
import ConfirmForm from "./confirm-form";

export const metadata: Metadata = {
  title: "Confirmer mon accès",
  robots: { index: false, follow: false },
};

type ConfirmPageProps = {
  searchParams?: Promise<{
    token_hash?: string;
    type?: string;
  }>;
};

const VALID_TYPES = new Set<EmailOtpType>([
  "signup",
  "invite",
  "magiclink",
  "recovery",
  "email_change",
]);

export default async function ConfirmPage({ searchParams }: ConfirmPageProps) {
  const params = await searchParams;
  const tokenHash = params?.token_hash?.trim() || null;
  const rawType = params?.type?.trim() || null;
  const type =
    rawType && VALID_TYPES.has(rawType as EmailOtpType)
      ? (rawType as EmailOtpType)
      : null;

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <Suspense
        fallback={
          <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-sm text-center">
            <h1 className="text-2xl font-bold text-slate-900">Confirmer mon accès</h1>
            <p className="mt-4 text-sm text-slate-500">Chargement...</p>
          </div>
        }
      >
        <ConfirmForm tokenHash={tokenHash} type={type} />
      </Suspense>
    </main>
  );
}
