import React from 'react';
import { Link } from 'react-router-dom';


const AdminDashboard = () => {
  return (
    <div className="container-fluid mx-0 my-1 p-0 d-flex justify-content-center align-items-center" style={{height:'100%',width:'100%'}}>
      <div className="row  container-fluid  m-0 p-0 d-flex justify-content-center align-items-center" style={{height:'100%',width:'100%'}}>
        <div className=" container-fluid col-lg-4 col-md-6 col-sm-12 mb-3 bg-secondary d-flex justify-content-center">
          <div className="card shadow-sm" style={{width:'400px'}}>
            
            <img src="admin1.png" className="card-img-top img-fluid" alt="Card image" style={{height:'190px',width:'400px'}}/>
            <div className="card-body d-flex justify-content-center align-items-center">
              <Link to='add_management'><h4 className="card-title">MANAGEMENT</h4></Link>
            
            </div>
          </div>
        </div>
        <div className=" container-fluid col-lg-4 col-md-6 col-sm-12 mb-3 d-flex justify-content-center">
          <div className="card shadow-sm" style={{width:'400px'}}>
            
            <img src="admin2.jpg" className="card-img-top img-fluid" alt="Card image" style={{height:'190px',width:'400px'}} />
            <div className="card-body d-flex justify-content-center align-items-center">
            <Link to='/admin/admintable'><h4 className="card-title">VIEW</h4></Link>
              
            </div>
          </div>
        </div>
        <div className="container-fluid col-lg-4 col-md-6 col-sm-12 mb-3 d-flex justify-content-center" >
          <div className="card shadow-sm " style={{width:'400px',marginBottom:'10px'}}>
            
            <img src="admin3.jpg" className="card-img-top img-fluid" alt="Card image" style={{height:'190px',width:'400px'}}/>
            <div className="card-body d-flex justify-content-center align-items-center">
            <Link to='..'><h4 className="card-title">REPORTS</h4></Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
