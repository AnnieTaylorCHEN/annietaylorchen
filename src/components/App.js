import ReactGA from "react-ga";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../css/app.css";

import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import ProjectIngersAlternativ from "./ProjectIngersAlternativ";
import ProjectMeowlo from "./ProjectMeowlo";
import ProjectMars from "./ProjectMars";
import ProjectPMBlog from "./ProjectPMBlog";
import ProjectPMStore from "./ProjectPMStore";
import ProjectMeowflix from "./ProjectMeowflix";
import Contact from "./Contact";
import Footer from "./Footer";
import Profile from "./Profile";
import Resources from "./Resources";

function initializeReactGA() {
  ReactGA.initialize("UA-35205911-2", { standardImplementation: true });
}
initializeReactGA();

export default function () {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Profile} />
        <Route path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route
          path="/projects/ingersalternativ"
          component={ProjectIngersAlternativ}
        />
        <Route path="/projects/meowlo" component={ProjectMeowlo} />
        <Route path="/projects/thirtysecondstomars" component={ProjectMars} />
        <Route
          path="/projects/petiteandminimalblog"
          component={ProjectPMBlog}
        />
        <Route
          path="/projects/petiteandminimalstore"
          component={ProjectPMStore}
        />
        <Route
          path="/projects/meowflix"
          component={ProjectMeowflix}
        />
        <Route path="/contact" component={Contact} />
        <Route path="/resources" component={Resources} />
        <Footer />
      </div>
    </Router>
  );
}
