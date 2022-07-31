import React, { useState, useEffect } from "react";
import "./FoodMenu.css";
import { TbMapPin } from "react-icons/tb";
import { Link } from "react-router-dom";
import { MoonLoader } from "react-spinners";

const FoodMenu = ({ myTodoList, handleAddTodo, foodMenu }) => {
  const [selected, setSelected] = useState("tatca");
  const [foodList, setFoodList] = useState(foodMenu);
  const [keyword, setKeyWord] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setFoodList(foodMenu);
  }, [foodMenu]);
  const handleSelected = (e) => {
    if (JSON.stringify(foodMenu) === "[]") {
      return;
    }
    setSelected(e);
    if (e === "tatca") {
      setFoodList(foodMenu);
      return;
    }
    let arr = [];
    for (let i = 0; i < 20; i++) {
      if (foodMenu[i].category === e) {
        arr = [...arr, foodMenu[i]];
      }
    }
    setFoodList([...arr]);
  };
  useEffect(() => {
    if (JSON.stringify(foodMenu) === "[]") {
      return;
    }
    let arr = [];
    if (keyword === "") {
      setSearchResult([...arr]);
      return;
    }
    for (let item of foodList) {
      if (
        item.title
          .toLocaleLowerCase()
          .replaceAll(" ", "")
          .includes(keyword.toLocaleLowerCase())
      ) {
        arr = [...arr, item];
      }
    }
    setSearchResult([...arr]);
  }, [keyword, selected]);
  const handleSearch = (e) => {
    setKeyWord(e.target.value.replaceAll(" ", ""));
  };
  return (
    <section id="food-menu-container">
      <div className="food-menu-nav">
        <input
          onChange={handleSearch}
          className="food-menu-searchbar"
          placeholder="Tìm kiếm..."
          type="text"
        />
        <div className="food-menu-category">
          <button
            onClick={() => handleSelected("tatca")}
            className={`food-category ${selected === "tatca" && "active"}`}
          >
            Tất cả
          </button>
          <button
            onClick={() => handleSelected("banhbeo")}
            className={`food-category ${selected === "banhbeo" && "active"}`}
          >
            Bánh bèo
          </button>
          <button
            onClick={() => handleSelected("banhdacua")}
            className={`food-category ${selected === "banhdacua" && "active"}`}
          >
            Bánh đa cua
          </button>
          <button
            onClick={() => handleSelected("banhmicay")}
            className={`food-category ${selected === "banhmicay" && "active"}`}
          >
            Bánh mỳ cay
          </button>
          <button
            onClick={() => handleSelected("che")}
            className={`food-category ${selected === "che" && "active"}`}
          >
            Chè
          </button>
        </div>
      </div>
      <div className="food-menu">
        {JSON.stringify(foodMenu) === "[]" ? (
          <div className="loading-content">
            <MoonLoader color={"#e18936"} speedMultiplier={0.5} size={100} />
          </div>
        ) : keyword !== "" && JSON.stringify(searchResult) === "[]" ? (
          <p className="no-result">Không có kết quả</p>
        ) : (
          (JSON.stringify(searchResult) !== "[]" ? searchResult : foodList).map(
            (item) => {
              return (
                <div className="food-container" key={item.id}>
                  <div className="food">
                    <div className="food-image-container">
                      <img
                        className="food-image"
                        src={item.image}
                        alt={item.title}
                      />
                      <Link className="read-more" to={`/fooddetail/${item.id}`}>
                        Xem chi tiết ►
                      </Link>
                    </div>
                    <dir className="food-description">
                      <h1 className="food-title">{item.title}</h1>
                      <a
                        href={item.map}
                        target="blank"
                        className="food-location"
                      >
                        <TbMapPin /> {item.location}
                      </a>
                      <button
                        onClick={() => handleAddTodo(item.id)}
                        className={
                          !myTodoList
                            ? "add-todo"
                            : myTodoList.includes(item.id)
                            ? "remove-todo"
                            : "add-todo"
                        }
                      >
                        {!myTodoList
                          ? "+ Thêm vào todo list"
                          : myTodoList.includes(item.id)
                          ? "Đã có trong todo list"
                          : "+ Thêm vào todo list"}
                      </button>
                    </dir>
                  </div>
                </div>
              );
            }
          )
        )}
      </div>
    </section>
  );
};

export default FoodMenu;
