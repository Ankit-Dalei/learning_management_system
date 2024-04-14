
import React, { useState } from 'react';
import './TestForm.css';
import { Link } from 'react-router-dom';

const TestForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [testName, setTestName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Test:', { selectedOption, testName });
    setTestName('');
  };

  return (
    <div className="tmains">
    <div className="test-form-container">
      <h2>Create Test</h2>
      <form onSubmit={handleSubmit}>
        <div className="test-type-box">
          <h3>Choose Test Type</h3>
          <div 
            className={`option ${selectedOption === 'multiple-choice' && 'selected'}`}
            onClick={() => setSelectedOption('multiple-choice')}
          >
            <span><Link to={'/TeacherDashBoard/questionform'}>Multiple Choice Question Test</Link></span>
          </div>
          <div 
            className={`option ${selectedOption === 'coding' && 'selected'}`}
            onClick={() => setSelectedOption('coding')}
          >
            <span>Coding Test</span>
          </div>
        </div>
        
        
      </form>
    </div>
    </div>
  );
};

export default TestForm;
