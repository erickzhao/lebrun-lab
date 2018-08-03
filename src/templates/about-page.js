import React from "react";
import Content, { HTMLContent } from "../components/Content";
import Header from "../components/Header";

export const AboutPageTemplate = ({
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
      <section className="section">
        <div className="container">
          <PageContent className="content" content={content} />
        </div>
      </section>
    </div>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      heading={post.frontmatter.heading}
      photo={post.frontmatter.photo}
      content={post.html}
    />
  );
};

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
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
