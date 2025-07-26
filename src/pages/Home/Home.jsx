import React from "react";
import Hero from "./Hero";
import WhyChoose from "./WhyChoose";
import FirstCarousel from "../../components/carousel/FirstCarousel";
import BuildFor from "./BuildFor";
import FirstFaq from "../../components/Faq/FirstFaq";

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyChoose />
      <BuildFor />
      <FirstFaq />
    </div>
  );
};

export default Home;
