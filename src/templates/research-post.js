import React from "react";
import Header from "../components/Header";
import Content, { HTMLContent } from "../components/Content";

export const ResearchPostTemplate = ({
  content,
  contentComponent,
}) => {
  const PostContent = contentComponent || Content;
  return (
    <div className="container content">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <PostContent content={content} />
        </div>
      </div>
    </div>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;
  const { title, subtitle, headerImage, files } = data.markdownRemark.frontmatter;
  return (
    <div>
      <Header title={title} subtitle={subtitle} image={headerImage} />
      <ResearchPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        files={files}
      />
    </div>
  );
};

export const researchPostQuery = graphql`
  query ResearchPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        subtitle
        headerImage
        tags
        files {
          file
        }
      }
    }
  }
`;
