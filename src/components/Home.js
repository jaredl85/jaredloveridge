import React from "react";
import Nav from "./Nav.js";
import SocialIcons from "./SocialIcons.js";
import Splash from "./Splash";
import About from './About';
import Work from './Work';
import Footer from "./Footer";
import "./components.scss";

export default function Home() {
  return (
    <div>
      <Nav />
      <Splash />
      <About />
      <SocialIcons />
      <Work />
      <Footer />
    </div>
  );
}
