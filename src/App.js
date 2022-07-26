import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/Header/ScrollToTop";

export const SavedUser = createContext();

const App = () => {
  const [savedUser, setSavedUser] = useState(
    JSON.parse(localStorage.getItem(localStorage.getItem("savedUser")))
  );
  return (
    <>
      <SavedUser.Provider value={{ savedUser, setSavedUser }}>
        <Header />
        <ScrollToTop />
        <Outlet />
      </SavedUser.Provider>
    </>
  );
};

export default App;
