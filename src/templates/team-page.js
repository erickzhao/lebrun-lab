import React from "react"
import Header from "../components/Header"
import Team from "../components/Team"

export default ({ data }) => {
  return (
    <div>
      <Header {...data.markdownRemark.frontmatter}/>
      <Team {...data.markdownRemark.frontmatter}/>
    </div>
  )
}

export const teamPageQuery = graphql`
  query TeamPage($id: String!) {
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
