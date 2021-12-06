import React from "react";
import { FaCopyright } from "react-icons/fa";
import "./components.scss";

export default function ProjectFooter() {
  return (
    <div className="footer">
      <a href="#top">Back to top</a>
      <p>
        <FaCopyright /> | Jared Loveridge 2021
      </p>
    </div>
  );
}
