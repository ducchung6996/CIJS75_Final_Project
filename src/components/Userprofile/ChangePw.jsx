import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const ChangePw = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [pw, setPw] = useState("");
  const [pwError, setPwError] = useState(false);
  const [rePw, setRePw] = useState("");
  const [rePwError, setRePwError] = useState(false);
  const [error, setError] = useState("error");
  const [errorStatus, setErrorStatus] = useState(false);
  const handleEmail = (evt) => {
    setEmail(evt.target.value);
    setErrorStatus(false);
    setEmailError(false);
  };
  const handlePw = (evt) => {
    setPw(evt.target.value);
    setErrorStatus(false);
    setPwError(false);
  };
  const handleRepw = (evt) => {
    setRePw(evt.target.value);
    setErrorStatus(false);
    setRePwError(false);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const currentUser = localStorage.getItem("savedUser");
    const userProfile = JSON.parse(localStorage.getItem(currentUser));
    if (email !== userProfile.email) {
      setError("Bạn đã nhập sai email");
      setErrorStatus(true);
      setEmailError(true);
      return;
    }
    if (pw.includes(" ")) {
      setError("Mật khẩu không được có dấu cách");
      setErrorStatus(true);
      setPwError(true);
      return;
    }
    if (pw === userProfile.pw) {
      setError("Mật khẩu mới không thể trùng với mật khẩu cũ");
      setErrorStatus(true);
      setPwError(true);
      return;
    }
    if (pw !== rePw) {
      setError("Mật khẩu xác nhận chưa khớp");
      setErrorStatus(true);
      setRePwError(true);
      return;
    }
    const updatedUserProfile = JSON.parse(localStorage.getItem(currentUser));
    updatedUserProfile.pw = pw;
    const userEmailProfile = JSON.parse(localStorage.getItem(email));
    userEmailProfile.pw = pw;
    localStorage.setItem(currentUser, JSON.stringify(updatedUserProfile));
    localStorage.setItem(email, JSON.stringify(userEmailProfile));
    MySwal.fire({
      title: <h1>Done</h1>,
      html: <h2>Đổi mật khẩu thành công</h2>,
      confirmButtonText: "Oke la",
      confirmButtonColor: "#27ae60",
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        window.open("/userprofile", "_self");
      } else {
        window.open("/userprofile", "_self");
      }
    });
    document.forms[0].reset();
  };
  return (
    <div className="login">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Thay đổi mật khẩu</h1>
        <input
          onChange={handleEmail}
          className={`user ${emailError && "active"}`}
          name="email"
          type="email"
          placeholder="Nhập địa chỉ email"
          required
        />
        <input
          onChange={handlePw}
          className={`user ${pwError && "active"}`}
          name="pw"
          type="password"
          placeholder="Nhập mật khẩu"
          minLength={6}
          maxLength={24}
          required
        />
        <input
          onChange={handleRepw}
          className={`user ${rePwError && "active"}`}
          name="repw"
          type="password"
          placeholder="Nhập lại mật khẩu"
          minLength={6}
          maxLength={24}
          required
        />
        <div className={`error ${errorStatus && "active"}`}>{error}</div>
        <button type="submit">OKE</button>
        <Link to='/userprofile'>Cancel</Link>
      </form>
    </div>
  );
};

export default ChangePw;
