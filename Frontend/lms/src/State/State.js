import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const State = () => {
  return (
    <div className='container-fluid bg-secondary m-0 p-0' style={{height:'100vh' ,width:'100%'}}>
    <Navbar/>
    <div className="  d-flex flex-column bg-secondary m-0 p-0 overflow-auto"  >
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"></link>
      <div>
        <h1 className="text-center text-info my-5">
          ADMIN DASHBOARD
        </h1>
        <div className=" container-fluid bg-secondary d-flex flex-row d-lg-block d-none p-0 m-0" >
          <div className="row justify-content-center container-fluid p-0 m-0 " style={{height:'100%',width:'100%'}}>
            <Link to='/management_Assign' className="col-sm mx-5 nav-link " style={{ maxWidth: '400px' }}>
              <div >
              <div className="card " >
                <img src="globe.jpg" className="card-img-top" alt="..." height="200px" width/>
                <p className="card-text text-center ">Click here to add Management</p>
                <div className="card-body bg-primary">
                <h5 className="card-title text-center my-1 text-white">MANAGEMENT</h5>
                </div>
                
              </div>
            </div>
            </Link>
            
            <Link className="col-sm mx-5 nav-link" style={{ maxWidth: '400px' }}>
              <div >
              <div className="card " >
                <img src="123.png" className="card-img-top" alt="..." height="200px"/>
                <p className="card-text text-center">Click here to view Management</p>
                <div className="card-body bg-primary">
                  <h5 className="card-title text-center my-1 text-white">VIEW</h5>
                </div>
              </div>
             </div>
            </Link>
            <Link className="col-sm mx-5 nav-link" style={{ maxWidth: '400px' }}>
            <div >
              <div className="card" >
                <img src="report.jpg" className="card-img-top" alt="..." height="200px" />
                <p className="card-text text-center">Click here to view reports</p>
                <div className="card-body bg-primary">
                  <h5 className="card-title text-center text-white">REPORTS</h5>
                </div>
              </div>
            </div>
           </Link>
          </div>
        </div>
        <div className=" container-fluid d-flex justify-content-center d-block d-lg-none p-0 m-0 ">
          <div className="d-flex flex-column justify-content-center  row row-cols-1 p-0 m-0" >
            <Link to='/management_Assign' className="col   nav-link " >
            
              <div className="card " >
                <img src="globe.jpg" className="card-img-top " alt="..." height="200px" style={{ maxWidth: '100%' }}/>
                <p className="card-text text-center">Click here to add Management</p>
                <div className="card-body bg-primary">
                  <h5 className="card-title text-center my-1 text-white">MANAGEMENT</h5>
                </div>
              
            </div>
            </Link>
            <Link className="col py-4 nav-link " >
            <div >
              <div className="card " >
                <img src="123.png" className="card-img-top" alt="..." height="200px" style={{ maxWidth: '100%' }}/>
                <p className="card-text text-center">Click here to view Management</p>
                <div className="card-body bg-primary">
                  <h5 className="card-title text-center my-1 text-white">VIEW</h5>
                </div>
              </div>
            </div>
            </Link>
            <Link className="col py-4 nav-link" >
            <div >
              <div className="card" >
                <img src="report.jpg" className="card-img-top " alt="..." height="200px" style={{ maxWidth: '90%' }}/>
                <p className="card-text text-center">Click here to view reports</p>
                <div className="card-body bg-primary">
                  <h5 className="card-title text-center my-1 text-white">REPORTS</h5>
                </div>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
      
      <footer className="d-lg-block fixed-bottom d-none text-light bg-dark text-center ">
          &copy; 2024 Centurion University. All rights reserved.
      </footer>
      <footer className=" footer d-block d-lg-none text-light bg-dark text-center ">
          &copy; 2024 Centurion University. All rights reserved.
      </footer>
    </div>
    </div>
  );
}

export default State;
