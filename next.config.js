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
    key: "Content-Security-Policy",
    value:
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' ulosino.com *.ulosino.com *.vercel.app",
  },
];

module.exports = withPWA({
  // Configuration for the next-pwa plugin
  pwa: {
    dest: "public",
    dynamicStartUrl: "false",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    disable: process.env.NODE_ENV === "development",
  },
  // Configuration for Next.js
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  experimental: {
    runtime: "nodejs",
    serverComponents: false,
  },
  pageExtensions: ["tsx"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Import HTTP headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  // Proxy Splitbee analytics tracking scripts
  async rewrites() {
    return [
      {
        source: "/tree.js",
        destination: "https://cdn.splitbee.io/sb.js",
      },
      {
        source: "/_oak/:slug",
        destination: "https://hive.splitbee.io/:slug",
      },
    ];
  },
  // Add redirects for the privacy link found on guides.ulosino.com and matches.ulosino.com
  async redirects() {
    return [
      {
        source: "/privacy",
        destination: "/about/privacy",
        permanent: true,
      },
    ];
  },
  // Add temporary webpack config to resolve Suspense issue known to occur in next-mdx-remote 4.0.0
  // Refer to https://github.com/hashicorp/next-mdx-remote/issues/237
  // webpack: (config) => {
  //   config.resolve.alias = {
  //     ...config.resolve.alias,
  //     // This line fixes next-mdx-remote issue "Package path ./jsx-runtime.js is not exported from package react"
  //     "react/jsx-runtime.js": require.resolve("react/jsx-runtime"),
  //   };
  //   return config;
  // },
});
