import React, { useState, useEffect } from "react";

import CardList from "../CardList/CardList";
import NewsSection from "../NewsSection/NewsSection";

import { API } from "../../consts/Api";

const Webinars = () => {
  const [webinars, setWebinars] = useState([]);

  useEffect(() => {
    fetch(API.paths.webinars)
      .then((res) => res.json())
      .then((data) => {
        if (data.webinars.length >= 3) {
          setWebinars(data.webinars.slice(data.webinars.length - 3));
        } else {
          setWebinars(data.webinars);
        }
      });
  }, []);

  return (
    <NewsSection
      title="Вебинари и настани"
      desc="Научи практична вештина која ќе ти помогне да бидеш поуспешен во својата
              работа или да навлезеш во одредена област во која можеби ќе почнеш 
              да градиш нова кариера."
      buttonTitle="Сите Вебинари и Настани"
      buttonLink="https://online.brainster.co/webinar/"
    >
      <CardList cards={webinars} />
    </NewsSection>
  );
};

export default Webinars;
