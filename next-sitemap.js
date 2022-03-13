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
