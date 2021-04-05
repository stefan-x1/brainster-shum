import React from "react";

import ExternalLink from "../ExternalLink/ExternalLink";

import "./NewsSection.css";

const NewsSection = ({ title, desc, children, buttonTitle, buttonLink }) => {
  return (
    <section className="NewsSection">
      <h2 className="section-title">{title}</h2>
      <p className="section-description">{desc}</p>
      {children}
      <div className="section-button">
        <ExternalLink link={buttonLink}>{buttonTitle}</ExternalLink>
      </div>
    </section>
  );
};

export default NewsSection;
