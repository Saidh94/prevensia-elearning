"use client";

import type { ModuleResourceVideo } from "@/lib/supabase/elearning/module-types";

// Extrait un ID de vidéo YouTube d'une URL de vidéo directe
// (youtu.be/ID ou youtube.com/watch?v=ID). Renvoie null pour les liens qui
// ne pointent pas vers une vidéo précise (ex. page de recherche d'une
// chaîne), qui ne peuvent pas être intégrés.
export function extractYouTubeId(url: string): string | null {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");
    if (host === "youtu.be") {
      const id = parsed.pathname.slice(1);
      return id || null;
    }
    if (host === "youtube.com" || host === "m.youtube.com") {
      if (parsed.pathname === "/watch") {
        return parsed.searchParams.get("v");
      }
      if (parsed.pathname.startsWith("/embed/")) {
        return parsed.pathname.split("/embed/")[1] || null;
      }
    }
    return null;
  } catch {
    return null;
  }
}

// Carte vidéo : ouvre systématiquement la ressource dans un nouvel onglet.
// (La tentative d'intégration en iframe a été abandonnée : sur certains
// réseaux/postes, YouTube est bloqué au niveau réseau — pas seulement par
// un bloqueur de pub — et aucune iframe ne passe dans ce cas. Le lien
// externe reste la solution qui fonctionne pour tout le monde.)
function ExternalResourceCard({ video }: { video: ModuleResourceVideo }) {
  return (
    <article className="rounded-[1.25rem] border border-slate-200 bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-700">
        {video.provider ?? "Vidéo pédagogique"}
      </p>
      <h3 className="mt-3 text-lg font-bold text-slate-900">{video.title}</h3>
      {video.description ? (
        <p className="mt-3 text-sm leading-7 text-slate-600">{video.description}</p>
      ) : null}
      <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-sm leading-6 text-slate-700">
          Cliquez sur le bouton ci-dessous pour ouvrir la ressource dans un nouvel onglet.
        </p>
        <a
          href={video.url}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          {video.ctaLabel ?? "Voir la vidéo"}
        </a>
      </div>
    </article>
  );
}

export function ResourceVideoCard({ video }: { video: ModuleResourceVideo }) {
  return <ExternalResourceCard video={video} />;
}
