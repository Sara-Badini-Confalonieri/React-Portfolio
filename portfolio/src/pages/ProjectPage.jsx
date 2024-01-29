import React from "react";
import { useParams } from "react-router-dom";
import projects from '../data/projects.json';

function ProjectPage() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === parseInt(projectId, 10));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <h2>{project.title}</h2>
          <img src={project.image} alt={project.title} className="img-fluid mb-3" />
          <p>{project.description}</p>
          <div className="mb-3">
            <strong>Deployed Version:</strong>{" "}
            <a href={project.deployLink} target="_blank" rel="noopener noreferrer" className="text-primary">
              {project.deployLink}
            </a>
          </div>
          <div>
            <strong>GitHub Repository:</strong>{" "}
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-primary">
              {project.githubLink}
            </a>
          </div>
          {project.demoImage && (
            <img src={project.demoImage} alt={`Demo of ${project.title}`} className="img-fluid mt-3" />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
