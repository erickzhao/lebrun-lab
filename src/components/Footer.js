import React from "react";
import crpLogo from "../img/crp.png";
import fomLogo from "../img/fom.png";

const Footer = () => (
  <footer className="footer has-text-centered">
    <div className="container" style={{maxWidth: '700px'}}>
      <div className="columns">
        <div className="column">
          <img src={crpLogo} style={{height: '80px'}}/>
        </div>
        <div className="column">
          <img src={fomLogo}/>
        </div>
      </div>
    </div>
    <p className="content has-text-centered">
      Copyright © 2018 Lebrun Lab. All rights reserved.
    </p>
  </footer>
)

export default Footer;
