import Project from '../components/Project';
import projects from '../data/projects.json';
import React from "react";


function ProjectGallery() {
    return (
      <div className="container mt-4">
        <div className="row justify-content-center">

          <div className="col-12 col-md-8 col-lg-12 mb-4">
            <Project {...projects[0]} />
          </div>
  

          <div className="col-12 col-md-6 col-lg-6 mb-4">
            {projects.slice(1, 4).map((project) => (
              <Project key={project.id} {...project} />
            ))}
          </div>
  
          <div className="col-12 col-md-6 col-lg-6 mb-4">
            {projects.slice(4).map((project) => (
              <Project key={project.id} {...project} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default ProjectGallery;