import "./Slider.css";
import Slider from "react-slick";
import { TbMapPin } from "react-icons/tb";
import Tatca from "../Content/Tatca";
import React from "react";
import { Link } from "react-router-dom";

const SliderSection = () => {
  function createRandomFood(a) {
    let arr = [];
    for (let i = 0; i < 8; i++) {
      let num = Math.floor(Math.random() * 20);
      arr.push(a[num]);
    }
    return arr;
  }
  let recommendFood = createRandomFood(Tatca);
  const settings = {
    className: "slider variable-width",
    centerMode: true,
    dots: true,
    infinite: true,
    variableWidth: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: true,
    rows: 1,
  };
  return (
    <section id="slider">
      <div className="slider-title">HÔM NAY ĂN GÌ ?</div>
      <Slider {...settings}>
        {recommendFood.map((item, index) => {
          return (
            <div className="slider-item" key={item.id}>
              <div className="slider-item-container">
                <div className="slider-image-container">
                  <img className="slider-image" src={item.image} alt={index} />
                  <Link className="read-more" to="/">Xem chi tiết ►</Link>
                </div>
                <div className="slider-item-description">
                  <h1 className="slider-item-title">{item.title}</h1>
                  <a
                    href={item.map}
                    target="blank"
                    className="slider-item-location"
                  >
                    <TbMapPin /> {item.location}
                  </a>
                  <div className="more">
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
