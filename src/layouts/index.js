import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";
import "./all.scss";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Lebrun Laboratory">
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"
      />
    </Helmet>
    <Navbar />
    <div style={{ marginBottom: `100px` }}>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
