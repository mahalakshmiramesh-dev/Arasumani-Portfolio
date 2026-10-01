import education from "../data/education.js";
import useReveal from "../hooks/useReveal.js";
import MaskText from "./MaskText.jsx";
import "./Education.css";

function EducationCard({ item, index }) {
  const [ref, visible] = useReveal();
  return (
    <article
      ref={ref}
      className={`education-card reveal reveal-delay-${Math.min(index + 1, 5)} ${
        visible ? "is-visible" : ""
      }`}
    >
      <p className="education-duration eyebrow">{item.duration}</p>
      <h3 className="education-degree">{item.degree}</h3>
      <p className="education-institution text-dim">{item.institution}</p>
      {item.score && <p className="education-score">{item.score}</p>}
    </article>
  );
}

export default function Education() {
  const [headRef, headVisible] = useReveal();

  return (
    <section id="education" className="section education">
      <div className="container">
        <div ref={headRef} className={`section-head ${headVisible ? "is-visible" : ""}`}>
          <span className="section-index">04</span>
          <h2 className="section-title">
            <MaskText text="Education Journey" />
          </h2>
          <span className="section-rule" />
        </div>

        <div className="education-grid">
          {education.map((item, i) => (
            <EducationCard item={item} index={i} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
