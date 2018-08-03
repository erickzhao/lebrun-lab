import React from "react";
import Content, { HTMLContent } from "../components/Content";
import Header from "../components/Header";

export const AboutPageTemplate = ({
  title,
  subtitle,
  headerImage,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <Header title={title} subtitle={subtitle} image={headerImage} />
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
      subtitle={post.frontmatter.subtitle}
      headerImage={post.frontmatter.headerImage}
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
        subtitle
        headerImage
      }
    }
  }
`;
