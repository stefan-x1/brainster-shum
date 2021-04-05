import React from "react";

import { API } from "../../consts/Api";

import "./Card.css";

const Card = ({ image, title, desc, link }) => {
  return (
    <div className="Card">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={API.url + image} alt={title} />
        <h4 className="card-title">{title}</h4>
        <div className="card-description">{desc}</div>
      </a>
    </div>
  );
};

export default Card;
