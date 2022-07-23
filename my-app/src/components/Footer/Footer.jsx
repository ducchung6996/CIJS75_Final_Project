import React from "react";
import "../Footer/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer">
      <img className="footer-logo" src="/images/logo.png" alt="Home" />
      <div className="footer-social-icons">
        <img src="/images/fb.png" alt="Facebook" />
        <img src="/images/ins.png" alt="Instagram" />
        <img src="/images/gg.png" alt="Google" />
        <img src="/images/tiw.png" alt="Twitter" />
      </div>
      <div className="footer-content">
        <Link className="footer-link" to="/">
          Trang chủ
        </Link>
        <Link className="footer-link" to="about">
          Giới thiệu chung
        </Link>
        <Link className="footer-link" to="foodtour">
          Foodtour
        </Link>
        <Link className="footer-link" to="contacts">
          Liên hệ
        </Link>
      </div>
      <p className="copyright">Designed by: Chung Pham</p>
    </div>
  );
};

export default Footer;
