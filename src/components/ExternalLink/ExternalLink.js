import React from "react";

import "./ExternalLink.css";

const ExternalLink = ({ link, children, small }) => {
  return (
    <a
      className={small ? "ExternalLink small" : "ExternalLink"}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export default ExternalLink;
