import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./all.scss";
import faviconSm from '../img/favicon-32x32.png';
import faviconMd from '../img/favicon-256x256.png';
import faviconLg from '../img/favicon-512x512.png';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>J.J. Lebrun Laboratory</title>
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.2.0/js/all.js"
      />
      <link rel="icon" type="image/png" href={faviconSm} sizes="32x32"/>
      <link rel="icon" type="image/png" href={faviconMd} sizes="256x256"/>
      <link rel="icon" type="image/png" href={faviconLg} sizes="512x512"/>
    </Helmet>
    <Navbar />
    <div style={{ marginBottom: `10rem` }}>{children()}</div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
