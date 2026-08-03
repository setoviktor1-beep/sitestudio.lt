import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/dashboard", "/admin", "/sign-in", "/sign-up", "/forgot-password", "/reset-password"],
      },
    ],
    sitemap: "https://sitestudio.lt/sitemap.xml",
  };
}
