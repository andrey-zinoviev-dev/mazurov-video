import type { Project } from "@/data/projects";
import {
  absoluteUrl,
  breadcrumbListNode,
  ORGANIZATION_NAME,
  organizationNode,
  organizationRef,
  websiteNode,
  websiteRef,
  type JsonLdNode,
} from "@/lib/jsonld/site";

/** Homepage: full Organization + WebSite definitions. */
export function homeJsonLd(): JsonLdNode[] {
  return [organizationNode(), websiteNode()];
}

/** About page: AboutPage linked to the same Organization entity. */
export function aboutJsonLd(): JsonLdNode[] {
  const path = "/about/";
  return [
    {
      "@type": "AboutPage",
      "@id": absoluteUrl(`${path}#webpage`),
      url: absoluteUrl(path),
      name: `О нас — ${ORGANIZATION_NAME}`,
      description:
        "Команда операторов, монтажёров и продюсеров. Концепция с нуля или ваш готовый скрипт — снимаем по всей России и СНГ.",
      isPartOf: websiteRef(),
      about: organizationRef(),
      mainEntity: organizationRef(),
      inLanguage: "ru-RU",
    },
    breadcrumbListNode([
      { name: ORGANIZATION_NAME, path: "/" },
      { name: "О нас", path },
    ]),
  ];
}

export type ServiceJsonLdInput = {
  path: string;
  name: string;
  description: string;
  breadcrumbLabel: string;
};

/** Service landing: Service + breadcrumbs; provider by @id only. */
export function serviceJsonLd(input: ServiceJsonLdInput): JsonLdNode[] {
  const url = absoluteUrl(input.path);
  return [
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: input.name,
      description: input.description,
      url,
      provider: organizationRef(),
      areaServed: [
        { "@type": "Country", name: "Россия" },
        { "@type": "Place", name: "СНГ" },
      ],
    },
    breadcrumbListNode([
      { name: ORGANIZATION_NAME, path: "/" },
      { name: input.breadcrumbLabel, path: input.path },
    ]),
  ];
}

/**
 * Project case page.
 * Only fields visible on the page (no budget/year — not rendered in UI).
 */
export function projectJsonLd(project: Project): JsonLdNode[] {
  const path = `/projects/${project.slug}/`;
  const url = absoluteUrl(path);

  return [
    {
      "@type": "CreativeWork",
      "@id": `${url}#creativework`,
      name: project.title,
      description: project.description,
      url,
      ...(project.imageSrc
        ? { image: absoluteUrl(project.imageSrc) }
        : {}),
      genre: project.shootingType,
      creator: organizationRef(),
      producer: organizationRef(),
      about: {
        "@type": "Organization",
        name: project.contractor,
      },
      inLanguage: "ru-RU",
    },
    breadcrumbListNode([
      { name: ORGANIZATION_NAME, path: "/" },
      { name: "Проекты", path: "/projects/" },
      { name: project.title, path },
    ]),
  ];
}

/** Projects index: CollectionPage + ItemList of case URLs. */
export function projectsIndexJsonLd(projects: Project[]): JsonLdNode[] {
  const path = "/projects/";
  const url = absoluteUrl(path);

  return [
    {
      "@type": "CollectionPage",
      "@id": `${url}#webpage`,
      url,
      name: `Проекты — ${ORGANIZATION_NAME}`,
      description: `Все проекты видеопродакшна ${ORGANIZATION_NAME}`,
      isPartOf: websiteRef(),
      about: organizationRef(),
      inLanguage: "ru-RU",
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: projects.length,
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: absoluteUrl(`/projects/${project.slug}/`),
          name: project.title,
        })),
      },
    },
    breadcrumbListNode([
      { name: ORGANIZATION_NAME, path: "/" },
      { name: "Проекты", path },
    ]),
  ];
}
