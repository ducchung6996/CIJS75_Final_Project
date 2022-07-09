import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='login'>
        <form className='login-form'>
            <h1>Đăng ký</h1>
            <input className='user' name='user' type="text" placeholder='Nhập tên tài khoản'/>
            <input className='user' name='email' type="email" placeholder='Nhập địa chỉ email'/>
            <input className='user' name='pw' type="password" placeholder='Nhập mật khẩu'/>
            <input className='user' name='repw' type="password" placeholder='Nhập lại mật khẩu'/>
            <div className='error'>Error</div>
            <p>Bằng việc đăng ký bạn đã chấp nhận với <a>điều khoản sử dụng và chính sách bảo mật</a> của chúng tôi</p>
            <button type='submit'>Đăng ký</button>
            <p>Đã có tài khoản ? <Link to='/login'>Đăng nhập</Link></p>
        </form>
    </div>
  )
}

export default Signup