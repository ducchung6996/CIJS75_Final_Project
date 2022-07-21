import React from "react";
import Slider from "react-slick";
import "./Slider.css";
import { TbMapPin } from "react-icons/tb";
import Tatca from "../Content/Tatca";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const SliderSection = () => {
  const loggedUser = JSON.parse(
    localStorage.getItem(localStorage.getItem("savedUser"))
  );
  function createRandomFood(a) {
    let arr = [];
    for (let i = 1; i <= a.length; i++) {
      arr.push(i);
    }

    let result = [];

    for (let i = 1; i <= 8; i++) {
      const random = Math.floor(Math.random() * (a.length - i));
      result.push(a[random]);
      arr[random] = arr[a.length - i];
    }

    return result;
  }
  let recommendFood = createRandomFood(Tatca);
  const handleAddTodo = (a) => {
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
    const userProfile = loggedUser;
    userProfile.todoList = [...userProfile.todoList, Tatca[a]];
    localStorage.setItem(localStorage.getItem("savedUser"), JSON.stringify(userProfile));
    console.log(userProfile.todoList);
    MySwal.fire({
      title: <h1>Done</h1>,
      html: <h2>Đã thêm vào Todo list</h2>,
      confirmButtonText: "Oke la",
      confirmButtonColor: "#27ae60",
      icon: "success",
    });
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
    <section id="slider">
      <div className="slider-title">HÔM NAY ĂN GÌ ?</div>
      <Slider {...settings}>
        {recommendFood.map((item, index) => {
          return (
            <div className="slider-item" key={item.id}>
              <div className="slider-item-container">
                <div className="slider-image-container">
                  <img className="slider-image" src={item.image} alt={index} />
                  <Link className="read-more" to={`/${item.id}`}>
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
                    <button onClick={() => handleAddTodo(item.id)} className="add-todo">
                      + Thêm vào todo list
                    </button>
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
