import { siteConfig } from "@/config/site";
export function organizationStructuredData(){return {"@context":"https://schema.org","@type":"Organization",name:siteConfig.name,url:siteConfig.url,description:siteConfig.description,...(siteConfig.contactEmail?{email:siteConfig.contactEmail}:{}),...(siteConfig.phone?{telephone:siteConfig.phone}:{})};}
