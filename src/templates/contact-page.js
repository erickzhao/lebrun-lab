import React from "react";
import Header from "../components/Header";
import Map from "../components/Map";

export const ContactPageTemplate = ({
  title,
  heading,
}) => {
  return (
    <div>
      <header>
        <Header title={title} heading={heading} />
      </header>
      <Map address="1001 Decarie Blvd, Montreal, QC H4A 3J1"/>
    </div>
  );
};

export default ({ data }) => {
  const { contact: post } = data;

  return (
    <ContactPageTemplate
      title={post.frontmatter.title}
      heading={post.frontmatter.heading}
      content={post.html}
    />
  );
};

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    contact: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heading
      }
    }
  }
`;
