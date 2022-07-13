import React from "react";
import { graphql } from "gatsby";
import "../pages/index.css";
import Nav from "../pages/TopNav";
import * as styles from "./post.module.css";

export default function Post({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <>
      {console.log(markdownRemark)}
      <Nav />
      <div className={`${styles.postWrapper} mt-4 container`}>
        <div className="container col-md-8">
          <h1 style={{ textAlign: "center" }}>{frontmatter.title}</h1>
          <hr style={{ backgroundColor: "grey" }} />
          <div className="d-flex justify-content-between">
            <span className="text-muted small">{frontmatter.date}</span>
            <span className="text-muted small">{frontmatter.duration}</span>
            <span className="text-muted small">by: {frontmatter.author}</span>
          </div>
          <section
            dangerouslySetInnerHTML={{ __html: html }}
            className="mt-3"
          />
        </div>
      </div>
    </>
  );
}

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        introduction
        duration
        author
      }
    }
  }
`;
