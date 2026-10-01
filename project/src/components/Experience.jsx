import experience from "../data/experience.js";
import useReveal from "../hooks/useReveal.js";
import MaskText from "./MaskText.jsx";
import "./Experience.css";

function ExperienceBox({ item }) {
  const [ref, visible] = useReveal();

  return (
    <article
      ref={ref}
      className={`experience-box reveal ${
        visible ? "is-visible" : ""
      }`}
    >

      {/* LEFT CONTENT */}
      <div className="experience-content">

        <span className="experience-number">
          {item.number}
        </span>

        <span className="experience-year eyebrow">
          {item.duration}
        </span>

        <h3 className="experience-role">
          {item.role}
        </h3>

        <h4 className="experience-company">
          {item.company}
        </h4>

        {item.paragraphs?.map((para, i) => (
          <p key={i} className="text-dim">
            {para}
          </p>
        ))}

      </div>


      {/* RIGHT IMAGE BOX */}
      <div className="experience-image-wrapper">

        <div
          className="experience-image-glow"
          aria-hidden="true"
        />

        <div className="blueprint-frame experience-image-frame">

          {item.image ? (
            <img
              src={item.image}
              alt={`${item.role} - ${item.company}`}
              className="experience-image"
            />
          ) : (
            <div className="experience-image-placeholder">
              <span> CIVIL ENGINEERING </span>
              <small>Experience Image</small>
            </div>
          )}

        </div>

      </div>

    </article>
  );
}


export default function Experience() {

  const [headRef, headVisible] = useReveal();

  return (
    <section id="experience" className="section experience">

      <div className="container">

        {/* HEADING */}
        <div
          ref={headRef}
          className={`experience-heading ${
            headVisible ? "is-visible" : ""
          }`}
        >

          <p className="eyebrow">
            Professional Journey
          </p>

          <h2 className="section-title experience-title">

            <MaskText text="Work" />

            <br />

            <span className="text-gradient">
              <MaskText text="Experience." />
            </span>

          </h2>

        </div>


        {/* EXPERIENCE LIST */}
        <div className="experience-list">

          {experience.map((item) => (
            <ExperienceBox
              item={item}
              key={item.number}
            />
          ))}

        </div>

      </div>

    </section>
  );
}