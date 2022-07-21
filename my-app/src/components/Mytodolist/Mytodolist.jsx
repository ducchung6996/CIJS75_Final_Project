import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LoggedUser } from "../..";
import "./Mytodolist.css";

const Mytodolist = () => {
  const loggedUser = useContext(LoggedUser);
  const [myTodoList, setMyTodoList] = useState(loggedUser.todoList);
  console.log(myTodoList);
  return (
    <section id="mytodolist">
      <div className="todolist-container">
        <button className="save-todolist">Lưu</button>
        <div className="todo-title">MY TODO LIST</div>
        {myTodoList.map((item) => {
          return (
            <div className={`todo ${item.status && "done"}`} key={item.id}>
              <div className="todo-content">
                <input type="checkbox" className="todo-status" />
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
