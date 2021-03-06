import React, { useContext, useState, useEffect } from "react";
import Slider from "react-slick";
import "./Slider.css";
import { TbMapPin } from "react-icons/tb";
import { Link } from "react-router-dom";
import { SavedUser } from "../../App";
import FoodMenu from "../FoodMenu/FoodMenu";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { MoonLoader } from "react-spinners";

const MySwal = withReactContent(Swal);

const SliderSection = () => {
  const [foodMenu, setFoodMenu] = useState([]);
  const [recommendFood, setReconmmendFood] = useState([]);
  const [loadError, setLoadError] = useState(false);
  function createRandomFood(a) {
    let arr = [];
    for (let i = 0; i < a.length; i++) {
      arr.push(i);
    }
    let result = [];
    for (let i = 0; i < 8; i++) {
      const random = Math.floor(Math.random() * (a.length - i));
      result.push(a[random]);
      arr[random] = arr[a.length - i];
    }
    return result;
  }
  useEffect(() => {
    async function fetchData() {
      try {
        let data = await (
          await fetch(
            `https://62e5e710de23e26379247926.mockapi.io/api/food-menu`
          )
        ).json();
        setReconmmendFood(createRandomFood(data));
        setFoodMenu(data);
      } catch {
        setLoadError(true);
      }
    }
    fetchData();
  }, []);
  const { savedUser } = useContext(SavedUser);
  const todoList = () => {
    if (!savedUser) {
      return;
    }
    let addedTodoList = [];
    for (let item of savedUser.todoList) {
      addedTodoList.push(item.id);
    }
    return addedTodoList;
  };
  const [myTodoList, setMyTodoList] = useState(todoList());
  const handleAddTodo = (a) => {
    if (!savedUser) {
      MySwal.fire({
        title: <h1>Bạn chưa đăng nhập</h1>,
        html: <h2>Bạn cần đăng nhập tài khoản để sử dụng chức năng này</h2>,
        confirmButtonText: "Đi tới đăng nhập",
        confirmButtonColor: "#2980b9",
        showDenyButton: true,
        denyButtonText: `Hủy`,
        denyButtonColor: "#e74c3c",
        icon: "warning",
      }).then((result) => {
        if (result.isConfirmed) {
          window.open(process.env.PUBLIC_URL + "/#/login", "_self");
        }
      });
      return;
    }
    for (let item of savedUser.todoList) {
      if (item.id === a) {
        MySwal.fire({
          title: <h1>Đã có trong todo list</h1>,
          html: <h2>Xóa món ăn này khỏi todo list ?</h2>,
          confirmButtonText: "Xóa",
          confirmButtonColor: "#e74c3c",
          showDenyButton: true,
          denyButtonText: `Hủy`,
          denyButtonColor: "#34495e",
          icon: "warning",
        }).then((result) => {
          if (result.isConfirmed) {
            const userProfile = savedUser;
            userProfile.todoList = userProfile.todoList.filter(
              (item) => item.id !== a
            );
            localStorage.setItem(
              localStorage.getItem("savedUser"),
              JSON.stringify(userProfile)
            );
            setMyTodoList(myTodoList.filter((item) => item !== a));
          }
        });
        return;
      }
    }
    if (myTodoList.length === 10) {
      Swal.fire("Không thể thêm", "Đã đạt số lượng tối đa", "warning");
      return;
    }
    const userProfile = savedUser;
    userProfile.todoList = [...userProfile.todoList, foodMenu[a]];
    localStorage.setItem(
      localStorage.getItem("savedUser"),
      JSON.stringify(userProfile)
    );
    MySwal.fire({
      title: <h1>Done</h1>,
      html: <h2>Đã thêm vào Todo list</h2>,
      confirmButtonText: "Oke la",
      confirmButtonColor: "#27ae60",
      icon: "success",
    });
    setMyTodoList([...myTodoList, a]);
  };
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
    focusOnSelect: true,
  };
  return (
    <>
      <section id="slider">
        <div className="slider-title">HÔM NAY ĂN GÌ ?</div>
        {loadError ? (
          <div className="loading-content">Lỗi kết nối</div>
        ) : JSON.stringify(foodMenu) === "[]" ? (
          <div className="loading-content">
            <MoonLoader color={"#e18936"} speedMultiplier={0.5} />
          </div>
        ) : (
          <Slider {...settings}>
            {recommendFood.map((item, index) => {
              return (
                <div className="slider-item" key={item.id}>
                  <div className="slider-item-container">
                    <div className="slider-image-container">
                      <img
                        className="slider-image"
                        src={item.image}
                        alt={index}
                      />
                      <Link className="read-more" to={`/fooddetail/${item.id}`}>
                        Xem chi tiết ►
                      </Link>
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
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        )}
      </section>
      <FoodMenu
        myTodoList={myTodoList}
        handleAddTodo={handleAddTodo}
        foodMenu={foodMenu}
      />
    </>
  );
};

export default SliderSection;
