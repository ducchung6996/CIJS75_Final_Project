import React from 'react'
import './LoginSignup.css'
import {BsFacebook} from 'react-icons/bs'

const LoginSignup = () => {
  return (
    <div className='login-signup-container'>
        <div className='login-signup-form'>
            <button>Đăng nhập</button>
            <button>Đăng ký</button>
            <form className='login-form'>
                <input className='user' name='user' type="text" placeholder='Tên tài khoản hoặc email'/>
                <input className='pw' name='pw' type="password" placeholder='Nhập mật khẩu'/>
                <a className='pw-forgot'>Quên mật khẩu ?</a>
                <div className='error'>Error</div>
                <button type='submit'>Đăng nhập</button>
                <p>Hoặc đăng nhập bằng</p>
                <div>
                  <a><BsFacebook/></a>
                  <a><BsFacebook/></a>
                  <a><BsFacebook/></a>
                  <a><BsFacebook/></a>
                </div>
            </form>
            <form className='signup-form'>
                <input className='user' name='user' type="text" placeholder='Tên tài khoản hoặc email'/>
                <input className='pw' name='pw' type="password" placeholder='Nhập mật khẩu'/>
                <a className='pw-forgot'>Quên mật khẩu ?</a>
                <div className='error'>Error</div>
                <button type='submit'>Đăng nhập</button>
                <p>Hoặc đăng nhập bằng</p>
                <div>
                  <a><BsFacebook/></a>
                  <a><BsFacebook/></a>
                  <a><BsFacebook/></a>
                  <a><BsFacebook/></a>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginSignup