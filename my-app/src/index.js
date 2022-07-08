import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import BackToTop from "./components/BackToTop/BackToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <BackToTop/>
      <Routes>
        <Route path="/" element={<App />}>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
