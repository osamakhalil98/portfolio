import React from "react";
import styles from "./Projects.module.css";
const Projects = () => {
  return (
    <div className={styles.projectsWrapper}>
      <h1 style={{ textAlign: "center" }} className="mt-4 ">
        Personal Projects
      </h1>
      <div className={`${styles.personalProjects} col-xl-12 pb-5 mb-5`}>
        <div className={`${styles.cardWrapper} mt-4 pb-0 mb-0`}>
          <h5
            style={{ textAlign: "center" }}
            className={`${styles.dottedBorderRed} bgTitleColor`}
          >
            Pomodoro clock
          </h5>
          <div
            className={`${styles.ProjectsCard} mt-4 col-xl-3 col-lg-4 col-md-6 col-sm-6 
          col-xs-3 mb-5`}
          >
            <a
              href="https://codepen.io/osadxen/pen/gOrPoKg"
              target="_blank"
              style={{ color: "black", textDecoration: "none" }}
            >
              <div className={styles.blondedDiv}></div>
            </a>
          </div>
        </div>
        <div className={`${styles.cardWrapper} mt-4 pb-0 mb-0`}>
          <h5
            style={{ textAlign: "center" }}
            className={`${styles.dottedBorderBlue} bgTitleColor`}
          >
            Drum Machine
          </h5>
          <div
            className={`${styles.ProjectsCard} mt-4 col-xl-3 col-lg-4 col-md-6 col-sm-6 
          col-xs-3 mb-5 `}
          >
            <a
              href="https://codepen.io/osadxen/full/WNrVmqB"
              target="_blank"
              style={{ color: "black", textDecoration: "none" }}
            >
              <div className={styles.drumDiv}></div>
            </a>
          </div>
        </div>
        <div className={`${styles.cardWrapper} mt-4 pb-0 mb-0`}>
          <h5
            style={{ textAlign: "center" }}
            className={`{styles.dottedBorderRed} bgTitleColor`}
          >
            Markdown Converter
          </h5>
          <div
            className={`${styles.ProjectsCard} mt-4 col-xl-3 col-lg-4 col-md-6 col-sm-6 
          col-xs-3 mb-5`}
          >
            <a
              href="https://codepen.io/osadxen/pen/rNxXKvQ"
              target="_blank"
              style={{ color: "black", textDecoration: "none" }}
            >
              <div className={styles.mdDiv}></div>
            </a>
          </div>
        </div>
      </div>
      <h1 style={{ textAlign: "center" }} className="mt-4 pt-4">
        Graduation Project
      </h1>
      <div className={`${styles.cardWrapper} mt-4 pb-0 mb-0`}>
        <h5
          style={{ textAlign: "center" }}
          className={`${styles.dottedBorderBlue} bgTitleColor`}
        >
          Skin Cancer Classifier
        </h5>
        <div className={`${styles.gradProject}  pb-4 mb-5`}>
          <div
            className={`${styles.ProjectsCard} mt-4 col-xl-12 col-lg-12 col-md-12 col-sm-6 
          col-xs-3`}
          >
            <a
              href="https://annskinclassifier.herokuapp.com/"
              target="_blank"
              style={{ color: "black", textDecoration: "none" }}
            >
              <div className={styles.gradDiv}></div>
            </a>
          </div>
        </div>
      </div>
      <h1 style={{ textAlign: "center" }} className="mt-4 pt-4">
        Professional Projects
      </h1>
      <div className={`${styles.proProjects} col-xl-12 pb-2 mb-2`}>
        <div className={`${styles.cardWrapper} mt-4 pb-0 mb-0`}>
          <h5
            style={{ textAlign: "center" }}
            className={`${styles.dottedBorderRed} bgTitleColor`}
          >
            Shipping Company Website
          </h5>
          <div
            className={`${styles.ProjectsCard} mt-4 col-xl-12 col-lg-12 col-md-12 col-sm-6 
          col-xs-3`}
          >
            <a
              href="https://logzee.netlify.app/"
              target="_blank"
              style={{ color: "black", textDecoration: "none" }}
            >
              <div className={styles.proDiv}></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
