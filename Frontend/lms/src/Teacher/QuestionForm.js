
import React, { useState } from 'react';
import './QuestionForm.css';

const QuestionForm = ({ onSave }) => {
  const [testName, setTestName] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({
    question: '',
    options: ['', '', '', ''],
    correctAnswer: ''
  });

  const handleOptionChange = (index, value) => {
    const newOptions = [...currentQuestion.options];
    newOptions[index] = value;
    setCurrentQuestion({
      ...currentQuestion,
      options: newOptions
    });
  };

  const handleSaveQuestion = () => {
    setQuestions([...questions, currentQuestion]);
    setCurrentQuestion({
      question: '',
      options: ['', '', '', ''],
      correctAnswer: ''
    });
  };

  const handleSave = () => {
    onSave({ testName, questions });
  };

  return (
    <div className="tmains">
    <div className="question-form">
      <h2>Test Name:</h2>
      <input 
        type="text" 
        value={testName}
        onChange={(e) => setTestName(e.target.value)}
        placeholder="Enter test name..."
        className="test-name-input"
      />
      <h2>Add Questions</h2>
      {questions.map((question, index) => (
        <div key={index} className="question">
          <h3>Question {index + 1}</h3>
          <p>{question.question}</p>
          <ul>
            {question.options.map((option, optionIndex) => (
              <li key={optionIndex}>{option}</li>
            ))}
          </ul>
          <p>Correct Answer: {question.correctAnswer}</p>
        </div>
      ))}
      <div className="add-question">
        <h3>Add Question</h3>
        <label>
          Question:
          <input 
            type="text" 
            value={currentQuestion.question} 
            onChange={(e) => setCurrentQuestion({ ...currentQuestion, question: e.target.value })} 
          />
        </label>
        <div className="options-container">
          {currentQuestion.options.map((option, index) => (
            <label key={index}>
              Option {index + 1}:
              <input 
                type="text" 
                value={option} 
                onChange={(e) => handleOptionChange(index, e.target.value)} 
              />
            </label>
          ))}
        </div>
        <label>
          Correct Answer:
          <select 
            value={currentQuestion.correctAnswer} 
            onChange={(e) => setCurrentQuestion({ ...currentQuestion, correctAnswer: e.target.value })}
          >
            <option value="">Select correct answer</option>
            {currentQuestion.options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </label>
        <button onClick={handleSaveQuestion}>Add Question</button>
      </div>
      <button onClick={handleSave}>Save Questions</button>
    </div>
    </div>
  );
};

export default QuestionForm;
