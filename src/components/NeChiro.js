import React from "react";
import ProjectNav from "./ProjectNav";
import { FaBootstrap } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import NEC_ABOUT from "./images/nec_about.png";
import NEC_SERVICES from "./images/nec_services.png";
import NEC_MODAL from "./images/nec_login_modal.png";
import NEC_CONTACT from "./images/nec_contact.png";
import ProjectFooter from "./ProjectFooter.js";
import "./projects.scss";

export default function NeChiro() {
  return (
    <div className="project-page" id="top">
      <ProjectNav />
      <h2>North Seattle Chiropractic</h2>
      <div className="project-wrapper">
        <div className="project-row">
          <div className="project-col r-1">
            <div className="project-box">
              <h3>Project Goal</h3>
              <p>
                As the portfolio project for my bootstrap course with NuCamp, I
                redesigned the website for Northeast Seattle Chiropractic, a
                chiropractic practice located in my neighborhood.
              </p>
            </div>
          </div>
          <div className="project-col r-2">
            <div className="project-box">
              <img src={NEC_ABOUT} />
            </div>
          </div>
        </div>
        <div className="project-divider"></div>
        <div className="project-row">
          <div className="project-col r-4">
            <div className="project-box">
              <img src={NEC_SERVICES} />
            </div>
          </div>
          <div className="project-col r-3">
            <div className="project-box">
              <h3>Technologies Used</h3>
              <p>
                <ul className="technology-list">
                  <li>
                    <FaHtml5 className="tech-icon" /> HTML
                  </li>
                  <li>
                    <FaCss3 className="tech-icon" /> CSS
                  </li>
                  <li>
                    <FaBootstrap className="tech-icon" /> BootStrap
                  </li>
                  <li>
                    <SiJavascript className="tech-icon" /> JavaScript
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
                Using the written content and images from the website, I
                re-designed the website for Northeast Seattle Chiropractic,
                using the bootstrap framework. Though bootstrap is powerful, I
                also added plenty of my own CSS styles in order to get the
                design exactly where I wanted it (for example, there are several
                parallax effects implemented in the site).
              </p>
              <p>
                I also implemented some basic jQuery for the navbar, so that it
                would change its appearance after leaving the main splash area.
              </p>
            </div>
          </div>
          <div className="project-col r-6">
            <div className="project-box">
              <img src={NEC_MODAL} />
            </div>
          </div>
        </div>
        <div className="project-divider"></div>
        <div className="project-row">
          <div className="project-col r-8">
            <div className="project-box">
              <img src={NEC_CONTACT} />
            </div>
          </div>
          <div className="project-col r-7">
            <div className="project-box">
              <h3>Outcome</h3>
              <p>
                <a
                  href="https://nechiro.netlify.app/"
                  className="project-page-link"
                  target="_blank"
                >
                  See the final project
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/jaredl85/nechiro"
                  target="_blank"
                  className="project-page-link project-page-github"
                >
                  Check out the code
                </a>
              </p>
              <p>
                My design preserves all of the information used in the Northeast
                Seattle Chiropractic website, but packages it in a
                mobile-friendly and aesthetically pleasing way.
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