import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self' data: https:; connect-src 'self' https://bxehueviorgltkbsykrl.supabase.co wss://bxehueviorgltkbsykrl.supabase.co https://api.resend.com; frame-src https://www.openstreetmap.org; frame-ancestors 'self';",
          },
        ],
      },
    ];
  },
};

export default nextConfig;