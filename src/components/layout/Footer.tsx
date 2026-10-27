import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { footerNavigation } from "@/content/navigation";
import { siteConfig } from "@/config/site";
export function SiteFooter() {
  return <footer className="site-footer"><div className="container"><div className="footer-grid">
    <div><Link href="/" className="footer-brand">Birei Farm</Link><p className="footer-note">Birei Farm focuses on dairy products. Contact us to ask about current availability, quantities, and supply arrangements.</p><Link href="/contact" className="button" style={{ background: "transparent", borderColor: "#a9c0ad", color: "#fff" }}>Enquire about dairy <ArrowUpRight size={14} /></Link></div>
    <div><h2 className="footer-title">Explore</h2><div className="footer-links"><Link href="/our-farm">Our farm</Link><Link href="/products">Products</Link><Link href="/gallery">Gallery</Link><Link href="/sustainability">Sustainability</Link><Link href="/about">About Birei</Link></div></div>
    <div><h2 className="footer-title">Contact</h2><div className="footer-links">{siteConfig.contactEmail ? <a href={"mailto:" + siteConfig.contactEmail}>{siteConfig.contactEmail}</a> : <span>Contact details coming soon</span>}{siteConfig.phone ? <a href={"tel:" + siteConfig.phone}>{siteConfig.phone}</a> : null}<span>Kenya</span></div><h2 className="footer-title" style={{ marginTop: 26 }}>Information</h2><div className="footer-links">{footerNavigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</div></div>
  </div><div className="footer-bottom"><span>© {new Date().getFullYear()} Birei Farm. All rights reserved.</span><span>Dairy farming, with care.</span></div></div></footer>;
}
