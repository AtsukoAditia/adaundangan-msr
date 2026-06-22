import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getPublishedSlugs, getInvitationBySlug } from "@/data/invitations";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/privacy`, changeFrequency: "yearly", priority: 0.3 },
  ];
  // Only include published invitations that are not marked noIndex.
  const invitationRoutes: MetadataRoute.Sitemap = getPublishedSlugs()
    .filter((slug) => {
      const inv = getInvitationBySlug(slug);
      return inv && !inv.metadata.noIndex;
    })
    .map((slug) => ({
      url: `${base}/${slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));
  return [...staticRoutes, ...invitationRoutes];
}
