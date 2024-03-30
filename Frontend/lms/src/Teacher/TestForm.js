// TestForm.js
import React, { useState } from 'react';
import './TestForm.css';

const TestForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [testName, setTestName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Test:', { selectedOption, testName });
    setTestName('');
  };

  return (
    <div className="test-form-container">
      <h2>Create Test</h2>
      <form onSubmit={handleSubmit}>
        <div className="test-type-box">
          <h3>Choose Test Type</h3>
          <div 
            className={`option ${selectedOption === 'multiple-choice' && 'selected'}`}
            onClick={() => setSelectedOption('multiple-choice')}
          >
            <span>Multiple Choice Question Test</span>
          </div>
          <div 
            className={`option ${selectedOption === 'coding' && 'selected'}`}
            onClick={() => setSelectedOption('coding')}
          >
            <span>Coding Test</span>
          </div>
        </div>
        
        <button type="submit">Add Test</button>
      </form>
    </div>
  );
};

export default TestForm;
