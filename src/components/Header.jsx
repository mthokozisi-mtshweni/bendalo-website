

import { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { navigation } from "../data/site";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll state for header background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll + close on Escape
  useEffect(() => {
    if (!menuOpen) return;

    document.body.classList.add("menu-open");

    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`navbar${scrolled ? " is-scrolled" : ""}`}>
        <a
          href="#home"
          className="brand"
          aria-label="Bendalo home"
          onClick={closeMenu}
        >
          <img
            src="/images/bendalo-logo2.jpeg"
            alt="Bendalo Technology & Innovation"
            className="brand-logo"
          />
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          {navigation.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="nav-project">
          Get a Free Quote <FiArrowUpRight />
        </a>

        {/* MODERN HAMBURGER */}
        <button
          className={`hamburger${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </header>

      {/* BACKDROP */}
      <div
        className={`drawer-backdrop${menuOpen ? " is-open" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* SIDE DRAWER */}
      <aside
        className={`drawer${menuOpen ? " is-open" : ""}`}
        id="mobile-navigation"
        aria-hidden={!menuOpen}
      >
        <div className="drawer-header">
          <span className="drawer-title">Menu</span>
          <button
            type="button"
            className="drawer-close"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <span />
            <span />
          </button>
        </div>

        <nav className="drawer-links" aria-label="Mobile navigation">
          {navigation.map(([label, href], i) => (
            <a
              key={label}
              href={href}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
              style={{ transitionDelay: menuOpen ? `${0.06 * i + 0.1}s` : "0s" }}
            >
              <span className="drawer-link-number">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="drawer-link-label">{label}</span>
              <FiArrowUpRight className="drawer-link-arrow" />
            </a>
          ))}
        </nav>

        <div className="drawer-footer">
          <a
            href="#contact"
            className="button button-primary drawer-cta"
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
          >
            Get a Free Quote <FiArrowUpRight />
          </a>

          <p className="drawer-tagline">
            Bendalo Technology &amp; Innovation
          </p>
        </div>
      </aside>
    </>
  );
}