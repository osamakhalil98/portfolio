import React from "react";
import styles from "./Experiences.module.css";

const Experiences = () => {
  return (
    <div className={`${styles.ExperiencesWrapper} mt-4`}>
      <h1 style={{ textAlign: "center" }} className={styles.expHeader}>
        My Experiences so far
      </h1>
      <div className={`${styles.ExperiencesContent} col-xl-12 pb-2 mb-2`}>
        <div
          className={`${styles.ExperiencesCard} mt-4 col-xl-3 col-lg-4 col-md-6 col-sm-6 
          col-xs-3`}
        >
          <a
            href="https://drive.google.com/file/d/1w8_L779LFpnZrnL_PTUbwwleXX8fsgKj/view"
            target="_blank"
          >
            {" "}
            <div className={styles.ecpcDiv}></div>{" "}
          </a>

          <p className={`${styles.itraxInfo} pt-3 pl-2 pr-2`}>
            Participated in{" "}
            <span
              className={styles.dottedBorderBlue}
              style={{ fontStyle: "italic" }}
            >
              ECPC
            </span>{" "}
            that took place in alex, after qualifying in ThebesCPC (local
            contest) and winning the{" "}
            <span
              className={styles.dottedBorderRed}
              style={{ fontStyle: "italic" }}
            >
              3rd place.
            </span>{" "}
            We tried our best in ECPC and finished in the{" "}
            <span
              className={styles.dottedBorderYellow}
              style={{ fontStyle: "italic" }}
            >
              98th place
            </span>{" "}
            out of 200 teams
          </p>
          <p className="pl-2 pr-2" style={{ fontSize: "small" }}>
            <span
              className={styles.dottedBorderBlue}
              style={{ fontStyle: "italic" }}
            >
              ECPC
            </span>{" "}
            - OCT 2019
          </p>
        </div>
        <div
          className={`${styles.ExperiencesCard} mt-4 col-xl-3 col-lg-4 col-md-6 col-sm-6 
          col-xs-3`}
        >
          <a href="https://itraxacademy.com/" target="_blank">
            <div className={styles.logoDiv}></div>
          </a>

          <p className={`${styles.itraxInfo} pt-3 pl-2 pr-2`}>
            Joined{" "}
            <span
              className={styles.dottedBorderRed}
              style={{ fontStyle: "italic" }}
            >
              itrax academy
            </span>{" "}
            as a front-end intern, and worked with a helpful team to create and
            maintain the UI for a{" "}
            <span
              className={styles.dottedBorderYellow}
              style={{ fontStyle: "italic" }}
            >
              shipping company
            </span>{" "}
            using tech like SASS, React and more.
          </p>

          <p className="pt-2 pl-2 pr-2 pb-2" style={{ fontSize: "small" }}>
            <span
              className={styles.dottedBorderBlue}
              style={{ fontStyle: "italic" }}
            >
              Front-end Intern
            </span>{" "}
            - (AUG 2020 - NOVEMBER 2020)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
