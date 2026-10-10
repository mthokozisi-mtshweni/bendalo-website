import { FiArrowUpRight } from "react-icons/fi";
import {
  FiCode,
  FiSmartphone,
  FiMonitor,
  FiLayers,
  FiDatabase,
  FiCloud,
  FiGitBranch,
  FiCpu,
  FiTerminal,
  FiBox,
  FiCoffee,
  FiZap,
} from "react-icons/fi";
import { values } from "../data/site";

const techStack = [
  { label: "React", icon: FiCode },
  { label: "React Native", icon: FiSmartphone },
  { label: "TypeScript", icon: FiTerminal },
  { label: "Node.js", icon: FiDatabase },
  { label: "Java", icon: FiCoffee },
  { label: "Next.js", icon: FiLayers },
  { label: "Tailwind CSS", icon: FiMonitor },
  { label: "MongoDB", icon: FiDatabase },
  { label: "PostgreSQL", icon: FiDatabase },
  { label: "AWS", icon: FiCloud },
  { label: "Docker", icon: FiBox },
  { label: "Git", icon: FiGitBranch },
  { label: "Python", icon: FiCpu },
  { label: "Figma", icon: FiZap },
];

// Double the array so the marquee loops seamlessly
const marqueeItems = [...techStack, ...techStack];

export default function About() {
  return (
    <section className="about-section" id="about">
      {/* TECH STACK MARQUEE */}
      <div className="tech-marquee" aria-label="Technologies we use">
        <div className="tech-marquee-fade tech-marquee-fade-left" aria-hidden="true" />
        <div className="tech-marquee-fade tech-marquee-fade-right" aria-hidden="true" />

        <div className="tech-marquee-track">
          {marqueeItems.map(({ label, icon: Icon }, i) => (
            <span className="tech-chip" key={`${label}-${i}`}>
              <Icon />
              <span>{label}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="section-shell">
        {/* COMPANY INTRO */}
        <div className="about-intro">
          <div>
            <span className="section-index">02 / ABOUT BENDALO</span>
          </div>

          <div className="about-copy">
            <p className="about-kicker">Technology with a purpose.</p>

            <h2>
              We help turn
              <br />
              <span>ambition into action.</span>
            </h2>

            <p className="about-description">
              Bendalo Technology &amp; Innovation works with businesses
              and entrepreneurs to create digital tools that look
              professional, feel intuitive and serve a clear purpose.
              We believe technology should make the next step easier,
              not more complicated.
            </p>

            <a href="#contact" className="text-link">
              Let’s work together <FiArrowUpRight />
            </a>
          </div>
        </div>

        {/* MISSION + VISION */}
        <div className="mission-vision">
          <article className="mv-card">
            <span className="mv-number">01</span>
            <span className="mv-label">Our Mission</span>
            <p>
              To deliver useful, reliable and user-friendly digital
              solutions that help businesses solve real problems and
              achieve their goals through technology.
            </p>
          </article>

          <article className="mv-card">
            <span className="mv-number">02</span>
            <span className="mv-label">Our Vision</span>
            <p>
              To become a trusted technology partner known for
              innovation, quality and helping businesses succeed
              through digital solutions.
            </p>
          </article>
        </div>

        {/* VALUES */}
        <div className="values-block">
          <div className="values-heading">
            <span className="section-index">WHAT WE STAND FOR</span>
            <h3 className="values-title">Our values</h3>
          </div>

          <div className="values-grid">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <article className="value-card" key={value.title}>
                  <span className="value-icon">
                    <Icon />
                  </span>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}