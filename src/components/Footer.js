import React from "react";
import { FaCopyright } from "react-icons/fa";
import "./components.scss";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <p>
        <FaCopyright /> | Jared Loveridge 2021
      </p>
    </div>
  );
}
