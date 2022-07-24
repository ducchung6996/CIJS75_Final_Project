import React from "react";
import { Link } from "react-router-dom";
import "./Userprofile.css";
import { FiEdit3, FiEdit } from "react-icons/fi";
import { LoggedUser } from "../../index";
import { useContext } from "react";

const Userprofile = () => {
  const loggedUser = useContext(LoggedUser);
  function formatDate(input) {
    var datePart = input.match(/\d+/g),
      year = datePart[0].substring(0), // get only two digits
      month = datePart[1],
      day = datePart[2];

    return day + "/" + month + "/" + year;
  }
  return (
    <div id="userprofile">
      <div className="user-profile-container">
        <Link to="/changeuserprofile" className="edit-user-profile">
          <FiEdit />
        </Link>
        <h1>Thông tin tài khoản</h1>
        <div className="user-avatar-container">
          <img
            className="user-avatar"
            src={loggedUser ? loggedUser.userAvatar : "images/DefaultUser.png"}
            alt="User"
          />
        </div>
        <h1>{localStorage.getItem('savedUser')}</h1>
        <div className="user-infor">
          Tên người dùng: {loggedUser && loggedUser.userName}
        </div>
        <div className="user-infor">
          Ngày sinh: {loggedUser.dob && formatDate(loggedUser.dob)}
        </div>
        <div className="user-infor">
          Địa chỉ email: {loggedUser && loggedUser.email}
        </div>
        <Link className="security-change" to="/changepw">
          Đổi mật khẩu <FiEdit3 />
        </Link>
        <Link className="security-change" to="/changeemail">
          Đổi địa chỉ email <FiEdit3 />
        </Link>
      </div>
    </div>
  );
};

export default Userprofile;
