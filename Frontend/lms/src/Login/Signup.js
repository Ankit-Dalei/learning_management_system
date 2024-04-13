import React from 'react'
import './Login.css'

const Signup = () => {
  return (
    <>
    <div className="login_contaier">
      <div className="lc_inner">
        <div className="lcl_left"></div>
        <div className="lcl_right">
          <div className="lclr_inner">
            <div className="lclri_head">
              Forgot Password
            </div>
            <div className="lclri_bodys">
              {/* <div className="inp_lb_1">
                <div className="il1_l">
                  u
                </div>
                <div className="il1_r">
                  <input type="text" placeholder="UserName"/>
                </div>
              </div> */}
              <div className="inp_lb_1">
                <div className="il1_l">
                <i class="fa-solid fa-envelope"></i>
                </div>
                <div className="il1_r">
                  <input type="text" placeholder="Email"/>
                </div>
              </div>
              <div className="inp_lb_1">
                <div className="il1_l">
                <i class="fa-solid fa-lock"></i>
                </div>
                <div className="il1_r">
                  <input type="text" placeholder="Password"/>
                </div>
              </div>
              <div className="inp_lb_1">
                <div className="il1_l">
                <i class="fa-solid fa-lock"></i>
                </div>
                <div className="il1_r">
                  <input type="text" placeholder="Re-Password"/>
                </div>
              </div>
              <div className="inp_lb_12">
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Signup