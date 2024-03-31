import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const State = () => {
  return (
    <>
    <Navbar/>
    <div className="  d-flex flex-column bg-secondary  "  >
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"></link>
      <div>
        <h1 className="text-center text-info my-5">
          ADMIN DASHBOARD
        </h1>
        <div className=" container-sm d-flex flex-row d-lg-block d-none bg-secondary my-1 py-3 ">
          <div className="row justify-content-center">
            <Link to='/Form' className="col-sm mx-5 nav-link" style={{ maxWidth: '400px' }}>
              <div >
              <div className="card " >
                <img src="pictures/globe.jpg" className="card-img-top" alt="..." height="200px" width/>
                <p className="card-text text-center ">Click here to add Management</p>
                <div className="card-body bg-primary">
                <h5 className="card-title text-center my-1">MANAGEMENT</h5>
                </div>
                
              </div>
            </div>
            </Link>
            
            <Link className="col-sm mx-5 nav-link" style={{ maxWidth: '400px' }}>
              <div >
              <div className="card " >
                <img src="pictures/123.png" className="card-img-top" alt="..." height="200px"/>
                <p className="card-text text-center">Click here to view Management</p>
                <div className="card-body bg-primary">
                  <h5 className="card-title text-center my-1">VIEW</h5>
                </div>
              </div>
             </div>
            </Link>
            <Link className="col-sm mx-5 nav-link" style={{ maxWidth: '400px' }}>
            <div >
              <div className="card" >
                <img src="pictures/report.jpg" className="card-img-top" alt="..." height="200px" />
                <p className="card-text text-center">Click here to view reports</p>
                <div className="card-body bg-primary">
                  <h5 className="card-title text-center ">REPORTS</h5>
                </div>
              </div>
            </div>
           </Link>
          </div>
        </div>
        <div className=" container d-flex flex-column bg-secondary d-block d-lg-none my-1 ">
          <div className="col justify-content-center">
            <Link to='/Form' className="col-sm py-4 nav-link" style={{ maxWidth: '400px' }}>
            <div>
              <div className="card " >
                <img src="pictures/globe.jpg" className="card-img-top" alt="..." height="200px" style={{ maxWidth: '100%' }}/>
                <p className="card-text text-center">Click here to add Management</p>
                <div className="card-body bg-primary">
                  <h5 className="card-title text-center my-1">MANAGEMENT</h5>
                </div>
              </div>
            </div>
            </Link>
            <Link className="col-sm py-4 nav-link" style={{ maxWidth: '400px' }}>
            <div >
              <div className="card " >
                <img src="pictures/123.png" className="card-img-top" alt="..." height="200px" style={{ maxWidth: '100%' }}/>
                <p className="card-text text-center">Click here to view Management</p>
                <div className="card-body bg-primary">
                  <h5 className="card-title text-center my-1">VIEW</h5>
                </div>
              </div>
            </div>
            </Link>
            <Link className="col-sm py-4 nav-link" style={{ maxWidth: '400px' }}>
            <div >
              <div className="card" >
                <img src="pictures/report.jpg" className="card-img-top " alt="..." height="200px" style={{ maxWidth: '90%' }}/>
                <p className="card-text text-center">Click here to view reports</p>
                <div className="card-body bg-primary">
                  <h5 className="card-title text-center ">REPORTS</h5>
                </div>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
      
      
      <footer className="footer mb-3 pb-3 mt-auto text-light text-center">
        <div className="container bg-secondary">
          &copy; 2024 Your Company Name. All rights reserved.
        </div>
      </footer>
    </div>
    </>
  );
}

export default State;
