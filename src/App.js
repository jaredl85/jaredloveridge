import "./App.css";
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NeChiro from "./components/NeChiro.js";
import Portfolio from "./components/Portfolio.js";
import DogWithin from "./components/DogWithin.js";
import NuCamp from "./components/NuCamp.js";
import Error from "./components/Error";
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <div className="app">
      <ScrollToTop>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nechiro" element={<NeChiro />} />
            <Route path="/dogwithin" element={<DogWithin />} />
            <Route path="/nucamp" element={<NuCamp />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </ScrollToTop>
    </div>
  );
}

export default App;
