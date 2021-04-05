import React from "react";

import Card from "../Card/Card";

import "./CardList.css";

const CardList = ({ cards }) => {
  return (
    <div className="CardList">
      {cards.map((card, index) => (
        <Card
          key={index}
          image={card.path}
          title={card.title}
          desc={card.short_desc}
          link={card.webinar_url || card.story_url}
        />
      ))}
    </div>
  );
};

export default CardList;
