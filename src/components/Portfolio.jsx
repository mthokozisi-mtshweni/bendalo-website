import { useState } from "react";
import { FiArrowUpRight, FiLock } from "react-icons/fi";
import { projects } from "../data/site";

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? projects : projects.slice(0, 4);

  return (
    <section className="work-section" id="work">
      <div className="section-shell">
        <div className="section-heading-row work-heading-row">
          <div>
            <span className="section-index">03 / SELECTED WORK</span>
            <h2 className="section-title">
              Ideas made
              <br />
              <span>real.</span>
            </h2>
          </div>

          <p className="section-intro">
            A selection of digital platforms and experiences that
            reflect the problems we enjoy solving.
          </p>
        </div>

        <div className="projects-grid">
          {visible.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-image-wrap">
                <img
                  src={project.image}
                  alt={`${project.name} project preview`}
                  className="project-image"
                  loading="lazy"
                />

                <span className="project-number">{project.number}</span>

                {project.live ? (
                  <>
                    <div className="project-overlay" aria-hidden="true" />
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-view-button"
                      aria-label={`View ${project.name} website`}
                    >
                      View Website <FiArrowUpRight />
                    </a>
                  </>
                ) : (
                  <span
                    className="project-view-button is-disabled"
                    aria-label={`${project.name} is not live yet`}
                  >
                    <FiLock /> Not yet live
                  </span>
                )}
              </div>

              <div className="project-card-details">
                <div>
                  <span className="project-category">
                    {project.category}
                  </span>
                  <h3>{project.name}</h3>
                </div>

                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>

        {projects.length > 4 && (
          <div className="portfolio-actions">
            <button
              type="button"
              className="button button-outline portfolio-toggle"
              onClick={() => setShowAll((v) => !v)}
              aria-expanded={showAll}
            >
              {showAll ? "Show Fewer Projects" : "View All Websites"}
              <FiArrowUpRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}