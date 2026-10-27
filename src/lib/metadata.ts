import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
export function pageMetadata(title:string,description:string):Metadata{return {title,description,alternates:{canonical:siteConfig.url}}}
