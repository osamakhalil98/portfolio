import React, { Fragment } from "react";
import "./Skills.css";
export default function Skills() {
  return (
    <Fragment>
      <h1 style={{ textAlign: "center" }} className="mt-4">
        Tech and tools i've used
      </h1>
      <div
        className="tools d-flex justify-content-center align-items-center mt-5
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
      </div>
      <div className="d-flex justify-content-center align-items-center m-5">
        <ul>
          <li>
            <b>Node.js : </b>
            <em>
              Using Node.js as well as express as a backend tools to write
              API's, make http requests and routes handling.
            </em>
          </li>
          <br />
          <li>
            <b>TensorFlow : </b>
            <em>
              Used TensorFlow.js in my graduation project to load an ANN model
              to predict 7 types of skin cancer and to perform calculations on
              images.
            </em>
          </li>
          <br />
          <li>
            <b>Javascript : </b>
            <em>
              Using js as my main programming langauage in both fields
              (front-end) and(back-end).
            </em>
          </li>
          <br />
          <li>
            <b>Git : </b>
            <em>Using git on a daily basis for any changes in my code.</em>
          </li>
          <br />
          <li>
            <b>React.js : </b>
            <em>
              Using react as my main front-end library and it's my favourite js
              framework/library.
            </em>
          </li>
          <br />
          <li>
            <b>VSC : </b>
            <em>
              Using VSC as my main editor, it has a tons of cool features and
              it's the best editor imo.
            </em>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}
