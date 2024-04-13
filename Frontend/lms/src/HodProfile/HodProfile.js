import React from 'react';
import { Link } from 'react-router-dom';

const HodProfile = () => {
  return (
    <div className='hodprofile container-fluid d-flex p-4 flex-column  text-light justify-content-center overflow-auto' style={{ height: '100%', width: '100%'}}>
      <h4 className='text-center m-4 p-4'>ASHISH MOHANTY</h4>
      <div className='container-fluid d-flex justify-content-center row m-0 py-4' style={{ height: '100%', width: '100%' }}>
        <div className='col-md-4 d-flex justify-content-center'>
          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" title="" className='rounded-circle img-fluid' alt="" style={{ height: '10rem' }} />
        </div>
        <div className='col-md-8'>
          <div className='row'>
            <div className='col-md-6 col-12 d-flex flex-column'>
              <div className='col'>
                <label htmlFor="">Role:</label>
                <p>hod</p>
              </div>
              <div className='col'>
                <label htmlFor="">AGE:</label>
                <p>age</p>
              </div>
              <div className='col'>
                <label htmlFor="">DATE OF BIRTH:</label>
                <p>DAY MONTH YEAR</p>
              </div>
            </div>
            <div className='col-md-6 col-12 d-flex flex-column'>
              <div className='col'>
                <label htmlFor="">Phone No:</label>
                <p>84508045084</p>
              </div>
              <div className='col'>
                <label htmlFor="">EMAIL:</label>
                <p>sdkvsdjvdj@gmail.com</p>
              </div>
              <div className='col'>
                <label htmlFor="">Address:</label>
                <p>address</p>
              </div>
              <div className='col'>
                <label htmlFor="">GIT HUB:</label>
                <p>link</p>
              </div>
            </div>
          </div>
       
        </div>
        <div className='row   d-flex justify-content-center  py-4 my-4'>
            
            <button className='col-lg-2 col-6 btn  btn-warning ml-2 mb-4'>Update</button>
          </div>
      </div>
    </div>
  );
}

export default HodProfile;
