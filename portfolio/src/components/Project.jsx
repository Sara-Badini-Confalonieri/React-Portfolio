import React from "react";

function Project(props) {
  const { title, description, image, deployLink, githubLink, demoImage } = props;

  return (
    <div className="card mb-3 shadow">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{description}</p>
        <div className="mb-3">
          <strong>Deployed Version:</strong>{" "}
          <a href={deployLink} target="_blank" rel="noopener noreferrer" className="text-primary">
            {deployLink}
          </a>
        </div>
        <div>
          <strong>GitHub Repository:</strong>{" "}
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-primary">
            {githubLink}
          </a>
        </div>
      </div>
      {demoImage && (
        <img src={demoImage} className="card-img-bottom" alt={`Demo of ${title}`} />
      )}
    </div>
  );
}

export default Project;