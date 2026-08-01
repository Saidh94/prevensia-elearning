import { redirect } from "next/navigation";
import PasswordUpdateForm from "./password-update-form";
import { createClient } from "@/lib/supabase/server";

export default async function PasswordPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/connexion?redirectTo=/mot-de-passe");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
      <PasswordUpdateForm email={user.email ?? ""} />
    </main>
  );
}
