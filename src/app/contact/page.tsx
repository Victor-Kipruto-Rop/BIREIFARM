import type { Metadata } from "next";
import { ArrowDown, ArrowUpRight, Mail, MapPin, Phone, MessageCircle, Milk, Handshake } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Birei Farm about dairy products, availability, quantities, and supply arrangements.",
};

export default function ContactPage() {
  return <>
    <section className="contact-hero">
      <div className="contact-hero-orbit contact-orbit-one" /><div className="contact-hero-orbit contact-orbit-two" />
      <div className="container contact-hero-grid">
        <div className="contact-hero-copy">
          <div className="contact-breadcrumb"><a href="/">Home</a><span>/</span><span>Contact</span></div>
          <span className="eyebrow" style={{color:"#d2dfc3"}}>The conversation starts here</span>
          <h1 className="display">Let’s talk about <em>dairy.</em></h1>
          <p className="contact-hero-lead">Every good supply relationship begins with a clear conversation. Tell us what you are looking for, what quantity you have in mind, or how you would like to work with Birei Farm.</p>
          <div className="contact-hero-actions"><a href="#send-enquiry" className="contact-primary-cta">Make an enquiry <ArrowUpRight size={16}/></a><a className="contact-email-cta" href={"mailto:" + siteConfig.contactEmail}><Mail size={16}/> Email the farm</a></div>
          <div className="contact-hero-bottom"><span className="contact-hero-icon"><MessageCircle size={18}/></span><span><strong>A direct conversation</strong><small>Ask first. We will confirm current details with you.</small></span></div>
        </div>
        <div className="contact-hero-art" aria-label="Illustrative dairy landscape" role="img">
          <div className="contact-art-sun"/><div className="contact-art-hill hill-back"/><div className="contact-art-hill hill-mid"/><div className="contact-art-hill hill-front"/>
          <div className="contact-art-path"/><div className="contact-art-tree tree-left"><i/><b/></div><div className="contact-art-tree tree-right"><i/><b/></div>
          <div className="contact-art-label"><span>01 / CONNECT</span><strong>From enquiry<br/>to understanding.</strong></div>
          <div className="contact-art-stamp"><Milk size={21}/><span>DAIRY</span><strong>with care</strong></div>
          <div className="contact-art-caption">BIREI FARM · DAIRY WITH CARE</div>
        </div>
      </div>
      <div className="contact-hero-foot"><div className="container"><span>PRODUCT ENQUIRIES</span><span>SUPPLY CONVERSATIONS</span><span>BUSINESS PARTNERSHIPS</span><a href="#contact-details">HOW TO REACH US <ArrowDown size={12}/></a></div></div>
    </section>
    <section className="section-pad contact-main-section" id="contact-details"><div className="container contact-layout">
      <div className="contact-details-column"><span className="eyebrow">A good place to begin</span><h2 className="display contact-section-title">Tell us what<br/>you have in mind.</h2><p className="muted contact-explainer">Whether you are enquiring about milk, yoghurt and mala, other dairy products, or a possible ongoing supply arrangement, a few details will help us understand your request. Product range, availability, quantities, and arrangements are confirmed directly with the farm.</p>
        <div className="contact-detail"><span className="contact-detail-icon"><Mail size={18}/></span><div><strong>Email</strong><a href={"mailto:" + siteConfig.contactEmail}>{siteConfig.contactEmail}</a><small>For product and business enquiries</small></div></div>
        {siteConfig.phone ? <div className="contact-detail"><span className="contact-detail-icon"><Phone size={18}/></span><div><strong>Telephone</strong><a href={"tel:" + siteConfig.phone}>{siteConfig.phone}</a></div></div> : null}
        <div className="contact-detail"><span className="contact-detail-icon"><MapPin size={18}/></span><div><strong>Location</strong><span>{siteConfig.address || "Kenya"}</span><small>Exact public address to be confirmed</small></div></div>
        <div className="contact-prompt"><Handshake size={21}/><div><strong>Considering a longer-term relationship?</strong><p>Include your expected quantity, preferred frequency, and any questions. We can discuss what may be possible once details are confirmed.</p></div></div>
      </div>
      <div className="contact-form-card" id="send-enquiry"><div className="form-card-heading"><span className="eyebrow">Send a message</span><h2>What can we help with?</h2><p>Share the essentials and the farm can follow up on your enquiry.</p></div><ContactForm/><p className="contact-privacy-note">Please do not include passwords, payment details, identity documents, or other sensitive personal information in your message.</p></div>
    </div></section>
    <section className="contact-next-step"><div className="container contact-next-inner"><div><span className="eyebrow" style={{color:"#d2dfc3"}}>Not sure what to ask?</span><h2 className="display">Start with a simple question.</h2><p>Tell us the product you are interested in and what you need to know. We will confirm availability and relevant details directly.</p></div><a href={"mailto:" + siteConfig.contactEmail} className="contact-next-cta">Write to Birei Farm <ArrowUpRight size={16}/></a></div></section>
    <style>{`
      .contact-hero{position:relative;isolation:isolate;overflow:hidden;background:#153b2b;color:#f8f5e9}
      .contact-hero-orbit{position:absolute;z-index:-1;border:1px solid #d7e1cb12;border-radius:50%;pointer-events:none}
      .contact-orbit-one{width:760px;height:760px;right:-160px;top:-310px}.contact-orbit-two{width:520px;height:520px;right:-40px;top:-190px}
      .contact-hero-grid{display:grid;grid-template-columns:1.02fr .98fr;gap:clamp(38px,7vw,95px);align-items:center;padding-block:clamp(62px,8vw,106px) 82px}
      .contact-hero-copy{position:relative;z-index:2}.contact-breadcrumb{display:flex;gap:10px;align-items:center;color:#b7c8b9;font-size:10px;margin-bottom:32px}.contact-breadcrumb a{color:#fff}.contact-breadcrumb span:nth-child(2){color:#6f9278}
      .contact-hero h1{max-width:650px;margin:24px 0 25px;font-size:clamp(56px,6.8vw,91px);line-height:.94;letter-spacing:-.07em}.contact-hero h1 em{color:#c7d5ad;font-weight:400}
      .contact-hero-lead{max-width:510px;margin:0;color:#d0dbd0;font-size:14px;line-height:1.95}
      .contact-hero-actions{display:flex;align-items:center;flex-wrap:wrap;gap:22px;margin-top:31px}
      .contact-primary-cta{display:inline-flex;align-items:center;gap:13px;padding:15px 19px;background:#f5f1e5;color:#173e2e;font-size:11px;font-weight:700}.contact-primary-cta svg{transition:transform .2s}.contact-primary-cta:hover svg{transform:translate(2px,-2px)}
      .contact-email-cta{display:inline-flex;align-items:center;gap:9px;color:#e0e9da;font-size:11px}
      .contact-hero-bottom{display:flex;align-items:center;gap:13px;margin-top:45px;padding-top:22px;border-top:1px solid #ffffff2b;max-width:420px}
      .contact-hero-icon{display:grid;place-items:center;width:40px;height:40px;border:1px solid #d7e1cb62;border-radius:50%;color:#d7e1cb}
      .contact-hero-bottom strong,.contact-hero-bottom small{display:block}.contact-hero-bottom strong{font:400 15px var(--serif)}.contact-hero-bottom small{margin-top:5px;color:#b9cabb;font-size:10px}
      .contact-hero-art{position:relative;isolation:isolate;overflow:hidden;min-height:530px;height:min(58vw,620px);max-height:620px;background:linear-gradient(180deg,#e6e5d2 0%,#cad7b7 44%,#78936a 100%);border-radius:47% 47% 2px 2px;box-shadow:0 25px 65px #081f1630}
      .contact-hero-art:before{content:"";position:absolute;inset:0;z-index:5;pointer-events:none;background:linear-gradient(180deg,#fff8df2e,transparent 40%,#153b2b24)}
      .contact-art-sun{position:absolute;width:84px;height:84px;top:15%;right:21%;border-radius:50%;background:#f8edc8;box-shadow:0 0 0 20px #f8edc82a,0 0 0 44px #f8edc817}
      .contact-art-hill{position:absolute;left:-15%;width:130%;border-radius:50% 50% 0 0}.hill-back{height:43%;bottom:37%;background:#a5b693;transform:rotate(-8deg)}.hill-mid{height:48%;bottom:14%;background:#6c8c62;transform:rotate(7deg)}.hill-front{height:35%;bottom:-12%;background:#365f43;transform:rotate(-6deg);box-shadow:0 -18px 0 #4e7550}
      .contact-art-path{position:absolute;z-index:2;width:43%;height:44%;bottom:-15%;left:31%;background:#d6d1a6;clip-path:polygon(44% 0,56% 0,100% 100%,0 100%);opacity:.85}
      .contact-art-tree{position:absolute;z-index:3;bottom:28%;width:50px;height:118px}.contact-art-tree i,.contact-art-tree b{position:absolute;display:block}.contact-art-tree i{width:72px;height:76px;top:0;left:-11px;border-radius:50%;background:#294c35;box-shadow:17px 15px 0 -8px #3b6542,-14px 17px 0 -9px #3b6542}.contact-art-tree b{width:8px;height:54px;left:21px;top:62px;background:#69533a}.tree-left{left:14%;transform:scale(.82)}.tree-right{right:12%;bottom:25%;transform:scale(1.12)}
      .contact-art-label{position:absolute;z-index:6;left:28px;bottom:31px;color:white}.contact-art-label span{font-size:8px;letter-spacing:.2em}.contact-art-label strong{display:block;margin-top:10px;font:400 29px/1.05 var(--serif);text-shadow:0 2px 14px #173e2e75}
      .contact-art-stamp{position:absolute;z-index:7;right:0;top:19%;display:flex;align-items:center;flex-direction:column;justify-content:center;gap:5px;width:108px;height:108px;border-radius:50%;background:#fffdf7;color:#173e2e;box-shadow:0 12px 30px #173e2e1b;transform:rotate(7deg)}.contact-art-stamp span{font-size:7px;letter-spacing:.22em}.contact-art-stamp strong{font:400 17px var(--serif)}
      .contact-art-caption{position:absolute;z-index:6;right:16px;bottom:15px;color:#fff;font-size:7px;letter-spacing:.13em;text-shadow:0 1px 9px #173e2e}
      .contact-hero-foot{border-top:1px solid #ffffff27}.contact-hero-foot .container{display:flex;justify-content:space-between;align-items:center;gap:18px;min-height:54px;color:#c2d1c3;font-size:8px;letter-spacing:.14em}.contact-hero-foot a{display:inline-flex;align-items:center;gap:7px;color:#f4f2e7}
      .contact-layout{display:grid;grid-template-columns:.82fr 1.18fr;gap:clamp(40px,7vw,92px);align-items:start}.contact-section-title{font-size:clamp(42px,5vw,63px);margin:22px 0}.contact-explainer{font-size:13px;line-height:1.95;max-width:440px}
      .contact-detail{display:flex;gap:14px;align-items:flex-start;margin-top:26px}.contact-detail-icon{display:grid;place-items:center;width:42px;height:42px;flex-shrink:0;border:1px solid var(--line);color:var(--leaf)}.contact-detail div{display:grid;gap:6px;padding-top:2px}.contact-detail strong{font-size:11px;color:var(--forest)}.contact-detail a,.contact-detail span{font-size:12px;color:var(--muted);overflow-wrap:anywhere}.contact-detail small{font-size:10px;color:#879286}
      .contact-prompt{display:flex;gap:14px;margin-top:32px;padding:18px;border-left:2px solid var(--leaf);background:var(--cream);color:var(--leaf)}.contact-prompt div{color:var(--ink)}.contact-prompt strong{font:400 17px var(--serif)}.contact-prompt p{margin:7px 0 0;color:var(--muted);font-size:11px;line-height:1.8}
      .contact-form-card{padding:clamp(24px,4vw,42px);border:1px solid var(--line);background:#fffefa;box-shadow:0 20px 60px #173e2e09;scroll-margin-top:25px}.form-card-heading{margin-bottom:25px}.form-card-heading h2{font:400 clamp(30px,3.5vw,40px)/1.1 var(--serif);letter-spacing:-.04em;margin:15px 0 10px}.form-card-heading p{color:var(--muted);font-size:12px;line-height:1.8;margin:0}.contact-privacy-note{margin:22px 0 0;padding-top:16px;border-top:1px solid var(--line);color:#7d887d;font-size:10px;line-height:1.7}
      .contact-next-step{background:var(--cream);padding:62px 0}.contact-next-inner{display:flex;justify-content:space-between;align-items:center;gap:30px}.contact-next-inner h2{font-size:clamp(35px,4vw,52px);margin:18px 0 12px}.contact-next-inner p{max-width:570px;color:var(--muted);font-size:12px;line-height:1.9}.contact-next-cta{display:inline-flex;align-items:center;gap:12px;white-space:nowrap;padding:15px 19px;background:var(--forest);color:#fff;font-size:11px}
      @media(max-width:850px){.contact-hero-grid{grid-template-columns:1fr;gap:42px}.contact-hero-art{width:min(100%,560px);height:105vw;max-height:560px;min-height:390px;margin-inline:auto}.contact-hero h1{font-size:clamp(58px,11vw,86px)}.contact-layout{grid-template-columns:1fr;gap:42px}.contact-details-column{max-width:620px}.contact-next-inner{align-items:flex-start;flex-direction:column}.contact-hero-foot .container{flex-wrap:wrap;justify-content:flex-start;padding-block:15px}.contact-hero-foot a{width:100%}}
      @media(max-width:480px){.contact-hero-grid{padding-block:48px 55px}.contact-hero h1{font-size:57px}.contact-hero-lead{font-size:13px}.contact-hero-art{min-height:365px}.contact-art-stamp{width:88px;height:88px}.contact-art-label{left:20px;bottom:24px}.contact-art-label strong{font-size:25px}.contact-form-card{padding:22px 18px}.contact-hero-actions{gap:16px}.contact-next-step{padding:48px 0}}
      @media(prefers-reduced-motion:reduce){.contact-primary-cta svg{transition:none}}
    `}</style>
  </>;
}
