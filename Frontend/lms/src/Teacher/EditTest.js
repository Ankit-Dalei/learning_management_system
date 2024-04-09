

import React, { useState } from 'react';
import './EditTest.css';

const EditTest = () => {
 
  const [tests, setTests] = useState([
    { id: 1, name: 'Test 1' },
    { id: 2, name: 'Test 2' },
    { id: 3, name: 'Test 3' },
    { id: 4, name: 'Test 4' },
    { id: 5, name: 'Test 5' },
  ]);

  const [selectedTestId, setSelectedTestId] = useState(null);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [questions, setQuestions] = useState([]);

  const handleEdit = (testId) => {
    setSelectedTestId(testId);
    setEditModalVisible(true);
    
    setQuestions([
      { id: 1, question: 'What is 2 + 2?', options: ['3', '4', '5', '6'], correctAnswer: '4' },
      { id: 2, question: 'What is the capital of France?', options: ['London', 'Paris', 'Berlin', 'Rome'], correctAnswer: 'Paris' },
    ]);
  };

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    setQuestions(updatedQuestions);
  };

  const handleSave = () => {
    
    console.log('Questions saved:', questions);
    setEditModalVisible(false);
  };

  return (
    <div className="edit-test-container">
      <h1>Edit Tests</h1>
      <div className="test-list">
        {tests.map(test => (
          <div key={test.id} className="test-item">
            <span>{test.name}</span>
            <div className="button-group">
              <button className='edit-button' onClick={() => handleEdit(test.id)}>Edit</button>
              <button className='delete-button'>Delete</button>
            </div>
          </div>
        ))}
      </div>
      {/* Edit modal */}
      {editModalVisible && (
        <div className="edit-modal">
          <h2>Edit Test</h2>
          {questions.map((question, index) => (
            <div key={question.id} className="question">
              <h3>Question {index + 1}</h3> 
              <input type="text" value={question.question} onChange={(e) => handleQuestionChange(index, 'question', e.target.value)} />
              {question.options.map((option, optionIndex) => (
                <input key={optionIndex} type="text" value={option} onChange={(e) => handleQuestionChange(index, 'options', [...question.options.slice(0, optionIndex), e.target.value, ...question.options.slice(optionIndex + 1)])} />
              ))}
              <div className="correct-answer">
                <h4>Correct Answer</h4>
                <input type="text" value={question.correctAnswer} onChange={(e) => handleQuestionChange(index, 'correctAnswer', e.target.value)} />
              </div>
            </div>
          ))}
          <button onClick={handleSave}>Save</button>
        </div>
      )}
    </div>
  );
};

export default EditTest;
