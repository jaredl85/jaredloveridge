import React from "react";
import ProjectNav from "./ProjectNav";
import { FaBootstrap } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import TWD_ABOUT from "./images/twd_about.png";
import TWD_SERVICES from "./images/twd_services.png";
import TWD_FAQ from "./images/twd_faq.png";
import TWD_CONTACT from "./images/twd_contact.png";
import ProjectFooter from "./ProjectFooter.js";
import "./projects.scss";

export default function DogWithin() {
  return (
    <div className="project-page" id="project-page">
      <ProjectNav />
      <h2>The Dog Within</h2>
      <div className="project-wrapper">
        <div className="project-row">
          <div className="project-col r-1">
            <div className="project-box">
              <h3>Project Goal</h3>
              <p>
                I was asked by a Seattle-based dog-trainer to design a website
                from the ground-up for his dog training business, The Dog
                Within.
              </p>
              <p>
                He wanted an aesthetically pleasing website that conveyed a bit
                of information about who he was and what he does. His biggest
                request was to have the ability to receive emails through the
                website contact form.
              </p>
            </div>
          </div>
          <div className="project-col r-2">
            <div className="project-box">
              <img src={TWD_ABOUT} />
            </div>
          </div>
        </div>
        <div className="project-divider"></div>
        <div className="project-row">
          <div className="project-col r-4">
            <div className="project-box">
              <img src={TWD_SERVICES} />
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
                    <FaPhp className="tech-icon" /> PHP
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
                The main challenge for this project is that, while my client had
                a business page on Yelp, he had very little in the way of
                branding. He wasn’t sure exactly what the website should say or
                what it should look like. Which meant handling all aspects of
                planning, design, content creation, and implementation for the
                website.
              </p>
              <p>
                The secondary challenge was that I had no idea how to implement
                a functional contact form - my only experience with web design
                and development at this point had been strictly front-end. Which
                meant a learning curve before the project could be fully
                implemented.
              </p>
              <p>
                To begin, I conducted a competitive analysis of several other
                Seattle-based dog training websites, to get a sense of what
                kinds of content was available, what design strategies were
                being used, what was being done well by other businesses, and
                what we might be able to do better.
              </p>
              <p>
                I then met with the owner of The Dog Within to discuss my
                findings and interview him about his business, his philosophy,
                and to get a sense of what The Dog Within stood for. We
                discussed project scope, possible design ideas, and timeline.
              </p>
              <p>
                Based on my client interview and the competitive analysis I had
                conducted, I wrote the majority of the content for the site.
                Once this was approved, I created a few design mock-ups of the
                site in photoshop and, once my client had approved one of my
                designs, I researched technologies we’d need for the project and
                began to code.
              </p>
              <p>
                For the majority of the website, HTML and CSS was all that was
                required. I used Skeleton.css, which I heavily modified, as the
                main framework for the site. I used jQuery to create the
                responsive navigation menu. Then I taught myself enough PHP on
                the fly in order to implement a functional contact page.
              </p>
              <p>
                I also handled getting the site hosted onto the server and
                performing some basic SEO functions in order to get the site
                recognized by Google.
              </p>
            </div>
          </div>
          <div className="project-col r-6">
            <div className="project-box">
              <img src={TWD_FAQ} />
            </div>
          </div>
        </div>
        <div className="project-divider"></div>
        <div className="project-row">
          <div className="project-col r-8">
            <div className="project-box">
              <img src={TWD_CONTACT} />
            </div>
          </div>
          <div className="project-col r-7">
            <div className="project-box">
              <h3>Outcome</h3>
              <p>
                <a
                  href="http://thedogwithin.com/"
                  className="project-page-link"
                  target="_blank"
                >
                  See the final project
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/jaredl85/thedogwithin"
                  target="_blank"
                  className="project-page-link project-page-github"
                >
                  Check out the code
                </a>
              </p>
              <p>
                The end result is a website that conveys essential information
                about The Dog Within in a way that is intentionally branded,
                user-friendly, responsive, and contains a fully functional
                contact form (meeting all of the client requirements).
              </p>
              <p>
                Also of note, the owner of The Dog Within reported a significant
                increase in business as a result of having the site up and
                running.
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
