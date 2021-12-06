import React from "react";
import { Link } from "react-router-dom";
import "./projects.scss";

export default function ProjectNav() {
  return (
    <div className="project-nav">
      <Link to="/" className="project-nav-link">
        Home
      </Link>
    </div>
  );
}
