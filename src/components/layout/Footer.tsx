import Link from "next/link";
import { ArrowUpRight, Mail, MoveUpRight } from "lucide-react";
import { footerNavigation } from "@/content/navigation";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top-rule" />
      <div className="container">
        <div className="footer-intro">
          <div><span className="footer-kicker">A note from Birei Farm</span><h2 className="footer-heading">Good conversations<br/><em>start with care.</em></h2></div>
          <div className="footer-intro-copy"><p>Interested in dairy products, quantities, or a possible supply relationship? Speak with us directly and we will help you understand what is currently available.</p><Link href="/contact" className="footer-main-cta">Talk to the farm <MoveUpRight size={16}/></Link></div>
        </div>
        <div className="footer-grid">
          <div className="footer-brand-column">
            <Link href="/" className="footer-brand-lockup"><span className="footer-brand-mark">B</span><span><strong>Birei Farm</strong><small>Dairy with care</small></span></Link>
            <p className="footer-note">A dairy-focused farm business built around care, clear communication, and relationships with the people who enquire about our products.</p>
          </div>
          <div><h2 className="footer-title">Discover</h2><div className="footer-links"><Link href="/our-farm">Our farm</Link><Link href="/products">Dairy products</Link><Link href="/gallery">Farm gallery</Link><Link href="/sustainability">Our approach</Link><Link href="/about">About Birei</Link></div></div>
          <div><h2 className="footer-title">Get in touch</h2><div className="footer-links"><a className="footer-email" href={"mailto:" + siteConfig.contactEmail}><Mail size={15}/>{siteConfig.contactEmail}</a>{siteConfig.phone ? <a href={"tel:" + siteConfig.phone}>{siteConfig.phone}</a> : null}<span>Kenya</span><Link href="/contact" className="footer-contact-link">Send an enquiry <ArrowUpRight size={13}/></Link></div></div>
          <div><h2 className="footer-title">Useful information</h2><div className="footer-links">{footerNavigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</div></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Birei Farm. All rights reserved.</span><span>Made with care, from farm to conversation.</span><Link href="/contact">Contact Birei <ArrowUpRight size={12}/></Link></div>
      </div>
      <style>{`
        .site-footer{position:relative;overflow:hidden;background:#123527;color:#f5f3e8;padding:0 0 24px}
        .footer-top-rule{height:5px;background:linear-gradient(90deg,#9cae7b 0%,#d7d6b3 40%,#b46f49 100%)}
        .footer-intro{display:grid;grid-template-columns:1.1fr .9fr;gap:50px;align-items:end;padding:64px 0 58px;border-bottom:1px solid #ffffff24}
        .footer-kicker{display:block;color:#bdcdb6;font-size:9px;letter-spacing:.19em;text-transform:uppercase}
        .footer-heading{margin:18px 0 0;font:400 clamp(42px,5vw,68px)/.98 var(--serif);letter-spacing:-.055em}
        .footer-heading em{color:#c8d4b4;font-weight:400}
        .footer-intro-copy{max-width:430px;justify-self:end}
        .footer-intro-copy p{margin:0 0 22px;color:#c5d3c8;font-size:13px;line-height:1.9}
        .footer-main-cta{display:inline-flex;align-items:center;gap:12px;padding:13px 0;border-bottom:1px solid #a9bd9f;color:#fff;font-size:12px;font-weight:700}
        .footer-main-cta svg,.footer-contact-link svg{transition:transform .22s ease}.footer-main-cta:hover svg,.footer-contact-link:hover svg{transform:translate(2px,-2px)}
        .footer-grid{display:grid;grid-template-columns:1.35fr .8fr 1.05fr .85fr;gap:42px;padding:48px 0 42px}
        .footer-brand-lockup{display:inline-flex;align-items:center;gap:12px}
        .footer-brand-mark{display:grid;place-items:center;width:42px;height:42px;border:1px solid #cbd8c1a3;border-radius:2px 13px 2px 13px;font:400 25px var(--serif);color:#e5ead8}
        .footer-brand-lockup strong,.footer-brand-lockup small{display:block}
        .footer-brand-lockup strong{font:400 24px var(--serif);letter-spacing:-.04em}
        .footer-brand-lockup small{margin-top:4px;color:#b8c9b9;font-size:8px;letter-spacing:.18em;text-transform:uppercase}
        .footer-note{max-width:285px;color:#b8c9bd;font-size:12px;line-height:1.9;margin:20px 0 0}
        .footer-title{margin:4px 0 20px;color:#d7e1d2;font-size:9px;font-weight:700;letter-spacing:.17em;text-transform:uppercase}
        .footer-links{display:grid;justify-items:start;gap:13px;color:#c2d0c5;font-size:11px}
        .footer-links a{transition:color .2s ease}.footer-links a:hover{color:#fff}
        .footer-email{display:flex;align-items:center;gap:8px;overflow-wrap:anywhere}.footer-email svg{flex-shrink:0;color:#c4d2b4}
        .footer-contact-link{display:inline-flex;align-items:center;gap:5px;margin-top:5px;color:#f5f3e8!important;border-bottom:1px solid #ffffff54;padding-bottom:5px}
        .footer-bottom{display:flex;align-items:center;justify-content:space-between;gap:18px;border-top:1px solid #ffffff24;padding-top:19px;color:#aebfb3;font-size:9px;letter-spacing:.02em}
        .footer-bottom a{display:inline-flex;align-items:center;gap:5px;color:#e4eadf}
        @media(max-width:900px){.footer-grid{grid-template-columns:1fr 1fr;gap:35px}.footer-intro{gap:30px}}
        @media(max-width:620px){.footer-intro{grid-template-columns:1fr;gap:25px;padding:48px 0 40px}.footer-intro-copy{justify-self:start}.footer-heading{font-size:50px}.footer-grid{grid-template-columns:1fr 1fr;gap:32px 20px;padding:36px 0}.footer-brand-column{grid-column:1/-1}.footer-bottom{align-items:flex-start;flex-direction:column;gap:10px}}
        @media(max-width:380px){.footer-grid{grid-template-columns:1fr}.footer-brand-column{grid-column:auto}}
        @media(prefers-reduced-motion:reduce){.footer-main-cta svg,.footer-contact-link svg{transition:none}}
      `}</style>
    </footer>
  );
}
