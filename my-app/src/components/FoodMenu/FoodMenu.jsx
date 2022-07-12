import React, { useState } from "react";
import "./FoodMenu.css";
import Banhbeo from "../Content/Banhbeo";
import Banhdacua from "../Content/Banhdacua";
import Banhmicay from "../Content/Banhmicay";
import Che from "../Content/Che";
import Tatca from "../Content/Tatca";
import { TbMapPin } from "react-icons/tb";
import { Link } from "react-router-dom";

const FoodMenu = () => {
  const [selected, setSelected] = useState(Tatca);
  //   const [category, setCategory] = useState("Tatca");
  //   const handleSelected = (evt) => {

  //   }
  return (
    <section id="food-menu-container">
      <div className="food-menu-nav">
        <input
          className="food-menu-searchbar"
          placeholder="Tìm kiếm..."
          type="text"
        />
        <div className="food-menu-category">
          <button
            onClick={() => setSelected(Tatca)}
            className={`food-category ${selected === Tatca && "active"}`}
          >
            Tất cả
          </button>
          <button
            onClick={() => setSelected(Banhbeo)}
            className={`food-category ${selected === Banhbeo && "active"}`}
          >
            Bánh bèo
          </button>
          <button
            onClick={() => setSelected(Banhdacua)}
            className={`food-category ${selected === Banhdacua && "active"}`}
          >
            Bánh đa cua
          </button>
          <button
            onClick={() => setSelected(Banhmicay)}
            className={`food-category ${selected === Banhmicay && "active"}`}
          >
            Bánh mỳ cay
          </button>
          <button
            onClick={() => setSelected(Che)}
            className={`food-category ${selected === Che && "active"}`}
          >
            Chè
          </button>
        </div>
      </div>
      <div className="food-menu">
        {selected.map((item, index) => {
          return (
            <div className="food-container" key={item.id}>
              <div className="food">
                <div className="food-image-container">
                  <img
                    className="food-image"
                    src={item.image}
                    alt={item.title}
                  />
                  <Link className="read-more" to={`/${item.id}`}>Xem chi tiết ►</Link>
                </div>
                <dir className="food-description">
                  <h1 className="food-title">{item.title}</h1>
                  <a href={item.map} target="blank" className="food-location">
                    <TbMapPin /> {item.location}
                  </a>
                  <button className="add-todo">+ Thêm vào todo list</button>
                </dir>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FoodMenu;
