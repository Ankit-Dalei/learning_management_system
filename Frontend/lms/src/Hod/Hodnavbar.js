import React, { useState, useEffect } from 'react';
import { Link, useLocation, NavLink, useNavigate } from 'react-router-dom';

const Hodnavbar = () => {
    const navigate=useNavigate();
    const location = useLocation();
    const [collapsed, setCollapsed] = useState(true);

    const closeNav = () => {
        setCollapsed(true);
    };

    return (
        <div className='container-fluid p-0 m-0' style={{ width: '100%', height: '100%' }}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-start">
                <div className="container-fluid">
                    <button className="navbar-toggler mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setCollapsed(!collapsed)}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='d-block d-lg-none text-white'>
                        <img src='https://i.ibb.co/nbK7XH8/download.jpg' className='img-thumbnail' alt="Bootstrap" width="30" height="24" />
                    </div>

                    <div className={`collapse navbar-collapse flex-column ${collapsed ? '' : 'show'}`} id="navbarTogglerDemo01">
                        <div className='d-none d-lg-block text-white' style={{ height: '80px' }}>
                            <img src='https://i.ibb.co/nbK7XH8/download.jpg' className='img-thumbnail' alt="Bootstrap" width="40" height="10px" />
                            <hr className='bg-white' />
                        </div>

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-column" onClick={closeNav}>
                            <li className='nav-item'>
                                <NavLink to='/Hod' className='nav-link' end>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/Hod/Student' className='nav-link'>Student</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Hod/Teacher" className='nav-link'>Teachers</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/Hod/Batch' className='nav-link'>Batches & Courses</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/Hod/Assignment' className='nav-link'>Assignment</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink to='/Hod/Profile' className='nav-link text-break'>My Profile</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink to='/' className='nav-link'>Logout</NavLink>
                            </li>
                            {/* <li className='nav-item d-lg-block d-none'>
                                    
                                    <select className="nav-link bg-dark border-dark">
                                        <option onClick={()=>{navigate('/Hod/Profile')}}><NavLink className='nav-link' to='/Hod/Profile'>Hod@gmail.com</NavLink></option>
                                        <option onClick={()=>{navigate('/')}}>Logout</option>
                                        
                                    </select>
                               
                            </li> */}

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Hodnavbar;
