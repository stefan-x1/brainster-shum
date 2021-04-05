import React from "react";

import "./ShareIcons.css";

// icons
import messenger from "../../assets/icons/facebook-messenger-brands.svg";
import facebook from "../../assets/icons/facebook-brands.svg";
import twitter from "../../assets/icons/twitter-brands.svg";
import times from "../../assets/icons/times.svg";

const ShareIcons = ({ closeShareIconsMenu, style }) => {
  const domainName = "https://brainster.co/";

  return (
    <div className="ShareIcons" style={style}>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${domainName}`}
        target="_blank"
        rel="noreferrer"
      >
        <img src={messenger} alt="messenger-icon" />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${domainName}`}
        target="_blank"
        rel="noreferrer"
      >
        <img src={facebook} alt="facebook-icon" />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=${domainName}`}
        target="_blank"
        rel="noreferrer"
      >
        <img src={twitter} alt="twitter-icon" />
      </a>
      <img
        src={times}
        alt="times-icon"
        className="close-share"
        onClick={() => closeShareIconsMenu()}
      />
    </div>
  );
};

export default ShareIcons;
