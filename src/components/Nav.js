import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import "./components.scss";

export default function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div className="nav">
      {(toggleMenu || screenWidth > 768) && (
        <ul className="list">
          <Link
            className="nav-item"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
          <Link
            className="nav-item"
            to="work"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Work
          </Link>
          <Link
            className="nav-item"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
          <Link
            className="nav-item"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </ul>
      )}

      <button onClick={toggleNav} className="nav-btn">
        <GiHamburgerMenu />
      </button>
    </div>
  );
}
