import React from 'react';
import { Link } from 'react-router-dom';

const HodProfile = () => {
  return (
    <section className="d-flex justify-content-center align-items-center  text-dark " id="about" style={{height:'100%',backgroundColor:'#8a2be2'}}>
    
    <div className="container">
    <h5 className="text-light text-center mb-4">ASHISH MOHANTY</h5>
      <div className="mt-4 row align-items-center flex-row-reverse ">
        <div className="col-lg-6">
          <div className="about-text go-to">
            
            <div className="row about-list">
              <div className="col-md-6">
                <div className="media">
                  <label>Birthday</label>
                  <p>4th april 1998</p>
                </div>
                <div className="media">
                  <label>Age</label>
                  <p>22 Yr</p>
                </div>
                <div className="media">
                  <label>Residence</label>
                  <p>Canada</p>
                </div>
                <div className="media">
                  <label>Address</label>
                  <p>California, USA</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="media">
                  <label>E-mail</label>
                  <p>info@domain.com</p>
                </div>
                <div className="media">
                  <label>Phone</label>
                  <p>820-885-3321</p>
                </div>
                <div className="media">
                  <label>Skype</label>
                  <p>skype.0404</p>
                </div>
                <div className="media">
                  <label>Freelance</label>
                  <p>Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="d-flex justify-content-center" >
            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" title="" className='rounded-circle img-fluid ' alt="" style={{height:'10rem'}}/>
          </div>
        </div>
      </div>
    
      <div className='container d-flex justify-content-center'>
        
        <Link to="/" className='btn btn-danger m-3' >Logout</Link>
        <button className='btn btn-warning m-3'>Update</button>
      </div>
    </div>
  </section>
  );
}

export default HodProfile;
