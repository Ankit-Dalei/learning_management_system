import React, { useState } from 'react';
import './Login/Login.css';
import { Link } from 'react-router-dom';
// import { login } from './AuthService';

const Login = () => {
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

    // const response = await login(Username, Password);

    // if (response.success) {
    //   console.log('Login successful');
    // } else {
    //   console.log('Login failed:', response.error);
    // }

    // Reset the form
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
