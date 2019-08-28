import React from "react";
import ReactMarkdown from "react-markdown";
import Header from "../components/Header";
import Map from "../components/Map";

export const ContactPageTemplate = ({
  title,
  subtitle,
  headerImage,
  address,
  contact,
  directions
}) => {
  const stringAddress=`${address.line1}, ${address.line2}, ${address.city}, ${address.province} ${address.postalCode}`;
  return (
    <div>
      <Header title={title} subtitle={subtitle} image={headerImage} />
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
        <h2 className="subtitle">Map</h2>
        <Map address={stringAddress}/>
      </section>
      <section className="section container">
        <h2 className="subtitle">Directions</h2>
        <ReactMarkdown className="content" source={directions}/>
      </section>
    </div>
  );
};

export default ({ data }) => {
  const { contact: post } = data;
  const {title, subtitle, address, headerImage, contact, directions} = post.frontmatter;
  return (
    <ContactPageTemplate
      title={title}
      subtitle={subtitle}
      address={address}
      headerImage={headerImage}
      contact={contact}
      directions={directions}
    />
  );
};

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    contact: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        headerImage
        directions
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
