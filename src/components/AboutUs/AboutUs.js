import React from "react";

import ExternalLink from "../ExternalLink/ExternalLink";

import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="brainster-logo">
        <img src="./images/brainster-logo.png" alt="" />
      </div>
      <ExternalLink link="https://brainster.co/" small>
        За нас
      </ExternalLink>
    </div>
  );
};

export default AboutUs;
