import React from "react";
import Carousel from "../components/Carousel";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const {
      research: {
        edges: topics
      }
    } = data;
    const slides = topics.map(t => ({
      photo: t.node.frontmatter.photo,
      title: t.node.frontmatter.title,
      slug: t.node.fields.slug
    }));
    return (
      <div>
        <Carousel slides={slides} />
      </div>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    research: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq:"research-post"}}}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            photo
          }
        }
      }
    }
  }
`;
