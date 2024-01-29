import React from "react";
import { Link } from "react-router-dom";

function Project(props) {
  const { id, title, image, inGallery } = props;

  return (
    <div className="card shadow mb-4">
      <Link to={inGallery ? `/projects/${id}` : '#'} className="text-decoration-none" as="div">
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div
          className="card-body"
          style={{
            background: "linear-gradient(15deg, #13547a 0%, #80d0c7 100%)",
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