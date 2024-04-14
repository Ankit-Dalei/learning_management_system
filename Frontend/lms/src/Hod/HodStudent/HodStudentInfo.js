import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const HodStudentInfo = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state?.data || 'No data Received';
    const [name, img, email, phone, address, batch, section] = data;

    return (
        <div className='container-fluid py-2 m-0 my-4'>
            <button className='btn ps-lg-4' onClick={() => navigate('/Hod/Student')}>
                <i className="fa-solid fa-arrow-left mb-3" style={{ color: 'red' }}></i>
            </button>
            <div className='row row-cols-lg-2 row-cols-1 d-flex justify-content-evenlycontainer-fluid m-0 p-0' style={{ width: '100%' }}>
                <div className='col bg-light p-0 m-0 d-flex justify-content-evenly' style={{ maxWidth: '30rem', maxHeight: '40rem',minHeight:'10rem' }}>
                    <div className='text-white bg-success' style={{ width: '100%', height: '100%' }}>
                        <div className="card bg-primary" style={{ width: '100%', height: '100%' }}>
                            <img src={img} className="card-img-top" alt={name} style={{ width: '100%', minHeight: '35%',maxHeight:'60%' }} />
                            <div className="card-body text-white bg-dark" style={{ width: '100%', height: '50%' }}>
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">BATCH: {batch} <span>Section: {section}</span></p>
                                <p className="card-text">Email: {email}</p>
                                <p className="card-text">Phone: {phone}</p>
                                <p className="card-text">Address: {address}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col bg-danger' style={{ width: '30rem', height: '40rem' }}>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '10rem' }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    {/* Additional progress bars */}
                </div>
                <div className='col bg-light' style={{ width: '30rem', height: '40rem' }}>
                    
                </div>
            </div>
        </div>
    );
};

export default HodStudentInfo;
