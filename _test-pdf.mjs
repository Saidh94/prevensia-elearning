import { generateConventionPdf } from "./lib/convention/generate-convention-pdf.ts";
import { generateProgrammePdf, buildProgrammeInputFromModuleContent } from "./lib/programme/generate-programme-pdf.ts";
import { ssiap1ModuleContent } from "./lib/supabase/elearning/ssiap1-content.ts";
import fs from "fs/promises";

const conv = await generateConventionPdf({
  numero: "CONV-TEST0001",
  dateSignature: new Date().toISOString(),
  beneficiaryName: "ACME SARL",
  beneficiaryIsCompany: true,
  learnerFullName: "Jean Dupont",
  learnerEmail: "jean.dupont@example.com",
  formationTitle: "Sensibilisation SSIAP1 - Securite Incendie ERP",
  durationLabel: "2h30 a 3h",
  deliveryFormat: "E-learning",
  objective: "Comprendre le cadre reglementaire et le role du SSIAP1.",
  priceHT: 100,
  priceTTC: 120,
  tvaRate: 20,
  tvaExempt: false,
  accessStart: new Date().toISOString(),
  accessEnd: null,
});
await fs.writeFile("/tmp/test-convention.pdf", conv);
console.log("Convention OK, bytes:", conv.length);

const prog = await generateProgrammePdf(buildProgrammeInputFromModuleContent(ssiap1ModuleContent));
await fs.writeFile("/tmp/test-programme.pdf", prog);
console.log("Programme OK, bytes:", prog.length);
