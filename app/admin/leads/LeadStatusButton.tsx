"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const STATUS_OPTIONS = [
  { value: "new", label: "Nouveau" },
  { value: "contacted", label: "Contacté" },
  { value: "qualified", label: "Qualifié" },
  { value: "converted", label: "Converti" },
  { value: "lost", label: "Perdu" },
];

const STATUS_COLORS: Record<string, string> = {
  new: "bg-blue-100 text-blue-800 border-blue-200",
  contacted: "bg-amber-100 text-amber-800 border-amber-200",
  qualified: "bg-violet-100 text-violet-800 border-violet-200",
  converted: "bg-emerald-100 text-emerald-800 border-emerald-200",
  lost: "bg-slate-100 text-slate-500 border-slate-200",
};

export function LeadStatusButton({ leadId, currentStatus }: { leadId: string; currentStatus: string }) {
  const [status, setStatus] = useState(currentStatus);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleChange(newStatus: string) {
    if (newStatus === status) return;
    setLoading(true);
    try {
      await fetch("/api/admin/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: leadId, status: newStatus }),
      });
      setStatus(newStatus);
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  const label = STATUS_OPTIONS.find((s) => s.value === status)?.label ?? status;

  return (
    <div className="relative">
      <select
        value={status}
        disabled={loading}
        onChange={(e) => handleChange(e.target.value)}
        className={`cursor-pointer rounded-full border px-2.5 py-0.5 text-xs font-semibold outline-none transition ${STATUS_COLORS[status] ?? "bg-slate-100 text-slate-600 border-slate-200"} ${loading ? "opacity-50" : ""}`}
      >
        {STATUS_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
