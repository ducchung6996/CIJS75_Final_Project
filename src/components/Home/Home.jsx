import React from "react";
import Welcome from "../Welcome/Welcome";
import SliderSection from "../Slider/SliderSection";

const Home = () => {
  console.log(process.env.PUBLIC_URL);
  return (
    <>
      <Welcome />
      <SliderSection />
    </>
  );
};

export default Home;
