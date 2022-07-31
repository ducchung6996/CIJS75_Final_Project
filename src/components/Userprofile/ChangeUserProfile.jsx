import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Userprofile.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { SavedUser } from "../../App";

const MySwal = withReactContent(Swal);

const ChangeUserProfile = () => {
  const {savedUser, setSavedUser} = useContext(SavedUser);
  const [userName, setUserName] = useState(savedUser && savedUser.userName);
  const [userNameError, setUserNameError] = useState(false);
  const [userDob, setUserDob] = useState(savedUser && savedUser.dob);
  const [userAvatar, setUserAvatar] = useState(
    savedUser && savedUser.userAvatar
  );
  const [error, setError] = useState("error");
  const [errorStatus, setErrorStatus] = useState(false);
  const handleUserName = (evt) => {
    setUserName(evt.target.value);
    setErrorStatus(false);
    setUserNameError(false);
  };
  const handleUserDob = (evt) => {
    setUserDob(evt.target.value);
  };
  function handleUserAvatar(evt) {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setUserAvatar(reader.result);
    });
    reader.readAsDataURL(evt.target.files[0]);
  }
  function checkIfStringHasSpecialChar(string) {
    let spChars = /[!@#$%^&*()_+-=[\]{};':"|,.<>/?]+/;
    if (spChars.test(string)) {
      return true;
    } else {
      return false;
    }
  }
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (checkIfStringHasSpecialChar(userName) === true) {
      setError("Tên người dùng không được chứa các ký tự đặc biệt");
      setErrorStatus(true);
      setUserNameError(true);
      return;
    }
    const updatedUserProfile = JSON.parse(localStorage.getItem(localStorage.getItem('savedUser')));
    updatedUserProfile.userName = userName;
    updatedUserProfile.dob = userDob;
    updatedUserProfile.userAvatar = userAvatar;
    if (JSON.stringify(updatedUserProfile) === localStorage.getItem(localStorage.getItem('savedUser'))) {
      MySwal.fire({
        title: <h1>Không có thay đổi</h1>,
        html: <p>Bạn chưa thay đổi gì cả @@</p>,
        icon: 'warning'
      });
      return;
    }
    localStorage.setItem(localStorage.getItem('savedUser'), JSON.stringify(updatedUserProfile));
    MySwal.fire({
      title: <h1>Done</h1>,
      html: <h2>Đổi thông tin người dùng thành công</h2>,
      confirmButtonText: "Oke la",
      confirmButtonColor: "#27ae60",
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        setSavedUser(updatedUserProfile);
        window.open(process.env.PUBLIC_URL + "/#/userprofile", "_self");
      } else {
        setSavedUser(updatedUserProfile);
        window.open(process.env.PUBLIC_URL + "/#/userprofile", "_self");
      }
    });
  };

  return (
    <div id="userprofile">
      <form className="user-profile-container" onSubmit={handleSubmit}>
        <h1>Sửa thông tin tài khoản</h1>
        <div className="user-avatar-container">
          <img
            className="user-avatar"
            src={
              userAvatar
                ? userAvatar
                : savedUser
                ? savedUser.userAvatar
                : "images/DefaultUser.png"
            }
            alt="User"
          />
        </div>
        <label className="upload-avatar" htmlFor="upload-avatar">
          Tải lên avatar mới
        </label>
        <input
          onChange={handleUserAvatar}
          name="upload-avatar"
          id="upload-avatar"
          type="file"
        />
        <h1>{savedUser && savedUser.user}</h1>
        <label className="input-label" htmlFor="userName">
          Tên người dùng
        </label>
        <input
          onChange={handleUserName}
          className={`user ${userNameError && "active"}`}
          name="userName"
          type="text"
          placeholder={savedUser && savedUser.userName}
          minLength={1}
          maxLength={24}
        />
        <label className="input-label" htmlFor="userDob">
          Nhập ngày sinh
        </label>
        <input
          id="userDob"
          onChange={handleUserDob}
          className="user"
          name="userDob"
          type="date"
          defaultValue={savedUser && savedUser.dob}
        />
        <div className={`error ${errorStatus && "active"}`}>{error}</div>
        <button className="submit-btn" type="submit">
          OKE
        </button>
        <Link className="cancel" to="/userprofile">
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default ChangeUserProfile;