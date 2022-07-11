import "./Slider.css";
import Banhbeo from "../Content/Banhbeo";
import Banhdacua from "../Content/Banhdacua";
import Banhmicay from "../Content/Banhmicay";
import Che from "../Content/Che";
import Slider from "react-slick";

import React from "react";
import { Link } from "react-router-dom";

const SliderSection = () => {
  const settings = {
    className: "slider variable-width",
    centerMode: true,
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: true,
    centerPadding: "60px",
  };
  return (
    <section id="slider">
      <div className="slider-title">HÔM NAY ĂN GÌ ?</div>
      <Slider {...settings}>
        {Banhbeo.map((item, index) => {
          return (
            <div className="slider-item" key={item.id}>
              <div className="slider-item-container">
                <img className="slider-image" src={item.image} alt={index} />
                <div className="slider-item-description">
                  <h1 className="slider-item-title">{item.title}</h1>
                  <p className="slider-item-location"></p>
                  <div className="more">
                    <Link className="read-more" to="/">
                      Xem thêm ...
                    </Link>
                    <button className="add-todo">+ Thêm vào todo list</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default SliderSection;
