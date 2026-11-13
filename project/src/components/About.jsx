import profile from "../data/profile.js";
import education from "../data/education.js";
import experience from "../data/experience.js";
import useReveal from "../hooks/useReveal.js";
import StatCounter from "./StatCounter.jsx";
import MaskText from "./MaskText.jsx";
import "./About.css";

// Stats are counted directly from the data files
const stats = [
  { value: education.length, label: "Education Qualifications" },
  { value: experience.length, label: "Professional Roles" },
  { value: profile.achievements.length, label: "Achievements" },
];

// Civil Engineering related skills
const civilSkills = [
  "AutoCAD",
  "Revit",
  "BIM",
  "Architectural Plans",
  "Elevation Design",
  "Interior Layouts",
  "BIM Modeling",
];

function DetailBox({ detail, index }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className={`about-detail-box reveal reveal-delay-${index + 1} ${
        visible ? "is-visible" : ""
      }`}
    >
      <span className="about-detail-number">
        {detail.number}
      </span>

      <h3 className="about-detail-title">
        {detail.title}
      </h3>

      <p className="about-detail-desc text-dim">
        {detail.description}
      </p>
    </div>
  );
}

export default function About() {
  const [headRef, headVisible] = useReveal();
  const [imageRef, imageVisible] = useReveal();
  const [contentRef, contentVisible] = useReveal();

  return (
    <section id="about" className="section about">
      <div className="container about-container">

        {/* LEFT SIDE — HEADING + PHOTO */}

        <div className="about-left">

          <div
            ref={headRef}
            className={`about-heading ${
              headVisible ? "is-visible" : ""
            }`}
          >
            <p className="eyebrow">
              About Me
            </p>

            <h2 className="section-title about-title">
              <MaskText
                text={profile.aboutHeading[0]}
              />

              <br />

              <span className="text-gradient">
                <MaskText
                  text={profile.aboutHeading[1]}
                />
              </span>
            </h2>
          </div>


          {/* PROFILE IMAGE */}

          <div
            ref={imageRef}
            className={`about-image-wrapper reveal ${
              imageVisible ? "is-visible" : ""
            }`}
          >
            <div
              className="about-image-glow"
              aria-hidden="true"
            />

            <div className="blueprint-frame about-image-frame">
              <img
                src="/images/arasu.jpeg"
                alt="Arasumani A"
                className="about-image"
              />
            </div>
          </div>

        </div>


        {/* RIGHT SIDE — ABOUT CONTENT */}

        <div
          ref={contentRef}
          className={`about-content reveal ${
            contentVisible ? "is-visible" : ""
          }`}
        >

          {/* INTRO */}

          <p className="about-intro">
            I am{" "}
            <strong>
              {profile.name}
            </strong>
            {profile.aboutIntroSuffix}
          </p>


          {/* ABOUT DESCRIPTION */}

          {profile.about.map((para, i) => (
            <p
              key={i}
              className="about-paragraph text-dim"
            >
              {para}
            </p>
          ))}


          {/* CIVIL ENGINEERING DETAILS */}

          <div className="about-details">
            {profile.aboutDetails.map(
              (detail, i) => (
                <DetailBox
                  detail={detail}
                  index={i}
                  key={detail.number}
                />
              )
            )}
          </div>


          {/* CIVIL ENGINEERING SKILLS */}

          <div className="about-skills-row">
            {civilSkills.map((skill) => (
              <span
                className="about-skill-chip"
                key={skill}
              >
                {skill}
              </span>
            ))}
          </div>


          {/* PORTFOLIO STATS */}

          <div className="about-stats">
            {stats.map((stat, i) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix="+"
                label={stat.label}
                delay={i * 120}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}