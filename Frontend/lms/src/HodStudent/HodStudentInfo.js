import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const HodStudentInfo = () => {
    const location=useLocation();
    const navigate=useNavigate();
    const data=location.state?.data || 'No data Received';
    const[name,img,email,phone,address,batch,section]=data;
  return (
    
    <div className='p-4'>
    <button className='btn' onClick={() => {
       navigate('/Hod/Student');
    }}>
        <i className="fa-solid fa-arrow-left mb-3" style={{ color: 'red' }}></i>
    </button>
    <div className='overflow-auto text-dark d-flex justify-content-center align-items-center' style={{ height: '100%' }}>

        <div className="container">
            <div className="main-body container-fluid">
                <div className="container-fluid row" style={{ height: '100%', width: '100%' }}>
                    <div className="col-md-4 mb-3" style={{ height: '25rem', width: '20rem' }}>
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center ">
                                    <img src={img} alt="Admin" className="rounded-circle" width="150" />
                                    <div className="mt-3">
                                        <h4>{name}</h4>
                                        <div className='d-flex flex-row justify-items-center'>
                                            <p className=" mb-1">Batch : </p><p>{batch} CSE-{section}</p>
                                        </div>
                                        <p className=" font-size-sm">Email : {email}</p>
                                        <p className=" font-size-sm">Contact : {phone}</p>
                                        <p className=" font-size-sm">Address : {address}</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8" style={{ height: '24rem', width: '20rem' }}>

                        <div className="col-sm-6 mb-3 container-fluid" style={{ height: '24rem', width: '20rem' }}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <h6 className="d-flex align-items-center mb-1"><i className="material-icons text-info mr-2">SUBJECT PROGRESSION</i></h6>
                                    <small>C</small>
                                    <div className="progress mb-1" style={{ height: '5px' }}>
                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <small>Python</small>
                                    <div className="progress 1" style={{ height: '5px' }}>
                                        <div className="progress-bar bg-secondary" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <small>Data Structure</small>
                                    <div className="progress 1" style={{ height: '5px' }}>
                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: '72%' }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <small>Java</small>
                                    <div className="progress 1" style={{ height: '5px' }}>
                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: '89%' }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>


</div>
  )
}

export default HodStudentInfo
