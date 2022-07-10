import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';

const Signup = () => {
  const [user, setUser] = useState("");
  const [userError, setUserError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [pw, setPw] = useState("");
  const [pwError, setPwError] = useState(false);
  const [rePw, setRePw] = useState("");
  const [rePwError, setRePwError] = useState(false);
  const [error, setError] = useState("error");
  const [errorStatus, setErrorStatus] = useState(false);
  const handleUser = (evt) => {
    setUser(evt.target.value);
    setErrorStatus(false);
    setUserError(false);
  };
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
  function checkIfStringHasSpecialChar(string) {
    let spChars = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (spChars.test(string)) {
      return true;
    } else {
      return false;
    }
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (checkIfStringHasSpecialChar(user) == true) {
      setError("Tên người dùng không được chứa các ký tự đặc biệt");
      setErrorStatus(true);
      setUserError(true);
      return;
    };
    if (pw.includes(" ")) {
      setError("Mật khẩu không được có dấu cách");
      setErrorStatus(true);
      setPwError(true);
      return;
    };
    if (pw !== rePw) {
      setError("Mật khẩu xác nhận chưa khớp");
      setErrorStatus(true);
      setRePwError(true);
      return;
    };
    if (localStorage.getItem(user)) {
      setError("Tên tài khoản này đã tồn tại");
      setErrorStatus(true);
      setUserError(true);
      return;
    };
    if (localStorage.getItem(email)) {
      setError("Địa chỉ email này đã được sử dụng");
      setErrorStatus(true);
      setEmailError(true);
      return;
    };
    const userProfile = {
      email: email.value,
      pw: pw.value,
    };
    const userEmailProfile = {
      user: user.value,
      pw: pw.value,
    };
    localStorage.setItem(user.value, JSON.stringify(userProfile));
    localStorage.setItem(email.value, JSON.stringify(userEmailProfile));
  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Đăng ký</h1>
        <input
          onChange={handleUser}
          className={`user ${userError && "active"}`}
          name="user"
          type="text"
          placeholder="Nhập tên tài khoản"
        />
        <input
          onChange={handleEmail}
          className={`user ${emailError && "active"}`}
          name="email"
          type="email"
          placeholder="Nhập địa chỉ email"
        />
        <input
          onChange={handlePw}
          className={`user ${pwError && "active"}`}
          name="pw"
          type="password"
          placeholder="Nhập mật khẩu"
        />
        <input
          onChange={handleRepw}
          className={`user ${rePwError && "active"}`}
          name="repw"
          type="password"
          placeholder="Nhập lại mật khẩu"
        />
        <div className={`error ${errorStatus && "active"}`}>{error}</div>
        <p>
          Bằng việc đăng ký bạn đã chấp nhận với{" "}
          <a>điều khoản sử dụng và chính sách bảo mật</a> của chúng tôi
        </p>
        <button type="submit">Đăng ký</button>
        <p>
          Đã có tài khoản ? <Link to="/login">Đăng nhập</Link>
        </p>
      </form>
      {/* <ToastContainer/> */}
    </div>
  );
};

export default Signup;
