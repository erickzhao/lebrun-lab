import React from "react";
import Content, { HTMLContent } from "../components/Content";

export const NewsPostTemplate = ({
  content,
  contentComponent,
  description,
  title
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default props => {
  const { markdownRemark: post } = props.data;

  return (
    <NewsPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      title={post.frontmatter.title}
    />
  );
};

export const pageQuery = graphql`
  query NewsPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`;
