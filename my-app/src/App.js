import React, { createContext, useState } from 'react'
import { Outlet } from "react-router-dom";
import "./App.css";
import Welcome from "./components/Welcome/Welcome";
import Slider from "./components/Slider/Slider";
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Welcome />
      <Slider />
      <Outlet />
      <Footer />
    </>
  );
}

export default App





