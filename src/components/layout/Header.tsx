"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, MoveUpRight } from "lucide-react";
import { useState } from "react";
import { mainNavigation } from "@/content/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-topline"><div className="container header-topline-inner"><span>DAIRY, ROOTED IN CARE</span><span>Thoughtful farming. Direct conversations.</span></div></div>
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Birei Farm home" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true"><span>B</span><i /></span>
          <span className="brand-wordmark"><span className="brand-name">Birei Farm</span><span className="brand-caption">Dairy with care</span></span>
        </Link>
        <nav className="nav-links" data-open={open} aria-label="Main navigation">
          {mainNavigation.map((item) => <Link key={item.href} className="nav-link" href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}</Link>)}
          <Link className="nav-link mobile-contact-link" href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>
        <Link href="/contact" className="button header-cta">Start a conversation <MoveUpRight size={15} /></Link>
        <button className="menu-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
      </div>
      <style>{`
        .header-topline{background:var(--forest);color:#e9eee4;font-size:9px;letter-spacing:.13em}
        .header-topline-inner{min-height:30px;display:flex;justify-content:space-between;align-items:center;gap:18px}
        .header-topline-inner span:last-child{color:#c5d4c5;letter-spacing:.04em}
        .site-header{position:relative;z-index:30;background:rgba(255,253,247,.94);backdrop-filter:blur(18px);border-bottom:1px solid #173e2e18}
        .header-inner{height:88px;display:flex;align-items:center;justify-content:space-between;gap:28px}
        .brand{display:flex;align-items:center;gap:13px;min-width:205px}
        .brand-mark{position:relative;display:grid;place-items:center;width:46px;height:46px;background:var(--forest);color:#f7f3e7;border-radius:3px 16px 3px 16px;box-shadow:0 7px 18px #173e2e1c;overflow:hidden}
        .brand-mark span{font:400 27px var(--serif);position:relative;z-index:1}
        .brand-mark i{position:absolute;width:28px;height:28px;border:1px solid #dfe8d6;opacity:.45;border-radius:50%;right:-10px;bottom:-8px}
        .brand-name{display:block;font:400 25px var(--serif);letter-spacing:-.045em;color:var(--forest)}
        .brand-caption{display:block;margin-top:4px;color:var(--muted);font-size:8px;letter-spacing:.21em;text-transform:uppercase}
        .nav-links{display:flex;align-items:center;gap:clamp(14px,2.1vw,29px)}
        .nav-link{position:relative;padding:10px 0;color:#435247;font-size:11px;letter-spacing:.025em;transition:color .2s ease}
        .nav-link:after{content:"";position:absolute;left:0;right:100%;bottom:3px;height:1px;background:var(--leaf);transition:right .25s ease}
        .nav-link:hover,.nav-link[aria-current=page]{color:var(--forest)}
        .nav-link:hover:after,.nav-link[aria-current=page]:after{right:0}
        .header-cta{min-height:45px;padding-inline:17px;white-space:nowrap;font-size:10px;letter-spacing:.02em}
        .header-cta svg{transition:transform .25s ease}.header-cta:hover svg{transform:translate(2px,-2px)}
        .mobile-contact-link{display:none}
        .menu-toggle{display:none;border:1px solid var(--line);background:transparent;padding:10px;color:var(--forest)}
        @media(max-width:980px){.header-inner{gap:18px}.brand{min-width:auto}.brand-name{font-size:23px}.nav-links{gap:15px}.nav-link{font-size:10px}.header-cta{padding-inline:13px;font-size:9px}}
        @media(max-width:760px){.header-topline-inner{min-height:28px}.header-topline-inner span:last-child{display:none}.header-inner{height:75px}.brand-mark{width:41px;height:41px}.brand-name{font-size:22px}.header-cta{display:none}.menu-toggle{display:inline-flex;align-items:center;justify-content:center}.nav-links{display:none;position:absolute;top:103px;left:0;right:0;padding:12px 22px 24px;background:var(--paper);border-bottom:1px solid var(--line);box-shadow:0 22px 35px #173e2e12;flex-direction:column;align-items:stretch;gap:0}.nav-links[data-open=true]{display:flex;animation:nav-drop .24s ease both}.nav-link{padding:15px 3px;border-bottom:1px solid var(--line);font-size:13px}.nav-link:after{display:none}.mobile-contact-link{display:block}}
        @keyframes nav-drop{from{opacity:0;transform:translateY(-7px)}to{opacity:1;transform:translateY(0)}}
        @media(prefers-reduced-motion:reduce){.nav-links[data-open=true]{animation:none}.nav-link:after,.header-cta svg{transition:none}}
      `}</style>
    </header>
  );
}
