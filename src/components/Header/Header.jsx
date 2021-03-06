import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { RiLoginBoxLine } from "react-icons/ri";
import { HiOutlinePencil } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbLogout } from "react-icons/tb";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { SavedUser } from "../../App";

const MySwal = withReactContent(Swal);

const Header = () => {
  const { savedUser } = useContext(SavedUser);
  const [scrollBarPosition, setScrollBarPosition] = useState(0);
  const [burgerBtn, setBurgerBtn] = useState(false);
  useEffect(() => {
    let burgerMenu = document.getElementById("burger-menu-container");
    const handleCloseBurgerMenu = function(e) {
      if (e.target === burgerMenu) {
        setBurgerBtn(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setBurgerBtn(false);
      }
    }
    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleCloseBurgerMenu);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleCloseBurgerMenu);
    };
  }, [burgerBtn]);
  document.addEventListener("scroll", () =>
    setScrollBarPosition(document.documentElement.scrollTop)
  );
  function scrollFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
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
            localStorage.removeItem("savedUser");
            window.open(process.env.PUBLIC_URL + "/", "_self");
          } else {
            localStorage.removeItem("savedUser");
            window.open(process.env.PUBLIC_URL + "/", "_self");
          }
        });
      }
    });
  };
  return (
    <>
      <section
        id="header"
        style={{ backgroundColor: scrollBarPosition > 100 ? "#2c3e50" : null }}
      >
        <Link to="/">
          <img className="logo" src="./images/logo.png" alt="Home" />
        </Link>
        <nav className="header-nav">
          <Link to="about">Giới thiệu chung</Link>
          <Link to="foodtour">Foodtour</Link>
          <Link to="contacts">Liên hệ</Link>
          <div className={`login-signup-btn ${!savedUser && "active"}`}>
            <Link to="login">
              Đăng nhập <RiLoginBoxLine />
            </Link>
            <p>hoặc</p>
            <Link to="signup">
              Đăng ký <HiOutlinePencil />
            </Link>
          </div>
          <div className={`user-menu ${savedUser && "active"}`}>
            Chào mừng{" "}
            <strong>{savedUser && localStorage.getItem("savedUser")}</strong>
            <span className="user-btn-avatar-container">
              <img
                src={savedUser && savedUser.userAvatar}
                className="user-btn-avatar"
                alt="avatar"
              />
            </span>
            <div className="user-submenu">
              <Link to="userprofile">Thông tin người dùng</Link>
              <Link to="mytodolist">My todo list</Link>
              <button onClick={handleLogout}>
                Đăng xuất <TbLogout />
              </button>
            </div>
          </div>
          <button
            className={`burger-btn ${burgerBtn ? "active" : ""}`}
            onClick={() => setBurgerBtn(!burgerBtn)}
          >
            <GiHamburgerMenu size={36} />
          </button>
        </nav>
      </section>
      <div id="burger-menu-container" className={burgerBtn ? "active" : ""}>
            <div className={`burger-menu ${burgerBtn ? "active" : ""}`}>
              {savedUser ? (
                <div className="burger-signin">
                  <div className="burger-user">
                    Chào mừng{" "}
                    <strong>
                      {savedUser && localStorage.getItem("savedUser")}
                    </strong>
                    <span className="user-btn-avatar-container">
                      <img
                        src={savedUser && savedUser.userAvatar}
                        className="user-btn-avatar"
                        alt="avatar"
                      />
                    </span>
                  </div>
                  <Link onClick={() => setBurgerBtn(!burgerBtn)} className="burger-link" to="userprofile">
                    Thông tin người dùng
                  </Link>
                  <Link onClick={() => setBurgerBtn(!burgerBtn)} className="burger-link" to="mytodolist">
                    My todo list
                  </Link>
                </div>
              ) : (
                <div className="burger-signin">
                  <Link onClick={() => setBurgerBtn(!burgerBtn)} className="burger-login" to="login">
                    Đăng nhập <RiLoginBoxLine />
                  </Link>
                  <Link onClick={() => setBurgerBtn(!burgerBtn)} className="burger-signup" to="signup">
                    Đăng ký <HiOutlinePencil />
                  </Link>
                </div>
              )}
              <Link onClick={() => setBurgerBtn(!burgerBtn)} className="burger-link" to="about">
                Giới thiệu chung
              </Link>
              <Link onClick={() => setBurgerBtn(!burgerBtn)} className="burger-link" to="foodtour">
                Foodtour
              </Link>
              <Link onClick={() => setBurgerBtn(!burgerBtn)} className="burger-link" to="contacts">
                Liên hệ
              </Link>
              <button
                className={`burger-logout ${savedUser && "active"}`}
                onClick={handleLogout}
              >
                Đăng xuất <TbLogout />
              </button>
            </div>
          </div>
      <button
        onClick={scrollFunction}
        className="back-to-top"
        style={{ opacity: scrollBarPosition > 100 ? 1 : 0 }}
      >
        ▲
      </button>
    </>
  );
};

export default Header;
