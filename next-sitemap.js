// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// Configuration for the next-sitemap package and robots.txt

module.exports = {
  siteUrl: "https://www.ulosino.com",
  changefreq: "weekly",
  generateRobotsTxt: true,
  exclude: ["/500", "/license"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
