import React from "react";
import * as styles from "./Projects.module.css";
import Nav from "./TopNav";
import ScrollAnimation from "react-animate-on-scroll";

const Projects = () => {
  return (
    <>
      <Nav />
      <div className={`${styles.projectsWrapper}`} id="projectsWrapper">
        <h1
          style={{ textAlign: "center", fontWeight: "bold" }}
          className="mt-4 "
        >
          Personal Projects
        </h1>
        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          animateOnce={false}
        >
          <div
            className={`${styles.personalProjects} col-xl-12 mb-5 pb-5 projectsProWrapper`}
          >
            <div className={`${styles.cardWrapper}mt-2  pb-0 mb-0`}>
              <h5
                style={{ textAlign: "center", fontWeight: "bold" }}
                className={` ${styles.projectTitle} bgTitleColor mt-2`}
              >
                Droogs Shop
              </h5>
              <div
                className={`${styles.ProjectsCard} mt-4 col-xl-3 col-lg-4 col-md-6 col-sm-6 
          col-xs-3 mb-3`}
              >
                <a
                  href="https://droogs-shop.herokuapp.com/"
                  target="_blank"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <span className={`${styles.projectDesc}`}>
                    Tech used : Node.js, JWT
                  </span>
                  <div className={styles.jwtDiv}></div>
                </a>
              </div>
            </div>
            <div className={`${styles.cardWrapper}mt-2  pb-0 mb-0`}>
              <h5
                style={{ textAlign: "center", fontWeight: "bold" }}
                className={` ${styles.projectTitle} bgTitleColor mt-2`}
              >
                blonded
              </h5>
              <div
                className={`${styles.ProjectsCard} mt-4 col-xl-3 col-lg-4 col-md-6 col-sm-6 
          col-xs-3 mb-3`}
              >
                <a
                  href="https://osamakhalil98.github.io/blonded/"
                  target="_blank"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <span className={`${styles.projectDesc}`}>
                    Tech used : React (hooks), bootstrap
                  </span>
                  <div className={styles.blondedDiv}></div>
                </a>
              </div>
            </div>
            <div className={`${styles.cardWrapper}mt-2  pb-0 mb-0`}>
              <h5
                style={{ textAlign: "center", fontWeight: "bold" }}
                className={` ${styles.projectTitle} bgTitleColor mt-2`}
              >
                innerNote
              </h5>
              <div
                className={`${styles.ProjectsCard} mt-4 col-xl-3 col-lg-4 col-md-6 col-sm-6 
          col-xs-3 mb-3`}
              >
                <a
                  href="https://inner-note.vercel.app/"
                  target="_blank"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <span className={`${styles.projectDesc}`}>
                    Tech used : React (hooks), Redux, tailwind
                  </span>
                  <div className={styles.innerDiv}></div>
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <h1
          style={{ textAlign: "center", fontWeight: "bold" }}
          className="mt-4 pt-4"
        >
          Professional Projects
        </h1>

        <div
          className={`${styles.proProjects} col-xl-12 mb-5 pb-5 projectsProWrapper`}
        >
          <ScrollAnimation
            animateIn="fadeIn"
            animateOut="fadeOut"
            animateOnce={false}
          >
            <div className={`${styles.cardWrapper} mt-4 pb-2 mb-2`}>
              <h5
                style={{ textAlign: "center", fontWeight: "bold" }}
                className={` ${styles.projectTitle} bgTitleColor`}
              >
                Logzee template Design
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
                  <span className={`${styles.projectDesc}`}>
                    Tech used :HTML, scss, jQuery, bootstrap
                  </span>
                  <div className={styles.proDiv}></div>
                </a>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            animateOut="fadeOut"
            animateOnce={false}
          >
            <div className={`${styles.cardWrapper} mt-4 pb-2 mb-2`}>
              <h5
                style={{ textAlign: "center", fontWeight: "bold" }}
                className={` ${styles.projectTitle} bgTitleColor`}
              >
                Sadaqahti foundation
              </h5>
              <div
                className={`${styles.ProjectsCard} mt-4 col-xl-12 col-lg-12 col-md-12 col-sm-6 
          col-xs-3`}
              >
                <a
                  href="http://sadaqahti.com/"
                  target="_blank"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <span className={`${styles.projectDesc}`}>
                    Tech used :React.js, scss, bootstrap
                  </span>
                  <div className={styles.donationDiv}></div>
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        <h1
          style={{ textAlign: "center", fontWeight: "bold" }}
          className="mt-4 pt-4"
        >
          Graduation Project
        </h1>

        <div className={`${styles.cardWrapper} mt-4 pb-4 mb-0`}>
          <ScrollAnimation
            animateIn="fadeIn"
            animateOut="fadeOut"
            animateOnce={false}
          >
            <h5
              style={{ textAlign: "center", fontWeight: "bold" }}
              className={` ${styles.projectTitle} bgTitleColor`}
            >
              Skin Cancer Classifier
            </h5>
          </ScrollAnimation>
          <div className={`${styles.gradProject}  pb-2 mb-2`}>
            <div
              className={`${styles.ProjectsCard} mt-4 col-xl-12 col-lg-12 col-md-12 `}
            >
              <span className={`${styles.projectDesc}`}>
                Tech used :Node.js, Tensorflow.js
              </span>
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
      </div>
    </>
  );
};

export default Projects;
