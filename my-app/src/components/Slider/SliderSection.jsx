import React, { useRef } from "react";
import Slider from "react-slick";
import "./Slider.css";
import { TbMapPin } from "react-icons/tb";
import Tatca from "../Content/Tatca";
import { Link } from "react-router-dom";
import { LoggedUser } from "../../index";
import { useContext, useState } from "react";
import FoodMenu from '../FoodMenu/FoodMenu';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const SliderSection = () => {
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
  const recommendFood = useRef(createRandomFood(Tatca)).current;
  const loggedUser = useContext(LoggedUser);
  const todoList = () => {
    let addedTodoList = [];
    for (let item of loggedUser.todoList) {
      addedTodoList.push(item.id);
    }
    return addedTodoList;
  };
  const [myTodoList, setMyTodoList] = useState(todoList());
  const handleAddTodo = (a) => {
    for (let item of loggedUser.todoList) {
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
            const userProfile = loggedUser;
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
    if (!loggedUser) {
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
          window.open("/login", "_self");
        }
      });
      return;
    }
    if (myTodoList.length === 10) {
      Swal.fire(
        'Không thể thêm',
        'Đã đạt số lượng tối đa',
        'warning'
      );
      return;
    }
    const userProfile = loggedUser;
    userProfile.todoList = [...userProfile.todoList, Tatca[a]];
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
                          myTodoList.includes(item.id)
                            ? "remove-todo"
                            : "add-todo"
                        }
                      >
                        {myTodoList.includes(item.id)
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
      </section>
      <FoodMenu myTodoList={myTodoList} setMyTodoList={setMyTodoList} handleAddTodo={handleAddTodo}/>
    </>
  );
};

export default SliderSection;
