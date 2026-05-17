import {
  computeKPIs,
  formatDate,
  getPaymentClasses,
  getPaymentLabel,
  getSingleValue,
  getStatusClasses,
  getStatusLabel,
  type AdminRow,
} from "@/lib/admin-helpers";

// ── formatDate ───────────────────────────────────────────────────────────────

describe("formatDate", () => {
  it("returns '—' for null", () => {
    expect(formatDate(null)).toBe("—");
  });

  it("returns '—' for empty string", () => {
    expect(formatDate("")).toBe("—");
  });

  it("returns '—' for invalid date string", () => {
    expect(formatDate("not-a-date")).toBe("—");
  });

  it("formats a valid ISO date in French locale (dd/mm/yyyy)", () => {
    const result = formatDate("2025-06-15T00:00:00Z");
    // En-tête locale fr-FR → 15/06/2025
    expect(result).toMatch(/15[/\-.]06[/\-.]2025/);
  });
});

// ── getStatusLabel ────────────────────────────────────────────────────────────

describe("getStatusLabel", () => {
  it.each([
    ["completed",         "Terminée"],
    ["pending_interview", "Entretien à planifier"],
    ["in_progress",       "En cours"],
    ["not_started",       "Non démarrée"],
  ])('returns correct label for "%s"', (status, expected) => {
    expect(getStatusLabel(status)).toBe(expected);
  });

  it("returns the raw value for unknown status", () => {
    expect(getStatusLabel("some_custom_status")).toBe("some_custom_status");
  });

  it("returns '—' for null", () => {
    expect(getStatusLabel(null)).toBe("—");
  });
});

// ── getStatusClasses ──────────────────────────────────────────────────────────

describe("getStatusClasses", () => {
  it("returns emerald classes for completed", () => {
    expect(getStatusClasses("completed")).toContain("emerald");
  });

  it("returns amber classes for pending_interview", () => {
    expect(getStatusClasses("pending_interview")).toContain("amber");
  });

  it("returns blue classes for in_progress", () => {
    expect(getStatusClasses("in_progress")).toContain("blue");
  });

  it("returns slate classes for not_started and unknown", () => {
    expect(getStatusClasses("not_started")).toContain("slate");
    expect(getStatusClasses(null)).toContain("slate");
    expect(getStatusClasses("anything_else")).toContain("slate");
  });
});

// ── getPaymentLabel ───────────────────────────────────────────────────────────

describe("getPaymentLabel", () => {
  it("returns 'Payé' for paid", () => {
    expect(getPaymentLabel("paid")).toBe("Payé");
  });

  it("returns 'En attente' for any other value", () => {
    expect(getPaymentLabel("pending")).toBe("En attente");
    expect(getPaymentLabel(null)).toBe("En attente");
    expect(getPaymentLabel("")).toBe("En attente");
  });
});

// ── getPaymentClasses ─────────────────────────────────────────────────────────

describe("getPaymentClasses", () => {
  it("returns emerald for paid", () => {
    expect(getPaymentClasses("paid")).toContain("emerald");
  });

  it("returns red for non-paid", () => {
    expect(getPaymentClasses("pending")).toContain("red");
    expect(getPaymentClasses(null)).toContain("red");
  });
});

// ── getSingleValue ────────────────────────────────────────────────────────────

describe("getSingleValue", () => {
  it("returns empty string for undefined", () => {
    expect(getSingleValue(undefined)).toBe("");
  });

  it("returns the string as-is when not an array", () => {
    expect(getSingleValue("hello")).toBe("hello");
  });

  it("returns first element of an array", () => {
    expect(getSingleValue(["first", "second"])).toBe("first");
  });

  it("returns empty string for empty array", () => {
    expect(getSingleValue([])).toBe("");
  });
});

// ── computeKPIs ───────────────────────────────────────────────────────────────

