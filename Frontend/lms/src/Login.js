import React from 'react'
import './Login/Login.css'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <>
      <div className="login_contaier">
        <div className="lc_inner">
          <div className="lcl_left"></div>
          <div className="lcl_right">
            <div className="lclr_inner">
              <div className="lclri_head">
                User Login
              </div>
              <div className="lclri_body">
                <div className="inp_lb_1">
                  <div className="il1_l">
                    u
                  </div>
                  <div className="il1_r">
                    <input type="text" placeholder="UserName"/>
                  </div>
                </div>
                <div className="inp_lb_1">
                  <div className="il1_l">p</div>
                  <div className="il1_r">
                    <input type="text" placeholder="Password"/>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login