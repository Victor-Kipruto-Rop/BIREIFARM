"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { mainNavigation } from "@/content/navigation";
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="container header-inner">
    <Link className="brand" href="/" aria-label="Birei Farm home" onClick={() => setOpen(false)}><span className="brand-mark" aria-hidden="true">B</span><span><span className="brand-name">Birei Farm</span><span className="brand-caption">Rooted in the land</span></span></Link>
    <nav className="nav-links" data-open={open} aria-label="Main navigation">{mainNavigation.map((item) => <Link key={item.href} className="nav-link" href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}</Link>)}<Link className="nav-link" href="/contact" onClick={() => setOpen(false)}>Contact</Link></nav>
    <Link href="/contact" className="button header-cta">Get in touch <ArrowUpRight size={14} /></Link>
    <button className="menu-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>{open ? <X size={19} /> : <Menu size={19} />}</button>
  </div></header>;
}
