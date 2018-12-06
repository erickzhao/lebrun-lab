import React from "react";
import Link from "gatsby-link";
import "../utils/navbar";
import logo from '../img/favicon-32x32.png';

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img style={{'marginRight': '10px'}}src={logo}/> Lebrun Lab
        </Link>
        <div className="navbar-burger" data-target="navMenu">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="navbar-menu" id="navMenu">
        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable">
            <span className="navbar-link"><i className="fas fa-flask navbar-icon"></i>Lab</span>
            <div className="navbar-dropdown">
              <div className="navbar-item">
                <Link to="/about">About</Link>
              </div>
              <div className="navbar-item">
                <Link to="/principal-investigator">Principal Investigator</Link>
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
            <span className="navbar-link"><i className="fas fa-microscope navbar-icon"></i>Research</span>
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
            <Link to="/publications"><i className="fas fa-book navbar-icon"></i>Publications</Link>
          </div>
          <div className="navbar-item">
            <Link to="/news"><i className="fas fa-newspaper navbar-icon"></i>News</Link>
          </div>
          <div className="navbar-item">
            <Link to="/contact"><i className="fas fa-globe navbar-icon"></i>Contact</Link>
          </div>
          <div className="navbar-item">
            <Link to="/links"><i className="fas fa-external-link-alt navbar-icon"></i>Links</Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
