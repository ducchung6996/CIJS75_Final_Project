import React from 'react'

const PwForgot = () => {
  return (
    <div className='login'>
        <form className='login-form'>
            <h1>Khôi phục mật khẩu</h1>
            <input className='user' name='user' type="text" placeholder='Nhập tên tài khoản'/>
            <input className='user' name='email' type="email" placeholder='Nhập địa chỉ email'/>
            <input className='user' name='pw' type="password" placeholder='Nhập mật khẩu'/>
            <input className='user' name='repw' type="password" placeholder='Nhập lại mật khẩu'/>
            <div className='error'>Error</div>
            <button type='submit'>Đổi mật khẩu</button>
        </form>
    </div>
  )
}

export default PwForgot