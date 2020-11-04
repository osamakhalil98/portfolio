import React, { useState, useEffect } from "react";
import Nav from "./components/nav/TopNav";
import Home from "./components/home/Home";
import Experiences from "./components/experiences/Experiences";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import "./App.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab, faGithub);

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/experiences" component={Experiences} />
        <Route path="/projects" component={Projects} />
        <Route path="/skills" component={Skills} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
