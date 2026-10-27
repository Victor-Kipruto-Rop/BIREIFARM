import { siteConfig } from "@/config/site";
export function FarmOrganizationJsonLd() {
  const data = { "@context": "https://schema.org", "@type": "Organization", name: siteConfig.name, url: siteConfig.url, description: siteConfig.description, ...(siteConfig.contactEmail ? { email: siteConfig.contactEmail } : {}), ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}) };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
