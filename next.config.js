const withPlugins = require("next-compose-plugins");
const { withPlausibleProxy } = require("next-plausible");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

// Content security options
const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "no-referrer",
  },
  {
    key: "Content-Security-Policy",
    value:
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' ulosino.com *.ulosino.com *.vercel.app plausible.io utteranc.es",
  },
];

const nextConfig = withPWA({
  // Configuration for the next-pwa plugin
  pwa: {
    dest: "public",
    dynamicStartUrl: "false",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
    disable: process.env.NODE_ENV === "development",
  },
  // Configuration for Next.js
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["tsx"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
});

module.exports = withPlugins([withPlausibleProxy], nextConfig);
