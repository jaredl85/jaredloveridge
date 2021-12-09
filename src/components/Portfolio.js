import React from "react";
import ProjectNav from "./ProjectNav";
import { FaReact } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiReactrouter } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { Link } from "react-router-dom";
import PORT_ABOUT from "./images/port_about.png";
import PORT_WORK from "./images/port_work.png";
import PORT_HOME from "./images/port_home.png";
import PORT_CONTACT from "./images/port_contact.png";
import ProjectFooter from "./ProjectFooter.js";
import "./projects.scss";

export default function Portfolio() {
  return (
    <div className="project-page">
      <ProjectNav />
      <h2>React Portfolio Project</h2>
      <div className="project-wrapper">
        <div className="project-row">
          <div className="project-col r-1">
            <div className="project-box">
              <h3>Project Goal</h3>
              <p>
                This was my final project for the NuCamp React course. My goal
                was to design and implement an aesthetically-pleasing and
                mobile-friendly portfolio using the React library.
              </p>
            </div>
          </div>
          <div className="project-col r-2">
            <div className="project-box">
              <img src={PORT_HOME} />
            </div>
          </div>
        </div>
        <div className="project-divider"></div>
        <div className="project-row">
          <div className="project-col r-4">
            <div className="project-box">
              <img src={PORT_WORK} />
            </div>
          </div>
          <div className="project-col r-3">
            <div className="project-box">
              <h3>Technologies Used</h3>
              <p>
                <ul className="technology-list">
                  <li>
                    <SiJavascript className="tech-icon" /> JavaScript
                  </li>
                  <li>
                    <FaReact className="tech-icon" /> React
                  </li>
                  <li>
                    <SiReactrouter className="tech-icon" /> React Router
                  </li>
                  <li>
                    <SiRedux className="tech-icon" /> React Redux
                  </li>
                  <li>
                    <FaBootstrap className="tech-icon" /> Bootstrap (Reactstrap)
                  </li>
                  <li>
                    <FaHtml5 className="tech-icon" /> HTML
                  </li>
                  <li>
                    <FaCss3 className="tech-icon" /> CSS
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="project-divider"></div>
        <div className="project-row">
          <div className="project-col r-5">
            <div className="project-box">
              <h3>Process and Challenges</h3>
              <p>
                My process was first to conduct a competitive analysis of other
                web development portfolio sites. My goal here was to get a sense
                of what I personally liked, design ideas, and design choices
                that might be less effective for my goals. Once I had looked
                through quite a few portfolios, I mocked up my own, using
                Wireframe.cc. I put together a color palette and fonts for the
                site.
              </p>
              <p>
                The process of coding was challenging in the early stages of
                this project. I quickly realized how much I still didn’t know.
                However, learning React through the process of actually
                developing with it is immensely rewarding - looking back, I’m
                grateful for the challenges I ran into. I feel that I now have a
                much stronger grasp on how to use the React library to develop a
                project from start to finish.
              </p>
              <p>
                The deployment process ended up taking quite a bit longer than I
                had initially anticipated, as I ran into issues with hosting my
                build files. However, after going through the process of
                debugging my application, I managed to fix the errors that were
                preventing my app from properly deploying. I don't regret running into these deployment issues; in the process, I learned a lot about how to debug my own code.
              </p>
            </div>
          </div>
          <div className="project-col r-6">
            <div className="project-box">
              <img src={PORT_ABOUT} />
            </div>
          </div>
        </div>
        <div className="project-divider"></div>
        <div className="project-row">
          <div className="project-col r-8">
            <div className="project-box">
              <img src={PORT_CONTACT} />
            </div>
          </div>
          <div className="project-col r-7">
            <div className="project-box">
              <h3>Outcome</h3>
              <p>
                <Link to="/" className="project-page-link">
                  See the final project
                </Link>
              </p>
              <p>
                <a
                  href="https://github.com/jaredl85/jaredloveridge"
                  target="_blank"
                  className="project-page-link project-page-github"
                >
                  Check out the code
                </a>
              </p>
              <p>
                At the end of this project I ended up with a mobile-friendly
                portfolio project to showcase my work, built entirely using the
                React library (and, of course, a generous amount of SASS). I’m
                pleased to report that my portfolio site is very close to what I
                had envisioned during the design phase.
              </p>
            </div>
          </div>
        </div>
        <div className="project-divider"></div>
      </div>
      <ProjectFooter />
    </div>
  );
}
