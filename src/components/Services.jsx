import { FiArrowUpRight } from "react-icons/fi";
import { services } from "../data/site";

export default function Services() {
  return (
    <section className="services-section section-shell" id="services">
      <div className="section-heading-row">
        <div>
          <span className="section-index">03 / WHAT WE DO</span>
          <h2 className="section-title">
            Digital solutions
            <br />
            <span>for real business needs.</span>
          </h2>
        </div>

        <p className="section-intro">
          From your first website to a custom business system, we turn
          practical ideas into useful digital experiences.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article className="service-card" key={service.number}>
              <div className="service-card-top">
                <span className="service-icon">
                  <Icon />
                </span>
                <span className="service-number">{service.number}</span>
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <a href="#contact" className="service-link">
                Discuss this service <FiArrowUpRight />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}