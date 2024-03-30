import React, { useState } from 'react';
import './TopNavbar.css';
import 'primeicons/primeicons.css';

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
          <button className='option-button'>Home</button>
          <button className='option-button'>Add Test</button>
          <button className='option-button'>Edit Test</button>
          <button className='option-button'>View Test</button>
          <button className='option-button'>Report</button>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default TopNavbar;