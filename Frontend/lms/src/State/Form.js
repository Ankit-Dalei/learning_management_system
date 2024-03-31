import React, { useState } from 'react'
import './Form.css'
import { Link } from 'react-router-dom';
import user_icon from './person.png'
import email_icon from './email.png'
import password_icon from './password.png'

const Form = () => {
  
    
 
  return (
    
    <div >
    <div className="container my-1 " >
     <div className='header'>
        <div className="text">Add Management</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt=""/>
          <input type="text" placeholder="Name"  />
        </div>
        <div className="input">
          <img src={user_icon} alt=""/>
          <input type="text" placeholder="Phone Number"  />
        </div>
        <div className="input">
          <img src={user_icon} alt=""/>
          <input type="text" placeholder="Role"  />
        </div>
        <div className="input">
          <img src={email_icon} alt=""/>
          <input type="email" placeholder="Email "   />
        </div>
        <div className="input">
          <img src={password_icon} alt=""/>
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <Link to='/' className='nav-link'>
      <div className="submit-container d-flex justify-content-center">
      <div className="submit">Submit</div>
      </div>
      </Link>      
    </div>
    </div>
    
  )
}

export default Form