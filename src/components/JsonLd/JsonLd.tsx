import { jsonLdGraph, type JsonLdNode } from "@/lib/jsonld/site";

type JsonLdProps = {
  nodes: JsonLdNode[];
};

/**
 * Renders JSON-LD as a native script tag (Next.js recommendation).
 * Escapes `<` to mitigate XSS if any string ever contains HTML.
 */
export function JsonLd({ nodes }: JsonLdProps) {
  const payload = jsonLdGraph(nodes);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(payload).replace(/</g, "\\u003c"),
      }}
    />
  );
}
