import React, { useState, useEffect } from 'react';
import { Link, useLocation,NavLink } from 'react-router-dom';

const Hodnavbar = () => {
    const [activeLink, setActiveLink] = useState('');
    const location = useLocation();

    useEffect(() => {
        // Set the active link based on the current pathname
        setActiveLink(location.pathname);
    }, [location.pathname]);

    return (
        <div className='container-fluid p-0 m-0' style={{ width: '100%' }}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-start">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='d-block d-lg-none text-white'>
                        <img src='https://i.ibb.co/nbK7XH8/download.jpg' className='img-thumbnail' alt="Bootstrap" width="30" height="24" />
                    </div>

                    <div className="collapse navbar-collapse flex-column" id="navbarTogglerDemo01">
                        <div className='d-none d-lg-block text-white' style={{ height: '80px' }}>
                            <img src='https://i.ibb.co/nbK7XH8/download.jpg' className='img-thumbnail' alt="Bootstrap" width="40" height="10px" />
                            <hr className='bg-white' />
                        </div>

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-column">
                            <li className="nav-item">
                                <NavLink to='/Hod/Home' className='nav-link'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/Hod/Student' className='nav-link'>Student</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Hod/Teacher" className='nav-link'>Teachers</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/skkf' className='nav-link'>Batches & Courses</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/skkf' className='nav-link'>Assignment</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/Hod/Profile' className='nav-link'>My Profile</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Hodnavbar;
