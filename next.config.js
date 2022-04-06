// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This file configures Next.js
// Because it is parsed, we need to stick to classic JS syntax

const withPWA = require("next-pwa");
const path = require("path");

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
    register: false,
    skipWaiting: false,
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
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react/jsx-runtime.js": path.resolve("node_modules/react/jsx-runtime"),
    };
    return config;
  },
});
