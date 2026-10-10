import { useState } from "react";
import {
  FiArrowUpRight,
  FiAlertTriangle,
  FiCheckCircle,
  FiUser,
  FiBriefcase,
  FiMail,
  FiPhone,
  FiGrid,
  FiDollarSign,
  FiEdit3,
} from "react-icons/fi";
import { serviceOptions, budgetOptions, contact } from "../data/site";

const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || "";

const initialValues = {
  fullName: "",
  businessName: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  description: "",
  website: "", // honeypot
};

export default function QuoteForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverMessage, setServerMessage] = useState("");

  const update = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((e2) => ({ ...e2, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!values.fullName.trim()) next.fullName = "Please enter your full name.";
    if (!values.email.trim()) next.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "That email address doesn’t look right.";
    if (!values.phone.trim()) next.phone = "Please enter a phone number.";
    if (!values.service) next.service = "Please choose a service.";
    if (!values.description.trim())
      next.description = "Please tell us a little about your project.";
    return next;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === "loading") return;

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    if (!FORM_ENDPOINT) {
      setStatus("error");
      setServerMessage(
        `Form endpoint not configured yet. Please email ${contact.email} directly, or set VITE_FORM_ENDPOINT to enable submissions.`
      );
      return;
    }

    setStatus("loading");
    setServerMessage("");

    try {
      const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || "";

const payload = {
  access_key: WEB3FORMS_KEY,
  subject: "New Quote Request — Bendalo Website",
  from_name: "Bendalo Website",
  ...values, // This includes all your form fields (fullName, email, etc.)
};

const res = await fetch(FORM_ENDPOINT, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(payload),
});

      if (!res.ok) throw new Error(`Request failed (${res.status})`);

      setStatus("success");
      setValues(initialValues);
    } catch (err) {
      setStatus("error");
      setServerMessage(
        `We couldn’t send your request. Please try again, or email ${contact.email} directly.`
      );
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-shell">
        <div className="contact-layout">
          {/* LEFT — INTRO */}
          <aside className="contact-side">
            <span className="section-index">05 / REQUEST A FREE QUOTATION</span>

            <h2 className="contact-heading">
              Have a project
              <br />
              <span>in mind?</span>
            </h2>

            <p className="contact-sub">
              Tell us about your business and what you need. We’ll use
              your information to understand your requirements and
              prepare the next steps for your project.
            </p>

            <ul className="contact-points">
              <li>
                <span className="contact-point-dot" />
                Free, no-obligation quote
              </li>
              <li>
                <span className="contact-point-dot" />
                Response within 24 hours
              </li>
              <li>
                <span className="contact-point-dot" />
                Your details stay private
              </li>
            </ul>

            <div className="contact-direct">
              <span>Prefer email?</span>
              <a href={`mailto:${contact.email}`}>
                {contact.email} <FiArrowUpRight />
              </a>
            </div>
          </aside>

          {/* RIGHT — FORM CARD */}
          <div className="quote-card">
            <form className="quote-form" onSubmit={onSubmit} noValidate>
              <div className="form-row">
                <label className="form-field">
                  <span className="form-label">Full Name *</span>
                  <div className="form-input-wrap">
                    <FiUser className="form-input-icon" />
                    <input
                      type="text"
                      value={values.fullName}
                      onChange={update("fullName")}
                      aria-invalid={!!errors.fullName}
                      autoComplete="name"
                      placeholder="Jane Doe"
                    />
                  </div>
                  {errors.fullName && (
                    <em className="form-error">{errors.fullName}</em>
                  )}
                </label>

                <label className="form-field">
                  <span className="form-label">
                    Business Name <i>optional</i>
                  </span>
                  <div className="form-input-wrap">
                    <FiBriefcase className="form-input-icon" />
                    <input
                      type="text"
                      value={values.businessName}
                      onChange={update("businessName")}
                      autoComplete="organization"
                      placeholder="Your company"
                    />
                  </div>
                </label>
              </div>

              <div className="form-row">
                <label className="form-field">
                  <span className="form-label">Email Address *</span>
                  <div className="form-input-wrap">
                    <FiMail className="form-input-icon" />
                    <input
                      type="email"
                      value={values.email}
                      onChange={update("email")}
                      aria-invalid={!!errors.email}
                      autoComplete="email"
                      placeholder="you@company.com"
                    />
                  </div>
                  {errors.email && (
                    <em className="form-error">{errors.email}</em>
                  )}
                </label>

                <label className="form-field">
                  <span className="form-label">Phone Number *</span>
                  <div className="form-input-wrap">
                    <FiPhone className="form-input-icon" />
                    <input
                      type="tel"
                      value={values.phone}
                      onChange={update("phone")}
                      aria-invalid={!!errors.phone}
                      autoComplete="tel"
                      placeholder="+27 …"
                    />
                  </div>
                  {errors.phone && (
                    <em className="form-error">{errors.phone}</em>
                  )}
                </label>
              </div>

              <div className="form-row">
                <label className="form-field">
                  <span className="form-label">Service Required *</span>
                  <div className="form-input-wrap">
                    <FiGrid className="form-input-icon" />
                    <select
                      value={values.service}
                      onChange={update("service")}
                      aria-invalid={!!errors.service}
                    >
                      <option value="">Choose a service…</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.service && (
                    <em className="form-error">{errors.service}</em>
                  )}
                </label>

                <label className="form-field">
                  <span className="form-label">
                    Estimated Budget <i>optional</i>
                  </span>
                  <div className="form-input-wrap">
                    <FiDollarSign className="form-input-icon" />
                    <select
                      value={values.budget}
                      onChange={update("budget")}
                    >
                      <option value="">Select a range</option>
                      {budgetOptions.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </label>
              </div>

              <label className="form-field">
                <span className="form-label">Project Description *</span>
                <div className="form-input-wrap form-input-wrap--textarea">
                  <FiEdit3 className="form-input-icon" />
                  <textarea
                    rows={5}
                    value={values.description}
                    onChange={update("description")}
                    aria-invalid={!!errors.description}
                    placeholder="Tell us about your project, goals and any deadlines…"
                  />
                </div>
                {errors.description && (
                  <em className="form-error">{errors.description}</em>
                )}
              </label>

              {/* Honeypot */}
              <label
                aria-hidden="true"
                style={{ position: "absolute", left: "-9999px" }}
              >
                Website
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={values.website}
                  onChange={update("website")}
                />
              </label>

              <div className="form-footer">
                <button
                  type="submit"
                  className="button button-primary form-submit"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <span className="form-spinner" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Request My Free Quote <FiArrowUpRight />
                    </>
                  )}
                </button>

                <span className="form-note">
                  We’ll never share your details.
                </span>
              </div>

              {status === "success" && (
                <p className="form-message is-success">
                  <FiCheckCircle /> Thanks — your request has been sent.
                  We’ll be in touch soon.
                </p>
              )}

              {status === "error" && (
                <p className="form-message is-error">
                  <FiAlertTriangle /> {serverMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}