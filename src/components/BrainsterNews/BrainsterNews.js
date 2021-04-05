import React from "react";

import AboutUs from "../AboutUs/AboutUs";
import BlogPosts from "../BlogPosts/BlogPosts";
import NewsSection from "../NewsSection/NewsSection";
import SuccessfulStories from "../SuccessfulStories/SuccessfulStories";
import Webinars from "../Webinars/Webinars";

import "./BrainsterNews.css";

const BrainsterNews = () => {
  return (
    <div className="BrainsterNews">
      <h2 className="title">Brainster News</h2>
      <Webinars />
      <SuccessfulStories />
      <NewsSection
        title="Блог"
        desc="Нашиот блог е простор за сите кои имаат да споделат знаење и искуство и со 
        својот пример да ги мотивираат другите да станат подобра верзија од себе си."
        buttonTitle="СИТЕ БЛОГ ПОСТОВИ"
        buttonLink="https://blog.brainster.co/"
      >
        <BlogPosts />
      </NewsSection>
      <AboutUs />
    </div>
  );
};

export default BrainsterNews;
