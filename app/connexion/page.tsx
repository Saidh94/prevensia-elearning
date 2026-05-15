import type { Metadata } from "next";
import { Suspense } from "react";
import ConnexionForm from "./connexion-form";

export const metadata: Metadata = {
  title: "Connexion à votre espace apprenant | PREVENSIA FORMATION",
  description:
    "Connectez-vous à votre espace apprenant PREVENSIA pour accéder à vos formations e-learning, suivre votre progression et télécharger vos attestations.",
  robots: { index: false, follow: false },
};

type ConnexionPageProps = {
  searchParams?: Promise<{
    redirectTo?: string;
  }>;
};

export default async function ConnexionPage({
  searchParams,
}: ConnexionPageProps) {
  const params = await searchParams;
  const redirectTo = params?.redirectTo || "/dashboard";

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <Suspense
        fallback={
          <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-sm">
            <h1 className="text-center text-2xl font-bold text-slate-900">
              Connexion
            </h1>
            <p className="mt-4 text-center text-sm text-slate-500">
              Chargement...
            </p>
          </div>
        }
      >
        <ConnexionForm redirectTo={redirectTo} />
      </Suspense>
    </main>
  );
}