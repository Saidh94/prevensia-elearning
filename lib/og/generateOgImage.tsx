import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

interface OgImageConfig {
  title: string;
  subtitle: string;
  badge?: string;
  accent?: string; // hex color
}

export function generateOgImage(config: OgImageConfig) {
  const { title, subtitle, badge = "Formation", accent = "#dc2626" } = config;

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 65%, #450a0a 100%)",
          padding: "56px 64px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Glow accent */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${accent}55 0%, transparent 65%)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Brand chip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              background: accent,
              borderRadius: 6,
              padding: "5px 14px",
              color: "white",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            {badge}
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.08)",
              borderRadius: 6,
              padding: "5px 14px",
              color: "rgba(255,255,255,0.6)",
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            PREVENSIA FORMATION · Qualiopi
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            color: "white",
            fontSize: title.length > 40 ? 48 : 58,
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: 18,
            letterSpacing: "-0.02em",
            maxWidth: 900,
          }}
        >
          {title}
        </div>

        {/* Subtitle */}
        <div
          style={{
            color: "rgba(255,255,255,0.65)",
            fontSize: 24,
            lineHeight: 1.45,
            maxWidth: 820,
          }}
        >
          {subtitle}
        </div>

        {/* Footer line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 32,
            gap: 14,
          }}
        >
          <div style={{ height: 2, width: 40, background: accent, borderRadius: 2 }} />
          <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 17 }}>
            prevensia-formation.fr
          </div>
        </div>
      </div>
    ),
    { ...ogSize }
  );
}
