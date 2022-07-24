import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Mytodolist.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegSave } from "react-icons/fa";
import { AiOutlineUndo } from "react-icons/ai";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Mytodolist = () => {
  const loggedUser = JSON.parse(
    localStorage.getItem(localStorage.getItem("savedUser"))
  );
  const [myTodoList, setMyTodoList] = useState([...loggedUser.todoList]);
  const handleTodoStatus = (e) => {
    const arr = myTodoList;
    arr[e].status = !arr[e].status;
    setMyTodoList([...arr]);
  };
  const handleDeleteTodo = (e) => {
    MySwal.fire({
      title: <h1>Xóa khỏi todo list</h1>,
      html: <h2>Xóa món ăn này khỏi todo list ?</h2>,
      confirmButtonText: "Xóa",
      confirmButtonColor: "#e74c3c",
      showDenyButton: true,
      denyButtonText: `Hủy`,
      denyButtonColor: "#34495e",
      icon: "warning",
    }).then((result) => {
      if (result.isConfirmed) {
        setMyTodoList(myTodoList.filter((item) => item.id !== e));
      }
    });
  };
  const handleSaveTodo = () => {
    MySwal.fire({
      title: <h1>Lưu todo list</h1>,
      html: <h2>Lưu các thay đổi ?</h2>,
      confirmButtonText: "Oke",
      confirmButtonColor: "#27ae60",
      showDenyButton: true,
      denyButtonText: `Hủy`,
      denyButtonColor: "#e74c3c",
      icon: "warning",
    }).then((result) => {
      if (result.isConfirmed) {
        loggedUser.todoList = myTodoList;
        localStorage.setItem(
          localStorage.getItem("savedUser"),
          JSON.stringify(loggedUser)
        );
        MySwal.fire({
          title: <h1>Done</h1>,
          html: <h2>Lưu thành công</h2>,
          confirmButtonText: "Oke la",
          confirmButtonColor: "#27ae60",
          icon: "success",
        });
      }
    });
  };
  const handleUndoTodo = () => {
    MySwal.fire({
      title: <h1>Hủy thay đổi</h1>,
      html: <h2>Bạn có muốn hủy mọi thay đổi ?</h2>,
      confirmButtonText: "Oke",
      confirmButtonColor: "#27ae60",
      showDenyButton: true,
      denyButtonText: `Nope`,
      denyButtonColor: "#e74c3c",
      icon: "warning",
    }).then((result) => {
      if (result.isConfirmed) {
        setMyTodoList([...loggedUser.todoList]);
      }
    });
  };
  return (
    <section id="mytodolist">
      <div
        className="todolist-container"
      >
        <div
          className={`save-undo ${
            JSON.stringify(myTodoList) !== JSON.stringify(loggedUser.todoList)
              ? "active"
              : ""
          }`}
        >
          <button onClick={handleSaveTodo} className="save-todolist">
            <FaRegSave size={30} />
          </button>
          <button onClick={handleUndoTodo} className="undo-todolist">
            <AiOutlineUndo size={30} />
          </button>
        </div>
        <div className="todo-title">MY TODO LIST</div>
        {JSON.stringify(myTodoList) === "[]" ? (
          <p>Hmmmm chưa có gì cả @@</p>
        ) : (
          myTodoList.map((item, index) => {
            return (
              <div
                className={`todo ${item.status === true ? "done" : ""}`}
                key={item.id}
              >
                <div className="todo-content">
                  <input
                    checked={item.status}
                    type="checkbox"
                    className="todo-status"
                    onChange={() => handleTodoStatus(index)}
                  />
                  <div className="todo-image-container">
                    <img
                      className="todo-image"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <div
                    className={`todo-food-title ${
                      item.status === true ? "done" : ""
                    }`}
                  >
                    {item.title}
                  </div>
                </div>
                <Link className="todo-read-more" to={`/fooddetail/${item.id}`}>
                  Xem chi tiết ►
                </Link>
                <button
                  onClick={() => handleDeleteTodo(item.id)}
                  className="delete-todo"
                >
                  <RiDeleteBin6Line size={20} />
                </button>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default Mytodolist;
