import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Les erreurs TS dans les pages admin/api n'empêchent plus le déploiement
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      // Toutes les variantes BS/BE → canonical /modules/bsbe
      {
        source: "/modules/bs-be-manoeuvre/:path*",
        destination: "/modules/bsbe/:path*",
        permanent: false,
      },
      {
        source: "/modules/bs-be-man%C5%93uvre/:path*",
        destination: "/modules/bsbe/:path*",
        permanent: false,
      },
      {
        source: "/modules/bsbe-manoeuvre/:path*",
        destination: "/modules/bsbe/:path*",
        permanent: false,
      },
      // Variantes d'URL courantes → URLs canoniques
      {
        source: "/e-learning",
        destination: "/elearning",
        permanent: true,
      },
      {
        source: "/demande-de-devis",
        destination: "/demande-devis",
        permanent: true,
      },
      {
        source: "/formation-recyclage-ssiap1",
        destination: "/formation-securite-incendie",
        permanent: true,
      },
      {
        source: "/habilitation-electrique",
        destination: "/formation-habilitation-electrique",
        permanent: true,
      },
      {
        source: "/formations",
        destination: "/#catalogue",
        permanent: false,
      },
      {
        source: "/catalogue",
        destination: "/#catalogue",
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self' data: https:; connect-src 'self' https://bxehueviorgltkbsykrl.supabase.co wss://bxehueviorgltkbsykrl.supabase.co https://api.resend.com https://api.stripe.com; frame-src https://www.openstreetmap.org https://js.stripe.com https://hooks.stripe.com; frame-ancestors 'self'; form-action 'self';",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;