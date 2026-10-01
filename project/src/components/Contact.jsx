import { useState } from "react";
import profile from "../data/profile.js";
import useReveal from "../hooks/useReveal.js";
import MaskText from "./MaskText.jsx";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [headRef, headVisible] = useReveal();
  const [infoRef, infoVisible] = useReveal();
  const [formRef, formVisible] = useReveal();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ------------------------------------------------------------
    // No backend / email service is connected yet, so this form
    // does not actually send anything. To make it functional:
    //   1. Sign up for a form service (e.g. Formspree, EmailJS,
    //      or your own backend endpoint).
    //   2. Replace this handleSubmit function with a fetch/POST
    //      call to that service, sending `form` as the payload.
    // ------------------------------------------------------------
    console.log("Contact form submitted (not sent — no backend connected):", form);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const contactRows = [
    { label: "Email", value: profile.contact.email, href: `mailto:${profile.contact.email}` },
    { label: "Phone", value: profile.contact.phone, href: `tel:${profile.contact.phone.replace(/\s+/g, "")}` },
    { label: "Location", value: profile.contact.location, href: null },
  ].filter((row) => row.value);

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div ref={headRef} className={`section-head ${headVisible ? "is-visible" : ""}`}>
          <span className="section-index">07</span>
          <h2 className="section-title">
            <MaskText text="Contact" />
          </h2>
          <span className="section-rule" />
        </div>

        <div className="contact-grid">
          <div ref={infoRef} className={`contact-info reveal ${infoVisible ? "is-visible" : ""}`}>
            <p className="contact-lead text-dim">
              Reach out for opportunities, collaborations, or a chat about
              civil engineering work.
            </p>

            <div className="contact-rows">
              {contactRows.map((row) => (
                <div className="contact-row" key={row.label}>
                  <span className="contact-row-label eyebrow">{row.label}</span>
                  {row.href ? (
                    <a className="contact-row-value" href={row.href}>
                      {row.value}
                    </a>
                  ) : (
                    <span className="contact-row-value">{row.value}</span>
                  )}
                </div>
              ))}
            </div>

            {profile.socialLinks.length > 0 && (
              <div className="contact-social">
                {profile.socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-social-link"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <form
            ref={formRef}
            className={`contact-form reveal reveal-delay-1 ${formVisible ? "is-visible" : ""}`}
            onSubmit={handleSubmit}
          >
            <div className="contact-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>

            <div className="contact-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </div>

            <div className="contact-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
              />
            </div>

            <button type="submit" className="btn btn-primary contact-submit">
              {sent ? "Message Ready ✓" : "Send Message"}
            </button>
            {sent && (
              <p className="contact-note text-muted">
                Form captured locally — connect a backend to actually deliver it (see code comment).
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
