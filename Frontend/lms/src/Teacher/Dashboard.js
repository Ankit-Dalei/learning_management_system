// Dashboard.js
import React from 'react';
// import TestForm from './TestForm';
// import TestList from './TestList'; // Placeholder for test viewing component
// import AttendanceTracker from './AttendanceTracker'; // Placeholder for attendance tracking component
// import './Dashboard.css';

// const Dashboard = () => {
//   return (
//     <div className="dashboard-container">
//       <h1>Welcome, Teacher!</h1>
//       <div className="dashboard-content">
//         <div className="dashboard-box">
//           <h2>Create Test</h2>
//           {/* <TestForm /> */}
//         </div>
//         <div className="dashboard-box">
//           <h2>Tests</h2>
//           {/* <TestList /> */}
//         </div>
//         <div className="dashboard-box">
//           <h2>Attendance Tracker</h2>
//           {/* <AttendanceTracker /> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Welcome, Teacher!</h1>
      <div className="dashboard-content">
        <div className="dashboard-box">
          <h2>Create Test</h2>
          <div className="dashboard-box-content">
            <p>Create and manage tests for your students.</p>
            <button>Create Test</button>
          </div>
        </div>
        <div className="dashboard-box">
          <h2>Tests</h2>
          <div className="dashboard-box-content">
            <p>View and manage existing tests.</p>
            <button>View Tests</button>
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
