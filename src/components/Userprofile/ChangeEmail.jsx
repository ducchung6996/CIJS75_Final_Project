import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { SavedUser } from "../../App";

const MySwal = withReactContent(Swal);

const ChangeEmail = () => {
  const {savedUser, setSavedUser} = useContext(SavedUser);
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
    if (email === savedUser.email) {
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
    if (pw !== savedUser.pw) {
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
    const updatedUserProfile = savedUser;
    updatedUserProfile.email = email;
    localStorage.removeItem(savedUser.email);
    const userEmailProfile = {
        user: localStorage.getItem("savedUser"),
        pw: pw,
    }
    localStorage.setItem(localStorage.getItem("savedUser"), JSON.stringify(updatedUserProfile));
    localStorage.setItem(email, JSON.stringify(userEmailProfile));
    MySwal.fire({
      title: <h1>Done</h1>,
      html: <h2>Đổi email thành công</h2>,
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
