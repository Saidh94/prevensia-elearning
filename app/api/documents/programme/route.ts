import { NextResponse } from "next/server";
import {
  generateProgrammePdf,
  buildProgrammeInputFromModuleContent,
  sanitizeFileName,
} from "@/lib/programme/generate-programme-pdf";
import { getModuleContentBySlug, getModuleLabelBySlug } from "@/lib/supabase/elearning/module-registry";

export const runtime = "nodejs";

/**
 * Génère le programme de formation (PDF) pour un module donné, à partir de son
 * contenu structuré. Endpoint public en lecture (pas d'authentification requise)
 * puisque le programme doit pouvoir être consulté avant achat, conformément aux
 * usages des organismes de formation. Aucune donnée personnelle n'est exposée.
 */
async function handle(slug: string | null) {
  if (!slug) {
    return NextResponse.json({ error: "Parametre 'slug' manquant." }, { status: 400 });
  }

  const content = getModuleContentBySlug(slug);

  if (!content) {
    return NextResponse.json({ error: "Formation introuvable." }, { status: 404 });
  }

  const title = getModuleLabelBySlug(slug) || content.title;
  const input = buildProgrammeInputFromModuleContent(content, title);
  const pdfBytes = await generateProgrammePdf(input);
  const fileName = `programme-${sanitizeFileName(title)}`;

  return new NextResponse(Buffer.from(pdfBytes), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${fileName}.pdf"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  return handle(searchParams.get("slug"));
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") || "";
  let slug: string | null = null;

  if (contentType.includes("application/json")) {
    const body = (await request.json()) as Record<string, unknown>;
    slug = typeof body.slug === "string" ? body.slug : null;
  } else {
    const formData = await request.formData();
    slug = String(formData.get("slug") || "") || null;
  }

  return handle(slug);
}
