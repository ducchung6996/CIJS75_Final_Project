import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./FoodDetail.css";
import Tatca from "../Content/Tatca";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { SavedUser } from "../../App";
import { useContext, useState } from "react";
import { MoonLoader } from "react-spinners";

const MySwal = withReactContent(Swal);

const FoodDetail = () => {
  const { foodid } = useParams();
  const [loadError, setLoadError] = useState(false);
  const [seletedFood, setSelectedFood] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        let data = await (
          await fetch(
            `https://62e5e710de23e26379247926.mockapi.io/api/food-menu/${foodid}`
          )
        ).json();
        setSelectedFood(data);
      } catch {
        setLoadError(true);
      }
    }
    fetchData();
  }, []);
  

  const { savedUser } = useContext(SavedUser);
  const todoList = () => {
    let addedTodoList = [];
    if (!savedUser) {
      return;
    }
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
    const userProfile = savedUser;
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
  return (
    <section id="food-detail">
      {JSON.stringify(seletedFood) === "{}" ? (
        <div className="loading-content">
          <MoonLoader color={"#e18936"} speedMultiplier={0.5} />
        </div>
      ) : (
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
                !myTodoList
                  ? "add-todo"
                  : myTodoList.includes(seletedFood.id)
                  ? "remove-todo"
                  : "add-todo"
              }
            >
              {!myTodoList
                ? "+ Thêm vào todo list"
                : myTodoList.includes(seletedFood.id)
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
      )}
    </section>
  );
};

export default FoodDetail;
