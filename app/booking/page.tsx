import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function BookingPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/connexion");
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-slate-900">
          Planifier votre entretien
        </h1>

        <p className="mt-4 leading-7 text-slate-600">
          À l’issue de votre parcours e-learning, un entretien de 30 minutes
          avec un formateur ou un responsable pédagogique permet de valider les
          connaissances acquises et de préparer la suite du parcours.
        </p>

        <div className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
          <ul className="space-y-2 text-sm text-slate-700">
            <li>• Vérification des connaissances théoriques</li>
            <li>• Échange avec un formateur ou un gérant</li>
            <li>• Préparation de la validation pratique</li>
            <li>• Orientation sur la suite du parcours</li>
          </ul>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border bg-white shadow-sm">
          <a
  href="TON_VRAI_LIEN_CALENDLY"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex rounded-2xl bg-green-600 px-6 py-4 text-base font-semibold text-white hover:bg-green-700"
>
  Accéder au calendrier
</a>
        </div>
      </div>
    </div>
  );
}