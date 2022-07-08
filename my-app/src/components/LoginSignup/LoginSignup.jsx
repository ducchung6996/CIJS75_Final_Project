import React from 'react'
import './LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='login-signup-container'>
        <div className='login-signup-form'>
            <button>Login</button>
            <button>Signup</button>
            <form className='login-form'>
                <input name='user' type="text"/>
            </form>
        </div>
    </div>
  )
}

export default LoginSignup