import type { Metadata } from "next";

import { Hero } from "@/components/Hero/Hero";
import About from "@/components/About/About";
import { JsonLd } from "@/components/JsonLd/JsonLd";
import { Projects } from "@/components/Projects/Projects";
import { Services } from "@/components/Services/Services";
import { getAllProjects, getHomeProjects } from "@/data/projects";
import { homeJsonLd } from "@/lib/jsonld/builders";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mazurov production",
    description: "Видеопродакшн полного цикла",
    url: "/",
    images: [
      {
        url: "https://mazurov-prod.ru/og/home.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Mazurov production",
      },
    ],
    type: "website",
  },
  other: {
    "vk:image": "https://mazurov-prod.ru/og/home.jpg",
  },
};

export default function Home() {
  const allProjects = getAllProjects();
  const projects = getHomeProjects();

  return (
    <>
      <JsonLd nodes={homeJsonLd()} />
      <Hero />
      <About />
      <Projects
        projects={projects}
        showViewAll={allProjects.length > projects.length}
      />
      <Services />
    </>
  );
}
