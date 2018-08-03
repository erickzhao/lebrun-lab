import React from "react";
import Link from "gatsby-link";
import "../utils/navbar";

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Lebrun Lab
        </Link>
        <div className="navbar-burger" data-target="navMenu">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="navbar-menu" id="navMenu">
        <div className="navbar-end">
          <div className="navbar-item">
            <Link to="/"><i className="fas fa-home"></i></Link>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <span className="navbar-link">The Lab</span>
            <div className="navbar-dropdown">
              <div className="navbar-item">
                <Link to="/about">About</Link>
              </div>
              <div className="navbar-item">
                <Link to="/team">Lab members</Link>
              </div>
              <div className="navbar-item">
                <Link to="/alumni">Alumni</Link>
              </div>
            </div>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <span className="navbar-link">Research</span>
            <div className="navbar-dropdown">
              <div className="navbar-item">
                <Link to="/research">Projects</Link>
              </div>
              <div className="navbar-item">
                <Link to="/protocol">Protocol</Link>
              </div>
            </div>
          </div>
          <div className="navbar-item">
            <Link to="/publications">Publications</Link>
          </div>
          <div className="navbar-item">
            <Link to="/news">News</Link>
          </div>
          <div className="navbar-item">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
