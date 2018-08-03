import React from "react";
import Content, { HTMLContent } from "../components/Content";
import Header from "../components/Header";

export const PIPageTemplate = ({
  title,
  heading,
  photo,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <Header title={title} heading={heading} photo={photo} />
      <section className="section container">
        <div className="columns">
          <div className="column is-flex is-horizontally-centered">
            <img src={photo} alt="Headshot" />
          </div>
          <div className="column">
            <PageContent className="content" content={content} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <PIPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      heading={post.frontmatter.heading}
      photo={post.frontmatter.photo}
      content={post.html}
    />
  );
};

export const PIPageQuery = graphql`
  query PrincipalInvestigatorPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heading
        photo
      }
    }
  }
`;
