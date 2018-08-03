import React from "react";
import Header from "../components/Header";
import Team from "../components/Team";

export default ({ data }) => {
  const positions = {
    associate: "Research Associates",
    postdoc: "Post-Doctorate Fellows",
    grad: "Graduate Students",
    assistant: "Research Assistants",
    undergrad: "Undergraduate Students"
  };
  return (
    <div>
      <Header {...data.markdownRemark.frontmatter} />
      {Object.keys(positions).map(pos => {
        const members = data.markdownRemark.frontmatter.members.filter(
          m => m.position === pos
        );
        if (members.length > 0) {
          return (
            <div className="section container" key={pos}>
              <h2 className="title">{positions[pos]}</h2>
              <Team members={members} />
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
`;
