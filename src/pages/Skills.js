import React, { Fragment } from "react";
import "./Skills.css";
import Nav from "./TopNav";
import styledLogo from "../assets/images/styled.png";
import redux from "../assets/images/redux.png";

export default function Skills() {
  return (
    <Fragment>
      <Nav />
      <h1 style={{ textAlign: "center", fontWeight: "bold" }} className="mt-4">
        Tech And Tools I've Used
      </h1>
      <div
        className="tools mt-5
      "
      >
        <img
          src="https://media3.giphy.com/media/kdFc8fubgS31b8DsVu/giphy.webp"
          className="img-skills"
          alt="node.js"
        />
        <img
          src="https://media.giphy.com/media/SU2ic3wTfuC6JhD1lA/giphy.gif"
          className="img-skills"
          alt="TensorFlow.js"
        />
        <img
          src="https://media3.giphy.com/media/ln7z2eWriiQAllfVcn/200w.webp"
          className="img-skills"
          alt="js"
        />
        <img
          src="https://media.giphy.com/media/kH6CqYiquZawmU1HI6/giphy.gif"
          className="img-skills"
          alt="Git"
        />
        <img
          src="https://i.giphy.com/media/eNAsjO55tPbgaor7ma/200w.webp"
          className="img-skills"
          alt="React.js"
        />
        <img
          src="https://i.giphy.com/media/IdyAQJVN2kVPNUrojM/200.webp"
          className="img-skills"
          alt="VSC"
        />
        <img src={styledLogo} className="img-skills" alt="styled-component" />
        <img src={redux} className="img-skills" alt="redux" />
      </div>
      <div className="d-flex justify-content-center align-items-center skills-wrapper">
        <ul className="skills-list">
          <b className="skillsTitle">Node.js </b>
          <li className="skill-item">
            Using Node.js as well as express as a backend tools to write API's,
            make http requests and routes handling.
          </li>
          <br />
          <b className="skillsTitle">TensorFlow.js</b>
          <li className="skill-item">
            Used TensorFlow.js in my graduation project to load an ANN model to
            predict 7 types of skin cancer and to perform calculations on
            images.
          </li>
          <br />
          <b className="skillsTitle">JavaScript </b>
          <li className="skill-item">
            My main programming langauage in both fields (front-end) and
            (back-end). a wannabe javaScript ninja engineer.
          </li>
          <br />
          <b className="skillsTitle">Git</b>
          <li className="skill-item">
            Using git on a daily basis for any changes in my code, familiar with
            all basic to intermediate usage and commands.
          </li>
          <br />
          <b className="skillsTitle">React.js </b>
          <li className="skill-item">
            Using React.js as my main front-end library and it's my favourite js
            framework/library.
          </li>
          <br />
          <b className="skillsTitle">Visual studio code</b>
          <li className="skill-item">
            Using VSC as my main editor, it has tons of cool features,
            extensions and it's the best editor imo.
          </li>
          <br />
          <b className="skillsTitle">Styled Components </b>
          <li className="skill-item">
            Started using the concept of "CSS-in-JS" such as styled components
          </li>
          <br />
          <b className="skillsTitle">Redux </b>
          <li className="skill-item">
            Familiar with Redux, Redux-thunk and Redux Saga, worked with Redux
            in multiple big projects.
          </li>
        </ul>
      </div>
    </Fragment>
  );
}
