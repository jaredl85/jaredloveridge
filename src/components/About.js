import React from "react";
import me from "./me.jpg";
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
          <h3>NuCamp Full-Stack Web Development Student</h3>
          <strong>
            <p>
              I’m a coding bootcamp student at NuCamp, currently just finishing
              up my second course (focusing on react).
            </p>
          </strong>
          <p>
            I first began to explore web development about five years ago, after
            taking an elective course in web design as part of my bachelor’s
            program at the University of Washington. I needed the credits and
            decided to try it out, expecting it to be an easy course. As I’m
            sure you can imagine, it wasn’t easy, but I fell in love with web
            development and I've been building things with code ever since.
          </p>
          <p>
            I’m very familiar with HTML, CSS, and (vanilla) JavaScript. I’m
            still getting my feet wet with the React library and I’m excited to
            continue learning and growing my skills.
          </p>
          <a className="resume-btn" href="#">
            See my resume
          </a>
        </div>
      </div>

      <div className="row">
        <div className="skills">
          <h3>Skills</h3>
          <li>
            <h4>HTML</h4>
            <span class="bar">
              <span class="html"></span>
            </span>
          </li>
          <li>
            <h4>CSS</h4>
            <span class="bar">
              <span class="css"></span>
            </span>
          </li>
          <li>
            <h4>SASS</h4>
            <span class="bar">
              <span class="sass"></span>
            </span>
          </li>
          <li>
            <h4>Bootstrap</h4>
            <span class="bar">
              <span class="bootstrap"></span>
            </span>
          </li>
          <li>
            <h4>JavaScript</h4>
            <span class="bar">
              <span class="javascript"></span>
            </span>
          </li>
          <li>
            <h4>React</h4>
            <span class="bar">
              <span class="react"></span>
            </span>
          </li>
          <li>
            <h4>WordPress</h4>
            <span class="bar">
              <span class="wordpress"></span>
            </span>
          </li>
          <li>
            <h4>Design</h4>
            <span class="bar">
              <span class="design"></span>
            </span>
          </li>
        </div>
      </div>
    </div>
  );
}
