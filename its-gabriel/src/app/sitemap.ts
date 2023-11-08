import { MetadataRoute } from "next";
import { SiteConstants } from "@/data/SiteConstants";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = SiteConstants.siteUrl;
  const routes = ["", "resume", "random-team-generator"].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));
  return routes;
}
