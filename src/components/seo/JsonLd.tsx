import { organizationStructuredData } from "@/lib/structured-data";
export function FarmOrganizationJsonLd() {
  const data = organizationStructuredData();
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
