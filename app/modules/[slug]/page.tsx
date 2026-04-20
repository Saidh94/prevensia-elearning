import { notFound } from "next/navigation";
import FormationHomePage from "../../components/elearning/FormationHomePage";
import {
  getModuleContentBySlug,
  resolveModuleSlug,
} from "../../../lib/supabase/elearning/module-registry";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ModuleLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const canonicalSlug = resolveModuleSlug(slug);
  const moduleData = getModuleContentBySlug(slug);

  if (!moduleData || !canonicalSlug) {
    notFound();
  }

  return <FormationHomePage slug={canonicalSlug} moduleData={moduleData} />;
}
