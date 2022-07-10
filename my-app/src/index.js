import React from "react";
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

const root = ReactDOM.createRoot(document.getElementById("root"));
const loginStatus = localStorage.getItem("savedUser");
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="pwforgot" element={<PwForgot/>}/>
        {loginStatus && <Route path="changepw" element={<ChangePw/>}/>}
        {loginStatus && <Route path="changeemail" element={<ChangeEmail/>}/>}
        {loginStatus && <Route path="changeuserprofile" element={<ChangeUserProfile/>}/>}
        {loginStatus && <Route path="userprofile" element={<Userprofile/>}/>}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
