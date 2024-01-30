import React from "react";
import { Link } from "react-router-dom";
import Project from '../components/Project';
import projects from '../data/projects.json';

function ProjectGallery() {
  return (
    <div className="container mt-5">
      <h1 className="mb-5">My Projects:</h1>

      <div className="row">
        <div className="col-12 col-lg-12">
          {projects.slice(0, 1).map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`} className="text-decoration-none">
              <Project {...project} inGallery />
            </Link>
          ))}
        </div>

        <div className="col-12 col-md-6 col-lg-6">
          {projects.slice(1, 4).map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`} className="text-decoration-none">
              <Project {...project} inGallery />
            </Link>
          ))}
        </div>

        <div className="col-12 col-md-6 col-lg-6">
          {projects.slice(4).map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`} className="text-decoration-none">
              <Project {...project} inGallery />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectGallery;