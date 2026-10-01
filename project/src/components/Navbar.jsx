import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import profile from "../data/profile.js";
import "./Navbar.css";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const goToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      // wait for Home to mount, then scroll
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 60);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-inner container">
        <button className="navbar-brand" onClick={() => goToSection("home")}>
          <span className="navbar-brand-mark" />
          <span className="navbar-brand-text">{profile.name}</span>
        </button>

        <nav className="navbar-links">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className="navbar-link"
              onClick={() => goToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className={`navbar-toggle ${open ? "is-open" : ""}`}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav className={`navbar-mobile ${open ? "navbar-mobile-open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className="navbar-mobile-link"
            onClick={() => goToSection(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
