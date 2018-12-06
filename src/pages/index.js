import React from "react";
import Link from "gatsby-link";
import Carousel from "../components/Carousel";
import Content, { HTMLContent } from "../components/Content";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const {
      researchPosts: { edges: topics }
    } = data;
    const cards = [data.researchPage, data.aboutPage, data.newsPage];
    const slides = topics.map(t => ({
      headerImage: t.node.frontmatter.headerImage,
      title: t.node.frontmatter.title,
      slug: t.node.fields.slug
    }));
    return (
      <div>
        <Carousel slides={slides} />
        <div className="section container">
            <div className="tile is-ancestor">
            <div className="tile is-parent">
              <article className="tile is-child box is-8">
                <HTMLContent className="content" content={data.homeContent.html} />
              </article>
              <article className="tile is-child box is-4 is-parent is-vertical">
                <h2 className="subtitle">Learn More</h2>
                {cards.map(c => (
                    <div className="tile is-child" key={c.fields.slug}>
                      <div className="card card-equal-height">
                        <div className="card-image">
                          <figure
                            className="image is-4by3"
                            style={{
                              backgroundColor: c.frontmatter.headerImage
                                ? null
                                : "#00b1e2"
                            }}
                          >
                            {c.frontmatter.headerImage && (
                              <img src={c.frontmatter.headerImage} alt={c.title} />
                            )}
                          </figure>
                        </div>
                        <div className="card-content">
                          <div
                            className="is-flex"
                            style={{
                              justifyContent: "space-between",
                              alignItems: "center"
                            }}
                          >
                            <span className="title is-4 is-marginless">
                              {c.frontmatter.title}
                            </span>
                            <Link to={c.fields.slug} className="button is-primary">
                              More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

              </article>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    researchPosts: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "research-post" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            headerImage
          }
        }
      }
    }
    aboutPage: markdownRemark(
      frontmatter: { templateKey: { eq: "about-page" } }
    ) {
      fields {
        slug
      }
      frontmatter {
        headerImage
        title
      }
    }
    newsPage: markdownRemark(
      frontmatter: { templateKey: { eq: "news-page" } }
    ) {
      fields {
        slug
      }
      frontmatter {
        headerImage
        title
      }
    }
    researchPage: markdownRemark(
      frontmatter: { templateKey: { eq: "research-page" } }
    ) {
      fields {
        slug
      }
      frontmatter {
        headerImage
        title
      }
    }
    homeContent: markdownRemark(
      frontmatter: { templateKey: { eq: "home-content" } }
    ) {
      fields {
        slug
      }
      html
    }
  }
`;
