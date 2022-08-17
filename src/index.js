import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter, Routes, Route} from "react-router-dom";
import Login from "./components/Login-Signup-PwForgot/Login";
import Signup from "./components/Login-Signup-PwForgot/Signup";
import PwForgot from "./components/Login-Signup-PwForgot/PwForgot";
import Userprofile from "./components/Userprofile/Userprofile";
import ChangePw from "./components/Userprofile/ChangePw";
import ChangeEmail from "./components/Userprofile/ChangeEmail";
import ChangeUserProfile from "./components/Userprofile/ChangeUserProfile";
import FoodDetail from "./components/FoodDetail/FoodDetail";
import Mytodolist from "./components/Mytodolist/Mytodolist";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer";
import FoodTour from "./components/FoodTour/FoodTour";
import Contacts from "./components/Contacts/Contacts";
import About from "./components/About/About";

const root = ReactDOM.createRoot(document.getElementById("root"));
const loggedUser = JSON.parse(
  localStorage.getItem(localStorage.getItem("savedUser"))
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home/>}/>
          <Route path="/fooddetail/:foodid" element={<FoodDetail />} />
          <Route path="about" element={<About />} />
          <Route path="foodtour" element={<FoodTour />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="login" element={!loggedUser ? <Login /> : <Home/>} />
          <Route path="signup" element={!loggedUser ? <Signup /> : <Home/>} />
          <Route path="pwforgot" element={!loggedUser ? <PwForgot /> : <Home/>} />
          <Route path="changepw" element={loggedUser ? <ChangePw /> : <Home/>} />
          <Route path="changeemail" element={loggedUser ? <ChangeEmail /> : <Home/>} />
          <Route path="changeuserprofile" element={loggedUser ? <ChangeUserProfile /> : <Home/>} />
          <Route path="userprofile" element={loggedUser ? <Userprofile /> : <Home/>} />
          <Route path="mytodolist" element={loggedUser ? <Mytodolist /> : <Home/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </HashRouter>
  </React.StrictMode>
);
