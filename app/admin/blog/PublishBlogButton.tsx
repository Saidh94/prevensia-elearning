"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function PublishBlogButton({ postId }: { postId: string }) {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const router = useRouter();

  async function handlePublish() {
    if (!confirm("Publier cet article sur le blog ?")) return;
    setLoading(true);
    try {
      await fetch("/api/admin/blog", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: postId,
          status: "published",
          published_at: new Date().toISOString(),
        }),
      });
      setDone(true);
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <span className="rounded-lg bg-emerald-100 px-3 py-1.5 text-xs font-semibold text-emerald-700">
        ✅ Publié
      </span>
    );
  }

  return (
    <button
      onClick={handlePublish}
      disabled={loading}
      className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-50"
    >
      {loading ? "Publication…" : "✅ Valider & Publier"}
    </button>
  );
}
