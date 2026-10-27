import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { products } from "@/content/products";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/our-farm", "/products", "/gallery", "/sustainability", "/contact", "/privacy-policy", "/terms", "/cookies"];
  const lastModified = new Date();
  return [...routes.map((route) => ({ url: siteConfig.url + route, lastModified, changeFrequency: "monthly" as const, priority: route === "" ? 1 : route === "/products" ? 0.8 : 0.6 })), ...products.map((product) => ({ url: siteConfig.url + "/products/" + product.slug, lastModified, changeFrequency: "monthly" as const, priority: 0.6 }))];
}
