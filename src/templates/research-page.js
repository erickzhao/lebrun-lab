import React from "react"
import Header from "../components/Header"
import Link from 'gatsby-link'

export const ResearchPageTemplate = ({topics}) => {
  return (
  <div>
    <Header title="Research"/>
    <section className="section container">
      { topics.map(t =>
          <div className="card is-horizontal" key={t.node.id}>
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={t.node.frontmatter.photo} alt="Topic Image"/>
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <h2 className="title is-4 is-spaced">{t.node.frontmatter.title}</h2>
                  <p className="subtitle is-6">Keywords: A, S, D, F, G</p>
                </div>
              </div>

              <div className="content">
                <p>{t.node.excerpt}</p>
                <Link className="button" to={t.node.fields.slug}>
                  Keep Reading →
                </Link>
              </div>
            </div>
          </div>
        ) }
    </section>
  </div>
  );
}

export default ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  const topics = posts.filter(t => t.node.frontmatter.templateKey === 'research-post');
  return (
    <div>
      <ResearchPageTemplate topics={topics}/>
    </div>
  )
}

export const researchPageQuery = graphql`
  query ResearchPage {
    allMarkdownRemark {
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
            photo
          }
        }
      }
    }
  }
`