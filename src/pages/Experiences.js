import React, { useState, useEffect } from "react";
import * as styles from "./Experiences.module.css";
import Nav from "./TopNav";
import MyExperiences from "../../data/experiences.json";

const Experiences = () => {
  const [filtered, setFiltered] = useState([...MyExperiences]);

  const exPictureStyles = (urlPic) => ({
    styles: {
      height: "200px",
      objectFit: "cover",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      paddingLeft: "0px",
      paddingRight: "0px",
      lineHeight: "1.7777778",
      fontSize: "1.125rem",
      overflow: "hidden",
      backgroundImage: `url(${urlPic})`,
    },
  });

  const handleFilter = (type) => {
    if (type === "all") {
      setFiltered([...MyExperiences]);
    } else {
      let filter = MyExperiences.filter((ex) => ex.type === type);
      console.log(filter);
      setFiltered([...filter]);
    }
  };
  console.log(filtered);
  return (
    <>
      <Nav />
      <div className={`${styles.ExperiencesWrapper} mt-4`}>
        <h1
          style={{ textAlign: "center", fontWeight: "bold" }}
          className={styles.expHeader}
        >
          My Experiences So Far
        </h1>
        <div className={`${styles.filters} mt-4 `}>
          <ul>
            <li
              className="list-inline-item btn btn-success"
              role="button"
              onClick={() => handleFilter("all")}
            >
              #All
            </li>
            <li
              className="list-inline-item btn btn-danger"
              role="button"
              onClick={() => handleFilter("event")}
            >
              #event
            </li>
            <li
              className="list-inline-item btn btn-info"
              role="button"
              onClick={() => handleFilter("intern")}
            >
              #intern
            </li>
            <li
              className="list-inline-item btn btn-warning"
              role="button"
              onClick={() => handleFilter("job")}
            >
              #job
            </li>
            <li
              className="list-inline-item btn btn-dark"
              role="button"
              onClick={() => handleFilter("call of duty")}
            >
              #call of duty
            </li>
          </ul>
        </div>
        <div
          className={`${styles.ExperiencesContent} col-xl-12 pb-2 mb-4 mt-4`}
        >
          {filtered.map((ex) => (
            <div
              className={`${styles.ExperiencesCard} mt-4  col-lg-4 col-md-6 col-sm-6 
        col-xs-3`}
              key={ex.id}
            >
              <div style={exPictureStyles(ex.picture).styles}></div>
              <h2 className={styles.experienceName}>{ex.name}</h2>
              <p className={styles.experienceDesc}>{ex.desc}</p>
              <p className={styles.experienceDate}>{ex.date}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experiences;
