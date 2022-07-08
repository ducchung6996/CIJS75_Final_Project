import { Outlet } from "react-router-dom";
import "./App.css";
import Welcome from "./components/Welcome/Welcome";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <>
      <Welcome />
      <Slider />
      <Outlet />
    </>
  );
}

export default App;
