import React from "react";
import { useParams } from "react-router-dom";
import "./FoodDetail.css";
import Tatca from "../Content/Tatca";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { LoggedUser } from "../../index";
import { useContext, useState } from "react";

const MySwal = withReactContent(Swal);

const FoodDetail = () => {
  const loggedUser = useContext(LoggedUser);
  const todoList = () => {
    let addedTodoList = [];
    if (!loggedUser) {
      return;
    }
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
          <button
            onClick={() => handleAddTodo(seletedFood.id)}
            className={
              myTodoList.includes(seletedFood.id) ? "remove-todo" : "add-todo"
            }
          >
            {myTodoList.includes(seletedFood.id)
              ? "Đã có trong todo list"
              : "+ Thêm vào todo list"}
          </button>
        </div>
        <p className="food-detail-description">{seletedFood.description}</p>
        <iframe
          title="map"
          className="food-detail-location"
          src={seletedFood.src}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default FoodDetail;
