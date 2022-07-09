import React from "react";
import { useState, useEffect } from "react";
import './BackToTop.css'

const BackToTop = () => {
  const [scrollBarPosition, setScrollBarPosition] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () =>
      setScrollBarPosition(document.documentElement.scrollTop)
    );
    return () => {
      document.removeEventListener("scroll", () =>
        setScrollBarPosition(document.documentElement.scrollTop)
      );
    };
  });
  return (
      <a className="back-to-top" style={{ opacity: scrollBarPosition > 160 ? 1 : 0 }} href="#">
        ▲
      </a>
  );
};

export default BackToTop;
