import React from "react"
import Header from "../components/Header"
import Team from "../components/Team"

export default (props) => {
  return (
    <div>
      <Header {...props.data.markdownRemark.frontmatter}/>
      <Team {...props.data.markdownRemark.frontmatter}/>
    </div>
  )
}

export const alumniPageQuery = graphql`
  query alumniPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        members {
          name
          position
          photo
          description
        }
      }
    }
  }
`
