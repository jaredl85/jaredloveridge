import React from "react";
import ProjectNav from "./ProjectNav";
import { FaReact } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiReactrouter } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import NC_ABOUT from "./images/nc_about.png";
import NC_DIR from "./images/nc_dir.png";
import NC_MODAL from "./images/nc_modal.png";
import NC_CONTACT from "./images/nc_contact.png";
import ProjectFooter from "./ProjectFooter.js";
import "./projects.scss";

export default function NuCamp() {
  return (
    <div className="project-page">
      <ProjectNav />
      <h2>NuCamp React Project</h2>
      <div className="project-wrapper">
        <div className="project-row">
          <div className="project-col r-1">
            <div className="project-box">
              <h3>Project Goal</h3>
              <p>
                This was the main course website I constructed as part of the
                NuCamp React course, built using the React library (along with
                SASS and ReactStrap).
              </p>
            </div>
          </div>
          <div className="project-col r-2">
            <div className="project-box">
              <img src={NC_ABOUT} />
            </div>
          </div>
        </div>
        <div className="project-divider"></div>
        <div className="project-row">
          <div className="project-col r-4">
            <div className="project-box">
              <img src={NC_DIR} />
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
                This was built using a combination of code-along video tutorials
                and online workshops where I worked in small groups to
                pair-program aspects of the website.
              </p>
              <p>
                This project incorporates use of Reactstrap, React Router, React
                Redux for overall state management, and React Redux Form
                Control, for form validation.
              </p>
            </div>
          </div>
          <div className="project-col r-6">
            <div className="project-box">
              <img src={NC_MODAL} />
            </div>
          </div>
        </div>
        <div className="project-divider"></div>
        <div className="project-row">
          <div className="project-col r-8">
            <div className="project-box">
              <img src={NC_CONTACT} />
            </div>
          </div>
          <div className="project-col r-7">
            <div className="project-box">
              <h3>Outcome</h3>
              <p>
                <a
                  href="https://github.com/jaredl85/nucampsite2"
                  target="_blank"
                  className="project-page-link project-page-github"
                >
                  Check out the code
                </a>
              </p>
              <p>
                This website is a fully responsive single-page react application
                that has centralized state management, form validation, and
                routing.
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
