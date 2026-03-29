export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio/", "/studio"],
      },
    ],
    sitemap: "https://clientforceai.com/sitemap.xml",
  };
}