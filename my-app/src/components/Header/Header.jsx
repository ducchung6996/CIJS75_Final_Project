import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { RiLoginBoxLine } from "react-icons/ri";
import { HiOutlinePencil } from "react-icons/hi";
import { useState } from "react";

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
          <div className="login-signup-btn">
            <Link to="login">
              Login <RiLoginBoxLine />
            </Link>
            <p>Or</p>
            <Link to="signup">
              Signup <HiOutlinePencil />
            </Link>
          </div>
        </nav>
      </section>
      <a
        className="back-to-top"
        style={{ opacity: scrollBarPosition > 160 ? 1 : 0 }}
        href="#"
      >
        ▲
      </a>
    </>
  );
};

export default Header;
