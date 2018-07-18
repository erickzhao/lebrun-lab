import React from "react";
import Link from "gatsby-link";
import Carousel from "../components/Carousel";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { researchPosts: { edges: topics } } = data;
    const cards = [
      data.aboutPage.frontmatter,
      data.newsPage.frontmatter,
      data.researchPage.frontmatter,
    ]
    const slides = topics.map(t => ({
      photo: t.node.frontmatter.photo,
      title: t.node.frontmatter.title,
      slug: t.node.fields.slug
    }));
    return (
      <div>
        <Carousel slides={slides} />
        <div className="container">
          <div className="columns">
            {cards.map(c => 
              (
                <div className="column is-one-third">
                  <div className="card card-equal-height">
                    <div className="card-image">
                      <figure className="image is-4by3" style={{backgroundColor: c.photo ? null : '#00b1e2'}}>
                        {
                          c.photo &&
                          <img src={c.photo} alt={c.title}/>
                        }
                      </figure>
                    </div>
                    <div className="card-content">
                    <div className="is-flex" style={{justifyContent: 'space-between',alignItems: 'center'}}>
                        <span className="title is-4 is-marginless">{c.title}</span>
                        <Link to="/research" className="button is-primary">More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
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
            photo
          }
        }
      }
    },
    aboutPage: markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        photo
        title
      }
    },
    newsPage: markdownRemark(frontmatter: { templateKey: { eq: "news-page" } }) {
      frontmatter {
        photo
        title
      }
    },
    researchPage: markdownRemark(frontmatter: { templateKey: { eq: "research-page" } }) {
      frontmatter {
        photo
        title
      }
    }
  }
`;
