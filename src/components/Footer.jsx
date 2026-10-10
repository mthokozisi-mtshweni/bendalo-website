import {
  FiArrowUpRight,
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import {
  FaWhatsapp,
  FaTiktok,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { navigation, contact, socials } from "../data/site";

const socialIcons = {
  WhatsApp: FaWhatsapp,
  TikTok: FaTiktok,
  Instagram: FaInstagram,
  LinkedIn: FaLinkedinIn,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-main">
        {/* COLUMN 1 — BRAND */}
        <div className="footer-col footer-brand-col">
          <a
            href="#home"
            className="footer-brand"
            aria-label="Bendalo home"
          >
            <img
              src="/images/bendalo-logo2.jpeg"
              alt="Bendalo Technology & Innovation"
              className="footer-logo"
            />
          </a>

          <p className="footer-description">
            A South African digital studio building websites, software
            and digital products that help businesses move forward.
          </p>

          <div className="footer-socials" aria-label="Follow Bendalo">
            {socials.map((s) => {
              const Icon = socialIcons[s.name];
              const isPlaceholder = s.url === "#";
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target={isPlaceholder ? undefined : "_blank"}
                  rel={isPlaceholder ? undefined : "noopener noreferrer"}
                  aria-label={s.name}
                  className={`footer-social${
                    isPlaceholder ? " is-disabled" : ""
                  }`}
                  onClick={(e) => isPlaceholder && e.preventDefault()}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        {/* COLUMN 2 — QUICK LINKS */}
        <nav className="footer-col footer-links" aria-label="Footer navigation">
          <h4 className="footer-col-title">Quick Links</h4>
          {navigation.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </nav>

        {/* COLUMN 3 — CONTACT */}
        <div className="footer-col footer-contact">
          <h4 className="footer-col-title">Get in Touch</h4>

          <a
            className="footer-contact-item"
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              contact.location
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiMapPin />
            <span>{contact.location}</span>
          </a>

          <a
            className="footer-contact-item"
            href={`tel:${contact.phone.replace(/\s+/g, "")}`}
          >
            <FiPhone />
            <span>{contact.phoneDisplay}</span>
          </a>

          <a
            className="footer-contact-item"
            href={contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
            <span>{contact.whatsapp}</span>
          </a>

          <a
            className="footer-contact-item"
            href={`mailto:${contact.email}`}
          >
            <FiMail />
            <span>{contact.email}</span>
          </a>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p className="footer-copy">
          © {year} Bendalo Technology &amp; Innovation. All rights reserved.
        </p>

        <a href="#home" className="footer-back-top">
          Back to top <FiArrowUpRight />
        </a>
      </div>
    </footer>
  );
}