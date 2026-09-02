import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mon espace apprenant",
  description:
    "Accédez à vos formations e-learning, suivez votre progression et téléchargez vos attestations depuis votre espace apprenant PREVENSIA.",
  robots: { index: false, follow: false },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
