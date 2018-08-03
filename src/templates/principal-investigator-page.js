import React from "react";
import Content, { HTMLContent } from "../components/Content";
import Header from "../components/Header";

export const PIPageTemplate = ({
  title,
  subtitle,
  headshot,
  headerImage,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;
  return (
    <div>
      <Header title={title} subtitle={subtitle} image={headerImage} />
      <section className="section container">
        <div className="columns is-flex is-vertically-centered">
          <div className="column is-flex is-horizontally-centered">
            <img src={headshot} alt="Headshot" />
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
      subtitle={post.frontmatter.subtitle}
      headerImage={post.frontmatter.headerImage}
      headshot={post.frontmatter.headshot}
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
        subtitle
        headerImage
        headshot
      }
    }
  }
`;
