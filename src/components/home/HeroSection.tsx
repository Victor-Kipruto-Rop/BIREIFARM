import Link from "next/link";
import { ArrowUpRight, Milk } from "lucide-react";

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Birei Farm · Dairy with care</span>
          <h1 className="display hero-title">Dairy, <em>rooted</em> in care.</h1>
          <p className="hero-description">
            Discover Birei Farm and ask about our dairy products. Contact the farm directly to confirm current availability, quantities, and supply arrangements.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/our-farm">Our dairy farm <ArrowUpRight size={16} /></Link>
            <Link className="button button-outline" href="/products">Explore dairy products</Link>
          </div>
          <div className="hero-note">
            <span className="hero-note-icon"><Milk size={17} strokeWidth={1.5} /></span>
            <span><strong>Dairy is our focus</strong><small>Enquire about current products</small></span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-landscape" role="img" aria-label="Illustrative dairy farm landscape artwork">
            <div className="landscape-sun" />
            <div className="landscape-hill landscape-hill-back" />
            <div className="landscape-hill landscape-hill-front" />
            <div className="landscape-field field-one" />
            <div className="landscape-field field-two" />
            <div className="landscape-tree tree-one"><i /><b /></div>
            <div className="landscape-tree tree-two"><i /><b /></div>
            <div className="landscape-caption"><span>THE BIREI DAIRY FARM</span><strong>Dairy. Care. Trust.</strong></div>
          </div>
          <div className="hero-stamp"><span>DAIRY</span><span>WITH</span><strong>CARE</strong><Milk size={18} /></div>
          <div className="hero-image-note">Illustration · replace with real dairy farm photography</div>
        </div>
      </div>
      <div className="hero-bottom-rule"><span>Dairy farming</span><span>Farm story &amp; dairy products</span><span>Enquire with us <ArrowUpRight size={12} /></span></div>
    </section>
  );
}
