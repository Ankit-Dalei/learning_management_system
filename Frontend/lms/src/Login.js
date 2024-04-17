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

    if (Password.length < 8) {
      console.log('Password must be at least 8 characters long');
      return;
    }

    if (!Username) {
      console.log('Username cannot be empty');
      return;
    }

    const response = await login(Username, Password);

    if (response.success) {
      const roles = await response.role.roleName;
      console.log(roles)

        if (roles === 'Admin') {
          navigate('/admin');
        } else if (roles === 'Management') {
          navigate('/management');
        } else if (roles === 'Hod') {
          navigate('/Hod');
        } else if (roles === 'Teacher') {
          navigate('/TeacherDashBoard');
        } else if (roles === 'Student') {
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
