import React from "react";
import me from "./me.jpg";
import resume from './images/jaredloveridge2021.pdf';
import "./components.scss";

export default function About() {
  return (
    <div class="about" id="about">
      <h2>About</h2>
      <div className="row">
        <div className="about-img-box">
          <img src={me} alt="Jared" />
        </div>

        <div className="about-text-box">
          <h3>Junior-Level Front-End Web Developer</h3>
          <p>
            Hello! My name is Jared and I'm a recent coding bootcamp graduate
            with experience developing web applications in the MERN stack
            (Mongo, Express, React, and Node). I'm currently seeking
            opportunities to expand and apply my skills.
          </p>
          <a
            className="resume-btn"
            href={resume}
            target="_blank"
          >
            resume
          </a>
        </div>
      </div>

      <div className="row"></div>
    </div>
  );
}
