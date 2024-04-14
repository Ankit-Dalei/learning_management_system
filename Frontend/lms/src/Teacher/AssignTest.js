import React from 'react';
import './AssignTest.css';
import { Link } from 'react-router-dom';

function TestCard({ testName, numQuestions, onAssign }) {
  return (
    <div className="ttest-card">
      <h2>{testName}</h2>
      <p>Number of questions: {numQuestions}</p>
      <Link to={'/TeacherDashBoard/assignpage'}><button onClick={() => onAssign(testName)}>Assign Test</button></Link> 
    </div>
  );
}

function AssignTest() {
  const tests = [
    { name: "Test1", numQuestions: 10 },
    { name: "Test2", numQuestions: 15 },
    { name: "Test3", numQuestions: 20 },
    { name: "Test4", numQuestions: 20 },
    { name: "Test5", numQuestions: 10 },
    { name: "Test6", numQuestions: 15 }
  ];

  function handleAssignTest(testName) {
    // Add your logic here for assigning the test
    console.log(`Assigning test: ${testName}`);
  }

  return (
    <div className="tmains">
      <div className="test-page">
        {tests.map((test, index) => (
          <TestCard
            key={index}
            testName={test.name}
            numQuestions={test.numQuestions}
            onAssign={handleAssignTest}
          />
        ))}
      </div>
    </div>
  );
}

export default AssignTest;
