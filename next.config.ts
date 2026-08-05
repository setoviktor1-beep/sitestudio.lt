import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js inline runtime + JSON-LD scripts.
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self' data:",
      "connect-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  // Produces .next/standalone so the Docker image stays small.
  output: "standalone",
  poweredByHeader: false,
  // These packages use native/node-only APIs and must not be bundled.
  serverExternalPackages: ["pg", "nodemailer", "@aws-sdk/client-s3"],

  async headers() {
    return [
      { source: "/(.*)", headers: securityHeaders },
      {
        source: "/(sign-in|sign-up|forgot-password|reset-password|dashboard|admin)(.*)",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },

  async redirects() {
    return [
      // www → apex, preserving path and query.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.sitestudio.lt" }],
        destination: "https://sitestudio.lt/:path*",
        permanent: true,
      },
      // Section shortcuts / legacy URLs.
      { source: "/kainos", destination: "/#kainos", permanent: true },
      { source: "/duk", destination: "/#duk", permanent: true },
      { source: "/procesas", destination: "/#procesas", permanent: true },
      // Legacy terms URL indexed by Google before the rename.
      { source: "/paslaugu-teikimo-salygos", destination: "/naudojimo-salygos", permanent: true },
      // Old EN portfolio URLs — the closest relevant replacement is the portfolio hub.
      { source: "/en/portfolio/:path*", destination: "/darbai", permanent: true },
      // /en, /pl, /lv, /et, /ru are now real localized pages.
      { source: "/en/:path+", destination: "/en", permanent: true },
      { source: "/lt", destination: "/", permanent: true },
      { source: "/lt/:path*", destination: "/:path*", permanent: true },
      { source: "/portfolio", destination: "/darbai", permanent: true },
    ];
  },
};

export default nextConfig;
