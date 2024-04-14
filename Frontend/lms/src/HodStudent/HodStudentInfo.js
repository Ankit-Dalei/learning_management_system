import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const HodStudentInfo = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state?.data || 'No data Received';
    const [name, img, email, phone, address, batch, section] = data;
    return (
        <div className='container-fluid  py-2 m-0 my-4'>
            <button className='btn ps-lg-4' onClick={() => navigate('/Hod/Student')}>
                <i className="fa-solid fa-arrow-left mb-3" style={{ color: 'red' }}></i>
            </button>
            <div className='row row-cols-lg-2 row-cols-1  container-fluid m-0 p-0' style={{ width: '100%' }}>
                <div className='col'>
                    <div className='text-white bg-dark'>

                        <div className="card">
                            <img src={img} className="card-img-top" alt={name} />
                            <div className="card-body text-white bg-dark">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">BATCH: {batch} <span>Section: {section}</span></p>
                                <p className="card-text">Email: {email}</p>
                                <p className="card-text">Phone: {phone}</p>
                                <p className="card-text">Address: {address}</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='col bg-danger'>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '10%' }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                </div>
                <div className='col bg-light'>
                    ankit maghia
                </div>
            </div>
        </div>
    )
}

export default HodStudentInfo
