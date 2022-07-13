import React from "react";
import { graphql } from "gatsby";
import { Img } from "gatsby-image";
import Nav from "./TopNav";

const notFound = ({ data }) => {
  return (
    <>
      <Nav />
      <div
        className="d-flex justify-content-center align-items-center "
        style={{ minHeight: "100vh" }}
      >
        <h1>Sorry, This Route Doesn't Exist!</h1>
      </div>
    </>
  );
};

export default notFound;
