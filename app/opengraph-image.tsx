import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "PREVENSIA FORMATION — Habilitation électrique, sécurité incendie, SST";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #7f1d1d 100%)",
          padding: "60px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Decorative top-right accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 300,
            height: 300,
            background: "radial-gradient(circle, rgba(220,38,38,0.3) 0%, transparent 70%)",
          }}
        />

        {/* Badge Qualiopi */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              background: "#dc2626",
              borderRadius: 6,
              padding: "5px 14px",
              color: "white",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Qualiopi
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.1)",
              borderRadius: 6,
              padding: "5px 14px",
              color: "rgba(255,255,255,0.7)",
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            Île-de-France · France entière
          </div>
        </div>

        {/* Titre principal */}
        <div
          style={{
            color: "white",
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: 20,
            letterSpacing: "-0.02em",
          }}
        >
          PREVENSIA{" "}
          <span style={{ color: "#f87171" }}>FORMATION</span>
        </div>

        {/* Sous-titre */}
        <div
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: 26,
            fontWeight: 400,
            lineHeight: 1.4,
            maxWidth: 800,
          }}
        >
          Habilitation électrique · Sécurité incendie · SST · SSI · Sprinkler
        </div>

        {/* Ligne de séparation + URL */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 36,
            gap: 16,
          }}
        >
          <div style={{ height: 2, width: 48, background: "#dc2626", borderRadius: 2 }} />
          <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 18 }}>
            prevensia-formation.fr
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
