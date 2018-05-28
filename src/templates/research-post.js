import React from "react"
import Header from "../components/Header"
import Content, { HTMLContent } from '../components/Content'


export const ResearchPostTemplate = ({ content, contentComponent, description, title }) => {
  const PostContent = contentComponent || Content;
  return (
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <PostContent content={content} />
          </div>
        </div>
      </div>
  );
}

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <div>
      <Header {...data.markdownRemark.frontmatter}/>
      <ResearchPostTemplate
        content={post.html}s
        contentComponent={HTMLContent}
      />
    </div>
  )
}

export const researchPostQuery = graphql`
  query ResearchPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        photo
        title
      }
    }
  }
`