function makeRow(overrides: Partial<AdminRow> = {}): AdminRow {
  return {
    id: "enrollment-1",
    user_id: "user-1",
    fullName: "Jean Dupont",
    email: "jean@example.com",
    formationTitle: "SSIAP1",
    companyName: "ACME",
    managerEmail: "mgr@acme.fr",
    status: "in_progress",
    accessStart: "2025-01-01",
    accessEnd: "2025-12-31",
    paymentStatus: "paid",
    forcedByAdmin: false,
    ...overrides,
  };
}

describe("computeKPIs", () => {
  it("returns all zeros for empty array", () => {
    const kpis = computeKPIs([]);
    expect(kpis.total).toBe(0);
    expect(kpis.uniqueApprenants).toBe(0);
    expect(kpis.paid).toBe(0);
    expect(kpis.inProgress).toBe(0);
    expect(kpis.completed).toBe(0);
    expect(kpis.pendingInterview).toBe(0);
    expect(kpis.pendingPayment).toBe(0);
    expect(kpis.expiringAccess).toBe(0);
  });

  it("counts total rows correctly", () => {
    const rows = [makeRow(), makeRow({ id: "2" }), makeRow({ id: "3" })];
    expect(computeKPIs(rows).total).toBe(3);
  });

  it("counts unique apprenants (deduplicated by user_id)", () => {
    const rows = [
      makeRow({ user_id: "u1" }),
      makeRow({ user_id: "u1" }), // same user, different enrollment
      makeRow({ user_id: "u2" }),
    ];
    expect(computeKPIs(rows).uniqueApprenants).toBe(2);
  });

  it("counts paid enrollments", () => {
    const rows = [
      makeRow({ paymentStatus: "paid" }),
      makeRow({ paymentStatus: "pending" }),
      makeRow({ paymentStatus: "paid" }),
    ];
    expect(computeKPIs(rows).paid).toBe(2);
  });

  it("counts in_progress enrollments", () => {
    const rows = [
      makeRow({ status: "in_progress" }),
      makeRow({ status: "completed" }),
      makeRow({ status: "in_progress" }),
    ];
    expect(computeKPIs(rows).inProgress).toBe(2);
  });

  it("counts completed enrollments", () => {
    const rows = [
      makeRow({ status: "completed" }),
      makeRow({ status: "in_progress" }),
    ];
    expect(computeKPIs(rows).completed).toBe(1);
  });

  it("counts pending_interview enrollments", () => {
    const rows = [
      makeRow({ status: "pending_interview" }),
      makeRow({ status: "completed" }),
    ];
    expect(computeKPIs(rows).pendingInterview).toBe(1);
  });

  it("counts pendingPayment: non-paid AND not cancelled", () => {
    const rows = [
      makeRow({ paymentStatus: "pending", status: "in_progress" }),  // pending payment ✓
      makeRow({ paymentStatus: "paid",    status: "in_progress" }),  // paid → not counted
      makeRow({ paymentStatus: "pending", status: "cancelled" }),    // cancelled → not counted
    ];
    expect(computeKPIs(rows).pendingPayment).toBe(1);
  });

  it("counts expiringAccess: access ends within 7 days and not completed/cancelled", () => {
    const now = new Date("2025-06-01T12:00:00Z");
    const in3days  = "2025-06-04T00:00:00Z"; // within 7 days ✓
    const in10days = "2025-06-11T00:00:00Z"; // beyond 7 days ✗
    const yesterday = "2025-05-31T00:00:00Z"; // already expired ✗

    const rows = [
      makeRow({ accessEnd: in3days,  status: "in_progress" }),  // ✓
      makeRow({ accessEnd: in3days,  status: "completed" }),     // completed → not counted
      makeRow({ accessEnd: in3days,  status: "cancelled" }),     // cancelled → not counted
      makeRow({ accessEnd: in10days, status: "in_progress" }),   // too far → not counted
      makeRow({ accessEnd: yesterday,status: "in_progress" }),   // expired → not counted
      makeRow({ accessEnd: null,     status: "in_progress" }),   // no end date → not counted
    ];
    expect(computeKPIs(rows, now).expiringAccess).toBe(1);
  });
});
