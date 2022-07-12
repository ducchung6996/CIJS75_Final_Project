import React from "react";
import { useParams } from "react-router-dom";
import "./FoodDetail.css";
import Tatca from "../Content/Tatca";

const FoodDetail = () => {
  const { foodid } = useParams();
  const seletedFood = Tatca[foodid];
  return (
    <section id="food-detail">
      <div className="food-infor">
        <h1 className="food-detail-title">{seletedFood.title}</h1>
        <div className="detail-image-container">
          <img
            className="food-detail-image"
            src={seletedFood.image}
            alt={seletedFood.title}
          />
          <button className="add-todo">+ Thêm vào todo list</button>
        </div>
        <p className="food-detail-description">{seletedFood.description}</p>
        <iframe className="food-detail-location" src={seletedFood.src} referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  );
};

export default FoodDetail;
