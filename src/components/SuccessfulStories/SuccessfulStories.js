import React, { useState, useEffect } from "react";

import CardList from "../CardList/CardList";
import NewsSection from "../NewsSection/NewsSection";

import { API } from "../../consts/Api";

const SuccessfulStories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch(API.paths.stories)
      .then((res) => res.json())
      .then((data) => {
        if (data.successfulstories.length >= 3) {
          setStories(
            data.successfulstories.slice(data.successfulstories.length - 3)
          );
        } else {
          setStories(data.successfulstories);
        }
      });
  }, []);

  return (
    <NewsSection
      title="Успешни Приказни"
      desc="Сите наши активности имаат единствена крајна цел, која ја делиме со 
        студентите, инструкторите и партнерските компании - да креираме нови 
        почетоци, возбудливи можности и оддржливи вредности. Со еден збор - да 
        креираме успешни приказни."
      buttonTitle="СИТЕ УСПЕШНИ ПРИКАЗНИ"
      buttonLink="https://blog.brainster.co/category/%d1%83%d1%81%d0%bf%d0%b5%d1%88%d0%bd%d0%b8-%d0%bf%d1%80%d0%b8%d0%ba%d0%b0%d0%b7%d0%bd%d0%b8/"
    >
      <CardList cards={stories} />
    </NewsSection>
  );
};

export default SuccessfulStories;
