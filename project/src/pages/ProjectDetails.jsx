import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import projects from "../data/projects.js";
import "./ProjectDetails.css";

export default function ProjectDetails() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="project-details">
      <div className="container project-details-inner">
        <Link to="/#projects" className="btn btn-outline project-back">
          ← Back to Projects
        </Link>

        <div className="project-details-head">
          <span className="eyebrow">Project {project.number}</span>
          <h1 className="project-details-title">{project.title}</h1>
          {project.technologies?.length > 0 && (
            <ul className="project-details-tech">
              {project.technologies.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="blueprint-frame project-details-hero">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="project-details-body">
          <section className="project-details-block">
            <h2>Overview</h2>
            <p>{project.overview}</p>
          </section>

          <section className="project-details-block">
            <h2>Problem Statement</h2>
            <p>{project.problem}</p>
          </section>

          <section className="project-details-block">
            <h2>Description</h2>
            <p>{project.description}</p>
          </section>

          {project.features?.length > 0 && (
            <section className="project-details-block">
              <h2>Features</h2>
              <ul className="project-details-list">
                {project.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </section>
          )}

          <section className="project-details-block">
            <h2>My Role &amp; Contribution</h2>
            <p>{project.role}</p>
          </section>

          <section className="project-details-block">
            <h2>Results / Outcome</h2>
            <p>{project.outcome}</p>
          </section>

          {project.gallery?.length > 0 && (
            <section className="project-details-block">
              <h2>Additional Images</h2>
              <div className="project-details-gallery">
                {project.gallery.map((src, i) => (
                  <div className="blueprint-frame" key={i}>
                    <img src={src} alt={`${project.title} additional ${i + 1}`} />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <Link to="/#projects" className="btn btn-outline project-back project-back-bottom">
          ← Back to Projects
        </Link>
      </div>
    </main>
  );
}
