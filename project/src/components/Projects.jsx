import projects from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import useReveal from "../hooks/useReveal.js";
import MaskText from "./MaskText.jsx";
import "./Projects.css";

export default function Projects() {
  const [headRef, headVisible] = useReveal();

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div ref={headRef} className={`section-head ${headVisible ? "is-visible" : ""}`}>
          <span className="section-index">06</span>
          <h2 className="section-title">
            <MaskText text="Projects" />
          </h2>
          <span className="section-rule" />
        </div>

        <p className="projects-note text-muted">
        </p>

        <div className="projects-list">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
