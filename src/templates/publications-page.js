import React from "react";
import Content, { HTMLContent } from "../components/Content";
import Header from "../components/Header";

export const PublicationsPageTemplate = ({
  title,
  heading,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <Header title={title} heading={heading} />
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
  console.log(post);

  return (
    <PublicationsPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      heading={post.frontmatter.heading}
      content={post.html}
    />
  );
};

export const publicationsPageQuery = graphql`
  query PublicationsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heading
      }
    }
  }
`;
