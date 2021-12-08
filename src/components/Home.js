import React from "react";
import Nav from "./Nav.js";
import SocialIcons from "./SocialIcons.js";
import Splash from "./Splash";
import About from './About';
import Skills from './Skills';
import Work from './Work';
import Footer from "./Footer";
import Contact from './Contact';
import "./components.scss";

export default function Home() {
  return (
    <div>
      <Nav />
      <Splash />
      <Work />
      <Skills />
      <About />
      <SocialIcons />
      <Contact />
      <Footer />
    </div>
  );
}
