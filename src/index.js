import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./components/Login-Signup-PwForgot/Login";
import Signup from "./components/Login-Signup-PwForgot/Signup";
import PwForgot from "./components/Login-Signup-PwForgot/PwForgot";
import Userprofile from "./components/Userprofile/Userprofile";
import ChangePw from "./components/Userprofile/ChangePw";
import ChangeEmail from "./components/Userprofile/ChangeEmail";
import ChangeUserProfile from "./components/Userprofile/ChangeUserProfile";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/Header/ScrollToTop";
import FoodDetail from "./components/FoodDetail/FoodDetail";
import Mytodolist from "./components/Mytodolist/Mytodolist";
import NotFound from "./components/NotFound/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
const loggedUser = JSON.parse(localStorage.getItem(localStorage.getItem("savedUser")));
export const LoggedUser = createContext();
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoggedUser.Provider value={loggedUser}>
        <Header/>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/fooddetail/:foodid" element={<FoodDetail/>}/>
          {!loggedUser && <Route path="login" element={<Login/>}/>}
          {!loggedUser && <Route path="signup" element={<Signup/>}/>}
          {!loggedUser && <Route path="pwforgot" element={<PwForgot/>}/>}
          {loggedUser && <Route path="changepw" element={<ChangePw/>}/>}
          {loggedUser && <Route path="changeemail" element={<ChangeEmail/>}/>}
          {loggedUser && <Route path="changeuserprofile" element={<ChangeUserProfile/>}/>}
          {loggedUser && <Route path="userprofile" element={<Userprofile/>}/>}
          {loggedUser && <Route path="mytodolist" element={<Mytodolist/>}/>}
          <Route path='*' element={<NotFound />}/>
        </Routes>
        <Footer/>
      </LoggedUser.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
