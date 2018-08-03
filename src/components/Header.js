import React from "react";
import Helmet from "react-helmet";

const Header = ({ title, subtitle, image }) => (
  <header
    className="hero is-medium is-primary is-bold"
    style={{
      background: image
        ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image}) no-repeat center center / cover fixed`
        : ``,
      marginBottom: '6rem'
    }}
  >
    <div className="hero-body">
      <Helmet>
        <title>{title} - J.J. Lebrun Laboratory</title>
      </Helmet>
      <div className="container">
        <h1 className="title is-1">{title}</h1>
        <h2 className="subtitle">{subtitle}</h2>
      </div>
    </div>
  </header>
);

export default Header;
