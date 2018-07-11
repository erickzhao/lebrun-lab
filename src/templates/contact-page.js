import React from "react";
import Header from "../components/Header";
import Map from "../components/Map";

export const ContactPageTemplate = ({
  title,
  heading,
  address
}) => {
  const stringAddress=`${address.line1}, ${address.line2}, ${address.city}, ${address.province} ${address.postalCode}`;
  return (
    <div>
      <header>
        <Header title={title} heading={heading} />
      </header>
      <Map address={stringAddress}/>
    </div>
  );
};

export default ({ data }) => {
  const { contact: post } = data;

  return (
    <ContactPageTemplate
      title={post.frontmatter.title}
      heading={post.frontmatter.heading}
      address={post.frontmatter.address}
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
        address {
          line1
          line2
          city
          province
          postalCode
        }
      }
    }
  }
`;
