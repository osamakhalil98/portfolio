import React from "react";
import styles from "./Home.module.css";
import myPhoto from "../../assets/images/photo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  const email = "osadx35@gmail.com";
  return (
    <div className={styles.aboutInfoWrapper}>
      <div className={styles.aboutInfo}>
        <div>
          <img src={myPhoto} alt="osama" className={styles.aboutInfoImg} />
        </div>
        <div className="col-xl-5 col-lg-6 col-md-6">
          <h1 className={styles.textH1}>Hi There!</h1>
          <div className={`${styles.infoDiv} info-home `}>
            I'm <span className={styles.dottedBorderBlue}>Osama Khalil</span>, a
            front-end developer who is just kicking-off his journey. I'm
            interested in building UI using frameworks like{" "}
            <span className={styles.dottedBorderYellow}>React.js.</span>
            <br />
            My dream in the future to become a Javascript ninja engineer, so i
            can be a{" "}
            <span className={styles.dottedBorderRed}>fullstack-developer.</span>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-3 mt-4 pt-4">
        <h3 style={{ textAlign: "center" }}>Contact</h3>
        <ul className={styles.flexUl}>
          <li>
            <a
              href="https://github.com/osamakhalil98"
              target="_blank"
              style={{ color: "blue" }}
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </li>
          <li>
            <a
              href={`mailto:${email}`}
              target="_blank"
              style={{ color: "yellow" }}
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/osamakhalil98/"
              target="_blank"
              style={{ color: "red" }}
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/osama-khalil-79103214b/"
              target="_blank"
              style={{ color: "black" }}
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/osadxen"
              target="_blank"
              style={{ color: "aqua" }}
            >
              <FontAwesomeIcon icon={faCodepen} size="2x" />
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/18WEBuZYpzVtg24aRMHcJ-z2T00_jVeLX/view"
              target="_blank"
              style={{ color: "grey" }}
            >
              <FontAwesomeIcon icon={faFile} size="2x" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
