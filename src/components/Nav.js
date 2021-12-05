import React, { useState, useEffect } from "react";
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
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      )}

      <button onClick={toggleNav} className="nav-btn">
        <GiHamburgerMenu />
      </button>
    </div>
  );
}
