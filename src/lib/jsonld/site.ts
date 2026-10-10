/** Canonical site origin — matches metadataBase / sitemap. */
export const SITE_ORIGIN = "https://mazurov-prod.ru";

/** Stable entity ids (not HTML anchors). */
export const ORGANIZATION_ID = `${SITE_ORIGIN}/#organization`;
export const WEBSITE_ID = `${SITE_ORIGIN}/#website`;

export const ORGANIZATION_NAME = "Mazurov production";
export const ORGANIZATION_LEGAL_NAME = "ИП «Мазуров А. В.»";
export const ORGANIZATION_TAX_ID = "695009651144";

/** Production contact from Contacts — not the rental bot. */
export const ORGANIZATION_TELEGRAM_URL = "https://t.me/mazurov_prod";

export const ORGANIZATION_DESCRIPTION =
  "Видеопродакшн полного цикла. От концепции до финального ролика — по всей России и СНГ.";

/** Absolute URL; encodes path segments (spaces in /MPreviews/…). */
export function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const encoded = normalized
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
  return `${SITE_ORIGIN}${encoded}`;
}

export type JsonLdNode = Record<string, unknown>;

export function organizationNode(): JsonLdNode {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: ORGANIZATION_NAME,
    legalName: ORGANIZATION_LEGAL_NAME,
    taxID: ORGANIZATION_TAX_ID,
    url: `${SITE_ORIGIN}/`,
    logo: absoluteUrl("/logo-og.png"),
    description: ORGANIZATION_DESCRIPTION,
    areaServed: [
      { "@type": "Country", name: "Россия" },
      { "@type": "Place", name: "СНГ" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: ORGANIZATION_TELEGRAM_URL,
      availableLanguage: ["Russian"],
    },
    sameAs: [ORGANIZATION_TELEGRAM_URL],
  };
}

export function organizationRef(): JsonLdNode {
  return { "@id": ORGANIZATION_ID };
}

export function websiteNode(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: ORGANIZATION_NAME,
    url: `${SITE_ORIGIN}/`,
    inLanguage: "ru-RU",
    description: ORGANIZATION_DESCRIPTION,
    publisher: organizationRef(),
  };
}

export function websiteRef(): JsonLdNode {
  return { "@id": WEBSITE_ID };
}

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function breadcrumbListNode(items: BreadcrumbItem[]): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function jsonLdGraph(nodes: JsonLdNode[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
