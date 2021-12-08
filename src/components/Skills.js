import React from "react";
import { FaReact } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { DiSass } from 'react-icons/di';
import { SiMongodb } from 'react-icons/si';

function Skills() {
  return (
    <div className="icon-container">
      <div className="icon-box">
        <SiJavascript className="icon" />
        <FaReact className="icon" />
        <FaCss3 className="icon" />
        <DiSass className="icon" />
      </div>
      <div className="icon-box">
        <FaHtml5 className="icon" />
        <FaNodeJs className="icon" />
        <FaBootstrap className="icon" />
        <SiMongodb className="icon" />
      </div>
    </div>
  );
}

export default Skills;
