// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// This file configures Next.js
// Because it is parsed, we need to stick to classic JS syntax

// Content security options
const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Content-Security-Policy",
    value:
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' ulosino.com *.ulosino.com *.vercel.app",
  },
];

module.exports = {
  // Configuration for Next.js
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
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
};
