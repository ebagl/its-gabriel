import { MetadataRoute } from "next";
import { SiteConstants } from "@/data/SiteConstants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SiteConstants.siteUrl}/sitemap.xml`,
    host: SiteConstants.siteUrl,
  };
}
