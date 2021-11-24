// Configuration for the next-sitemap package and robots.txt

module.exports = {
  siteUrl: "https://www.ulosino.com",
  changefreq: "weekly",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
