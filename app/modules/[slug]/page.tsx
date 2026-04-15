import { notFound } from "next/navigation";
import FormationHomePage from "../../components/elearning/FormationHomePage";
import { modulesContent } from "../../../lib/supabase/elearning/module-content";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ModuleLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const normalizedSlug = slug?.toLowerCase();
  const moduleData = modulesContent[normalizedSlug];

  if (!moduleData) {
    notFound();
  }

  return <FormationHomePage slug={normalizedSlug} moduleData={moduleData} />;
}