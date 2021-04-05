import React from "react";

import "./Footer.css";

// icons
import facebook from "../../assets/icons/facebook-brands.svg";
import instagram from "../../assets/icons/instagram-brands.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="left-side">
        <img src="./images/brainster-logo.png" alt="Brainster Logo" />
        <p>
          Изработено од студенти на{" "}
          <a href="https://brainster.co/">Brainster</a>
        </p>
      </div>
      <div className="social-media">
        <a href="https://www.instagram.com/brainsterco/">
          <img src={instagram} alt="Brainster Instagram" />
        </a>
        <a href="https://www.facebook.com/brainster.co">
          <img src={facebook} alt="Brainster Facebook" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
