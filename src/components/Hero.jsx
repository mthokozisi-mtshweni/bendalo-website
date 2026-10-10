import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import {
  FiCode,
  FiMonitor,
  FiSmartphone,
  FiShoppingCart,
} from "react-icons/fi";

const floatingCards = [
  { icon: FiCode, label: "Software Development", delay: "0s" },
  { icon: FiMonitor, label: "Website Design", delay: "1.4s" },
  { icon: FiSmartphone, label: "Web Applications", delay: "2.6s" },
  { icon: FiShoppingCart, label: "E-Commerce", delay: "0.8s" },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            Technology · Design · Innovation
          </div>

          <h1>
            Your Vision.
            <br />
            <span>Our Technology.</span>
            <br />
            Limitless Possibilities.
          </h1>

          <p className="hero-description">
            We turn ambitious ideas into powerful websites
            and intelligent software that help businesses
            grow, compete, and lead.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="button button-primary">
              Get a Free Quote <FiArrowUpRight />
            </a>

            <a href="#work" className="button button-outline">
              Explore Our Work <FiArrowDown />
            </a>
          </div>
        </div>
      </div>

      <div className="hero-cards" aria-hidden="true">
        {floatingCards.map(({ icon: Icon, label, delay }) => (
          <div
            className="hero-card"
            key={label}
            style={{ animationDelay: delay }}
          >
            <span className="hero-card-icon">
              <Icon />
            </span>
            <span className="hero-card-label">{label}</span>
          </div>
        ))}
      </div>

      <div className="hero-meta">
        <span>South African digital studio</span>
        <span className="hero-meta-center">
          Websites · Software · Digital products
        </span>
        <a href="#services" className="hero-scroll">
          Scroll to explore <FiArrowDown />
        </a>
      </div>
    </section>
  );
}