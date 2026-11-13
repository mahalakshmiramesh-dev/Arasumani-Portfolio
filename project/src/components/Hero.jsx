
import { useEffect, useState } from "react";
import "./Hero.css";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Scroll to another section
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="home" className={`hero ${loaded ? "hero-loaded" : ""}`}>

      {/* Background grid */}
      <div className="hero-grid" aria-hidden="true"></div>

      {/* Big PORTFOLIO text */}
      <div className="hero-watermark" aria-hidden="true">
        PORTFOLIO
      </div>

      {/* Main Hero */}
      <div className="hero-inner container">

        {/* LEFT SIDE */}
        <div className="hero-left">

          <p className="hero-greeting">
            Hello, I'm
          </p>

          <h1 className="hero-name">
            ARASUMANI A
          </h1>

          <h2 className="hero-role">
            CIVIL ENGINEER &
          </h2>

          <p className="hero-subrole">
            CIVIL TECHNICAL TRAINER
          </p>

          <p className="hero-description">
            Civil Engineer and Technical Trainer with hands-on experience
            in teaching technical skills, software training and practical
            engineering concepts.
          </p>

          <button
            type="button"
            className="hero-project-btn"
            onClick={() => scrollTo("projects")}
          >
            <span>VIEW PROJECTS</span>
            <span>↗</span>
          </button>

        </div>

        {/* CENTER - PROFILE IMAGE */}
        <div className="hero-center">

          <div className="hero-image-glow"></div>

          <img
            src="/images/arasu.jpeg"
            alt="Arasumani A"
            className="hero-image"
          />

        </div>

        {/* RIGHT SIDE */}
        <div className="hero-right">

          {/* Experience */}
          <div
            className="hero-stat"
            onClick={() => scrollTo("experience")}
          >
            <strong>03+</strong>
            <span>EXPERIENCE</span>
          </div>

          {/* Projects */}
          <div
            className="hero-stat"
            onClick={() => scrollTo("projects")}
          >
            <strong>05</strong>
            <span>PROJECTS</span>
          </div>

          {/* Education */}
          <div
            className="hero-stat"
            onClick={() => scrollTo("education")}
          >
            <strong>03</strong>
            <span>EDUCATION</span>
          </div>

          {/* Skills */}
          <div className="hero-skills">

            <p>SKILLS</p>

            <span>AUTOCAD</span>
            <span>REVIT</span>
            <span>BIM</span>
            <span>DRAFTING</span>
            <span>SURVEYING</span>

          </div>

        </div>

      </div>

      {/* Scroll button */}
      <button
        type="button"
        className="hero-scroll-indicator"
        onClick={() => scrollTo("about")}
        aria-label="Scroll to About section"
      >
        <span className="hero-scroll-dot"></span>
        <span className="hero-scroll-label">SCROLL</span>
      </button>

    </section>
  );
}
