import type { MetadataRoute } from "next";
import { getAllProjects } from "@/data/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mazurov-prod.ru";

  const projects = getAllProjects().map((project) => ({
    url: `${base}/projects/${project.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const serviceSlugs = [
    "shows",
    "commercials",
    "music-video",
    "brand-video",
    "motion-design",
    "report-videos",
    "documentary",
    "livestream",
    "webinars",
    "master-classes",
  ] as const;

  const services = serviceSlugs.map((slug) => ({
    url: `${base}/services/${slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/about/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...services,
    {
      url: `${base}/projects/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...projects,
  ];
}
