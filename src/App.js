import React from 'react'
import { Outlet } from "react-router-dom";
import "./App.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App





