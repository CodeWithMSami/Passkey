import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/passwords",
      ],
    },

    sitemap:
      "https://passkey-codewithmsami.netlify.app/sitemap.xml",
  };
}