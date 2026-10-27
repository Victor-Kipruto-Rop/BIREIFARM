import Link from "next/link";
import { ArrowUpRight, Leaf, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Birei Farm · Grown with care</span>
          <h1 className="display hero-title">
            Good things <em>grow</em> with care.
          </h1>
          <p className="hero-description">
            Discover the farm, explore our current offerings, and connect with the people behind the work.
            A thoughtful approach to farming starts with care for the land and the community around it.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/our-farm">Discover our farm <ArrowUpRight size={16} /></Link>
            <Link className="button button-outline" href="/products">Explore offerings</Link>
          </div>
          <div className="hero-note">
            <span className="hero-note-icon"><Leaf size={16} strokeWidth={1.5} /></span>
            <span><strong>Rooted in purpose</strong><small>A closer look at Birei Farm</small></span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-landscape" role="img" aria-label="Decorative farm landscape artwork">
            <div className="landscape-sun" />
            <div className="landscape-hill landscape-hill-back" />
            <div className="landscape-hill landscape-hill-front" />
            <div className="landscape-field field-one" />
            <div className="landscape-field field-two" />
            <div className="landscape-tree tree-one"><i /><b /></div>
            <div className="landscape-tree tree-two"><i /><b /></div>
            <div className="landscape-caption"><span>THE BIREI FARM STORY</span><strong>Land. Care. Growth.</strong></div>
          </div>
          <div className="hero-stamp"><span>GROWN</span><span>WITH</span><strong>CARE</strong><Leaf size={18} /></div>
          <div className="hero-image-note">Illustrative artwork · replace with approved farm photography</div>
        </div>
      </div>
      <div className="hero-bottom-rule"><span>Thoughtful farming</span><span>Our story, products &amp; people</span><span>Get in touch <ArrowUpRight size={12} /></span></div>
    </section>
  );
}
