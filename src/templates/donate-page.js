import React from "react";
import Content, { HTMLContent } from "../components/Content";
import Header from "../components/Header";

export const DonatePageTemplate = ({
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
        <div className="container body">
          <PageContent className="content" content={content} />
        </div>
      </section>
    </div>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <DonatePageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      subtitle={post.frontmatter.subtitle}
      headerImage={post.frontmatter.headerImage}
      content={post.html}
    />
  );
};

export const donatePageQuery = graphql`
  query DonatePage($id: String!) {
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
