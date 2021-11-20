const withPWA = require("next-pwa");

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
  // Use the CSP when launched (it crashes website)
  /*
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self' ulosino.com *.ulosino.com"
  }
  */
];

module.exports = withPWA({
  // Configuration for next-pwa plugin
  pwa: {
    dest: "public",
    dynamicStartUrl: "false",
    disable: process.env.NODE_ENV === "development",
  },
  // Configuration for Next.js
  reactStrictMode: true,
  pageExtensions: ["jsx", "tsx"],
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
