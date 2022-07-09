import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  return (
    <div className='login'>
        <form className='login-form'>
            <h1>Đăng nhập</h1>
            <input className='user' name='user' type="text" placeholder='Nhập tên tài khoản hoặc email'/>
            <input className='pw' name='pw' type="password" placeholder='Nhập mật khẩu'/>
            <div className='pw-forgot'><Link to='/pwforgot'>Quên mật khẩu ?</Link></div>
            <div className='error'>Error</div>
            <button type='submit'>Đăng nhập</button>
            <p>Chưa có tài khoản ? <Link to='/signup'>Đăng ký</Link></p>
            <p>Hoặc đăng nhập bằng</p>
            <div className='login-with'>
                <a><img src="images/fb.png" alt="Facebook" /></a>
                <a><img src="images/ins.png" alt="Facebook" /></a>
                <a><img src="images/gg.png" alt="Facebook" /></a>
                <a><img src="images/tiw.png" alt="Facebook" /></a>
            </div>
        </form>
    </div>
)
}

export default Login