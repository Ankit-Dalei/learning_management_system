import React, { useState } from 'react';
import './AssignPage.css'; // Ensure the correct file name here

function AssignPage() {
  const [testName, setTestName] = useState('');
  const [year, setYear] = useState('');
  const [branch, setBranch] = useState('');
  const [section, setSection] = useState('');
  const [assignedData, setAssignedData] = useState([]);
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "What is your name?",
      options: ["John", "Jane", "Doe", "Smith"],
      correctAnswer: "Johnn"
    },
    {
      id: 2,
      question: "What is 2+2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "4"
    },
    {
      id: 3,
      question: "What is the capital of France?",
      options: ["Madrid", "Paris", "Rome", "Berlin"],
      correctAnswer: "Paris"
    }
  ]);

  const handleAssign = () => {
    const newData = {
      year,
      branch,
      section
    };
    setAssignedData([...assignedData, newData]);
  };

  return (
    <div className="tmains">
    <div className="test-page">
      <div className="left-panel">
        <h2 className="test-title">Test 1</h2>
        {questions.map((q) => (
          <div key={q.id} className="card">
            <p>{q.question}</p>
            <ul>
              {q.options.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
            <p className={q.correctAnswer === "John" ? "correct-answer" : "incorrect-answer"}>Correct Answer: {q.correctAnswer}</p>
          </div>
        ))}
      </div>
      <div className="right-panel">
        <h3 className="assign-section">Assign Test</h3>
        <div>
          <label className="select-input">Year:</label>
          <select className="select-input" value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="">Select Year</option>
            <option value="1">First Year</option>
            <option value="2">Second Year</option>
            <option value="3">Third Year</option>
            <option value="4">Fourth Year</option>
          </select>
        </div>
        <div>
          <label className="select-input">Branch:</label>
          <select className="select-input" value={branch} onChange={(e) => setBranch(e.target.value)}>
            <option value="">Select Branch</option>
            <option value="CSE">Computer Science</option>
            <option value="ECE">Electronics</option>
            <option value="ME">Mechanical</option>
            <option value="CE">Civil</option>
          </select>
        </div>
        <div>
          <label className="select-input">Section:</label>
          <select className="select-input" value={section} onChange={(e) => setSection(e.target.value)}>
            <option value="">Select Section</option>
            <option value="A">Section A</option>
            <option value="B">Section B</option>
            <option value="C">Section C</option>
          </select>
        </div>
        <button className="assign-button" onClick={handleAssign}>Assign</button>
        <table className="data-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Branch</th>
              <th>Section</th>
            </tr>
          </thead>
          <tbody>
            {assignedData.map((data, index) => (
              <tr key={index}>
                <td>{data.year}</td>
                <td>{data.branch}</td>
                <td>{data.section}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default AssignPage;
