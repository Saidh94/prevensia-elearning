"use client";

import { useState } from "react";
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

function EmbeddedVideoPlayer({
  video,
  videoId,
}: {
  video: ModuleResourceVideo;
  videoId: string;
}) {
  const [started, setStarted] = useState(false);
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white">
      <div className="relative aspect-video w-full bg-slate-900">
        {started ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&cc_load_policy=1&cc_lang_pref=fr&hl=fr&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setStarted(true)}
            aria-label={`Lire la vidéo : ${video.title}`}
            className="group absolute inset-0 flex h-full w-full items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${thumbnailUrl})` }}
          >
            <span className="absolute inset-0 bg-slate-900/30 transition group-hover:bg-slate-900/40" />
            <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-red-700 shadow-lg transition group-hover:scale-105">
              <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-700">
          {video.provider ?? "Vidéo pédagogique"}
        </p>
        <h3 className="mt-3 text-lg font-bold text-slate-900">{video.title}</h3>
        {video.description ? (
          <p className="mt-3 text-sm leading-7 text-slate-600">{video.description}</p>
        ) : null}
        <p className="mt-3 text-[11px] leading-5 text-slate-400">
          Sous-titres disponibles via l&apos;icône « CC » du lecteur.
        </p>
      </div>
    </div>
  );
}

// Carte de secours pour les ressources qui ne pointent pas vers une vidéo
// précise (page de recherche d'une chaîne, par exemple) — rien à intégrer,
// on garde le lien externe.
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
  const videoId = extractYouTubeId(video.url);

  if (videoId) {
    return <EmbeddedVideoPlayer video={video} videoId={videoId} />;
  }

  return <ExternalResourceCard video={video} />;
}
