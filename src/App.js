import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import NeChiro from "./components/NeChiro.js";
import CodeSchool from "./components/projects/CodeSchool";
import DogWithin from "./components/DogWithin.js";
import BookFinder from './components/projects/BookFinder';
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
            <Route path="/bookfinderapp">
              <BookFinder />
            </Route>
            <Route path="/codeschool">
              <CodeSchool />
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
