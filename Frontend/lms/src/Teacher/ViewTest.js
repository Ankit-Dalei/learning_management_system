

import React, { useState } from 'react';
import './ViewTest.css';

const ViewTest = () => {
  
  const [tests, setTests] = useState([
    { id: 1, name: 'Test 1', passedStudents: 45, leftStudents: 18, failedStudents: 10 },
    { id: 2, name: 'Test 2', passedStudents: 55, leftStudents: 15, failedStudents: 10 },
    { id: 3, name: 'Test 3', passedStudents: 60, leftStudents: 8, failedStudents: 7 },
    { id: 4, name: 'Test 4', passedStudents: 55, leftStudents: 18, failedStudents: 10 },
    { id: 5, name: 'Test 5', passedStudents: 55, leftStudents: 17, failedStudents: 10 },
    { id: 6, name: 'Test 6', passedStudents: 60, leftStudents: 8, failedStudents: 7 },
  ]);

  return (
    
    <div className="view-test-container">
      <h1>View Tests</h1>
      <div className="test-list">
        {tests.map(test => (
          <div key={test.id} className="test-card">
            <h2>{test.name}</h2>
            <div className="bar-chart">
              <div className="bar passed-bar" style={{ width: `${(test.passedStudents / (test.passedStudents + test.leftStudents + test.failedStudents)) * 100}%` }}></div>
              <div className="bar left-bar" style={{ width: `${(test.leftStudents / (test.passedStudents + test.leftStudents + test.failedStudents)) * 100}%` }}></div>
              <div className="bar failed-bar" style={{ width: `${(test.failedStudents / (test.passedStudents + test.leftStudents + test.failedStudents)) * 100}%` }}></div>
            </div>
            <div className="stats">
              <p>Total Students: {test.passedStudents + test.leftStudents + test.failedStudents}</p>
              <p>Passed: {test.passedStudents}</p>
              <p>Left: {test.leftStudents}</p>
              <p>Failed: {test.failedStudents}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default ViewTest;
