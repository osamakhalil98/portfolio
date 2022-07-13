import { Link, graphql } from "gatsby";
import React from "react";
import Nav from "./TopNav";
import * as styels from "./Blog.module.css";

export default function Blog({ data }) {
  const { nodes } = data.allMarkdownRemark;

  return (
    <>
      <Nav />
      <div className={`${styels.blogWrapper} mt-3`}>
        <h1 style={{ fontWeight: "bold", textAlign: "center" }}>
          All blogs <span className={styels.blogEmoji}>🌀</span>
        </h1>
        <p style={{ textAlign: "center" }}>
          Planning to write about tech, personal stuff and everything in
          between!
        </p>
        <ul className={`${styels.blogsList} col-md-8`}>
          {nodes.map(({ frontmatter }) => (
            <li className={`p-4 col-md-8 ${styels.blogCardWrapper} mb-4`}>
              <Link to={frontmatter.slug}>
                <h2>{frontmatter.title}</h2>
              </Link>
              <p className={`mt-4 ${styels.blogShortDesc}`}>
                {frontmatter.introduction}
              </p>
              <span className="mt-4 block font-light text-base">
                {frontmatter.date}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          slug
          title
          introduction
        }
      }
    }
  }
`;
