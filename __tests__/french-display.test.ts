import { formatFrenchDisplayText } from "@/lib/french-display";

describe("formatFrenchDisplayText", () => {
  it("returns empty string for null", () => {
    expect(formatFrenchDisplayText(null)).toBe("");
  });

  it("returns empty string for undefined", () => {
    expect(formatFrenchDisplayText(undefined)).toBe("");
  });

  it("returns empty string for empty string", () => {
    expect(formatFrenchDisplayText("")).toBe("");
  });

  it("passes through text without known mojibake or replacements", () => {
    const input = "Bonjour le monde";
    expect(formatFrenchDisplayText(input)).toBe("Bonjour le monde");
  });

  it("repairs common mojibake sequences", () => {
    // Ã© is the mojibake for é (UTF-8 é = 0xC3 0xA9 read as Latin-1)
    const input = "SÃ©curitÃ©";
    const result = formatFrenchDisplayText(input);
    expect(result).toContain("é"); // é
  });

  it("replaces known unaccented French words", () => {
    expect(formatFrenchDisplayText("securite")).toBe("sécurité");
    expect(formatFrenchDisplayText("Securite")).toBe("Sécurité");
    expect(formatFrenchDisplayText("SECURITE")).toBe("SÉCURITÉ");
  });

  it("replaces 'role' with 'rôle' preserving case", () => {
    expect(formatFrenchDisplayText("role")).toBe("rôle");
    expect(formatFrenchDisplayText("Role")).toBe("Rôle");
  });

  it("replaces 'evaluation' with 'évaluation'", () => {
    expect(formatFrenchDisplayText("evaluation")).toBe("évaluation");
    expect(formatFrenchDisplayText("Evaluation")).toBe("Évaluation");
  });

  it("does not replace partial word matches", () => {
    // 'evaluation' pattern has word boundary — 'evaluations' has its own entry
    const result = formatFrenchDisplayText("evaluations");
    expect(result).toBe("évaluations");
  });

  it("handles a real-world sentence with multiple replacements", () => {
    const input = "La securite et la prevention sont des roles cles";
    const result = formatFrenchDisplayText(input);
    expect(result).toContain("sécurité");
    expect(result).toContain("rôle");
  });
});
