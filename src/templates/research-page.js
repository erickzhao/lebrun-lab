import React from "react";
import Header from "../components/Header";
import Link from "gatsby-link";

export const ResearchPageTemplate = ({ topics, title, subtitle, headerImage }) => {
  return (
    <div>
      <Header title={title} subtitle={subtitle} image={headerImage} />
      <section className="section container">
        {topics.map(t => (
          <div className="box card is-horizontal" key={t.node.id}>
            <div className="card-image">
              <figure className="image is-4x3">
                <img src={t.node.frontmatter.headerImage} alt={t.node.frontmatter.title} />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <h2 className="subtitle is-4">
                    {t.node.frontmatter.title}
                  </h2>
                </div>
              </div>

              <div className="content">
                {
                  t.node.frontmatter.tags &&
                  (<div className="tags">
                    {t.node.frontmatter.tags.map(tag => 
                      <span key={tag} className="tag is-primary is-capitalized">{tag}</span>
                    )}
                  </div>)
                }
                <p>{t.node.excerpt}</p>
                <Link className="button is-primary" to={t.node.fields.slug}>
                  Keep Reading →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ({ data }) => {
  const { edges: topics } = data.topics;
  const { title, headerImage, subtitle } = data.info.frontmatter;
  return (
    <div>
      <ResearchPageTemplate
        topics={topics}
        title={title}
        subtitle={subtitle}
        headerImage={headerImage}
      />
    </div>
  );
};

export const researchPageQuery = graphql`
  query ResearchPage {
    topics: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq:"research-post"}}}) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            tags
            templateKey
            headerImage
          }
        }
      }
    },
    info: markdownRemark(frontmatter: { templateKey: {eq: "research-page"}}) {
      frontmatter {
        title
        subtitle
        headerImage
      }
    }
  }
`;
