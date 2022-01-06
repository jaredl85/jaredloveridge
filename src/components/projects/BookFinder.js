import React from "react";
import ProjectNav from '../ProjectNav';
import { FaReact } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaBookOpen } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { BsFillCloudArrowDownFill } from 'react-icons/bs';
import ProjectFooter from "../ProjectFooter";
import BFA from '../bfa_splash.png';
import RESULTS from '../images/bfa_results.png';
import MOBILE from '../images/bfa_results_mobile.png';
import WIDE from '../images/bfa_results_wide.png';
import "../projects.scss";

export default function BookFinder() {
  return (
    <div className="project-page">
      <ProjectNav />
      <h2>The Bookfinder App</h2>
      <div className="project-wrapper">
        <div className="project-row">
          <div className="project-col r-1">
            <div className="project-box">
              <h3>Project Goal</h3>
              <p>
                I set out to create a react application that would integrate
                with Google books API to allow the user to search for any book
                and display the first 30 results, sorted by relevance.
              </p>
            </div>
          </div>
          <div className="project-col r-2">
            <div className="project-box">
              <img src={BFA} />
            </div>
          </div>
        </div>
        <div className="project-divider"></div>
        <div className="project-row">
          <div className="project-col r-4">
            <div className="project-box">
              <img src={RESULTS} />
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
                    <FaHtml5 className="tech-icon" /> HTML
                  </li>
                  <li>
                    <FaCss3 className="tech-icon" /> CSS
                  </li>
                  <li>
                    <FaBookOpen className="tech-icon" /> Google Books API
                  </li>
                  <li>
                    <BsFillCloudArrowDownFill className="tech-icon" /> Axios
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
                The biggest challenge I needed to solve in the beginning was how
                to make a request to the Google Books API to retrieve and
                display data.
              </p>
              <p>
                I ultimately used the Axios library in order to make requests to
                the Google Books endpoint, then mapped data onto the page and
                styled it with basic CSS.
              </p>
              <p>
                While I considered using the Fetch API instead of Axios, but I
                ultimately decided against it because the Axios library is a bit
                simpler to use and the resulting code is, in my opinion, a
                little bit cleaner and easier for others to read/understand.
              </p>
            </div>
          </div>
          <div className="project-col r-6">
            <div className="project-box">
              <img src={MOBILE} />
            </div>
          </div>
        </div>
        <div className="project-divider"></div>
        <div className="project-row">
          <div className="project-col r-8">
            <div className="project-box">
              <img src={WIDE} />
            </div>
          </div>
          <div className="project-col r-7">
            <div className="project-box">
              <h3>Outcome</h3>
              <p>
                <a
                  href="https://jaredl85bookfinderapp.netlify.app/"
                  className="project-page-link"
                >
                  See the final project
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/jaredl85/bookfinderapp"
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
