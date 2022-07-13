import React from "react";
import * as styles from "./Home.module.css";
import myPhoto from "../assets/images/photo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticQuery, graphql } from "gatsby";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import Img from "gatsby-image";

const Home = ({ data }) => {
  const email = "osadx35@gmail.com";
  return (
    <div className={`${styles.aboutInfoWrapper} col-xl-12`}>
      <div className={styles.aboutInfo}>
        <div className="mt-4">
          <StaticQuery
            query={query}
            render={(data) => (
              <>
                <Img
                  fluid={data.file.childImageSharp.fluid}
                  className={`${styles.aboutInfoImg}`}
                />
              </>
            )}
          />
        </div>
        <div className="col-xl-7 col-lg-6 col-md-6">
          <h1 className={styles.textH1}>
            <span className={styles.heyEmoji} aria-label="waving hand emoji">
              👋🏼
            </span>{" "}
            <span className={styles.small}>Hi, I'm </span>
            <br />
            Osama Khalil{" "}
          </h1>
          <div className={`${styles.infoDiv} info-home col-md-6`}>
            Junior front-end engineer who is just kicking-off his journey,
            Interested in building interactive UIs.
            <span className={styles.textHighlight}></span>
            <span className="">
              {" "}
              <br />
              Top hobbies include : listening to music / watching movies /
              gaming / and avoid writing regex.{" "}
            </span>
            <br />A wannabe Javascript ninja engineer.
            <span className={styles.textHighlight}></span>
            <br />
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6 col-xs-3 mt-4 pt-4">
        <h3 className={styles.flexTitle}>More info..</h3>
        <ul className={styles.flexUl}>
          <li>
            <a
              href="https://github.com/osamakhalil98"
              target="_blank"
              className="icons"
            >
              <FontAwesomeIcon icon={faGithub} className={styles.icons} />
            </a>
          </li>
          <li>
            <a href={`mailto:${email}`} target="_blank" className="icons">
              <FontAwesomeIcon icon={faEnvelope} className={styles.icons} />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/osamakhalil98/"
              target="_blank"
              className="icons"
            >
              <FontAwesomeIcon icon={faTwitter} className={styles.icons} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/osama-khalil98/"
              target="_blank"
              className="icons"
            >
              <FontAwesomeIcon icon={faLinkedin} className={styles.icons} />
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/osadxen"
              target="_blank"
              className="icons"
            >
              <FontAwesomeIcon icon={faCodepen} className={styles.icons} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;

export const query = graphql`
  query {
    file(relativePath: { eq: "me.JPG" }) {
      childImageSharp {
        fluid {
          base64
          aspectRatio
          src
          srcSet
          sizes
        }
      }
    }
  }
`;
