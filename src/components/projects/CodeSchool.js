import React from "react";
import ProjectNav from "../ProjectNav";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import ProjectFooter from "../ProjectFooter";
import CONTACT from "../images/tcs_contact.png";
import REVIEW from "../images/tcs_review.png";
import COURSES from "../images/tcs_courses.png";
import SPLASH from "../../components/tcs_splash.png";
import "../projects.scss";

export default function CodeSchool() {
  return (
    <div className="project-page" id="project-page">
      <ProjectNav />
      <h2>The Code School</h2>
      <div className="project-wrapper">
        <div className="project-row">
          <div className="project-col r-1">
            <div className="project-box">
              <h3>Project Goal</h3>
              <p>
                This is the front-end portion of a website built in React, for a
                fictional coding school. It includes a responsive navigation
                menu, a carousel of testimonials, the ability to sort the
                courses offered, and a fully functional contact form.
              </p>
            </div>
          </div>
          <div className="project-col r-2">
            <div className="project-box">
              <img src={REVIEW} alt="the code school review section" />
            </div>
          </div>
        </div>
        <div className="project-divider"></div>
        <div className="project-row">
          <div className="project-col r-4">
            <div className="project-box">
              <img src={COURSES} alt="the code school courses section" />
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
                    <SiJavascript className="tech-icon" /> JavaScript
                  </li>
                  <li>
                    <FaReact className="tech-icon" /> React
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
              <p>SOME CONTENT HERE</p>
            </div>
          </div>
          <div className="project-col r-6">
            <div className="project-box">
              <img src={CONTACT} alt="main page of the code school" />
            </div>
          </div>
        </div>
        <div className="project-divider"></div>
        <div className="project-row">
          <div className="project-col r-8">
            <div className="project-box">
              <img src={SPLASH} alt="the code school contact section" />
            </div>
          </div>
          <div className="project-col r-7">
            <div className="project-box">
              <h3>Outcome</h3>
              <p>
                <a
                  href="https://jaredl85thecodingschool.netlify.app/"
                  className="project-page-link"
                  target="_blank"
                >
                  See the final project
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/jaredl85/thecodeschool"
                  target="_blank"
                  className="project-page-link project-page-github"
                >
                  Check out the code
                </a>
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
