"use client";

import { useEffect } from "react";

export function ScrollAnimations() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) return;

    const selectors = [
      ".story-section",
      ".products-section",
      ".values-section",
      ".home-cta",
      ".product-card",
      ".value-card",
      ".page-hero",
      ".card-border",
      ".legal-copy",
      ".contact-layout"
    ];
    const targets = document.querySelectorAll(selectors.join(","));
    targets.forEach((target, index) => {
      target.classList.add("reveal-on-scroll");
      if (target.matches(".product-card, .value-card")) {
        (target as HTMLElement).style.setProperty("--reveal-delay", `${(index % 3) * 85}ms`);
      }
    });

    const observer = new IntersectionObserver((entries, activeObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          activeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -36px 0px" });

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return null;
}
