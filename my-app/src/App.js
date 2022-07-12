import React from 'react'
import { Outlet } from "react-router-dom";
import "./App.css";
import Welcome from "./components/Welcome/Welcome";
import SliderSection from "./components/Slider/SliderSection";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import FoodMenu from './components/FoodMenu/FoodMenu';

const App = () => {
  return (
    <>
      <Welcome />
      <SliderSection />
      <FoodMenu/>
      <Outlet />
    </>
  );
}

export default App





