import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LoggedUser } from "../..";
import "./Mytodolist.css";

const Mytodolist = () => {
  const loggedUser = useContext(LoggedUser);
  const [myTodoList, setMyTodoList] = useState(loggedUser.todoList);
  const handleTodoStatus = (e) => {
    const arr = myTodoList;
    arr[e].status = !arr[e].status;
    setMyTodoList(arr);
  }
  return (
    <section id="mytodolist">
      <div className="todolist-container">
        <button className="save-todolist">Lưu</button>
        <div className="todo-title">MY TODO LIST</div>
        {myTodoList.map((item, index) => {
          return (
            <div className={item.status === true ? "done" : "todo"} key={item.id}>
              <div className="todo-content">
                <input type="checkbox" className="todo-status" onChange={() => handleTodoStatus(index)}/>
                <div className="todo-image-container">
                  <img
                    className="todo-image"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="todo-food-title">{item.title}</div>
              </div>
              <Link className="todo-read-more" to={`/${item.id}`}>
                Xem chi tiết ►
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Mytodolist;
