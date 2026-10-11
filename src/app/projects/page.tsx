import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd/JsonLd";
import { Projects } from "@/components/Projects/Projects";
import { getAllProjects } from "@/data/projects";
import { projectsIndexJsonLd } from "@/lib/jsonld/builders";

export const metadata: Metadata = {
  title: "Проекты — Mazurov production",
  description: "Все проекты видеопродакшна Mazurov production",
  alternates: {
    canonical: "/projects/",
  },
  openGraph: {
    title: "Проекты — Mazurov production",
    description: "Все проекты видеопродакшна Mazurov production",
    url: "/projects/",
    type: "website",
  },
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
      <JsonLd nodes={projectsIndexJsonLd(projects)} />
      <Projects projects={projects} standalone showFilters />
    </>
  );
}
