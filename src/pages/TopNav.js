import React, { useState, useEffect } from "react";
import * as styles from "./TopNav.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "gatsby";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../globalStyles";
import { lightTheme, darkTheme } from "../Themes";
import logoIcon from "../assets/images/icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const TopNav = (props) => {
  const [theme, setTheme] = useState("light");
  const [emoji, setEmoji] = useState("🌒");
  const [navColor, setNavColor] = useState("#000000");
  const [activeNav, setActiveNav] = useState("#FFFF00");

  const setMode = (mode) => {
    if (typeof window !== `undefined`) {
      window.localStorage.setItem("theme", mode);
      setTheme(mode);
    }
  };
  const themeToggler = (e) => {
    theme === "light" ? setMode("dark") : setMode("light");
    theme === "light" ? setTheme("dark") : setTheme("light");
    theme === "light" ? setEmoji("🌞") : setEmoji("🌒");
    theme === "light" ? setNavColor("#FFFFFF") : setNavColor("#000000");
    theme === "light" ? setActiveNav("#FFFFFF") : setActiveNav("#111827");
  };

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const localTheme = window.localStorage.getItem("theme");
      localTheme ? setTheme(localTheme) : setMode("light");
      localTheme === "light" ? setEmoji("🌒") : setEmoji("🌞");
      localTheme === "light" ? setNavColor("#000000") : setNavColor("#FFFFFF");
      localTheme === "light"
        ? setActiveNav("#111827")
        : setActiveNav("#FFFFFF");
    }
  }, []);
  const NavLink = (props) => (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        // the object returned here is passed to the
        // anchor element's props
        return {
          style: {
            overflow: `hidden`,
            borderRadius: isCurrent ? `5px 5px 5px 5px` : null,
            borderBottom: isCurrent ? `3px solid ${activeNav}` : null,
            color: isCurrent ? { navColor } : null,
          },
        };
      }}
    />
  );
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Navbar expand="md" collapseOnSelect>
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="nav-toggle">
            <FontAwesomeIcon icon={faBars} />
          </Navbar.Toggle>

          <div className="d-xs-block d-sm-none">
            <Link className="nav-link" exact to="/">
              <img
                src={logoIcon}
                style={{ width: 32, height: 32 }}
                alt="site logo"
              />
            </Link>
          </div>
          <div
            className={`{ml-auto ${styles.themeDiv}`}
            onClick={themeToggler}
            role="button"
            aria-label="toggle-button"
          >
            {emoji}
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`{navbar-nav m-auto ${styles.navWrapper}`}>
              <NavLink className="nav-link" exact to="/">
                <h5 style={{ color: navColor }}>Home </h5>
              </NavLink>

              <NavLink className="nav-link " exact to="/Experiences/">
                <h5 style={{ color: navColor }}>Experiences</h5>
              </NavLink>

              <NavLink className="nav-link" exact to="/Projects">
                <h5 style={{ color: navColor }}>Projects</h5>
              </NavLink>

              <NavLink className="nav-link" exact to="/Skills">
                <h5 style={{ color: navColor }}>Skills</h5>
              </NavLink>
              <NavLink className="nav-link" exact to="/Blog">
                <h5 style={{ color: navColor }}>Blog</h5>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    </ThemeProvider>
  );
};
const nav = TopNav;
export default nav;
