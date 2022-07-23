import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Login = () => {
  const [user, setUser] = useState("");
  const [userError, setUserError] = useState(false);
  const [pw, setPw] = useState("");
  const [pwError, setPwError] = useState(false);
  const [error, setError] = useState("error");
  const [errorStatus, setErrorStatus] = useState(false);
  const handleUser = (evt) => {
    setUser(evt.target.value);
    setErrorStatus(false);
    setUserError(false);
  };
  const handlePw = (evt) => {
    setPw(evt.target.value);
    setErrorStatus(false);
    setPwError(false);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const userProfile = JSON.parse(localStorage.getItem(user));
    if (!localStorage.getItem(user)) {
      setError("Tài khoản này không tồn tại");
      setErrorStatus(true);
      setUserError(true);
      return;
    }
    if (pw !== userProfile.pw) {
      setError("Bạn đã nhập sai mật khẩu");
      setErrorStatus(true);
      setPwError(true);
      return;
    }
    localStorage.setItem("savedUser", userProfile.user ? userProfile.user : user)
    MySwal.fire({
      title: <h1>Đăng nhập thành công</h1>,
      html: <h2>Chào mừng {userProfile.user ? userProfile.user : user}</h2>,
      confirmButtonText: "Oke la",
      confirmButtonColor: "#27ae60",
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        window.open("/", "_self");
      } else {
        window.open("/", "_self");
      }
    });
    document.forms[0].reset();
  };
  return (
    <div className="login">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Đăng nhập</h1>
        <label className="input-label" htmlFor="user">Tên tài khoản</label>
        <input
          onChange={handleUser}
          className={`user ${userError && "active"}`}
          name="user"
          type="text"
          placeholder="Nhập tên tài khoản hoặc email"
          minLength={6}
          maxLength={18}
          required
        />
        <label className="input-label" htmlFor="pw">Mật khẩu</label>
        <input
          onChange={handlePw}
          className={`user ${pwError && "active"}`}
          name="pw"
          type="password"
          placeholder="Nhập mật khẩu"
          minLength={6}
          maxLength={18}
          required
        />
        <div className="pw-forgot">
          <Link to="/pwforgot">Quên mật khẩu ?</Link>
        </div>
        <div className={`error ${errorStatus && "active"}`}>{error}</div>
        <button type="submit">Đăng nhập</button>
        <p>
          Chưa có tài khoản ? <Link to="/signup">Đăng ký</Link>
        </p>
        <p>Hoặc đăng nhập bằng</p>
        <div className="login-with">
          <img src="/images/fb.png" alt="Facebook" />
          <img src="/images/ins.png" alt="Instagram" />
          <img src="/images/gg.png" alt="Google" />
          <img src="/images/tiw.png" alt="Twitter" />
        </div>
      </form>
    </div>
  );
};

export default Login;
