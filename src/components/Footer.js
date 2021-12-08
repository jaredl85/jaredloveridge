import React from "react";
import { FaCopyright } from "react-icons/fa";
import { Link } from "react-scroll";
import "./components.scss";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <Link
        className="nav-item"
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Back to top
      </Link>
      <p>
        <FaCopyright /> | Jared Loveridge 2021
      </p>
    </div>
  );
}
