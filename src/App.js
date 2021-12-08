import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
      <Router>
        <ScrollToTop />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/nechiro">
              <NeChiro />
            </Route>
            <Route path="/dogwithin">
              <DogWithin />
            </Route>
            <Route path="/nucamp">
              <NuCamp />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
