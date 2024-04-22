import React, { useState } from 'react';
import './Login/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { login } from './Service/AuthService';

const Login = () => {
  const navigate=useNavigate();
  const [userlog, setUserLog] = useState({
    Username: '',
    Password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserLog({ ...userlog, [name]: value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const { Username, Password } = userlog;

    if (Password.length < 5) {
      console.log('Password must be at least 5 characters long');
      return;
    }

    if (!Username) {
      console.log('Username cannot be empty');
      return;
    }

    const response = await login(Username, Password);

    if (response.success) {
      const roles = await response.role;
      // console.log(roles)
      const trimmed = roles.trim();
      trimmed.toString()
      const firstTwo = trimmed.substring(0, 2);
      // console.log(firstTwo)

        if (firstTwo === 'AD') {
          navigate('/admin');
        } else if (firstTwo === 'MT') {
          navigate('/management');
        } else if (firstTwo === 'Hod') {
          navigate('/Hod');
        } else if (firstTwo === 'Teacher') {
          navigate('/TeacherDashBoard');
        } else if (firstTwo === 'Student') {
          navigate('/stdash');
        } else {
          navigate('/');
        }
    } else {
      console.log('Login failed:', response.error);
    }
    setUserLog({ Username: '', Password: '' });
  };

  return (
    <>
      <div className="login_contaier">
        
        <div className="lc_inner">
          <div className="lcl_left"></div>
          <div className="lcl_right">
            <div className="lclr_inner">
              <div className="lclri_head">User Login</div>
              <form onSubmit={handleClick} className="lclri_body">
                <div className="inp_lb_1">
                  <div className="il1_l">
                    <i className="fa-solid fa-user"></i>
                  </div>
                  <div className="il1_r">
                    <input type="text" placeholder="UserName" name="Username" value={userlog.Username} onChange={handleChange} />
                  </div>
                </div>
                <div className="inp_lb_1">
                  <div className="il1_l">
                    <i className="fa-solid fa-lock"></i>
                  </div>
                  <div className="il1_r">
                    <input type="password" placeholder="Password" name="Password" value={userlog.Password} onChange={handleChange} />
                  </div>
                </div>
                <div className="inp_lb_11">
                  <div className="ill11_l">
                    {/* Signup */}
                  </div>
                  <div className="ill11_r">
                    <Link to={'/forgotpass'}>Forgot Password ?</Link>
                  </div>
                </div>
                <div className="inp_lb_12">
                  <button>Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Login;
