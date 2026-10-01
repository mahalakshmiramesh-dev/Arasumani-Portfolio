import profile from "../data/profile.js";
import useReveal from "../hooks/useReveal.js";
import MaskText from "./MaskText.jsx";
import "./Achievements.css";

function AchievementCard({ item, index }) {
  const [ref, visible] = useReveal();
  return (
    <article
      ref={ref}
      className={`achievement-card reveal reveal-delay-${index + 1} ${visible ? "is-visible" : ""}`}
    >
      <span className="achievement-index">{String(index + 1).padStart(2, "0")}</span>
      <h3 className="achievement-title">{item.title}</h3>
      <p className="achievement-desc text-dim">{item.description}</p>
    </article>
  );
}

export default function Achievements() {
  const [headRef, headVisible] = useReveal();

  if (!profile.achievements?.length) return null;

  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        <div ref={headRef} className={`section-head ${headVisible ? "is-visible" : ""}`}>
          <span className="section-index">05</span>
          <h2 className="section-title">
            <MaskText text="Achievements" />
          </h2>
          <span className="section-rule" />
        </div>

        <div className="achievements-grid">
          {profile.achievements.map((item, i) => (
            <AchievementCard item={item} index={i} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
