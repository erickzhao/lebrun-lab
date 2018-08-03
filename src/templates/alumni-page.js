import React from "react";
import Header from "../components/Header";
import Team from "../components/Team";

export default ({data}) => {
  const { title, subtitle, headerImage, members } = data.markdownRemark.frontmatter;
  return (
    <div>
      <Header title={title} subtitle={subtitle} image={headerImage} />
      <Team members={members} />
    </div>
  );
};

export const alumniPageQuery = graphql`
  query alumniPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        headerImage
        members {
          name
          position
          photo
          description
        }
      }
    }
  }
`;
