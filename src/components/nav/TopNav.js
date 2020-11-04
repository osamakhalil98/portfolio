import React, { useState, useEffect } from "react";
import "./TopNav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../globalStyles";
import { lightTheme, darkTheme } from "../Themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const TopNav = () => {
  const [theme, setTheme] = useState("light");
  const [emoji, setEmoji] = useState("🌒");
  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };
  const themeToggler = (e) => {
    theme === "light" ? setMode("dark") : setMode("light");
    theme === "light" ? setTheme("dark") : setTheme("light");
    theme === "light" ? setEmoji("🌞") : setEmoji("🌒");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setMode("light");
    localTheme === "light" ? setEmoji("🌒") : setEmoji("🌞");
  }, []);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Navbar expand="md" collapseOnSelect>
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="nav-toggle">
            <FontAwesomeIcon icon={faBars} />
          </Navbar.Toggle>
          <div className="ml-auto themeDiv" onClick={themeToggler}>
            {emoji}
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="navbar-nav m-auto nav-wrapper">
              <Link className="nav-link nav-item" to="/">
                <h5 className="navItm">Home </h5>
                <span className="sr-only">(current)</span>
              </Link>

              <Link className="nav-link nav-item" to="./experiences">
                <h5 className="navItm">Experiences</h5>
              </Link>

              <Link className="nav-link nav-item" to="./projects">
                <h5 className="navItm">Projects</h5>
              </Link>

              <Link className="nav-link nav-item" to="./skills">
                <h5 className="navItm">Skills</h5>
              </Link>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </>
    </ThemeProvider>
  );
};

export default TopNav;
