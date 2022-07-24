import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const ChangeEmail = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [pw, setPw] = useState("");
  const [pwError, setPwError] = useState(false);
  const [reEmail, setReEmail] = useState("");
  const [reEmailError, setReEmailError] = useState(false);
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
  const handleReEmail = (evt) => {
    setReEmail(evt.target.value);
    setErrorStatus(false);
    setReEmailError(false);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const currentUser = localStorage.getItem("savedUser");
    const userProfile = JSON.parse(localStorage.getItem(currentUser));
    if (email === userProfile.email) {
      setError("Không thể trùng email cũ");
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
    if (pw !== userProfile.pw) {
      setError("Bạn đã nhập sai mật khẩu");
      setErrorStatus(true);
      setPwError(true);
      return;
    }
    if (email !== reEmail) {
      setError("Email xác nhận chưa khớp");
      setErrorStatus(true);
      setReEmailError(true);
      return;
    }
    const updatedUserProfile = JSON.parse(localStorage.getItem(currentUser));
    updatedUserProfile.email = email;
    localStorage.removeItem(userProfile.email)
    const userEmailProfile = {
        user: currentUser,
        pw: pw,
    }
    localStorage.setItem(currentUser, JSON.stringify(updatedUserProfile));
    localStorage.setItem(email, JSON.stringify(userEmailProfile));
    MySwal.fire({
      title: <h1>Done</h1>,
      html: <h2>Đổi email thành công</h2>,
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
        <h1>Thay đổi email</h1>
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
          onChange={handleEmail}
          className={`user ${emailError && "active"}`}
          name="email"
          type="email"
          placeholder="Nhập địa chỉ email mới"
          required
        />
        <input
          onChange={handleReEmail}
          className={`user ${reEmailError && "active"}`}
          name="email"
          type="email"
          placeholder="Xác nhận lại địa chỉ email"
          required
        />
        <div className={`error ${errorStatus && "active"}`}>{error}</div>
        <button type="submit">OKE</button>
        <Link to='/userprofile'>Cancel</Link>
      </form>
    </div>
  );
};

export default ChangeEmail;
