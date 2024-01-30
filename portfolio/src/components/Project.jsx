import React, { useState } from "react";
import { Link } from "react-router-dom";

function Project(props) {
  const { id, title, image, inGallery } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="card shadow mb-5" style={{
        transition: "transform 0.3s",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        boxShadow: isHovered ? "0px 4px 8px rgba(0, 0, 0, 0.2)" : "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}>
      <Link
        to={inGallery ? `/projects/${id}` : "#"}
        className="text-decoration-none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{
            height: "200px",
            objectFit: "cover",
          }}
        />
        <div
          className="card-body"
          style={{
            background: "#385170",
            color: "white",
          }}
        >
          <h2 className="card-title">{title}</h2>
        </div>
      </Link>
    </div>
  );
}

export default Project;