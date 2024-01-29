import React from "react";

function Project(props) {
  const { title, description, image, deployLink, githubLink, demoImage } = props;

  return (
    <div className="project">
      <h2>{title}</h2>
      <p>{description}</p>

      <img src={image} alt={title} />
      <div>
        <strong>Deployed Version:</strong>{" "}
        <a href={deployLink} target="_blank" rel="noopener noreferrer">
          {deployLink}
        </a>
      </div>
      <div>
        <strong>GitHub Repository:</strong>{" "}
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          {githubLink}
        </a>
      </div>

      {demoImage && <img src={demoImage} alt={`Demo of ${title}`} />}
    </div>
  );
}

export default Project;