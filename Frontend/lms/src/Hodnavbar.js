import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Hodnavbar = () => {
    const [activeLink, setActiveLink] = useState('/Hod'); 

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div className='container-fluid p-0 m-0' style={{ width: '100%' }}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-start">
                <div className="container-fluid ">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='d-block d-lg-none text-white'>
                        <img src="download2.jpg" className='img-thumbnail' alt="Bootstrap" width="30" height="24" />
                    </div>

                    <div className="collapse navbar-collapse flex-column" id="navbarTogglerDemo01">
                        <div className='d-none d-lg-block text-white' style={{ height: '80px' }}>
                            <img src="download2.jpg" className='img-thumbnail' alt="Bootstrap" width="40" height="10px" />
                            <hr className='bg-white' />
                        </div>

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-column">
                            <li className="nav-item">
                                <Link to='/Hod' className={`nav-link ${activeLink === '/Hod' ? 'active' : ''}`} onClick={() => handleLinkClick('/Hod')}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Hod/Student' className={`nav-link ${activeLink === '/Hod/Student' ? 'active' : ''}`} onClick={() => handleLinkClick('/Hod/Student')}>Student</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Hod/Teacher" className={`nav-link ${activeLink === '/Hod/Teacher' ? 'active' : ''}`} onClick={() => handleLinkClick('/Hod/Teacher')}>Teachers</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/skkf' className={`nav-link ${activeLink === '/skkf' ? 'active' : ''}`} onClick={() => handleLinkClick('/skkf')}>Batches & Courses</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/skkf' className={`nav-link ${activeLink === '/skkf' ? 'active' : ''}`} onClick={() => handleLinkClick('/skkf')}>Assignment</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Hod/Profile' className={`nav-link ${activeLink === '/Hod/Profile' ? 'active' : ''}`} onClick={() => handleLinkClick('/Hod/Profile')}>My Profile</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Hodnavbar;
