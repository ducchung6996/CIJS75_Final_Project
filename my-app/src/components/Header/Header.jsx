import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { RiLoginBoxLine } from "react-icons/ri";
import { HiOutlinePencil } from "react-icons/hi";
import { useState, useEffect } from "react";
import LoginSignup from "../LoginSignup/LoginSignup";

const Header = () => {
  const [scrollBarPosition, setScrollBarPosition] = useState(0);
  document.addEventListener("scroll", () =>
    setScrollBarPosition(document.documentElement.scrollTop)
  );
  return (
    <>
      <section
        id="header"
        style={{ backgroundColor: scrollBarPosition > 160 ? "#2c3e50" : null }}
      >
        <Link to="/">
          <img className="logo" src="images/logo.png" alt="Home" />
        </Link>
        <nav className="header-nav">
          <Link to="about">About</Link>
          <Link to="foodtour">Foodtour</Link>
          <Link to="contacts">Contacts</Link>
          <button>
            Login <RiLoginBoxLine />
          </button>
          <p>Or</p>
          <button>
            Signup <HiOutlinePencil />
          </button>
        </nav>
      </section>
      <a
        className="back-to-top"
        style={{ opacity: scrollBarPosition > 160 ? 1 : 0 }}
        href="#"
      >▲</a>
      <LoginSignup />
    </>
  );
};

export default Header;