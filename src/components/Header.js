import React from "react";

const Header = ({ title, heading, photo }) => (
  <section
    className="hero is-medium is-primary is-bold"
    style={{
      background: photo
        ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${photo}) no-repeat center center / cover fixed`
        : ``,
      marginBottom: '6rem'
    }}
  >
    <div className="hero-body">
      <div className="container">
        <h1 className="title is-1">{title}</h1>
        <h2 className="subtitle">{heading}</h2>
      </div>
    </div>
  </section>
);

export default Header;
