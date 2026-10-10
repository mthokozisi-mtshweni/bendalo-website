import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return () => {};
  }

  const context = gsap.context(() => {
    // Hero entrance
    gsap.from(".hero-copy > *", {
      y: 28,
      opacity: 0,
      duration: 0.85,
      stagger: 0.1,
      ease: "power3.out",
      clearProps: "all",
    });

    // Services heading
    gsap.from(".services-section .section-heading-row > *", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: ".services-section", start: "top 75%", once: true },
    });

    // Service cards
    gsap.from(".service-card", {
      y: 32,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: ".services-grid", start: "top 82%", once: true },
    });

    // Work heading
    gsap.from(".work-heading-row > *", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: ".work-section", start: "top 75%", once: true },
    });

    // Project cards
    gsap.from(".project-card", {
      y: 32,
      opacity: 0,
      duration: 0.75,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: ".projects-grid", start: "top 82%", once: true },
    });

    // About content
    gsap.from(".about-intro > *, .mission-vision > *", {
      y: 28,
      opacity: 0,
      duration: 0.75,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: ".about-section", start: "top 75%", once: true },
    });

    // Values
    gsap.from(".value-card", {
      y: 24,
      opacity: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: "power3.out",
      scrollTrigger: { trigger: ".values-grid", start: "top 85%", once: true },
    });

    // Process steps
    gsap.from(".process-step", {
      y: 24,
      opacity: 0,
      duration: 0.65,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: ".process-grid", start: "top 82%", once: true },
    });

    // Contact
    gsap.from(".contact-content > *, .quote-form", {
      y: 28,
      opacity: 0,
      duration: 0.75,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: ".contact-section", start: "top 80%", once: true },
    });
  });

  return () => context.revert();
}