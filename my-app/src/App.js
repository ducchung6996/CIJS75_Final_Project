import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import Slider from "./components/Slider/Slider";
import BackToTop from "./components/BackToTop/BackToTop";

function App() {
  return (
    <>
      <Welcome/>
      <Slider/>
      <Outlet/>
    </>
  );
}

export default App;
