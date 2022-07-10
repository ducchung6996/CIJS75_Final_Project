import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { RiLoginBoxLine } from "react-icons/ri";
import { HiOutlinePencil } from "react-icons/hi";
import { TbLogout } from "react-icons/tb";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Header = () => {
  const [user, setUser] = useState(localStorage.getItem("savedUser"));
  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem(user))
  );
  const [scrollBarPosition, setScrollBarPosition] = useState(0);
  document.addEventListener("scroll", () =>
    setScrollBarPosition(document.documentElement.scrollTop)
  );
  const handleLogout = () => {
    MySwal.fire({
      title: <h1>Bạn có muốn đăng xuất ?</h1>,
      confirmButtonText: "Yep",
      confirmButtonColor: "#3498db",
      showDenyButton: true,
      denyButtonText: `Nah`,
      denyButtonColor: "#e74c3c",
      icon: "warning",
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire({
          title: <h1>Đã đăng xuất</h1>,
          html: <h2>Good bye</h2>,
          confirmButtonText: "Bye",
          confirmButtonColor: "#3498db",
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            localStorage.removeItem("savedUser")
            window.open("/", "_self");
          } else {
            localStorage.removeItem("savedUser")
            window.open("/", "_self");
          }
        });
      }
    });
  }
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
          <div className={`login-signup-btn ${!user && "active"}`}>
            <Link to="login">
              Login <RiLoginBoxLine />
            </Link>
            <p>Or</p>
            <Link to="signup">
              Signup <HiOutlinePencil />
            </Link>
          </div>
          <div className={`user-menu ${user && "active"}`}>
            Chào mừng <strong>{user}</strong>
            <span className="user-btn-avatar-container"><img src={loggedUser ? loggedUser.userAvatar : "images/DefaultUser.png"} className="user-btn-avatar" alt="avatar" /></span>
            <div className="user-submenu">
              <Link to='userprofile'>Thông tin người dùng</Link>
              <Link to='todolist'>My todo list</Link>
              <button onClick={handleLogout}>
                Đăng xuất <TbLogout />
              </button>
            </div>
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
