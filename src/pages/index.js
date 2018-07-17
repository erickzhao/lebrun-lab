import React from "react";
import Link from "gatsby-link";
import Carousel from "../components/Carousel";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { 
      news: {
        edges: posts
      },
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
    news: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq:"news-post"}}}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
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
