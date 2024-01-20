import React from 'react'
import './loginsignup.css'

import user_icon from '../assests/person.jpg'
import email_icon from '../assests/email.jpg'
import password_icon from '../assests/password.jpg'


const loginsignup = () => {
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>Sign Up</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            <div className='input'>
                <img src={user_icon} alt="" />
                <input type="text" />
            </div>
            <div className='input'>
                <img src={email_icon} alt="" />
                <input type="email" />
            </div>
            <div className='input'>
                <img src={password_icon} alt="" />
                <input type="password" />
            </div>
        </div>
        <div className='forget-password'>forget password! <span> Click here!</span></div>
        <div className="submit-container">
            <div className='submit'>Sign Up</div>
            <div className='submit'>Login</div>
        </div>
      
    </div>
  )
}

export default loginsignup
