import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { SiteHeader } from "@/components/layout/Header";
import { SiteFooter } from "@/components/layout/Footer";
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Birei Farm | Grown with care", template: "%s | Birei Farm" },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: { type: "website", locale: siteConfig.locale, siteName: siteConfig.name, title: "Birei Farm | Grown with care", description: siteConfig.description, url: siteConfig.url },
  twitter: { card: "summary_large_image", title: "Birei Farm | Grown with care", description: siteConfig.description },
};
export const viewport: Viewport = { themeColor: "#1d4735", width: "device-width", initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><div className="site-shell"><SiteHeader /><main>{children}</main><SiteFooter /></div></body></html>;
}
