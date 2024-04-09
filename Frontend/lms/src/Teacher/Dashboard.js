
import React from 'react';



import './Dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Welcome, Teacher!</h1>
      <div className="dashboard-content">
        <div className="dashboard-box">
          <h2>Create Test</h2>
          <div className="dashboard-box-content">
            <p>Create and manage tests for your students.</p>
            <Link to={'testform'}><button>Create Test</button></Link>
          </div>
        </div>
        <div className="dashboard-box">
          <h2>Tests</h2>
          <div className="dashboard-box-content">
            <p>View and manage existing tests.</p>
            <Link to={'viewtest'}><button>View Tests</button></Link>
          </div>
        </div>
        <div className="dashboard-box">
          <h2>Attendance Tracker</h2>
          <div className="dashboard-box-content">
            <p>Track attendance of your students.</p>
            <button>Track Attendance</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
