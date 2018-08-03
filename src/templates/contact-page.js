import React from "react";
import Header from "../components/Header";
import Map from "../components/Map";

export const ContactPageTemplate = ({
  title,
  heading,
  address,
  contact
}) => {
  const stringAddress=`${address.line1}, ${address.line2}, ${address.city}, ${address.province} ${address.postalCode}`;
  return (
    <div>
      <header>
        <Header title={title} heading={heading} />
      </header>
      <section className="section container">
        <div className="columns">
          <div className="column">
            <h2 className="subtitle">Point of Contact</h2>
            <p>
              {contact.name}<br/>
              {contact.position}<br/>
              <a href={`mailto:${contact.email}`}>{contact.email}</a><br/>
              {contact.phone}
            </p>
          </div>
          <div className="column">
            <h2 className="subtitle">Address</h2>
            <address>
              {address.line1}<br/>
              {address.line2}<br/>
              {address.city}, {address.province}<br/>
              {address.postalCode}
            </address>
          </div>
        </div>
      </section>
      <section className="section container">
        <Map address={stringAddress}/>
      </section>
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
      contact={post.frontmatter.contact}
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
        contact {
          name
          position
          email
          phone
        }
      }
    }
  }
`;
