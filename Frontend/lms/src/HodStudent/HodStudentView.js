import React from 'react';
import { useLocation } from 'react-router-dom';

const HodStudentView = () => {
  const location = useLocation();

  return (
    <>
    <div className='row row-cols-lg-3 row-cols-md-2 row-cols-1 p-0 m-0' style={{width:'100%',height:'100%'}}>
      <div className='col' style={{maxWidth:'25rem',minWidth:'15rem'}}>
      <div className="col-md-4 mb-3 container-fluid" >
              <div className="card" style={{maxWidth:'25rem',minWidth:'25rem'}}>
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center ">
                    <img src="https://mdbootstrap.com/img/new/avatars/7.jpg" alt="Admin" className="rounded-circle" width="150" />
                    <div className="mt-3">
                      <h4>kfjvkfjv</h4>
                      <div className='d-flex flex-row justify-items-center'>
                      <p className=" mb-1">Batch : </p><p> CSE-</p>
                      </div>
                      <p className=" font-size-sm">Email :</p>
                      <p className=" font-size-sm">Contact :</p>
                      <p className=" font-size-sm">Address : </p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>

      <div className='col' style={{maxWidth:'25rem',minWidth:'15rem'}}>
      <div className="col-md-4 mb-3 container-fluid" >
              <div className="card" style={{maxWidth:'25rem',minWidth:'25rem'}}>
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center ">
                    <img src="" alt="Admin" className="rounded-circle" width="150" />
                    <div className="mt-3">
                      <h4>kfjvkfjv</h4>
                      <div className='d-flex flex-row justify-items-center'>
                      <p className=" mb-1">Batch : </p><p> CSE-</p>
                      </div>
                      <p className=" font-size-sm">Email :</p>
                      <p className=" font-size-sm">Contact :</p>
                      <p className=" font-size-sm">Address : </p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>


      <div className='col' style={{maxWidth:'25rem',minWidth:'15rem'}}>
      <div className="col-md-4 mb-3 container-fluid" >
              <div className="card" style={{maxWidth:'25rem',minWidth:'25rem'}}>
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center ">
                    <img src="" alt="Admin" className="rounded-circle" width="150" />
                    <div className="mt-3">
                      <h4>kfjvkfjv</h4>
                      <div className='d-flex flex-row justify-items-center'>
                      <p className=" mb-1">Batch : </p><p> CSE-</p>
                      </div>
                      <p className=" font-size-sm">Email :</p>
                      <p className=" font-size-sm">Contact :</p>
                      <p className=" font-size-sm">Address : </p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </div>
    </>
  );
}

export default HodStudentView;
