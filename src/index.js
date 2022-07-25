import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Routes, Route, BrowserRouter } from "react-router-dom";
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
import Home from "./components/Home/Home"

const root = ReactDOM.createRoot(document.getElementById("root"));
const loggedUser = JSON.parse(
  localStorage.getItem(localStorage.getItem("savedUser"))
);
export const LoggedUser = createContext();
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoggedUser.Provider value={loggedUser}>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path={process.env.PUBLIC_URL + "/"} element={<App />}>
            <Route index element={<Home/>}/>
            <Route path="fooddetail/:foodid" element={<FoodDetail />} />
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
      </LoggedUser.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
