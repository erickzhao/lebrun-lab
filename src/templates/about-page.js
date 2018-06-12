import React from 'react'
import Content, { HTMLContent } from '../components/Content'
import Header from '../components/Header'

export const AboutPageTemplate = ({ title, heading, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <header>
        <Header title={title} heading={heading}/>
      </header>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="section">
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  )
}

export default ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      heading={post.frontmatter.heading}
      content={post.html}
    />
  )
}

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heading
      }
    }
  }
`
