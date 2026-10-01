import { Link } from "react-router-dom";
import useReveal from "../hooks/useReveal.js";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  const [ref, visible] = useReveal();
  return (
    <article
      ref={ref}
      className={`project-card reveal ${visible ? "is-visible" : ""} ${
        project.isPlaceholder ? "is-placeholder" : ""
      }`}
    >
      <div className="project-card-copy">
        <span className="project-card-number">{project.number}</span>
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc text-dim">{project.description}</p>

        {project.technologies?.length > 0 && (
          <ul className="project-card-tech">
            {project.technologies.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}

        <Link to={`/projects/${project.id}`} className="btn btn-outline project-card-btn">
          View Details
        </Link>
      </div>

      <Link to={`/projects/${project.id}`} className="project-card-media">
        <img src={project.image} alt={project.title} loading="lazy" />
        <span className="project-card-overlay">
          <span className="project-card-overlay-tag">View Details ↗</span>
        </span>
      </Link>
    </article>
  );
}
