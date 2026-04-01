import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self' data: https:; connect-src 'self' https://bxehueviorgltkbsykrl.supabase.co wss://bxehueviorgltkbsykrl.supabase.co https://api.resend.com; frame-ancestors 'self';",
          },
        ],
      },
    ];
  },
};

export default nextConfig;