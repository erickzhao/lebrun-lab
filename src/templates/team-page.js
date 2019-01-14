import React from "react";
import Header from "../components/Header";
import Team from "../components/Team";

export default ({ data }) => {
  const positions = {
    associate: "Research Associates",
    postdoc: "Post-Doctorate Fellows",
    grad: "Graduate Students",
    assistant: "Research Assistants",
    undergrad: "Undergraduate Students",
    admin: "Administration"
  };
  const { title, subtitle, headerImage, members } = data.markdownRemark.frontmatter;
  return (
    <div>
      <Header title={title} subtitle={subtitle} image={headerImage} />
      {Object.keys(positions).map(pos => {
        const membersByPosition = members.filter(
          m => m.position === pos
        );
        if (membersByPosition.length > 0) {
          return (
            <div className="section container" key={pos}>
              <h2 className="title">{positions[pos]}</h2>
              <Team members={membersByPosition} />
            </div>
          );
        }
      })}
    </div>
  );
};

export const teamPageQuery = graphql`
  query TeamPage($id: String!) {
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
          email
        }
      }
    }
  }
`;
