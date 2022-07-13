import React from "react";
import Nav from "./TopNav";
import Home from "./Home";
import Experiences from "./Experiences";
import Skills from "./Skills";
import Projects from "./Projects";
import Blog from "./Blog";
import "animate.css/animate.min.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Switch, Route, Redirect } from "react-router-dom";
import { Router } from "@reach/router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Helmet } from "react-helmet";
library.add(fab, faGithub);

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Osama Khalil | A front-end engineer</title>
        <link rel="icon" href="../assets/images/icon.png" />
      </Helmet>
      <Nav />
      <Router>
        <Home path="/" exact component={Home} />
        <Experiences path="/Experiences/" component={Experiences} />
        <Projects path="/Projects/" component={Projects} />
        <Skills path="/Skills/" component={Skills} />
        <Blog path="/blog/" component={Blog} />
      </Router>
    </>
  );
};
