import React from "react";
import { FaReact } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { DiSass } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import ReactTooltip from "react-tooltip";

function Skills() {
  return (
    <div className="skill-icon-container">
      <div className="skill-icon-box">
        <span>
          <SiJavascript className="skill-icon" />
        </span>
        <span>
          <FaReact className="skill-icon" />
        </span>
        <span>
          <FaCss3 className="skill-icon" />
        </span>
        <span>
          <DiSass className="skill-icon" />
        </span>
      </div>
      <div className="skill-icon-box">
        <span>
          <FaHtml5 className="skill-icon" />
        </span>
        <span>
          <FaNodeJs className="skill-icon" />
        </span>
        <span>
          <FaBootstrap className="skill-icon" />
        </span>
        <span>
          <SiMongodb className="skill-icon" />
        </span>
      </div>
    </div>
  );
}

export default Skills;
