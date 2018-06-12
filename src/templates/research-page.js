import React from "react"
import Header from "../components/Header"
import Content, { HTMLContent } from "../components/Content"

export const ResearchPageTemplate = ({topics}) => {
  console.log(topics);
  return (
  <div>
    <h1>Research Topics</h1>
    { topics.map(t =>
      <div key={t.node.id}>
        <h2>{t.node.frontmatter.title}</h2>
        <p>{t.node.excerpt}</p>
      </div>
      ) }
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
          }
        }
      }
    }
  }
`