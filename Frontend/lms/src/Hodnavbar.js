import React, { useState } from 'react';
import {NavLink} from 'react-router-dom'
const Hodnavbar = () => {
    // State to keep track of the current active page
    const [currentPage, setCurrentPage] = useState("Home");

    // Function to handle click on a nav link and update the current active page
    const handleNavLinkClick = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className='container-fluid p-0 m-0' style={{width:'100%'}}>
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
                            <li className="nav-item ">
                                
                               <NavLink to='/Hod' className='nav-link'>Home</NavLink>
                                
                            </li>
                            <li className="nav-item">
                                
                                <NavLink to='/Hodstudent' className='nav-link'>Student</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link' to="/Hodteacher">Teachers</NavLink>
                                {/* <a className={`nav-link ${currentPage === "Assign Teachers" ? "active" : ""}`} onClick={() => handleNavLinkClick("Assign Teachers")} aria-current="page" href="#">Assign Teachers</a> */}
                            </li>
                            <li className="nav-item">
                                {/* <a className={`nav-link ${currentPage === "Report" ? "active" : ""}`} onClick={() => handleNavLinkClick("Report")} aria-current="page" href="#">Report</a> */}
                                <NavLink to='/skkf' className='nav-link'>Batches & Courses</NavLink>
                            </li>
                            <li className="nav-item">
                                {/* <a className={`nav-link ${currentPage === "Check Progress" ? "active" : ""}`} onClick={() => handleNavLinkClick("Check Progress")} aria-current="page" href="#">Check Progress</a> */}
                                <NavLink to='/skkf' className='nav-link'>Assignment</NavLink>
                            </li>
                            
                            <li className="nav-item">
                                <NavLink to='/HodProfile' className='nav-link'>My Profile</NavLink>
                           
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Hodnavbar;
