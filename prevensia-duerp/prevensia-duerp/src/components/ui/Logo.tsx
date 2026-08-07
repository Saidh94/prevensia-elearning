type LogoProps = {
  size?: "sm" | "md" | "lg";
  theme?: "light" | "dark";
};

const sizes = {
  sm: { shield: 28, textMain: 14, textSub: 8, tagline: 7 },
  md: { shield: 40, textMain: 20, textSub: 11, tagline: 9 },
  lg: { shield: 56, textMain: 28, textSub: 15, tagline: 11 },
};

export default function Logo({ size = "md", theme = "light" }: LogoProps) {
  const s = sizes[size];
  const textColor = theme === "dark" ? "#ffffff" : "#0f172a";
  const subColor  = theme === "dark" ? "#94a3b8" : "#64748b";

  return (
    <div className="flex items-center gap-3">
      {/* Bouclier SVG */}
      <svg
        width={s.shield}
        height={s.shield * 1.15}
        viewBox="0 0 40 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M20 0 L40 8 L40 24 C40 34 31 42 20 46 C9 42 0 34 0 24 L0 8 Z" fill="#b91c1c"/>
        <path d="M20 4 L36 11 L36 24 C36 32 28 39 20 43 C12 39 4 32 4 24 L4 11 Z" fill="#991b1b"/>
        <path d="M10 24 L17 31 L30 18" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

      {/* Texte */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-1">
          <span style={{ fontSize: s.textMain, fontWeight: 900, color: textColor, letterSpacing: "-0.5px" }}>
            DUERP
          </span>
          <span style={{ fontSize: s.textMain, fontWeight: 900, color: "#b91c1c", letterSpacing: "-0.5px" }}>
            &amp; GO
          </span>
        </div>
        <div style={{ height: 1, background: theme === "dark" ? "#334155" : "#e2e8f0", marginTop: 3, marginBottom: 3 }} />
        <span style={{ fontSize: s.tagline, fontWeight: 600, color: subColor, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          by PREVENSIA GROUPE
        </span>
      </div>
    </div>
  );
}
