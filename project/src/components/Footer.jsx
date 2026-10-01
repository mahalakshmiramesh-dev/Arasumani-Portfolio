import profile from "../data/profile.js";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="navbar-brand-mark footer-mark" />
          <span className="footer-name">{profile.name}</span>
          <span className="footer-role text-muted">— Portfolio</span>
        </div>

        {profile.socialLinks.length > 0 && (
          <div className="footer-links">
            {profile.socialLinks.map((link) => (
              <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        )}

        <p className="footer-copyright text-muted">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
