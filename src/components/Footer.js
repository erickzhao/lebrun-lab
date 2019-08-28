import React from "react";
import crpLogo from "../img/crp.png";
import fomLogo from "../img/fom.png";

const Footer = () => (
  <footer className="footer has-text-centered">
    <div className="container" style={{maxWidth: '700px'}}>
      <div className="columns">
        <div className="column">
          <img src={crpLogo} style={{height: '80px'}} alt="Cancer Research Program logo"/>
        </div>
        <div className="column">
          <img src={fomLogo} alt="McGill Faculty of Medecine logo"/>
        </div>
      </div>
    </div>
    <p className="has-text-centered">
    For donations, please contact Dr. Lebrun at <a href="mailto:jj.lebrun@mcgill.ca">jj.lebrun@mcgill.ca</a>. Thank you for your support.
    </p>
    <p className="has-text-centered">
      Copyright © 2018 Lebrun Lab. All rights reserved.
    </p>
  </footer>
)

export default Footer;
