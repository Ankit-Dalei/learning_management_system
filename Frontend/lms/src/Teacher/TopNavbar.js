import React, { useState } from 'react';
import './TopNavbar.css';
import 'primeicons/primeicons.css';
import { Link, Outlet } from 'react-router-dom'
import Footer from './Footer';

function TopNavbar() {
  const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);

  const toggleProfile = () => {
    setProfileDropdownVisible(!profileDropdownVisible);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">Centurion University </div>
        <div className="navbar-buttons">
          <button className="profile-btn" onClick={toggleProfile}><i className="pi pi-user" style={{ fontSize: '1.5rem' }}></i></button>
          {profileDropdownVisible && (
            <div className="dropdown">
              <button className="dropdown-item" onClick={() => {}}>Edit Profile</button>
            </div>
          )}
          <button className="button-24">Logout</button>
        </div>
      </nav>
      <div className='low'>
        <div className="left">
          <button className='option-button'><Link to={'/TeacherDashBoard'}>Home</Link></button>
          <button className='option-button'><Link to={'testform'}>Add Test</Link></button>
          <button className='option-button'><Link to={'edittest'}>Edit Test</Link></button>
          <button className='option-button'><Link to={'viewtest'}>View Test</Link></button>
          
          <button className='option-button'><Link to={'assigntest'}>Assign Test</Link></button>
          <button className='option-button'><Link to={''}>Report</Link></button>
        </div>
        <div className="right"></div>
      </div>
      <Outlet/>

      <Footer/>
    </div>

    
    
  );
}

export default TopNavbar;